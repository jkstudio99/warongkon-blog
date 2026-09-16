---
title: 'EUCLYD ระดมทุนกว่า €200M: AI infrastructure เริ่มแข่งที่ cost per token และ memory architecture'
seoTitle: 'EUCLYD Series A AI Silicon Infrastructure September 2026'
description: 'สรุปข่าว Hardware / Infrastructure วันที่ 16 กันยายน 2026 เรื่อง EUCLYD ระดมทุน Series A กว่า 200 ล้านยูโร นำโดย Samsung, EQT, Somerset และ Innovation Industries'
pubDate: '2026-09-16'
tags:
  [
    'Hardware Infrastructure',
    'EUCLYD',
    'AI Silicon',
    'Samsung',
    'EQT',
    'Semiconductors',
    'AI Inference',
    'Data Centers',
    'Memory Architecture',
    'Europe'
  ]
coverImage: './cover.png'
---

ข่าว **Hardware / Infrastructure** สำหรับรอบวันที่ **16 กันยายน 2026** คือการที่ **EUCLYD** บริษัท semiconductor systems จาก Eindhoven ประเทศเนเธอร์แลนด์ ประกาศเมื่อวันที่ **15 กันยายน 2026** ว่าได้ลงนามระดมทุน **Series A มากกว่า €200 ล้าน**

รอบนี้นำโดย **Samsung**, **Somerset Capital Partners**, **Scaleup Europe Fund** ซึ่งบริหารโดย EQT และ **Innovation Industries** พร้อมผู้ร่วมลงทุนอย่าง EIFO, imec.xpand, Brabant Development Agency และ Quadri

ข่าวนี้สำคัญเพราะสะท้อนว่า hardware/infrastructure สำหรับ AI ไม่ได้มีแค่การซื้อ GPU เพิ่ม แต่เริ่มกลับไปถามคำถามพื้นฐานกว่าเดิมว่า inference stack ควรถูกออกแบบอย่างไรให้ใช้พลังงาน เงินทุน และ memory bandwidth น้อยลง

## AI ไม่ได้ติดแค่ compute แต่ติด memory และพลังงาน

EUCLYD วางโจทย์ของตัวเองไว้ที่สิ่งที่บริษัทเรียกว่า efficiency wall ของ AI

เมื่อ foundation model ใหญ่และเก่งขึ้น ต้นทุนการ deploy ไม่ได้โตเฉพาะจำนวน accelerator แต่โตพร้อมกันหลายชั้น:

- power availability
- memory bandwidth
- capital expenditure
- datacenter footprint
- cooling requirement
- networking และ system complexity
- cost per token ใน production

นี่คือจุดที่ AI infrastructure เริ่มกลายเป็นปัญหาเชิงระบบ ไม่ใช่ปัญหาของ chip ตัวเดียว

บริษัทจำนวนมากสามารถรัน demo ได้ แต่การรัน inference ปริมาณมหาศาลด้วยต้นทุนที่ enterprise หรือ consumer service รับไหวเป็นอีกโจทย์หนึ่ง

## craftwerk คือการวาง AI silicon แบบ system-first

ในแถลงการณ์ EUCLYD ระบุว่า roadmap ของบริษัทมี **craftwerk** ซึ่งบริษัทเรียกว่า agentic AI silicon และ **craftwerk station CWS** ที่ถูกวางเป็น exascale AI factory ใช้พลังงานต่ำ

รายละเอียดทางเทคนิคยังมีจำกัด แต่สารสำคัญคือบริษัทไม่ได้พูดถึง ASIC compute แยกเดี่ยว บริษัทพูดถึง platform ที่รวม programmable ASIC compute, processor-memory co-design และ system-level optimization

นี่เป็นแนวทางที่สอดคล้องกับทิศทางของ AI inference ปี 2026 เพราะ bottleneck จำนวนมากไม่ได้อยู่ใน matrix multiplication อย่างเดียว แต่อยู่ที่การเคลื่อนข้อมูล ระยะห่างระหว่าง processor กับ memory และค่าใช้จ่ายของระบบรอบ chip

ถ้า EUCLYD ทำได้จริง ความต่างอาจไม่ได้อยู่ที่ benchmark peak performance เท่านั้น แต่อยู่ที่ economics:

- token ถูกลง
- latency คงที่ขึ้น
- rack ใช้พลังงานน้อยลง
- footprint ของ AI factory ลดลง
- sovereign และ enterprise AI ใช้งานได้ในพื้นที่ที่ไฟฟ้าจำกัดกว่า hyperscale hub

## Samsung เข้ามาเพราะ memory คือหัวใจของยุค inference

การที่ Samsung เป็นหนึ่งในผู้นำรอบทุนทำให้ข่าวนี้มีน้ำหนักกว่าการระดมทุน deep tech ทั่วไป

Samsung ไม่ได้เป็นเพียงนักลงทุนทางการเงิน แต่เป็นผู้เล่นหลักใน semiconductor และ memory ecosystem ระดับโลก

สำหรับ AI inference รุ่นต่อไป memory bandwidth, packaging, thermal design และ supply chain จะสำคัญพอ ๆ กับ compute die เอง ยิ่ง model ใช้ context ยาวขึ้นและ agent ต้องถือ state จำนวนมาก ต้นทุนการเคลื่อนข้อมูลจะยิ่งเห็นชัด

ดังนั้นบริษัทที่ออกแบบ AI silicon โดยเริ่มจาก memory architecture และ datacenter system จึงมีเหตุผลเชิงยุทธศาสตร์มากขึ้นในสายตาของผู้ผลิต memory

## Peter Wennink เข้าบอร์ดคือสัญญาณของ European semiconductor ambition

อีกจุดสำคัญคือ **Peter Wennink** อดีต President และ CEO ของ **ASML** เข้ารับตำแหน่ง Chairman of the Board ของ EUCLYD

นี่ทำให้ข่าวนี้แตะภาพใหญ่ของยุโรปโดยตรง

ยุโรปมีจุดแข็งใน semiconductor equipment, photonics, research ecosystem และ industrial engineering แต่ในยุค AI accelerator กระแสหลักยังถูกครอบงำโดยบริษัทสหรัฐฯ และ supply chain เอเชียเป็นส่วนใหญ่

EUCLYD จึงน่าสนใจเพราะพยายามสร้างบริษัท AI infrastructure ที่เริ่มจากยุโรป แต่ต้องแข่งขันในตลาด global hyperscale, enterprise และ sovereign AI

ถ้าบริษัทสำเร็จ มันจะช่วยให้ยุโรปมีบทบาทมากกว่าแค่ supplier ของเครื่องมือผลิตชิปหรือ research lab แต่เป็นเจ้าของ platform สำหรับ AI inference เอง

## Funding รอบนี้ซื้อเวลา engineering ไม่ใช่แค่ headline

EUCLYD ระบุว่าเงินทุนจะใช้ขยายทีม engineering, เร่ง silicon และ systems roadmap, เสริม ecosystem partnership และเตรียม commercial deployment ในตลาด enterprise, sovereign และ hyperscale AI

สำหรับ hardware startup เงินมากไม่ได้แปลว่าชนะทันที แต่ซื้อสิ่งที่สำคัญมากคือเวลาและ iteration

การสร้าง AI silicon ต้องใช้รอบออกแบบยาวและแพง:

- architecture definition
- simulation และ compiler/toolchain
- tape-out
- packaging
- board และ rack design
- software stack
- customer pilot
- reliability testing
- manufacturing และ supply agreement

เงินระดับมากกว่า €200 ล้านจึงเป็นสัญญาณว่าผู้ลงทุนเชื่อว่าปัญหา efficiency ของ AI inference ใหญ่พอที่จะรองรับบริษัท hardware ใหม่ ไม่ใช่แค่ optimization เล็ก ๆ ใน software layer

## ความเสี่ยงคือสนามนี้โหดมาก

แม้ข่าวนี้น่าจับตา แต่การแข่งขัน AI silicon เป็นหนึ่งในตลาดที่ยากที่สุด

EUCLYD ต้องแข่งกับ incumbent ที่มี ecosystem ใหญ่กว่า ลูกค้าเดิมมากกว่า และ software maturity สูงกว่า เช่น GPU platform, cloud TPU, custom ASIC ของ hyperscaler และ startup accelerator รายอื่น

ความเสี่ยงสำคัญคือ:

- chip ดีแต่ software stack ไม่พร้อม
- ประหยัดพลังงานแต่ deploy ยากใน data center จริง
- performance ดีเฉพาะ workload บางประเภท
- supply chain ไม่ scale ทันความต้องการ
- customer ไม่อยากย้ายจาก ecosystem เดิม
- model architecture เปลี่ยนเร็วกว่ารอบ hardware

ดังนั้นตัวชี้วัดหลังจากนี้ไม่ใช่แค่ tape-out หรือ benchmark แต่คือ production workload ที่พิสูจน์ว่า cost per token ลดลงจริงในสภาพแวดล้อมที่ลูกค้าใช้งาน

## สรุป

การระดมทุน Series A ของ **EUCLYD** มากกว่า **€200 ล้าน** เป็นข่าว Hardware / Infrastructure ที่บอกว่าตลาด AI ปี 2026 เริ่มมองลึกกว่า "มี accelerator กี่ตัว"

โจทย์ใหม่คือใครสามารถออกแบบ compute, memory architecture และ datacenter system ให้ทำ inference ได้ถูกลง ประหยัดพลังงานขึ้น และ deploy ได้ในวงกว้างกว่าเดิม

ถ้า EUCLYD ทำตาม roadmap ได้จริง ข่าวนี้อาจเป็นหนึ่งในจุดเริ่มของคลื่น AI silicon ยุโรปที่เน้น efficiency และ sovereign infrastructure มากกว่าการแข่ง peak FLOPS เพียงอย่างเดียว

ภาพประกอบบทความนี้ดาวน์โหลดจาก artwork ทางการบนเว็บไซต์ **EUCLYD** ขนาด **1319x206 พิกเซล** ผ่านข้อกำหนดความกว้าง cover image ของ repo โดยเลือกใช้ภาพทางการนี้เพราะหน้า press release ไม่เปิดเผยภาพผลิตภัณฑ์หรือภาพข่าวเฉพาะรอบทุนที่ดีกว่า

## แหล่งอ้างอิง

- [EUCLYD - EUCLYD Raises Over €200 Million to Break the AI Efficiency Wall](https://www.euclyd.ai/press-release)
- [Data Center Dynamics - Latest news listing, 15 September 2026](https://www.datacenterdynamics.com/)
- [EQT - Scaleup Europe Fund](https://eqtgroup.com/current-portfolio/scaleup-europe-fund/)
