---
title: 'Vertiv ส่งมอบ liquid cooling 30 MW ในอินเดีย: AI data center เริ่มวัดความพร้อมที่ชิป ไม่ใช่แค่ที่แร็ก'
seoTitle: 'Vertiv India 30 MW Liquid Cooling Deployment October 2026'
description: 'สรุปข่าว Hardware / Infrastructure วันที่ 20 ตุลาคม 2026 เมื่อ Vertiv ส่งมอบ direct-to-chip liquid cooling ที่ CLDC Mumbai 01 เพื่อรองรับ AI workload 30 MW'
pubDate: '2026-10-20'
tags:
  [
    'Hardware Infrastructure',
    'Vertiv',
    'CapitaLand Investment',
    'India',
    'Liquid Cooling',
    'Direct-to-Chip Cooling',
    'Data Center',
    'AI Infrastructure',
    'Thermal Management'
  ]
coverImage: './cover.jpg'
---

ข่าว **Hardware / Infrastructure** สำหรับวันที่ **20 ตุลาคม 2026** คือ Vertiv ประกาศเมื่อ **16 ตุลาคม 2026** ว่าส่งมอบระบบ **direct-to-chip high-density liquid cooling** ให้ CLDC Mumbai 01 ใน Airoli, Navi Mumbai ของ CapitaLand India Trust ระบบใช้ secondary fluid network หรือ **SFN** เพื่อรองรับ AI workload ของ hyperscale customer ได้ **30 MW**

Vertiv ระบุว่านี่คือ deployment แบบดังกล่าวแห่งแรกของอินเดีย ข่าวนี้สำคัญเพราะ data center สำหรับ AI กำลังเจอขีดจำกัดของ air cooling เมื่อความหนาแน่นของ compute เพิ่มขึ้น และผู้ให้บริการต้องพิสูจน์ได้ว่าระบบหล่อเย็นพร้อมก่อน IT load จะเริ่มทำงานจริง

## SFN ทำหน้าที่เชื่อม cooling plant เข้ากับระดับชิป

ระบบ SFN เป็นวงจรปิดที่ลำเลียง coolant จาก cooling infrastructure ของอาคารไปถึงระดับชิป Vertiv ระบุว่าระบบต้องผ่านการผลิต ทดสอบ และ commissioning ก่อนรองรับ live IT load การออกแบบแบบวงจรปิดช่วยให้ผู้ให้บริการควบคุมคุณภาพของ fluid และลดความเสี่ยงที่ฝุ่นหรือสิ่งปนเปื้อนจะเข้าไปกระทบส่วนประกอบของระบบ

การส่งมอบครั้งนี้ไม่ใช่แค่ติดตั้งชุดหล่อเย็นในห้อง data hall บริษัทระบุว่าต้องสร้างกำลังผลิตสำหรับ skid แบบสั่งทำ และร่วมกับ CapitaLand วางกระบวนการติดตั้งเพื่อลดฝุ่นเข้าสู่ technology loop หลัง commissioning ทีมงานใช้ SFN-Tab kits เพื่อ balance วงจร และทำ **Level 4 testing** ที่ data center ก่อน go-live

รายละเอียดเหล่านี้สะท้อนว่า liquid cooling สำหรับ AI ไม่ใช่สินค้าที่ซื้อแล้วติดตั้งจบ การเดินท่อ การรักษาความสะอาด การ balance flow และการทดสอบตอนส่งมอบเป็นส่วนหนึ่งของ reliability ของระบบทั้งหมด

## 30 MW คือโจทย์ infrastructure ที่ใหญ่กว่าตัวเลข GPU

ตัวเลข 30 MW ในข่าวเป็นกำลังรองรับ AI workload ของ deployment นี้ ไม่ใช่ตัวเลขประสิทธิภาพของ accelerator รุ่นใดรุ่นหนึ่ง แต่มันบอกขนาดของภาระที่ทั้งระบบ power และ cooling ต้องรับร่วมกัน เมื่อ rack มี compute หนาแน่นขึ้น ความร้อนไม่ได้กระจายตามแบบของ server แบบเดิม และการเพิ่มพัดลมอย่างเดียวอาจไม่พอ

สำหรับ operator ความพร้อมของ liquid cooling จึงกระทบกำหนดเปิดใช้งาน capacity โดยตรง หากระบบความร้อนไม่ผ่าน commissioning GPU ที่จัดหามาแล้วก็อาจยังรับงาน production ไม่ได้ การลงทุนใน factory สำหรับผลิต skid ของ Vertiv จึงเป็นเรื่อง supply chain ของ infrastructure พอ ๆ กับเรื่อง thermal design

## บทเรียนสำหรับตลาดเอเชียและไทย

อินเดียมีการขยาย hyperscale capacity อย่างต่อเนื่อง และข่าวนี้แสดงให้เห็นว่า liquid cooling เริ่มย้ายจากโครงการทดลองไปสู่การส่งมอบที่มีขั้นตอนทดสอบชัดเจน ตลาดไทยและเอเชียตะวันออกเฉียงใต้มีแนวโน้มเผชิญโจทย์เดียวกันเมื่อ AI cluster ใช้ไฟมากขึ้นในพื้นที่จำกัด

ผู้พัฒนา data center ควรแยกการประเมินออกเป็นสามเรื่อง คือกำลังไฟที่จ่ายได้ ระบบหล่อเย็นที่ส่งผ่านถึงชิปได้ และกระบวนการ commissioning ที่พิสูจน์การทำงานภายใต้โหลดจริง การประกาศว่าพื้นที่ “AI-ready” ยังไม่พอ หากไม่บอกว่าอะไรผ่านการทดสอบแล้วและรองรับ capacity ได้เมื่อใด

## สรุป

Vertiv และ CapitaLand ส่งมอบ liquid cooling สำหรับ AI workload **30 MW** ใน Mumbai เมื่อประกาศวันที่ **16 ตุลาคม 2026** ประเด็นของข่าวไม่ใช่เพียงการใช้ของเหลวแทนอากาศ แต่คือการทำให้การผลิต การติดตั้ง และการตรวจรับ system ระดับชิปทำงานต่อกันได้

เมื่อ AI data center ใช้ compute หนาแน่นขึ้น ผู้ให้บริการจะต้องแข่งขันกันที่ความพร้อมของ power, cooling และ commissioning มากพอ ๆ กับจำนวน accelerator ที่สั่งซื้อได้

ภาพประกอบบทความนี้ดาวน์โหลดจาก **Vertiv** ในหน้า news release ของโครงการ ขนาด **1600x480 พิกเซล** ผ่านข้อกำหนด cover image ของ repo ไม่มีการใช้ภาพ fallback

## แหล่งอ้างอิง

- [Vertiv: India’s first high-density liquid cooling deployment for CapitaLand India Trust](https://www.vertiv.com/en-in/about/news-and-events/news-releases/2026/vertiv-delivers-indias-first-high-density-liquid-cooling-data-center-deployment-for-capitaland-india-trust-enabling-30-mw-of-ai-ready-capacity/)
