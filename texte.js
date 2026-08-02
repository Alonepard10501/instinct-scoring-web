/* ============================================================
   texte.js — ALLE Texte der Instinct-Scoring-Seite an EINER Stelle.
   Uebernommen aus der Entwickler-Website (Projekte\Webseite), auf die
   Bloecke dieser Seite zugeschnitten.
   Uebersetzen = hier den EN-Block fuellen, kein Umbau noetig.
   Sprache umschalten: window.SPRACHE = 'de' | 'en'
   ============================================================ */

const TEXTE = {

/* ---------------------------------------------------------- DEUTSCH */
de: {

  meta: {
    titel: "FaNiCa — Falk Carstensen · Apps aus einem Ein-Mann-Studio",
    beschreibung: "Drei fertige Apps aus einem Ein-Mann-Medienstudio: Instinct Scoring für Bogensport, FaNiCa Fun als private Tipprunde und NeonPunkt, das minimalistischste Spiel der Welt.",
    sprachknopf: "EN",
    sprachtitel: "Switch to English"
  },

  nav: {
    apps: "Die Apps",
    ueber: "Über mich",
    kontakt: "Kontakt",
    sprung: "Zum Inhalt springen"
  },

  instinct: {
    kennung: "Kapitel 02",
    kooperation: "by Bogensport Instinct · in Kooperation mit FaNiCa Fun",
    name: "Instinct Scoring",
    claim: ["TRACK.", "SCORE.", "IMPROVE."],
    claimDeutsch: "Dein Parcours. Deine Leistung. Dein Fortschritt.",
    zitat: "Der Schütze entscheidet. Die App dokumentiert.",
    positionierung: "Die Scoring-App für traditionelles und instinktives Bogenschießen auf 3D- und Feldparcours. Sie ersetzt den Papierzettel. Komplett offline. Sie bewertet nichts und korrigiert nichts — sie dokumentiert.",


    /* --- Die Hauptseite der App vorstellen (Falk 30.07.) --- */
    startTitel: "Die Startseite",
    startText: "Alles beginnt hier. Ein Tipp auf den grünen Knopf und die Runde läuft — Wertungssystem, Modus und Schützen stehen schon vom letzten Mal. Darunter Profil, Turnier und Statistik. Was Premium braucht, steht offen dabei; nichts ist versteckt.",
    startPunkte: [
      { name: "Neue Runde", text: "Der Hauptknopf. Führt in zwei Tipps zur laufenden Runde." },
      { name: "Profil", text: "Deine Schützen, Bögen und Pfeilsetups an einem Ort." },
      { name: "Turnier", text: "Mehrere Runden zu einem Wettkampf zusammenfassen." },
      { name: "Statistiken", text: "Fortschritt und Auswertungen über alle Runden." }
    ],
    startZeile: "„Alle Daten bleiben auf deinem Gerät. Internet ist nie Voraussetzung.“ — steht so in der App.",
    bildStart2: "bilder/instinct/start.webp",
    bildStart2Alt: "Instinct Scoring: Startseite mit Bogenschützen-Logo, Waldkulisse und dem Menü Neue Runde, Profil, Turnier, Statistiken",

    bloecke: [
      {
        kennung: "01",
        titel: "Runden erfassen",
        text: "Fünf Wertungssysteme, Training oder Turnier per Schalter, mehrere Schützen je Runde. Die Trefferzonen-Tasten sind groß genug für den Handschuh — erfasst in Sekunden.",
        punkte: [
          "Fünf Systeme: IFAA Hunter und Animal, Scheibe, WA 3D, Freizeit 3D — wer sie festlegt, steht weiter unten",
          "Training oder Turnier — ein Schalter",
          "Mehrere Schützen je Runde, Gruppen mit einem Tipp",
          "Große Trefferzonen: Kill · Körper · Treffer · Vorbei",
          "Zwischenstand jederzeit, Endergebnis mit Podium",
          "Abgeschlossene Runden sind unveränderlich"
        ],
        bild: "bilder/instinct/runde.webp",
        alt: "Instinct Scoring: Bildschirm zum Erfassen einer Runde mit großen Trefferzonen-Tasten"
      },
      {
        kennung: "02",
        titel: "Parcours & Ziele",
        text: "Lege deine Parcours einmal an — mit Tiermotiv, Entfernung, Pflock und Steigung. Beim nächsten Mal stehen alle Ziele schon da.",
        punkte: [
          "Eigene Parcours mit allen Zielen anlegen",
          "Tiermotiv, Entfernung, Pflock, Steigung je Ziel",
          "Foto je Ziel direkt aus der App aufnehmen",
          "Parcours wählen — alle Ziele stehen automatisch in der Runde"
        ],
        bild: null,   // vorhandener Screenshot zeigt nur den leeren Zustand
        alt: ""
      },
      {
        kennung: "03",
        titel: "Ausrüstung",
        text: "Bögen und Pfeilsetups mit allen Details. Das Entscheidende: Die Ausrüstung wird je Runde als Momentaufnahme festgehalten — änderst du später etwas, bleibt die Historie trotzdem korrekt.",
        punkte: [
          "Bögen: Typ, Zuggewicht, Standhöhe, Tiller, Sehne",
          "Pfeile: Schaft, Spine, Länge, Gewicht, FOC, Befiederung, Spitze",
          "Je Runde als Momentaufnahme fixiert",
          "Die Historie bleibt echt — auch nach Umbauten"
        ],
        bild: null,   // vorhandener Screenshot zeigt nur den leeren Zustand
        alt: ""
      },
      {
        kennung: "04",
        titel: "Statistik",
        text: "Punkteschnitt, Trefferquote je Zone und der Verlauf über die Zeit. Keine Bewertung, keine Ratschläge — nur deine Zahlen.",
        punkte: [
          "Punkteschnitt und Trefferquote je Zone",
          "Verlauf über die Zeit als Diagramm",
          "Komplette Runden-Historie mit allen Details"
        ],
        bild: null,   // vorhandener Screenshot zeigt nur den leeren Zustand
        alt: ""
      }
    ],

    /* --- Interaktive Zielscheibe: die Wertungssysteme im Vergleich ---
       Zahlen 1:1 aus dem App-Quellcode
       (features/scoring/domain/model/builtin_scoring_systems.dart).
       Nichts geraten — bei Änderungen in der App hier nachziehen. */
    scheibeTitel: "Fünf Wertungssysteme, eine Scheibe",
    scheibeText: "Tipp auf eine Zone — du siehst sofort, was sie in jedem System zählt. Genau diese Umrechnung nimmt dir die App im Parcours ab.",
    scheibeHinweis: "Zone antippen",
    scheibeSpalte: "Zone",
    scheibeFussnote: "Werte des ersten Pfeils. „Freizeit 3D“ ist eine Vereinsvariante, keine offizielle DSB-Wertung.",
    scheibeZonen: [
      { name: "Spot", farbe: "#A7BC55",
        punkte: { "IFAA Hunter": 20, "IFAA Animal": 20, "Scheibe": 5, "WA 3D": 11, "Freizeit 3D": 18 } },
      { name: "Kill", farbe: "#8DA046",
        punkte: { "IFAA Hunter": 16, "IFAA Animal": 16, "Scheibe": 4, "WA 3D": 10, "Freizeit 3D": 16 } },
      { name: "Körper", farbe: "#5E6B33",
        punkte: { "IFAA Hunter": 12, "IFAA Animal": 12, "Scheibe": 3, "WA 3D": 8, "Freizeit 3D": 10 } },
      { name: "Vorbei", farbe: "#2A2E24",
        punkte: { "IFAA Hunter": 0, "IFAA Animal": 0, "Scheibe": 0, "WA 3D": 0, "Freizeit 3D": 0 } }
    ],
    scheibeSysteme: ["IFAA Hunter", "IFAA Animal", "Scheibe", "WA 3D", "Freizeit 3D"],

    /* --- Funktionsumfang (Zahlen aus dem Quellcode gezaehlt) --- */
    umfangTitel: "Was drinsteckt",
    umfangText: "Instinct Scoring ist die größte der drei Apps. 23 Bildschirme, 19 Funktionsbereiche — hier das Wichtigste im Überblick.",
    umfangZahlen: [
      { zahl: "23", text: "Bildschirme" },
      { zahl: "19", text: "Funktionsbereiche" },
      { zahl: "5", text: "Wertungssysteme" },
      { zahl: "30", text: "Schützen-Symbole" }
    ],
    umfangListe: [
      { name: "Runde führen", text: "Ziel für Ziel werten, unterbrechen und später fortsetzen — die App merkt sich, wo du warst." },
      { name: "Mehrere Schützen", text: "Gruppen und Teams in derselben Runde, jeder mit eigener Farbe und eigenem Symbol." },
      { name: "Zwischenstand", text: "Rangliste und Durchschnitt mitten in der Runde, ohne sie zu unterbrechen." },
      { name: "Podium am Ende", text: "Auswertung mit Platz 1 bis 3 und allen Kennzahlen der Runde." },
      { name: "Parcours-Verwaltung", text: "Ziele mit Motiv, Entfernung, Pflockfarbe und Steigung — einmal angelegt, immer da." },
      { name: "Bögen & Pfeile", text: "Vollständige technische Daten, je Runde als Momentaufnahme eingefroren." },
      { name: "Spine-Rechner", text: "Sagt dir, welche Schaftsteifigkeit zu deinem Bogen passt (Premium)." },
      { name: "Statistik", text: "Punkteschnitt, Trefferquote je Zone, Punkteverlauf als Diagramm." },
      { name: "Zuggewicht-Vergleich", text: "Mit welcher Bogenstärke triffst du tatsächlich besser?" },
      { name: "Auswertung nach Tierart", text: "Welche Motive dir liegen — und welche nicht." },
      { name: "Turniere", text: "Termine aus einem Online-Feed verfolgen und eigene Turniere anlegen." },
      { name: "Scheibenfotos", text: "Trefferbilder mit Datum und Namen archivieren." },
      { name: "PDF & CSV", text: "Rundenbericht als PDF teilen, Daten als CSV ausgeben." },
      { name: "Backup", text: "Vollständige Sicherung mit Prüfsumme — Ungültiges wird nie eingespielt." }
    ],
    umfangAnzeigenTitel: "Was die Statistik zeigt",
    umfangAnzeigen: [
      "Punkteschnitt je Ziel und je Pfeil",
      "Trefferquote je Zone, mit Anzahl und Prozent",
      "Rundenzahl, Ziele, Pfeile und dein Rekord",
      "Punkteverlauf über die Zeit als Liniendiagramm",
      "Welcher Bogen in wie vielen Runden im Einsatz war",
      "Duelle und Team-Wertung, wenn ihr in Gruppen schießt",
      "Zuggewicht-Vergleich als Balken",
      "Durchschnitt je Tierart"
    ],
    umfangFilter: "Alles filterbar nach Schütze, Zuggewicht und Modus.",

    /* --- Kleines Glossar: die Begriffe am Bogen (Falk 30.07.) --- */
    glossarTitel: "Die Begriffe am Bogen",
    glossarText: "Wer neu dabei ist, stolpert über ein paar Wörter. Hier stehen sie in einem Satz erklärt — alles davon erfasst die App zu deinem Bogen.",
    glossar: [
      { begriff: "Zuggewicht",
        text: "Die Kraft in Pfund, die du beim vollen Auszug halten musst. Höheres Zuggewicht heißt schnellerer Pfeil, aber auch mehr Anstrengung." },
      { begriff: "Standhöhe",
        text: "Der Abstand zwischen Sehne und Griff bei ungespanntem Bogen. Schon wenige Millimeter ändern, wie ruhig der Bogen im Schuss liegt." },
      { begriff: "Tiller",
        text: "Der Unterschied, wie stark oberer und unterer Wurfarm vorgespannt sind. Stimmt er nicht, kippt der Bogen beim Lösen." },
      { begriff: "Nockpunkt",
        text: "Die markierte Stelle auf der Sehne, an der der Pfeil eingehängt wird. Immer dieselbe Stelle heißt: immer derselbe Abflug." },
      { begriff: "Wurfarm",
        text: "Die beiden federnden Schenkel des Bogens. Sie speichern die Energie und geben sie an den Pfeil ab." },
      { begriff: "Schaft",
        text: "Das Rohr des Pfeils — aus Carbon, Aluminium oder Holz. Seine Steifigkeit ist der Spine." },
      { begriff: "Insert",
        text: "Die kleine Hülse vorn im Schaft, in die die Spitze geschraubt wird. Zählt beim Spitzengewicht mit." },
      { begriff: "Grain",
        text: "Die Gewichtseinheit im Bogensport. 1 Grain sind etwa 0,065 Gramm — Spitzen wiegen typisch 80 bis 125 Grain." },
      { begriff: "Let-off",
        text: "Nur beim Compound: Wie viel Zuggewicht dir die Umlenkrollen im Vollauszug abnehmen. Bei 80 % hältst du von 60 Pfund nur noch 12." }
    ],

    /* --- Wer legt die Regeln fest? --- */
    verbaendeTitel: "Wer legt die Wertungen fest?",
    verbaende: [
      { name: "IFAA",
        lang: "International Field Archery Association",
        text: "Weltverband für Feld- und 3D-Bogensport. Von ihm stammen die Runden „Hunter“ und „Animal“ mit der 20/16/12-Wertung." },
      { name: "WA",
        lang: "World Archery",
        text: "Der olympische Dachverband. Seine 3D-Wertung 11/10/8/5 gilt bei offiziellen Turnieren und auch beim DSB." },
      { name: "Vereins­varianten",
        lang: "ohne Verband",
        text: "„Scheibe“ und „Freizeit 3D“ sind keine offiziellen Regelwerke, sondern verbreitete Hausrunden. Die App kennt sie trotzdem — geschossen wird, was vor Ort gilt." }
    ],

    datenTitel: "Deine Daten gehören dir",
    datenText: "Kein Konto. Keine Anmeldung. Keine Werbung. Kein Tracking. Die App braucht das Internet nie — sie funktioniert im Wald genauso wie zu Hause.",
    datenPunkte: [
      "100 % offline — alles bleibt auf deinem Gerät",
      "Backup als Datei, jederzeit wieder einspielbar",
      "Ergebnis-Bericht als PDF teilen"
    ],

    versprechenTitel: "Gebaut für draußen",
    versprechen: [
      { zahl: "3 s", text: "Jede wichtige Aktion in höchstens drei Sekunden" },
      { zahl: "1 Hand", text: "Große Knöpfe, Einhand-Bedienung mit Handschuh" },
      { zahl: "Sonne", text: "Kontraste, die auch bei Gegenlicht lesbar bleiben" }
    ],

    /* --- Erklärteil: die Bogenarten, für die die App gemacht ist --- */
    boegenTitel: "Für welche Bögen?",
    boegenText: "Die App macht keinen Unterschied zwischen den Bogenarten — sie erfasst zu jedem Bogen die Werte, die für ihn wichtig sind. Hier, was das jeweils heißt.",
    boegen: [
      {
        name: "Recurve",
        kurz: "Der olympische",
        text: "Wurfarme, die sich am Ende nach vorn zurückbiegen — daher der Name. Das gibt mehr Pfeilgeschwindigkeit bei gleichem Zuggewicht. Meist mit Visier, Stabilisator und Klicker geschossen.",
        erfasst: ["Zuggewicht", "Standhöhe", "Tiller", "Sehnenmaterial"],
        farbe: "#A7BC55"
      },
      {
        name: "Langbogen",
        kurz: "Der traditionelle",
        text: "Ein durchgehender, leicht gebogener Stab ohne Recurve-Enden. Kein Visier, kein Zubehör — geschossen wird instinktiv. Ruhiger im Schuss, aber langsamer und verzeihender im Fehler.",
        erfasst: ["Zuggewicht", "Bogenlänge", "Standhöhe", "Sehnenmaterial"],
        farbe: "#8DA046"
      },
      {
        name: "Blankbogen",
        kurz: "Der nackte",
        text: "Ein Recurve ohne Visier und Stabilisator — also „blank“. Gezielt wird über die Pfeilspitze oder per Stringwalking, also durch Umgreifen der Sehne. Beliebteste Klasse auf 3D-Parcours.",
        erfasst: ["Zuggewicht", "Standhöhe", "Tiller", "Nockpunkt"],
        farbe: "#7C8B3E"
      },
      {
        name: "Compound",
        kurz: "Der technische",
        text: "Mit Umlenkrollen an den Wurfarmenden. Im Vollauszug hält man nur noch einen Bruchteil des Zuggewichts — das erlaubt langes, ruhiges Zielen. Höchste Präzision, meist mit Release geschossen.",
        erfasst: ["Zuggewicht", "Let-off", "Auszugslänge", "Nockpunkt"],
        farbe: "#6B7A3A"
      }
    ],
    boegenErfasst: "Die App erfasst:",

    /* --- Erklärteil: Pfeildaten, die die App je Setup festhält --- */
    pfeileTitel: "Und was am Pfeil zählt",
    pfeileText: "Zu jedem Pfeilsetup hält die App die Werte fest, die den Flug bestimmen. Änderst du später etwas, bleiben die alten Runden trotzdem korrekt — die Ausrüstung wird je Runde als Momentaufnahme eingefroren.",
    pfeile: [
      { begriff: "Spine", erklaerung: "Wie stark sich der Schaft beim Schuss durchbiegt. Passt er nicht zum Bogen, fliegt der Pfeil schief." },
      { begriff: "FOC", erklaerung: "Wie weit der Schwerpunkt vorn liegt. Mehr FOC heißt stabilerer Flug, aber flachere Bahn auf Distanz." },
      { begriff: "Befiederung", erklaerung: "Naturfeder oder Kunststoff, Länge und Anstellwinkel — sie stabilisiert den Pfeil hinten." },
      { begriff: "Spitzengewicht", erklaerung: "In Grain. Verändert FOC und Gesamtgewicht und damit den Treffpunkt." }
    ],

    /* --- Erklärteil: Der Spine-Rechner (Premium, seit 1.6.0) --- */
    spineTitel: "Der Spine-Rechner",
    spineFrage: "Was ist Spine überhaupt?",
    spineAntwort: "Spine ist die Steifigkeit des Pfeilschafts — wie stark er sich beim Schuss durchbiegt. Der Pfeil schlängelt sich um den Bogen herum, statt gerade abzufliegen. Ist der Schaft zu weich oder zu steif für deinen Bogen, verlässt er den Bogen schief und trifft daneben, egal wie sauber du schießt.",
    spineWarum: "Deshalb der Rechner: Du gibst ein, was du hast — er sagt dir, welche Schaftsteifigkeit dazu passt. Für Holzpfeile in Pfund, für Carbonpfeile als Spine-Zahl (kleinere Zahl = steiferer Schaft).",
    spineEingabeTitel: "Das gibst du ein",
    spineEingaben: [
      { feld: "Zuggewicht", hinweis: "in Pfund, auf den Fingern gemessen" },
      { feld: "Pfeillänge", hinweis: "in Zoll, reine Schaftlänge ohne Spitze und Nocke" },
      { feld: "Spitze + Insert", hinweis: "in Grain" },
      { feld: "Sehnenstränge", hinweis: "Anzahl, 4 bis 28" },
      { feld: "Sehnenmaterial", hinweis: "Fast Flight oder Dacron" },
      { feld: "Wurfarmmaterial", hinweis: "von Vollcarbon bis Holz/Bambus" },
      { feld: "Bogentyp", hinweis: "Recurve, Langbogen oder Hybrid" }
    ],
    spineErgebnisTitel: "Das kommt heraus",
    spineErgebnis: "Zwei Werte samt Toleranzband: den Holzspine in Pfund und den Carbonspine als Zahl. Dazu die Einordnung „eher hart“, „optimal“ oder „eher weich“ und die handelsüblichen Spine-Größen von 250 bis 1500, damit du weißt, welchen Schaft du tatsächlich kaufen kannst. Das Ergebnis lässt sich direkt als neues Pfeilsetup übernehmen.",
    spineHinweis: "Der Spine-Rechner gehört zu Premium.",

    /* --- Erklärteil: Parcours, Pflock, Duell --- */
    parcoursTitel: "Parcours, Pflock, Duell — kurz erklärt",
    parcoursBegriffe: [
      { begriff: "3D-Parcours",
        text: "Ein Rundkurs im Gelände mit Tierattrappen aus Schaumstoff statt Ringscheiben. Man geht von Ziel zu Ziel, meist 20 bis 28 Stück, und schießt jedes einmal — wie beim Golf, nur mit Pfeilen." },
      { begriff: "Pflock",
        text: "Der Punkt im Boden, von dem aus geschossen wird. Die Farbe sagt, für wen er gilt und wie weit es bis zum Ziel ist. Die App kennt Rot, Blau, Gelb und Weiß." },
      { begriff: "Kill / Spot",
        text: "Die kleine Trefferzone im Tier, die die meisten Punkte bringt. Darum herum liegen weitere Zonen mit weniger Punkten — wie die Ringe einer Scheibe, nur unsichtbar in die Figur eingearbeitet." },
      { begriff: "Steigung",
        text: "Bergauf oder bergab verändert die tatsächliche Schussweite. Die App hält je Ziel fest, ob es eben, bergauf oder bergab lag." },
      { begriff: "Duell-Modus",
        text: "Zwei oder mehr Teams treten gegeneinander an. Die Rundenpunkte aller Mitglieder werden addiert, oben läuft der Zwischenstand mit — „Team A 123 : 98 Team B“. Gehört zu Premium+." }
    ],

    /* --- Die drei Stufen (Werte aus upgrade_page.dart) --- */
    stufenTitel: "Drei Stufen",
    stufenText: "Sieben Tage lang ist alles frei — danach entscheidest du. Runden schießen und werten geht immer, auch ohne Abo.",
    stufen: [
      {
        name: "Gratis",
        preis: "0 €",
        zeile: "für immer",
        kann: ["Runden spielen & werten", "Eigene Parcours anlegen",
               "Ziel-Fotos aufnehmen", "Bogen & Pfeilsetup anlegen",
               "Sicherung erstellen"],
        grenze: "3 Schützen · 1 Bogen je Schütze · Historie 1 Runde"
      },
      {
        name: "Premium",
        preis: "1,99 €",
        zeile: "je 4 Wochen · 19,99 € im Jahr",
        kann: ["Beliebig viele Schützen", "Gruppen & Teams",
               "Mehrere Bögen & Setups", "Komplette Statistik",
               "Turniere", "Spine-Rechner", "Sicherung einspielen"],
        grenze: "Historie 3 Runden · 10 Symbole · 1 Spine-Profil",
        hervor: true
      },
      {
        name: "Premium+",
        preis: "2,99 €",
        zeile: "je 4 Wochen · 29,99 € im Jahr",
        kann: ["Volle Historie", "Duell-Modus",
               "Parcours-Suche nach PLZ & Umkreis",
               "Alle 30 Farben & Symbole", "Spine-Profile speichern",
               "Statistik-Export als CSV", "App-Symbol wechseln"],
        grenze: "Keine Grenzen"
      }
    ],

    zielgruppe: ["Recurve", "Langbogen", "Blankbogen", "Compound", "traditionell"],
    preis: "Sieben Tage Premium+ gratis testen, danach ab 1,99 € je 4 Wochen. Runden schießen und werten bleibt dauerhaft kostenlos.",
    /* Ehrlicher Zwischenstand statt toter Store-Knöpfe — beide Store-Seiten
       liefern noch 404, solange die Prüfung läuft. Text austauschen, sobald
       die App freigegeben ist. */
    storeStatus: "Die App liegt bei Google Play und im App Store zur Prüfung. Bis zur Freigabe kannst du sie hier im Browser ausprobieren.",
    mehrKnopf: "Alles über Instinct Scoring",
    mehrText: "Die vier Bogenarten mit Zeichnung, der Spine-Rechner erklärt, das Glossar der Bogen-Begriffe, wer welche Wertung festlegt und die drei Preisstufen im Vergleich.",
    bildStart: "bilder/instinct/start.webp",
    bildStartAlt: "Instinct Scoring: Startbildschirm mit Bogenschützen-Logo vor Waldkulisse"
  },

  aktion: {
    browser: "Im Browser testen",
    browserSpielen: "Im Browser spielen",
    browserFehlt: "Web-Fassung folgt",
    play: "Bei Google Play",
    playBald: "Play Store — bald verfügbar",
    apple: "Im App Store",
    appleBald: "App Store — bald verfügbar",
    datenschutz: "Datenschutz",
    qrTitel: "Mit dem Handy öffnen",
    qrText: "Kamera drauf halten — die Web-Fassung öffnet sich sofort.",
    inPruefung: "in Prüfung"
  },

  ueber: {
    kennung: "Kapitel 04",
    titel: "Ein Mensch, ein Studio",
    text: "Ich bin aus Nordfriesland und arbeite allein. Kein Team, kein Büro, kein Investor. Was ich habe, ist eine klare Vorstellung davon, wie eine App sich anfühlen soll — und KI als Werkzeugkasten, der mir die Arbeit abnimmt, für die früher fünf Leute nötig waren.",
    textZwei: "Meine Apps haben eines gemeinsam: Sie funktionieren offline, sie sammeln nichts über dich, und sie bevormunden dich nicht. Das ist keine Marketing-Haltung, sondern die einzige, die ich selbst auf meinem Handy dulden würde.",

    ablaufTitel: "Wie ein Projekt entsteht",
    ablauf: [
      { nr: "01", titel: "Idee", text: "Meist ein Ärgernis aus dem Alltag. Instinct Scoring entstand, weil der Papierzettel im Regen aufweicht." },
      { nr: "02", titel: "Spezifikation", text: "Alles wird aufgeschrieben, bevor eine Zeile Code entsteht. Was die App NICHT kann, steht genauso drin." },
      { nr: "03", titel: "Bau", text: "Flutter für alles, was auf Android und iPhone gleich aussehen soll, Kotlin dort, wo es näher ans Gerät geht. KI schreibt mit, ich entscheide." },
      { nr: "04", titel: "Test", text: "Auf echten Geräten, draußen, mit Handschuh. Was am Schreibtisch gut aussieht, versagt oft im Wald." },
      { nr: "05", titel: "Store", text: "Google Play und App Store, beide Prüfungen, alle Formulare. Der langweiligste und lehrreichste Teil." }
    ],

    zahlen: [
      { zahl: "3", text: "fertige Apps" },
      { zahl: "2", text: "Stores" },
      { zahl: "16", text: "Sprachen" }
    ],

    portraetAlt: "Grafisches Porträt: Bogenschützen-Silhouette zwischen Neon-Ringen"
  },

  kontakt: {
    kennung: "Kapitel 05",
    titel: "Schreib mir",
    text: "Fragen zu einer App, ein Fehler gefunden, eine Idee? Ich lese jede Mail selbst — es gibt ja niemand anderen.",
    knopf: "fanicafuntipp@gmail.com",
    mail: "fanicafuntipp@gmail.com",

    /* --- Aufklappbarer Kontaktbereich (Falk 30.07.) --- */
    klappTitel: "Nachricht schreiben",
    klappText: "Wähle ein Thema, trag deinen Namen und deine E-Mail ein und schreib, worum es geht. Beim Absenden öffnet sich dein E-Mail-Programm mit der fertigen Nachricht — du musst sie nur noch abschicken.",

    /* --- Formularfelder --- */
    formThema: "Worum geht es?",
    formThemen: [
      "Fehler in einer App",
      "Wunsch für eine Funktion",
      "Frage zum Abo",
      "Frage zu einer App",
      "Etwas anderes"
    ],
    formName: "Dein Name",
    formNamePlatz: "Vorname genügt",
    formMail: "Deine E-Mail",
    formMailPlatz: "damit ich antworten kann",
    formText: "Deine Nachricht",
    formTextPlatz: "Schreib einfach los …",
    formKnopf: "Nachricht schreiben",
    formHinweis: "Es öffnet sich dein E-Mail-Programm mit allem schon eingetragen. Nichts wird von dieser Seite aus verschickt oder gespeichert.",
    formFehlt: "Bitte fülle Thema, Name und Nachricht aus.",
    wobei: [
      { was: "Fehler gefunden", text: "Schreib mir, welche App, welches Gerät und was passiert ist. Ein Screenshot hilft sehr." },
      { was: "Funktion gewünscht", text: "Sag mir, was dir fehlt und warum. Vieles ist schneller gebaut, als man denkt." },
      { was: "Frage zum Abo", text: "Abos laufen über Google Play bzw. den App Store — kündigen kannst du dort jederzeit selbst." },
      { was: "Etwas anderes", text: "Auch gut. Ich freue mich über jede Rückmeldung." }
    ],
    antwortzeit: "Ich bin kein Support-Team, sondern eine Person — an Wochenenden kann es also mal einen Tag dauern.",

    /* --- Impressum, aufklappbar auf der Startseite --- */
    impressumTitel: "Impressum",
    impressumUnter: "Angaben gemäß § 5 DDG",
    anbieter: "Falk Carstensen\nAm Hasselberg 19\n25813 Husum\nDeutschland",
    impressumZeilen: [
      { was: "Verantwortlich für den Inhalt", text: "Falk Carstensen, Anschrift wie oben." },
      { was: "Streitschlichtung", text: "Ich bin nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen." },
      { was: "Haftung für Links", text: "Für die Inhalte verlinkter Seiten (Google Play, App Store, Web-Fassungen) sind deren Betreiber verantwortlich. Zum Zeitpunkt der Verlinkung war nichts zu beanstanden." },
      { was: "Markenhinweis", text: "Google Play ist eine Marke von Google LLC, App Store eine Marke von Apple Inc. FaNiCa Fun ist eine unabhängige Fan-App ohne Verbindung zur Formula One Group." }
    ],
    impressumMehr: "Vollständiges Impressum als eigene Seite"
  },

  fuss: {
    impressum: "Impressum",
    datenschutz: "Datenschutz",
    bildquellen: "Bildquellen",
    lizenzen: "Lizenzen",
    kooperation: "Instinct Scoring ist eine Kooperation mit Bogensport Instinct.",
    copyright: "© 2026 FaNiCa · Falk Carstensen",
    kein: "Diese Seite setzt keine Cookies, lädt nichts von fremden Servern und misst nichts.",
    zurueck: "Nach oben"
  },

  zurueckKnopf: "← Zurück zur Startseite",

  /* Verweise zurück ins Entwicklerstudio (die FaNiCa-Seite mit allen Apps). */
  studio: {
    text: "Instinct Scoring entsteht bei FaNiCa, einem Ein-Mann-Medienstudio in Husum — in Kooperation mit Bogensport Instinct. Dort liegen auch die anderen Apps, die Entstehungsgeschichte und der Weg, mich zu erreichen.",
    knopf: "Zum Entwicklerstudio",
    kontaktKnopf: "Kontakt aufnehmen",
    appsTitel: "Die anderen Apps",
    apps: [
      { was: "FaNiCa Fun",
        text: "Die private Tipprunde für Freundesgruppen: Top-5-Tipps je Rennen, Rangliste, Trophäen und Runden-Chat.",
        url: "https://alonepard10501.github.io/fanica/fanica-fun.html" },
      { was: "NeonPunkt",
        text: "Ein Punkt, der wächst, solange du ihn hältst. Das minimalistischste Spiel der Welt — in 16 Sprachen.",
        url: "https://alonepard10501.github.io/fanica/neonpunkt.html" }
    ]
  }
},

/* ---------------------------------------------------------- ENGLISCH */
en: {

  meta: {
    titel: "FaNiCa — Falk Carstensen · Apps from a one-man studio",
    beschreibung: "Three finished apps from a one-man media studio: Instinct Scoring for archery, FaNiCa Fun as a private prediction game, and NeonPunkt, the world's most minimal game.",
    sprachknopf: "DE",
    sprachtitel: "Auf Deutsch umschalten"
  },

  nav: {
    apps: "The apps",
    ueber: "About me",
    kontakt: "Contact",
    sprung: "Skip to content"
  },

  instinct: {
    kennung: "Chapter 02",
    kooperation: "by Bogensport Instinct · in cooperation with FaNiCa Fun",
    name: "Instinct Scoring",
    claim: ["TRACK.", "SCORE.", "IMPROVE."],
    claimDeutsch: "Your course. Your performance. Your progress.",
    zitat: "The archer decides. The app records.",
    positionierung: "The scoring app for traditional and instinctive archery on 3D and field courses. It replaces the paper scorecard. Fully offline. It doesn't judge and it doesn't correct — it records.",

    startTitel: "The home screen",
    startText: "Everything starts here. One tap on the green button and your round is running — scoring system, mode and archers are already set from last time. Below that: profile, tournament and statistics. Anything that needs Premium says so openly; nothing is hidden.",
    startPunkte: [
      { name: "New round", text: "The main button. Two taps and you're scoring." },
      { name: "Profile", text: "Your archers, bows and arrow setups in one place." },
      { name: "Tournament", text: "Combine several rounds into one competition." },
      { name: "Statistics", text: "Progress and analysis across all your rounds." }
    ],
    startZeile: "„All data stays on your device. Internet is never required.“ — that's what the app itself says.",
    bildStart2: "bilder/instinct/start.webp",
    bildStart2Alt: "Instinct Scoring: home screen with archer logo, forest backdrop and the menu New round, Profile, Tournament, Statistics",

    umfangTitel: "What's inside",
    umfangText: "Instinct Scoring is the largest of the three apps. 23 screens, 19 feature areas — here's what matters most.",
    umfangZahlen: [
      { zahl: "23", text: "screens" },
      { zahl: "19", text: "feature areas" },
      { zahl: "5", text: "scoring systems" },
      { zahl: "30", text: "archer symbols" }
    ],
    umfangListe: [
      { name: "Run a round", text: "Score target by target, pause and pick up later — the app remembers where you were." },
      { name: "Several archers", text: "Groups and teams in the same round, each with their own colour and symbol." },
      { name: "Running total", text: "Ranking and average mid-round, without interrupting it." },
      { name: "Podium at the end", text: "Final result with places one to three and every figure from the round." },
      { name: "Course management", text: "Targets with animal, distance, stake colour and slope — set up once, there forever." },
      { name: "Bows & arrows", text: "Full technical data, frozen as a snapshot for each round." },
      { name: "Spine calculator", text: "Tells you which shaft stiffness suits your bow (Premium)." },
      { name: "Statistics", text: "Average score, hit rate per zone, score history as a chart." },
      { name: "Draw weight comparison", text: "Which bow strength do you actually shoot better with?" },
      { name: "Analysis by animal", text: "Which targets suit you — and which don't." },
      { name: "Tournaments", text: "Follow dates from an online feed and create your own tournaments." },
      { name: "Target photos", text: "Archive shot pictures with date and name." },
      { name: "PDF & CSV", text: "Share a round report as PDF, export your data as CSV." },
      { name: "Backup", text: "Full backup with a checksum — nothing invalid is ever restored." }
    ],
    umfangAnzeigenTitel: "What the statistics show",
    umfangAnzeigen: [
      "Average score per target and per arrow",
      "Hit rate per zone, with count and percentage",
      "Rounds, targets, arrows and your record",
      "Score history over time as a line chart",
      "Which bow was used in how many rounds",
      "Duels and team scoring when you shoot in groups",
      "Draw weight comparison as bars",
      "Average per animal type"
    ],
    umfangFilter: "All filterable by archer, draw weight and mode.",

    bloecke: [
      {
        kennung: "01",
        titel: "Scoring a round",
        text: "Five scoring systems, training or tournament at the flick of a switch, several archers per round. The zone buttons are big enough for a glove — scored in seconds.",
        punkte: [
          "Five systems: IFAA Hunter and Animal, Target, WA 3D, Club 3D — who defines them is explained below",
          "Training or tournament — one switch",
          "Several archers per round, groups in one tap",
          "Large hit zones: Kill · Body · Hit · Miss",
          "Running total any time, final result with podium",
          "Completed rounds cannot be changed"
        ],
        bild: "bilder/instinct/runde.webp",
        alt: "Instinct Scoring: screen for scoring a round with large hit-zone buttons"
      },
      {
        kennung: "02",
        titel: "Courses & targets",
        text: "Set up your courses once — with animal, distance, stake and slope. Next time every target is already there.",
        punkte: [
          "Create your own courses with all targets",
          "Animal, distance, stake, slope per target",
          "Take a photo of each target straight from the app",
          "Pick a course — every target is automatically in the round"
        ],
        bild: null,
        alt: ""
      },
      {
        kennung: "03",
        titel: "Equipment",
        text: "Bows and arrow setups with every detail. The key part: equipment is frozen as a snapshot for each round — change something later and your history still stays correct.",
        punkte: [
          "Bows: type, draw weight, brace height, tiller, string",
          "Arrows: shaft, spine, length, weight, FOC, fletching, point",
          "Frozen as a snapshot per round",
          "Your history stays true — even after rebuilds"
        ],
        bild: null,
        alt: ""
      },
      {
        kennung: "04",
        titel: "Statistics",
        text: "Average score, hit rate per zone and how it develops over time. No judgement, no advice — just your numbers.",
        punkte: [
          "Average score and hit rate per zone",
          "Development over time as a chart",
          "Complete round history with every detail"
        ],
        bild: null,
        alt: ""
      }
    ],

    scheibeTitel: "Five scoring systems, one target",
    scheibeText: "Tap a zone — you'll see straight away what it counts in each system. That conversion is exactly what the app handles for you out on the course.",
    scheibeHinweis: "Tap a zone",
    scheibeSpalte: "Zone",
    scheibeFussnote: "First-arrow values. „Club 3D“ is a club variant, not an official governing-body scoring system.",
    scheibeZonen: [
      { name: "Spot", farbe: "#A7BC55",
        punkte: { "IFAA Hunter": 20, "IFAA Animal": 20, "Scheibe": 5, "WA 3D": 11, "Freizeit 3D": 18 } },
      { name: "Kill", farbe: "#8DA046",
        punkte: { "IFAA Hunter": 16, "IFAA Animal": 16, "Scheibe": 4, "WA 3D": 10, "Freizeit 3D": 16 } },
      { name: "Body", farbe: "#5E6B33",
        punkte: { "IFAA Hunter": 12, "IFAA Animal": 12, "Scheibe": 3, "WA 3D": 8, "Freizeit 3D": 10 } },
      { name: "Miss", farbe: "#2A2E24",
        punkte: { "IFAA Hunter": 0, "IFAA Animal": 0, "Scheibe": 0, "WA 3D": 0, "Freizeit 3D": 0 } }
    ],
    scheibeSysteme: ["IFAA Hunter", "IFAA Animal", "Scheibe", "WA 3D", "Freizeit 3D"],

    boegenTitel: "Which bows is it for?",
    boegenText: "The app doesn't care which bow you shoot — it records the values that matter for that bow. Here's what those are.",
    boegen: [
      {
        name: "Recurve",
        kurz: "The olympic one",
        text: "Limbs that curve back away from the archer at the tips — hence the name. That gives more arrow speed at the same draw weight. Usually shot with a sight, stabiliser and clicker.",
        erfasst: ["Draw weight", "Brace height", "Tiller", "String material"],
        farbe: "#A7BC55"
      },
      {
        name: "Longbow",
        kurz: "The traditional one",
        text: "One continuous, gently curved stave with no recurved tips. No sight, no accessories — you shoot instinctively. Quieter in the shot, but slower and more forgiving of mistakes.",
        erfasst: ["Draw weight", "Bow length", "Brace height", "String material"],
        farbe: "#8DA046"
      },
      {
        name: "Barebow",
        kurz: "The bare one",
        text: "A recurve without sight or stabiliser — hence „bare“. You aim over the arrow point or by stringwalking, gripping the string at different heights. The most popular class on 3D courses.",
        erfasst: ["Draw weight", "Brace height", "Tiller", "Nocking point"],
        farbe: "#7C8B3E"
      },
      {
        name: "Compound",
        kurz: "The technical one",
        text: "With cams at the limb tips. At full draw you only hold a fraction of the draw weight — which allows long, steady aiming. Highest precision, usually shot with a release aid.",
        erfasst: ["Draw weight", "Let-off", "Draw length", "Nocking point"],
        farbe: "#6B7A3A"
      }
    ],
    boegenErfasst: "The app records:",

    pfeileTitel: "And what matters on the arrow",
    pfeileText: "For every arrow setup the app keeps the values that govern flight. Change something later and your old rounds stay correct — equipment is frozen as a snapshot for each round.",
    pfeile: [
      { begriff: "Spine", erklaerung: "How much the shaft bends on the shot. If it doesn't suit your bow, the arrow flies crooked." },
      { begriff: "FOC", erklaerung: "How far forward the balance point sits. More FOC means steadier flight, but a flatter trajectory at distance." },
      { begriff: "Fletching", erklaerung: "Natural feather or plastic vane, length and helical angle — it steadies the arrow from behind." },
      { begriff: "Point weight", erklaerung: "In grains. Changes FOC and total weight, and with it your point of impact." }
    ],

    glossarTitel: "The words on a bow",
    glossarText: "Newcomers trip over a few terms. Here they are, each in one sentence — and the app records all of them for your bow.",
    glossar: [
      { begriff: "Draw weight",
        text: "The force in pounds you hold at full draw. More draw weight means a faster arrow, but also more effort." },
      { begriff: "Brace height",
        text: "The gap between string and grip on a strung bow. A few millimetres change how steady the bow sits in the shot." },
      { begriff: "Tiller",
        text: "How differently the upper and lower limb are tensioned. Get it wrong and the bow tips as you release." },
      { begriff: "Nocking point",
        text: "The marked spot on the string where the arrow clips on. Same spot every time means the same departure every time." },
      { begriff: "Limb",
        text: "The two springy arms of the bow. They store the energy and hand it to the arrow." },
      { begriff: "Shaft",
        text: "The tube of the arrow — carbon, aluminium or wood. Its stiffness is the spine." },
      { begriff: "Insert",
        text: "The small sleeve at the front of the shaft that the point screws into. It counts towards point weight." },
      { begriff: "Grain",
        text: "The unit of weight in archery. One grain is about 0.065 grams — points typically weigh 80 to 125 grains." },
      { begriff: "Let-off",
        text: "Compound only: how much draw weight the cams take off you at full draw. At 80 %, 60 pounds becomes just 12." }
    ],

    verbaendeTitel: "Who defines the scoring?",
    verbaende: [
      { name: "IFAA",
        lang: "International Field Archery Association",
        text: "The world body for field and 3D archery. The Hunter and Animal rounds with their 20/16/12 scoring come from them." },
      { name: "WA",
        lang: "World Archery",
        text: "The olympic governing body. Its 3D scoring of 11/10/8/5 applies at official tournaments and in German DSB competition." },
      { name: "Club variants",
        lang: "no governing body",
        text: "„Target“ and „Club 3D“ aren't official rulebooks but common house rounds. The app knows them anyway — you shoot whatever applies locally." }
    ],

    spineTitel: "The spine calculator",
    spineFrage: "What is spine, anyway?",
    spineAntwort: "Spine is the stiffness of the arrow shaft — how much it bends on the shot. The arrow snakes around the bow rather than leaving it straight. If the shaft is too soft or too stiff for your bow, it leaves crooked and misses, however cleanly you shoot.",
    spineWarum: "Hence the calculator: you enter what you have, it tells you which shaft stiffness fits. For wooden arrows in pounds, for carbon arrows as a spine number (lower number = stiffer shaft).",
    spineEingabeTitel: "What you enter",
    spineEingaben: [
      { feld: "Draw weight", hinweis: "in pounds, measured on the fingers" },
      { feld: "Arrow length", hinweis: "in inches, bare shaft without point and nock" },
      { feld: "Point + insert", hinweis: "in grains" },
      { feld: "String strands", hinweis: "count, 4 to 28" },
      { feld: "String material", hinweis: "Fast Flight or Dacron" },
      { feld: "Limb material", hinweis: "from full carbon to wood/bamboo" },
      { feld: "Bow type", hinweis: "recurve, longbow or hybrid" }
    ],
    spineErgebnisTitel: "What comes out",
    spineErgebnis: "Two values with a tolerance band: wooden spine in pounds and carbon spine as a number. Plus a verdict — „rather stiff“, „optimal“ or „rather weak“ — and the shop-standard spine sizes from 250 to 1500, so you know which shaft you can actually buy. The result can be saved straight away as a new arrow setup.",
    spineHinweis: "The spine calculator is part of Premium.",

    parcoursTitel: "Course, stake, duel — briefly explained",
    parcoursBegriffe: [
      { begriff: "3D course",
        text: "A circuit through the terrain with foam animal targets instead of ring faces. You walk from target to target, usually 20 to 28 of them, shooting each once — like golf, but with arrows." },
      { begriff: "Stake",
        text: "The marker in the ground you shoot from. Its colour says who it's for and how far it is to the target. The app knows red, blue, yellow and white." },
      { begriff: "Kill / Spot",
        text: "The small scoring zone inside the animal that's worth the most. Around it lie further zones worth less — like the rings of a target face, only invisible, worked into the figure." },
      { begriff: "Slope",
        text: "Uphill or downhill changes the effective shooting distance. The app records for each target whether it was flat, uphill or downhill." },
      { begriff: "Duel mode",
        text: "Two or more teams compete. The round scores of all members are added up and the running total shows at the top — „Team A 123 : 98 Team B“. Part of Premium+." }
    ],

    datenTitel: "Your data belongs to you",
    datenText: "No account. No sign-up. No ads. No tracking. The app never needs the internet — it works in the woods just as it does at home.",
    datenPunkte: [
      "100 % offline — everything stays on your device",
      "Backup as a file, restorable any time",
      "Share your result report as a PDF"
    ],

    versprechenTitel: "Built for outdoors",
    versprechen: [
      { zahl: "3 s", text: "Every important action in three seconds or less" },
      { zahl: "1 hand", text: "Large buttons, one-handed use with a glove on" },
      { zahl: "Sun", text: "Contrast that stays readable in bright light" }
    ],

    stufenTitel: "Three tiers",
    stufenText: "Everything is free for seven days — then you decide. Shooting and scoring rounds always works, even without a subscription.",
    stufen: [
      {
        name: "Free",
        preis: "€0",
        zeile: "forever",
        kann: ["Shoot & score rounds", "Create your own courses",
               "Take target photos", "Create a bow & arrow setup",
               "Create a backup"],
        grenze: "3 archers · 1 bow each · history of 1 round"
      },
      {
        name: "Premium",
        preis: "€1.99",
        zeile: "per 4 weeks · €19.99 per year",
        kann: ["Any number of archers", "Groups & teams",
               "Several bows & setups", "Full statistics",
               "Tournaments", "Spine calculator", "Restore a backup"],
        grenze: "History of 3 rounds · 10 symbols · 1 spine profile",
        hervor: true
      },
      {
        name: "Premium+",
        preis: "€2.99",
        zeile: "per 4 weeks · €29.99 per year",
        kann: ["Full history", "Duel mode",
               "Course search by postcode & radius",
               "All 30 colours & symbols", "Save spine profiles",
               "Statistics export as CSV", "Change the app icon"],
        grenze: "No limits"
      }
    ],

    zielgruppe: ["Recurve", "Longbow", "Barebow", "Compound", "traditional"],
    preis: "Seven days of Premium+ free, then from €1.99 per four weeks. Shooting and scoring rounds stays free forever.",
    storeStatus: "The app is under review at Google Play and the App Store. Until it is released you can try it here in your browser.",
    mehrKnopf: "Everything about Instinct Scoring",
    mehrText: "The four bow types with drawings, the spine calculator explained, the glossary of archery terms, who defines which scoring and the three tiers compared.",
    bildStart: "bilder/instinct/start.webp",
    bildStartAlt: "Instinct Scoring: home screen with archer logo against a forest backdrop"
  },

  aktion: {
    browser: "Try it in the browser",
    browserSpielen: "Play in the browser",
    browserFehlt: "Web version coming",
    play: "On Google Play",
    playBald: "Play Store — coming soon",
    apple: "On the App Store",
    appleBald: "App Store — coming soon",
    datenschutz: "Privacy",
    qrTitel: "Open on your phone",
    qrText: "Point your camera at it — the web version opens straight away.",
    inPruefung: "in review"
  },

  ueber: {
    kennung: "Chapter 04",
    titel: "One person, one studio",
    text: "I'm from Northern Germany and I work alone. No team, no office, no investor. What I do have is a clear idea of how an app should feel — and AI as a toolbox that takes on the work that used to need five people.",
    textZwei: "My apps have one thing in common: they work offline, they collect nothing about you, and they don't patronise you. That isn't a marketing stance but the only one I'd tolerate on my own phone.",

    ablaufTitel: "How a project comes about",
    ablauf: [
      { nr: "01", titel: "Idea", text: "Usually an everyday annoyance. Instinct Scoring exists because paper scorecards go soggy in the rain." },
      { nr: "02", titel: "Specification", text: "Everything gets written down before a line of code exists. What the app will NOT do is in there too." },
      { nr: "03", titel: "Building", text: "Flutter for anything that should look the same on Android and iPhone, Kotlin where it needs to sit closer to the device. AI writes alongside me, I decide." },
      { nr: "04", titel: "Testing", text: "On real devices, outdoors, wearing a glove. What looks good at a desk often fails in the woods." },
      { nr: "05", titel: "Store", text: "Google Play and the App Store, both reviews, every form. The dullest and most instructive part." }
    ],

    zahlen: [
      { zahl: "3", text: "finished apps" },
      { zahl: "2", text: "stores" },
      { zahl: "16", text: "languages" }
    ],

    portraetAlt: "Graphic portrait: archer silhouette between neon rings"
  },

  kontakt: {
    kennung: "Chapter 05",
    titel: "Write to me",
    text: "Questions about an app, found a bug, got an idea? I read every email myself — there's nobody else.",
    knopf: "fanicafuntipp@gmail.com",
    mail: "fanicafuntipp@gmail.com",

    klappTitel: "Write a message",
    klappText: "Pick a topic, enter your name and email and write what it's about. When you send, your email program opens with the message ready — you just hit send.",

    formThema: "What's it about?",
    formThemen: [
      "A bug in an app",
      "A feature request",
      "Question about the subscription",
      "Question about an app",
      "Something else"
    ],
    formName: "Your name",
    formNamePlatz: "first name is enough",
    formMail: "Your email",
    formMailPlatz: "so I can reply",
    formText: "Your message",
    formTextPlatz: "Just start writing …",
    formKnopf: "Write the message",
    formHinweis: "Your email program opens with everything filled in. Nothing is sent or stored from this page.",
    formFehlt: "Please fill in topic, name and message.",
    wobei: [
      { was: "Found a bug", text: "Tell me which app, which device and what happened. A screenshot helps a lot." },
      { was: "Want a feature", text: "Tell me what's missing and why. Plenty of things are quicker to build than you'd think." },
      { was: "Question about the subscription", text: "Subscriptions run through Google Play or the App Store — you can cancel there yourself at any time." },
      { was: "Something else", text: "Also good. I'm glad of any feedback." }
    ],
    antwortzeit: "I'm not a support team but one person — at weekends it can take a day.",

    impressumTitel: "Legal notice",
    impressumUnter: "Information pursuant to § 5 DDG (German law)",
    anbieter: "Falk Carstensen\nAm Hasselberg 19\n25813 Husum\nGermany",
    impressumZeilen: [
      { was: "Responsible for content", text: "Falk Carstensen, address as above." },
      { was: "Dispute resolution", text: "I am neither obliged nor willing to take part in dispute resolution proceedings before a consumer arbitration board." },
      { was: "Liability for links", text: "The operators of linked sites (Google Play, App Store, web versions) are responsible for their content. Nothing was objectionable at the time of linking." },
      { was: "Trademark notice", text: "Google Play is a trademark of Google LLC, App Store a trademark of Apple Inc. FaNiCa Fun is an independent fan app with no connection to the Formula One Group." }
    ],
    impressumMehr: "Full legal notice as a separate page"
  },

  fuss: {
    impressum: "Legal notice",
    datenschutz: "Privacy",
    bildquellen: "Image credits",
    lizenzen: "Licences",
    kooperation: "Instinct Scoring is a cooperation with Bogensport Instinct.",
    copyright: "© 2026 FaNiCa · Falk Carstensen",
    kein: "This site sets no cookies, loads nothing from third-party servers and measures nothing.",
    zurueck: "Back to top"
  },

  zurueckKnopf: "← Back to the home page",

  studio: {
    text: "Instinct Scoring is built at FaNiCa, a one-man media studio in Husum, Germany — in cooperation with Bogensport Instinct. That is also where the other apps live, along with the story behind them and a way to get in touch.",
    knopf: "Visit the developer studio",
    kontaktKnopf: "Get in touch",
    appsTitel: "The other apps",
    apps: [
      { was: "FaNiCa Fun",
        text: "A private prediction game for groups of friends: top-5 picks per race, standings, trophies and a round chat.",
        url: "https://alonepard10501.github.io/fanica/fanica-fun.html" },
      { was: "NeonPunkt",
        text: "A dot that grows as long as you hold it. The most minimalist game in the world — in 16 languages.",
        url: "https://alonepard10501.github.io/fanica/neonpunkt.html" }
    ]
  }
}
};

/* Sprache bestimmen und Rueckfall auf Deutsch, wenn eine Uebersetzung fehlt. */
window.SPRACHE = (localStorage.getItem("instinct_sprache") === "en") ? "en" : "de";

function T(pfad) {
  const teile = pfad.split(".");
  let a = TEXTE[window.SPRACHE], b = TEXTE.de;
  for (const t of teile) {
    a = (a && a[t] !== undefined) ? a[t] : undefined;
    b = (b && b[t] !== undefined) ? b[t] : undefined;
  }
  return (a !== undefined && a !== null && a !== "") ? a : b;
}
