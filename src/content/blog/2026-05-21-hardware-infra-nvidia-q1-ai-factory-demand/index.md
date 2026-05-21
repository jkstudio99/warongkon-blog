---
title: 'NVIDIA รายงานผลวันที่ 20 พฤษภาคม 2026: Data Center 75.2 พันล้านดอลลาร์บอกว่า AI factory ยังเร่งไม่หยุด'
seoTitle: 'NVIDIA Q1 FY2027 AI Factory Data Center Revenue - Warongkon Blog'
description: 'สรุป NVIDIA Q1 FY2027 วันที่ 20 พฤษภาคม 2026 รายได้รวม 81.6 พันล้านดอลลาร์ รายได้ Data Center 75.2 พันล้านดอลลาร์ และกรอบรายงานใหม่ Hyperscale กับ ACIE'
pubDate: '2026-05-21'
tags: ["Hardware", "Infrastructure", "NVIDIA", "Data Center", "AI Factory"]
coverImage: './cover.svg'
---

ข่าว **Hardware / Infrastructure** สำหรับรอบวันที่ **21 พฤษภาคม 2026** คือผลประกอบการ **NVIDIA ไตรมาสแรกปีงบประมาณ 2027** ที่บริษัทประกาศเมื่อวันที่ **20 พฤษภาคม 2026**

ตัวเลขหลักชัดมาก: NVIDIA รายงานรายได้รวม **81.6 พันล้านดอลลาร์สหรัฐ** เพิ่มขึ้น **85%** จากปีก่อน และรายได้ **Data Center 75.2 พันล้านดอลลาร์** เพิ่มขึ้น **92%** จากปีก่อน

ผมหยิบข่าวนี้เพราะมันเป็น data point สดที่สุดของรอบวันว่า demand ฝั่ง AI infrastructure ยังไม่ได้ชะลอ และยังสะท้อนว่า "AI factory" กำลังกลายเป็นหมวด infrastructure ทางเศรษฐกิจที่วัดผลด้วยรายได้จริง ไม่ใช่แค่ narrative จาก keynote

## ตัวเลขของ NVIDIA บอกอะไร

สำหรับไตรมาสที่สิ้นสุดวันที่ **26 เมษายน 2026** NVIDIA รายงาน:

- รายได้รวม **81.6 พันล้านดอลลาร์**
- รายได้ Data Center **75.2 พันล้านดอลลาร์**
- Data Center compute revenue ตามกรอบเดิม **60.4 พันล้านดอลลาร์**
- Data Center networking revenue ตามกรอบเดิม **14.8 พันล้านดอลลาร์**
- NVIDIA คาดรายได้ไตรมาสสองปีงบประมาณ 2027 ที่ **91.0 พันล้านดอลลาร์** บวกลบ 2%
- บริษัทระบุว่า outlook ไตรมาสถัดไป **ไม่ได้รวม Data Center compute revenue จากจีน**

ตัวเลข networking ที่โตแรงเป็นจุดที่ควรอ่านคู่กับ compute เพราะ infrastructure AI ไม่ได้ scale ด้วย GPU อย่างเดียวอีกแล้ว

เมื่อ workload ขยับจาก training batch ใหญ่ ไปสู่ inference, agentic AI, retrieval, tool use และ physical AI การเชื่อมต่อระหว่าง GPU, storage, data pipeline และ network fabric เริ่มเป็น bottleneck ระดับเดียวกับ accelerator

## กรอบรายงานใหม่สะท้อนตลาดใหม่

NVIDIA ยังประกาศว่าจะเปลี่ยนกรอบรายงานธุรกิจเป็นสอง market platforms คือ **Data Center** และ **Edge Computing**

ภายใน Data Center บริษัทจะแยกเป็น:

- **Hyperscale**: public cloud และ consumer internet companies ขนาดใหญ่
- **ACIE**: AI Clouds, Industrial และ Enterprise

นี่ไม่ใช่แค่การเปลี่ยนคำใน financial report แต่เป็นการยอมรับว่าลูกค้า AI infrastructure ไม่ได้มีแค่ hyperscaler อีกต่อไป

ACIE คือกลุ่มที่น่าจับตา เพราะรวม AI cloud เฉพาะทาง, industrial deployment, enterprise AI factory และ sovereign AI projects ซึ่งเป็นตลาดที่เริ่มมีโจทย์ต่างจาก hyperscaler:

- ต้องการ deployment ใกล้ข้อมูลหรือใกล้โรงงาน
- ต้องคิดเรื่อง data sovereignty
- ต้องมี reliability และ governance แบบ enterprise
- ต้องคุม cost per token และ energy efficiency
- ต้องมี networking, optics และ storage ที่รองรับ inference ต่อเนื่อง

ถ้ากลุ่มนี้โตจริง ตลาด hardware จะมี demand spectrum กว้างขึ้น ตั้งแต่ rack-scale cloud ไปจนถึง enterprise pod และ edge AI system

## Highlights ชี้ว่า stack กำลังลึกขึ้น

ในหมวด Data Center ของประกาศ NVIDIA ระบุความเคลื่อนไหวหลายชิ้นที่ช่วยอธิบายว่าทำไมรายได้ infrastructure ยังเดินหน้า:

- Vera Rubin platform และ Vera CPU สำหรับ agentic AI
- BlueField-4 STX สำหรับ accelerated storage infrastructure
- Dynamo 1.0 สำหรับ inference scaling บน Blackwell GPUs
- NemoClaw, OpenShell และ Agent Toolkit สำหรับ enterprise agents
- collaboration กับ Google Cloud, Marvell, Coherent, Corning และ Lumentum

รายชื่อเหล่านี้บอกว่า NVIDIA ไม่ได้ขายแค่ GPU แต่กำลังทำให้ AI factory เป็น stack ที่มี compute, networking, storage, optics, inference OS, model tooling และ enterprise software อยู่ด้วยกัน

สำหรับทีม infrastructure นี่เป็นสัญญาณว่าการวางแผนปี 2026 ต้องคิดเป็นระบบ ไม่ใช่ procurement แบบซื้อ GPU แล้วค่อยหาวิธีต่อระบบทีหลัง

## มุมมองของผม

ผมมองว่าผลประกอบการวันที่ **20 พฤษภาคม 2026** เป็นข่าว Hardware / Infrastructure ที่สำคัญเพราะมันเปลี่ยนคำว่า AI factory จากคำการตลาดให้กลายเป็นงบลงทุนที่เห็นในรายได้

จุดที่ควรจับตาต่อคือรายได้ ACIE, networking, optics และ storage เพราะส่วนเหล่านี้จะบอกว่า AI infrastructure กำลังขยายจาก hyperscaler ไปสู่ enterprise, industrial และ sovereign deployment แค่ไหน

สรุปสั้น ๆ:
**ตัวเลข Data Center 75.2 พันล้านดอลลาร์ของ NVIDIA บอกว่า AI infrastructure cycle ยังอยู่ในช่วงเร่ง และ bottleneck ของรอบถัดไปจะอยู่รอบ GPU มากพอ ๆ กับตัว GPU เอง**

## หมายเหตุเรื่องภาพประกอบ

รอบนี้พยายามดึงภาพประกอบจากแหล่งข่าวด้วย `curl` แล้ว แต่ environment ไม่สามารถ resolve DNS ของ `nvidianews.nvidia.com` ได้ จึงใช้ภาพ SVG ที่สร้างใน repo เป็น fallback เฉพาะบทความนี้

## แหล่งอ้างอิง

- [NVIDIA Newsroom: NVIDIA Announces Financial Results for First Quarter Fiscal 2027](https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-first-quarter-fiscal-2027)
- [Axios: Nvidia earnings show AI demand is still roaring](https://www.axios.com/2026/05/20/nvidia-earnings-shows-ai-demand-is-still-roaring)
