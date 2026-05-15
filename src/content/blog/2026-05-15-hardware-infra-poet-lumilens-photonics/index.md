---
title: 'POET และ Lumilens ประกาศดีล photonics วันที่ 14 พฤษภาคม 2026: คอขวด AI infrastructure กำลังย้ายเข้าสู่ optical layer'
seoTitle: 'POET Lumilens AI Optical Networks May 2026 - Warongkon Blog'
description: 'สรุป POET Technologies และ Lumilens ประกาศ supply agreement สำหรับ wafer-level photonic integration, EOI, 800G และ 1.6T optical modules เมื่อ 14 พฤษภาคม 2026'
pubDate: '2026-05-15'
tags: ["Hardware", "Infrastructure", "Photonics", "AI Data Centers"]
coverImage: './cover.svg'
---

ข่าว **Hardware / Infrastructure** สำหรับรอบวันที่ **15 พฤษภาคม 2026** คือประกาศของ **POET Technologies** และ **Lumilens** ที่เผยแพร่บนเว็บไซต์ POET วันที่ **15 พฤษภาคม 2026** โดยมี dateline วันที่ **14 พฤษภาคม 2026** ว่าทั้งสองบริษัททำ supply agreement และ strategic joint development partnership เพื่อพัฒนา wafer-level photonic integration สำหรับ **AI optical networks**

นี่เป็นข่าว infrastructure ที่สำคัญเพราะ AI data center ไม่ได้ติดคอขวดแค่ GPU, power หรือ cooling อีกต่อไป แต่เริ่มติดที่การเคลื่อนข้อมูลระหว่าง accelerator, rack และ cluster ให้เร็วพอโดยใช้พลังงานและต้นทุนที่รับได้

ถ้า AI workload ต้องขยายจาก rack ไปสู่ campus ระดับใหญ่ optical interconnect จะกลายเป็นชิ้นส่วนที่มีน้ำหนักมากขึ้นเรื่อย ๆ

## ประกาศวันที่ 14 พฤษภาคม 2026 มีอะไร

POET ระบุว่า Lumilens ซึ่งทำ scale-up และ scale-out optical interconnect สำหรับ AI workloads ได้ทำข้อตกลงกับ POET เพื่อพัฒนา **Electrical-Optical Interposer หรือ EOI** เป็น platform ใหม่สำหรับ optical engine production

ในประกาศมีตัวเลขธุรกิจที่ชัดเจน:

- Lumilens วาง initial purchase order มูลค่า **50 ล้านดอลลาร์สหรัฐ** สำหรับ EOI-based engines
- ความสัมพันธ์นี้อาจขยายเป็น cumulative purchases มากกว่า **500 ล้านดอลลาร์สหรัฐ** ใน 5 ปี
- POET ให้ warrant แก่ Lumilens สำหรับหุ้นสามัญสูงสุด **22,921,408 shares**
- roadmap ครอบคลุม 800G และ 1.6T pluggable transceivers, Near-Package Optics และ Co-Packaged Optics
- engineering samples คาดว่าจะออกช่วงปลายปี 2026 และ production ramp จะ align กับ hyperscaler deployments ในปี 2027

ตัวเลขเหล่านี้ทำให้ข่าวไม่ใช่แค่ R&D announcement แต่เป็นสัญญาณว่าตลาด optical layer สำหรับ AI เริ่มมีกรอบ commercial ที่ชัดขึ้น

## ทำไม optical layer กลายเป็นสนามแข่ง

AI cluster ขนาดใหญ่ต้องส่งข้อมูลระหว่าง GPU, memory, storage และ network fabric อย่างต่อเนื่อง

เมื่อโมเดลใหญ่ขึ้นและ inference workload กระจายมากขึ้น คำถามไม่ได้มีแค่ "มี accelerator กี่ตัว" แต่รวมถึง "accelerator เหล่านั้นคุยกันเร็วพอหรือไม่"

POET อธิบายในประกาศว่า AI computing เติบโตจากการกระโดดด้าน wafer-level integration เช่น 2.5D interposers สำหรับ GPU/HBM และ hybrid bonding สำหรับ HBM stacks แต่ optical layer ยังไม่ได้ก้าวแบบเดียวกัน

นี่คือช่องว่างที่ EOI พยายามแก้: ทำให้การผลิต optical engines ขยับไปสู่ wafer-level process มากขึ้น ลดการพึ่งพา active alignment ที่แพง ช้า และจำกัด throughput

ถ้าทำได้จริง ผลกระทบจะอยู่ในสามด้าน

- bandwidth density สูงขึ้นสำหรับ AI network
- manufacturing throughput ดีขึ้นเมื่อเทียบกับการประกอบแบบเดิม
- cost structure เหมาะกับ hyperscaler GPU fleet growth มากขึ้น

## ข่าวนี้สะท้อนอะไรใน AI infrastructure

ในช่วง 2 ปีที่ผ่านมา ข่าว AI infrastructure มักถูกครอบงำด้วย GPU, HBM, data center capacity และไฟฟ้า

แต่ประกาศ POET-Lumilens ชี้ให้เห็นอีกชั้นหนึ่งของ stack: photonics และ packaging อาจกลายเป็นตัวตัดสินว่า cluster ระดับใหญ่ scale ได้อย่างไร

เมื่อบริษัทต่าง ๆ พยายามดัน 800G ไป 1.6T และต่อไปสู่ Near-Package Optics หรือ Co-Packaged Optics ตลาดจะไม่ได้แข่งกันเฉพาะ module speed แต่แข่งกันที่การผลิตจำนวนมากด้วย yield และต้นทุนที่ดีพอ

นี่เป็นเหตุผลที่คำว่า semiconductor-style manufacturing discipline ในประกาศมีความหมาย เพราะ optical component ที่ผลิตช้าเกินไปจะกลายเป็น bottleneck ของทั้ง AI supply chain

## ต้องอ่านด้วยความระวัง

ข่าวนี้ยังมี execution risk สูง

POET ระบุชัดว่าการ fulfil purchase orders และ revenue ที่เกี่ยวข้องขึ้นกับ successful development, qualification และการ scale manufacturing capability

พูดง่าย ๆ คือยังต้องพิสูจน์ว่า EOI platform ทำงานได้ตาม performance, yield, cost และ reliability ที่ลูกค้า hyperscaler ต้องการจริง

นอกจากนี้ production ramp ที่พูดถึงปี 2027 แปลว่าผลกระทบต่อ AI data center จะไม่เกิดทันทีในไตรมาสนี้ แต่เป็นการเดิมพันกับโครงสร้าง network รุ่นถัดไป

## มุมมองของผม

ผมมองว่า POET-Lumilens เป็นข่าว Hardware / Infrastructure ที่ดีมากสำหรับการอ่านทิศทาง AI stack

ถ้า GPU คือเครื่องยนต์ของ AI cluster optical interconnect คือระบบถนนและทางด่วนที่ทำให้เครื่องยนต์เหล่านั้นทำงานร่วมกันได้ ข่าวนี้บอกว่าผู้เล่นในตลาดกำลังพยายามทำให้ optical layer มีวิธีผลิตที่ scale เหมือน semiconductor มากขึ้น

สรุปสั้น ๆ:
**ข่าวนี้ไม่ได้บอกแค่ว่า POET ได้ purchase order ใหม่ แต่บอกว่า bottleneck ของ AI infrastructure กำลังขยับจาก compute chip ไปสู่ optical networking, photonic integration และ manufacturing capacity**

## แหล่งอ้างอิง

- [POET Technologies: POET Technologies and Lumilens Advance Wafer-Level Photonic Integration for Next-Generation AI Optical Networks](https://www.poet-technologies.com/news/poet-technologies-and-lumilens-advance-wafer-level-photonic-integration-for-next-generation-ai-optical-networks)
- [GlobeNewswire via Taiwan News: POET Technologies and Lumilens Advance Wafer-Level Photonic Integration for Next-Generation AI Optical Networks](https://www.taiwannews.com.tw/en/news/6362509)
- [Investing.com: POET Technologies stock surges on Lumilens supply deal](https://www.investing.com/news/stock-market-news/poet-technologies-stock-surges-16-on-lumilens-supply-deal-93CH-4688002)
