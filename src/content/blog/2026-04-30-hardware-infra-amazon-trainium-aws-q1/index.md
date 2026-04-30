---
title: 'Amazon รายงานผล 29 เมษายน 2026: AWS โต 28% และชี้ชัดว่ารอบนี้เกม infrastructure วัดกันที่ชิปกับไฟเลี้ยง AI'
seoTitle: 'Amazon AWS Q1 2026 Trainium Infrastructure - Warongkon Blog'
description: 'สรุปผลประกอบการ Amazon ไตรมาส 1 ปี 2026 และความหมายของ AWS โต 28%, capex AI ที่พุ่งขึ้น และดีล Trainium/Graviton ต่อการแข่งขันโครงสร้างพื้นฐาน AI'
pubDate: '2026-04-30'
tags: ["Hardware", "Infrastructure", "AWS", "AI"]
coverImage: './cover.jpg'
---

ข่าวฮาร์ดแวร์และโครงสร้างพื้นฐานที่สำคัญที่สุดรอบนี้ไม่ได้มาในรูปงานเปิดตัวเซิร์ฟเวอร์ใหม่ แต่มาในรูป **ผลประกอบการ Amazon วันที่ 29 เมษายน 2026** ซึ่งทำให้เห็นชัดว่าการแข่ง AI infrastructure ตอนนี้ไม่ได้วัดกันแค่จำนวน GPU อีกต่อไป

Amazon รายงานว่าในไตรมาส 1 ปี 2026 **AWS มีรายได้ 37.6 พันล้านดอลลาร์ เติบโต 28% เมื่อเทียบกับปีก่อน** และ AWS ทำ operating income ได้ **14.2 พันล้านดอลลาร์** ขณะเดียวกันบริษัทระบุว่ากระแสเงินสดอิสระลดลงอย่างมีนัยสำคัญ เพราะมีการเพิ่มการซื้อ property and equipment ตลอด 12 เดือนถึง **59.3 พันล้านดอลลาร์** ซึ่ง Amazon บอกตรง ๆ ว่า **สะท้อนการลงทุนด้าน AI**

นั่นคือสารที่สำคัญมากสำหรับหมวด Hardware / Infrastructure:
**สงคราม AI ในปี 2026 ไม่ได้แข่งกันแค่โมเดล แต่แข่งกันที่ใครมีโครงสร้างพื้นฐานพร้อมพอจะรับ demand จริง**

## ตัวเลขที่ควรอ่านให้ลึกกว่าหัวข่าว

ถ้ามองผิวเผิน ข่าวนี้เหมือน earnings ปกติของบริษัทเทคยักษ์ใหญ่ แต่รายละเอียดข้างในบอกภาพที่ใหญ่กว่านั้น

Amazon กำลังบอกตลาดพร้อมกัน 3 เรื่อง:

- cloud AI demand ยังโตแรง
- การลงทุนใน infra หนักขึ้นอย่างต่อเนื่อง
- custom silicon และพลังงานกลายเป็นตัวแยกผู้ชนะกับผู้ตาม

ในเอกสารผลประกอบการ Amazon ยังไฮไลต์ว่า Bedrock ประมวลผลโทเค็นในไตรมาสเดียวมากกว่าทุกปีก่อนหน้ารวมกัน และรายจ่ายลูกค้าบน Bedrock โต **170% quarter-over-quarter** นั่นทำให้เรื่องชิปไม่ใช่ประเด็นของห้องแล็บอีกแล้ว แต่มันคือปัญหา production scale ที่เกิดขึ้นจริง

## Trainium, Graviton และ supply side ของ AI

อีกจุดที่ควรจับตาคือ Amazon พยายามเล่าว่า infra ของตัวเองไม่ได้พึ่ง GPU ทางเดียว

ในสรุปข่าวสัปดาห์ของ Amazon เมื่อ **24 เมษายน 2026** บริษัทเปิดเผยว่า Anthropic จะใช้เทคโนโลยีของ AWS มูลค่ามากกว่า **100 พันล้านดอลลาร์** ตลอด 10 ปี รวมถึงการใช้ชิปรุ่นปัจจุบันและอนาคตของ Amazon สูงสุด **5 กิกะวัตต์** เพื่อฝึกและรันโมเดล AI ขั้นสูง

Amazon ยังระบุด้วยว่า Meta ลงนามเพื่อใช้ **tens of millions of AWS Graviton cores** สำหรับ workload แบบ agentic AI ที่กิน CPU หนัก เช่น real-time reasoning, code generation และ multi-step workflows

ถ้าแปลเป็นภาษาคนทำระบบ นี่หมายความว่า supply chain ของ AI ในปี 2026 มีชั้นที่ละเอียดขึ้นมาก:

- training ยังต้องใช้ accelerator จำนวนมาก
- inference ระดับ production ต้องคิดเรื่อง throughput และ cost ต่อคำตอบ
- agent workflows เพิ่มภาระฝั่ง CPU, memory และ orchestration
- data center ต้องมีทั้งชิป, เน็ตเวิร์ก และไฟฟ้าพร้อมกัน

## ทำไมข่าวนี้สำคัญกว่าแค่ “AWS โต”

ผมมองว่าข่าววันที่ **29 เมษายน 2026** สำคัญ เพราะมันยืนยันว่าค่าใช้จ่ายฝั่ง capex ของ hyperscaler ไม่ได้ชะลอ แม้ตลาดจะเริ่มถามมากขึ้นเรื่อง ROI ของ AI

ในทางกลับกัน ตัวเลขของ Amazon บอกว่า demand ยังแรงพอให้บริษัทเดินหน้าลงทุนขนาดใหญ่ต่อไป และยอมรับตรง ๆ ว่าการไหลของเงินไปยัง property, equipment, chips และ data center คือราคาที่ต้องจ่ายเพื่อถือความได้เปรียบในคลื่น AI รอบนี้

สำหรับตลาดฮาร์ดแวร์ นี่ทำให้การแข่งขันเปลี่ยนจากคำถามว่า “ใครมีโมเดลดี” ไปเป็น:

- ใครล็อก supply ได้ก่อน
- ใครมี custom chip ที่ลดต้นทุนได้จริง
- ใครมีไฟเลี้ยง data center มากพอ
- ใครแปลง capex ขนาดใหญ่ให้เป็นบริการที่ลูกค้ายอมจ่ายได้

## มุมมองของผม

ผลประกอบการรอบนี้ของ Amazon เป็นหลักฐานชัดว่าการคุยเรื่อง AI infrastructure ในปี 2026 ต้องมองครบทั้ง stack

ชนะฝั่งโมเดลอย่างเดียวไม่พอ ถ้า:

- ชิปส่งไม่ทัน
- ไฟไม่พอ
- CPU สำหรับ agent workloads ไม่พอ
- หรือ deployment economics แย่เกินไป

ดังนั้นข่าวนี้จึงไม่ใช่แค่ earnings note ของ Amazon แต่เป็นสัญญาณว่าโครงสร้างพื้นฐาน AI กำลังเข้าสู่ยุคที่ **custom silicon, energy access และ capital discipline** เป็นตัวกำหนดความได้เปรียบพอ ๆ กับ model quality

## แหล่งอ้างอิง

- [Amazon.com Announces First Quarter Results - April 29, 2026](https://ir.aboutamazon.com/news-release/news-release-details/2026/Amazon-com-Announces-First-Quarter-Results/)
- [Amazon News Recap: April 24, 2026](https://www.aboutamazon.com/news/company-news/amazon-news-weekly-audio-recap-april-24-2026)
