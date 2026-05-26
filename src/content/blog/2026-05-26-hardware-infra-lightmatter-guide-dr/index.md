---
title: 'Lightmatter เปิดตัว Guide DR วันที่ 21 พฤษภาคม 2026: Laser NIC แบบ liquid-cooled สำหรับ rack AI ที่หนาแน่นขึ้น'
seoTitle: 'Lightmatter Guide DR Laser NIC May 2026 - Warongkon Blog'
description: 'สรุป Lightmatter Guide DR โมดูล laser ใน chassis สำหรับ optical interconnect ของ AI infrastructure รองรับ 51.2 Tbps และเริ่ม sampling ไตรมาส 4 ปี 2026'
pubDate: '2026-05-26'
tags: ["Hardware", "Infrastructure", "AI Data Center", "Photonics", "Lightmatter"]
coverImage: './cover.svg'
---

ข่าว **Hardware / Infrastructure** สำหรับรอบวันที่ **26 พฤษภาคม 2026** คือ **Lightmatter** ประกาศ **Guide DR** เมื่อวันที่ **21 พฤษภาคม 2026** โมดูล laser แบบ **Laser Network Interface Card (LNIC)** ที่ติดตั้งภายใน chassis และใช้ liquid cooling เพื่อรองรับ optical interconnect สำหรับระบบ AI scale-up ที่หนาแน่นขึ้น

ประกาศนี้เป็นข่าว infrastructure ที่ชี้ไปยัง bottleneck นอกเหนือจาก GPU: เมื่อ accelerator จำนวนมากต้องสื่อสารด้วย bandwidth สูง พื้นที่หน้า rack, จำนวน fiber, ความร้อน และการจ่ายแสงให้ optical links กลายเป็นข้อจำกัดทางกายภาพจริง

## Guide DR คืออะไร

Lightmatter ระบุว่า Guide DR มีรูปทรงตามขนาด **OCP NIC 3.0** และบรรจุ high-density laser array ไว้ภายใน chassis แทนการวางแหล่งกำเนิดแสงแบบ external laser module บริเวณ faceplate

ตามข้อมูลใน release ของบริษัท:

- LNIC หนึ่งโมดูลออกแบบให้ขับ optical bandwidth รวมได้สูงสุด **51.2 Tbps**
- การใช้ Guide DR สี่โมดูลทำให้ switch tray ขนาด **1 RU** รองรับ CPO scale-up switching bandwidth ได้สูงสุด **204.8 Tbps**
- บริษัทระบุว่าแนวทางนี้ให้ rack density ราว **4 เท่า** เมื่อเทียบกับ conventional External Laser Small Form Factor Pluggables (ELSFPs)
- ผลิตภัณฑ์ออกแบบให้รองรับ **Passage L20** ของ Lightmatter และ high-bandwidth optical interconnect อื่น
- Guide DR มีแผนเริ่ม **sampling ในไตรมาส 4 ปี 2026**

ตัวเลขประสิทธิภาพข้างต้นเป็นคำกล่าวในประกาศผลิตภัณฑ์ของ Lightmatter และยังไม่ใช่ผลทดสอบ production deployment จากลูกค้าภายนอก

## ทำไมเลเซอร์จึงกลายเป็นโจทย์ของ AI rack

AI cluster ขนาดใหญ่ต้องส่งข้อมูลระหว่าง XPU, switch และ memory domain อย่างรวดเร็ว การเพิ่ม port และ bandwidth ต่อ generation ทำให้ front panel ของ compute tray และ switch tray มีพื้นที่จำกัดมากขึ้น ขณะเดียวกันแหล่งกำเนิดแสงก็เพิ่มภาระด้าน power และ cooling

Lightmatter เสนอให้ย้ายแหล่งแสงเข้า chassis และพึ่ง liquid-cooled cold plate package เพื่อแก้สามปัญหาพร้อมกัน:

- ลดการแย่งพื้นที่บริเวณ faceplate สำหรับ connector และ fiber
- เพิ่ม optical power density โดยไม่ขยาย rack unit ตามสัดส่วนเดิม
- นำระบบ liquid cooling ที่ rack AI มีแนวโน้มใช้อยู่แล้วมารองรับส่วน laser

ถ้า architecture นี้ผ่านการทดสอบในระบบจริง มันอาจช่วยให้ผู้สร้าง AI factory ขยาย scale-up domain โดยไม่ต้องยอมเพิ่ม footprint ของ switch tray อย่างรวดเร็ว แต่คำว่า "ถ้า" ยังสำคัญ เพราะ sampling ยังรอถึงปลายปี 2026

## ข่าวนี้ไม่ใช่การประกาศเครื่องพร้อมใช้งานทันที

Guide DR เป็นส่วนประกอบของ connectivity stack ไม่ใช่ server หรือ data center แบบ turnkey การนำไปใช้งานจริงต้องประสานกับ switch architecture, optical interconnect, thermal design, management interface และมาตรฐานที่ผู้ผลิตระบบรองรับ

บริษัทระบุการจัดแนวกับมาตรฐานและ environment ได้แก่ OCP Modular Hardware System, OIF CMIS 5.3 management, IEEE DR optics และ A2 ASHRAE-compliant thermal environment อย่างไรก็ตาม availability ใน release คือเริ่มส่งตัวอย่างใน Q4 ไม่ใช่การยืนยัน shipment จำนวนมากหรือ deployment ของ hyperscaler แล้ว

## สิ่งที่ต้องตรวจเมื่อเริ่ม sampling

จุดที่ควรติดตามภายในปลายปี 2026 ได้แก่:

- bandwidth และ reliability เมื่อใช้งานกับ switch และ interconnect จริง
- ต้นทุนรวมต่อ rack เมื่อรวม liquid cooling, fiber routing และ maintenance
- power efficiency เทียบกับ external laser solution ใน workload เดียวกัน
- ecosystem ของ system vendor ที่รองรับ LNIC form factor
- ระยะเวลาจาก sample ไปสู่ production volume

## มุมมองของผม

การขยาย AI infrastructure ไม่ได้ติดเพียงจำนวน accelerator หรือกำลังไฟรวม แต่ติดกับวิธีเชื่อม accelerator ให้ทำงานเป็นระบบเดียวด้วย Lightmatter กำลังเดิมพันว่าการย้าย laser เข้า rack ในรูปแบบ modular จะคลายข้อจำกัดพื้นที่และความหนาแน่นของ optical fabric ได้

ข่าวนี้จึงควรอ่านเป็นสัญญาณการออกแบบ rack รุ่นถัดไป มากกว่าประกาศว่าปัญหาถูกแก้เสร็จแล้ว ผลสำคัญจะเกิดเมื่อ sample ถูกนำไปทดสอบกับระบบของลูกค้าในไตรมาส 4 ปี 2026

สรุปสั้น ๆ:
**Lightmatter เปิดตัว Guide DR เมื่อวันที่ 21 พฤษภาคม 2026 เป็น liquid-cooled Laser NIC สำหรับ optical fabric ของ AI rack โดยประกาศ bandwidth สูงสุด 51.2 Tbps ต่อโมดูลและวางแผน sampling ใน Q4 2026**

## หมายเหตุเรื่องภาพประกอบ

พบหน้า press release ต้นทางของ Lightmatter แล้ว แต่ shell environment ไม่สามารถ resolve DNS ของ `lightmatter.co` เพื่อดาวน์โหลดภาพ official เข้าสู่ repo ได้ จึงใช้ภาพ SVG ขนาด 1200x630 ที่สร้างเฉพาะบทความนี้เป็น fallback

## แหล่งอ้างอิง

- [Lightmatter: Lightmatter Unveils Guide DR: Industry First Liquid-Cooled Laser NIC that Quadruples Rack Density](https://lightmatter.co/press-release/lightmatter-unveils-guide-dr-industry-first-liquid-cooled-laser-nic-that-quadruples-rack-density/)
- [Business Wire mirror via Morningstar: Lightmatter Unveils Guide DR](https://www.morningstar.com/news/business-wire/20260521715044/lightmatter-unveils-guide-dr-industry-first-liquid-cooled-laser-nic-that-quadruples-rack-density)
