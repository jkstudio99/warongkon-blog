---
title: 'AMD เปิด Helion: พิมพ์เขียว rack สำหรับ agentic AI ที่เลือก CPU และ GPU ตามงานได้'
seoTitle: 'AMD Helion agentic AI rack October 2026'
description: 'สรุปข่าว Hardware / Infrastructure วันที่ 21 ตุลาคม 2026 จาก AMD Helion พิมพ์เขียว rack-scale สำหรับงาน agentic AI บนมาตรฐาน OCP'
pubDate: '2026-10-21'
tags: ['Hardware Infrastructure', 'AMD', 'Helion', 'EPYC', 'Instinct', 'OCP', 'Agentic AI', 'Data Center']
coverImage: './cover.svg'
---

ข่าว **Hardware / Infrastructure** วันที่ **21 ตุลาคม 2026** คือ AMD เปิดตัว **AMD Helion** เมื่อ **13 ตุลาคม 2026** ในฐานะพิมพ์เขียว rack-scale สำหรับ agentic AI ที่ออกแบบบนมาตรฐาน Open Compute Project หรือ OCP บริษัทระบุว่าจะส่งข้อกำหนด Helion ให้ชุมชน OCP และคาดว่าระบบอ้างอิงจะพร้อมในเดือน **พฤศจิกายน 2026**

จุดต่างของ Helion คือ AMD ไม่ได้เสนอ rack เดียวสำหรับทุกงาน แต่แยกแนวทางตามลักษณะ workload ระหว่าง rack CPU ล้วนสำหรับการรัน agent จำนวนมาก กับ rack แบบรวม CPU และ GPU สำหรับองค์กรที่ต้องการรัน agent, inference และงานทั่วไปในระบบเดียว

## Agentic AI ทำให้การออกแบบ rack ต้องคิดเกิน GPU

งาน agentic AI ไม่ได้ใช้ GPU หนักเท่ากันตลอดเวลา บางช่วงเป็นการเรียกโมเดล บางช่วงรันโค้ด ค้นข้อมูล หรือประสานเครื่องมือ AMD จึงชูการเลือกจำนวนคอร์ CPU, ประสิทธิภาพ และพลังงานให้เหมาะกับงาน พร้อม token router สำหรับกระจาย model call ระหว่างโมเดลขั้นสูงและโมเดล open-source

ตัวอย่าง pure-CPU rack ใช้ EPYC รุ่นที่ 6 และรองรับได้สูงสุด **32,768 CPU cores** ตามเอกสาร AMD ส่วน integrated rack รวมโหนด EPYC, GPU Instinct MI350P และงานทั่วไปเข้าด้วยกัน ตัวเลขนี้เป็นสเปกของแบบอ้างอิง ไม่ใช่เครื่องที่วางขายแล้ว

## คำว่า open ต้องดูที่การส่งมอบจริง

AMD ระบุว่า Helion รองรับทั้งลมและ liquid cooling และจะนำ specification เข้าสู่ OCP การเปิดสเปกอาจช่วยให้ผู้ผลิตระบบและผู้ให้บริการศูนย์ข้อมูลปรับ rack ให้เข้ากับข้อจำกัดด้านไฟฟ้าและการระบายความร้อนของตนเองได้

แต่การเปิดสเปกไม่ทำให้ integration ง่ายโดยอัตโนมัติ ผู้ซื้อยังต้องถามเรื่อง firmware, network, management plane, service และความพร้อมของ software stack การประเมินจึงควรเริ่มจาก workload จริง เช่น สัดส่วน inference ต่อ tool execution จำนวนผู้ใช้พร้อมกัน และ power budget ต่อ rack

## สรุป

Helion เป็นสัญญาณว่า AMD วางการแข่งขัน AI infrastructure ไว้ที่ระดับ rack และ workflow ไม่ใช่ชิปเดี่ยว ผู้ดูแลระบบจะได้ประโยชน์ก็ต่อเมื่อแบบอ้างอิงช่วยลดเวลาในการประกอบและดูแลระบบได้จริงหลังเริ่มส่งมอบในเดือนพฤศจิกายน

ภาพประกอบเป็น **local SVG fallback** ขนาด **1280x720 พิกเซล** เนื่องจาก AMD ปฏิเสธการดาวน์โหลด press image จาก CDN ในรอบนี้ แม้หน้าแถลงข่าวจะมีภาพประกอบ จึงไม่ใช้ภาพจากแหล่งที่ไม่เกี่ยวกับประกาศโดยตรง

## แหล่งอ้างอิง

- [AMD: AMD Helion for rack-scale agentic AI](https://www.amd.com/en/newsroom/press-releases/2026-10-13-open-rack-blueprint-scale-agentic-ai.html)
