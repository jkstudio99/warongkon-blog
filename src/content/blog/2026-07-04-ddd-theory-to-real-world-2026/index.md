---
title: 'Domain-Driven Design: จากหนังสือ Eric Evans สู่งานจริงในปี 2026'
seoTitle: 'DDD Theory to Real World 2026 - Warongkon Blog'
description: 'ทำความเข้าใจ DDD แบบ pragmatic ไม่ยึดทฤษฎีจนเกินไป พร้อมตัวอย่างการแบ่ง Bounded Context และ Aggregate'
pubDate: '2026-07-04'
tags: ["Architecture", "DDD", "Software Design"]
coverImage: './cover.jpg'
---

สวัสดีครับ! DDD (Domain-Driven Design) เป็นหัวข้อที่พูดกันมา 20 ปีแล้ว แต่ยังไม่ตายเพราะว่ามัน **ได้ผลจริง** ถ้าใช้ถูกวิธี วันนี้ผมจะสรุปจากประสบการณ์ใช้งานจริง โดยไม่ต้องอ่านหนังสือ 500 หน้าครับ

---

## 🗣️ หัวใจที่แท้จริง: Ubiquitous Language

ถ้าให้เหลือแค่ข้อเดียวที่ต้องจำจาก DDD ก็คือ **"คุยภาษาเดียวกันระหว่าง business กับ dev"**

ตัวอย่าง: ธุรกิจเรียกว่า "Subscriber" แต่ในโค้ดเป็น `User` → นี่แหละคือจุดเริ่มของหายนะ refactor

**กฎ:** ถ้าธุรกิจเรียกอะไร ให้โค้ดเรียกแบบนั้นเป๊ะๆ เวลาคุยกันจะไม่งง

---

## 🗺️ Bounded Context: แผนที่ของระบบ

หลายระบบใหญ่พังเพราะคิดว่า `User` เป็น entity เดียวกันทั่วทั้งระบบ ซึ่งจริงๆ แล้ว:

- ใน `Authentication Context` → User คือ credential
- ใน `Billing Context` → User คือ customer ที่มี payment method
- ใน `Notification Context` → User คือ recipient

**เครื่องมือช่วย:** Context Mapping วาดออกมาเลยว่าแต่ละ context คุยกันยังไง (Shared Kernel, Customer-Supplier, Anti-Corruption Layer)

---

## 🧱 Aggregate: ไม่ใช่แค่ OOP class

Aggregate คือกลุ่มของ entity ที่ถูก update เป็นหน่วยเดียวกัน โดยมี **Aggregate Root** เป็น gatekeeper

**กฎสำคัญ:**
1. หนึ่ง transaction update ได้แค่ 1 aggregate
2. อ้างถึง aggregate อื่นผ่าน ID เท่านั้น ห้าม object reference
3. Aggregate ต้องเล็กที่สุดเท่าที่จะ consistent ได้

ผมเจอทีมที่ทำ Aggregate ใหญ่เท่าบ้าน `Order` โหลดมาทีก็โหลด 500 line item → locking นรก deadlock กระจาย

---

## 🎯 Strategic vs Tactical DDD

- **Strategic DDD:** Bounded Context, Context Map, Ubiquitous Language → สำคัญที่สุด
- **Tactical DDD:** Aggregate, Entity, Value Object, Repository → รอง

**บทเรียน:** ถ้าต้องเลือก อย่าทิ้ง Strategic แต่ Tactical ยืดหยุ่นได้ ไม่จำเป็นต้อง OOP ตามหนังสือเป๊ะ

---

## 💣 ข้อผิดพลาดที่เจอบ่อย

### 1. DDD = เยอะ folder
มือใหม่ชอบสร้าง folder `domain/application/infrastructure` ก่อนเข้าใจ business → เสียเวลา

### 2. Anemic Domain Model
ทำ `Entity` เป็นแค่ DTO แล้ว logic ไปอยู่ที่ service → นี่ไม่ใช่ DDD แต่เป็น transaction script

### 3. DDD everywhere
ระบบ CRUD ก็จับยัด Aggregate → overengineering

**กฎผม:** Core Domain ใช้ DDD, Supporting Subdomain ใช้ CRUD ธรรมดาก็พอ

---

## 🎯 สรุป

DDD ไม่ใช่ framework ไม่ใช่ pattern แต่เป็น **วิธีคิด** ที่ทำให้ทีมเข้าใจ business ลึกขึ้น

เริ่มจาก Ubiquitous Language + Bounded Context แค่ 2 อย่างนี้ก็เปลี่ยนทีมคุณไปครึ่งทางแล้วครับ

เจอกันใหม่ครับ 🚀
