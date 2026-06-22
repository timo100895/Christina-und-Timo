# Hochzeitswebsite · Christina & Timo

Eine statische Hochzeitswebsite im Fine-Art-/Editorial-Stil.
**Reines HTML, CSS und Vanilla JavaScript** – keine Frameworks, keine Build-Tools,
keine Datenbank. Einfach Dateien austauschen und über Cloudflare Pages veröffentlichen.

```
Hochzeitwebsite/
├── index.html              ← Inhalte & Struktur (Texte hier ändern)
├── assets/
│   ├── css/style.css       ← Design (Farben, Schriften, Layout)
│   ├── js/main.js          ← Smooth Scroll, FAQ, Animationen
│   └── img/                ← Hier kommen eure Bilder rein
└── README.md               ← Diese Anleitung
```

> 💡 **Suchhilfe:** In `index.html` sind alle änderbaren Stellen mit Kommentaren markiert:
> `<!-- TEXT HIER ÄNDERN -->`, `<!-- BILD HIER AUSTAUSCHEN -->`,
> `<!-- MICROSOFT FORMS LINK HIER EINFÜGEN -->`.
> Öffne die Datei in einem Editor (z.B. VS Code) und nutze die Suche (Strg+F).

---

## 1. Bilder austauschen

Alle Bilder liegen im Ordner `assets/img/`. Verwende **genau diese Dateinamen**,
dann musst du im Code nichts anpassen:

| Datei | Wofür | Empfohlene Breite |
|-------|-------|-------------------|
| `hero.jpg`     | Großes Startbild ganz oben      | ca. **2000 px** |
| `welcome.jpg`  | Bild im Begrüßungsblock          | ca. **1200 px** |
| `location.jpg` | Foto der Location (Anreise)      | ca. **1200 px** |
| `moment-1.jpg` | Momentaufnahme 1 (Foto-Bereich)  | ca. **1200 px** |
| `moment-2.jpg` | Momentaufnahme 2 (Foto-Bereich)  | ca. **1200 px** |
| `footer.jpg`   | Großes Abschlussbild unten       | ca. **2000 px** |

**So geht's:**
1. Eigenes Foto so benennen wie oben (z.B. `hero.jpg`).
2. In den Ordner `assets/img/` kopieren und das alte überschreiben.
3. Fertig – beim nächsten Laden erscheint das neue Bild.

> **Hero- und Footer-Bild** werden im CSS gesetzt (Hintergrundbilder).
> Falls du dort einen anderen Dateinamen nutzen willst, ändere die Zeile
> `background-image: url("../img/hero.jpg");` in `assets/css/style.css`.
> Die übrigen Bilder stehen direkt in `index.html` als `<img src="...">`.

**Wichtig – Bilder vor dem Hochladen komprimieren:**
- Tools: [squoosh.app](https://squoosh.app) oder [tinypng.com](https://tinypng.com)
- **WebP** wird empfohlen (gleiche Qualität, deutlich kleiner).
- Faustregel: Hero/Footer ≤ 500 KB, Contentbilder ≤ 250 KB.

> Solange ein Bild **fehlt**, zeigt die Seite automatisch eine neutrale,
> elegante Farbfläche – es sieht also nie „kaputt“ aus.

---

## 2. Texte ändern

Alle Texte stehen in **`index.html`**. Du brauchst keinerlei Programmierkenntnisse –
einfach den Text zwischen den Tags ersetzen.

**Beispiel:** Begrüßungstext ändern
```html
<!-- TEXT HIER ÄNDERN -->
<h2 class="section__title">Schön, dass ihr Teil<br />unseres besonderen Tages seid</h2>
```
Ersetze einfach den Text zwischen `>` und `</h2>`.

**Wo finde ich was?** Die Datei ist von oben nach unten in nummerierte Blöcke gegliedert:

| Block | Inhalt |
|-------|--------|
| 1  | Hero (Namen, Datum, Button) |
| 2  | Begrüßung |
| 3  | Info-Kacheln (Zeiten & Orte) |
| 4  | Tagesablauf / Timeline |
| 5  | Anreise (Adresse, Google-Maps-Link) |
| 6  | Übernachtung / Hotels |
| 7  | FAQ (Fragen & Antworten) |
| 8  | Anmeldung / Microsoft Forms |
| 9  | Aktuelle Informationen |
| 10 | Foto-/Moment-Bereich |
| 11 | Footer (Abschluss) |

**Häufig gepflegt – Block 9 „Aktuelle Informationen“:**
```html
<p class="updates__date">Letzte Aktualisierung: 06.06.2026</p>
<p class="updates__text">Aktuell gibt es keine Änderungen.</p>
```
Hier kannst du jederzeit kurzfristige Hinweise (Wetter, Parken, Zeiten) eintragen.

**Google-Maps-Link ändern (Block 5):** Suche nach
`<!-- GOOGLE MAPS LINK HIER EINFÜGEN -->` und tausche den `href`-Wert aus.

---

## 3. Microsoft Forms einbinden

Die Anmeldung läuft über **Microsoft Forms**. Antworten landen automatisch in Forms
und lassen sich dort als **Excel exportieren** oder live mit Excel synchronisieren.

### Schritt für Schritt
1. Formular auf [forms.office.com](https://forms.office.com) erstellen
   (z.B. Felder: Name, Anzahl Personen, Zu-/Absage, Allergien, Anmerkungen).
2. Im Formular oben rechts auf **„Antworten sammeln“** bzw. **„Teilen“** klicken.
3. Auf das **`</>` Einbetten**-Symbol klicken.
4. Den kompletten **`<iframe ...>`-Code** kopieren.
5. In `index.html` den Block **8 · ANMELDUNG** öffnen und die Markierung suchen:
   ```html
   <!-- MICROSOFT FORMS LINK HIER EINFÜGEN -->
   ```
6. Dort den vorhandenen **Platzhalter-Block** (`<div class="rsvp__placeholder">…</div>`)
   löschen und stattdessen deinen iframe einsetzen, z.B.:
   ```html
   <iframe
     class="rsvp__iframe"
     src="HIER_DEIN_FORMS_LINK"
     title="Anmeldung zur Hochzeit"
     frameborder="0" marginwidth="0" marginheight="0"
     allowfullscreen>
   </iframe>
   ```

> **Automatik:** Sobald ein `<iframe>` im Anmeldebereich vorhanden ist, blendet
> `main.js` den Platzhalter von selbst aus und stylt das Formular passend.
> Ist **kein** Link eingetragen, bleibt der schöne Platzhalter mit Button sichtbar.

**Antworten als Excel:** In Microsoft Forms → Reiter **„Antworten“** →
**„In Excel öffnen“** bzw. **„Ergebnisse exportieren“**.

---

## 4. Seite bei GitHub hochladen

Du brauchst ein kostenloses Konto auf [github.com](https://github.com).

### Variante A – ohne Kommandozeile (am einfachsten)
1. Auf GitHub oben rechts **„+“ → „New repository“**.
2. Name z.B. `hochzeit-christina-timo`, **Public** oder **Private**, **Create repository**.
3. Auf der neuen Seite **„uploading an existing file“** anklicken.
4. Den **gesamten Inhalt** des Projektordners (index.html, assets/, README.md)
   per Drag & Drop hochladen. **Wichtig:** die Ordnerstruktur muss erhalten bleiben.
5. Unten auf **„Commit changes“**.

### Variante B – mit Git (für Geübte)
```bash
cd Pfad/zum/Hochzeitwebsite
git init
git add .
git commit -m "Hochzeitswebsite"
git branch -M main
git remote add origin https://github.com/DEIN-NAME/hochzeit-christina-timo.git
git push -u origin main
```

---

## 5. Cloudflare Pages verbinden

1. Konto erstellen/anmelden auf [dash.cloudflare.com](https://dash.cloudflare.com).
2. Links im Menü **„Workers & Pages“** → **„Create application“** → Reiter **„Pages“**
   → **„Connect to Git“**.
3. GitHub verbinden und das Repository `hochzeit-christina-timo` auswählen.
4. Build-Einstellungen (sehr wichtig, da **kein** Build nötig ist):
   - **Framework preset:** `None`
   - **Build command:** *(leer lassen)*
   - **Build output directory:** `/`  (Schrägstrich)
5. **„Save and Deploy“** klicken. Nach kurzer Zeit ist die Seite live unter einer
   Adresse wie `https://hochzeit-christina-timo.pages.dev`.

> **Updates:** Jede Änderung, die du auf GitHub hochlädst (neuer Commit / neuer
> Datei-Upload), wird von Cloudflare automatisch neu veröffentlicht – meist
> innerhalb einer Minute.

### Optional: eigene Domain
In Cloudflare Pages unter **„Custom domains“** kannst du eine eigene Domain
(z.B. `christina-und-timo.de`) verbinden und der Anleitung folgen.

---

## 6. QR-Code zur Website erstellen

Damit Gäste die Seite z.B. von der Einladung scannen können:

1. Finale URL kopieren (z.B. `https://hochzeit-christina-timo.pages.dev`
   oder deine eigene Domain).
2. Einen kostenlosen QR-Generator öffnen, z.B.
   [qr-code-generator.com](https://www.qr-code-generator.com) oder
   [qrcode-monkey.com](https://www.qrcode-monkey.com).
3. URL einfügen, QR-Code als **PNG oder SVG** (am besten SVG für den Druck)
   herunterladen.
4. In Einladung / Tischkarten einbauen.

> **Tipp:** Erstelle den QR-Code **erst mit der endgültigen URL**. Verwendest du
> später eine eigene Domain, muss der QR-Code mit dieser neu erstellt werden,
> sonst zeigt er noch auf die alte `.pages.dev`-Adresse.

---

## ✅ Checkliste vor dem Versand

- [ ] **Bilder ersetzen** – alle 6 Bilder in `assets/img/` (komprimiert)
- [ ] **Texte prüfen** – Namen, Datum, Zeiten, Adresse, FAQ, Update-Datum
- [ ] **Google-Maps-Link** in Block 5 kontrollieren
- [ ] **Microsoft Forms Link einsetzen** (Block 8) und einmal testen
- [ ] **GitHub Repository erstellen** und Dateien hochladen
- [ ] **Cloudflare Pages verbinden** (Output-Verzeichnis `/`, kein Build)
- [ ] Seite auf dem **Handy** testen (Smooth Scroll, FAQ, Formular)
- [ ] **QR-Code mit finaler URL erstellen** und in Einladung einbauen

---

## Anpassen für Fortgeschrittene

- **Farben & Schriften** zentral in `assets/css/style.css` unter
  `:root { … }` (Abschnitt „1 · DESIGN-TOKENS“).
- **Animationsstärke / Abstände** ebenfalls dort über die CSS-Variablen.
- Die Seite kommt **ohne externe Abhängigkeiten** aus – außer Google Fonts
  (Cormorant Garamond & Inter), die im `<head>` von `index.html` geladen werden.

Viel Freude – und herzlichen Glückwunsch! 🥂
