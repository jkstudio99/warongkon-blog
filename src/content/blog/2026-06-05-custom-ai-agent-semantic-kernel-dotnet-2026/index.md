---
title: 'สร้าง Custom AI Agent ด้วย Semantic Kernel และ .NET'
seoTitle: 'สร้าง AI Agent ด้วย Semantic Kernel และ .NET 10 - Warongkon Blog'
description: 'สอนพื้นฐานการใช้ Semantic Kernel เพื่อสร้าง AI Agent ที่ฉลาดและสามารถทำงานร่วมกับระบบเดิมของคุณได้อย่างไร้รอยต่อ'
pubDate: '2026-06-05'
tags: ["AI", "Dotnet", "Semantic Kernel"]
coverImage: './cover.jpg'
---

สวัสดีครับ! ถ้าพูดถึงเทรนด์ที่แรงที่สุดในฝั่ง AI ปี 2026 คงหนีไม่พ้นการสร้าง **AI Agents** ที่ไม่ใช่แค่แชทโต้ตอบได้ แต่สามารถ "ลงมือทำ" (Take Action) ได้จริงๆ ครับ

ในโลกของ .NET เครื่องมือที่ทรงพลังที่สุดสำหรับการสร้าง Agent คือ **Semantic Kernel** จาก Microsoft วันนี้ผมจะพาทุกคนไปดูว่าเราจะสร้าง Custom AI Agent ขึ้นมาใช้งานเองได้อย่างไรครับ

---

## 🧠 Semantic Kernel คืออะไร?

Semantic Kernel เป็น SDK ที่ช่วยให้เราเชื่อมต่อ Large Language Models (LLM) อย่าง GPT-4 หรือรุ่นที่ใหม่กว่า เข้ากับโค้ดภาษา C# ของเราได้ มันทำหน้าที่เป็น "ตัวกลาง" ที่ช่วยให้ AI สามารถเรียกใช้ Function (Plugins) ที่เราเขียนขึ้นมาได้ครับ

ลองนึกภาพว่าคุณมี AI ที่นอกจากจะตอบคำถามลูกค้าได้แล้ว ยังสามารถไปเช็คยอดสต็อกใน Database หรือส่งอีเมลแจ้งเตือนได้ด้วยตัวเอง นั่นแหละครับคือพลังของ Semantic Kernel

---

## 🏗️ องค์ประกอบหลักของ Agent

ในการสร้าง Agent ด้วย Semantic Kernel เราต้องเข้าใจ 3 ส่วนหลัก:
1. **Kernel:** หัวใจหลักที่คอยประสานงานระหว่าง AI และโค้ดของเรา
2. **Plugins (Skills):** ความสามารถที่เราสอนให้ AI เช่น "เช็คราคาสินค้า" หรือ "คำนวณภาษี"
3. **Planner:** ตัวตัดสินใจว่าเมื่อได้รับคำสั่งมา ต้องใช้ Plugin ไหนบ้างและต้องทำอะไรก่อนหลัง

---

## 🛠️ เริ่มต้นสร้าง Agent ง่ายๆ

ขั้นแรก ติดตั้ง NuGet Package:
```bash
dotnet add package Microsoft.SemanticKernel
```

จากนั้นสร้าง Kernel และสอน AI ให้รู้จักกับ Plugin ของเรา:

```csharp
var builder = Kernel.CreateBuilder();
builder.AddAzureOpenAIChatCompletion(...);

// สร้าง Plugin ง่ายๆ
public class InventoryPlugin
{
    [KernelFunction, Description("เช็คจำนวนสินค้าในคลัง")]
    public string GetStock(string productName) 
    {
        // Logic ไปดึงข้อมูลจาก Database
        return $"สินค้า {productName} เหลืออยู่ 10 ชิ้น";
    }
}

builder.Plugins.AddFromType<InventoryPlugin>();
var kernel = builder.Build();
```

ตอนนี้ Agent ของเราพร้อมแล้ว! เมื่อเราถามว่า "สินค้า A เหลือเท่าไหร่?" AI จะเข้าใจและไปเรียกฟังก์ชัน `GetStock` ให้เราโดยอัตโนมัติครับ

---

## 🚀 ยกระดับ Agent ในปี 2026

ในปี 2026 นี้ เราไม่ได้มีแค่ Agent ตัวเดียว แต่เรากำลังเข้าสู่ยุค **Multi-Agent System** ที่มี Agent หลายตัวทำงานร่วมกัน:
- **Manager Agent:** รับคำสั่งและกระจายงาน
- **Research Agent:** หาข้อมูล
- **Writer Agent:** สรุปผล

การใช้ Semantic Kernel ช่วยให้เราจัดการความซับซ้อนเหล่านี้ได้ผ่านระบบ **Function Calling** ที่แม่นยำขึ้นมากครับ

---

## 💡 สรุปมุมมองระดับ Senior

การสร้าง AI Agent ไม่ใช่เรื่องยาก แต่การสร้าง Agent ที่ **"เชื่อถือได้" (Reliable)** นั้นยากกว่า:
- **Validation:** ตรวจสอบ Input/Output ของ AI เสมอ
- **Security:** ระวังเรื่องการให้ AI เข้าถึงข้อมูลสำคัญ (Prompt Injection)
- **Monitoring:** เก็บ Log ทุกครั้งที่ AI เรียกใช้ Plugin เพื่อตรวจสอบความผิดพลาด

หวังว่าบทความนี้จะเป็นจุดเริ่มต้นให้เพื่อนๆ สาย .NET หันมาลองเล่น Semantic Kernel กันนะครับ อนาคตของการพัฒนาซอฟต์แวร์กำลังเปลี่ยนไป และ AI Agent นี่แหละคือเครื่องมือชิ้นสำคัญครับ!
