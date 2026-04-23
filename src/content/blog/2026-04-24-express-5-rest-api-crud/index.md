---
title: 'Modern REST API with Express 5: The 2026 Guide'
seoTitle: 'Express 5 REST API CRUD Tutorial 2026 - Warongkon Blog'
slug: 'express-5-rest-api-crud-2026'
description: 'How to build a robust CRUD REST API using Express 5, TypeScript, and modern best practices in 2026.'
pubDate: '2026-04-24'
tags: ["Node.js", "Express 5", "TypeScript", "REST API"]
coverImage: './cover.jpg'
---

As we move through 2026, **Express 5** has finally become the standard, bringing long-awaited features like native async error handling and improved routing. In this post, I’ll share a clean, production-ready snippet for a CRUD REST API.

## Why Express 5 in 2026?

The biggest change is how Express handles Promises. We no longer need `express-async-errors` or manual `try-catch` blocks for every route. If an async function throws, Express 5 catches it automatically.

## The CRUD Snippet

Here is a modern implementation using **TypeScript** and **Express 5**.

```typescript
import express, { Request, Response, NextFunction } from 'express';

const app = express();
app.use(express.json());

interface Item {
  id: number;
  name: string;
}

let db: Item[] = [
  { id: 1, name: 'Modern Tech' },
  { id: 2, name: 'Express 5 Guide' }
];

// 1. GET ALL
app.get('/api/items', async (req: Request, res: Response) => {
  // In Express 5, errors thrown here are caught automatically!
  res.json(db);
});

// 2. GET BY ID
app.get('/api/items/:id', async (req: Request, res: Response) => {
  const item = db.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ message: 'Not found' });
  res.json(item);
});

// 3. CREATE
app.post('/api/items', async (req: Request, res: Response) => {
  const newItem = { id: Date.now(), ...req.body };
  db.push(newItem);
  res.status(201).json(newItem);
});

// 4. UPDATE
app.put('/api/items/:id', async (req: Request, res: Response) => {
  const index = db.findIndex(i => i.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Not found' });
  
  db[index] = { ...db[index], ...req.body };
  res.json(db[index]);
});

// 5. DELETE
app.delete('/api/items/:id', async (req: Request, res: Response) => {
  db = db.filter(i => i.id !== parseInt(req.params.id));
  res.status(204).send();
});

// Global Error Handler (Simplified in v5)
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

## Key Patterns in 2026

1.  **Native Async/Await:** No more middleware wrappers for async routes.
2.  **Type Safety:** Always define Interfaces for your data models.
3.  **Clean Architecture:** For larger apps, remember to move these routes into dedicated `controllers` and `services`.

Building APIs has never been this smooth. Happy coding in 2026!
