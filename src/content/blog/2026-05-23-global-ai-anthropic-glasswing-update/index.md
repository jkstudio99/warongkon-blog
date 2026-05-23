---
title: 'Anthropic อัปเดต Project Glasswing วันที่ 22 พฤษภาคม 2026: เมื่อ AI หา bug ได้เร็วกว่า ecosystem จะแพตช์ทัน'
seoTitle: 'Anthropic Project Glasswing Update May 2026 - Warongkon Blog'
description: 'สรุป Anthropic อัปเดต Project Glasswing วันที่ 22 พฤษภาคม 2026 หลังใช้ Claude Mythos Preview หา vulnerability ระดับ high และ critical กว่า 10,000 รายการ'
pubDate: '2026-05-23'
tags: ["Global", "AI", "Anthropic", "Cybersecurity", "Project Glasswing"]
coverImage: './cover.svg'
---

ข่าว **Global / AI** สำหรับรอบวันที่ **23 พฤษภาคม 2026** คือการที่ **Anthropic** เผยแพร่บทความ **Project Glasswing: An initial update** เมื่อวันที่ **22 พฤษภาคม 2026**

ผมหยิบข่าวนี้เพราะมันเป็นสัญญาณชัดมากว่า AI frontier model ไม่ได้เปลี่ยนแค่ productivity ของนักพัฒนา แต่กำลังเปลี่ยนเศรษฐศาสตร์ของ cybersecurity ทั้งระบบ: จากเดิมที่ bottleneck คือ "หา bug ให้เจอ" กลายเป็น "ตรวจสอบ เปิดเผย และแพตช์ให้ทัน"

ในรอบก่อนบล็อกนี้เพิ่งพูดถึง enterprise AI, AI agent และ content provenance ไปแล้ว บทความนี้จึงขยับมาดูอีกด้านของ Global AI ที่มีความเสี่ยงสูงกว่า คือการใช้ model ระดับ frontier เพื่อค้นหาช่องโหว่ก่อนที่ attacker จะใช้ความสามารถแบบเดียวกัน

## Anthropic รายงานอะไรเมื่อวันที่ 22 พฤษภาคม

Anthropic ระบุว่า Project Glasswing เปิดตัวในเดือนเมษายน 2026 เพื่อใช้ **Claude Mythos Preview** ช่วย secure software ที่มีความสำคัญต่อ internet และ infrastructure หลักของโลก

ในการอัปเดตวันที่ **22 พฤษภาคม 2026** Anthropic บอกว่า ตัวเองและ partner ประมาณ **50 ราย** ใช้ Mythos Preview พบ vulnerability ระดับ **high** หรือ **critical** มากกว่า **10,000 รายการ** ใน software สำคัญ

ตัวเลขสำคัญมีหลายชุด:

- partner หลายรายพบ vulnerability หลักร้อยรายการต่อราย
- Cloudflare รายงานว่าพบ bug ประมาณ 2,000 รายการ โดย 400 รายการเป็น high หรือ critical
- UK AI Security Institute ระบุว่า Mythos Preview เป็น model แรกที่ solve cyber ranges ของสถาบันได้ครบ end to end
- Mozilla ใช้ Mythos Preview กับ Firefox 150 และแก้ช่องโหว่ 271 รายการ
- ใน open source Anthropic scan มากกว่า 1,000 projects และ model ประเมินว่าพบ high หรือ critical 6,202 รายการจากทั้งหมด 23,019 รายการ

จุดที่ควรอ่านอย่างระวังคือ Anthropic ยังไม่ได้เปิดรายละเอียด vulnerability ทั้งหมด เพราะต้องให้ maintainer มีเวลาทำ coordinated disclosure และให้ผู้ใช้ update software ก่อน

## ข้อมูล open source บอกอะไร

ส่วนที่น่าสนใจที่สุดของบทความคือสถิติ open source

Anthropic ระบุว่าในจำนวน high หรือ critical ที่ Mythos Preview ประเมินไว้ มี **1,752 รายการ** ที่ถูกตรวจโดย security research firms หรือทีมของ Anthropic แล้ว ในกลุ่มนี้ **90.6%** เป็น true positive และ **62.4%** ถูกยืนยันว่าเป็น high หรือ critical จริง

นี่ไม่ได้แปลว่า model ไม่ผิด แต่แปลว่า AI vulnerability discovery กำลังข้ามจุดที่เป็นแค่ demo

เมื่อผลลัพธ์มี true positive rate สูงพอ ปัญหาจะไม่ใช่การกดปุ่ม scan อีกต่อไป แต่เป็น operation หลังจากนั้น:

- ใคร reproduce ช่องโหว่
- ใครประเมิน severity
- ใครเขียน advisory
- maintainer มีเวลาทำ patch หรือไม่
- downstream users update ได้เร็วแค่ไหน
- organization มี asset inventory พอจะรู้ไหมว่าตัวเองใช้ library ที่ได้รับผลกระทบ

Anthropic ยังยกตัวอย่างช่องโหว่ใน **wolfSSL** ที่ Mythos Preview สร้าง exploit เพื่อปลอม certificate ได้ โดยช่องโหว่นั้นถูก patch แล้วและได้รับหมายเลข **CVE-2026-5194**

สำหรับคนทำ software supply chain นี่คือข่าวใหญ่ เพราะมันบอกว่า library ที่เคยถูกมองว่า mature และผ่านการใช้งานกว้างก็ยังมี latent bug ที่ model รุ่นใหม่อาจค้นเจอได้

## ทำไม bottleneck เปลี่ยนจาก discovery ไปเป็น patching

ในอดีต vulnerability discovery ใช้แรงงานผู้เชี่ยวชาญจำนวนมาก ต้อง fuzz, audit, reverse engineer, สร้าง proof of concept และใช้ intuition สูง

เมื่อ model แบบ Mythos Preview เริ่มช่วยงานเหล่านี้ได้ ต้นทุนการค้นหาจะลดลง แต่ต้นทุนของโลกจริงไม่ได้หายไป:

- maintainer open source ส่วนใหญ่ไม่ได้มีทีม security เต็มเวลา
- enterprise ต้อง test patch กับระบบ production ก่อน deploy
- vendor ต้องประสาน disclosure window
- security team ต้องแยก finding จริงออกจาก noise
- ผู้ใช้ปลายทางยังมีระบบ legacy ที่ update ยาก

Anthropic ระบุเองว่ามี maintainer บางรายขอให้ชะลอการ disclosure เพราะไม่มี capacity พอจะ patch ได้ทัน และ bug ระดับ high หรือ critical ที่ Mythos Preview พบใช้เวลาเฉลี่ยประมาณ **สองสัปดาห์** เพื่อ patch

นี่คือปัญหาเชิงระบบ ไม่ใช่ปัญหา model อย่างเดียว

## นัยต่อองค์กรที่ใช้ AI ใน security

ผมมองว่าข่าวนี้มีบทเรียนสองฝั่ง

ฝั่งแรกคือ **defender ได้เครื่องมือใหม่** ถ้าองค์กรใช้ model อย่างถูก governance จะ scan codebase, สร้าง threat model, triage finding และเสนอ patch ได้เร็วขึ้นมาก

ฝั่งที่สองคือ **attacker ก็จะได้ความสามารถแบบเดียวกันเร็วขึ้น** Anthropic เขียนตรง ๆ ว่า model ระดับ Mythos-class จะถูกพัฒนาโดยบริษัทหลายรายในไม่ช้า และตอนนี้ยังไม่มี safeguard ที่แข็งแรงพอสำหรับการปล่อยทั่วไป

ดังนั้นสิ่งที่องค์กรควรทำไม่ใช่รอ model release แต่ต้องยกระดับพื้นฐานของ vulnerability management:

- ลด patch cycle
- ทำ asset inventory ให้รู้ว่าระบบใช้ dependency อะไร
- บังคับ MFA และ default hardening
- เก็บ log ที่ใช้ detection และ response ได้จริง
- ออกแบบ workflow สำหรับ AI-assisted triage ที่ยังมี human accountability

ถ้าไม่ทำสิ่งเหล่านี้ AI จะเพิ่มจำนวน finding จนทีม security สำลัก แทนที่จะลดความเสี่ยง

## มุมมองของผม

Project Glasswing update วันที่ **22 พฤษภาคม 2026** เป็นข่าว Global AI ที่สำคัญ เพราะมันทำให้เราเห็น phase ใหม่ของ AI capability อย่างเป็นรูปธรรม

ก่อนหน้านี้ AI coding ถูกเล่าเป็นเรื่องเขียน code เร็วขึ้น แต่ข่าวนี้บอกว่า AI กำลังเร่งทั้งฝั่งสร้างและฝั่งทำลายของ software security

ผู้ชนะในรอบนี้อาจไม่ใช่องค์กรที่มี model เก่งที่สุด แต่คือองค์กรที่มี process ดีพอจะเปลี่ยน finding จำนวนมากให้เป็น patch ที่ deploy จริง โดยไม่ทำให้ maintainer, security team และ production users พังไปก่อน

สรุปสั้น ๆ:
**AI security ในปี 2026 กำลังย้าย bottleneck จากการค้นหาช่องโหว่ ไปสู่การตรวจสอบ disclosure และ patch management ที่ต้องเร็วกว่าเดิมหลายเท่า**

## หมายเหตุเรื่องภาพประกอบ

รอบนี้พยายามดึงภาพจากแหล่งข่าวด้วย `curl` แล้ว แต่ shell environment ไม่สามารถ resolve DNS ของ `www.anthropic.com`, `blog.cloudflare.com` และ `hacks.mozilla.org` ได้ จึงใช้ภาพ SVG ที่สร้างใน repo เป็น fallback เฉพาะบทความนี้

## แหล่งอ้างอิง

- [Anthropic: Project Glasswing: An initial update](https://www.anthropic.com/research/glasswing-initial-update)
- [Anthropic: Project Glasswing](https://www.anthropic.com/project/glasswing)
- [Cloudflare Blog: Project Glasswing: what Mythos showed us](https://blog.cloudflare.com/cyber-frontier-models/)
- [Mozilla Hacks: Behind the Scenes Hardening Firefox with Claude Mythos Preview](https://hacks.mozilla.org/2026/05/behind-the-scenes-hardening-firefox/)
