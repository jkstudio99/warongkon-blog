---
title: 'NVIDIA Mission Control 2.5 ขยายระบบกู้คืนงาน AI อัตโนมัติมาสู่ Kubernetes'
seoTitle: 'NVIDIA Mission Control 2.5 กู้คืนงาน AI บน Kubernetes'
description: 'NVIDIA เปิดรายละเอียด Mission Control 2.5 เมื่อ 26 ตุลาคม 2026 รองรับการกู้คืนงาน Kubernetes ผ่าน Run:ai พร้อมเงื่อนไขที่ต้องอ่านก่อนใช้กับ Vera Rubin NVL72'
pubDate: '2026-10-27'
tags: ['Hardware Infrastructure', 'NVIDIA', 'Mission Control', 'Kubernetes', 'Run:ai', 'AI Infrastructure']
coverImage: './cover.webp'
---

NVIDIA ประกาศเมื่อวันที่ **26 ตุลาคม 2026** ว่า Mission Control 2.5 พร้อมใช้งาน และขยาย Autonomous Recovery Engine มารองรับงานบน **Kubernetes ที่จัดการผ่าน NVIDIA Run:ai** จากเดิมที่ความสามารถนี้รองรับงาน HPC ผ่าน Slurm เป็นหลัก นี่คือประเด็น Hardware / Infrastructure รอบวันที่ 27 ตุลาคมที่เกี่ยวข้องกับทีมดูแลคลัสเตอร์ GPU โดยตรง

[บทความทางการของ NVIDIA](https://developer.nvidia.com/blog/how-nvidia-mission-control-2-5-brings-autonomous-recovery-to-kubernetes/) อธิบายการแยกหน้าที่ระหว่างตัวจัดตารางงาน บริการกู้คืนงาน และบริการกู้คืนฮาร์ดแวร์ เมื่อพบปัญหา GPU ระบบจึงสามารถย้ายหรือเริ่มงานใหม่บนทรัพยากรที่พร้อมใช้งาน ขณะที่อีกส่วนแยกโหนดที่มีปัญหาออกไปตรวจสอบ

## กู้คืนงานกับซ่อมเครื่องเป็นคนละกระบวนการ

แนวทางนี้มีผลต่อเวลาที่งานฝึกโมเดลต้องหยุดรอ เพราะการวิเคราะห์สาเหตุของฮาร์ดแวร์ไม่จำเป็นต้องเสร็จก่อนเริ่มกู้คืนงาน อย่างไรก็ตาม การกู้คืนยังขึ้นอยู่กับบริบทของงานและนโยบายของ scheduler ไม่ใช่คำรับรองว่างานทุกชนิดจะทำต่อได้โดยไม่เสียความคืบหน้า

NVIDIA ยังแยกกรณีซอฟต์แวร์ล้มเหลวชั่วคราวออกจากความผิดปกติของฮาร์ดแวร์ งานที่เข้าเงื่อนไขอาจลองใหม่ได้โดยไม่ต้องนำเครื่องที่ยังปกติออกจากคลัสเตอร์ ส่วนโหนดที่มีสัญญาณเสื่อมสภาพอาจถูกกันออกจากการรับงานใหม่ก่อนเกิดความเสียหายกับงานถัดไป

สำหรับผู้ดูแลระบบ สิ่งที่ควรทดสอบจึงเป็นพฤติกรรมเมื่อเกิดเหตุจริง เช่น scheduler เลือกทรัพยากรทดแทนอย่างไร งานใช้ checkpoint ล่าสุดได้หรือไม่ และระบบจะหยุดลองซ้ำเมื่อใด บทความนี้ไม่ได้ให้ตัวเลขรับประกันเวลาฟื้นตัวสำหรับคลัสเตอร์ของลูกค้าทุกราย

## Vera Rubin NVL72 ยังมีข้อจำกัดในรุ่นนี้

[Release notes ของ Mission Control 2.5.0](https://docs.nvidia.com/mission-control/docs/systems-quick-start-guide/latest/nmc-release-notes.html) ระบุชัดว่า การรองรับ Vera Rubin NVL72 แบบ early access จำกัดอยู่ที่การนำระบบขึ้นใช้งานเบื้องต้นผ่าน NVIDIA Base Command Manager เท่านั้น **Run:ai และ Autonomous Resiliency Engine ยังไม่รองรับ Vera Rubin NVL72 ใน release นี้** จึงไม่ควรนำการประกาศรองรับ Kubernetes ไปตีความว่าครอบคลุมฮาร์ดแวร์ใหม่ทุกแบบแล้ว

เอกสารเดียวกันระบุว่า NVIDIA Minerva และ NVIDIA Dynamic Power Software เป็นซอฟต์แวร์ก่อนออกจริงในสถานะ beta ซึ่งเข้าถึงผ่านการทำงานร่วมกับ NVIDIA ตามขอบเขตที่กำหนด ไม่ได้รวมมาเป็นความสามารถพร้อมใช้ทั่วไปทั้งหมดในชุด release

ข่าวรอบนี้จึงเป็นการเพิ่มทางเลือกด้านการปฏิบัติการให้ทีมที่ใช้ Run:ai อยู่แล้ว ส่วนการวางแผนอัปเกรดควรยึดตารางความเข้ากันได้และ release notes ของเครื่องที่ใช้งานจริงเป็นหลัก

*ภาพประกอบจากบทความ Mission Control 2.5 ของ NVIDIA ขนาดต้นฉบับ 1480×830 พิกเซล*

## แหล่งอ้างอิง

- [NVIDIA วันที่ 26 ตุลาคม 2026, How NVIDIA Mission Control 2.5 Brings Autonomous Recovery to Kubernetes](https://developer.nvidia.com/blog/how-nvidia-mission-control-2-5-brings-autonomous-recovery-to-kubernetes/)
- [NVIDIA, Mission Control 2.5.0 release notes](https://docs.nvidia.com/mission-control/docs/systems-quick-start-guide/latest/nmc-release-notes.html)
- [ภาพประกอบ Mission Control จาก NVIDIA](https://developer-blogs.nvidia.com/wp-content/uploads/2026/09/7_resized.webp)
