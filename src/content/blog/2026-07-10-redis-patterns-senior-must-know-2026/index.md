---
title: 'Redis Patterns 10 แบบที่ Senior Dev ต้องรู้ในปี 2026'
seoTitle: 'Redis Patterns Senior Must Know 2026 - Warongkon Blog'
description: 'รวม Redis Patterns ที่ใช้ในงาน Production จริง ตั้งแต่ Caching, Rate Limiting, Distributed Lock และอื่นๆ'
pubDate: '2026-07-10'
tags: ["Deep Tech", "Redis", "Caching", "Performance"]
coverImage: './cover.jpg'
---

สวัสดีครับ! Redis เป็น Swiss Army Knife ของ Backend Engineer ถ้าใช้เป็นแค่ cache ธรรมดาก็น่าเสียดาย วันนี้ผมจะแชร์ 10 patterns ที่ผมใช้จริงบน Production ครับ

---

## 1️⃣ Cache-Aside (Lazy Loading)

pattern คลาสสิก: ลอง cache ก่อน ไม่มีก็ query DB แล้วเก็บ cache

```
val = redis.get(key)
if val is None:
    val = db.query(...)
    redis.setex(key, 3600, val)
```

**ระวัง:** Cache Stampede — ถ้า cache หมดอายุพร้อมกัน DB จะโดนถล่ม ใช้ **random TTL jitter** หรือ **single-flight**

---

## 2️⃣ Write-Through / Write-Behind

- **Write-Through:** เขียน DB แล้ว sync เข้า cache ทันที → consistent แต่ช้า
- **Write-Behind:** เขียน cache ก่อน async ลง DB → เร็วแต่เสี่ยงข้อมูลหาย

---

## 3️⃣ Rate Limiting (Sliding Window)

```
ZADD user:123 <timestamp> <timestamp>
ZREMRANGEBYSCORE user:123 -inf <now - 60>
ZCARD user:123  // ถ้าเกิน 100 → block
```

ใช้ Sorted Set + window 1 นาที จำกัด request

---

## 4️⃣ Distributed Lock (Redlock)

ใช้ `SET key value NX EX 30` เป็น lock ข้าม instance ห้าม copy-paste algorithm โดยไม่เข้าใจ **เพราะ Redlock ยังมีคนถกเถียงเรื่อง correctness อยู่**

**Production ผมใช้:** Redisson (Java), node-redlock (Node) — มี retry/unlock logic แล้ว

---

## 5️⃣ Session Store

เก็บ session ใน Redis ไม่ใช่ cookie → horizontal scale ได้ง่าย logout ทำได้ทันที

---

## 6️⃣ Leaderboard

Sorted Set + `ZADD` + `ZREVRANGE` → ได้ top 100 ใน O(log N)

Game realtime ranking ใช้ pattern นี้เต็มๆ

---

## 7️⃣ Pub/Sub → แทนที่ด้วย Streams

Redis Pub/Sub **fire-and-forget** ข้อความหายได้ — ปี 2026 ใช้ **Redis Streams** แทน มี consumer group, acknowledge, replay

---

## 8️⃣ Token Bucket

Rate limit แบบ burst-friendly

```
Lua script:
  tokens = GET bucket
  if tokens > 0: DECR; return true
  else: return false
```

Atomic ด้วย Lua script — สำคัญมาก

---

## 9️⃣ Bloom Filter (RedisBloom)

เช็ค "มีในระบบไหม" โดยไม่ query DB เช่น ตรวจ username ซ้ำก่อน register

ประหยัด memory มาก 1 ล้าน item ใช้ไม่ถึง 2MB

---

## 🔟 Cache Warming

ก่อน deploy → populate cache ล่วงหน้า ป้องกัน cold start

```
kubectl apply → init container pre-load → service ready
```

---

## 💣 กับดักที่ต้องระวัง

- **Big key** — 1 key 100MB ทำ Redis block
- **KEYS command** — อย่าใช้บน prod! ใช้ `SCAN` แทน
- **No eviction policy** — memory เต็มแล้ว Redis crash → set `maxmemory-policy allkeys-lru`

---

## 🎯 สรุป

Redis ใช้ได้มากกว่า cache เยอะ แต่ **ความเร็วมาพร้อมความเสี่ยง** ถ้าไม่เข้าใจ memory management จะกลายเป็นระเบิดเวลาครับ

ลองนำ pattern ไปใช้ทีละ pattern จะช่วยยกระดับ system ของคุณได้เยอะเลย เจอกันครับ 🚀
