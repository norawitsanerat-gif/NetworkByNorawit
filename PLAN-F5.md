# PLAN — F5 · BOOK CH.8: Security

> สถานะ: **เสร็จแล้ว (2026-10-22)** — F5 เปิดเรียนแล้ว; ดู content-map-f5.md
> เป้าหมาย: สร้าง Final Track F5 จาก `C:\Users\PC\Downloads\Chapter_8_v9.0_Security.pdf` (123 หน้า) โดยใช้ข้อเท็จจริง/ตัวเลข/ตัวอย่างจาก source เท่านั้น
> วันที่วางแผน: 22 ต.ค. 2026

---

## 1. ข้อมูลโมดูล

| รายการ | ค่า |
|---|---|
| รหัส | **F5** |
| Badge | **BOOK CH.8** |
| Internal ID | **9** |
| ไฟล์บท | `final-ch8-security.html` |
| Data object | `window.DATA.ch9` |
| Storage keys | `cn_current_9`, `cn_completed_9`, `cn_quiz9`, `cn_exam9`, `cn_best_9` |
| จำนวนสไลด์ | **42** |
| Quiz | 12 ข้อ |
| Exam | 20 ข้อ |
| Flashcards | 12 ใบ |
| Glossary | 36 คำ |
| Cheat Sheet | 25 รายการ |

เมื่อเปิด F5 แล้ว สถิติหน้าเมนูจะเป็น:
- **09 โมดูล**
- **262 สไลด์** (220 + 42)
- **09 บทพร้อมเรียน**

---

## 2. หัวข้อหลัก 7 ข้อ และการกระจายสไลด์

| หัวข้อที่ผู้ใช้กำหนด | สไลด์ | Section |
|---|---|---|
| 1. หลักการพื้นฐานของ Network Security | 3–6 | 1. Network Security Foundations |
| 2. Symmetric-Key และ Public-Key Cryptography | 9–19 | 2. Cryptography & Encryption / 3. Public-Key Cryptography |
| 3. Encryption และ Decryption | 7–8, 10–13 | 2. Cryptography & Encryption |
| 4. Cryptographic Hash Functions | 24–25 | 4. Authentication, Integrity & Hashes |
| 5. Message Integrity และ Authentication | 20–25 | 4. Authentication, Integrity & Hashes |
| 6. Digital Signatures และ Secure Communication (TLS) | 26–32 | 5. Digital Signatures & TLS |
| 7. Network Security Attacks | 33–36 | 6. Network Security Attacks |

---

## 3. Slide map 42 สไลด์

| # | Slide | Source PDF pages | เนื้อหาหลัก |
|---|---|---|---|
| 1 | Cover — F5: Security | 1–3 | Chapter 8; 7 หัวข้อหลัก |
| 2 | บทนี้จะเรียนอะไร | 2–3 | Roadmap 7 หัวข้อ + หมายเหตุหัวข้อเสริม |
| 3 | Network Security คืออะไร | 4 | confidentiality, authentication, message integrity, access/availability |
| 4 | Alice, Bob และ Trudy | 5–6 | ผู้ส่ง/ผู้รับ/ผู้บุกรุก; ตัวอย่าง web, banking, DNS, BGP |
| 5 | ผู้โจมตีทำอะไรได้บ้าง | 7 | eavesdrop, insert, impersonation/spoofing, hijacking, DoS |
| 6 | ภาษาของ Cryptography | 9 | plaintext, ciphertext, algorithm, key; symmetric/asymmetric |
| 7 | Encryption & Decryption Flow | 9 | m → K(m) → m; interactive 4 steps |
| 8 | การทำลาย Encryption Scheme | 10 | ciphertext-only, brute force, statistical, known-plaintext, chosen-plaintext |
| 9 | Symmetric-Key Cryptography | 11 | shared key K_S; ปัญหาการตกลง key |
| 10 | Substitution Cipher | 12 | monoalphabetic mapping; ตัวอย่าง `bob. i love you. alice` |
| 11 | Polyalphabetic Cipher | 13 | n substitution ciphers + cyclic pattern; ตัวอย่าง n=4 |
| 12 | DES | 14 | 56-bit key, 64-bit plaintext, CBC, DES Challenge, 3DES |
| 13 | AES | 15 | 128-bit blocks, 128/192/256-bit keys, brute-force comparison |
| 14 | Public-Key Cryptography | 16–17 | public encryption key / private decryption key; RSA78, DH76 |
| 15 | Public-Key Requirements | 18–19 | K−(K+(m))=m; computationally infeasible; modular arithmetic |
| 16 | RSA — Key Generation | 21 | p,q → n,z → e → d; public (n,e), private (n,d) |
| 17 | RSA — Encryption & Decryption | 22, 24–26 | c=m^e mod n; m=c^d mod n; why RSA works |
| 18 | RSA — Worked Example | 23 | p=5,q=7,n=35,z=24,e=5,d=29; m=12 → c=17 → m=12 |
| 19 | RSA Security & Hybrid Cryptography | 27–28 | factoring hard; RSA ช้ากว่า DES; session key |
| 20 | Authentication — ap1.0 & ap2.0 | 31–34 | “I am Alice”; source IP spoofing |
| 21 | Authentication — ap3.0 & Playback | 35–38 | password / encrypted password; playback attack |
| 22 | Authentication — ap4.0 & Nonce | 39 | nonce R; shared key; Alice live |
| 23 | Authentication — ap5.0 & MITM | 40–41 | public key auth; man-in-the-middle |
| 24 | Message Digests & Hash Functions | 45 | many-to-1, fixed-size digest, preimage hard |
| 25 | Hash Algorithms & Internet Checksum | 46, 48 | checksum collision example; MD5 128-bit; SHA-1 160-bit |
| 26 | Digital Signatures | 43–44 | private-key signing; verify; non-repudiation |
| 27 | Signed Message Digest | 47 | H(m) → sign with private key → compare at receiver |
| 28 | Certification Authorities (CA) | 50–52 | bind public key to entity; certificate signed by CA |
| 29 | Diffie-Hellman Key Agreement | 54–55 | p,g, SA/SB, public keys, shared secret |
| 30 | TLS — Transport-Layer Security | 62–64 | confidentiality/integrity/authentication; HTTPS 443; TLS 1.3 |
| 31 | TLS 1.3 Handshake | 65, 72–73 | 1 RTT; 0 RTT resumption + replay risk |
| 32 | TLS Records & Data-Stream Attacks | 66–69, 71 | records, MAC, sequence #, reordering/replay/truncation, cipher suites |
| 33 | Network Security Attacks | 7, 112, 120 | attack taxonomy + goal mapping |
| 34 | MITM, Replay & Truncation | 41, 68–69 | protocol-level attacks และแนวป้องกัน |
| 35 | DoS, SYN Flooding & IP Spoofing | 7, 112, 120 | availability attacks; firewall limitations |
| 36 | Defense Map | 121–123 | cryptography, auth, hash, TLS, firewall, IDS |
| 37 | สรุปบทเรียน | 123 | ทบทวน 7 หัวข้อ |
| 38 | สูตรจำก่อนสอบ — F5 | ทั้งไฟล์ | Cheat Sheet 25 รายการ |
| 39 | แบบทดสอบ F5 12 ข้อ | ทั้งไฟล์ | Quiz 12 |
| 40 | การ์ดทบทวน — F5 | ทั้งไฟล์ | Flashcards 12 |
| 41 | คำศัพท์ — F5 | ทั้งไฟล์ | Glossary 36 |
| 42 | ข้อสอบหลังเรียน — 20 ข้อ | ทั้งไฟล์ | Exam 20 |

---

## 4. Sections ที่จะใช้ใน Sidebar

```js
[
  { label: "ภาพรวม Final · F5", topics: [1, 2] },
  { label: "1. Network Security Foundations", topics: [3, 4, 5, 6] },
  { label: "2. Cryptography & Encryption", topics: [7, 8, 9, 10, 11, 12, 13] },
  { label: "3. Public-Key Cryptography", topics: [14, 15, 16, 17, 18, 19] },
  { label: "4. Authentication, Integrity & Hashes", topics: [20, 21, 22, 23, 24, 25] },
  { label: "5. Digital Signatures & TLS", topics: [26, 27, 28, 29, 30, 31, 32] },
  { label: "6. Network Security Attacks", topics: [33, 34, 35, 36] },
  { label: "ทบทวนและฝึกฝน", topics: [37, 38, 39, 40, 41, 42] }
]
```

---

## 5. Interactive elements ที่จะทำ

| Slide | Element | แนวทาง |
|---|---|---|
| 7 | Encryption/Decryption stepper | 4 steps: plaintext → key → ciphertext → decrypt |
| 16 | RSA key-generation stepper | 5 steps ตาม source |
| 20 | Authentication protocol tabs | ap1.0–ap5.0 พร้อม failure/success |
| 25 | Internet checksum collision demo | เปรียบเทียบสองข้อความที่ checksum เท่ากัน |
| 31 | TLS 1.3 handshake stepper | Client Hello → Server Hello + Certificate → Verify → Records |
| 33 | Attack taxonomy tabs | 5 attacks + goal + defense |

互動ทั้งหมดใช้ข้อมูลจาก `window.DATA.ch9` และฟังก์ชันใหม่ใน `app.js` ไม่แตะ logic ของ F1–F4

---

## 6. ไฟล์ที่ต้องแก้

### สร้างใหม่
- `final-ch8-security.html`
- `content-map-f5.md`
- `PLAN-F5.md` (ไฟล์นี้)

### แก้ไข
- `data.js` — เพิ่ม `window.DATA.ch9`
- `app.js` — `CHS[9]`, state, menu, renderers, events, init, print, completion
- `index.html` — เปิดการ์ด F5, สถิติ 262 สไลด์ / 09 บท, track subtitle, footer
- `FINAL-TRACK.md` — เพิ่ม F5 ใน mapping/status

### ไม่แตะ
- M1–M4
- F1–F4
- `final-test.html` (ยังเป็น F1 20 ข้อตามเดิม เว้นแต่จะสั่งเพิ่ม)

---

## 7. app.js patch checklist

- [ ] เพิ่ม `CHS[9]` metadata: `D.ch9`, code `F5`, bookChapter 8, file `final-ch8-security.html`
- [ ] เพิ่ม `quiz9` และ `exam9` ใน `state`
- [ ] เปลี่ยน menu loop จาก `[1..8]` เป็น `[1..9]`
- [ ] เปลี่ยน `doneChapters / 8` เป็น `/ 9`
- [ ] เพิ่ม `doneQuizLen` สำหรับ chapter 9
- [ ] เพิ่ม restart logic ของ quiz9
- [ ] เพิ่ม event `startBtn9`
- [ ] เพิ่ม event สำหรับ interaction ทั้ง 6 จุด
- [ ] เพิ่ม flashcard9 / glossary9 events
- [ ] เพิ่ม render functions: `renderEnc9`, `renderRsa9`, `renderAuth9`, `renderHash9`, `renderTls9`, `renderAttack9`, `renderCheat9`
- [ ] เพิ่ม `quiz9Score`, `renderQuiz9`, `bindQuiz9Nav`, `renderQuiz9Result`
- [ ] เพิ่ม `fc9*`, `renderGlossary9`
- [ ] เพิ่ม `else if (PCH === 9)` ใน `init()`
- [ ] ตรวจ print rules ให้ F5 42 หน้า / cards 3 หน้า

---

## 8. index.html checklist

- [ ] เปลี่ยน F5 card จาก `locked` → `unlocked`
- [ ] เอา `aria-disabled="true"` ออก
- [ ] เปลี่ยน `clock / เร็ว ๆ นี้` เป็น `42 สไลด์`
- [ ] เพิ่ม `data-slides="9"` และ `ch9Pct`
- [ ] เปลี่ยน `Quiz 12 + Exam 20`
- [ ] เปลี่ยน `ch-status` เป็น `เริ่มเรียน`
- [ ] เปลี่ยน stat `220` → `262`
- [ ] เปลี่ยน stat `08` → `09`
- [ ] เปลี่ยน track subtitle `F1–F5 · ... F1–F4 เปิดเรียนแล้ว` → `F1–F5 เปิดเรียนแล้ว`
- [ ] เปลี่ยน footer `M1-M4 + F1-F4` → `M1-M4 + F1-F5`

---

## 9. Content rules

- ใช้ source PDF เท่านั้น
- คำศัพท์เทคนิคคงภาษาอังกฤษตาม source
- ภาษาไทยใช้เพื่ออธิบาย/แปล ไม่เพิ่มข้อเท็จจริงใหม่
- ตัวเลขที่ต้องคงตาม source:
  - DES 56-bit key / 64-bit plaintext
  - AES 128-bit blocks / 128, 192, 256-bit keys
  - AES brute force 149 trillion years (เทียบ DES 1 วินาที)
  - RSA example p=5, q=7, n=35, z=24, e=5, d=29, m=12, c=17
  - DES เร็วกว่า RSA อย่างน้อย 100 เท่า
  - MD5 128-bit, SHA-1 160-bit
  - TLS 1.3: 5 cipher suites vs 37 ใน TLS 1.2
- หัวข้อเสริมใน source ที่ไม่ใช่เนื้อหาหลัก: IPsec, Wi-Fi/5G security, secure e-mail — ใส่ได้เฉพาะเป็น defense map/หมายเหตุสั้น ๆ ไม่ให้กินพื้นที่ 7 หัวข้อหลัก

---

## 10. Testing checklist

- [ ] `node --check data.js`
- [ ] เปิด `final-ch8-security.html` ตรง ๆ
- [ ] sidebar 42 รายการ + section ถูกต้อง
- [ ] startBtn9 ไปสไลด์ 2
- [ ] interactives ทั้ง 6 จุดทำงาน
- [ ] Quiz 12 ข้อ + retry + best score
- [ ] Exam 20 ข้อ + lock/unlock
- [ ] Flashcards 12 ใบ + shuffle
- [ ] Glossary 36 คำ + search
- [ ] Completion overlay แสดง 42 สไลด์
- [ ] Print slides = 42 หน้า
- [ ] Print cards = 3 หน้า
- [ ] Responsive 1440×900 และ mobile
- [ ] Regression M1–M4 / F1–F4
- [ ] index stats = 262 / 09 / 09
- [ ] F5 card เปิดได้

---

## 11. Commit & push plan

Working directory หลักไม่มี `.git`; ใช้ clone ที่:
`C:\Users\PC\AppData\Local\Temp\opencode\NetworkByNorawit-remote`

ขั้นตอน:
1. copy ไฟล์ที่แก้ไปยัง clone
2. `git add ...`
3. commit message:
   `feat: add Final Track F5 Security`
4. `git push origin main`
5. ตรวจ `git ls-remote` ว่า `main` ชี้ commit ใหม่

---

## 12. งานที่ทำไปแล้ว (ก่อนหยุด)

- อ่าน source PDF ครบ 123 หน้า และ extract เป็น `C:\Users\PC\AppData\Local\Temp\opencode\ch8-security.txt`
- วางโครง 42 สไลด์ + sections + interactive + quiz/exam/flashcards/glossary
- ร่าง data generator ไว้ที่ `C:\Users\PC\AppData\Local\Temp\opencode\build-f5-data.js`
  - มี `ch9` ครบ 42 slides, quiz 12, exam 20, cheat 25, flashcards 12, glossary 36
  - **ยังไม่ได้รันเพื่อ append เข้า `data.js`**
- ยังไม่มีการแก้ `data.js`, `app.js`, `index.html` หรือสร้าง `final-ch8-security.html`

---

## 13. จุดเริ่มต้นเมื่อกลับมาทำต่อ

1. เปิด `C:\Users\PC\AppData\Local\Temp\opencode\build-f5-data.js`
2. ตรวจ/แก้เนื้อหาให้ตรง source อีกรอบ
3. รัน:
   ```powershell
   node C:\Users\PC\AppData\Local\Temp\opencode\build-f5-data.js
   node --check data.js
   ```
4. สร้าง `build-f5-html.js` โดยอิงโครง `final-ch7-wireless.html`
5. สร้าง `final-ch8-security.html` 42 สไลด์
6. Patch `app.js` ตาม checklist ข้อ 7
7. Patch `index.html` ตาม checklist ข้อ 8
8. ทดสอบตามข้อ 10
9. Commit & push ตามข้อ 11
