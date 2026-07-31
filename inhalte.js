/* ============================================================
   inhalte.js — baut die wiederkehrenden Bausteine aus texte.js.
   Läuft VOR app.js, damit app.js die fertigen Teile findet.
   ============================================================ */

(function () {
  "use strict";

  const el = (id) => document.getElementById(id);
  const sicher = (s) => String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

  function bauen() {
    const t = TEXTE[window.SPRACHE] && TEXTE[window.SPRACHE].instinct
      ? TEXTE[window.SPRACHE] : TEXTE.de;
    const de = TEXTE.de;
    const hol = (weg) => {
      const teile = weg.split(".");
      let a = t, b = de;
      for (const s of teile) {
        a = (a && a[s] !== undefined) ? a[s] : undefined;
        b = (b && b[s] !== undefined) ? b[s] : undefined;
      }
      return (a !== undefined) ? a : b;
    };

    /* ---------------- INSTINCT: Funktionsblöcke ---------------- */
    /* Retina: zu jedem Bild gibt es eine @2x-Fassung aus dem Original.
       srcset lässt 4K-/Retina-Bildschirme automatisch die scharfe wählen. */
    const zwei = (pfad) => pfad.replace(/\.webp$/, "@2x.webp");

    /* Blöcke ohne Bild (bild: null) werden als breite Karte gesetzt.
       Grund: Für diese Funktionen gibt es nur Screenshots des LEEREN
       Zustands ("Noch keine Bögen") — die zeigen die App schlechter,
       als sie ist. Lieber kein Bild als ein nichtssagendes. */
    const iBloecke = el("instinct-bloecke");
    if (iBloecke) {
      iBloecke.innerHTML = hol("instinct.bloecke").map((b, i) => {
        const text = `
            <span class="karten-nr">${sicher(b.kennung)}</span>
            <h3>${sicher(b.titel)}</h3>
            <p>${sicher(b.text)}</p>
            <ul class="liste">
              ${b.punkte.map(p => `<li>${sicher(p)}</li>`).join("")}
            </ul>`;

        if (!b.bild) {
          return `<div class="block block-ohne-bild">
                    <div class="block-text auf">${text}</div>
                  </div>`;
        }
        return `
        <div class="block ${i % 2 ? "gedreht" : ""}">
          <div class="block-text auf">${text}</div>
          <div class="block-bild auf v2">
            <div class="handy" data-neigen>
              <img src="${sicher(b.bild)}"
                   srcset="${sicher(b.bild)} 1x, ${sicher(zwei(b.bild))} 2x"
                   alt="${sicher(b.alt)}"
                   width="300" height="649" loading="lazy" decoding="async">
              <div class="handy-glanz" aria-hidden="true"></div>
            </div>
          </div>
        </div>`;
      }).join("");
    }

    /* ---------------- INSTINCT: Datenschutz-Liste ---------------- */
    const iDaten = el("instinct-daten");
    if (iDaten) {
      iDaten.innerHTML = hol("instinct.datenPunkte")
        .map(p => `<li>${sicher(p)}</li>`).join("");
    }

    /* ---------------- INSTINCT: Versprechen ---------------- */
    const iVer = el("instinct-versprechen");
    if (iVer) {
      iVer.innerHTML = hol("instinct.versprechen").map(v => `
        <div class="zahl">
          <b>${sicher(v.zahl)}</b>
          <span>${sicher(v.text)}</span>
        </div>`).join("");
    }

    /* ---------------- INSTINCT: Zielgruppe ---------------- */
    const iZiel = el("instinct-zielgruppe");
    if (iZiel) {
      iZiel.innerHTML = hol("instinct.zielgruppe")
        .map(z => `<span>${sicher(z)}</span>`).join("");
    }

    /* ---------------- INSTINCT: Bogenarten mit Zeichnung ----------------
       Die vier Bögen als SVG-Silhouette — jede Form ist charakteristisch:
       Recurve mit zurückgebogenen Enden, Langbogen als schlichter Bogen,
       Blankbogen wie Recurve ohne Anbauten, Compound mit Rollen. */
    const BOGEN_SVG = {
      "Recurve": `
        <svg viewBox="0 0 120 200" fill="none" aria-hidden="true">
          <path d="M60 14 C 34 34, 30 78, 40 100 C 30 122, 34 166, 60 186"
                stroke="var(--bf)" stroke-width="6" stroke-linecap="round"/>
          <path d="M60 14 C 74 18, 80 26, 78 34" stroke="var(--bf)"
                stroke-width="6" stroke-linecap="round"/>
          <path d="M60 186 C 74 182, 80 174, 78 166" stroke="var(--bf)"
                stroke-width="6" stroke-linecap="round"/>
          <line x1="78" y1="32" x2="78" y2="168" stroke="rgba(237,235,227,.75)" stroke-width="2"/>
          <rect x="34" y="86" width="14" height="28" rx="5" fill="var(--bf)" opacity=".85"/>
          <circle cx="78" cy="100" r="3.4" fill="#EDEBE3"/>
        </svg>`,
      "Langbogen": `
        <svg viewBox="0 0 120 200" fill="none" aria-hidden="true">
          <path d="M62 12 C 32 56, 32 144, 62 188"
                stroke="var(--bf)" stroke-width="6" stroke-linecap="round"/>
          <line x1="62" y1="12" x2="62" y2="188" stroke="rgba(237,235,227,.75)" stroke-width="2"/>
          <rect x="36" y="88" width="12" height="24" rx="4" fill="var(--bf)" opacity=".7"/>
          <circle cx="62" cy="100" r="3.4" fill="#EDEBE3"/>
        </svg>`,
      "Blankbogen": `
        <svg viewBox="0 0 120 200" fill="none" aria-hidden="true">
          <path d="M60 16 C 36 36, 32 78, 42 100 C 32 122, 36 164, 60 184"
                stroke="var(--bf)" stroke-width="6" stroke-linecap="round"/>
          <path d="M60 16 C 72 20, 77 27, 75 35" stroke="var(--bf)"
                stroke-width="6" stroke-linecap="round"/>
          <path d="M60 184 C 72 180, 77 173, 75 165" stroke="var(--bf)"
                stroke-width="6" stroke-linecap="round"/>
          <line x1="75" y1="33" x2="75" y2="167" stroke="rgba(237,235,227,.75)" stroke-width="2"/>
          <rect x="36" y="86" width="14" height="28" rx="5" fill="var(--bf)" opacity=".85"/>
          <circle cx="75" cy="100" r="3.4" fill="#EDEBE3"/>
          <path d="M75 108 l0 16" stroke="#EDEBE3" stroke-width="1.6" opacity=".55"/>
          <path d="M75 130 l0 12" stroke="#EDEBE3" stroke-width="1.6" opacity=".35"/>
        </svg>`,
      "Compound": `
        <svg viewBox="0 0 120 200" fill="none" aria-hidden="true">
          <path d="M56 40 C 38 62, 38 138, 56 160"
                stroke="var(--bf)" stroke-width="7" stroke-linecap="round"/>
          <circle cx="57" cy="34" r="13" stroke="var(--bf)" stroke-width="5" fill="none"/>
          <circle cx="57" cy="166" r="13" stroke="var(--bf)" stroke-width="5" fill="none"/>
          <circle cx="57" cy="34" r="3" fill="var(--bf)"/>
          <circle cx="57" cy="166" r="3" fill="var(--bf)"/>
          <line x1="70" y1="34" x2="70" y2="166" stroke="rgba(237,235,227,.75)" stroke-width="2"/>
          <line x1="57" y1="47" x2="70" y2="72" stroke="rgba(237,235,227,.45)" stroke-width="1.6"/>
          <line x1="57" y1="153" x2="70" y2="128" stroke="rgba(237,235,227,.45)" stroke-width="1.6"/>
          <rect x="40" y="86" width="16" height="30" rx="5" fill="var(--bf)" opacity=".9"/>
          <circle cx="70" cy="100" r="3.4" fill="#EDEBE3"/>
        </svg>`
    };

    const iBoegen = el("instinct-boegen");
    if (iBoegen) {
      /* Klappbar (<details>): auf dem Handy zugeklappt und schmal,
         ab 780 px per CSS dauerhaft offen (Falk 31.07.: „die Bögen werden
         klappbar und nicht so groß auf dem Handy dargestellt"). */
      iBoegen.innerHTML = hol("instinct.boegen").map(b => `
        <details class="bogen auf" style="--bf:${sicher(b.farbe)}">
          <summary class="bogen-kopf">
            <span class="bogen-vorschau" aria-hidden="true">${BOGEN_SVG[b.name] || ""}</span>
            <span class="bogen-titel">
              <b>${sicher(b.name)}</b>
              <span class="bogen-kurz">${sicher(b.kurz)}</span>
            </span>
            <span class="bogen-pfeil" aria-hidden="true"></span>
          </summary>
          <div class="bogen-inhalt">
            <div class="bogen-buehne">${BOGEN_SVG[b.name] || ""}</div>
            <p class="bogen-text">${sicher(b.text)}</p>
            <div class="bogen-daten">
              <span>${sicher(hol("instinct.boegenErfasst"))}</span>
              ${b.erfasst.map(e => `<b>${sicher(e)}</b>`).join("")}
            </div>
          </div>
        </details>`).join("");
    }

    /* ---------------- INSTINCT: Pfeil-Begriffe ---------------- */
    const iPfeile = el("instinct-pfeile");
    if (iPfeile) {
      iPfeile.innerHTML = hol("instinct.pfeile").map(p => `
        <div class="begriff">
          <b>${sicher(p.begriff)}</b>
          <p>${sicher(p.erklaerung)}</p>
        </div>`).join("");
    }

    /* ---------------- INSTINCT: Parcours-Begriffe ---------------- */
    const iBegriffe = el("instinct-begriffe");
    if (iBegriffe) {
      iBegriffe.innerHTML = hol("instinct.parcoursBegriffe").map(b => `
        <div class="begriff">
          <b>${sicher(b.begriff)}</b>
          <p>${sicher(b.text)}</p>
        </div>`).join("");
    }

    /* ---------------- INSTINCT: Glossar der Bogen-Begriffe ---------------- */
    const iGlossar = el("instinct-glossar");
    if (iGlossar) {
      iGlossar.innerHTML = hol("instinct.glossar").map(g => `
        <div class="begriff">
          <b>${sicher(g.begriff)}</b>
          <p>${sicher(g.text)}</p>
        </div>`).join("");
    }

    /* ---------------- INSTINCT: Wer legt die Wertungen fest ---------------- */
    const iVerb = el("instinct-verbaende");
    if (iVerb) {
      iVerb.innerHTML = hol("instinct.verbaende").map(v => `
        <div class="verband">
          <b>${sicher(v.name)}</b>
          <em>${sicher(v.lang)}</em>
          <p>${sicher(v.text)}</p>
        </div>`).join("");
    }

    /* ---------------- INSTINCT: Spine-Eingabefelder ---------------- */
    const iSpine = el("instinct-spine-felder");
    if (iSpine) {
      iSpine.innerHTML = hol("instinct.spineEingaben").map(f => `
        <div class="spine-feld">
          <b>${sicher(f.feld)}</b>
          <span>${sicher(f.hinweis)}</span>
        </div>`).join("");
    }

    /* ---------------- INSTINCT: Die drei Stufen ---------------- */
    const iStufen = el("instinct-stufen");
    if (iStufen) {
      iStufen.innerHTML = hol("instinct.stufen").map(s => `
        <div class="stufe auf ${s.hervor ? "hervor" : ""}">
          <h4>${sicher(s.name)}</h4>
          <div class="stufe-preis">${sicher(s.preis)}</div>
          <div class="stufe-zeile">${sicher(s.zeile)}</div>
          <ul>${s.kann.map(k => `<li>${sicher(k)}</li>`).join("")}</ul>
          <div class="stufe-grenze">${sicher(s.grenze)}</div>
        </div>`).join("");
    }

    /* ---------------- ÜBER: Zahlen ---------------- */
    const uZahlen = el("ueber-zahlen");
    if (uZahlen) {
      uZahlen.innerHTML = hol("ueber.zahlen").map(z => `
        <div class="zahl">
          <b data-zaehler="${sicher(z.zahl)}">0</b>
          <span>${sicher(z.text)}</span>
        </div>`).join("");
    }

    /* ---------------- ÜBER: Ablauf ---------------- */
    const uAblauf = el("ueber-ablauf");
    if (uAblauf) {
      uAblauf.innerHTML = hol("ueber.ablauf").map(s => `
        <div class="ablauf-schritt">
          <b>${sicher(s.nr)}</b>
          <h4>${sicher(s.titel)}</h4>
          <p>${sicher(s.text)}</p>
        </div>`).join("");
    }

    /* ---------------- FUNKTIONSUMFANG je App ----------------
       Dieselbe Bauart in allen drei Kapiteln: Zahlenreihe, dann die
       wichtigsten Funktionen als Raster, dann die Anzeigen als Liste. */
    ["instinct"].forEach(app => {
      const zahlen = el(app + "-umfang-zahlen");
      if (zahlen) {
        zahlen.innerHTML = hol(app + ".umfangZahlen").map(z => `
          <div class="zahl">
            <b data-zaehler="${sicher(z.zahl)}">0</b>
            <span>${sicher(z.text)}</span>
          </div>`).join("");
      }

      const liste = el(app + "-umfang-liste");
      if (liste) {
        liste.innerHTML = hol(app + ".umfangListe").map(f => `
          <div class="funktion">
            <b>${sicher(f.name)}</b>
            <span>${sicher(f.text)}</span>
          </div>`).join("");
      }

      const anzeigen = el(app + "-umfang-anzeigen");
      if (anzeigen) {
        anzeigen.innerHTML = hol(app + ".umfangAnzeigen")
          .map(a => `<li>${sicher(a)}</li>`).join("");
      }
    });

    /* ---------------- KONTAKT: wobei ich helfen kann ---------------- */
    const kWobei = el("kontakt-wobei");
    if (kWobei) {
      kWobei.innerHTML = hol("kontakt.wobei").map(w => `
        <div class="begriff">
          <b>${sicher(w.was)}</b>
          <p>${sicher(w.text)}</p>
        </div>`).join("");
    }

    /* ---------------- IMPRESSUM: Anschrift + Angaben ---------------- */
    const iAnschrift = el("impressum-anschrift");
    if (iAnschrift) {
      // \n aus texte.js in echte Zeilenumbrüche wandeln
      iAnschrift.innerHTML = sicher(hol("kontakt.anbieter")).replace(/\n/g, "<br>");
    }
    const iZeilen = el("impressum-zeilen");
    if (iZeilen) {
      iZeilen.innerHTML = hol("kontakt.impressumZeilen").map(z => `
        <div class="begriff">
          <b>${sicher(z.was)}</b>
          <p>${sicher(z.text)}</p>
        </div>`).join("");
    }

    /* ---------------- STUDIO: die anderen Apps ----------------
       Verweise zurück auf die Entwickler-Website. Die Kacheln sind
       ganz anklickbar, nicht nur der Name. */
    const sApps = el("studio-apps");
    if (sApps) {
      sApps.innerHTML = hol("studio.apps").map(a => `
        <a class="begriff" href="${sicher(a.url)}" rel="noopener"
           style="display:block;text-decoration:none">
          <b>${sicher(a.was)} ↗</b>
          <p>${sicher(a.text)}</p>
        </a>`).join("");
    }

    /* ---------------- INSTINCT: Startseiten-Vorstellung ----------------
       Nummerierte Punkte — sie entsprechen der Reihenfolge der Knöpfe
       auf dem Screenshot daneben. */
    const iStart = el("instinct-start-punkte");
    if (iStart) {
      iStart.innerHTML = hol("instinct.startPunkte").map((p, i) => `
        <li class="startpunkt">
          <b class="startpunkt-nr">${i + 1}</b>
          <div>
            <b class="startpunkt-name">${sicher(p.name)}</b>
            <span>${sicher(p.text)}</span>
          </div>
        </li>`).join("");
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bauen);
  } else {
    bauen();
  }
})();
