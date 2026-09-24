---
title: 'ABB เปิด Infinitus สำหรับ AI data center: direct current จาก source ถึง rack เริ่มกลายเป็นทางเลือกจริง'
seoTitle: 'ABB Infinitus DC AI Data Centers September 2026'
description: 'สรุปข่าว Hardware / Infrastructure วันที่ 24 กันยายน 2026 เรื่อง ABB เปิดพอร์ต Infinitus และสถาปัตยกรรม direct current สำหรับพลังงาน AI data center'
pubDate: '2026-09-24'
tags:
  [
    'Hardware Infrastructure',
    'ABB',
    'Infinitus',
    'AI Data Center',
    'Direct Current',
    'Power Infrastructure',
    'Solid State Breaker',
    'Data Center Energy',
    'AI Infrastructure',
    'Electrical Infrastructure'
  ]
coverImage: './cover.png'
---

ข่าว **Hardware / Infrastructure** สำหรับรอบวันที่ **24 กันยายน 2026** คือการที่ **ABB** เปิดรายละเอียดพอร์ต **Infinitus** สำหรับโครงสร้างพลังงานแบบ **direct current หรือ DC** ใน AI data center โดยประกาศหลักออกมาเมื่อวันที่ **21 กันยายน 2026** และยังเป็นหนึ่งในข่าว infrastructure ที่น่าจับตาที่สุดของสัปดาห์นี้

ประเด็นสำคัญคือ ABB ไม่ได้ขายแค่ component ไฟฟ้าอีกชิ้น แต่กำลังเสนอ architecture ใหม่สำหรับ data center ที่ต้องรับ rack density สูงขึ้นเรื่อย ๆ จาก AI accelerator รุ่นใหม่

## AI rack ทำให้ AC architecture ถูกกดดัน

data center แบบดั้งเดิมส่งไฟฟ้าเป็น **alternating current หรือ AC** ผ่านหลายขั้นของ conversion ก่อนถึง server และ accelerator แต่เมื่อ AI rack ขยับจากระดับหลายสิบกิโลวัตต์ไปสู่หลายร้อยกิโลวัตต์ต่อ rack การสูญเสียพลังงาน ความซับซ้อนของระบบไฟ และพื้นที่อุปกรณ์สนับสนุนกลายเป็นต้นทุนใหญ่ขึ้นทันที

ABB จึงผลักดันแนวคิด **source-to-rack DC architecture** เพื่อลด conversion step บางส่วน ทำให้การจ่ายไฟเข้า workload หนาแน่นสูงมีประสิทธิภาพขึ้น และรองรับการออกแบบ data center ที่ต้องการพลังงานจำนวนมากในพื้นที่จำกัด

ในบริบท AI factory ข่าวนี้สำคัญพอ ๆ กับข่าว GPU เพราะ accelerator จะมีค่าแค่ไหนก็ไร้ประโยชน์ถ้า power chain, protection system และ cooling ไม่รองรับความหนาแน่นของ workload จริง

## Infinitus คือชุด building blocks ไม่ใช่สินค้าชิ้นเดียว

พอร์ต Infinitus ของ ABB ถูกวางเป็นกลุ่มเทคโนโลยีสำหรับ DC distribution ตั้งแต่ระดับ medium-voltage ไปจนถึงการป้องกันระบบและการจ่ายไฟใกล้ rack

หนึ่งในชิ้นส่วนที่ถูกพูดถึงคือ **solid-state breaker** ซึ่งมีบทบาทสำคัญในระบบ DC เพราะการตัดวงจร DC ให้เร็วและปลอดภัยยากกว่า AC ในหลายกรณี ถ้าไม่มี protection layer ที่ดี data center ขนาดใหญ่จะไม่กล้าโยก workload critical ไปใช้ DC architecture อย่างจริงจัง

จุดนี้ทำให้ข่าวของ ABB ไม่ใช่แค่เรื่อง efficiency แต่เกี่ยวกับความเชื่อมั่นเชิง operation ด้วย ผู้ให้บริการ data center ต้องมั่นใจว่า architecture ใหม่สามารถ deploy, monitor, isolate fault และซ่อมบำรุงได้ในระดับ facility จริง ไม่ใช่แค่ demo ใน lab

## ประสิทธิภาพ 5% อาจกลายเป็นเงินก้อนใหญ่

ABB ชี้ว่าการเพิ่มประสิทธิภาพของระบบไฟแม้เพียงไม่กี่เปอร์เซ็นต์อาจแปลเป็น capacity และ revenue ที่มีนัยสำคัญสำหรับ AI data center ขนาดใหญ่

เหตุผลคือ data center ถูกจำกัดด้วย power envelope มากขึ้น ถ้า facility ขนาด 500MW ลดการสูญเสียได้ 5% พลังงานที่เคยหายไประหว่างทางอาจกลายเป็น IT load เพิ่มขึ้นหลายสิบเมกะวัตต์ ซึ่งหมายถึง GPU cluster, inference capacity และลูกค้าที่รองรับได้มากขึ้น

นี่คือเหตุผลที่ infrastructure layer ที่เคยถูกมองว่าเป็นงานหลังบ้านเริ่มเข้ามาอยู่หน้าแผนธุรกิจ AI เพราะต้นทุนพลังงานและ capacity ที่ขายได้มีผลต่อ economics ของทุกโมเดลตั้งแต่ training ไปจนถึง inference

## DC ไม่ได้แก้ทุกอย่าง แต่เปิดทางเลือกใหม่

แม้แนวคิด DC data center จะไม่ใช่เรื่องใหม่ แต่ AI workload ทำให้ momentum เปลี่ยนไป เพราะ density และ power draw ของ accelerator รุ่นใหม่สร้างแรงกดดันที่ architecture เดิมรับได้ยากขึ้น

อย่างไรก็ตาม การเปลี่ยนไปใช้ DC ยังต้องตอบคำถามหลายข้อ เช่นมาตรฐานอุปกรณ์ร่วมกัน ความเข้ากันได้กับ UPS และ battery system เดิม การฝึกทีม operation การประเมิน fault scenario และการออกแบบความปลอดภัยตั้งแต่ switchgear ถึง rack

ดังนั้น Infinitus จะน่าจับตาไม่ใช่เพราะ ABB ประกาศ product line ใหม่เท่านั้น แต่เพราะมันเป็นสัญญาณว่าผู้ผลิต electrical infrastructure รายใหญ่เริ่มมอง AI data center เป็นตลาดที่ต้องมี architecture เฉพาะ ไม่ใช่ใช้แบบ data center ทั่วไปแล้วเพิ่มขนาดเฉย ๆ

## สรุป

ประกาศของ ABB เมื่อวันที่ **21 กันยายน 2026** ชี้ว่า **Hardware / Infrastructure** สำหรับ AI กำลังลงลึกถึงระดับการจ่ายไฟและ protection system มากขึ้น

ถ้า AI factory ต้องการ rack density สูงขึ้นอย่างต่อเนื่อง direct current architecture แบบ source-to-rack อาจกลายเป็นหนึ่งในทางเลือกสำคัญของ data center รุ่นถัดไป โดยเฉพาะเมื่อ efficiency, footprint และ uptime เป็นตัวกำหนด economics ของ AI compute โดยตรง

ภาพประกอบบทความนี้ดาวน์โหลดจาก image asset ของ **ABB** สำหรับข่าว Infinitus ขนาด **1920x1080 พิกเซล** ผ่านข้อกำหนด cover image ของ repo

## แหล่งอ้างอิง

- [ABB - ABB's new direct current portfolio aims to rewire AI data center energy infrastructure](https://new.abb.com/news/detail/138900/abbs-new-direct-current-portfolio-aims-to-rewire-ai-data-center-energy-infrastructure)
- [GlobeNewswire - ABB's new direct current portfolio aims to rewire AI data center energy infrastructure](https://www.globenewswire.com/news-release/2026/09/21/3365178/0/en/abb-s-new-direct-current-portfolio-aims-to-rewire-ai-data-center-energy-infrastructure.html)
