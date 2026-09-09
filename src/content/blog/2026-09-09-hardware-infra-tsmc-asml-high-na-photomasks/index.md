---
title: 'TSMC x ASML ดัน 12-inch photomask: High NA EUV กำลังชนคอขวดใหม่ของ AI chip'
seoTitle: 'TSMC ASML 12-inch Photomask High NA EUV September 2026'
description: 'สรุปข่าว Hardware / Infrastructure วันที่ 9 กันยายน 2026 เรื่อง TSMC และ ASML เปิด initiative สำหรับ 12-inch photomask เพื่อเพิ่ม productivity ของ High NA EUV และ advanced node สำหรับ AI'
pubDate: '2026-09-09'
tags:
  [
    'Hardware',
    'Infrastructure',
    'TSMC',
    'ASML',
    'High NA EUV',
    'Photomask',
    'Semiconductor',
    'AI Chips',
    'Advanced Nodes',
    'Lithography'
  ]
coverImage: './cover.jpg'
---

ข่าว **Hardware / Infrastructure** สำหรับรอบวันที่ **9 กันยายน 2026** คือประกาศของ **TSMC** และ **ASML** เมื่อวันที่ **8 กันยายน 2026** เรื่อง initiative เพื่อพาอุตสาหกรรม semiconductor เปลี่ยนผ่านจาก photomask ขนาดเดิมไปสู่ **12-inch photomask** สำหรับยุค **High NA EUV**

ประกาศนี้อาจดูเหมือนข่าวเฉพาะทางของโรงงานชิป แต่จริง ๆ แล้วเกี่ยวกับโครงสร้างพื้นฐาน AI โดยตรง เพราะ advanced accelerator รุ่นถัดไปจะพึ่งพากระบวนการผลิตที่เล็กลง ซับซ้อนขึ้น และต้องการ throughput ของ lithography ที่สูงกว่าเดิม

## High NA EUV ไม่ได้จบที่เครื่อง scanner

เวลาพูดถึง EUV คนมักนึกถึงเครื่อง lithography ของ ASML เป็นหลัก แต่ production จริงไม่ได้มีแค่ scanner

ระบบหนึ่งชั้นของ fab ต้องมี:

- photomask หรือ reticle ที่เก็บ pattern ของวงจร
- scanner ที่ฉาย pattern ลง wafer
- process control และ metrology
- material, resist และ mask supply chain
- design rule ที่สอดคล้องกับข้อจำกัดของเครื่องมือ

ASML ระบุว่า High NA EUV สามารถเริ่ม production ด้วย photomask ขนาด **6-inch** ที่ใช้อยู่ในปัจจุบันได้ แต่การขยับไปใช้ **12-inch mask** จะช่วยเพิ่ม productivity ลดต้นทุนการผลิต และลดข้อจำกัดเรื่อง stitching สำหรับ chip รุ่นล้ำหน้า

จุดนี้สำคัญเพราะ High NA EUV ไม่ได้เป็นเพียงการซื้อเครื่องรุ่นใหม่ แต่เป็นการยกทั้ง manufacturing ecosystem ให้พร้อมรับ node ถัดไป

## Timeline บอกว่าข่าวนี้คือ infrastructure planning ระยะยาว

ตามประกาศของ ASML และ TSMC initiative นี้ตั้งเป้า:

- ตั้ง **12-inch mask pilot line** ภายในปี **2031**
- ทำให้ระบบ High NA lithography พร้อมสำหรับ advanced node production ภายในปี **2033**
- ให้ TSMC เริ่มใช้ High NA technology ใน high-volume manufacturing สำหรับ advanced nodes ตั้งแต่ปี **2030**

ตัวเลขปีเหล่านี้ฟังดูไกล แต่ในโลก semiconductor มันใกล้มาก

เหตุผลคือการเปลี่ยน mask format กระทบตั้งแต่ supplier, equipment, fab layout, inspection, logistics ไปจนถึง design ecosystem ถ้ารอจน node รุ่นใหม่มาถึงแล้วค่อยแก้ คอขวดจะกลายเป็นปัญหาเชิงระบบทันที

## AI application ทำให้ transistor ซับซ้อนขึ้น

ASML ระบุว่าเมื่อ technology nodes ก้าวต่อไป จำนวน layer ที่ต้องใช้ High NA EUV จะเพิ่มขึ้น โดยมีแรงขับสำคัญจาก transistor architecture ที่ซับซ้อนขึ้นสำหรับ **AI applications**

นี่คือประโยคที่ทำให้ข่าวนี้ควรถูกอ่านในหมวด infrastructure ไม่ใช่แค่ semiconductor manufacturing

AI chip รุ่นใหม่ต้องการ:

- transistor density สูงขึ้น
- interconnect ที่รับ bandwidth มากขึ้น
- power efficiency ที่ดีขึ้นต่อ token หรือ training step
- package และ memory interface ที่ซับซ้อนกว่าเดิม
- yield ที่ดีพอให้ผลิตได้ในปริมาณ data center

เมื่อ chip ใหญ่ขึ้นและ layer ซับซ้อนขึ้น ข้อจำกัดเล็ก ๆ ใน lithography สามารถแปลเป็นต้นทุนระดับพันล้านดอลลาร์ของ AI infrastructure ได้

## 12-inch mask คือการแก้คอขวดก่อนมันระเบิด

เหตุผลที่ 12-inch photomask น่าสนใจคือมันสะท้อนว่า supply chain ของ AI ไม่ได้หยุดที่ GPU หรือ HBM

ก่อน GPU จะไปอยู่ใน rack-scale system ได้ มันต้องผ่าน chain ที่ยาวมาก:

- EDA และ design verification
- mask writing และ inspection
- EUV lithography
- wafer processing
- advanced packaging
- memory integration
- board, rack, cooling และ networking

ถ้า photomask format จำกัดพื้นที่ exposure หรือทำให้ productivity ต่ำลง ต้นทุนของ chip รุ่นถัดไปจะสูงขึ้น และการ ramp capacity จะช้าลง

ดังนั้น initiative ของ TSMC และ ASML จึงเป็นการลงทุนเชิงระบบเพื่อทำให้ High NA EUV ใช้งานได้คุ้มค่ากับ chip รุ่นหลังปี 2030

## สิ่งที่ทีม infrastructure ควรอ่านจากข่าวนี้

สำหรับ cloud provider, AI lab และ enterprise ที่กำลังวางแผน capacity ข่าวนี้มีความหมายทางอ้อมแต่สำคัญ

ความพร้อมของ AI compute รุ่นถัดไปไม่ได้ขึ้นกับ vendor roadmap เพียงอย่างเดียว แต่ขึ้นกับ bottleneck ใน fab:

- เครื่อง High NA EUV ติดตั้งได้ทันหรือไม่
- mask ecosystem ขยับเป็น 12-inch ได้เร็วแค่ไหน
- yield ของ advanced node รับ chip ขนาดใหญ่ได้หรือไม่
- packaging และ memory supply ไปพร้อมกันหรือเปล่า
- ต้นทุนต่อ accelerator ต่ำพอให้ inference economics คุ้มหรือไม่

ถ้าใครวางแผน AI infrastructure แบบมองแค่ราคา GPU list price จะพลาดภาพใหญ่ เพราะต้นทุนจริงเริ่มตั้งแต่โรงงานชิป

## สรุป

ประกาศ **TSMC และ ASML** เมื่อวันที่ **8 กันยายน 2026** เรื่อง **12-inch photomask สำหรับ High NA EUV** เป็นข่าว Hardware / Infrastructure ที่ลึกแต่สำคัญมาก

มันบอกว่า AI chip รุ่นหลังปี 2030 ต้องการการเตรียม supply chain ล่วงหน้าหลายปี ตั้งแต่ mask pilot line ปี **2031** ไปจนถึง production readiness ปี **2033**

สำหรับตลาด AI infrastructure ข่าวนี้คือ reminder ว่าคอขวดของ compute ไม่ได้อยู่แค่ data center, power หรือ HBM แต่อาจอยู่ที่แผ่น mask ที่ทำให้ pattern ของ transistor รุ่นถัดไปผลิตได้เร็วและคุ้มต้นทุนพอ

ภาพประกอบบทความนี้ดาวน์โหลดจากภาพข่าวทางการของ **ASML** ขนาด **1920x1080 พิกเซล** ผ่านข้อกำหนด cover image ของ repo

## แหล่งอ้างอิง

- [ASML - TSMC and ASML Announce Initiative to Pioneer Industry Transition to Large-Format Photomasks for High NA EUV](https://www.asml.com/en/news/press-releases/2026/tsmc-and-asml-announce-industry-transition-to-large-format-photomasks-for-high-na-euv)
