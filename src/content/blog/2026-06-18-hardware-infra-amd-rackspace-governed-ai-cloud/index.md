---
title: 'AMD x Rackspace วันที่ 16 มิถุนายน 2026: 30 MW AI compute สำหรับ regulated enterprise บอกว่า infra ต้องมี governance ตั้งแต่ silicon'
seoTitle: 'AMD Rackspace 30MW Governed AI Cloud June 2026 - Warongkon Blog'
description: 'สรุป AMD และ Rackspace ลงนาม definitive agreement สำหรับ deployment AMD AI compute 30 MW ระหว่างปลายปี 2026 ถึง 2028 เพื่อสร้าง governed Enterprise AI Cloud'
pubDate: '2026-06-18'
tags: ["Hardware", "Infrastructure", "AMD", "Rackspace", "AI Compute", "AI Cloud", "Enterprise AI", "Sovereign AI"]
coverImage: './cover.jpg'
---

ข่าว **Hardware / Infrastructure** สำหรับรอบวันที่ **18 มิถุนายน 2026** คือ **AMD** และ **Rackspace Technology** ประกาศเมื่อวันที่ **16 มิถุนายน 2026** ว่าทั้งสองบริษัทลงนาม **definitive agreement** สำหรับการ deploy AMD-based AI compute ขนาดเริ่มต้น **30 MW** ใน data centers ของ Rackspace ตั้งแต่ช่วงปลายปี 2026 ไปจนถึงปี 2028

รอบก่อนบล็อกนี้พูดถึง HPE/NVIDIA AI Factory, Coherent optical backbone, Schneider Electric/Foxconn reference design และ SK Telecom/NVIDIA AI Cloud ไปแล้ว ข่าวนี้จึงเลือกอีกแกนหนึ่งของ infrastructure: **regulated enterprise AI** ที่ไม่ได้ต้องการแค่ GPU capacity แต่ต้องการ governance, sovereignty, accountability และ operator ที่รับผิดชอบทั้ง stack

## AMD และ Rackspace ประกาศอะไร

ประกาศนี้เป็นการ operationalize บันทึกความเข้าใจหรือ MOU ที่ประกาศไว้เมื่อวันที่ **7 พฤษภาคม 2026**

สาระสำคัญคือ Rackspace จะ deploy footprint เริ่มต้น **30 MW** สำหรับ AMD compute ภายใน global data centers ของตัวเอง โดย AMD จะเป็น strategic technology partner ในชั้น silicon ของ governed AI stack

ชุด compute ที่กล่าวถึงประกอบด้วย:

- **AMD Instinct MI355X**
- **AMD Instinct MI350P**
- future successor solutions ของ AMD Instinct
- **AMD EPYC CPUs**

ทั้งหมดจะอยู่ภายใต้ architecture ที่ Rackspace เรียกว่า **Enterprise AI Cloud** โดยมีเป้าหมายให้ลูกค้า enterprise สามารถ route workload ไปยัง compute ที่เหมาะสม พร้อมมี accountability ตั้งแต่ performance ไปจนถึง business outcome

## 30 MW ไม่ใช่แค่ตัวเลขไฟฟ้า

ในข่าว AI infrastructure ช่วงหลัง เราเห็นตัวเลข gigawatt, megawatt และจำนวน accelerator บ่อยขึ้นเรื่อย ๆ แต่กรณีนี้ 30 MW มีความหมายเฉพาะกว่าเพราะผูกกับตลาด regulated enterprise

Rackspace และ AMD ระบุว่าความจุนี้จะรองรับ workload ที่ต้องการ governance สูง เช่น healthcare provider ที่สนใจ clinical AI และ inference at scale

ถ้าเป็น consumer AI หรือ developer sandbox คำถามหลักอาจเป็น cost, latency และ model quality แต่ถ้าเป็น healthcare, financial services, public sector หรือ sovereign workload คำถามจะต่างออกไป:

- data อยู่ region ไหน
- ใครเห็นข้อมูลได้บ้าง
- audit trail เพียงพอหรือไม่
- model และ agent เรียก tool อะไรได้
- ใครรับผิดชอบเมื่อระบบล้ม
- SLA, uptime และ incident response ถูกออกแบบอย่างไร

ดังนั้น 30 MW ในข่าวนี้จึงไม่ใช่การเช่า bare metal GPU จำนวนมากอย่างเดียว แต่เป็นความพยายามสร้าง managed AI infrastructure ที่มี operating model ครบ

## Rackspace ขาย governance เป็น product

Rackspace ใช้คำว่า governed enterprise AI infrastructure ชัดเจนมาก

ความต่างจาก cloud GPU ทั่วไปคือ Rackspace พยายามวางตัวเป็น operator ที่รับผิดชอบ stack ตั้งแต่ private cloud, AI inference, agents in production, data foundations และ forward-deployed engineering

ชุด capability ที่จะถูกเร่งผ่านข้อตกลงนี้มี 4 ส่วน:

- **Enterprise AI Cloud**
- **Enterprise Inference Engine**
- **Inference as a Service**
- **Bare Metal AMD Instinct**

นี่คือการบอกตลาดว่า enterprise บางกลุ่มไม่ได้อยากประกอบเองทุกชิ้น ตั้งแต่ hardware, cluster, model serving, monitoring, security, governance และ application integration พวกเขาต้องการผู้ให้บริการที่รับผิดชอบผลลัพธ์ได้มากกว่าแค่ขาย capacity

## AMD ได้อะไรจากดีลนี้

สำหรับ AMD ข่าวนี้สำคัญเพราะตลาด AI accelerator ไม่ได้มีแค่ hyperscaler ขนาดใหญ่

NVIDIA ยังเป็นผู้นำใน AI training และ inference แต่ AMD ต้องการพื้นที่ที่ value proposition ของตัวเองชัดขึ้น เช่น:

- open ecosystem
- ROCm และ software stack ที่ mature ขึ้น
- CPU/GPU combination สำหรับ heterogeneous workload
- enterprise และ sovereign AI ที่ต้องการทางเลือกจาก supply chain เดิม
- managed provider ที่ช่วยลด friction ในการ deploy AMD accelerator

การจับมือกับ Rackspace จึงช่วยให้ AMD มีเส้นทางไปยัง regulated enterprise workload ที่อาจไม่ได้อยากซื้อ capacity จาก hyperscaler รายเดียวทั้งหมด

## ข้อควรอ่านใน forward-looking statement

ประกาศนี้มีน้ำหนักเพราะเป็น definitive agreement แต่ก็ต้องอ่านเงื่อนไขอย่างระมัดระวัง

AMD และ Rackspace ระบุใน forward-looking statement ว่า deployment อาจไม่เกิดขึ้นเต็มจำนวนหรืออาจเกิดใน timeline ที่ต่างจากที่คาดไว้ได้ และ individual deployment ยังขึ้นกับ commercial terms, financing, operational condition และ legal condition

นี่เป็นรายละเอียดสำคัญ เพราะ AI infrastructure deal จำนวนมากในปี 2026 ใช้ตัวเลขใหญ่เพื่อสื่อ ambition แต่ capacity ที่ online จริงขึ้นกับหลายเรื่อง:

- product availability
- data center readiness
- financing cost
- power และ cooling
- customer demand
- interconnect และ operations
- regulatory requirement

ข่าวนี้จึงควรถูกมองเป็น framework ที่ชัดขึ้น ไม่ใช่หลักฐานว่า 30 MW ทั้งหมด online แล้วในวันนี้

## ทำไมข่าวนี้สำคัญต่อ Hardware / Infrastructure

AI infrastructure กำลังแยกเป็นหลายตลาดย่อย

ฝั่งหนึ่งคือ hyperscale AI factory สำหรับ frontier model และ consumer-scale inference อีกฝั่งคือ regulated/sovereign enterprise AI ที่ต้องการ control มากกว่า public cloud pattern แบบเดิม

Rackspace x AMD อยู่ในกลุ่มหลัง และชี้ว่า enterprise infrastructure กำลังเปลี่ยนจากคำถาม "เช่า GPU ที่ไหนถูกที่สุด" ไปสู่ "ใคร run AI workload ให้เราได้ภายใต้ policy, region, SLA และ accountability ที่ต้องการ"

สำหรับทีม infra นี่เป็นสัญญาณว่า governance จะถูกออกแบบตั้งแต่ hardware procurement และ platform architecture ไม่ใช่เอาไปแปะตอน application จะขึ้น production

## มุมมองของผม

ผมมองว่าดีลนี้น่าสนใจเพราะมันไม่ได้พยายามแข่งกับ hyperscaler ด้วยขนาดอย่างเดียว แต่เลือกโจทย์ที่ชัดกว่า คือ regulated enterprise ที่ต้องการ AI capacity พร้อม operating model

ถ้า Rackspace ทำได้จริง บริษัทจะไม่ใช่แค่ managed cloud provider แบบเดิม แต่จะกลายเป็น AI infrastructure operator ที่รับผิดชอบผลลัพธ์ของ workload ตั้งแต่ silicon ถึง agent workflow

ฝั่ง AMD ก็ได้ reference customer ที่ช่วยพิสูจน์ว่า Instinct + EPYC สามารถเข้า enterprise AI stack ได้โดยไม่ต้องรอให้ลูกค้าประกอบทุกอย่างเอง

สำหรับองค์กรที่กำลังวาง AI platform บทเรียนคือ infrastructure decision ปี 2026 ไม่ใช่แค่เลือก GPU รุ่นไหน แต่ต้องตอบว่าระบบรองรับ governance, data residency, observability, workload placement และ accountability อย่างไรตั้งแต่ต้น

สรุปสั้น ๆ:
**วันที่ 16 มิถุนายน 2026 AMD และ Rackspace ลงนาม definitive agreement เพื่อ deploy AMD AI compute 30 MW ระหว่างปลายปี 2026 ถึง 2028 ข่าวนี้ชี้ว่า AI infrastructure สำหรับ regulated enterprise จะวัดกันที่ governed stack และ operator accountability ไม่ใช่ capacity อย่างเดียว**

## หมายเหตุเรื่องภาพประกอบ

ภาพประกอบบทความนี้ดาวน์โหลดจาก official AMD press image สำหรับข่าว AMD/Rackspace ขนาด **1200x675 พิกเซล** ผ่านข้อกำหนด cover image ของ repo

## แหล่งอ้างอิง

- [AMD: AMD and Rackspace Technology Sign Definitive Agreement for Phased Deployment of 30 MW of AMD AI Compute](https://www.amd.com/en/newsroom/press-releases/2026-6-16-amd-and-rackspace-technology-sign-definitive.html)
- [Rackspace Technology: AMD and Rackspace Technology Sign Definitive Agreement for Phased Deployment of 30 MW of AMD AI Compute](https://www.rackspace.com/newsroom/amd-and-rackspace-technology-sign-definitive-agreement-phased-deployment)
- [SEC EDGAR: Rackspace 8-K exhibit press release dated June 16, 2026](https://www.sec.gov/Archives/edgar/data/1810019/000181001926000059/a20260616-pressrelease.htm)

