---
title: 'MCP (Model Context Protocol): สร้าง AI Tool ของตัวเองในปี 2026'
seoTitle: 'MCP Build Your Own AI Tool 2026 - Warongkon Blog'
description: 'ทำความรู้จัก Model Context Protocol มาตรฐานใหม่ที่ทำให้ LLM คุยกับ tool ภายนอกได้ พร้อมตัวอย่างสร้าง MCP Server'
pubDate: '2026-07-16'
tags: ["AI", "MCP", "LLM", "Modern Dev"]
coverImage: './cover.jpg'
---

สวัสดีครับ! ถ้าคุณเคยใช้ Claude Code แล้วสงสัยว่า "มันต่อ tool ภายนอกได้ยังไง?" คำตอบคือ **MCP — Model Context Protocol** ที่ Anthropic ปล่อยมาเป็น open standard และปี 2026 นี้กลายเป็นมาตรฐานที่ทุกค่าย LLM รองรับครับ

---

## 🔌 MCP คืออะไรแบบเข้าใจง่าย

คิดว่า MCP คือ **"USB-C ของ AI Tool"** — มาตรฐานกลางที่ LLM ตัวไหนก็คุยกับ tool ตัวไหนก็ได้

**ก่อน MCP:** ทุก LLM มี tool format ของตัวเอง → ต้องเขียน adapter ทุก integration

**หลัง MCP:** เขียน MCP Server ครั้งเดียว → ใช้ได้กับ Claude, Copilot, Cursor, Windsurf ฯลฯ

---

## 🏗️ Architecture

MCP มี 3 component:

1. **MCP Server** — คนที่ให้บริการ tool (เช่น Git MCP, GitHub MCP, Filesystem MCP)
2. **MCP Client** — ตัว LLM app ที่เรียกใช้
3. **Transport** — stdio, HTTP/SSE, WebSocket

---

## ⚒️ สร้าง MCP Server ง่ายๆ ด้วย TypeScript

```typescript
import { Server } from "@modelcontextprotocol/sdk/server";

const server = new Server({
  name: "my-weather-tool",
  version: "1.0.0",
});

server.setRequestHandler("tools/list", async () => ({
  tools: [{
    name: "get_weather",
    description: "ดึงข้อมูลสภาพอากาศ",
    inputSchema: {
      type: "object",
      properties: { city: { type: "string" } },
    },
  }],
}));

server.setRequestHandler("tools/call", async (req) => {
  if (req.params.name === "get_weather") {
    const data = await fetchWeather(req.params.arguments.city);
    return { content: [{ type: "text", text: JSON.stringify(data) }] };
  }
});

server.connect(stdioTransport);
```

เสร็จแล้ว! จดทะเบียนใน Claude Code config แค่นี้ก็ใช้ได้

---

## 🎯 Use Cases เจ๋งๆ ในปี 2026

1. **Internal MCP** — ต่อกับ internal API ของบริษัท ให้ Claude query Jira, Confluence, SQL ได้
2. **DevOps MCP** — deploy, check log, restart service ผ่านแชท
3. **Data MCP** — ต่อ BigQuery, Snowflake ให้ทีม business ถามคำถามเอง
4. **Customer Support MCP** — ให้ AI ดึง customer history จาก CRM โดยไม่ expose API โดยตรง

---

## 🔐 Security Considerations

MCP เปิดช่องให้ LLM ทำอะไรในระบบได้เยอะ → ต้องระวัง:

1. **Scope Limiting** — MCP Server ให้ permission เฉพาะที่ต้อง
2. **User Confirmation** — action ที่อันตราย (delete, transfer money) ต้องให้ user approve
3. **Audit Log** — log ทุก tool call + argument + result
4. **Rate Limit** — ป้องกัน LLM ยิง tool รัวๆ

---

## 📚 MCP Servers ที่แนะนำ (ปี 2026)

- **Filesystem** — อ่าน/เขียนไฟล์ใน sandbox
- **GitHub** — จัดการ repo, PR, Issue
- **Postgres** — query DB
- **Puppeteer** — browse web
- **Slack** — ส่งข้อความ, สรุป channel

ดู registry ได้ที่ `modelcontextprotocol.io`

---

## 🎯 สรุป

MCP ทำให้การสร้าง AI Agent ในปี 2026 ง่ายขึ้น 10 เท่า เพราะไม่ต้อง reinvent การต่อ tool ทุกครั้ง

**ถ้าเป็นผม** ก็จะเริ่มเขียน MCP Server ของบริษัทไว้เลย ให้ทีม dev ใช้ Claude Code ทำงานประจำได้เร็วขึ้น 2-3 เท่าแน่นอนครับ

เจอกันใหม่ 🚀
