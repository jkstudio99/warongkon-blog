---
title: "OpenAI เปิดตัว GPT-6.2 Astra และ Sol สำหรับ ChatGPT Work, Codex และ API"
seoTitle: "OpenAI เปิดตัว GPT-6.2 Astra และ Sol ใน Codex และ API"
description: "OpenAI เปิดตัว GPT-6.2 สองรุ่นเมื่อ 17 พฤศจิกายน 2026 พร้อมระบุช่องทางใช้งานและเงื่อนไขการเรียกใช้เครื่องมือผ่าน API"
pubDate: "2026-11-18"
tags: ["Global AI"]
coverImage: "./cover.png"
---

OpenAI เปิดตัว GPT-6.2 Astra และ GPT-6.2 Sol เมื่อวันที่ 17 พฤศจิกายน 2026 โดยวาง Astra ไว้สำหรับงานเขียนโค้ดและงานวิเคราะห์ที่ซับซ้อน ส่วน Sol เน้นงานประจำวัน เช่น การแก้โค้ดและการให้เอเจนต์ทำงานหลายขั้นตอน ทั้งสองรุ่นเปิดใน ChatGPT Work และ Codex สำหรับผู้ใช้ Plus, Pro, Enterprise และ Edu ตามเงื่อนไขของแต่ละแผนและการตั้งค่าของผู้ดูแลพื้นที่ทำงาน [ประกาศจาก OpenAI](https://openai.com/index/introducing-gpt-6-2-astra-sol/)

## งานที่เรียกเครื่องมือต้องผ่าน Responses API

นักพัฒนาเรียกสองรุ่นด้วยรหัส `gpt-6.2-astra` และ `gpt-6.2-sol` ทั้งผ่าน Responses API และ Chat Completions หากเวิร์กโฟลว์ให้โมเดลเรียกเครื่องมือ บันทึกการเปลี่ยนแปลงของ OpenAI ระบุว่าต้องใช้ Responses API ทั้งสองรุ่นรับข้อความและภาพเป็นอินพุต และส่งผลลัพธ์เป็นข้อความ [บันทึกการเปลี่ยนแปลง API](https://developers.openai.com/api/docs/changelog?mw_entry=2026-09-29-99a06ddef837dc53) · [บันทึกการเปิดตัวโมเดล](https://help.openai.com/en/articles/9624314-model-release-notes)

OpenAI รายงานว่า Astra รุ่นใหม่ได้คะแนน Agents’ Last Exam สูงกว่า GPT-6 Astra อยู่ 5.2 จุด แบบประเมินนี้เน้นงานวิชาชีพที่ต้องทำหลายขั้นตอน ผลดังกล่าวมาจากการประเมินของผู้พัฒนาโมเดล ส่วนเอกสารความปลอดภัยระบุว่าทั้งสองรุ่นมีความสามารถด้านไซเบอร์ถึงระดับ Critical ตามเกณฑ์ของบริษัท จึงเพิ่มข้อจำกัดเริ่มต้นสำหรับคำขอด้านไซเบอร์ที่มีความเสี่ยงสูง [ประกาศผลประเมิน](https://openai.com/index/introducing-gpt-6-2-astra-sol/) · [เอกสารความปลอดภัย GPT-6.2](https://deploymentsafety.openai.com/gpt-6-2-astra-sol/alignment-to-our-model-spec)

ภาพปกเป็นกราฟจากโพสต์เปิดตัวในชุมชนนักพัฒนา OpenAI [โพสต์ต้นทาง](https://community.openai.com/t/gpt-6-2-astra-and-sol-are-now-available/1417531)
