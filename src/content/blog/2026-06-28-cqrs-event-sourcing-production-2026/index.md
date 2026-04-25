---
title: 'CQRS + Event Sourcing บน Production: บทเรียนที่หนังสือไม่ได้บอก'
seoTitle: 'CQRS Event Sourcing Production 2026 - Warongkon Blog'
description: 'สรุปประสบการณ์ใช้ CQRS และ Event Sourcing บนระบบ Production จริง ข้อดี ข้อเสีย และกับดักที่ต้องระวังในปี 2026'
pubDate: '2026-06-28'
tags: ["Architecture", "CQRS", "Event Sourcing", "Senior Dev"]
coverImage: './cover.jpg'
---

สวัสดีครับทุกคน! CQRS (Command Query Responsibility Segregation) กับ Event Sourcing เป็นคู่หูที่ฟังดูเท่ แต่พอเอาไปใช้จริงบน Production แล้วกลายเป็นฝันร้ายของทีมก็เจอกันมาเยอะ วันนี้ผมจะสรุปบทเรียนแบบไม่กั๊กครับ

---

## 🧩 CQRS กับ Event Sourcing คืออะไรแบบเร็วๆ

- **CQRS:** แยก "Command" (เขียน) ออกจาก "Query" (อ่าน) เป็นคนละ model คนละ path
- **Event Sourcing:** ไม่เก็บ state สุดท้าย แต่เก็บทุก event ที่เกิดขึ้น แล้ว replay เพื่อสร้าง state

ทั้งสองใช้ร่วมกันได้ดี แต่ **ไม่จำเป็นต้องใช้คู่กันเสมอไป** นี่คือ Myth แรกที่ต้องทำลาย

---

## ✅ เมื่อไหร่ที่ควรใช้

- Domain ซับซ้อน มี business rule เยอะ (เช่น การเงิน, E-commerce enterprise)
- ต้องการ Audit Trail 100% ว่าใครทำอะไรเมื่อไหร่
- Read กับ Write มี load ต่างกันมากๆ (เช่น read 10,000 req/s แต่ write 100 req/s)

## ❌ เมื่อไหร่ที่ "ไม่ควร" ใช้

- CRUD ธรรมดา (อย่าฆ่ายุงด้วยปืนใหญ่)
- ทีมยังไม่คุ้นกับ Event-Driven
- ระยะเวลาโปรเจกต์สั้น ไม่มีเวลาเรียนรู้

---

## 💣 กับดักที่ผมเจอมาเอง

### 1. Event Schema Evolution
วันแรกเขียน `OrderCreated { id, total }` อีก 2 ปีถัดมาต้องเพิ่ม `currency` ถาม: event เก่าเป็นล้านๆ record จะทำยังไง?

**คำตอบ:** ต้องวาง strategy เรื่อง versioning ตั้งแต่ต้น เช่น Upcasting หรือ Weak Schema

### 2. Eventual Consistency
User กดปุ่ม "ซื้อสำเร็จ" แต่ refresh แล้วยังไม่เห็นคำสั่งซื้อ เพราะ Read Model ยัง sync ไม่ทัน

**ทางแก้:** ออกแบบ UX รองรับ เช่น optimistic update หรือ polling พร้อม fallback

### 3. Replay ช้าเป็นเต่า
ระบบรัน 3 ปี event 500 ล้าน record วันใด rebuild projection ใหม่อาจกินเวลา 20 ชั่วโมง

**ทางแก้:** Snapshot ทุกๆ N events + เก็บ projection แบบ incremental

---

## 🏗️ Tech Stack ที่นิยมในปี 2026

- **Event Store:** EventStoreDB, Kafka + Schema Registry, Axon Server
- **Message Broker:** Kafka, RabbitMQ, NATS JetStream
- **Read Model DB:** PostgreSQL + Materialized View, Elasticsearch, Redis
- **Framework:** Axon (JVM), MassTransit (.NET), NestJS CQRS (Node.js)

---

## 🎯 สรุปแบบ Senior

CQRS + Event Sourcing เป็น **เครื่องมือทรงพลัง** แต่ก็ราคาแพงที่สุดในกล่องเครื่องมือ ถ้าปัญหาแก้ได้ด้วย CRUD + Audit Log ธรรมดา อย่าเพิ่งเปิดกล่องนี้ออกมา

แต่ถ้าจำเป็นต้องใช้ ขอให้เริ่มจาก Bounded Context เล็กๆ ก่อน พิสูจน์ให้ทีมเห็นคุณค่า แล้วค่อยขยายครับ

แล้วเจอกันใหม่ในบทความต่อไปครับ 🚀
