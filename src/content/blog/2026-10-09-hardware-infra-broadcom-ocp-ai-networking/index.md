---
title: 'Broadcom เตรียมโชว์ AI networking ที่ OCP: Ethernet, optics และ rack standard กลายเป็นสนามหลัก'
seoTitle: 'Broadcom OCP AI Networking October 2026'
description: 'สรุปข่าว Hardware / Infrastructure วันที่ 9 ตุลาคม 2026 หลัง Broadcom ประกาศพอร์ต AI networking สำหรับ OCP Global Summit 2026'
pubDate: '2026-10-09'
tags:
  [
    'Hardware Infrastructure',
    'Broadcom',
    'OCP Global Summit',
    'AI Networking',
    'Ethernet',
    'Tomahawk 6',
    'Jericho 4',
    'Thor Ultra',
    'Co-Packaged Optics',
    'AI Data Centers'
  ]
coverImage: './cover.svg'
---

ข่าว **Hardware / Infrastructure** สำหรับรอบวันที่ **9 ตุลาคม 2026** คือประกาศของ **Broadcom** วันที่ **8 ตุลาคม 2026** ว่าบริษัทจะนำ portfolio ด้าน **AI networking** ไปแสดงในงาน **2026 Open Compute Project Global Summit** ที่ San Jose ระหว่างวันที่ **12-15 ตุลาคม 2026**

นี่เป็นข่าวสำคัญเพราะการแข่งขัน AI infrastructure กำลังขยับจากคำถามว่า "มี GPU กี่ตัว" ไปสู่คำถามว่า "เชื่อม GPU, NIC, optical link, rack และ data center fabric ให้ scale ได้จริงอย่างไร"

## Broadcom ไม่ได้ขายแค่ชิป แต่ขาย fabric ของ AI cluster

ประกาศของ Broadcom ระบุว่าจะเน้นนวัตกรรมสำหรับ **scale-up, scale-out และ scale-across AI networking** เพื่อรองรับ Open Rack Version 3 หรือ **ORV3** ใน ecosystem ของ OCP

ชุดที่บริษัทหยิบขึ้นมาโชว์ครอบคลุมหลายชั้นของ network stack ได้แก่ **Tomahawk 6**, **Tomahawk Ultra**, **Jericho 4** Ethernet switches, **Thor Ultra 800G** และ **Thor 2 400G** AI Ethernet NICs รวมถึง **TH6-Davisson Co-Packaged Optics (CPO)** รุ่นที่สาม

เมื่ออ่านรวมกัน ข่าวนี้สะท้อนว่าคอขวดของ frontier AI ไม่ได้อยู่ที่ accelerator อย่างเดียวอีกแล้ว แต่กระจายอยู่ใน bandwidth, latency, power efficiency, optical reach, topology และความสามารถในการทำให้ rack จำนวนมากทำงานเหมือนระบบเดียว

## Ethernet กำลังพยายามยืนเป็นมาตรฐานเปิดของ AI factory

Broadcom ใช้ภาษาชัดว่า Ethernet คือ foundation สำหรับการ scale AI infrastructure ให้ sustainable มากขึ้น จุดนี้มีนัยสำคัญเพราะตลาด AI cluster ยังมี tension ระหว่าง proprietary interconnect, hyperscaler custom fabric และความต้องการมาตรฐานเปิดที่ vendor หลายรายร่วมกันทำงานได้

OCP Global Summit เป็นเวทีที่เหมาะกับ narrative นี้ เพราะ OCP ไม่ใช่งานเปิดตัว product ฝั่ง consumer แต่เป็นพื้นที่ของ rack design, power, cooling, networking, optics, firmware และ standard ที่ hyperscaler กับ supplier ใช้คุยกันเรื่องการ deploy จริง

สำหรับลูกค้า cloud และ AI lab การที่ Ethernet-based portfolio เดินเข้าหา OCP มากขึ้นหมายความว่าการซื้อ infrastructure อาจเปิดกว้างกว่าเดิม ถ้า ecosystem ทำ interoperability ได้ดีพอ แต่ก็ยังต้องพิสูจน์ใน production ว่า performance, reliability และ observability ไม่แพ้ระบบปิด

## Co-packaged optics คือคำตอบต่อ power wall

ส่วนที่ควรจับตาเป็นพิเศษคือ **Co-Packaged Optics** เพราะ AI cluster ขนาดใหญ่ไม่ได้ติดแค่จำนวน link แต่ติดเรื่องพลังงานและระยะทางของการส่งข้อมูลด้วย

แนวคิดของ CPO คือขยับ optical interface เข้าใกล้ switching silicon มากขึ้น เพื่อลดพลังงานและเพิ่ม bandwidth density เมื่อเทียบกับการพึ่งพา pluggable optics แบบเดิมทั้งหมด ในระดับ rack และ cluster ขนาดใหญ่ ความต่างต่อ watt ต่อ port สามารถกลายเป็นต้นทุนระดับ data center ได้

ข่าว Broadcom รอบนี้จึงเป็นสัญญาณว่า AI data center ปี 2026 กำลังเข้าเฟสที่ network silicon และ optics เป็นตัวกำหนด roadmap พอ ๆ กับ GPU generation

## สรุป

สำหรับวันที่ **9 ตุลาคม 2026** ข่าว Broadcom ที่เตรียมโชว์ AI networking ในงาน OCP เป็นข่าว **Hardware / Infrastructure** ที่ชัด เพราะมันบอกว่า infrastructure race กำลังลงลึกถึง fabric ภายใน rack และระหว่าง rack

ถ้า OCP 2026 ทำให้ ORV3, Ethernet NIC, switching silicon และ integrated optics เดินไปในทิศทางเดียวกันได้ ตลาด AI infrastructure จะมีแรงกดดันให้เปิดมาตรฐานมากขึ้น และผู้ซื้อจะเริ่มถาม vendor ทุกเจ้าด้วยคำถามเดียวกัน: ระบบของคุณ scale ได้แค่ใน slide หรือ scale ได้ใน rack จริง

ภาพประกอบบทความนี้เป็น **generated local SVG fallback** ขนาด **1280x720 พิกเซล** เพราะ source image ที่หน้า press release ของ Broadcom เปิดให้ local shell เห็นมีเพียง logo ขนาดเล็ก ไม่พอผ่านข้อกำหนด cover image ของ repo จึงใช้ภาพ SVG เฉพาะเรื่องแทน

## แหล่งอ้างอิง

- [Broadcom - Redefines AI Infrastructure with Industry-Leading Networking Innovations at 2026 OCP Global Summit](https://investors.broadcom.com/news-releases/news-release-details/broadcom-redefines-ai-infrastructure-industry-leading-networking)
- [Open Compute Project - 2026 OCP Global Summit](https://www.opencompute.org/events/ocp-summit/2026-ocp-global-summit/)

