---
title: 'Megaport วันที่ 3 มิถุนายน 2026: ระดมทุน A$827.3M เพื่อสร้าง AI inference cloud กระจายบน 1,100 data centers'
seoTitle: 'Megaport AI Inference Cloud A$827M June 2026 - Warongkon Blog'
description: 'สรุป Megaport ประกาศวันที่ 3 มิถุนายน 2026 เรื่องสัญญา AI infrastructure A$458.9M, entitlement offer A$827.3M และ GPU Pool สำหรับ distributed inference cloud'
pubDate: '2026-06-07'
tags: ["Hardware", "Infrastructure", "AI Infrastructure", "Inference Cloud", "Data Center", "Megaport", "GPU", "Australia"]
coverImage: './cover.svg'
---

ข่าว **Hardware / Infrastructure** สำหรับรอบวันที่ **7 มิถุนายน 2026** คือประกาศ ASX ของ **Megaport** วันที่ **3 มิถุนายน 2026** เรื่องการสร้าง **Globally-Distributed AI Inference Cloud** หลังบริษัทได้สัญญา AI infrastructure ใหม่ 4 ฉบับ และประกาศ fully underwritten entitlement offer เพื่อระดมทุน **A$827.3 million**

รอบก่อนบล็อกนี้พูดถึง DayOne data center Series C, Micron memory/storage stack, SoftBank AI data centers, Intel Xeon 6+ และ NVIDIA/TSMC AI fabs ไปแล้ว ข่าววันนี้จึงเลือกมุม **inference infrastructure**: เมื่อ AI ใช้งานจริงมากขึ้น bottleneck จะไม่ได้อยู่แค่ training cluster ขนาดใหญ่ แต่จะอยู่ที่ GPU pool, latency, network, storage และ data center footprint ที่กระจายใกล้ผู้ใช้

## Megaport ประกาศอะไร

เอกสาร ASX วันที่ **3 มิถุนายน 2026** ระบุ key highlights หลายข้อ:

- Megaport ได้สัญญา AI infrastructure ใหม่ 4 ฉบับ รวม **Total Contract Value ประมาณ A$458.9 million**
- สัญญาเหล่านี้ต้องใช้ capex ประมาณ **A$369.5 million** โดยหลักคือ high-performance NVIDIA GPUs, network และ storage infrastructure
- บริษัทจะตั้ง **on-demand GPU Pool** ด้วยเงินลงทุน **A$350.0 million**
- เป้าหมายคือสร้าง **Globally-Distributed AI Inference Cloud** โดยใช้ footprint มากกว่า **1,100 connected data centres ใน 31 ประเทศ**
- ระดมทุนผ่าน entitlement offer รวม **A$827.3 million**
- FY26 revenue guidance ถูก tighten เป็นช่วง **A$307 million ถึง A$315 million**

Reuters รายงานตามมาว่า Megaport กำลังวางตัวเองเป็น picks-and-shovels player ใน AI infrastructure race เพราะองค์กรต้องการ GPU capacity สำหรับโมเดลที่ซับซ้อนขึ้นและ workload inference ที่เพิ่มขึ้นเร็ว

## ทำไม inference cloud สำคัญขึ้นในปี 2026

ช่วงแรกของ AI boom ตลาดสนใจ training เป็นหลัก: ใครมี GPU cluster ใหญ่, ใคร train model ได้เร็ว, ใครมี HBM และ networking พอ

แต่เมื่อ AI agent, enterprise copilots, customer support, document automation, coding tools และ multimodal apps เริ่มใช้งานจริง ปัญหาจะเปลี่ยนจาก “train ให้ใหญ่” เป็น “serve ให้เร็ว, ถูก, เสถียร และใกล้ผู้ใช้”

Inference มีธรรมชาติที่ต่างจาก training:

- ต้องตอบกลับเร็วและ predictable
- workload กระจายตามพื้นที่และช่วงเวลา
- latency สำคัญกับ voice, agent และ real-time workflow
- data residency และ sovereign AI เริ่มมีผล
- ต้นทุนต่อ request มีผลต่อ margin ของ product
- GPU utilization ต้องบริหารละเอียดกว่าการซื้อ capacity ล่วงหน้าอย่างเดียว

Megaport จึงไม่ได้ขายแค่ GPU แต่ขาย logic ว่า network-as-a-service เดิมของบริษัทสามารถต่อยอดเป็น compute, storage และ connectivity layer สำหรับ inference ได้

## GPU Pool คือคำตอบของ demand ที่ไม่สม่ำเสมอ

ประกาศของ Megaport ระบุว่า GPU Pool จะรองรับทั้ง contracted และ consumption-based commercial models นี่เป็นจุดสำคัญ เพราะลูกค้า AI หลายรายไม่ได้มี workload คงที่แบบ 24/7 ทั้งหมด

บางทีมต้องการ burst capacity ช่วง launch, benchmark, migration หรือ agent rollout ขณะที่บางทีมต้องการสัญญาระยะยาวสำหรับ production inference

GPU Pool จึงมีบทบาทสามแบบ:

- ดึงลูกค้าใหม่ที่ต้องการ access เร็ว
- ให้ existing customer burst capacity
- เปลี่ยน usage ระยะสั้นให้กลายเป็น contracted deployment ระยะยาว

ถ้าทำได้จริง Megaport จะขยับจากการเป็น connectivity platform ไปเป็น infrastructure marketplace สำหรับ AI workload

## ทำไม 1,100 data centers เป็น advantage

Data center footprint ของ Megaport สำคัญเพราะ inference ไม่ได้ชนะด้วย GPU จำนวนมากเพียงอย่างเดียว

สำหรับงานบางประเภท เช่น enterprise assistant, retail recommendation, security analytics, call center voice agent หรือ sovereign AI workload การเอา compute ไปไว้ใกล้ network path ของลูกค้าจะช่วยลด latency และลดความซับซ้อนของ data movement

Megaport ระบุว่าความท้าทายหลักมีสามเรื่อง:

- data centre space and power
- low-latency global connectivity
- access to high-performance GPUs

นี่คือภาพ hardware/infrastructure แบบใหม่: ชิป, network และ commercial model ต้องถูกออกแบบพร้อมกัน ไม่ใช่แค่ซื้อ server แล้วรอลูกค้าเช่า

## ความเสี่ยงของแผนนี้

ข่าวนี้ไม่ได้มีแต่ upside เพราะ inference cloud มีความเสี่ยงหลายจุด:

- GPU procurement ใช้เวลาและราคาเปลี่ยนเร็ว
- ลูกค้า AI application อาจเปลี่ยน model stack หรือ hardware preference
- utilization ของ GPU Pool ต้องสูงพอให้ payback target เป็นจริง
- hyperscaler อาจลดราคา inference เพื่อกันคู่แข่ง
- latency advantage ต้องพิสูจน์กับ workload จริง ไม่ใช่แค่ map ของ data centers
- capex cycle ใหญ่ขึ้นทำให้บริษัท networking เดิมกลายเป็น infrastructure-financing business มากขึ้น

Megaport ระบุว่า GPU Pool จะใช้เวลาโดยประมาณ **6-9 เดือน** ในการ procure/deploy servers และอีก **3-6 เดือน** เพื่อ ramp สู่ utilization ที่เหมาะสม นั่นหมายความว่าผลลัพธ์เต็ม ๆ จะเห็นในปีงบประมาณถัดไป ไม่ใช่ทันที

## มุมมองของผม

ผมมองว่าข่าว Megaport เป็นสัญญาณชัดว่า AI infrastructure กำลังแตกออกเป็นหลายชั้นมากขึ้น

DayOne คือ capital + campus + power สำหรับ hyperscale data center ส่วน Megaport คือ network + distributed compute + GPU pool สำหรับ inference ใกล้ผู้ใช้ ทั้งสองข่าวอยู่ใน infrastructure stack เดียวกัน แต่แก้ bottleneck คนละจุด

สรุปสั้น ๆ:
**Megaport ประกาศวันที่ 3 มิถุนายน 2026 ว่าได้สัญญา AI infrastructure 4 ฉบับมูลค่า A$458.9M และจะระดมทุน A$827.3M เพื่อสร้าง distributed AI inference cloud ผ่าน GPU Pool และ footprint มากกว่า 1,100 data centers ใน 31 ประเทศ ข่าวนี้ย้ำว่า AI infrastructure ปี 2026 ไม่ได้แข่งกันแค่ training cluster แต่แข่งกันที่ inference latency, connectivity, storage และ commercial flexibility**

## หมายเหตุเรื่องภาพประกอบ

รอบนี้พยายามเข้าถึง ASX/source announcement ผ่าน shell เพื่อเตรียมดาวน์โหลด asset แล้ว แต่ environment ไม่สามารถ resolve DNS ของ `company-announcements.afr.com` ได้ จึงใช้ภาพ SVG ขนาด 1200x630 ที่สร้างเฉพาะบทความนี้เป็น fallback

## แหล่งอ้างอิง

- [Megaport ASX Release: Creation of GPU Pool, New Contracts, and Entitlement Offer](https://company-announcements.afr.com/asx/mp1/eaebaf91-5ecc-11f1-8424-a25307cfe2e4.pdf)
- [Reuters via Investing.com: Megaport secures 4 AI deals, to raise $594 million to build inference cloud](https://www.investing.com/news/stock-market-news/megaport-secures-4-ai-deals-to-raise-594-million-to-build-inference-cloud-4723278)
- [Data Center Dynamics: Megaport secures four AI contracts worth AU$458.9m](https://www.datacenterdynamics.com/en/news/megaport-secures-four-ai-contracts-worth-au4589m/)
