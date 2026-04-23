---
title: 'สอนสร้าง REST API ด้วย Express 5 + PostgreSQL ฉบับปี 2026: คู่มือ CRUD ฉบับสมบูรณ์'
seoTitle: 'คู่มือ Express 5 PostgreSQL REST API CRUD 2026 - Warongkon Blog'
slug: 'express-5-postgresql-book-crud-2026'
description: 'ยกระดับการพัฒนา API ด้วยการเชื่อมต่อ Express 5 กับ PostgreSQL สอนสร้างระบบจัดการหนังสือ (Book Store) แบบ Step-by-Step'
pubDate: '2026-04-24'
tags: ["Node.js", "Express 5", "PostgreSQL", "REST API", "Database"]
coverImage: './cover.jpg'
---

หลังจากที่เราได้เรียนรู้พื้นฐานของ Express 5 ไปแล้ว วันนี้เราจะมาอัปเกรดระบบของเราให้ใช้งานได้จริงด้วยการเชื่อมต่อกับฐานข้อมูลยอดนิยมอย่าง **PostgreSQL** ครับ โดยเราจะสร้างระบบจัดการ "หนังสือ" (Book Store) แบบครบวงจรครับ

## ทำไมต้อง PostgreSQL ในปี 2026?

PostgreSQL ยังคงเป็นฐานข้อมูล Relational ที่แข็งแกร่งที่สุด ด้วยฟีเจอร์ที่รองรับทั้ง SQL และ JSONB รวมถึงประสิทธิภาพที่ไว้วางใจได้ เมื่อจับคู่กับ Express 5 ที่จัดการ Async ได้ดีเยี่ยม จะทำให้ API ของเราทรงพลังมากครับ

---

## ขั้นตอนที่ 1: เตรียม Library ที่จำเป็น

เราจะใช้ `pg` ซึ่งเป็น Driver มาตรฐานสำหรับเชื่อมต่อ Node.js กับ PostgreSQL ครับ

```bash
pnpm add pg
pnpm add -D @types/pg
```

---

## ขั้นตอนที่ 2: ตั้งค่าการเชื่อมต่อฐานข้อมูล (Database Connection)

สร้างไฟล์สำหรับจัดการการเชื่อมต่อ (ในตัวอย่างนี้ผมจะเขียนรวมใน `app.ts` เพื่อความเข้าใจง่ายนะครับ)

```typescript
import { Pool } from 'pg';

// ตั้งค่าการเชื่อมต่อ (แนะนำให้ใช้ .env ในการทำงานจริง)
const pool = new Pool({
  user: 'your_user',
  host: 'localhost',
  database: 'bookstore',
  password: 'your_password',
  port: 5432,
});

// ตรวจสอบการเชื่อมต่อ
pool.on('connect', () => {
  console.log('🐘 Connected to PostgreSQL successfully!');
});
```

*อย่าลืมสร้าง Table ใน PostgreSQL ก่อนนะครับ:*
```sql
CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL,
  published_year INTEGER
);
```

---

## ขั้นตอนที่ 3: เขียน CRUD Operations ด้วย SQL

ใน Express 5 เราสามารถใช้ `async/await` ร่วมกับ `pool.query` ได้อย่างลื่นไหลครับ

### 1. Create: เพิ่มหนังสือใหม่ (POST)
```typescript
app.post('/api/books', async (req: Request, res: Response) => {
  const { title, author, published_year } = req.body;
  
  const query = 'INSERT INTO books (title, author, published_year) VALUES ($1, $2, $3) RETURNING *';
  const values = [title, author, published_year];

  const result = await pool.query(query, values);
  res.status(201).json(result.rows[0]);
});
```

### 2. Read: ดึงข้อมูลหนังสือทั้งหมด (GET)
```typescript
app.get('/api/books', async (req: Request, res: Response) => {
  const result = await pool.query('SELECT * FROM books ORDER BY id DESC');
  res.json(result.rows);
});
```

### 3. Read: ดึงข้อมูลหนังสือตาม ID (GET)
```typescript
app.get('/api/books/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await pool.query('SELECT * FROM books WHERE id = $1', [id]);
  
  if (result.rows.length === 0) {
    return res.status(404).json({ message: 'ไม่พบหนังสือที่ระบุ' });
  }
  res.json(result.rows[0]);
});
```

### 4. Update: แก้ไขข้อมูลหนังสือ (PUT)
```typescript
app.put('/api/books/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  const { title, author, published_year } = req.body;
  
  const query = 'UPDATE books SET title = $1, author = $2, published_year = $3 WHERE id = $4 RETURNING *';
  const values = [title, author, published_year, id];

  const result = await pool.query(query, values);
  
  if (result.rows.length === 0) {
    return res.status(404).json({ message: 'ไม่พบหนังสือที่ต้องการแก้ไข' });
  }
  res.json(result.rows[0]);
});
```

### 5. Delete: ลบหนังสือ (DELETE)
```typescript
app.delete('/api/books/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  await pool.query('DELETE FROM books WHERE id = $1', [id]);
  res.status(204).send();
});
```

---

## ขั้นตอนที่ 4: การจัดการ Error (Express 5 Magic)

ขอย้ำอีกครั้งว่าใน Express 5 ถ้า Database Query เกิด Error (เช่น ใส่ข้อมูลผิดประเภท) ระบบจะจับส่งไปที่ Error Handler อัตโนมัติครับ

```typescript
// Global Error Handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    status: 'error',
    message: 'เกิดข้อผิดพลาดในการจัดการฐานข้อมูล: ' + err.message
  });
});
```

---

## สรุปบทเรียน

การเปลี่ยนจาก In-memory มาเป็น **PostgreSQL** ทำให้แอปพลิเคชันของเราพร้อมใช้งานจริง (Production-ready) มากขึ้น:
1. **Data Persistence:** ข้อมูลไม่หายเมื่อ Restart Server
2. **Security:** การใช้ Parameterized Queries (`$1, $2`) ช่วยป้องกัน SQL Injection
3. **Efficiency:** Express 5 ช่วยให้การเขียนโค้ดต่อฐานข้อมูลสั้นลงและอ่านง่ายขึ้นมากครับ

ลองนำไปปรับใช้กับโปรเจกต์ของเพื่อนๆ ดูนะครับ! ปี 2026 นี้ PostgreSQL + Express 5 คือคู่หูที่ลงตัวที่สุดครับ
