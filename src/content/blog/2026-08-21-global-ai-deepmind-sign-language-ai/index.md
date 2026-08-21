---
title: 'DeepMind เปิด SL2T บน Pixel 11: sign language AI เริ่มออกจาก lab ไปอยู่ใน keyboard จริง'
seoTitle: 'Google DeepMind SL2T Sign Language AI August 2026 - Warongkon Blog'
description: 'สรุปข่าว Global / AI วันที่ 21 สิงหาคม 2026 เรื่อง Google DeepMind เปิด SL2T โมเดล sign-language-to-text ใน Gboard และ Live Transcribe บน Pixel 11'
pubDate: '2026-08-21'
tags:
  [
    'Global',
    'AI',
    'Google DeepMind',
    'Android',
    'Pixel 11',
    'Accessibility',
    'Sign Language',
    'Computer Vision',
    'Gboard',
    'Live Transcribe'
  ]
coverImage: './cover.svg'
---

ข่าว **Global / AI** สำหรับรอบวันที่ **21 สิงหาคม 2026** คือการที่ **Google DeepMind** เผยแพร่บทความวันที่ **12 สิงหาคม 2026** เรื่อง **Putting sign language AI into users' hands** และนำโมเดล **sign-language-to-text (SL2T)** เข้าไปอยู่ใน feature จริงของ **Gboard** และ **Live Transcribe** บน **Pixel 11** โดยเริ่มจาก **American Sign Language (ASL) เป็นภาษาอังกฤษ**

เหตุผลที่ข่าวนี้ยังสำคัญในรอบวันที่ 21 สิงหาคม ไม่ใช่เพราะเป็นโมเดลใหม่อีกตัว แต่เพราะมันเป็นจังหวะที่ AI ด้านภาษาเริ่มขยับจากเสียงพูดและตัวหนังสือ ไปสู่ภาษามือซึ่งมี grammar, vocabulary, facial expression และ motion pattern ของตัวเอง DeepMind ระบุว่าโลกมีภาษามือมากกว่า **200 ภาษา** และมีผู้ใช้ Deaf หรือ hard of hearing ประมาณ **70 ล้านคน** ที่ยังไม่ได้รับประโยชน์จาก speech AI เท่ากับผู้ใช้ทั่วไป

นี่จึงเป็นข่าว productization ของ AI accessibility มากกว่าแค่ research demo

## SL2T ต่างจาก speech-to-text อย่างไร

speech-to-text ส่วนใหญ่แปลงเสียงเป็นตัวอักษรในภาษาเดียวกัน แต่ภาษามือไม่ใช่ "ภาษาอังกฤษบนมือ" และไม่ใช่ gesture lookup แบบง่าย ๆ ภาษามือเป็นภาษาธรรมชาติที่มีไวยากรณ์เฉพาะ มีการใช้มือ แขน ลำตัว ศีรษะ สีหน้า และพื้นที่รอบตัวพร้อมกันเพื่อสร้างความหมาย

นั่นทำให้ SL2T ต้องแก้ปัญหาสองชั้นพร้อมกัน:

- computer vision ต้อง track การเคลื่อนไหวหลายส่วนของร่างกายแบบละเอียด
- machine translation ต้องแปลจากภาษามือไปเป็น text โดยไม่ลดทุกอย่างเป็นคำศัพท์ตรงตัว
- UX ต้องทำงานแบบ streaming ได้เร็วพอสำหรับ keyboard และ conversation
- ระบบต้องรับมือกับคนถนัดซ้าย การ sign ด้วยมือเดียว และ input ที่ไม่ใช่ภาษามือ
- privacy ต้องดีพอ เพราะผู้ใช้กำลังเปิดกล้องเพื่อสื่อสาร

DeepMind ระบุว่าโมเดลถูกฝึกจากข้อมูลมากกว่า **100,000 ชั่วโมง** ครอบคลุมภาษามือมากกว่า **50 ภาษา** โดยราวหนึ่งในสี่เป็น ASL และทำ translation จาก pose landmarks ไปเป็น text โดยตรง ไม่ใช้ gloss annotation เป็นตัวกลางเหมือนงานวิจัยภาษามือหลายชุดในอดีต

## Privacy กลายเป็นส่วนหนึ่งของ model design

จุดที่น่าสนใจคือ SL2T ไม่ส่ง raw camera video ไปแปลตรง ๆ แต่ใช้ on-device **MediaPipe Holistic** เพื่อแปลงภาพเป็นตำแหน่ง landmark ของร่างกายก่อน แล้วจึงส่ง coordinate sequence ไปให้ server แปลเป็น text แนวทางนี้ทำให้ video ต้นฉบับถูกทิ้งได้ทันทีหลังดึง landmark แล้ว

สำหรับ product AI ในปี 2026 นี่เป็น pattern ที่ควรจับตา เพราะ user trust ไม่ได้มาจาก model accuracy อย่างเดียว แต่ต้องมาจาก architecture ที่อธิบายได้ว่า data boundary อยู่ตรงไหน

ถ้า AI accessibility ต้องใช้กล้อง ไมค์ หรือข้อมูล biometric-like signal ทีม product ต้องตอบคำถามเหล่านี้ให้ชัด:

- มีอะไรประมวลผลบน device
- มีอะไรส่งขึ้น server
- ข้อมูลภาพหรือเสียงถูกเก็บนานแค่ไหน
- user เข้าใจ trade-off ระหว่าง latency, quality และ privacy หรือไม่
- model fail อย่างไรเมื่อเจอ input ที่ไม่ใช่ภาษามือ

SL2T จึงเป็น case study ว่า AI feature ที่แตะข้อมูลละเอียดควรถูกออกแบบพร้อม privacy ตั้งแต่แรก ไม่ใช่ค่อยเอา policy มาครอบทีหลัง

## จาก benchmark ไปสู่ keyboard คือก้าวที่ยากกว่า

DeepMind ระบุว่า SL2T ได้ zero-shot score **70 BLEURT** บน benchmark **FLEURS-ASL** ซึ่งสูงกว่าคะแนนที่เคยรายงานก่อนหน้า แต่ข่าวนี้ไม่ได้จบที่ benchmark เพราะ feature ถูกวางไว้ในจุดที่ผู้ใช้ต้องพึ่งพาทุกวัน เช่น พิมพ์ข้อความ ค้นเว็บ สั่ง Gemini หรือโต้ตอบใน Live Transcribe

การเอา AI ลง keyboard มีความเสี่ยงสูงกว่าการโชว์ demo เพราะ error ถูกเห็นทันที:

- แปลผิดอาจทำให้ communication เสียความหมาย
- latency สูงทำให้ผู้ใช้กลับไปพิมพ์แทน
- ถ้าใช้ได้แค่ posture สวย ๆ ใน lab จะไม่รอดในบ้าน รถ หรือที่ทำงาน
- ผู้ใช้ Deaf community ต้องรู้สึกว่า feature สร้างร่วมกับเขา ไม่ใช่ทำแทนเขา

DeepMind จึงตั้ง **AI Sign Language Advisory Committee (AISLAC)** และระบุว่าทีมทำงานร่วมกับ Deaf partners ตั้งแต่แนวคิด การเก็บข้อมูล การทดสอบ ไปจนถึง impact report สำหรับ SL2T 1.0

## บทเรียนต่อทีม AI ในไทยและ SEA

สำหรับทีม AI ในไทยและ SEA ข่าวนี้มีบทเรียนตรงมาก: accessibility ไม่ใช่ตลาดเล็ก และไม่ใช่ feature เสริมท้าย roadmap เสมอไป หลายครั้งโจทย์ accessibility คือโจทย์ product ที่ต้องการ model, UX, data governance และ domain partnership ที่ลึกกว่าปกติ

ภาษาไทยเองมีบริบทคล้ายกันในหลายมิติ เช่น ภาษามือไทย, สำเนียงท้องถิ่น, ภาษาชนกลุ่มน้อย, ผู้สูงอายุ, healthcare workflow และ education use case ที่ระบบ AI ทั่วไปยังไม่รองรับดีพอ

ทีมที่อยากสร้าง AI product ให้มี moat ควรมองหากลุ่มผู้ใช้ที่ถูกบังคับให้ใช้ interface ที่ไม่เป็นธรรมชาติกับตัวเอง แล้วถามว่า:

- AI ช่วยให้เขา input หรือ output ด้วยภาษาของตัวเองได้หรือไม่
- ต้องร่วมกับ community ใดตั้งแต่ต้น
- data จะถูกเก็บอย่างมี consent และ dignity อย่างไร
- benchmark วัดคุณภาพจริงของผู้ใช้กลุ่มนั้นหรือไม่
- feature ต้องฝังใน workflow ไหนจึงจะถูกใช้จริง

## มุมมองของผม

ผมมองว่านี่เป็นข่าว Global / AI ที่สำคัญในรอบวันที่ **21 สิงหาคม 2026** เพราะมันเปลี่ยน narrative จาก "AI เข้าใจข้อความและเสียงได้ดีขึ้น" ไปสู่ "AI เริ่มรองรับวิธีสื่อสารที่มนุษย์ใช้จริงแต่ถูกมองข้าม"

ถ้า SL2T ทำงานได้ดีบน Pixel 11 และขยายไป device อื่นกับภาษามืออื่นตามที่ Google วางไว้ มันอาจเป็นหนึ่งใน accessibility feature ที่ทำให้ AI มีความหมายเชิงสังคมชัดกว่าการเพิ่มคะแนน benchmark อีกไม่กี่จุด

สรุปสั้น ๆ:
**วันที่ 21 สิงหาคม 2026 ข่าว SL2T ของ Google DeepMind ชี้ว่า AI accessibility กำลังเข้าสู่ consumer product จริง โดยเริ่มจาก ASL-to-English ใน Gboard และ Live Transcribe บน Pixel 11 พร้อม architecture ที่แยก raw video ออกจาก translation pipeline เพื่อรักษา privacy**

## หมายเหตุเรื่องภาพประกอบ

ภาพประกอบบทความนี้เป็น **generated local SVG fallback** ขนาด **1280x720 พิกเซล** เพราะ local shell ของ automation ไม่สามารถ resolve DNS เพื่อดาวน์โหลดภาพ official จาก Google DeepMind เข้ามาใน repo ได้โดยตรง (`Could not resolve host`) แม้หน้า source จะมีภาพ official ที่ตรงกับเรื่องนี้ก็ตาม

## แหล่งอ้างอิง

- [Google DeepMind: Putting sign language AI into users' hands](https://deepmind.google/blog/putting-sign-language-ai-into-users-hands/)
- [Techmeme: Google DeepMind launches SL2T](https://www.techmeme.com/260812/p35)
- [Google Research: MediaPipe Holistic](https://research.google/teams/perception/mediapipe/)
