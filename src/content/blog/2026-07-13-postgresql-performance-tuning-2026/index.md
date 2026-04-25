---
title: 'PostgreSQL Performance Tuning ที่ใช้จริงปี 2026'
seoTitle: 'PostgreSQL Performance Tuning 2026 - Warongkon Blog'
description: 'เทคนิคปรับแต่ง PostgreSQL ให้เร็วขึ้นแบบที่ Senior DBA ใช้จริง ตั้งแต่ index, query plan ไปจนถึง config tuning'
pubDate: '2026-07-13'
tags: ["Deep Tech", "PostgreSQL", "Database", "Performance"]
coverImage: './cover.jpg'
---

สวัสดีครับ! PostgreSQL เป็นฐานข้อมูลยอดนิยมที่สุดในปี 2026 (จากผลสำรวจ Stack Overflow) แต่คนที่ใช้มันเต็มประสิทธิภาพจริงๆ มีไม่มาก วันนี้ผมจะแชร์เทคนิค tuning ที่ใช้ได้ทุกระบบครับ

---

## 🔍 ขั้นที่ 1: วัดก่อน Tune

อย่า tune แบบมั่วๆ! ใช้เครื่องมือดังนี้ก่อน:

```sql
-- เปิด extension
CREATE EXTENSION pg_stat_statements;

-- หา query ที่ช้าสุด 10 อันดับ
SELECT query, mean_exec_time, calls
FROM pg_stat_statements
ORDER BY mean_exec_time DESC
LIMIT 10;
```

**เครื่องมือเพิ่ม:** `pgBadger` (log analyzer), `pg_stat_kcache`, `auto_explain`

---

## 📚 ขั้นที่ 2: Index ที่ถูกต้อง

### B-tree (default)
ใช้กับ equality และ range query ส่วนใหญ่

### GIN
สำหรับ JSONB, full-text search, array

```sql
CREATE INDEX ON orders USING GIN (metadata jsonb_path_ops);
```

### BRIN
สำหรับตารางใหญ่ที่ข้อมูลเรียงตามเวลา (time-series) — index เล็กกว่า B-tree 100 เท่า

### Partial Index
```sql
CREATE INDEX ON orders(user_id) WHERE status = 'pending';
```
ประหยัดพื้นที่ ถ้า query มี filter เดิมเสมอ

---

## 🧠 ขั้นที่ 3: อ่าน EXPLAIN ให้เป็น

```sql
EXPLAIN (ANALYZE, BUFFERS, FORMAT TEXT)
SELECT * FROM orders WHERE ...;
```

**จุดสังเกต:**
- `Seq Scan` บนตารางใหญ่ = ปกติแล้วไม่ดี
- `Nested Loop` + rows เยอะ = อันตราย
- `Buffers: shared read=XXX` = อ่านจากดิสก์ (ไม่เข้า cache)

**Tip:** ใช้ [explain.dalibo.com](https://explain.dalibo.com) visualize

---

## ⚙️ ขั้นที่ 4: Config Tuning

ค่า default ของ PG ตั้งไว้สำหรับเครื่อง Raspberry Pi 😂 ต้องปรับ:

```
shared_buffers = 25% ของ RAM
effective_cache_size = 75% ของ RAM
work_mem = 16-64MB (ระวัง! multiply by connections)
maintenance_work_mem = 512MB-2GB
max_wal_size = 4GB
random_page_cost = 1.1 (สำหรับ SSD)
```

ใช้ [pgtune](https://pgtune.leopard.in.ua) ช่วย generate config เริ่มต้น

---

## 🗄️ ขั้นที่ 5: Vacuum + Bloat

PostgreSQL ใช้ MVCC — update/delete ไม่ได้ลบทันที ข้อมูลเก่าค้างเป็น **bloat**

```sql
-- ตรวจ bloat
SELECT schemaname, relname, n_dead_tup, n_live_tup
FROM pg_stat_user_tables
ORDER BY n_dead_tup DESC;

-- VACUUM (ปกติ autovacuum ทำเอง)
VACUUM ANALYZE orders;
```

ถ้า autovacuum ตามไม่ทัน → ปรับ `autovacuum_vacuum_scale_factor = 0.05`

---

## 🔀 ขั้นที่ 6: Connection Pooling

อย่าเชื่อมต่อ PG ตรงๆ จาก app! ใช้ **PgBouncer** หรือ **Pgpool** คั่น

1 connection PG = ~10MB RAM → 1000 connection = 10GB หายไปฟรี

---

## 💣 Common Mistakes

1. **SELECT *** → ดึงข้อมูลเกิน
2. **N+1 query** → ใช้ JOIN หรือ batch
3. **UUID เป็น Primary Key** ไม่ใช้ UUIDv7 → fragmentation
4. **ไม่มี index บน FK** → JOIN ช้า
5. **ORM lazy-load** ไม่ดูว่ายิง query กี่ตัว

---

## 🎯 สรุป

Performance tuning คือ science ไม่ใช่ art — **วัด, วิเคราะห์, แก้, วัดซ้ำ**

เริ่มจาก `pg_stat_statements` หา query ช้า แล้วค่อยๆ แก้ทีละจุด รับรองว่า p99 latency ลดลงเป็นสิบเท่าครับ

เจอกันครับ 🚀
