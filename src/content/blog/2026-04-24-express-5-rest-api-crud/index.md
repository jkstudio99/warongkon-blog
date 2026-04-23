---
title: 'สอนสร้าง REST API ด้วย Express 5 ฉบับปี 2026: เจาะลึก CRUD แบบ Step-by-Step'
seoTitle: 'คู่มือสร้าง Express 5 REST API CRUD ภาษาไทย 2026 - Warongkon Blog'
slug: 'express-5-rest-api-crud-thai-guide-2026'
description: 'สอนสร้าง REST API ด้วย Express 5 และ TypeScript แบบละเอียดทุกขั้นตอน ตั้งแต่เริ่มต้นจนถึงการจัดการ Error แบบมืออาชีพ'
pubDate: '2026-04-24'
tags: ["Node.js", "Express 5", "TypeScript", "REST API", "Tutorial"]
coverImage: './cover.jpg'
---

ยินดีต้อนรับสู่ปี 2026 ครับ! ในยุคที่การพัฒนาซอฟต์แวร์เน้นความรวดเร็วและปลอดภัย **Express 5** ได้กลายเป็นมาตรฐานหลักของนักพัฒนา Node.js ทั่วโลก วันนี้ผมจะพาทุกคนมาสร้าง REST API สำหรับจัดการข้อมูล (CRUD) โดยใช้ Express 5 และ TypeScript แบบละเอียดทุกขั้นตอนครับ

## ทำไมต้อง Express 5?

ฟีเจอร์ที่เปลี่ยนชีวิตนักพัฒนามากที่สุดในเวอร์ชัน 5 คือ **Native Async Error Handling** ครับ สมัยก่อนเราต้องเขียน `try-catch` ครอบทุกฟังก์ชัน หรือใช้ middleware เสริม แต่ในเวอร์ชัน 5 นี้ ถ้ามี Error เกิดขึ้นใน `async` function ตัว Express จะจับส่งไปยัง Error Handler ให้เราโดยอัตโนมัติ ทำให้โค้ดสะอาดขึ้นมาก!

---

## ขั้นตอนที่ 1: การเตรียมโครงสร้างโปรเจกต์ (Setup)

ก่อนอื่นให้เราเริ่มต้นด้วยการลงไลบรารีที่จำเป็น (แนะนำให้ใช้ pnpm นะครับ)

```bash
pnpm init
pnpm add express@5.0.0
pnpm add -D typescript @types/node @types/express ts-node
```

สร้างไฟล์ `app.ts` และตั้งค่าเริ่มต้น:

```typescript
import express, { Request, Response, NextFunction } from 'express';

const app = express();

// Middleware สำหรับอ่าน JSON body จาก Request
app.use(express.json());

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
```

---

## ขั้นตอนที่ 2: กำหนดโครงสร้างข้อมูล (Data Model)

ในยุค 2026 การใช้ TypeScript เป็นเรื่องที่ขาดไม่ได้ เพื่อให้เรามั่นใจว่าข้อมูลที่รับส่งมีความถูกต้อง

```typescript
interface Course {
  id: number;
  title: string;
  instructor: string;
}

// จำลองฐานข้อมูลแบบ In-memory
let courses: Course[] = [
  { id: 1, title: 'Modern C# 2026', instructor: 'Warongkon' },
  { id: 2, title: 'Express 5 Mastery', instructor: 'Warongkon' }
];
```

---

## ขั้นตอนที่ 3: การเขียน CRUD Operations

### 1. Read (ดึงข้อมูลทั้งหมด)
เราจะใช้ `app.get` เพื่อสร้าง Endpoint สำหรับดึงข้อมูลครับ

```typescript
app.get('/api/courses', async (req: Request, res: Response) => {
  // ใน Express 5 คุณสามารถดึงข้อมูลจาก DB ได้เลยโดยไม่ต้องกลัว Error หลุด
  res.json(courses);
});
```

### 2. Create (เพิ่มข้อมูลใหม่)
ใช้ `app.post` และรับค่าจาก `req.body`

```typescript
app.post('/api/courses', async (req: Request, res: Response) => {
  const { title, instructor } = req.body;
  
  if (!title || !instructor) {
    return res.status(400).json({ message: 'กรุณากรอกข้อมูลให้ครบถ้วน' });
  }

  const newCourse: Course = {
    id: courses.length + 1,
    title,
    instructor
  };

  courses.push(newCourse);
  res.status(201).json(newCourse);
});
```

### 3. Update (แก้ไขข้อมูล)
ใช้ `app.put` และระบุ `id` ผ่านทาง URL Parameters (`req.params.id`)

```typescript
app.put('/api/courses/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { title, instructor } = req.body;
  
  const index = courses.findIndex(c => c.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'ไม่พบคอร์สที่ต้องการแก้ไข' });
  }

  courses[index] = { ...courses[index], title, instructor };
  res.json(courses[index]);
});
```

### 4. Delete (ลบข้อมูล)
ใช้ `app.delete` เพื่อลบข้อมูลตาม `id`

```typescript
app.delete('/api/courses/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  courses = courses.filter(c => c.id !== id);
  res.status(204).send(); // ส่งสถานะ No Content กลับไป
});
```

---

## ขั้นตอนที่ 4: การจัดการ Error (Global Error Handler)

นี่คือส่วนที่ Express 5 ทำได้ดีมาก เราแค่เขียน Middleware ตัวเดียวไว้ท้ายสุดของไฟล์ครับ

```typescript
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error('❌ เกิดข้อผิดพลาด:', err.message);
  
  res.status(err.status || 500).json({
    status: 'error',
    message: err.message || 'Internal Server Error'
  });
});
```

---

## สรุปบทเรียน

การพัฒนา REST API ในปี 2026 ด้วย Express 5 ช่วยลดภาระในการจัดการ Error และทำให้เราโฟกัสกับ Business Logic ได้มากขึ้น สิ่งสำคัญคือ:
1. **TypeScript** คือหัวใจสำคัญของความเสถียร
2. **Async/Await** ทำงานได้เนียนตาขึ้นใน Express 5
3. **Clean Code** พยายามแยก Logic ออกเป็นส่วนๆ เพื่อให้ง่ายต่อการดูแลรักษาครับ

หวังว่าคู่มือฉบับนี้จะเป็นประโยชน์ต่อเพื่อนๆ นักพัฒนาทุกคนนะครับ หากมีคำถามตรงไหน คอมเมนต์พูดคุยกันได้เลยครับ!
