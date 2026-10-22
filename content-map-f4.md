# CONTENT MAP — F4 · Wireless and Mobile Networks

> Source: `C:\Users\PC\Downloads\md\Chapter 7 Wireless and Mobile Networks.md`
> Rule: ข้อเท็จจริง/ตัวเลข/ตัวอย่างจาก source เท่านั้น; ภาษาไทยเป็นการอธิบาย/แปล
> Web module: F4 (internal ID 8) · Book Chapter 7 · 42 slides

## A. Slide-by-slide mapping

| Web # | Web title | Source lines | Core content (source) |
|---|---|---|---|
| 1 | Cover — F4: Wireless and Mobile Networks | 1–21 | Chapter 7; ขอบเขต 6 หัวข้อหลัก; ภาพรวม UE → radio → base station → core |
| 2 | บทนี้จะเรียนอะไร | 22–1251 | แผนเรียน 6 กลุ่ม: Wireless, Radio/Channel, 802.11, Access/Association, MIMO, Mobility; ระบุว่าหัวข้อ 7 เป็นหัวข้อเสริม |
| 3 | ทำไม Wireless ถึงสำคัญ | 24–34 | cellular มากกว่า fixed broadband ~5:1 (2019); ~80% ของบ้านใช้ Wi-Fi; ~60% ของ traffic เว็บใหญ่ไปมือถือ |
| 4 | องค์ประกอบหลัก 4 อย่าง | 36–57 | wireless hosts, base station, wireless link, wireless device radio; ตัวอย่าง AP/eNodeB/gNodeB และ link ชนิดต่าง ๆ |
| 5 | Infrastructure vs Ad Hoc | 59–66 | infrastructure มี base station/AP; ad hoc ไม่มีอุปกรณ์กลาง; Bluetooth piconet/VANET/sensor |
| 6 | Wireless ≠ Mobility | 68–80 | wireless อาจอยู่นิ่ง; mobile อาจไม่ใช้ wireless ตลอดเวลา; ตาราง 2×2 |
| 7 | Edge Network vs Core Network | 82–101 | Wi-Fi: AP + Wi-Fi link + institutional wired; 5G: RAN (UE/NR/gNodeB) + 5G Core |
| 8 | Applications & Requirements | 103–143 | 6 กลุ่ม application; mobility, data rate, energy efficiency, device density, latency, area traffic capacity; ตัวอย่าง IoT/video |
| 9 | Radio Wave & Spectrum | 149–191 | EM field จาก transmitter → space → receiver; wavelength/frequency/directionality/amplitude/phase; f = c/λ; digital modulation |
| 10 | dBm & Power | 193–221 | P_dBm = 10·log10(P_mW/1mW); 0 dBm = 1 mW; 3 dB ≈ 2 เท่า; 10 dB = 10 เท่า; 250 mW ≈ 24 dBm |
| 11 | PSD & Bandwidth | 223–254 | PSD; radio bandwidth vs link bandwidth; spectrum/channel/carrier; Wi-Fi channel 6 center ≈2.437 GHz, ≈22 MHz, 2.427–2.449 GHz |
| 12 | Interference & Noise | 256–285 | interference จาก transmitter อื่น; 2.4 GHz ISM unlicensed; thermal noise/electronic noise |
| 13 | SNR & Shannon Capacity | 287–340 | SNR(dB) = 10·log10(P_signal/P_noise); SNR 0 dB = signal เท่า noise; C = B·log2(1+S/N); B=20 MHz, SNR=20 dB → ≈133 Mbps |
| 14 | Path Loss & Hidden Terminal | 342–403 | path loss ∝ (f·d)^n; n=2 free space, 2.7–3.5 urban, 3–6 indoor; A/B/C hidden terminal; ACK/RTS/CTS; CSMA/CA |
| 15 | Multipath, Coherence & Fading | 405–460 | LOS/reflected paths; constructive/destructive; coherence time; ISI; equalizer/OFDM/MIMO; large-scale/shadow/small-scale fading/Doppler |
| 16 | Modulation & Adaptive Modulation | 462–492 | ASK/BPSK/QPSK/16-QAM/64-QAM; constellation; adaptive modulation; 16-QAM 11.5 Mbps, 64-QAM 26.9 Mbps |
| 17 | 802.11 Architecture | 509–548 | 802.11 เป็น link layer; STA/AP/BSS/BSSID/SSID/DS/ESS; infrastructure vs ad hoc (IBSS) |
| 18 | Wi-Fi Bands & Standards | 550–571 | 2.4/5/6 GHz; 802.11b/g/n/ac/ax/be table: year, max rate, band, bandwidth, PHY |
| 19 | CSMA/CA | 573–619 | เหตุผลที่ไม่ใช้ CSMA/CD; DIFS/SIFS; ACK หลัง SIFS; random backoff; backoff doubling; [0, ~200 msec] |
| 20 | Backoff & RTS/CTS | 613–653 | backoff หลังชน; RTS/CTS ขั้นตอน 1–5; node อื่น defer; ข้อดี/ข้อเสีย; RTS ยังชนได้ |
| 21 | 802.11 Frame Format | 655–688 | Frame Control 2 B, Duration 2 B, Address 1–3 6 B, Sequence Control 2 B, Address 4 6 B, Payload 0–2312 B, CRC 4 B; address mapping |
| 22 | Frame Types & OFDM/OFDMA | 690–735 | management/control/data; data plane/control plane; OFDM/OFDMA; RB 4G 84 RE; 5G 12×14; MU-RTS |
| 23 | 802.11 vs Ethernet | 737–768 | HTTP ผ่าน Wi-Fi; AP bridge; Wi-Fi CSMA/CA + ACK vs Ethernet CSMA/CD/full-duplex; frame 3–4 vs 2 addresses |
| 24 | Discovery: Beacon & Probe | 789–810 | beaconing/passive scanning vs probing/active scanning; tradeoff; ใช้ทั้งสองแบบในทางปฏิบัติ |
| 25 | Association & AP Selection | 812–843 | association sequence 1–7; association ยังไม่แลก identity/credentials; AP selection: RSSI, SSID, security, load, band, roaming |
| 26 | 5G RAN & Join | 845–892 | UE/NR/gNB; RAN link-layer first hop; Phase 1 Registration (AMF, AUSF, UDM); Phase 2 PDU Session (SMF, UPF, IP) |
| 27 | RAN Stack & Scheduling | 894–979 | RRC/SDAP/PDCP/RLC/MAC/PHY; RB ~1 ms; CQI 4 บิต; QCI; policies; energy 1000–3500 mW, <15 mW; DRX |
| 28 | MIMO Basics | 985–1000 | multiple antennas; 2×2/4×4; spatial resource; ไม่ได้เร็วขึ้น 2 เท่าเสมอ; Gigabit LTE 4×4, Wi-Fi 6 2×2 |
| 29 | Spatial Diversity | 1002–1035 | ส่งข้อมูลเดียวกันหลาย path; reliability/range/antenna gain; สมการ y1/y2; H time-varying; coherent combining |
| 30 | Spatial Multiplexing | 1037–1060 | ส่ง x1/x2 คนละ stream; เพิ่ม data rate; สองสมการสอง unknowns; channel estimation; correlation/SNR |
| 31 | MU-MIMO & Tradeoffs | 1062–1105 | MU-MIMO หลายผู้ใช้พร้อมกัน; beamforming; SU vs MU table; Wi-Fi 6/7, 5G; channel correlation/SNR/antenna/processing/size/energy |
| 32 | Mobility Spectrum | 1111–1125 | 5 ระดับ mobility; point of attachment; ongoing connection |
| 33 | Wi-Fi ESS Mobility | 1127–1154 | หลาย BSS ใน subnet เดียวกัน + SSID เดียวกัน + DS; fast re-auth; AP suggestion; ข้อจำกัดข้าม subnet/provider |
| 34 | 5G Handover | 1156–1188 | source/target BS; 7 ขั้น: Handover Request, HR ACK, แจ้ง mobile, forward data, แจ้ง AMF/SMF, SMF→UPF tunnel switch, data ผ่าน tunnel ใหม่ |
| 35 | Handover Timeline & Performance | 1190–1233 | measurement → decision → RRC reconfig → detach/attach → buffer/forward → path switch → PDU update → end marker → ACK → release; problems table |
| 36 | Wi-Fi vs 5G Mobility | 1235–1251 | link-layer vs RAN+core; ESS/same subnet vs provider-wide; re-association/fast re-auth vs handover/UPF; wireless ≠ mobility |
| 37 | สรุปบทเรียน | 22–1251 | ทวน 6 หัวข้อ; สูตร f, dBm, SNR, Shannon; ตัวเลขสำคัญ |
| 38 | สูตรจำก่อนสอบ — F4 | ทั้งไฟล์ | Cheat Sheet 25 รายการจาก 6 หัวข้อ |
| 39 | แบบทดสอบ F4 12 ข้อ | ทั้งไฟล์ | Quiz 12 ข้อ ครอบคลุม 6 หัวข้อ |
| 40 | การ์ดทบทวน — F4 | ทั้งไฟล์ | Flashcards 12 ใบ |
| 41 | คำศัพท์ — F4 | ทั้งไฟล์ | Glossary 36 คำ |
| 42 | ข้อสอบหลังเรียน — 20 ข้อ | ทั้งไฟล์ | Exam 20 ข้อ |

## B. Scope note

- เนื้อหาหลักยึด 6 หัวข้อที่ผู้ใช้กำหนด:
  1. Wireless Networks
  2. Radio & Channel Characteristics
  3. Wi-Fi / IEEE 802.11
  4. Wireless Access & Association
  5. MIMO
  6. Mobility
- Section 7 (5G Core Functions, Bluetooth, Satellite, IoT) อยู่ใน source บรรทัด 1255 เป็นต้นไป แต่ไม่นำมาเป็นเนื้อหาหลักของ F4
- ใช้เฉพาะ 5G Core/AMF/SMF/UPF เท่าที่จำเป็นต่อ association และ handover ตามที่ source อธิบายในหัวข้อ 4 และ 6
- ไม่มีการเพิ่มข้อเท็จจริง ตัวเลข หรือตัวอย่างจากภายนอก source

## C. Interactive elements

| Slide | Element | แหล่งข้อมูล |
|---|---|---|
| 10 | dBm power selector (0/10/20/30 dBm, 250 mW) | source 2.3 |
| 13 | Shannon calculator (B และ SNR sliders) | source 2.6–2.7 |
| 20 | CSMA/CA vs RTS/CTS tabs | source 3.5–3.6 |
| 21 | 802.11 frame field tabs | source 3.7 |
| 24 | Beaconing vs Probing tabs | source 4.2 |
| 34 | 5G handover step-through 1–7 | source 6.4 |

## D. Storage keys

| ข้อมูล | Key |
|---|---|
| ความคืบหน้า | `cn_completed_8` |
| สไลด์ล่าสุด | `cn_current_8` |
| Quiz | `cn_quiz8` |
| Exam | `cn_exam8` |
| Best score | `cn_best_8` |
