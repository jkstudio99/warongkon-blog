---
title: 'Microsoft ดัน zero-water AI datacenter: ศึก infrastructure ปี 2026 วัดกันที่น้ำและความร้อน'
seoTitle: 'Microsoft Zero Water AI Datacenter Cooling June 2026 - Warongkon Blog'
description: 'สรุปข่าว Microsoft วันที่ 24 มิถุนายน 2026 เรื่องการลด water intensity ของ datacenter และดีไซน์ AI datacenter ที่ใช้ closed-loop direct-to-chip cooling เพื่อลดการใช้น้ำ'
pubDate: '2026-06-25'
tags: ["Hardware", "Infrastructure", "Microsoft", "AI Datacenter", "Water Use", "Liquid Cooling", "Direct-to-Chip Cooling", "Sustainability", "Cloud Infrastructure"]
coverImage: './cover.png'
---

ข่าว **Hardware / Infrastructure** สำหรับรอบวันที่ **25 มิถุนายน 2026** คือ Microsoft เผยแพร่บทความใหม่เรื่องการลด **water intensity** ของ datacenter ในวันที่ **24 มิถุนายน 2026** และย้ำว่า design รุ่นใหม่สำหรับ AI workload สามารถทำ cooling ระหว่าง operation โดยไม่ใช้น้ำระเหยได้

บทความทางการของ Microsoft ระบุว่าในปี **2024** บริษัทเริ่มใช้ datacenter design รุ่นใหม่ที่ optimized สำหรับ AI workload โดยใช้ **closed-loop, direct-to-chip cooling** เพื่อหมุนเวียนน้ำภายในระบบและควบคุมอุณหภูมิระดับชิปโดยไม่พึ่งการระเหยของน้ำ

Axios รายงานตามมาในวันที่ **24 มิถุนายน 2026** โดยชี้ว่าความเคลื่อนไหวนี้เกิดขึ้นในช่วงที่ AI datacenter ถูกตรวจสอบหนักขึ้นเรื่องน้ำ ไฟ และผลกระทบต่อชุมชน

## ทำไม Microsoft ต้องพูดเรื่องน้ำตอนนี้

AI infrastructure กำลังเจอข้อจำกัดที่ไม่ใช่แค่ GPU supply

เมื่อ cluster สำหรับ training และ inference ใช้ไฟมากขึ้นและ rack density สูงขึ้น data center ต้องจัดการความร้อนหนักกว่าเดิม ถ้าพึ่ง cooling tower แบบเดิม การใช้น้ำอาจกลายเป็น bottleneck ด้านสิ่งแวดล้อมและ permission ในหลายเมือง

ข่าวของ NVIDIA เรื่อง Rubin liquid cooling เมื่อวันที่ **22 มิถุนายน 2026** เพิ่งทำให้ตลาดหันมามองว่า architecture ของ cooling คือส่วนหนึ่งของ AI compute stack ไม่ใช่งาน mechanical ที่อยู่ท้าย project

กรณี Microsoft จึงเป็นอีกด้านของเรื่องเดียวกัน: hyperscaler ต้องพิสูจน์ว่า AI scale ไม่จำเป็นต้องแปลว่า water footprint เพิ่มแบบเส้นตรง

## ตัวเลขที่ Microsoft ใช้เล่าเรื่อง

Microsoft ระบุว่าดีไซน์ datacenter หลายส่วนใน fleet ปัจจุบันใช้ระบบ low-water หรือ zero-water cooling อยู่แล้ว โดยประมาณ **90% ของ owned fleet ในปี 2025** ใช้ cooling system ที่มีประสิทธิภาพสูงด้านน้ำ

ในระบบ direct air cooling น้ำจะถูกใช้เฉพาะเมื่ออุณหภูมิภายนอกสูงกว่า **85°F หรือประมาณ 29.4°C** ส่วนในดีไซน์ใหม่สำหรับ AI datacenter บริษัทชี้ว่า closed-loop direct-to-chip cooling สามารถลดการระเหยของน้ำระหว่าง operation ได้ เพราะ coolant หมุนเวียนอยู่ในวงปิด

Microsoft ยังระบุว่าใน Phoenix, Arizona การปรับ controls และ operation ทำให้ WUE หรือ water usage effectiveness ดีขึ้น **23% year-over-year ใน FY25**

รายละเอียดเหล่านี้สำคัญเพราะมันบอกว่า hyperscaler ไม่ได้มีคำตอบเดียว ทั้ง fleet เก่าและ fleet ใหม่ต้องใช้คนละ playbook:

- site ใหม่ต้องออกแบบ cooling ให้เหมาะกับ AI density ตั้งแต่ต้น
- site เก่าต้องปรับ setpoint, humidity control และ monitoring
- region อากาศเย็นมีโอกาสใช้ dry หรือ low-water cooling มากกว่า
- region ร้อนยังต้องคิดเรื่อง peak condition และ redundancy

## Closed-loop direct-to-chip เปลี่ยน economics ของ AI factory

ก่อนหน้านี้ data center จำนวนมากระบายความร้อนด้วยอากาศและใช้น้ำเพื่อช่วยลดอุณหภูมิผ่าน evaporation ในบางเงื่อนไข

แต่ AI rack ที่มี GPU หนาแน่นมากทำให้การระบายความร้อนด้วยอากาศอย่างเดียวเริ่มไม่พอ Direct-to-chip cooling จึงนำ coolant ไปใกล้แหล่งความร้อนที่สุด นั่นคือชิปและ cold plate

ข้อดีคือ:

- เอาความร้อนออกจากชิปได้แม่นกว่า
- ลดการพึ่ง cooling tower
- เพิ่ม rack density ได้
- ลดความเสี่ยงจากน้ำในพื้นที่ที่ชุมชนกังวล
- ทำให้การออกแบบ facility ผูกกับ hardware roadmap ตั้งแต่แรก

แต่ข้อเสียคือ capex และ operational complexity สูงขึ้น ระบบ cooling กลายเป็นส่วนหนึ่งของ reliability engineering ไม่ใช่งานอาคารทั่วไป

ทีม infrastructure ต้องดูเรื่อง flow rate, coolant quality, leak detection, CDU redundancy, heat rejection และ maintenance lifecycle ตลอดอายุของ cluster

## Water-positive narrative ยังต้องดูไฟฟ้า

สิ่งที่ควรระวังคือการลดน้ำใน cooling ไม่ได้แปลว่าผลกระทบสิ่งแวดล้อมทั้งหมดจบแล้ว

Axios ตั้งข้อสังเกตว่าถึง datacenter ใช้น้ำน้อยลงในอาคาร แต่แหล่งผลิตไฟฟ้าที่ป้อนให้ AI infrastructure อาจยังใช้น้ำ โดยเฉพาะถ้า grid mix มี natural gas หรือ thermal generation สูง

ดังนั้นการประเมิน AI infrastructure ต้องดูทั้งระบบ:

- น้ำที่ใช้ใน cooling ของอาคาร
- น้ำที่ใช้ในการผลิตไฟฟ้า
- คาร์บอนของ grid
- demand response และ load flexibility
- ผลกระทบต่อชุมชนที่รับ power และ water stress

นี่คือจุดที่บทความของ Microsoft สำคัญ เพราะบริษัทพยายามเปลี่ยน narrative จาก "AI ใช้น้ำมาก" ไปสู่ "AI ต้องออกแบบ infrastructure ให้มีประสิทธิภาพขึ้นทุก layer" แต่ตลาดและชุมชนยังต้องตรวจสอบด้วยตัวเลขจริงของแต่ละ site

## มุมมองของผม

ผมมองว่าข่าวนี้ทำให้เห็นว่า hardware/infrastructure battle ของ AI ปี 2026 กำลังลงลึกถึง thermal design และ environmental permission

บริษัทที่ scale AI ได้เร็วจะไม่ใช่แค่บริษัทที่ซื้อ accelerator ได้มาก แต่ต้องตอบได้ว่า data center จะใช้น้ำเท่าไร ใช้ไฟจากไหน ระบายความร้อนอย่างไร และจะอธิบายผลกระทบกับชุมชนอย่างโปร่งใสแค่ไหน

Microsoft เลือกใช้คำว่า water stewardship เพราะรู้ว่าความไว้วางใจของชุมชนจะเป็น constraint สำคัญของการขยาย cloud capacity ในทศวรรษนี้

สรุปสั้น ๆ:
**วันที่ 24 มิถุนายน 2026 Microsoft ย้ำแผนลด water intensity ของ datacenter และชี้ว่า AI datacenter design รุ่นใหม่ใช้ closed-loop direct-to-chip cooling เพื่อลดการใช้น้ำระหว่าง operation ข่าวนี้บอกว่า AI infrastructure ปี 2026 ไม่ได้แข่งแค่ GPU แต่แข่งกันที่น้ำ ความร้อน ไฟฟ้า และความสามารถในการสร้าง site ที่สังคมยอมรับได้**

## หมายเหตุเรื่องภาพประกอบ

ภาพประกอบบทความนี้ดาวน์โหลดจากภาพ hero ใน Official Microsoft Blog เรื่อง water efficiency ขนาด **1920x1278 พิกเซล** ผ่านข้อกำหนด cover image ของ repo

## แหล่งอ้างอิง

- [Microsoft: Inside Microsoft’s two-decade push to cut water intensity while scaling for growth](https://blogs.microsoft.com/blog/2026/06/24/inside-microsofts-two-decade-push-to-cut-water-intensity-while-scaling-for-growth/)
- [Axios: Microsoft points to lower water use in AI era](https://www.axios.com/2026/06/24/microsoft-lower-water-use-ai)
- [Microsoft Cloud Blog: Sustainable by design, next-generation datacenters consume zero water for cooling](https://www.microsoft.com/en-us/microsoft-cloud/blog/2024/12/09/sustainable-by-design-next-generation-datacenters-consume-zero-water-for-cooling/)
- [Microsoft Cloud Blog: Scaling AI with 8 to 20x energy efficiency](https://www.microsoft.com/en-us/microsoft-cloud/blog/2026/06/15/scaling-ai-with-8-to-20x-energy-efficiency/)
