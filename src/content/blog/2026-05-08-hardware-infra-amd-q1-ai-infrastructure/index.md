---
title: 'AMD รายงาน Q1 วันที่ 5 พฤษภาคม 2026: Data Center โต 57% และ AI infrastructure กำลังดึง AMD เข้าเกม scale ใหญ่ขึ้น'
seoTitle: 'AMD Q1 2026 AI Infrastructure Data Center - Warongkon Blog'
description: 'สรุปผลประกอบการ AMD Q1 2026 ที่รายงานวันที่ 5 พฤษภาคม 2026 โดย Data Center revenue โต 57% จาก EPYC และ Instinct GPU พร้อมสัญญาณ MI450 และ Helios'
pubDate: '2026-05-08'
tags: ["Hardware", "Infrastructure", "AMD", "AI Data Center"]
coverImage: './cover.svg'
---

ข่าว **Hardware / Infrastructure** สำหรับรอบวันที่ **8 พฤษภาคม 2026** คือผลประกอบการ **AMD ไตรมาสแรกปี 2026** ที่เผยแพร่เมื่อวันที่ **5 พฤษภาคม 2026**

ประเด็นที่สำคัญไม่ใช่แค่ AMD ทำรายได้รวมดี แต่คือธุรกิจ **Data Center** กลายเป็นแรงขับหลักของบริษัทอย่างชัดเจน และทำให้การแข่งขัน AI infrastructure ไม่ได้เป็นเรื่องของ GPU เจ้าเดียวอีกต่อไป

AMD รายงานรายได้รวมไตรมาสแรก **10.253 พันล้านดอลลาร์** เพิ่มขึ้น **38% year over year** ส่วน Data Center segment ทำรายได้ **5.8 พันล้านดอลลาร์** เพิ่มขึ้น **57% year over year**

ตัวเลขนี้สะท้อนว่า demand สำหรับ AI infrastructure กำลังขยายจาก accelerator ไปถึง CPU, rack-scale design, memory, networking และ cloud instance ทั้งระบบ

## เกิดอะไรขึ้นในวันที่ 5 พฤษภาคม 2026

ในข่าวผลประกอบการวันที่ **5 พฤษภาคม 2026** AMD ระบุว่าไตรมาสแรกปี 2026 มีรายได้รวม **10.3 พันล้านดอลลาร์**, gross margin **53%**, operating income **1.5 พันล้านดอลลาร์** และ diluted EPS **0.84 ดอลลาร์**

ฝั่ง non-GAAP รายงาน gross margin **55%**, operating income **2.5 พันล้านดอลลาร์** และ diluted EPS **1.37 ดอลลาร์**

จุดที่เกี่ยวกับ infrastructure โดยตรงคือคำอธิบายของ Lisa Su ว่า quarter นี้ถูกขับเคลื่อนด้วยความต้องการ AI infrastructure ที่เร่งขึ้น และ Data Center เป็นตัวขับรายได้กับกำไรหลักของ AMD แล้ว

ใน segment summary AMD ระบุว่า Data Center revenue โต **57%** จาก demand ของ **AMD EPYC processors** และการ ramp shipment ของ **AMD Instinct GPUs**

บริษัทให้ outlook ไตรมาสสองปี 2026 ไว้ที่รายได้ประมาณ **11.2 พันล้านดอลลาร์** บวกลบ **300 ล้านดอลลาร์** ซึ่ง midpoint หมายถึงการเติบโตประมาณ **46% year over year**

## ทำไมข่าวนี้สำคัญต่อ Hardware / Infrastructure

ช่วงหลายเดือนที่ผ่านมา ข่าว AI infrastructure มักถูกเล่าเป็นเรื่อง GPU shortage, data center lease, power capacity และ hyperscaler capex

แต่ผลประกอบการ AMD รอบนี้ชี้อีกชั้นหนึ่งว่า infrastructure boom กำลังสร้าง demand ให้ทั้งระบบ ไม่ใช่แค่ชิปประมวลผล AI ตัวเดียว

AMD พูดถึงทั้ง EPYC CPU, Instinct GPU, MI450 Series, Helios rack-scale architecture, cloud instance จาก hyperscaler และ collaboration กับ ecosystem หลายราย

นี่ทำให้โจทย์ infrastructure ปี 2026 เริ่มเปลี่ยนจาก “ใครมี GPU เยอะกว่า” ไปเป็น “ใครมี platform ที่ deploy ได้จริงใน scale ใหญ่กว่า”

## MI450 และ Helios คือสัญญาณระยะถัดไป

ในข่าวเดียวกัน AMD ระบุว่า customer engagement รอบ **MI450 Series** และ **Helios** แข็งแรงขึ้น โดย forecast จากลูกค้าหลักสูงกว่าความคาดหมายเดิม

ภาษานี้สำคัญ เพราะ MI450 และ Helios ไม่ใช่แค่ product spec แต่เป็นการเดิมพันว่า AI customer จะซื้อ infrastructure ในรูปแบบ rack-scale และ system-level มากขึ้น

ถ้าเทียบกับการซื้อ GPU เป็นชิ้น ๆ rack-scale architecture ช่วยให้ vendor คุมประสิทธิภาพ ความร้อน พลังงาน การเชื่อมต่อ และ software stack ได้มากกว่า

นี่คือสนามเดียวกับที่ทั้ง NVIDIA, hyperscaler และผู้ผลิต server กำลังแข่งกัน

## CPU ยังไม่ตายในการแข่ง AI

อีกจุดที่น่าสนใจคือ AMD ไม่ได้เล่า AI infrastructure ผ่าน GPU อย่างเดียว

EPYC ยังเป็นส่วนสำคัญของ Data Center growth เพราะ AI system จริงต้องมี CPU สำหรับ orchestration, data movement, preprocessing, storage, networking, tool execution และ workload ที่ไม่ได้วิ่งบน accelerator ตลอดเวลา

เมื่อ agentic AI และ inference workloads ใหญ่ขึ้น ระบบจะยิ่งต้องใช้ compute หลายแบบร่วมกัน

ดังนั้นข่าวนี้ทำให้เห็นว่า Hardware / Infrastructure รอบใหม่เป็นการแข่งขันระหว่าง platform stack มากกว่าการแข่ง benchmark ของ accelerator แยกชิ้น

## มุมมองของผม

ผมมองว่า AMD Q1 2026 เป็นข่าว infrastructure ที่ควรอ่านคู่กับข่าว data center และ networking ช่วงนี้

ถ้า demand AI ยังเร่งต่อ ตลาดจะต้องการทางเลือกมากขึ้นทั้งด้าน GPU, CPU, rack-scale design และ cloud supply

ผลประกอบการ AMD ไม่ได้แปลว่า AMD ชนะเกม AI infrastructure แล้ว แต่แปลว่าตลาดใหญ่พอและซับซ้อนพอที่จะเปิดพื้นที่ให้ผู้เล่นหลายรายแย่งส่วนแบ่งใน layer ต่าง ๆ

ถ้าจะสรุปให้สั้นที่สุด:
**AMD กำลังได้แรงส่งจากการที่ AI infrastructure กลายเป็นระบบเต็มรูปแบบ ไม่ใช่ตลาด GPU เดี่ยว Data Center revenue ที่โต 57% บอกว่าลูกค้าเริ่มซื้อ compute เป็น stack และนี่จะทำให้การแข่งขัน infrastructure ปี 2026 ลึกขึ้นกว่าเดิม**

## แหล่งอ้างอิง

- [AMD: AMD Reports First Quarter 2026 Financial Results](https://www.amd.com/en/newsroom/press-releases/2026-5-5-amd-reports-first-quarter-2026-financial-results.html)

