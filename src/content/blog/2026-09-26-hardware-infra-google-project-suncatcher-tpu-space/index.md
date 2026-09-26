---
title: 'Google Project Suncatcher ส่ง TPU ขึ้นวงโคจร: AI infrastructure เริ่มทดลองนอกโลกอย่างจริงจัง'
seoTitle: 'Google Project Suncatcher TPU Space AI Infrastructure September 2026'
description: 'สรุปข่าว Hardware / Infrastructure วันที่ 26 กันยายน 2026 เรื่อง Google Project Suncatcher เตรียมทดสอบ TPU ในอวกาศกับดาวเทียมต้นแบบ'
pubDate: '2026-09-26'
tags:
  [
    'Hardware Infrastructure',
    'Google',
    'Project Suncatcher',
    'TPU',
    'AI Infrastructure',
    'Space Computing',
    'Data Center',
    'Satellite',
    'Google Research',
    'Machine Learning Infrastructure'
  ]
coverImage: './cover.png'
---

ข่าว **Hardware / Infrastructure** สำหรับรอบวันที่ **26 กันยายน 2026** คือบทความของ **Google** วันที่ **24 กันยายน 2026** เรื่อง **Project Suncatcher** ซึ่งเปิดรายละเอียดการทดสอบ AI hardware ในอวกาศ โดย Google ระบุว่าโครงการจะส่งดาวเทียมต้นแบบเพื่อประเมินว่า **Tensor Processing Units (TPUs)** สามารถทำงานในสภาพแวดล้อมวงโคจรต่ำได้แค่ไหน

นี่เป็นข่าว infrastructure ที่น่าสนใจมาก เพราะตลอดปี 2026 บทสนทนาเรื่อง AI capacity มักวนอยู่กับ data center บนโลก: ไฟฟ้า น้ำ cooling, GPU supply, fiber และพื้นที่ แต่ Project Suncatcher ถามคำถามที่ไกลกว่านั้นว่า วันหนึ่ง compute ขนาดใหญ่บางส่วนอาจอยู่ในอวกาศได้หรือไม่

## ทำไม Google ถึงมองอวกาศเป็นพื้นที่ของ AI compute

แนวคิดพื้นฐานของ Project Suncatcher คือดาวเทียมใน low Earth orbit สามารถเข้าถึงแสงอาทิตย์ได้มากและต่อเนื่องกว่าโครงสร้างพื้นฐานบนโลก Google ระบุว่าในวงโคจรต่ำ ดาวเทียมอาจผลิตพลังงานจากแสงอาทิตย์ได้มากกว่าบนโลกหลายเท่า ซึ่งเป็นเหตุผลที่ทำให้อวกาศน่าสนใจสำหรับ machine learning infrastructure ระยะยาว

อย่างไรก็ตาม โครงการนี้ยังไม่ใช่ data center orbital เต็มรูปแบบ แต่เป็นการทดลองทีละขั้น เริ่มจากคำถามพื้นฐานที่สุด: ชิป AI ทนแรงสั่นสะเทือนของจรวด รังสี ความร้อน ความเย็น และปัญหา cooling ในสุญญากาศได้จริงหรือไม่

การเลือกเริ่มจาก hardware survival ทำให้ข่าวนี้น่าเชื่อถือกว่า moonshot ที่เป็นเพียงภาพอนาคต เพราะ Google กำลังเก็บข้อมูลทางวิศวกรรมก่อนพูดถึง scale ใหญ่

## ภารกิจแรกคือการทดสอบ TPU ในสภาพจริง

Google ระบุว่าการทดสอบครั้งนี้พัฒนาร่วมกับ **Planet** และจะอยู่บนภารกิจ rideshare **Transporter-18** ของ **SpaceX** เพื่อรวบรวมข้อมูลในวงโคจรเกี่ยวกับการทำงานของ TPU ภายใต้ stress ของ spaceflight รวมถึงรังสีและอุณหภูมิที่ต่างจาก data center บนโลกอย่างสิ้นเชิง

บทความยังระบุว่าทีมเคยทดสอบ vibration โดยเขย่าดาวเทียมทั้งสามแกนเพื่อจำลองความถี่ของการปล่อยจรวด และทดสอบ TPU ใน proton beam facility ของ **UC Davis Crocker Nuclear Laboratory** ขณะรัน AI workloads

ผลเบื้องต้นที่ Google เปิดเผยคือ **Trillium TPUs** ทน total ionizing dose มากกว่าที่คาดว่าจะได้รับในภารกิจอวกาศ 5 ปีได้ แต่การทดสอบจริงในวงโคจรยังจำเป็น เพราะบางเรื่องไม่มีทางจำลองบนพื้นโลกได้ครบ

## Cooling ในอวกาศคือโจทย์ใหญ่ของ data center รุ่นใหม่

ส่วนที่ชัดเจนว่าเป็นข่าว infrastructure คือปัญหา **cooling** ในอวกาศ TPU สร้างความร้อนสูงในพื้นที่เล็ก แต่ในสุญญากาศไม่มี airflow แบบ data center ปกติ จึงต้องอาศัยการกระจายความร้อนผ่าน radiator และระบบอย่าง heat pipe

นี่สะท้อนปัญหาเดียวกับ data center บนโลกในอีกสภาพแวดล้อมหนึ่ง: ยิ่ง AI accelerator หนาแน่นขึ้น cooling ก็ยิ่งกลายเป็นข้อจำกัดหลัก ไม่ว่าจะอยู่ใน rack, container, hyperscale campus หรือดาวเทียม

ถ้า Google เรียนรู้วิธีระบายความร้อน TPU ในระบบปิดที่ไม่มีอากาศ ผลลัพธ์อาจไม่ได้มีค่าเฉพาะกับอวกาศเท่านั้น แต่ช่วยให้ทีมเข้าใจ thermal design ของ accelerator หนาแน่นสูงในอนาคตมากขึ้นด้วย

## ปี 2027 จะทดสอบการเชื่อมต่อระหว่างดาวเทียม

Project Suncatcher ยังมีโจทย์อีกชั้นคือ **satellite interconnectivity** Google บอกว่าในอนาคตดาวเทียมแต่ละดวงอาจบรรทุก TPU หลายสิบตัว และต้องสื่อสารกันด้วย laser link ที่มี bandwidth สูงมากในระยะสั้นและตำแหน่งเคลื่อนที่ตลอดเวลา

Google ระบุว่าจะทดสอบงานส่วนนี้ในปี **2027** ด้วยดาวเทียมสองดวง ซึ่งเป็น milestone สำคัญกว่าแค่ส่งชิปขึ้นไปทำงานลำพัง เพราะ AI workload ขนาดใหญ่ต้องอาศัยระบบเชื่อมต่อระหว่าง node ไม่ต่างจาก cluster บนโลก

หาก link ระหว่างดาวเทียมไม่เสถียรหรือ latency ไม่เหมาะสม orbital AI cluster ก็จะยังเป็นไอเดียไกลตัว แต่ถ้าทดลองได้ผล ความหมายของคำว่า AI infrastructure จะกว้างขึ้นจาก campus และ power grid ไปถึง constellation design

## สรุป

บทความของ Google วันที่ **24 กันยายน 2026** ทำให้ข่าว **Hardware / Infrastructure** รอบวันที่ **26 กันยายน 2026** มีภาพที่ต่างจากข่าว data center ทั่วไป: AI capacity ในอนาคตอาจต้องสำรวจพื้นที่ใหม่ ทั้งในเชิงพลังงาน cooling และ network topology

Project Suncatcher ยังอยู่ในขั้นทดลอง แต่การส่ง TPU ไปเก็บข้อมูลจริงในวงโคจรคือก้าวที่จับต้องได้ และบอกว่าคอขวดของ AI infrastructure กำลังผลักบริษัทเทคโนโลยีให้คิดนอกกรอบ data center บนพื้นโลกมากขึ้น

ภาพประกอบบทความนี้ดาวน์โหลดจาก image asset ของ **Google Blog** สำหรับ Project Suncatcher ขนาด **2784x1566 พิกเซล** ผ่านข้อกำหนด cover image ของ repo

## แหล่งอ้างอิง

- [Google Blog - Behind Project Suncatcher, our moonshot to put AI in space](https://blog.google/innovation-and-ai/models-and-research/google-research/google-project-suncatcher-facts/)
