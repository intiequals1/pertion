# Änderungsprotokoll

## 2026-11-16 – Lokale Schriften, Datenschutzerklärung, Datenschutzhinweis

### Was geändert wurde

- **Schriften lokal:** Alle sechs Seiten luden Merriweather und Inter von `fonts.googleapis.com`. Die Schriften liegen jetzt unter `assets/fonts/` (Fontsource 5.3.0; Merriweather 400, 700 und 400 kursiv, Inter variabel 400–700; je Latin und Latin Extended; SIL Open Font License 1.1 in `assets/fonts/OFL-*.txt`). `assets/css/fonts.css` bindet sie ein; die Google-Links und `preconnect`-Einträge sind entfernt.
- **Datenschutzerklärung neu (`datenschutz.html`)**, im Footer aller Seiten verlinkt: Verantwortlicher, Hosting über GitHub Pages mit USA-Übermittlung, keine Cookies/kein Tracking/lokale Schriften, Datenschutzhinweis, Buchkauf über Amazon, Kontakt, Betroffenenrechte.
- **Datenschutzhinweis:** `assets/js/main.js` zeigt am unteren Rand einen Hinweis ohne Einwilligungsabfrage. „Verstanden“ speichert im localStorage `pertion.datenschutzhinweis.v1` = `geschlossen`. Stile in `assets/css/style.css`.
- **Impressum:** Die Angabe „Google Fonts (Merriweather, Inter)“ unter „Schriften & Ressourcen“ beschreibt jetzt die lokale Auslieferung.
- `README.md`: Abschnitt „Datenschutz“.

### Warum

- Am 16.11.2026 wurde pertion.io live geprüft (Cookies, Browser-Speicher, angefragte Hosts), wie zuvor dangulea.at, erp.contact, ethics.at, digitalpath.at und coolwebtoday.org.
- **Google Fonts:** Beim Laden von Google-Servern erhält Google die IP-Adresse der Besucherinnen und Besucher. Gerichte (u. a. LG München I, 2022) haben das ohne Einwilligung als unzulässig bewertet. Lokal ausgelieferte Schriften vermeiden diese Übermittlung vollständig.
- **Datenschutzerklärung fehlte:** `datenschutz.html` antwortete mit 404. Art. 13 DSGVO verlangt Informationen über Verantwortlichen, Empfänger (hier GitHub als Hosting-Anbieter) und Drittlandübermittlungen.
- **Datenschutzhinweis:** auf Wunsch des Betreibers einheitlich auf allen eigenen Seiten. Eine Einwilligung wird bewusst nicht abgefragt, weil die Seite nichts einsetzt, das eine erfordert. Das Merken des Schließens ist in der Datenschutzerklärung offengelegt (§ 165 Abs. 3 TKG 2021, Umsetzung von Art. 5 Abs. 3 der ePrivacy-Richtlinie 2002/58/EG).
