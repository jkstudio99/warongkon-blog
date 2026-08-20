---
title: 'A100 ยังไม่หมดอายุ: CoreWeave ดีลถึง 2029 ทำให้ lifecycle ของ GPU กลายเป็นข่าว infrastructure'
seoTitle: 'CoreWeave A100 2029 GPU Lifecycle August 2026 Hardware Infrastructure - Warongkon Blog'
description: 'สรุปข่าววันที่ 20 สิงหาคม 2026 เรื่อง CoreWeave เช่า Nvidia A100 ต่อถึงปี 2029 สะท้อนว่า GPU รุ่นเก่ายังทำเงินได้ และทำให้ asset life กลายเป็นโจทย์ใหม่ของ AI infrastructure'
pubDate: '2026-08-20'
tags:
  [
    'Hardware',
    'Infrastructure',
    'CoreWeave',
    'Nvidia',
    'A100',
    'GPU',
    'AI Data Centers',
    'AI Cloud',
    'Depreciation',
    'Inference'
  ]
coverImage: './cover.svg'
---

ข่าว **Hardware / Infrastructure** สำหรับรอบวันที่ **20 สิงหาคม 2026** คือบทวิเคราะห์ของ The Wall Street Journal ที่เผยแพร่วันที่ **19 สิงหาคม 2026** เรื่อง **New Jobs for Old AI Chips** ซึ่งชี้ว่าชิป AI รุ่นเก่า โดยเฉพาะ **Nvidia A100** ที่เปิดตัวในปี 2020 ยังมีงานใหม่และยังทำเงินได้มากกว่าที่หลายคนเคยประเมิน

จุดที่ทำให้ข่าวนี้น่าสนใจคือ **CoreWeave** ระบุในการคุยกับนักวิเคราะห์ช่วงสัปดาห์ก่อนว่า บริษัทเพิ่งเซ็นดีลให้เช่า A100 ต่อเนื่องไปถึงปี **2029** ในราคาที่ผู้บริหารเรียกว่า attractive นั่นแปลว่าชิปที่ออกสู่ตลาดตั้งแต่ปี 2020 อาจยังถูกใช้งานเชิงพาณิชย์ต่ออีกเกือบเก้าปีหลังเปิดตัว

นี่ไม่ใช่ข่าว product launch แต่เป็นข่าว infrastructure ที่สำคัญ เพราะมันตั้งคำถามตรง ๆ ว่า AI GPU ควรถูกคิดค่าเสื่อมราคาและตีมูลค่าสินทรัพย์อย่างไรในยุคที่ demand inference โตเร็ว แต่ power, cooling และ chip รุ่นใหม่ยังเป็นคอขวด

## ไม่ใช่ทุก workload ต้องใช้ Blackwell

ตลาด AI มักพูดถึง GPU รุ่นใหม่ที่สุด เพราะ frontier training ต้องการ performance สูงสุด แต่ workload จริงในองค์กรกว้างกว่านั้นมาก

A100 อาจไม่ใช่ชิปที่เร็วหรือประหยัดไฟที่สุดแล้ว แต่ยังเหมาะกับงานหลายแบบ เช่น:

- inference สำหรับโมเดลขนาดกลาง
- batch processing และ data enrichment
- fine-tuning ที่ไม่ต้องใช้ cluster รุ่นล่าสุด
- embedding, reranking และ retrieval pipeline
- internal AI tool ที่เน้น cost control
- workload ที่ latency ไม่ได้เป็นตัวแปรหลัก

ถ้าลูกค้ายอมจ่ายเพื่อใช้ A100 ต่อถึงปี 2029 ความหมายคือ AI infrastructure ไม่ได้มี lifecycle สั้นแบบ smartphone เสมอไป ชิปบางรุ่นอาจเปลี่ยนจากเครื่องมือ training ชั้นนำไปเป็น capacity ราคาคุ้มสำหรับงาน production ระดับรอง

## ค่าเสื่อมราคากลายเป็นตัวแปรสำคัญ

บริษัท cloud และ neocloud มักคิดค่าเสื่อมราคาของ GPU ในช่วงประมาณสี่ถึงหกปี เมื่อสินทรัพย์ผ่านช่วงค่าเสื่อมไปแล้ว รายได้ที่ได้จากการให้เช่าต่ออาจมี margin สูงขึ้น ถ้าราคาตลาดยังไม่ตกแรงเกินไป

นี่ทำให้ดีล A100 ของ CoreWeave สำคัญต่อ model ทางการเงินของ AI cloud:

- asset ที่คิดค่าเสื่อมไปมากแล้วอาจยังสร้าง cash flow ได้
- lender อาจมอง GPU เป็น collateral ที่มีอายุยืนขึ้น
- operator ที่มี fleet หลากหลายรุ่นสามารถจับคู่ workload กับ chip ได้ดีขึ้น
- ลูกค้าที่ไม่ต้องการ performance สูงสุดมีตัวเลือก compute ราคาถูกกว่า
- ตลาดจะเริ่มแยก "latest GPU" ออกจาก "usable GPU"

แต่ข่าวนี้ไม่ได้แปลว่า GPU เก่าปลอดความเสี่ยงทั้งหมด เพราะ hardware failure, power efficiency และ cooling economics ยังเป็นข้อจำกัดจริง

## Power efficiency คือจุดที่ A100 เสียเปรียบ

ข้อโต้แย้งสำคัญคือ data center กำลังติดคอขวดไฟฟ้า ถ้าไฟเป็นทรัพยากรที่หายาก ผู้ให้บริการอาจเลือกใช้ชิปรุ่นใหม่ที่ให้ throughput ต่อวัตต์สูงกว่า แม้ต้นทุนซื้อแพงกว่า

นี่คือเหตุผลที่ A100 lifecycle ไม่ได้ขึ้นกับอายุชิปอย่างเดียว แต่ขึ้นกับบริบทของ site:

- ถ้าไฟเหลือและชิปคิดค่าเสื่อมไปแล้ว A100 อาจยังคุ้ม
- ถ้า site ถูกจำกัดด้วย MW ชิปรุ่นใหม่อาจมีมูลค่ามากกว่า
- ถ้าลูกค้าต้องการ latency ต่ำหรือ model ใหญ่ A100 อาจไม่พอ
- ถ้าค่าไฟเพิ่มขึ้น margin ของชิปเก่าจะถูกบีบ
- ถ้า failure rate สูงขึ้นตามอายุ cluster capacity จริงจะลดลง

ดังนั้นข่าวนี้ไม่ใช่คำตอบว่าชิปเก่าดีหรือแย่ แต่ทำให้เห็นว่า AI infrastructure ต้องบริหาร portfolio ของ compute เหมือนบริหาร fleet เครื่องจักร ไม่ใช่ซื้อของใหม่แล้วทิ้งของเก่าทันที

## ผลต่อการเงินของ AI infrastructure

ในเดือนสิงหาคม 2026 ตลาดถกเถียงเรื่อง AI capex, data-center debt และ GPU-backed financing หนักขึ้นเรื่อย ๆ ข่าว A100 ต่อถึง 2029 จึงเป็นชิ้นส่วนสำคัญของคำถามใหญ่กว่า: สินทรัพย์ compute มีอายุทางเศรษฐกิจยาวพอให้ financing model ทำงานหรือไม่

ถ้า GPU ใช้งานเชิงพาณิชย์ได้ยาวขึ้น:

- debt financing อาจถูกลง
- residual value ของ cluster อาจสูงขึ้น
- neocloud มีทางแข่งขันกับ hyperscaler มากขึ้น
- depreciation schedule อาจถูกทบทวน
- investor จะดู utilization curve ละเอียดขึ้นกว่าเดิม

แต่ถ้า GPU เก่าถูกแทนที่เร็วเพราะประสิทธิภาพต่อไฟต่ำเกินไป ตลาดก็อาจพบว่ามูลค่า collateral ของ compute ไม่มั่นคงเท่าที่คาด

## บทเรียนต่อไทยและ SEA

ไทยและ SEA ที่กำลังดึง data center และ AI infrastructure ควรมองข่าวนี้ในเชิงปฏิบัติ ไม่ใช่แค่เรื่องหุ้น CoreWeave

ถ้าภูมิภาคต้องการสร้าง AI capacity จริง ต้องตอบโจทย์เหล่านี้:

- workload แบบใดควรใช้ GPU รุ่นล่าสุด และแบบใดใช้รุ่นเก่าได้
- data center มีไฟพอให้รัน fleet หลาย generation หรือไม่
- pricing สำหรับ inference ในประเทศต้องแข่งขันกับ cloud region นอกประเทศอย่างไร
- operator มีแผน maintenance และ replacement cycle ชัดหรือไม่
- สถาบันการเงินเข้าใจ risk ของ GPU collateral แค่ไหน
- supply chain cooling, power และ network พร้อมรองรับ cluster อายุยาวหรือไม่

ประเทศที่วาง compute portfolio ได้ดีอาจได้เปรียบ เพราะไม่ต้องรอเฉพาะชิปรุ่นใหม่ที่สุด แต่ยังใช้ asset รุ่นก่อนหน้าเพื่อสร้าง service ราคาคุ้มให้ startup และองค์กรในประเทศได้

## มุมมองของผม

ผมมองว่านี่เป็นข่าว Hardware / Infrastructure สำคัญของวันที่ **20 สิงหาคม 2026** เพราะมันย้ายคำถามจาก "ใครได้ GPU รุ่นใหม่ก่อน" ไปสู่ "GPU หนึ่งตัวทำเงินได้นานแค่ไหน และคุ้มไฟแค่ไหน"

A100 ที่ยังถูกเช่าถึงปี 2029 เป็นสัญญาณว่า AI infrastructure กำลัง mature ขึ้นจากตลาดของ scarcity ไปเป็นตลาดของ asset utilization, depreciation และ workload matching

สรุปสั้น ๆ:
**ข่าว WSJ วันที่ 19 สิงหาคม 2026 เรื่อง CoreWeave เช่า Nvidia A100 ต่อถึงปี 2029 ทำให้เห็นว่า GPU รุ่นเก่ายังมีมูลค่าในตลาด inference แต่ความคุ้มค่าจะขึ้นกับ power efficiency, failure rate และราคาที่ลูกค้ายอมจ่ายจริง**

## หมายเหตุเรื่องภาพประกอบ

ภาพประกอบบทความนี้เป็น **generated local SVG fallback** ขนาด **1280x720 พิกเซล** เพราะ local shell ของ automation ไม่สามารถ resolve DNS เพื่อดาวน์โหลดภาพ official หรือ source-provided จาก WSJ, CoreWeave หรือ Nvidia เข้ามาใน repo ได้โดยตรง (`Could not resolve host`) จึงไม่สามารถใช้ภาพจากเว็บได้ในรอบนี้

## แหล่งอ้างอิง

- [The Wall Street Journal: New Jobs for Old AI Chips](https://www.wsj.com/tech/ai/new-jobs-for-old-ai-chips-662bd533)
- [Tiger Brokers / Dow Jones: New Jobs for Old AI Chips](https://www.itiger.com/news/2660496389)
- [NVIDIA: A100 Tensor Core GPU](https://www.nvidia.com/en-us/data-center/a100/)
- [CoreWeave: Quarterly results and investor materials](https://investors.coreweave.com/financials/quarterly-results/default.aspx)
