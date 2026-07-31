# Instinct-Scoring-Webseite — Anleitung

Die **eigenständige** Internetseite für Instinct Scoring. Sie steht für sich
allein: eigener Ordner, eigene Kopien von CSS, JavaScript und Bildern, eigenes
Git-Repo. Wird an der Entwickler-Website etwas geändert, ändert sich hier
**nichts** — und umgekehrt.

**Reines HTML/CSS/JS. Kein Build, kein Framework.** Ordner hochladen = fertig.

## Online

https://alonepard10501.github.io/instinct-scoring-web/

Repo: `Alonepard10501/instinct-scoring-web`, GitHub Pages aus `main` / root.
**Dieser Ordner IST das Git-Repo.**

Änderung veröffentlichen:
```bash
cd "C:\Users\falkc\Desktop\KI-Studio\Obsidian Vault\Projekte\Webseite-Instinct"
git add -A && git commit -m "Was geändert wurde" && git push
```
Pages baut selbst neu, nach etwa einer Minute ist es live.

## Die Dateien

| Datei | Zweck |
|---|---|
| `index.html` | Startseite — die App vorstellen, Preise, Verweise ins Studio |
| `details.html` | Alles Ausführliche: Bogenarten, Spine-Rechner, Glossar, Verbände |
| **`texte.js`** | **ALLE Texte** — hier ändert man Inhalte, sonst nirgends |
| `inhalte.js` | Baut Karten und Listen aus `texte.js` (läuft VOR `app.js`) |
| `app.js` | Effekte, Zähler, Zielscheibe, Bögen aufklappen |
| `style.css` | Aussehen |
| `impressum.html` · `datenschutz.html` · `bildquellen.html` | Rechtsseiten |

## Woher die Inhalte kommen

**1:1 übernommen aus der Entwickler-Website** (`Projekte\Webseite`), zugeschnitten
auf Instinct: `texte.js` von 98.553 auf rund 49.000 Zeichen (nur die Blöcke
`meta`, `nav`, `instinct`, `aktion`, `ueber`, `kontakt`, `fuss`, `zurueckKnopf`),
`inhalte.js` von 26.168 auf gut 13.000 Zeichen (die FaNiCa-, NeonPunkt-,
Vergleichs- und Fragen-Abschnitte sind raus).

Neu hinzugekommen ist der Block **`studio`** in `texte.js` — die Verweise zurück
ins Entwicklerstudio.

## Was auf der Startseite steht

1. **Kopf** — Logo-Paar (App-Logo + gemeinsames Kooperationslogo), Kernsatz
2. **Aktionen** + **Store-Stand** (ehrliche Zeile, siehe unten)
3. **Die Startseite der App** — Screenshot mit vier nummerierten Punkten
4. **Was drinsteckt** — Zahlen, Funktionsliste, Anzeigen
5. **Fünf Wertungssysteme, eine Scheibe** — die interaktive Zielscheibe:
   Zone antippen, sofort die Punkte in allen fünf Systemen sehen
6. **Funktionsblöcke** — Runden, Parcours, Ausrüstung, Statistik
7. **Deine Daten gehören dir** + Versprechen
8. **Drei Stufen** — Gratis, Premium, Premium+
9. **Wie ein Projekt entsteht** — fünf Schritte von der Idee bis zum Store
10. **Ein Mensch, ein Studio** — Verweise ins Entwicklerstudio

`details.html` trägt alles Ausführliche: Bogenarten, Spine-Rechner, Glossar,
Verbände, Parcours-Begriffe.

## 🔴 Store-Knöpfe: erst wenn die Stores antworten

Statt Knöpfen steht dort eine Statuszeile (`instinct.storeStatus` in `texte.js`),
weil **beide Store-Adressen noch 404 liefern**, solange die App in Prüfung ist.
Ein Knopf auf eine Fehlerseite ist schlechter als keiner.

**Sobald die App freigegeben ist**, die Zeile durch ein Knopfpaar ersetzen:
- Play: `https://play.google.com/store/apps/details?id=de.bogensportinstinct.instinct_scoring`
- Apple: `https://apps.apple.com/de/app/id6795424223`

Vorher **immer prüfen**, ob die Adresse wirklich antwortet.

## Alle Wege zurück ins Entwicklerstudio

Von jeder Seite aus erreichbar:
- **Kopfzeile:** „Entwicklerstudio ↗"
- **Fußzeile:** „Entwicklerstudio ↗"
- **Abschnitt „Wer dahintersteckt"** auf der Startseite: zwei Knöpfe
  („Zum Entwicklerstudio", „Kontakt aufnehmen") plus Kacheln zu **FaNiCa Fun**
  und **NeonPunkt**, die direkt auf deren Unterseiten führen.

Alle Ziele wurden geprüft und antworten mit HTTP 200.

## Ansehen / prüfen

```bash
python -m http.server 8877 --directory "C:\Users\falkc\Desktop\KI-Studio\Obsidian Vault\Projekte\Webseite-Instinct"
```
Dann `http://127.0.0.1:8877`. **Eine Datei-URL reicht nicht** — die Skripte
laden nach.

## 🔴 Fallen (alle real aufgetreten)

1. **Der headless-Browser nimmt CSS aus dem Cache.** Eine geänderte Regel wirkte
   scheinbar nicht — sie kam schlicht nicht an. Bei jeder Prüfung
   `Network.setCacheDisabled({cacheDisabled: true})` setzen, sonst misst man
   den alten Stand.
2. **`.unterseite` nicht vergessen.** Die Klasse am `<main>` liefert den Abstand
   zur festen Kopfzeile. Ohne sie schiebt sich der Seitenkopf unter die Leiste
   (auf dem Handy lag die Kooperationszeile hinter dem Menü).
3. **Diese Seite hat VIER Menüpunkte**, die Entwickler-Website hat drei. Auf dem
   Handy brachen sie um. Unter 700 px werden „Die App" und „Preise" ausgeblendet
   — sie sind ohnehin nur einen Scroll entfernt.
4. **`logo-kooperation.webp` ist das FaNiCa-Fun-Logo**, nicht das von Bogensport
   Instinct. Auf DIESER Seite ist Instinct die Hauptmarke, deshalb steht das
   Instinct-Logo allein. Die Kooperation wird im Text genannt.
5. **`.auf`-Karten starten unsichtbar.** Für Screenshots temporär
   `.auf{opacity:1!important}` einhängen — sonst wirkt die Seite leer.

Weitere Fallen, die auch hier gelten (Zielscheibe, Bögen, Scroll-Bremse durch
große Weichzeichner): Skill `entwickler-website`.
