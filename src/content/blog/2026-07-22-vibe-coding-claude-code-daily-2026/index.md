---
title: 'Vibe Coding กับ Claude Code: Daily Workflow ของ Senior Dev ปี 2026'
seoTitle: 'Vibe Coding Claude Code Daily 2026 - Warongkon Blog'
description: 'แชร์ workflow จริงในการใช้ Claude Code เป็นเพื่อนเขียนโค้ดประจำวัน ทำยังไงให้ได้ประสิทธิภาพสูงสุดแบบไม่เสียคุณภาพโค้ด'
pubDate: '2026-07-22'
tags: ["AI", "Claude Code", "Productivity", "Modern Dev"]
coverImage: './cover.jpg'
---

สวัสดีครับ! ปี 2026 คำว่า **"Vibe Coding"** กลายเป็นคำฮิตหลัง Andrej Karpathy โพสต์ใน X ความหมายคือ "เขียนโค้ดไปตาม vibe โดยให้ AI ทำส่วนใหญ่" วันนี้ผมจะแชร์ workflow ประจำวันของผมกับ Claude Code แบบไม่กั๊กครับ

---

## ☀️ เริ่มวันใหม่ (09:00)

### 1. สรุปสถานะ Project
```
ช่วยดู git log 2 วันล่าสุดและบอกว่าเหลืออะไรที่ต้องทำ
```

Claude Code จะอ่าน commit history + open PR + TODO ใน code แล้วสรุปให้

### 2. Plan งานด้วย Plan Mode
กด `Shift+Tab` เข้า Plan Mode → ให้ Claude วางแผนก่อนเขียนจริง ลด bug ไป 50%

---

## 💻 Core Work Time (10:00-12:00)

### Pattern ที่ใช้บ่อยสุด

**1. Feature Implementation**
```
ช่วยเพิ่ม endpoint POST /orders ตาม pattern ของ /products
ที่มีอยู่ พร้อม validation, test, และ OpenAPI spec
```

**2. Refactoring**
```
ไฟล์นี้ยาวเกิน 500 บรรทัด ช่วยแยกเป็นไฟล์ย่อย
ตาม responsibility แต่ห้ามเปลี่ยน public API
```

**3. Debug**
```
test นี้ fail แบบ flaky ช่วยหาสาเหตุและเสนอวิธีแก้
```

---

## 🍛 หลังข้าวเที่ยง (13:00-15:00)

### Code Review with AI

ก่อน push PR ให้ Claude review ก่อน:
```
ทำ code review PR นี้แบบ senior ดูเรื่อง:
- Security vulnerability
- Performance issue
- Code smell
- Missing test
```

**ข้อดี:** ไม่ทำให้ reviewer ทีมต้องเห็นของที่เรารู้อยู่แล้วว่าต้องแก้

---

## 🧪 ช่วงบ่าย (15:00-17:00): Experiment

### Sub-agent Workflow

ใช้ `Task` tool ส่งงาน independent ให้ sub-agent ทำพร้อมกัน:
- agent 1: research library X
- agent 2: write migration script
- agent 3: update documentation

ได้งาน 3 อย่างในเวลาเท่าเดิม

---

## 🌙 ก่อนเลิกงาน (17:00)

### Commit Message + PR Description
```
ช่วย generate commit message ตาม conventional commits
และ PR description แบบละเอียด
```

### Update Changelog
```
ดู git log วันนี้ แล้วอัปเดต CHANGELOG.md
```

---

## 🎯 เคล็ดลับที่ได้จากใช้ 6 เดือน

### ✅ DO
1. **ตั้ง CLAUDE.md** — บอก convention ของ project
2. **Review diff ทุกครั้ง** — อย่าเชื่อ AI 100%
3. **ใช้ Plan Mode** — สำหรับงานใหญ่
4. **ทำ Skill ของตัวเอง** — reusable workflow

### ❌ DON'T
1. อย่าให้ AI commit หรือ push อัตโนมัติทุกครั้ง
2. อย่าใช้ AI เขียน security-critical code โดยไม่ review
3. อย่าปล่อยให้ AI generate test pass เอง → test ต้อง fail ก่อนแล้วค่อย fix

---

## 🚀 Productivity Impact ที่เห็นจริง

จากที่วัดมา 6 เดือน:
- **Feature ship เร็วขึ้น 2.5x** (ไม่ใช่ 10x อย่างที่ขายๆ กัน)
- **Bug rate ลดลง 30%** (เพราะมี test ครบขึ้น)
- **Onboarding cycle สั้นลง** — dev ใหม่ถาม AI แทนถามเพื่อน

---

## 🎯 สรุป

Vibe Coding ไม่ใช่ "ขี้เกียจ" แต่เป็น **ยกระดับจาก coder → orchestrator**

Senior Dev ปี 2026 ต้องรู้ว่า **เมื่อไหร่ให้ AI ทำ เมื่อไหร่ต้องเขียนเอง** นั่นคือ skill ใหม่ที่สำคัญที่สุดครับ

เจอกันใหม่ 🚀
