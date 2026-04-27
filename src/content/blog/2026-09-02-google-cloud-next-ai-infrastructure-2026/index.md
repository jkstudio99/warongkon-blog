---
title: 'Google Cloud Next 2026: TPU 8t, TPU 8i และ Virgo Network บอกอะไรเรื่อง AI Infrastructure รอบใหม่'
seoTitle: 'Google Cloud Next 2026 AI Infrastructure Update - Warongkon Blog'
description: 'สรุปข่าวฮาร์ดแวร์และโครงสร้างพื้นฐานจาก Google Cloud Next 2026 ตั้งแต่ TPU 8t, TPU 8i ไปจนถึง Virgo Network และความหมายต่อการแข่งขัน AI infrastructure'
pubDate: '2026-09-02'
tags: ["Infrastructure", "Cloud", "AI", "Hardware"]
coverImage: './cover.jpg'
---

ถ้าข่าว AI ฝั่งโมเดลในเดือนเมษายน 2026 ทำให้คนส่วนใหญ่หันไปสนใจ capability ข่าวฝั่ง **hardware / infrastructure** ในสัปดาห์เดียวกันกลับเตือนอีกอย่างว่า game จริงยังอยู่ที่ “ใครสร้างระบบรองรับ workload พวกนี้ได้คุ้มกว่าและใหญ่กว่า”

ในงาน **Google Cloud Next 2026** วันที่ **22 เมษายน 2026** Google ประกาศความเคลื่อนไหวสำคัญด้านโครงสร้างพื้นฐาน AI หลายชิ้นพร้อมกัน โดยเฉพาะ **TPU รุ่นที่ 8** และเครือข่าย data center ใหม่ชื่อ **Virgo Network** ที่ประกาศละเอียดต่อในวันที่ **23 เมษายน 2026**

สำหรับคนทำระบบ ข่าวนี้มีน้ำหนักมากกว่าการเปิดตัวฮาร์ดแวร์ใหม่ทั่วไป เพราะมันสะท้อนทิศทางว่า infra สำหรับยุค agentic AI กำลังแตกแขนงชัดขึ้นระหว่างงาน **training** กับ **inference**

## 1. Google ประกาศ “สองชิป” แทนการใช้คำตอบเดียวกับทุก workload

จากโพสต์ของ Sundar Pichai เมื่อวันที่ **22 เมษายน 2026** Google อธิบายว่า TPU รุ่นที่ 8 มาในแนวทาง **dual-chip approach**

- **TPU 8t** สำหรับ training
- **TPU 8i** สำหรับ inference

นี่เป็นสัญญาณที่น่าสนใจมาก เพราะมันสะท้อนว่าผู้ให้บริการคลาวด์ไม่ได้มองว่า training กับ inference เป็นปัญหาชนิดเดียวกันอีกต่อไป

TPU 8t ถูกอธิบายว่าสเกลได้ถึง **9,600 TPUs** และ **2 petabytes ของ shared high-bandwidth memory ใน superpod เดียว** พร้อม processing power มากกว่า Ironwood ถึง **3 เท่า** และได้ถึง **2x performance/watt**

ส่วน TPU 8i ถูกออกแบบสำหรับ inference โดยเชื่อมได้ **1,152 TPUs ต่อ pod** และมี **3x on-chip SRAM** เพื่อรองรับงานที่ต้องการ throughput สูงพร้อม latency ต่ำสำหรับการรัน agent จำนวนมากพร้อมกัน

## 2. ข้อความจริงของข่าวนี้คือ inference กำลังมีน้ำหนักเท่ากับ training

ช่วงก่อนหน้านี้โลก AI infrastructure มักถูกเล่าในมุม training cluster ใหญ่ขึ้นเรื่อย ๆ

แต่รอบนี้ Google สื่อชัดว่าปัญหาของตลาดปี 2026 ไม่ใช่แค่การฝึกโมเดลใหญ่ขึ้น แต่คือการ **เสิร์ฟ agent และ inference จำนวนมหาศาลในต้นทุนที่รับไหว**

นี่สำคัญมาก เพราะโลกหลัง frontier model เริ่ม mature ไม่ได้วัดกันแค่ใครเทรน model ใหญ่กว่า แต่ใครทำให้:

- latency เสถียร
- cost ต่อ request ดี
- scale concurrent agents ได้
- network ไม่กลายเป็น bottleneck

ถ้ามองจากมุมนี้ TPU 8i คือข้อความเชิงกลยุทธ์ว่า Google กำลังจริงจังกับตลาด inference ชั้น production ไม่ใช่เพียงโชว์ความเก่งของ hardware training

## 3. Virgo Network คือคำตอบว่าคอขวดเริ่มย้ายไปที่ network แล้ว

วันถัดมา **23 เมษายน 2026** Google Cloud ลงรายละเอียดของ **Virgo Network** ซึ่งถูกอธิบายว่าเป็น **megascale AI data center fabric** ใหม่

โพสต์นี้น่าสนใจมาก เพราะ Google ไม่ได้ขาย Virgo เป็น “ของใหม่อีกชิ้น” แต่เริ่มจากปัญหาที่ data center ยุค AI กำลังชนจริง:

- ขนาด workload ใหญ่เกิน data center เดียว
- bandwidth ต่อ accelerator พุ่งขึ้นแรง
- burst traffic ระดับ sub-millisecond กดดัน network มาก
- latency ที่แกว่งเพียงเล็กน้อยก็ทำให้ cluster ทั้งก้อนช้าลง

Google จึงบอกว่า network แบบ general-purpose เดิมเริ่มไม่ตอบโจทย์ และเลือกออกแบบ Virgo ด้วยแนวคิด **campus-as-a-computer**

จุดตัวเลขที่สะดุดตาคือ Google ระบุว่า Virgo สามารถเชื่อม **134,000 ชิป TPU 8t** ด้วย **47 petabits/sec** ของ non-blocking bi-sectional bandwidth และลด unloaded fabric latency ลงได้ **40%** เทียบกับรุ่นก่อน

## 4. นี่ไม่ใช่แค่ข่าวชิป แต่คือข่าว “system design ระดับโรงงาน AI”

สิ่งที่ผมมองว่าน่าสนใจที่สุดไม่ใช่ตัวเลขที่สูงขึ้นอย่างเดียว แต่คือการที่ Google วางภาพรวมแบบ system-level ชัดมาก:

- ชิปแยกตาม workload
- network fabric แยกตามลักษณะ traffic
- infrastructure ถูกออกแบบร่วมกับ accelerator โดยตรง

Virgo ยังสะท้อนแนวคิดว่าถ้าจะรัน AI ระดับใหญ่จริง เราต้องเลิกคิดเรื่องเครื่องทีละเครื่อง แล้วคิดเรื่อง **compute domain ทั้งก้อน**

นี่เป็นภาษาของ “AI factory” มากกว่าภาษาของ data center แบบคลาสสิก

สำหรับองค์กรทั่วไป สิ่งนี้อาจยังดูไกลตัว แต่ผลลัพธ์สุดท้ายจะย้อนกลับมาที่บริการ cloud ที่ทีมเราใช้ทุกวัน ไม่ว่าจะเป็น:

- ราคา inference
- latency ของ model service
- ความพร้อมของ region และ capacity
- ความสามารถในการ scale workload ขนาดใหญ่

## 5. ทำไมข่าวนี้ถึงสำคัญต่อการแข่งขันระหว่าง hyperscalers

จากสิ่งที่ Google ประกาศ ผมคิดว่ามี 3 สัญญาณเชิงแข่งขันที่ชัดมาก

### 1. Hardware differentiation กลับมาเป็น core moat

ยุคที่ทุกคนเช่า GPU คล้ายกันอาจยังอยู่ แต่ hyperscaler ที่มี accelerator และ network stack ของตัวเองจะมีพื้นที่ optimize มากกว่า

### 2. Network กลายเป็น competitive layer ที่มองข้ามไม่ได้

ในงาน AI ขนาดใหญ่ bottleneck ไม่ได้อยู่ที่ FLOPS อย่างเดียวอีกแล้ว แต่อยู่ที่การคุม goodput, latency, congestion และ fault isolation ด้วย

### 3. Agent era ต้องการ infra คนละแบบกับ chatbot era

ถ้าโลกกำลังไปสู่การรัน agent หลายล้านตัวพร้อมกัน คำถามเรื่อง inference efficiency, low latency และ operational resilience จะสำคัญขึ้นเรื่อย ๆ

## 6. ทีมเทคควรเอาอะไรกลับไปคิด

แม้หลายทีมจะไม่ได้ซื้อ TPU โดยตรง แต่ข่าวนี้ควรทำให้เราถามตัวเองอย่างน้อย 4 ข้อ:

1. workload ของเราหนักไปทาง training, batch inference หรือ real-time inference
2. latency ที่ product ต้องการจริงอยู่ระดับไหน
3. cost sensitivity ของระบบเราอยู่ตรงไหน
4. ถ้า agent usage โต 10 เท่า infra ปัจจุบันยังรับได้ไหม

หลายครั้งทีม product สนใจแค่ model quality แต่ใน production จริง ความต่างด้าน infra อาจเป็นตัวกำหนดประสบการณ์ผู้ใช้และ margin ของธุรกิจมากกว่า

## สรุป

ข่าวจาก **Google Cloud Next 2026** ในวันที่ **22-23 เมษายน 2026** บอกเราชัดว่า AI infrastructure รอบใหม่กำลังถูกออกแบบเป็นระบบเฉพาะทางมากขึ้น ทั้งในระดับ **chip**, **network**, และ **data center fabric**

TPU 8t กับ TPU 8i สะท้อนการแยก training ออกจาก inference อย่างจริงจัง ส่วน Virgo Network สะท้อนว่าปัญหาใหม่ของ AI scale ไม่ได้อยู่ที่ compute อย่างเดียว แต่ย้ายไปอยู่ที่ network architecture และ reliability แล้ว

สำหรับคนทำเทค ข่าวนี้เป็นอีกครั้งที่เตือนว่า AI ไม่ใช่แค่เรื่อง model choice แต่คือเรื่อง **physical infrastructure, topology, throughput และต้นทุนการให้บริการ** ด้วย

ใครเข้าใจชั้นล่างของ stack นี้ได้ดีกว่า มักมีโอกาสชนะในชั้นบนของ product มากกว่าที่ตลาดมักเห็นในระยะแรก

## แหล่งอ้างอิง

- [Sundar Pichai shares news from Google Cloud Next 2026](https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/cloud-next-2026-sundar-pichai/)
- [Google Cloud Next 2026: News and updates](https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/next-2026/)
- [Our eighth generation TPUs: two chips for the agentic era](https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/eighth-generation-tpu-agentic-era/)
- [Introducing Virgo Network, Google’s scale-out AI data center fabric](https://cloud.google.com/blog/products/networking/introducing-virgo-megascale-data-center-fabric)
