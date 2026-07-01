---
title: 'AWS เปิด EC2 C9g บน Graviton5: CPU กลับมาเป็นชั้นสำคัญของ agentic AI infrastructure'
seoTitle: 'AWS EC2 C9g C9gd Graviton5 Launch June 2026 - Warongkon Blog'
description: 'สรุปข่าว AWS เปิด Amazon EC2 C9g และ C9gd วันที่ 30 มิถุนายน 2026 บน Graviton5 สำหรับ compute-intensive workload, HPC, inference และ agentic AI'
pubDate: '2026-07-01'
tags: ["Hardware", "Infrastructure", "AWS", "Amazon EC2", "Graviton5", "C9g", "C9gd", "Cloud Infrastructure", "Agentic AI", "HPC"]
coverImage: './cover.jpg'
---

ข่าว **Hardware / Infrastructure** สำหรับรอบวันที่ **1 กรกฎาคม 2026** คือ **AWS** เปิดให้ใช้ **Amazon EC2 C9g และ C9gd instances** แบบ general availability เมื่อวันที่ **30 มิถุนายน 2026** โดยใช้ **AWS Graviton5** เป็นแกนประมวลผล

ถ้าดูผิวเผิน นี่อาจเหมือนการเพิ่ม instance family ตามรอบปกติของ cloud provider แต่บริบทปี 2026 ทำให้ข่าวนี้ใหญ่กว่าเดิม เพราะ AWS กำลังบอกว่า **CPU ยังเป็นโครงสร้างพื้นฐานสำคัญของ agentic AI** ไม่แพ้ GPU และ accelerator

AWS ระบุว่า C9g เป็น compute-optimized instance สำหรับงานอย่าง real-time analytics, batch processing, video encoding, scientific modeling, CPU-based ML inference และงาน agentic AI ที่มี reasoning loop, code execution และ orchestration จำนวนมาก

## C9g คือ Graviton5 ในสาย compute-optimized

ประกาศทางการของ AWS ระบุว่า C9g และ C9gd ใช้ **Graviton5** และทำ performance ต่อ vCPU สูงกว่า C8g รุ่นก่อนสูงสุด **25%**

รายละเอียดที่น่าสนใจ:

- ใช้ memory แบบ **DDR5 8800MT/s**
- มี L3 cache มากขึ้น **5 เท่า**
- packet-processing performance สูงกว่ารุ่น Graviton4-based สูงสุด **3 เท่า**
- ขนาด instance มีตั้งแต่ medium ถึง 48xlarge และ bare metal
- 48xlarge ให้ได้สูงสุด **192 vCPU**, memory **384 GiB**, network bandwidth **100 Gbps** และ EBS bandwidth **72 Gbps**
- C9gd เพิ่ม local NVMe SSD storage สำหรับ workload ที่ต้องการ scratch space หรือ low-latency local buffer

ตัวเลขเหล่านี้ไม่ได้แข่งกับ GPU โดยตรง แต่เติมช่องที่ AI workload จำนวนมากต้องใช้จริงระหว่าง GPU cluster, orchestration layer, data pipeline และ application runtime

## Agentic AI ไม่ได้ใช้แค่ GPU

ในช่วงปี 2023-2025 narrative ของ AI infrastructure มักถูกครอบด้วย GPU shortage, HBM, liquid cooling และ data center power แต่พอ AI ขยับจากการตอบคำถามไปสู่การทำงานแทนคน bottleneck ใหม่ก็เริ่มโผล่

Agentic workflow ต้องใช้ CPU ในหลายจุด:

- เปิดและควบคุม browser session จำนวนมาก
- รัน sandbox สำหรับ code execution
- ทำ orchestration ระหว่าง tool calls
- จัดการ queue, cache, retrieval และ policy checks
- ประมวลผล pre/post-processing รอบ model inference
- รัน workload ที่ไม่คุ้มจะส่งเข้า GPU

AWS จึงอธิบาย C9g ว่าเหมาะกับ agentic AI เพราะมี core count สูง memory เร็ว cache ใหญ่ และ network/storage bandwidth เพิ่มขึ้น งานประเภทนี้วัดกันที่ throughput และ latency ของหลายขั้นตอน ไม่ใช่ FLOPS ของ accelerator อย่างเดียว

## C9gd ตอบโจทย์ local data path

อีกจุดที่ควรจับตาคือ C9gd ซึ่งเพิ่ม local NVMe SSD storage

ในงาน HPC, inference cache, ad-serving, video pipeline หรือ distributed analytics บางแบบ การพึ่ง network storage อย่างเดียวอาจเพิ่ม latency และ cost มากเกินไป local NVMe จึงช่วยให้ workload มีพื้นที่ scratch ที่เร็วขึ้น

AWS ระบุว่า C9gd ให้ storage performance สูงกว่ารุ่นก่อนสูงสุด **30%** และรองรับ performance statistics ละเอียดระดับ I/O size และ latency histogram ผ่าน CloudWatch หรือ `nvme-cli`

สำหรับทีม infrastructure สิ่งนี้มีประโยชน์มาก เพราะงาน optimize ไม่ใช่แค่ดู CPU utilization แต่ต้องเห็นว่าข้อมูลติดที่ local I/O, network, EBS หรือ application runtime

## Nitro Isolation Engine เพิ่มมิติด้านความปลอดภัย

C9g และ C9gd ยังเป็น compute-optimized EC2 instances รุ่นแรกที่มี **AWS Nitro Isolation Engine**

AWS อธิบายว่า Nitro Isolation Engine เป็น component ของ Nitro Hypervisor ที่เขียนด้วย Rust เพื่อ enforce isolation ระหว่าง virtual machines โดยควบคุมการเข้าถึง memory, CPU register state และ I/O devices ผ่าน API ชุดเล็ก

นี่เป็นข่าวด้าน infrastructure security ที่ไม่ควรมองข้าม เพราะเมื่อ workload AI เริ่มรันข้อมูลลูกค้า โค้ดภายในองค์กร และ agent ที่มีสิทธิ์แตะระบบจริง isolation ของ cloud VM จะถูกตรวจหนักขึ้น

AI workload ที่มี agent เปิดไฟล์ รันคำสั่ง และเชื่อมต่อ internal tools ทำให้ boundary ระหว่าง application security, cloud isolation และ model safety ใกล้กันกว่าเดิม

## Availability บอกว่า AWS เริ่มจาก region หลักก่อน

ณ วันที่ประกาศ **30 มิถุนายน 2026** AWS ระบุว่า C9g และ C9gd พร้อมใช้งานใน:

- US East (Ohio)
- US East (N. Virginia)
- US West (Oregon)
- Europe (Frankfurt)

Region อื่นจะตามมาในภายหลัง

นี่เป็น cadence ปกติของ AWS แต่ก็สะท้อนว่าการ deploy custom silicon รุ่นใหม่ต้องพึ่ง supply chain, fleet planning และ region-level demand ที่ไม่ง่าย โดยเฉพาะเมื่อ cloud provider แข่งกันทั้ง CPU, GPU, accelerator, storage และ power envelope พร้อมกัน

## มุมมองของผม

ผมมองว่า C9g เป็นข่าว Hardware / Infrastructure ที่ควรสนใจ เพราะมันช่วยปรับสมดุลบทสนทนา AI infra จาก "GPU เท่านั้น" ไปสู่ภาพจริงที่ซับซ้อนกว่า

GPU ยังสำคัญมากสำหรับ training และ inference ขนาดใหญ่ แต่ agentic AI ทำให้ workload รอบ ๆ โมเดลโตขึ้นเร็ว ทั้ง sandbox, browser automation, code execution, workflow orchestration, observability และ security enforcement

ถ้า Graviton5 ให้ performance ต่อ watt และ price-performance ดีจริง AWS จะได้เปรียบใน workload ที่ scale เป็น CPU fleet ขนาดใหญ่ ไม่ใช่แค่ AI training cluster ระดับ megawatt

สรุปสั้น ๆ:
**วันที่ 30 มิถุนายน 2026 AWS เปิด EC2 C9g และ C9gd บน Graviton5 ข่าวนี้ชี้ว่า infrastructure สำหรับ agentic AI ไม่ได้วัดกันที่ accelerator อย่างเดียว แต่รวมถึง CPU, memory bandwidth, local storage, isolation และ cloud fleet economics ด้วย**

## หมายเหตุเรื่องภาพประกอบ

ภาพประกอบบทความนี้ดาวน์โหลดจาก Open Graph image ของหน้า About Amazon เรื่อง AWS Graviton5 เป็นภาพ official/source-provided ขนาด **1200x600 พิกเซล** ผ่านข้อกำหนด cover image ของ repo

## แหล่งอ้างอิง

- [AWS News Blog: Amazon EC2 C9g and C9gd instances powered by AWS Graviton5 processors are now available](https://aws.amazon.com/blogs/aws/amazon-ec2-c9g-and-c9gd-instances-powered-by-aws-graviton5-processors-are-now-available/)
- [About Amazon: AWS Graviton5 is now generally available](https://www.aboutamazon.com/news/aws/aws-graviton-5-cpu-amazon-ec2)
- [Data Center Knowledge: AWS Launches Graviton5-Powered EC2 Instances for AI and HPC](https://www.datacenterknowledge.com/data-center-chips/aws-makes-the-case-for-cpus-in-the-ai-stack)
- [AWS: Amazon EC2 C9g instances](https://aws.amazon.com/ec2/instance-types/c9g/)
