---
title: "NVIDIA และ Oracle เปิด Vera Rubin บน OCI พร้อมแผนขยายระดับหลายกิกะวัตต์"
seoTitle: "NVIDIA และ Oracle เปิด Vera Rubin บน OCI พร้อมแผนขยายระดับหลายกิกะวัตต์"
description: "NVIDIA ระบุว่า Vera Rubin NVL72 และ Vera CPU เปิดให้ใช้ทั่วไปบน OCI แล้ว ส่วนการขยายหลายกิกะวัตต์และ HGX Rubin NVL8 ยังเป็นแผน"
pubDate: "2026-10-30"
tags: ["Hardware Infrastructure"]
coverImage: "./cover.jpg"
---

NVIDIA และ Oracle ประกาศเมื่อวันที่ **27 ตุลาคม 2026** ว่า NVIDIA Vera Rubin NVL72 และ Vera CPU เปิดให้ใช้งานทั่วไปบน Oracle Cloud Infrastructure หรือ OCI แล้ว พร้อมแผนขยาย Superclusters ระดับหลายกิกะวัตต์ ข่าว Hardware / Infrastructure ประจำวันที่ 30 ตุลาคมนี้มีทั้งบริการปัจจุบันและทิศทางลงทุนในอนาคต

[ข่าวประชาสัมพันธ์ร่วม](https://nvidianews.nvidia.com/news/nvidia-and-oracle-expand-nvidia-vera-rubin-to-multi-gigawatt-scale-and-bring-nvidia-vera-cpu-to-oracle-cloud-infrastructure) แยกสถานะสองส่วนไว้ชัดเจน การเปิดให้ใช้ฮาร์ดแวร์บน OCI ไม่ได้หมายความว่ากำลังรองรับระดับหลายกิกะวัตต์ตามแผนสร้างเสร็จทั้งหมดแล้ว

## CPU มีบทบาทในงาน agent มากขึ้น

บริษัทอธิบายว่า agent ต้องเรียกเครื่องมือ รันโค้ด และดึงข้อมูลระหว่างเรียกโมเดล งานเหล่านี้ใช้ CPU การปรับขนาดทรัพยากร CPU และ GPU แยกกันจึงเป็นแนวทางลดเวลาที่ GPU ต้องรอ ทั้งนี้เป็นคำอธิบายประโยชน์จากผู้ให้บริการ ยังไม่ใช่ผลทดสอบอิสระของทุก workload

OCI ยังวางแผนนำ HGX Rubin NVL8 ซึ่งใช้ Rubin GPU แปดตัวในเซิร์ฟเวอร์ x86 เข้ามาเป็นตัวเลือกเพิ่มเติม ส่วนนี้ยังเป็นแผนผลิตภัณฑ์ ไม่ใช่บริการที่ประกาศว่าเปิดทั่วไปพร้อมกันแล้ว

## ผลต่อการวางระบบ

ในมุมผู้เขียน ประเด็นที่ทีมโครงสร้างพื้นฐานควรประเมินคือสัดส่วนงานบน CPU กับ GPU ของแอปจริง แล้วจึงเทียบกับค่าใช้จ่ายและความพร้อมของภูมิภาคคลาวด์ ข่าวนี้ยังไม่ให้เหตุผลเพียงพอที่จะสรุปว่าการย้ายระบบทุกประเภทจะประหยัดขึ้น

ภาพปกเป็นภาพ Oracle และ NVIDIA ที่แนบมากับข่าวประชาสัมพันธ์ [แหล่งภาพ](https://iprsoftwaremedia.com/219/files/202610/504a33442ba2c6832992b7ea1255ccc2/6adfdd4c3d6332394404e329_oracle-nvidia/oracle-nvidia_0a5d2559-28eb-4cf3-bd23-0f249074bf5b-prv.jpg?v=0a5d2559-28eb-4cf3-bd23-0f249074bf5b)
