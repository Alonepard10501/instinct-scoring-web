/* ============================================================
   app.js — Verhalten der Seite.
   Reines JavaScript, keine Bibliothek, kein Build.
   ============================================================ */

(function () {
  "use strict";

  const ruhig = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ========================================================
     1) TEXTE EINSETZEN
     Alle Stellen mit data-t="pfad.zum.text" werden gefüllt.
     ======================================================== */
  function texteEinsetzen() {
    document.querySelectorAll("[data-t]").forEach(el => {
      const wert = T(el.dataset.t);
      if (wert === undefined || wert === null) return;
      if (el.dataset.tAttr) el.setAttribute(el.dataset.tAttr, wert);
      else el.textContent = wert;
    });
    document.documentElement.lang = window.SPRACHE;
  }

  /* Sprache umschalten (Gerüst: EN füllt sich, sobald texte.js ergänzt ist) */
  function spracheEinrichten() {
    const knopf = document.getElementById("sprachknopf");
    if (!knopf) return;
    // Titel (Sprechblase) passend zur Zielsprache setzen
    const titel = T("meta.sprachtitel");
    if (titel) knopf.setAttribute("title", titel);
    knopf.addEventListener("click", () => {
      window.SPRACHE = (window.SPRACHE === "de") ? "en" : "de";
      localStorage.setItem("fanica_sprache", window.SPRACHE);
      location.reload();
    });
  }

  /* ========================================================
     2) KOPFZEILE — wird beim Scrollen fest
     ======================================================== */
  function kopfEinrichten() {
    const kopf = document.querySelector(".kopf");
    if (!kopf) return;
    const pruefe = () => kopf.classList.toggle("fest", window.scrollY > 40);
    pruefe();
    addEventListener("scroll", pruefe, { passive: true });
  }

  /* ========================================================
     3) KAPITEL-VERWANDLUNG
     Jedes Kapitel färbt Hintergrund, Akzent und Licht um.
     ======================================================== */
  const KAPITEL = {
    intro: {
      grund: "linear-gradient(180deg, #000000, #07070A 55%, #0A0509)",
      akzent: "#E4192B", akzentHell: "#FF4257"
    },
    instinct: {
      grund: "linear-gradient(180deg, #0E100E, #1A1C1A 46%, #10140F)",
      akzent: "#7C8B3E", akzentHell: "#A7BC55"
    },
    fanica: {
      grund: "linear-gradient(180deg, #0A0406, #12070B 50%, #08070C)",
      akzent: "#E4192B", akzentHell: "#FF4257"
    },
    neonpunkt: {
      grund: "linear-gradient(180deg, #000000, #030308 60%, #000000)",
      akzent: "#39FF14", akzentHell: "#7BFF5C"
    },
    // „Auf einen Blick" vergleicht alle drei Apps — bewusst NEUTRAL,
    // damit die Tabelle nicht nach einer einzelnen App aussieht.
    // (Falk 31.07.: „hat noch die falschen Farben in der Überschrift".)
    vergleich: {
      grund: "linear-gradient(180deg, #06070A, #0C0E13 55%, #07080B)",
      akzent: "#8E97A3", akzentHell: "#D7DDE4"
    },
    ueber: {
      grund: "linear-gradient(180deg, #06060A, #0B0A10 55%, #08060A)",
      akzent: "#E4192B", akzentHell: "#FF4257"
    },
    schluss: {
      grund: "linear-gradient(180deg, #08060A, #000000)",
      akzent: "#E4192B", akzentHell: "#FF4257"
    }
  };

  function kapitelEinrichten() {
    const kulisse = document.querySelector(".kulisse");
    const wurzel = document.documentElement;
    const abschnitte = [...document.querySelectorAll("[data-kapitel]")];
    if (!kulisse || !abschnitte.length) return;

    let aktuell = "";
    const setze = (name) => {
      const k = KAPITEL[name];
      if (!k || name === aktuell) return;
      aktuell = name;
      // Nur der Hintergrund wird weich überblendet. Die Akzentfarbe steht
      // fest am Abschnitt selbst (siehe [data-kapitel] in style.css) —
      // sie hier nochmal auf :root zu setzen, würde die Abschnittsfarbe
      // überstimmen und alles rot färben, solange nicht gescrollt wurde.
      kulisse.style.background = k.grund;
      // Kopfzeile und Fortschrittsbalken liegen außerhalb der Abschnitte,
      // sie brauchen die Farbe weiterhin von oben.
      wurzel.style.setProperty("--kopf-akzent", k.akzent);
      wurzel.style.setProperty("--kopf-akzent-hell", k.akzentHell);
    };

    /* Mittellinien-Messung statt IntersectionObserver:
       Ein Kapitel kann viel höher als der Bildschirm sein — dann erreicht es
       nie einen brauchbaren Sichtbarkeits-Anteil. Deshalb gewinnt schlicht
       das Kapitel, das die Bildschirmmitte überdeckt. */
    let geplant = false;
    const pruefe = () => {
      geplant = false;
      const mitte = window.innerHeight * 0.42;
      let treffer = abschnitte[0];
      for (const a of abschnitte) {
        const r = a.getBoundingClientRect();
        if (r.top <= mitte && r.bottom > mitte) { treffer = a; break; }
        if (r.top > mitte) break;      // weiter unten — vorheriger gilt
        treffer = a;                    // schon vorbei — merken
      }
      if (treffer) setze(treffer.dataset.kapitel);
    };
    const anstossen = () => {
      if (geplant) return;
      geplant = true;
      requestAnimationFrame(pruefe);
    };

    addEventListener("scroll", anstossen, { passive: true });
    addEventListener("resize", anstossen, { passive: true });
    pruefe();
  }

  /* ========================================================
     4) EINBLENDEN BEIM SCROLLEN
     ======================================================== */
  function einblendenEinrichten() {
    const teile = document.querySelectorAll(".auf");
    if (!teile.length) return;
    if (ruhig) { teile.forEach(t => t.classList.add("da")); return; }

    const b = new IntersectionObserver((eintraege, selbst) => {
      eintraege.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("da");
          selbst.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

    teile.forEach(t => b.observe(t));

    /* Sicherheitsnetz: Wer beim Laden schon im Bild ist oder wen der
       Beobachter aus irgendeinem Grund nicht meldet, wird nach kurzer
       Zeit trotzdem sichtbar. Ohne das blieb auf dem Handy schon mal
       ein halber Abschnitt blass stehen. */
    setTimeout(() => {
      teile.forEach(t => {
        const r = t.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) t.classList.add("da");
      });
    }, 900);
  }

  /* ========================================================
     5) ZÄHLER — laufen einmal hoch
     ======================================================== */
  function zaehlerEinrichten() {
    const zahlen = document.querySelectorAll("[data-zaehler]");
    if (!zahlen.length) return;

    const laufe = (el) => {
      const ziel = parseFloat(el.dataset.zaehler);
      if (ruhig || !isFinite(ziel)) { el.textContent = el.dataset.zaehler; return; }
      const dauer = 1250;
      const start = performance.now();
      const schritt = (jetzt) => {
        const p = Math.min(1, (jetzt - start) / dauer);
        const weich = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(ziel * weich).toString();
        if (p < 1) requestAnimationFrame(schritt);
        else el.textContent = el.dataset.zaehler;
      };
      requestAnimationFrame(schritt);
    };

    // Zuerst den ECHTEN Wert hinschreiben. Fällt die Animation aus
    // (Bewegung abgeschaltet, kein Sichtbarkeits-Ereignis, JS-Fehler),
    // steht trotzdem die richtige Zahl da statt einer 0.
    zahlen.forEach(z => { z.textContent = z.dataset.zaehler; });

    if (ruhig) return;

    const b = new IntersectionObserver((eintraege, selbst) => {
      eintraege.forEach(e => {
        if (e.isIntersecting) {
          e.target.textContent = "0";   // erst jetzt auf 0 und hochzählen
          laufe(e.target);
          selbst.unobserve(e.target);
        }
      });
    }, { threshold: 0.6 });
    zahlen.forEach(z => b.observe(z));
  }

  /* Die 16 Neonfarben in der Reihenfolge der App.
     Wird von Zeitraffer UND Spiel gebraucht — deshalb hier oben. */
  const NEON_FARBEN = [
    "#39FF14", "#FF10F0", "#00FFFF", "#FFFF00",
    "#FF6B00", "#00FF9D", "#FF0055", "#7B5CFF",
    "#00B3FF", "#B6FF00", "#FF00A8", "#00FFC8",
    "#FFAA00", "#5CFF8F", "#FF3D7F", "#12E5FF"
  ];

  /* ========================================================
     6) ZEITRAFFER — die 48 Stunden in 12 Sekunden
     Ersetzt die frühere Explosionszeichnung: dort war im Standbild
     nicht zu erkennen, dass sich überhaupt etwas bewegt. Hier wächst
     der Punkt sichtbar, die Uhr läuft mit, der Balken füllt sich.
     ======================================================== */
  function rafferEinrichten() {
    const buehne = document.getElementById("raffer-buehne");
    const knopf = document.getElementById("raffer-knopf");
    if (!buehne || !knopf) return;

    const punkt = document.getElementById("raffer-punkt");
    const aZeit = document.getElementById("raffer-zeit");
    const aProz = document.getElementById("raffer-prozent");
    const balken = document.getElementById("raffer-fortschritt");

    const DAUER = 12000;          // 12 Sekunden Spielzeit …
    const STUNDEN = 48;           // … stehen für 48 Stunden
    const START_PX = 18;

    let laeuft = false, start = 0, farbe = 0, uhr = null;

    /* An der HÖHE ausrichten (nicht an der Diagonale): so bleibt oben und
       unten Platz für Uhr, Balken und Hinweis. Zusätzlich einen festen
       Streifen oben (Anzeige) und unten (Balken + Hinweis) freihalten —
       auf schmalen Schirmen lief der Punkt sonst durch die Schrift. */
    const FREI_OBEN = 74, FREI_UNTEN = 78;
    const maxGroesse = () => Math.max(
      60,
      Math.min(buehne.clientHeight - FREI_OBEN - FREI_UNTEN,
               buehne.clientWidth * 0.92)
    );

    const zeitText = (anteil) => {
      const gesamtMin = anteil * STUNDEN * 60;
      const std = Math.floor(gesamtMin / 60);
      const min = Math.floor(gesamtMin % 60);
      return `${std} Std ${String(min).padStart(2, "0")} Min`;
    };

    const male = (anteil) => {
      const g = START_PX + (maxGroesse() - START_PX) * anteil;
      const f = NEON_FARBEN[farbe];
      punkt.style.width = g + "px";
      punkt.style.height = g + "px";
      punkt.style.background = f;
      punkt.style.boxShadow =
        `0 0 ${Math.round(g * 0.55)}px ${Math.round(g * 0.14)}px ` +
        `color-mix(in srgb, ${f} 55%, transparent)`;
      if (aZeit) aZeit.textContent = zeitText(anteil);
      if (aProz) aProz.textContent = Math.round(anteil * 100) + " %";
      if (balken) balken.style.width = (anteil * 100).toFixed(1) + "%";
    };

    const stoppen = () => {
      laeuft = false;
      if (uhr) { cancelAnimationFrame(uhr); uhr = null; }
      buehne.classList.remove("laeuft");
      knopf.textContent = T("neonpunkt.rafferKnopfStart");
      knopf.setAttribute("aria-pressed", "false");
    };

    const schritt = (jetzt) => {
      if (!laeuft) return;
      const anteil = Math.min(1, (jetzt - start) / DAUER);
      male(anteil);
      if (anteil < 1) uhr = requestAnimationFrame(schritt);
      else stoppen();                 // 48 Stunden erreicht — Punkt füllt alles
    };

    const starten = () => {
      laeuft = true;
      start = performance.now();
      buehne.classList.add("laeuft");
      knopf.textContent = T("neonpunkt.rafferKnopfStopp");
      knopf.setAttribute("aria-pressed", "true");
      uhr = requestAnimationFrame(schritt);
    };

    /* Antippen: Punkt beginnt klein von vorn, nächste Farbe — wie in der App. */
    const antippen = () => {
      farbe = (farbe + 1) % NEON_FARBEN.length;
      if (laeuft) start = performance.now();
      else male(0);
    };

    knopf.addEventListener("click", () => { laeuft ? stoppen() : starten(); });
    buehne.addEventListener("click", antippen);
    buehne.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); antippen(); }
    });

    male(0);

    // Bewegung abgeschaltet: Endzustand zeigen, Knopf ausblenden
    if (ruhig) {
      male(1);
      knopf.hidden = true;
      const st = document.getElementById("raffer-statisch");
      if (st) st.hidden = false;
      return;
    }

    // Nur laufen lassen, solange sichtbar — und einmal von selbst starten
    let schonGelaufen = false;
    const b = new IntersectionObserver((eintraege) => {
      eintraege.forEach(e => {
        if (e.isIntersecting && !schonGelaufen) {
          schonGelaufen = true;
          setTimeout(starten, 600);
        } else if (!e.isIntersecting && laeuft) {
          stoppen();
        }
      });
    }, { threshold: 0.45 });
    b.observe(buehne);
  }

  /* ========================================================
     7) NEONPUNKT — das echte kleine Spiel
     ======================================================== */

  function spielEinrichten() {
    const feld = document.getElementById("spielfeld");
    if (!feld) return;

    const punkt   = feld.querySelector(".spielpunkt");
    const zKlicks = document.getElementById("spiel-klicks");
    const zFarbe  = document.getElementById("spiel-farbe");
    const licht   = document.querySelector(".licht-punkt span");

    let klicks = 0;
    let farbe = 0;
    let groesse = 30;
    const maxGroesse = () => Math.min(feld.clientWidth, feld.clientHeight) * 0.92;

    let uhr = null;

    const male = () => {
      const f = NEON_FARBEN[farbe];
      punkt.style.width = groesse + "px";
      punkt.style.height = groesse + "px";
      punkt.style.background = f;
      punkt.style.boxShadow =
        `0 0 ${Math.round(groesse * 0.9)}px ${Math.round(groesse * 0.22)}px ` +
        `color-mix(in srgb, ${f} 60%, transparent)`;
      if (licht) {
        licht.style.background =
          `radial-gradient(circle, color-mix(in srgb, ${f} 30%, transparent), transparent 66%)`;
      }
      if (zFarbe) zFarbe.textContent = (farbe + 1).toString();
    };

    // Der Punkt wächst — hier in Sekunden statt in 48 Stunden,
    // damit man das Prinzip auf der Seite auch spürt.
    const wachsen = () => {
      if (ruhig) return;
      groesse = Math.min(maxGroesse(), groesse + maxGroesse() / 150);
      male();
    };

    const antippen = () => {
      klicks++;
      farbe = (farbe + 1) % NEON_FARBEN.length;
      groesse = 30;
      feld.classList.add("beruehrt");
      if (zKlicks) zKlicks.textContent = klicks.toString();
      male();
    };

    feld.addEventListener("click", antippen);
    feld.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); antippen(); }
    });

    male();

    // Nur wachsen lassen, solange das Feld sichtbar ist — spart Strom
    const b = new IntersectionObserver((eintraege) => {
      eintraege.forEach(e => {
        if (e.isIntersecting && !uhr && !ruhig) uhr = setInterval(wachsen, 320);
        else if (!e.isIntersecting && uhr) { clearInterval(uhr); uhr = null; }
      });
    }, { threshold: 0.25 });
    b.observe(feld);
  }

  /* ========================================================
     8) QR-CODES — lokal erzeugt, kein fremder Dienst
     Vollständige QR-Erzeugung (Version 1-10, Fehlerkorrektur M).
     ======================================================== */
  const QR = (function () {
    // --- Galois-Feld für Reed-Solomon ---
    const EXP = new Uint8Array(512), LOG = new Uint8Array(256);
    (function () {
      let x = 1;
      for (let i = 0; i < 255; i++) {
        EXP[i] = x; LOG[x] = i;
        x <<= 1; if (x & 0x100) x ^= 0x11D;
      }
      for (let i = 255; i < 512; i++) EXP[i] = EXP[i - 255];
    })();
    const mul = (a, b) => (a === 0 || b === 0) ? 0 : EXP[LOG[a] + LOG[b]];

    function rsPolynom(grad) {
      let p = [1];
      for (let i = 0; i < grad; i++) {
        const n = new Array(p.length + 1).fill(0);
        for (let j = 0; j < p.length; j++) {
          n[j] ^= p[j];
          n[j + 1] ^= mul(p[j], EXP[i]);
        }
        p = n;
      }
      return p;
    }

    function rsRest(daten, anzahl) {
      const gen = rsPolynom(anzahl);
      const rest = new Array(anzahl).fill(0);
      for (const b of daten) {
        const faktor = b ^ rest[0];
        rest.shift(); rest.push(0);
        if (faktor !== 0) {
          for (let i = 0; i < anzahl; i++) rest[i] ^= mul(gen[i + 1], faktor);
        }
      }
      return rest;
    }

    // Kapazität (Byte-Modus, Level M) und Blockaufteilung je Version
    const TAB = {
      1:  { gesamt: 26,  ecPro: 10, g1: 1, d1: 16, g2: 0, d2: 0 },
      2:  { gesamt: 44,  ecPro: 16, g1: 1, d1: 28, g2: 0, d2: 0 },
      3:  { gesamt: 70,  ecPro: 26, g1: 1, d1: 44, g2: 0, d2: 0 },
      4:  { gesamt: 100, ecPro: 18, g1: 2, d1: 32, g2: 0, d2: 0 },
      5:  { gesamt: 134, ecPro: 24, g1: 2, d1: 43, g2: 0, d2: 0 },
      6:  { gesamt: 172, ecPro: 16, g1: 4, d1: 27, g2: 0, d2: 0 },
      7:  { gesamt: 196, ecPro: 18, g1: 4, d1: 31, g2: 0, d2: 0 },
      8:  { gesamt: 242, ecPro: 22, g1: 2, d1: 38, g2: 2, d2: 39 },
      9:  { gesamt: 292, ecPro: 22, g1: 3, d1: 36, g2: 2, d2: 37 },
      10: { gesamt: 346, ecPro: 26, g1: 4, d1: 43, g2: 1, d2: 44 }
    };
    const AUSRICHT = {
      1: [], 2: [6,18], 3: [6,22], 4: [6,26], 5: [6,30],
      6: [6,34], 7: [6,22,38], 8: [6,24,42], 9: [6,26,46], 10: [6,28,50]
    };
    // Format-Bits für Level M, Maske 0..7 (fertig berechnet)
    const FORMAT_M = [
      0x5412, 0x5125, 0x5E7C, 0x5B4B, 0x45F9, 0x40CE, 0x4F97, 0x4AA0
    ];

    function version(laenge) {
      for (let v = 1; v <= 10; v++) {
        const t = TAB[v];
        const daten = t.g1 * t.d1 + t.g2 * t.d2;
        const kopf = 4 + (v < 10 ? 8 : 16);
        if (daten * 8 >= kopf + laenge * 8) return v;
      }
      return null;
    }

    function baue(text) {
      const bytes = new TextEncoder().encode(text);
      const v = version(bytes.length);
      if (!v) return null;
      const t = TAB[v];
      const datenBytes = t.g1 * t.d1 + t.g2 * t.d2;

      // --- Bitstrom ---
      const bits = [];
      const schreibe = (wert, anzahl) => {
        for (let i = anzahl - 1; i >= 0; i--) bits.push((wert >> i) & 1);
      };
      schreibe(0b0100, 4);                       // Byte-Modus
      schreibe(bytes.length, v < 10 ? 8 : 16);   // Länge
      for (const b of bytes) schreibe(b, 8);
      // Abschluss
      for (let i = 0; i < 4 && bits.length < datenBytes * 8; i++) bits.push(0);
      while (bits.length % 8) bits.push(0);
      const roh = [];
      for (let i = 0; i < bits.length; i += 8) {
        roh.push(parseInt(bits.slice(i, i + 8).join(""), 2));
      }
      const fueller = [0xEC, 0x11];
      let f = 0;
      while (roh.length < datenBytes) roh.push(fueller[f++ % 2]);

      // --- Blöcke + Fehlerkorrektur ---
      const bloecke = [], ecBloecke = [];
      let pos = 0;
      for (let i = 0; i < t.g1; i++) {
        const b = roh.slice(pos, pos + t.d1); pos += t.d1;
        bloecke.push(b); ecBloecke.push(rsRest(b, t.ecPro));
      }
      for (let i = 0; i < t.g2; i++) {
        const b = roh.slice(pos, pos + t.d2); pos += t.d2;
        bloecke.push(b); ecBloecke.push(rsRest(b, t.ecPro));
      }
      const folge = [];
      const maxD = Math.max(t.d1, t.d2);
      for (let i = 0; i < maxD; i++)
        for (const b of bloecke) if (i < b.length) folge.push(b[i]);
      for (let i = 0; i < t.ecPro; i++)
        for (const b of ecBloecke) folge.push(b[i]);

      // --- Raster aufbauen ---
      const n = v * 4 + 17;
      const feld = Array.from({ length: n }, () => new Array(n).fill(null));
      const belegt = Array.from({ length: n }, () => new Array(n).fill(false));

      const setz = (x, y, wert) => {
        if (x < 0 || y < 0 || x >= n || y >= n) return;
        feld[y][x] = wert ? 1 : 0; belegt[y][x] = true;
      };

      // Suchmuster + Trennlinien
      const sucher = (sx, sy) => {
        for (let y = -1; y <= 7; y++) for (let x = -1; x <= 7; x++) {
          const px = sx + x, py = sy + y;
          if (px < 0 || py < 0 || px >= n || py >= n) continue;
          const rand = (x >= 0 && x <= 6 && (y === 0 || y === 6)) ||
                       (y >= 0 && y <= 6 && (x === 0 || x === 6));
          const kern = x >= 2 && x <= 4 && y >= 2 && y <= 4;
          setz(px, py, rand || kern);
        }
      };
      sucher(0, 0); sucher(n - 7, 0); sucher(0, n - 7);

      // Taktlinien
      for (let i = 8; i < n - 8; i++) {
        setz(i, 6, i % 2 === 0);
        setz(6, i, i % 2 === 0);
      }

      // Ausrichtungsmuster
      const a = AUSRICHT[v];
      for (const cy of a) for (const cx of a) {
        if ((cx <= 8 && cy <= 8) || (cx >= n - 9 && cy <= 8) || (cx <= 8 && cy >= n - 9)) continue;
        for (let y = -2; y <= 2; y++) for (let x = -2; x <= 2; x++) {
          setz(cx + x, cy + y, Math.max(Math.abs(x), Math.abs(y)) !== 1);
        }
      }

      // Platz für Formatbits reservieren
      for (let i = 0; i < 9; i++) { setz(i, 8, false); setz(8, i, false); }
      for (let i = 0; i < 8; i++) { setz(n - 1 - i, 8, false); setz(8, n - 1 - i, false); }
      setz(8, n - 8, true); // immer dunkel

      // --- Daten einfüllen (Zickzack von rechts unten) ---
      let bitIndex = 0;
      const alleBits = [];
      for (const b of folge) for (let i = 7; i >= 0; i--) alleBits.push((b >> i) & 1);

      let aufwaerts = true;
      for (let rechts = n - 1; rechts > 0; rechts -= 2) {
        if (rechts === 6) rechts = 5; // Taktspalte überspringen
        for (let i = 0; i < n; i++) {
          const y = aufwaerts ? (n - 1 - i) : i;
          for (let s = 0; s < 2; s++) {
            const x = rechts - s;
            if (belegt[y][x]) continue;
            let bit = bitIndex < alleBits.length ? alleBits[bitIndex++] : 0;
            // Maske 0: (y + x) % 2 === 0
            if ((y + x) % 2 === 0) bit ^= 1;
            feld[y][x] = bit;
          }
        }
        aufwaerts = !aufwaerts;
      }

      // --- Formatbits (Level M, Maske 0) ---
      const fmt = FORMAT_M[0];
      for (let i = 0; i < 15; i++) {
        const bit = (fmt >> i) & 1;
        // senkrecht links oben + waagerecht rechts oben
        if (i < 6) feld[8][i] = bit;
        else if (i === 6) feld[8][7] = bit;
        else if (i === 7) feld[8][8] = bit;
        else if (i === 8) feld[7][8] = bit;
        else feld[14 - i][8] = bit;

        if (i < 8) feld[8][n - 1 - i] = bit;
        else feld[n - 15 + i][8] = bit;
      }
      feld[n - 8][8] = 1;

      return { feld, n };
    }

    function svg(text, groesse) {
      const erg = baue(text);
      if (!erg) return "";
      const { feld, n } = erg;
      const rand = 2;
      const gesamt = n + rand * 2;
      let pfad = "";
      for (let y = 0; y < n; y++) {
        for (let x = 0; x < n; x++) {
          if (feld[y][x]) pfad += `M${x + rand} ${y + rand}h1v1h-1z`;
        }
      }
      return `<svg viewBox="0 0 ${gesamt} ${gesamt}" width="${groesse}" height="${groesse}" ` +
             `xmlns="http://www.w3.org/2000/svg" role="img" aria-label="QR-Code">` +
             `<rect width="${gesamt}" height="${gesamt}" fill="#fff"/>` +
             `<path d="${pfad}" fill="#000"/></svg>`;
    }

    return { svg };
  })();

  function qrEinrichten() {
    document.querySelectorAll("[data-qr]").forEach(el => {
      const ziel = el.dataset.qr;
      if (!ziel) return;
      try {
        const code = QR.svg(ziel, 92);
        if (code) el.innerHTML = code;
        else el.closest(".qr")?.remove();
      } catch (e) {
        el.closest(".qr")?.remove();
      }
    });
  }

  /* ========================================================
     9) LICHTSPUREN im FaNiCa-Kapitel
     ======================================================== */
  function spurenEinrichten() {
    const feld = document.querySelector(".spuren");
    if (!feld || ruhig) return;
    // Auf dem Handy gar nicht erst erzeugen: neun dauerhaft animierte
    // Elemente kosten Bildrate, sind dort aber kaum zu sehen.
    // (Falk 31.07.: „auf dem Handy muss flüssiger laufen im Browser".)
    if (window.matchMedia("(max-width: 900px)").matches) return;
    const farben = ["var(--rot)", "var(--tuerkis)", "var(--violett)", "var(--gelb)"];
    for (let i = 0; i < 9; i++) {
      const s = document.createElement("i");
      s.style.top = (6 + Math.random() * 88) + "%";
      s.style.width = (18 + Math.random() * 26) + "%";
      s.style.setProperty("--spurfarbe", farben[i % farben.length]);
      s.style.animationDuration = (4.5 + Math.random() * 5.5) + "s";
      s.style.animationDelay = (Math.random() * 6) + "s";
      s.style.opacity = (0.35 + Math.random() * 0.5).toFixed(2);
      feld.appendChild(s);
    }
  }

  /* ========================================================
     10) MARKEN-PUNKTE im Hero — springen zum Kapitel
     ======================================================== */
  function markenpunkteEinrichten() {
    document.querySelectorAll(".markenpunkt").forEach(p => {
      p.addEventListener("click", () => {
        const ziel = document.querySelector(p.dataset.ziel);
        if (ziel) ziel.scrollIntoView({ behavior: ruhig ? "auto" : "smooth", block: "start" });
      });
    });
  }

  /* ========================================================
     10b) KONTAKTFORMULAR
     Eine reine HTML-Seite kann selbst keine Mail verschicken. Das
     Formular baut deshalb eine fertige mailto-Nachricht und oeffnet
     damit das E-Mail-Programm des Besuchers. Von dieser Seite aus
     wird nichts verschickt und nichts gespeichert.
     ======================================================== */
  const KONTAKT_MAIL = "fanicafuntipp@gmail.com";

  function formularEinrichten() {
    const form = document.getElementById("kontakt-form");
    if (!form) return;

    const thema  = document.getElementById("kf-thema");
    const name   = document.getElementById("kf-name");
    const mail   = document.getElementById("kf-mail");
    const text   = document.getElementById("kf-text");
    const fehler = document.getElementById("kf-fehler");

    // Themenauswahl aus texte.js fuellen
    const themen = T("kontakt.formThemen") || [];
    if (thema) {
      thema.innerHTML = themen.map(function (t) {
        const sicher = String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;")
                                .replace(/"/g, "&quot;");
        return '<option value="' + sicher + '">' + sicher + '</option>';
      }).join("");
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const fehlt = !name.value.trim() || !text.value.trim();
      if (fehler) fehler.hidden = !fehlt;
      if (fehlt) {
        (!name.value.trim() ? name : text).focus();
        return;
      }

      const betreff = "[FaNiCa] " + (thema ? thema.value : "Nachricht");
      const koerper =
        text.value.trim() + "\n\n" +
        "---\n" +
        "Von: " + name.value.trim() +
        (mail.value.trim() ? "\nAntwort an: " + mail.value.trim() : "") +
        "\nGesendet ueber die FaNiCa-Website";

      window.location.href = "mailto:" + KONTAKT_MAIL +
        "?subject=" + encodeURIComponent(betreff) +
        "&body=" + encodeURIComponent(koerper);
    });

    // Tippt jemand nach einer Fehlermeldung weiter, verschwindet sie
    [name, text].forEach(function (f) {
      if (f) f.addEventListener("input", function () {
        if (fehler) fehler.hidden = true;
      });
    });
  }

  /* ========================================================
     11) JAHR IM FUSS
     ======================================================== */
  function jahrEinrichten() {
    const j = document.getElementById("jahr");
    if (j) j.textContent = new Date().getFullYear();
  }

  /* ========================================================
     12) LESEFORTSCHRITT — Strich unter der Kopfzeile
     ======================================================== */
  function fortschrittEinrichten() {
    const balken = document.querySelector(".fortschritt");
    if (!balken) return;
    let geplant = false;
    const messen = () => {
      geplant = false;
      const hoehe = document.documentElement.scrollHeight - window.innerHeight;
      const anteil = hoehe > 0 ? Math.min(1, window.scrollY / hoehe) : 0;
      balken.style.setProperty("--anteil", anteil.toFixed(4));
    };
    const anstossen = () => {
      if (geplant) return;
      geplant = true;
      requestAnimationFrame(messen);
    };
    addEventListener("scroll", anstossen, { passive: true });
    addEventListener("resize", anstossen, { passive: true });
    messen();
  }

  /* ========================================================
     13) HANDY-NEIGUNG — die Mockups kippen zur Maus
     ======================================================== */
  function neigenEinrichten() {
    if (ruhig || matchMedia("(hover: none)").matches) return;
    const geraete = document.querySelectorAll("[data-neigen]");
    if (!geraete.length) return;

    geraete.forEach(g => {
      let laeuft = false;

      const bewegen = (e) => {
        if (laeuft) return;
        laeuft = true;
        requestAnimationFrame(() => {
          laeuft = false;
          const r = g.getBoundingClientRect();
          // -0,5 … +0,5 relativ zur Mitte des Geräts
          const px = (e.clientX - r.left) / r.width - .5;
          const py = (e.clientY - r.top) / r.height - .5;
          const kippY = px * 16;          // Grad um die Hochachse
          const kippX = -py * 12;         // Grad um die Querachse
          g.style.transform =
            `perspective(1100px) rotateX(${kippX.toFixed(2)}deg) ` +
            `rotateY(${kippY.toFixed(2)}deg) translateZ(14px) scale(1.03)`;
          // Reflex wandert mit
          g.style.setProperty("--glanzwinkel", (135 + px * 90).toFixed(0) + "deg");
          g.style.setProperty("--glanzstaerke", (.45 + Math.abs(px) * .5).toFixed(2));
        });
      };

      const zurueck = () => {
        g.style.transform = "";
        g.style.removeProperty("--glanzwinkel");
        g.style.removeProperty("--glanzstaerke");
      };

      g.addEventListener("mousemove", bewegen);
      g.addEventListener("mouseleave", zurueck);
    });
  }

  /* ========================================================
     15) ZIELSCHEIBE — Zone anklicken, Punkte je System sehen
     ======================================================== */
  function scheibeEinrichten() {
    const buehne = document.getElementById("scheibe-buehne");
    const tafel = document.getElementById("scheibe-tafel");
    if (!buehne || !tafel) return;

    const zonen = T("instinct.scheibeZonen") || [];
    const systeme = T("instinct.scheibeSysteme") || [];
    if (!zonen.length) return;

    /* --- Scheibe zeichnen: Tierumriss mit den Wertungszonen --- */
    // Die Zonen liegen ineinander — außen "Vorbei", innen "Spot".
    const ringe = [
      { rx: 132, ry: 104 },   // Vorbei  (Körperumriss)
      { rx:  92, ry:  74 },   // Körper
      { rx:  56, ry:  45 },   // Kill
      { rx:  26, ry:  21 }    // Spot
    ];
    // zonen[] ist von innen (Spot) nach außen sortiert → umdrehen
    const vonAussen = [...zonen].reverse();

    buehne.innerHTML = `
      <svg viewBox="0 0 340 340" role="img"
           aria-label="Zielscheibe mit den Wertungszonen — Zone wählen">
        <defs>
          <radialGradient id="scheibeGrund">
            <stop offset="0%" stop-color="#1C2318"/>
            <stop offset="100%" stop-color="#0B0E0A"/>
          </radialGradient>
        </defs>
        <circle cx="170" cy="170" r="160" fill="url(#scheibeGrund)"
                stroke="rgba(255,255,255,.09)"/>
        ${vonAussen.map((z, i) => `
          <ellipse class="scheibe-zone" data-zone="${i}"
                   cx="170" cy="170" rx="${ringe[i].rx}" ry="${ringe[i].ry}"
                   fill="${z.farbe}"
                   stroke="rgba(0,0,0,.45)" stroke-width="1.5"
                   tabindex="0" role="button"
                   aria-label="${z.name}">
            <title>${z.name}</title>
          </ellipse>`).join("")}
        <circle cx="170" cy="170" r="4" fill="#EDEBE3" pointer-events="none"/>
        ${vonAussen.map((z, i) => `
          <text x="170" y="${170 - ringe[i].ry + 16}"
                text-anchor="middle" font-size="12" font-weight="700"
                fill="#EDEBE3"
                stroke="rgba(8,10,6,.8)" stroke-width="3"
                paint-order="stroke"
                font-family="system-ui, sans-serif">${z.name}</text>`).join("")}
      </svg>`;

    /* --- Tafel füllen --- */
    const zeigen = (index) => {
      // index bezieht sich auf vonAussen
      const z = vonAussen[index];
      if (!z) return;
      tafel.innerHTML = `
        <div class="wertung-kopf">
          <b>${z.name}</b>
          <span>${T("instinct.scheibeSpalte")}</span>
        </div>
        <table class="wertung">
          <tbody>
            ${systeme.map(s => `
              <tr>
                <td>${s}</td>
                <td>${z.punkte[s] !== undefined ? z.punkte[s] : "–"}</td>
              </tr>`).join("")}
          </tbody>
        </table>`;
      buehne.querySelectorAll(".scheibe-zone").forEach((e, i) => {
        e.classList.toggle("aktiv", i === index);
      });
    };

    buehne.querySelectorAll(".scheibe-zone").forEach((e) => {
      const i = parseInt(e.dataset.zone, 10);
      e.addEventListener("click", () => zeigen(i));
      e.addEventListener("keydown", (ev) => {
        if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); zeigen(i); }
      });
    });

    zeigen(vonAussen.length - 1);   // Start: innerste Zone (Spot)
  }

  /* ========================================================
     14) KARTEN-LICHT — Schein folgt dem Zeiger
     ======================================================== */
  function kartenLichtEinrichten() {
    if (ruhig || matchMedia("(hover: none)").matches) return;
    let laeuft = false;
    document.addEventListener("mousemove", (e) => {
      if (laeuft) return;
      laeuft = true;
      requestAnimationFrame(() => {
        laeuft = false;
        const karte = e.target.closest && e.target.closest(".karte");
        if (!karte) return;
        const r = karte.getBoundingClientRect();
        karte.style.setProperty("--mx", (e.clientX - r.left) + "px");
        karte.style.setProperty("--my", (e.clientY - r.top) + "px");
      });
    }, { passive: true });
  }

  /* ---- Bögen: auf dem Handy klappbar, ab 780 px dauerhaft offen ----
     Falk 31.07.: „die Bögen werden klappbar und nicht so groß auf dem
     Handy dargestellt". <details> ist von Haus aus zu; ab Tablet-Breite
     öffnen wir alle und lassen sie offen (das CSS blendet dort Pfeil und
     Mini-Vorschau aus, so wirkt der Kopf wie eine normale Überschrift). */
  function boegenEinrichten() {
    const boegen = document.querySelectorAll("details.bogen");
    if (!boegen.length) return;
    const breit = window.matchMedia("(min-width: 780px)");

    function anpassen() {
      boegen.forEach(b => {
        if (breit.matches) b.open = true;
        else b.removeAttribute("open");
      });
    }
    anpassen();
    /* Beim Umschalten der Breite (Drehen des Handys, Fenster ziehen)
       nachziehen — sonst bliebe ein am Rechner geöffneter Bogen auf
       dem Handy aufgeklappt und die Seite wäre wieder zu lang. */
    if (breit.addEventListener) breit.addEventListener("change", anpassen);
    else breit.addListener(anpassen);          /* ältere Browser */
  }

  /* ======================================================== START */
  function start() {
    texteEinsetzen();
    spracheEinrichten();
    kopfEinrichten();
    kapitelEinrichten();
    einblendenEinrichten();
    zaehlerEinrichten();
    rafferEinrichten();
    spielEinrichten();
    qrEinrichten();
    spurenEinrichten();
    markenpunkteEinrichten();
    formularEinrichten();
    jahrEinrichten();
    fortschrittEinrichten();
    neigenEinrichten();
    kartenLichtEinrichten();
    scheibeEinrichten();
    boegenEinrichten();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
