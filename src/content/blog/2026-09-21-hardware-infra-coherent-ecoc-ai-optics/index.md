---
title: 'Coherent โชว์ optics สำหรับ AI infrastructure: 3.2T transceiver และ 6.4T NPO ขึ้นเวที ECOC'
seoTitle: 'Coherent ECOC 2026 AI Optical Infrastructure'
description: 'สรุปข่าว Hardware / Infrastructure วันที่ 21 กันยายน 2026 เรื่อง Coherent เปิดชุดเดโม optical infrastructure สำหรับ AI data center ที่ ECOC 2026 ในมาลากา'
pubDate: '2026-09-21'
tags:
  [
    'Hardware Infrastructure',
    'Coherent',
    'ECOC 2026',
    'AI Infrastructure',
    'AI Data Center',
    'Optical Interconnect',
    'Co-packaged Optics',
    'Near-packaged Optics',
    'Photonics',
    'Thermal Management'
  ]
coverImage: './cover.png'
---

ข่าว **Hardware / Infrastructure** สำหรับรอบวันที่ **21 กันยายน 2026** คือ **Coherent Corp.** ประกาศเมื่อวันที่ **20 กันยายน 2026** ว่าจะโชว์เทคโนโลยี optical หลายชุดสำหรับการ scale โครงสร้างพื้นฐาน AI ที่งาน **European Conference on Optical Communication หรือ ECOC 2026** ในเมืองมาลากา ประเทศสเปน

ประเด็นสำคัญคือ AI data center กำลังชนข้อจำกัดที่ไม่ใช่แค่ GPU แต่รวมถึง bandwidth, power, thermal density และการเชื่อมต่อระหว่าง accelerator, rack, cluster และ data center หลายแห่ง Coherent จึงนำเสนองานโชว์ที่ครอบคลุมตั้งแต่ **co-packaged optics (CPO), near-packaged optics (NPO), pluggable transceivers, optical transport, specialty fibers, optical circuit switching, advanced materials และ thermal management**

## AI factory ต้องการ optics ที่เร็วและใกล้ชิปขึ้น

เมื่อโมเดลใหญ่ขึ้นและ inference traffic เพิ่มขึ้น ปัญหาของศูนย์ข้อมูลไม่ได้อยู่ที่จำนวน accelerator เพียงอย่างเดียว แต่คือการย้ายข้อมูลให้ทันโดยไม่ใช้พลังงานสูงเกินไป

สายทองแดงและระบบ optical แบบเดิมยังมีบทบาท แต่ AI cluster รุ่นใหม่ต้องการการเชื่อมต่อที่เข้าใกล้ compute มากขึ้น ทั้ง scale-up ภายใน node หรือ rack, scale-out ระหว่าง rack และ scale-across ระหว่าง data center

นี่คือเหตุผลที่ CPO และ NPO กลายเป็นคำสำคัญ เพราะการย้าย optical interface เข้าใกล้ชิปหรือ package มากขึ้นช่วยลดข้อจำกัดด้านระยะทาง สัญญาณ และพลังงานต่อบิต แม้จะแลกกับความยากด้านการประกอบ, การซ่อมบำรุง, thermal design และ supply chain

## ชุดเดโมที่ Coherent เลือกโชว์

ในประกาศ Coherent ระบุว่าจะโชว์ **3.2T 2xDR4 Transceiver ใน OSFP-size package** โดยใช้ optical path ขนาด 1.6T สองชุด และ line-side optical lanes แบบ 425G PAM4 จำนวนแปด lane

อีกชิ้นที่สำคัญคือ **6.4T NPO Optical Engine** สำหรับ fabric ที่ต้องการ density สูงใน AI scale-up และ scale-out โดยผสาน silicon photonics, fiber attach, ELSFP และ laser technology ของ Coherent

บริษัทจะโชว์ **VCSEL-based optics** สำหรับ AI scale-up, **LS200 full C-band pluggable optical line system** สำหรับ datacenter interconnect และ transport รวมถึง product/technology ชุดอื่นอย่าง FlexConnect, OptiAlign, OptiFocus, FiberPack, OptiPolar Array X, specialty fibers และ ultra-high-power CW laser

จุดที่น่าสนใจคือ Coherent พยายามขายภาพ vertical integration ตั้งแต่วัสดุ, device, component, module ไปถึง system เพราะในยุค AI infrastructure ผู้ซื้อไม่ได้ต้องการชิ้นส่วนแยกชิ้นเท่านั้น แต่ต้องการระบบเชื่อมต่อที่ใช้งานรวมกันได้จริงใน density สูง

## PhotonLink คือสัญญาณของ platform optics

ประกาศยังกล่าวถึง **PhotonLink** ซึ่ง Coherent ระบุว่าเป็น integrated optics platform ที่รวมเทคโนโลยี optical และความสามารถด้าน integration ของบริษัท เพื่อรองรับ CPO, NPO และการเชื่อมต่อแบบ chip-to-chip ในอนาคต

แม้รายละเอียดเต็มของ PhotonLink จะถูกแยกไปประกาศเพิ่มเติม แต่การเลือกพูดถึง platform สะท้อนว่าตลาด optical interconnect สำหรับ AI กำลังขยับจากการขาย component ไปสู่ architecture ที่ลูกค้านำไปประกอบในระบบ AI factory ได้ง่ายขึ้น

สำหรับ hyperscaler และผู้สร้าง AI cloud คำถามไม่ได้มีแค่ "link เร็วแค่ไหน" แต่รวมถึง:

- power ต่อ bit ลดลงจริงหรือไม่
- การประกอบและซ่อมใน data center ทำได้ง่ายแค่ไหน
- optical engine รองรับ roadmap หลัง 1.6T ได้หรือไม่
- thermal material ช่วย density สูงขึ้นได้แค่ไหน
- supply chain ของ component สำคัญ scale ได้ทัน demand หรือไม่

## Cooling และวัสดุกลายเป็นส่วนหนึ่งของ networking

อีกประเด็นที่ทำให้ข่าวนี้อยู่ในหมวด infrastructure คือ Coherent ไม่ได้พูดเฉพาะ bandwidth แต่พูดถึง **Thermadite materials**, diamond-based solutions และ advanced materials สำหรับ power density และ cooling requirement ของ AI infrastructure

ใน cluster AI รุ่นใหม่ network, packaging และ cooling แยกกันไม่ขาด ถ้า optical interface ขยับเข้าใกล้ compute มากขึ้น ความร้อนและการเข้าถึงเพื่อซ่อมบำรุงจะกลายเป็นปัญหาหลักทันที

นี่ทำให้บริษัท photonics ต้องเข้าใจ data center design มากขึ้น และทำให้ผู้ซื้อ AI infrastructure ต้องประเมิน optical roadmap ควบคู่กับ cooling และ power design ไม่ใช่เลือกอุปกรณ์เชื่อมต่อหลังจากออกแบบ rack เสร็จแล้ว

## สรุป

การประกาศของ Coherent เมื่อวันที่ **20 กันยายน 2026** ก่อนงาน **ECOC 2026 วันที่ 21-23 กันยายน 2026** เป็นข่าว Hardware / Infrastructure ที่สะท้อนว่า bottleneck ของ AI data center กำลังย้ายจาก compute เพียว ๆ ไปสู่การเชื่อมต่อ, พลังงาน, thermal และระบบประกอบรวม

เดโมอย่าง **3.2T OSFP-size transceiver**, **6.4T NPO optical engine**, CPO/NPO component และ pluggable optical line system บอกชัดว่า photonics จะเป็นหนึ่งในชั้น infrastructure ที่กำหนดความเร็วและต้นทุนของ AI factory รุ่นถัดไป

ภาพประกอบบทความนี้ดาวน์โหลดจาก asset ทางการของ **Coherent / GlobeNewswire** สำหรับ ECOC 2026 ขนาด **1920x1080 พิกเซล** ผ่านข้อกำหนด cover image ของ repo

## แหล่งอ้างอิง

- [GlobeNewswire - Coherent Showcases Optical Innovations to Scale AI Infrastructure at ECOC 2026](https://www.globenewswire.com/news-release/2026/09/20/3365104/11543/en/coherent-showcases-optical-innovations-to-scale-ai-infrastructure-at-ecoc-2026.html)
- [GlobeNewswire - Coherent Brings AI Datacenter and Photonics Thought Leadership to ECOC 2026 in Málaga, Spain](https://www.globenewswire.com/news-release/2026/09/08/3358103/11543/en/coherent-brings-ai-datacenter-and-photonics-thought-leadership-to-ecoc-2026-in-m%C3%A1laga-spain.html)
