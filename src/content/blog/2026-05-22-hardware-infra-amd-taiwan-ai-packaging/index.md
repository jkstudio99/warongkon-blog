---
title: 'AMD ลงทุนไต้หวันกว่า 1 หมื่นล้านดอลลาร์วันที่ 21 พฤษภาคม 2026: bottleneck ของ AI factory คือ advanced packaging'
seoTitle: 'AMD Taiwan AI Infrastructure Investment May 2026 - Warongkon Blog'
description: 'สรุป AMD ประกาศลงทุนกว่า 1 หมื่นล้านดอลลาร์ใน ecosystem ไต้หวัน พร้อม ramp EPYC Venice บน TSMC 2nm และเตรียม Helios rack-scale AI infrastructure'
pubDate: '2026-05-22'
tags: ["Hardware", "Infrastructure", "AMD", "AI Infrastructure", "Advanced Packaging"]
coverImage: './cover.svg'
---

ข่าว **Hardware / Infrastructure** สำหรับรอบวันที่ **22 พฤษภาคม 2026** คือประกาศของ **AMD** เมื่อวันที่ **21 พฤษภาคม 2026** ว่าบริษัทจะลงทุนมากกว่า **1 หมื่นล้านดอลลาร์สหรัฐ** ใน ecosystem ไต้หวัน เพื่อขยายความร่วมมือเชิงกลยุทธ์และเพิ่มกำลังการผลิต **advanced packaging** สำหรับ AI infrastructure รุ่นถัดไป

ข่าวนี้ตามมาติด ๆ หลังบทความวันที่ 21 พฤษภาคมที่พูดถึงผลประกอบการ NVIDIA และ demand ของ AI factory รอบนี้จึงขยับจาก "รายได้บอก demand" ไปสู่ "supply chain ต้องผลิตอะไรให้ทัน demand"

คำตอบของ AMD คือ chiplet, 2.5D bridge interconnect, packaging, ODM partners และ rack-scale systems

## AMD ประกาศอะไรในวันที่ 21 พฤษภาคม

ประกาศหลักของ AMD ระบุสามประเด็นใหญ่:

- ลงทุนมากกว่า **1 หมื่นล้านดอลลาร์** ใน Taiwan ecosystem
- พัฒนา **EFB-based 2.5D packaging** เพื่อเพิ่ม interconnect bandwidth และ power efficiency
- เตรียม deployment ของ **AMD Helios rack-scale platform** ในครึ่งหลังของปี 2026

AMD ระบุว่าจะทำงานกับพันธมิตรในไต้หวันและ global partners หลายราย เช่น **ASE, SPIL, PTI, Sanmina, Wiwynn, Wistron และ Inventec**

บทบาทของพันธมิตรเหล่านี้สำคัญมาก เพราะ AI infrastructure ไม่ใช่แค่การออกแบบ GPU หรือ CPU แล้วจบ แต่มันต้องผลิตเป็นระบบ rack-scale ที่มี silicon, packaging, substrate, memory, networking, mechanical design, cooling และ software stack ทำงานร่วมกัน

ในประกาศเดียวกัน AMD บอกว่า Helios จะใช้ **AMD Instinct MI450X GPUs**, **6th Gen AMD EPYC CPUs**, networking solutions และ **ROCm open software stack** เพื่อ scale จาก design ไปสู่ high-volume manufacturing

## Venice บน TSMC 2nm คืออีกครึ่งของข่าว

AMD ยังประกาศอีกฉบับในวันเดียวกันว่า **6th Gen AMD EPYC** โค้ดเนม **Venice** เริ่ม production ramp ในไต้หวันบน **TSMC 2nm process technology**

AMD เรียก Venice ว่าเป็น HPC product แรกของอุตสาหกรรมที่เข้าสู่ production ramp บน advanced 2nm ของ TSMC และบอกว่ามีแผน ramp ที่ TSMC Arizona ในอนาคตด้วย

นี่คือข่าว Hardware / Infrastructure ที่สำคัญเพราะ CPU กลับมาเป็นตัวแปรสำคัญใน AI data center อีกครั้ง

ในยุค training-heavy หลายคนมอง GPU เป็นศูนย์กลางของทุกอย่าง แต่ agentic AI และ inference workload ทำให้ CPU ต้องรับงาน orchestration หนักขึ้น:

- data movement
- networking coordination
- storage และ security
- job scheduling
- tool execution
- service orchestration ใน data center

ถ้า CPU foundation ไม่ทัน GPU cluster ทั้งระบบก็ไม่ไหลเร็วพอ

## Bottleneck ของ AI factory ไม่ได้อยู่ที่ชิปตัวเดียว

บทเรียนจากข่าวนี้คือ bottleneck ของ AI factory ปี 2026 อยู่รอบ ๆ ชิปพอ ๆ กับตัวชิป

การทำ AI system ที่ใหญ่ขึ้นต้องการ interconnect ที่หนาแน่นกว่าเดิม, memory ที่อยู่ใกล้ compute มากขึ้น, packaging ที่รองรับ thermal และ power envelope จริง และ supply chain ที่ประกอบระบบได้ใน volume สูง

**EFB หรือ Elevated Fanout Bridge** ที่ AMD พูดถึงมีเป้าหมายเพื่อเพิ่ม bandwidth ระหว่าง die และช่วยให้ระบบทำ performance-per-watt ได้ดีขึ้นภายใต้ข้อจำกัด power และ cooling ของโลกจริง

นี่คือสาเหตุที่ประกาศลงทุนในไต้หวันมีน้ำหนัก เพราะไต้หวันไม่ได้เป็นแค่ที่ตั้งโรงงาน wafer แต่เป็น ecosystem ของ packaging, assembly, ODM และ manufacturing know-how ที่ AI infrastructure ต้องใช้

## มุมมองของผม

ผมมองว่าข่าว AMD วันที่ **21 พฤษภาคม 2026** เป็นสัญญาณว่าการแข่ง AI hardware กำลังเข้าเฟส supply-chain execution

NVIDIA ยังคงเป็นผู้นำรายได้ data center แต่ AMD กำลังพยายามวางตัวเองเป็นทางเลือก full-stack สำหรับลูกค้าที่ต้องการ rack-scale AI infrastructure และไม่อยากให้ supply chain ขึ้นกับผู้เล่นรายเดียวมากเกินไป

จุดที่ควรจับตาต่อคือ Helios จะ deploy ได้ตามแผนครึ่งหลังปี 2026 หรือไม่ และ ROCm จะทำให้ลูกค้ารัน workload จริงได้ราบรื่นแค่ไหน เพราะ hardware ที่ดีจะชนะยากถ้า software และ operations ยังไม่ลด friction

สรุปสั้น ๆ:
**เงินลงทุนไต้หวันกว่า 1 หมื่นล้านดอลลาร์ของ AMD บอกว่า AI factory รอบถัดไปจะชนะกันที่ advanced packaging, rack-scale manufacturing และ ecosystem ที่ผลิตระบบได้ทัน demand**

## หมายเหตุเรื่องภาพประกอบ

รอบนี้พยายามดึงภาพประกอบจากแหล่งข่าวด้วย `curl` แล้ว แต่ shell environment ไม่สามารถ resolve DNS ของ `www.amd.com` ได้ จึงใช้ภาพ SVG ที่สร้างใน repo เป็น fallback เฉพาะบทความนี้

## แหล่งอ้างอิง

- [AMD Newsroom: AMD Announces More Than $10 Billion in Taiwan Ecosystem Investments to Accelerate AI Infrastructure](https://www.amd.com/en/newsroom/press-releases/2026-5-20-amd-announces-more-than-10-billion-in-taiwan-ecos.html)
- [AMD Newsroom: AMD Announces Production Ramp of Next-Generation AMD EPYC Processor "Venice" on TSMC 2nm Process Technology](https://www.amd.com/en/newsroom/press-releases/2026-5-20-amd-announces-production-ramp-of-next-generation-a.html)
- [Reuters via MarketScreener: AMD plans to invest over $10 billion across Taiwan's AI sector](https://www.marketscreener.com/news/amd-says-it-will-invest-over-10-billion-across-taiwan-s-ai-ecosystem-ce7f5ad9d081f426)
