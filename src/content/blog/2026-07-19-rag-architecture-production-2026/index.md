---
title: 'RAG Architecture แบบ Production-Ready ปี 2026'
seoTitle: 'RAG Architecture Production 2026 - Warongkon Blog'
description: 'ออกแบบระบบ RAG (Retrieval-Augmented Generation) ที่ใช้งานได้จริง ไม่ใช่แค่ demo ในปี 2026'
pubDate: '2026-07-19'
tags: ["AI", "RAG", "LLM", "Vector DB"]
coverImage: './cover.jpg'
---

สวัสดีครับ! RAG (Retrieval-Augmented Generation) เป็นเทคนิคที่ทำให้ LLM ตอบคำถามจากข้อมูลเฉพาะของเราได้ แต่ RAG ที่เห็นใน tutorial กับ RAG บน production ต่างกันคนละโลกเลยครับ วันนี้ผมจะแชร์ของจริง

---

## 🤔 Naive RAG vs Production RAG

**Naive RAG ที่เห็นใน tutorial:**
```
text → embedding → vector DB
query → embedding → similarity search → context → LLM
```

ใช้ demo ได้ แต่บน production จะเจอ:
- Retrieval แย่ → AI hallucinate
- Context ยาวเกิน → ช้าและแพง
- Update ข้อมูลแล้ว answer เก่าค้าง

---

## 🏗️ Production RAG Architecture

### 1. Ingestion Pipeline

```
Document → Parse → Chunking → Enrich → Embed → Store
```

- **Parse:** PDF ใช้ `unstructured`, Word ใช้ `mammoth`, HTML ใช้ `readability`
- **Chunking:** อย่าใช้ fixed-size! ใช้ **semantic chunking** หรือ **recursive split**
- **Enrich:** เพิ่ม metadata (source, date, author, section)
- **Embed:** OpenAI `text-embedding-3-large` หรือ Voyage AI

### 2. Retrieval Layer (สำคัญที่สุด!)

Single-vector search ไม่พอ ใช้ **Hybrid Search**:

```
BM25 (keyword) + Dense Vector (semantic) → Reciprocal Rank Fusion → Reranker
```

- **Reranker:** Cohere Rerank, Voyage Rerank ตัว boost quality มหาศาล

### 3. Generation Layer

- **Prompt Template** ที่ดี: ให้ LLM ตอบเฉพาะจาก context ถ้าไม่มีให้บอก "ไม่ทราบ"
- **Citation:** ให้ LLM อ้างอิง source ทุก claim
- **Guardrail:** validate output ก่อนส่งกลับ user

---

## 🎯 Advanced Techniques

### HyDE (Hypothetical Document Embeddings)
แทนที่จะ embed query ให้ LLM generate คำตอบสมมติก่อน แล้วค่อย embed → retrieval แม่นขึ้น

### Multi-Query
ถามคำถาม → ให้ LLM แตกเป็น 3-5 คำถามย่อย → search ทั้งหมด → union

### Query Routing
ถามเรื่อง HR → route ไป HR index
ถามเรื่อง Tech → route ไป Tech index

### Agentic RAG
LLM ตัดสินใจเอง ว่าจะ retrieve เพิ่มหรือพอแล้ว

---

## 📊 Vector DB ปี 2026

| DB | จุดเด่น | เหมาะกับ |
|----|---------|----------|
| **pgvector** | อยู่ใน Postgres เดิม | ทีมเล็ก-กลาง |
| **Qdrant** | Rust, เร็ว, มี filter ดี | Self-host |
| **Weaviate** | Hybrid search ในตัว | Flexible schema |
| **Pinecone** | Managed, scale ง่าย | Enterprise |
| **Milvus** | Scale ใหญ่สุด | 100M+ vectors |

---

## 💣 กับดักที่เจอบ่อย

### 1. Chunking แย่
Chunk กลางประโยค → context ขาด → LLM งง
**แก้:** overlap 10-20%, respect sentence boundary

### 2. ไม่มี Evaluation
ไม่รู้ว่า RAG ดีขึ้นหรือแย่ลงหลัง tune
**แก้:** ใช้ RAGAS framework วัด faithfulness, answer relevance, context precision

### 3. Index ไม่ update
ข้อมูลใน docs เปลี่ยน แต่ index เก่าค้าง
**แก้:** CDC pipeline หรือ scheduled re-index

### 4. Cost บาน
ทุก query embed ใหม่ → ค่า API ทะลุเพดาน
**แก้:** cache embedding ของ query ที่ซ้ำ

---

## 🎯 สรุป

RAG ที่ใช้งานได้จริง **ไม่ใช่แค่ vector search** แต่เป็น pipeline ที่ต้องดูแลเหมือน data pipeline ทั่วไป

**เริ่มง่ายๆ:** Postgres + pgvector + Hybrid Search + Cohere Rerank — แค่ stack นี้ก็ production-ready แล้วครับ

เจอกันใหม่ 🚀
