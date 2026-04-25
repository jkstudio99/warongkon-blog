---
title: 'On-call Survival Guide: วิธีอยู่รอดตอน PagerDuty ร้องตอนตีสาม'
seoTitle: 'On-call Survival Guide 2026 - Warongkon Blog'
description: 'คู่มืออยู่รอดสำหรับ Developer ที่ต้อง on-call ตั้งแต่การเตรียมตัว การ response incident และการดูแลสุขภาพจิต'
pubDate: '2026-07-28'
tags: ["Career", "SRE", "Incident Management"]
coverImage: './cover.jpg'
---

สวัสดีครับ! On-call เป็นหนึ่งในประสบการณ์ที่ "เจ็บแต่จำ" ของ developer — ตื่นตีสาม, server ล่ม, ลูกค้าโวย, ผู้จัดการ ping ทุก 5 นาที วันนี้ผมจะแชร์ survival guide จากประสบการณ์ on-call มา 3 ปีครับ

---

## 📋 ก่อนเข้ากะ: เตรียมตัว

### 1. Runbook ต้อง Ready
ทุก alert ต้องมี runbook ตอบว่า:
- Alert นี้หมายความว่ายังไง
- ขั้นตอนเช็ค root cause
- วิธีแก้ชั่วคราว (mitigation)
- ใคร escalate ถ้าแก้ไม่ได้

**อย่ารอให้ alert มาก่อนแล้วค่อยเขียน** — ตอนนั้นคุณสมองไม่ทำงาน

### 2. Access ครบ
- VPN ใช้ได้
- Kubectl config มี
- Cloud console login ผ่าน
- Dashboard bookmark ไว้

ทดสอบ 1 วันก่อนเข้ากะ ไม่ใช่ตอนไฟไหม้

### 3. Sleep Setup
- โทรศัพท์ข้างเตียง ระดับเสียงสูงสุด
- Laptop ชาร์จเต็ม, ไม่ต้อง password ยาว
- แจ้งครอบครัว/คู่ขา ว่าอาจโดนปลุก

---

## 🚨 ตอน Alert ดัง: 3 นาทีแรกสำคัญที่สุด

### Step 1: Acknowledge ภายใน 1 นาที
กด ACK ก่อน — บอกทีมว่า "มีคนจัดการอยู่" ป้องกันคนอื่นตื่นตาม

### Step 2: Triage
```
เป็น user-facing ไหม?
- Yes → Severity P1 → ประกาศ incident
- No → มี SLO budget พอไหม? → ค่อยแก้
```

### Step 3: Mitigate ก่อน Fix
- Rollback > forward fix
- Scale up ชั่วคราว
- Disable feature flag
- Traffic shift ไป region อื่น

**"Stop the bleeding first, diagnose later"**

---

## 💬 Communication ตอน Incident

### กฎทอง
1. **Over-communicate** — ดีกว่า silent
2. **Update ทุก 15 นาที** แม้ไม่มีอะไรใหม่
3. **ภาษาธรรมดา** — ไม่ใช้ศัพท์เทคนิคกับคนที่ไม่ใช่ dev
4. **Timeline ชัดเจน** — ETA ตอนไหน ใครทำอะไร

### Template ที่ใช้
```
📍 Status: INVESTIGATING | MITIGATING | RESOLVED
🔍 Impact: [ลูกค้าเห็นผลกระทบอะไร]
⚡ Action: [กำลังทำอะไร]
⏱️ Next update: [เวลา]
```

---

## 🧠 หลัง Incident: Postmortem

### Blameless เป็นหัวใจ
ไม่ถาม "ใครทำพัง?" ถาม "ระบบเราทำไมยอมให้เกิดขึ้นได้?"

### 5 Whys
```
Q: ทำไม server ล่ม?
A: Memory leak
Q: ทำไม memory leak?
A: Cache ไม่มี TTL
Q: ทำไมไม่มี TTL?
A: Code review miss
Q: ทำไม review miss?
A: ไม่มี checklist
Q: ทำไมไม่มี checklist?
A: เรายังไม่ได้สร้าง ← root cause
```

### Action Items ต้อง SMART
- ❌ "พยายามระวังมากขึ้น" (วัดไม่ได้)
- ✅ "เพิ่ม cache TTL check ใน pre-commit hook ภายใน 2 สัปดาห์"

---

## 🧘 Mental Health

On-call กระทบจิตใจมากกว่าที่คิด:
- **Adrenaline crash** หลัง incident → อ่อนล้าครึ่งวัน
- **Pager anxiety** — แม้ไม่ได้ on-call ก็ได้ยินเสียงหลอน
- **Burnout** — รันกะถี่เกินไป

### วิธีดูแลตัวเอง
1. **Compensatory day-off** — on-call เดือนนี้ = ลาพักเดือนหน้า
2. **Rotation fair** — ไม่ควรเกิน 1 สัปดาห์ทุก 4-6 สัปดาห์
3. **No-blame culture** — จาก leadership
4. **On-call pay** — บริษัทควรจ่าย 💰

---

## 🎯 สรุป

On-call ที่ดีไม่ได้วัดจาก "จำนวน incident ที่แก้ได้" แต่วัดจาก **"จำนวน incident ที่ไม่เกิดซ้ำ"**

ถ้าคุณเจอ incident เดิมทุกสัปดาห์ → ระบบพัง ไม่ใช่คุณขี้เกียจ ต้องกลับไปแก้ root cause ไม่ใช่แค่ mitigate

ขอให้ทุกคน on-call อย่างมีสุขภาพจิตดีครับ เจอกันใหม่ 🚀
