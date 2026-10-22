---
title: 'Microsoft วางแผนขยาย Azure Maia สู่ระดับหลายกิกะวัตต์: ชิป custom กับโจทย์ inference ขนาดใหญ่'
seoTitle: 'Azure Maia 300 multi-gigawatt AI infrastructure October 2026'
description: 'สรุปข่าว Hardware / Infrastructure วันที่ 22 ตุลาคม 2026 จากแผน Microsoft ขยาย Azure Maia สู่ deployment ระดับหลายกิกะวัตต์ และเตรียม Maia 300 ในปี 2027'
pubDate: '2026-10-22'
tags: ['Hardware Infrastructure', 'Microsoft Azure', 'Azure Maia', 'AI Chips', 'Inference', 'Data Center']
coverImage: './cover.png'
---

ข่าว **Hardware / Infrastructure** ที่ควรติดตามในวันที่ **22 ตุลาคม 2026** คือ Microsoft ประกาศเมื่อ **12 ตุลาคม 2026** ว่าจะขยายตระกูลชิป Azure Maia ไปสู่ deployment ระดับหลายกิกะวัตต์ตั้งแต่ปี **2027** โดยระบุว่า **Maia 200** ทำงานกับ production workload แล้ว และ **Maia 300** จะเริ่ม production deployment ในปี 2027

Maia เป็นชิป custom ของ Microsoft สำหรับงาน AI ใน Azure ประเด็นสำคัญจึงไม่ใช่การเปิดตัวชิปเดี่ยว แต่เป็นการย้ายการออกแบบจากชิปไปสู่ระบบ inference ทั้งชุด บริษัทระบุว่า Maia 200 ใช้กับ Microsoft Copilot และงานของทีม MAI แล้ว รวมถึงรองรับ OpenAI models, โมเดลของ Microsoft และโมเดล open-source ตาม workload ที่เลือก

## หลายกิกะวัตต์คือโจทย์ของระบบ ไม่ใช่ตัวเลขการตลาดของชิป

เมื่อระดับ deployment ขยับไปถึงหลายกิกะวัตต์ การตัดสินใจต้องรวมไฟฟ้า ระบบระบายความร้อน เครือข่าย การจัดวาง rack และซอฟต์แวร์ที่กระจายงาน inference Microsoft จึงอธิบาย Maia ว่าเป็นส่วนหนึ่งของแนวทางที่ทำงานร่วมกับ silicon และ model หลายแบบ ไม่ใช่การแทนที่ทุก accelerator ด้วยชิปชนิดเดียว

สำหรับผู้ใช้ Azure ข่าวนี้ยังไม่ได้ประกาศราคา การเปิดใช้ Maia 300 หรือ SLA ใหม่ จึงไม่ควรสรุปว่าลูกค้าทั่วไปจะเข้าถึงชิปนี้ในปี 2027 ได้ทันที สิ่งที่ยืนยันได้คือ Microsoft กำลังใช้ชิป custom ใน production และวางแผนเพิ่มขนาดระบบในปีถัดไป

## ผู้ซื้อควรถามเรื่อง workload มากกว่ารุ่นชิป

องค์กรที่ใช้ AI บนคลาวด์ควรวัดต้นทุนและ latency ของ workload จริง เช่น ปริมาณ token ช่วงสูงสุด ขนาด context ความพร้อมของโมเดล และเงื่อนไขการเก็บข้อมูล การมี accelerator หลายชนิดอาจเป็นประโยชน์เมื่อผู้ให้บริการเลือก hardware ได้เหมาะกับงาน แต่ประโยชน์นั้นต้องสะท้อนในราคา ประสิทธิภาพ และความพร้อมใช้งานที่ลูกค้าตรวจสอบได้

Microsoft ระบุว่าจะเปิดเผยรายละเอียดเพิ่มเติมในงาน Ignite 2026 เดือนพฤศจิกายน ดังนั้นตัวเลขด้าน throughput, efficiency และรูปแบบการเข้าถึง Maia 300 ยังเป็นข้อมูลที่ต้องรอจากบริษัทหรือการทดสอบอิสระ

## สรุป

แผน Azure Maia ชี้ว่าการแข่งขัน AI infrastructure กำลังวัดกันที่ความสามารถในการสร้างและเดินระบบ inference ขนาดใหญ่ครบชุด Microsoft มี Maia 200 ใน production แล้ว แต่ผลต่อผู้ใช้จะชัดขึ้นเมื่อบริษัทเผยข้อมูลการเข้าถึงและประสิทธิภาพของ Maia 300 ในปี 2027

ภาพประกอบดาวน์โหลดจากภาพหัวข้อข่าวทางการของ **Microsoft** ขนาด **1024x576 พิกเซล** ผ่านข้อกำหนด cover image ของ repo และเป็นภาพ Azure Maia 300 โดยตรง

## แหล่งอ้างอิง

- [Microsoft: Microsoft to expand Azure Maia system to multi-gigawatt deployments](https://blogs.microsoft.com/blog/2026/10/12/microsoft-to-expand-azure-maia-system-to-multi-gigawatt-deployments/)
