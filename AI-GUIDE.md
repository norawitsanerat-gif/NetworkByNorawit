# AI-GUIDE — NetworkByNorawit

> อ่านไฟล์นี้ก่อนแตะโค้ด: อธิบายโครงสร้าง, convention และกับดักทั้งหมดของโปรเจกต์
> สถานะ: M1–M4 + F1–F5 เปิดเรียนครบ (262 สไลด์ · 9 โมดูล) · อัปเดต 2026-10-22

## 1. โปรเจกต์นี้คืออะไร

เว็บตำราเรียน **Computer Networks** แบบ interactive ภาษาไทย (ศัพท์เทคนิคคงเป็นอังกฤษ)
- **Vanilla JS + HTML + CSS** — ไม่มี build step, ไม่มี server, เปิดด้วย `file://` ได้เลย
- CDN ที่ใช้: Tailwind (`cdn.tailwindcss.com`), Lucide icons (`unpkg.com/lucide`), Google Fonts — ถ้า offline จะไม่โหลด แต่ app ยังทำงาน (`icons()` เช็ก `window.lucide` ก่อนเรียก)
- Dark theme เท่านั้น (`data-theme="dark"`)
- เนื้อหามาจากสไลด์/PDF ของอาจารย์ — **ห้ามเพิ่มข้อเท็จจริงนอก source** ภาษาไทยใช้อธิบาย/แปลเท่านั้น

## 2. โครงสร้างไฟล์

```
index.html                  เมนูหลัก (data-page="menu") — การ์ดโมดูล, สถิติรวม
chapter1.html … chapter4.html   Midterm M1–M4 (data-page="chapter")
final-ch4-data-plane.html       F1  (internal ID 5)
final-ch5-control-plane.html    F2  (internal ID 6)
final-ch6-link-layer.html       F3  (internal ID 7)
final-ch7-wireless.html         F4  (internal ID 8)
final-ch8-security.html         F5  (internal ID 9)
test.html                   ข้อสอบมิดเทอม 4 ชุด × 80 ข้อ (ใช้ DATA.quick/extraExam/extraExam2 …) — ห้ามแตะ
final-test.html             ข้อสอบไฟนอลรวม — ตอนนี้ใช้ DATA.ch5.exam (F1 20 ข้อ) เท่านั้น ยังไม่รวม F2–F5
navbar.html                 แม่แบบ header+sidebar ให้ copy ไปวางในหน้าบท (ไม่ได้ถูก include อัตโนมัติ)
data.js                     เนื้อหาทั้งหมด → window.DATA (~515 KB)
app.js                      logic ทั้งหมด (~4.5k บรรทัด, IIFE เดียว, classic script)
styles.css                  สไตล์ทั้งหมด (~100 KB) รวม @media print
FINAL-TRACK.md              เอกสารตัดสินใจเชิงโครงสร้างของ Final Track (mapping, storage key)
PLAN-F5.md / content-map-f1…f5.md   แผน + map สไลด์↔หน้า source ของแต่ละโมดูล
```

ทุกหน้าบทโหลดตามลำดับ: `styles.css` → (CDN) → `<script src="data.js">` → `<script src="app.js">` ท้าย `<body>`

## 3. Module mapping (สำคัญที่สุด)

**Internal ID ≠ Book chapter** — ห้าม renumber บท 1–4 (จะทำ URL, localStorage, ข้อสอบเดิมพัง)

| Code | Book Ch. | Title | Internal ID | `DATA` key | ไฟล์ |
|---|---|---|---|---|---|
| M1 | 1 | Fundamentals of Computer Network | 1 | top-level (`DATA.slides`, `.quiz`, `.cheat`, `.quick` …) | chapter1.html |
| M2 | 2 | Network Models | 2 | `DATA.ch2` | chapter2.html |
| M3 | 3 | Application Layer | 3 | `DATA.ch3` | chapter3.html |
| M4 | 4 | Transport Layer | 4 | `DATA.ch4` | chapter4.html |
| F1 | 4 | Network Layer: Data Plane | 5 | `DATA.ch5` | final-ch4-data-plane.html |
| F2 | 5 | Network Layer: Control Plane | 6 | `DATA.ch6` | final-ch5-control-plane.html |
| F3 | 6 | The Link Layer and LANs | 7 | `DATA.ch7` | final-ch6-link-layer.html |
| F4 | 7 | Wireless and Mobile Networks | 8 | `DATA.ch8` | final-ch7-wireless.html |
| F5 | 8 | Security | 9 | `DATA.ch9` | final-ch8-security.html |

- `<body data-page="chapter" data-chapter="<internalID>">` กำหนดว่าหน้านี้คือบทไหน → `PCH` ใน app.js
- **Suffix ของ id/ฟังก์ชัน/localStorage = internal ID** (F5 → `quiz9`, `fcQ9`, `renderTls9`, `cn_quiz9`)
- เมนูใช้ `CHS[n].file` เปิดหน้า (ไม่ได้ต่อ string `chapterN.html`)

## 4. Runtime flow

1. `app.js` อ่าน `PAGE` (`menu`|`chapter`) และ `PCH` จาก `<body>`
2. `CHS[n]` (บนสุดของ app.js) = metadata ต่อบท: `{start:0, count, sections, slides, cheat, flashcards, glossary, exam, thai, en, file, code, bookChapter}`
3. `loadChapter()` โหลด progress จาก localStorage → `state.current`, `state.completed`
4. `init()` → `bind()` (events ทั้งหมด) → `renderSidebar()` → ตาม `PCH` เรียน render function ของบทนั้น → `goTo(state.current)` → `renderExam()` อยู่ในแต่ละ branch
5. **สไลด์** = `<section class="slide-view">` ใน `#viewport` เรียงตามลำดับ DOM; `goTo(i)` สลับ class `.active`; แสดงสไลด์ใดสไลด์หนึ่ง = ถือว่า "เรียนแล้ว" (`markComplete`)
6. ครบทุกสไลด์ (ยกเว้นสไลด์ข้อสอบสุดท้าย) → ปลดล็อก Exam + แสดง completion overlay

## 5. Schema ของ `DATA.chN` (บท Final ใช้แบบเดียวกัน)

```js
window.DATA.ch9 = {
  slides:    [{ title, short }],              // 1 รายการต่อ 1 <section> — ลำดับ/จำนวนต้องตรงกับ HTML
  sections:  [{ label, topics: [3,4,5,6] }],  // topics = เลขสไลด์ แบบ 1-based (sidebar)
  // ... ข้อมูลของ interactive เฉพาะบท (F5: encSteps, rsaSteps, authTabs, hashDemo, tlsSteps, attacks)
  quiz:      [{ q, options:[4], correct:idx, explain }],   // 12 ข้อ
  exam:      [{ q, options, correct, explain }],            // 20 ข้อ
  cheat:     [{ term, def }],                               // 25
  flashcards:[{ q, a }],                                    // 12
  glossary:  [{ term, def }]                                // 36
};
```

มาตรฐานของ Final (F1–F5): สไลด์ F1=27, F2=31, F3=40, F4=42, F5=42 · Quiz 12 · Exam 20 · Cheat 25 · Flashcards 12 · Glossary 36 (เท่ากันทุกบท)
สไลด์ท้ายๆ ของทุกบทคือ: สรุป → Cheat Sheet → Quiz → Flashcards → Glossary → Exam

## 6. แผนที่ app.js (ค้นด้วยชื่อ ไม่ต้องพึ่งเลขบรรทัด)

| ส่วน | วิธีหา |
|---|---|
| `CHS`, `state`, `LS` (localStorage wrapper), `loadChapter` | บนสุดของไฟล์ |
| Menu: `renderMenuProgress`, `openChapter`, `bindMenu` | `CHAPTER MENU` |
| Sidebar / navigation / notes / completion | `SIDEBAR`, `SLIDE NAVIGATION` (`goTo`, `markComplete`), `NOTES`, `COMPLETION` (`showCompletion`) |
| Exam ทั่วไป (ใช้ร่วมทุกบท) | `examState`, `examData`, `examElId`, `examHint`, `renderExam`, `renderExamQuestion/Result` — อิง `state.chapter` + `ch().exam` |
| Print | `PRINT` — ปุ่ม `#printSlidesBtn` / `#printCardsBtn`, พื้นที่ `#printArea` |
| Events ทั้งหมด | `EVENTS` → `bind()` (ฟังก์ชัน `on(id,event,fn)`) แยกบล็อกคอมเมนต์ `// ===== FINAL F4 …` |
| Renderers ต่อบท | บล็อกคอมเมนต์ `CHAPTER 2/3/4 …` และ `FINAL F1…F5` |
| `init()` | ท้ายไฟล์ มี `else if (PCH === n)` ต่อบท |

**ข้อควรรู้:** บล็อก `FINAL F5` ถูกแทรกไว้ *กลางบล็อก F4* — renderer ของ F4 (`renderCheat8`, `quiz8*`, `fc8*`, `renderGlossary8`) อยู่ **หลัง** บล็อก F5 ในไฟล์ ใช้ได้ปกติ (hoisting) แค่ลำดับอ่านไม่ตรงชื่อหัวข้อ

### Pattern ของ renderer แต่ละบท
- **tab/step interactive**: `renderX9()` สร้างปุ่มลง container (`#xTabs9`) พร้อม `data-x="i"` → `selectX9(i)` toggle `.active` + เขียนผลลง element id ที่ลงท้าย 9; event bind แบบ delegation ใน `bind()`
- **Quiz**: `quizNScore`, `renderQuizN`, `renderQuizNQuestion`, `bindQuizNNav`, `renderQuizNResult` (ปุ่ม `#qNNext/#qNFinish/#qNRetry/#qNToCards`); เก็บใน `state.quizN.answers` → `cn_quizN`; best score → `cn_best_N`
- **Flashcards**: `fcN = {order, idx}`, `fcNShuffle/Render/Flip/Step`
- **Glossary**: `renderGlossaryN(filter)` + ช่องค้นหา `#glossarySearchN`, รายการ `#glossaryListN`, จำนวน `#glossaryCountN`

## 7. Convention ของ HTML สไลด์

```html
<section class="slide-view" data-title="…" aria-label="สไลด์ N: …">
  <div class="slide-inner">
    <p class="slide-eyebrow">…</p>
    <h2 class="slide-title">ข้อความ <span class="grad-text">ไฮไลต์</span></h2>
    <p class="slide-subtitle">…</p>
    … เนื้อหา …
    <p class="source-line">ที่มา: Chapter 8 — หัวข้อ, หน้า 9, 12</p>   <!-- ทุกสไลด์เนื้อหาต้องมี -->
  </div>
</section>
```

- สไลด์หนาแน่นเพิ่ม class `slide-compact`; สไลด์ quiz ใช้ `quiz-slide`
- คอมโพเนนต์ที่ใช้ซ้ำ (มีใน `styles.css`): `.card`, `.card-title/.card-text`, `.chip`, `.tip-box` (+`tip-note|tip-exam|tip-remember`), `.visual-box`, `.formula-box`, `.mini-card`, `.data-table` ใน `.table-wrap`, `.tabs`+`.tab-btn`, `.dhcp-steps`+`.dhcp-step`, `.flow-row`+`.pipe-node`+`.flow-arrow`, `.grid-2/.grid-3`, `.split`, `.cheat-item`, `.gloss-item`
- ไอคอน: `<i data-lucide="name"></i>` (ถูกแปลงโดย `icons()`)
- **Flashcard markup ต้องเป็นแบบนี้เท่านั้น** (ตรงกับ CSS):
  ```html
  <div class="flashcard-wrap mt-4">
    <div class="flashcard" id="flashcardN" role="button" tabindex="0">
      <div class="flashcard-face flashcard-front">
        <span class="fc-eyebrow">QUESTION</span><p class="fc-q" id="fcQN">—</p>
        <span class="flashcard-hint">คลิกเพื่อพลิกการ์ด 🔄</span></div>
      <div class="flashcard-face flashcard-back">
        <span class="fc-eyebrow" style="color:var(--success)">ANSWER</span><p class="fc-a" id="fcAN">—</p></div>
    </div>
    … ปุ่ม #fcPrevN #fcNextN #fcShuffleN และ chip #fcCounterN …
  ```
  (`flashcard-inner`, `.front/.back`, `fc-label` **ไม่มี CSS** — เคยทำให้ F3–F5 พัง)
- ทุกหน้าบทต้องมี: `#sidebarNav`, `#viewport`, `#headerChapterLabel`, `#sidebarChapterTitle/#sidebarChapterSub`, `#completionOverlay` (+`#doneSlides`, `#doneScore`, `#completionRestartBtn`), `#printArea`, `#quizN`, `#quizExamN`, `#cheatGridN`, ปุ่ม `#startBtnN` บนสไลด์ 1 — copy จาก `final-ch8-security.html`

## 8. localStorage keys

| ข้อมูล | Key (n = internal ID) |
|---|---|
| สไลด์ล่าสุด / ที่เรียนแล้ว / celebrated | `cn_current_n` / `cn_completed_n` / `cn_celebrated_n` |
| Quiz / Exam / Best | `cn_quizN` / `cn_examN` / `cn_best_N` (บท 1: `cn_quiz`, `cn_exam`) |
| Notes | `cn_notes` (key ภายใน `"<n>:<slideIndex>"`) |
| ตำแหน่งเลื่อนเมนูหลัก (index.html) | `cn_menu_scroll` (`scrollTop` ของ `#chapterMenu`) |
| migration flag: สลับลำดับตัวเลือก F1–F4 | `cn_option_order_v1` (app.js) · `cn_option_order_final_v1` (final-test.html) |

บท 1 มี fallback key เก่า (`cn_current`, `cn_completed`, `cn_quick`) — อย่าลบ

## 9. Checklist: เพิ่มโมดูลใหม่ (ตัวอย่าง F6 = internal ID 10)

1. `data.js`: เพิ่ม `window.DATA.ch10 = {…}` ตาม schema ข้อ 5
2. สร้าง `final-chX-name.html` จาก `final-ch8-security.html` → แก้ `data-chapter="10"`, ทุก id ที่ลงท้ายเลขบท, title/label, ข้อความ F5→F6, จำนวนสไลด์
3. `app.js` (ทุกข้อต้องครบ):
   - `CHS[10]`
   - `state.quiz10`, `state.exam10`
   - `renderMenuProgress`: `[1..10]` และข้อความ `/ 10 บท`
   - `showCompletion`: `doneQuizLen`
   - restart handler: `else if (n === 10)` (ล้าง quiz) **และ** แถว render หลัง restart (`else { renderQuiz9() … }` ต้องแตกเป็นเงื่อนไขใหม่)
   - `examHint` เพิ่ม key 10
   - `bind()`: `startBtn10`, interactive events, flashcard/glossary events
   - renderers + `init()` `else if (PCH === 10)`
4. `index.html`: เพิ่ม/เปิดการ์ด (`data-chapter="10"`, `data-slides="10"`, `id="ch10Pct"`), สถิติรวม (สไลด์/บท), track subtitle, footer
5. อัปเดต `FINAL-TRACK.md`, สร้าง `content-map-fX.md`
6. ทดสอบ (ข้อ 10)

## 10. ทดสอบ

- ไม่มี test framework; ใช้ **jsdom** ได้: ต้อง polyfill `Element.prototype.scrollIntoView`, `window.scrollTo`, `window.print`
- ถ้าโหลดผ่าน `file://` แล้ว `localStorage` จะ throw (opaque origin) — `LS` wrapper กลืน error ให้ แต่ progress จะไม่คงอยู่; ถ้าจะ seed `cn_completed_N` ให้ inline `data.js`/`app.js` ลง HTML แล้วใช้ `url: "http://localhost/…"`
- เช็กพื้นฐาน: `node --check data.js && node --check app.js`; sidebar = จำนวนสไลด์; interactive คลิกได้; Quiz→result→retry; Exam ล็อก/ปลดล็อก; print slides = จำนวนสไลด์, print cards = 3; ไม่มี JS error
- ตรวจ regression M1–M4 / F1–F4 ทุกครั้งที่แก้ `app.js`/`styles.css` (ไฟล์ร่วม)

## 11. กับดักที่เคยเจอ

- เลขบทซ้ำ: Book Ch.4 มีทั้ง M4 และ F1 → แสดงผลด้วย `code` (M4/F1) + badge `BOOK CH.x` เสมอ ห้ามใช้เลข internal ID กับผู้ใช้
- จำนวน `<section class="slide-view">` ต้องเท่ากับ `slides.length` (ไม่งั้น `vp.children[target]` เพี้ยน)
- ปุ่ม "ไปการ์ดทบทวน" ท้าย Quiz ค้นสไลด์จาก title/short มี "Flashcards" (F5 รองรับ `short === "Flashcards"` และ "การ์ดทบทวน"; **F4 และบทก่อนหน้าอาจหาไม่เจอ** เพราะ title เป็นภาษาไทย)
- **เฉลยห้ามวนเป็น pattern**: F1–F4 เคยมี `correct` วน `1,2,3,4,1,2,3,4,…` ทุกข้อ และ F5 เอียงไปทาง B เกือบทั้งชุด (เดาคำตอบได้) — แก้โดยสลับลำดับ `options` ใน `data.js` พร้อมอัปเดต `correct` ให้ชี้ข้อความเดิม ตอนนี้ F1–F5 กระจายเท่ากันทุกบท (Quiz 3/3/3/3 · Exam 5/5/5/5) ไม่มีคำอธิบายที่อ้างถึง "ตัวเลือก A/B/C/D" ถ้าจะสลับตัวเลือกอีกครั้งในอนาคต ต้อง bump migration key เพื่อล้าง `cn_quizN`/`cn_examN`/`cn_final_exam_f1` ไม่งั้น index คำตอบเก่าจะชี้คนละข้อความ
- ช่องค้นหา Glossary ต้องอยู่ใน `<div class="search-box">` + `<i data-lucide="search">` เท่านั้น — ไม่มีคลาส `.input` ใน `styles.css` (F3–F5 เคยใช้ `class="input"` ทำให้ช่องค้นหาเป็นกล่องขาวไม่มีสไตล์)
- Typo ตัวเลขใน HTML ไม่ถูกจับโดยเครื่องมือใด — ตรวจตัวอย่างคำนวณซ้ำเอง (เคยเจอ `12^5` ผิด)
- `final-test.html` ยังเป็นชุด F1 อย่างเดียว ถ้าจะรวม F2–F5 ต้องแก้ที่นั่น
- Deploy: working dir ไม่มี `.git` — ใช้ clone แยก copy ไฟล์ที่แก้ไปแล้ว `git add/commit/push origin main`
