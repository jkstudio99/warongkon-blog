---
title: '3M เปิดตัว EBO MSA วันที่ 12 พฤษภาคม 2026: AI data center กำลังชนข้อจำกัดชั้นสายสัญญาณ ไม่ใช่แค่ GPU และพลังงาน'
seoTitle: '3M EBO MSA AI Data Center May 2026 - Warongkon Blog'
description: 'สรุป 3M และกลุ่มผู้เล่นเทคโนโลยีที่เปิดตัว EBO MSA วันที่ 12 พฤษภาคม 2026 เพื่อสร้างมาตรฐาน expanded beam optical connectivity สำหรับ AI data centers'
pubDate: '2026-05-13'
tags: ["Hardware", "Infrastructure", "Data Centers", "Optical Networking"]
coverImage: './cover.svg'
---

ข่าว **Hardware / Infrastructure** สำหรับรอบวันที่ **13 พฤษภาคม 2026** คือการที่ **3M** ประกาศเมื่อวันที่ **12 พฤษภาคม 2026** ว่าได้เข้าร่วมกลุ่มบริษัทเทคโนโลยีเพื่อจัดตั้ง **EBO MSA** หรือ multi-source agreement สำหรับมาตรฐาน **expanded beam optical connectivity** ใน AI data centers

ข่าวนี้ดูเหมือนเรื่อง connector เฉพาะทาง แต่จริง ๆ แล้วสะท้อนปัญหาใหญ่ของ AI infrastructure ปี 2026: เมื่อ cluster โตขึ้น bottleneck ไม่ได้มีแค่ GPU, memory, power หรือ cooling แต่รวมถึง physical layer ที่เชื่อมเครื่องจำนวนมหาศาลเข้าด้วยกัน

ถ้า data center ต่อสายยาก บำรุงรักษายาก หรือระบบ optical connector ไม่ interoperable พอ การเพิ่ม compute ก็อาจช้าลงตั้งแต่ชั้นสายสัญญาณ

## เกิดอะไรขึ้นในวันที่ 12 พฤษภาคม 2026

จากประกาศของ 3M วันที่ **12 พฤษภาคม 2026** บริษัทระบุว่า EBO MSA จะพัฒนา open, interoperable specifications สำหรับ expanded beam optical connector solutions ที่ใช้ใน AI infrastructure

สมาชิกเริ่มต้นของ MSA มีผู้เล่นหลายชั้นของ ecosystem เช่น

- 3M
- AMD
- Arista Networks
- Cisco
- Meta
- Oracle
- Molex
- Senko
- Source Photonics
- Sumitomo
- TE Connectivity
- Xscape Photonics
- และบริษัท optical / networking อื่น ๆ

เป้าหมายคือสร้าง specification ร่วมกันสำหรับ EBO connector configurations หลายแบบ เพื่อช่วยให้ผู้ผลิตและผู้ใช้งาน hyperscale cloud หรือ enterprise AI operator deploy high-performance optical interconnects ได้เร็วขึ้นและมี supplier ecosystem กว้างขึ้น

3M ระบุว่า technical working group เริ่มพัฒนา specification ชุดแรกแล้ว และ MSA เปิดรับสมาชิกเพิ่มเติมจาก data center และ networking ecosystem

## ทำไมข่าวนี้สำคัญต่อ Hardware / Infrastructure

เวลาพูดถึง AI data center เรามักเห็น headline เรื่อง GPU จำนวนมาก, megawatt, power purchase agreement หรือ liquid cooling

แต่ AI cluster ขนาดใหญ่ต้องพึ่งพา network fabric ที่หนาแน่นมาก เพราะ training และ inference บางรูปแบบต้องย้ายข้อมูลระหว่าง accelerator, rack และ storage ตลอดเวลา

เมื่อ bandwidth density เพิ่มขึ้น ความซับซ้อนของ Layer 1 ก็เพิ่มตาม

ปัญหาที่ตามมาคือ

- connector ต้อง reliable ใน environment ที่หนาแน่น
- maintenance ต้องทำได้เร็ว
- hygiene และ link triage ต้องไม่กินเวลาทีม operation มากเกินไป
- supplier ต้อง interoperable ไม่ใช่ผูกกับ vendor เดียว
- architecture ต้องรองรับ rack-scale optical ในอนาคต

EBO จึงน่าสนใจเพราะมันพยายามตอบโจทย์ reliability และ ease of maintenance ที่ physical-contact connector แบบเดิมอาจเริ่มรับภาระยากขึ้นใน AI cluster ขนาดใหญ่

## จุดที่น่าจับตาคือมาตรฐานเปิด

คำสำคัญในข่าวนี้คือ **multi-source agreement**

ในตลาด infrastructure ถ้าเทคโนโลยีใหม่ไม่มีมาตรฐานร่วม ลูกค้าจะเสี่ยง vendor lock-in, supply chain แคบ และการ integration ที่ยืดเยื้อ

การที่ผู้เล่นอย่าง 3M, AMD, Arista, Cisco, Meta และ Oracle อยู่ในวงเดียวกัน จึงมีความหมายมากกว่าการเปิดตัว connector หนึ่งตัว

มันบอกว่า AI infrastructure กำลังต้องการมาตรฐาน physical layer ที่ scale ได้ข้าม supplier และข้าม operator

สำหรับ hyperscaler เรื่องนี้สำคัญเพราะ cluster build-out ไม่ได้วัดแค่ซื้อ hardware ได้หรือไม่ แต่วัดว่า deploy, service, replace และ debug ได้เร็วแค่ไหนในสเกลจริง

## มุมมองของผม

ผมมองว่าข่าว EBO MSA วันที่ **12 พฤษภาคม 2026** เป็นภาพที่ดีของ phase ถัดไปใน AI infrastructure

รอบแรกของตลาดคือการหา GPU ให้พอ

รอบสองคือการหาไฟและ cooling ให้พอ

รอบถัดไปคือการทำให้ network fabric และ physical interconnect รองรับความหนาแน่นของ AI workload โดยไม่กลายเป็นภาระ operation

ถ้าจะสรุปให้สั้นที่สุด:
**ข่าวนี้ไม่ได้บอกแค่ว่า 3M เข้าร่วมมาตรฐาน connector แต่บอกว่า Hardware / Infrastructure สำหรับ AI กำลังลงลึกถึง physical layer ที่จะตัดสินว่า data center สเกลใหญ่ deploy และดูแลได้เร็วแค่ไหน**

## แหล่งอ้างอิง

- [3M News Center: New coalition launches to advance and scale optical connections for AI data centers](https://news.3m.com/2026-05-12-New-coalition-launches-to-advance-and-scale-optical-connections-for-AI-data-centers)
