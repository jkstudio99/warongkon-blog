---
title: 'Code Review ที่ดีควรเป็นยังไง: คู่มือสำหรับทั้งคน Review และคนถูก Review'
seoTitle: 'Good Code Review Guide 2026 - Warongkon Blog'
description: 'หลักการทำ Code Review ที่สร้างสรรค์ ช่วยยกระดับทีม ไม่ใช่แค่จับผิด พร้อม checklist ที่ใช้ได้จริง'
pubDate: '2026-07-25'
tags: ["Career", "Code Review", "Team Work"]
coverImage: './cover.jpg'
---

สวัสดีครับ! Code Review เป็นกิจกรรมที่เราทำทุกวัน แต่น้อยทีมมากที่ทำได้ดีจริงๆ บางที่ Code Review กลายเป็นสงคราม ego บางที่ก็เร็วเกินไปจน reviewer แค่กด approve วันนี้ผมจะแชร์มุมมองแบบ Senior ที่ทำ Code Review มา 4 ปีครับ

---

## 🎯 จุดประสงค์ของ Code Review (ที่คนมักลืม)

1. **หา bug** — ชัดเจน
2. **Knowledge sharing** — ทีมรู้ว่าใครทำอะไร
3. **รักษาคุณภาพ codebase** — consistency ระยะยาว
4. **Coach junior** — เพื่อน dev เติบโต

**ไม่ใช่** สนาม flex ว่าเรารู้เยอะกว่า

---

## 👨‍💻 สำหรับ Reviewer: ทำยังไงให้ Review ดี

### 1. Review ให้ทัน
PR เปิดไว้ 3 วันโดยไม่ได้ review → กลายเป็น merge conflict geyser
**Target:** ≤ 4 ชั่วโมง first response

### 2. แยกระหว่าง "Nit" กับ "Must-Fix"
```
nit: ตั้งชื่อ variable เป็น userCount จะชัดกว่า users
[blocker] ฟังก์ชันนี้ SQL injection ถ้า user input ตรงๆ
```

Prefix ช่วยให้ author รู้ว่าอะไรห้ามผ่าน อะไรทำเพิ่มก็ได้

### 3. ถามแทน command
- ❌ "ย้ายโค้ดนี้ไปไฟล์ utils"
- ✅ "ย้ายไป utils จะช่วยให้ reuse ง่ายไหม? มีเหตุผลที่ต้องอยู่ที่นี่ไหม?"

### 4. ชื่นชมด้วย
เจอโค้ดดีๆ บอกไป! **"pattern นี้เจ๋งดี ไม่เคยคิดมาก่อน"** — สร้างบรรยากาศบวก

### 5. Review ขนาดพอดี
PR > 400 บรรทัด → รับรองว่าอ่านผ่าน bug หลุดไปเยอะ
บอก author ให้แตก PR เล็กลง

---

## 📝 สำหรับ Author: ทำยังไงให้ PR Review ง่าย

### 1. PR Description ต้องดี
- **What** ทำอะไร
- **Why** ทำไมต้องทำ
- **How** วิธีแก้สั้นๆ
- **Testing** test ยังไง
- Screenshot / GIF ถ้ามี UI

### 2. Self-review ก่อน
เปิด diff ตัวเองดูก่อน → comment จุดที่อาจสงสัย

### 3. PR เล็ก
- Target: < 300 บรรทัด (ไม่รวม test, generated code)
- งานใหญ่ → แตกเป็น stack PR

### 4. อย่า Take มันเป็นเรื่องส่วนตัว
Comment critique **code ไม่ใช่ critique คุณ** ฟังแล้วพิจารณา ไม่เห็นด้วยก็โต้แย้งได้

---

## ✅ Checklist ของผม

**Correctness**
- [ ] Logic ถูกต้อง ครอบคลุม edge case
- [ ] Error handling ครบ
- [ ] ไม่มี race condition

**Readability**
- [ ] ตั้งชื่อตัวแปรสื่อความหมาย
- [ ] Function ไม่ยาวเกิน 50 บรรทัด
- [ ] Comment เฉพาะ "why" ไม่ใช่ "what"

**Testing**
- [ ] Happy path + edge case
- [ ] Test ไม่ flaky

**Security**
- [ ] Input validation
- [ ] ไม่มี secret hardcoded
- [ ] Auth/authz ถูกที่

**Performance**
- [ ] ไม่มี N+1
- [ ] Index DB มี
- [ ] ไม่ block event loop

---

## 🚫 Anti-Pattern ที่ต้องหลีกเลี่ยง

1. **Rubber Stamp Review** — "LGTM 👍" ใน 30 วินาที PR 800 บรรทัด
2. **Bikeshedding** — ถกเถียง 3 ชั่วโมงเรื่องชื่อ variable
3. **Review Sniper** — รอให้คนอื่น approve ก่อน ค่อยยิง comment รัว
4. **Ego Review** — จงใจหาจุดผิดเพื่อแสดงตนว่าเก่ง

---

## 🎯 สรุป

Code Review คือ **cultural artifact** ของทีม — ถ้าทำดี ทีมจะแข็งแรง ถ้าทำแย่ ทีมจะแตก

**Rule ที่ผมยึด:** "Be kind, be specific, be timely" — ดีทั้งสามข้อ ทีมคุณจะรักคุณครับ

เจอกันใหม่ 🚀
