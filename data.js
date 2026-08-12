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
