---
title: 'สถาปัตยกรรม REST API ระดับ Senior: การประยุกต์ใช้ Express 5, Prisma และหลักการ SOLID ในปี 2026'
seoTitle: 'Senior REST API Architecture Express 5 Prisma SOLID 2026 - Warongkon Blog'
slug: 'senior-rest-api-architecture-express-5-prisma-2026'
description: 'เจาะลึกการออกแบบ REST API ให้รองรับการขยายตัวและง่ายต่อการดูแลรักษา ด้วย Layered Architecture, Repository Pattern และหลักการ SOLID'
pubDate: '2026-04-24'
tags: ["Senior Dev", "Clean Code", "SOLID", "Prisma", "Architecture"]
coverImage: './cover.jpg'
---

ในปี 2026 การเขียนโค้ดให้ "ทำงานได้" นั้นไม่เพียงพออีกต่อไปสำหรับนักพัฒนาระดับ Senior สิ่งที่แยกมืออาชีพออกจากมือสมัครเล่นคือ **ความสามารถในการดูแลรักษา (Maintainability)** และ **ความยืดหยุ่น (Scalability)** ของระบบ วันนี้เราจะมาสร้างระบบจัดการหนังสือ (Book Store) โดยใช้ **Express 5** และ **Prisma ORM** ผ่านเลนส์ของ **Clean Code** และ **SOLID Principles** ครับ

## 🏗️ Layered Architecture: หัวใจของความสะอาด

เราจะไม่เขียน Logic ทุกอย่างกองไว้ใน Route แต่เราจะแบ่งแอปพลิเคชันออกเป็น 3 เลเยอร์หลักตามหลักการ **Separation of Concerns (SRP - Single Responsibility Principle)**:

1.  **Controllers:** จัดการเรื่อง Request และ Response เท่านั้น
2.  **Services:** จัดการ Business Logic และกฎเกณฑ์ต่างๆ ของระบบ
3.  **Repositories:** จัดการการเข้าถึงฐานข้อมูล (ในที่นี้คือ Prisma)

---

## ขั้นตอนที่ 1: กำหนด Schema ด้วย Prisma

Prisma ช่วยให้เราทำ **Type-safe Database Access** ได้อย่างสมบูรณ์แบบ ซึ่งสอดคล้องกับแนวคิดของนักพัฒนาระดับ Senior ที่ต้องการลด Error ตั้งแต่ตอน Compile

```prisma
// schema.prisma
model Book {
  id        Int      @id @default(autoincrement())
  title     String
  author    String
  price     Float
  createdAt DateTime @default(now())
}
```

---

## ขั้นตอนที่ 2: Repository Layer (จัดการ Data)

เราใช้ **Repository Pattern** เพื่อแยก Logic การดึงข้อมูลออกจาก Business Logic วิธีนี้ช่วยให้เราสามารถเปลี่ยน ORM หรือฐานข้อมูลในอนาคตได้โดยไม่กระทบเลเยอร์อื่น (สอดคล้องกับ **Open/Closed Principle**)

```typescript
// repositories/BookRepository.ts
import { PrismaClient, Book } from '@prisma/client';

export interface IBookRepository {
  findAll(): Promise<Book[]>;
  findById(id: number): Promise<Book | null>;
  create(data: Omit<Book, 'id' | 'createdAt'>): Promise<Book>;
}

export class BookRepository implements IBookRepository {
  private prisma = new PrismaClient();

  async findAll() {
    return await this.prisma.book.findMany();
  }

  async findById(id: number) {
    return await this.prisma.book.findUnique({ where: { id } });
  }

  async create(data: any) {
    return await this.prisma.book.create({ data });
  }
}
```

---

## ขั้นตอนที่ 3: Service Layer (จัดการ Business Logic)

เลเยอร์นี้คือที่สำหรับใส่กฎของธุรกิจ เช่น "ห้ามเพิ่มหนังสือที่มีชื่อซ้ำกัน" หรือ "การคำนวณส่วนลด" โดยเราจะใช้ **Dependency Injection (DIP - Dependency Inversion Principle)** เพื่อให้ Code ของเรา Test ได้ง่ายขึ้น

```typescript
// services/BookService.ts
import { IBookRepository } from '../repositories/BookRepository';

export class BookService {
  constructor(private bookRepository: IBookRepository) {}

  async getAllBooks() {
    return await this.bookRepository.findAll();
  }

  async getBookDetails(id: number) {
    const book = await this.bookRepository.findById(id);
    if (!book) throw new Error('Book not found');
    return book;
  }
}
```

---

## ขั้นตอนที่ 4: Controller Layer (จัดการ Request/Response)

Controller ในระดับ Senior จะมีความสั้นและอ่านง่าย เพราะหน้าที่ของมันมีแค่รับ input และเรียก Service ต่อไป

```typescript
// controllers/BookController.ts
import { Request, Response } from 'express';
import { BookService } from '../services/BookService';

export class BookController {
  constructor(private bookService: BookService) {}

  getAll = async (req: Request, res: Response) => {
    const books = await this.bookService.getAllBooks();
    res.json(books);
  }

  getOne = async (req: Request, res: Response) => {
    const book = await this.bookService.getBookDetails(parseInt(req.params.id));
    res.json(book);
  }
}
```

---

## ขั้นตอนที่ 5: การประกอบร่าง (Wiring up with Express 5)

ใน Express 5 เราสามารถต่อเชื่อมเลเยอร์ต่างๆ เข้าด้วยกัน และใช้ประโยชน์จาก **Native Async Error Handling** ได้ทันที

```typescript
// app.ts
import express from 'express';
import { BookRepository } from './repositories/BookRepository';
import { BookService } from './services/BookService';
import { BookController } from './controllers/BookController';

const app = express();
app.use(express.json());

// Manual Dependency Injection
const bookRepo = new BookRepository();
const bookService = new BookService(bookRepo);
const bookController = new BookController(bookService);

// Routes
app.get('/api/books', bookController.getAll);
app.get('/api/books/:id', bookController.getOne);

// Global Error Handler (Catch-all for all layers)
app.use((err: any, req: any, res: any, next: any) => {
  res.status(err.status || 500).json({ error: err.message });
});
```

---

## 💡 สรุปมุมมองระดับ Senior

การเขียนโค้ดแบบนี้อาจดูเหมือนมีไฟล์เยอะขึ้นในตอนแรก แต่ในระยะยาว:
1.  **Testability:** คุณสามารถ Mock Repository เพื่อเขียน Unit Test ให้ Service ได้ง่ายๆ
2.  **Scalability:** เมื่อทีมขยายใหญ่ขึ้น นักพัฒนาคนอื่นจะรู้ทันทีว่าต้องแก้ไข Logic ที่ไฟล์ไหน
3.  **Readability:** โค้ดแต่ละส่วนมีหน้าที่เดียว (SRP) ทำให้อ่านง่ายและลดโอกาสเกิด Side-effect

การเป็นนักพัฒนาที่ยอดเยี่ยมในปี 2026 ไม่ใช่แค่การเขียนสิ่งที่ทำงานได้เร็วที่สุด แต่คือการเขียนสิ่งที่เพื่อนร่วมทีมของคุณสามารถดูแลต่อได้อย่างมีความสุขครับ!
