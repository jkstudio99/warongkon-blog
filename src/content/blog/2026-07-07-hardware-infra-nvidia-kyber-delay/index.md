---
title: 'Kyber NVL144 สะดุดหรือไม่: รายงานดีเลย์ Rubin Ultra ชี้ว่า rack-scale AI infra ยากกว่าที่ตลาดคิด'
seoTitle: 'NVIDIA Kyber NVL144 Rubin Ultra Delay Report July 2026 - Warongkon Blog'
description: 'สรุปรายงานวันที่ 6 กรกฎาคม 2026 ว่า NVIDIA Kyber NVL144 สำหรับ Rubin Ultra อาจเลื่อนไปปี 2028 ขณะที่ NVIDIA ตอบว่า roadmap ยัง intact'
pubDate: '2026-07-07'
tags: ["Hardware", "Infrastructure", "NVIDIA", "Kyber", "Rubin Ultra", "NVL144", "AI Infrastructure", "Rack Scale Systems", "NVLink", "Data Centers"]
coverImage: './cover.jpg'
---

ข่าว **Hardware / Infrastructure** สำหรับรอบวันที่ **7 กรกฎาคม 2026** คือรายงานจาก **Tom's Hardware** เมื่อวันที่ **6 กรกฎาคม 2026** ว่า **NVIDIA Kyber NVL144 rack** สำหรับยุค **Rubin Ultra** อาจเลื่อนไปปี **2028** หลังมีรายงานจาก **SemiAnalysis** เมื่อวันที่ **5 กรกฎาคม 2026** ว่าระบบ backplane เจอปัญหาการผลิต

ข่าวนี้ต้องอ่านอย่างระมัดระวัง เพราะยังไม่ใช่ประกาศเลื่อนอย่างเป็นทางการจาก NVIDIA และ Tom's Hardware อัปเดตเพิ่มเติมว่า NVIDIA ตอบกลับสั้น ๆ ว่า **roadmap ยัง intact** โดยไม่ได้ให้รายละเอียดเพิ่ม

แต่แม้จะยังเป็นรายงานที่มีความไม่แน่นอน ข่าวนี้ก็สำคัญมาก เพราะ Kyber ไม่ใช่ product เล็ก มันคือชิ้นส่วนของภาพใหญ่ที่ NVIDIA พยายามพา AI infrastructure จากระดับ GPU server ไปสู่ระดับ rack-scale supercomputer

## Kyber คือชั้นถัดไปของ rack-scale AI

ในแผนของ NVIDIA ยุค **Vera Rubin** และ **Rubin Ultra** ไม่ได้ขายเป็น GPU เดี่ยว ๆ แต่ขายเป็นระบบขนาด rack ที่รวม compute, NVSwitch, NVLink, liquid cooling, CPU, networking และ software stack เข้าด้วยกัน

Kyber NVL144 ถูกวางให้เป็น rack สำหรับ Rubin Ultra ที่เพิ่มความหนาแน่นขึ้นเป็น **144 Rubin Ultra packages** หรือประมาณสองเท่าของ rack แบบ **Oberon NVL72** ที่มี 72 packages

ความหมายคือ NVIDIA กำลังพยายามทำให้ scale-up domain ใหญ่ขึ้นภายใน rack เดียว เพื่อให้ workload AI ขนาดใหญ่สื่อสารระหว่าง accelerator ได้เร็วกว่า scale-out ผ่าน network ปกติ

ถ้าทำได้ดี hyperscaler จะได้ system ที่ให้ bandwidth และ latency เหมาะกับโมเดลขนาดใหญ่กว่าเดิม แต่ถ้าสะดุด จุดคอขวดจะไม่ได้อยู่ที่ GPU compute อย่างเดียว แต่อยู่ที่การเชื่อมทุกอย่างใน cabinet ให้เสถียรพอสำหรับ production

## ปัญหาที่ถูกรายงานคือ orthogonal backplane

Tom's Hardware อ้างรายงานของ SemiAnalysis ว่าประเด็นหลักอยู่ที่ **PCB midplane** หรือ orthogonal backplane ที่เชื่อม compute trays กับ switch trays และพา all-copper NVLink fabric วิ่งผ่าน board ขนาดใหญ่

นี่ฟังดูเป็นรายละเอียด hardware ลึก ๆ แต่เป็นหัวใจของ AI factory ยุคใหม่ เพราะการเอา accelerator จำนวนมากไปอยู่ใน rack เดียวต้องแก้โจทย์พร้อมกันหลายชั้น:

- signal integrity ของ copper traces ที่ความเร็วสูงมาก
- จำนวน layer ของ PCB ที่หนาและผลิตยาก
- power delivery ในพื้นที่จำกัด
- thermal design กับ liquid cooling
- ความน่าเชื่อถือของ interconnect ทั้ง rack
- yield และ serviceability เมื่อผลิตเป็น volume

รายงานของ Tom's Hardware ระบุว่าการทำเป็นสายเคเบิลแทน board แบบนี้อาจต้องใช้สายจำนวนมหาศาล จึงเป็นเหตุผลที่ NVIDIA พยายามย้าย wiring ไปอยู่บน passive board

## Stopgap NVL72x2 ก็ถูกพูดถึงว่าถูกยกเลิก

อีกส่วนที่ทำให้ข่าวนี้แรงคือรายงานระบุว่า **NVL72x2** ซึ่งเป็นแนวทางเอา Oberon racks สองชุดมาเชื่อม back-to-back เพื่อเป็น stopgap อาจถูกยกเลิกหลังลูกค้ารายใหญ่ไม่ตอบรับ

ถ้าข่าวนี้ถูกต้อง ผลคือช่วง Rubin Ultra ในปี 2027 อาจไม่มีวิธีที่พิสูจน์แล้วในการขยาย scale-up world size ให้ใหญ่กว่า Oberon เดิม

ตรงนี้คือความเสี่ยงเชิง infrastructure planning เพราะ hyperscaler และผู้ให้บริการ AI cloud ต้องวางแผนล่วงหน้าหลายไตรมาส ทั้ง power, cooling, floor layout, network topology, procurement และ SLA ให้ลูกค้า

GPU รุ่นใหม่อาจพร้อม แต่ถ้า rack-scale packaging และ interconnect ไม่พร้อม data center ก็ deploy ความสามารถเต็มของ generation นั้นได้ยาก

## NVIDIA บอก roadmap ยัง intact แต่ตลาดต้องรอรายละเอียด

ประเด็นที่ต้องใส่ไว้ชัดเจนคือ NVIDIA ตอบ Tom's Hardware ว่า roadmap ยัง intact

ประโยคนี้ลดความแรงของข่าวลงบางส่วน แต่ยังไม่ตอบคำถามสำคัญว่า:

- timetable เดิมยังเหมือนเดิมทุกระดับหรือไม่
- Kyber NVL144 ยังเป็น design เดิมหรือถูกปรับแล้ว
- customer delivery window สำหรับ Rubin Ultra เปลี่ยนหรือไม่
- stopgap architecture มีทางเลือกอื่นหรือไม่
- NVL576 และ co-packaged optics จะเข้ามาทันแค่ไหน

ดังนั้นข่าวนี้ไม่ควรถูกอ่านว่า "NVIDIA เลื่อนแน่นอน" แต่ควรถูกอ่านว่า "ตลาดเริ่มเห็น execution risk ของ rack-scale AI ชัดขึ้น"

## ทำไมข่าว interconnect สำคัญกว่าข่าว GPU spec

ช่วงสองปีที่ผ่านมา AI infrastructure มักถูกเล่าผ่านจำนวน FLOPS, HBM, TDP และจำนวน GPU ที่สั่งซื้อ แต่ระบบจริงไม่ได้ชนะด้วย GPU spec อย่างเดียว

เมื่อโมเดลใหญ่ขึ้น bottleneck จะย้ายไปที่:

- bandwidth ระหว่าง accelerator
- latency ของ collective communication
- power distribution ต่อ rack
- cooling loop และ service access
- reliability ของ board และ connector
- software stack ที่รู้จัก topology จริง

Kyber จึงเป็นข่าวสำคัญเพราะมันอยู่ตรงกลางระหว่าง semiconductor roadmap กับ data center reality

NVIDIA อาจยังมี demand สูงมาก แต่ลูกค้า hyperscaler ไม่ได้ซื้อแค่ chip พวกเขาซื้อ system ที่ต้องติดตั้งได้ ซ่อมได้ และรัน workload มูลค่าสูงได้ต่อเนื่อง

## มุมมองของผม

ผมมองว่าข่าว Kyber เป็น reminder ว่า AI infrastructure ปี 2026 ไม่ได้แข่งกันที่ใครประกาศ GPU ได้เร็วกว่าเท่านั้น แต่แข่งกันที่ใครทำ rack-scale system ให้ผลิตจริงและ deploy จริงได้

ถ้า Kyber ผ่านช่วง production ramp ได้ตาม roadmap NVIDIA จะยิ่งตอกย้ำข้อได้เปรียบด้าน full-stack infrastructure แต่ถ้ารายงาน delay ใกล้เคียงความจริง ผู้เล่น cloud และ enterprise จะต้องระวังการผูกแผน capacity กับ generation เดียวมากเกินไป

สิ่งที่ต้องดูต่อคือ NVIDIA จะให้รายละเอียดเพิ่มเติมเมื่อไร และลูกค้ารายใหญ่จะปรับแผน Rubin Ultra, Oberon หรือ optical interconnect อย่างไรในช่วงครึ่งหลังของปี 2026

สรุปสั้น ๆ:
**วันที่ 6 กรกฎาคม 2026 Tom's Hardware รายงานว่า NVIDIA Kyber NVL144 สำหรับ Rubin Ultra อาจเลื่อนไปปี 2028 จากปัญหา backplane ขณะที่ NVIDIA ตอบว่า roadmap ยัง intact ข่าวนี้ชี้ว่าความยากของ AI infrastructure กำลังย้ายจากตัว GPU ไปสู่ rack-scale interconnect, cooling และการผลิตระบบจริง**

## หมายเหตุเรื่องภาพประกอบ

ภาพประกอบบทความนี้ดาวน์โหลดจากภาพ source-provided ของบทความ Tom's Hardware เกี่ยวกับ Kyber ขนาด **4032x2268 พิกเซล** ผ่านข้อกำหนด cover image ของ repo

## แหล่งอ้างอิง

- [Tom's Hardware: Nvidia's Kyber rack for Rubin Ultra reportedly delayed to 2028](https://www.tomshardware.com/pc-components/gpus/nvidias-kyber-rack-for-rubin-ultra-slips-to-2028)
- [NVIDIA Developer Blog: Vera Rubin Platform and Rack-Scale Systems](https://developer.nvidia.com/blog/nvidia-vera-rubin-pod-seven-chips-five-rack-scale-systems-one-ai-supercomputer/)
- [NVIDIA: GTC 2026](https://www.nvidia.com/gtc/)
