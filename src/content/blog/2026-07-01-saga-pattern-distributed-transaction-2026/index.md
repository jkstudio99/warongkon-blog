---
title: 'Saga Pattern: วิธีจัดการ Distributed Transaction แบบไม่พัง'
seoTitle: 'Saga Pattern Distributed Transaction 2026 - Warongkon Blog'
description: 'ทำความเข้าใจ Saga Pattern ทั้งแบบ Choreography และ Orchestration พร้อมตัวอย่างจริงจากระบบ E-commerce'
pubDate: '2026-07-01'
tags: ["Architecture", "Microservices", "Saga Pattern"]
coverImage: './cover.jpg'
---

สวัสดีครับ! เมื่อเราแตก Monolith เป็น Microservices ปัญหาแรกที่จะเจอคือ **"จะทำ Transaction ข้ามหลาย service ยังไง?"** เพราะ 2PC (Two-Phase Commit) ก็ช้าและเปราะบาง คำตอบที่เป็นมาตรฐานของปี 2026 คือ **Saga Pattern** ครับ

---

## 🎭 Saga คืออะไร

Saga คือ sequence ของ local transaction ที่แต่ละ step มี **compensating action** คอย rollback ถ้าเกิดความผิดพลาด

เช่น flow สั่งซื้อของ E-commerce:
1. Order Service: สร้าง order
2. Payment Service: หักเงิน
3. Inventory Service: ตัด stock
4. Shipping Service: สร้าง shipment

ถ้า step 3 fail → ต้องคืนเงิน (compensate step 2) และยกเลิก order (compensate step 1)

---

## 🎨 2 สไตล์: Choreography vs Orchestration

### Choreography (ต่างคนต่างรู้งาน)
แต่ละ service subscribe event แล้ว react เอง

- ✅ ไม่มี single point of failure
- ✅ loose coupling
- ❌ ติดตาม flow ยาก ต้องอ่าน log หลายที่
- ❌ พอ service เกิน 5 ตัวเริ่มวุ่น

### Orchestration (มี conductor สั่ง)
มี Saga Orchestrator เป็นคนสั่งว่าถัดไปทำอะไร

- ✅ เห็น flow ชัดเจน debug ง่าย
- ✅ business logic รวมศูนย์
- ❌ orchestrator กลายเป็น bottleneck ถ้าออกแบบไม่ดี
- ❌ coupling สูงกว่า

**ประสบการณ์ผม:** ถ้า flow ไม่ซับซ้อน (≤3 steps) ใช้ Choreography, ถ้าซับซ้อนให้ Orchestration

---

## 🛠️ เครื่องมือที่ใช้ได้จริงปี 2026

- **Temporal.io** — ตัวท็อปสำหรับ Orchestration, rich semantics, มี UI
- **AWS Step Functions** — ดีถ้าอยู่บน AWS stack
- **Camunda 8** — BPMN-based, เหมาะทีมที่มี business analyst
- **MassTransit Saga** (.NET) — ดีสำหรับ .NET shop
- **Kafka + Debezium** — สำหรับ Choreography แบบ event-driven

---

## 💣 กับดักที่เจอบ่อย

### 1. Compensating action ไม่ idempotent
เช่น "คืนเงิน" ถูกเรียก 2 ครั้งเพราะ retry → ลูกค้าได้เงินคืน 2 เท่า 😱

**ทางแก้:** ทุก compensating ต้องมี `idempotency key`

### 2. ลืม Timeout
Step ค้าง 3 ชั่วโมง → ระบบล็อก order ทั้งหมด

**ทางแก้:** ทุก step ต้องมี timeout + policy ว่าจะ compensate หรือ retry

### 3. ไม่มี Observability
Saga 10 steps พังที่ step ไหนไม่รู้ หา log 4 ชั่วโมง

**ทางแก้:** OpenTelemetry + Saga ID เป็น correlation ทุก span

---

## 🎯 สรุป

Saga Pattern ไม่ใช่ silver bullet แต่เป็น **ทางออกที่ realistic** สำหรับ distributed system

**กฎทอง:** ถ้าไม่จำเป็นต้องแตก service ก็อย่าแตก ถ้าแตกแล้วค่อยคิดเรื่อง Saga ครับ

เจอกันใหม่ในบทความถัดไป 🚀
