---
title: 'Marvell เตรียมโชว์ AI infrastructure ที่ OCP 2026: memory wall, optics และ security ขึ้นเวทีเดียวกัน'
seoTitle: 'Marvell OCP AI Infrastructure October 2026'
description: 'สรุปข่าว Hardware / Infrastructure วันที่ 11 ตุลาคม 2026 หลัง Marvell ประกาศพอร์ต AI data center infrastructure สำหรับ OCP Global Summit 2026'
pubDate: '2026-10-11'
tags:
  [
    'Hardware Infrastructure',
    'Marvell',
    'OCP Global Summit',
    'AI Data Centers',
    'Teralynx',
    'CXL',
    'Optics',
    'PAM4',
    'MACsec',
    'PCIe 6'
  ]
coverImage: './cover.jpg'
---

ข่าว **Hardware / Infrastructure** สำหรับรอบวันที่ **11 ตุลาคม 2026** คือประกาศของ **Marvell Technology** เมื่อ **8 ตุลาคม 2026** ว่าบริษัทจะนำ portfolio ด้าน **AI data center infrastructure** ไปแสดงในงาน **2026 OCP Global Summit** ที่ San Jose ระหว่าง **12-15 ตุลาคม 2026**

ข่าวนี้มาต่อจากกระแส OCP ที่ผู้ผลิตหลายรายกำลังใช้เป็นเวทีโชว์ระบบสำหรับ AI factory เพราะปัญหาใหญ่ของ infrastructure ปี 2026 ไม่ได้อยู่ที่ accelerator อย่างเดียวแล้ว แต่อยู่ที่วิธีเชื่อม compute, memory, storage, optics และ security ให้ scale เป็นระบบเดียวกัน

## Marvell วางตัวเป็นชั้นเชื่อมต่อของ AI data center

Marvell ระบุว่าจะโชว์ solution ครอบคลุม **switching, interconnect, memory และ storage** สำหรับ data center operators และ hyperscalers ที่ต้องการสถาปัตยกรรมแบบ open และ standards-based

รายการ demo ที่บริษัทประกาศมีตั้งแต่ **Marvell Teralynx T100 102.4T** next-gen data center switch, **Structera CXL** memory expansion and acceleration, **Ara DSP 1.6T** transmit-retimed optics, **400G/lane PAM4**, **COLORZ 800G ZR/ZR+ OFSP module with MACsec**, active electrical cable 1.6T, active copper 200G และ 300G ไปจนถึง **Bravera PCIe 6.0 SSD controller** และ integrated hardware security module

ถ้าอ่านรวมกัน นี่ไม่ใช่ launch product เดี่ยว แต่เป็นการบอกตลาดว่า AI data center ต้องการ supply chain ของ bandwidth และ trust ทั้งชั้น ไม่ใช่แค่ rack ที่ใส่ GPU เยอะขึ้น

## Memory wall กลายเป็นโจทย์ infrastructure ไม่ใช่แค่โจทย์ model

หนึ่งในคำที่ Marvell ใช้คือ **memory wall** ซึ่งเป็นปัญหาที่ชัดขึ้นเรื่อย ๆ เมื่อ inference และ training workload ต้องขนข้อมูลผ่าน network และ memory subsystem ปริมาณมหาศาล

ในยุคที่โมเดลยาวขึ้น context ใหญ่ขึ้น และ agent ทำงานหลายขั้นมากขึ้น ระบบที่ดีไม่ได้วัดเฉพาะจำนวน FLOPS แต่ต้องดูว่า data เคลื่อนจาก storage ไป memory ไป accelerator และข้าม node ได้เร็วแค่ไหน ค่าหน่วงต่ำแค่ไหน และใช้พลังงานต่อ bit คุ้มแค่ไหน

การที่ Marvell ดัน CXL memory expansion, high-speed optics และ switch silicon เข้าสู่เรื่องเดียวกันจึงสะท้อนว่าตลาดกำลังมอง AI infrastructure เป็น pipeline ของข้อมูลทั้งระบบ ไม่ใช่กล่อง compute แยกชิ้น

## OCP คือสนามของมาตรฐานเปิด

งาน **OCP Global Summit 2026** จัดวันที่ **12-15 ตุลาคม 2026** และหน้า official event ระบุว่างานปีนี้ sold out แล้ว พร้อมวางตัวเป็นเวทีสำหรับ open hardware และ software infrastructure

จังหวะนี้สำคัญเพราะ AI infrastructure กำลังเจอแรงดึงสองด้าน ด้านหนึ่ง hyperscaler ต้องการ custom design เพื่อ optimize workload ของตัวเอง อีกด้านหนึ่ง ecosystem ต้องการมาตรฐานเปิดเพื่อให้ supplier หลายรายทำงานร่วมกันได้และลด lock-in

Marvell จึงเลือกเล่าเรื่อง design flexibility, interoperability และ power efficiency ควบคู่กัน ซึ่งเป็นภาษาที่เข้ากับ OCP มากกว่างาน consumer หรือ investor day ทั่วไป

## Security เข้าไปอยู่ใน data path

อีกจุดที่ควรจับตาคือ Marvell ไม่ได้พูดแค่ performance แต่ยก **cryptographic security** และ **MACsec** ขึ้นมาในชุด showcase ด้วย

เมื่อ AI cluster กลายเป็น infrastructure สำคัญขององค์กรและรัฐ data path ระหว่าง rack, fabric และ storage ไม่ควรถูกมองเป็นแค่ทางผ่านข้อมูลอีกต่อไป ความปลอดภัยของ network และ hardware module จะกลายเป็นส่วนหนึ่งของ procurement checklist โดยเฉพาะงานที่เกี่ยวกับข้อมูลลูกค้า, regulated industry และ sovereign AI

นี่ทำให้ hardware / infrastructure ปี 2026 เริ่มมีภาพชัดขึ้น: vendor ที่ชนะจะไม่ใช่คนที่มี bandwidth สูงอย่างเดียว แต่ต้องอธิบายได้ว่าระบบ scale ได้อย่างปลอดภัย เปิดพอสำหรับ ecosystem และมีต้นทุนพลังงานที่องค์กรรับได้

## สรุป

สำหรับวันที่ **11 ตุลาคม 2026** ข่าว Marvell ที่เตรียมโชว์ AI infrastructure ในงาน OCP เป็นข่าว **Hardware / Infrastructure** ที่ควรจับตา เพราะมันบอกว่า bottleneck ของ AI factory กำลังย้ายจาก headline GPU ไปสู่ network, memory, optics, storage และ security stack

ถ้า OCP 2026 ทำให้ผู้ซื้อเห็น reference architecture ที่เปิดและเชื่อมต่อกันได้มากขึ้น ตลาด AI data center จะเริ่มถามคำถามที่ละเอียดขึ้น: fabric ของคุณรองรับ workload จริงแค่ไหน, memory expansion ช่วยลดคอขวดได้หรือไม่, link optical กินไฟเท่าไร และ security อยู่ตรงไหนใน data path

ภาพประกอบบทความนี้ดาวน์โหลดจาก official Open Graph image ของ **Marvell** ขนาด **1200x627 พิกเซล** ผ่านข้อกำหนด cover image ของ repo

## แหล่งอ้างอิง

- [Marvell - Marvell to Showcase Open AI Infrastructure Solutions at OCP Global Summit 2026](https://investor.marvell.com/news-events/press-releases/detail/1036/marvell-to-showcase-open-ai-infrastructure-solutions-at-ocp-global-summit-2026)
- [Open Compute Project - 2026 OCP Global Summit](https://www.opencompute.org/events/ocp-summit/2026-ocp-global-summit/)
