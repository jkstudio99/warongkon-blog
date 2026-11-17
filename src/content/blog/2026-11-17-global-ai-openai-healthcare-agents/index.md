---
title: "OpenAI เพิ่มเอเจนต์ที่คลิกและกรอกข้อมูลข้ามระบบให้ทีมสุขภาพ"
seoTitle: "OpenAI เพิ่ม Computer-use Agents ใน ChatGPT for Healthcare"
description: "OpenAI เปิดใช้เอเจนต์สำหรับงานส่งต่อผู้ป่วยและย้ายเอกสารระหว่างระบบ พร้อมรายงานผลทดสอบงานธุรการบน HealthAdminBench"
pubDate: "2026-11-17"
tags: ["Global AI"]
coverImage: "./cover.png"
---

OpenAI ประกาศเมื่อวันที่ 16 พฤศจิกายน 2026 ว่า ChatGPT for Healthcare และ ChatGPT for Clinicians รองรับเอเจนต์ที่อ่านหน้าจอ คลิก และพิมพ์ในโปรแกรมเดิมของทีมสุขภาพได้ นักพัฒนาเรียกใช้ความสามารถนี้ผ่าน OpenAI API ได้ ส่วนการเปิดใช้ใน ChatGPT Work และ Codex ขึ้นกับการตั้งค่าของพื้นที่ทำงาน ตัวอย่างงานที่ OpenAI ยกมาคือการส่งเอกสารระหว่างระบบและประสานการส่งต่อผู้ป่วยเมื่อ API ของโปรแกรมรองรับงานได้เพียงบางขั้นตอน [ประกาศจาก OpenAI](https://openai.com/index/more-ways-to-move-care-forward-with-chatgpt-for-healthcare/)

## CVS Health บันทึกภาพหน้าจอเพื่อตรวจขั้นตอน

OpenAI ระบุว่า CVS Health ใช้เอเจนต์ช่วยส่งเอกสารและดำเนินขั้นตอนในระบบรับส่งต่อผู้ป่วย โดยมีเจ้าหน้าที่กำกับและใช้ภาพหน้าจอกับบันทึกการกระทำตรวจสอบผล CVS Health ยังเผยแพร่ CUA Agent Kit ซึ่งใช้เอเจนต์สำรวจและบันทึกขั้นตอนก่อนนำไปสร้างสคริปต์สำหรับงานที่ทำซ้ำได้ [รายละเอียดการใช้งานจาก OpenAI](https://openai.com/index/advancing-computer-use-for-healthcare-teams/) · [CUA Agent Kit ของ CVS Health](https://github.com/cvs-health/cua-agent-kit)

OpenAI รายงานว่า GPT-6 Astra ได้ 94.3% ของคะแนนตามเกณฑ์ HealthAdminBench ส่วน GPT-6 Luna ได้ 91.8% เมื่อทั้งสองโมเดลใช้การให้เหตุผลระดับสูงสุด ตัวเลขมาจากการประเมินงานธุรการ เช่น การขออนุมัติจากบริษัทประกันล่วงหน้าและการสั่งอุปกรณ์ทางการแพทย์ [ผลการประเมินของ OpenAI](https://openai.com/index/advancing-computer-use-for-healthcare-teams/)

ภาพปกเป็นภาพประกอบขั้นตอนประสานงานก่อนผู้ป่วยออกจากโรงพยาบาล เผยแพร่โดย Abridge ซึ่งกำลังพัฒนาการใช้งานเอเจนต์ร่วมกับ OpenAI [บทความและภาพจาก Abridge](https://www.abridge.com/blog/learning-health-system)
