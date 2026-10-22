/* ==========================================================================
   CN — Fundamentals of Computer Network · Interactive Digital Textbook
   Vanilla JS application logic (classic script → works from file:// too)
   ========================================================================== */
(function () {
  "use strict";

  /* JS ทำงานแล้ว — ปิดโหมด fallback (no-js) เพื่อให้สไลด์ถูกควบคุมโดย .active */
  document.documentElement.classList.remove("no-js");
  document.documentElement.classList.add("js");

  var D = window.DATA;

  /* หน้าเว็บปัจจุบัน — "menu" = เมนูหลัก (index.html), "chapter" = หน้าเรียนบท N (chapterN.html) */
  var PAGE = document.body.getAttribute("data-page") || "chapter";
  var PCH = parseInt(document.body.getAttribute("data-chapter"), 10) || 1;

  /* Chapter metadata — แต่ละบทแยกหน้าเว็บ จึงใช้ดัชนีสไลด์แบบ local (เริ่มที่ 0) ภายในหน้า */
  var CHS = {
    1: { start: 0, count: D.slides.length, sections: D.sections, slides: D.slides, cheat: D.cheat, flashcards: D.flashcards, glossary: D.glossary, exam: D.quick, thai: "พื้นฐานการสื่อสารข้อมูลและเครือข่าย", en: "Fundamentals of Computer Network", file: "chapter1.html", code: "M1", bookChapter: 1 },
    2: { start: 0, count: D.ch2.slides.length, sections: D.ch2.sections, slides: D.ch2.slides, cheat: D.ch2.cheat, flashcards: D.ch2.flashcards, glossary: D.ch2.glossary, exam: D.ch2.exam, thai: "Network Models (โมเดลเครือข่าย)", en: "Network Models", file: "chapter2.html", code: "M2", bookChapter: 2 },
    3: { start: 0, count: D.ch3.slides.length, sections: D.ch3.sections, slides: D.ch3.slides, cheat: D.ch3.cheat, flashcards: D.ch3.flashcards, glossary: D.ch3.glossary, exam: D.ch3.exam, thai: "Application Layer (ชั้นโปรแกรมประยุกต์)", en: "Application Layer", file: "chapter3.html", code: "M3", bookChapter: 3 },
    4: { start: 0, count: D.ch4.slides.length, sections: D.ch4.sections, slides: D.ch4.slides, cheat: D.ch4.cheat, flashcards: D.ch4.flashcards, glossary: D.ch4.glossary, exam: D.ch4.exam, thai: "Transport Layer (ชั้นขนส่งข้อมูล)", en: "Transport Layer", file: "chapter4.html", code: "M4", bookChapter: 4 },
    5: { start: 0, count: D.ch5.slides.length, sections: D.ch5.sections, slides: D.ch5.slides, cheat: D.ch5.cheat, flashcards: D.ch5.flashcards, glossary: D.ch5.glossary, exam: D.ch5.exam, thai: "Network Layer: Data Plane (ชั้นเครือข่าย — ระนาบข้อมูล)", en: "Network Layer: Data Plane", file: "final-ch4-data-plane.html", code: "F1", bookChapter: 4 },
    6: { start: 0, count: D.ch6.slides.length, sections: D.ch6.sections, slides: D.ch6.slides, cheat: D.ch6.cheat, flashcards: D.ch6.flashcards, glossary: D.ch6.glossary, exam: D.ch6.exam, thai: "Network Layer: Control Plane (ชั้นเครือข่าย — ระนาบควบคุม)", en: "Network Layer: Control Plane", file: "final-ch5-control-plane.html", code: "F2", bookChapter: 5 },
    7: { start: 0, count: D.ch7.slides.length, sections: D.ch7.sections, slides: D.ch7.slides, cheat: D.ch7.cheat, flashcards: D.ch7.flashcards, glossary: D.ch7.glossary, exam: D.ch7.exam, thai: "The Link Layer and LANs (ชั้นลิงก์และ LAN)", en: "The Link Layer and LANs", file: "final-ch6-link-layer.html", code: "F3", bookChapter: 6 },
    8: { start: 0, count: D.ch8.slides.length, sections: D.ch8.sections, slides: D.ch8.slides, cheat: D.ch8.cheat, flashcards: D.ch8.flashcards, glossary: D.ch8.glossary, exam: D.ch8.exam, thai: "Wireless and Mobile Networks (เครือข่ายไร้สายและเคลื่อนที่)", en: "Wireless and Mobile Networks", file: "final-ch7-wireless.html", code: "F4", bookChapter: 7 },
    9: { start: 0, count: D.ch9.slides.length, sections: D.ch9.sections, slides: D.ch9.slides, cheat: D.ch9.cheat, flashcards: D.ch9.flashcards, glossary: D.ch9.glossary, exam: D.ch9.exam, thai: "Security (ความมั่นคงปลอดภัยของเครือข่าย)", en: "Security", file: "final-ch8-security.html", code: "F5", bookChapter: 8 }
  };
  /* label ที่ใช้แสดงผล — F1 ต้องไม่ซ้ำกับ M4 ที่เป็น Book Chapter 4 เหมือนกัน */
  function chapterLabel(n) {
    var c = CHS[n];
    if (!c) return "บทที่ " + n;
    return c.code ? c.code + " · BOOK CH." + c.bookChapter : "บทที่ " + n;
  }
  function chapterFullLabel(n) {
    var c = CHS[n];
    if (!c) return "บทที่ " + n;
    return c.code ? c.code + " · BOOK CH." + c.bookChapter + " · " + c.en : "บทที่ " + n + " · " + c.thai;
  }
  function ch() { return CHS[state.chapter]; }
  var TOTAL = 0; // จำนวนสไลด์ของบทที่กำลังเรียน

  /* ---------- tiny helpers ---------- */
  function $(id) { return document.getElementById(id); }
  function qsa(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function icons() { if (window.lucide) { try { lucide.createIcons(); } catch (e) {} } }

  /* ---------- localStorage ---------- */
  var LS = {
    get: function (k, def) { try { var v = localStorage.getItem(k); return v === null ? def : JSON.parse(v); } catch (e) { return def; } },
    set: function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  };

  /* ---------- migration ครั้งเดียว: สลับลำดับตัวเลือกของ F1–F5 ----------
     เดิมเฉลยของ F1–F4 วนเป็น 1,2,3,4 ซ้ำทุกข้อ และ F5 เอียงไปทาง B เกือบทั้งหมด (เดาคำตอบได้)
     จึงสลับตัวเลือกใน data.js → index คำตอบที่บันทึกไว้เดิมชี้ไปคนละข้อความ
     ล้างคำตอบเก่าของ 5–9 (เก็บ best score ไว้) */
  (function migrateOptionOrder() {
    if (LS.get("cn_option_order_v1", false)) return;
    [5, 6, 7, 8, 9].forEach(function (n) {
      ["cn_quiz" + n, "cn_exam" + n].forEach(function (k) {
        try { localStorage.removeItem(k); } catch (e) {}
      });
    });
    LS.set("cn_option_order_v1", true);
  })();

  var state = {
    chapter: PAGE === "menu" ? 1 : PCH,
    current: 0, // ดัชนีสไลด์ภายในหน้า (local)
    completed: [], // chapter-relative (0-based)
    mode: "learn", // โหมดเดียว: เรียนตามลำดับสไลด์ (EXAM ถูกลบออกตามคำขอ)
    notes: (function () {
      // บันทึกย่อรายบท — key เก่าของบท 1 (ตัวเลขล้วน) migrate เป็น "1:<index>"
      var raw = LS.get("cn_notes", {});
      var out = {};
      Object.keys(raw).forEach(function (k) {
        out[k.indexOf(":") === -1 ? "1:" + k : k] = raw[k];
      });
      return out;
    })(),
    quiz: LS.get("cn_quiz", { answers: {}, partDone: {} }),
    quiz2: LS.get("cn_quiz2", { answers: {} }),
    quiz3: LS.get("cn_quiz3", { answers: {} }),
    quiz4: LS.get("cn_quiz4", { answers: {} }),
    quiz5: LS.get("cn_quiz5", { answers: {} }),
    quiz6: LS.get("cn_quiz6", { answers: {} }),
    quiz7: LS.get("cn_quiz7", { answers: {} }),
    quiz8: LS.get("cn_quiz8", { answers: {} }),
    quiz9: LS.get("cn_quiz9", { answers: {} }),
    exam: LS.get("cn_exam") || LS.get("cn_quick") || { answers: {}, best: null },
    exam2: LS.get("cn_exam2") || { answers: {}, best: null },
    exam3: LS.get("cn_exam3") || { answers: {}, best: null },
    exam4: LS.get("cn_exam4") || { answers: {}, best: null },
    exam5: LS.get("cn_exam5") || { answers: {}, best: null },
    exam6: LS.get("cn_exam6") || { answers: {}, best: null },
    exam7: LS.get("cn_exam7") || { answers: {}, best: null },
    exam8: LS.get("cn_exam8") || { answers: {}, best: null },
    exam9: LS.get("cn_exam9") || { answers: {}, best: null },
    best: null,
    celebrated: false
  };
  /* โหลดสไลด์ที่ค้างไว้ + progress รายบท (รองรับ key เก่าของบทที่ 1) */
  (function loadChapter() {
    var n = PAGE === "menu" ? 1 : PCH;
    if (!CHS[n]) n = 1;
    state.chapter = n;
    var rel = LS.get("cn_current_" + n, null);
    if (n === 1 && rel === null) rel = LS.get("cn_current", 0);
    if (rel === null || rel < 0 || rel >= CHS[n].count) rel = 0;
    state.current = rel;
    var comp = LS.get("cn_completed_" + n, null);
    if (n === 1 && comp === null) comp = LS.get("cn_completed", []);
    state.completed = Array.isArray(comp) ? comp : [];
    state.celebrated = LS.get("cn_celebrated_" + n, false);
    state.best = LS.get("cn_best_" + n, null);
    TOTAL = CHS[n].count;
  })();

  /* ==========================================================================
     THEME — ใช้ Dark ธีมเดียวเสมอ (ตัวสลับธีมถูกลบออกตามคำขอ)
     ========================================================================== */
  function applyTheme() {
    document.documentElement.setAttribute("data-theme", "dark");
  }
  applyTheme();

  /* ==========================================================================
     CHAPTER MENU (เมนูหลัก — เลือกบทเรียน)
     ========================================================================== */
  function renderMenuProgress() {
    var doneTotal = 0, slideTotal = 0, doneChapters = 0;
    [1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(function (n) {
      var el = $("ch" + n + "Pct");
      var comp = LS.get("cn_completed_" + n, null);
      if (n === 1 && comp === null) comp = LS.get("cn_completed", []);
      var count = CHS[n].count;
      var compArr = (comp && comp.length) ? comp : [];
      var pct = compArr.length ? Math.min(100, Math.round((compArr.length / count) * 100)) : 0;
      doneTotal += compArr.length;
      slideTotal += count;
      if (pct === 100 && compArr.length) doneChapters++;
      if (el) el.textContent = pct + "%";
      var card = document.querySelector('[data-chapter="' + n + '"]');
      if (card) {
        card.style.setProperty("--pct", pct + "%");
        var s = card.querySelector("[data-slides='" + n + "']");
        if (s) s.textContent = count;
      }
    });
    var coursePct = slideTotal ? Math.round((doneTotal / slideTotal) * 100) : 0;
    var op = $("coursePct");
    if (op) op.textContent = coursePct + "%";
    var ob = $("courseBar");
    if (ob) ob.style.setProperty("--pct", coursePct + "%");
    var od = $("courseDone");
    if (od) od.textContent = "เรียนแล้ว " + doneTotal + " / " + slideTotal + " สไลด์ · จบแล้ว " + doneChapters + " / 9 บท";
  }
  /* กลับไปเมนูหลัก (index.html) — ใช้จากปุ่ม 🏠 ในหน้าเรียน */
  function goHome() {
    location.href = "index.html";
  }
  /* เปิดหน้าเรียนของบท — ใช้ CHS[n].file เพื่อรองรับ Final Track ที่ชื่อไฟล์ไม่ตรงเลขบท */
  function openChapter(n) {
    if (CHS[n]) {
      location.href = CHS[n].file || ("chapter" + n + ".html");
    } else {
      toast("บทนี้กำลังเตรียมเนื้อหา — เร็วๆ นี้ 🔒");
    }
  }
  function updateHeaderBrand() {
    var lbl = $("headerChapterLabel");
    if (lbl) lbl.textContent = chapterFullLabel(state.chapter);
    var st = $("sidebarChapterTitle");
    if (st) st.textContent = chapterLabel(state.chapter) + " · " + CHS[state.chapter].en;
    var ss = $("sidebarChapterSub");
    if (ss) ss.textContent = (CHS[state.chapter].code.charAt(0) === "F" ? "FINAL" : "MIDTERM") + " · BOOK CH." + CHS[state.chapter].bookChapter + " · " + TOTAL + " หัวข้อ";
  }
  /* ---------- จำตำแหน่งเลื่อนของเมนูหลัก (#chapterMenu) ----------
     ตัวเลื่อนคือ #chapterMenu เอง (position:fixed + overflow-y:auto) ไม่ใช่ window
     → กลับมาจากหน้าเรียนแล้วเมนูจะเลื่อนไปจุดเดิม ไม่ต้องเริ่มบนสุดทุกครั้ง */
  var MENU_SCROLL_KEY = "cn_menu_scroll";

  function saveMenuScroll() {
    var menu = $("chapterMenu");
    if (!menu) return;
    LS.set(MENU_SCROLL_KEY, Math.round(menu.scrollTop));
  }

  function restoreMenuScroll() {
    var menu = $("chapterMenu");
    if (!menu) return;
    var y = LS.get(MENU_SCROLL_KEY, 0);
    if (!y || y < 40) return; // อยู่ช่วงบนอยู่แล้ว — ไม่ต้องเลื่อน
    function apply() {
      var max = Math.max(0, menu.scrollHeight - menu.clientHeight);
      var target = Math.min(y, max);
      if (target <= 0) return;
      menu.scrollTop = target;
    }
    // ถ้าผู้ใช้ยังไม่เลื่อนเอง (scrollTop ยังเกือบ 0) ค่อยแก้ซ้ำหลัง layout/ไอคอน/ฟอนต์นิ่ง
    // → ไม่กระชากกลับไปจุดเดิมถ้าผู้ใช้เลื่อนเมนูเองไปแล้ว
    function applyIfUntouched() { if (menu.scrollTop < 40) apply(); }
    apply();
    requestAnimationFrame(applyIfUntouched);
    if (document.readyState === "complete") {
      setTimeout(applyIfUntouched, 120);
    } else {
      window.addEventListener("load", applyIfUntouched, { once: true });
    }
  }

  function bindMenuScrollMemory() {
    var menu = $("chapterMenu");
    if (!menu) return;
    // debounce ด้วย setTimeout (ไม่ใช้ rAF เพราะ rAF ถูกระงับเมื่อแท็บไม่ active)
    var timer = null;
    menu.addEventListener("scroll", function () {
      if (timer) clearTimeout(timer);
      timer = setTimeout(function () {
        timer = null;
        saveMenuScroll();
      }, 150);
    }, { passive: true });
    // กันข้อมูลหายตอนกดลิงก์ออกไปหน้าเรียน/pิดแท็บ
    window.addEventListener("pagehide", saveMenuScroll);
    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState === "hidden") saveMenuScroll();
    });
  }

  /* เมนูหลัก — กดการ์ดบท 1/2 ไปหน้าเรียน, บท 3/4 แจ้งเตือนเร็วๆ นี้ */
  function bindMenu() {
    var m = $("chapterMenu");
    if (!m) return;
    function pick(e) {
      var card = e.target.closest(".chapter-card");
      if (!card) return;
      openChapter(parseInt(card.dataset.chapter, 10));
    }
    m.addEventListener("click", pick);
    m.addEventListener("keydown", function (e) {
      if (e.key !== "Enter" && e.key !== " ") return;
      var card = e.target.closest(".chapter-card");
      if (!card) return;
      var n = parseInt(card.dataset.chapter, 10);
      if (!CHS[n]) { e.preventDefault(); openChapter(n); }
    });
    // ปุ่ม CTA "เริ่มเรียนเลย" — เลื่อนไปยังการ์ดบทเรียน
    var cta = $("menuCtaBtn");
    if (cta) cta.addEventListener("click", function () {
      var g = $("chapterGrid"), menu = $("chapterMenu");
      if (!g) return;
      if (menu && menu.scrollTo) {
        var top = g.getBoundingClientRect().top - menu.getBoundingClientRect().top + menu.scrollTop - 10;
        menu.scrollTo({ top: top, behavior: "smooth" });
      } else {
        g.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }

  /* ==========================================================================
     SIDEBAR
     ========================================================================== */
  function renderSidebar() {
    var nav = $("sidebarNav");
    if (!nav) return;
    var c = ch();
    var html = "";
    c.sections.forEach(function (sec) {
      html += '<div class="sidebar-section-label">' + esc(sec.label) + "</div>";
      sec.topics.forEach(function (t) {
        var i = c.start + t - 1; // global DOM index
        var meta = c.slides[t - 1];
        var done = state.completed.indexOf(t - 1) !== -1;
        var active = i === state.current;
        var statusIcon = done
          ? '<span class="status done"><i data-lucide="check"></i></span>'
          : active
            ? '<span class="status" style="color:#2563eb"><i data-lucide="chevron-right"></i></span>'
            : '<span class="status"><i data-lucide="circle"></i></span>';
        html +=
          '<button class="sidebar-item' + (active ? " active" : "") + '" data-goto="' + i + '" ' +
          'aria-label="สไลด์ ' + t + ': ' + esc(meta.short) + (done ? ' (เรียนแล้ว)' : '') + '">' +
          '<span class="num">' + t + '</span>' +
          '<span class="label">' + esc(meta.short) + "</span>" + statusIcon +
          "</button>";
      });
    });
    nav.innerHTML = html;
    icons();
    updateSidebarProgress();
  }

  function updateSidebarProgress() {
    var pct = Math.round((state.completed.length / TOTAL) * 100);
    var fill = $("sidebarProgressFill");
    var pctEl = $("sidebarPct");
    var doneEl = $("sidebarDone");
    if (fill) fill.style.width = pct + "%";
    if (pctEl) pctEl.textContent = pct + "%";
    if (doneEl) {
      doneEl.textContent = state.completed.length === 0
        ? "ยังไม่ได้เรียนสไลด์ใดเลย — เริ่มที่ Cover ได้เลย!"
        : "เรียนแล้ว " + state.completed.length + " / " + TOTAL + " สไลด์ · เหลืออีก " + (TOTAL - state.completed.length);
    }
  }

  /* ==========================================================================
     SLIDE NAVIGATION
     ========================================================================== */
  function goTo(target, dir) {
    var c = ch();
    target = Math.max(c.start, Math.min(c.start + c.count - 1, target));
    var vp = $("viewport");
    var cur = qsa(".slide-view.active", vp)[0];
    // if we're already on the target and a slide is showing, nothing to animate
    if (target === state.current && cur) { markComplete(); updateAll(); return; }

    var next = vp.children[target];
    var d = dir !== undefined ? dir : (target > state.current ? 1 : -1);

    if (cur && cur !== next) {
      cur.classList.remove("active");
      cur.classList.add(d > 0 ? "exit-left" : "exit-right");
    }
    next.classList.add(d > 0 ? "enter-right" : "enter-left");
    // force reflow so the enter transform applies before .active
    void next.offsetWidth;
    next.classList.add("active");
    // cleanup transition classes after the animation completes
    setTimeout(function () {
      if (cur && cur !== next) cur.classList.remove("exit-left", "exit-right");
      next.classList.remove("enter-left", "enter-right");
    }, 420);

    state.current = target;
    LS.set("cn_current_" + state.chapter, target - c.start);
    markComplete();
    updateAll();
    vp.scrollTop = 0;
    next.scrollTop = 0;
  }

  function markComplete() {
    var rel = state.current - ch().start;
    if (state.completed.indexOf(rel) === -1) {
      state.completed.push(rel);
      LS.set("cn_completed_" + state.chapter, state.completed);
      checkCompletion();
    }
  }

  function updateAll() {
    var i = state.current;
    renderSidebar();
    updateHeaderProgress();
    updateBottomBar();
    updateActiveSidebarItem();
    syncNotesLabel();
    highlightCurrentGlossary();
    /* สไลด์ข้อสอบหลังเรียน — re-render ทุกครั้งที่เข้าสไลด์ (สถานะล็อก/ปลดล็อกเปลี่ยนได้) */
    var cur = qsa(".slide-view.active")[0];
    if (cur && cur.dataset.title && cur.dataset.title.indexOf("ข้อสอบหลังเรียน") !== -1) renderExam();
  }

  function updateHeaderProgress() {
    var rel = state.current - ch().start;
    var pct = Math.round(((rel + 1) / TOTAL) * 100);
    var fill = $("headerProgressFill");
    var count = $("headerProgressCount");
    var bar = $("headerProgressBar");
    if (fill) fill.style.width = pct + "%";
    if (count) count.textContent = (rel + 1) + " / " + TOTAL;
    if (bar) bar.setAttribute("aria-valuenow", pct);
  }

  function updateBottomBar() {
    var prev = $("prevBtn"), next = $("nextBtn"), cnt = $("bbCounter"), total = $("bbTotal");
    var lo = ch().start, hi = ch().start + TOTAL - 1;
    prev.disabled = state.current <= lo;
    next.disabled = state.current >= hi;
    if (cnt) cnt.textContent = (state.current - lo + 1);
    if (total) total.textContent = TOTAL;
  }

  function updateActiveSidebarItem() {
    var active = qsa(".sidebar-item.active")[0];
    if (active) active.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }

  /* ==========================================================================
     MODE (LEARN / EXAM)
     ========================================================================== */
  function applyMode() {
    // โหมดเดียว: LEARN (EXAM ถูกลบออก) — เคลียร์ class ที่อาจค้างจากเวอร์ชันเก่า
    document.body.classList.remove("exam");
  }

  /* ==========================================================================
     NOTES
     ========================================================================== */
  var notesOpen = false;
  function noteKey() { return state.chapter + ":" + (state.current - ch().start); }
  function openNotes(open) {
    notesOpen = open;
    $("notesPanel").classList.toggle("open", open);
    if (open) {
      syncNotesLabel();
      var ta = $("notesTextarea");
      ta.value = state.notes[noteKey()] || "";
      setTimeout(function () { ta.focus(); }, 350);
    }
  }
  function syncNotesLabel() {
    var lbl = $("notesLabel");
    if (lbl) {
      var rel = state.current - ch().start;
      lbl.textContent = "สไลด์ " + (rel + 1) + ": " + ch().slides[rel].short;
    }
  }

  /* ==========================================================================
     TOAST
     ========================================================================== */
  var toastTimer = null;
  function toast(msg, ms) {
    var t = $("toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove("show"); }, ms || 2600);
  }

  /* ==========================================================================
     COMPLETION
     ========================================================================== */
  function checkCompletion() {
    if (state.completed.length >= TOTAL && !state.celebrated) {
      state.celebrated = true;
      LS.set("cn_celebrated_" + state.chapter, true);
      setTimeout(showCompletion, 500);
    }
  }
  function showCompletion() {
    $("doneSlides").textContent = TOTAL;
    var doneQuizLen = state.chapter === 5 ? D.ch5.quiz.length : state.chapter === 6 ? D.ch6.quiz.length : state.chapter === 7 ? D.ch7.quiz.length : state.chapter === 8 ? D.ch8.quiz.length : state.chapter === 9 ? D.ch9.quiz.length : 10;
    $("doneScore").textContent = state.best === null ? "–" : state.best + "/" + doneQuizLen;
    var ov = $("completionOverlay");
    ov.classList.add("show");
    spawnConfetti(ov);
  }
  function spawnConfetti(container) {
    qsa(".confetti-piece", container).forEach(function (p) { p.remove(); });
    var colors = ["#2563eb", "#38bdf8", "#22d3ee", "#818cf8", "#a78bfa", "#22c55e", "#f59e0b", "#f472b6"];
    for (var i = 0; i < 60; i++) {
      var p = document.createElement("div");
      p.className = "confetti-piece";
      p.style.left = Math.random() * 100 + "%";
      p.style.background = colors[i % colors.length];
      p.style.animationDuration = (2.6 + Math.random() * 2.4) + "s";
      p.style.animationDelay = (Math.random() * 1.6) + "s";
      container.appendChild(p);
    }
  }

  /* ==========================================================================
     DATA-DRIVEN RENDERS
     ========================================================================== */
  function cardHTML(icon, title, text) {
    return '<div class="card hoverable">' +
      '<h3 class="card-title"><i data-lucide="' + icon + '" class="cyan"></i>' + esc(title) + "</h3>" +
      '<p class="card-text small">' + esc(text) + "</p></div>";
  }

  function renderRoadmap() {
    var g = $("roadmapGrid");
    if (!g) return;
    g.innerHTML = D.roadmap.map(function (r) {
      return '<div class="card hoverable flex gap-3" style="align-items:flex-start;padding:18px">' +
        '<i data-lucide="' + r.icon + '" style="width:22px;height:22px;color:var(--cyan);flex-shrink:0;margin-top:2px"></i>' +
        "<div><b style='font-size:14.5px'>" + esc(r.title) + "</b>" +
        '<p class="card-text small mt-2">' + esc(r.desc) + "</p></div></div>";
    }).join("");
    icons();
  }

  function renderWhys() {
    var g = $("whyGrid");
    if (!g) return;
    g.innerHTML = D.whys.map(function (w) {
      return '<div class="card hoverable"><h3 class="card-title"><i data-lucide="' + w.icon + '" class="cyan"></i>' + esc(w.title) + "</h3>" +
        '<p class="card-text small">' + esc(w.desc) + "</p></div>";
    }).join("");
    icons();
  }

  function renderComponents() {
    var g = $("componentsGrid");
    if (!g) return;
    g.innerHTML = D.components.map(function (c) {
      return '<div class="card hoverable center" style="padding:18px 14px">' +
        '<i data-lucide="' + c.icon + '" style="width:24px;height:24px;color:var(--cyan);margin-bottom:8px"></i>' +
        '<b style="font-size:14px">' + esc(c.title) + "</b>" +
        '<p class="text-3" style="font-size:11.5px;margin:2px 0 6px">' + esc(c.thai) + "</p>" +
        '<p class="card-text small">' + esc(c.desc) + "</p></div>";
    }).join("");
    icons();
  }

  function renderSummary() {
    var g = $("summaryGrid");
    if (!g) return;
    g.innerHTML = D.summary.map(function (s) {
      return '<div class="card hoverable"><h3 class="card-title" style="font-size:14.5px"><i data-lucide="' + s.icon + '" class="cyan"></i>' + esc(s.title) + "</h3>" +
        '<p class="card-text small">' + esc(s.desc) + "</p></div>";
    }).join("");
    icons();
  }

  function renderCheat() {
    var g = $("cheatGrid");
    if (!g) return;
    g.innerHTML = D.cheat.map(function (c) {
      return '<div class="cheat-item"><span class="term">' + esc(c.term) + '</span><span class="arrow">→</span><span class="def">' + esc(c.def) + "</span></div>";
    }).join("");
  }

  /* ---------- Transmission mode (slide 9) ---------- */
  var modeTimer = null;
  function renderModeTabs() {
    var tabs = $("modeTabs");
    if (!tabs) return;
    tabs.innerHTML = D.modes.map(function (m, i) {
      return '<button class="tab-btn' + (i === 0 ? " active" : "") + '" data-mode="' + m.key + '" role="tab">' +
        esc(m.label) + ' <span class="text-3" style="font-weight:500">· ' + esc(m.thai) + "</span></button>";
    }).join("");
    icons();
  }
  function selectMode(key) {
    var m = D.modes.filter(function (x) { return x.key === key; })[0];
    if (!m) return;
    qsa("#modeTabs .tab-btn").forEach(function (b) { b.classList.toggle("active", b.dataset.mode === key); });
    $("modeBadge").textContent = m.label + " — " + m.thai;
    $("modeName").innerHTML = '<i data-lucide="info" class="cyan"></i>' + esc(m.label) + " — " + esc(m.thai);
    $("modeDesc").textContent = m.desc;
    $("modeExample").textContent = m.example;
    $("modeRem").textContent = " " + m.remember;
    $("modeTip").textContent = " " + m.exam;
    $("modeVisCaption").textContent = m.thai;
    icons();    var lineMain = $("lineMain"), pktAB = $("pktAB"), pktBA = $("pktBA");
    clearInterval(modeTimer);
    // ควบคุมลูกกลมด้วย opacity + setAttribute("begin")+beginElement() บน <animateMotion>
    // (setAttribute+beginElement restart ได้แม้ animation กำลังทำงาน — ไม่ต้องใช้ endElement)
    function hidePkt(el) { if (el) el.style.opacity = "0"; }
    function showPkt(el) {
      if (!el) return;
      el.style.opacity = "1";
      var m = el.querySelector("animateMotion");
      if (m) {
        try {
          m.setAttribute("begin", "indefinite");
          m.beginElement();
        } catch (e) {}
      }
    }
    hidePkt(pktAB); hidePkt(pktBA);

    if (key === "simplex") {
      // เส้นเดียว หัวลูกศรชี้ขวาเท่านั้น (A → B) ลูกกลมวิ่งไปทางเดียว
      lineMain.setAttribute("marker-start", "none");
      showPkt(pktAB);
    } else if (key === "half") {
      // เส้นเดียว หัวลูกศรสองทาง แต่ลูกกลมสลับกันวิ่งทีละลูก (ต้องรอ)
      lineMain.setAttribute("marker-start", "url(#arrB)");
      var phase = 0;
      var tick = function () {
        phase = 1 - phase;
        if (phase === 1) { hidePkt(pktBA); showPkt(pktAB); $("modeVisCaption").textContent = "A → B (A กำลังส่ง)"; }
        else { hidePkt(pktAB); showPkt(pktBA); $("modeVisCaption").textContent = "B → A (B กำลังส่ง)"; }
      };
      tick();
      modeTimer = setInterval(tick, 2000);
    } else {
      // เส้นเดียว หัวลูกศรสองทาง ลูกกลม 2 ลูกวิ่งสวนกันพร้อมกัน
      lineMain.setAttribute("marker-start", "url(#arrB)");
      showPkt(pktAB); showPkt(pktBA);
    }
  }

  /* ---------- Connection type (slide 10) ---------- */
  var connData = {
    ptp: {
      caption: "Point-to-Point — เชื่อมต่อระหว่าง 2 จุดโดยตรง",
      desc: "การเชื่อมต่อแบบจุดต่อจุด: มีเพียง 2 อุปกรณ์เท่านั้นที่ใช้ช่องทางสื่อสารร่วมกัน ข้อมูลส่งตรงจาก A ไป B อย่างเดียว",
      example: "สายโทรศัพท์บ้าน, สายเชื่อมระหว่าง 2 ตึกโดยตรง, USB ต่ออุปกรณ์",
      tip: "Point-to-Point = 2 จุด · ใช้ช่องทางเต็ม ๆ ไม่ต้องแย่งกับใคร"
    },
    multi: {
      caption: "Multipoint — หลายจุดแชร์ช่องทางเดียวกัน",
      desc: "อุปกรณ์หลายตัว (A, B, C) แชร์สายหรือช่องทางเดียวกัน (Bus) ต้องมีกฎควบคุมว่าใครส่งเมื่อไหร่ ไม่เช่นนั้นข้อมูลจะชนกัน",
      example: "เครือข่ายแบบ Bus เดิม, สายเคเบิลทีวีที่แชร์ร่วมกันหลายบ้าน",
      tip: "Multipoint = หลายจุดบนช่องทางเดียว · ระวังการชนกันของข้อมูล (Collision)"
    }
  };
  function selectConn(key) {
    qsa('[data-conn]').forEach(function (b) { b.classList.toggle("active", b.dataset.conn === key); });
    $("svgPtp").style.display = key === "ptp" ? "block" : "none";
    $("svgMulti").style.display = key === "multi" ? "block" : "none";
    var d = connData[key];
    $("connCaption").textContent = d.caption;
    $("connDesc").textContent = d.desc;
    $("connExample").textContent = d.example;
    $("connTip").textContent = " " + d.tip;
  }

  /* ---------- Topology (slide 11) ---------- */
  var topoSVG = {
    bus: '<svg viewBox="0 0 340 220" role="img" aria-label="โทโพโลยีแบบบัส">' +
      '<line x1="30" y1="90" x2="310" y2="90" stroke="#38bdf8" stroke-width="4"/>' +
      '<rect x="22" y="82" width="8" height="16" fill="#f59e0b" rx="2"/><rect x="310" y="82" width="8" height="16" fill="#f59e0b" rx="2"/>' +
      '<line x1="75" y1="90" x2="75" y2="150" stroke="#38bdf8" stroke-width="2"/><line x1="145" y1="90" x2="145" y2="150" stroke="#38bdf8" stroke-width="2"/>' +
      '<line x1="215" y1="90" x2="215" y2="150" stroke="#38bdf8" stroke-width="2"/><line x1="285" y1="90" x2="285" y2="150" stroke="#38bdf8" stroke-width="2"/>' +
      '<circle class="net-node" cx="75" cy="175" r="16"/><text x="75" y="210" text-anchor="middle" class="net-label">A</text>' +
      '<circle class="net-node" cx="145" cy="175" r="16"/><text x="145" y="210" text-anchor="middle" class="net-label">B</text>' +
      '<circle class="net-node" cx="215" cy="175" r="16"/><text x="215" y="210" text-anchor="middle" class="net-label">C</text>' +
      '<circle class="net-node" cx="285" cy="175" r="16"/><text x="285" y="210" text-anchor="middle" class="net-label">D</text>' +
      '<text x="170" y="78" text-anchor="middle" class="net-label">BACKBONE</text>' +
      '<circle class="topo-packet" r="6"><animateMotion dur="4s" repeatCount="indefinite" path="M30,90 L310,90 L30,90"/></circle></svg>',
    star: '<svg viewBox="0 0 340 220" role="img" aria-label="โทโพโลยีแบบดาว">' +
      '<line x1="170" y1="110" x2="60" y2="40" stroke="#38bdf8" stroke-width="2"/><line x1="170" y1="110" x2="280" y2="40" stroke="#38bdf8" stroke-width="2"/>' +
      '<line x1="170" y1="110" x2="60" y2="180" stroke="#38bdf8" stroke-width="2"/><line x1="170" y1="110" x2="280" y2="180" stroke="#38bdf8" stroke-width="2"/>' +
      '<line x1="170" y1="110" x2="170" y2="195" stroke="#38bdf8" stroke-width="2"/>' +
      '<circle class="net-node hub" cx="170" cy="110" r="22"/><text x="170" y="86" text-anchor="middle" class="net-label" fill="#e2e8f0">SWITCH</text>' +
      '<circle class="net-node" cx="60" cy="40" r="15"/><text x="60" y="16" text-anchor="middle" class="net-label">A</text>' +
      '<circle class="net-node" cx="280" cy="40" r="15"/><text x="280" y="16" text-anchor="middle" class="net-label">B</text>' +
      '<circle class="net-node" cx="60" cy="180" r="15"/><text x="60" y="214" text-anchor="middle" class="net-label">C</text>' +
      '<circle class="net-node" cx="280" cy="180" r="15"/><text x="280" y="214" text-anchor="middle" class="net-label">D</text>' +
      '<circle class="net-node" cx="170" cy="195" r="15"/><text x="170" y="229" text-anchor="middle" class="net-label">E</text>' +
      '<circle class="topo-packet" r="6"><animateMotion dur="9s" repeatCount="indefinite" path="M170,110 L60,40 L170,110 L280,40 L170,110 L60,180 L170,110 L280,180 L170,110 L170,195 L170,110"/></circle></svg>',
    ring: '<svg viewBox="0 0 340 220" role="img" aria-label="โทโพโลยีแบบริง">' +
      '<ellipse cx="170" cy="110" rx="115" ry="65" fill="none" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="7 5"/>' +
      '<line x1="55" y1="110" x2="95" y2="65" stroke="#38bdf8" stroke-width="1.5"/><line x1="245" y1="65" x2="285" y2="110" stroke="#38bdf8" stroke-width="1.5"/>' +
      '<line x1="285" y1="110" x2="245" y2="155" stroke="#38bdf8" stroke-width="1.5"/><line x1="95" y1="155" x2="55" y2="110" stroke="#38bdf8" stroke-width="1.5"/>' +
      '<line x1="95" y1="65" x2="245" y2="65" stroke="#38bdf8" stroke-width="1.5"/><line x1="245" y1="155" x2="95" y2="155" stroke="#38bdf8" stroke-width="1.5"/>' +
      '<circle class="net-node" cx="55" cy="110" r="14"/><text x="55" y="86" text-anchor="middle" class="net-label">A</text>' +
      '<circle class="net-node" cx="95" cy="65" r="14"/><text x="95" y="41" text-anchor="middle" class="net-label">B</text>' +
      '<circle class="net-node" cx="245" cy="65" r="14"/><text x="245" y="41" text-anchor="middle" class="net-label">C</text>' +
      '<circle class="net-node" cx="285" cy="110" r="14"/><text x="285" y="86" text-anchor="middle" class="net-label">D</text>' +
      '<circle class="net-node" cx="245" cy="155" r="14"/><text x="245" y="179" text-anchor="middle" class="net-label">E</text>' +
      '<circle class="net-node" cx="95" cy="155" r="14"/><text x="95" y="179" text-anchor="middle" class="net-label">F</text>' +
      '<circle class="topo-packet" r="6"><animateMotion dur="5s" repeatCount="indefinite" path="M55,110 A115,65 0 1,1 285,110 A115,65 0 1,1 55,110"/></circle></svg>',
    mesh: '<svg viewBox="0 0 340 220" role="img" aria-label="โทโพโลยีแบบเมช">' +
      '<line x1="60" y1="60" x2="270" y2="50" stroke="#38bdf8" stroke-width="1.8"/><line x1="60" y1="60" x2="60" y2="180" stroke="#38bdf8" stroke-width="1.8"/>' +
      '<line x1="60" y1="60" x2="165" y2="115" stroke="#38bdf8" stroke-width="1.8"/><line x1="270" y1="50" x2="60" y2="180" stroke="#38bdf8" stroke-width="1.8"/>' +
      '<line x1="270" y1="50" x2="165" y2="115" stroke="#38bdf8" stroke-width="1.8"/><line x1="270" y1="50" x2="270" y2="180" stroke="#38bdf8" stroke-width="1.8"/>' +
      '<line x1="60" y1="180" x2="165" y2="115" stroke="#38bdf8" stroke-width="1.8"/><line x1="60" y1="180" x2="270" y2="180" stroke="#38bdf8" stroke-width="1.8"/>' +
      '<line x1="165" y1="115" x2="270" y2="180" stroke="#38bdf8" stroke-width="1.8"/>' +
      '<circle class="net-node" cx="60" cy="60" r="15"/><text x="60" y="36" text-anchor="middle" class="net-label">A</text>' +
      '<circle class="net-node" cx="270" cy="50" r="15"/><text x="270" y="26" text-anchor="middle" class="net-label">B</text>' +
      '<circle class="net-node" cx="60" cy="180" r="15"/><text x="60" y="214" text-anchor="middle" class="net-label">C</text>' +
      '<circle class="net-node" cx="270" cy="180" r="15"/><text x="270" y="214" text-anchor="middle" class="net-label">D</text>' +
      '<circle class="net-node" cx="165" cy="115" r="15"/><text x="165" y="91" text-anchor="middle" class="net-label">E</text>' +
      '<circle class="topo-packet" r="6"><animateMotion dur="7s" repeatCount="indefinite" path="M60,60 L270,50 L165,115 L60,180 L270,180 L165,115 L60,60"/></circle></svg>',
    tree: '<svg viewBox="0 0 340 220" role="img" aria-label="โทโพโลยีแบบทรี">' +
      '<line x1="170" y1="60" x2="100" y2="120" stroke="#38bdf8" stroke-width="2.5"/><line x1="170" y1="60" x2="240" y2="120" stroke="#38bdf8" stroke-width="2.5"/>' +
      '<line x1="100" y1="120" x2="50" y2="180" stroke="#38bdf8" stroke-width="2"/><line x1="100" y1="120" x2="150" y2="180" stroke="#38bdf8" stroke-width="2"/>' +
      '<line x1="240" y1="120" x2="190" y2="180" stroke="#38bdf8" stroke-width="2"/><line x1="240" y1="120" x2="290" y2="180" stroke="#38bdf8" stroke-width="2"/>' +
      '<circle class="net-node hub" cx="170" cy="40" r="20"/><text x="170" y="18" text-anchor="middle" class="net-label" fill="#e2e8f0">ROOT</text>' +
      '<circle class="net-node" cx="100" cy="120" r="14"/><text x="100" y="96" text-anchor="middle" class="net-label">HUB 1</text>' +
      '<circle class="net-node" cx="240" cy="120" r="14"/><text x="240" y="96" text-anchor="middle" class="net-label">HUB 2</text>' +
      '<circle class="net-node" cx="50" cy="180" r="13"/><text x="50" y="212" text-anchor="middle" class="net-label">A</text>' +
      '<circle class="net-node" cx="150" cy="180" r="13"/><text x="150" y="212" text-anchor="middle" class="net-label">B</text>' +
      '<circle class="net-node" cx="190" cy="180" r="13"/><text x="190" y="212" text-anchor="middle" class="net-label">C</text>' +
      '<circle class="net-node" cx="290" cy="180" r="13"/><text x="290" y="212" text-anchor="middle" class="net-label">D</text>' +
      '<circle class="topo-packet" r="6"><animateMotion dur="10s" repeatCount="indefinite" path="M170,40 L100,120 L50,180 L100,120 L150,180 L100,120 L170,40 L240,120 L190,180 L240,120 L290,180 L240,120 L170,40"/></circle></svg>',
    hybrid: '<svg viewBox="0 0 340 220" role="img" aria-label="โทโพโลยีแบบไฮบริด">' +
      '<line x1="30" y1="60" x2="100" y2="110" stroke="#38bdf8" stroke-width="2"/>' +
      '<line x1="30" y1="160" x2="100" y2="110" stroke="#38bdf8" stroke-width="2"/>' +
      '<line x1="310" y1="60" x2="240" y2="110" stroke="#38bdf8" stroke-width="2"/>' +
      '<line x1="310" y1="160" x2="240" y2="110" stroke="#38bdf8" stroke-width="2"/>' +
      '<line x1="100" y1="110" x2="240" y2="110" stroke="#38bdf8" stroke-width="2.6"/>' +
      '<line x1="100" y1="110" x2="170" y2="52" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="4 4"/>' +
      '<line x1="170" y1="52" x2="240" y2="110" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="4 4"/>' +
      '<text x="170" y="102" text-anchor="middle" class="net-label" style="font-size:9px">MESH BACKBONE</text>' +
      '<text x="65" y="128" text-anchor="middle" class="net-label" style="font-size:9px">STAR LAN A</text>' +
      '<text x="275" y="128" text-anchor="middle" class="net-label" style="font-size:9px">STAR LAN B</text>' +
      '<circle class="net-node-ring" cx="30" cy="60" r="21"/>' +
      '<circle class="net-node" cx="30" cy="60" r="15"/><text x="30" y="65" text-anchor="middle" class="net-label" fill="#c4b5fd" font-size="12" font-weight="800">S</text>' +
      '<text x="30" y="28" text-anchor="middle" class="net-label">SENDER</text>' +
      '<circle class="net-node" cx="30" cy="160" r="13"/><text x="30" y="194" text-anchor="middle" class="net-label">C1</text>' +
      '<circle class="net-node hub" cx="100" cy="110" r="18"/><text x="100" y="145" text-anchor="middle" class="net-label" fill="#e2e8f0">HUB 1</text>' +
      '<circle class="net-node" cx="170" cy="52" r="11"/><text x="170" y="30" text-anchor="middle" class="net-label">M</text>' +
      '<circle class="net-node hub" cx="240" cy="110" r="18"/><text x="240" y="145" text-anchor="middle" class="net-label" fill="#e2e8f0">HUB 2</text>' +
      '<circle class="net-node" cx="310" cy="60" r="13"/><text x="310" y="36" text-anchor="middle" class="net-label">C2</text>' +
      '<circle class="net-node-ring" cx="310" cy="160" r="21"/>' +
      '<circle class="net-node" cx="310" cy="160" r="15"/><text x="310" y="165" text-anchor="middle" class="net-label" fill="#5eead4" font-size="12" font-weight="800">R</text>' +
      '<text x="310" y="194" text-anchor="middle" class="net-label">RECEIVER</text>' +
      '<circle class="topo-packet" r="6"><animateMotion dur="5.5s" repeatCount="indefinite" path="M30,60 L100,110 L240,110 L310,160 L240,110 L100,110 L30,60"/></circle></svg>'
  };
  function renderTopoTabs() {
    var tabs = $("topoTabs");
    if (!tabs) return;
    tabs.innerHTML = D.topologies.map(function (t, i) {
      return '<button class="tab-btn' + (i === 0 ? " active" : "") + '" data-topo="' + t.key + '" role="tab">' + esc(t.label) + "</button>";
    }).join("");
  }
  function selectTopo(key) {
    var t = D.topologies.filter(function (x) { return x.key === key; })[0];
    if (!t) return;
    qsa("#topoTabs .tab-btn").forEach(function (b) { b.classList.toggle("active", b.dataset.topo === key); });
    var vis = $("topoVis");
    var isFirstRender = vis.innerHTML.trim() === "";
    if (isFirstRender) {
      vis.innerHTML = topoSVG[t.key];
    } else {
      vis.classList.add("topo-enter");
      setTimeout(function () {
        vis.innerHTML = topoSVG[t.key];
        requestAnimationFrame(function () { vis.classList.remove("topo-enter"); });
      }, 200);
    }
    $("topoName").innerHTML = '<i data-lucide="info" class="cyan"></i>' + esc(t.label) + " — " + esc(t.thai);
    $("topoDesc").textContent = t.desc;
    $("topoPros").textContent = t.pros;
    $("topoCons").textContent = t.cons;
    $("topoExample").textContent = t.example;
    $("topoTip").textContent = " " + t.exam;
    icons();
  }

  /* ---------- Network scope (slide 13) ---------- */
  function selectScope(idx) {
    var s = D.scopes[idx];
    if (!s) return;
    var stage = $("zoomStage");
    stage.setAttribute("data-level", idx + 1);
    qsa("#scopeTabs .tab-btn").forEach(function (b, i) { b.classList.toggle("active", i === idx); });
    $("scopeName").innerHTML = '<i data-lucide="info" class="cyan"></i>' + esc(s.label) + " — " + esc(s.thai);
    $("scopeDef").textContent = s.desc;
    $("scopeRange").textContent = s.range;
    $("scopeExample").textContent = s.example;
    $("scopeRemember").textContent = " " + s.remember;
  }

  /* ---------- Media (slide 14) ---------- */
  var mediaByGroup = { wired: [], wireless: [] };
  var mediaGrouped = false;
  function renderMediaTabs(group) {
    if (!mediaGrouped) {
      D.media.forEach(function (m) { mediaByGroup[m.group].push(m); });
      mediaGrouped = true;
    }
    var tabs = $("mediaTabs");
    tabs.innerHTML = mediaByGroup[group].map(function (m, i) {
      return '<button class="tab-btn' + (i === 0 ? " active" : "") + '" data-media="' + m.key + '" role="tab">' + esc(m.label) + "</button>";
    }).join("");
    selectMedia(mediaByGroup[group][0].key);
  }
  function selectMedia(key) {
    var m = D.media.filter(function (x) { return x.key === key; })[0];
    if (!m) return;
    qsa("#mediaTabs .tab-btn").forEach(function (b) { b.classList.toggle("active", b.dataset.media === key); });
    $("mediaName").innerHTML = '<i data-lucide="info" class="cyan"></i>' + esc(m.label);
    $("mediaDesc").textContent = m.desc;
    $("mediaExample").textContent = m.example;
    renderMediaVis(m);
  }
  function renderMediaVis(m) {
    var vis = $("mediaVis");
    if (m.type === "copper") {
      vis.innerHTML =
        '<div style="max-width:380px;margin:0 auto">' +
        '<div class="wire"><span class="electron" style="animation-delay:0s"></span><span class="electron" style="animation-delay:-0.7s"></span><span class="electron" style="animation-delay:-1.1s"></span></div>' +
        '<p class="text-3 mt-4" style="font-size:13px">⚡ สัญญาณไฟฟ้าไหลผ่านสายทองแดง</p></div>';
    } else if (m.type === "fiber") {
      vis.innerHTML =
        '<div style="max-width:380px;margin:0 auto">' +
        '<div class="fiber"><span class="photon" style="animation-delay:0s"></span><span class="photon" style="animation-delay:-0.9s"></span><span class="photon" style="animation-delay:-1.6s"></span></div>' +
        '<p class="text-3 mt-4" style="font-size:13px">💡 แสง (Light Pulse) วิ่งในเส้นใยแก้ว</p></div>';
    } else {
      var rings = "";
      for (var i = 0; i < 3; i++) rings += '<div class="wave-ring" style="animation-delay:' + (i * 0.6) + 's"></div>';
      vis.innerHTML =
        '<div style="position:relative;min-height:110px">' +
        '<div class="wave-vis">' + rings + '</div>' +
        '<div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);font-size:38px">📡</div></div>' +
        '<p class="text-3 mt-2" style="font-size:13px">📡 คลื่นแพร่กระจายผ่านอากาศ</p>';
    }
  }

  /* ---------- Protocol stack (slide 15) ---------- */
  function renderStack() {
    var list = $("stackList");
    if (!list) return;
    list.innerHTML = D.stack.map(function (s, i) {
      return '<button class="stack-layer' + (i === 0 ? " active" : "") + '" data-layer="' + i + '">' +
        '<span style="display:flex;align-items:center;gap:10px"><span style="width:10px;height:10px;border-radius:3px;background:' + s.color + '"></span>' +
        esc(s.layer) + '</span><span class="sl-proto">' + esc(s.protos) + "</span></button>";
    }).join("");
    selectStack(0);
  }
  function selectStack(i) {
    var s = D.stack[i];
    if (!s) return;
    qsa("#stackList .stack-layer").forEach(function (b, j) { b.classList.toggle("active", j === i); });
    $("stackName").innerHTML = '<i data-lucide="info" class="cyan"></i>' + esc(s.layer) + ' · <span class="text-3" style="font-weight:500">' + esc(s.protos) + "</span>";
    $("stackDesc").textContent = s.desc;
    $("stackAnalogy").textContent = s.analogy;
    $("stackExample").textContent = s.ex;
  }

  /* ---------- Protocol cards (slide 16) ---------- */
  function renderProtoCards() {
    var g = $("protoCards");
    if (!g) return;
    g.innerHTML = D.protocols.map(function (p) {
      return '<button class="proto-card" data-proto="' + p.key + '" aria-label="ดูรายละเอียด ' + esc(p.name) + '">' +
        '<div class="pc-icon"><i data-lucide="' + p.icon + '"></i></div>' +
        "<h3>" + esc(p.name) + "</h3><p>" + esc(p.thai) + "</p></button>";
    }).join("");
    icons();
  }
  function protoAnimHTML(type) {
    if (type === "req") {
      return '<div class="flow-row">' +
        '<div class="node" style="padding:9px 14px"><span class="node-emoji">🖥️</span>Browser</div>' +
        '<span class="flow-arrow">⟶</span>' +
        '<div class="node" style="padding:9px 14px"><span class="node-emoji">🌐</span>Server</div>' +
        '<div class="flow-row" style="width:100%"><span class="chip">GET /page</span><span class="chip">200 OK</span></div></div>' +
        '<p class="text-3 mt-3 center" style="font-size:12.5px">คำขอ → คำตอบ (Request → Response)</p>';
    }
    if (type === "handshake") {
      return '<div class="flow-row" style="flex-direction:column;gap:8px">' +
        '<span class="chip" style="border-color:rgba(34,211,238,.5)">1. SYN — ขอเชื่อมต่อ</span>' +
        '<span class="chip" style="border-color:rgba(129,140,248,.5)">2. SYN-ACK — ยอมรับ</span>' +
        '<span class="chip" style="border-color:rgba(34,197,94,.5)">3. ACK — ตกลง! เชื่อมต่อแล้ว</span></div>' +
        '<p class="text-3 mt-3 center" style="font-size:12.5px">Three-Way Handshake</p>';
    }
    if (type === "route") {
      return '<div class="flow-row">' +
        '<div class="node" style="padding:9px 14px"><span class="node-emoji">💻</span>192.168.1.5</div>' +
        '<span class="flow-arrow">⟶</span>' +
        '<div class="node" style="padding:9px 14px"><span class="node-emoji">📡</span>Router</div>' +
        '<span class="flow-arrow">⟶</span>' +
        '<div class="node" style="padding:9px 14px"><span class="node-emoji">🖥️</span>8.8.8.8</div></div>' +
        '<p class="text-3 mt-3 center" style="font-size:12.5px">IP Address = ที่อยู่ปลายทาง · Router = คนนำทาง</p>';
    }
    if (type === "dns") {
      return '<div class="flow-row">' +
        '<div class="node" style="padding:9px 14px"><span class="node-emoji">🌐</span>google.com</div>' +
        '<span class="flow-arrow">⟶</span>' +
        '<div class="node" style="padding:9px 14px;border-color:rgba(34,211,238,.6)"><span class="node-emoji">🔢</span>142.250.1.1</div></div>' +
        '<p class="text-3 mt-3 center" style="font-size:12.5px">DNS แปลงชื่อ → IP Address</p>';
    }
    // dhcp
    return '<div class="flow-row">' +
      '<div class="node" style="padding:9px 14px"><span class="node-emoji">📱</span>อุปกรณ์ใหม่</div>' +
      '<span class="flow-arrow">⟵</span>' +
      '<div class="node" style="padding:9px 14px;border-color:rgba(34,211,238,.6)"><span class="node-emoji">🗄️</span>DHCP Server</div></div>' +
      '<p class="text-3 mt-3 center" style="font-size:12.5px">ได้รับ IP อัตโนมัติ: <b class="cyan">192.168.1.20</b></p>';
  }
  function selectProto(key) {
    var p = D.protocols.filter(function (x) { return x.key === key; })[0];
    if (!p) return;
    qsa(".proto-card").forEach(function (b) { b.classList.toggle("active", b.dataset.proto === key); });
    var detail = $("protoDetail");
    detail.style.display = "block";
    $("protoDetailName").innerHTML = '<i data-lucide="info" class="cyan"></i>' + esc(p.name);
    $("protoDetailDef").textContent = p.def;
    $("protoDetailThai").textContent = p.thai;
    $("protoDetailExample").textContent = p.example;
    $("protoDetailTip").textContent = " " + p.tip;
    $("protoAnim").innerHTML = protoAnimHTML(p.anim);
    detail.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  /* ---------- Timeline (slide 18) ---------- */
  function renderTimeline() {
    var h = $("timelineH"), v = $("timelineV");
    var mk = function (open) {
      return D.history.map(function (t, i) {
        return '<div class="tl-card' + (open === i ? " open" : "") + '" data-tl="' + i + '" role="button" tabindex="0" aria-expanded="' + (open === i) + '">' +
          '<div class="tl-dot"></div>' +
          '<div class="tl-year">' + esc(t.year) + "</div>" +
          '<div class="tl-title">' + esc(t.title) + "</div>" +
          '<div class="tl-details">' + esc(t.desc) + "</div>" +
          '<div class="tl-expand"><div><p class="mt-2 text-2" style="font-size:12.5px;line-height:1.7;border-top:1px solid var(--border);padding-top:8px">' + esc(t.detail) + "</p></div></div>" +
          "</div>";
      }).join("");
    };
    h.innerHTML = mk(0);
    v.innerHTML = D.history.map(function (t, i) {
      return '<div class="tl-v-item card hoverable" data-tl="' + i + '" role="button" tabindex="0">' +
        '<div class="tl-year">' + esc(t.year) + "</div>" +
        '<div class="tl-title">' + esc(t.title) + "</div>" +
        '<div class="tl-details">' + esc(t.desc) + "</div>" +
        '<div class="tl-expand"><div><p class="mt-2 text-2" style="font-size:12.5px;line-height:1.7;padding-top:8px">' + esc(t.detail) + "</p></div></div>" +
        "</div>";
    }).join("");
  }
  function toggleTimeline(idx, root) {
    qsa(".tl-card.open, .tl-v-item.open", root || document).forEach(function (c) {
      if (c.dataset.tl !== String(idx)) { c.classList.remove("open"); c.setAttribute("aria-expanded", "false"); }
    });
    qsa('.tl-card[data-tl="' + idx + '"], .tl-v-item[data-tl="' + idx + '"]', root || document).forEach(function (c) {
      var open = c.classList.toggle("open");
      c.setAttribute("aria-expanded", open);
    });
  }

  /* ---------- Quiz (slides 22–23) ---------- */
  var QUIZ_PER_PART = 5;
  function quizQuestions(part) { return D.quiz.slice(part * QUIZ_PER_PART, part * QUIZ_PER_PART + QUIZ_PER_PART); }
  function partScore(part) {
    var qs = quizQuestions(part);
    var ans = state.quiz.answers;
    var sc = 0;
    qs.forEach(function (q, j) { if (ans[part * QUIZ_PER_PART + j] === q.correct) sc++; });
    return sc;
  }
  function totalScore() {
    var sc = 0;
    D.quiz.forEach(function (q, j) { if (state.quiz.answers[j] === q.correct) sc++; });
    return sc;
  }
  function renderQuiz(part) {
    var el = $(part === 0 ? "quiz1" : "quiz2");
    if (!el) return;
    var qs = quizQuestions(part);
    var allAnswered = qs.every(function (_, j) { return state.quiz.answers[part * QUIZ_PER_PART + j] !== undefined; });

    if (allAnswered) {
      renderQuizResult(part, el, qs);
      return;
    }
    // find first unanswered
    var qi = 0;
    for (var j = 0; j < qs.length; j++) {
      if (state.quiz.answers[part * QUIZ_PER_PART + j] === undefined) { qi = j; break; }
    }
    renderQuizQuestion(part, qi, el, qs);
  }
  function renderQuizQuestion(part, qi, el, qs) {
    var q = qs[qi];
    var gidx = part * QUIZ_PER_PART + qi;
    var chosen = state.quiz.answers[gidx];
    var answered = chosen !== undefined;
    var opts = q.options.map(function (o, oi) {
      var cls = "quiz-option";
      if (answered) {
        cls += " locked";
        if (oi === q.correct) cls += " correct";
        else if (oi === chosen) cls += " incorrect";
      }
      return '<button class="' + cls + '" data-opt="' + oi + '"' + (answered ? " disabled" : "") + ">" +
        '<span class="opt-key">' + "ABCD"[oi] + "</span><span>" + esc(o) + "</span></button>";
    }).join("");

    el.innerHTML =
      '<div class="card fade-up" style="padding:26px">' +
      '<div class="flex items-center justify-between mb-3 wrap gap-2">' +
      '<span class="chip">ข้อที่ ' + (qi + 1) + " / " + qs.length + " · ชุดที่ " + (part + 1) + "</span>" +
      '<span class="chip" style="border-color:rgba(56,189,248,.4)">คะแนนชุดนี้: ' + partScore(part) + " / " + QUIZ_PER_PART + "</span></div>" +
      "<h3 style='font-size:19px;line-height:1.5;margin-bottom:18px'>" + esc(q.q) + "</h3>" +
      '<div class="flex" style="flex-direction:column;gap:10px">' + opts + "</div>" +
      (answered
        ? '<div class="quiz-explanation mt-4">💡 ' + esc(q.explain) + "</div>" +
          '<div class="flex items-center gap-3 mt-5 wrap">' +
          '<button class="btn btn-ghost" id="qRetry' + part + '"><i data-lucide="rotate-ccw"></i> ลองชุดนี้ใหม่</button>' +
          (qi < qs.length - 1
            ? '<button class="btn btn-primary" id="qNext' + part + '">ข้อถัดไป <i data-lucide="arrow-right"></i></button>'
            : '<button class="btn btn-primary" id="qFinish' + part + '">ดูผลลัพธ์ <i data-lucide="flag"></i></button>') +
          "</div>"
        : '<div class="tip-box tip-note mt-4" style="margin-top:18px"><i data-lucide="lightbulb"></i><div><b>Hint</b>ลองนึกถึงตัวอย่างที่เรียนมา เช่น สัญญาณทีวี = Simplex</div></div>')
      + "</div>";

    icons();

    // wire events
    el.querySelectorAll(".quiz-option").forEach(function (b) {
      b.addEventListener("click", function () {
        var oi = parseInt(b.dataset.opt, 10);
        if (answered) return;
        state.quiz.answers[gidx] = oi;
        LS.set("cn_quiz", state.quiz);
        var correct = oi === q.correct;
        b.classList.add(correct ? "correct" : "incorrect");
        if (!correct) {
          qsa(".quiz-option", el).forEach(function (x) {
            if (parseInt(x.dataset.opt, 10) === q.correct) x.classList.add("correct");
          });
        }
        qsa(".quiz-option", el).forEach(function (x) { x.classList.add("locked"); x.setAttribute("disabled", "disabled"); });
        var exp = document.createElement("div");
        exp.className = "quiz-explanation mt-4";
        exp.innerHTML = (correct ? "✅ ถูกต้อง! " : "❌ ยังไม่ถูกนะ ") + "💡 " + esc(q.explain);
        el.querySelector(".quiz-option").closest("div.flex").insertAdjacentElement("afterend", exp);
        var nav = document.createElement("div");
        nav.className = "flex items-center gap-3 mt-5 wrap";
        nav.innerHTML = qi < qs.length - 1
          ? '<button class="btn btn-primary" id="qNext' + part + '">ข้อถัดไป <i data-lucide="arrow-right"></i></button>'
          : '<button class="btn btn-primary" id="qFinish' + part + '">ดูผลลัพธ์ <i data-lucide="flag"></i></button>';
        exp.insertAdjacentElement("afterend", nav);
        icons();
        bindQuizNav(part);
        if (correct) toast("✅ ถูกต้อง!", 1200);
      });
    });
    bindQuizNav(part);
  }
  function bindQuizNav(part) {
    var n = $("qNext" + part);
    if (n) n.addEventListener("click", function () { renderQuiz(part); });
    var f = $("qFinish" + part);
    if (f) f.addEventListener("click", function () { renderQuiz(part); });
    var r = $("qRetry" + part);
    if (r) r.addEventListener("click", function () {
      var qs = quizQuestions(part);
      qs.forEach(function (_, j) { delete state.quiz.answers[part * QUIZ_PER_PART + j]; });
      LS.set("cn_quiz", state.quiz);
      renderQuiz(part);
    });
  }
  function renderQuizResult(part, el, qs) {
    var sc = partScore(part);
    var total = totalScore();
    var first = part === 0;
    var pct = Math.round((sc / qs.length) * 100);
    var msg = sc === qs.length ? "Perfect! เก่งมาก! 🏆"
      : sc >= qs.length - 1 ? "Excellent! เกือบเต็มแล้ว! 💪"
      : sc >= Math.ceil(qs.length / 2) ? "Good job! ทบทวนอีกนิดก็เพอร์เฟกต์ ✨"
      : "ยังไม่ผ่าน — ย้อนกลับไปทบทวนสไลด์แล้วลองใหม่นะ 📚";
    var ring = 2 * Math.PI * 62;
    var offset = ring - (sc / qs.length) * ring;

    el.innerHTML =
      '<div class="card center fade-up" style="padding:34px 26px">' +
      '<div class="score-ring"><svg width="150" height="150" viewBox="0 0 150 150">' +
      '<defs><linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0%" stop-color="#2563eb"/><stop offset="100%" stop-color="#22d3ee"/></linearGradient></defs>' +
      '<circle class="ring-bg" cx="75" cy="75" r="62" fill="none" stroke-width="12"/>' +
      '<circle class="ring-fill" id="ring' + part + '" cx="75" cy="75" r="62" fill="none" stroke-width="12" stroke-linecap="round" ' +
      'stroke-dasharray="' + ring + '" stroke-dashoffset="' + ring + '"/></svg>' +
      '<div class="ring-num">' + sc + "/" + qs.length + "</div></div>" +
      "<p class='mt-3 text-2' style='font-weight:700'>" + pct + "% · " + msg + "</p>" +
      (first
        ? '<p class="text-3 mt-2" style="font-size:13px">ตอบถูก ' + sc + " จาก " + qs.length + " ข้อ — ไปต่อชุดที่ 2 เพื่อเก็บคะแนนรวม</p>"
        : '<p class="text-3 mt-2" style="font-size:13px">รวมสองชุด: <b class="cyan">' + total + " / 10</b> คะแนน</p>") +
      '<div class="flex items-center gap-3 mt-5 wrap" style="justify-content:center">' +
      '<button class="btn btn-ghost" id="qRetry' + part + '"><i data-lucide="rotate-ccw"></i> ทำชุดนี้ใหม่</button>' +
      (first
        ? '<button class="btn btn-primary" id="qToPart2"><i data-lucide="arrow-right"></i> ไปชุดที่ 2</button>'
        : '<button class="btn btn-primary" id="qToCards"><i data-lucide="square-stack"></i> ไป Flashcards</button>') +
      "</div></div>";

    icons();
    setTimeout(function () {
      var rf = $("ring" + part);
      if (rf) rf.style.strokeDashoffset = offset;
    }, 120);

    var r = $("qRetry" + part);
    if (r) r.addEventListener("click", function () {
      var qqs = quizQuestions(part);
      qqs.forEach(function (_, j) { delete state.quiz.answers[part * QUIZ_PER_PART + j]; });
      LS.set("cn_quiz", state.quiz);
      renderQuiz(part);
    });
    var p2 = $("qToPart2");
    if (p2) p2.addEventListener("click", function () { goTo(22, 1); });
    var cards = $("qToCards");
    if (cards) cards.addEventListener("click", function () { goTo(23, 1); });

    // record best score (only when both parts done)
    if (!first && totalScore() > 0) {
      var all10 = D.quiz.every(function (_, j) { return state.quiz.answers[j] !== undefined; });
      if (all10) {
        if (state.best === null || totalScore() > state.best) {
          state.best = totalScore();
          LS.set("cn_best", state.best);
        }
      }
    }
  }

  /* ---------- Quick Quiz (slide 26 · 20 ข้อ ทบทวน) ---------- */
  /* ==========================================================================
     ข้อสอบหลังเรียน (Post-Lesson Exam · 20 ข้อ) — generic สำหรับทุกบท
     ========================================================================== */
  function examState() { return state["exam" + (state.chapter === 1 ? "" : state.chapter)]; }
  function examStoreKey() { return "cn_exam" + (state.chapter === 1 ? "" : state.chapter); }
  function examData() { return (ch().exam) || []; }
  function examElId() { return "quizExam" + (state.chapter === 1 ? "" : state.chapter); }
  function examScore() {
    var st = examState(), sc = 0;
    examData().forEach(function (q, j) { if (st.answers[j] === q.correct) sc++; });
    return sc;
  }
  function examHint() {
    var h = {
      1: "ลองนึกถึงตัวอย่างที่เรียนมา เช่น สายทองแดง = ไฟฟ้า, ใยแก้ว = แสง, ทีวี = Simplex",
      2: "ลองนึกถึงลำดับชั้นและ PDU ของแต่ละ Layer เช่น Transport = Segment, Network = Packet",
      3: "ลองนึกถึง Port และหน้าที่ของแต่ละโปรโตคอล เช่น HTTP = 80, HTTPS = 443, DNS = 53",
      4: "ลองนึกถึง 4-tuple, Three-Way Handshake และความต่างของ TCP vs UDP ประกอบคำตอบ",
      5: "ลองนึกถึง Forwarding vs Routing, Data/Control Plane, Longest Prefix Matching, subnet /24 และ DHCP 4 ขั้น",
      6: "ลองนึกถึง Control Plane, LS↔Dijkstra, DV↔Bellman-Ford, count-to-infinity, OSPF และ BGP selection",
      7: "ลองนึกถึง node ที่ติดกัน, frame/NIC, parity vs CRC, TDMA/FDMA/ALOHA, CSMA/CD, Ethernet frame, MAC vs IP, ARP, switch learning และ VLAN 802.1Q",
      8: "ลองนึกถึง wireless ≠ mobility, dBm, SNR/Shannon, hidden terminal/multipath, CSMA/CA + ACK, 802.11 address, association, MIMO และ 5G handover",
      9: "ลองนึกถึง confidentiality/authentication/integrity, symmetric vs public key, RSA (p,q,n,z,e,d), nonce กัน playback, hash/MAC, digital signature + CA, TLS 1.3 handshake และ MITM/replay/DoS"
    };
    return h[state.chapter] || "ลองทบทวนเนื้อหาจากสไลด์ที่ผ่านมา แล้วค่อยตอบใหม่";
  }
  function renderExam() {
    var el = $(examElId());
    if (!el) return;
    var qs = examData();
    var need = TOTAL - 1; // ต้องเรียนครบทุกสไลด์ (ยกเว้นสไลด์ข้อสอบ)
    var allDone = true;
    for (var i = 0; i < need; i++) { if (state.completed.indexOf(i) === -1) { allDone = false; break; } }
    if (!allDone) { renderExamLock(el, need); return; }
    var st = examState();
    var allAnswered = qs.every(function (_, j) { return st.answers[j] !== undefined; });
    if (allAnswered) { renderExamResult(el, qs); return; }
    var qi = 0;
    for (var j = 0; j < qs.length; j++) { if (st.answers[j] === undefined) { qi = j; break; } }
    renderExamQuestion(qi, el, qs);
  }
  function renderExamLock(el, need) {
    var n = state.chapter;
    var done = Math.min(state.completed.length, need);
    el.innerHTML =
      '<div class="card center fade-up" style="padding:34px 26px">' +
      '<div style="font-size:44px">🔒</div>' +
      "<h3 class='mt-3' style='font-size:20px'>ข้อสอบหลังเรียนยังถูกล็อกอยู่</h3>" +
      '<p class="text-2 mt-2" style="max-width:430px">เรียนครบทุกสไลด์ของ ' + chapterLabel(n) + ' ก่อนถึงจะเข้าสอบได้ — เรียนจบแล้วข้อสอบจะปลดล็อกอัตโนมัติ</p>' +
      '<div class="progress-track mt-4" style="max-width:320px"><div class="progress-fill" style="width:' + Math.round((done / need) * 100) + '%"></div></div>' +
      '<p class="text-3 mt-2" style="font-size:13px">เรียนแล้ว <b class="cyan">' + done + " / " + need + '</b> สไลด์</p>' +
      '<div class="flex items-center gap-3 mt-5 wrap" style="justify-content:center">' +
      '<button class="btn btn-primary" id="examGoBtn"><i data-lucide="arrow-right"></i> ไปสไลด์ที่ยังไม่ได้เรียน</button>' +
      "</div></div>";
    icons();
    var g = $("examGoBtn");
    if (g) g.addEventListener("click", function () {
      var c = ch();
      for (var i = 0; i < need; i++) {
        if (state.completed.indexOf(i) === -1) { goTo(c.start + i, 1); return; }
      }
    });
  }
  function renderExamQuestion(qi, el, qs) {
    var q = qs[qi];
    var st = examState();
    var chosen = st.answers[qi];
    var answered = chosen !== undefined;
    var opts = q.options.map(function (o, oi) {
      var cls = "quiz-option";
      if (answered) {
        cls += " locked";
        if (oi === q.correct) cls += " correct";
        else if (oi === chosen) cls += " incorrect";
      }
      return '<button class="' + cls + '" data-opt="' + oi + '"' + (answered ? " disabled" : "") + ">" +
        '<span class="opt-key">' + "ABCD"[oi] + "</span><span>" + esc(o) + "</span></button>";
    }).join("");

    el.innerHTML =
      '<div class="card fade-up" style="padding:26px">' +
      '<div class="flex items-center justify-between mb-3 wrap gap-2">' +
      '<span class="chip">ข้อที่ ' + (qi + 1) + " / " + qs.length + " · ข้อสอบหลังเรียน · " + chapterLabel(state.chapter) + "</span>" +
      '<span class="chip" style="border-color:rgba(56,189,248,.4)">คะแนนตอนนี้: ' + examScore() + " / " + qs.length + "</span></div>" +
      "<h3 style='font-size:19px;line-height:1.5;margin-bottom:18px'>" + esc(q.q) + "</h3>" +
      '<div class="flex" style="flex-direction:column;gap:10px">' + opts + "</div>" +
      (answered
        ? '<div class="quiz-explanation mt-4">💡 ' + esc(q.explain) + "</div>" +
          '<div class="flex items-center gap-3 mt-5 wrap">' +
          (qi < qs.length - 1
            ? '<button class="btn btn-primary" id="qqNext">ข้อถัดไป <i data-lucide="arrow-right"></i></button>'
            : '<button class="btn btn-primary" id="qqFinish">ดูผลลัพธ์ <i data-lucide="flag"></i></button>') +
          "</div>"
        : '<div class="tip-box tip-note mt-4" style="margin-top:18px"><i data-lucide="lightbulb"></i><div><b>Hint</b>' + examHint() + "</div></div>")
      + "</div>";

    icons();
    el.querySelectorAll(".quiz-option").forEach(function (b) {
      b.addEventListener("click", function () {
        var oi = parseInt(b.dataset.opt, 10);
        if (answered) return;
        st.answers[qi] = oi;
        LS.set(examStoreKey(), st);
        var correct = oi === q.correct;
        b.classList.add(correct ? "correct" : "incorrect");
        if (!correct) {
          qsa(".quiz-option", el).forEach(function (x) { if (parseInt(x.dataset.opt, 10) === q.correct) x.classList.add("correct"); });
        }
        qsa(".quiz-option", el).forEach(function (x) { x.classList.add("locked"); x.setAttribute("disabled", "disabled"); });
        var exp = document.createElement("div");
        exp.className = "quiz-explanation mt-4";
        exp.innerHTML = (correct ? "✅ ถูกต้อง! " : "❌ ยังไม่ถูกนะ ") + "💡 " + esc(q.explain);
        el.querySelector(".quiz-option").closest("div.flex").insertAdjacentElement("afterend", exp);
        var nav = document.createElement("div");
        nav.className = "flex items-center gap-3 mt-5 wrap";
        nav.innerHTML = qi < qs.length - 1
          ? '<button class="btn btn-primary" id="qqNext">ข้อถัดไป <i data-lucide="arrow-right"></i></button>'
          : '<button class="btn btn-primary" id="qqFinish">ดูผลลัพธ์ <i data-lucide="flag"></i></button>';
        exp.insertAdjacentElement("afterend", nav);
        icons();
        bindExamNav();
        if (correct) toast("✅ ถูกต้อง!", 1200);
      });
    });
    bindExamNav();
  }
  function bindExamNav() {
    var n = $("qqNext"); if (n) n.addEventListener("click", function () { renderExam(); });
    var f = $("qqFinish"); if (f) f.addEventListener("click", function () { renderExam(); });
    var r = $("qqRetry"); if (r) r.addEventListener("click", function () {
      var st = examState();
      examData().forEach(function (_, j) { delete st.answers[j]; });
      st.best = null;
      LS.set(examStoreKey(), st);
      renderExam();
    });
  }
  function renderExamResult(el, qs) {
    var sc = examScore();
    var pct = Math.round((sc / qs.length) * 100);
    var msg = sc === qs.length ? "Perfect! คะแนนเต็ม เก่งมาก! 🏆"
      : sc >= qs.length - 2 ? "Excellent! เกือบเต็มแล้ว! 💪"
      : sc >= Math.ceil(qs.length / 2) ? "Good job! ทบทวนอีกนิดก็เพอร์เฟกต์ ✨"
      : "ยังไม่ผ่าน — ย้อนกลับไปทบทวนสไลด์แล้วลองใหม่นะ 📚";
    var st = examState();
    if (st.best === null || sc > st.best) {
      st.best = sc;
      LS.set(examStoreKey(), st);
    }
    var ring = 2 * Math.PI * 62;
    var offset = ring - (sc / qs.length) * ring;
    el.innerHTML =
      '<div class="card center fade-up" style="padding:34px 26px">' +
      '<div class="score-ring"><svg width="150" height="150" viewBox="0 0 150 150">' +
      '<defs><linearGradient id="ringGradQ" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0%" stop-color="#2563eb"/><stop offset="100%" stop-color="#22d3ee"/></linearGradient></defs>' +
      '<circle class="ring-bg" cx="75" cy="75" r="62" fill="none" stroke-width="12"/>' +
      '<circle class="ring-fill" id="ringQuick" cx="75" cy="75" r="62" fill="none" stroke-width="12" stroke-linecap="round" ' +
      'style="stroke:url(#ringGradQ)" stroke-dasharray="' + ring + '" stroke-dashoffset="' + ring + '"/></svg>' +
      '<div class="ring-num">' + sc + "/" + qs.length + "</div></div>" +
      "<p class='mt-3 text-2' style='font-weight:700'>" + pct + "% · " + msg + "</p>" +
      '<p class="text-3 mt-2" style="font-size:13px">คะแนนดีที่สุด: <b class="cyan">' + (st.best === null ? "–" : st.best + "/" + qs.length) + "</b></p>" +
      '<div class="flex items-center gap-3 mt-5 wrap" style="justify-content:center">' +
      '<button class="btn btn-ghost" id="qqRetry"><i data-lucide="rotate-ccw"></i> ทำใหม่ทั้งชุด</button>' +
      '<button class="btn btn-primary" id="qqToCards"><i data-lucide="square-stack"></i> ไปการ์ดทบทวน</button>' +
      "</div></div>";
    icons();
    setTimeout(function () { var rf = $("ringQuick"); if (rf) rf.style.strokeDashoffset = offset; }, 120);
    var r = $("qqRetry");
    if (r) r.addEventListener("click", function () {
      var st2 = examState();
      examData().forEach(function (_, j) { delete st2.answers[j]; });
      st2.best = null;
      LS.set(examStoreKey(), st2);
      renderExam();
    });
    var c = $("qqToCards");
    if (c) c.addEventListener("click", function () {
      var ci = -1;
      ch().slides.forEach(function (s, i) { if (s.title.indexOf("Flashcards") !== -1) ci = i; });
      if (ci !== -1) goTo(ch().start + ci, 1);
    });
  }

  /* ---------- Flashcards (slide 24) ---------- */
  var fc = { order: [], idx: 0 };
  function fcShuffle() {
    var a = D.flashcards.map(function (_, i) { return i; });
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    fc.order = a;
    fc.idx = 0;
  }
  function fcRender() {
    if (!fc.order.length) fcShuffle();
    var card = D.flashcards[fc.order[fc.idx]];
    $("fcQ").textContent = card.q;
    $("fcA").textContent = card.a;
    $("fcCounter").textContent = (fc.idx + 1) + " / " + D.flashcards.length;
    $("flashcard").classList.remove("flipped");
  }
  function fcFlip() { $("flashcard").classList.toggle("flipped"); }
  function fcStep(d) {
    fc.idx = (fc.idx + d + D.flashcards.length) % D.flashcards.length;
    fcRender();
  }

  /* ---------- Glossary (slide 25) ---------- */
  function renderGlossary(filter) {
    var list = $("glossaryList");
    var term = (filter || "").toLowerCase().trim();
    var items = D.glossary.filter(function (g) {
      return g.term.toLowerCase().indexOf(term) !== -1 || g.def.toLowerCase().indexOf(term) !== -1;
    });
    $("glossaryCount").textContent = items.length + " คำศัพท์";
    list.innerHTML = items.map(function (g) {
      return '<div class="gloss-item" data-term="' + esc(g.term) + '" role="button" tabindex="0" aria-expanded="false">' +
        "<div><b>" + esc(g.term) + '</b><div class="g-def" style="display:none">' + esc(g.def) + "</div></div>" +
        '<i data-lucide="chevron-down" class="g-chev"></i></div>';
    }).join("");
    icons();
  }
  function highlightCurrentGlossary() {
    if (state.current !== 24) return;
    var term = null;
    // highlight a relevant term based on last content slide? keep simple: no-op
  }

  /* ==========================================================================
     INTERACTIVE DEMOS
     ========================================================================== */
  function restartMotion(el) {
    if (!el) return;
    try {
      el.setAttribute("begin", "indefinite");
      el.beginElement();
    } catch (e) {}
  }
  function stopMotion(el) {
    if (!el) return;
    try { el.endElement(); } catch (e) {}
  }

  /* Send Data (slide 3) */
  var sendTimers = [];
  function runSendData() {
    sendTimers.forEach(clearTimeout);
    sendTimers = [];
    var status = $("sendStatus");
    var pkt = $("demoPacket");
    if (pkt) pkt.style.opacity = "1";
    status.className = "status-pill sending";
    status.innerHTML = '<span class="dot"></span> Sending...';
    sendTimers.push(setTimeout(function () { restartMotion($("demoPacketMotion")); }, 150));
    sendTimers.push(setTimeout(function () {
      status.className = "status-pill routing";
      status.innerHTML = '<span class="dot"></span> Routing...';
    }, 1100));
    sendTimers.push(setTimeout(function () {
      status.className = "status-pill delivered";
      status.innerHTML = '<span class="dot"></span> Delivered ✓';
    }, 2600));
    sendTimers.push(setTimeout(function () {
      status.className = "status-pill";
      status.innerHTML = '<span class="dot"></span> Ready';
      stopMotion($("demoPacketMotion"));
      if (pkt) pkt.style.opacity = "0";
    }, 4200));
  }

  /* Messenger (slide 6) */
  var msgTimers = [];
  function runMessenger() {
    msgTimers.forEach(clearTimeout);
    msgTimers = [];
    var my = $("myBubble"), friend = $("friendBubble"), status = $("msgStatus");
    my.style.display = "block";
    friend.style.display = "none";
    status.className = "status-pill sending";
    status.innerHTML = '<span class="dot"></span> กำลังส่ง...';
    msgTimers.push(setTimeout(function () {
      status.className = "status-pill routing";
      status.innerHTML = '<span class="dot"></span> แปลงเป็นข้อมูลดิจิทัล → ส่งผ่านเครือข่าย...';
    }, 900));
    msgTimers.push(setTimeout(function () {
      status.className = "status-pill routing";
      status.innerHTML = '<span class="dot"></span> ถึง Router → Internet → Router...';
    }, 1800));
    msgTimers.push(setTimeout(function () {
      friend.style.display = "block";
      status.className = "status-pill delivered";
      status.innerHTML = '<span class="dot"></span> ส่งถึงปลายทาง ✓ (Receiver)';
    }, 2900));
    msgTimers.push(setTimeout(function () {
      status.className = "status-pill";
      status.innerHTML = '<span class="dot"></span> รอพิมพ์ข้อความ';
    }, 5200));
  }

  /* Data flow (slide 8) */
  var flowTimers = [];
  function runFlow() {
    flowTimers.forEach(clearTimeout);
    flowTimers = [];
    var btn = $("flowBtn");
    btn.disabled = true;
    ["pjBig", "pjPackets", "pjNet", "pjRe"].forEach(function (id) {
      var b = $(id);
      if (b) b.classList.remove("highlight");
    });
    qsa(".pj-pkt").forEach(function (p) { p.classList.remove("travel"); });
    qsa(".pj-hop").forEach(function (h, i) { h.style.background = "rgba(56,189,248,0.2)"; });
    flowTimers.push(setTimeout(function () { $("pjBig").classList.add("highlight"); }, 100));
    flowTimers.push(setTimeout(function () {
      $("pjBig").classList.remove("highlight");
      $("pjPackets").classList.add("highlight");
      qsa(".pj-pkt").forEach(function (p, i) {
        setTimeout(function () { p.classList.add("travel"); }, i * 260);
      });
    }, 900));
    flowTimers.push(setTimeout(function () {
      $("pjPackets").classList.remove("highlight");
      $("pjNet").classList.add("highlight");
      qsa(".pj-hop").forEach(function (h, i) {
        setTimeout(function () { h.style.background = "rgba(34,211,238,0.55)"; }, i * 300);
      });
    }, 2300));
    flowTimers.push(setTimeout(function () {
      $("pjNet").classList.remove("highlight");
      $("pjRe").classList.add("highlight");
      qsa(".pj-pkt").forEach(function (p) { p.classList.remove("travel"); });
    }, 3900));
    flowTimers.push(setTimeout(function () {
      $("pjRe").classList.remove("highlight");
      btn.disabled = false;
    }, 5000));
  }

  /* Mesh demo (slide 12) */
  var mesh = {
    primary: ["AB", "BD", "DF"],
    backup: ["AC", "CE", "EF"],
    failed: [],
    activeRoute: null,
    running: false
  };
  var meshTimers = [];
  function meshLog(msg, cls) {
    var log = $("meshLog");
    var div = document.createElement("div");
    div.className = "log-line";
    div.innerHTML = '<span class="' + (cls || "") + '">' + msg + "</span>";
    log.appendChild(div);
    log.scrollTop = log.scrollHeight;
  }
  function meshClearLog() { $("meshLog").innerHTML = ""; }
  function meshStatus(cls, txt) {
    var s = $("meshStatus");
    s.className = "status-pill " + (cls || "");
    s.innerHTML = '<span class="dot"></span> ' + txt;
  }
  function meshHighlightRoute(ids) {
    qsa(".mesh-link").forEach(function (l) {
      l.classList.toggle("route", ids.indexOf(l.dataset.link) !== -1);
      l.classList.toggle("dim", false);
    });
  }
  function meshClearRoute() {
    qsa(".mesh-link").forEach(function (l) { l.classList.remove("route"); });
  }
  function meshRunPacket(pathId) {
    var pm = $("meshPktMotion");
    if (pm) pm.setAttribute("path", pathId === "backup" ? "M70,140 L190,230 L340,230 L490,140" : "M70,140 L190,60 L340,60 L490,140");
    var p = $("meshPkt");
    if (p) p.style.opacity = "1";
    restartMotion(pm);
  }
  function meshStopPacket() {
    stopMotion($("meshPktMotion"));
    var p = $("meshPkt");
    if (p) p.style.opacity = "0";
  }
  function meshRouteValid(route) {
    return route.every(function (l) { return mesh.failed.indexOf(l) === -1; });
  }
  function meshPlay() {
    var route = meshRouteValid(mesh.primary) ? mesh.primary : (meshRouteValid(mesh.backup) ? mesh.backup : null);
    if (!route) {
      meshStatus("", "No Route! ⛔");
      meshLog("ทุกเส้นทางล้มเหลว — ไม่มีเส้นทางไปยังปลายทาง", "err");
      meshStopPacket();
      meshClearRoute();
      return;
    }
    mesh.activeRoute = route;
    meshHighlightRoute(route);
    meshStatus("routing", "Routing...");
    meshLog("กำลังส่งข้อมูลผ่านเส้นทาง: " + route.join(" → "));
    meshRunPacket(route === mesh.backup ? "backup" : "primary");
    setTimeout(function () {
      meshStatus("delivered", "Delivered ✓");
      meshLog("ข้อมูลถึงปลายทางเรียบร้อย ✓", "ok");
    }, 2600);
  }
  function meshDisable(linkId) {
    if (mesh.failed.indexOf(linkId) !== -1) { meshLog("ลิงก์ " + linkId + " เสียไปแล้ว", "warn"); return; }
    mesh.failed.push(linkId);
    var line = qsa('.mesh-link[data-link="' + linkId + '"]')[0];
    if (line) line.classList.add("failed");
    meshStopPacket();
    meshStatus("sending", "Link Failed!");
    meshLog("ลิงก์ " + linkId + " ล้มเหลว! (Link Failed)", "err");

    // if it was on the active route → reroute
    var route = mesh.activeRoute && mesh.activeRoute.indexOf(linkId) !== -1;
    setTimeout(function () {
      meshStatus("routing", "Finding Alternative Route...");
      meshLog("กำลังหาเส้นทางสำรอง (Finding Alternative Route...)", "warn");
      setTimeout(function () {
        if (meshRouteValid(mesh.primary)) {
          meshLog("เส้นทางหลักยังใช้งานได้ ✓", "ok");
        } else if (meshRouteValid(mesh.backup)) {
          meshLog("พบเส้นทางสำรองแล้ว (Alternative Route Found) ✓", "ok");
        }
        meshPlay();
      }, 1400);
    }, 900);
  }
  function meshReset() {
    meshTimers.forEach(clearTimeout);
    mesh.failed = [];
    mesh.activeRoute = null;
    qsa(".mesh-link").forEach(function (l) { l.classList.remove("failed", "route"); });
    meshStopPacket();
    meshClearLog();
    meshStatus("", "Ready");
    meshLog("เครือข่ายกลับสู่สถานะปกติ — เส้นทางหลัก: AB → BD → DF", "ok");
  }

  /* Network scope zoom (slide 13) */
  function zoomOut() {
    var stage = $("zoomStage");
    var lvl = parseInt(stage.getAttribute("data-level"), 10);
    if (lvl >= 4) {
      selectScope(0);
      toast("กลับสู่มุมมองเริ่มต้น (PAN) 🔄");
    } else {
      selectScope(lvl);
    }
  }

  /* ==========================================================================
     PRINT
     ========================================================================== */
  function buildPrintSlides() {
    var area = $("printArea");
    var c = ch();
    var html = "";
    qsa(".slide-view").forEach(function (s, i) {
      if (i < c.start || i >= c.start + c.count) return; // เฉพาะบทที่กำลังเรียน
      var inner = s.querySelector(".slide-inner");
      if (!inner) return;
      var rel = i - c.start;
      html += '<div class="print-page">' +
        '<div class="pp-eyebrow">SLIDE ' + (rel + 1) + " · " + esc(c.slides[rel].title) + "</div>" +
        '<div class="pp-body">' + inner.innerHTML + "</div></div>";
    });
    html = html.replace(/<svg[\s\S]*?<\/svg>/g, "[แผนภาพ]");
    if (c.code === "F3" || c.code === "F4") {
      // F3/F4 ใช้ปุ่มใน interactive หลายจุด: ในโหมดพิมพ์ให้คงข้อความไว้เป็น inline content
      html = html.replace(/<button([^>]*)>([\s\S]*?)<\/button>/g, '<span class="pp-inline">$2</span>');
    } else {
      html = html.replace(/<button[\s\S]*?<\/button>/g, "");
    }
    html = html.replace(/\sid="[^"]*"/g, "").replace(/\sclass="btn[^"]*"/g, "");
    area.innerHTML = html;
  }
  function buildPrintCards() {
    var area = $("printArea");
    var c = ch();
    var cheat = (c.cheat || D.cheat).map(function (x) {
      return '<div class="pp-card"><h4>' + esc(x.term) + "</h4><p>" + esc(x.def) + "</p></div>";
    }).join("");
    var gloss = (c.glossary || D.glossary).map(function (g) {
      return '<div class="pp-card"><h4>' + esc(g.term) + "</h4><p>" + esc(g.def) + "</p></div>";
    }).join("");
    var fc = (c.flashcards || D.flashcards).map(function (f) {
      return '<div class="pp-card"><h4>' + esc(f.q) + "</h4><p>" + esc(f.a) + "</p></div>";
    }).join("");
    area.innerHTML =
      '<div class="print-page"><div class="pp-eyebrow">EXAM CHEAT SHEET</div><div class="pp-title">สูตรจำก่อนสอบ</div>' +
      '<div class="pp-card-grid">' + cheat + "</div></div>" +
      '<div class="print-page"><div class="pp-eyebrow">GLOSSARY</div><div class="pp-title">คำศัพท์</div>' +
      '<div class="pp-card-grid">' + gloss + "</div></div>" +
      '<div class="print-page"><div class="pp-eyebrow">FLASHCARDS</div><div class="pp-title">คำถาม — คำตอบ</div>' +
      '<div class="pp-card-grid">' + fc + "</div></div>";
  }
  function doPrint(kind) {
    if (kind === "slides") buildPrintSlides();
    else buildPrintCards();
    document.body.classList.add("printing");
    setTimeout(function () {
      window.print();
      document.body.classList.remove("printing");
    }, 60);
  }

  /* ==========================================================================
     FULLSCREEN SLIDE
     ========================================================================== */
  function toggleFullscreen() {
    var on = document.body.classList.toggle("fullscreen");
    $("fullscreenBtn").innerHTML = on
      ? '<i data-lucide="minimize-2"></i>'
      : '<i data-lucide="maximize-2"></i>';
    icons();
    toast(on ? "โหมดขยายสไลด์ ⛶" : "กลับสู่มุมมองปกติ");
  }

  /* ==========================================================================
     EVENTS
     ========================================================================== */
  function bind() {
    /* ผูก event ให้ element ถ้ามีอยู่จริง (แต่ละหน้าบทมี element ต่างกัน) */
    function on(id, type, fn) {
      var el = $(id);
      if (el) el.addEventListener(type, fn);
    }
    // sidebar / drawer
    var sb = $("sidebar"), backdrop = $("drawerBackdrop");
    function closeDrawer() { if (sb) sb.classList.remove("open"); if (backdrop) backdrop.classList.remove("show"); }
    on("menuBtn", "click", function () { if (sb) sb.classList.add("open"); if (backdrop) backdrop.classList.add("show"); });
    on("sidebarCloseBtn", "click", closeDrawer);
    if (backdrop) backdrop.addEventListener("click", closeDrawer);

    // sidebar navigation (delegated)
    var nav = $("sidebarNav");
    if (nav) nav.addEventListener("click", function (e) {
      var item = e.target.closest(".sidebar-item");
      if (!item) return;
      closeDrawer();
      goTo(parseInt(item.dataset.goto, 10));
    });

    // bottom bar
    on("prevBtn", "click", function () { goTo(state.current - 1, -1); });
    on("nextBtn", "click", function () { goTo(state.current + 1, 1); });
    on("fullscreenBtn", "click", toggleFullscreen);
    on("printSlidesBtn", "click", function () { doPrint("slides"); });
    on("printCardsBtn", "click", function () { doPrint("cards"); });

    // top bar
    on("homeBtn", "click", goHome);
    on("startBtn", "click", function () { goTo(state.current + 1, 1); });
    on("startBtn2", "click", function () { goTo(state.current + 1, 1); });
    on("notesBtn", "click", function () { openNotes(!notesOpen); });
    on("notesCloseBtn", "click", function () { openNotes(false); });

    // notes save (บันทึกแยกตามบท)
    on("notesTextarea", "input", function () {
      state.notes[noteKey()] = this.value;
      LS.set("cn_notes", state.notes);
    });

    // completion overlay
    on("completionCloseBtn", "click", function () { $("completionOverlay").classList.remove("show"); });
    on("completionRestartBtn", "click", function () {
      var n = state.chapter;
      state.completed = [];
      state.celebrated = false;
      if (n === 1) {
        state.quiz = { answers: {}, partDone: {} };
        LS.set("cn_quiz", state.quiz);
      } else if (n === 2) {
        state.quiz2 = { answers: {} };
        LS.set("cn_quiz2", state.quiz2);
      } else if (n === 3) {
        state.quiz3 = { answers: {} };
        LS.set("cn_quiz3", state.quiz3);
      } else if (n === 4) {
        state.quiz4 = { answers: {} };
        LS.set("cn_quiz4", state.quiz4);
      } else if (n === 5) {
        state.quiz5 = { answers: {} };
        LS.set("cn_quiz5", state.quiz5);
      } else if (n === 6) {
        state.quiz6 = { answers: {} };
        LS.set("cn_quiz6", state.quiz6);
      } else if (n === 7) {
        state.quiz7 = { answers: {} };
        LS.set("cn_quiz7", state.quiz7);
      } else if (n === 8) {
        state.quiz8 = { answers: {} };
        LS.set("cn_quiz8", state.quiz8);
      } else if (n === 9) {
        state.quiz9 = { answers: {} };
        LS.set("cn_quiz9", state.quiz9);
      }
      state["exam" + (n === 1 ? "" : n)] = { answers: {}, best: null };
      LS.set("cn_exam" + (n === 1 ? "" : n), state["exam" + (n === 1 ? "" : n)]);
      LS.set("cn_completed_" + n, []);
      LS.set("cn_celebrated_" + n, false);
      $("completionOverlay").classList.remove("show");
      if (n === 1) { renderQuiz(0); renderQuiz(1); renderExam(); } else if (n === 2) { renderQuiz2(); renderExam(); } else if (n === 3) { renderQuiz3(); renderExam(); } else if (n === 4) { renderQuiz4(); renderExam(); } else if (n === 5) { renderQuiz5(); renderExam(); } else if (n === 6) { renderQuiz6(); renderExam(); } else if (n === 7) { renderQuiz7(); renderExam(); } else if (n === 8) { renderQuiz8(); renderExam(); } else { renderQuiz9(); renderExam(); }
      goTo(0, -1);
      toast("เริ่มเรียน " + chapterLabel(n) + " ใหม่ — สู้ ๆ นะ! 💪");
    });

    // slide 3 send data
    on("sendDataBtn", "click", runSendData);

    // slide 6 messenger
    on("sendMsgBtn", "click", runMessenger);

    // slide 8 flow
    on("flowBtn", "click", runFlow);

    // slide 9 mode tabs
    on("modeTabs", "click", function (e) {
      var b = e.target.closest(".tab-btn");
      if (b) selectMode(b.dataset.mode);
    });

    // slide 10 connection
    qsa("[data-conn]").forEach(function (b) { b.addEventListener("click", function () { selectConn(b.dataset.conn); }); });

    // slide 11 topology
    on("topoTabs", "click", function (e) {
      var b = e.target.closest(".tab-btn");
      if (b) selectTopo(b.dataset.topo);
    });

    // slide 12 mesh
    on("meshFailBtn", "click", function () {
      var onRoute = (mesh.activeRoute || mesh.primary).filter(function (l) { return mesh.failed.indexOf(l) === -1; });
      var candidates = onRoute.length ? onRoute : mesh.primary.concat(mesh.backup).filter(function (l) { return mesh.failed.indexOf(l) === -1; });
      if (!candidates.length) { toast("ทุกเส้นทางเสียแล้ว — กด Reset ก่อนนะ"); return; }
      meshDisable(candidates[Math.floor(Math.random() * candidates.length)]);
    });
    on("meshResetBtn", "click", meshReset);
    qsa(".mesh-link").forEach(function (l) {
      l.addEventListener("click", function () { meshDisable(l.dataset.link); });
    });

    // slide 13 scope
    on("zoomOutBtn", "click", zoomOut);
    qsa("#scopeTabs .tab-btn").forEach(function (b) {
      b.addEventListener("click", function () { selectScope(parseInt(b.dataset.scope, 10)); });
    });

    // slide 14 media
    on("mediaGroupTabs", "click", function (e) {
      var b = e.target.closest(".tab-btn");
      if (!b) return;
      qsa("#mediaGroupTabs .tab-btn").forEach(function (x) { x.classList.toggle("active", x === b); });
      renderMediaTabs(b.dataset.group);
    });
    on("mediaTabs", "click", function (e) {
      var b = e.target.closest(".tab-btn");
      if (b) selectMedia(b.dataset.media);
    });

    // slide 15 stack
    on("stackList", "click", function (e) {
      var b = e.target.closest(".stack-layer");
      if (b) selectStack(parseInt(b.dataset.layer, 10));
    });

    // slide 16 protocol cards
    on("protoCards", "click", function (e) {
      var b = e.target.closest(".proto-card");
      if (b) selectProto(b.dataset.proto);
    });

    // slide 18 timeline
    function tlHandler(e) {
      var c = e.target.closest(".tl-card, .tl-v-item");
      if (!c) return;
      toggleTimeline(parseInt(c.dataset.tl, 10), c.closest(".timeline-h, .timeline-v"));
    }
    on("timelineH", "click", tlHandler);
    on("timelineV", "click", tlHandler);

    // slide 20 go quiz
    on("goQuizBtn", "click", function () { goTo(21, 1); });
    on("goQuickBtn", "click", function () { goTo(25, 1); });

    // flashcards (บท 1)
    on("flashcard", "click", fcFlip);
    on("flashcard", "keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); fcFlip(); }
    });
    on("fcPrev", "click", function () { fcStep(-1); });
    on("fcNext", "click", function () { fcStep(1); });
    on("fcShuffle", "click", function () { fcShuffle(); fcRender(); toast("สับการ์ดใหม่ 🔀"); });

    // glossary (บท 1)
    on("glossarySearch", "input", function () { renderGlossary(this.value); });
    on("glossaryList", "click", function (e) {
      var item = e.target.closest(".gloss-item");
      if (!item) return;
      var open = item.classList.toggle("open");
      item.setAttribute("aria-expanded", open);
      var def = item.querySelector(".g-def");
      if (def) def.style.display = open ? "block" : "none";
    });

    // chapter 2 — layer tabs
    on("c2LayerTabs", "click", function (e) {
      var b = e.target.closest(".tab-btn");
      if (b) selectLayer(b.dataset.layer);
    });

    // chapter 2 — encapsulation
    on("encapSendBtn", "click", encapSend);
    on("encapRecvBtn", "click", encapRecv);

    // chapter 2 — header fields
    qsa(".fv-field").forEach(function (b) {
      b.addEventListener("click", function () { selectHeaderField(b.dataset.field); });
    });
    qsa(".fv-payload").forEach(function (b) {
      b.addEventListener("click", function () { selectHeaderField("payload"); });
    });

    // chapter 2 — flashcards
    on("flashcard2", "click", fc2Flip);
    on("flashcard2", "keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); fc2Flip(); }
    });
    on("fcPrev2", "click", function () { fc2Step(-1); });
    on("fcNext2", "click", function () { fc2Step(1); });
    on("fcShuffle2", "click", function () { fc2Shuffle(); fc2Render(); toast("สับการ์ดใหม่ 🔀"); });

    // chapter 2 — glossary
    on("glossarySearch2", "input", function () { renderGlossary2(this.value); });
    on("glossaryList2", "click", function (e) {
      var item = e.target.closest(".gloss-item");
      if (!item) return;
      var open = item.classList.toggle("open");
      item.setAttribute("aria-expanded", open);
      var def = item.querySelector(".g-def");
      if (def) def.style.display = open ? "block" : "none";
    });

    // chapter 3 — cover start
    on("startBtn3", "click", function () { goTo(state.current + 1, 1); });
    on("startBtn4", "click", function () { goTo(state.current + 1, 1); });

    // chapter 3 — architecture tabs
    on("archTabs", "click", function (e) {
      var b = e.target.closest(".tab-btn");
      if (b) selectArch(b.dataset.arch);
    });

    // chapter 3 — http/https tabs
    on("httpTabs", "click", function (e) {
      var b = e.target.closest(".tab-btn");
      if (b) selectHttp(b.dataset.http);
    });

    // chapter 3 — method cards
    on("methodCards", "click", function (e) {
      var b = e.target.closest(".method-card");
      if (b) selectMethod(b.dataset.method);
    });

    // chapter 3 — flashcards
    on("flashcard3", "click", fc3Flip);
    on("flashcard3", "keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); fc3Flip(); }
    });
    on("fcPrev3", "click", function () { fc3Step(-1); });
    on("fcNext3", "click", function () { fc3Step(1); });
    on("fcShuffle3", "click", function () { fc3Shuffle(); fc3Render(); toast("สับการ์ดใหม่ 🔀"); });

    // chapter 3 — glossary
    on("glossarySearch3", "input", function () { renderGlossary3(this.value); });
    on("glossaryList3", "click", function (e) {
      var item = e.target.closest(".gloss-item");
      if (!item) return;
      var open = item.classList.toggle("open");
      item.setAttribute("aria-expanded", open);
      var def = item.querySelector(".g-def");
      if (def) def.style.display = open ? "block" : "none";
    });

    // chapter 4 — UDP header fields
    document.addEventListener("click", function (e) {
      var f = e.target.closest("[data-udp]");
      if (f) selectUdpField(f.dataset.udp);
    });

    // chapter 4 — three-way handshake
    on("hsPlayBtn", "click", playHandshake);

    // chapter 4 — AIMD
    on("aimdBtn", "click", aimdStep);

    // chapter 4 — flashcards
    on("flashcard4", "click", fc4Flip);
    on("flashcard4", "keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); fc4Flip(); }
    });
    on("fcPrev4", "click", function () { fc4Step(-1); });
    on("fcNext4", "click", function () { fc4Step(1); });
    on("fcShuffle4", "click", function () { fc4Shuffle(); fc4Render(); toast("สับการ์ดใหม่ 🔀"); });

    // chapter 4 — glossary
    on("glossarySearch4", "input", function () { renderGlossary4(this.value); });
    on("glossaryList4", "click", function (e) {
      var item = e.target.closest(".gloss-item");
      if (!item) return;
      var open = item.classList.toggle("open");
      item.setAttribute("aria-expanded", open);
      var def = item.querySelector(".g-def");
      if (def) def.style.display = open ? "block" : "none";
    });

    // ===== FINAL F1 — Network Layer: Data Plane =====
    on("startBtn5", "click", function () { goTo(state.current + 1, 1); });

    on("dcTabs", "click", function (e) {
      var b = e.target.closest(".tab-btn");
      if (b) selectDcPlane(b.dataset.dc);
    });
    on("planeTabs", "click", function (e) {
      var b = e.target.closest(".tab-btn");
      if (b) selectPlane(b.dataset.plane);
    });
    document.addEventListener("click", function (e) {
      var rp = e.target.closest("[data-rpart]");
      if (rp) selectRouterPart(rp.dataset.rpart);
    });
    on("fabricTabs", "click", function (e) {
      var b = e.target.closest(".tab-btn");
      if (b) selectFabric(b.dataset.fabric);
    });
    on("lpmExampleTabs", "click", function (e) {
      var b = e.target.closest(".tab-btn");
      if (b) selectLpmExample(parseInt(b.dataset.lpm, 10));
    });
    on("subnetTabs", "click", function (e) {
      var b = e.target.closest(".tab-btn");
      if (b) selectSubnet(parseInt(b.dataset.subnet, 10));
    });
    on("dhcpSteps", "click", function (e) {
      var b = e.target.closest(".dhcp-step");
      if (b) { clearInterval(dhcpTimer); selectDhcpStep(parseInt(b.dataset.dhcp, 10)); }
    });
    on("dhcpPlayBtn", "click", playDhcp);

    // F1 — flashcards
    on("flashcard5", "click", fc5Flip);
    on("flashcard5", "keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); fc5Flip(); }
    });
    on("fcPrev5", "click", function () { fc5Step(-1); });
    on("fcNext5", "click", function () { fc5Step(1); });
    on("fcShuffle5", "click", function () { fc5Shuffle(); fc5Render(); toast("สับการ์ดใหม่ 🔀"); });

    // F1 — glossary
    on("glossarySearch5", "input", function () { renderGlossary5(this.value); });
    on("glossaryList5", "click", function (e) {
      var item = e.target.closest(".gloss-item");
      if (!item) return;
      var open = item.classList.toggle("open");
      item.setAttribute("aria-expanded", open);
      var def = item.querySelector(".g-def");
      if (def) def.style.display = open ? "block" : "none";
    });

    // ===== FINAL F2 — Network Layer: Control Plane =====
    on("startBtn6", "click", function () { goTo(state.current + 1, 1); });

    on("cpTabs", "click", function (e) {
      var b = e.target.closest(".tab-btn");
      if (b) selectCpPlane(b.dataset.cp);
    });
    on("cpStructTabs", "click", function (e) {
      var b = e.target.closest(".tab-btn");
      if (b) selectCpStruct(b.dataset.struct);
    });
    on("sdnSteps", "click", function (e) {
      var b = e.target.closest(".dhcp-step");
      if (b) selectSdnStep6(parseInt(b.dataset.sdn, 10));
    });
    on("dijkstraRows", "click", function (e) {
      var tr = e.target.closest("[data-dij]");
      if (tr) selectDijkstraStep6(parseInt(tr.dataset.dij, 10));
    });
    on("dijkstraRows", "keydown", function (e) {
      if (e.key !== "Enter" && e.key !== " ") return;
      var tr = e.target.closest("[data-dij]");
      if (tr) { e.preventDefault(); selectDijkstraStep6(parseInt(tr.dataset.dij, 10)); }
    });
    on("dvNewsTabs", "click", function (e) {
      var b = e.target.closest(".tab-btn");
      if (b) selectDvNews6(b.dataset.news);
    });
    on("ospfTabs", "click", function (e) {
      var b = e.target.closest(".tab-btn");
      if (b) selectOspf6(b.dataset.ospf);
    });
    on("bgpSteps", "click", function (e) {
      var b = e.target.closest(".dhcp-step");
      if (b) selectBgpStep6(parseInt(b.dataset.bgp, 10));
    });

    // F2 — flashcards
    on("flashcard6", "click", fc6Flip);
    on("flashcard6", "keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); fc6Flip(); }
    });
    on("fcPrev6", "click", function () { fc6Step(-1); });
    on("fcNext6", "click", function () { fc6Step(1); });
    on("fcShuffle6", "click", function () { fc6Shuffle(); fc6Render(); toast("สับการ์ดใหม่ 🔀"); });

    // F2 — glossary
    on("glossarySearch6", "input", function () { renderGlossary6(this.value); });
    on("glossaryList6", "click", function (e) {
      var item = e.target.closest(".gloss-item");
      if (!item) return;
      var open = item.classList.toggle("open");
      item.setAttribute("aria-expanded", open);
      var def = item.querySelector(".g-def");
      if (def) def.style.display = open ? "block" : "none";
    });

    // ===== FINAL F3 — The Link Layer and LANs =====
    on("startBtn7", "click", function () { goTo(state.current + 1, 1); });

    on("parityGrid7", "click", function (e) {
      var b = e.target.closest("[data-pr]");
      if (!b) return;
      parity7Toggle(parseInt(b.dataset.pr, 10), parseInt(b.dataset.pc, 10));
    });
    on("paritySingle7", "click", function () {
      parity7Reset();
      parity7Toggle(1, 2);
    });
    on("parityRect7", "click", function () {
      parity7Reset();
      parity7Toggle(0, 0); parity7Toggle(0, 1);
      parity7Toggle(1, 0); parity7Toggle(1, 1);
    });
    on("parityReset7", "click", parity7Reset);

    on("crcRows7", "click", function (e) {
      var tr = e.target.closest("[data-crc]");
      if (tr) selectCrc7(parseInt(tr.dataset.crc, 10));
    });
    on("crcRows7", "keydown", function (e) {
      if (e.key !== "Enter" && e.key !== " ") return;
      var tr = e.target.closest("[data-crc]");
      if (tr) { e.preventDefault(); selectCrc7(parseInt(tr.dataset.crc, 10)); }
    });

    on("backoffTabs7", "click", function (e) {
      var b = e.target.closest("[data-backoff]");
      if (b) selectBackoff7(parseInt(b.dataset.backoff, 10));
    });
    on("ethFieldTabs7", "click", function (e) {
      var b = e.target.closest("[data-eth]");
      if (b) selectEthField7(parseInt(b.dataset.eth, 10));
    });
    on("arpSteps7", "click", function (e) {
      var b = e.target.closest("[data-arp]");
      if (b) selectArp7(parseInt(b.dataset.arp, 10));
    });
    on("switchSteps7", "click", function (e) {
      var b = e.target.closest("[data-switch]");
      if (b) selectSwitch7(parseInt(b.dataset.switch, 10));
    });

    // F3 — flashcards
    on("flashcard7", "click", fc7Flip);
    on("flashcard7", "keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); fc7Flip(); }
    });
    on("fcPrev7", "click", function () { fc7Step(-1); });
    on("fcNext7", "click", function () { fc7Step(1); });
    on("fcShuffle7", "click", function () { fc7Shuffle(); fc7Render(); toast("สับการ์ดใหม่ 🔀"); });

    // F3 — glossary
    on("glossarySearch7", "input", function () { renderGlossary7(this.value); });
    on("glossaryList7", "click", function (e) {
      var item = e.target.closest(".gloss-item");
      if (!item) return;
      var open = item.classList.toggle("open");
      item.setAttribute("aria-expanded", open);
      var def = item.querySelector(".g-def");
      if (def) def.style.display = open ? "block" : "none";
    });

    // ===== FINAL F4 — Wireless and Mobile Networks =====
    on("startBtn8", "click", function () { goTo(state.current + 1, 1); });

    on("dbmPick8", "click", function (e) {
      var b = e.target.closest("[data-dbm]");
      if (b) selectDbm8(parseInt(b.dataset.dbm, 10));
    });
    on("shB8", "input", updateShannon8);
    on("shSnr8", "input", updateShannon8);

    on("csmaTabs8", "click", function (e) {
      var b = e.target.closest("[data-csma]");
      if (b) selectCsma8(parseInt(b.dataset.csma, 10));
    });
    on("frameStrip8", "click", function (e) {
      var b = e.target.closest("[data-frame]");
      if (b) selectFrame8(parseInt(b.dataset.frame, 10));
    });
    on("discTabs8", "click", function (e) {
      var b = e.target.closest("[data-disc]");
      if (b) selectDiscovery8(parseInt(b.dataset.disc, 10));
    });
    on("hoSteps8", "click", function (e) {
      var b = e.target.closest("[data-ho]");
      if (b) selectHandover8(parseInt(b.dataset.ho, 10));
    });

    // F4 — flashcards
    on("flashcard8", "click", fc8Flip);
    on("flashcard8", "keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); fc8Flip(); }
    });
    on("fcPrev8", "click", function () { fc8Step(-1); });
    on("fcNext8", "click", function () { fc8Step(1); });
    on("fcShuffle8", "click", function () { fc8Shuffle(); fc8Render(); toast("สับการ์ดใหม่ 🔀"); });

    // F4 — glossary
    on("glossarySearch8", "input", function () { renderGlossary8(this.value); });
    on("glossaryList8", "click", function (e) {
      var item = e.target.closest(".gloss-item");
      if (!item) return;
      var open = item.classList.toggle("open");
      item.setAttribute("aria-expanded", open);
      var def = item.querySelector(".g-def");
      if (def) def.style.display = open ? "block" : "none";
    });

    // ===== FINAL F5 — Security =====
    on("startBtn9", "click", function () { goTo(state.current + 1, 1); });
    on("encTabs9", "click", function (e) {
      var b = e.target.closest("[data-enc]");
      if (b) selectEnc9(parseInt(b.dataset.enc, 10));
    });
    on("rsaSteps9", "click", function (e) {
      var b = e.target.closest("[data-rsa]");
      if (b) selectRsa9(parseInt(b.dataset.rsa, 10));
    });
    on("authTabs9", "click", function (e) {
      var b = e.target.closest("[data-auth]");
      if (b) selectAuth9(parseInt(b.dataset.auth, 10));
    });
    on("hashTabs9", "click", function (e) {
      var b = e.target.closest("[data-hash]");
      if (b) selectHash9(parseInt(b.dataset.hash, 10));
    });
    on("tlsSteps9", "click", function (e) {
      var b = e.target.closest("[data-tls]");
      if (b) selectTls9(parseInt(b.dataset.tls, 10));
    });
    on("attackTabs9", "click", function (e) {
      var b = e.target.closest("[data-attack]");
      if (b) selectAttack9(parseInt(b.dataset.attack, 10));
    });

    // F5 — flashcards
    on("flashcard9", "click", fc9Flip);
    on("flashcard9", "keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); fc9Flip(); }
    });
    on("fcPrev9", "click", function () { fc9Step(-1); });
    on("fcNext9", "click", function () { fc9Step(1); });
    on("fcShuffle9", "click", function () { fc9Shuffle(); fc9Render(); toast("สับการ์ดใหม่ 🔀"); });

    // F5 — glossary
    on("glossarySearch9", "input", function () { renderGlossary9(this.value); });
    on("glossaryList9", "click", function (e) {
      var item = e.target.closest(".gloss-item");
      if (!item) return;
      var open = item.classList.toggle("open");
      item.setAttribute("aria-expanded", open);
      var def = item.querySelector(".g-def");
      if (def) def.style.display = open ? "block" : "none";
    });

    // keyboard
    document.addEventListener("keydown", function (e) {
      var tag = (e.target.tagName || "").toLowerCase();
      if (tag === "input" || tag === "textarea" || e.target.isContentEditable) return;
      if (e.key === "ArrowRight") { e.preventDefault(); goTo(state.current + 1, 1); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); goTo(state.current - 1, -1); }
      else if (e.key === "Escape") {
        if (notesOpen) openNotes(false);
        closeDrawer();
        if ($("completionOverlay").classList.contains("show")) $("completionOverlay").classList.remove("show");
      }
    });

    // cleanup intervals when leaving slides
    document.addEventListener("visibilitychange", function () {});
  }

  /* ==========================================================================
     CHAPTER 2 — NETWORK MODELS renderers
     ========================================================================== */

  /* Layer functions (ch2 slide 5) */
  function renderLayerTabs() {
    var t = $("c2LayerTabs");
    if (!t) return;
    t.innerHTML = D.ch2.layers.map(function (l, i) {
      return '<button class="tab-btn' + (i === 0 ? " active" : "") + '" data-layer="' + l.key + '" role="tab">' +
        esc(l.name) + ' <span>' + esc(l.thai) + " · " + esc(l.pdu) + "</span></button>";
    }).join("");
    selectLayer(D.ch2.layers[0].key);
  }
  function selectLayer(key) {
    var l = D.ch2.layers.filter(function (x) { return x.key === key; })[0];
    if (!l) return;
    qsa("#c2LayerTabs .tab-btn").forEach(function (b) { b.classList.toggle("active", b.dataset.layer === key); });
    $("c2LayerName").innerHTML = '<i data-lucide="info" class="cyan"></i>' + esc(l.name) + " — " + esc(l.thai);
    $("c2LayerPdu").innerHTML = '📦 PDU: <b class="cyan">' + esc(l.pdu) + "</b>";
    $("c2LayerDuty").textContent = l.duty;
    $("c2LayerAddr").textContent = l.addr;
    $("c2LayerAnalog").textContent = " " + l.analog;
    icons();
  }

  /* Encapsulation animation (ch2 slide 7) */
  var encapTimers = [];
  function encapReset() {
    encapTimers.forEach(clearTimeout);
    encapTimers = [];
    qsa("#encap .encap-row").forEach(function (r) { r.classList.remove("show", "active"); });
    var st = $("encapStatus");
    if (st) { st.className = "status-pill"; st.textContent = "พร้อมส่ง"; }
  }
  function encapSend() {
    encapReset();
    var rows = qsa("#encap .encap-row");
    var st = $("encapStatus");
    st.className = "status-pill routing"; st.textContent = "กำลังห่อ Header ทีละชั้น...";
    rows.forEach(function (r, i) {
      encapTimers.push(setTimeout(function () { r.classList.add("show", "active"); }, 350 + i * 700));
    });
    encapTimers.push(setTimeout(function () {
      rows.forEach(function (r) { r.classList.remove("active"); });
      st.className = "status-pill delivered"; st.textContent = "ห่อครบทุกชั้น — ส่งออกเป็น Bits ✓";
    }, 350 + rows.length * 700 + 200));
    encapTimers.push(setTimeout(function () { st.className = "status-pill"; st.textContent = "พร้อมส่ง"; }, 350 + rows.length * 700 + 2600));
  }
  function encapRecv() {
    encapReset();
    var rows = qsa("#encap .encap-row");
    var st = $("encapStatus");
    st.className = "status-pill routing"; st.textContent = "กำลังแกะ Header ทีละชั้น...";
    rows.forEach(function (r, i) {
      encapTimers.push(setTimeout(function () { r.classList.add("show", "active"); }, 250 + i * 300));
    });
    // แกะจากล่างขึ้นบน (Physical → Application)
    rows.forEach(function (r, i) {
      var ri = rows.length - 1 - i;
      encapTimers.push(setTimeout(function () { rows[ri].classList.remove("show", "active"); }, 550 + i * 700));
    });
    encapTimers.push(setTimeout(function () {
      st.className = "status-pill delivered"; st.textContent = "แกะครบทุกชั้น — เหลือ DATA ✓";
    }, 550 + rows.length * 700 + 200));
    encapTimers.push(setTimeout(function () { st.className = "status-pill"; st.textContent = "พร้อมส่ง"; }, 550 + rows.length * 700 + 2600));
  }

  /* Header fields (ch2 slide 8) */
  var headerFields = {
    ip: { t: "IP Header — Network Layer", d: "เก็บ IP ต้นทางและ IP ปลายทาง ใช้กำหนดว่าใครส่งและต้องส่งไปที่ไหน รวมถึงช่วยเลือกเส้นทาง (Routing) ข้ามเครือข่าย" },
    tcp: { t: "TCP Header — Transport Layer", d: "เก็บพอร์ตต้นทาง-ปลายทาง, หมายเลขลำดับ (Sequence Number) และ Checksum — ใช้จัดลำดับชิ้นข้อมูลและตรวจว่ามาถึงครบถ้วน" },
    mac: { t: "MAC Header — Data Link Layer", d: "เก็บ MAC Address ต้นทาง-ปลายทาง ใช้ส่งเฟรมระหว่างอุปกรณ์ที่อยู่ติดกันบนเครือข่ายเดียวกัน (เช่น เครื่องถัดไปบนสายเดียวกัน)" },
    payload: { t: "Payload — ข้อมูลจริง", d: "เนื้อหาข้อมูลที่ต้องการส่งจริง เช่น ไฟล์ ข้อความ รูปภาพ — ถูกห่อด้วย Header ของแต่ละชั้น จึงอยู่ตรงกลางเสมอ" }
  };
  function selectHeaderField(key) {
    var f = headerFields[key];
    if (!f) return;
    qsa(".fv-field, .fv-payload").forEach(function (b) { b.classList.remove("active"); });
    var el = qsa('.fv-field[data-field="' + key + '"], .fv-payload[data-field="' + key + '"]')[0];
    if (el) el.classList.add("active");
    $("headerFieldDesc").innerHTML = "<b>" + esc(f.t) + "</b> — " + esc(f.d);
  }

  /* Quiz ch2 (slide 12 · 10 ข้อ) */
  function quiz2Score() {
    var sc = 0;
    D.ch2.quiz.forEach(function (q, j) { if (state.quiz2.answers[j] === q.correct) sc++; });
    return sc;
  }
  function renderQuiz2() {
    var el = $("quizC2");
    if (!el) return;
    var qs = D.ch2.quiz;
    var allAnswered = qs.every(function (_, j) { return state.quiz2.answers[j] !== undefined; });
    if (allAnswered) { renderQuiz2Result(el, qs); return; }
    var qi = 0;
    for (var j = 0; j < qs.length; j++) { if (state.quiz2.answers[j] === undefined) { qi = j; break; } }
    renderQuiz2Question(qi, el, qs);
  }
  function renderQuiz2Question(qi, el, qs) {
    var q = qs[qi];
    var chosen = state.quiz2.answers[qi];
    var answered = chosen !== undefined;
    var opts = q.options.map(function (o, oi) {
      var cls = "quiz-option";
      if (answered) {
        cls += " locked";
        if (oi === q.correct) cls += " correct";
        else if (oi === chosen) cls += " incorrect";
      }
      return '<button class="' + cls + '" data-opt="' + oi + '"' + (answered ? " disabled" : "") + ">" +
        '<span class="opt-key">' + "ABCD"[oi] + "</span><span>" + esc(o) + "</span></button>";
    }).join("");

    el.innerHTML =
      '<div class="card fade-up" style="padding:26px">' +
      '<div class="flex items-center justify-between mb-3 wrap gap-2">' +
      '<span class="chip">ข้อที่ ' + (qi + 1) + " / " + qs.length + " · บทที่ 2</span>" +
      '<span class="chip" style="border-color:rgba(56,189,248,.4)">คะแนนตอนนี้: ' + quiz2Score() + " / " + qs.length + "</span></div>" +
      "<h3 style='font-size:19px;line-height:1.5;margin-bottom:18px'>" + esc(q.q) + "</h3>" +
      '<div class="flex" style="flex-direction:column;gap:10px">' + opts + "</div>" +
      (answered
        ? '<div class="quiz-explanation mt-4">💡 ' + esc(q.explain) + "</div>" +
          '<div class="flex items-center gap-3 mt-5 wrap">' +
          (qi < qs.length - 1
            ? '<button class="btn btn-primary" id="q2Next">ข้อถัดไป <i data-lucide="arrow-right"></i></button>'
            : '<button class="btn btn-primary" id="q2Finish">ดูผลลัพธ์ <i data-lucide="flag"></i></button>') +
          "</div>"
        : '<div class="tip-box tip-note mt-4" style="margin-top:18px"><i data-lucide="lightbulb"></i><div><b>Hint</b>ลองนึกถึงลำดับชั้นของโมเดล เช่น Segment อยู่ชั้น Transport</div></div>')
      + "</div>";
    icons();

    el.querySelectorAll(".quiz-option").forEach(function (b) {
      b.addEventListener("click", function () {
        var oi = parseInt(b.dataset.opt, 10);
        if (answered) return;
        state.quiz2.answers[qi] = oi;
        LS.set("cn_quiz2", state.quiz2);
        var correct = oi === q.correct;
        b.classList.add(correct ? "correct" : "incorrect");
        if (!correct) {
          qsa(".quiz-option", el).forEach(function (x) {
            if (parseInt(x.dataset.opt, 10) === q.correct) x.classList.add("correct");
          });
        }
        qsa(".quiz-option", el).forEach(function (x) { x.classList.add("locked"); x.setAttribute("disabled", "disabled"); });
        var exp = document.createElement("div");
        exp.className = "quiz-explanation mt-4";
        exp.innerHTML = (correct ? "✅ ถูกต้อง! " : "❌ ยังไม่ถูกนะ ") + "💡 " + esc(q.explain);
        el.querySelector(".quiz-option").closest("div.flex").insertAdjacentElement("afterend", exp);
        var nav = document.createElement("div");
        nav.className = "flex items-center gap-3 mt-5 wrap";
        nav.innerHTML = qi < qs.length - 1
          ? '<button class="btn btn-primary" id="q2Next">ข้อถัดไป <i data-lucide="arrow-right"></i></button>'
          : '<button class="btn btn-primary" id="q2Finish">ดูผลลัพธ์ <i data-lucide="flag"></i></button>';
        exp.insertAdjacentElement("afterend", nav);
        icons();
        bindQuiz2Nav();
        if (correct) toast("✅ ถูกต้อง!", 1200);
      });
    });
    bindQuiz2Nav();
  }
  function bindQuiz2Nav() {
    var n = $("q2Next");
    if (n) n.addEventListener("click", function () { renderQuiz2(); });
    var f = $("q2Finish");
    if (f) f.addEventListener("click", function () { renderQuiz2(); });
    var r = $("q2Retry");
    if (r) r.addEventListener("click", function () {
      state.quiz2.answers = {};
      LS.set("cn_quiz2", state.quiz2);
      renderQuiz2();
    });
  }
  function renderQuiz2Result(el, qs) {
    var sc = quiz2Score();
    var pct = Math.round((sc / qs.length) * 100);
    var msg = sc === qs.length ? "Perfect! เก่งมาก! 🏆"
      : sc >= qs.length - 2 ? "Excellent! เกือบเต็มแล้ว! 💪"
      : sc >= Math.ceil(qs.length / 2) ? "Good job! ทบทวนอีกนิดก็เพอร์เฟกต์ ✨"
      : "ยังไม่ผ่าน — ย้อนกลับไปทบทวนสไลด์แล้วลองใหม่นะ 📚";
    var ring = 2 * Math.PI * 62;
    var offset = ring - (sc / qs.length) * ring;
    if (state.best === null || sc > state.best) {
      state.best = sc;
      LS.set("cn_best_" + state.chapter, state.best);
    }
    el.innerHTML =
      '<div class="card center fade-up" style="padding:34px 26px">' +
      '<div class="score-ring"><svg width="150" height="150" viewBox="0 0 150 150">' +
      '<defs><linearGradient id="ringGrad2" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0%" stop-color="#2563eb"/><stop offset="100%" stop-color="#22d3ee"/></linearGradient></defs>' +
      '<circle class="ring-bg" cx="75" cy="75" r="62" fill="none" stroke-width="12"/>' +
      '<circle class="ring-fill" id="ringC2" cx="75" cy="75" r="62" fill="none" stroke-width="12" stroke-linecap="round" ' +
      'style="stroke:url(#ringGrad2)" stroke-dasharray="' + ring + '" stroke-dashoffset="' + ring + '"/></svg>' +
      '<div class="ring-num">' + sc + "/" + qs.length + "</div></div>" +
      "<p class='mt-3 text-2' style='font-weight:700'>" + pct + "% · " + msg + "</p>" +
      '<p class="text-3 mt-2" style="font-size:13px">คะแนนดีที่สุด: <b class="cyan">' + (state.best === null ? "–" : state.best + "/" + qs.length) + "</b></p>" +
      '<div class="flex items-center gap-3 mt-5 wrap" style="justify-content:center">' +
      '<button class="btn btn-ghost" id="q2Retry"><i data-lucide="rotate-ccw"></i> ทำใหม่ทั้งชุด</button>' +
      '<button class="btn btn-primary" id="q2ToCards"><i data-lucide="square-stack"></i> ไปการ์ดทบทวน</button>' +
      "</div></div>";
    icons();
    setTimeout(function () {
      var rf = $("ringC2");
      if (rf) rf.style.strokeDashoffset = offset;
    }, 120);
    bindQuiz2Nav();
    var cards = $("q2ToCards");
    if (cards) cards.addEventListener("click", function () { goTo(state.current + 1, 1); });
  }

  /* Flashcards ch2 (slide 13) */
  var fc2 = { order: [], idx: 0 };
  function fc2Shuffle() {
    fc2.order = D.ch2.flashcards.map(function (_, i) { return i; });
    for (var i = fc2.order.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = fc2.order[i]; fc2.order[i] = fc2.order[j]; fc2.order[j] = t;
    }
    fc2.idx = 0;
  }
  function fc2Render() {
    var card = D.ch2.flashcards[fc2.order[fc2.idx]];
    if (!card) return;
    $("fcQ2").textContent = card.q;
    $("fcA2").textContent = card.a;
    $("fcCounter2").textContent = (fc2.idx + 1) + " / " + D.ch2.flashcards.length;
  }
  function fc2Flip() { $("flashcard2").classList.toggle("flipped"); }
  function fc2Step(d) {
    fc2.idx = (fc2.idx + d + D.ch2.flashcards.length) % D.ch2.flashcards.length;
    fc2Render();
    $("flashcard2").classList.remove("flipped");
  }

  /* Glossary ch2 (slide 14) */
  function renderGlossary2(filter) {
    var list = $("glossaryList2");
    if (!list) return;
    var term = (filter || "").toLowerCase().trim();
    var items = D.ch2.glossary.filter(function (g) {
      return g.term.toLowerCase().indexOf(term) !== -1 || g.def.toLowerCase().indexOf(term) !== -1;
    });
    $("glossaryCount2").textContent = items.length + " คำศัพท์";
    list.innerHTML = items.map(function (g) {
      return '<div class="gloss-item" data-term="' + esc(g.term) + '" role="button" tabindex="0" aria-expanded="false">' +
        "<div><b>" + esc(g.term) + '</b><div class="g-def" style="display:none">' + esc(g.def) + "</div></div>" +
        '<i data-lucide="chevron-down" class="g-chev"></i></div>';
    }).join("");
    icons();
  }

  /* ==========================================================================
     CHAPTER 3 — APPLICATION LAYER renderers
     ========================================================================== */

  /* Architecture (slide 2) */
  function selectArch(key) {
    var a = D.ch3.architectures.filter(function (x) { return x.key === key; })[0];
    if (!a) return;
    qsa("#archTabs .tab-btn").forEach(function (b) { b.classList.toggle("active", b.dataset.arch === key); });
    var cs = $("archSVG_CS"), p2p = $("archSVG_P2P");
    if (cs) cs.style.display = key === "client-server" ? "block" : "none";
    if (p2p) p2p.style.display = key === "p2p" ? "block" : "none";
    var nm = $("archName");
    if (nm) nm.innerHTML = (key === "client-server" ? '<i data-lucide="server" class="cyan"></i>' : '<i data-lucide="share-2" class="cyan"></i>') + esc(a.name);
    var th = $("archThai");
    if (th) th.textContent = a.thai;
    var ds = $("archDesc");
    if (ds) ds.textContent = a.desc;
    var ex = $("archExample");
    if (ex) ex.textContent = a.example;
    var pr = $("archPros");
    if (pr) pr.textContent = a.pro;
    var cn = $("archCons");
    if (cn) cn.textContent = a.con;
    icons();
  }

  /* HTTP / HTTPS (slide 5) */
  function selectHttp(key) {
    var m = D.ch3.httpModes.filter(function (x) { return x.key === key; })[0];
    if (!m) return;
    qsa("#httpTabs .tab-btn").forEach(function (b) { b.classList.toggle("active", b.dataset.http === key); });
    var name = $("httpName");
    if (name) name.innerHTML = (key === "https" ? '<i data-lucide="lock" class="cyan"></i>' : '<i data-lucide="globe" class="cyan"></i>') + esc(m.name);
    var ic = $("httpVisIcon");
    if (ic) ic.textContent = key === "https" ? "🔒" : "📄";
    var pt = $("httpPort");
    if (pt) pt.textContent = m.port;
    var vd = $("httpVisDesc");
    if (vd) vd.textContent = key === "https" ? "ข้อมูลถูกเข้ารหัส — คนกลางอ่านไม่ออก" : "ข้อมูลส่งแบบ Plain Text — อ่านได้โดยตรง";
    var ds = $("httpDesc");
    if (ds) ds.textContent = m.desc;
    var us = $("httpUse");
    if (us) us.textContent = m.use;
  }

  /* HTTP Methods (slide 7) */
  function selectMethod(key) {
    var m = D.ch3.methods.filter(function (x) { return x.key === key; })[0];
    if (!m) return;
    qsa("#methodCards .method-card").forEach(function (b) { b.classList.toggle("active", b.dataset.method === key); });
    var nm = $("methodName");
    if (nm) nm.innerHTML = '<i data-lucide="arrow-down-to-line" class="cyan"></i>' + esc(m.name);
    var dt = $("methodDuty");
    if (dt) dt.textContent = m.duty;
    var ex = $("methodExample");
    if (ex) ex.textContent = m.example;
    var tp = $("methodTip");
    if (tp) tp.textContent = m.tip;
  }

  /* Ports (slide 10) */
  function renderPorts() {
    var g = $("portsGrid");
    if (!g) return;
    g.innerHTML = D.ch3.ports.map(function (p) {
      return '<div class="card hoverable flex items-center" style="padding:16px 18px;gap:14px">' +
        '<span style="flex-shrink:0;font-weight:800;font-size:15px;color:var(--cyan);background:rgba(56,189,248,.12);border:1px solid rgba(56,189,248,.35);padding:6px 12px;border-radius:10px">' + esc(p.port) + "</span>" +
        "<div><b style='font-size:14px'>" + esc(p.name) + '</b><p class="card-text small">' + esc(p.desc) + "</p></div></div>";
    }).join("");
  }

  /* Quiz ch3 (slide 13 · 12 ข้อ) */
  function quiz3Score() {
    var sc = 0;
    D.ch3.quiz.forEach(function (q, j) { if (state.quiz3.answers[j] === q.correct) sc++; });
    return sc;
  }
  function renderQuiz3() {
    var el = $("quizC3");
    if (!el) return;
    var qs = D.ch3.quiz;
    var allAnswered = qs.every(function (_, j) { return state.quiz3.answers[j] !== undefined; });
    if (allAnswered) { renderQuiz3Result(el, qs); return; }
    var qi = 0;
    for (var j = 0; j < qs.length; j++) { if (state.quiz3.answers[j] === undefined) { qi = j; break; } }
    renderQuiz3Question(qi, el, qs);
  }
  function renderQuiz3Question(qi, el, qs) {
    var q = qs[qi];
    var chosen = state.quiz3.answers[qi];
    var answered = chosen !== undefined;
    var opts = q.options.map(function (o, oi) {
      var cls = "quiz-option";
      if (answered) {
        cls += " locked";
        if (oi === q.correct) cls += " correct";
        else if (oi === chosen) cls += " incorrect";
      }
      return '<button class="' + cls + '" data-opt="' + oi + '"' + (answered ? " disabled" : "") + ">" +
        '<span class="opt-key">' + "ABCD"[oi] + "</span><span>" + esc(o) + "</span></button>";
    }).join("");

    el.innerHTML =
      '<div class="card fade-up" style="padding:26px">' +
      '<div class="flex items-center justify-between mb-3 wrap gap-2">' +
      '<span class="chip">ข้อที่ ' + (qi + 1) + " / " + qs.length + " · บทที่ 3</span>" +
      '<span class="chip" style="border-color:rgba(56,189,248,.4)">คะแนนตอนนี้: ' + quiz3Score() + " / " + qs.length + "</span></div>" +
      "<h3 style='font-size:19px;line-height:1.5;margin-bottom:18px'>" + esc(q.q) + "</h3>" +
      '<div class="flex" style="flex-direction:column;gap:10px">' + opts + "</div>" +
      (answered
        ? '<div class="quiz-explanation mt-4">💡 ' + esc(q.explain) + "</div>" +
          '<div class="flex items-center gap-3 mt-5 wrap">' +
          (qi < qs.length - 1
            ? '<button class="btn btn-primary" id="q3Next">ข้อถัดไป <i data-lucide="arrow-right"></i></button>'
            : '<button class="btn btn-primary" id="q3Finish">ดูผลลัพธ์ <i data-lucide="flag"></i></button>') +
          "</div>"
        : '<div class="tip-box tip-note mt-4" style="margin-top:18px"><i data-lucide="lightbulb"></i><div><b>Hint</b>ลองนึกถึง Port และหน้าที่ของแต่ละโปรโตคอล เช่น HTTP = 80, HTTPS = 443</div></div>')
      + "</div>";
    icons();

    el.querySelectorAll(".quiz-option").forEach(function (b) {
      b.addEventListener("click", function () {
        var oi = parseInt(b.dataset.opt, 10);
        if (answered) return;
        state.quiz3.answers[qi] = oi;
        LS.set("cn_quiz3", state.quiz3);
        var correct = oi === q.correct;
        b.classList.add(correct ? "correct" : "incorrect");
        if (!correct) {
          qsa(".quiz-option", el).forEach(function (x) {
            if (parseInt(x.dataset.opt, 10) === q.correct) x.classList.add("correct");
          });
        }
        qsa(".quiz-option", el).forEach(function (x) { x.classList.add("locked"); x.setAttribute("disabled", "disabled"); });
        var exp = document.createElement("div");
        exp.className = "quiz-explanation mt-4";
        exp.innerHTML = (correct ? "✅ ถูกต้อง! " : "❌ ยังไม่ถูกนะ ") + "💡 " + esc(q.explain);
        el.querySelector(".quiz-option").closest("div.flex").insertAdjacentElement("afterend", exp);
        var nav = document.createElement("div");
        nav.className = "flex items-center gap-3 mt-5 wrap";
        nav.innerHTML = qi < qs.length - 1
          ? '<button class="btn btn-primary" id="q3Next">ข้อถัดไป <i data-lucide="arrow-right"></i></button>'
          : '<button class="btn btn-primary" id="q3Finish">ดูผลลัพธ์ <i data-lucide="flag"></i></button>';
        exp.insertAdjacentElement("afterend", nav);
        icons();
        bindQuiz3Nav();
        if (correct) toast("✅ ถูกต้อง!", 1200);
      });
    });
    bindQuiz3Nav();
  }
  function bindQuiz3Nav() {
    var n = $("q3Next");
    if (n) n.addEventListener("click", function () { renderQuiz3(); });
    var f = $("q3Finish");
    if (f) f.addEventListener("click", function () { renderQuiz3(); });
    var r = $("q3Retry");
    if (r) r.addEventListener("click", function () {
      state.quiz3.answers = {};
      LS.set("cn_quiz3", state.quiz3);
      renderQuiz3();
    });
  }
  function renderQuiz3Result(el, qs) {
    var sc = quiz3Score();
    var pct = Math.round((sc / qs.length) * 100);
    var msg = sc === qs.length ? "Perfect! เก่งมาก! 🏆"
      : sc >= qs.length - 2 ? "Excellent! เกือบเต็มแล้ว! 💪"
      : sc >= Math.ceil(qs.length / 2) ? "Good job! ทบทวนอีกนิดก็เพอร์เฟกต์ ✨"
      : "ยังไม่ผ่าน — ย้อนกลับไปทบทวนสไลด์แล้วลองใหม่นะ 📚";
    var ring = 2 * Math.PI * 62;
    var offset = ring - (sc / qs.length) * ring;
    if (state.best === null || sc > state.best) {
      state.best = sc;
      LS.set("cn_best_" + state.chapter, state.best);
    }
    el.innerHTML =
      '<div class="card center fade-up" style="padding:34px 26px">' +
      '<div class="score-ring"><svg width="150" height="150" viewBox="0 0 150 150">' +
      '<defs><linearGradient id="ringGrad3" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0%" stop-color="#2563eb"/><stop offset="100%" stop-color="#22d3ee"/></linearGradient></defs>' +
      '<circle class="ring-bg" cx="75" cy="75" r="62" fill="none" stroke-width="12"/>' +
      '<circle class="ring-fill" id="ringC3" cx="75" cy="75" r="62" fill="none" stroke-width="12" stroke-linecap="round" ' +
      'style="stroke:url(#ringGrad3)" stroke-dasharray="' + ring + '" stroke-dashoffset="' + ring + '"/></svg>' +
      '<div class="ring-num">' + sc + "/" + qs.length + "</div></div>" +
      "<p class='mt-3 text-2' style='font-weight:700'>" + pct + "% · " + msg + "</p>" +
      '<p class="text-3 mt-2" style="font-size:13px">คะแนนดีที่สุด: <b class="cyan">' + (state.best === null ? "–" : state.best + "/" + qs.length) + "</b></p>" +
      '<div class="flex items-center gap-3 mt-5 wrap" style="justify-content:center">' +
      '<button class="btn btn-ghost" id="q3Retry"><i data-lucide="rotate-ccw"></i> ทำใหม่ทั้งชุด</button>' +
      '<button class="btn btn-primary" id="q3ToCards"><i data-lucide="square-stack"></i> ไปการ์ดทบทวน</button>' +
      "</div></div>";
    icons();
    setTimeout(function () {
      var rf = $("ringC3");
      if (rf) rf.style.strokeDashoffset = offset;
    }, 120);
    bindQuiz3Nav();
    var cards = $("q3ToCards");
    if (cards) cards.addEventListener("click", function () { goTo(state.current + 1, 1); });
  }

  /* Flashcards ch3 (slide 14) */
  var fc3 = { order: [], idx: 0 };
  function fc3Shuffle() {
    fc3.order = D.ch3.flashcards.map(function (_, i) { return i; });
    for (var i = fc3.order.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = fc3.order[i]; fc3.order[i] = fc3.order[j]; fc3.order[j] = t;
    }
    fc3.idx = 0;
  }
  function fc3Render() {
    var card = D.ch3.flashcards[fc3.order[fc3.idx]];
    if (!card) return;
    $("fcQ3").textContent = card.q;
    $("fcA3").textContent = card.a;
    $("fcCounter3").textContent = (fc3.idx + 1) + " / " + D.ch3.flashcards.length;
  }
  function fc3Flip() { $("flashcard3").classList.toggle("flipped"); }
  function fc3Step(d) {
    fc3.idx = (fc3.idx + d + D.ch3.flashcards.length) % D.ch3.flashcards.length;
    fc3Render();
    $("flashcard3").classList.remove("flipped");
  }

  /* Glossary ch3 (slide 15) */
  function renderGlossary3(filter) {
    var list = $("glossaryList3");
    if (!list) return;
    var term = (filter || "").toLowerCase().trim();
    var items = D.ch3.glossary.filter(function (g) {
      return g.term.toLowerCase().indexOf(term) !== -1 || g.def.toLowerCase().indexOf(term) !== -1;
    });
    $("glossaryCount3").textContent = items.length + " คำศัพท์";
    list.innerHTML = items.map(function (g) {
      return '<div class="gloss-item" data-term="' + esc(g.term) + '" role="button" tabindex="0" aria-expanded="false">' +
        "<div><b>" + esc(g.term) + '</b><div class="g-def" style="display:none">' + esc(g.def) + "</div></div>" +
        '<i data-lucide="chevron-down" class="g-chev"></i></div>';
    }).join("");
    icons();
  }

  /* ==========================================================================
     CHAPTER 4 — TRANSPORT LAYER renderers
     ========================================================================== */

  /* UDP Header fields (slide 7) */
  function selectUdpField(key) {
    var d = $("udpFieldDesc");
    if (!d) return;
    qsa(".fv-field, .fv-payload").forEach(function (el) { el.classList.remove("active"); });
    var f = D.ch4.udpFields.filter(function (x) { return x.key === key; })[0];
    if (key === "data") {
      d.innerHTML = "<b class='cyan'>Payload (ข้อมูล)</b> — ข้อมูลที่แอปต้องการส่งจริง ขนาดไม่ตายตัว ไม่มีหมายเลขลำดับ/ยืนยันรับ — UDP ไม่รับประกันว่าไปถึงครบถ้วน";
      return;
    }
    if (!f) { d.textContent = "— กดที่ช่อง Header เพื่อดูรายละเอียด —"; return; }
    qsa("[data-udp='" + key + "']").forEach(function (el) { el.classList.add("active"); });
    d.innerHTML = "<b class='cyan'>" + esc(f.t) + "</b> — " + esc(f.d);
  }

  /* TCP Three-Way Handshake (slide 11) */
  var hsTimer = null;
  function playHandshake() {
    var H = D.ch4.handshake;
    if (hsTimer) { clearTimeout(hsTimer); hsTimer = null; }
    ["hsLine1", "hsLine2", "hsLine3"].forEach(function (id) {
      var el = $(id);
      if (el) { el.textContent = "—"; el.style.color = "var(--muted)"; }
    });
    var lbl = $("hsLabel"), desc = $("hsDesc");
    if (lbl) lbl.textContent = "เริ่มการเชื่อมต่อ...";
    if (desc) desc.textContent = "—";
    var step = 0;
    function next() {
      if (step >= H.length) {
        if (lbl) lbl.textContent = "✅ เชื่อมต่อสำเร็จ — พร้อมส่งข้อมูล!";
        if (desc) desc.textContent = "ครบ 3 ขั้น: SYN → SYN-ACK → ACK — ทั้งสองฝั่งตกลงกันได้แล้ว เริ่มส่งข้อมูลได้ทันที";
        return;
      }
      var s = H[step];
      var line = $("hsLine" + (step + 1));
      if (line) { line.textContent = s.key + ". " + s.name + " — " + s.from; line.style.color = "#38bdf8"; }
      if (lbl) lbl.textContent = "ขั้น " + (step + 1) + "/" + H.length + " — " + s.name;
      if (desc) desc.textContent = s.desc;
      step++;
      hsTimer = setTimeout(next, 1500);
    }
    next();
  }

  /* AIMD step-through (slide 15) */
  var aimdPts = [
    [15, 150, "เริ่ม: cwnd = 1 MSS — ค่อย ๆ เพิ่มทีละน้อย"],
    [60, 128, "Additive Increase: cwnd +1 MSS ทุก RTT"],
    [105, 106, "Additive Increase: cwnd +1 MSS ต่อ RTT (ต่อ)"],
    [150, 84, "Additive Increase: cwnd เพิ่มขึ้นเรื่อย ๆ"],
    [150, 117, "⚠️ Congestion (Loss!) → Multiplicative Decrease: cwnd ลดครึ่งทันที"],
    [195, 99, "Additive Increase ใหม่: ค่อย ๆ เร่งอีกครั้ง"],
    [240, 81, "Additive Increase: cwnd +1 MSS ต่อ RTT"],
    [285, 63, "Additive Increase: cwnd ขึ้นต่อจนใกล้จุดอิ่มตัว"],
    [285, 96, "⚠️ Loss อีก → ลดครึ่งอีกครั้ง — AIMD วนแบบนี้ไปเรื่อย ๆ"],
    [330, 78, "🔁 วนรอบใหม่: เพิ่มทีละน้อย แล้วลดครึ่งเมื่อเจอ Loss"]
  ];
  var aimdIdx = 0;
  function aimdStep() {
    var dot = $("aimdDot"), stage = $("aimdStage");
    if (!dot || !stage) return;
    aimdIdx = (aimdIdx + 1) % aimdPts.length;
    var p = aimdPts[aimdIdx];
    dot.setAttribute("cx", p[0]);
    dot.setAttribute("cy", p[1]);
    stage.textContent = p[2];
  }

  /* Quiz ch4 (slide 20 · 12 ข้อ) */
  function quiz4Score() {
    var sc = 0;
    D.ch4.quiz.forEach(function (q, j) { if (state.quiz4.answers[j] === q.correct) sc++; });
    return sc;
  }
  function renderQuiz4() {
    var el = $("quizC4");
    if (!el) return;
    var qs = D.ch4.quiz;
    var allAnswered = qs.every(function (_, j) { return state.quiz4.answers[j] !== undefined; });
    if (allAnswered) { renderQuiz4Result(el, qs); return; }
    var qi = 0;
    for (var j = 0; j < qs.length; j++) { if (state.quiz4.answers[j] === undefined) { qi = j; break; } }
    renderQuiz4Question(qi, el, qs);
  }
  function renderQuiz4Question(qi, el, qs) {
    var q = qs[qi];
    var chosen = state.quiz4.answers[qi];
    var answered = chosen !== undefined;
    var opts = q.options.map(function (o, oi) {
      var cls = "quiz-option";
      if (answered) {
        cls += " locked";
        if (oi === q.correct) cls += " correct";
        else if (oi === chosen) cls += " incorrect";
      }
      return '<button class="' + cls + '" data-opt="' + oi + '"' + (answered ? " disabled" : "") + ">" +
        '<span class="opt-key">' + "ABCD"[oi] + "</span><span>" + esc(o) + "</span></button>";
    }).join("");

    el.innerHTML =
      '<div class="card fade-up" style="padding:26px">' +
      '<div class="flex items-center justify-between mb-3 wrap gap-2">' +
      '<span class="chip">ข้อที่ ' + (qi + 1) + " / " + qs.length + " · บทที่ 4</span>" +
      '<span class="chip" style="border-color:rgba(56,189,248,.4)">คะแนนตอนนี้: ' + quiz4Score() + " / " + qs.length + "</span></div>" +
      "<h3 style='font-size:19px;line-height:1.5;margin-bottom:18px'>" + esc(q.q) + "</h3>" +
      '<div class="flex" style="flex-direction:column;gap:10px">' + opts + "</div>" +
      (answered
        ? '<div class="quiz-explanation mt-4">💡 ' + esc(q.explain) + "</div>" +
          '<div class="flex items-center gap-3 mt-5 wrap">' +
          (qi < qs.length - 1
            ? '<button class="btn btn-primary" id="q4Next">ข้อถัดไป <i data-lucide="arrow-right"></i></button>'
            : '<button class="btn btn-primary" id="q4Finish">ดูผลลัพธ์ <i data-lucide="flag"></i></button>') +
          "</div>"
        : '<div class="tip-box tip-note mt-4" style="margin-top:18px"><i data-lucide="lightbulb"></i><div><b>Hint</b>ลองนึกถึงพอร์ต, 4-tuple, และความแตกต่างของ TCP vs UDP ประกอบคำตอบ</div></div>')
      + "</div>";
    icons();

    el.querySelectorAll(".quiz-option").forEach(function (b) {
      b.addEventListener("click", function () {
        var oi = parseInt(b.dataset.opt, 10);
        if (answered) return;
        state.quiz4.answers[qi] = oi;
        LS.set("cn_quiz4", state.quiz4);
        var correct = oi === q.correct;
        b.classList.add(correct ? "correct" : "incorrect");
        if (!correct) {
          qsa(".quiz-option", el).forEach(function (x) {
            if (parseInt(x.dataset.opt, 10) === q.correct) x.classList.add("correct");
          });
        }
        qsa(".quiz-option", el).forEach(function (x) { x.classList.add("locked"); x.setAttribute("disabled", "disabled"); });
        var exp = document.createElement("div");
        exp.className = "quiz-explanation mt-4";
        exp.innerHTML = (correct ? "✅ ถูกต้อง! " : "❌ ยังไม่ถูกนะ ") + "💡 " + esc(q.explain);
        el.querySelector(".quiz-option").closest("div.flex").insertAdjacentElement("afterend", exp);
        var nav = document.createElement("div");
        nav.className = "flex items-center gap-3 mt-5 wrap";
        nav.innerHTML = qi < qs.length - 1
          ? '<button class="btn btn-primary" id="q4Next">ข้อถัดไป <i data-lucide="arrow-right"></i></button>'
          : '<button class="btn btn-primary" id="q4Finish">ดูผลลัพธ์ <i data-lucide="flag"></i></button>';
        exp.insertAdjacentElement("afterend", nav);
        icons();
        bindQuiz4Nav();
        if (correct) toast("✅ ถูกต้อง!", 1200);
      });
    });
    bindQuiz4Nav();
  }
  function bindQuiz4Nav() {
    var n = $("q4Next");
    if (n) n.addEventListener("click", function () { renderQuiz4(); });
    var f = $("q4Finish");
    if (f) f.addEventListener("click", function () { renderQuiz4(); });
    var r = $("q4Retry");
    if (r) r.addEventListener("click", function () {
      state.quiz4.answers = {};
      LS.set("cn_quiz4", state.quiz4);
      renderQuiz4();
    });
  }
  function renderQuiz4Result(el, qs) {
    var sc = quiz4Score();
    var pct = Math.round((sc / qs.length) * 100);
    var msg = sc === qs.length ? "Perfect! เก่งมาก! 🏆"
      : sc >= qs.length - 2 ? "Excellent! เกือบเต็มแล้ว! 💪"
      : sc >= Math.ceil(qs.length / 2) ? "Good job! ทบทวนอีกนิดก็เพอร์เฟกต์ ✨"
      : "ยังไม่ผ่าน — ย้อนกลับไปทบทวนสไลด์แล้วลองใหม่นะ 📚";
    var ring = 2 * Math.PI * 62;
    var offset = ring - (sc / qs.length) * ring;
    if (state.best === null || sc > state.best) {
      state.best = sc;
      LS.set("cn_best_" + state.chapter, state.best);
    }
    el.innerHTML =
      '<div class="card center fade-up" style="padding:34px 26px">' +
      '<div class="score-ring"><svg width="150" height="150" viewBox="0 0 150 150">' +
      '<defs><linearGradient id="ringGrad4" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0%" stop-color="#2563eb"/><stop offset="100%" stop-color="#22d3ee"/></linearGradient></defs>' +
      '<circle class="ring-bg" cx="75" cy="75" r="62" fill="none" stroke-width="12"/>' +
      '<circle class="ring-fill" id="ringC4" cx="75" cy="75" r="62" fill="none" stroke-width="12" stroke-linecap="round" ' +
      'style="stroke:url(#ringGrad4)" stroke-dasharray="' + ring + '" stroke-dashoffset="' + ring + '"/></svg>' +
      '<div class="ring-num">' + sc + "/" + qs.length + "</div></div>" +
      "<p class='mt-3 text-2' style='font-weight:700'>" + pct + "% · " + msg + "</p>" +
      '<p class="text-3 mt-2" style="font-size:13px">คะแนนดีที่สุด: <b class="cyan">' + (state.best === null ? "–" : state.best + "/" + qs.length) + "</b></p>" +
      '<div class="flex items-center gap-3 mt-5 wrap" style="justify-content:center">' +
      '<button class="btn btn-ghost" id="q4Retry"><i data-lucide="rotate-ccw"></i> ทำใหม่ทั้งชุด</button>' +
      '<button class="btn btn-primary" id="q4ToCards"><i data-lucide="square-stack"></i> ไปการ์ดทบทวน</button>' +
      "</div></div>";
    icons();
    setTimeout(function () {
      var rf = $("ringC4");
      if (rf) rf.style.strokeDashoffset = offset;
    }, 120);
    bindQuiz4Nav();
    var cards = $("q4ToCards");
    if (cards) cards.addEventListener("click", function () { goTo(state.current + 1, 1); });
  }

  /* Flashcards ch4 (slide 21) */
  var fc4 = { order: [], idx: 0 };
  function fc4Shuffle() {
    fc4.order = D.ch4.flashcards.map(function (_, i) { return i; });
    for (var i = fc4.order.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = fc4.order[i]; fc4.order[i] = fc4.order[j]; fc4.order[j] = t;
    }
    fc4.idx = 0;
  }
  function fc4Render() {
    var card = D.ch4.flashcards[fc4.order[fc4.idx]];
    if (!card) return;
    $("fcQ4").textContent = card.q;
    $("fcA4").textContent = card.a;
    $("fcCounter4").textContent = (fc4.idx + 1) + " / " + D.ch4.flashcards.length;
  }
  function fc4Flip() { $("flashcard4").classList.toggle("flipped"); }
  function fc4Step(d) {
    fc4.idx = (fc4.idx + d + D.ch4.flashcards.length) % D.ch4.flashcards.length;
    fc4Render();
    $("flashcard4").classList.remove("flipped");
  }

  /* Glossary ch4 (slide 22) */
  function renderGlossary4(filter) {
    var list = $("glossaryList4");
    if (!list) return;
    var term = (filter || "").toLowerCase().trim();
    var items = D.ch4.glossary.filter(function (g) {
      return g.term.toLowerCase().indexOf(term) !== -1 || g.def.toLowerCase().indexOf(term) !== -1;
    });
    $("glossaryCount4").textContent = items.length + " คำศัพท์";
    list.innerHTML = items.map(function (g) {
      return '<div class="gloss-item" data-term="' + esc(g.term) + '" role="button" tabindex="0" aria-expanded="false">' +
        "<div><b>" + esc(g.term) + '</b><div class="g-def" style="display:none">' + esc(g.def) + "</div></div>" +
        '<i data-lucide="chevron-down" class="g-chev"></i></div>';
    }).join("");
    icons();
  }

  /* ==========================================================================
     FINAL F1 — NETWORK LAYER: DATA PLANE (internal ID 5)
     ========================================================================== */

  /* ---------- Service model table (slide 7) ---------- */
  function renderServiceModel() {
    var table = $("serviceTable");
    if (!table) return;
    var tb = table.querySelector("tbody");
    if (!tb) return;
    tb.innerHTML = D.ch5.serviceModel.map(function (r) {
      return "<tr><td>" + esc(r.arch) + "</td><td><b>" + esc(r.model) + "</b></td>" +
        "<td>" + esc(r.bandwidth) + "</td><td>" + esc(r.loss) + "</td>" +
        "<td>" + esc(r.order) + "</td><td>" + esc(r.timing) + "</td></tr>";
    }).join("");
  }

  /* ---------- Data plane / control plane toggle (slide 5) ---------- */
  var dcInfo = {
    data: {
      title: "Data plane",
      desc: "ฟังก์ชันระดับ local ต่อ router — ตัดสินใจว่า datagram ที่เข้ามาที่ input port ของ router จะถูก forward ไปยัง output port ใด",
      scope: "Local · ต่อ router",
      time: "Hardware · ระดับนาโนวินาที"
    },
    control: {
      title: "Control plane",
      desc: "logic ระดับ network-wide — ตัดสินใจว่า datagram จะถูก route ระหว่าง router ต่าง ๆ ตามเส้นทาง end-to-end จาก source host ไป destination host อย่างไร",
      scope: "Network-wide · ทั้งเครือข่าย",
      time: "Software · ระดับมิลลิวินาที"
    }
  };
  function selectDcPlane(key) {
    var d = dcInfo[key];
    if (!d) return;
    qsa("#dcTabs .tab-btn").forEach(function (b) { b.classList.toggle("active", b.dataset.dc === key); });
    $("dcTitle").textContent = d.title;
    $("dcDesc").textContent = d.desc;
    $("dcScope").textContent = d.scope;
    $("dcTime").textContent = d.time;
  }

  /* ---------- Per-router / SDN toggle (slide 6) ---------- */
  function selectPlane(key) {
    var isSdn = key === "sdn";
    qsa("#planeTabs .tab-btn").forEach(function (b) { b.classList.toggle("active", b.dataset.plane === key); });
    $("planeTitle").textContent = isSdn ? "SDN control plane" : "Per-router control plane";
    $("planeDesc").textContent = isSdn
      ? "Remote controller เป็นผู้คำนวณและติดตั้ง forwarding table ลงใน router"
      : "routing algorithm ในแต่ละ router ทำงานร่วมกันใน control plane";
    var vis = $("planeVis");
    if (!vis) return;
    vis.innerHTML = isSdn
      ? '<span class="vb-label">REMOTE CONTROLLER คำนวณ + ติดตั้ง FORWARDING TABLE</span>' +
        '<div class="pipeline" style="padding:16px 10px">' +
        '<div class="pipe-node hot"><b>Remote controller</b><span>คำนวณ forwarding table</span></div>' +
        '<span class="flow-arrow">→</span>' +
        '<div class="pipe-node"><b>Router A</b><span>forwarding table ที่ติดตั้งแล้ว</span></div>' +
        '<div class="pipe-node"><b>Router B</b><span>forwarding table ที่ติดตั้งแล้ว</span></div>' +
        '<div class="pipe-node"><b>Router C</b><span>forwarding table ที่ติดตั้งแล้ว</span></div>' +
        '</div>'
      : '<span class="vb-label">แต่ละ ROUTER มี ROUTING ALGORITHM ของตัวเอง</span>' +
        '<div class="pipeline" style="padding:16px 10px">' +
        '<div class="pipe-node"><b>Router A</b><span>routing algorithm</span></div>' +
        '<span class="flow-arrow">↔</span>' +
        '<div class="pipe-node"><b>Router B</b><span>routing algorithm</span></div>' +
        '<span class="flow-arrow">↔</span>' +
        '<div class="pipe-node"><b>Router C</b><span>routing algorithm</span></div>' +
        '</div>';
    icons();
  }

  /* ---------- Router architecture (slide 8) ---------- */
  function selectRouterPart(key) {
    var p = D.ch5.routerParts.filter(function (x) { return x.key === key; })[0];
    if (!p) return;
    qsa("[data-rpart]").forEach(function (b) { b.classList.toggle("hot", b.dataset.rpart === key); });
    $("routerTitle").textContent = p.label;
    $("routerDesc").textContent = p.desc;
  }

  /* ---------- Switching fabrics (slide 13) ---------- */
  function selectFabric(key) {
    var f = D.ch5.fabrics.filter(function (x) { return x.key === key; })[0];
    if (!f) return;
    qsa("#fabricTabs .tab-btn").forEach(function (b) { b.classList.toggle("active", b.dataset.fabric === key); });
    $("fabricTitle").textContent = f.label;
    $("fabricDesc").textContent = f.desc;
  }

  /* ---------- Longest prefix matching simulator (slide 12) ---------- */
  function selectLpmExample(idx) {
    var ex = D.ch5.lpm.examples[idx];
    if (!ex) return;
    qsa("#lpmExampleTabs .tab-btn").forEach(function (b) { b.classList.toggle("active", parseInt(b.dataset.lpm, 10) === idx); });
    $("lpmDest").textContent = ex.dest.replace(/\s+/g, " ");
    $("lpmDecimal").textContent = ex.decimal;

    var destBits = ex.dest.replace(/\s+/g, "");
    var rows = D.ch5.lpm.rows;
    var matching = [];
    rows.forEach(function (r, i) {
      if (i === 3) return;
      var prefixBits = r.prefix.replace(/\s+/g, "");
      if (destBits.slice(0, prefixBits.length) === prefixBits) matching.push(i);
    });
    var winner = ex.winner;
    var winnerBits = rows[winner].bits;

    var bitsHTML = "";
    for (var i = 0; i < destBits.length; i++) {
      var cls = "bit";
      if (i < winnerBits) cls += " longest";
      else {
        var matchedByOther = matching.some(function (ri) { return i < rows[ri].bits; });
        if (matchedByOther) cls += " match";
      }
      bitsHTML += '<span class="' + cls + '">' + destBits[i] + "</span>";
      if ((i + 1) % 8 === 0 && i !== destBits.length - 1) bitsHTML += '<span class="gap"></span>';
    }
    $("lpmBits").innerHTML = bitsHTML;

    var matchedText = matching.map(function (ri) {
      return "row " + (ri + 1) + " (" + rows[ri].bits + " บิต)";
    }).join(" · ");
    $("lpmResult").className = "lpm-result mt-4 ok";
    $("lpmResult").innerHTML =
      "<b>Match:</b> " + matchedText + "<br>" +
      "<b>Longest prefix:</b> " + winnerBits + " บิต → <b class='cyan'>interface " + ex.iface + "</b><br>" +
      '<span class="text-3" style="font-size:12.5px">' + esc(ex.explain) + "</span>";

    qsa("#lpmTable tbody tr").forEach(function (tr) {
      var ri = parseInt(tr.dataset.lpmRow, 10);
      tr.classList.toggle("match", matching.indexOf(ri) !== -1);
      tr.classList.toggle("winner", ri === winner);
    });
  }

  /* ---------- Subnets (slide 18) ---------- */
  function decToBin8(n) {
    var s = Number(n).toString(2);
    while (s.length < 8) s = "0" + s;
    return s;
  }
  function selectSubnet(idx) {
    var s = D.ch5.subnets[idx];
    if (!s) return;
    qsa("#subnetTabs .tab-btn").forEach(function (b) { b.classList.toggle("active", parseInt(b.dataset.subnet, 10) === idx); });
    $("subnetName").textContent = s.cidr;
    var prefix = parseInt(s.cidr.split("/")[1], 10);
    var ip = s.cidr.split("/")[0];
    var bits = ip.split(".").map(decToBin8).join("");
    var html = "";
    for (var i = 0; i < bits.length; i++) {
      html += '<span class="sb' + (i >= prefix ? " host" : "") + '">' + bits[i] + "</span>";
      if ((i + 1) % 8 === 0 && i !== bits.length - 1) html += '<span class="gap"></span>';
    }
    $("subnetBits").innerHTML = html;
    $("subnetHosts").textContent = "hosts (โฮสต์): " + s.hosts.join(" · ");
  }

  /* ---------- Hierarchical addressing (slide 21) ---------- */
  function renderOrgGrid() {
    var g = $("orgGrid");
    if (!g) return;
    g.innerHTML = D.ch5.hierarchy.orgs.map(function (o) {
      return '<div class="org-item">' + esc(o) + "</div>";
    }).join("");
  }

  /* ---------- DHCP player (slide 20) ---------- */
  var dhcpTimer = null;
  function renderDhcpSteps() {
    var g = $("dhcpSteps");
    if (!g) return;
    g.innerHTML = D.ch5.dhcp.map(function (d, i) {
      return '<button class="dhcp-step' + (i === 0 ? " active" : "") + '" data-dhcp="' + i + '">' +
        '<span class="n">ขั้นที่ ' + d.key + "</span><b>" + esc(d.name) + "</b>" +
        "<span>" + esc(d.from) + "</span></button>";
    }).join("");
  }
  function selectDhcpStep(i) {
    var d = D.ch5.dhcp[i];
    if (!d) return;
    qsa("#dhcpSteps .dhcp-step").forEach(function (b) { b.classList.toggle("active", parseInt(b.dataset.dhcp, 10) === i); });
    var el = $("dhcpDetailText");
    if (el) {
      el.innerHTML = "<b>" + esc(d.name) + "</b> · " + esc(d.msg) + "<br>" +
        '<span class="text-3" style="font-size:12.5px">src ' + esc(d.src) + " → dest " + esc(d.dest) +
        " · yiaddr " + esc(d.yiaddr) + " · xid " + esc(d.xid) + " · lifetime " + esc(d.lifetime) + "</span>";
    }
  }
  function playDhcp() {
    clearInterval(dhcpTimer);
    var i = 0;
    selectDhcpStep(i);
    dhcpTimer = setInterval(function () {
      i++;
      if (i >= D.ch5.dhcp.length) { clearInterval(dhcpTimer); return; }
      selectDhcpStep(i);
    }, 1300);
  }

  /* ---------- Cheat sheet (slide 23) ---------- */
  function renderCheat5() {
    var g = $("cheatGrid5");
    if (!g) return;
    g.innerHTML = D.ch5.cheat.map(function (c) {
      return '<div class="cheat-item"><span class="term">' + esc(c.term) + '</span><span class="arrow">→</span><span class="def">' + esc(c.def) + "</span></div>";
    }).join("");
  }

  /* ---------- Quiz 5 (slide 24 · 12 ข้อ) ---------- */
  function quiz5Score() {
    var sc = 0;
    D.ch5.quiz.forEach(function (q, j) { if (state.quiz5.answers[j] === q.correct) sc++; });
    return sc;
  }
  function renderQuiz5() {
    var el = $("quizC5");
    if (!el) return;
    var qs = D.ch5.quiz;
    var allAnswered = qs.every(function (_, j) { return state.quiz5.answers[j] !== undefined; });
    if (allAnswered) { renderQuiz5Result(el, qs); return; }
    var qi = 0;
    for (var j = 0; j < qs.length; j++) { if (state.quiz5.answers[j] === undefined) { qi = j; break; } }
    renderQuiz5Question(qi, el, qs);
  }
  function renderQuiz5Question(qi, el, qs) {
    var q = qs[qi];
    var chosen = state.quiz5.answers[qi];
    var answered = chosen !== undefined;
    var opts = q.options.map(function (o, oi) {
      var cls = "quiz-option";
      if (answered) {
        cls += " locked";
        if (oi === q.correct) cls += " correct";
        else if (oi === chosen) cls += " incorrect";
      }
      return '<button class="' + cls + '" data-opt="' + oi + '"' + (answered ? " disabled" : "") + ">" +
        '<span class="opt-key">' + "ABCD"[oi] + "</span><span>" + esc(o) + "</span></button>";
    }).join("");

    el.innerHTML =
      '<div class="card fade-up" style="padding:26px">' +
      '<div class="flex items-center justify-between mb-3 wrap gap-2">' +
      '<span class="chip">ข้อที่ ' + (qi + 1) + " / " + qs.length + " · F1 · BOOK CH.4</span>" +
      '<span class="chip" style="border-color:rgba(56,189,248,.4)">คะแนนตอนนี้: ' + quiz5Score() + " / " + qs.length + "</span></div>" +
      "<h3 style='font-size:19px;line-height:1.5;margin-bottom:18px'>" + esc(q.q) + "</h3>" +
      '<div class="flex" style="flex-direction:column;gap:10px">' + opts + "</div>" +
      (answered
        ? '<div class="quiz-explanation mt-4">💡 ' + esc(q.explain) + "</div>" +
          '<div class="flex items-center gap-3 mt-5 wrap">' +
          (qi < qs.length - 1
            ? '<button class="btn btn-primary" id="q5Next">ข้อถัดไป <i data-lucide="arrow-right"></i></button>'
            : '<button class="btn btn-primary" id="q5Finish">ดูผลลัพธ์ <i data-lucide="flag"></i></button>') +
          "</div>"
        : '<div class="tip-box tip-note mt-4" style="margin-top:18px"><i data-lucide="lightbulb"></i><div><b>Hint</b>ลองนึกถึง Forwarding vs Routing, Data/Control Plane, Longest Prefix Matching และ DHCP 4 ขั้น</div></div>')
      + "</div>";
    icons();

    el.querySelectorAll(".quiz-option").forEach(function (b) {
      b.addEventListener("click", function () {
        var oi = parseInt(b.dataset.opt, 10);
        if (answered) return;
        state.quiz5.answers[qi] = oi;
        LS.set("cn_quiz5", state.quiz5);
        var correct = oi === q.correct;
        b.classList.add(correct ? "correct" : "incorrect");
        if (!correct) {
          qsa(".quiz-option", el).forEach(function (x) {
            if (parseInt(x.dataset.opt, 10) === q.correct) x.classList.add("correct");
          });
        }
        qsa(".quiz-option", el).forEach(function (x) { x.classList.add("locked"); x.setAttribute("disabled", "disabled"); });
        var exp = document.createElement("div");
        exp.className = "quiz-explanation mt-4";
        exp.innerHTML = (correct ? "✅ ถูกต้อง! " : "❌ ยังไม่ถูกนะ ") + "💡 " + esc(q.explain);
        el.querySelector(".quiz-option").closest("div.flex").insertAdjacentElement("afterend", exp);
        var nav = document.createElement("div");
        nav.className = "flex items-center gap-3 mt-5 wrap";
        nav.innerHTML = qi < qs.length - 1
          ? '<button class="btn btn-primary" id="q5Next">ข้อถัดไป <i data-lucide="arrow-right"></i></button>'
          : '<button class="btn btn-primary" id="q5Finish">ดูผลลัพธ์ <i data-lucide="flag"></i></button>';
        exp.insertAdjacentElement("afterend", nav);
        icons();
        bindQuiz5Nav();
        if (correct) toast("✅ ถูกต้อง!", 1200);
      });
    });
    bindQuiz5Nav();
  }
  function bindQuiz5Nav() {
    var n = $("q5Next");
    if (n) n.addEventListener("click", function () { renderQuiz5(); });
    var f = $("q5Finish");
    if (f) f.addEventListener("click", function () { renderQuiz5(); });
    var r = $("q5Retry");
    if (r) r.addEventListener("click", function () {
      state.quiz5.answers = {};
      LS.set("cn_quiz5", state.quiz5);
      renderQuiz5();
    });
  }
  function renderQuiz5Result(el, qs) {
    var sc = quiz5Score();
    var pct = Math.round((sc / qs.length) * 100);
    var msg = sc === qs.length ? "Perfect! เก่งมาก! 🏆"
      : sc >= qs.length - 2 ? "Excellent! เกือบเต็มแล้ว! 💪"
      : sc >= Math.ceil(qs.length / 2) ? "Good job! ทบทวนอีกนิดก็เพอร์เฟกต์ ✨"
      : "ยังไม่ผ่าน — ย้อนกลับไปทบทวนสไลด์แล้วลองใหม่นะ 📚";
    var ring = 2 * Math.PI * 62;
    var offset = ring - (sc / qs.length) * ring;
    if (state.best === null || sc > state.best) {
      state.best = sc;
      LS.set("cn_best_" + state.chapter, state.best);
    }
    el.innerHTML =
      '<div class="card center fade-up" style="padding:34px 26px">' +
      '<div class="score-ring"><svg width="150" height="150" viewBox="0 0 150 150">' +
      '<defs><linearGradient id="ringGrad5" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0%" stop-color="#2563eb"/><stop offset="100%" stop-color="#22d3ee"/></linearGradient></defs>' +
      '<circle class="ring-bg" cx="75" cy="75" r="62" fill="none" stroke-width="12"/>' +
      '<circle class="ring-fill" id="ringC5" cx="75" cy="75" r="62" fill="none" stroke-width="12" stroke-linecap="round" ' +
      'style="stroke:url(#ringGrad5)" stroke-dasharray="' + ring + '" stroke-dashoffset="' + ring + '"/></svg>' +
      '<div class="ring-num">' + sc + "/" + qs.length + "</div></div>" +
      "<p class='mt-3 text-2' style='font-weight:700'>" + pct + "% · " + msg + "</p>" +
      '<p class="text-3 mt-2" style="font-size:13px">คะแนนดีที่สุด: <b class="cyan">' + (state.best === null ? "–" : state.best + "/" + qs.length) + "</b></p>" +
      '<div class="flex items-center gap-3 mt-5 wrap" style="justify-content:center">' +
      '<button class="btn btn-ghost" id="q5Retry"><i data-lucide="rotate-ccw"></i> ทำใหม่ทั้งชุด</button>' +
      '<button class="btn btn-primary" id="q5ToCards"><i data-lucide="square-stack"></i> ไปการ์ดทบทวน</button>' +
      "</div></div>";
    icons();
    setTimeout(function () {
      var rf = $("ringC5");
      if (rf) rf.style.strokeDashoffset = offset;
    }, 120);
    bindQuiz5Nav();
    var cards = $("q5ToCards");
    if (cards) cards.addEventListener("click", function () { goTo(state.current + 1, 1); });
  }

  /* ---------- Flashcards 5 (slide 25) ---------- */
  var fc5 = { order: [], idx: 0 };
  function fc5Shuffle() {
    fc5.order = D.ch5.flashcards.map(function (_, i) { return i; });
    for (var i = fc5.order.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = fc5.order[i]; fc5.order[i] = fc5.order[j]; fc5.order[j] = t;
    }
    fc5.idx = 0;
  }
  function fc5Render() {
    if (!fc5.order.length) fc5Shuffle();
    var card = D.ch5.flashcards[fc5.order[fc5.idx]];
    if (!card) return;
    $("fcQ5").textContent = card.q;
    $("fcA5").textContent = card.a;
    $("fcCounter5").textContent = (fc5.idx + 1) + " / " + D.ch5.flashcards.length;
  }
  function fc5Flip() { $("flashcard5").classList.toggle("flipped"); }
  function fc5Step(d) {
    fc5.idx = (fc5.idx + d + D.ch5.flashcards.length) % D.ch5.flashcards.length;
    fc5Render();
    $("flashcard5").classList.remove("flipped");
  }

  /* ---------- Glossary 5 (slide 26) ---------- */
  function renderGlossary5(filter) {
    var list = $("glossaryList5");
    if (!list) return;
    var term = (filter || "").toLowerCase().trim();
    var items = D.ch5.glossary.filter(function (g) {
      return g.term.toLowerCase().indexOf(term) !== -1 || g.def.toLowerCase().indexOf(term) !== -1;
    });
    $("glossaryCount5").textContent = items.length + " คำศัพท์";
    list.innerHTML = items.map(function (g) {
      return '<div class="gloss-item" data-term="' + esc(g.term) + '" role="button" tabindex="0" aria-expanded="false">' +
        "<div><b>" + esc(g.term) + '</b><div class="g-def" style="display:none">' + esc(g.def) + "</div></div>" +
        '<i data-lucide="chevron-down" class="g-chev"></i></div>';
    }).join("");
    icons();
  }

  /* ==========================================================================
     FINAL F2 — NETWORK LAYER: CONTROL PLANE (internal ID 6)
     ========================================================================== */

  /* ---------- Control plane / data plane toggle (slide 3) ---------- */
  function selectCpPlane(key) {
    var d = D.ch6.cpPlanes[key];
    if (!d) return;
    qsa("#cpTabs .tab-btn").forEach(function (b) { b.classList.toggle("active", b.dataset.cp === key); });
    $("cpTitle").textContent = d.title;
    $("cpDesc").textContent = d.desc;
    $("cpScope").textContent = d.scope;
    $("cpTime").textContent = d.time;
  }

  /* ---------- Per-router / SDN toggle (slide 5) ---------- */
  function selectCpStruct(key) {
    var d = D.ch6.cpStruct[key];
    if (!d) return;
    qsa("#cpStructTabs .tab-btn").forEach(function (b) { b.classList.toggle("active", b.dataset.struct === key); });
    $("cpStructTitle").textContent = d.title;
    $("cpStructDesc").textContent = d.desc;
    var vis = $("cpStructVis");
    if (!vis) return;
    vis.innerHTML = key === "sdn"
      ? '<span class="vb-label">REMOTE CONTROLLER คำนวณ แล้วติดตั้ง FORWARDING TABLE ผ่าน CONTROL AGENT</span>' +
        '<div class="pipeline" style="padding:16px 10px">' +
        '<div class="pipe-node hot"><b>Remote controller</b><span>logically centralized</span></div>' +
        '<span class="flow-arrow">→</span>' +
        '<div class="pipe-node"><b>Control Agent (CA)</b><span>ใน router</span></div>' +
        '<span class="flow-arrow">→</span>' +
        '<div class="pipe-node"><b>Router</b><span>forwarding table</span></div>' +
        '</div>'
      : '<span class="vb-label">แต่ละ ROUTER มี ROUTING ALGORITHM ของตัวเอง</span>' +
        '<div class="pipeline" style="padding:16px 10px">' +
        '<div class="pipe-node"><b>Router A</b><span>routing algorithm</span></div>' +
        '<span class="flow-arrow">↔</span>' +
        '<div class="pipe-node"><b>Router B</b><span>routing algorithm</span></div>' +
        '<span class="flow-arrow">↔</span>' +
        '<div class="pipe-node"><b>Router C</b><span>routing algorithm</span></div>' +
        '</div>';
    icons();
  }

  /* ---------- SDN link-failure player (slide 7) ---------- */
  function renderSdnSteps6() {
    var g = $("sdnSteps");
    if (!g) return;
    g.innerHTML = D.ch6.sdnSteps.map(function (d, i) {
      return '<button class="dhcp-step' + (i === 0 ? " active" : "") + '" data-sdn="' + i + '">' +
        '<span class="n">ขั้นที่ ' + d.key + "</span><b>" + esc(d.name) + "</b>" +
        "<span>" + esc(d.from) + "</span></button>";
    }).join("");
  }
  function selectSdnStep6(i) {
    var d = D.ch6.sdnSteps[i];
    if (!d) return;
    qsa("#sdnSteps .dhcp-step").forEach(function (b) { b.classList.toggle("active", parseInt(b.dataset.sdn, 10) === i); });
    var el = $("sdnStepDetail");
    if (el) el.innerHTML = "<b>" + esc(d.name) + "</b> · " + esc(d.detail) +
      '<br><span class="text-3" style="font-size:12.5px">' + esc(d.from) + "</span>";
  }

  /* ---------- Dijkstra table (slide 14) ---------- */
  function renderDijkstra6() {
    var tb = $("dijkstraRows");
    if (!tb) return;
    tb.innerHTML = D.ch6.dijkstra.map(function (r, i) {
      return '<tr class="dij-row' + (i === 0 ? " active" : "") + '" data-dij="' + i + '" tabindex="0">' +
        "<td><b>" + r.step + "</b></td><td class='mono'>" + esc(r.n) + "</td>" +
        r.vals.map(function (v) { return "<td class='mono'>" + esc(v) + "</td>"; }).join("") +
        "</tr>";
    }).join("");
    selectDijkstraStep6(0);
  }
  function selectDijkstraStep6(i) {
    var r = D.ch6.dijkstra[i];
    if (!r) return;
    qsa("#dijkstraRows .dij-row").forEach(function (tr) { tr.classList.toggle("active", parseInt(tr.dataset.dij, 10) === i); });
    var el = $("dijkstraDetail");
    if (el) el.innerHTML = "<b>Step " + r.step + " · N' = {" + esc(r.n) + "}</b><br>" + esc(r.detail);
  }

  /* ---------- DV good/bad news (slide 18) ---------- */
  function selectDvNews6(key) {
    var d = D.ch6.dvNews[key];
    if (!d) return;
    qsa("#dvNewsTabs .tab-btn").forEach(function (b) { b.classList.toggle("active", b.dataset.news === key); });
    $("dvNewsTitle").textContent = d.title;
    $("dvNewsDesc").textContent = d.desc;
    var ex = $("dvNewsExample");
    if (ex) ex.textContent = key === "good"
      ? "ถ้า x–y ลดจาก 4 เป็น 1 → y ตรวจพบและอัปเดต DV → แจ้ง z → z คำนวณใหม่และแจ้งต่อ ใช้เวลาไม่กี่รอบก็ลู่เข้า"
      : "เมื่อ x–y เปลี่ยนจาก 4 เป็น 60 → z ยังบอกว่าไป x ได้ที่ cost 5 ผ่าน y → เกิด count-to-infinity";
  }

  /* ---------- OSPF flat / hierarchical (slide 21) ---------- */
  function selectOspf6(key) {
    var isHier = key === "hier";
    qsa("#ospfTabs .tab-btn").forEach(function (b) { b.classList.toggle("active", b.dataset.ospf === key); });
    $("ospfTitle").textContent = isHier ? "Hierarchical OSPF (2 ระดับ)" : "OSPF แบบ flat";
    $("ospfDesc").textContent = isHier
      ? "แบ่งเป็น local area และ backbone โดย flood LS เฉพาะภายใน area หรือ backbone"
      : "ทุก router ใน AS อยู่ในโดเมนเดียว แล้ว flood LSA ถึงกันทั้งหมด";
    var vis = $("ospfVis");
    if (!vis) return;
    vis.innerHTML = isHier
      ? '<span class="vb-label">LOCAL AREA ↔ AREA BORDER ROUTER ↔ BACKBONE</span>' +
        '<div class="flow-row" style="padding:16px 10px">' +
        '<div class="pipe-node"><b>Local area</b><span>internal routers</span></div>' +
        '<span class="flow-arrow">→</span>' +
        '<div class="pipe-node hot"><b>Area border router</b><span>สรุประยะทาง</span></div>' +
        '<span class="flow-arrow">→</span>' +
        '<div class="pipe-node"><b>Backbone</b><span>backbone routers</span></div>' +
        '</div>'
      : '<span class="vb-label">ทุก ROUTER อยู่ใน AS เดียวกัน</span>' +
        '<div class="flow-row" style="padding:16px 10px">' +
        '<div class="pipe-node hot"><b>Router</b><span>flood LSA</span></div>' +
        '<span class="flow-arrow">↔</span>' +
        '<div class="pipe-node"><b>Router</b><span>Dijkstra</span></div>' +
        '<span class="flow-arrow">↔</span>' +
        '<div class="pipe-node"><b>Router</b><span>forwarding table</span></div>' +
        '</div>';
    icons();
  }

  /* ---------- BGP selection player (slide 24) ---------- */
  function renderBgpSteps6() {
    var g = $("bgpSteps");
    if (!g) return;
    g.innerHTML = D.ch6.bgpSteps.map(function (d, i) {
      return '<button class="dhcp-step' + (i === 0 ? " active" : "") + '" data-bgp="' + i + '">' +
        '<span class="n">ลำดับ ' + d.key + "</span><b>" + esc(d.name) + "</b></button>";
    }).join("");
  }
  function selectBgpStep6(i) {
    var d = D.ch6.bgpSteps[i];
    if (!d) return;
    qsa("#bgpSteps .dhcp-step").forEach(function (b) { b.classList.toggle("active", parseInt(b.dataset.bgp, 10) === i); });
    var el = $("bgpStepDetail");
    if (el) el.innerHTML = "<b>" + esc(d.name) + "</b><br>" + esc(d.detail);
  }

  /* ---------- Cheat sheet (slide 27) ---------- */
  function renderCheat6() {
    var g = $("cheatGrid6");
    if (!g) return;
    g.innerHTML = D.ch6.cheat.map(function (c) {
      return '<div class="cheat-item"><span class="term">' + esc(c.term) + '</span><span class="arrow">→</span><span class="def">' + esc(c.def) + "</span></div>";
    }).join("");
  }

  /* ---------- Quiz 6 (slide 28 · 12 ข้อ) ---------- */
  function quiz6Score() {
    var sc = 0;
    D.ch6.quiz.forEach(function (q, j) { if (state.quiz6.answers[j] === q.correct) sc++; });
    return sc;
  }
  function renderQuiz6() {
    var el = $("quizC6");
    if (!el) return;
    var qs = D.ch6.quiz;
    var allAnswered = qs.every(function (_, j) { return state.quiz6.answers[j] !== undefined; });
    if (allAnswered) { renderQuiz6Result(el, qs); return; }
    var qi = 0;
    for (var j = 0; j < qs.length; j++) { if (state.quiz6.answers[j] === undefined) { qi = j; break; } }
    renderQuiz6Question(qi, el, qs);
  }
  function renderQuiz6Question(qi, el, qs) {
    var q = qs[qi];
    var chosen = state.quiz6.answers[qi];
    var answered = chosen !== undefined;
    var opts = q.options.map(function (o, oi) {
      var cls = "quiz-option";
      if (answered) {
        cls += " locked";
        if (oi === q.correct) cls += " correct";
        else if (oi === chosen) cls += " incorrect";
      }
      return '<button class="' + cls + '" data-opt="' + oi + '"' + (answered ? " disabled" : "") + ">" +
        '<span class="opt-key">' + "ABCD"[oi] + '</span><span>' + esc(o) + "</span></button>";
    }).join("");

    el.innerHTML =
      '<div class="card fade-up" style="padding:26px">' +
      '<div class="flex items-center justify-between mb-3 wrap gap-2">' +
      '<span class="chip">ข้อที่ ' + (qi + 1) + " / " + qs.length + " · F2 · BOOK CH.5</span>" +
      '<span class="chip" style="border-color:rgba(56,189,248,.4)">คะแนนตอนนี้: ' + quiz6Score() + " / " + qs.length + "</span></div>" +
      "<h3 style='font-size:19px;line-height:1.5;margin-bottom:18px'>" + esc(q.q) + "</h3>" +
      '<div class="flex" style="flex-direction:column;gap:10px">' + opts + "</div>" +
      (answered
        ? '<div class="quiz-explanation mt-4">💡 ' + esc(q.explain) + "</div>" +
          '<div class="flex items-center gap-3 mt-5 wrap">' +
          (qi < qs.length - 1
            ? '<button class="btn btn-primary" id="q6Next">ข้อถัดไป <i data-lucide="arrow-right"></i></button>'
            : '<button class="btn btn-primary" id="q6Finish">ดูผลลัพธ์ <i data-lucide="flag"></i></button>') +
          "</div>"
        : '<div class="tip-box tip-note mt-4" style="margin-top:18px"><i data-lucide="lightbulb"></i><div><b>Hint</b>แยกให้ออกว่า Routing เป็น control plane และ Forwarding เป็น data plane; LS↔Dijkstra, DV↔Bellman-Ford</div></div>')
      + "</div>";
    icons();

    el.querySelectorAll(".quiz-option").forEach(function (b) {
      b.addEventListener("click", function () {
        var oi = parseInt(b.dataset.opt, 10);
        if (answered) return;
        state.quiz6.answers[qi] = oi;
        LS.set("cn_quiz6", state.quiz6);
        var correct = oi === q.correct;
        b.classList.add(correct ? "correct" : "incorrect");
        if (!correct) {
          qsa(".quiz-option", el).forEach(function (x) {
            if (parseInt(x.dataset.opt, 10) === q.correct) x.classList.add("correct");
          });
        }
        qsa(".quiz-option", el).forEach(function (x) { x.classList.add("locked"); x.setAttribute("disabled", "disabled"); });
        var exp = document.createElement("div");
        exp.className = "quiz-explanation mt-4";
        exp.innerHTML = (correct ? "✅ ถูกต้อง! " : "❌ ยังไม่ถูกนะ ") + "💡 " + esc(q.explain);
        el.querySelector(".quiz-option").closest("div.flex").insertAdjacentElement("afterend", exp);
        var nav = document.createElement("div");
        nav.className = "flex items-center gap-3 mt-5 wrap";
        nav.innerHTML = qi < qs.length - 1
          ? '<button class="btn btn-primary" id="q6Next">ข้อถัดไป <i data-lucide="arrow-right"></i></button>'
          : '<button class="btn btn-primary" id="q6Finish">ดูผลลัพธ์ <i data-lucide="flag"></i></button>';
        exp.insertAdjacentElement("afterend", nav);
        icons();
        bindQuiz6Nav();
        if (correct) toast("✅ ถูกต้อง!", 1200);
      });
    });
    bindQuiz6Nav();
  }
  function bindQuiz6Nav() {
    var n = $("q6Next");
    if (n) n.addEventListener("click", function () { renderQuiz6(); });
    var f = $("q6Finish");
    if (f) f.addEventListener("click", function () { renderQuiz6(); });
    var r = $("q6Retry");
    if (r) r.addEventListener("click", function () {
      state.quiz6.answers = {};
      LS.set("cn_quiz6", state.quiz6);
      renderQuiz6();
    });
  }
  function renderQuiz6Result(el, qs) {
    var sc = quiz6Score();
    var pct = Math.round((sc / qs.length) * 100);
    var msg = sc === qs.length ? "Perfect! เก่งมาก! 🏆"
      : sc >= qs.length - 2 ? "Excellent! เกือบเต็มแล้ว! 💪"
      : sc >= Math.ceil(qs.length / 2) ? "Good job! ทบทวนอีกนิดก็เพอร์เฟกต์ ✨"
      : "ยังไม่ผ่าน — ย้อนกลับไปทบทวนสไลด์แล้วลองใหม่นะ 📚";
    var ring = 2 * Math.PI * 62;
    var offset = ring - (sc / qs.length) * ring;
    if (state.best === null || sc > state.best) {
      state.best = sc;
      LS.set("cn_best_" + state.chapter, state.best);
    }
    el.innerHTML =
      '<div class="card center fade-up" style="padding:34px 26px">' +
      '<div class="score-ring"><svg width="150" height="150" viewBox="0 0 150 150">' +
      '<defs><linearGradient id="ringGrad6" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0%" stop-color="#2563eb"/><stop offset="100%" stop-color="#22d3ee"/></linearGradient></defs>' +
      '<circle class="ring-bg" cx="75" cy="75" r="62" fill="none" stroke-width="12"/>' +
      '<circle class="ring-fill" id="ringC6" cx="75" cy="75" r="62" fill="none" stroke-width="12" stroke-linecap="round" ' +
      'style="stroke:url(#ringGrad6)" stroke-dasharray="' + ring + '" stroke-dashoffset="' + ring + '"/></svg>' +
      '<div class="ring-num">' + sc + "/" + qs.length + "</div></div>" +
      "<p class='mt-3 text-2' style='font-weight:700'>" + pct + "% · " + msg + "</p>" +
      '<p class="text-3 mt-2" style="font-size:13px">คะแนนดีที่สุด: <b class="cyan">' + (state.best === null ? "–" : state.best + "/" + qs.length) + "</b></p>" +
      '<div class="flex items-center gap-3 mt-5 wrap" style="justify-content:center">' +
      '<button class="btn btn-ghost" id="q6Retry"><i data-lucide="rotate-ccw"></i> ทำใหม่ทั้งชุด</button>' +
      '<button class="btn btn-primary" id="q6ToCards"><i data-lucide="square-stack"></i> ไปการ์ดทบทวน</button>' +
      "</div></div>";
    icons();
    setTimeout(function () {
      var rf = $("ringC6");
      if (rf) rf.style.strokeDashoffset = offset;
    }, 120);
    bindQuiz6Nav();
    var cards = $("q6ToCards");
    if (cards) cards.addEventListener("click", function () { goTo(state.current + 1, 1); });
  }

  /* ---------- Flashcards 6 (slide 29) ---------- */
  var fc6 = { order: [], idx: 0 };
  function fc6Shuffle() {
    fc6.order = D.ch6.flashcards.map(function (_, i) { return i; });
    for (var i = fc6.order.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = fc6.order[i]; fc6.order[i] = fc6.order[j]; fc6.order[j] = t;
    }
    fc6.idx = 0;
  }
  function fc6Render() {
    if (!fc6.order.length) fc6Shuffle();
    var card = D.ch6.flashcards[fc6.order[fc6.idx]];
    if (!card) return;
    $("fcQ6").textContent = card.q;
    $("fcA6").textContent = card.a;
    $("fcCounter6").textContent = (fc6.idx + 1) + " / " + D.ch6.flashcards.length;
  }
  function fc6Flip() { $("flashcard6").classList.toggle("flipped"); }
  function fc6Step(d) {
    fc6.idx = (fc6.idx + d + D.ch6.flashcards.length) % D.ch6.flashcards.length;
    fc6Render();
    $("flashcard6").classList.remove("flipped");
  }

  /* ---------- Glossary 6 (slide 30) ---------- */
  function renderGlossary6(filter) {
    var list = $("glossaryList6");
    if (!list) return;
    var term = (filter || "").toLowerCase().trim();
    var items = D.ch6.glossary.filter(function (g) {
      return g.term.toLowerCase().indexOf(term) !== -1 || g.def.toLowerCase().indexOf(term) !== -1;
    });
    $("glossaryCount6").textContent = items.length + " คำศัพท์";
    list.innerHTML = items.map(function (g) {
      return '<div class="gloss-item" data-term="' + esc(g.term) + '" role="button" tabindex="0" aria-expanded="false">' +
        "<div><b>" + esc(g.term) + '</b><div class="g-def" style="display:none">' + esc(g.def) + "</div></div>" +
        '<i data-lucide="chevron-down" class="g-chev"></i></div>';
    }).join("");
    icons();
  }

  /* ==========================================================================
     FINAL F3 — The Link Layer and LANs
     ========================================================================== */
  var parity7State = { grid: [], row: [], col: [] };

  function parity7Reset() {
    var p = D.ch7.parity;
    parity7State.grid = p.rows.map(function (r) { return r.slice(); });
    parity7State.row = p.rowParity.slice();
    parity7State.col = p.colParity.slice();
    parity7Render();
  }

  function parity7ComputeRow(r) {
    return parity7State.grid[r].reduce(function (a, b) { return a ^ b; }, 0);
  }
  function parity7ComputeCol(c) {
    return parity7State.grid.reduce(function (a, row) { return a ^ row[c]; }, 0);
  }

  function parity7Render() {
    var g = $("parityGrid7");
    if (!g) return;
    var badRows = [], badCols = [];
    var html = '<table class="parity-grid"><thead><tr><th></th>';
    for (var c = 0; c < 5; c++) html += "<th>c" + (c + 1) + "</th>";
    html += "<th>row parity</th></tr></thead><tbody>";
    for (var r = 0; r < 4; r++) {
      var rp = parity7ComputeRow(r);
      var rowBad = rp !== parity7State.row[r];
      if (rowBad) badRows.push(r);
      html += '<tr><th>r' + (r + 1) + "</th>";
      for (var cc = 0; cc < 5; cc++) {
        html += '<td><button class="pbit' + (parity7State.grid[r][cc] ? " on" : "") +
          '" data-pr="' + r + '" data-pc="' + cc + '" aria-label="บิต r' + (r + 1) + ' c' + (cc + 1) + '">' +
          parity7State.grid[r][cc] + "</button></td>";
      }
      html += '<td class="parity-out' + (rowBad ? " bad" : "") + '">' + parity7State.row[r] + "</td></tr>";
    }
    html += '<tr class="parity-bottom"><th>col parity</th>';
    for (var c2 = 0; c2 < 5; c2++) {
      var cp = parity7ComputeCol(c2);
      var colBad = cp !== parity7State.col[c2];
      if (colBad) badCols.push(c2);
      html += '<td class="parity-out' + (colBad ? " bad" : "") + '">' + parity7State.col[c2] + "</td>";
    }
    html += '<td class="parity-out">0</td></tr></tbody></table>';
    g.innerHTML = html;

    var info = $("parityInfo7");
    if (!info) return;
    if (!badRows.length && !badCols.length) {
      info.className = "lpm-result ok";
      info.innerHTML = "<b>parity ตรงทั้งหมด</b> — ไม่พบ error จาก parity รอบนี้ (แต่ error บางรูปแบบอาจหลุดได้)";
    } else if (badRows.length === 1 && badCols.length === 1) {
      info.className = "lpm-result";
      info.innerHTML = "<b>ผิดที่แถว r" + (badRows[0] + 1) + " และคอลัมน์ c" + (badCols[0] + 1) +
        "</b> — ตัดกันที่ (" + (badRows[0] + 1) + "," + (badCols[0] + 1) + ") จึงแก้ single-bit error ได้";
    } else {
      info.className = "lpm-result";
      info.innerHTML = "<b>ตรวจพบ parity ผิด " + badRows.length + " แถว · " + badCols.length +
        " คอลัมน์</b> — หลายตำแหน่ง ممکنทำให้ parity ผิดแบบนี้ จึงตรวจพบแต่ยังระบุตำแหน่งเพื่อแก้ไม่ได้";
    }
  }

  function parity7Toggle(r, c) {
    parity7State.grid[r][c] ^= 1;
    parity7Render();
  }

  /* ---------- CRC step table (slide 11) ---------- */
  function renderCrc7() {
    var g = $("crcRows7");
    if (!g) return;
    g.innerHTML = D.ch7.crcSteps.map(function (d, i) {
      return '<tr class="crc-row' + (i === 0 ? " active" : "") + '" data-crc="' + i + '" tabindex="0">' +
        "<td>" + esc(d.key) + "</td><td class=\"mono\">" + esc(d.window) + "</td><td>" + esc(d.left) +
        "</td><td>" + esc(d.xor) + "</td><td class=\"mono\">" + esc(d.result) + "</td></tr>";
    }).join("");
  }
  function selectCrc7(i) {
    var d = D.ch7.crcSteps[i];
    if (!d) return;
    qsa("#crcRows7 .crc-row").forEach(function (tr) { tr.classList.toggle("active", parseInt(tr.dataset.crc, 10) === i); });
    var el = $("crcDetail7");
    if (el) el.innerHTML = "<b>ขั้น: " + esc(d.key) + "</b> · Window = <span class=\"mono\">" + esc(d.window) +
      "</span> · บิตซ้ายสุด = <b>" + esc(d.left) + "</b> · XOR กับ G หรือไม่ = <b>" + esc(d.xor) +
      "</b> · ผล = <span class=\"mono\">" + esc(d.result) + "</span>";
  }

  /* ---------- Backoff (slide 18) ---------- */
  function renderBackoff7() {
    var g = $("backoffTabs7");
    if (!g) return;
    g.innerHTML = D.ch7.backoff.map(function (d, i) {
      return '<button class="dhcp-step' + (i === 0 ? " active" : "") + '" data-backoff="' + i + '">' +
        '<span class="n">หลังชนครั้งที่</span><b>' + esc(d.m) + "</b><span>K ∈ 0–" + (d.count - 1) + "</span></button>";
    }).join("");
  }
  function selectBackoff7(i) {
    var d = D.ch7.backoff[i];
    if (!d) return;
    qsa("#backoffTabs7 .dhcp-step").forEach(function (b) { b.classList.toggle("active", parseInt(b.dataset.backoff, 10) === i); });
    var el = $("backoffDetail7");
    if (el) el.innerHTML = "<b>m = " + esc(d.m) + "</b> · K ∈ {" + esc(d.range) + "} · เลือกได้ " + esc(d.count) +
      " ค่า · รอ <b>K × 512 bit times</b>" + (d.m === "> 10" ? " (cap ที่ 1023)" : "");
  }

  /* ---------- Ethernet frame fields (slide 21) ---------- */
  function renderEthFields7() {
    var g = $("ethFieldTabs7");
    if (!g) return;
    g.innerHTML = D.ch7.ethFields.map(function (f, i) {
      return '<button class="tab-btn' + (i === 0 ? " active" : "") + '" data-eth="' + i + '" role="tab">' +
        esc(f.field) + " · " + esc(f.size) + "</button>";
    }).join("");
  }
  function selectEthField7(i) {
    var f = D.ch7.ethFields[i];
    if (!f) return;
    qsa("#ethFieldTabs7 .tab-btn").forEach(function (b) { b.classList.toggle("active", parseInt(b.dataset.eth, 10) === i); });
    var el = $("ethFieldDetail7");
    if (el) el.innerHTML = "<b>" + esc(f.field) + "</b> <span class=\"chip\" style=\"margin-left:6px\">" + esc(f.size) + "</span><br>" + esc(f.detail);
  }

  /* ---------- ARP steps (slide 26) ---------- */
  function renderArp7() {
    var g = $("arpSteps7");
    if (!g) return;
    g.innerHTML = D.ch7.arpSteps.map(function (d, i) {
      return '<button class="dhcp-step' + (i === 0 ? " active" : "") + '" data-arp="' + i + '">' +
        '<span class="n">ขั้นที่ ' + esc(d.key) + '</span><b>' + esc(d.name) + "</b></button>";
    }).join("");
  }
  function selectArp7(i) {
    var d = D.ch7.arpSteps[i];
    if (!d) return;
    qsa("#arpSteps7 .dhcp-step").forEach(function (b) { b.classList.toggle("active", parseInt(b.dataset.arp, 10) === i); });
    var el = $("arpDetail7");
    if (el) el.innerHTML = "<b>" + esc(d.name) + "</b><br>" + esc(d.detail);
  }

  /* ---------- Switch self-learning simulation (slide 30) ---------- */
  function renderSwitch7() {
    var g = $("switchSteps7");
    if (!g) return;
    g.innerHTML = D.ch7.switchSteps.map(function (d, i) {
      return '<button class="dhcp-step' + (i === 0 ? " active" : "") + '" data-switch="' + i + '">' +
        '<span class="n">ลำดับ ' + esc(d.key) + '</span><b>' + esc(d.event) + "</b>" +
        "<span>เรียน: " + esc(d.learn) + "</span></button>";
    }).join("");
    selectSwitch7(0);
  }
  function selectSwitch7(i) {
    var d = D.ch7.switchSteps[i];
    if (!d) return;
    qsa("#switchSteps7 .dhcp-step").forEach(function (b) { b.classList.toggle("active", parseInt(b.dataset.switch, 10) === i); });
    var el = $("switchDetail7");
    if (el) el.innerHTML = "<b>" + esc(d.event) + "</b><br>" +
      "เรียน: " + esc(d.learn) + " · รู้ destination? " + esc(d.known) + "<br>" +
      "การกระทำ: <b>" + esc(d.action) + "</b>";
    var tbl = $("switchTable7");
    if (tbl) {
      tbl.innerHTML = d.table.split(",").map(function (x) {
        return '<span class="chip mono">' + esc(x.trim()) + "</span>";
      }).join(" ");
    }
  }

  /* ---------- Cheat sheet (slide 36) ---------- */
  function renderCheat7() {
    var g = $("cheatGrid7");
    if (!g) return;
    g.innerHTML = D.ch7.cheat.map(function (c) {
      return '<div class="cheat-item"><span class="term">' + esc(c.term) + '</span><span class="arrow">→</span><span class="def">' + esc(c.def) + "</span></div>";
    }).join("");
  }

  /* ---------- Quiz 7 (slide 37 · 12 ข้อ) ---------- */
  function quiz7Score() {
    var sc = 0;
    D.ch7.quiz.forEach(function (q, j) { if (state.quiz7.answers[j] === q.correct) sc++; });
    return sc;
  }
  function renderQuiz7() {
    var el = $("quiz7");
    if (!el) return;
    var qs = D.ch7.quiz;
    var allAnswered = qs.every(function (_, j) { return state.quiz7.answers[j] !== undefined; });
    if (allAnswered) { renderQuiz7Result(el, qs); return; }
    var qi = 0;
    for (var j = 0; j < qs.length; j++) { if (state.quiz7.answers[j] === undefined) { qi = j; break; } }
    renderQuiz7Question(qi, el, qs);
  }
  function renderQuiz7Question(qi, el, qs) {
    var q = qs[qi];
    var chosen = state.quiz7.answers[qi];
    var answered = chosen !== undefined;
    var opts = q.options.map(function (o, oi) {
      var cls = "quiz-option";
      if (answered) {
        cls += " locked";
        if (oi === q.correct) cls += " correct";
        else if (oi === chosen) cls += " incorrect";
      }
      return '<button class="' + cls + '" data-opt="' + oi + '"' + (answered ? " disabled" : "") + ">" +
        '<span class="opt-key">' + "ABCD"[oi] + '</span><span>' + esc(o) + "</span></button>";
    }).join("");

    el.innerHTML =
      '<div class="card fade-up" style="padding:26px">' +
      '<div class="flex items-center justify-between mb-3 wrap gap-2">' +
      '<span class="chip">ข้อที่ ' + (qi + 1) + " / " + qs.length + " · F3 · BOOK CH.6</span>" +
      '<span class="chip" style="border-color:rgba(56,189,248,.4)">คะแนนตอนนี้: ' + quiz7Score() + " / " + qs.length + "</span></div>" +
      "<h3 style='font-size:19px;line-height:1.5;margin-bottom:18px'>" + esc(q.q) + "</h3>" +
      '<div class="flex" style="flex-direction:column;gap:10px">' + opts + "</div>" +
      (answered
        ? '<div class="quiz-explanation mt-4">💡 ' + esc(q.explain) + "</div>" +
          '<div class="flex items-center gap-3 mt-5 wrap">' +
          (qi < qs.length - 1
            ? '<button class="btn btn-primary" id="q7Next">ข้อถัดไป <i data-lucide="arrow-right"></i></button>'
            : '<button class="btn btn-primary" id="q7Finish">ดูผลลัพธ์ <i data-lucide="flag"></i></button>') +
          "</div>"
        : '<div class="tip-box tip-note mt-4" style="margin-top:18px"><i data-lucide="lightbulb"></i><div><b>Hint</b>ทบทวน 6 หัวข้อ: link services, parity/CRC, multiple access, Ethernet/MAC/ARP, switch learning และ VLAN 802.1Q</div></div>')
      + "</div>";
    icons();

    el.querySelectorAll(".quiz-option").forEach(function (b) {
      b.addEventListener("click", function () {
        var oi = parseInt(b.dataset.opt, 10);
        if (answered) return;
        state.quiz7.answers[qi] = oi;
        LS.set("cn_quiz7", state.quiz7);
        var correct = oi === q.correct;
        b.classList.add(correct ? "correct" : "incorrect");
        if (!correct) {
          qsa(".quiz-option", el).forEach(function (x) {
            if (parseInt(x.dataset.opt, 10) === q.correct) x.classList.add("correct");
          });
        }
        qsa(".quiz-option", el).forEach(function (x) { x.classList.add("locked"); x.setAttribute("disabled", "disabled"); });
        var exp = document.createElement("div");
        exp.className = "quiz-explanation mt-4";
        exp.innerHTML = (correct ? "✅ ถูกต้อง! " : "❌ ยังไม่ถูกนะ ") + "💡 " + esc(q.explain);
        el.querySelector(".quiz-option").closest("div.flex").insertAdjacentElement("afterend", exp);
        var nav = document.createElement("div");
        nav.className = "flex items-center gap-3 mt-5 wrap";
        nav.innerHTML = qi < qs.length - 1
          ? '<button class="btn btn-primary" id="q7Next">ข้อถัดไป <i data-lucide="arrow-right"></i></button>'
          : '<button class="btn btn-primary" id="q7Finish">ดูผลลัพธ์ <i data-lucide="flag"></i></button>';
        exp.insertAdjacentElement("afterend", nav);
        icons();
        bindQuiz7Nav();
        if (correct) toast("✅ ถูกต้อง!", 1200);
      });
    });
    bindQuiz7Nav();
  }
  function bindQuiz7Nav() {
    var n = $("q7Next");
    if (n) n.addEventListener("click", function () { renderQuiz7(); });
    var f = $("q7Finish");
    if (f) f.addEventListener("click", function () { renderQuiz7(); });
    var r = $("q7Retry");
    if (r) r.addEventListener("click", function () {
      state.quiz7.answers = {};
      LS.set("cn_quiz7", state.quiz7);
      renderQuiz7();
    });
  }
  function renderQuiz7Result(el, qs) {
    var sc = quiz7Score();
    var pct = Math.round((sc / qs.length) * 100);
    var msg = sc === qs.length ? "Perfect! คะแนนเต็ม เก่งมาก! 🏆"
      : sc >= qs.length - 2 ? "Excellent! เกือบเต็มแล้ว! 💪"
      : sc >= Math.ceil(qs.length / 2) ? "Good job! ทบทวนอีกนิดก็เพอร์เฟกต์ ✨"
      : "ยังไม่ผ่าน — ย้อนกลับไปทบทวนสไลด์แล้วลองใหม่นะ 📚";
    if (state.best === null || sc > state.best) {
      state.best = sc;
      LS.set("cn_best_" + state.chapter, state.best);
    }
    var ring = 2 * Math.PI * 62;
    var offset = ring - (sc / qs.length) * ring;
    el.innerHTML =
      '<div class="card center fade-up" style="padding:34px 26px">' +
      '<div class="score-ring"><svg width="150" height="150" viewBox="0 0 150 150">' +
      '<defs><linearGradient id="ringGrad7" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0%" stop-color="#2563eb"/><stop offset="100%" stop-color="#22d3ee"/></linearGradient></defs>' +
      '<circle class="ring-bg" cx="75" cy="75" r="62" fill="none" stroke-width="12"/>' +
      '<circle class="ring-fill" id="ringC7" cx="75" cy="75" r="62" fill="none" stroke-width="12" stroke-linecap="round" ' +
      'style="stroke:url(#ringGrad7)" stroke-dasharray="' + ring + '" stroke-dashoffset="' + ring + '"/></svg>' +
      '<div class="ring-num">' + sc + "/" + qs.length + "</div></div>" +
      "<p class='mt-3 text-2' style='font-weight:700'>" + pct + "% · " + msg + "</p>" +
      '<p class="text-3 mt-2" style="font-size:13px">คะแนนดีที่สุดของบทนี้: <b class="cyan">' + (state.best === null ? "–" : state.best + "/" + qs.length) + "</b></p>" +
      '<div class="flex items-center gap-3 mt-5 wrap" style="justify-content:center">' +
      '<button class="btn btn-ghost" id="q7Retry"><i data-lucide="rotate-ccw"></i> ทำใหม่อีกครั้ง</button>' +
      '<button class="btn btn-primary" id="q7ToCards"><i data-lucide="square-stack"></i> ไปที่การ์ดทบทวน</button>' +
      "</div></div>";
    icons();
    setTimeout(function () {
      var rf = $("ringC7");
      if (rf) rf.style.strokeDashoffset = offset;
    }, 120);
    bindQuiz7Nav();
    var cards = $("q7ToCards");
    if (cards) cards.addEventListener("click", function () {
      var ci = -1;
      ch().slides.forEach(function (s, i) { if (s.title.indexOf("Flashcards") !== -1) ci = i; });
      if (ci !== -1) goTo(ch().start + ci, 1);
    });
  }

  /* ---------- Flashcards 7 (slide 38) ---------- */
  var fc7 = { order: [], idx: 0 };
  function fc7Shuffle() {
    fc7.order = D.ch7.flashcards.map(function (_, i) { return i; });
    for (var i = fc7.order.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = fc7.order[i]; fc7.order[i] = fc7.order[j]; fc7.order[j] = t;
    }
    fc7.idx = 0;
  }
  function fc7Render() {
    if (!fc7.order.length) fc7Shuffle();
    var card = D.ch7.flashcards[fc7.order[fc7.idx]];
    if (!card) return;
    $("fcQ7").textContent = card.q;
    $("fcA7").textContent = card.a;
    $("fcCounter7").textContent = (fc7.idx + 1) + " / " + D.ch7.flashcards.length;
  }
  function fc7Flip() { $("flashcard7").classList.toggle("flipped"); }
  function fc7Step(d) {
    fc7.idx = (fc7.idx + d + D.ch7.flashcards.length) % D.ch7.flashcards.length;
    fc7Render();
    $("flashcard7").classList.remove("flipped");
  }

  /* ---------- Glossary 7 (slide 39) ---------- */
  function renderGlossary7(filter) {
    var list = $("glossaryList7");
    if (!list) return;
    var term = (filter || "").toLowerCase().trim();
    var items = D.ch7.glossary.filter(function (g) {
      return g.term.toLowerCase().indexOf(term) !== -1 || g.def.toLowerCase().indexOf(term) !== -1;
    });
    $("glossaryCount7").textContent = items.length + " คำศัพท์";
    list.innerHTML = items.map(function (g) {
      return '<div class="gloss-item" data-term="' + esc(g.term) + '" role="button" tabindex="0" aria-expanded="false">' +
        "<div><b>" + esc(g.term) + '</b><div class="g-def" style="display:none">' + esc(g.def) + "</div></div>" +
        '<i data-lucide="chevron-down" class="g-chev"></i></div>';
    }).join("");
    icons();
  }

  /* ==========================================================================
     FINAL F4 — Wireless and Mobile Networks
     ========================================================================== */

  /* ---------- dBm power selector (slide 10) ---------- */
  function renderDbm8() {
    var g = $("dbmPick8");
    if (!g) return;
    g.innerHTML = D.ch8.dbm.map(function (d, i) {
      return '<button class="dbm-btn' + (i === 0 ? " active" : "") + '" data-dbm="' + i + '">' + esc(d.label) + "</button>";
    }).join("");
    selectDbm8(0);
  }
  function selectDbm8(i) {
    var d = D.ch8.dbm[i];
    if (!d) return;
    qsa("#dbmPick8 .dbm-btn").forEach(function (b) { b.classList.toggle("active", parseInt(b.dataset.dbm, 10) === i); });
    var out = $("dbmOut8");
    if (out) out.textContent = d.mw;
    var note = $("dbmNote8");
    if (note) note.textContent = d.note;
  }

  /* ---------- Shannon calculator (slide 13) ---------- */
  function updateShannon8() {
    var b = $("shB8"), s = $("shSnr8");
    if (!b || !s) return;
    var Bmhz = parseFloat(b.value);
    var snrDb = parseFloat(s.value);
    var linear = Math.pow(10, snrDb / 10);
    var c = Bmhz * 1e6 * Math.log2(1 + linear);
    var cap = c >= 1e9 ? (c / 1e9).toFixed(2) + " Gbps" : Math.round(c / 1e6) + " Mbps";
    var bv = $("shBVal8"), sv = $("shSnrVal8");
    if (bv) bv.textContent = Bmhz + " MHz";
    if (sv) sv.textContent = snrDb + " dB";
    var out = $("shOut8");
    if (out) out.textContent = cap;
    var detail = $("shDetail8");
    if (detail) detail.textContent = "B = " + Bmhz + " MHz · SNR = " + snrDb + " dB → S/N = " + linear.toFixed(2) + " (linear) · C ≈ " + cap;
  }

  /* ---------- CSMA/CA vs RTS/CTS (slide 20) ---------- */
  function renderCsma8() {
    var g = $("csmaTabs8");
    if (!g) return;
    g.innerHTML = D.ch8.csmaModes.map(function (m, i) {
      return '<button class="tab-btn' + (i === 0 ? " active" : "") + '" data-csma="' + i + '" role="tab">' + esc(m.name) + "</button>";
    }).join("");
    selectCsma8(0);
  }
  function selectCsma8(i) {
    var m = D.ch8.csmaModes[i];
    if (!m) return;
    qsa("#csmaTabs8 .tab-btn").forEach(function (b) { b.classList.toggle("active", parseInt(b.dataset.csma, 10) === i); });
    var sum = $("csmaSummary8");
    if (sum) sum.textContent = m.summary;
    var list = $("csmaSteps8");
    if (list) list.innerHTML = m.steps.map(function (s) {
      return '<div class="csma-step"><span class="n">' + esc(s.n) + '</span><div><b>' + esc(s.label) + '</b><p>' + esc(s.detail) + "</p></div></div>";
    }).join("");
    var note = $("csmaNote8");
    if (note) note.textContent = m.note;
  }

  /* ---------- 802.11 frame fields (slide 21) ---------- */
  function renderFrame8() {
    var g = $("frameStrip8");
    if (!g) return;
    g.innerHTML = D.ch8.frameFields.map(function (f, i) {
      var cls = "frame-seg";
      if (f.field.indexOf("Address") === 0) cls += " addr";
      if (f.field === "Payload") cls += " payload";
      if (f.field === "CRC") cls += " crc";
      return '<button class="' + cls + '" data-frame="' + i + '"><b>' + esc(f.field) + "</b><span>" + esc(f.size) + "</span></button>";
    }).join("");
    selectFrame8(0);
  }
  function selectFrame8(i) {
    var f = D.ch8.frameFields[i];
    if (!f) return;
    qsa("#frameStrip8 .frame-seg").forEach(function (b) { b.classList.toggle("active", parseInt(b.dataset.frame, 10) === i); });
    var el = $("frameDetail8");
    if (el) el.innerHTML = "<b>" + esc(f.field) + '</b> <span class="chip" style="margin-left:6px">' + esc(f.size) + "</span><br>" + esc(f.detail);
  }

  /* ---------- Discovery: beacon vs probe (slide 24) ---------- */
  function renderDiscovery8() {
    var g = $("discTabs8");
    if (!g) return;
    g.innerHTML = D.ch8.discoveryModes.map(function (m, i) {
      return '<button class="tab-btn' + (i === 0 ? " active" : "") + '" data-disc="' + i + '" role="tab">' + esc(m.name) + "</button>";
    }).join("");
    selectDiscovery8(0);
  }
  function selectDiscovery8(i) {
    var m = D.ch8.discoveryModes[i];
    if (!m) return;
    qsa("#discTabs8 .tab-btn").forEach(function (b) { b.classList.toggle("active", parseInt(b.dataset.disc, 10) === i); });
    var lab = $("discLabel8");
    if (lab) lab.textContent = m.label;
    var steps = $("discSteps8");
    if (steps) steps.innerHTML = m.steps.map(function (s, j) {
      return '<div class="disc-step"><i>' + (j + 1) + "</i><span>" + esc(s) + "</span></div>";
    }).join("");
    var sum = $("discSummary8");
    if (sum) sum.textContent = m.summary;
    var tr = $("discTradeoff8");
    if (tr) tr.textContent = m.tradeoff;
  }

  /* ---------- 5G handover steps (slide 34) ---------- */
  function renderHandover8() {
    var g = $("hoSteps8");
    if (!g) return;
    g.innerHTML = D.ch8.handoverSteps.map(function (d, i) {
      return '<button class="dhcp-step' + (i === 0 ? " active" : "") + '" data-ho="' + i + '">' +
        '<span class="n">ขั้นที่ ' + esc(d.n) + '</span><b>' + esc(d.name) + "</b></button>";
    }).join("");
    selectHandover8(0);
  }
  function selectHandover8(i) {
    var d = D.ch8.handoverSteps[i];
    if (!d) return;
    qsa("#hoSteps8 .dhcp-step").forEach(function (b) { b.classList.toggle("active", parseInt(b.dataset.ho, 10) === i); });
    var el = $("hoDetail8");
    if (el) el.innerHTML = "<b>" + esc(d.n) + " · " + esc(d.name) + "</b><br>" + esc(d.detail);
  }

  /* ==========================================================================
     FINAL F5 — Security
     ========================================================================== */

  /* ---------- Encryption / Decryption stepper (slide 7) ---------- */
  function renderEnc9() {
    var g = $("encTabs9");
    if (!g) return;
    g.innerHTML = D.ch9.encSteps.map(function (d, i) {
      return '<button class="tab-btn' + (i === 0 ? " active" : "") + '" data-enc="' + i + '" role="tab">' + esc(d.label) + "</button>";
    }).join("");
    selectEnc9(0);
  }
  function selectEnc9(i) {
    var d = D.ch9.encSteps[i];
    if (!d) return;
    qsa("#encTabs9 .tab-btn").forEach(function (b) { b.classList.toggle("active", parseInt(b.dataset.enc, 10) === i); });
    var t = $("encTitle9"); if (t) t.textContent = d.title;
    var de = $("encDetail9"); if (de) de.textContent = d.detail;
    var v = $("encValue9"); if (v) v.textContent = d.value;
  }

  /* ---------- RSA key-generation stepper (slide 16) ---------- */
  function renderRsa9() {
    var g = $("rsaSteps9");
    if (!g) return;
    g.innerHTML = D.ch9.rsaSteps.map(function (d, i) {
      return '<button class="dhcp-step' + (i === 0 ? " active" : "") + '" data-rsa="' + i + '">' +
        '<span class="n">ขั้นที่ ' + esc(d.n) + "</span><b>" + esc(d.title) + "</b></button>";
    }).join("");
    selectRsa9(0);
  }
  function selectRsa9(i) {
    var d = D.ch9.rsaSteps[i];
    if (!d) return;
    qsa("#rsaSteps9 .dhcp-step").forEach(function (b) { b.classList.toggle("active", parseInt(b.dataset.rsa, 10) === i); });
    var t = $("rsaStepTitle9"); if (t) t.textContent = d.n + " · " + d.title;
    var de = $("rsaStepDetail9"); if (de) de.textContent = d.detail;
  }

  /* ---------- Authentication protocol tabs ap1.0–ap5.0 (slide 20) ---------- */
  function renderAuth9() {
    var g = $("authTabs9");
    if (!g) return;
    g.innerHTML = D.ch9.authTabs.map(function (m, i) {
      return '<button class="tab-btn' + (i === 0 ? " active" : "") + '" data-auth="' + i + '" role="tab">' + esc(m.name) + "</button>";
    }).join("");
    selectAuth9(0);
  }
  function selectAuth9(i) {
    var m = D.ch9.authTabs[i];
    if (!m) return;
    qsa("#authTabs9 .tab-btn").forEach(function (b) { b.classList.toggle("active", parseInt(b.dataset.auth, 10) === i); });
    var r = $("authResult9"); if (r) r.textContent = m.name + " · " + m.result;
    var q = $("authQuestion9"); if (q) q.textContent = m.question;
    var f = $("authFlaw9"); if (f) f.textContent = m.flaw;
    var d = $("authDetail9"); if (d) d.textContent = m.detail;
  }

  /* ---------- Internet checksum collision demo (slide 25) ---------- */
  function selectHash9(i) {
    var h = D.ch9.hashDemo;
    if (!h) return;
    qsa("#hashTabs9 .tab-btn").forEach(function (b) { b.classList.toggle("active", parseInt(b.dataset.hash, 10) === i); });
    var m = $("hashMsg9"); if (m) m.textContent = i === 0 ? h.m1 : h.m2;
    var a = $("hashAscii9"); if (a) a.textContent = i === 0 ? h.ascii1 : h.ascii2;
    var s = $("hashSum9"); if (s) s.textContent = h.sum;
  }

  /* ---------- TLS 1.3 handshake stepper (slide 31) ---------- */
  function renderTls9() {
    var g = $("tlsSteps9");
    if (!g) return;
    g.innerHTML = D.ch9.tlsSteps.map(function (d, i) {
      return '<button class="dhcp-step' + (i === 0 ? " active" : "") + '" data-tls="' + i + '">' +
        '<span class="n">ขั้นที่ ' + esc(d.n) + "</span><b>" + esc(d.title) + "</b></button>";
    }).join("");
    selectTls9(0);
  }
  function selectTls9(i) {
    var d = D.ch9.tlsSteps[i];
    if (!d) return;
    qsa("#tlsSteps9 .dhcp-step").forEach(function (b) { b.classList.toggle("active", parseInt(b.dataset.tls, 10) === i); });
    var t = $("tlsStepTitle9"); if (t) t.textContent = d.n + " · " + d.title;
    var de = $("tlsStepDetail9"); if (de) de.textContent = d.detail;
  }

  /* ---------- Attack taxonomy tabs (slide 33) ---------- */
  function renderAttack9() {
    var g = $("attackTabs9");
    if (!g) return;
    g.innerHTML = D.ch9.attacks.map(function (m, i) {
      return '<button class="tab-btn' + (i === 0 ? " active" : "") + '" data-attack="' + i + '" role="tab">' + esc(m.name) + "</button>";
    }).join("");
    selectAttack9(0);
  }
  function selectAttack9(i) {
    var m = D.ch9.attacks[i];
    if (!m) return;
    qsa("#attackTabs9 .tab-btn").forEach(function (b) { b.classList.toggle("active", parseInt(b.dataset.attack, 10) === i); });
    var g = $("attackGoal9"); if (g) g.textContent = "Goal: " + m.goal;
    var n = $("attackName9"); if (n) n.textContent = m.name;
    var e = $("attackExample9"); if (e) e.textContent = m.example;
    var d = $("attackDefense9"); if (d) d.textContent = m.defense;
  }

  /* ---------- Cheat sheet 9 (slide 38) ---------- */
  function renderCheat9() {
    var g = $("cheatGrid9");
    if (!g) return;
    g.innerHTML = D.ch9.cheat.map(function (c) {
      return '<div class="cheat-item"><span class="term">' + esc(c.term) + '</span><span class="arrow">→</span><span class="def">' + esc(c.def) + "</span></div>";
    }).join("");
  }

  /* ---------- Quiz 9 (slide 39 · 12 ข้อ) ---------- */
  function quiz9Score() {
    var sc = 0;
    D.ch9.quiz.forEach(function (q, j) { if (state.quiz9.answers[j] === q.correct) sc++; });
    return sc;
  }
  function renderQuiz9() {
    var el = $("quiz9");
    if (!el) return;
    var qs = D.ch9.quiz;
    var allAnswered = qs.every(function (_, j) { return state.quiz9.answers[j] !== undefined; });
    if (allAnswered) { renderQuiz9Result(el, qs); return; }
    var qi = 0;
    for (var j = 0; j < qs.length; j++) { if (state.quiz9.answers[j] === undefined) { qi = j; break; } }
    renderQuiz9Question(qi, el, qs);
  }
  function renderQuiz9Question(qi, el, qs) {
    var q = qs[qi];
    var chosen = state.quiz9.answers[qi];
    var answered = chosen !== undefined;
    var opts = q.options.map(function (o, oi) {
      var cls = "quiz-option";
      if (answered) {
        cls += " locked";
        if (oi === q.correct) cls += " correct";
        else if (oi === chosen) cls += " incorrect";
      }
      return '<button class="' + cls + '" data-opt="' + oi + '"' + (answered ? " disabled" : "") + ">" +
        '<span class="opt-key">' + "ABCD"[oi] + '</span><span>' + esc(o) + "</span></button>";
    }).join("");

    el.innerHTML =
      '<div class="card fade-up" style="padding:26px">' +
      '<div class="flex items-center justify-between mb-3 wrap gap-2">' +
      '<span class="chip">ข้อที่ ' + (qi + 1) + " / " + qs.length + " · F5 · BOOK CH.8</span>" +
      '<span class="chip" style="border-color:rgba(56,189,248,.4)">คะแนนตอนนี้: ' + quiz9Score() + " / " + qs.length + "</span></div>" +
      "<h3 style='font-size:19px;line-height:1.5;margin-bottom:18px'>" + esc(q.q) + "</h3>" +
      '<div class="flex" style="flex-direction:column;gap:10px">' + opts + "</div>" +
      (answered
        ? '<div class="quiz-explanation mt-4">💡 ' + esc(q.explain) + "</div>" +
          '<div class="flex items-center gap-3 mt-5 wrap">' +
          (qi < qs.length - 1
            ? '<button class="btn btn-primary" id="q9Next">ข้อถัดไป <i data-lucide="arrow-right"></i></button>'
            : '<button class="btn btn-primary" id="q9Finish">ดูผลลัพธ์ <i data-lucide="flag"></i></button>') +
          "</div>"
        : '<div class="tip-box tip-note mt-4" style="margin-top:18px"><i data-lucide="lightbulb"></i><div><b>Hint</b>ทบทวน 7 หัวข้อ: security goals, symmetric/public-key, RSA, authentication/nonce, hash/integrity, digital signature + TLS และ attacks</div></div>')
      + "</div>";
    icons();

    el.querySelectorAll(".quiz-option").forEach(function (b) {
      b.addEventListener("click", function () {
        var oi = parseInt(b.dataset.opt, 10);
        if (answered) return;
        state.quiz9.answers[qi] = oi;
        LS.set("cn_quiz9", state.quiz9);
        var correct = oi === q.correct;
        b.classList.add(correct ? "correct" : "incorrect");
        if (!correct) {
          qsa(".quiz-option", el).forEach(function (x) {
            if (parseInt(x.dataset.opt, 10) === q.correct) x.classList.add("correct");
          });
        }
        qsa(".quiz-option", el).forEach(function (x) { x.classList.add("locked"); x.setAttribute("disabled", "disabled"); });
        var exp = document.createElement("div");
        exp.className = "quiz-explanation mt-4";
        exp.innerHTML = (correct ? "✅ ถูกต้อง! " : "❌ ยังไม่ถูกนะ ") + "💡 " + esc(q.explain);
        el.querySelector(".quiz-option").closest("div.flex").insertAdjacentElement("afterend", exp);
        var nav = document.createElement("div");
        nav.className = "flex items-center gap-3 mt-5 wrap";
        nav.innerHTML = qi < qs.length - 1
          ? '<button class="btn btn-primary" id="q9Next">ข้อถัดไป <i data-lucide="arrow-right"></i></button>'
          : '<button class="btn btn-primary" id="q9Finish">ดูผลลัพธ์ <i data-lucide="flag"></i></button>';
        exp.insertAdjacentElement("afterend", nav);
        icons();
        bindQuiz9Nav();
        if (correct) toast("✅ ถูกต้อง!", 1200);
      });
    });
    bindQuiz9Nav();
  }
  function bindQuiz9Nav() {
    var n = $("q9Next");
    if (n) n.addEventListener("click", function () { renderQuiz9(); });
    var f = $("q9Finish");
    if (f) f.addEventListener("click", function () { renderQuiz9(); });
    var r = $("q9Retry");
    if (r) r.addEventListener("click", function () {
      state.quiz9.answers = {};
      LS.set("cn_quiz9", state.quiz9);
      renderQuiz9();
    });
  }
  function renderQuiz9Result(el, qs) {
    var sc = quiz9Score();
    var pct = Math.round((sc / qs.length) * 100);
    var msg = sc === qs.length ? "Perfect! คะแนนเต็ม เก่งมาก! 🏆"
      : sc >= qs.length - 2 ? "Excellent! เกือบเต็มแล้ว! 💪"
      : sc >= Math.ceil(qs.length / 2) ? "Good job! ทบทวนอีกนิดก็เพอร์เฟกต์ ✨"
      : "ยังไม่ผ่าน — ย้อนกลับไปทบทวนสไลด์แล้วลองใหม่นะ 📚";
    if (state.best === null || sc > state.best) {
      state.best = sc;
      LS.set("cn_best_" + state.chapter, state.best);
    }
    var ring = 2 * Math.PI * 62;
    var offset = ring - (sc / qs.length) * ring;
    el.innerHTML =
      '<div class="card center fade-up" style="padding:34px 26px">' +
      '<div class="score-ring"><svg width="150" height="150" viewBox="0 0 150 150">' +
      '<defs><linearGradient id="ringGrad9" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0%" stop-color="#2563eb"/><stop offset="100%" stop-color="#22d3ee"/></linearGradient></defs>' +
      '<circle class="ring-bg" cx="75" cy="75" r="62" fill="none" stroke-width="12"/>' +
      '<circle class="ring-fill" id="ringC9" cx="75" cy="75" r="62" fill="none" stroke-width="12" stroke-linecap="round" ' +
      'style="stroke:url(#ringGrad9)" stroke-dasharray="' + ring + '" stroke-dashoffset="' + ring + '"/></svg>' +
      '<div class="ring-num">' + sc + "/" + qs.length + "</div></div>" +
      "<p class='mt-3 text-2' style='font-weight:700'>" + pct + "% · " + msg + "</p>" +
      '<p class="text-3 mt-2" style="font-size:13px">คะแนนดีที่สุดของบทนี้: <b class="cyan">' + (state.best === null ? "–" : state.best + "/" + qs.length) + "</b></p>" +
      '<div class="flex items-center gap-3 mt-5 wrap" style="justify-content:center">' +
      '<button class="btn btn-ghost" id="q9Retry"><i data-lucide="rotate-ccw"></i> ทำใหม่อีกครั้ง</button>' +
      '<button class="btn btn-primary" id="q9ToCards"><i data-lucide="square-stack"></i> ไปที่การ์ดทบทวน</button>' +
      "</div></div>";
    icons();
    setTimeout(function () {
      var rf = $("ringC9");
      if (rf) rf.style.strokeDashoffset = offset;
    }, 120);
    bindQuiz9Nav();
    var cards = $("q9ToCards");
    if (cards) cards.addEventListener("click", function () {
      var ci = -1;
      ch().slides.forEach(function (s, i) { if ((s.short === "Flashcards" || s.title.indexOf("Flashcards") !== -1 || s.title.indexOf("การ์ดทบทวน") !== -1)) ci = i; });
      if (ci !== -1) goTo(ch().start + ci, 1);
    });
  }

  /* ---------- Flashcards 9 (slide 40) ---------- */
  var fc9 = { order: [], idx: 0 };
  function fc9Shuffle() {
    fc9.order = D.ch9.flashcards.map(function (_, i) { return i; });
    for (var i = fc9.order.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = fc9.order[i]; fc9.order[i] = fc9.order[j]; fc9.order[j] = t;
    }
    fc9.idx = 0;
  }
  function fc9Render() {
    if (!fc9.order.length) fc9Shuffle();
    var card = D.ch9.flashcards[fc9.order[fc9.idx]];
    if (!card) return;
    $("fcQ9").textContent = card.q;
    $("fcA9").textContent = card.a;
    $("fcCounter9").textContent = (fc9.idx + 1) + " / " + D.ch9.flashcards.length;
  }
  function fc9Flip() { $("flashcard9").classList.toggle("flipped"); }
  function fc9Step(d) {
    fc9.idx = (fc9.idx + d + D.ch9.flashcards.length) % D.ch9.flashcards.length;
    fc9Render();
    $("flashcard9").classList.remove("flipped");
  }

  /* ---------- Glossary 9 (slide 41) ---------- */
  function renderGlossary9(filter) {
    var list = $("glossaryList9");
    if (!list) return;
    var term = (filter || "").toLowerCase().trim();
    var items = D.ch9.glossary.filter(function (g) {
      return g.term.toLowerCase().indexOf(term) !== -1 || g.def.toLowerCase().indexOf(term) !== -1;
    });
    $("glossaryCount9").textContent = items.length + " คำศัพท์";
    list.innerHTML = items.map(function (g) {
      return '<div class="gloss-item" data-term="' + esc(g.term) + '" role="button" tabindex="0" aria-expanded="false">' +
        "<div><b>" + esc(g.term) + '</b><div class="g-def" style="display:none">' + esc(g.def) + "</div></div>" +
        '<i data-lucide="chevron-down" class="g-chev"></i></div>';
    }).join("");
    icons();
  }

  /* ---------- Cheat sheet 8 (slide 38) ---------- */
  function renderCheat8() {
    var g = $("cheatGrid8");
    if (!g) return;
    g.innerHTML = D.ch8.cheat.map(function (c) {
      return '<div class="cheat-item"><span class="term">' + esc(c.term) + '</span><span class="arrow">→</span><span class="def">' + esc(c.def) + "</span></div>";
    }).join("");
  }

  /* ---------- Quiz 8 (slide 39 · 12 ข้อ) ---------- */
  function quiz8Score() {
    var sc = 0;
    D.ch8.quiz.forEach(function (q, j) { if (state.quiz8.answers[j] === q.correct) sc++; });
    return sc;
  }
  function renderQuiz8() {
    var el = $("quiz8");
    if (!el) return;
    var qs = D.ch8.quiz;
    var allAnswered = qs.every(function (_, j) { return state.quiz8.answers[j] !== undefined; });
    if (allAnswered) { renderQuiz8Result(el, qs); return; }
    var qi = 0;
    for (var j = 0; j < qs.length; j++) { if (state.quiz8.answers[j] === undefined) { qi = j; break; } }
    renderQuiz8Question(qi, el, qs);
  }
  function renderQuiz8Question(qi, el, qs) {
    var q = qs[qi];
    var chosen = state.quiz8.answers[qi];
    var answered = chosen !== undefined;
    var opts = q.options.map(function (o, oi) {
      var cls = "quiz-option";
      if (answered) {
        cls += " locked";
        if (oi === q.correct) cls += " correct";
        else if (oi === chosen) cls += " incorrect";
      }
      return '<button class="' + cls + '" data-opt="' + oi + '"' + (answered ? " disabled" : "") + ">" +
        '<span class="opt-key">' + "ABCD"[oi] + '</span><span>' + esc(o) + "</span></button>";
    }).join("");

    el.innerHTML =
      '<div class="card fade-up" style="padding:26px">' +
      '<div class="flex items-center justify-between mb-3 wrap gap-2">' +
      '<span class="chip">ข้อที่ ' + (qi + 1) + " / " + qs.length + " · F4 · BOOK CH.7</span>" +
      '<span class="chip" style="border-color:rgba(56,189,248,.4)">คะแนนตอนนี้: ' + quiz8Score() + " / " + qs.length + "</span></div>" +
      "<h3 style='font-size:19px;line-height:1.5;margin-bottom:18px'>" + esc(q.q) + "</h3>" +
      '<div class="flex" style="flex-direction:column;gap:10px">' + opts + "</div>" +
      (answered
        ? '<div class="quiz-explanation mt-4">💡 ' + esc(q.explain) + "</div>" +
          '<div class="flex items-center gap-3 mt-5 wrap">' +
          (qi < qs.length - 1
            ? '<button class="btn btn-primary" id="q8Next">ข้อถัดไป <i data-lucide="arrow-right"></i></button>'
            : '<button class="btn btn-primary" id="q8Finish">ดูผลลัพธ์ <i data-lucide="flag"></i></button>') +
          "</div>"
        : '<div class="tip-box tip-note mt-4" style="margin-top:18px"><i data-lucide="lightbulb"></i><div><b>Hint</b>ทบทวน 6 หัวข้อ: components, radio/SNR, CSMA/CA, access/association, MIMO และ mobility/handover</div></div>')
      + "</div>";
    icons();

    el.querySelectorAll(".quiz-option").forEach(function (b) {
      b.addEventListener("click", function () {
        var oi = parseInt(b.dataset.opt, 10);
        if (answered) return;
        state.quiz8.answers[qi] = oi;
        LS.set("cn_quiz8", state.quiz8);
        var correct = oi === q.correct;
        b.classList.add(correct ? "correct" : "incorrect");
        if (!correct) {
          qsa(".quiz-option", el).forEach(function (x) {
            if (parseInt(x.dataset.opt, 10) === q.correct) x.classList.add("correct");
          });
        }
        qsa(".quiz-option", el).forEach(function (x) { x.classList.add("locked"); x.setAttribute("disabled", "disabled"); });
        var exp = document.createElement("div");
        exp.className = "quiz-explanation mt-4";
        exp.innerHTML = (correct ? "✅ ถูกต้อง! " : "❌ ยังไม่ถูกนะ ") + "💡 " + esc(q.explain);
        el.querySelector(".quiz-option").closest("div.flex").insertAdjacentElement("afterend", exp);
        var nav = document.createElement("div");
        nav.className = "flex items-center gap-3 mt-5 wrap";
        nav.innerHTML = qi < qs.length - 1
          ? '<button class="btn btn-primary" id="q8Next">ข้อถัดไป <i data-lucide="arrow-right"></i></button>'
          : '<button class="btn btn-primary" id="q8Finish">ดูผลลัพธ์ <i data-lucide="flag"></i></button>';
        exp.insertAdjacentElement("afterend", nav);
        icons();
        bindQuiz8Nav();
        if (correct) toast("✅ ถูกต้อง!", 1200);
      });
    });
    bindQuiz8Nav();
  }
  function bindQuiz8Nav() {
    var n = $("q8Next");
    if (n) n.addEventListener("click", function () { renderQuiz8(); });
    var f = $("q8Finish");
    if (f) f.addEventListener("click", function () { renderQuiz8(); });
    var r = $("q8Retry");
    if (r) r.addEventListener("click", function () {
      state.quiz8.answers = {};
      LS.set("cn_quiz8", state.quiz8);
      renderQuiz8();
    });
  }
  function renderQuiz8Result(el, qs) {
    var sc = quiz8Score();
    var pct = Math.round((sc / qs.length) * 100);
    var msg = sc === qs.length ? "Perfect! คะแนนเต็ม เก่งมาก! 🏆"
      : sc >= qs.length - 2 ? "Excellent! เกือบเต็มแล้ว! 💪"
      : sc >= Math.ceil(qs.length / 2) ? "Good job! ทบทวนอีกนิดก็เพอร์เฟกต์ ✨"
      : "ยังไม่ผ่าน — ย้อนกลับไปทบทวนสไลด์แล้วลองใหม่นะ 📚";
    if (state.best === null || sc > state.best) {
      state.best = sc;
      LS.set("cn_best_" + state.chapter, state.best);
    }
    var ring = 2 * Math.PI * 62;
    var offset = ring - (sc / qs.length) * ring;
    el.innerHTML =
      '<div class="card center fade-up" style="padding:34px 26px">' +
      '<div class="score-ring"><svg width="150" height="150" viewBox="0 0 150 150">' +
      '<defs><linearGradient id="ringGrad8" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0%" stop-color="#2563eb"/><stop offset="100%" stop-color="#22d3ee"/></linearGradient></defs>' +
      '<circle class="ring-bg" cx="75" cy="75" r="62" fill="none" stroke-width="12"/>' +
      '<circle class="ring-fill" id="ringC8" cx="75" cy="75" r="62" fill="none" stroke-width="12" stroke-linecap="round" ' +
      'style="stroke:url(#ringGrad8)" stroke-dasharray="' + ring + '" stroke-dashoffset="' + ring + '"/></svg>' +
      '<div class="ring-num">' + sc + "/" + qs.length + "</div></div>" +
      "<p class='mt-3 text-2' style='font-weight:700'>" + pct + "% · " + msg + "</p>" +
      '<p class="text-3 mt-2" style="font-size:13px">คะแนนดีที่สุดของบทนี้: <b class="cyan">' + (state.best === null ? "–" : state.best + "/" + qs.length) + "</b></p>" +
      '<div class="flex items-center gap-3 mt-5 wrap" style="justify-content:center">' +
      '<button class="btn btn-ghost" id="q8Retry"><i data-lucide="rotate-ccw"></i> ทำใหม่อีกครั้ง</button>' +
      '<button class="btn btn-primary" id="q8ToCards"><i data-lucide="square-stack"></i> ไปที่การ์ดทบทวน</button>' +
      "</div></div>";
    icons();
    setTimeout(function () {
      var rf = $("ringC8");
      if (rf) rf.style.strokeDashoffset = offset;
    }, 120);
    bindQuiz8Nav();
    var cards = $("q8ToCards");
    if (cards) cards.addEventListener("click", function () {
      var ci = -1;
      ch().slides.forEach(function (s, i) { if (s.title.indexOf("Flashcards") !== -1) ci = i; });
      if (ci !== -1) goTo(ch().start + ci, 1);
    });
  }

  /* ---------- Flashcards 8 (slide 40) ---------- */
  var fc8 = { order: [], idx: 0 };
  function fc8Shuffle() {
    fc8.order = D.ch8.flashcards.map(function (_, i) { return i; });
    for (var i = fc8.order.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = fc8.order[i]; fc8.order[i] = fc8.order[j]; fc8.order[j] = t;
    }
    fc8.idx = 0;
  }
  function fc8Render() {
    if (!fc8.order.length) fc8Shuffle();
    var card = D.ch8.flashcards[fc8.order[fc8.idx]];
    if (!card) return;
    $("fcQ8").textContent = card.q;
    $("fcA8").textContent = card.a;
    $("fcCounter8").textContent = (fc8.idx + 1) + " / " + D.ch8.flashcards.length;
  }
  function fc8Flip() { $("flashcard8").classList.toggle("flipped"); }
  function fc8Step(d) {
    fc8.idx = (fc8.idx + d + D.ch8.flashcards.length) % D.ch8.flashcards.length;
    fc8Render();
    $("flashcard8").classList.remove("flipped");
  }

  /* ---------- Glossary 8 (slide 41) ---------- */
  function renderGlossary8(filter) {
    var list = $("glossaryList8");
    if (!list) return;
    var term = (filter || "").toLowerCase().trim();
    var items = D.ch8.glossary.filter(function (g) {
      return g.term.toLowerCase().indexOf(term) !== -1 || g.def.toLowerCase().indexOf(term) !== -1;
    });
    $("glossaryCount8").textContent = items.length + " คำศัพท์";
    list.innerHTML = items.map(function (g) {
      return '<div class="gloss-item" data-term="' + esc(g.term) + '" role="button" tabindex="0" aria-expanded="false">' +
        "<div><b>" + esc(g.term) + '</b><div class="g-def" style="display:none">' + esc(g.def) + "</div></div>" +
        '<i data-lucide="chevron-down" class="g-chev"></i></div>';
    }).join("");
    icons();
  }

  /* ==========================================================================
     INIT
     ========================================================================== */
  function init() {
    /* หน้าเมนูหลัก (index.html) — แสดงความคืบหน้า + เปิดหน้าเรียนตามบท */
    if (PAGE === "menu") {
      renderMenuProgress();
      bindMenu();
      bindMenuScrollMemory();
      restoreMenuScroll();
      icons();
      return;
    }

    bind();
    renderSidebar();
    if (PCH === 1) {
      renderRoadmap();
      renderWhys();
      renderComponents();
      renderModeTabs();
      selectMode("simplex");
      selectConn("ptp");
      renderTopoTabs();
      selectTopo("bus");
      selectScope(0);
      renderMediaTabs("wired");
      renderStack();
      renderProtoCards();
      renderTimeline();
      renderSummary();
      renderCheat();
      renderQuiz(0);
      renderQuiz(1);
      renderExam();
      fcShuffle();
      fcRender();
      renderGlossary("");
      meshReset();
    } else if (PCH === 2) {
      renderLayerTabs();
      renderQuiz2();
      fc2Shuffle();
      fc2Render();
      renderGlossary2("");
      encapReset();
      renderExam();
    } else if (PCH === 3) {
      selectArch("client-server");
      selectHttp("http");
      selectMethod("get");
      renderPorts();
      renderQuiz3();
      fc3Shuffle();
      fc3Render();
      renderGlossary3("");
      renderExam();
    } else if (PCH === 4) {
      selectUdpField("src");
      renderQuiz4();
      fc4Shuffle();
      fc4Render();
      renderGlossary4("");
      renderExam();
    } else if (PCH === 5) {
      renderServiceModel();
      selectDcPlane("data");
      selectPlane("per");
      selectRouterPart("input");
      selectFabric("memory");
      selectLpmExample(0);
      selectSubnet(0);
      renderOrgGrid();
      renderDhcpSteps();
      selectDhcpStep(0);
      renderCheat5();
      renderQuiz5();
      fc5Shuffle();
      fc5Render();
      renderGlossary5("");
      renderExam();
    } else if (PCH === 6) {
      selectCpPlane("control");
      selectCpStruct("per");
      renderSdnSteps6();
      selectSdnStep6(0);
      renderDijkstra6();
      selectDvNews6("good");
      selectOspf6("flat");
      renderBgpSteps6();
      selectBgpStep6(0);
      renderCheat6();
      renderQuiz6();
      fc6Shuffle();
      fc6Render();
      renderGlossary6("");
      renderExam();
    } else if (PCH === 7) {
      parity7Reset();
      renderCrc7();
      selectCrc7(0);
      renderBackoff7();
      selectBackoff7(0);
      renderEthFields7();
      selectEthField7(0);
      renderArp7();
      selectArp7(0);
      renderSwitch7();
      renderCheat7();
      renderQuiz7();
      fc7Shuffle();
      fc7Render();
      renderGlossary7("");
      renderExam();
    } else if (PCH === 8) {
      renderDbm8();
      updateShannon8();
      renderCsma8();
      renderFrame8();
      renderDiscovery8();
      renderHandover8();
      renderCheat8();
      renderQuiz8();
      fc8Shuffle();
      fc8Render();
      renderGlossary8("");
      renderExam();
    } else if (PCH === 9) {
      renderEnc9();
      renderRsa9();
      renderAuth9();
      selectHash9(0);
      renderTls9();
      renderAttack9();
      renderCheat9();
      renderQuiz9();
      fc9Shuffle();
      fc9Render();
      renderGlossary9("");
      renderExam();
    }
    applyMode();
    goTo(state.current, 0);
    updateHeaderProgress();
    updateBottomBar();
    icons();
    updateHeaderBrand();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
