---
title: 'Anthropic เปิด Claude Fable 5 วันที่ 9 มิถุนายน 2026: Mythos-class model รุ่นแรกที่ปล่อยให้ใช้งานทั่วไป'
seoTitle: 'Anthropic Claude Fable 5 Mythos 5 June 2026 - Warongkon Blog'
description: 'สรุปข่าว Anthropic วันที่ 9 มิถุนายน 2026 เรื่อง Claude Fable 5 และ Claude Mythos 5 พร้อม safeguards, Project Glasswing, pricing และผลต่อ AI agent สำหรับงานยาว'
pubDate: '2026-06-10'
tags: ["Global", "AI", "Anthropic", "Claude", "Fable 5", "Mythos 5", "AI Safety", "AI Agents"]
coverImage: './cover.svg'
---

ข่าว **Global / AI** สำหรับรอบวันที่ **10 มิถุนายน 2026** คือ Anthropic ประกาศวันที่ **9 มิถุนายน 2026** ว่าเปิดตัว **Claude Fable 5** และ **Claude Mythos 5** โดย Fable 5 เป็น Mythos-class model รุ่นแรกที่บริษัทเปิดให้ใช้งานทั่วไป หลังจากช่วงก่อนหน้ามีเพียงกลุ่มจำกัดที่เข้าถึง Claude Mythos Preview ผ่าน Project Glasswing

รอบก่อนบล็อกนี้พูดถึง Apple AFM 3, OpenAI GPT-Rosalind, Anthropic recursive pause, public ownership ของ AI และ military AI bills ไปแล้ว ข่าววันนี้จึงเลือกมุมใหม่ของ Anthropic: การเปลี่ยนโมเดลที่เคยถูกมองว่าเสี่ยงเกินกว่าจะปล่อยกว้าง ให้กลายเป็นสินค้า AI agent ที่ขายจริง พร้อมระบบ safeguard แบบ conservative

## Fable 5 คือ Mythos-class สำหรับตลาดกว้าง

Anthropic ระบุว่า **Claude Fable 5** เป็นโมเดลที่มีความสามารถสูงกว่าโมเดล Claude ที่บริษัทเคยเปิดให้ผู้ใช้ทั่วไปมาก่อน โดยเด่นในงาน software engineering, knowledge work, vision, scientific research และงานที่มี horizon ยาวขึ้น

ประเด็นสำคัญไม่ใช่แค่ benchmark แต่คือการออกแบบ product boundary:

- Fable 5 ใช้ underlying model ระดับเดียวกับ Mythos-class
- ระบบ safeguard จะจับบางคำถามในพื้นที่เสี่ยงแล้วส่งต่อให้ **Claude Opus 4.8**
- Anthropic ระบุว่าการ fallback เกิดเฉลี่ยน้อยกว่า **5% ของ sessions**
- พื้นที่เสี่ยงที่ถูกพูดถึงชัดคือ cybersecurity, biology, chemistry และ model-distillation requests
- ราคาอยู่ที่ **$10 ต่อ input tokens 1 ล้าน tokens** และ **$50 ต่อ output tokens 1 ล้าน tokens**

นี่ทำให้ Fable 5 เป็นโมเดลที่ Anthropic พยายามวางตรงกลางระหว่าง "เก่งพอสำหรับงาน agentic จริง" กับ "มีรั้วพอสำหรับการขายตลาดกว้าง"

## Mythos 5 ยังจำกัดไว้กับ trusted access

ในวันเดียวกัน Anthropic เปิดตัว **Claude Mythos 5** สำหรับกลุ่ม cyberdefenders และ infrastructure providers บางส่วน โดย deploy ผ่าน Project Glasswing ร่วมกับรัฐบาลสหรัฐฯ

ความต่างจาก Fable 5 คือ Mythos 5 ใช้ underlying model เดียวกัน แต่ยก safeguard บางส่วนออกในบริบทที่ผ่านการคัดกรองแล้ว บริษัทระบุว่าจะขยายการเข้าถึงผ่าน trusted-access program ในอนาคต แต่ยังไม่ได้ให้ timeline ชัด

Axios รายงานว่า Fable 5 จะ route คำถามเสี่ยงไปยังโมเดลที่ความสามารถต่ำกว่าเพื่อไม่ตอบ workflow ที่อาจช่วยโจมตี infrastructure หรือเพิ่มความเสี่ยงด้านชีวภาพ ส่วน The Verge ชี้ว่าการตัดสินใจปล่อย model ระดับนี้เกิดหลังจาก Anthropic เคยบอกว่า Mythos-class มีความสามารถด้าน cybersecurity สูงจนไม่เหมาะกับการเปิดสาธารณะในตอนแรก

## ตัวอย่างการใช้งานจริงที่ Anthropic ยกมา

Anthropic ยกตัวอย่าง early feedback หลายส่วนเพื่อสื่อว่า Fable 5 ไม่ได้เป็นแค่ chatbot ที่ตอบคำถามดีขึ้น แต่เป็นโมเดลที่รับงานยาวและทำงานกับระบบจริงได้มากขึ้น

ตัวอย่างที่น่าสนใจ:

- Stripe ทดลองกับ codebase Ruby ขนาด **50 ล้านบรรทัด** และรายงานว่าโมเดลช่วย migration ในเวลาประมาณหนึ่งวัน เทียบกับงาน manual ที่ต้องใช้ทีมมากกว่าสองเดือน
- Cognition ใช้ FrontierCode เพื่อวัดงาน coding ใน production codebase และ Anthropic ระบุว่า Fable 5 ทำคะแนนสูงในกลุ่ม frontier models
- ในงาน knowledge work มี feedback จาก finance benchmark และ trading-analysis evaluations
- ในงาน vision Anthropic ระบุว่า Fable 5 สามารถอ่าน scientific figure ที่ละเอียด และสร้าง source code ของ web app จาก screenshot ได้ดีกว่ารุ่นก่อน
- ใน long-context task บริษัทระบุว่า Fable 5 ใช้ notes ของตัวเองเพื่อปรับ output ในงานยาวได้ดีขึ้น

สิ่งเหล่านี้สะท้อนตลาด AI ปี 2026 ที่กำลังขยับจาก "ถามตอบเป็นครั้ง ๆ" ไปสู่ "มอบหมายงานที่ต้องถือ context นาน มีเครื่องมือ และต้องตรวจงานตัวเอง"

## จุดเสี่ยงยังอยู่ที่ safeguard และ false positive

Fable 5 เป็นข่าวใหญ่เพราะมันยอมรับ tension ตรง ๆ: โมเดลที่ทำงาน software engineering และ scientific research เก่งขึ้น ย่อมทำงานเสี่ยงบางประเภทได้ดีขึ้นด้วย

Anthropic จึงเลือกแนวทาง fallback ไปยัง Opus 4.8 เมื่อระบบเห็น request เสี่ยง แต่แนวทางนี้มี trade-off:

- ถ้าระบบเข้มเกินไป researcher หรือ security team ที่ทำงานถูกต้องอาจเจอ friction
- ถ้าระบบหลวมเกินไป โมเดลอาจถูกใช้ใน workflow ที่สร้างอันตรายจริง
- การ route ไปโมเดลอื่นทำให้ user experience ไม่เสถียรเท่าการใช้ model เดียวตลอด session
- ลูกค้า enterprise ต้องเข้าใจชัดว่า request แบบใดถูก downgrade และส่งผลต่อ output อย่างไร

ข่าวนี้จึงเป็นกรณีศึกษาสำคัญของ "capability release management" ไม่ใช่แค่ model launch

## ทำไมข่าวนี้สำคัญต่อ AI agent

Fable 5 ทำให้ภาพการแข่งขัน AI ชัดขึ้นว่าโมเดลระดับ frontier กำลังวัดกันที่งานยาวและงานจริงมากขึ้น:

- code migration ข้าม codebase
- financial analysis จากเอกสารและตารางหลายชั้น
- scientific hypothesis generation
- vision-to-code workflows
- persistent memory สำหรับ task ที่รันนาน
- trusted access สำหรับงาน cybersecurity ที่ต้องใช้ model capability สูงแต่ต้องมี governance

ถ้า Fable 5 ทำงานได้ตามที่ Anthropic สื่อไว้จริง บริษัทที่ใช้ Claude Code, Cursor, GitHub Copilot, Devin-style agent หรือ internal coding agent จะเริ่มคาดหวังให้ AI ทำงานระดับ project มากขึ้น ไม่ใช่แค่ช่วยเขียน function

## มุมมองของผม

ผมมองว่า Claude Fable 5 เป็นจังหวะสำคัญของ Anthropic เพราะบริษัทกำลังทดสอบสมมติฐานว่า frontier capability สามารถขายกว้างได้ ถ้ามี governance layer หนาพอ

จุดแข็งของข่าวนี้คือ Anthropic ไม่ได้ปิดบังว่าความสามารถด้าน cyber และ bio เป็นความเสี่ยงจริง แต่พยายามแปลงความเสี่ยงนั้นเป็น product design ผ่าน fallback, trusted access และ Project Glasswing

จุดที่ต้องดูต่อคือ Fable 5 จะทำงานใน production ได้ดีแค่ไหนเมื่อเจอ codebase messy, policy enterprise, access control, test suite ที่ล้มบ่อย และ request ที่อยู่กึ่งกลางระหว่าง legitimate security work กับ misuse

สรุปสั้น ๆ:
**Anthropic เปิด Claude Fable 5 วันที่ 9 มิถุนายน 2026 เป็น Mythos-class model รุ่นแรกสำหรับ general use พร้อม safeguard ที่ route request เสี่ยงไป Opus 4.8 ขณะเดียวกันเปิด Claude Mythos 5 แบบจำกัดผ่าน Project Glasswing ข่าวนี้ชี้ว่า frontier AI ปี 2026 กำลังแข่งกันที่งาน agentic ระยะยาว และการบริหาร release ของโมเดลที่มี dual-use capability สูง**

## หมายเหตุเรื่องภาพประกอบ

รอบนี้พบภาพประกอบบนหน้า Anthropic และสำนักข่าวที่รายงานการเปิดตัว Fable 5 แต่ shell environment ไม่สามารถ resolve DNS ของ `anthropic.com` เพื่อดาวน์โหลด asset เข้าสู่ repo ได้ จึงใช้ภาพ SVG ขนาด 1200x630 ที่สร้างเฉพาะบทความนี้เป็น fallback

## แหล่งอ้างอิง

- [Anthropic: Claude Fable 5 and Claude Mythos 5](https://www.anthropic.com/news/claude-fable-5-mythos-5)
- [The Verge: Anthropic releases its first Mythos-class model Claude Fable](https://www.theverge.com/news/946725/anthropic-releases-claude-fable-5-mythos)
- [Axios: Anthropic releases Mythos-level model for general use](https://www.axios.com/2026/06/09/anthropic-mythos-class-safeguards)
