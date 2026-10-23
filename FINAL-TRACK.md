# FINAL TRACK — Architecture & Navigation

> เอกสารตัดสินใจเชิงโครงสร้างสำหรับเพิ่มเนื้อหา Final (Chapter 4–8) โดยไม่กระทบมิดเทอมเดิม
> สถานะ: F1–F5 เปิดเรียนแล้ว · วันที่: 2026-10-23

## 1. ปัญหาที่ต้องแก้

เว็บเดิมมี 4 บท (มิดเทอม) และใช้เลขบทเป็นตัวระบุหน้า/ความคืบหน้า:

| เว็บเดิม | เนื้อหา |
|---|---|
| chapter1.html | Fundamentals of Computer Network |
| chapter2.html | Network Models |
| chapter3.html | Application Layer |
| chapter4.html | Transport Layer |

ไฟนอลของอาจารย์เริ่มที่ **Chapter 4 Network Layer: Data Plane** ซึ่งเลข 4 ซ้ำกับ Transport Layer เดิม
ถ้าเปลี่ยนเลขบทเดิมจะทำให้ URL, localStorage, ชุดข้อสอบ และประวัติการเรียนของผู้ใช้เดิมเสียทั้งหมด

## 2. ข้อตัดสินใจ

1. **ไม่ Renumber บทเดิม 1–4**
2. ใช้ **รหัสโมดูล** เป็นตัวหลักในเมนู: `M1–M4` (Midterm) และ `F1–F5` (Final)
3. ใช้ **เลข Chapter ของอาจารย์** เป็น badge รองบนการ์ด/หัวบท
4. เนื้อหา Final แยกไฟล์ แยก progress key และแยกชุดข้อสอบ
5. สร้างทีละบท เริ่มจาก **F1 = Chapter 4 Network Layer: Data Plane**

## 3. Module Mapping

| Track | Code | Book Chapter | Title | Internal ID | File |
|---|---|---|---|---|---|
| Midterm | M1 | 1 | Fundamentals of Computer Network | 1 | chapter1.html |
| Midterm | M2 | 2 | Network Models | 2 | chapter2.html |
| Midterm | M3 | 3 | Application Layer | 3 | chapter3.html |
| Midterm | M4 | 4 | Transport Layer | 4 | chapter4.html |
| Final | F1 | 4 | Network Layer: Data Plane | 5 | final-ch4-data-plane.html |
| Final | F2 | 5 | Network Layer: Control Plane | 6 | final-ch5-control-plane.html |
| Final | F3 | 6 | The Link Layer and LANs | 7 | final-ch6-link-layer.html |
| Final | F4 | 7 | Wireless and Mobile Networks | 8 | final-ch7-wireless.html |
| Final | F5 | 8 | Security | 9 | final-ch8-security.html |

**Internal ID** ใช้กับ `CHS[n]`, `data-chapter`, และ localStorage เท่านั้น ไม่แสดงต่อผู้ใช้

## 4. การแสดงผลบนเมนู

```
MIDTERM · M1–M4
  [M1] Fundamentals of Computer Network
  [M2] Network Models
  [M3] Application Layer
  [M4] Transport Layer

FINAL · F1–F5
  [F1] BOOK CH.4 · Network Layer: Data Plane      ← เปิดเรียนแล้ว
  [F2] BOOK CH.5 · Network Layer: Control Plane   ← เปิดเรียนแล้ว
  [F3] BOOK CH.6 · The Link Layer and LANs        ← เปิดเรียนแล้ว
  [F4] BOOK CH.7 · Wireless and Mobile Networks   ← เปิดเรียนแล้ว
  [F5] BOOK CH.8 · Security                       ← เปิดเรียนแล้ว
```

- การ์ดแต่ละใบมี `data-chapter` เป็น internal ID (5–9)
- `openChapter()` ใช้ `CHS[n].file` แทนการต่อ string `chapterN.html`
- บทที่ยังไม่มีเนื้อหา: `CHS[n]` ไม่ถูกประกาศ หรือมี `locked: true` → toast "กำลังเตรียมเนื้อหา"

## 5. Storage Keys

| ข้อมูล | Key |
|---|---|
| ความคืบหน้าบท | `cn_completed_<internalID>` |
| สไลด์ล่าสุด | `cn_current_<internalID>` |
| Quiz | `cn_quiz<internalID>` |
| Exam | `cn_exam<internalID>` |
| Best score | `cn_best_<internalID>` |
| Notes | `cn_notes` (key ภายในเป็น `<internalID>:<slideIndex>`) |

ไม่มีการใช้ key ซ้ำกับบท 1–4 เพราะ internal ID ของ Final คือ 5–9

## 6. แหล่งเนื้อหา (Source of Truth)

- F1 ใช้ไฟล์ `Chapter_4_v9.0_Network_Layer_Data_Plane.pptx` เท่านั้น
- F2 ใช้ไฟล์ `Chapter 5 Network Layer_ Control Plane.md` เท่านั้น
- F3 ใช้ไฟล์ `Chapter 6 The Link Layer and LANs.md` เท่านั้น
- F4 ใช้ไฟล์ `Chapter 7 Wireless and Mobile Networks.md` เท่านั้น
- F5 ใช้ไฟล์ `Chapter_8_v9.0_Security.pdf` เท่านั้น
- ข้อเท็จจริง ตัวเลข ตัวอย่าง และตาราง ต้องตรงกับสไลด์ต้นฉบับ
- ภาษาไทยใช้เพื่ออธิบาย/แปลจากสไลด์ ไม่เพิ่มข้อเท็จจริงใหม่
- สไลด์เนื้อหาทุกสไลด์มีป้าย `ที่มา:` ระบุหัวข้อของ source

## 7. แผนสอบ

- มิดเทอม: `test.html` เดิม (4 ชุด × 80 ข้อ) — ไม่แตะ
- ไฟนอล: `final-test.html` แยกหน้า
- F1–F5 มี Quiz 12 ข้อ + Exam 20 ข้อ
- `final-test.html` ปัจจุบันเป็นชุด F1 20 ข้อ และยังไม่รวม F2/F3/F4/F5
- เมื่อรวมทุกบท F1–F5 จะรวมเป็นชุดข้อสอบไฟนอลแยกจากมิดเทอม

## 8. Acceptance Criteria (Phase 1)

- [x] เอกสาร mapping และ naming
- [x] กำหนด internal ID 5–9
- [x] กำหนด file naming
- [x] กำหนด storage keys
- [x] กำหนดแนวทาง final-test.html
- [x] F1 เปิดเรียนแล้ว (27 สไลด์ + Quiz 12 + Exam 20)
- [x] F2 เปิดเรียนแล้ว (31 สไลด์ + Quiz 12 + Exam 20)
- [x] F3 เปิดเรียนแล้ว (40 สไลด์ + Quiz 12 + Exam 20)
- [x] F4 เปิดเรียนแล้ว (42 สไลด์ + Quiz 12 + Exam 20 + Flashcards 12 + Glossary 36 + Cheat 25)
- [x] Print slides: F1 27 หน้า, F2 31 หน้า, F3 40 หน้า, F4 42 หน้า, F5 42 หน้า; Print cards: 3 หน้า
- [x] F5 เปิดเรียนแล้ว (42 สไลด์ + Quiz 12 + Exam 20 + Flashcards 12 + Glossary 36 + Cheat 25)
- [x] Quiz/Exam F1–F5: ไม่มีข้อใดที่คำตอบถูกเป็นตัวเลือกยาวที่สุดเพียงตัวเดียว
- [x] Quiz/Exam F1–F5: ไม่มีข้อใดที่คำตอบถูกเป็นตัวเลือกสั้นที่สุดเพียงตัวเดียว
- [x] เมนู dual-track ใช้งานได้จริง (M1–M4 + F1–F5)
- [x] ภาพรวมเมนู: 262 สไลด์ · 09 บทพร้อมเรียน
