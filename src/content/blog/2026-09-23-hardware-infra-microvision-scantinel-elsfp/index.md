---
title: 'MicroVision พา Scantinel เข้า AI data center: ELSFP module ชี้ว่า optics กำลังกลายเป็นชั้น infrastructure'
seoTitle: 'MicroVision Scantinel ELSFP AI Data Center September 2026'
description: 'สรุปข่าว Hardware / Infrastructure วันที่ 23 กันยายน 2026 เรื่อง MicroVision และ Scantinel เปิดตัว ELSFP photonics module สำหรับ co-packaged optics ใน AI data center'
pubDate: '2026-09-23'
tags:
  [
    'Hardware Infrastructure',
    'MicroVision',
    'Scantinel',
    'ELSFP',
    'Photonics',
    'Co-packaged Optics',
    'AI Data Center',
    'Optical Interconnect',
    'AI Infrastructure',
    'Cloud Infrastructure'
  ]
coverImage: './cover.webp'
---

ข่าว **Hardware / Infrastructure** สำหรับรอบวันที่ **23 กันยายน 2026** คือ **MicroVision** ประกาศเมื่อวันที่ **22 กันยายน 2026** ว่า **Scantinel** ซึ่งเป็นบริษัทย่อยของตน เปิดตัว photonics solution สำหรับ AI data center scale-up architecture โดยชู **external laser small form-factor pluggable หรือ ELSFP module**

แม้ MicroVision จะเป็นชื่อที่หลายคนจำจาก lidar และ perception มากกว่า data center แต่ข่าวนี้น่าสนใจเพราะสะท้อนการเคลื่อนตัวของตลาด AI infrastructure: bottleneck ไม่ได้อยู่แค่จำนวน accelerator อีกต่อไป แต่รวมถึงการย้ายข้อมูลระหว่าง processor, server และ rack ให้ทันโดยใช้พลังงานน้อยลง

## ELSFP คือสัญญาณว่า CPO ต้องการ laser ที่ service ได้

ประกาศของ MicroVision ระบุว่าโมดูล ELSFP ของ Scantinel ทำหน้าที่เป็นแหล่งกำเนิดแสงแบบ centralized และ serviceable สำหรับระบบ **co-packaged optics หรือ CPO** ใน data center รุ่นปัจจุบันและรุ่นถัดไป

ประเด็นนี้สำคัญเพราะ CPO พยายามนำ optical interface เข้าใกล้ชิปมากขึ้น เพื่อลดข้อจำกัดด้าน bandwidth และ power ต่อ bit แต่เมื่อ optics ขยับเข้าใกล้ compute มากขึ้น การออกแบบ laser source, การซ่อมบำรุง และ reliability จะกลายเป็นโจทย์ infrastructure โดยตรง

การแยก laser source ออกมาอยู่ในโมดูลที่ service ได้จึงเป็นแนวทางหนึ่งที่พยายามบาลานซ์ performance กับ maintainability ไม่ใช่แค่ทำให้ link เร็วขึ้น แต่ต้องทำให้ศูนย์ข้อมูลดูแลระบบได้จริงเมื่อ deployed เป็นพัน ๆ หรือหมื่น ๆ port

## Photonic integrated circuit จาก lidar สู่ data movement

Scantinel ระบุว่า ELSFP module สร้างบนแกน **photonic integrated circuit หรือ PIC** แบบสองมิติ ซึ่งออกแบบมาเพื่อปรับปรุง speed, power efficiency และ economics ของ high-speed optical connectivity

จุดเชื่อมโยงที่น่าสนใจคือผู้บริหาร MicroVision บอกว่า PIC ที่อยู่ในโมดูลนี้เป็นเทคโนโลยีแกนเดียวกับสถาปัตยกรรม **FMCW lidar** ของบริษัท นั่นหมายความว่า IP ที่เดิมถูกพัฒนาสำหรับ perception และ sensing กำลังถูกนำไปต่อยอดในตลาด optical connectivity สำหรับ AI cloud

นี่เป็น pattern ที่น่าจับตาในตลาด hardware ปี 2026: เทคโนโลยี photonics, sensing, packaging และ interconnect เริ่มข้ามขอบเขตอุตสาหกรรมมากขึ้น เพราะ AI infrastructure ต้องการ solution ที่ลด power และเพิ่ม bandwidth อย่างเป็นระบบ

## ทำไมข่าวเล็ก ๆ นี้เกี่ยวกับ AI factory

AI และ high-performance computing ทำให้การย้ายข้อมูลระหว่าง processor, server และ rack หนาแน่นขึ้นอย่างรวดเร็ว ถ้า compute density เพิ่ม แต่การเชื่อมต่อยังแพงหรือกินไฟมากเกินไป ต้นทุนของ AI factory จะไม่ได้ลดตามจำนวน accelerator เพียงอย่างเดียว

ในมุม infrastructure, optical interconnect จึงกลายเป็นคำถามเชิงระบบ:

- จะลด power ต่อ bit ได้อย่างไร
- laser source ต้องวางตรงไหนจึงซ่อมได้และเชื่อถือได้
- CPO จะเข้ากับ rack architecture เดิมได้แค่ไหน
- hyperscaler จะซื้อเป็น component, module หรือ reference architecture
- supply chain ของ photonics จะ scale ได้ทัน AI demand หรือไม่

การที่ Scantinel เปิดตัว ELSFP ในช่วงที่วงการ photonics รวมตัวกันที่มาลากา ประเทศสเปน จึงเป็นการส่งสัญญาณว่าบริษัทขนาดเล็กและ mid-cap ก็พยายามแทรกตัวเข้าไปใน stack ของ AI data center เช่นกัน

## ยังอยู่ในช่วง commercial validation

ข่าวนี้ยังไม่ใช่ดีล deployment ขนาดใหญ่ MicroVision ระบุว่าบริษัทกำลังคุยกับ potential licensees และ development partners เพื่อประเมินช่องทางเร่ง commercialization ของเทคโนโลยี

ดังนั้นสิ่งที่ต้องตามต่อคือ ELSFP ของ Scantinel จะถูกนำไปทดสอบกับ ecosystem CPO รายใด รองรับมาตรฐานหรือ form factor ใดบ้าง และผู้ซื้อ infrastructure จะมองบริษัทที่มาจากสาย lidar เป็น partner ด้าน data center photonics ได้มากแค่ไหน

แต่ถึงยังเป็นช่วงต้น ข่าวนี้ก็ช่วยย้ำว่า AI infrastructure ไม่ใช่แค่ GPU, CPU หรือ rack power เท่านั้น ชั้น optical, laser และ photonic packaging กำลังกลายเป็นพื้นที่แข่งขันสำคัญของระบบ AI รุ่นถัดไป

## สรุป

ประกาศวันที่ **22 กันยายน 2026** ของ MicroVision/Scantinel ทำให้เห็นว่า **Hardware / Infrastructure** ในยุค AI factory กำลังลงลึกถึงระดับ optical module และ photonic integrated circuit มากขึ้น

ถ้า CPO จะกลายเป็นแนวทางหลักของ AI cluster density สูง คำถามเรื่อง laser source ที่ service ได้, power efficiency และ economics ของ optical connectivity จะเป็นโจทย์ใหญ่ และ ELSFP คือหนึ่งในคำตอบที่ตลาดกำลังทดลอง

ภาพประกอบบทความนี้ดาวน์โหลดจาก social image asset ของ **MicroVision / ACCESS Newswire / Yahoo Finance** ขนาด **1200x1200 พิกเซล** ผ่านข้อกำหนด cover image ของ repo

## แหล่งอ้างอิง

- [ACCESS Newswire - MicroVision Introduces Advanced Photonics Technology for Next-Generation AI Data Center Scale-Up Architecture](https://via.tt.se/pressmeddelande/4562201/microvision-introduces-advanced-photonics-technology-for-next-generation-ai-data-center-scale-up-architecture?publisherId=3236991)
- [Yahoo Finance - MicroVision Introduces Advanced Photonics Technology for Next-Generation AI Data Center Scale-Up Architecture](https://finance.yahoo.com/technology/ai/articles/microvision-introduces-advanced-photonics-technology-132000927.html)
