---
title: 'Micron ที่ COMPUTEX 2026: AI infrastructure กำลังแข่งกันที่ HBM4, SOCAMM2 และ SSD ระดับ 245TB'
seoTitle: 'Micron COMPUTEX 2026 AI Memory HBM4 SOCAMM2 SSD - Warongkon Blog'
description: 'สรุป Micron วันที่ 1 มิถุนายน 2026 ที่ COMPUTEX 2026 เปิดภาพ AI memory และ storage stack ตั้งแต่ HBM4, 256GB SOCAMM2, DDR5 RDIMM ไปจนถึง 245TB SSD'
pubDate: '2026-06-06'
tags: ["Hardware", "Infrastructure", "Micron", "COMPUTEX", "HBM4", "SOCAMM2", "AI Data Center", "SSD"]
coverImage: './cover.svg'
---

ข่าว **Hardware / Infrastructure** สำหรับรอบวันที่ **6 มิถุนายน 2026** คือ **Micron** เผยแพร่ประกาศวันที่ **1 มิถุนายน 2026** ก่อนงาน **COMPUTEX 2026** โดยวางตำแหน่งตัวเองเป็นผู้ผลักดัน memory และ storage สำหรับยุค **AI Everywhere**

รอบก่อนบล็อกนี้พูดถึง SoftBank 5GW AI data center ในฝรั่งเศส, Intel Xeon 6+ ที่ COMPUTEX และ NVIDIA/TSMC AI fab workflow ไปแล้ว ข่าววันนี้จึงเลือก bottleneck อีกชั้นของ AI infrastructure: memory bandwidth, memory capacity, storage density และ power efficiency ใน rack

## Micron โชว์อะไร

ประกาศของ Micron ระบุว่าในงาน COMPUTEX 2026 บริษัทนำ portfolio สำหรับ AI ตั้งแต่ data center ไปจนถึง edge device มาโชว์ โดย highlight หลักอยู่ที่:

- **HBM4 36GB 12-high** สำหรับ AI accelerator รุ่นใหม่
- **256GB SOCAMM2** สำหรับ server memory form factor ที่ออกแบบเพื่อ workload memory-heavy
- **256GB DDR5 RDIMM** ความเร็ว **9,200 MT/s**
- **Micron 9650 PCIe Gen6 SSD** สำหรับ high-performance AI storage
- **Micron 6600 ION SSD** ความจุสูงสุด **245TB**

นี่ไม่ใช่ข่าวชิปตัวเดียว แต่เป็นข่าว stack เพราะ AI system ต้องการ memory และ storage หลายระดับพร้อมกัน ตั้งแต่ HBM ติดใกล้ accelerator, system memory, local NVMe storage ไปจนถึง data lake และ checkpoint storage

## HBM4 คือหัวใจของ accelerator รุ่นต่อไป

Micron ระบุว่า HBM4 36GB แบบ 12-high ให้ bandwidth มากกว่าเดิมและสามารถช่วยเพิ่ม inference throughput ได้ถึง **2.6 เท่า** สำหรับทุก ๆ การเพิ่ม bandwidth **2 เท่า** เมื่อเทียบกับ HBM3E ในบาง workload

ตัวเลขนี้ควรอ่านอย่างระมัดระวังเพราะขึ้นกับ workload และ system design แต่ทิศทางสำคัญมาก: เมื่อ model ใหญ่ขึ้นและ inference หนักขึ้น bottleneck ไม่ได้อยู่ที่ compute core อย่างเดียว แต่อยู่ที่การป้อนข้อมูลให้ accelerator ทัน

ในโลก training และ inference ของปี 2026 การเพิ่ม FLOPS โดยไม่เพิ่ม bandwidth จะเหมือนมี engine ใหญ่แต่ทางเข้าเชื้อเพลิงแคบ HBM4 จึงเป็นหนึ่งในตัวกำหนดว่า accelerator รุ่นต่อไปจะใช้พลัง compute ได้เต็มแค่ไหน

## SOCAMM2 บอกว่า server memory กำลังเปลี่ยน form factor

จุดที่น่าสนใจไม่แพ้ HBM คือ **256GB SOCAMM2** เพราะ Micron ระบุว่าสามารถให้ capacity สูงใน footprint และ power ที่ลดลงเมื่อเทียบกับ module แบบเดิม

สำหรับ AI server, memory capacity มีผลกับหลายอย่าง:

- ขนาด context และ working set ของ inference
- การทำ retrieval, reranking และ batch processing
- ความสามารถในการรัน model หลายตัวบน node เดียว
- latency เมื่อ system ไม่ต้อง spill ข้อมูลออกไป storage
- total cost of ownership เมื่อ power และพื้นที่ rack เป็นข้อจำกัด

ข่าวนี้จึงสะท้อนว่า infrastructure vendor กำลังออกแบบ memory ไม่ใช่แค่ให้เร็วขึ้น แต่ให้เหมาะกับ physical constraint ของ server AI รุ่นใหม่ด้วย

## SSD 245TB ทำให้ storage density กลายเป็นข่าว AI

Micron ยังพูดถึง **6600 ION SSD** ความจุสูงสุด **245TB** โดยระบุว่าสามารถลด rack footprint ได้ถึง **82%** และใช้พลังงานราวครึ่งหนึ่งเมื่อเทียบกับ HDD ใน workload ที่เกี่ยวข้อง

AI team มักพูดถึง GPU ก่อน แต่ data pipeline ของ AI ต้องมี storage มหาศาลสำหรับ dataset, embedding, log, feature store, checkpoint และ output ของ experiment ถ้า storage density ต่ำ data center จะกิน rack, power และ cooling มากขึ้นโดยไม่ได้เพิ่ม accelerator เลย

SSD ความจุสูงจึงไม่ใช่แค่เรื่อง archive แต่เกี่ยวกับความเร็วในการ feed ข้อมูลให้ training และ inference workflow ทำงานต่อเนื่อง

## ทำไมข่าวนี้สำคัญหลังข่าว data center 5GW

เมื่อวันที่ 4 มิถุนายน บล็อกนี้พูดถึง SoftBank กับ AI data center 5GW ในฝรั่งเศส ข่าว Micron ช่วยเติมภาพอีกด้าน: ต่อให้มีไฟฟ้าและ data center campus แล้ว ระบบข้างในยังต้องแก้โจทย์ memory และ storage ต่อ watt

AI infrastructure รุ่นใหม่จะถูกวัดด้วยตัวเลขหลายชุดพร้อมกัน:

- tokens หรือ samples ต่อวินาที
- bandwidth ต่อ accelerator
- memory capacity ต่อ node
- storage capacity ต่อ rack
- energy ต่อ query หรือ training step
- lead time ของ supply chain

บริษัทที่แก้ได้แค่ชั้นใดชั้นหนึ่งจะติด bottleneck ที่ชั้นอื่นเร็วมาก

## มุมมองของผม

ผมมองว่าประกาศ Micron ที่ COMPUTEX 2026 เป็นข่าวที่ควรอ่านคู่กับข่าว GPU และ data center เพราะมันชี้ว่า AI race ไม่ได้ชนะด้วย accelerator อย่างเดียว

ถ้า HBM ไม่พอ model ก็รอข้อมูล ถ้า system memory ไม่พอ workload ก็ขยับช้า ถ้า storage density ไม่พอ data center ก็ใหญ่และแพงเกินไป และถ้า power ต่อ capacity ไม่ดี ต่อให้มี demand ก็สร้าง infrastructure ไม่ทัน

สรุปสั้น ๆ:
**Micron ใช้ COMPUTEX 2026 เปิดภาพ AI memory/storage stack ตั้งแต่ HBM4 36GB, 256GB SOCAMM2, DDR5 RDIMM 9,200 MT/s ไปจนถึง 245TB SSD ข่าวนี้ย้ำว่า AI infrastructure ปี 2026 แข่งกันที่ bandwidth, capacity และ power efficiency ทั้งระบบ ไม่ใช่แค่ GPU**

## หมายเหตุเรื่องภาพประกอบ

รอบนี้พยายามดาวน์โหลดภาพจาก asset ของ GlobeNewswire/Micron แล้ว แต่ shell environment ไม่สามารถ resolve DNS ของ `ml.globenewswire.com` ได้ จึงใช้ภาพ SVG ขนาด 1200x630 ที่สร้างเฉพาะบทความนี้เป็น fallback

## แหล่งอ้างอิง

- [Micron: Micron Powers AI Everywhere at COMPUTEX 2026](https://investors.micron.com/news-releases/news-release-details/micron-powers-ai-everywhere-computex-2026)
- [COMPUTEX 2026 official site](https://www.computextaipei.com.tw/en/index.html)
- [Micron: HBM4 product page](https://www.micron.com/products/memory/hbm/hbm4)
