---
title: 'Positron ระดมทุน 875 ล้านดอลลาร์: inference hardware กำลังแข่งกันที่ memory, power และ supply chain'
seoTitle: 'Positron Series C Inference Silicon September 2026'
description: 'สรุปข่าว Hardware / Infrastructure วันที่ 11 กันยายน 2026 เรื่อง Positron AI ระดมทุน Series C 875 ล้านดอลลาร์ ที่ valuation 5 พันล้านดอลลาร์ เพื่อ tapeout Asimov และ ramp ระบบ Titan'
pubDate: '2026-09-11'
tags:
  [
    'Hardware',
    'Infrastructure',
    'Positron AI',
    'AI Inference',
    'Asimov',
    'Titan',
    'Atlas',
    'LPDDR5X',
    'TSMC N3P',
    'AI Data Centers'
  ]
coverImage: './cover.png'
---

ข่าว **Hardware / Infrastructure** สำหรับรอบวันที่ **11 กันยายน 2026** คือประกาศของ **Positron AI** เมื่อวันที่ **10 กันยายน 2026** ว่าบริษัทระดมทุน **Series C มูลค่า 875 ล้านดอลลาร์สหรัฐ** ที่ **post-money valuation 5 พันล้านดอลลาร์สหรัฐ**

รอบทุนนี้น่าสนใจเพราะ Positron ไม่ได้ขาย narrative ว่าเป็น GPU อีกตัว แต่ขายแนวคิด **memory-first inference hardware** สำหรับยุคที่ต้นทุนของ AI ย้ายจากการ train model ไปสู่การรัน model และ agent จำนวนมากตลอดเวลา

## Inference กลายเป็นตลาด infrastructure หลัก

หลายปีแรกของ generative AI ถูกวัดด้วย training cluster และจำนวน GPU สำหรับฝึกโมเดล frontier

แต่ปี 2026 สมการเริ่มเปลี่ยนเร็วขึ้น เพราะผู้ใช้จำนวนมากเรียกใช้ assistant, copilot และ agent ตลอดวัน ต้นทุนจึงไม่ได้อยู่แค่ช่วงฝึกโมเดล แต่กระจายเป็น inference workload ขนาดใหญ่ที่ต้องตอบเร็วและคุมต้นทุนได้

Positron จึงวาง thesis ชัดว่า bottleneck ของ inference ไม่ได้มีแค่ compute แต่รวมถึง:

- memory capacity
- memory bandwidth
- power efficiency
- rack density
- supply chain ของ HBM และ advanced packaging
- total cost of ownership ต่อ token

นี่ทำให้ข่าวทุนของ Positron เป็นข่าว infrastructure มากกว่าข่าว startup funding ธรรมดา

## Atlas ให้บริษัทมี production signal แล้ว

รายละเอียดที่ทำให้รอบทุนนี้มีน้ำหนักคือ Positron ระบุว่า **Atlas** ซึ่งเป็น first-generation inference system ถูก deploy มากกว่า **50 racks** ที่ **Oracle Cloud Infrastructure**

ตัวเลขนี้สำคัญเพราะ hardware startup มักติดกับดัก demo ที่ยังไม่กลายเป็น production deployment จริง การมี reference ใน cloud environment ช่วยให้ investor และลูกค้าเชื่อได้มากขึ้นว่า architecture ไม่ได้อยู่แค่ใน slide

ในประกาศ Positron ยังบอกว่าลูกค้าหรือ partner ฝั่ง production มี Parasail, Jump Trading และ i3d.net ซึ่งสะท้อนว่า use case inference ไม่ได้จำกัดเฉพาะ hyperscaler แต่รวมถึง neocloud และบริษัทที่ต้องการควบคุม economics ของการ serve model เอง

## Asimov และ Titan คือเดิมพันหลังปี 2026

เงินทุนรอบนี้จะใช้กับหลายส่วน แต่แกนใหญ่คือ:

- tapeout ของ **Asimov** silicon
- engineering data center และ emulation platform ขนาดมากกว่า **2 MW**
- production ramp ของ **Titan**
- supply commitment สำหรับ **LPDDR5X**
- system integration และ go-to-market

Positron ระบุว่า Asimov จะ tapeout บน **TSMC N3P** ปลายปี 2026 และเข้าสู่ production ในครึ่งหลังของปี 2027 โดย memory ต่อ chip อยู่ในช่วง **288 GB ถึง 2,304 GB**

ส่วน Titan จะรวม Asimov **4-8 chips** ในระบบเดียว ออกแบบสำหรับ model ขนาดมากกว่า **16 trillion parameters** และ context window มากกว่า **10 million tokens** ต่อ node ก่อน scale ไปหลายพัน node

ตัวเลขเหล่านี้ทำให้เห็นว่า inference hardware race ไม่ได้แข่งแค่ TOPS แต่แข่งกันที่ memory footprint ของโมเดลและ context ขนาดใหญ่

## ทำไม LPDDR5X กลายเป็นประเด็นใหญ่

หนึ่งใน thesis ของ Positron คือการใช้ **commodity LPDDR5X** เพื่อหลีกเลี่ยงข้อจำกัดของ HBM และ CoWoS

นี่ไม่ใช่แค่ design choice ทางวิศวกรรม แต่เป็น supply-chain strategy:

- HBM เป็นคอขวดสำคัญของ AI accelerator หลายรุ่น
- advanced packaging มี lead time และ capacity จำกัด
- memory-heavy inference ต้องการ bandwidth และ capacity ในต้นทุนที่ predict ได้
- data center ต้องเลือกได้ระหว่าง air-cooled และ liquid-cooled deployment

ถ้า Positron ทำให้ performance ต่อ dollar และต่อ watt ดีจริงใน production ตลาด inference อาจมีทางเลือกมากขึ้นนอกจากการรอ GPU รุ่นใหม่จาก vendor รายใหญ่

## ความเสี่ยงคือการผลิตจริงยากกว่าการระดมทุน

แม้เงินทุน 875 ล้านดอลลาร์จะใหญ่มาก แต่ hardware roadmap ยังเสี่ยงสูง

Positron ต้องพิสูจน์พร้อมกันหลายเรื่อง:

- tapeout บน node ขั้นสูงต้องตรงเวลา
- software stack ต้องง่ายพอสำหรับลูกค้า AI workload จริง
- production ramp ต้องไม่สะดุดจาก supply chain
- system reliability ต้องผ่าน data center operation
- economics ต้องชนะ GPU ใน workload ที่ลูกค้า care จริง
- sales motion ต้องเข้ากับ cloud, neocloud และ enterprise procurement

ตลาด AI hardware มีประวัติที่บริษัทหลายรายทำ demo ได้ดี แต่เจอปัญหาเมื่อต้อง ship system จำนวนมากพร้อม software ecosystem ครบ

## สรุป

การระดมทุน **875 ล้านดอลลาร์** ของ **Positron AI** ที่ valuation **5 พันล้านดอลลาร์** เป็นข่าว Hardware / Infrastructure ที่ชี้ว่าศึก AI hardware รอบถัดไปจะอยู่ที่ inference economics

เมื่อ agent, assistant และ long-context workload โตขึ้น คำถามหลักจะไม่ใช่แค่ใคร train model ใหญ่ที่สุด แต่ใคร serve model ได้ถูกกว่า เร็วกว่า ใช้ไฟน้อยกว่า และไม่ติดคอขวด memory supply chain

ถ้า Asimov และ Titan ทำตาม roadmap ได้ Positron อาจเป็นหนึ่งในผู้เล่นที่ทำให้ data center inference stack มีทางเลือกมากขึ้นในช่วงหลังปี 2026

ภาพประกอบบทความนี้ดาวน์โหลดจาก OG image ทางการของ **Positron AI** ขนาด **1800x963 พิกเซล** ผ่านข้อกำหนด cover image ของ repo

## แหล่งอ้างอิง

- [Positron AI - Press](https://www.positron.ai/press)
- [PRNewswire - Positron AI Raises $875 Million at a $5 Billion Valuation](https://www.prnewswire.com/news-releases/positron-ai-raises-875-million-at-a-5-billion-valuation-to-bring-its-next-generation-inference-silicon-to-market-302874601.html)
