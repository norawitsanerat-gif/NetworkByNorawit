# CONTENT MAP — F3 · The Link Layer and LANs

> Source: `C:\Users\PC\Downloads\md\Chapter 6 The Link Layer and LANs.md`
> Rule: ข้อเท็จจริง/ตัวเลข/ตัวอย่างจาก source เท่านั้น; ภาษาไทยเป็นการอธิบาย/แปล
> Web module: F3 (internal ID 7) · Book Chapter 6 · 40 slides

## A. Slide-by-slide mapping

| Web # | Web title | Source lines | Core content (source) |
|---|---|---|---|
| 1 | Cover — F3: The Link Layer and LANs | 1–3 | Chapter 6 The Link Layer and LANs; ขอบเขต 6 หัวข้อหลัก |
| 2 | บทนี้จะเรียนอะไร | 9–21, 23–378, 668–1145, 1269–1373 | แผนเรียน 4 กลุ่ม: Link/Error, Multiple Access, Ethernet/MAC/ARP, Switch/VLAN; ระบุว่าหัวข้อ 8 เป็นเนื้อหาเสริม |
| 3 | Link Layer ทำงานอะไร | 23–45, 83–112 | node/link/frame/NIC; encapsulation ของ datagram; NIC ต่อ system bus; sending/receiving side |
| 4 | บริการของ Link Layer | 57–67 | framing/link access, reliable delivery, flow control, error detection, error correction, half/full duplex |
| 5 | Link-level vs End-to-End Reliability | 68–82 | เหตุผลที่ทำ reliable delivery บาง link; wireless error สูง; ต้นทุน/ทางเลือกเมื่อเทียบ end-to-end |
| 6 | Error Detection Model | 113–142, 155–164 | D + EDC; noisy link; detection vs correction; EDC ใหญ่ขึ้น; Hamming distance |
| 7 | วิธีตรวจและแก้ Error | 143–164 | parity, 2D parity, internet checksum, CRC, FEC; ข้อดี/ข้อจำกัดและการใช้งาน |
| 8 | Single-Bit Parity | 195–220 | even parity ตัวอย่าง 0111000110101011; ฝั่งรับ; ตรวจ error จำนวนคี่; error คู่หลุด; แก้ไม่ได้ |
| 9 | Two-Dimensional Parity | 221–262 | row/column parity; ตัวอย่าง r2 c3; single-bit correction; rectangle 4 บิตตรวจไม่พบ |
| 10 | CRC Concept | 263–309 | D, G (r+1 บิต), R (r บิต); D·2^r; mod 2 = XOR; ฝั่งส่ง/รับ; CRC เป็น detection |
| 11 | CRC Worked Example | 310–357 | D=101110, G=1001, D·2^3=101110000; ทีละบิต; R=011; ส่ง 101110011; ตรวจเศษ 000 |
| 12 | CRC Properties & Checksum | 358–377, 165–194 | single-bit, burst ≤ r, odd-bit เมื่อ G มี (x+1); CRC-32 ประมาณ 2^-32; CRC vs internet checksum |
| 13 | Link Types & Shared Channel | 378–396 | point-to-point vs broadcast; shared channel interference/collision; distributed algorithm; ไม่มี out-of-band channel |
| 14 | Ideal MAC & Taxonomy | 397–413 | ideal: R เดี่ยว, R/M เมื่อ M node, decentralized, simple; 3 ตระกูลและข้อดี/ข้อเสีย |
| 15 | Channel Partitioning | 414–446 | TDMA slot/round; FDMA band; CDMA code; 6-station ตัวอย่าง slot ว่าง; ข้อดี/ข้อเสีย |
| 16 | Slotted & Pure ALOHA | 447–540 | slotted ต้อง sync, p=1/N, max 1/e≈0.37; pure vulnerable 2 frame times, max 1/(2e)≈0.18; ตาราง N |
| 17 | CSMA & CSMA/CD | 541–564 | listen before transmit; propagation delay ยังทำให้ชน; CSMA/CD abort; wired vs wireless; Wi-Fi ใช้ CSMA/CA |
| 18 | Ethernet CSMA/CD & Backoff | 565–600 | ลำดับ 1–5; binary exponential backoff m; K∈0..2^m−1; รอ K×512 bit times; efficiency; ลองใหม่ 16 ครั้ง |
| 19 | Taking Turns & Cable Access | 601–667 | polling/token; overhead/latency/point of failure; HFC upstream/downstream; DOCSIS MAP/backoff; hybrid |
| 20 | Ethernet Basics, Topology & Standards | 668–688, 724–740 | dominant wired LAN; 10 Mbps → 400 Gbps; bus vs switched; collision domain; 1000BASE media |
| 21 | Ethernet Frame Structure | 689–714 | Preamble 8 B, Dest/Src MAC 6 B, Type 2 B, Data 46–1500 B, CRC 4 B; 64/1518/1522 B; slot time 512 |
| 22 | Ethernet: Unreliable & Connectionless | 715–723, 565–600 | ไม่มี handshaking; ไม่มี ACK/NAK; กู้คืนด้วย TCP; MAC protocol unslotted CSMA/CD + binary backoff |
| 23 | MAC Address | 741–779 | 48 บิต; NIC ROM; hex; OUI/IEEE; flat/portable; broadcast FF-FF-FF-FF-FF-FF; multicast bit |
| 24 | MAC vs IP Address | 780–791 | layer 2 vs 3; 48 vs 32 บิต; local vs end-to-end; IEEE/ผู้ผลิต vs DHCP/ผู้ดูแล; switch vs router; analogy |
| 25 | ARP: Concept & Table | 792–806 | ARP table <IP; MAC; TTL>; TTL ประมาณ 20 นาที/ตัวอย่าง 500 วินาที; plug-and-play; ไม่มี authentication/spoofing |
| 26 | ARP in Action | 807–853 | A 137.196.7.23 / B 137.196.7.14; query broadcast FF-FF-FF-FF-FF-FF; reply unicast; MAC ของทั้งสอง |
| 27 | Routing to Another Subnet | 854–911 | A 111.111.111.111 ไป B 222.222.222.222 ผ่าน R; ARP หา gateway; datagram ขึ้น IP ที่ R; MAC เปลี่ยนทุก hop, IP คงที่ |
| 28 | Switch Basics & Simultaneous Transmissions | 912–945 | store-and-forward; ดู MAC; transparent; plug-and-play/self-learning; 6 พอร์ต A/A', B/B', C/C'; full duplex/collision domain |
| 29 | Switch Table & Self-Learning | 946–1016 | switch table <MAC, interface, timestamp>; เรียนรู้ source MAC; aging 60 วินาที; filter/forward/flood; loop/STP |
| 30 | Switch Learning Simulation | 990–1006 | ตัวอย่าง A→A', A'→A, B→B', B'→B; ตารางเรียนรู้ทีละขั้น; flood/forward/filter |
| 31 | Switch vs Router | 1017–1031 | layer 2 vs 3; frame vs datagram; MAC vs IP; self-learning vs routing algorithm; collision/broadcast domain; ราคา/ความเร็ว |
| 32 | VLAN Motivation & Port-Based VLAN | 1032–1072 | single broadcast domain; administrative move; port-based EE 1–8, CS 9–15; traffic isolation; MAC-based; inter-VLAN routing |
| 33 | VLAN Trunk & 802.1Q | 1073–1106 | trunk หลาย VLAN; tag หลัง source MAC; TPID 0x8100; TCI: VID 12 บิต 1–4094, priority 3, DEI 1; CRC ใหม่; 1522 B |
| 34 | Access Port, Benefits & EVPN | 1107–1145 | access vs trunk; benefits/limits; inter-VLAN ต้อง routing; EVPN/VXLAN, VTEP, UDP, RFC 7348 |
| 35 | สรุปบทเรียน | 1269–1373 | formula sheet, ตารางเปรียบเทียบ, จุดที่มักเข้าใจผิด, คำถามทบทวน, สรุปหนึ่งหน้า |
| 36 | สูตรจำก่อนสอบ — F3 | ทั้งไฟล์ | Cheat Sheet 25 รายการจาก 6 หัวข้อ |
| 37 | แบบทดสอบ F3 12 ข้อ | ทั้งไฟล์ | Quiz 12 ข้อ ครอบคลุม 6 หัวข้อ |
| 38 | การ์ดทบทวน — F3 | ทั้งไฟล์ | Flashcards 12 ใบ |
| 39 | คำศัพท์ — F3 | ทั้งไฟล์ | Glossary 36 คำ |
| 40 | ข้อสอบหลังเรียน — 20 ข้อ | ทั้งไฟล์ | Exam 20 ข้อ |

## B. Scope note

- เนื้อหาหลักยึด 6 หัวข้อที่ผู้ใช้กำหนด:
  1. Link Layer services
  2. Error Detection/Correction
  3. Parity & CRC
  4. Multiple Access Protocols
  5. Ethernet/MAC/ARP
  6. Switches/MAC Learning/VLANs
- Section 8 (MPLS, Datacenter Networks, A Day in the Life of a Web Request) อยู่ใน source บรรทัด 1146–1268 แต่ไม่นำมาเป็นเนื้อหาหลักของ F3
- ไม่มีการเพิ่มข้อเท็จจริง ตัวเลข หรือตัวอย่างจากภายนอก source

## C. Interactive elements

| Slide | Element | แหล่งข้อมูล |
|---|---|---|
| 9 | 2D parity grid + single-bit/rectangle/reset | source 3.2 |
| 11 | CRC step table | source 4.4 |
| 18 | Binary backoff selector m = 1–4, >10 | source 5.13 |
| 21 | Ethernet frame field tabs | source 6.3 |
| 26 | ARP step-through | source 6.9 |
| 30 | Switch self-learning simulation | source 7.6 |

## D. Storage keys

| ข้อมูล | Key |
|---|---|
| ความคืบหน้า | `cn_completed_7` |
| สไลด์ล่าสุด | `cn_current_7` |
| Quiz | `cn_quiz7` |
| Exam | `cn_exam7` |
| Best score | `cn_best_7` |
