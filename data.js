/* ==========================================================================
   CN — Content data (all educational content, Thai-first with EN terms)
   ========================================================================== */
window.DATA = {
  /* Slide metadata: title shown in sidebar + aria-label */
  slides: [
    { title: "Cover — เริ่มต้นเรียน", short: "เปิดบทเรียน" },
    { title: "เราจะเรียนอะไรบ้าง", short: "ภาพรวมบทเรียน" },
    { title: "Computer Network คืออะไร?", short: "เครือข่ายคืออะไร?" },
    { title: "ทำไมต้องมีเครือข่าย?", short: "ทำไมต้องมี?" },
    { title: "Five Components of Data Communication", short: "องค์ประกอบ 5 อย่าง" },
    { title: "ตัวอย่างใกล้ตัว: Messenger", short: "ตัวอย่าง Messenger" },
    { title: "Protocol = กฎของการสื่อสาร", short: "โปรโตคอล = กฎ" },
    { title: "การเดินทางของข้อมูล (Data Flow)", short: "การไหลของข้อมูล" },
    { title: "Transmission Mode — การสื่อสาร 3 รูปแบบ", short: "รูปแบบการสื่อสาร" },
    { title: "Connection Type — รูปแบบการเชื่อมต่อ", short: "รูปแบบการเชื่อมต่อ" },
    { title: "Topology Explorer", short: "โทโพโลยี" },
    { title: "Mesh — ทดลองเส้นทางสำรอง", short: "ทดลอง Mesh" },
    { title: "PAN / LAN / MAN / WAN", short: "ขนาดของเครือข่าย" },
    { title: "Transmission Media — สื่อนำสัญญาณ", short: "สื่อนำสัญญาณ" },
    { title: "Protocol Stack — 4 ชั้น", short: "ชั้นโปรโตคอล" },
    { title: "Protocol ที่ควรรู้", short: "โปรโตคอลน่ารู้" },
    { title: "RFC — Internet Standards", short: "RFC มาตรฐาน" },
    { title: "Internet History — ไทม์ไลน์", short: "ประวัติ Internet" },
    { title: "Internet vs World Wide Web", short: "Internet กับ Web" },
    { title: "Chapter Summary — สรุปบทเรียน", short: "สรุปบทเรียน" },
    { title: "Exam Cheat Sheet — สูตรจำก่อนสอบ", short: "สูตรจำก่อนสอบ" },
    { title: "Quiz 1 (ข้อ 1–5)", short: "แบบทดสอบ 1" },
    { title: "Quiz 2 (ข้อ 6–10)", short: "แบบทดสอบ 2" },
    { title: "Flashcards — ทบทวนการ์ด", short: "การ์ดทบทวน" },
    { title: "Glossary — คำศัพท์", short: "คำศัพท์" },
    { title: "ข้อสอบหลังเรียน — แบบทดสอบท้ายบท 20 ข้อ", short: "ข้อสอบหลังเรียน" }
  ],

  /* Sidebar chapter structure: slide indices are 1-based */
  sections: [
    { label: "ภาพรวมสัปดาห์", topics: [1, 2] },
    { label: "1. การสื่อสารข้อมูล", topics: [3, 4, 5, 6, 7] },
    { label: "2. การไหลของข้อมูล", topics: [8] },
    { label: "3. โครงสร้างทางกายภาพ", topics: [9, 10] },
    { label: "4. โทโพโลยีเครือข่าย", topics: [11, 12] },
    { label: "5. ขนาดของเครือข่าย", topics: [13] },
    { label: "6. สื่อนำสัญญาณ", topics: [14] },
    { label: "7. โปรโตคอลและมาตรฐาน", topics: [15, 16, 17] },
    { label: "8. อินเทอร์เน็ต", topics: [18, 19] },
    { label: "ทบทวนและฝึกฝน", topics: [20, 21, 22, 23, 24, 25, 26] }
  ],

  /* Slide 2 — roadmap cards */
  roadmap: [
    { icon: "message-square", title: "Data Communication", desc: "การสื่อสารข้อมูลคืออะไร มีองค์ประกอบอะไรบ้าง" },
    { icon: "arrow-left-right", title: "Data Flow", desc: "ข้อมูลเดินทางจากต้นทางไปปลายทางอย่างไร" },
    { icon: "git-branch", title: "Physical Structure", desc: "รูปแบบการเชื่อมต่อและทิศทางการส่งข้อมูล" },
    { icon: "network", title: "Network Topology", desc: "การจัดวางอุปกรณ์ในเครือข่ายแบบต่าง ๆ" },
    { icon: "globe-2", title: "Network Scope", desc: "PAN LAN MAN WAN ขนาดของเครือข่าย" },
    { icon: "radio-tower", title: "Transmission Media", desc: "สื่อนำสัญญาณแบบมีสายและไร้สาย" },
    { icon: "file-text", title: "Protocol & Standards", desc: "กฎการสื่อสาร และมาตรฐานของ Internet" },
    { icon: "history", title: "Internet & Web", desc: "ประวัติ Internet และความต่างกับ Web" }
  ],

  /* Slide 4 — why networks */
  whys: [
    { icon: "share-2", title: "แชร์ทรัพยากรร่วมกัน", desc: "เครื่องพิมพ์ ไฟล์ และอุปกรณ์ต่าง ๆ ใช้ร่วมกันได้หลายเครื่อง ช่วยประหยัดต้นทุน" },
    { icon: "messages-square", title: "สื่อสารได้รวดเร็ว", desc: "ส่งข้อความ อีเมล วิดีโอคอล ถึงกันได้ในเวลาไม่กี่วินาที" },
    { icon: "database", title: "ข้อมูลรวมศูนย์", desc: "เก็บข้อมูลไว้ที่ Server เดียว ง่ายต่อการจัดการและสำรองข้อมูล" },
    { icon: "trending-up", title: "ขยายงานได้ง่าย", desc: "เพิ่มเครื่องหรือผู้ใช้ใหม่ได้โดยไม่ต้องสร้างระบบใหม่" },
    { icon: "shield-check", title: "มีความน่าเชื่อถือ", desc: "ข้อมูลมีสำเนาหลายชุด ระบบล้มเหลวบางจุดยังทำงานต่อได้" },
    { icon: "coins", title: "ลดต้นทุนโดยรวม", desc: "ใช้อุปกรณ์และซอฟต์แวร์ร่วมกัน ลดค่าใช้จ่ายระยะยาว" }
  ],

  /* Slide 5 — five components cards */
  components: [
    { icon: "send", title: "Sender", thai: "ผู้ส่ง", desc: "อุปกรณ์ต้นทางที่สร้างและส่งข้อมูล เช่น คอมพิวเตอร์ หรือมือถือ" },
    { icon: "inbox", title: "Receiver", thai: "ผู้รับ", desc: "อุปกรณ์ปลายทางที่รับข้อมูล เช่น Server หรือคอมพิวเตอร์ของเพื่อน" },
    { icon: "file-text", title: "Message", thai: "ข้อมูล / ข้อความ", desc: "ข้อมูลที่ต้องการส่ง เช่น ข้อความ รูปภาพ หรือวิดีโอ" },
    { icon: "cable", title: "Medium", thai: "สื่อกลาง", desc: "เส้นทางที่ข้อมูลเดินทาง เช่น สายเคเบิล ใยแก้ว หรือคลื่นวิทยุ" },
    { icon: "book-open", title: "Protocol", thai: "กฎการสื่อสาร", desc: "กฎและข้อตกลงที่ทำให้ทุกฝ่ายเข้าใจกันได้" }
  ],

  /* Slide 9 — transmission modes */
  modes: [
    {
      key: "simplex",
      label: "Simplex",
      thai: "การสื่อสารทางเดียว",
      desc: "ข้อมูลไหลได้ทิศทางเดียวเท่านั้น จาก A ไป B เหมาะสำหรับการแพร่ภาพ (Broadcasting) หรืออุปกรณ์ที่รับข้อมูลอย่างเดียวโดยไม่ต้องตอบกลับ",
      example: "📺 TV Broadcast (สัญญาณทีวี), ⌨️ คีย์บอร์ดคอมพิวเตอร์, จอแสดงผลเซนเซอร์ (Sensor Display)",
      remember: "Simplex = One Way (ทางเดียว)",
      exam: "ผู้รับไม่สามารถตอบกลับผ่านช่องทางเดิมได้เลย",
      lines: "ab"
    },
    {
      key: "half",
      label: "Half-Duplex",
      thai: "สองทางแบบผลัดกันส่ง",
      desc: "ข้อมูลไหลได้สองทิศทาง แต่ส่งได้ทีละฝั่งเท่านั้น — อุปกรณ์ต้องผลัดกันส่ง (Take Turns) ใครส่งอยู่ อีกฝ่ายต้องรอ",
      example: "📻 Walkie-Talkie (วิทยุสื่อสาร), วิทยุแบบ Push-to-Talk, ช่องวิทยุที่ใช้ร่วมกัน (Shared Radio Channel)",
      remember: "Half-Duplex = Two Way แต่ทีละทาง",
      exam: "ถ้า A ส่งอยู่ B ต้องรอจนกว่า A จะพูดจบ",
      lines: "ba"
    },
    {
      key: "full",
      label: "Full-Duplex",
      thai: "สองทางพร้อมกัน",
      desc: "ส่งและรับข้อมูลได้พร้อมกัน — ทั้งสองฝั่งสื่อสารได้ในเวลาเดียวกัน",
      example: "📞 โทรศัพท์, 📹 วิดีโอคอล (Video Call), Switched Ethernet",
      remember: "Full-Duplex = Two Way พร้อมกัน",
      exam: "Full-Duplex ใช้สายสัญญาณ 2 เส้น (ส่งและรับแยกกัน)",
      lines: "both"
    }
  ],

  /* Slide 11 — topology explorer */
  topologies: [
    {
      key: "bus",
      label: "Bus",
      thai: "บัส",
      desc: "อุปกรณ์ทุกตัวต่อเข้ากับสายเส้นเดียว (Backbone) ข้อมูลวิ่งบนสายเดียวกัน",
      pros: "ใช้สายน้อย ราคาถูก ติดตั้งง่าย",
      cons: "ถ้าสายหลักขาด ทั้งเครือข่ายล่ม ตรวจเช็คจุดเสียยาก",
      example: "เครือข่ายขนาดเล็กในห้องเรียนรุ่นเก่า",
      exam: "ปัญหาหลักของ Bus คือการชนกันของข้อมูล (Collision)"
    },
    {
      key: "star",
      label: "Star",
      thai: "ดาว",
      desc: "อุปกรณ์ทุกตัวเชื่อมต่อกับอุปกรณ์ศูนย์กลาง (Hub / Switch) ข้อมูลผ่านศูนย์กลางเสมอ",
      pros: "ถ้าสายหนึ่งขาด เครื่องอื่นยังทำงานต่อได้ ดูแลง่าย",
      cons: "ถ้าศูนย์กลางเสีย ทั้งเครือข่ายล่ม ใช้สายเยอะ",
      example: "เครือข่ายในบ้านหรือสำนักงาน (ต่อกับ Router)",
      exam: "Star เป็น Topology ที่นิยมใช้มากที่สุดในปัจจุบัน"
    },
    {
      key: "ring",
      label: "Ring",
      thai: "ริง",
      desc: "อุปกรณ์ต่อกันเป็นวงแหวน ข้อมูลวิ่งวนเป็นวงกลมผ่านแต่ละโหนด",
      pros: "ส่งข้อมูลเป็นระเบียบ ไม่ชนกันง่าย",
      cons: "ถ้าโหนดหนึ่งขาด วงแหวนแตก ทั้งเครือข่ายล่ม",
      example: "เครือข่าย FDDI ในองค์กรยุคก่อน",
      exam: "Ring สมัยใหม่ (Token Ring) ใช้ Token ควบคุมสิทธิ์การส่ง"
    },
    {
      key: "mesh",
      label: "Mesh",
      thai: "เมช",
      desc: "อุปกรณ์เชื่อมต่อกันหลายเส้นทาง มีเส้นทางสำรองให้ข้อมูลเสมอ",
      pros: "ทนทานมาก มีเส้นทางสำรอง (Redundancy)",
      cons: "ใช้สายและพอร์ตจำนวนมาก ราคาแพง",
      example: "โครงสร้างหลักของ Internet ระดับ Backbone",
      exam: "Mesh มีเส้นทางได้หลายแบบ: Full Mesh (ทุกคู่เชื่อมกัน) กับ Partial Mesh"
    },
    {
      key: "tree",
      label: "Tree",
      thai: "ทรี",
      desc: "เหมือน Star ซ้อนกันเป็นลำดับชั้น คล้ายต้นไม้ มี Root อยู่บนสุด",
      pros: "ขยายเครือข่ายเป็นกลุ่ม ๆ ได้ง่าย จัดการเป็นลำดับชั้น",
      cons: "ถ้า Root หรือสายหลักบนสุดเสีย กลุ่มย่อยทั้งกลุ่มล่ม",
      example: "เครือข่ายมหาวิทยาลัยหรือองค์กรขนาดใหญ่",
      exam: "Tree ใช้กับเครือข่ายที่แบ่งเป็นแผนก / สาขา"
    }
  ],

  /* Slide 13 — network scope */
  scopes: [
    { key: "pan", label: "PAN", thai: "เครือข่ายส่วนบุคคล", emoji: "👤", range: "≈ 1–10 เมตร รอบตัวเรา", example: "บลูทูธ หูฟังไร้สาย สมาร์ตวอทช์", remember: "Personal = ส่วนตัว" },
    { key: "lan", label: "LAN", thai: "เครือข่ายเฉพาะที่", emoji: "🏠", range: "ภายในห้อง อาคาร หรือสำนักงาน", example: "Wi-Fi ในบ้าน, เครือข่ายสำนักงาน", remember: "Local = ในพื้นที่เดียว" },
    { key: "man", label: "MAN", thai: "เครือข่ายระดับเมือง", emoji: "🏙️", range: "ครอบคลุมทั้งเมืองหรือเขต", example: "เครือข่ายของมหาวิทยาลัยทั้งเมือง, เคเบิลทีวีในเมือง", remember: "Metropolitan = เมือง" },
    { key: "wan", label: "WAN", thai: "เครือข่ายบริเวณกว้าง", emoji: "🌎", range: "ข้ามประเทศ ข้ามทวีป ทั่วโลก", example: "Internet, เครือข่ายธนาคารทั่วโลก", remember: "Wide = กว้างที่สุด" }
  ],

  /* Slide 14 — transmission media */
  media: [
    { key: "copper", group: "wired", label: "Copper (ทองแดง)", desc: "ส่งสัญญาณไฟฟ้า (Electrical Signal) ผ่านสายทองแดง เช่น UTP / Coaxial ราคาถูก แต่สัญญาณอ่อนลงเมื่อระยะไกล", example: "สาย LAN (Ethernet) ในบ้านและออฟฟิศ", type: "copper" },
    { key: "fiber", group: "wired", label: "Fiber Optic (ใยแก้ว)", desc: "ส่งแสง (Light Pulse) ผ่านเส้นใยแก้ว ความเร็วสูงมาก ทนสัญญาณรบกวน ระยะไกลได้ดี แต่ราคาแพงและติดตั้งยาก", example: "Internet ความเร็วสูง, สายหลัก (Backbone)", type: "fiber" },
    { key: "wifi", group: "wireless", label: "Wi-Fi", desc: "คลื่นวิทยุความถี่ 2.4 / 5 GHz สำหรับเชื่อมต่อระยะใกล้ในบ้านและออฟฟิศ", example: "อินเทอร์เน็ตไร้สายในบ้าน", type: "wave" },
    { key: "bt", group: "wireless", label: "Bluetooth", desc: "คลื่นวิทยุระยะสั้นมาก (ไม่กี่เมตร) ใช้พลังงานต่ำ ใช้เชื่อมต่ออุปกรณ์ส่วนตัว", example: "หูฟังไร้สาย, คีย์บอร์ด, สมาร์ตวอทช์", type: "wave" },
    { key: "radio", group: "wireless", label: "Radio", desc: "คลื่นวิทยุส่งผ่านอากาศ ครอบคลุมพื้นที่กว้าง ใช้ในวิทยุกระจายเสียงและการสื่อสารเคลื่อนที่", example: "สถานีวิทยุ, โทรศัพท์มือถือ", type: "wave" },
    { key: "microwave", group: "wireless", label: "Microwave", desc: "คลื่นไมโครเวฟ ต้องการแนวเส้นตรงระหว่างเสาส่ง-รับ (Line of Sight) ใช้เชื่อมต่อระหว่างอาคาร", example: "เชื่อมต่อระหว่างตึกที่อยู่ใกล้กัน", type: "wave" },
    { key: "ir", group: "wireless", label: "Infrared", desc: "รังสีอินฟราเรด ระยะสั้นมาก ต้องหันหน้าเข้าหากัน ใช้ในรีโมท", example: "รีโมททีวี, การส่งข้อมูลระยะใกล้", type: "wave" }
  ],

  /* Slide 15 — protocol stack */
  stack: [
    {
      layer: "Application",
      color: "#38bdf8",
      protos: "HTTP · HTTPS · DNS · DHCP",
      desc: "ชั้นที่ใกล้ผู้ใช้ที่สุด กำหนดว่าข้อมูลควรแสดงผลอย่างไร เช่น เปิดเว็บ (HTTP) หรือค้นหาโดเมน (DNS)",
      analogy: "เหมือน 'เนื้อหาที่เราต้องการสื่อ' เช่น จะพูดว่าอะไร",
      ex: "เปิด browser พิมพ์ URL → HTTP ส่งคำขอไปยังเว็บเซิร์ฟเวอร์"
    },
    {
      layer: "Transport",
      color: "#22d3ee",
      protos: "TCP · UDP",
      desc: "รับผิดชอบการส่งข้อมูลให้ครบถ้วนและเป็นระเบียบ แบ่งข้อมูลเป็นชิ้นและตรวจสอบว่าถึงครบหรือไม่",
      analogy: "เหมือน 'คนส่งของ' ที่เช็คของว่าส่งครบทุกชิ้นไหม",
      ex: "โหลดไฟล์: TCP ยืนยันว่าข้อมูลทุกส่วนมาถึงครบ"
    },
    {
      layer: "Internet",
      color: "#818cf8",
      protos: "IP",
      desc: "ทำหน้าที่กำหนดที่อยู่ (Address) และหาเส้นทาง (Routing) เพื่อส่งข้อมูลข้ามเครือข่ายไปยังปลายทาง",
      analogy: "เหมือน 'เลขที่บ้าน' และ 'แผนที่เส้นทาง'",
      ex: "แต่ละอุปกรณ์มี IP Address เช่น 192.168.1.10"
    },
    {
      layer: "Network Access",
      color: "#a78bfa",
      protos: "Ethernet · Wi-Fi",
      desc: "ชั้นล่างสุด เกี่ยวข้องกับฮาร์ดแวร์และสัญญาณจริง เช่น การส่งข้อมูลผ่านสาย LAN หรือคลื่น Wi-Fi",
      analogy: "เหมือน 'ถนนและรถ' ที่ใช้เดินทางจริง",
      ex: "NIC (การ์ดแลน) ส่งสัญญาณออกไปบนสาย Ethernet"
    }
  ],

  /* Slide 16 — protocol cards */
  protocols: [
    {
      key: "http",
      icon: "globe",
      name: "HTTP / HTTPS",
      thai: "การสื่อสารบนเว็บ",
      def: "โปรโตคอลสำหรับเปิดเว็บเพจ HTTPS คือเวอร์ชันเข้ารหัส (ปลอดภัยกว่า)",
      example: "ทุกครั้งที่คุณเปิดเว็บไซต์ browser จะส่งคำขอ HTTP/HTTPS",
      tip: "ดูที่กุญแจ 🔒 ใน address bar = HTTPS ปลอดภัย",
      anim: "req"
    },
    {
      key: "tcp",
      icon: "package-check",
      name: "TCP",
      thai: "ส่งข้อมูลแบบน่าเชื่อถือ",
      def: "แบ่งข้อมูลเป็นชิ้น ส่งไป แล้วตรวจสอบว่าถึงครบทุกชิ้น ถ้าหายส่งใหม่",
      example: "โหลดไฟล์, ส่งอีเมล — ต้องได้ข้อมูลครบ 100%",
      tip: "TCP = เช็คของทุกชิ้น (Reliable)",
      anim: "handshake"
    },
    {
      key: "ip",
      icon: "map-pin",
      name: "IP",
      thai: "ที่อยู่และเส้นทาง",
      def: "กำหนดที่อยู่ของอุปกรณ์ในเครือข่าย และเลือกเส้นทางส่งข้อมูล (Routing)",
      example: "IP Address เหมือนเลขที่บ้านของแต่ละอุปกรณ์",
      tip: "จำง่าย: IP = Internet Protocol = ที่อยู่",
      anim: "route"
    },
    {
      key: "dns",
      icon: "search",
      name: "DNS",
      thai: "แปลงชื่อเป็นเลขที่อยู่",
      def: "แปลงชื่อโดเมน (เช่น google.com) เป็น IP Address ที่เครื่องคอมพิวเตอร์เข้าใจ",
      example: "พิมพ์ google.com → DNS แปลงเป็น 142.250.x.x",
      tip: "DNS = สมุดโทรศัพท์ของ Internet",
      anim: "dns"
    },
    {
      key: "dhcp",
      icon: "settings-2",
      name: "DHCP",
      thai: "แจก IP อัตโนมัติ",
      def: "แจกจ่าย IP Address ให้อุปกรณ์ในเครือข่ายโดยอัตโนมัติ ไม่ต้องตั้งเอง",
      example: "มือถือต่อ Wi-Fi แล้วได้ IP อัตโนมัติทันที",
      tip: "DHCP = แจกที่อยู่บ้านอัตโนมัติ",
      anim: "dhcp"
    }
  ],

  /* Slide 18 — internet history timeline */
  history: [
    { year: "1960s", title: "แนวคิด Network", desc: "นักวิจัยเริ่มทดลองเชื่อมต่อคอมพิวเตอร์หลายเครื่องเข้าด้วยกันเพื่อแชร์ทรัพยากร", detail: "แนวคิด Packet Switching เกิดขึ้นจากนักวิจัยอย่าง Paul Baran และ Donald Davies — ข้อมูลถูกตัดเป็นชิ้นเล็ก ๆ แล้วส่งผ่านหลายเส้นทาง" },
    { year: "1969", title: "ARPANET", desc: "เครือข่ายแรกของโลก เชื่อม 4 มหาวิทยาลัยในสหรัฐฯ", detail: "ARPANET ส่งข้อความแรกจาก UCLA ไป Stanford แต่ระบบล่มหลังพิมพ์ไปแค่ 2 ตัวอักษร 'LO'" },
    { year: "1970s", title: "TCP/IP", desc: "Vint Cerf และ Bob Kahn พัฒนา TCP/IP มาตรฐานการสื่อสารที่ใช้จนถึงทุกวันนี้", detail: "TCP/IP ทำให้เครือข่ายต่างชนิดเชื่อมต่อกันได้ กลายเป็น 'ภาษาเดียวกัน' ของทุกเครือข่าย" },
    { year: "1983", title: "ARPANET ใช้ TCP/IP", desc: "ARPANET เปลี่ยนมาใช้ TCP/IP เป็นมาตรฐานเดียว ถือเป็นวันเกิดของ Internet อย่างเป็นทางการ", detail: "1 มกราคม 1983 เรียกว่า Flag Day — ทุกเครื่องต้องเปลี่ยนพร้อมกัน" },
    { year: "1989", title: "World Wide Web", desc: "Tim Berners-Lee คิดค้น WWW ทำให้ Internet ใช้งานง่ายขึ้นด้วยหน้าเว็บและลิงก์", detail: "HTML, HTTP และ URL ถือกำเนิดที่ CERN เพื่อให้ข้อมูลเชื่อมโยงกันผ่านลิงก์" },
    { year: "Present", title: "Internet ทั่วโลก", desc: "Internet เชื่อมต่อผู้คนหลายพันล้านคน ครอบคลุมทุกมุมโลก", detail: "Internet of Things (IoT), Cloud, AI — ทุกอย่างขับเคลื่อนบนโครงสร้างพื้นฐานของ Internet" }
  ],

  /* Slide 20 — summary cards */
  summary: [
    { icon: "message-square", title: "Data Communication", desc: "การแลกเปลี่ยนข้อมูลระหว่างอุปกรณ์ ต้องมีครบ 5 องค์ประกอบ" },
    { icon: "arrow-left-right", title: "Transmission Mode", desc: "Simplex ทางเดียว · Half-Duplex ผลัดกัน · Full-Duplex พร้อมกัน" },
    { icon: "plug", title: "Connection Type", desc: "Point-to-Point เชื่อม 2 จุด · Multipoint เชื่อมหลายจุดร่วมกัน" },
    { icon: "network", title: "Topology", desc: "Bus, Star, Ring, Mesh, Tree — รูปแบบการจัดวางอุปกรณ์" },
    { icon: "globe-2", title: "Network Scope", desc: "PAN → LAN → MAN → WAN ขนาดเล็กสุดไปใหญ่สุด" },
    { icon: "cable", title: "Transmission Media", desc: "มีสาย: ทองแดง, ใยแก้ว · ไร้สาย: Wi-Fi, Bluetooth, วิทยุ" },
    { icon: "book-open", title: "Protocol", desc: "กฎการสื่อสาร: HTTP, TCP, IP, DNS, DHCP — ทำงานเป็นชั้น ๆ" },
    { icon: "file-text", title: "RFC & Internet", desc: "RFC คือเอกสารมาตรฐาน Internet เกิดจาก ARPANET → TCP/IP → WWW" }
  ],

  /* Slide 21 — cheat sheet (study notes) */
  cheat: [
    { term: "Simplex", def: "One Way — ส่งทางเดียว" },
    { term: "Half-Duplex", def: "Two Way — แต่ทีละทาง" },
    { term: "Full-Duplex", def: "Two Way — พร้อมกัน" },
    { term: "Star", def: "มีอุปกรณ์ศูนย์กลาง" },
    { term: "Mesh", def: "มีหลายเส้นทางสำรอง" },
    { term: "PAN", def: "Personal — ส่วนตัว" },
    { term: "LAN", def: "Local — ในพื้นที่" },
    { term: "MAN", def: "Metropolitan — เมือง" },
    { term: "WAN", def: "Wide — กว้างสุด / ทั่วโลก" },
    { term: "Fiber Optic", def: "ส่งด้วยแสง" },
    { term: "Copper", def: "ส่งด้วยไฟฟ้า" },
    { term: "DNS", def: "Domain → IP" },
    { term: "DHCP", def: "แจก IP อัตโนมัติ" },
    { term: "Protocol", def: "กฎการสื่อสาร" },
    { term: "TCP", def: "ส่งให้ครบ น่าเชื่อถือ" },
    { term: "IP", def: "ที่อยู่ + เส้นทาง" }
  ],

  /* Slides 22–23 — quiz (10 questions) */
  quiz: [
    {
      q: "Computer Network คืออะไร?",
      options: [
        "การเชื่อมต่ออุปกรณ์หลายเครื่องเข้าด้วยกันเพื่อสื่อสาร",
        "คอมพิวเตอร์เครื่องเดียวที่ทำงานได้รวดเร็วมากเป็นพิเศษกว่าใคร",
        "ซอฟต์แวร์สำหรับวาดรูป ตัดต่อวิดีโอ และทำกราฟิก",
        "สายไฟและปลั๊กที่ต่อกับคอมพิวเตอร์"
      ],
      correct: 0,
      explain: "Computer Network คือการนำอุปกรณ์หลายเครื่องมาเชื่อมต่อกัน เพื่อให้สามารถสื่อสารและแลกเปลี่ยนข้อมูลได้"
    },
    {
      q: "ข้อใดไม่ใช่องค์ประกอบของการสื่อสารข้อมูล (Five Components)?",
      options: ["Sender (ผู้ส่ง)", "Receiver (ผู้รับ)", "Monitor (จอภาพ)", "Protocol (กฎการสื่อสาร)"],
      correct: 2,
      explain: "องค์ประกอบ 5 อย่างคือ Sender, Receiver, Message, Medium และ Protocol — จอภาพไม่ใช่องค์ประกอบหลักของการสื่อสาร"
    },
    {
      q: "การส่งข้อมูลทางเดียว เช่น สัญญาณทีวี เรียกว่าอะไร?",
      options: ["Simplex", "Half-Duplex", "Full-Duplex", "Multipoint"],
      correct: 0,
      explain: "Simplex คือการสื่อสารทางเดียว (One Way) เช่น TV Broadcast หรือวิทยุ"
    },
    {
      q: "Walkie-Talkie (วิทยุสื่อสาร) เป็นการสื่อสารแบบใด?",
      options: ["Simplex (ทางเดียว)", "Half-Duplex", "Full-Duplex", "Multiplex (รวมสัญญาณ)"],
      correct: 1,
      explain: "Half-Duplex ส่งได้สองทางแต่ทีละทาง — พูดหรือฟังอย่างใดอย่างหนึ่ง พร้อมกันไม่ได้"
    },
    {
      q: "การโทรศัพท์ที่พูดและฟังพร้อมกันได้ จัดเป็นการสื่อสารแบบใด?",
      options: ["Simplex", "Half-Duplex", "Full-Duplex", "Bus"],
      correct: 2,
      explain: "Full-Duplex ส่งและรับพร้อมกันทั้งสองทิศทาง เช่น โทรศัพท์ หรือ Video Call"
    },
    {
      q: "Topology แบบใดที่อุปกรณ์ทุกตัวต่อเข้ากับอุปกรณ์ศูนย์กลาง?",
      options: ["Bus", "Star", "Ring", "Mesh"],
      correct: 1,
      explain: "Star — อุปกรณ์ทุกตัวเชื่อมกับศูนย์กลาง (Switch/Hub) ถ้าศูนย์กลางเสียทั้งเครือข่ายล่ม"
    },
    {
      q: "Topology แบบใดที่มีเส้นทางสำรองหลายเส้นทาง ทนทานต่อความเสียหาย?",
      options: ["Bus", "Ring", "Mesh", "Tree"],
      correct: 2,
      explain: "Mesh มีหลายเส้นทาง ถ้าเส้นหนึ่งขาด ข้อมูลวิ่งเส้นอื่นได้ — เป็นหลักการของ Internet"
    },
    {
      q: "เครือข่ายภายในบ้านหรือสำนักงาน จัดเป็นเครือข่ายขนาดใด?",
      options: ["PAN", "LAN", "MAN", "WAN"],
      correct: 1,
      explain: "LAN (Local Area Network) ครอบคลุมพื้นที่เล็ก ๆ เช่น บ้าน สำนักงาน หรืออาคาร"
    },
    {
      q: "Internet ใช้มาตรฐานใดในการส่งข้อมูล?",
      options: ["TCP/IP", "FTP only", "HTML", "DNS"],
      correct: 0,
      explain: "TCP/IP คือชุดโปรโตคอลหลักของ Internet — TCP ตรวจสอบความครบถ้วน IP กำหนดที่อยู่และเส้นทาง"
    },
    {
      q: "DNS ทำหน้าที่อะไร?",
      options: [
        "แปลงชื่อโดเมนเป็น IP Address",
        "แจกจ่าย IP Address ให้อุปกรณ์อัตโนมัติ",
        "เข้ารหัสข้อมูลบนเว็บ",
        "ส่งสัญญาณ Wi-Fi"
      ],
      correct: 0,
      explain: "DNS (Domain Name System) แปลงชื่อ เช่น google.com เป็น IP Address — เหมือนสมุดโทรศัพท์ของ Internet ส่วนการแจก IP อัตโนมัติคือ DHCP"
    }
  ],

  /* Slide 24 — flashcards */
  flashcards: [
    { q: "Computer Network คืออะไร?", a: "การเชื่อมต่ออุปกรณ์หลายเครื่องเข้าด้วยกัน เพื่อสื่อสารและแลกเปลี่ยนข้อมูล" },
    { q: "Five Components มีอะไรบ้าง?", a: "Sender, Receiver, Message, Medium, Protocol" },
    { q: "Simplex คืออะไร?", a: "การสื่อสารทางเดียว (One Way) เช่น สัญญาณทีวี" },
    { q: "Half-Duplex คืออะไร?", a: "การสื่อสารสองทาง แต่ส่งทีละทาง (ผลัดกัน) เช่น Walkie-Talkie" },
    { q: "Full-Duplex คืออะไร?", a: "การสื่อสารสองทางพร้อมกัน เช่น โทรศัพท์, Video Call" },
    { q: "Star Topology มีข้อดีอะไร?", a: "ถ้าสายหนึ่งขาด เครื่องอื่นยังทำงานได้ แต่ถ้าศูนย์กลางเสียทั้งเครือข่ายล่ม" },
    { q: "ทำไม Mesh ถึงทนทาน?", a: "มีหลายเส้นทางสำรอง ถ้าเส้นหนึ่งขาด ข้อมูลวิ่งเส้นอื่นได้" },
    { q: "LAN กับ WAN ต่างกันยังไง?", a: "LAN = พื้นที่เล็ก (บ้าน/สำนักงาน) ส่วน WAN = พื้นที่กว้างข้ามประเทศ (Internet)" },
    { q: "Fiber Optic ส่งข้อมูลด้วยอะไร?", a: "ส่งด้วยแสง (Light Pulse) — เร็วและทนสัญญาณรบกวน" },
    { q: "Protocol คืออะไร?", a: "กฎและข้อตกลงที่ใช้ในการสื่อสาร เพื่อให้อุปกรณ์เข้าใจกันได้" },
    { q: "DNS ทำอะไร?", a: "แปลงชื่อโดเมนเป็น IP Address (สมุดโทรศัพท์ของ Internet)" },
    { q: "DHCP ทำอะไร?", a: "แจกจ่าย IP Address ให้อุปกรณ์โดยอัตโนมัติ" },
    { q: "RFC คืออะไร?", a: "เอกสารข้อกำหนดและมาตรฐานของ Internet — ไม่ใช่ทุกฉบับที่เป็น Standard" },
    { q: "Internet กับ Web ต่างกันยังไง?", a: "Internet คือโครงสร้างเครือข่าย (ถนน) ส่วน Web คือบริการหนึ่งที่อยู่บนนั้น (รถ)" }
  ],

  /* Slide 25 — glossary */
  glossary: [
    { term: "Network", def: "เครือข่าย — การเชื่อมต่ออุปกรณ์หลายเครื่องเข้าด้วยกัน" },
    { term: "Sender", def: "ผู้ส่ง — อุปกรณ์ต้นทางที่สร้างและส่งข้อมูล" },
    { term: "Receiver", def: "ผู้รับ — อุปกรณ์ปลายทางที่รับข้อมูล" },
    { term: "Message", def: "ข้อมูลที่ต้องการส่ง เช่น ข้อความ รูปภาพ วิดีโอ" },
    { term: "Protocol", def: "กฎและข้อตกลงของการสื่อสารระหว่างอุปกรณ์" },
    { term: "Simplex", def: "การสื่อสารทางเดียว เช่น สัญญาณทีวี วิทยุ" },
    { term: "Half-Duplex", def: "สองทาง แต่ส่งทีละทาง เช่น Walkie-Talkie" },
    { term: "Full-Duplex", def: "สองทางพร้อมกัน เช่น โทรศัพท์ Video Call" },
    { term: "Point-to-Point", def: "การเชื่อมต่อระหว่าง 2 จุดโดยตรง" },
    { term: "Multipoint", def: "การเชื่อมต่อหลายจุดบนสายหรือช่องทางเดียวกัน" },
    { term: "Topology", def: "รูปแบบการจัดวางและการเชื่อมต่ออุปกรณ์ในเครือข่าย" },
    { term: "Bus", def: "Topology ที่อุปกรณ์ทุกตัวต่อกับสายเส้นเดียว" },
    { term: "Star", def: "Topology ที่อุปกรณ์ต่อกับอุปกรณ์ศูนย์กลาง" },
    { term: "Ring", def: "Topology ที่อุปกรณ์ต่อกันเป็นวงแหวน" },
    { term: "Mesh", def: "Topology ที่มีหลายเส้นทางเชื่อมต่อระหว่างอุปกรณ์" },
    { term: "Tree", def: "Topology แบบลำดับชั้นคล้ายต้นไม้" },
    { term: "PAN", def: "Personal Area Network — เครือข่ายส่วนบุคคลรอบตัวเรา" },
    { term: "LAN", def: "Local Area Network — เครือข่ายเฉพาะที่ (บ้าน/สำนักงาน)" },
    { term: "MAN", def: "Metropolitan Area Network — เครือข่ายระดับเมือง" },
    { term: "WAN", def: "Wide Area Network — เครือข่ายบริเวณกว้าง (ทั่วโลก)" },
    { term: "TCP", def: "Transport Control Protocol — ส่งข้อมูลให้ครบถ้วนน่าเชื่อถือ" },
    { term: "IP", def: "Internet Protocol — กำหนดที่อยู่และเส้นทางของข้อมูล" },
    { term: "HTTP", def: "โปรโตคอลสำหรับเปิดเว็บเพจ" },
    { term: "HTTPS", def: "HTTP แบบเข้ารหัส ปลอดภัยกว่า" },
    { term: "DNS", def: "Domain Name System — แปลงชื่อโดเมนเป็น IP" },
    { term: "DHCP", def: "แจกจ่าย IP Address ให้อุปกรณ์อัตโนมัติ" },
    { term: "RFC", def: "Request for Comments — เอกสารมาตรฐานของ Internet" },
    { term: "ARPANET", def: "เครือข่ายแรกของโลก ถือกำเนิดปี 1969" },
    { term: "Internet", def: "เครือข่ายขนาดใหญ่ที่เชื่อมเครือข่ายทั่วโลกเข้าด้วยกัน" },
    { term: "World Wide Web", def: "บริการหนึ่งบน Internet ที่ใช้เปิดเว็บเพจผ่านลิงก์" },
    { term: "Fiber Optic", def: "สื่อนำสัญญาณที่ส่งข้อมูลด้วยแสง" },
    { term: "Wi-Fi", def: "เทคโนโลยีเครือข่ายไร้สายระยะใกล้" }
  ],

  /* Slide 26 — Quick Quiz (20 ข้อ ทบทวนครบทุกหัวข้อ) */
  quick: [
    {
      q: "องค์ประกอบ 5 อย่างของการสื่อสารข้อมูลมีอะไรบ้าง?",
      options: ["Sender, Receiver, Message, Medium, Protocol", "Sender, Receiver, Message, Internet, Browser", "Phone, Laptop, Server, Cable, Wi-Fi", "Data, Voice, Video, Image, Text"],
      correct: 0,
      explain: "ครบทั้ง 5 อย่าง: ผู้ส่ง, ผู้รับ, ข้อมูล, สื่อกลาง และกฎการสื่อสาร (Protocol)"
    },
    {
      q: "ในตัวอย่างการส่ง LINE ใครคือ Sender (ผู้ส่ง)?",
      options: ["มือถือของเพื่อน", "เราที่พิมพ์ข้อความ", "Router ที่บ้าน", "เซิร์ฟเวอร์ของ LINE"],
      correct: 1,
      explain: "ผู้ส่งคือต้นทางที่สร้างและส่งข้อมูล — ในกรณีนี้คือคนที่พิมพ์ข้อความ"
    },
    {
      q: "การส่งสัญญาณทีวี (TV Broadcast) เป็นการสื่อสารแบบใด?",
      options: ["Simplex", "Half-Duplex", "Full-Duplex", "Multipoint"],
      correct: 0,
      explain: "Simplex = ทางเดียว สถานีส่งตลอดเวลา ผู้ชมรับอย่างเดียว ตอบกลับไม่ได้"
    },
    {
      q: "Walkie-Talkie (วิทยุสื่อสาร) เป็นการสื่อสารแบบใด?",
      options: ["Simplex (ทางเดียว)", "Half-Duplex", "Full-Duplex", "Multiplex (รวมสัญญาณ)"],
      correct: 1,
      explain: "Half-Duplex ส่งได้สองทางแต่ทีละทาง — พูดหรือฟังอย่างใดอย่างหนึ่ง"
    },
    {
      q: "ข้อใดเป็นการสื่อสารแบบ Full-Duplex?",
      options: ["สัญญาณทีวี (รับอย่างเดียว)", "วิทยุสื่อสารแบบ Walkie-Talkie", "การโทรศัพท์ / Video Call", "สัญญาณ GPS นำทาง"],
      correct: 2,
      explain: "Full-Duplex ส่งและรับพร้อมกันทั้งสองทิศทาง เช่น โทรศัพท์"
    },
    {
      q: "การเชื่อมต่อระหว่าง 2 อุปกรณ์โดยตรงโดยไม่มีอุปกรณ์อื่นแทรก เรียกว่าอะไร?",
      options: ["Point-to-Point", "Multipoint (หลายจุด)", "Broadcast (กระจาย)", "Mesh (ตาข่าย)"],
      correct: 0,
      explain: "Point-to-Point = 2 จุดใช้ช่องทางเดียวกันเต็ม ๆ เช่น สายโทรศัพท์บ้าน"
    },
    {
      q: "การเชื่อมต่อแบบ Multipoint (หลายจุดบนสายเดียวกัน) ต้องระวังปัญหาอะไร?",
      options: ["ข้อมูลวิ่งช้าลงเพราะหลายเครื่องแย่งกันใช้", "การชนกันของข้อมูล (Collision)", "ไม่มีใครส่งข้อมูลได้เลย", "ต้องใช้สายจำนวนมากเกินไป"],
      correct: 1,
      explain: "หลายอุปกรณ์แชร์ช่องทางเดียวกัน ต้องมีกฎว่าใครส่งเมื่อไหร่ ไม่เช่นนั้นข้อมูลชนกัน"
    },
    {
      q: "Topology แบบใดที่อุปกรณ์ทุกตัวต่อเข้ากับสายเส้นเดียว (Backbone)?",
      options: ["Star", "Ring", "Bus", "Mesh"],
      correct: 2,
      explain: "Bus — ทุกเครื่องต่อกับสายหลักเส้นเดียว ถ้าสายขาดทั้งเครือข่ายล่ม"
    },
    {
      q: "ข้อดีของ Topology แบบ Star (ดาว) คืออะไร?",
      options: ["ใช้สายน้อยที่สุดเมื่อเทียบกับ Mesh", "ถ้าสายหนึ่งขาด เครื่องอื่นยังทำงานต่อได้", "มีหลายเส้นทางสำรองระหว่างเครื่อง", "ไม่ต้องใช้อุปกรณ์ศูนย์กลางเลยแม้แต่ตัวเดียว"],
      correct: 1,
      explain: "สายแต่ละเส้นเป็นอิสระต่อกัน แต่ถ้าอุปกรณ์ศูนย์กลาง (Switch/Hub) เสีย ทั้งเครือข่ายล่ม"
    },
    {
      q: "Topology แบบใดที่ทนทานที่สุด เพราะมีหลายเส้นทางเชื่อมต่อระหว่างอุปกรณ์?",
      options: ["Bus", "Star", "Ring", "Mesh"],
      correct: 3,
      explain: "Mesh มีเส้นทางสำรอง ถ้าเส้นหนึ่งขาด ข้อมูลวิ่งเส้นอื่นได้ — เป็นหลักการของ Internet"
    },
    {
      q: "เครือข่ายภายในบ้านหรือสำนักงานจัดเป็นเครือข่ายขนาดใด?",
      options: ["PAN", "LAN", "MAN", "WAN"],
      correct: 1,
      explain: "LAN (Local Area Network) ครอบคลุมพื้นที่เล็ก เช่น บ้าน อาคาร สำนักงาน"
    },
    {
      q: "เครือข่ายที่ครอบคลุมทั้งเมือง เช่น เครือข่ายมหาวิทยาลัยทั่วทั้งเมือง คือข้อใด?",
      options: ["PAN", "LAN", "MAN", "WAN"],
      correct: 2,
      explain: "MAN (Metropolitan Area Network) ครอบคลุมระดับเมืองหรือเขต"
    },
    {
      q: "หูฟังบลูทูธเชื่อมต่อกับมือถือ จัดเป็นเครือข่ายขนาดใด?",
      options: ["PAN", "LAN", "MAN", "WAN"],
      correct: 0,
      explain: "PAN (Personal Area Network) ครอบคลุมรอบตัวเรา ประมาณ 1–10 เมตร"
    },
    {
      q: "Fiber Optic (ใยแก้วนำแสง) ส่งข้อมูลด้วยอะไร?",
      options: ["สัญญาณไฟฟ้าในสายทองแดง", "แสง (Light Pulse)", "คลื่นเสียงความถี่สูง", "สนามแม่เหล็กถาวร"],
      correct: 1,
      explain: "ใยแก้วส่งแสง ความเร็วสูง ทนสัญญาณรบกวน ใช้กับ Internet ความเร็วสูง"
    },
    {
      q: "สายทองแดง (Copper) ส่งข้อมูลด้วยอะไร?",
      options: ["แสงเลเซอร์", "สัญญาณไฟฟ้า", "คลื่นวิทยุความถี่สูง", "แสงอินฟราเรด"],
      correct: 1,
      explain: "ทองแดงส่งสัญญาณไฟฟ้า ราคาถูก แต่สัญญาณอ่อนลงเมื่อระยะทางไกล"
    },
    {
      q: "ข้อใดเป็นสื่อนำสัญญาณแบบไร้สาย?",
      options: ["สาย UTP", "ใยแก้วนำแสง", "Wi-Fi", "สาย Coaxial"],
      correct: 2,
      explain: "Wi-Fi, Bluetooth, วิทยุ, ไมโครเวฟ, อินฟราเรด เป็นสื่อไร้สายที่ส่งผ่านอากาศ"
    },
    {
      q: "DNS ทำหน้าที่อะไร?",
      options: ["แจก IP Address ให้อุปกรณ์อัตโนมัติ", "แปลงชื่อโดเมนเป็น IP Address", "เข้ารหัสข้อมูลบนเว็บให้ปลอดภัย", "กระจายสัญญาณ Wi-Fi ภายในบ้าน"],
      correct: 1,
      explain: "DNS = สมุดโทรศัพท์ของ Internet แปลง google.com เป็น IP Address"
    },
    {
      q: "ใครคือผู้คิดค้น World Wide Web (WWW)?",
      options: ["Vint Cerf และ Bob Kahn", "Tim Berners-Lee", "Bill Gates แห่ง Microsoft", "Steve Jobs แห่ง Apple"],
      correct: 1,
      explain: "Tim Berners-Lee คิดค้น WWW ที่ CERN ในปี 1989 — HTML, HTTP และ URL ถือกำเนิดจากที่นี่"
    },
    {
      q: "Internet ใช้ชุดโปรโตคอลใดในการส่งข้อมูล?",
      options: ["HTTP/HTTPS", "TCP/IP", "DNS/DHCP", "FTP/Telnet"],
      correct: 1,
      explain: "TCP/IP คือมาตรฐานหลักของ Internet — TCP ตรวจความครบถ้วน IP กำหนดที่อยู่และเส้นทาง"
    },
    {
      q: "เครือข่ายแรกของโลกที่เชื่อม 4 มหาวิทยาลัยในสหรัฐฯ คือข้อใด?",
      options: ["Internet", "World Wide Web", "ARPANET", "Ethernet"],
      correct: 2,
      explain: "ARPANET เริ่มปี 1969 และเปลี่ยนมาใช้ TCP/IP ในปี 1983 ถือเป็นวันเกิดของ Internet"
    }
  ],

  /* ==========================================================================
     CHAPTER 2 — NETWORK MODELS (โมเดลเครือข่าย)
     ========================================================================== */
  ch2: {
    title: "Network Models",
    thai: "โมเดลเครือข่าย",
    slides: [
      { title: "Cover — บทที่ 2: Network Models", short: "เปิดบทเรียน" },
      { title: "Physical vs Logical Communication", short: "Physical vs Logical" },
      { title: "Network Edge", short: "Network Edge" },
      { title: "Internet Protocol Stack / OSI Model", short: "Protocol Stack / OSI" },
      { title: "หน้าที่ของแต่ละ Layer", short: "หน้าที่แต่ละชั้น" },
      { title: "PDU — Protocol Data Unit", short: "PDU" },
      { title: "Encapsulation / De-encapsulation", short: "ห่อ-แกะข้อมูล" },
      { title: "Header — ส่วนหัวของข้อมูล", short: "Header" },
      { title: "Protocol vs Service", short: "Protocol vs Service" },
      { title: "Chapter Summary — สรุปบทเรียน", short: "สรุปบทเรียน" },
      { title: "Exam Cheat Sheet — สูตรจำก่อนสอบ", short: "สูตรจำก่อนสอบ" },
      { title: "Quiz — แบบทดสอบบท 2", short: "แบบทดสอบ" },
      { title: "Flashcards — การ์ดทบทวน", short: "การ์ดทบทวน" },
      { title: "Glossary — คำศัพท์", short: "คำศัพท์" },
      { title: "ข้อสอบหลังเรียน — แบบทดสอบท้ายบท 20 ข้อ", short: "ข้อสอบหลังเรียน" }
    ],

    sections: [
      { label: "ภาพรวมสัปดาห์", topics: [1] },
      { label: "1. พื้นฐานโมเดล", topics: [2, 3] },
      { label: "2. โมเดลอ้างอิง", topics: [4, 5] },
      { label: "3. ข้อมูลเดินทางอย่างไร", topics: [6, 7, 8] },
      { label: "4. Protocol กับ Service", topics: [9] },
      { label: "ทบทวนและฝึกฝน", topics: [10, 11, 12, 13, 14, 15] }
    ],

    layers: [
      {
        key: "application",
        name: "Application",
        thai: "ชั้นโปรแกรมประยุกต์",
        pdu: "Data (ข้อมูล)",
        duty: "ใกล้ผู้ใช้ที่สุด — กำหนดรูปแบบข้อมูลและบริการ เช่น HTTP (เว็บ), DNS (แปลงชื่อ), SMTP (อีเมล)",
        addr: "ระบุด้วยชื่อหรือพอร์ตของแอป",
        analog: "เหมือน 'สิ่งที่เราจะพูด' — เนื้อหาของจดหมาย"
      },
      {
        key: "transport",
        name: "Transport",
        thai: "ชั้นขนส่ง",
        pdu: "Segment (เซกเมนต์)",
        duty: "แบ่งข้อมูลเป็นชิ้น จัดลำดับ และตรวจสอบว่ามาถึงครบ (TCP) หรือส่งเร็วแต่ไม่รับประกัน (UDP)",
        addr: "ใช้หมายเลขพอร์ต (Port) — รู้ว่าแอปไหนต้องรับ",
        analog: "เหมือน 'ผู้คัดแยกซองจดหมาย' — ใส่ซองและลำดับก่อนส่ง"
      },
      {
        key: "network",
        name: "Network (Internet)",
        thai: "ชั้นเครือข่าย",
        pdu: "Packet / Datagram (แพ็กเก็ต)",
        duty: "กำหนดที่อยู่ IP และเลือกเส้นทาง (Routing) ส่งข้อมูลข้ามเครือข่ายไปยังปลายทาง",
        addr: "ใช้ IP Address — รู้ว่าต้องส่งไปบ้านไหน",
        analog: "เหมือน 'ไปรษณีย์' — เขียนที่อยู่และเลือกเส้นทางส่ง"
      },
      {
        key: "link",
        name: "Data Link",
        thai: "ชั้นเชื่อมโยงข้อมูล",
        pdu: "Frame (เฟรม)",
        duty: "ส่งข้อมูลระหว่างอุปกรณ์ที่อยู่ติดกันบนเครือข่ายเดียวกัน ตรวจความผิดพลาดด้วย Checksum",
        addr: "ใช้ MAC Address — รู้ว่าต้องส่งให้อุปกรณ์ตัวไหนถัดไป",
        analog: "เหมือน 'พนักงานส่งของ' — ส่งต่อให้จุดถัดไปทีละช่วง"
      },
      {
        key: "physical",
        name: "Physical",
        thai: "ชั้นกายภาพ",
        pdu: "Bit (บิต)",
        duty: "แปลงข้อมูลเป็นสัญญาณไฟฟ้า/แสง/คลื่นแม่เหล็กไฟฟ้า แล้วส่งผ่านสายหรืออากาศ",
        addr: "ไม่ใช้ที่อยู่ — ส่งเป็นสัญญาณจริง",
        analog: "เหมือน 'ถนน' — พาหนะ (สัญญาณ) วิ่งอยู่บนนั้น"
      }
    ],

    quiz: [
      {
        q: "โมเดล OSI มีทั้งหมดกี่ชั้น?",
        options: ["4 ชั้น", "5 ชั้น", "6 ชั้น", "7 ชั้น"],
        correct: 3,
        explain: "OSI Model มี 7 ชั้น: Physical, Data Link, Network, Transport, Session, Presentation, Application"
      },
      {
        q: "Internet Protocol Stack (TCP/IP) แบบที่เรียนมีกี่ชั้น?",
        options: ["4 ชั้น", "5 ชั้น", "6 ชั้น", "7 ชั้น"],
        correct: 1,
        explain: "แบบเรียนแบ่งเป็น 5 ชั้น: Application, Transport, Network, Data Link, Physical"
      },
      {
        q: "PDU ของ Transport Layer เรียกว่าอะไร?",
        options: ["Frame (เฟรม)", "Packet (แพ็กเก็ต)", "Segment", "Bit (บิต)"],
        correct: 2,
        explain: "Transport เรียกว่า Segment ส่วน Packet เป็นของ Network Layer และ Frame เป็นของ Data Link"
      },
      {
        q: "การเพิ่ม Header ทีละชั้นตอนส่งข้อมูล เรียกว่าอะไร?",
        options: ["De-encapsulation", "Encapsulation", "Multiplexing", "Fragmentation"],
        correct: 1,
        explain: "Encapsulation = การห่อข้อมูลเพิ่ม Header ทีละชั้น (ห่อจากบนลงล่าง) ส่วนการแกะออกตอนรับคือ De-encapsulation"
      },
      {
        q: "ชั้นใดรับผิดชอบกำหนด IP Address และเลือกเส้นทาง (Routing)?",
        options: ["Application", "Transport", "Network", "Data Link"],
        correct: 2,
        explain: "Network Layer (Internet Layer) กำหนดที่อยู่ IP และเลือกเส้นทางส่งข้อมูลข้ามเครือข่าย"
      },
      {
        q: "ข้อใดคือการสื่อสารทางกายภาพ (Physical Communication)?",
        options: ["เส้นทางที่ข้อมูลไหลจริง เช่น สายไฟ ใยแก้ว คลื่นวิทยุ", "เส้นทางสมมติที่ลากผ่านหลายเครือข่ายโดยไม่ต้องใช้สายจริง", "หมายเลข IP ของอุปกรณ์ปลายทาง", "ชื่อโดเมนของเว็บไซต์ปลายทาง"],
        correct: 0,
        explain: "Physical = เส้นทางจริงที่สัญญาณไหลผ่าน (สาย/คลื่น) ส่วน Logical = เส้นทางเชิงตรรกะที่ข้อมูลถูกส่งข้ามเครือข่าย"
      },
      {
        q: "Protocol ต่างจาก Service อย่างไร?",
        options: [
          "Protocol คือกฎการสื่อสาร ส่วน Service คือบริการที่ชั้นล่างมอบให้",
          "Protocol คืออุปกรณ์เครือข่าย ส่วน Service คือสายสัญญาณที่ใช้",
          "Protocol กับ Service คือสิ่งเดียวกันแค่เรียกต่างกัน",
          "Protocol คือฮาร์ดแวร์ ส่วน Service คือซอฟต์แวร์ที่ติดตั้งไว้ในเครื่อง"
        ],
        correct: 0,
        explain: "Protocol = กฎที่ว่าข้อมูลต้องส่งอย่างไร (เช่น TCP, IP) ส่วน Service = บริการที่ชั้นล่างมอบให้ชั้นบน เช่น 'ส่งข้อมูลให้ครบถ้วน'"
      },
      {
        q: "Header ของข้อมูลมีไว้ทำอะไร?",
        options: [
          "เก็บข้อมูลควบคุม เช่น ที่อยู่ พอร์ต ลำดับ",
          "ทำให้ข้อมูลมีขนาดใหญ่ขึ้นโดยไม่จำเป็น",
          "เข้ารหัสข้อมูลทั้งหมดก่อนส่งออก",
          "แทนที่เนื้อหาข้อมูลจริงทั้งหมด (Payload) โดยสิ้นเชิง"
        ],
        correct: 0,
        explain: "Header เป็นส่วนหัวที่บอกข้อมูลที่จำเป็นต่อการส่ง เช่น ที่อยู่, พอร์ต, ลำดับ, Checksum — ส่วนเนื้อหาจริงคือ Payload"
      },
      {
        q: "Network Edge (ขอบเครือข่าย) หมายถึงอะไร?",
        options: [
          "อุปกรณ์ปลายทางที่ผู้ใช้ใช้ เช่น PC หรือมือถือ",
          "สายไฟและ Router ภายในเครือข่ายทั้งหมด",
          "ศูนย์ข้อมูลขนาดใหญ่เท่านั้นที่ตั้งอยู่ใจกลางเมือง",
          "คลื่นสัญญาณ Wi-Fi ที่กระจายในอากาศ"
        ],
        correct: 0,
        explain: "Network Edge = ขอบเครือข่ายที่อยู่ของ End Systems / Hosts เช่น PC, มือถือ, Server ที่เชื่อมต่อเข้าสู่เครือข่าย"
      },
      {
        q: "Frame เป็น PDU ของชั้นใด?",
        options: ["Application", "Transport", "Network", "Data Link"],
        correct: 3,
        explain: "Frame (เฟรม) เป็น PDU ของ Data Link Layer — ใช้ MAC Address ส่งระหว่างอุปกรณ์ที่อยู่ติดกัน"
      }
    ],

    cheat: [
      { term: "OSI Model", def: "→ 7 ชั้น (Reference Model)" },
      { term: "TCP/IP Stack", def: "→ 5 ชั้น (ใช้จริง)" },
      { term: "Network Edge", def: "→ End Systems / Hosts" },
      { term: "PDU", def: "→ ข้อมูล + Header ของแต่ละชั้น" },
      { term: "Segment", def: "→ Transport Layer" },
      { term: "Packet", def: "→ Network Layer" },
      { term: "Frame", def: "→ Data Link Layer" },
      { term: "Bits", def: "→ Physical Layer" },
      { term: "Encapsulation", def: "→ ห่อเพิ่ม Header ตอนส่ง" },
      { term: "De-encapsulation", def: "→ แกะ Header ตอนรับ" },
      { term: "Header", def: "→ ที่อยู่ พอร์ต ลำดับ Checksum" },
      { term: "Payload", def: "→ เนื้อหาข้อมูลจริง" },
      { term: "Physical Comm.", def: "→ สายไฟ / คลื่นจริง" },
      { term: "Logical Comm.", def: "→ เส้นทางเชิงตรรกะ" },
      { term: "Protocol", def: "→ กฎการสื่อสาร (TCP, IP, HTTP)" },
      { term: "Service", def: "→ บริการที่ชั้นบนได้รับ" }
    ],

    flashcards: [
      { q: "OSI Model มีกี่ชั้น?", a: "7 ชั้น — Physical → Data Link → Network → Transport → Session → Presentation → Application" },
      { q: "Internet Protocol Stack แบบเรียนมีกี่ชั้น?", a: "5 ชั้น: Application, Transport, Network, Data Link, Physical" },
      { q: "PDU คืออะไร?", a: "Protocol Data Unit — ข้อมูลพร้อม Header ที่แต่ละชั้นเรียกชื่อต่างกัน (Data, Segment, Packet, Frame, Bit)" },
      { q: "Encapsulation คืออะไร?", a: "การห่อข้อมูลเพิ่ม Header ทีละชั้นตอนส่งข้อมูล (จากบนลงล่าง)" },
      { q: "De-encapsulation คืออะไร?", a: "การแกะ Header ออกทีละชั้นตอนรับข้อมูล (จากล่างขึ้นบน)" },
      { q: "Header เก็บอะไรบ้าง?", a: "ที่อยู่ต้นทาง-ปลายทาง, หมายเลขพอร์ต, หมายเลขลำดับ และ Checksum — ส่วนเนื้อหาคือ Payload" },
      { q: "Segment คือ PDU ของชั้นใด?", a: "Transport Layer (TCP/UDP)" },
      { q: "Packet คือ PDU ของชั้นใด?", a: "Network Layer (IP)" },
      { q: "Frame คือ PDU ของชั้นใด?", a: "Data Link Layer (Ethernet/Wi-Fi)" },
      { q: "Protocol กับ Service ต่างกันยังไง?", a: "Protocol = กฎการสื่อสาร (TCP, IP) ส่วน Service = สิ่งที่ชั้นบนได้รับ เช่น 'ส่งข้อมูลให้ครบถ้วน'" },
      { q: "Network Edge คืออะไร?", a: "ขอบเครือข่ายที่มี End Systems เช่น คอมพิวเตอร์ มือถือ เซิร์ฟเวอร์" },
      { q: "Physical vs Logical ต่างกันยังไง?", a: "Physical = เส้นทางจริงที่สัญญาณไหลผ่าน ส่วน Logical = เส้นทางเชิงตรรกะที่ข้อมูลเดินทางข้ามเครือข่าย" }
    ],

    glossary: [
      { term: "Network Model", def: "โมเดลที่ใช้แบ่งการทำงานของเครือข่ายเป็นชั้น ๆ เช่น OSI, TCP/IP" },
      { term: "Physical Communication", def: "การสื่อสารทางกายภาพ — ข้อมูลไหลผ่านเส้นทางจริง เช่น สายไฟ ใยแก้ว คลื่น" },
      { term: "Logical Communication", def: "การสื่อสารเชิงตรรกะ — เส้นทางที่ข้อมูลเดินทางข้ามเครือข่าย (ไม่ใช่สายจริงเส้นเดียว)" },
      { term: "Network Edge", def: "ขอบเครือข่าย — ที่อยู่ของ End Systems เช่น คอมพิวเตอร์ มือถือ เซิร์ฟเวอร์" },
      { term: "End System / Host", def: "อุปกรณ์ปลายทางที่ผู้ใช้ใช้ เช่น PC, Laptop, Smartphone, Server" },
      { term: "Client", def: "ผู้ร้องขอบริการ เช่น เบราว์เซอร์ที่ขอเปิดเว็บ" },
      { term: "Server", def: "ผู้ให้บริการ เช่น เว็บเซิร์ฟเวอร์ที่ส่งหน้าเว็บกลับ" },
      { term: "OSI Model", def: "โมเดลอ้างอิง 7 ชั้น ของการสื่อสารข้อมูล (มาตรฐาน ISO)" },
      { term: "Internet Protocol Stack", def: "ชุดโปรโตคอล TCP/IP แบ่งเป็นชั้น ๆ ที่ Internet ใช้จริง" },
      { term: "Layer", def: "ชั้น — ระดับการทำงานที่แบ่งหน้าที่กันอย่างชัดเจนในโมเดลเครือข่าย" },
      { term: "PDU", def: "Protocol Data Unit — ข้อมูลพร้อม Header ที่แต่ละชั้นเรียกชื่อต่างกัน" },
      { term: "Segment", def: "PDU ของ Transport Layer (TCP/UDP)" },
      { term: "Packet", def: "PDU ของ Network Layer (IP) — เรียกว่า Datagram ด้วย" },
      { term: "Frame", def: "PDU ของ Data Link Layer (Ethernet/Wi-Fi)" },
      { term: "Bit", def: "PDU ของ Physical Layer — ข้อมูลในรูปสัญญาณ 0/1" },
      { term: "Encapsulation", def: "การห่อข้อมูลเพิ่ม Header ทีละชั้นตอนส่งข้อมูล" },
      { term: "De-encapsulation", def: "การแกะ Header ออกทีละชั้นตอนรับข้อมูล" },
      { term: "Header", def: "ส่วนหัวของข้อมูล — บอกที่อยู่ พอร์ต ลำดับ และ Checksum" },
      { term: "Payload", def: "เนื้อหาข้อมูลจริงที่ต้องการส่ง (ไม่รวม Header)" },
      { term: "Protocol", def: "กฎและข้อตกลงของการสื่อสาร เช่น TCP, IP, HTTP" },
      { term: "Service", def: "บริการที่ชั้นล่างมอบให้ชั้นบน เช่น 'ส่งข้อมูลให้ครบถ้วน'" },
      { term: "MAC Address", def: "ที่อยู่ฮาร์ดแวร์ของ Network Interface Card (NIC) — ใช้ใน Data Link Layer" },
      { term: "IP Address", def: "ที่อยู่เชิงตรรกะของอุปกรณ์บนเครือข่าย — ใช้ใน Network Layer" },
      { term: "Port", def: "หมายเลขที่ระบุแอปพลิเคชันปลายทาง เช่น 80 = HTTP" }
    ],

    /* ข้อสอบหลังเรียน — บททดสอบท้ายบท 20 ข้อ (ปลดล็อกเมื่อเรียนครบทุกสไลด์) */
    exam: [
      { q: "การสื่อสารทางกายภาพ (Physical Communication) คืออะไร?", options: ["สัญญาณจริงที่เดินทางผ่านสายหรืออากาศ", "เส้นทางเชิงตรรกะที่ซอฟต์แวร์กำหนดขึ้นมา", "ที่อยู่ IP ของอุปกรณ์ปลายทางบนเครือข่าย", "รูปแบบการเข้ารหัสข้อมูลในระบบ"], correct: 0, explain: "Physical = สัญญาณไฟฟ้า/แสง/คลื่นจริงที่วิ่งบนสายหรืออากาศ ส่วน Logical คือเส้นทางเชิงตรรกะที่ซอฟต์แวร์กำหนด" },
      { q: "เส้นทางเชิงตรรกะ (Logical Path) ต่างจากทางกายภาพอย่างไร?", options: ["ใช้สายไฟจริงที่มองเห็นได้ทางกายภาพเท่านั้น", "เส้นทางที่ซอฟต์แวร์กำหนด ไม่ผูกกับสายเส้นเดียว", "ใช้ได้เฉพาะในเครือข่าย LAN ขนาดเล็กภายในอาคารเท่านั้น", "ไม่มีข้อมูลเดินทางในเส้นทางนั้นเลย"], correct: 1, explain: "Logical Path เป็นเส้นทางที่ซอฟต์แวร์กำหนด — ข้อมูลอาจวิ่งผ่านสายหลายเส้นแต่ตรรกะมองเป็นเส้นเดียว" },
      { q: "End System / Host คืออะไร?", options: ["อุปกรณ์ปลายทางที่รันแอปพลิเคชัน เช่น PC หรือโทรศัพท์", "อุปกรณ์กลางอย่าง Router หรือ Switch ที่คอยส่งต่อข้อมูล", "สายเคเบิลที่ใช้เชื่อมต่ออุปกรณ์เข้าด้วยกัน", "ระบบปฏิบัติการที่ใช้ในเครื่องคอมพิวเตอร์"], correct: 0, explain: "End System = อุปกรณ์ปลายทางที่รันแอป (Host) ส่วน Router/Switch เป็นอุปกรณ์กลางที่แค่ส่งต่อข้อมูล" },
      { q: "อุปกรณ์ใดต่อไปนี้เป็น End System?", options: ["Router ที่บ้าน", "เว็บเซิร์ฟเวอร์", "Switch ในตู้สาย", "Access Point ในสำนักงาน"], correct: 1, explain: "เว็บเซิร์ฟเวอร์รันแอปพลิเคชัน (เว็บ) ที่ปลายเครือข่ายจึงเป็น End System ส่วน Router/Switch เป็นอุปกรณ์กลาง" },
      { q: "OSI Model มีทั้งหมดกี่ชั้น?", options: ["5 ชั้น", "6 ชั้น", "7 ชั้น", "4 ชั้น"], correct: 2, explain: "OSI Model มี 7 ชั้น: Physical → Data Link → Network → Transport → Session → Presentation → Application" },
      { q: "Internet Protocol Stack (แบบเรียน) แบ่งเป็นกี่ชั้น?", options: ["7 ชั้น", "5 ชั้น", "4 ชั้น", "6 ชั้น"], correct: 1, explain: "แบบเรียนแบ่งเป็น 5 ชั้น: Application, Transport, Network, Data Link, Physical" },
      { q: "ชั้นที่อยู่ใกล้ผู้ใช้มากที่สุดคือชั้นใด?", options: ["Physical Layer", "Transport Layer", "Application", "Network Layer"], correct: 2, explain: "Application Layer อยู่ใกล้ผู้ใช้ที่สุด — เป็นชั้นที่แอปอย่างเว็บ/อีเมลทำงานอยู่" },
      { q: "PDU ของ Network Layer เรียกว่าอะไร?", options: ["Segment", "Frame", "Packet", "Bit"], correct: 2, explain: "Network Layer เรียกว่า Packet (หรือ Datagram) ส่วน Segment เป็นของ Transport และ Frame เป็นของ Data Link" },
      { q: "PDU ของ Data Link Layer เรียกว่าอะไร?", options: ["Packet", "Frame", "Segment", "Datagram"], correct: 1, explain: "Data Link Layer เรียกว่า Frame — ห่อ Packet จาก Network Layer เข้ากับ MAC Address" },
      { q: "Encapsulation คืออะไร?", options: ["การเพิ่ม Header ห่อข้อมูลทีละชั้นตอนส่ง", "การแกะ Header ออกทีละชั้นตอนฝั่งผู้รับข้อมูล", "การแบ่งข้อมูลออกเป็นชิ้นเล็ก ๆ ก่อนส่ง", "การเข้ารหัสข้อมูลก่อนส่งออกไป"], correct: 0, explain: "Encapsulation = การห่อข้อมูลเพิ่ม Header ทีละชั้น (จากบนลงล่าง) ตอนส่งข้อมูล" },
      { q: "De-encapsulation คืออะไร?", options: ["การห่อข้อมูลเพิ่ม Header ทีละชั้นตอนส่ง", "การแกะ Header ออกทีละชั้นตอนรับ", "การค้นหาเส้นทางระหว่างเครือข่าย", "การบีบอัดข้อมูลให้มีขนาดเล็กลง"], correct: 1, explain: "De-encapsulation = การแกะ Header ออกทีละชั้น (จากล่างขึ้นบน) ตอนฝั่งรับข้อมูล" },
      { q: "Header ของข้อมูลใช้เก็บอะไร?", options: ["เฉพาะเนื้อหาข้อมูลจริงเท่านั้น", "ข้อมูลควบคุม เช่น ที่อยู่ พอร์ต ลำดับ", "เฉพาะรูปภาพและวิดีโอเท่านั้น", "รหัสผ่านกับข้อมูลส่วนตัวของเครื่องผู้ใช้"], correct: 1, explain: "Header เก็บข้อมูลควบคุม (ที่อยู่ พอร์ต ลำดับ Checksum) ส่วนเนื้อหาจริงเรียกว่า Payload" },
      { q: "การสื่อสารระหว่าง Host จริง ๆ คือการสื่อสารระหว่างอะไร?", options: ["เครื่องกับเครื่องโดยตรง", "Process กับ Process", "Router กับ Router โดยตรง", "สายสัญญาณกับสายสัญญาณ"], correct: 1, explain: "การสื่อสารระหว่างเครื่องจริง ๆ คือการสื่อสารระหว่าง Process (โปรแกรมที่กำลังทำงาน) กับ Process" },
      { q: "Protocol กับ Service ต่างกันอย่างไร?", options: ["Protocol คือกฎการสื่อสาร, Service คือบริการที่ชั้นล่างมอบให้", "เหมือนกันทุกประการ แค่เรียกชื่อต่างกัน", "Service คือกฎการสื่อสาร, Protocol คือบริการที่ชั้นล่างมอบให้ชั้นบน", "ไม่มีคำจำกัดความที่แน่นอนเลย"], correct: 0, explain: "Protocol คือกฎ/รูปแบบการสื่อสาร เช่น TCP, IP ส่วน Service คือบริการที่ชั้นล่างมอบให้ชั้นบน เช่น 'ส่งข้อมูลให้ครบถ้วน'" },
      { q: "ชั้น Transport มีหน้าที่หลักอะไร?", options: ["แปลงสัญญาณไฟฟ้าให้เป็นบิต 0/1", "เชื่อมต่อ Process ต่อ Process และรับประกันความเชื่อถือ", "หาเส้นทางระหว่างเครือข่ายด้วย Routing และส่งต่อ Packet", "แสดงผลเว็บเพจให้ผู้ใช้เห็น"], correct: 1, explain: "Transport Layer เชื่อมต่อ Process ต่อ Process และจัดการเรื่องความเชื่อถือได้ (TCP) หรือความเร็ว (UDP)" },
      { q: "Physical Layer ส่งข้อมูลในรูปแบบใด?", options: ["Segment (เซกเมนต์)", "Packet (แพ็กเก็ต)", "Bits (สัญญาณ 0/1)", "Frame (เฟรม)"], correct: 2, explain: "Physical Layer ส่งข้อมูลเป็น Bits — สัญญาณไฟฟ้า/แสง/คลื่นแม่เหล็กไฟฟ้าจริงบนสายหรืออากาศ" },
      { q: "ชั้นใดมีหน้าที่ Routing / หาเส้นทาง?", options: ["Application", "Transport", "Network", "Data Link"], correct: 2, explain: "Network Layer (IP) มีหน้าที่หาเส้นทาง (Routing) และส่งต่อ Packet ระหว่างเครือข่าย" },
      { q: "ข้อใดจับคู่ PDU กับชื่อชั้นได้ถูกต้อง?", options: ["Segment — Network Layer", "Frame — Data Link Layer", "Packet — Application Layer", "Bit — Transport Layer"], correct: 1, explain: "Frame เป็น PDU ของ Data Link Layer (ห่อ Packet ด้วย MAC) ส่วน Segment เป็นของ Transport, Packet เป็นของ Network และ Bits เป็นของ Physical" },
      { q: "ข้อมูลที่ห่อครบทุกชั้นแล้วกำลังวิ่งบนสาย Ethernet เรียกว่าอะไร?", options: ["Segment", "Packet", "Frame", "Bit"], correct: 2, explain: "บนสาย Ethernet ข้อมูลอยู่ในรูป Frame (Data Link Layer) — ห่อ Packet ด้วย MAC Header/Footer" },
      { q: "ข้อดีของการแบ่งเป็นชั้น (Layered Model) คืออะไร?", options: ["แยกหน้าที่ชัดเจน แก้ไข/พัฒนาทีละชั้นได้", "เครื่องคอมพิวเตอร์ทำงานเร็วขึ้นทันที", "ไม่ต้องใช้สายเชื่อมต่อระหว่างเครื่อง", "ลดจำนวนอุปกรณ์ที่ต้องใช้ในเครือข่ายทั้งหมด"], correct: 0, explain: "โมเดลแบบชั้นแยกหน้าที่ชัดเจน — เปลี่ยนเทคโนโลยีทีละชั้นได้โดยไม่กระทบชั้นอื่น (เช่น เปลี่ยนสายแต่ Protocol เดิม)" }
    ]
  },

  ch3: {
    title: "Application Layer",
    thai: "Application Layer",
    slides: [
      { title: "Cover — บทที่ 3: Application Layer", short: "เปิดบทเรียน" },
      { title: "Network Application Architecture", short: "สถาปัตยกรรมแอป" },
      { title: "Process, Socket, IP และ Port", short: "Process / Socket / Port" },
      { title: "ความต้องการของ Application", short: "App Requirements" },
      { title: "HTTP / HTTPS", short: "HTTP / HTTPS" },
      { title: "Persistent vs Non-Persistent + HTTP Message", short: "HTTP Connection & Message" },
      { title: "HTTP Methods", short: "HTTP Methods" },
      { title: "DNS และ DNS Cache", short: "DNS / DNS Cache" },
      { title: "SMTP / Email", short: "SMTP / Email" },
      { title: "Port มาตรฐานที่สำคัญ", short: "Port สำคัญ" },
      { title: "Chapter Summary — สรุปบทเรียน", short: "สรุปบทเรียน" },
      { title: "Exam Cheat Sheet — สูตรจำก่อนสอบ", short: "สูตรจำก่อนสอบ" },
      { title: "Quiz — แบบทดสอบบท 3", short: "แบบทดสอบ" },
      { title: "Flashcards — การ์ดทบทวน", short: "การ์ดทบทวน" },
      { title: "Glossary — คำศัพท์", short: "คำศัพท์" },
      { title: "ข้อสอบหลังเรียน — แบบทดสอบท้ายบท 20 ข้อ", short: "ข้อสอบหลังเรียน" }
    ],

    sections: [
      { label: "ภาพรวมสัปดาห์", topics: [1] },
      { label: "1. พื้นฐานแอปพลิเคชัน", topics: [2, 3, 4] },
      { label: "2. HTTP", topics: [5, 6, 7] },
      { label: "3. DNS และอีเมล", topics: [8, 9] },
      { label: "4. Port มาตรฐาน", topics: [10] },
      { label: "ทบทวนและฝึกฝน", topics: [11, 12, 13, 14, 15, 16] }
    ],

    architectures: [
      {
        key: "client-server",
        name: "Client-Server",
        thai: "สถาปัตยกรรมแบบไคลเอนต์-เซิร์ฟเวอร์",
        desc: "มี Server ที่เปิดให้บริการตลอดเวลา มี IP คงที่ รอรับคำขอ (Request) จาก Client ซึ่งติดต่อขอใช้บริการเมื่อต้องการ และ Client ไม่คุยกันเองโดยตรง",
        example: "เว็บเบราว์เซอร์ (Client) ขอเปิดเว็บจากเว็บเซิร์ฟเวอร์ (Server)",
        pro: "จัดการง่าย มีผู้ให้บริการกลาง",
        con: "Server อาจเป็นจุดคอขวด/จุดเดียวที่ทำให้ระบบล่ม"
      },
      {
        key: "p2p",
        name: "Peer-to-Peer (P2P)",
        thai: "สถาปัตยกรรมแบบเพียร์ทูเพียร์",
        desc: "ไม่มี Server ตายตัว — อุปกรณ์ (Peer) แต่ละตัวเป็นได้ทั้งผู้ให้บริการและผู้ขอใช้บริการในเวลาเดียวกัน โดยคุยกันตรง ๆ",
        example: "โปรแกรมแชร์ไฟล์แบบ BitTorrent",
        pro: "ไม่ต้องพึ่งเซิร์ฟเวอร์กลาง รองรับผู้ใช้จำนวนมากได้",
        con: "จัดการยากกว่า ความปลอดภัยและความน่าเชื่อถือไม่แน่นอน"
      }
    ],

    httpModes: [
      {
        key: "http",
        name: "HTTP",
        port: "Port 80",
        secure: false,
        desc: "ส่งข้อมูลแบบไม่เข้ารหัส (Plain Text) — ข้อมูลทุกอย่างอ่านได้โดยตรง ถ้าคนกลางดักจับระหว่างทางจะเห็นข้อมูลทั้งหมด",
        use: "เว็บที่ไม่มีความลับ เช่น หน้าข้อมูลทั่วไป"
      },
      {
        key: "https",
        name: "HTTPS",
        port: "Port 443",
        secure: true,
        desc: "เหมือน HTTP แต่เข้ารหัสข้อมูลด้วย TLS/SSL ก่อนส่ง — คนแอบดักฟังระหว่างทางอ่านข้อมูลไม่ออก ปลอดภัยกว่า",
        use: "ธนาคารออนไลน์, ร้านค้า, ฟอร์มกรอกข้อมูลส่วนตัว"
      }
    ],

    methods: [
      { key: "get", name: "GET", duty: "ขอข้อมูลจาก Server (ไม่ส่งข้อมูลจำนวนมากไปแก้ไข)", example: "เปิดหน้าเว็บ, ค้นหา Google (?q=cat)", tip: "ข้อมูลไปกับ URL — เห็นได้ง่าย ไม่เหมาะกับข้อมูลลับ" },
      { key: "post", name: "POST", duty: "ส่งข้อมูลไปให้ Server เพื่อสร้าง/ประมวลผลสิ่งใหม่", example: "กรอกฟอร์มสมัครสมาชิก, ส่งความคิดเห็น", tip: "ข้อมูลอยู่ใน Body ของ Request — ไม่โชว์บน URL เหมาะกับข้อมูลยาว/อ่อนไหว" },
      { key: "put", name: "PUT", duty: "ส่งข้อมูลไปแทนที่/อัปเดตข้อมูลเดิมทั้งหมดที่ระบุ", example: "อัปเดตโปรไฟล์ผู้ใช้ทั้งชุด", tip: "PUT = แทนที่ทั้งชุด ส่วน PATCH = แก้บางส่วน" }
    ],

    ports: [
      { port: "20/21", name: "FTP", desc: "โอนย้ายไฟล์ (File Transfer Protocol)" },
      { port: "25", name: "SMTP", desc: "ส่งอีเมล (Simple Mail Transfer Protocol)" },
      { port: "53", name: "DNS", desc: "แปลงชื่อโดเมนเป็น IP Address" },
      { port: "80", name: "HTTP", desc: "เว็บแบบไม่เข้ารหัส" },
      { port: "110", name: "POP3", desc: "รับ/ดึงอีเมล" },
      { port: "143", name: "IMAP", desc: "รับ/ดึงอีเมล (เก็บไว้บนเซิร์ฟเวอร์)" },
      { port: "443", name: "HTTPS", desc: "เว็บแบบเข้ารหัส (TLS/SSL)" }
    ],

    quiz: [
      {
        q: "สถาปัตยกรรมแบบใดที่มี Server คงที่เปิดบริการตลอดเวลา และ Client ไม่คุยกันเองโดยตรง?",
        options: ["Peer-to-Peer (P2P)", "Client-Server", "Mesh", "Bus"],
        correct: 1,
        explain: "Client-Server มี Server กลางเปิดบริการตลอดเวลา คอยรับคำขอจาก Client — เช่น เว็บเบราว์เซอร์กับเว็บเซิร์ฟเวอร์"
      },
      {
        q: "ในการสื่อสารระหว่างเครื่อง ระดับใดที่สื่อสารกันจริง ๆ?",
        options: ["เครื่อง (Host) กับเครื่อง", "Process กับ Process", "Router กับ Router", "สาย กับ สาย"],
        correct: 1,
        explain: "การสื่อสารระหว่างเครื่องจริง ๆ คือการสื่อสารระหว่าง Process (โปรแกรมที่กำลังทำงาน) กับ Process ผ่านเครือข่าย"
      },
      {
        q: "Socket เปรียบได้กับอะไร?",
        options: ["ที่อยู่ของเครื่องทั้งเครื่องบนเครือข่าย", "ประตูที่ Process ใช้ส่ง/รับข้อมูล", "สายไฟที่ใช้เชื่อมอุปกรณ์เข้าด้วยกัน", "รหัสผ่านของเครือข่าย Wi-Fi"],
        correct: 1,
        explain: "Socket คือ 'ประตู' ที่ Process ใช้ส่ง/รับข้อมูลเข้า-ออกจากเครือข่าย (IP = บ้าน, Port = ห้อง, Socket = ประตูของห้องนั้น)"
      },
      {
        q: "แอปใดต้องการความหน่วง (Delay) ต่ำที่สุด?",
        options: ["ส่งอีเมลข้อความธรรมดาทั่วไป", "เกมออนไลน์แบบ Real-time", "ดาวน์โหลดไฟล์ขนาดใหญ่", "อัปโหลดรูปภาพลงเว็บ"],
        correct: 1,
        explain: "เกมออนไลน์/วิดีโอคอลต้องการ Delay ต่ำมาก ส่วนอีเมลหรือดาวน์โหลดไฟล์ไม่ซีเรียสเรื่องความหน่วง"
      },
      {
        q: "แอปประเภทใดทนการสูญเสียข้อมูล (Data Loss) ได้น้อยที่สุด?",
        options: ["การโอนไฟล์", "การโทรผ่านอินเทอร์เน็ต (VoIP)", "ดูวิดีโอสด", "สตรีมเสียง"],
        correct: 0,
        explain: "การโอนไฟล์ทน Data Loss ไม่ได้ (ข้อมูลหายไปนิดเดียวไฟล์เสียหาย) ส่วน VoIP/วิดีโอสดทนได้บ้าง เพราะภาพ/เสียงกระตุกเล็กน้อยยังใช้งานได้"
      },
      {
        q: "HTTP กับ HTTPS ต่างกันตรงไหน?",
        options: ["HTTPS เข้ารหัสข้อมูลด้วย TLS/SSL ส่วน HTTP ไม่เข้ารหัส", "HTTP เร็วกว่า HTTPS ในทุกสถานการณ์และทุกเงื่อนไขการใช้งานเสมอ", "HTTPS ใช้ได้เฉพาะกับไฟล์รูปภาพเท่านั้น", "ทั้งสองเหมือนกันทุกอย่างไม่มีความต่าง"],
        correct: 0,
        explain: "HTTPS = HTTP + TLS/SSL เข้ารหัสข้อมูล ทำให้คนกลางอ่านไม่ออก — HTTP = 80, HTTPS = 443"
      },
      {
        q: "ข้อใดอธิบาย 'Stateless HTTP' ถูกต้อง?",
        options: [
          "เซิร์ฟเวอร์จำข้อมูลของ request ก่อนหน้าได้ทั้งหมดทุกครั้งที่ส่ง",
          "เซิร์ฟเวอร์ไม่จำ request ก่อนหน้า แต่ละ request เป็นเรื่องใหม่",
          "HTTP ใช้การเชื่อมต่อถาวรตลอดไปทั้งการใช้งาน",
          "HTTP ไม่มีโปรโตคอลรองรับการส่งข้อมูลใด ๆ เลย"
        ],
        correct: 1,
        explain: "Stateless = เซิร์ฟเวอร์ไม่จำ request ก่อนหน้า ถ้าอยากจำสถานะ (เช่น ล็อกอิน) ต้องใช้กลไกเสริมอย่าง Cookies"
      },
      {
        q: "Persistent HTTP Connection ดีกว่า Non-Persistent อย่างไร?",
        options: [
          "ใช้ TCP เดียวส่งหลาย request ต่อเนื่อง ไม่ต้อง handshake ใหม่ทุกครั้ง",
          "ไม่ต้องใช้ TCP ในการเชื่อมต่อเลยแม้แต่ครั้งเดียวตลอดเวลาการใช้งานจริงทั้งหมด",
          "ส่งข้อมูลได้ครั้งละ 1 ไบต์เท่านั้นต่อการเชื่อมต่อหนึ่งครั้ง",
          "เข้ารหัสข้อมูลทุกครั้งที่ทำการส่งข้อมูล"
        ],
        correct: 0,
        explain: "Persistent ใช้ TCP connection เดียวส่งหลาย request/response ต่อเนื่อง — เร็วกว่าเพราะไม่ต้องเปิด-ปิดและ handshake ใหม่ทุกไฟล์ (ค่า default ของ HTTP/1.1)"
      },
      {
        q: "วิธี HTTP ใดเหมาะกับการส่งข้อมูลฟอร์มสมัครสมาชิก (รหัสผ่าน)?",
        options: ["GET", "POST", "DELETE", "PUT เฉพาะอย่างเดียว"],
        correct: 1,
        explain: "POST ส่งข้อมูลใน Body ของ Request — ไม่โชว์บน URL เหมาะกับข้อมูลยาว/อ่อนไหว เช่น ฟอร์มสมัครสมาชิก"
      },
      {
        q: "DNS ทำหน้าที่อะไร?",
        options: [
          "แปลงชื่อโดเมนให้เป็น IP Address",
          "เข้ารหัสข้อมูลเว็บให้ปลอดภัย",
          "โอนย้ายไฟล์ระหว่างเครื่องสองเครื่อง",
          "ส่งอีเมลไปยังผู้รับปลายทาง"
        ],
        correct: 0,
        explain: "DNS = ระบบแปลงชื่อโดเมน (เช่น www.google.com) เป็น IP Address (เช่น 142.250.x.x) — เหมือนสมุดโทรศัพท์ของอินเทอร์เน็ต"
      },
      {
        q: "DNS Cache มีประโยชน์อย่างไร?",
        options: [
          "ลดความหน่วงและลดภาระ DNS Server เพราะไม่ต้องถามซ้ำ",
          "ทำให้เว็บไซต์ใหญ่ขึ้นและสามารถโหลดเนื้อหาได้มากขึ้น",
          "เข้ารหัสข้อมูลทั้งหมดในการเชื่อมต่อ",
          "เพิ่มแบนด์วิดท์ของอินเทอร์เน็ต"
        ],
        correct: 0,
        explain: "DNS Cache เก็บผลลัพธ์ที่เคยถามไว้ชั่วคราว — ตอบเร็วขึ้นและลดภาระของ DNS Server (ข้อมูลมีอายุจำกัดตาม TTL)"
      },
      {
        q: "Port มาตรฐานของ HTTPS คืออะไร?",
        options: ["443 (HTTPS)", "80 (HTTP ไม่เข้ารหัส)", "25 (SMTP ส่งเมล)", "53 (DNS แปลงชื่อ)"],
        correct: 0,
        explain: "HTTPS = Port 443, HTTP = Port 80, SMTP = Port 25, DNS = Port 53"
      }
    ],

    cheat: [
      { term: "Client-Server", def: "→ Server กลางเปิดบริการ, Client ขอใช้บริการ" },
      { term: "P2P", def: "→ ไม่มี Server ตายตัว, Peer คุยกันตรง ๆ" },
      { term: "Process", def: "→ โปรแกรมที่กำลังทำงาน" },
      { term: "Socket", def: "→ ประตูที่ Process ใช้ส่ง/รับข้อมูล" },
      { term: "IP Address", def: "→ บ้านเลขที่ (เครื่องไหน)" },
      { term: "Port Number", def: "→ เบอร์ห้อง (แอปไหนบนเครื่องนั้น)" },
      { term: "HTTP", def: "→ Port 80 · ไม่เข้ารหัส" },
      { term: "HTTPS", def: "→ Port 443 · เข้ารหัส TLS/SSL" },
      { term: "Stateless", def: "→ Server ไม่จำ request ก่อนหน้า" },
      { term: "Persistent", def: "→ ใช้ TCP เดียวส่งหลาย request (HTTP/1.1)" },
      { term: "Non-Persistent", def: "→ เปิด-ปิด TCP ใหม่ทุก request" },
      { term: "GET", def: "→ ขอดึงข้อมูล (ข้อมูลไปกับ URL)" },
      { term: "POST", def: "→ ส่งข้อมูลเพื่อสร้างสิ่งใหม่ (อยู่ใน Body)" },
      { term: "PUT", def: "→ ส่งข้อมูลแทนที่/อัปเดตทั้งหมด" },
      { term: "DNS", def: "→ แปลงชื่อโดเมนเป็น IP (สมุดโทรศัพท์)" },
      { term: "DNS Cache", def: "→ เก็บคำตอบไว้ชั่วคราว ลด Delay" },
      { term: "SMTP", def: "→ ส่งอีเมล (Port 25)" },
      { term: "IMAP / POP3", def: "→ รับ/ดึงอีเมล (143 / 110)" },
      { term: "FTP", def: "→ โอนไฟล์ (Port 20/21)" },
      { term: "HTTP Status", def: "→ 200 OK · 404 ไม่เจอ · 500 Server พัง" }
    ],

    flashcards: [
      { q: "สถาปัตยกรรมแอปมี 2 แบบอะไรบ้าง?", a: "Client-Server (มี Server กลาง) และ Peer-to-Peer (Peer คุยกันตรง ๆ ไม่มี Server ตายตัว)" },
      { q: "Process คืออะไร?", a: "โปรแกรมที่กำลังทำงานอยู่บนเครื่อง เช่น เบราว์เซอร์ที่เปิดอยู่เป็น 1 process" },
      { q: "Socket คืออะไร?", a: "'ประตู' ที่ Process ใช้ส่ง/รับข้อมูลเข้า-ออกจากเครือข่าย" },
      { q: "IP Address กับ Port ต่างกันยังไง?", a: "IP = ที่อยู่ของเครื่อง (บ้านเลขที่) · Port = หมายเลขแอปบนเครื่องนั้น (เบอร์ห้อง)" },
      { q: "ต้องใช้ข้อมูลคู่อะไรระบุปลายทางที่ Transport Layer?", a: "IP Address + Port Number คู่กันเสมอ" },
      { q: "แอปไหนต้องการ Delay ต่ำมาก?", a: "เกมออนไลน์และวิดีโอคอลแบบ Real-time" },
      { q: "แอปไหนทน Data Loss ไม่ได้เลย?", a: "การโอนไฟล์ — ข้อมูลหายไปนิดเดียวไฟล์ก็เสียหาย (ต้องใช้ TCP)" },
      { q: "HTTP กับ HTTPS ต่างกันยังไง?", a: "HTTPS = HTTP + TLS/SSL เข้ารหัสข้อมูล (Port 443) ส่วน HTTP ไม่เข้ารหัส (Port 80)" },
      { q: "Stateless HTTP คืออะไร?", a: "เซิร์ฟเวอร์ไม่จำ request ก่อนหน้า แต่ละ request เป็นเรื่องใหม่ — อยากจำสถานะต้องใช้ Cookies" },
      { q: "Persistent vs Non-Persistent?", a: "Persistent ใช้ TCP เดียวส่งหลาย request (เร็ว, default HTTP/1.1) · Non-Persistent เปิด-ปิด TCP ใหม่ทุก request" },
      { q: "GET กับ POST ต่างกันยังไง?", a: "GET ขอดึงข้อมูล ข้อมูลไปกับ URL · POST ส่งข้อมูลสร้างสิ่งใหม่ ข้อมูลอยู่ใน Body ไม่โชว์บน URL" },
      { q: "DNS Cache คืออะไร?", a: "การเก็บผลลัพธ์การแปลงชื่อไว้ชั่วคราว เพื่อลด Delay และภาระของ DNS Server" }
    ],

    glossary: [
      { term: "Application Layer", def: "ชั้นโปรแกรมประยุกต์ — โปรโตคอลที่ใช้โดยแอป เช่น HTTP, DNS, SMTP" },
      { term: "Client-Server", def: "สถาปัตยกรรมที่มี Server กลางเปิดบริการตลอดเวลา Client ขอใช้บริการเมื่อต้องการ" },
      { term: "Peer-to-Peer (P2P)", def: "สถาปัตยกรรมที่ไม่มี Server ตายตัว — อุปกรณ์แต่ละตัวเป็นทั้งผู้ให้และผู้ใช้บริการ" },
      { term: "Process", def: "โปรแกรมที่กำลังทำงานอยู่บนเครื่องคอมพิวเตอร์" },
      { term: "Socket", def: "จุดปลายทาง (End Point) ที่ Process ใช้ส่ง/รับข้อมูล — เปรียบเหมือนประตู" },
      { term: "IP Address", def: "ที่อยู่ของเครื่อง (Host) บนเครือข่าย — เปรียบเหมือนบ้านเลขที่" },
      { term: "Port Number", def: "หมายเลขที่ระบุ Process/แอปบน host — เปรียบเหมือนเบอร์ห้อง" },
      { term: "HTTP", def: "HyperText Transfer Protocol — โปรโตคอลขอ-ส่งข้อมูลเว็บ (Port 80, ไม่เข้ารหัส)" },
      { term: "HTTPS", def: "HTTP Secure — HTTP ที่เข้ารหัสด้วย TLS/SSL (Port 443)" },
      { term: "TLS/SSL", def: "เทคโนโลยีเข้ารหัสข้อมูลระหว่าง Client กับ Server ทำให้อ่านไม่ออกระหว่างทาง" },
      { term: "Stateless", def: "คุณสมบัติที่ Server ไม่จำสถานะของ request ก่อนหน้า" },
      { term: "Cookies", def: "กลไกเสริมที่ช่วยให้ Server จำสถานะผู้ใช้ (เช่น ล็อกอิน) ได้ แม้ HTTP จะ stateless" },
      { term: "Persistent Connection", def: "การเชื่อมต่อ TCP เดียวที่ส่งหลาย request/response ต่อเนื่องกัน" },
      { term: "Non-Persistent Connection", def: "การเชื่อมต่อที่เปิด TCP ใหม่สำหรับทุก request แล้วปิดทันที" },
      { term: "GET", def: "HTTP Method — ขอดึงข้อมูลจาก Server (ข้อมูลไปกับ URL)" },
      { term: "POST", def: "HTTP Method — ส่งข้อมูลเพื่อสร้าง/ประมวลผล (ข้อมูลอยู่ใน Body)" },
      { term: "PUT", def: "HTTP Method — ส่งข้อมูลแทนที่/อัปเดตข้อมูลเดิมทั้งหมด" },
      { term: "HTTP Status Code", def: "รหัสผลลัพธ์ของ HTTP — 200 OK, 404 ไม่เจอ, 500 Server พัง" },
      { term: "DNS", def: "Domain Name System — ระบบแปลงชื่อโดเมนเป็น IP Address (สมุดโทรศัพท์)" },
      { term: "DNS Cache", def: "การเก็บคำตอบการแปลงชื่อไว้ชั่วคราวเพื่อลด Delay — มีอายุตาม TTL" },
      { term: "TTL", def: "Time-To-Live — อายุของข้อมูลใน DNS Cache เมื่อหมดอายุต้องถาม DNS ใหม่" },
      { term: "SMTP", def: "Simple Mail Transfer Protocol — โปรโตคอลส่งอีเมล (Port 25)" },
      { term: "IMAP", def: "โปรโตคอลรับ/ดึงอีเมล — เก็บเมลไว้บนเซิร์ฟเวอร์ (Port 143)" },
      { term: "POP3", def: "โปรโตคอลรับ/ดึงอีเมล — ดาวน์โหลดเมลลงเครื่อง (Port 110)" }
    ],

    /* ข้อสอบหลังเรียน — บททดสอบท้ายบท 20 ข้อ (ปลดล็อกเมื่อเรียนครบทุกสไลด์) */
    exam: [
      { q: "สถาปัตยกรรม Client-Server ต่างจาก P2P อย่างไร?", options: ["มี Server กลางให้บริการ ส่วน P2P ทุกเครื่องเป็นทั้งผู้ให้และผู้ขอ", "Client-Server เป็นแบบไม่มี Server กลางคอยให้บริการอยู่เลยสักตัวเดียว", "P2P จำเป็นต้องมี Server กลางคอยควบคุมทุกอย่างเสมอ", "เหมือนกันทุกประการ ไม่มีความต่างกันเลย"], correct: 0, explain: "Client-Server มี Server กลางรอรับคำขอ ส่วน P2P แต่ละเครื่อง (peer) เป็นทั้งผู้ให้และผู้ขอในเวลาเดียวกัน" },
      { q: "ตัวอย่างแอปพลิเคชันแบบ P2P คือข้อใด?", options: ["เว็บเบราว์เซอร์", "BitTorrent", "อีเมล", "DNS"], correct: 1, explain: "BitTorrent เป็น P2P — เครื่องแต่ละเครื่องแชร์ไฟล์ให้กันโดยตรง ไม่มี Server กลางตายตัว" },
      { q: "Process คืออะไร?", options: ["โปรแกรมที่กำลังทำงานอยู่บนเครื่อง", "สายเคเบิลที่ใช้เชื่อมต่ออุปกรณ์เข้าด้วยกัน", "ที่อยู่ของเครื่องบนเครือข่าย", "ชนิดของข้อมูลที่ส่งผ่านเครือข่าย"], correct: 0, explain: "Process คือโปรแกรมที่กำลังทำงานอยู่ เช่น เบราว์เซอร์ที่เปิดอยู่คือ 1 Process" },
      { q: "Socket คืออะไร?", options: ["ที่อยู่ของเครื่องทั้งเครื่องบนเครือข่ายที่ใช้งาน", "ประตูที่ Process ใช้ส่ง/รับข้อมูลกับเครือข่าย", "รหัสผ่านสำหรับเข้าสู่ระบบ", "หน่วยความจำของเครื่องคอมพิวเตอร์"], correct: 1, explain: "Socket คือ 'ประตู' ที่ Process ใช้ส่ง/รับข้อมูล (IP = บ้าน, Port = ห้อง, Socket = ประตูของห้องนั้น)" },
      { q: "IP Address ใช้ระบุอะไร?", options: ["Process ที่ทำงานอยู่บนเครื่อง", "เครื่อง (Host) บนเครือข่าย", "ประเภทของสายที่ใช้เชื่อมต่อ", "ความเร็วอินเทอร์เน็ตของเครื่อง"], correct: 1, explain: "IP Address ระบุเครื่อง (Host) บนเครือข่าย — บอกว่า 'บ้านหลังไหน' ส่วน Port บอกว่า 'ห้องไหน'" },
      { q: "Port Number ใช้ระบุอะไร?", options: ["เครื่องปลายทางที่รับข้อมูลนั้น", "Process ใดบน host เป็นผู้รับ/ส่งข้อมูล", "ยี่ห้ออุปกรณ์เครือข่ายที่ผู้ใช้กำลังใช้อยู่", "ความแรงสัญญาณของคลื่นที่ใช้"], correct: 1, explain: "Port ระบุ Process ปลายทางบน host — Transport Layer ใช้ IP Address + Port Number คู่กันเสมอ" },
      { q: "แอปใดทน Data Loss ไม่ได้เลย?", options: ["การโทร VoIP", "การโอนไฟล์", "ดูวิดีโอสด", "เกมออนไลน์"], correct: 1, explain: "การโอนไฟล์ทน Data Loss ไม่ได้ — ข้อมูลหายนิดเดียวไฟล์เสียหาย จึงต้องการ reliable data transfer (TCP)" },
      { q: "แอปใดต้องการ Delay ต่ำที่สุด?", options: ["ส่งอีเมลข้อความธรรมดาทั่วไป", "เกมออนไลน์แบบ Real-time", "ดาวน์โหลดไฟล์ขนาดใหญ่", "อัปโหลดรูปถ่ายขึ้นเว็บ"], correct: 1, explain: "เกมออนไลน์/วิดีโอคอลต้องการความหน่วงต่ำมาก ส่วนอีเมลหรือดาวน์โหลดไฟล์ไม่ซีเรียสเรื่อง Delay" },
      { q: "HTTP ใช้ Port ใด?", options: ["25", "53", "80", "443"], correct: 2, explain: "HTTP = Port 80 (ไม่เข้ารหัส) ส่วน HTTPS = Port 443 (เข้ารหัส) — จำคู่นี้ให้แม่น" },
      { q: "HTTPS ใช้ Port ใด?", options: ["80", "443", "21", "110"], correct: 1, explain: "HTTPS = Port 443 — เหมือน HTTP แต่เข้ารหัสข้อมูลด้วย TLS/SSL" },
      { q: "HTTPS ปลอดภัยกว่า HTTP เพราะเหตุใด?", options: ["ส่งข้อมูลได้เร็วกว่าเสมอ", "เข้ารหัสข้อมูลด้วย TLS/SSL", "ใช้สาย Fiber ในการเชื่อมต่อ", "มี Server มากขึ้นในการให้บริการ"], correct: 1, explain: "HTTPS เข้ารหัสข้อมูลด้วย TLS/SSL ก่อนส่ง — คนแอบดักฟังระหว่างทางอ่านข้อมูลไม่ออก" },
      { q: "Stateless หมายถึงอะไร?", options: ["Server จดจำทุก request ที่เคยเข้ามาและเก็บไว้ตลอด", "Server ไม่จำ request ก่อนหน้า — แต่ละ request เป็นเรื่องใหม่เสมอ", "Server เก็บข้อมูลของผู้ใช้ไว้ตลอดเวลาแม้ปิดหน้าเว็บ", "การเชื่อมต่อถาวรระหว่าง Client กับ Server ตลอดเวลาที่ใช้งานอยู่เสมอ"], correct: 1, explain: "HTTP เป็น Stateless — Server ไม่จำ request ก่อนหน้า (ถ้าอยากจำต้องใช้กลไกเสริมอย่าง Cookies)" },
      { q: "Persistent Connection ต่างจาก Non-Persistent อย่างไร?", options: ["TCP เดียวส่งหลาย request ต่อเนื่อง / เปิด-ปิด TCP ใหม่ทุกครั้ง", "Persistent ช้ากว่าเพราะต้องเปิด-ปิดการเชื่อมต่อ TCP ใหม่ทุกครั้งที่ส่งข้อมูล", "Non-Persistent ใช้ UDP แทนที่จะเป็น TCP", "ไม่ต่างกันทั้งสองแบบเลย"], correct: 0, explain: "Persistent ใช้ TCP เดียวส่งหลาย request ต่อเนื่อง (ค่า default ของ HTTP/1.1) ส่วน Non-Persistent เปิด-ปิด TCP ใหม่ทุกครั้ง → ช้ากว่า" },
      { q: "HTTP Request บรรทัดแรกเรียกว่าอะไร?", options: ["Status Line (บรรทัดสถานะ)", "Request Line", "Header Line (บรรทัดหัวข้อ)", "Body (ส่วนเนื้อหา)"], correct: 1, explain: "Request Line = Method + URL + Version เช่น GET /index.html HTTP/1.1 ส่วน Response ใช้ Status Line" },
      { q: "HTTP Status 404 หมายถึงอะไร?", options: ["สำเร็จตามคำขอ (OK)", "เปลี่ยนเส้นทางไปหน้าอื่น (Redirect)", "หาไฟล์/หน้าเว็บไม่เจอ", "Server มีปัญหาในการทำงาน"], correct: 2, explain: "404 Not Found = หาไฟล์/หน้าเว็บไม่เจอ ส่วน 200 OK = สำเร็จ, 500 = Server มีปัญหา" },
      { q: "GET ใช้ทำอะไร?", options: ["ขอดึงข้อมูลจาก Server", "ส่งข้อมูลเพื่อสร้างสิ่งใหม่", "ลบข้อมูล", "ปิดการเชื่อมต่อ"], correct: 0, explain: "GET ขอดึงข้อมูล (เปิดเว็บ/ค้นหา) — ข้อมูลไปกับ URL เช่น ?search=cat" },
      { q: "POST เหมาะกับงานใด?", options: ["เปิดหน้าเว็บเพื่ออ่านข่าว", "กรอกฟอร์มสมัครสมาชิก", "ค้นหาข้อมูลผ่าน Google", "โหลดรูปภาพจากเว็บไซต์"], correct: 1, explain: "POST ส่งข้อมูลใน Body เพื่อสร้าง/ประมวลผล เช่น ฟอร์มสมัครสมาชิก — ไม่โชว์ข้อมูลบน URL" },
      { q: "PUT เหมาะกับงานใด?", options: ["ขอดึงข้อมูลจาก Server (อ่านอย่างเดียว)", "อัปเดต/แทนที่ข้อมูลที่มีอยู่บน Server", "ลบข้อมูลทั้งหมดออกจาก Server", "ปิดการเชื่อมต่อระหว่าง Client กับ Server"], correct: 1, explain: "PUT ใช้ส่งข้อมูลเพื่ออัปเดต/แทนที่ข้อมูลที่มีอยู่ — เช่น แก้ไขโปรไฟล์ ส่วน POST ใช้สร้างข้อมูลใหม่ และ GET ใช้ขอดึงข้อมูล" },
      { q: "DNS Cache ช่วยอะไร?", options: ["ทำให้เร็วขึ้นเพราะไม่ต้องถาม DNS ซ้ำ ๆ", "เก็บรหัสผ่านของผู้ใช้ไว้อย่างปลอดภัยที่สุด", "เพิ่มความปลอดภัยในการเชื่อมต่อ", "ลบข้อมูลที่ไม่ใช้ออกไป"], correct: 0, explain: "DNS Cache เก็บคำตอบที่เคยถามไว้ชั่วคราว — ตอบได้ทันทีไม่ต้องถาม DNS Server ใหม่ ลด Delay และภาระ Server" },
      { q: "SMTP ใช้สำหรับอะไร และใช้ Port ใด?", options: ["รับอีเมล Port 110", "ส่งอีเมล Port 25", "แปลงชื่อโดเมน Port 53", "เปิดเว็บ Port 80"], correct: 1, explain: "SMTP ใช้ส่งอีเมล (Port 25) ส่วนการรับ/ดึงเมลใช้ IMAP (143) / POP3 (110)" }
    ]
  }
};

/* ==========================================================================
   CHAPTER 4 — TRANSPORT LAYER
   ========================================================================== */
window.DATA.ch4 = {
  title: "Transport Layer",
  thai: "Transport Layer",
  slides: [
    { title: "Cover — บทที่ 4: Transport Layer", short: "เปิดบทเรียน" },
    { title: "หน้าที่ของ Transport Layer", short: "หน้าที่ของ Transport" },
    { title: "Multiplexing / Demultiplexing", short: "Mux / Demux" },
    { title: "Source Port / Destination Port", short: "Source / Dest Port" },
    { title: "TCP Demultiplexing และ 4-tuple", short: "4-tuple" },
    { title: "TCP vs UDP", short: "TCP vs UDP" },
    { title: "UDP Header", short: "UDP Header" },
    { title: "UDP Checksum", short: "UDP Checksum" },
    { title: "TCP Reliability + Reliable Data Transfer", short: "TCP Reliability / rdt" },
    { title: "ACK / NAK", short: "ACK / NAK" },
    { title: "TCP Three-Way Handshake", short: "Three-Way Handshake" },
    { title: "Sequence Number / Acknowledgment Number", short: "Seq # / Ack #" },
    { title: "การคำนวณ ACK จากจำนวน Byte", short: "คำนวณ ACK" },
    { title: "Flow Control / Receive Window", short: "Flow Control" },
    { title: "Congestion Control + AIMD", short: "Congestion / AIMD" },
    { title: "Timeout / Retransmission / Duplicate ACK", short: "Timeout / Retransmit" },
    { title: "Internet Checksum", short: "Internet Checksum" },
    { title: "Chapter Summary — สรุปบทเรียน", short: "สรุปบทเรียน" },
    { title: "Exam Cheat Sheet — สูตรจำก่อนสอบ", short: "สูตรจำก่อนสอบ" },
    { title: "Quiz — แบบทดสอบบท 4", short: "แบบทดสอบ" },
    { title: "Flashcards — การ์ดทบทวน", short: "การ์ดทบทวน" },
    { title: "Glossary — คำศัพท์", short: "คำศัพท์" },
    { title: "ข้อสอบหลังเรียน — แบบทดสอบท้ายบท 20 ข้อ", short: "ข้อสอบหลังเรียน" }
  ],

  sections: [
    { label: "ภาพรวมสัปดาห์", topics: [1] },
    { label: "1. พื้นฐาน Transport", topics: [2, 3, 4, 5] },
    { label: "2. TCP vs UDP", topics: [6, 7, 8] },
    { label: "3. TCP เชื่อถือได้", topics: [9, 10, 11, 12, 13] },
    { label: "4. Flow / Congestion / Timeout", topics: [14, 15, 16] },
    { label: "5. Checksum", topics: [17] },
    { label: "ทบทวนและฝึกฝน", topics: [18, 19, 20, 21, 22, 23] }
  ],

  udpFields: [
    { key: "src", t: "Source Port (16 bits)", d: "หมายเลขพอร์ตของ process ต้นทาง — ฝั่งรับจะใช้ค่านี้เพื่อตอบกลับ" },
    { key: "dst", t: "Destination Port (16 bits)", d: "หมายเลขพอร์ตของ process ปลายทางบนเครื่องผู้รับ" },
    { key: "len", t: "Length (16 bits)", d: "ความยาวทั้งหมดของ UDP Segment (Header + Data) หน่วยเป็นไบต์" },
    { key: "chk", t: "Checksum (16 bits)", d: "ค่าตรวจสอบความผิดพลาดของข้อมูล (Header + Data) — ฝั่งรับตรวจซ้ำ ถ้าไม่ตรงแสดงว่าข้อมูลเสียหาย" }
  ],

  handshake: [
    { key: 1, name: "SYN", from: "Client → Server", desc: "Client ส่ง SYN (seq = x) เพื่อขอเริ่มการเชื่อมต่อ" },
    { key: 2, name: "SYN-ACK", from: "Server → Client", desc: "Server ตอบ SYN-ACK (ack = x+1, seq = y) — รับ SYN แล้วขอเปิดฝั่งตัวเองด้วย" },
    { key: 3, name: "ACK", from: "Client → Server", desc: "Client ส่ง ACK (ack = y+1) — การเชื่อมต่อเปิดสำเร็จ เริ่มส่งข้อมูลได้เลย" }
  ],

  quiz: [
    {
      q: "หน้าที่หลักของ Transport Layer คืออะไร?",
      options: [
        "กำหนดเส้นทางข้ามเครือข่ายด้วย Routing Protocol ที่ซับซ้อน",
        "เชื่อมต่อระหว่าง Process กับ Process (ให้บริการแอป)",
        "แปลงสัญญาณไฟฟ้าให้เป็นบิต 0/1",
        "เข้ารหัสข้อมูลทั้งหมดก่อนส่งออก"
      ],
      correct: 1,
      explain: "Transport Layer ทำงานที่ขอบเครือข่าย (ใน Host) — เชื่อมการสื่อสารระหว่าง Process ต่อ Process และให้บริการ Mux/Demux, Reliability, Flow/Congestion Control"
    },
    {
      q: "Multiplexing ใน Transport Layer คืออะไร?",
      options: [
        "แยกข้อมูลไปยัง process ปลายทางที่ถูกต้องฝั่งผู้รับข้อมูล",
        "รวมข้อมูลจากหลาย Socket/Process ลงสู่เครือข่ายเดียว",
        "บีบอัดข้อมูลให้เล็กลงก่อนส่ง",
        "เข้ารหัสข้อมูลก่อนส่งออกไป"
      ],
      correct: 1,
      explain: "Multiplexing = รวมข้อมูลจากหลาย socket ฝั่งส่งลงช่องทางเดียว ส่วน Demultiplexing = แยกข้อมูลจากช่องทางเดียวไปยัง socket ปลายทางที่ถูกต้อง"
    },
    {
      q: "TCP Demultiplexing ใช้ 4-tuple ในการระบุ connection — 4-tuple ประกอบด้วยอะไรบ้าง?",
      options: [
        "Source IP, Source Port, Destination IP, Destination Port",
        "MAC Address, IP Address, Port, Checksum",
        "Source MAC Address, Dest MAC Address, Source IP, Dest IP",
        "Seq Number, Ack Number, Window, Checksum"
      ],
      correct: 0,
      explain: "4-tuple = (Source IP, Source Port, Destination IP, Destination Port) — ใช้ระบุ TCP connection แต่ละสายได้ไม่ซ้ำกัน"
    },
    {
      q: "Source Port มีไว้ทำอะไร?",
      options: [
        "ระบุ process ปลายทางบนเครื่องผู้รับปลายทางนั้นทั้งหมด",
        "ระบุ process ต้นทาง เพื่อให้ฝั่งรับตอบกลับถูกที่",
        "บอกขนาดของข้อมูลที่ส่งทั้งหมด",
        "ตรวจสอบความถูกต้องของข้อมูลที่ได้รับ"
      ],
      correct: 1,
      explain: "Source Port ระบุ process/แอปต้นทาง — ฝั่งรับใช้ค่านี้ตอบกลับ (เป็น Destination Port ในทิศตรงข้าม)"
    },
    {
      q: "ข้อใดเป็นความแตกต่างที่สำคัญระหว่าง TCP กับ UDP?",
      options: [
        "TCP เชื่อถือได้ ส่วน UDP ไม่มีการรับประกัน",
        "UDP เชื่อถือได้และมีลำดับข้อมูล ส่วน TCP ไม่มี",
        "ทั้งสองเหมือนกันทุกอย่างทุกประการ",
        "TCP ใช้ไม่ได้กับอินเทอร์เน็ตในปัจจุบัน"
      ],
      correct: 0,
      explain: "TCP ให้ Reliability (ส่งซ้ำ, ลำดับ, Flow/Congestion Control) ส่วน UDP ไม่มี connection ไม่รับประกัน — แลกกับความเร็วและ Delay ต่ำ"
    },
    {
      q: "UDP Header มีขนาดทั้งหมดกี่ไบต์?",
      options: ["8 ไบต์", "20 ไบต์", "16 ไบต์", "4 ไบต์"],
      correct: 0,
      explain: "UDP Header = 8 ไบต์ (4 ช่อง × 2 ไบต์): Source Port, Destination Port, Length, Checksum — เล็กและเรียบง่ายกว่า TCP (20 ไบต์ขึ้นไป)"
    },
    {
      q: "UDP Checksum ใช้ตรวจอะไร?",
      options: [
        "ตรวจความผิดพลาดของข้อมูล (Error)",
        "เข้ารหัสข้อมูลให้ปลอดภัยระหว่างส่ง",
        "บีบอัดข้อมูลให้มีขนาดเล็กลง",
        "จัดลำดับข้อมูลใหม่ให้ถูกต้องทั้งหมดก่อนส่ง"
      ],
      correct: 0,
      explain: "Checksum ใช้ตรวจจับความเสียหายของข้อมูล — ฝั่งรับคำนวณใหม่แล้วเทียบ ถ้าไม่ตรงแสดงว่าข้อมูลเสีย (แต่ UDP ไม่ส่งซ้ำให้)"
    },
    {
      q: "rdt2.0 เพิ่มกลไกอะไรจาก rdt1.0?",
      options: [
        "การตรวจจับข้อผิดพลาด + ACK/NAK",
        "การบีบอัดข้อมูลให้มีขนาดเล็กลง",
        "การเข้ารหัสข้อมูลทั้งหมดก่อนทำการส่งออก",
        "การเลือกเส้นทางที่ดีที่สุด"
      ],
      correct: 0,
      explain: "rdt1.0 ส่งอย่างเดียว (สมมติช่องทางสมบูรณ์) · rdt2.0 เพิ่ม Error Detection และ ACK/NAK — ถ้า NAK หรือตรวจพบ error ผู้ส่งต้องส่งใหม่"
    },
    {
      q: "การเปิดการเชื่อมต่อ TCP (Three-Way Handshake) เริ่มต้นด้วยอะไร?",
      options: ["FIN", "ACK", "SYN", "RST"],
      correct: 2,
      explain: "ลำดับคือ SYN (Client→Server) → SYN-ACK (Server→Client) → ACK (Client→Server) — ครบ 3 ขั้นถึงเริ่มส่งข้อมูลได้"
    },
    {
      q: "ACK Number คำนวณจากอะไร?",
      options: [
        "Seq# + จำนวนไบต์ที่รับสะสม",
        "จำนวนไบต์ที่ส่งทั้งหมดหารด้วยสอง",
        "ขนาดของ TCP Header ทั้งหมด",
        "เวลาที่ใช้ในการส่งทั้งหมด"
      ],
      correct: 0,
      explain: "ACK# = Seq# + จำนวนไบต์ที่รับได้ เช่น รับ seq 0 จำนวน 1000 ไบต์ → ACK = 1000 (cumulative — บอกว่าพร้อมรับไบต์ถัดไป)"
    },
    {
      q: "Flow Control ใช้กลไกอะไรของ TCP?",
      options: [
        "Receive Window (rwnd) ที่ฝั่งรับประกาศไว้",
        "การเข้ารหัสข้อมูลทั้งหมดของ Segment ก่อนส่ง",
        "หมายเลขพอร์ตของ process ปลายทาง",
        "UDP Checksum ของข้อมูลที่ส่ง"
      ],
      correct: 0,
      explain: "Flow Control = ฝั่งรับประกาศ Receive Window (rwnd) ว่ามี buffer ว่างเท่าไหร่ — ผู้ส่งต้องไม่ส่งเกิน rwnd เพื่อกัน buffer ล้น"
    },
    {
      q: "AIMD ย่อมาจากอะไร และทำงานยังไง?",
      options: [
        "Additive Increase / Multiplicative Decrease",
        "Always Increase / Multiple Delay ในทุกกรณีของการทำงาน",
        "Auto Internet / Manual Download ของระบบ",
        "Add IP Address / Modify Data ในระบบ"
      ],
      correct: 0,
      explain: "AIMD: เติบโตแบบบวก (เพิ่ม cwnd ทีละ 1 MSS ต่อ RTT) แต่เมื่อเกิด Loss จะลดแบบคูณ (ลดครึ่ง) — ควบคุมความเร็วตามสภาพเครือข่าย"
    }
  ],

  cheat: [
    { term: "Transport Layer", def: "→ เชื่อม Process ต่อ Process · PDU = Segment" },
    { term: "Multiplexing", def: "→ รวมหลาย Socket ลงช่องทางเดียว" },
    { term: "Demultiplexing", def: "→ แยกข้อมูลไป Socket ที่ถูกต้อง" },
    { term: "4-tuple", def: "→ Src IP + Src Port + Dst IP + Dst Port" },
    { term: "Source Port", def: "→ ระบุ Process ต้นทาง (ตอบกลับที่ไหน)" },
    { term: "Destination Port", def: "→ ระบุ Process ปลายทาง" },
    { term: "TCP", def: "→ เชื่อถือได้, มีลำดับ, Flow/Congestion Control" },
    { term: "UDP", def: "→ เร็ว, ไม่มี Connection, Header 8 ไบต์" },
    { term: "UDP Header", def: "→ Src Port · Dst Port · Length · Checksum (8B)" },
    { term: "UDP Checksum", def: "→ ตรวจจับ Bit Error (detect ไม่แก้ไข)" },
    { term: "rdt1.0", def: "→ ส่งอย่างเดียว สมมติช่องทางสมบูรณ์" },
    { term: "rdt2.0", def: "→ เพิ่ม Error Detection + ACK/NAK" },
    { term: "ACK", def: "→ ยืนยันรับข้อมูลถูกต้อง" },
    { term: "NAK", def: "→ บอกว่าข้อมูลเสีย ขอส่งใหม่" },
    { term: "Three-Way Handshake", def: "→ SYN → SYN-ACK → ACK" },
    { term: "SYN / FIN", def: "→ SYN เริ่มเชื่อมต่อ · FIN ขอปิด" },
    { term: "ACK #", def: "→ Seq# + จำนวนไบต์ที่รับ (Cumulative)" },
    { term: "Flow Control", def: "→ Receive Window (rwnd) จากฝั่งรับ" },
    { term: "Congestion Control", def: "→ AIMD: เพิ่มทีละน้อย / ลดครึ่งเมื่อ Loss" },
    { term: "Dup ACK ×3", def: "→ น่าจะ Packet หาย → Fast Retransmit" },
    { term: "Timeout", def: "→ หมดเวลา → Retransmission (ส่งซ้ำ)" },
    { term: "Internet Checksum", def: "→ 1's complement sum — ตรวจ error ง่าย ๆ" }
  ],

  flashcards: [
    { q: "Transport Layer เชื่อมระหว่างอะไรกับอะไร?", a: "Process กับ Process (PDU เรียกว่า Segment) — อยู่ที่ Host ไม่ใช่ Router" },
    { q: "Multiplexing คืออะไร?", a: "รวมข้อมูลจากหลาย Socket/Process ฝั่งส่ง ลงสู่เครือข่ายเดียว" },
    { q: "Demultiplexing คืออะไร?", a: "แยกข้อมูลจากเครือข่ายไปยัง Socket/Process ปลายทางที่ถูกต้อง" },
    { q: "4-tuple ประกอบด้วยอะไร?", a: "Source IP, Source Port, Destination IP, Destination Port — ระบุ TCP connection ได้ไม่ซ้ำ" },
    { q: "Source Port ใช้ทำอะไร?", a: "ระบุ Process ต้นทาง — ฝั่งรับใช้ตอบกลับ (กลายเป็น Dest Port ฝั่งตรงข้าม)" },
    { q: "UDP Header มีกี่ไบต์ ประกอบด้วยอะไร?", a: "8 ไบต์: Source Port, Destination Port, Length, Checksum" },
    { q: "UDP Checksum ตรวจอะไร?", a: "Bit Error ในข้อมูล — detect เท่านั้น ไม่ส่งซ้ำให้ (ต่างจาก TCP)" },
    { q: "rdt1.0 กับ rdt2.0 ต่างกันยังไง?", a: "rdt1.0 ส่งอย่างเดียว · rdt2.0 เพิ่ม Error Detection + ACK/NAK" },
    { q: "ACK กับ NAK คืออะไร?", a: "ACK = ยืนยันรับถูกต้อง · NAK = บอกว่าข้อมูลเสีย ส่งใหม่" },
    { q: "Three-Way Handshake เป็นยังไง?", a: "SYN → SYN-ACK → ACK — ครบ 3 ขั้นจึงเปิดการเชื่อมต่อ TCP ได้" },
    { q: "ACK Number คำนวณยังไง?", a: "Seq# + จำนวนไบต์ที่รับ (Cumulative ACK) เช่น รับ 1000 ไบต์ → ACK = 1000" },
    { q: "Flow Control กับ Congestion Control ต่างกันยังไง?", a: "Flow = กัน Receiver buffer ล้น (rwnd) · Congestion = กันเครือข่ายแน่น (cwnd/AIMD)" },
    { q: "เกิด Timeout หรือ Dup ACK ×3 แล้วยังไง?", a: "ส่งซ้ำ (Retransmission) — Dup ACK ×3 ใช้ Fast Retransmit ไม่ต้องรอ timeout" }
  ],

  glossary: [
    { term: "Transport Layer", def: "ชั้นขนส่ง — เชื่อมต่อระหว่าง Process ต่อ Process และให้บริการ Mux/Demux, Reliability" },
    { term: "Segment", def: "PDU ของ Transport Layer — ข้อมูล + TCP/UDP Header" },
    { term: "Multiplexing", def: "การรวมข้อมูลจากหลาย Socket ลงสู่เครือข่ายเดียว (ฝั่งส่ง)" },
    { term: "Demultiplexing", def: "การแยกข้อมูลจากเครือข่ายไปยัง Socket/Process ปลายทางที่ถูกต้อง" },
    { term: "Socket", def: "จุดปลายทาง (IP + Port) ที่ Process ใช้ส่ง/รับข้อมูล" },
    { term: "Source Port", def: "หมายเลขพอร์ตของ Process ต้นทาง" },
    { term: "Destination Port", def: "หมายเลขพอร์ตของ Process ปลายทาง" },
    { term: "4-tuple", def: "(Src IP, Src Port, Dst IP, Dst Port) — ใช้ระบุ TCP Connection แต่ละสาย" },
    { term: "TCP", def: "Transmission Control Protocol — เชื่อถือได้, มีลำดับ, Flow/Congestion Control" },
    { term: "UDP", def: "User Datagram Protocol — เร็ว ไม่มี Connection, Header 8 ไบต์" },
    { term: "UDP Header", def: "8 ไบต์: Source Port, Destination Port, Length, Checksum" },
    { term: "Checksum", def: "ค่าตรวจสอบความผิดพลาดของข้อมูล — ตรวจจับ Bit Error ได้ แต่ไม่แก้ไข" },
    { term: "rdt1.0", def: "Reliable Data Transfer รุ่นแรก — ส่งอย่างเดียว สมมติช่องทางสมบูรณ์แบบ" },
    { term: "rdt2.0", def: "รุ่นที่เพิ่ม Error Detection และ ACK/NAK" },
    { term: "ACK", def: "Acknowledgment — ยืนยันว่าข้อมูลที่รับถูกต้อง" },
    { term: "NAK", def: "Negative Acknowledgment — บอกว่าข้อมูลเสีย ขอให้ส่งใหม่" },
    { term: "Three-Way Handshake", def: "การเปิดการเชื่อมต่อ TCP: SYN → SYN-ACK → ACK" },
    { term: "SYN", def: "Synchronize — ขอเริ่มการเชื่อมต่อ (ตั้ง Sequence Number)" },
    { term: "FIN", def: "Finish — ขอปิดการเชื่อมต่อ TCP" },
    { term: "Sequence Number", def: "เลขลำดับของไบต์ข้อมูลแรกใน Segment ที่ส่ง" },
    { term: "Acknowledgment Number", def: "Seq# + จำนวนไบต์ที่รับ (Cumulative) — บอกว่าพร้อมรับไบต์ถัดไป" },
    { term: "Flow Control", def: "ควบคุมอัตราส่งให้ไม่ล้น Buffer ฝั่งรับ — ใช้ Receive Window (rwnd)" },
    { term: "Receive Window", def: "ขนาด Buffer ว่างที่ฝั่งรับประกาศ — ผู้ส่งต้องไม่ส่งเกินค่านี้" },
    { term: "Congestion Control", def: "ควบคุมอัตราส่งตามสภาพเครือข่าย — ใช้ Congestion Window (cwnd) และ AIMD" },
    { term: "AIMD", def: "Additive Increase / Multiplicative Decrease — เพิ่มทีละน้อย ลดครึ่งเมื่อ Loss" },
    { term: "Retransmission", def: "การส่งข้อมูลซ้ำเมื่อ Timeout หรือได้รับ Duplicate ACK" },
    { term: "Duplicate ACK", def: "ACK ซ้ำเดิม — ถ้าเจอ 3 ตัวติดต่อกัน = สงสัย Packet หาย → Fast Retransmit" },
    { term: "Fast Retransmit", def: "ส่งซ้ำทันทีเมื่อได้ Duplicate ACK 3 ตัว โดยไม่ต้องรอ Timeout" }
  ],

  /* ข้อสอบหลังเรียน — บททดสอบท้ายบท 20 ข้อ (ปลดล็อกเมื่อเรียนครบทุกสไลด์) */
  exam: [
    { q: "Transport Layer เชื่อมต่อระหว่างอะไรกับอะไร?", options: ["เครื่องกับเครื่อง", "Process กับ Process", "Router กับ Router", "แอปกับแอปในเครื่องเดียว"], correct: 1, explain: "Transport Layer เชื่อมต่อ Process กับ Process (อยู่ที่ Host ไม่ใช่ Router)" },
    { q: "PDU ของ Transport Layer เรียกว่าอะไร?", options: ["Frame (เฟรม)", "Packet (แพ็กเก็ต)", "Segment", "Bit (บิต)"], correct: 2, explain: "Transport Layer เรียกว่า Segment ส่วน Packet เป็นของ Network Layer และ Frame เป็นของ Data Link" },
    { q: "Multiplexing คืออะไร?", options: ["แยกข้อมูลไปยังหลาย Socket ปลายทางฝั่งผู้รับ", "รวมข้อมูลจากหลาย Socket ลงช่องทางเดียว", "เข้ารหัสข้อมูลก่อนส่งออก", "แบ่งข้อมูลออกเป็นชิ้นเล็ก ๆ"], correct: 1, explain: "Multiplexing = ฝั่งส่งรวมข้อมูลจากหลาย Socket/Process ลงสู่เครือข่ายเดียว" },
    { q: "Demultiplexing คืออะไร?", options: ["รวมข้อมูลหลาย Socket ลงสู่ช่องทางเดียวฝั่งส่ง", "แยกข้อมูลไปยัง Socket ที่ถูกต้องฝั่งรับ", "หาเส้นทางระหว่างเครือข่าย", "ตรวจสอบความถูกต้องของข้อมูล"], correct: 1, explain: "Demultiplexing = ฝั่งรับแยกข้อมูลไปยัง Socket ที่ถูกต้อง โดยดูจาก Port Number" },
    { q: "TCP 4-tuple ประกอบด้วยอะไรบ้าง?", options: ["Src IP + Src Port + Dst IP + Dst Port", "Src IP + Dst IP ของเครื่องเท่านั้น", "Src Port + Dst Port ของ process เท่านั้น", "MAC + IP + Port + Checksum รวมกัน"], correct: 0, explain: "4-tuple = ที่อยู่ครบทั้ง 4: IP ต้นทาง/ปลายทาง + Port ต้นทาง/ปลายทาง — ใช้แยกการเชื่อมต่อ TCP แต่ละอัน" },
    { q: "Source Port ใช้บอกอะไร?", options: ["Process ปลายทางที่ทำหน้าที่รับข้อมูลนั้น", "Process ต้นทาง (ฝั่งรับตอบกลับที่นี่)", "ขนาดของข้อมูลที่ส่งในแต่ละครั้ง", "ความเร็วในการส่งข้อมูล"], correct: 1, explain: "Source Port ระบุ Process ต้นทาง — ฝั่งรับใช้ค่านี้เพื่อส่งข้อมูลตอบกลับ" },
    { q: "ข้อใดเป็นความต่างหลักระหว่าง TCP กับ UDP?", options: ["TCP เชื่อถือได้ / UDP เร็วและไม่มี Connection", "TCP เร็วกว่า UDP เสมอ", "UDP เชื่อถือได้และมีลำดับข้อมูลมากกว่า TCP เสมอ", "ไม่ต่างกันเลยทั้งสองแบบ"], correct: 0, explain: "TCP เน้นความเชื่อถือได้ (Reliable, มีลำดับ, Flow/Congestion Control) ส่วน UDP เน้นความเร็ว ไร้ Connection" },
    { q: "UDP Header มีขนาดกี่ไบต์?", options: ["20 ไบต์", "8 ไบต์", "16 ไบต์", "4 ไบต์"], correct: 1, explain: "UDP Header = 8 ไบต์ (4 ช่อง × 2 ไบต์) — เบาและเร็วกว่า TCP ที่ 20+ ไบต์" },
    { q: "UDP Header ประกอบด้วยช่องใดบ้าง?", options: ["Src Port, Dst Port, Length, Checksum", "Src IP, Dst IP, Seq, Ack, Window Size", "SYN, ACK, FIN, RST Flag", "TTL, Type, Code, ID Number"], correct: 0, explain: "UDP Header มี 4 ช่อง: Source Port, Destination Port, Length, Checksum" },
    { q: "UDP Checksum ใช้ทำอะไร?", options: ["เข้ารหัสข้อมูลก่อนส่งออกไป", "ตรวจจับความผิดพลาดของข้อมูล (Error)", "หาเส้นทางระหว่างเครือข่าย", "บีบอัดข้อมูลให้มีขนาดเล็กลงก่อนส่งออกไป"], correct: 1, explain: "UDP Checksum ตรวจความผิดพลาดของข้อมูล (Header + Data) — ตรวจจับได้แต่ไม่แก้ไข (ถ้าเสียต้องส่งใหม่โดยแอป)" },
    { q: "rdt1.0 สมมติว่าช่องทางเป็นแบบใด?", options: ["มี Error เกิดขึ้นบ่อยครั้ง", "สมบูรณ์ ไม่มี Error", "ช้ามากและหน่วงสูง", "ไม่มีการส่งข้อมูลเลย"], correct: 1, explain: "rdt1.0 สมมติช่องทางสมบูรณ์แบบ — ส่งอย่างเดียว ไม่ต้องตรวจสอบอะไร" },
    { q: "rdt2.0 เพิ่มกลไกใดเข้ามา?", options: ["Error Detection + ACK/NAK", "การเข้ารหัสข้อมูลทั้งหมดก่อนส่ง", "การบีบอัดข้อมูลก่อนส่ง", "Flow Control ฝั่งผู้รับ"], correct: 0, explain: "rdt2.0 เพิ่มการตรวจจับ Error และการตอบ ACK (รับถูก) / NAK (ขอส่งใหม่)" },
    { q: "ACK หมายถึงอะไร?", options: ["ขอให้ส่งข้อมูลใหม่ให้ครบถ้วน", "ยืนยันว่ารับข้อมูลถูกต้อง", "ปิดการเชื่อมต่อทันที", "เริ่มการเชื่อมต่อใหม่"], correct: 1, explain: "ACK (Acknowledgement) = ยืนยันว่ารับข้อมูลถูกต้อง ส่วน NAK = บอกว่าข้อมูลเสีย ขอส่งใหม่" },
    { q: "ลำดับ Three-Way Handshake ถูกต้องคือข้อใด?", options: ["ACK → SYN → SYN-ACK", "SYN → SYN-ACK → ACK", "SYN → ACK → SYN-ACK", "SYN-ACK → SYN → ACK"], correct: 1, explain: "Three-Way Handshake = SYN → SYN-ACK → ACK — ครบ 3 ขั้นแล้วเชื่อมต่อสำเร็จ" },
    { q: "SYN ใช้ทำอะไร?", options: ["ขอเริ่มการเชื่อมต่อ", "ขอปิดการเชื่อมต่อทันที", "ยืนยันการรับข้อมูลแล้ว", "ส่งข้อมูลไปยังปลายทาง"], correct: 0, explain: "SYN ใช้เริ่มการเชื่อมต่อ ส่วน FIN ใช้ขอยุติการเชื่อมต่อ" },
    { q: "การคำนวณ ACK Number ใช้สูตรใด?", options: ["Seq# − จำนวนไบต์ที่รับ", "Seq# + จำนวนไบต์ที่รับสะสม", "จำนวนไบต์ทั้งหมด × 2", "Seq# × จำนวนไบต์ที่รับสะสมไว้"], correct: 1, explain: "ACK# = Seq# + จำนวนไบต์ที่รับแล้ว (Cumulative) — บอกว่าข้อมูลถึงไบต์ไหนถัดไป" },
    { q: "Flow Control ใช้กลไกใดจากฝั่งรับ?", options: ["Receive Window (rwnd)", "Congestion Window (cwnd)", "Checksum", "TTL"], correct: 0, explain: "Flow Control ใช้ Receive Window (rwnd) ที่ฝั่งรับประกาศ — ผู้ส่งต้องไม่ส่งเกิน buffer ที่รับได้" },
    { q: "AIMD เมื่อเจอ Packet Loss ทำอย่างไร?", options: ["เพิ่ม cwnd เป็น 2 เท่า", "ลด cwnd ลงครึ่งหนึ่ง", "หยุดส่งถาวร", "ไม่ทำอะไร"], correct: 1, explain: "AIMD = เพิ่มทีละน้อย (Additive Increase) แต่เมื่อเจอ Loss ลดครึ่งทันที (Multiplicative Decrease)" },
    { q: "Duplicate ACK 3 ตัวติดต่อกันหมายถึงอะไร?", options: ["ส่งข้อมูลสำเร็จครบถ้วนแล้ว", "Packet หาย → Fast Retransmit", "ปิดการเชื่อมต่อทันที", "เพิ่มความเร็วในการส่งข้อมูลทันที"], correct: 1, explain: "Duplicate ACK 3 ตัว = สงสัย Packet หาย → ส่งซ้ำทันที (Fast Retransmit) โดยไม่ต้องรอ Timeout" },
    { q: "Internet Checksum ตรวจสอบข้อมูลแบบใด?", options: ["1's complement sum", "2's complement sum", "CRC 32 บิต (Cyclic Redundancy)", "การเข้ารหัสแบบ AES 256 บิต"], correct: 0, explain: "Internet Checksum ใช้ 1's complement sum ของข้อมูล — ง่าย เร็ว แต่ตรวจ error ได้ไม่ละเอียดเท่า CRC" }
  ]
};

/* ==========================================================================
   POOL 2 — ข้อสอบเพิ่ม 80 ข้อ (ระดับกลาง–ยาก) สำหรับข้อสอบรวม test.html
   ========================================================================== */
window.DATA.extraExam = [
  /* ---------- บท 1: Fundamentals (20 ข้อ) ---------- */
  { q: "นักเรียนส่งข้อความ LINE ไปหาเพื่อน แต่เพื่อนปิดเครื่อง — การสื่อสารครั้งนี้ล้มเหลวเพราะขาดองค์ประกอบใด?", options: ["Sender (ผู้ส่ง)", "Receiver (ผู้รับ)", "Protocol (กฎ)", "Medium (สื่อกลาง)"], correct: 1, explain: "ผู้รับไม่อยู่ (ปิดเครื่อง) = ขาด Receiver ปลายทาง ข้อความจึงส่งไปแล้วแต่รับไม่ได้", ch: 1 },
  { q: "สัญญาณวิทยุ AM/FM ที่สถานีกระจายเสียงส่งให้ผู้ฟังทุกคน เป็นการสื่อสารแบบใด?", options: ["Simplex (ทางเดียว)", "Half-Duplex (ผลัดกันส่ง)", "Full-Duplex (พร้อมกัน)", "ไม่มีข้อใดถูกต้อง"], correct: 0, explain: "สถานีส่งอย่างเดียว ผู้ฟังรับอย่างเดียว ตอบกลับไม่ได้ = Simplex เช่นเดียวกับทีวีและเพจเจอร์", ch: 1 },
  { q: "ข้อใดเป็นการสื่อสารแบบ Half-Duplex ที่พบในชีวิตประจำวัน?", options: ["การโทรศัพท์ที่พูดและฟังพร้อมกันทั้งสองฝ่าย", "วิทยุสื่อสารแบบกดพูด-ปล่อยฟัง (PTT)", "การถ่ายทอดสดทีวี", "การดาวน์โหลดและอัปโหลดพร้อมกัน"], correct: 1, explain: "PTT (Push-to-Talk) ส่งหรือรับได้ทีละทาง — กดพูดได้อย่างเดียว ปล่อยแล้วถึงฟังได้ = Half-Duplex", ch: 1 },
  { q: "Bandwidth (แบนด์วิดท์) หมายถึงอะไร?", options: ["ความจุของช่องทางส่งข้อมูลในทางทฤษฎี (bps)", "เวลาที่ข้อมูลใช้เดินทางจากต้นทางถึงปลายทาง", "จำนวนอุปกรณ์ที่เชื่อมต่ออยู่ในเครือข่าย", "ระดับความแรงของสัญญาณ Wi-Fi ที่ใช้อยู่"], correct: 0, explain: "Bandwidth = ความกว้าง/ความจุของช่องทาง (bps) ส่วนเวลาที่ใช้เดินทางคือ Delay — อย่าสับสนกัน", ch: 1 },
  { q: "ข้อใดกล่าวถึงความแตกต่างระหว่าง Bandwidth กับ Delay ถูกต้อง?", options: ["Bandwidth คือความจุของช่องทาง ส่วน Delay คือเวลาที่ใช้เดินทาง", "Bandwidth คือเวลาเดินทางของข้อมูล ส่วน Delay คือความจุของช่องทาง", "ทั้งคู่คือสิ่งเดียวกัน เรียกชื่อต่างกันเท่านั้น", "Bandwidth ใช้ได้เฉพาะกับเครือข่ายไร้สาย"], correct: 0, explain: "Bandwidth = กี่บิตต่อวินาทีที่ช่องทางรับได้ / Delay = กี่มิลลิวินาทีที่ข้อมูลใช้เดินทาง", ch: 1 },
  { q: "สายใยแก้วนำแสง (Fiber Optic) เหมาะกับระยะทางไกลและความเร็วสูง เพราะเหตุใด?", options: ["ส่งแสง ทนสัญญาณรบกวน สัญญาณเสื่อมช้า", "ราคาถูกกว่าสายทองแดงทุกกรณีและทุกสถานการณ์", "ใช้ไฟฟ้าเลี้ยงสัญญาณได้ตลอดทางยาว", "ดัดงอได้ง่ายโดยไม่มีผลต่อสัญญาณเลย"], correct: 0, explain: "Fiber ส่งแสง — ไม่ถูกรบกวนจากคลื่นแม่เหล็กไฟฟ้า สัญญาณเสื่อมช้าจึงเหมาะระยะไกล/ความเร็วสูง", ch: 1 },
  { q: "ในการเชื่อมต่อแบบ Multipoint ที่อุปกรณ์หลายตัวแชร์สายเดียวกัน ต้องมีกลไกใดเพื่อไม่ให้ข้อมูลชนกัน?", options: ["Media Access Control (ควบคุมการเข้าถึงสื่อ)", "การเข้ารหัสข้อมูลทุกชิ้นที่ส่งออกไปทั้งหมดก่อนส่ง", "การเพิ่มสายให้ทุกอุปกรณ์แยกกัน", "การปิดอุปกรณ์ที่ไม่ใช้ในเวลานั้น"], correct: 0, explain: "หลายอุปกรณ์แชร์ช่องทางเดียวกันต้องมีกฎว่าใครส่งเมื่อไหร่ (เช่น CSMA/CD) ไม่งั้นข้อมูลชนกัน", ch: 1 },
  { q: "ถ้าสายหลัก (Backbone) ของเครือข่ายแบบ Bus ขาด เกิดอะไรขึ้น?", options: ["เครือข่ายทั้งหมดไม่สามารถสื่อสารได้", "เฉพาะเครื่องที่อยู่ปลายสุดเท่านั้นที่ใช้ไม่ได้", "เครื่องอื่นยังทำงานปกติได้ 100%", "ข้อมูลวิ่งไปเส้นทางสำรองอัตโนมัติ"], correct: 0, explain: "Bus ใช้สายเส้นเดียวร่วมกัน — สายขาด = ทั้งเครือข่ายล่ม (จุดอ่อนที่ใหญ่ที่สุดของ Bus)", ch: 1 },
  { q: "ข้อเสียที่สำคัญที่สุดของ Topology แบบ Ring คืออะไร?", options: ["ถ้าสายหรืออุปกรณ์หนึ่งขาด วงแหวนทั้งหมดใช้ไม่ได้", "ต้องใช้สายจำนวนมากที่สุดในทุกโทโพโลยี", "ไม่สามารถส่งข้อมูลได้พร้อมกันเลยแม้แต่สองเครื่อง", "ไม่เหมาะกับการใช้งานในระยะทางสั้น ๆ เลย"], correct: 0, explain: "Ring เป็นวงเดียว — จุดเดียวเสียทั้งวงล่ม แม้บางรุ่นจะมีวงสำรอง (Dual Ring) ก็ตาม", ch: 1 },
  { q: "Topology แบบใดที่สิ้นเปลืองสายมากที่สุดแต่ทนทานต่อการเสียหายของสายมากที่สุด?", options: ["Mesh (ตาข่าย)", "Star (ดาว)", "Bus (เส้นตรง)", "Ring (วงแหวน)"], correct: 0, explain: "Mesh เชื่อมทุกคู่ → ใช้สายมากสุด แต่มีเส้นทางสำรองเยอะ จึงทนทานต่อการขาดของสายมากที่สุด", ch: 1 },
  { q: "เครือข่ายที่เชื่อมต่ออุปกรณ์ส่วนตัวรอบตัวเราในรัศมีประมาณ 1–10 เมตร เช่น หูฟังบลูทูธ เรียกว่าอะไร?", options: ["PAN (Personal Area Network)", "LAN (Local Area Network)", "MAN (Metropolitan Area Network)", "WAN (Wide Area Network)"], correct: 0, explain: "PAN ครอบคลุมรอบตัวคนเดียว ~10 เมตร ส่วน LAN ระดับบ้าน/ตึก MAN ระดับเมือง WAN ระดับประเทศ", ch: 1 },
  { q: "การเชื่อมต่อสาขาของธนาคารที่อยู่คนละจังหวัดเข้าด้วยกัน จัดเป็นเครือข่ายระดับใด?", options: ["WAN (Wide Area Network)", "LAN (Local Area Network)", "PAN (Personal Area Network)", "MAN (Metropolitan Area Network)"], correct: 0, explain: "ครอบคลุมหลายจังหวัด/ภูมิภาค = WAN (ระดับประเทศ/ทวีป) ส่วน MAN จำกัดแค่ระดับเมือง", ch: 1 },
  { q: "Internet กับ World Wide Web (WWW) ต่างกันอย่างไร?", options: ["Internet = โครงสร้างเครือข่าย ส่วน WWW = บริการบนนั้น", "WWW คือโครงสร้างเครือข่าย ส่วน Internet คือบริการที่ใช้เว็บ", "เหมือนกันทุกประการ แค่เรียกชื่อต่างกัน", "WWW ทำงานได้โดยไม่ต้องใช้ Internet เลย"], correct: 0, explain: "Internet = โครงข่าย/ถนน ส่วน WWW = หนึ่งในบริการ (รถ) ที่วิ่งบนถนน — ยังมี Email, Game, Video Call อีก", ch: 1 },
  { q: "RFC (Request for Comments) ต้องผ่านขั้นตอนใดก่อนที่จะเป็น Internet Standard อย่างเป็นทางการ?", options: ["เผยแพร่แล้วต้องผ่านการตรวจสอบและรับรองตามกระบวนการ", "แค่โพสต์ขึ้นเว็บก็เป็นมาตรฐานได้ทันที", "ต้องได้รับการโหวตเห็นชอบจากผู้ใช้ทั่วไปทั้งหมดเท่านั้น", "ไม่มีการกำหนดขั้นตอนใด ๆ เลย"], correct: 0, explain: "RFC ต้องผ่านกระบวนการ (Internet Draft → Proposed → Draft Standard → Internet Standard) — RFC ทุกฉบับไม่ใช่มาตรฐานอัตโนมัติ", ch: 1 },
  { q: "ARPANET เริ่มใช้งานในปีใด และเปลี่ยนมาใช้ TCP/IP ในปีใด?", options: ["เริ่มปี 1969 และใช้ TCP/IP ในปี 1983", "เริ่มปี 1983 และใช้ TCP/IP ในปี 1969", "เริ่มปี 1960 และใช้ TCP/IP ในปี 1990", "เริ่มปี 1975 และใช้ TCP/IP ในปี 1980"], correct: 0, explain: "ARPANET = 1969 (เชื่อม 4 มหาวิทยาลัย) และเปลี่ยนมาใช้ TCP/IP = 1983 ซึ่งถือเป็นวันเกิดของ Internet", ch: 1 },
  { q: "การที่ข้อมูลถูกส่งจากเครื่องหนึ่งไปอีกเครื่องหนึ่ง ข้อมูลจะถูก 'ห่อ' เพิ่ม Header ทีละชั้น — ข้อใดเรียงลำดับถูกต้องจากบนลงล่าง?", options: ["Application → Transport → Network → Data Link", "Data Link → Network → Transport → Application", "Network → Data Link → Application → Transport", "Transport → Application → Data Link → Network"], correct: 0, explain: "ห่อจากชั้นบนลงล่าง: Application (Data) → Transport (Segment) → Network (Packet) → Data Link (Frame)", ch: 1 },
  { q: "ข้อใดคือความแตกต่างหลักระหว่าง DNS กับ DHCP?", options: ["DNS แปลงชื่อโดเมนเป็น IP ส่วน DHCP แจก IP ให้อุปกรณ์อัตโนมัติ", "DNS แจก IP Address ให้กับอุปกรณ์ ส่วน DHCP แปลงชื่อโดเมนเป็น IP", "ทั้งคู่ทำหน้าที่เหมือนกันทุกประการ", "DNS ใช้กับไร้สายเท่านั้น ส่วน DHCP ใช้กับสาย"], correct: 0, explain: "DNS = สมุดโทรศัพท์ (ชื่อ → IP) ส่วน DHCP = เจ้าหน้าที่แจก IP ให้เครื่องที่เข้ามาเชื่อมต่ออัตโนมัติ", ch: 1 },
  { q: "ข้อใดไม่ใช่หน้าที่ของ Protocol (โปรโตคอล)?", options: ["กำหนดรูปแบบของข้อมูลที่ส่ง", "กำหนดจังหวะเวลาการส่งข้อมูลให้เป็นระเบียบ", "กำหนดวิธีจัดการข้อผิดพลาด", "สร้างสายสัญญาณให้กับเครือข่าย"], correct: 3, explain: "Protocol คือ 'กฎ' ที่ซอฟต์แวร์ใช้ตกลงกัน ไม่ใช่ฮาร์ดแวร์/สาย — การสร้างสายเป็นหน้าที่ของ Physical Layer", ch: 1 },
  { q: "ถ้าอินเทอร์เน็ตของเราช้าลงมากตอนดูวิดีโอ เพราะหลายคนใช้ Wi-Fi พร้อมกัน ข้อใดอธิบายได้ตรงที่สุด?", options: ["แบนด์วิดท์ของช่องทางถูกแบ่งให้หลายอุปกรณ์", "Delay ของข้อมูลลดลงเพราะคนใช้เยอะขึ้น", "โปรโตคอลหยุดทำงานเมื่อคนใช้เยอะ", "IP Address ของเครื่องเราเปลี่ยนไปโดยอัตโนมัติ"], correct: 0, explain: "แบนด์วิดท์ถูกแบ่งปัน (shared medium) — อุปกรณ์ยิ่งมาก แต่ละเครื่องยิ่งได้ความเร็วน้อยลง", ch: 1 },
  { q: "ขั้นตอน 'การสื่อสารข้อมูล' ที่ถูกต้องที่สุดคือข้อใด?", options: ["สร้างข้อมูล → เข้ารหัส → ส่งผ่านสื่อ → รับและถอดรหัสที่ปลายทาง", "สร้างข้อมูล → ส่งผ่านสื่อกลาง → ถอดรหัสข้อมูล → เข้ารหัสที่ปลายทาง", "รับข้อมูล → ถอดรหัส → เข้ารหัส → ส่งกลับไปที่ต้นทาง", "ส่งข้อมูล → รับข้อมูล → ส่งข้อมูลซ้ำวนไปเรื่อย ๆ"], correct: 0, explain: "การสื่อสาร = สร้างข้อมูล → แปลงเป็นสัญญาณ → ส่งผ่านสื่อกลาง → ปลายทางรับและถอดรหัสกลับ", ch: 1 },

  /* ---------- บท 2: Network Models (20 ข้อ) ---------- */
  { q: "การที่ข้อมูลจากกรุงเทพฯ ไปเชียงใหม่ ผ่านสายหลายเส้นแต่ตรรกะมองเป็นเส้นทางเดียว เรียกว่าอะไร?", options: ["Logical Path (เส้นทางเชิงตรรกะ)", "Physical Path (เส้นทางกายภาพที่ใช้จริง)", "Network Edge (ขอบเครือข่าย)", "Bandwidth (แบนด์วิดท์)"], correct: 0, explain: "เส้นทางเชิงตรรกะคือสิ่งที่ซอฟต์แวร์มองเห็น ไม่ผูกกับสายจริงเส้นเดียว — ตรงข้ามกับ Physical Path", ch: 2 },
  { q: "OSI Model เรียงชั้นจากล่างขึ้นบน (ชั้น 1 → 7) ข้อใดถูกต้อง?", options: ["Physical → Data Link → Network → Transport → Session → Presentation → Application", "Application → Presentation → Session → Transport → Network → Data Link → Physical (ชั้นล่างสุด)", "Physical → Network → Data Link → Transport → Session → Application → Presentation", "Data Link → Physical → Network → Transport → Application → Session → Presentation"], correct: 0, explain: "จากล่างขึ้นบน: Physical (1) → Data Link (2) → Network (3) → Transport (4) → Session (5) → Presentation (6) → Application (7)", ch: 2 },
  { q: "ในแบบจำลองแบบชั้น ชั้นบน (Upper Layer) ขอใช้บริการจากใคร?", options: ["ชั้นล่างที่อยู่ถัดลงไป (Lower Layer)", "ชั้นบนที่สูงกว่าขึ้นไปอีก", "เฉพาะ Application Layer ชั้นบนสุดเท่านั้น", "อุปกรณ์ Router กลางเครือข่าย"], correct: 0, explain: "แต่ละชั้นให้บริการชั้นที่อยู่เหนือกว่า และใช้บริการจากชั้นที่อยู่ใต้กว่า เช่น Transport ใช้บริการ Network", ch: 2 },
  { q: "ข้อใดกล่าวถูกต้องเกี่ยวกับ Network Edge?", options: ["คืออุปกรณ์ปลายทาง (Host) และเครือข่ายที่เชื่อมต่อ", "คืออุปกรณ์ Router กลางของ Internet ทั้งหมดทั้งมวลเท่านั้น", "คือสายเคเบิลใต้ทะเลทั้งหมดของโลก", "คือซอฟต์แวร์ระบบปฏิบัติการของเครื่อง"], correct: 0, explain: "Network Edge = ส่วนขอบเครือข่าย: End Systems (PC/โฟน/เซิร์ฟเวอร์) + Access Networks ที่เชื่อมต่อเข้าสู่ Internet", ch: 2 },
  { q: "Router ทำงานหลักที่ชั้นใดของโมเดล?", options: ["Network Layer (ชั้นเครือข่าย)", "Data Link Layer (ชั้นเชื่อมโยง)", "Physical Layer (ชั้นกายภาพ)", "Application Layer (ชั้นโปรแกรมประยุกต์)"], correct: 0, explain: "Router หาเส้นทาง (Routing) ด้วย IP Address → Network Layer ส่วน Switch/AP ทำงานที่ Data Link", ch: 2 },
  { q: "Switch (สวิตช์) ทำงานหลักที่ชั้นใด?", options: ["Data Link Layer (ชั้นเชื่อมโยง)", "Network Layer (ชั้นเครือข่าย)", "Transport Layer (ชั้นขนส่ง)", "Application Layer (ชั้นโปรแกรมประยุกต์)"], correct: 0, explain: "Switch ส่งต่อ Frame ด้วย MAC Address → Data Link Layer ส่วน Hub เป็นแค่ Physical", ch: 2 },
  { q: "เมื่อข้อมูลถูกส่งจาก Host A ไป Host B ผ่าน Router หลายตัว — อุปกรณ์กลาง (Router) ใช้ Protocol Stack ถึงชั้นใด?", options: ["ถึงชั้น Network Layer เท่านั้น (ไม่ต้องมีชั้นบน)", "ครบทั้ง 7/5 ชั้นเหมือนกับ Host ปลายทางทุกประการเสมอ", "ถึงชั้น Transport Layer เท่านั้น", "เฉพาะ Physical Layer เท่านั้น"], correct: 0, explain: "Router ส่งต่อ Packet → ใช้แค่ 3 ชั้นล่าง (Physical, Data Link, Network) ไม่ต้องรัน Application เหมือน Host", ch: 2 },
  { q: "ข้อใดจับคู่ 'ชั้น — หน่วยข้อมูล (PDU)' ไม่ถูกต้อง?", options: ["Application — Packet", "Transport Layer — Segment", "Network — Packet", "Data Link — Frame"], correct: 0, explain: "Application ใช้ PDU ชื่อ Data/Message ส่วน Packet เป็นของ Network Layer — ข้อนี้คือคู่ที่ไม่ถูกต้อง", ch: 2 },
  { q: "Encapsulation (การห่อข้อมูล) เกิดขึ้นตอนใด?", options: ["ฝั่งผู้ส่ง — เพิ่ม Header ทีละชั้นจากบนลงล่าง", "ฝั่งผู้รับ — แกะ Header ออกทีละชั้นจากล่างขึ้นบน", "เกิดขึ้นที่ Router กลางเครือข่ายเท่านั้น", "เกิดขึ้นเฉพาะตอนข้อมูลเสียหายเท่านั้น"], correct: 0, explain: "ฝั่งส่งห่อ (บน→ล่าง) ส่วนฝั่งรับแกะ (ล่าง→บน) ซึ่งเรียกว่า De-encapsulation", ch: 2 },
  { q: "Payload หมายถึงอะไร?", options: ["เนื้อหาข้อมูลจริงที่ถูกห่ออยู่ข้างใน", "Header ที่เพิ่มเข้ามาในแต่ละชั้นของโมเดล", "สัญญาณไฟฟ้าที่วิ่งอยู่บนสาย", "IP Address ของอุปกรณ์ปลายทาง"], correct: 0, explain: "Payload = ข้อมูลจริง (สินค้า) ส่วน Header = ฉลาก/ที่อยู่ที่ห่อรอบนอก (กล่อง)", ch: 2 },
  { q: "ข้อใดเป็น 'Service' (บริการ) ที่ Transport Layer มอบให้ Application Layer?", options: ["ส่งข้อมูลให้ครบถ้วน (Reliable)", "กฎรูปแบบ Segment ที่แน่นอนตายตัว", "แปลงชื่อโดเมนเป็น IP Address", "แสดงหน้าเว็บให้ผู้ใช้เห็นสวยงาม"], correct: 0, explain: "Protocol = กฎ (รูปแบบ Segment) ส่วน Service = สิ่งที่ชั้นล่างทำให้ชั้นบน เช่น 'ส่งให้ครบถ้วน' — อย่าสับสน", ch: 2 },
  { q: "ข้อดีของการออกแบบเครือข่ายเป็นชั้น ๆ (Layered Architecture) คืออะไร?", options: ["เปลี่ยนเทคโนโลยีทีละชั้นได้โดยไม่กระทบชั้นอื่น", "ทำให้เครื่องคอมพิวเตอร์ประมวลผลได้เร็วขึ้นทันที", "ไม่ต้องใช้สายเชื่อมต่อระหว่างเครื่องเลย", "ลดจำนวน IP Address ที่ต้องใช้ทั้งหมด"], correct: 0, explain: "แยกหน้าที่ชัดเจน — เช่น เปลี่ยนจากทองแดงเป็น Fiber ได้โดยไม่ต้องแก้ Protocol ชั้นบน", ch: 2 },
  { q: "Host (End System) ต่างจากอุปกรณ์กลาง (Router/Switch) อย่างไร?", options: ["Host รันแอปพลิเคชัน ส่วนอุปกรณ์กลางแค่ส่งต่อข้อมูล", "อุปกรณ์กลางรันแอปพลิเคชันทั้งหมด ส่วน Host แค่ส่งต่อข้อมูล", "เหมือนกันทุกประการ ใช้แทนกันได้", "Host ใช้ได้เฉพาะในเครือข่าย LAN เท่านั้น"], correct: 0, explain: "Host = ปลายทางที่รันแอป (เบราว์เซอร์/เมล) ส่วน Router/Switch เป็นโครงสร้างกลางที่ส่งต่อข้อมูลเท่านั้น", ch: 2 },
  { q: "ข้อใดไม่ใช่อุปกรณ์ End System?", options: ["Router กลางเครือข่าย", "สมาร์ตโฟนที่ใช้เปิดเว็บ", "เว็บเซิร์ฟเวอร์ที่ให้บริการ", "คอมพิวเตอร์โน้ตบุ๊กส่วนตัว"], correct: 0, explain: "End System = อุปกรณ์ปลายทางที่รันแอป (โฟน/PC/เซิร์ฟเวอร์) ส่วน Router เป็นอุปกรณ์กลาง — ข้อนี้ถามหาตัวที่ 'ไม่ใช่'", ch: 2 },
  { q: "ใน OSI Model ชั้น Session และ Presentation มีหน้าที่อะไร — แต่ใน TCP/IP ถูกรวมเข้ากับชั้นใด?", options: ["รวมเข้ากับ Application Layer", "รวมเข้ากับ Transport Layer", "รวมเข้ากับ Network Layer", "ถูกตัดทิ้งไม่เหลือใน TCP/IP เลย"], correct: 0, explain: "TCP/IP รวม Session + Presentation เข้ากับ Application (เหลือ 5 ชั้น) ส่วน OSI แยกละเอียดเป็น 7 ชั้น", ch: 2 },
  { q: "ข้อใดคือตัวอย่าง Protocol ที่ทำงานที่ Network Layer?", options: ["IP (Internet Protocol)", "HTTP (HyperText Transfer)", "TCP (Transmission Control)", "SMTP (Simple Mail Transfer)"], correct: 0, explain: "IP ทำงานที่ Network Layer (กำหนดที่อยู่/หาเส้นทาง) ส่วน TCP = Transport และ HTTP/SMTP = Application", ch: 2 },
  { q: "เมื่อ Frame (Data Link) ถูกส่งต่อโดย Switch — Switch ใช้ข้อมูลใดในการตัดสินใจ?", options: ["MAC Address ปลายทาง", "IP Address ปลายทาง", "Port Number ปลายทาง", "ชื่อโดเมนปลายทาง"], correct: 0, explain: "Data Link ใช้ MAC Address — ส่วน IP เป็นของ Network Layer และ Port เป็นของ Transport", ch: 2 },
  { q: "ข้อใดเรียง PDU จากบนลงล่างถูกต้อง (ตามการห่อข้อมูล)?", options: ["Data → Segment → Packet → Frame → Bits", "Bits → Frame → Packet → Segment → Data", "Frame → Segment → Data → Packet → Bits", "Packet → Data → Segment → Frame → Bits"], correct: 0, explain: "บน→ล่าง: Application Data → Transport Segment → Network Packet → Data Link Frame → Physical Bits", ch: 2 },
  { q: "ข้อใดไม่ใช่เหตุผลที่ต้องออกแบบเครือข่ายเป็นชั้น ๆ?", options: ["ทำให้คอมพิวเตอร์ทำงานเร็วขึ้นทันที", "แต่ละชั้นแก้ปัญหาคนละด้าน (เส้นทาง/ความเชื่อถือ/รูปแบบ)", "เปลี่ยนเทคโนโลยีทีละชั้นได้ง่ายขึ้น", "พัฒนาและแก้ไขได้เฉพาะชั้นที่เกี่ยวข้อง"], correct: 0, explain: "การแบ่งชั้นช่วยเรื่องการแยกหน้าที่และการพัฒนาทีละชั้น — ไม่ได้ทำให้เครื่องเร็วขึ้นทันที (ข้อนี้คือข้อที่ไม่ใช่เหตุผล)", ch: 2 },
  { q: "ข้อใดกล่าวถูกต้องเกี่ยวกับ Physical Layer?", options: ["ส่ง Bits เป็นสัญญาณไฟฟ้า/แสง/คลื่น", "ส่งข้อมูลในรูป Segment แก่ชั้นบน", "หาเส้นทางระหว่างเครือข่ายที่ซับซ้อนมาก", "เข้ารหัสข้อมูลทั้งหมดก่อนส่งออกไป"], correct: 0, explain: "Physical ส่ง Bits เป็นสัญญาณจริงบนสาย/อากาศ — ไม่เกี่ยวกับเส้นทาง (Network) หรือ Segment (Transport)", ch: 2 },

  /* ---------- บท 3: Application Layer (20 ข้อ) ---------- */
  { q: "เหตุใด Server ในสถาปัตยกรรม Client-Server จึงต้องเปิดให้บริการตลอดเวลา?", options: ["เพื่อรอรับคำขอจาก Client ได้ตลอดเวลา", "เพื่อให้เครื่องไม่ต้องรีสตาร์ทบ่อยครั้ง", "เพราะไม่มีวิธีปิดเครื่องในระบบเลย", "เพื่อประหยัดค่าไฟฟ้าในระยะยาว"], correct: 0, explain: "Server ต้องพร้อมรับคำขอเสมอและมี IP คงที่ — ถ้าปิดเมื่อไหร่ Client ก็เข้าใช้บริการไม่ได้", ch: 3 },
  { q: "ข้อได้เปรียบสำคัญของสถาปัตยกรรม P2P (Peer-to-Peer) คืออะไร?", options: ["ยิ่งมี Peer มาก ระบบยิ่งเร็วและมีทรัพยากรมาก", "ต้องมี Server กลางคอยควบคุมทุกอย่างทุกขั้นตอนเสมอ", "ไม่ต้องใช้ Internet เลยแม้แต่นิดเดียว", "ปลอดภัยที่สุดในทุกสถาปัตยกรรมที่ใช้งานจริง"], correct: 0, explain: "P2P ขยายตัวได้เอง (Self-scalable) — peer แต่ละตัวช่วยแชร์ไฟล์/แบนด์วิดท์ เช่น BitTorrent", ch: 3 },
  { q: "Socket (ซ็อกเก็ต) ประกอบด้วยข้อมูลใด?", options: ["IP Address + Port Number", "MAC Address + IP Address", "เฉพาะ Port Number เท่านั้น", "ชื่อผู้ใช้ + รหัสผ่าน"], correct: 0, explain: "Socket = คู่ของ IP (ระบุเครื่อง) + Port (ระบุ process) — เป็น 'ประตู' ที่ process ใช้สื่อสาร", ch: 3 },
  { q: "Port Number มีค่าอยู่ในช่วงใด (เพราะใช้เลข 16 บิต)?", options: ["0 – 65,535", "0 – 255", "1 – 1,024", "0 – 99,999"], correct: 0, explain: "Port เป็นเลข 16 บิต → 0–65535 โดย 0–1023 เป็น well-known ports (HTTP 80, HTTPS 443)", ch: 3 },
  { q: "ข้อใดจับคู่ Service กับ Port มาตรฐานไม่ถูกต้อง?", options: ["SMTP — 25", "DNS — 53", "HTTPS — 443", "HTTP — 110"], correct: 3, explain: "HTTP = 80 (ไม่ใช่ 110) ส่วน 110 คือ POP3 (รับอีเมล) — ข้อนี้ถามหาคู่ที่ผิด", ch: 3 },
  { q: "ข้อใดคือ Port ของ POP3 (ใช้รับอีเมล)?", options: ["110", "25", "53", "443"], correct: 0, explain: "POP3 = 110 (รับเมล) · SMTP = 25 (ส่งเมล) · DNS = 53 · HTTPS = 443", ch: 3 },
  { q: "เนื่องจาก HTTP เป็น Stateless — ถ้าอยากให้เว็บจำได้ว่าเราเข้าสู่ระบบแล้ว ต้องใช้กลไกใด?", options: ["Cookie / Session", "เปลี่ยน Protocol ใหม่ทั้งหมด", "เพิ่มสายสัญญาณ", "ใช้ IP Address เดิมตลอด"], correct: 0, explain: "Stateless = Server ไม่จำ request ก่อนหน้า — ต้องใช้ Cookie/Session เป็นตัวช่วยจำสถานะ", ch: 3 },
  { q: "Non-Persistent HTTP เปิด-ปิดการเชื่อมต่อ TCP ใหม่ทุกครั้งที่ขอ object — ผลเสียคืออะไร?", options: ["ใช้เวลามากขึ้นเพราะต้อง Handshake ทุกครั้ง", "Server ต้องใช้หน่วยความจำและทรัพยากรมากขึ้น", "ข้อมูลไม่ปลอดภัยขึ้นมากกว่าเดิม", "ไม่มีผลเสียใด ๆ เลย"], correct: 0, explain: "Non-Persistent = 1 object ต่อ 1 TCP → ต้อง 2 RTT ต่อ object ช้า ส่วน Persistent (HTTP/1.1) ใช้ TCP เดียวต่อเนื่อง", ch: 3 },
  { q: "HTTP Response บรรทัดแรกเรียกว่าอะไร และมีรูปแบบอย่างไร?", options: ["Status Line — เช่น HTTP/1.1 200 OK", "Request Line — เช่น GET / HTTP/1.1", "Header Line — เช่น Host: google.com", "Body — เนื้อหาของเว็บเพจ"], correct: 0, explain: "Response เริ่มด้วย Status Line (เวอร์ชัน + รหัสสถานะ + ข้อความ) ส่วน Request เริ่มด้วย Request Line", ch: 3 },
  { q: "HTTP Status 301 หมายถึงอะไร?", options: ["เปลี่ยนเส้นทางไปยัง URL ใหม่ถาวร", "สำเร็จตามคำขอของผู้ใช้ (OK)", "หาไฟล์ไม่พบ", "Server เกิดข้อผิดพลาดภายในระบบโดยรวม"], correct: 0, explain: "301 = Moved Permanently (ย้ายที่อยู่ถาวร) — เบราว์เซอร์ไป URL ใหม่อัตโนมัติ ส่วน 404 = ไม่พบ, 500 = Server error", ch: 3 },
  { q: "ข้อใดกล่าวถูกต้องเกี่ยวกับ GET และ POST?", options: ["GET ใส่ข้อมูลใน URL และ POST ใส่ข้อมูลใน Body", "GET ใส่ข้อมูลใน Body และ POST ใส่ข้อมูลใน URL แทนที่", "ทั้งคู่ใส่ข้อมูลใน URL เสมอ", "POST ใช้ขอดึงข้อมูลเท่านั้น"], correct: 0, explain: "GET นำพารามิเตอร์ไปกับ URL (?search=...) ส่วน POST ส่งใน Body — เหมาะกับข้อมูลอ่อนไหว (รหัสผ่าน/ฟอร์ม)", ch: 3 },
  { q: "ข้อใดคือความแตกต่างระหว่าง PUT กับ POST?", options: ["PUT แทนที่ข้อมูลเดิม ส่วน POST สร้างข้อมูลใหม่", "PUT สร้างข้อมูลใหม่ขึ้นมา ส่วน POST แทนที่ข้อมูลเดิม", "เหมือนกันทุกประการ ไม่ต่างกัน", "PUT ใช้ได้กับ HTTP/2 เท่านั้น"], correct: 0, explain: "PUT อัปเดต/แทนที่ทรัพยากรเดิม (idempotent — ทำซ้ำได้ผลเหมือนเดิม) ส่วน POST สร้าง/ประมวลผลใหม่ทุกครั้ง", ch: 3 },
  { q: "DNS Query แบบ Iterative ต่างจาก Recursive อย่างไร?", options: ["Iterative — บอกให้ถามต่อ / Recursive — ตามหาให้ครบ", "Iterative เร็วกว่าเสมอและ Recursive ช้ากว่าเสมอทุกกรณี", "เหมือนกันทุกประการ ใช้แทนกันได้", "Iterative ใช้ได้กับ UDP เท่านั้น"], correct: 0, explain: "Recursive: DNS server ไล่ถามจนได้คำตอบมาให้เรา / Iterative: ตอบเป็นลำดับ 'ให้ไปถามเจ้านี้' ทีละขั้น", ch: 3 },
  { q: "เหตุใด DNS Cache ช่วยให้การท่องเว็บเร็วขึ้น?", options: ["ไม่ต้องถาม DNS Server ซ้ำเพราะเก็บคำตอบไว้", "เพิ่มแบนด์วิดท์ของเครือข่ายให้สูงขึ้นมาก", "เข้ารหัสข้อมูลให้มีขนาดเล็กลงกว่าเดิม", "เปลี่ยน IP Address ของเว็บไซต์ทันทีทันใดเลย"], correct: 0, explain: "Cache เก็บผลลัพธ์ (TTL จำกัด) — ครั้งถัดไปตอบได้จากเครื่องเรา ลด Delay และภาระ DNS Server", ch: 3 },
  { q: "ข้อใดเป็น Protocol ที่ใช้ 'ส่ง' อีเมล?", options: ["SMTP (Port 25)", "POP3 (Port 110)", "IMAP (Port 143)", "HTTP (Port 80)"], correct: 0, explain: "SMTP ส่งเมลออก (Port 25) ส่วน POP3/IMAP ใช้ดึงเมลจาก Server เข้ามา", ch: 3 },
  { q: "การรอคิวที่เราเตอร์ (Queueing Delay) เกิดจากอะไร?", options: ["Packet รอคิวเพราะช่องทางส่งไม่ว่าง", "CPU ของเครื่องปลายทางประมวลผลช้าเกินไป", "ข้อมูลเดินทางในสายช้าเกินไป", "Protocol ไม่รู้จักกัน"], correct: 0, explain: "Queueing Delay = รอคิวที่ Router เมื่อมี packet มากกว่าช่องทางส่งไหว (congestion)", ch: 3 },
  { q: "Transmission Delay (เวลาในการส่ง) ต่างจาก Propagation Delay (เวลาเดินทาง) อย่างไร?", options: ["Transmission = เวลาวางบิตลงสาย / Propagation = เวลาวิ่งถึงปลายทาง", "Propagation ขึ้นกับขนาดไฟล์ ส่วน Transmission ขึ้นกับระยะทางของสาย", "เหมือนกันทุกประการ ใช้แทนกันได้", "ทั้งคู่เกิดเฉพาะในเครือข่ายไร้สาย"], correct: 0, explain: "Transmission = ขนาดข้อมูล/อัตราส่ง (L/R) ส่วน Propagation = ระยะทาง/ความเร็วสัญญาณ (d/s)", ch: 3 },
  { q: "แอปพลิเคชันประเภทใดที่ 'ทน Delay สูงได้ แต่ทน Data Loss ไม่ได้'?", options: ["การโอนย้ายไฟล์ (File Transfer)", "เกมออนไลน์แบบ Real-time", "วิดีโอคอลสด", "VoIP (โทรผ่านอินเทอร์เน็ตโดยตรง)"], correct: 0, explain: "ไฟล์ต้องครบถ้วน (loss-sensitive) แต่ไม่ซีเรียสเรื่องหน่วง ส่วนเกม/วิดีโอคอลต้องการ delay ต่ำ", ch: 3 },
  { q: "โครงสร้างของ HTTP Request ประกอบด้วยส่วนใดบ้างตามลำดับ?", options: ["Request Line → Header Lines → (Body)", "Body → Header Lines → Request Line ตามลำดับ", "Header Lines → Body → Request Line", "Request Line เท่านั้น ไม่มีส่วนอื่น"], correct: 0, explain: "Request = Request Line (GET / HTTP/1.1) → Headers (Host, User-Agent...) → Body (เฉพาะ POST/PUT)", ch: 3 },
  { q: "เหตุใด HTTPS จึงเพิ่มความปลอดภัยให้เว็บ?", options: ["เข้ารหัสข้อมูลด้วย TLS/SSL ก่อนส่ง", "เปลี่ยน Port ให้เป็น 8080 แทน", "ใช้เฉพาะกับเว็บไซต์ที่ไม่มีรหัสผ่านเลย", "บล็อกผู้ใช้ที่ไม่ใช่คนไทย"], correct: 0, explain: "TLS เข้ารหัส — แม้ถูกดักฟังระหว่างทางก็อ่านไม่ออก และยังตรวจสอบตัวตนของ Server ด้วยใบรับรอง", ch: 3 },

  /* ---------- บท 4: Transport Layer (20 ข้อ) ---------- */
  { q: "Multiplexing ที่ฝั่งผู้ส่ง คืออะไร?", options: ["รวมข้อมูลจากหลาย Socket ลงช่องทางเดียว", "แยกข้อมูลไปยัง Socket ปลายทางแต่ละตัวที่ถูกต้อง", "เข้ารหัสข้อมูลก่อนส่ง", "บีบอัดข้อมูลให้เล็กลง"], correct: 0, explain: "ฝั่งส่งรวมหลายช่องทาง (Mux) ฝั่งรับแยกกลับ (Demux) — ใช้ Port Number แยกปลายทาง", ch: 4 },
  { q: "ถ้าเครื่องหนึ่งเปิดเบราว์เซอร์ 2 แท็บเข้าเว็บเดียวกัน — ระบบแยกการเชื่อมต่อทั้งสองแท็บอย่างไร?", options: ["ใช้ Source Port ที่ต่างกัน (จาก Client)", "ใช้ MAC Address ของเบราว์เซอร์ในแต่ละแท็บ", "ใช้ชื่อเว็บไซต์ใน URL", "แยกไม่ได้ — ต้องปิดแท็บหนึ่ง"], correct: 0, explain: "Client ใช้ Source Port สุ่มต่างกันต่อแท็บ → 4-tuple (Src/Dst IP+Port) ต่างกัน จึงแยก connection ได้", ch: 4 },
  { q: "UDP เหมาะกับงานประเภทใดมากที่สุด?", options: ["วิดีโอสตรีมสดและเกมออนไลน์", "การโอนไฟล์ที่ต้องครบถ้วน", "การทำธุรกรรมธนาคารออนไลน์แบบทันที", "การส่งอีเมลข้อความ"], correct: 0, explain: "UDP เร็ว ไร้ connection — ยอมเสียบาง packet ดีกว่าหน่วง (วิดีโอ/เกม) ส่วนไฟล์/ธนาคารต้องใช้ TCP", ch: 4 },
  { q: "UDP Checksum มีข้อจำกัดอะไร?", options: ["ตรวจ error ได้ แต่ไม่ส่งซ้ำให้", "แก้ไขข้อมูลที่เสียหายให้ใหม่ได้ทันที", "ป้องกันการโจมตีทุกประเภท", "ทำงานได้เฉพาะกับ IPv6"], correct: 0, explain: "Checksum = ตรวจจับความผิดพลาดเท่านั้น — UDP ไม่มี retransmission ถ้าเสียต้องให้ชั้นบน/แอปจัดการ", ch: 4 },
  { q: "TCP Three-Way Handshake มีลำดับอย่างไร และแต่ละขั้นส่ง Flag อะไร?", options: ["SYN → SYN-ACK → ACK", "ACK → SYN → SYN-ACK", "SYN → ACK → SYN-ACK", "FIN → SYN → ACK"], correct: 0, explain: "Client ส่ง SYN → Server ตอบ SYN-ACK → Client ส่ง ACK กลับ — ครบ 3 ขั้นแล้วเชื่อมต่อสำเร็จ", ch: 4 },
  { q: "ทำไม TCP ต้องสุ่มค่า Sequence Number เริ่มต้น (ISN)?", options: ["กันสับสนกับ connection เก่าที่ค้างในระบบ", "เพื่อทำให้ไฟล์ข้อมูลมีขนาดเล็กลงกว่าเดิมมาก ๆ", "เพื่อเพิ่มความเร็วในการส่งข้อมูล", "เพราะ UDP บังคับให้ทำ"], correct: 0, explain: "ISN สุ่มกัน packet เก่าของ connection ก่อนหน้าที่ยังค้างในเครือข่ายมาสับสนกับข้อมูลใหม่", ch: 4 },
  { q: "ถ้า Sender ส่ง Segment ที่มี Seq=1000 และมีข้อมูล 200 ไบต์ — ACK Number ที่ Receiver ควรตอบกลับคืออะไร?", options: ["1200 (Seq + จำนวนไบต์)", "1000 (Seq เท่าเดิม)", "800 (Seq − 200 ไบต์)", "2000 (คูณ 2 ของ Seq Number)"], correct: 0, explain: "ACK# = Seq# + จำนวนไบต์ที่รับแล้ว = 1000 + 200 = 1200 — บอกว่าข้อมูลรับถึงไบต์ไหนแล้ว", ch: 4 },
  { q: "Flow Control ต่างจาก Congestion Control อย่างไร?", options: ["Flow — กันฝั่งรับท่วม · Congestion — กันเครือข่ายล่ม", "เหมือนกันทุกประการ ใช้กลไกเดียวกัน", "Flow — กันเครือข่ายล่ม · Congestion — กันฝั่งรับท่วม", "ใช้ได้เฉพาะ UDP"], correct: 0, explain: "Flow Control ใช้ rwnd (ฝั่งรับ) กัน buffer ล้น ส่วน Congestion Control ใช้ cwnd กันเครือข่ายแออัด", ch: 4 },
  { q: "AIMD เพิ่มขนาด Congestion Window (cwnd) อย่างไรในสถานการณ์ปกติ?", options: ["เพิ่มขึ้นทีละ 1 MSS ต่อ RTT (เส้นตรง)", "เพิ่มขึ้นเป็น 2 เท่าต่อทุก ๆ RTT (ชี้แนว)", "คงที่ตลอดเวลา", "ลดลงทีละครึ่งตลอดเวลา"], correct: 0, explain: "AIMD = Additive Increase (เพิ่ม 1 MSS/RTT) แต่เมื่อเจอ loss ลดครึ่งทันที (Multiplicative Decrease)", ch: 4 },
  { q: "Slow Start (TCP) เพิ่ม cwnd อย่างไร?", options: ["เพิ่มเป็น 2 เท่าทุก RTT จนถึง ssthresh", "เพิ่มทีละ 1 MSS ตลอดการเชื่อมต่อที่ใช้งานอยู่", "ไม่เพิ่มเลยแม้แต่ครั้งเดียว", "เพิ่มเฉพาะตอนไม่มี traffic เลย"], correct: 0, explain: "Slow Start เพิ่มแบบ Exponential (2×/RTT) เร็ว ๆ จนถึง ssthresh แล้วเปลี่ยนเป็นเพิ่มเส้นตรง (AIMD)", ch: 4 },
  { q: "Duplicate ACK 3 ตัวติดต่อกันทำให้ TCP ทำอะไร?", options: ["ส่งซ้ำทันทีโดยไม่ต้องรอ Timeout", "ปิดการเชื่อมต่อ TCP ทันทีทันใด", "เพิ่มความเร็วในการส่งเป็น 2 เท่า", "เปลี่ยนไปใช้โปรโตคอล UDP ในการส่งข้อมูล"], correct: 0, explain: "3 duplicate ACK = สงสัย packet หาย → Fast Retransmit (ส่งซ้ำทันที) โดยไม่ต้องรอ Timeout", ch: 4 },
  { q: "เมื่อ Timeout เกิดขึ้น TCP จะทำอย่างไรกับ cwnd?", options: ["ลด cwnd ลงแรง (กลับสู่ Slow Start)", "เพิ่ม cwnd เป็นสองเท่าทันทีทุกครั้งไป", "คงค่า cwnd เดิมไว้", "ปิด connection ทันที"], correct: 0, explain: "Timeout = เครือข่ายน่าจะแออัดหนัก → ลด cwnd ลงมาก (ไปที่ 1 MSS แล้ว Slow Start ใหม่) + Backoff Timer", ch: 4 },
  { q: "การปิดการเชื่อมต่อ TCP ใช้กี่ขั้นตอน (และใช้ Flag อะไร)?", options: ["4 ขั้นตอน — FIN, ACK, FIN, ACK", "2 ขั้นตอน — FIN แล้วจบ", "3 ขั้นตอน — SYN, SYN-ACK, ACK ครบถ้วน", "1 ขั้นตอน — ไม่ต้องปิดเลย"], correct: 0, explain: "TCP teardown = 4-way: แต่ละฝั่งส่ง FIN และตอบ ACK — ครบ 4 ขั้นจึงปิดสมบูรณ์", ch: 4 },
  { q: "ข้อใดคือหน้าที่ที่ TCP ทำ แต่ UDP ไม่ทำ?", options: ["รับประกันการส่งครบถ้วนและเรียงลำดับ", "ระบุ Port ต้นทางและปลายทางใน Header", "มี Checksum ใน Header", "ส่งข้อมูลเป็น Segment"], correct: 0, explain: "UDP ก็มี Port/Checksum/Segment แต่ TCP เพิ่มความเชื่อถือได้ (seq, ack, retransmit, flow/congestion)", ch: 4 },
  { q: "Internet Checksum คำนวณด้วยวิธีใด?", options: ["ผลรวมแบบ 1's complement", "การเข้ารหัสแบบ AES 256 บิต", "การหารด้วยพหุนาม CRC-32", "การนับจำนวนบิต 1 ทั้งหมด"], correct: 0, explain: "Internet Checksum = 1's complement sum (ง่าย/เร็ว) ส่วน CRC ละเอียดกว่าแต่ใช้ใน Data Link", ch: 4 },
  { q: "ถ้า UDP Checksum ตรวจพบ error — ใครเป็นคนจัดการส่งข้อมูลใหม่?", options: ["UDP ทิ้ง Segment นั้นไป และแอปจัดการเอง", "UDP ส่ง Segment ใหม่ให้อัตโนมัติทุกครั้ง", "IP Layer ส่ง Segment ใหม่ให้ทันที", "แก้ไขข้อมูลที่เสียได้ทันที"], correct: 0, explain: "UDP ตรวจเจอแล้วทิ้ง แต่ไม่ส่งซ้ำ — ถ้าแอปต้องการความครบถ้วนต้องจัดการเองหรือใช้ TCP", ch: 4 },
  { q: "RDT 2.0 เพิ่มกลไกใดจาก RDT 1.0?", options: ["เพิ่ม Checksum + ACK/NAK", "เพิ่มการเข้ารหัสข้อมูลทุกชิ้นส่วน", "เพิ่มการบีบอัดไฟล์ขนาดใหญ่", "เพิ่มการสำรองข้อมูลอัตโนมัติ"], correct: 0, explain: "rdt1.0 = ช่องทางสมบูรณ์แบบ / rdt2.0 = ตรวจ error + ACK/NAK (ARQ) / rdt3.0 = เพิ่ม Timeout รับมือ packet หาย", ch: 4 },
  { q: "ข้อใดคือปัญหาที่ rdt3.0 เพิ่มเข้ามาแก้ (นอกเหนือจาก rdt2.0)?", options: ["Packet หาย (Loss) — Timeout + ส่งซ้ำ", "บิตผิดพลาด — แก้ด้วย Checksum", "ความเร็วต่ำ — แก้ด้วยการบีบอัด", "การชนกันของ IP Address — แก้ด้วย DHCP"], correct: 0, explain: "rdt2.0 แก้บิตเสีย (checksum + ACK/NAK) แต่ถ้า ACK/NAK หายเองต้องมี Timeout → rdt3.0", ch: 4 },
  { q: "เมื่อเกิด Congestion (เครือข่ายแออัด) TCP ควรทำอย่างไรตามหลัก AIMD?", options: ["ลดการส่งลงครึ่งหนึ่งเพื่อให้เครือข่ายฟื้นตัว", "เพิ่มความเร็วเพื่อแย่งช่องทางให้ได้มากที่สุด", "หยุดส่งข้อมูลถาวรตลอดการเชื่อมต่อ", "เปลี่ยนเส้นทางด้วยตัวเองทันที"], correct: 0, explain: "เจอ congestion → ลดการส่ง (Multiplicative Decrease) แล้วค่อย ๆ เพิ่มกลับ (Additive Increase)", ch: 4 },
  { q: "TCP Header ขั้นต่ำมีขนาดกี่ไบต์?", options: ["20 ไบต์", "8 ไบต์", "16 ไบต์", "40 ไบต์"], correct: 0, explain: "TCP Header ขั้นต่ำ 20 ไบต์ (UDP แค่ 8) — มีฟิลด์ Seq, Ack, Flags (SYN/ACK/FIN), Window Size, Checksum", ch: 4 }
];
