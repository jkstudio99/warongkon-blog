---
title: 'Meta จับมือ AWS ใช้ Graviton ระดับหลายสิบล้านคอร์เมื่อ 24 เมษายน 2026: ข่าวนี้กำลังบอกว่า AI infrastructure ยุค agent ไม่ได้วัดกันที่ GPU อย่างเดียวอีกแล้ว'
seoTitle: 'Meta AWS Graviton Agentic AI April 2026 - Warongkon Blog'
description: 'สรุปข้อตกลงระหว่าง Meta และ AWS วันที่ 24 เมษายน 2026 เรื่องการใช้ Graviton ระดับหลายสิบล้านคอร์ และวิเคราะห์ว่าทำไมหมวด Hardware / Infrastructure กำลังกลับมาให้ความสำคัญกับ CPU สำหรับ agentic AI'
pubDate: '2026-05-04'
tags: ["Hardware", "Infrastructure", "Meta", "AWS"]
coverImage: './cover.svg'
---

สำหรับหมวด Hardware / Infrastructure ในรอบวันที่ **4 พฤษภาคม 2026** ข่าวที่ผมเลือกคือการที่ **Meta และ AWS ประกาศข้อตกลงเมื่อวันที่ 24 เมษายน 2026** เพื่อให้ Meta นำ **AWS Graviton** เข้ามาอยู่ใน compute portfolio ระดับ **หลายสิบล้านคอร์**

นี่เป็นข่าวที่น่าสนใจมาก เพราะมันช่วยแก้ภาพจำผิด ๆ อย่างหนึ่งในตลาด AI ตอนนี้ นั่นคือการคิดว่าโครงสร้างพื้นฐานยุค agent จะหมุนอยู่กับ GPU เพียงอย่างเดียว

ความจริงคือเมื่อระบบ AI เริ่มต้อง

- วางแผนหลายขั้น
- รันงาน orchestration
- ทำ reasoning แบบต่อเนื่อง
- ค้นหาและประสานหลายบริการ

ภาระงานฝั่ง **CPU-intensive** จะโตขึ้นมาก และข่าวนี้กำลังบอกเรื่องนั้นอย่างชัดเจน

## เกิดอะไรขึ้นในวันที่ 24 เมษายน 2026

Meta ระบุในประกาศทางการวันที่ **24 เมษายน 2026** ว่าบริษัทได้ตกลงกับ AWS เพื่อนำ **tens of millions of AWS Graviton cores** มาใช้ในระบบโครงสร้างพื้นฐานของตน และ Amazon ก็ยืนยันข้อมูลชุดเดียวกันในข่าวของฝั่งบริษัท

ทั้งสองฝ่ายอธิบายตรงกันว่าเหตุผลหลักคือ **agentic AI** กำลังสร้างความต้องการ compute แบบใหม่ ซึ่งต่างจากภาพของงานเทรนโมเดลขนาดใหญ่เพียงอย่างเดียว

Amazon อธิบายว่าภาระงานอย่าง

- real-time reasoning
- code generation
- search
- และ multi-step task orchestration

ล้วนกิน CPU อย่างมีนัยสำคัญ

ฝั่ง Meta เองก็ใช้คำว่า **diversifying compute sources** อย่างชัดเจน ซึ่งสะท้อนว่าบริษัทไม่ได้มองชิปแบบเดียวเป็นคำตอบของทุก workload อีกต่อไป

## ทำไมข่าวนี้จึงสำคัญมากในเชิงโครงสร้างพื้นฐาน

สิ่งที่น่าสนใจที่สุดของข่าวนี้คือการเปลี่ยนภาษาที่ใช้คุยเรื่อง AI infra

ก่อนหน้านี้เวลาพูดถึง AI infrastructure เรามักนึกถึง

- GPU cluster
- HBM
- interconnect
- training capex

แต่ข้อตกลงนี้บอกว่าถ้า AI กำลังขยับไปสู่ agent ที่ต้องรันงานต่อเนื่องและแตกงานย่อยจำนวนมาก คำถามใหม่จะกลายเป็น

- CPU พอไหม
- latency ของการประสานงานต่ำพอหรือเปล่า
- bandwidth ระหว่าง instance ดีแค่ไหน
- และต้นทุนต่อ workload orchestration คุมได้หรือไม่

นี่คือเหตุผลที่ข่าวนี้มีนัยมากกว่าดีลเชิงจัดซื้อธรรมดา

## รายละเอียดของ Graviton5 ก็ชี้ให้เห็นว่าตลาดกำลัง optimize คนละโจทย์

Amazon ระบุว่า **Graviton5** มี **192 คอร์** และมี cache ใหญ่กว่ารุ่นก่อนหน้า **5 เท่า** โดยช่วยลดความล่าช้าในการสื่อสารระหว่างคอร์ได้สูงสุด **33%** และให้ performance ดีขึ้นได้สูงสุด **25%** จากรุ่นก่อน

ตัวเลขเหล่านี้สำคัญเพราะมันบอกว่าการแข่งขันของ infra รอบนี้ไม่ได้อยู่แค่ที่การเร่ง matrix math สำหรับ training หรือ inference ขนาดใหญ่ แต่รวมถึงการจัดการงานย่อยจำนวนมากที่ต้องคุยกันตลอดเวลา

สำหรับ agentic AI นี่คือโจทย์จริง เพราะระบบหนึ่งอาจต้องมี

- planner
- retriever
- tool runner
- verifier
- memory service

ทำงานพร้อมกันและส่งต่อสถานะไปมาอย่างต่อเนื่อง

## ข่าวนี้สะท้อนว่า “portfolio architecture” กำลังชนะ “one-chip-fits-all”

ผมคิดว่านี่เป็นสารหลักของข่าว

Meta ระบุชัดว่า **no single chip architecture can efficiently serve every workload** ซึ่งเป็นประโยคที่ควรอ่านซ้ำ เพราะมันสะท้อนแนวคิดของ infra ยุคใหม่ได้ดีมาก

อนาคตของ AI infrastructure มีแนวโน้มเป็นการจัดพอร์ตทรัพยากร เช่น

- GPU สำหรับ training และ heavy inference
- CPU จำนวนมากสำหรับ orchestration และ reasoning loop
- custom accelerators สำหรับงานเฉพาะ
- cloud และ on-prem ผสมกันตาม compliance กับ latency

เมื่อผู้เล่นขนาดใหญ่เริ่มพูดแบบนี้อย่างเปิดเผย มันมักไม่ใช่เรื่องชั่วคราว แต่เป็นสัญญาณว่าตลาดกำลังขยับจริง

## ข่าวนี้บอกอะไรเกี่ยวกับหมวด Hardware / Infrastructure ในต้นพฤษภาคม 2026

ผมคิดว่ามีอย่างน้อย 3 ประเด็นใหญ่

### 1. agentic AI ดันความสำคัญของ CPU กลับขึ้นมาอีกครั้ง

GPU ยังสำคัญมาก แต่ไม่ได้หมายความว่า CPU จะกลายเป็นองค์ประกอบรองเสมอไป โดยเฉพาะในระบบที่มี orchestration สูง

### 2. energy efficiency กลายเป็นประเด็นโครงสร้าง ไม่ใช่แค่ภาพลักษณ์

Amazon ผูกเรื่อง Graviton เข้ากับ efficiency และ sustainability อย่างชัดเจน ซึ่งบอกว่าต่อจากนี้ต้นทุนไฟฟ้าและข้อจำกัดพลังงานจะยิ่งเป็นส่วนหนึ่งของการออกแบบ stack

### 3. hyperscaler และ model company กำลังร่วมกันนิยาม infra รูปแบบใหม่

ดีลนี้ไม่ใช่เพียงเรื่อง Meta ซื้อ cloud capacity แต่เป็นตัวอย่างว่าผู้สร้าง AI experience และผู้สร้าง cloud silicon กำลังออกแบบโครงสร้างพื้นฐานร่วมกันมากขึ้น

## มุมมองของผม

ผมคิดว่าข่าววันที่ **24 เมษายน 2026** นี้สำคัญเพราะมันช่วยรีเซ็ตวิธีคิดเรื่อง AI infrastructure ให้สมจริงขึ้น

ถ้าเราเฝ้าดูแต่การแข่งขันด้าน GPU เราอาจพลาดความจริงข้อหนึ่งไป คือระบบ agent ที่ให้บริการผู้ใช้จริงจำนวนมากต้องพึ่ง compute หลายชนิด และต้องออกแบบให้เหมาะกับภาระงานแต่ละชั้น

ถ้าจะสรุปให้สั้นที่สุด:
**ข่าวนี้ไม่ได้บอกแค่ว่า Meta ซื้อ Graviton เพิ่ม แต่บอกว่าหมวด AI infrastructure ในปี 2026 กำลังขยับจากการล่าชิปเดี่ยวที่แรงที่สุด ไปสู่การจัดพอร์ต compute ที่เหมาะกับแต่ละบทบาทของ agent**

## แหล่งอ้างอิง

- [Meta Newsroom: Meta Partners With AWS on Graviton Chips to Power Agentic AI](https://about.fb.com/news/2026/04/meta-partners-with-aws-on-graviton-chips-to-power-agentic-ai/)
- [Amazon: Meta signs agreement with AWS to power agentic AI on Amazon's Graviton chips](https://www.aboutamazon.com/news/aws/meta-aws-graviton-ai-partnership)
