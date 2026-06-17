---
title: 'Coherent x NVIDIA วันที่ 16 มิถุนายน 2026: AI infrastructure ไม่ได้ติดแค่ GPU แต่ติด optical backbone'
seoTitle: 'Coherent Texas AI Optical Facility NVIDIA June 2026 - Warongkon Blog'
description: 'สรุปข่าว Coherent เริ่มขยายโรงงาน Sherman, Texas เพื่อเพิ่มกำลังผลิต indium phosphide สำหรับ optical backbone ของระบบ AI และ data center'
pubDate: '2026-06-17'
tags: ["Hardware", "Infrastructure", "Coherent", "NVIDIA", "Optical Interconnect", "Indium Phosphide", "AI Data Center", "Semiconductor"]
coverImage: './cover.jpg'
---

ข่าว **Hardware / Infrastructure** สำหรับรอบวันที่ **17 มิถุนายน 2026** คือ NVIDIA Newsroom รายงานว่า **Coherent** เริ่มก่อสร้างอาคารผลิตเพิ่มเติมที่ campus ใน **Sherman, Texas** เพื่อขยายกำลังผลิตส่วนประกอบ optical ที่ใช้เชื่อมระบบ AI ขนาดใหญ่

บทความของ NVIDIA เผยแพร่เมื่อวันที่ **16 มิถุนายน 2026** ตามเวลา UTC ซึ่งตรงกับรอบอ่านข่าววันที่ **17 มิถุนายน 2026** ในไทย และเป็นข่าวที่ต่อจากกระแส AI data center โดยตรง

รอบก่อนบล็อกนี้พูดถึง Schneider Electric x Foxconn, SK Telecom x NVIDIA, KKR Helix และ NVIDIA/AMD memory supply ไปแล้ว ข่าวนี้จึงเลือกมุมที่ลึกกว่า power/cooling: **optical backbone** ที่ทำให้ GPU cluster และ data center คุยกันได้เร็วพอ

## Coherent กำลังขยายอะไร

NVIDIA ระบุว่า Coherent เริ่มก่อสร้างอาคารผลิตใหม่ที่ Sherman, Texas โดยบริษัทผลิต lasers, optical components และ compound semiconductors ที่ใช้เชื่อม AI systems เข้าด้วยกัน

จุดสำคัญคือ Coherent ระบุว่าตัวเองมี **volume production 6-inch indium phosphide fab** แห่งแรกของโลก

indium phosphide หรือ InP เป็นวัสดุ compound semiconductor ที่สำคัญกับ photonics เพราะช่วยสร้างอุปกรณ์แปลงสัญญาณไฟฟ้าเป็นแสงและส่งข้อมูลด้วยความเร็วสูง เหมาะกับ network ภายใน data center ที่ต้องส่งข้อมูลระหว่าง chip, server และ rack จำนวนมาก

งาน groundbreaking มี Jensen Huang ผู้ก่อตั้งและ CEO ของ NVIDIA, Jim Anderson CEO ของ Coherent, นายกเทศมนตรี Sherman และตัวแทน Texas Economic Development and Tourism เข้าร่วม

ภาพรวมจึงไม่ใช่แค่โรงงานของ supplier รายหนึ่ง แต่เป็นชิ้นส่วนของการย้าย bottleneck AI infrastructure จาก compute ไปสู่ network และ manufacturing capacity

## ทำไม optical จึงสำคัญต่อ AI data center

AI cluster ขนาดใหญ่ไม่ได้ต้องการแค่ GPU จำนวนมาก แต่ต้องการให้ GPU เหล่านั้นส่งข้อมูลหากันได้เร็วและเสถียร

เมื่อ model ใหญ่ขึ้นและ inference workload หนักขึ้น data movement กลายเป็นข้อจำกัดจริง:

- GPU ต้องแลกเปลี่ยน tensor และ activation ระหว่าง training
- inference แบบ distributed ต้องส่งข้อมูลข้าม node
- storage, memory และ compute ต้องเชื่อมกันด้วย latency ต่ำ
- rack-scale architecture ต้องการ bandwidth สูงกว่า data center network แบบเก่า
- power budget ของสาย copper เริ่มกดดันเมื่อระยะและ bandwidth สูงขึ้น

optical interconnect จึงเป็นชั้นโครงสร้างพื้นฐานที่หลายคนไม่เห็น แต่เป็นตัวกำหนดว่า AI factory จะ scale ได้จริงหรือไม่

ถ้าไม่มี transceiver, laser และ photonics component ที่ผลิตได้มากพอ ระบบ AI ที่มี GPU แพงมากก็อาจติดคอขวดที่การส่งข้อมูล

## เรื่องนี้บอกอะไรเกี่ยวกับ supply chain

ข่าวนี้ชี้ว่า AI infrastructure กำลังต้องการ supply chain ที่กว้างกว่าเดิมมาก

เมื่อพูดถึง AI hardware เรามักพูดถึง GPU, HBM, advanced packaging, wafer fab และ power equipment แต่ optical component กำลังกลายเป็นอีกชั้นที่ขาดไม่ได้

การขยายโรงงานใน Texas มีความหมายสามชั้น:

- เพิ่มกำลังผลิตของส่วนประกอบ photonics สำหรับ AI network
- เพิ่ม footprint ของ advanced semiconductor manufacturing ในสหรัฐอเมริกา
- ลดความเสี่ยงจาก supply chain ที่กระจุกตัวเกินไป

NVIDIA เองมีแรงจูงใจสูงที่จะทำให้ชั้นนี้ scale ได้ เพราะหาก AI cluster โตเร็วกว่า optical supply chain ลูกค้าจะเจอ lead time และต้นทุนสูงขึ้น แม้จะซื้อ GPU ได้แล้วก็ตาม

## ความเชื่อมโยงกับ CHIPS Act และ manufacturing policy

บทความของ NVIDIA พูดถึง public programs อย่าง CHIPS Act ในบริบทของการลงทุน semiconductor manufacturing ในสหรัฐฯ

นี่สะท้อนว่า AI infrastructure ไม่ใช่เรื่อง private cloud capex อย่างเดียว แต่เกี่ยวข้องกับ industrial policy มากขึ้นเรื่อย ๆ

ประเทศที่อยากได้ AI compute capacity ต้องคิดครบทั้ง:

- power generation และ grid connection
- data center construction
- cooling และ electrical system
- GPU และ accelerator supply
- HBM และ advanced packaging
- networking และ optical components
- workforce สำหรับ manufacturing และ operations

ข่าว Coherent จึงเป็น reminder ว่าการสร้าง AI capacity เป็นปัญหา supply chain ระดับอุตสาหกรรม ไม่ใช่แค่การสั่ง server เพิ่ม

## มุมมองของผม

ผมมองว่าข่าวนี้สำคัญเพราะมันย้าย spotlight จาก GPU ไปสู่ชั้นที่อยู่ด้านหลังมากกว่า

ตลาดชอบ headline เรื่องชิปใหม่หรือ data center กิกะวัตต์ แต่สิ่งที่ทำให้ AI factory ทำงานจริงคือรายละเอียดจำนวนมากที่ต้องพร้อมพร้อมกัน ตั้งแต่ wafer, photonics, switch, power shelf, liquid cooling ไปจนถึง construction schedule

ถ้า optical backbone เป็น bottleneck การขยายโรงงานของ Coherent ก็เป็นข่าวที่ควรตามพอ ๆ กับข่าว GPU generation ใหม่ เพราะมันบอกว่า ecosystem กำลังลงทุนเพื่อทำให้ AI cluster ขนาดใหญ่ส่งข้อมูลได้ทันความต้องการของ model รุ่นต่อไป

สำหรับผู้ประกอบการและทีมเทคในไทย เรื่องนี้ไม่ได้แปลว่าเราต้องไปผลิต InP wafer ทันที แต่ควรเข้าใจว่า AI infrastructure มีหลายชั้นมากกว่าคำว่า cloud credit เมื่อค่า inference และ latency กลายเป็นต้นทุนธุรกิจ ชั้น network และ data movement จะกระทบ product economics โดยตรง

สรุปสั้น ๆ:
**วันที่ 16 มิถุนายน 2026 NVIDIA รายงานว่า Coherent เริ่มขยายโรงงาน Sherman, Texas สำหรับ optical component และ 6-inch indium phosphide fab ข่าวนี้ชี้ว่า Hardware / Infrastructure ของ AI กำลังติดตาม optical backbone ไม่แพ้ GPU และ power**

## หมายเหตุเรื่องภาพประกอบ

ภาพประกอบบทความนี้ดาวน์โหลดจาก NVIDIA Blog article image ของข่าว Coherent ขนาด **2048x1152 พิกเซล** ผ่านข้อกำหนด cover image ของ repo

## แหล่งอ้างอิง

- [NVIDIA Blog: Coherent Breaks Ground on Expanded Texas Facility, Scaling AI's Optical Backbone](https://blogs.nvidia.com/blog/coherent-texas-ai-optical/)
- [Coherent: Datacenter Communications](https://www.coherent.com/datacenter-communications.html)

