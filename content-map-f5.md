# CONTENT MAP — F5 · Security

> Source: `C:\Users\PC\Downloads\Chapter_8_v9.0_Security.pdf` (123 หน้า)
> Rule: ข้อเท็จจริง/ตัวเลข/ตัวอย่างจาก source เท่านั้น; ภาษาไทยเป็นการอธิบาย/แปล
> Web module: F5 (internal ID 9) · Book Chapter 8 · 42 slides · `window.DATA.ch9`

## A. Slide-by-slide mapping

| Web # | Web title | Source PDF pages | Core content (source) |
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

## B. Interactive elements

| Slide | Element | Data | Render function |
|---|---|---|---|
| 7 | Encryption/Decryption stepper | `ch9.encSteps` | `renderEnc9` / `selectEnc9` |
| 16 | RSA key-generation stepper | `ch9.rsaSteps` | `renderRsa9` / `selectRsa9` |
| 20 | Authentication ap1.0–ap5.0 tabs | `ch9.authTabs` | `renderAuth9` / `selectAuth9` |
| 25 | Internet checksum collision demo | `ch9.hashDemo` | `selectHash9` |
| 31 | TLS 1.3 handshake stepper | `ch9.tlsSteps` | `renderTls9` / `selectTls9` |
| 33 | Attack taxonomy tabs | `ch9.attacks` | `renderAttack9` / `selectAttack9` |

## C. Review content

Quiz 12 · Exam 20 · Cheat 25 · Flashcards 12 · Glossary 36

## D. Key figures kept from source

- DES: 56-bit key / 64-bit plaintext; AES: 128-bit blocks, 128/192/256-bit keys
- RSA example: p=5, q=7, n=35, z=24, e=5, d=29, m=12 → c=17 → m=12 (12^5 = 248832; 248832 mod 35 = 17)
- DES เร็วกว่า RSA อย่างน้อย 100 เท่า; MD5 128-bit, SHA-1 160-bit
- TLS 1.3: 5 cipher suites (เทียบ 37 ใน TLS 1.2)
