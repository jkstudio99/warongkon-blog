---
title: 'NVIDIA ใช้ OCP 2026 เปิดเวที AI factory: MGX, Vera Rubin และ tokens per watt ขึ้นหน้าเวที'
seoTitle: 'NVIDIA OCP AI Factory Infrastructure October 2026'
description: 'สรุปข่าว Hardware / Infrastructure วันที่ 12 ตุลาคม 2026 เมื่อ NVIDIA เข้าสู่ OCP Global Summit พร้อม keynote เรื่อง open infrastructure สำหรับ AI factories'
pubDate: '2026-10-12'
tags:
  [
    'Hardware Infrastructure',
    'NVIDIA',
    'OCP Global Summit',
    'AI Factory',
    'MGX',
    'Vera Rubin',
    'Vera CPU',
    'Accelerated Computing',
    'Data Center',
    'Open Infrastructure'
  ]
coverImage: './cover.jpg'
---

ข่าว **Hardware / Infrastructure** สำหรับรอบวันที่ **12 ตุลาคม 2026** คือการเปิดงาน **OCP Global Summit 2026** ที่ San Jose ระหว่าง **12-15 ตุลาคม 2026** โดย **NVIDIA** ใช้หน้า event official ของตัวเองวาง agenda ชัดเจน: AI factory, networking, energy efficiency, security และ accelerated computing ต้องถูกเล่าเป็นระบบเดียวกัน

หัวใจของวันแรกคือ keynote ของ **Ian Buck, VP of Hyperscale and High-Performance Computing ของ NVIDIA** ในวันจันทร์ที่ **12 ตุลาคม 2026** ภายใต้หัวข้อ open infrastructure สำหรับ agentic AI และการทำให้ AI factories scale ได้จริง

## OCP กลายเป็นเวทีของ AI factory stack

ถ้ามองย้อนกลับไปไม่กี่ปี ข่าว hardware AI มักถูกเล่าผ่าน GPU ตัวใหม่เป็นหลัก แต่ OCP 2026 บอกว่าตลาดย้ายมาถามคำถามกว้างกว่าเดิมแล้ว: rack ต้องกินไฟเท่าไร, cooling รับไหวหรือไม่, network fabric scale แบบไหน, software validation ทำอย่างไร และระบบเปิดพอให้ ecosystem ทำงานร่วมกันหรือเปล่า

หน้า OCP ระบุว่างานปีนี้ sold out และจัดที่ San Jose ระหว่าง **12-15 ตุลาคม 2026** พร้อมวางธีมเป็นพื้นที่ให้ community แบ่งปัน open hardware, software และ infrastructure ที่ efficient, scalable และ sustainable มากขึ้น

นี่ทำให้การปรากฏตัวของ NVIDIA ไม่ใช่แค่ booth showcase แต่เป็นการบอกว่าบริษัทต้องการวาง AI factory เป็น architecture ที่ ecosystem สามารถผลิต ติดตั้ง และ validate ร่วมกันได้

## MGX คือแกนของ ecosystem ไม่ใช่แค่ chassis

หนึ่งในจุดที่ NVIDIA ดันเด่นคือ **AI Factory MGX Ecosystem Showcase** บริษัทอธิบายว่า MGX เป็น reference architecture แบบ modular สำหรับ accelerated computing ตั้งแต่ single-node server ไปจนถึง rack-scale AI factories

จุดที่สำคัญคือ NVIDIA ระบุว่ามี ecosystem partners มากกว่า **200 ราย** adopt การออกแบบ MGX แล้ว นี่สะท้อนว่าในตลาด infrastructure ปี 2026 ความเร็วในการออกแบบและส่งมอบระบบสำคัญพอ ๆ กับ performance ของ silicon เพราะผู้ซื้อ enterprise และ hyperscaler ต้องการ supply chain ที่ทำซ้ำได้ ไม่ใช่ prototype ที่สวยแต่ scale ยาก

MGX จึงเป็นภาษากลางระหว่าง GPU, CPU, DPU, storage, networking, power และ cooling ทำให้ vendor หลายรายประกอบระบบ AI ได้เร็วขึ้นโดยไม่ต้องเริ่มจากศูนย์ทุก generation

## Vera Rubin และ Vera CPU ทำให้คำว่า tokens per watt เป็น metric กลาง

NVIDIA ยังใช้หน้า OCP อธิบาย **Vera Rubin** ในฐานะ pod-scale foundation สำหรับ AI factories ที่ออกแบบมาเพื่อ agentic AI, performance per watt และ lowest token cost ผ่าน co-design หลายชั้น

อีกชิ้นคือ **Vera CPU** ที่บริษัทวางเป็น processor สำหรับยุค agentic AI เพื่อช่วยให้ GPU ถูกใช้งานต่อเนื่องและลดคอขวดของงาน reasoning หรือ agent workflow ที่ต้องเดินหลายขั้น

ประเด็นนี้สำคัญเพราะ data center กำลังเปลี่ยนจากการวัดเฉพาะ FLOPS ไปสู่ metric ที่ใกล้เศรษฐศาสตร์ของ AI production มากขึ้น เช่น tokens per watt, latency ต่อ workflow, utilization ของ accelerator และต้นทุนรวมต่อ rack

## Digital twin เข้ามาอยู่ในงานออกแบบ data center

อีก session ที่น่าจับตาบน agenda คือเรื่อง **AI Factory Digital Twin** และการ optimize tokens per watt across the full stack นี่บอกว่าการสร้าง data center สำหรับ AI ไม่ได้จบที่ procurement แต่ต้องจำลอง ทดสอบ และปรับแต่งตั้งแต่ power distribution, airflow, cooling ไปจนถึง logical topology

เมื่อ workload เป็น agentic และ inference มี pattern ไม่แน่นอน การออกแบบจาก spreadsheet ธรรมดาอาจไม่พอ ผู้ให้บริการต้องเห็นทั้ง physical และ logical behavior ของโรงงาน AI ก่อนเปิดใช้งานจริง

## สรุป

สำหรับวันที่ **12 ตุลาคม 2026** ข่าว NVIDIA ที่ OCP Global Summit เป็นข่าว **Hardware / Infrastructure** ที่ชัด เพราะมันแสดงให้เห็นว่า AI infrastructure กำลังกลายเป็นระบบอุตสาหกรรมเต็มรูปแบบ ไม่ใช่การแข่งประกาศ accelerator ทีละชิ้น

หาก OCP 2026 ทำให้ architecture อย่าง MGX, Vera Rubin และ AI factory digital twin มี reference design ที่ ecosystem ใช้ร่วมกันได้มากขึ้น ตลาด AI data center จะเริ่มตัดสินกันด้วยความเร็วในการสร้างระบบจริง ประสิทธิภาพต่อพลังงาน และความเปิดของ supply chain มากกว่า headline chip อย่างเดียว

ภาพประกอบบทความนี้ดาวน์โหลดจาก official NVIDIA OCP page ส่วน **AI Factory MGX Ecosystem** ขนาด **1920x1080 พิกเซล** ผ่านข้อกำหนด cover image ของ repo

## แหล่งอ้างอิง

- [NVIDIA - Join NVIDIA at OCP Global Summit 2026](https://www.nvidia.com/en-us/events/ocp-summit/)
- [Open Compute Project - 2026 OCP Global Summit](https://www.opencompute.org/events/ocp-summit/2026-ocp-global-summit/)
- [NVIDIA - MGX Platform](https://www.nvidia.com/en-us/data-center/products/mgx/)

