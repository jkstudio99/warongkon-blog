---
title: 'TensorWave ระดมทุน 350 ล้านดอลลาร์วันที่ 10 มิถุนายน 2026: AMD-backed neocloud เปิดศึกทางเลือกนอก NVIDIA'
seoTitle: 'TensorWave AMD Series B AI Cloud Funding - Warongkon Blog'
description: 'สรุปข่าว TensorWave วันที่ 10 มิถุนายน 2026 ระดมทุน Series B 350 ล้านดอลลาร์ นำโดย AMD และ Magnetar พร้อมขยาย AMD-only AI cloud, ROCm และ data center capacity'
pubDate: '2026-06-10'
tags: ["Hardware", "Infrastructure", "TensorWave", "AMD", "ROCm", "AI Cloud", "Data Centers", "Neocloud"]
coverImage: './cover.svg'
---

ข่าว **Hardware / Infrastructure** สำหรับรอบวันที่ **10 มิถุนายน 2026** คือ The Wall Street Journal รายงานว่า **TensorWave** ปิดรอบระดมทุน **Series B มูลค่า 350 ล้านดอลลาร์** นำโดย **AMD** และ Magnetar Capital ทำให้บริษัท cloud-computing startup รายนี้มีมูลค่า post-money ประมาณ **1.55 พันล้านดอลลาร์**

รอบก่อนบล็อกนี้พูดถึง NVIDIA/SK hynix memory partnership, UK AI Hardware Plan, AirTrunk India, Megaport inference cloud, DayOne และ Micron COMPUTEX ไปแล้ว ข่าววันนี้จึงเลือกอีกด้านของ AI infrastructure: ความพยายามสร้าง neocloud ที่ใช้ AMD เป็นแกนหลักเพื่อเป็นทางเลือกนอก ecosystem ของ NVIDIA

## TensorWave กำลังขายคำว่า alternative supply

WSJ รายงานวันที่ **10 มิถุนายน 2026** ว่า TensorWave ตั้งใจไม่ใช้ GPU หรือผลิตภัณฑ์ของ NVIDIA และเลือกใช้ hardware/software ของ AMD แทน เพราะบริษัทมองว่า dominance ของ NVIDIA ใน AI infrastructure อาจไม่ดีต่อการแข่งขันระยะยาว

รายละเอียดที่รายงานมีหลายจุด:

- รอบ Series B มีมูลค่า **350 ล้านดอลลาร์**
- นักลงทุนหลักคือ **AMD** และ Magnetar Capital
- valuation เพิ่มเป็น **1.55 พันล้านดอลลาร์** จากประมาณ **400 ล้านดอลลาร์** ในรอบก่อน
- TensorWave มี data centers ใน Pennsylvania, Arizona และ Florida
- บริษัทมี AMD GPUs ประมาณ **10,000 ตัว**
- กำลังดำเนินงานที่ capacity ประมาณ **14MW**
- มี lease capacity รวม **500MW**
- แผนระยะยาวคือขยายเป็น **2GW**

ข่าวนี้ทำให้ TensorWave ขยับจาก niche AMD cloud provider ไปเป็นสัญญาณว่าตลาดเริ่มให้ราคากับ non-NVIDIA compute stack มากขึ้น

## เงินจาก AMD มีทั้งข้อดีและคำถาม

Barron's วิเคราะห์วันเดียวกันว่า AMD กำลังใช้ tactic คล้าย NVIDIA คือลงทุนใน cloud provider ที่ใช้ hardware ของตัวเอง โดยเปรียบเทียบกับกรณี NVIDIA สนับสนุน neocloud อย่าง CoreWeave และ Nebius

มุมบวกคือ AMD ได้ demand ที่ชัดขึ้นสำหรับ Instinct GPUs และ TensorWave ได้ทุนเพื่อซื้ออุปกรณ์ สร้าง data center และปรับ software stack ให้พร้อมสำหรับลูกค้า AI

แต่มุมที่ต้องระวังคือ circular-financing concern:

- chip vendor ลงทุนใน cloud provider
- cloud provider ใช้เงินไปซื้อ hardware ของ chip vendor
- revenue และ demand ของ vendor อาจดูแข็งแรงขึ้น
- investor ต้องแยกว่าเป็น demand จากลูกค้าจริงหรือ demand ที่ถูกเร่งด้วยทุน

ในภาวะ AI boom คำถามนี้สำคัญมาก เพราะ hyperscaler และ neocloud จำนวนมากกำลังประกาศ capex ใหญ่จนตลาดเริ่มมองว่า capacity บางส่วนอาจถูกสร้างเร็วกว่า demand ที่ยั่งยืน

## ROCm คือเดิมพันระยะยาวของดีลนี้

จุดต่างของ TensorWave ไม่ใช่แค่ใช้ชิป AMD แต่คือการพยายามทำให้ **ROCm** ใช้งาน production ได้จริงใน scale ที่ลูกค้า AI ยอมรับ

Tom's Hardware เคยรายงานปี 2025 ว่า TensorWave deploy cluster AMD Instinct MI325X จำนวน **8,192 GPUs** พร้อม direct liquid cooling โดยระบุว่าเป็น AMD GPU training cluster ขนาดใหญ่ในอเมริกาเหนือ

บริบทนี้ช่วยอธิบายว่าทำไมรอบทุนวันที่ 10 มิถุนายน 2026 จึงสำคัญ:

- AMD ต้องการ proof point ว่า ROCm ใช้งานได้กับ training และ inference จริง
- ลูกค้า AI ต้องการทางเลือกด้านราคาและ supply
- TensorWave ต้องลงทุนหนักใน data center, cooling และ engineering support
- ecosystem ของเครื่องมือ, library และ model serving บน AMD ต้องโตตาม hardware

ถ้า TensorWave scale ได้จริง AMD จะมี reference customer ที่ชัดกว่าการขาย GPU เป็นชิ้น ๆ

## ผลต่อ AI infrastructure market

ตลาด AI cloud ปี 2026 มีปัญหาหลักคือ compute supply ไม่สมดุลกับ demand และส่วนใหญ่ถูกผูกกับ NVIDIA ecosystem

การมี AMD-only neocloud อาจเปลี่ยน dynamics หลายอย่าง:

- ลูกค้ามี leverage ในการต่อราคา compute
- model serving อาจ optimize สำหรับ AMD มากขึ้น
- open-source runtime และ inference engine ต้องรองรับ ROCm ดีขึ้น
- workload บางประเภทอาจย้ายไป AMD ถ้า price/performance คุ้ม
- NVIDIA ยังครอง high-end training stack แต่ไม่ใช่ทางเลือกเดียวในทุกงาน

อย่างไรก็ตาม การชน CUDA ecosystem ไม่ใช่เรื่องง่าย เพราะ developer tooling, kernel maturity, framework support และ operational playbook ของ NVIDIA มีความได้เปรียบสะสมมานาน

## มุมมองของผม

ผมมองว่า TensorWave เป็นข่าว hardware/infrastructure ที่สำคัญเพราะ AI cloud กำลังเปลี่ยนจาก "ใครมี GPU" ไปเป็น "ใครมี supply chain, software stack และ capital structure ที่ลูกค้าพึ่งพาได้"

AMD จะชนะเฉพาะราคาถูกกว่าไม่ได้ ต้องทำให้ customer experience ตั้งแต่ provisioning, model serving, distributed training, monitoring และ support ใช้งานง่ายพอสำหรับทีม AI ที่ไม่ได้อยาก debug driver ทุกสัปดาห์

ถ้า TensorWave ใช้เงินรอบนี้สร้าง capacity และ tooling ได้จริง ตลาดจะมีตัวเลือกที่แข็งแรงขึ้น แต่ถ้าการใช้งานจริงยังติด software gap นักลงทุนจะมองดีลนี้เป็นแค่การดัน demand ฝั่ง hardware มากกว่าการสร้าง cloud platform ที่ยั่งยืน

สรุปสั้น ๆ:
**TensorWave ปิด Series B 350 ล้านดอลลาร์วันที่ 10 มิถุนายน 2026 นำโดย AMD และ Magnetar Capital ที่ valuation 1.55 พันล้านดอลลาร์ ข่าวนี้ชี้ว่า AI infrastructure race เริ่มมีสนามของ AMD-only neocloud ที่ต้องพิสูจน์ทั้ง capacity, ROCm maturity และ demand จริงจากลูกค้า**

## หมายเหตุเรื่องภาพประกอบ

รอบนี้พบภาพ TensorWave data center racks จากแหล่งข่าวและ CDN ที่เกี่ยวข้องโดยตรงกับเรื่อง แต่ shell environment ไม่สามารถ resolve DNS ของ `cdn.mos.cms.futurecdn.net` เพื่อดาวน์โหลด asset เข้าสู่ repo ได้ จึงใช้ภาพ SVG ขนาด 1200x630 ที่สร้างเฉพาะบทความนี้เป็น fallback

## แหล่งอ้างอิง

- [The Wall Street Journal: Anti-Nvidia Data-Center Startup Is Valued at $1.55 Billion in New Funding Round](https://www.wsj.com/tech/ai/anti-nvidia-data-center-startup-is-valued-at-1-55-billion-in-new-funding-round-e58b2aec)
- [Barron's: How AMD Is Mimicking Nvidia's Circular Funding Deals](https://www.barrons.com/articles/amd-stock-price-nvidia-circular-financing-6cc9c0c2)
- [Tom's Hardware: TensorWave deployed the largest AMD GPU training cluster in North America](https://www.tomshardware.com/pc-components/gpus/tensorwave-just-deployed-the-largest-amd-gpu-training-cluster-in-north-america-features-8-192-mi325x-ai-accelerators-tamed-by-direct-liquid-cooling)
