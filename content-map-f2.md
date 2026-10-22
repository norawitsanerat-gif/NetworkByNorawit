# CONTENT MAP — F2 · Network Layer: Control Plane

> Source: `C:\Users\PC\Downloads\Chapter 5 Network Layer_ Control Plane.md`
> Rule: ข้อเท็จจริง/ตัวเลข/ตัวอย่างจาก source เท่านั้น; ภาษาไทยเป็นการอธิบาย/แปล
> Web module: F2 (internal ID 6) · Book Chapter 5 · 31 slides

## A. Slide-by-slide mapping

| Web # | Web title | Source lines | Core content (source) |
|---|---|---|---|
| 1 | Cover — F2 / Book Ch.5 | 1–3 | Chapter 5 Network Layer – Control Plane; Kurose & Ross 9th ed. |
| 2 | บทนี้จะเรียนอะไร | 7–330 | 5 หัวข้อ: Control Plane, Routing/Forwarding, LS/DV, Dijkstra/Bellman-Ford, Protocols/AS; หมายเหตุ ICMP/SNMP อยู่นอกขอบเขต |
| 3 | Control Plane คืออะไร | 9–16 | Data plane = forwarding (per-packet, เร็วมาก); Control plane = routing (คำนวณนานกว่า, เติม forwarding table) |
| 4 | Routing vs Forwarding | 13–16, 46–48 | Forwarding local/per-packet; Routing network-wide; path คือลำดับ router; “ดี” = cost ต่ำ/เร็ว/คับคั่งน้อย; top-10 networking challenge |
| 5 | Per-router Control | 18–21 | router ทุกตัวมี routing algorithm ของตัวเองและคุยกันเอง |
| 6 | SDN Control Plane | 21–33 | logically centralized controller; control agent (CA); northbound/southbound API; เหตุผลที่ SDN น่าสนใจ |
| 7 | SDN เมื่อ Link ล่ม | 35–42 | port-status → update link → Dijkstra → คำนวณเส้นทาง → flow table → ติดตั้ง table ผ่าน OpenFlow |
| 8 | Graph Abstraction | 50–57 | G=(N,E); N=router, E=link; c(a,b); c(u,z)=∞ แต่ยังไปได้ผ่าน u→x→y→z; cost กำหนดได้หลายแบบ |
| 9 | จำแนก Routing Algorithm | 59–69 | Global/Link-State; Decentralized/Distance-Vector; Static/Dynamic |
| 10 | Link-State (LS) | 75–78 | ทุก node รู้ topology ผ่าน link-state broadcast; แต่ละ router รัน Dijkstra |
| 11 | Distance-Vector (DV) | 80–85 | DV ส่งให้เพื่อนบ้าน; Bellman-Ford; iterative, asynchronous, distributed, self-stopping |
| 12 | LS vs DV | 87–93 | message complexity; convergence/oscillation/routing loop/count-to-infinity; robustness |
| 13 | Dijkstra Algorithm | 99–127 | c(x,y), D(v), p(v), N'; initialization/loop; เลือก D ต่ำสุด → เพิ่ม N' → update เพื่อนบ้าน |
| 14 | Dijkstra ตัวอย่าง | 129–143 | ตาราง Step/N'/D(v),p(v)…D(z),p(z) ตั้งแต่ step 0 ถึง 5 |
| 15 | Dijkstra ผลลัพธ์และข้อจำกัด | 145–158 | least-cost-path tree; forwarding table u; tie; O(n²), O(n log n); oscillation |
| 16 | Bellman-Ford Equation | 160–178 | D_x(y)=min_v{c(x,v)+D_v(y)}; ตัวอย่าง D_u(z)=min{2+5,1+3,5+3}=4; next hop x |
| 17 | DV Update & Convergence | 180–188 | grid a–i; t=0 รู้เพื่อนบ้าน; c→b t=1, a/e t=2, d/f/h t=3, g/i t=4 |
| 18 | Count-to-Infinity | 190–197 | good news เร็ว; bad news ช้า; x–y 60, z=5→y=6→z=7→…; “Distributed algorithms are tricky!” |
| 19 | Autonomous System (AS) | 203–217 | Scale + administrative autonomy; AS/domain; Intra-AS/Inter-AS; gateway; forwarding table จากทั้งสองส่วน |
| 20 | Intra-AS Protocols | 219–225 | RIP DV 30 วินาที; EIGRP DV (Cisco → มาตรฐาน 2013); OSPF link-state; IS-IS ใกล้เคียง |
| 21 | OSPF | 227–242 | open, link-state, flood LSA ตรงบน IP, metric bandwidth/delay, Dijkstra, authentication; hierarchical 2 ระดับ; router types |
| 22 | BGP Basics | 244–259 | inter-domain; eBGP/iBGP; TCP กึ่งถาวร; path vector; AS3 ประกาศ “AS3, X”; gateway รันทั้ง eBGP/iBGP |
| 23 | BGP Messages & Attributes | 261–273 | OPEN, UPDATE, KEEPALIVE, NOTIFICATION; route = prefix + attributes; AS-PATH, NEXT-HOP |
| 24 | BGP Policy & Route Selection | 275–304 | import/export policy; ตัวอย่างธุรกิจ; hot potato; local pref → AS-PATH → NEXT-HOP → อื่น ๆ |
| 25 | Intra-AS vs Inter-AS | 306–312 | Policy/Scale/Performance; inter-AS policy สำคัญ; intra-AS เน้น performance |
| 26 | สรุปบทเรียน | 322–330 | จุดที่ควรจำ: LS↔Dijkstra, DV↔Bellman-Ford, count-to-infinity vs oscillation, OSPF, BGP, eBGP/iBGP, BGP selection |
| 27 | สูตรจำก่อนสอบ — F2 | 322–330 | สรุปสูตรและจุดสอบ |
| 28 | แบบทดสอบ F2 12 ข้อ | ทั้งไฟล์ | Quiz 12 ข้อ ครอบคลุม 5 หัวข้อ |
| 29 | การ์ดทบทวน — F2 | ทั้งไฟล์ | Flashcards 12 ใบ |
| 30 | คำศัพท์ — F2 | ทั้งไฟล์ | Glossary 36 คำ |
| 31 | ข้อสอบหลังเรียน 20 ข้อ | ทั้งไฟล์ | Exam 20 ข้อ |

## B. Scope note

- เนื้อหาหลักยึด 5 หัวข้อที่ผู้ใช้กำหนด
- ICMP, SNMP และ NETCONF/YANG อยู่ใน source บรรทัด 316–318 แต่ไม่นำมาเป็นเนื้อหาหลักของ F2
- ไม่มีการเพิ่มข้อเท็จจริง ตัวเลข หรือตัวอย่างจากภายนอก source

## C. Storage keys

| ข้อมูล | Key |
|---|---|
| ความคืบหน้า | `cn_completed_6` |
| สไลด์ล่าสุด | `cn_current_6` |
| Quiz | `cn_quiz6` |
| Exam | `cn_exam6` |
| Best score | `cn_best_6` |
