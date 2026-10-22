# CONTENT MAP — F1 · Network Layer: Data Plane

> Source: `Chapter_4_v9.0_Network_Layer_Data_Plane.pptx` (Kurose & Ross, Chapter 4 v9.0)
> Rule: ข้อเท็จจริง/ตัวเลข/ตัวอย่างจาก PPTX เท่านั้น; ภาษาไทยเป็นการอธิบาย/แปล
> Web module: F1 (internal ID 5) · Book Chapter 4 · 27 slides

## A. Slide-by-slide mapping

| Web # | Web title | PPTX slides | Core content (source) |
|---|---|---|---|
| 1 | Cover — F1 / Book Ch.4 | 1–3 | Chapter 4 Network Layer: Data Plane; goals; roadmap |
| 2 | บทนี้จะเรียนอะไร | 2–3 | goals: service models, forwarding vs routing, how a router works, addressing, generalized forwarding, Internet architecture; IP protocol, NAT, middleboxes (หมายเหตุ: บทนี้เน้น 6 หัวข้อ) |
| 3 | Network-layer services & protocols | 4 | transport segment sender→receiver; sender encapsulates segments into datagrams; receiver delivers segments to transport; protocols in every host/router; routers examine header fields, move datagrams input→output |
| 4 | Forwarding vs Routing | 5 | forwarding: move packets from input link to appropriate output link; routing: determine route taken by packets source→destination; routing algorithms; analogy: single interchange vs planning trip |
| 5 | Data Plane vs Control Plane | 6 | data plane: local, per-router function; determines how datagram arriving on input port is forwarded to output port; control plane: network-wide logic; determines how datagram is routed among routers along end-end path; two approaches: traditional routing algorithms in routers / SDN in remote servers |
| 6 | Per-router vs SDN | 7–8 | per-router: individual routing algorithm components in each router interact in control plane; SDN: remote controller computes, installs forwarding tables in routers |
| 7 | Service model & best-effort | 9–12 | example services per datagram / per flow; QoS guarantees table; Internet best effort: no guarantees on successful delivery, timing/order, bandwidth; simplicity → widespread adoption; over-provisioning; replicated app-layer services; congestion control of elastic services |
| 8 | Router architecture overview | 14 | high-speed switching fabric; routing processor; input/output ports; data plane hardware ns; control plane software ms |
| 9 | Input port functions | 15–16 | line termination (physical: bit-level reception); link layer protocol (e.g., Ethernet); lookup/forwarding/queueing; decentralized switching using header field values + forwarding table in input port memory ("match plus action"); goal line speed; input queuing if arrival > forwarding rate; destination-based vs generalized forwarding |
| 10 | Forwarding table & destination-based forwarding | 17 | destination-based forwarding: forward based only on destination IP address; forwarding entries can overlap; Q: what if ranges don't divide nicely? |
| 11 | Longest prefix matching — หลักการ | 18, 22 | use longest address prefix that matches destination; TCAM: present address → retrieve in one clock cycle regardless of table size; Cisco Catalyst ~1M entries |
| 12 | Longest prefix matching — ตัวอย่าง | 18–21 | table: 11001000 00010111 00010*** ******** → 0; 11001000 00010111 00011000 ******** → 1; 11001000 00010111 00011*** ******** → 2; otherwise → 3; examples: ...00011000 10101010 → 1; ...00010110 10100001 → 0 |
| 13 | Switching fabrics | 23–28 | transfer packet input→output; switching rate N× line rate desirable; memory (first gen, 2 bus crossings, memory bandwidth limit); bus (shared, bus contention, 32 Gbps Cisco 5600); interconnection network (crossbar, Clos, multistage, fixed-length cells, parallelism); Cisco CRS 8 planes, 3-stage, 100s Tbps |
| 14 | Input port queuing & HOL | 29 | if fabric slower than input ports → queueing at input; delay/loss due to buffer overflow; output port contention; HOL blocking: queued datagram at front prevents others moving forward |
| 15 | Output port queuing / buffer / scheduling | 30–37 | buffering when arrival via fabric > link transmission rate; drop policy; scheduling discipline; datagrams lost due to congestion/lack of buffers; RFC 3439 RTT×C (250 ms, 10 Gbps → 2.5 Gbit); N flows → RTT×C/√N; too much buffering increases delay; buffer management: tail drop, priority, marking ECN/RED; scheduling: FCFS/FIFO, priority, RR, WFQ (weight wi, minimum bandwidth guarantee) |
| 16 | IP datagram format | 43 | ver, header length, type of service (diffserv 0:5, ECN 6:7), total length, 16-bit identifier, flags, fragment offset, TTL, upper layer protocol, header checksum, source/dest IP, options, payload; 20 bytes TCP + 20 bytes IP = 40 bytes overhead; max 64K, typically 1500 |
| 17 | IP addressing introduction | 44–46 | 32-bit identifier associated with each host/router interface; interface = connection between host/router and physical link; router multiple interfaces; host one or two; dotted-decimal; 223.1.1.1 = 11011111 00000001 00000001 00000001 |
| 18 | Subnets & subnet mask | 47–49 | subnet: device interfaces that can physically reach each other without intervening router; subnet part = common high-order bits; host part = remaining low-order bits; recipe: detach each interface → isolated networks; /24 = high-order 24 bits subnet part; 223.1.1.0/24, 223.1.2.0/24, 223.1.3.0/24 |
| 19 | CIDR | 50 | Classless InterDomain Routing ("cider"); subnet portion of arbitrary length; a.b.c.d/x where x = # bits in subnet portion; 200.23.16.0/23 = 11001000 00010111 00010000 00000000; subnet part / host part |
| 20 | DHCP | 51–57 | host gets IP: hard-coded or DHCP; DHCP goal: dynamically obtain address when joining, renew lease, reuse addresses, mobile users; overview: discover (optional) → offer (optional) → request → ack; more than IP: first-hop router, DNS server name/IP, network mask; example: 223.1.2.5 server, client 223.1.2.4, ports 67/68, transaction ID 654/655, lifetime 3600; encapsulation UDP/IP/Ethernet; broadcast FFFFFFFFFFFF |
| 21 | Hierarchical addressing & route aggregation | 58–62 | network gets subnet part from provider ISP's address space; ISP block 200.23.16.0/20; allocate 8 blocks /23 (200.23.16.0/23 … 200.23.30.0/23); route aggregation: "send me anything beginning 200.23.16.0/20"; more specific route 200.23.18.0/23; ICANN + 5 regional registries; last IPv4 chunk 2011; IPv6 128-bit |
| 22 | Chapter Summary | 98 + all | summary of data plane; forwarding table/flow table computed by control plane (next chapter) |
| 23 | Exam Cheat Sheet | all | key numbers and comparisons |
| 24 | Quiz 12 ข้อ | all | 12 questions |
| 25 | Flashcards 12 ใบ | all | 12 cards |
| 26 | Glossary | all | ~30 terms |
| 27 | Exam 20 ข้อ | all | 20 questions |

## B. Interactive widgets

| Widget | Web slide | Source | Behavior |
|---|---|---|---|
| Data/Control plane toggle | 5 | PPTX 6 | สลับมุมมอง local vs network-wide |
| Per-router/SDN toggle | 6 | PPTX 7–8 | แสดงผู้คำนวณ forwarding table |
| Router pipeline | 8–9 | PPTX 14–15 | ไฮไลต์ input → fabric → output |
| LPM simulator | 11–12 | PPTX 18–22 | เลือก example → ไฮไลต์ prefix ที่ match และผู้ชนะ longest |
| Switching fabric tabs | 13 | PPTX 24–28 | memory / bus / interconnection |
| HOL animation | 14 | PPTX 29 | แพ็กเก็ตหัวคิวบล็อกคิว |
| Buffer/scheduling tabs | 15 | PPTX 30–37 | FCFS / priority / RR / WFQ |
| Binary/decimal viewer | 17 | PPTX 44 | แสดง 223.1.1.1 เป็น 4 octet + binary |
| Subnet high/low split | 18 | PPTX 47–49 | ไฮไลต์ subnet part 24 บิต |
| CIDR split | 19 | PPTX 50 | ไฮไลต์ 23 บิต subnet / 9 บิต host |
| DHCP player | 20 | PPTX 52–54 | DISCOVER → OFFER → REQUEST → ACK |
| Route aggregation view | 21 | PPTX 59 | /20 ครอบ /23 หลายบล็อก |

## C. Assessment blueprint

### Quiz 12
1. Network layer ส่งอะไรจาก sender ถึง receiver
2. Forwarding คืออะไร
3. Routing คืออะไร
4. Data plane vs control plane
5. SDN control plane ต่างจาก per-router อย่างไร
6. Internet service model
7. Input port ใช้ forwarding table ที่ไหน
8. Longest prefix matching คืออะไร
9. ตัวอย่าง LPM ตัวแรก → interface ใด
10. Switching via memory ถูกจำกัดด้วยอะไร
11. HOL blocking คืออะไร
12. IP address คืออะไร / 32-bit ต่อ interface

### Exam 20
ครอบคลุม: services, forwarding/routing, planes, SDN, best-effort, router components, input port, forwarding table, LPM 2 examples, TCAM, switching fabrics, HOL, output queuing, buffer rule, scheduling, IP datagram, IP address, subnet, CIDR, DHCP

## D. Scope guard

- **รวม:** 6 หัวข้อที่อาจารย์กำหนด
- **ไม่รวม:** NAT (64–68), IPv6 (69–76), Generalized Forwarding/OpenFlow (78–87), Middleboxes (88–90), End-end argument (92–97)
- หากต้องการเพิ่มภายหลัง ให้เพิ่มเป็น "สไลด์เสริม" และระบุที่มาแยก
