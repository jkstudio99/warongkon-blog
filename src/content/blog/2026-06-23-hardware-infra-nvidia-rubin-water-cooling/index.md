---
title: 'NVIDIA Rubin กับน้ำร้อน 45°C: AI data center เริ่มแก้โจทย์น้ำด้วย cooling architecture'
seoTitle: 'NVIDIA Rubin Liquid Cooling Water Use June 2026 - Warongkon Blog'
description: 'สรุปข่าว NVIDIA วันที่ 22 มิถุนายน 2026 เรื่อง Rubin reference design ที่ใช้ liquid cooling อุณหภูมิสูง 113°F หรือ 45°C เพื่อลดการใช้น้ำและ chiller ใน AI data center'
pubDate: '2026-06-23'
tags: ["Hardware", "Infrastructure", "NVIDIA", "Rubin", "Liquid Cooling", "AI Data Center", "Water Use", "London Climate Week", "Schneider Electric"]
coverImage: './cover.jpg'
---

ข่าว **Hardware / Infrastructure** สำหรับรอบวันที่ **23 มิถุนายน 2026** คือประเด็น **NVIDIA Rubin generation reference design** ถูกนำเสนอในมุมใหม่: ไม่ใช่แค่แรงขึ้นสำหรับ AI workload แต่ถูกออกแบบให้ใช้ **high-temperature liquid cooling** เพื่อช่วยลดการใช้น้ำใน data center

Axios รายงานวันที่ **22 มิถุนายน 2026** ว่า NVIDIA ประกาศที่ London Climate Week ว่า AI system รุ่นใหม่ของบริษัทสามารถระบายความร้อนด้วยของเหลวหมุนเวียนที่อุ่นถึง **113°F หรือประมาณ 45°C** ได้ ซึ่งช่วยลดความจำเป็นของ chiller และ cooling tower แบบเดิม

The Verge รายงานในวันเดียวกันว่า Josh Parker หัวหน้าฝ่าย sustainability ของ NVIDIA อธิบายว่า reference design นี้สามารถลดการใช้น้ำจากระดับประมาณ **2.6 ล้านแกลลอนต่อเมกะวัตต์ต่อปี** ในระบบ cooling tower แบบทั่วไปลงใกล้ศูนย์ได้ หาก data center ออกแบบเป็น closed-loop และ dry-cooling system อย่างเหมาะสม

## ทำไมข่าว cooling สำคัญพอ ๆ กับข่าว GPU

AI infrastructure ไม่ได้หยุดที่ chip performance แล้ว

เมื่อ rack หนึ่งใช้ไฟระดับหลายร้อยกิโลวัตต์ ความร้อนกลายเป็น design constraint ที่กำหนดว่า data center จะสร้างที่ไหน, ใช้น้ำเท่าไร, ต้องมี chiller ขนาดไหน และจะต่อไฟกับ grid อย่างไร

Schneider Electric เขียนไว้ในบทความวันที่ **12 มิถุนายน 2026** ว่า AI factory ต่างจาก cloud data center แบบเดิม เพราะ rack density ของ Blackwell GB200 NVL72 อยู่ราว **132 kW ต่อ rack** ขณะที่ Vera Rubin NVL72 ขยับไปถึงประมาณ **227 kW ต่อ rack** และในอีก 2-3 ปีอาจไปแตะระดับมากกว่า 1 MW ต่อ rack

เมื่อ density เพิ่มเร็วขนาดนี้ การระบายความร้อนด้วยอากาศอย่างเดียวไม่พออีกต่อไป Liquid cooling จึงไม่ใช่ feature พิเศษ แต่เริ่มกลายเป็น default architecture ของ AI factory

## น้ำร้อน 45°C เปลี่ยนสมการอย่างไร

ใน data center รุ่นเก่า ระบบ cooling มักต้องทำให้น้ำเย็นลงมากก่อนส่งกลับเข้าไปในระบบ ซึ่งต้องใช้ chiller และพลังงานจำนวนมาก ถ้าใช้ cooling tower ก็มีการสูญเสียน้ำจากการระเหย

แนวคิดของ Rubin คือรับความร้อนจาก chip โดยตรงผ่าน liquid loop ที่อุณหภูมิสูงขึ้นมาก เมื่อ coolant สามารถทำงานที่ **45°C** ได้ ระบบระบายความร้อนภายนอกสามารถใช้ dry cooler หรือระบบที่พึ่งพาอากาศภายนอกมากขึ้น แทนการใช้น้ำระเหยจำนวนมาก

นี่ทำให้ cooling กลายเป็นโจทย์สถาปัตยกรรม:

- จะเลือก closed-loop dry cooling เพื่อลดน้ำ
- จะใช้ adiabatic assist เฉพาะวันที่อากาศร้อน
- จะออกแบบ chiller optional หรือ chiller-light
- จะ reuse ความร้อนที่ออกจากระบบอย่างไร
- จะ balance น้ำ ไฟฟ้า capex และ reliability อย่างไร

ข่าวนี้จึงไม่ได้หมายความว่า NVIDIA แก้ปัญหา data center ทั้งหมดแล้ว แต่หมายความว่ารุ่น hardware ใหม่กำลังเปิด design space ที่เดิมทำได้ยากกว่า

## Reality check: น้ำในตัวอาคารลด แต่โจทย์ไฟฟ้ายังอยู่

Axios เตือนจุดสำคัญว่าแม้ cooling-related water use จะลดลงได้มาก แต่การผลิตไฟฟ้าให้ AI data center ก็ยังอาจใช้น้ำ ขึ้นกับแหล่งพลังงานและ grid mix ของพื้นที่นั้น

The Verge ก็ชี้ว่าการประกาศนี้ยังไม่ได้ตอบทุกคำถาม เช่น ต้นทุนก่อสร้าง, ความพร้อมของ operator, ผลกระทบจากการสร้าง facility ขนาดใหญ่ และปริมาณไฟฟ้ารวมที่ AI infrastructure ต้องการ

นี่เป็น distinction ที่สำคัญมาก

ถ้าระบบ cooling ใหม่ทำให้ compute ต่อหน่วยมีประสิทธิภาพขึ้น แต่ทำให้บริษัทสร้าง data center มากขึ้นอย่างรวดเร็ว footprint รวมอาจยังเพิ่มได้ นี่คือสิ่งที่มักถูกเรียกว่า rebound effect หรือ Jevons paradox ในโลกพลังงาน

ดังนั้นประโยชน์ของ Rubin cooling design ควรถูกวัดทั้งในระดับต่อ rack และระดับ system ทั้ง campus

## Data center operator ต้องคิดแบบ thermodynamic engineer

ในอดีต data center มักถูกพูดถึงในมุม real estate, power capacity และ network connectivity

แต่ AI factory บังคับให้ operator ต้องคิดละเอียดขึ้น:

- coolant temperature
- CDU redundancy
- flow rate และ pressure control
- backup cooling ระหว่างไฟดับ
- water chemistry
- heat rejection design
- heat reuse สำหรับ district heating หรือ industrial process

Schneider Electric ระบุว่า liquid-cooled racks ใน reference design สามารถดึงความร้อนออกทาง liquid ได้มากถึง **96%** แต่ยังมีส่วนที่ต้องใช้ air cooling อยู่ นั่นแปลว่า AI factory ไม่ได้เป็น "น้ำทั้งหมด" แบบง่าย ๆ แต่เป็น hybrid architecture ที่ต้องออกแบบทั้ง liquid loop และ air path ให้ทำงานร่วมกัน

## มุมมองของผม

ผมมองว่าข่าวนี้สำคัญเพราะมันทำให้คำว่า AI hardware ขยายลงไปถึง water policy และ mechanical design

ที่ผ่านมาเราโฟกัสว่าใครมี GPU มากกว่า ใครมี HBM มากกว่า หรือใครต่อไฟได้เร็วกว่า แต่ปี 2026 ทำให้เห็นว่า thermal architecture อาจกลายเป็นหนึ่งในข้อได้เปรียบหลักของ AI infrastructure

หาก NVIDIA ทำให้ Rubin reference design กลายเป็นมาตรฐานที่ operator และ cloud provider deploy ได้จริง การลดน้ำต่อ megawatt จะช่วยลดแรงต้านจากชุมชนและ regulator ในหลายพื้นที่ แต่ถ้า efficiency ทำให้ buildout เร็วขึ้นโดยไม่มีการจัดการพลังงานที่ดี ปัญหารวมก็ยังไม่หาย

สรุปสั้น ๆ:
**วันที่ 22 มิถุนายน 2026 NVIDIA ดัน narrative ว่า Rubin generation AI system สามารถใช้ high-temperature liquid cooling ที่ 45°C เพื่อลดการพึ่งพา water-intensive cooling tower ได้ ข่าวนี้ทำให้เห็นว่า battle ของ AI infrastructure ไม่ได้อยู่แค่ใน GPU แต่ลงลึกถึงความร้อน น้ำ ไฟฟ้า และวิธีออกแบบทั้ง data center**

## หมายเหตุเรื่องภาพประกอบ

ภาพประกอบบทความนี้ดาวน์โหลดจากภาพประกอบข่าว The Verge เกี่ยวกับ NVIDIA Rubin liquid cooling ขนาด **1200x624 พิกเซล** ผ่านข้อกำหนด cover image ของ repo

## แหล่งอ้างอิง

- [Axios: Nvidia says AI's water challenge is largely solved](https://www.axios.com/2026/06/22/nvidia-data-center-water-solution)
- [The Verge: Nvidia says its AI data center design runs hotter to use a lot less water](https://www.theverge.com/tech/954139/nvidia-data-centers-rubin-liquid-cooling)
- [Schneider Electric Blog: AI factory cooling vs cloud data centers](https://blog.se.com/datacenter/2026/06/12/ai-factory-cooling-vs-cloud-data-centers-why-liquid-cooling-is-essential-for-high-density-ai-workloads/)
- [NVIDIA: Sustainable Computing Solutions](https://www.nvidia.com/en-us/data-center/sustainable-computing/)
