/* Werkstatt Ü — nivel B2 (Goethe-Zertifikat B2) */
(function () {
  const DE = window.DE;

  Object.assign(DE.themes, {
    "b2-beruf": { name: "Trabajo y carrera", de: "Berufsleben & Karriere", level: "B2" },
    "b2-wissenschaft": { name: "Ciencia y técnica", de: "Wissenschaft & Technik", level: "B2" },
    "b2-umwelt": { name: "Medio ambiente y sostenibilidad", de: "Umwelt & Nachhaltigkeit", level: "B2" },
    "b2-politik": { name: "Sociedad y política", de: "Gesellschaft & Politik", level: "B2" },
    "b2-medien": { name: "Medios y digitalización", de: "Medien & Digitalisierung", level: "B2" },
    "b2-psyche": { name: "Salud y psicología", de: "Gesundheit & Psyche", level: "B2" },
    "b2-wirtschaft": { name: "Economía y consumo", de: "Wirtschaft & Konsum", level: "B2" },
    "b2-kultur": { name: "Cultura y arte", de: "Kultur & Kunst", level: "B2" },
    "b2-bildung": { name: "Educación", de: "Bildung", level: "B2" },
    "b2-migration": { name: "Migración e identidad", de: "Migration & Identität", level: "B2" },
    "b2-stadt": { name: "Vivienda y ciudad", de: "Wohnen & Stadtleben", level: "B2" },
    "b2-redemittel": { name: "Frases para argumentar, presentar y escribir", de: "Redemittel B2", level: "B2" }
  });

  DE.vocab.push(
    /* ---------- Berufsleben & Karriere ---------- */
    ["b2-beruf", "die", "Fachkraft", "¨-e", "el profesional calificado", "Viele Betriebe suchen dringend Fachkräfte aus dem Ausland."],
    ["b2-beruf", "der", "Fachkräftemangel", "–", "la escasez de personal calificado", "Der Fachkräftemangel betrifft vor allem die Pflege und das Handwerk."],
    ["b2-beruf", "die", "Gehaltsverhandlung", "-en", "la negociación salarial", "Auf eine Gehaltsverhandlung sollte man sich gut vorbereiten."],
    ["b2-beruf", "die", "Arbeitsbedingungen", "pl", "las condiciones laborales", "Die Arbeitsbedingungen in der Pflege müssen sich verbessern."],
    ["b2-beruf", "", "befristet", "", "temporal, por tiempo determinado (contrato)", "Mein erster Vertrag war auf ein Jahr befristet."],
    ["b2-beruf", "die", "Umstrukturierung", "-en", "la reestructuración", "Bei der Umstrukturierung wurden zwei Abteilungen zusammengelegt."],
    ["b2-beruf", "die", "Kündigungsfrist", "-en", "el plazo de preaviso", "Die Kündigungsfrist beträgt drei Monate zum Monatsende."],
    ["b2-beruf", "die", "Aufstiegsmöglichkeit", "-en", "la posibilidad de ascenso", "In kleinen Firmen gibt es oft weniger Aufstiegsmöglichkeiten."],
    ["b2-beruf", "die", "Führungskraft", "¨-e", "el directivo, el cargo de liderazgo", "Als Führungskraft ist sie für zwanzig Mitarbeitende verantwortlich."],
    ["b2-beruf", "die", "Vereinbarkeit", "–", "la conciliación (de familia y trabajo)", "Die Vereinbarkeit von Familie und Beruf ist für viele Eltern das wichtigste Kriterium."],
    ["b2-beruf", "die", "Elternzeit", "–", "la licencia parental", "Nach der Geburt nimmt er zwei Monate Elternzeit."],
    ["b2-beruf", "der", "Betriebsrat", "¨-e", "el comité de trabajadores (en la empresa)", "Der Betriebsrat vertritt die Interessen der Beschäftigten."],
    ["b2-beruf", "die", "Abfindung", "-en", "la indemnización por despido", "Nach zwanzig Jahren im Betrieb bekam er eine hohe Abfindung."],
    ["b2-beruf", "die", "Selbstständigkeit", "–", "el trabajo por cuenta propia", "Der Schritt in die Selbstständigkeit war riskant, aber er hat sich gelohnt."],
    ["b2-beruf", "der", "Quereinsteiger", "-", "la persona que llega de otro sector", "Als Quereinsteiger musste er sich vieles selbst beibringen."],
    ["b2-beruf", "das", "Arbeitszeugnis", "-se", "la carta de referencia laboral", "In Deutschland ist das Arbeitszeugnis bei Bewerbungen sehr wichtig."],
    ["b2-beruf", "", "delegieren", "hat delegiert", "delegar", "Eine gute Chefin delegiert Aufgaben, statt alles selbst zu machen."],
    ["b2-beruf", "", "aushandeln", "hat ausgehandelt", "negociar (hasta llegar a un acuerdo)", "Die Gewerkschaft hat höhere Löhne ausgehandelt."],
    ["b2-beruf", "die", "Gewerkschaft", "-en", "el sindicato", "Die Gewerkschaft ruft zu einem Warnstreik auf."],
    ["b2-beruf", "", "sich durchsetzen", "hat sich durchgesetzt", "imponerse", "Mit ihrem Vorschlag hat sie sich im Team durchgesetzt."],
    ["b2-beruf", "der", "Werdegang", "¨-e", "la trayectoria profesional", "Erzählen Sie uns bitte kurz von Ihrem beruflichen Werdegang."],

    /* ---------- Wissenschaft & Technik ---------- */
    ["b2-wissenschaft", "die", "Grundlagenforschung", "–", "la investigación básica", "Ohne Grundlagenforschung gäbe es viele Erfindungen nicht."],
    ["b2-wissenschaft", "die", "Erkenntnis", "-se", "el hallazgo, el conocimiento adquirido", "Neue Erkenntnisse zeigen, dass Schlaf das Gedächtnis stärkt."],
    ["b2-wissenschaft", "die", "Hypothese", "-n", "la hipótesis", "Die Hypothese konnte im Experiment nicht bestätigt werden."],
    ["b2-wissenschaft", "die", "Messung", "-en", "la medición", "Die Messungen wurden dreimal wiederholt."],
    ["b2-wissenschaft", "der", "Durchbruch", "¨-e", "el gran avance", "Dem Team ist ein wissenschaftlicher Durchbruch gelungen."],
    ["b2-wissenschaft", "die", "künstliche Intelligenz", "–", "la inteligencia artificial", "Künstliche Intelligenz verändert schon heute viele Berufe."],
    ["b2-wissenschaft", "die", "Gentechnik", "–", "la ingeniería genética", "Die Gentechnik in der Landwirtschaft ist in Europa umstritten."],
    ["b2-wissenschaft", "der", "Tierversuch", "-e", "el experimento con animales", "Viele Menschen lehnen Tierversuche für Kosmetik ab."],
    ["b2-wissenschaft", "die", "Raumfahrt", "–", "la exploración espacial", "Die Raumfahrt hat viele Alltagsprodukte hervorgebracht."],
    ["b2-wissenschaft", "das", "Fachgebiet", "-e", "el campo, la especialidad", "Ihr Fachgebiet ist die Meeresbiologie."],
    ["b2-wissenschaft", "die", "Fachzeitschrift", "-en", "la revista especializada", "Die Ergebnisse wurden in einer Fachzeitschrift veröffentlicht."],
    ["b2-wissenschaft", "", "nachweisen", "hat nachgewiesen", "demostrar, comprobar", "Bisher konnte niemand einen Zusammenhang nachweisen."],
    ["b2-wissenschaft", "", "erforschen", "hat erforscht", "investigar (a fondo)", "Das Institut erforscht die Folgen des steigenden Meeresspiegels."],
    ["b2-wissenschaft", "", "weiterentwickeln", "hat weiterentwickelt", "seguir desarrollando, perfeccionar", "Die Software wird ständig weiterentwickelt."],
    ["b2-wissenschaft", "", "widerlegen", "hat widerlegt", "refutar", "Die alte These wurde durch neue Daten widerlegt."],
    ["b2-wissenschaft", "der", "Beleg", "-e", "la prueba, la evidencia", "Für diese Behauptung gibt es keine wissenschaftlichen Belege."],
    ["b2-wissenschaft", "", "empirisch", "", "empírico", "Die Studie stützt sich auf empirische Daten aus zwölf Ländern."],
    ["b2-wissenschaft", "", "zuverlässig", "", "confiable", "Die Messwerte sind leider nicht zuverlässig."],
    ["b2-wissenschaft", "das", "Verfahren", "-", "el procedimiento, el método", "Das neue Verfahren spart viel Energie."],
    ["b2-wissenschaft", "die", "Wechselwirkung", "-en", "la interacción", "Die Wechselwirkung zwischen den beiden Medikamenten kann gefährlich sein."],

    /* ---------- Umwelt & Nachhaltigkeit ---------- */
    ["b2-umwelt", "die", "Nachhaltigkeit", "–", "la sostenibilidad", "Nachhaltigkeit spielt bei meinen Kaufentscheidungen eine große Rolle."],
    ["b2-umwelt", "die", "Erderwärmung", "–", "el calentamiento global", "Die Erderwärmung lässt die Gletscher schmelzen."],
    ["b2-umwelt", "das", "Treibhausgas", "-e", "el gas de efecto invernadero", "Der Verkehr verursacht einen großen Teil der Treibhausgase."],
    ["b2-umwelt", "die", "Emission", "-en", "la emisión", "Bis 2045 will Deutschland seine Emissionen auf netto null senken."],
    ["b2-umwelt", "die", "Klimaneutralität", "–", "la neutralidad climática", "Die Stadt will bis 2035 Klimaneutralität erreichen."],
    ["b2-umwelt", "die", "Windkraft", "–", "la energía eólica", "In Norddeutschland wird viel Strom aus Windkraft erzeugt."],
    ["b2-umwelt", "die", "Ressource", "-n", "el recurso", "Sauberes Trinkwasser ist eine knappe Ressource."],
    ["b2-umwelt", "die", "Artenvielfalt", "–", "la biodiversidad", "Pestizide gefährden die Artenvielfalt."],
    ["b2-umwelt", "", "aussterben", "ist ausgestorben", "extinguirse", "Der Dodo ist schon im 17. Jahrhundert ausgestorben."],
    ["b2-umwelt", "der", "Fußabdruck", "¨-e", "la huella (ecológica)", "Wer weniger fliegt, verkleinert seinen ökologischen Fußabdruck."],
    ["b2-umwelt", "die", "Dürre", "-n", "la sequía", "Die Dürre hat einen Großteil der Ernte vernichtet."],
    ["b2-umwelt", "die", "Überschwemmung", "-en", "la inundación", "Nach dem Starkregen kam es zu schweren Überschwemmungen."],
    ["b2-umwelt", "die", "Wegwerfgesellschaft", "-en", "la sociedad de usar y tirar", "In unserer Wegwerfgesellschaft wird kaum noch etwas repariert."],
    ["b2-umwelt", "die", "Kreislaufwirtschaft", "–", "la economía circular", "In der Kreislaufwirtschaft werden Rohstoffe immer wieder verwendet."],
    ["b2-umwelt", "", "umweltschonend", "", "respetuoso con el medio ambiente", "Die Bahn ist ein umweltschonendes Verkehrsmittel."],
    ["b2-umwelt", "", "verzichten auf", "hat verzichtet", "renunciar a, prescindir de", "Seit einem Jahr verzichte ich auf Fleisch."],
    ["b2-umwelt", "die", "Energiewende", "–", "la transición energética", "Die Energiewende kostet viel Geld, schafft aber auch Arbeitsplätze."],
    ["b2-umwelt", "", "eindämmen", "hat eingedämmt", "contener, frenar", "Der Plastikmüll in den Meeren muss dringend eingedämmt werden."],
    ["b2-umwelt", "das", "Einwegplastik", "–", "el plástico de un solo uso", "Seit 2021 sind viele Produkte aus Einwegplastik in der EU verboten."],
    ["b2-umwelt", "", "sich auswirken auf", "hat sich ausgewirkt", "repercutir en, afectar a", "Der Klimawandel wirkt sich auch auf die Landwirtschaft aus."],

    /* ---------- Gesellschaft & Politik ---------- */
    ["b2-politik", "der", "Bundestag", "–", "el Parlamento federal alemán", "Der Bundestag wird alle vier Jahre gewählt."],
    ["b2-politik", "die", "Wahlbeteiligung", "-en", "la participación electoral", "Die Wahlbeteiligung war diesmal besonders hoch."],
    ["b2-politik", "die", "Koalition", "-en", "la coalición", "Nach der Wahl bildeten drei Parteien eine Koalition."],
    ["b2-politik", "die", "Opposition", "-en", "la oposición", "Die Opposition kritisiert den Haushalt scharf."],
    ["b2-politik", "der", "Gesetzentwurf", "¨-e", "el proyecto de ley", "Der Gesetzentwurf wird nächste Woche im Parlament beraten."],
    ["b2-politik", "die", "Gewaltenteilung", "–", "la separación de poderes", "Die Gewaltenteilung schützt vor Machtmissbrauch."],
    ["b2-politik", "das", "Grundgesetz", "–", "la Ley Fundamental (la Constitución alemana)", "Das Grundgesetz ist 1949 in Kraft getreten."],
    ["b2-politik", "die", "Meinungsfreiheit", "–", "la libertad de expresión", "Die Meinungsfreiheit ist ein Grundrecht."],
    ["b2-politik", "die", "Ungleichheit", "-en", "la desigualdad", "Die soziale Ungleichheit hat in den letzten Jahren zugenommen."],
    ["b2-politik", "die", "Altersarmut", "–", "la pobreza en la vejez", "Viele Rentnerinnen sind von Altersarmut bedroht."],
    ["b2-politik", "die", "Bürgerinitiative", "-n", "la iniciativa ciudadana", "Eine Bürgerinitiative kämpft gegen den Bau der neuen Autobahn."],
    ["b2-politik", "der", "Abgeordnete", "-n", "el diputado", "Der Abgeordnete beantwortet einmal im Monat Fragen der Bürger."],
    ["b2-politik", "", "abstimmen über", "hat abgestimmt", "votar sobre", "Morgen stimmt das Parlament über das Klimagesetz ab."],
    ["b2-politik", "der", "Rechtsstaat", "-en", "el Estado de derecho", "Im Rechtsstaat gelten die Gesetze auch für die Regierung."],
    ["b2-politik", "die", "Bürokratie", "-n", "la burocracia", "Viele kleine Firmen klagen über zu viel Bürokratie."],
    ["b2-politik", "das", "Rentenalter", "–", "la edad de jubilación", "Soll das Rentenalter auf siebzig Jahre steigen?"],
    ["b2-politik", "", "vertreten", "hat vertreten", "representar, defender (una postura)", "Der Verband vertritt die Interessen der Landwirte."],
    ["b2-politik", "", "umstritten", "", "polémico, controvertido", "Die Reform ist auch innerhalb der Regierung umstritten."],
    ["b2-politik", "der", "Zusammenhalt", "–", "la cohesión", "Der gesellschaftliche Zusammenhalt wird schwächer."],
    ["b2-politik", "", "benachteiligt", "", "desfavorecido, en desventaja", "Kinder aus armen Familien sind im Bildungssystem oft benachteiligt."],

    /* ---------- Medien & Digitalisierung ---------- */
    ["b2-medien", "die", "Privatsphäre", "–", "la privacidad", "In sozialen Netzwerken geben viele Menschen ihre Privatsphäre auf."],
    ["b2-medien", "die", "Falschmeldung", "-en", "la noticia falsa", "Falschmeldungen verbreiten sich im Netz schneller als die Wahrheit."],
    ["b2-medien", "", "sich verbreiten", "hat sich verbreitet", "difundirse, propagarse", "Das Gerücht hat sich in wenigen Stunden verbreitet."],
    ["b2-medien", "die", "Pressefreiheit", "–", "la libertad de prensa", "Die Pressefreiheit ist in vielen Ländern bedroht."],
    ["b2-medien", "", "seriös", "", "confiable, serio (medio, empresa) (¡no para el carácter: eso es «ernst»!)", "Ist diese Website eine seriöse Quelle?"],
    ["b2-medien", "die", "Desinformation", "-en", "la desinformación", "Gezielte Desinformation soll das Vertrauen in die Demokratie schwächen."],
    ["b2-medien", "die", "Berichterstattung", "-en", "la cobertura informativa", "Die Berichterstattung über den Prozess war sehr ausführlich."],
    ["b2-medien", "", "einseitig", "", "parcial, sesgado", "Der Kommentar ist mir zu einseitig."],
    ["b2-medien", "der", "Algorithmus", "Algorithmen", "el algoritmo", "Der Algorithmus zeigt mir vor allem Videos, die meine Meinung bestätigen."],
    ["b2-medien", "die", "Filterblase", "-n", "la burbuja de filtros", "Wer nur in seiner Filterblase lebt, hört kaum andere Meinungen."],
    ["b2-medien", "die", "Hassrede", "-n", "el discurso de odio", "Plattformen müssen Hassrede schneller löschen."],
    ["b2-medien", "die", "Medienkompetenz", "-en", "la alfabetización mediática", "Schulen sollen die Medienkompetenz der Jugendlichen stärken."],
    ["b2-medien", "die", "Bildschirmzeit", "-en", "el tiempo frente a la pantalla", "Viele Eltern begrenzen die Bildschirmzeit ihrer Kinder."],
    ["b2-medien", "der", "Hackerangriff", "-e", "el ataque informático", "Nach dem Hackerangriff standen die Kundendaten im Netz."],
    ["b2-medien", "das", "Abonnement", "-s", "la suscripción", "Ich habe das Abonnement der Tageszeitung gekündigt."],
    ["b2-medien", "die", "Bezahlschranke", "-n", "el muro de pago", "Viele Artikel stehen inzwischen hinter einer Bezahlschranke."],
    ["b2-medien", "", "manipulieren", "hat manipuliert", "manipular", "Mit gefälschten Videos kann man Wahlen manipulieren."],
    ["b2-medien", "die", "Glaubwürdigkeit", "–", "la credibilidad", "Durch den Skandal hat der Sender an Glaubwürdigkeit verloren."],
    ["b2-medien", "", "öffentlich-rechtlich", "", "público (radio y televisión pública)", "ARD und ZDF sind öffentlich-rechtliche Sender."],
    ["b2-medien", "die", "Verschlüsselung", "-en", "el cifrado", "Dank Ende-zu-Ende-Verschlüsselung kann niemand die Nachrichten mitlesen."],

    /* ---------- Gesundheit & Psyche ---------- */
    ["b2-psyche", "", "ausgebrannt", "", "quemado, agotado (por el trabajo)", "Nach zwei Jahren ohne Urlaub fühlte sie sich völlig ausgebrannt."],
    ["b2-psyche", "die", "Belastung", "-en", "la carga, la presión", "Die Pflege der Mutter ist eine große Belastung für die Familie."],
    ["b2-psyche", "", "bewältigen", "hat bewältigt", "afrontar, superar", "Wie bewältigen Sie Stress im Alltag?"],
    ["b2-psyche", "die", "Vorsorgeuntersuchung", "-en", "el chequeo preventivo", "Die Krankenkasse bezahlt regelmäßige Vorsorgeuntersuchungen."],
    ["b2-psyche", "", "chronisch", "", "crónico", "Mein Vater leidet an einer chronischen Krankheit."],
    ["b2-psyche", "", "leiden an", "hat gelitten", "padecer (una enfermedad)", "Viele Menschen leiden an Schlafstörungen."],
    ["b2-psyche", "die", "Schlafstörung", "-en", "el trastorno del sueño", "Schlafstörungen können viele Ursachen haben."],
    ["b2-psyche", "die", "Einsamkeit", "–", "la soledad", "Einsamkeit kann der Gesundheit genauso schaden wie Rauchen."],
    ["b2-psyche", "das", "Selbstwertgefühl", "–", "la autoestima", "Ständige Kritik schadet dem Selbstwertgefühl."],
    ["b2-psyche", "die", "Achtsamkeit", "–", "la atención plena (mindfulness)", "Achtsamkeit hilft mir, ruhiger zu werden."],
    ["b2-psyche", "die", "Prävention", "-en", "la prevención", "In die Prävention wird viel zu wenig Geld investiert."],
    ["b2-psyche", "", "pflegebedürftig", "", "dependiente (que necesita cuidados)", "Immer mehr ältere Menschen sind pflegebedürftig."],
    ["b2-psyche", "die", "Psychotherapie", "-n", "la psicoterapia", "Auf einen Platz für eine Psychotherapie wartet man oft monatelang."],
    ["b2-psyche", "die", "Reizüberflutung", "-en", "la sobreestimulación", "Die ständige Reizüberflutung durch das Handy macht viele Menschen nervös."],
    ["b2-psyche", "", "abhängig", "", "dependiente, adicto", "Viele Jugendliche fühlen sich von ihrem Handy abhängig."],
    ["b2-psyche", "die", "Resilienz", "–", "la resiliencia", "Resilienz kann man trainieren."],
    ["b2-psyche", "das", "Wohlbefinden", "–", "el bienestar", "Bewegung an der frischen Luft steigert das Wohlbefinden."],
    ["b2-psyche", "", "ausgewogen", "", "equilibrado", "Achten Sie auf eine ausgewogene Ernährung."],
    ["b2-psyche", "der", "Leistungsdruck", "–", "la presión por rendir", "Der Leistungsdruck an Schulen und Universitäten nimmt zu."],
    ["b2-psyche", "die", "Krankschreibung", "-en", "la incapacidad médica (certificado de baja)", "Ab dem vierten Krankheitstag braucht man meistens eine Krankschreibung."],

    /* ---------- Wirtschaft & Konsum ---------- */
    ["b2-wirtschaft", "die", "Inflation", "-en", "la inflación", "Die Inflation frisst die Lohnerhöhung wieder auf."],
    ["b2-wirtschaft", "die", "Kaufkraft", "–", "el poder adquisitivo", "Durch die hohen Preise sinkt die Kaufkraft der Haushalte."],
    ["b2-wirtschaft", "die", "Nachfrage", "-n", "la demanda", "Die Nachfrage nach Elektroautos ist gesunken."],
    ["b2-wirtschaft", "der", "Umsatz", "¨-e", "la facturación, las ventas", "Der Umsatz ist im dritten Quartal um fünf Prozent gestiegen."],
    ["b2-wirtschaft", "der", "Verlust", "-e", "la pérdida", "Das Unternehmen macht seit zwei Jahren Verluste."],
    ["b2-wirtschaft", "die", "Konjunktur", "-en", "la situación económica, la coyuntura", "Die Konjunktur erholt sich nur langsam."],
    ["b2-wirtschaft", "der", "Wettbewerb", "-e", "la competencia entre empresas, el concurso", "Der Wettbewerb unter den Onlinehändlern ist hart."],
    ["b2-wirtschaft", "die", "Lieferkette", "-n", "la cadena de suministro", "Wegen gestörter Lieferketten fehlen wichtige Bauteile."],
    ["b2-wirtschaft", "das", "Konsumverhalten", "–", "los hábitos de consumo", "Das Konsumverhalten junger Menschen hat sich stark verändert."],
    ["b2-wirtschaft", "die", "Ratenzahlung", "-en", "el pago en cuotas", "Der Händler bietet Ratenzahlung ohne Zinsen an."],
    ["b2-wirtschaft", "der", "Zins", "-en", "el interés (bancario)", "Die Zinsen für Kredite sind wieder gestiegen."],
    ["b2-wirtschaft", "", "sich verschulden", "hat sich verschuldet", "endeudarse", "Viele junge Leute verschulden sich wegen Onlinekäufen."],
    ["b2-wirtschaft", "", "anlegen", "hat angelegt", "invertir (dinero)", "Wie kann man sein Geld sinnvoll anlegen?"],
    ["b2-wirtschaft", "die", "Rendite", "-n", "la rentabilidad", "Aktien bringen langfristig meist eine höhere Rendite als ein Sparkonto."],
    ["b2-wirtschaft", "der", "Mindestlohn", "¨-e", "el salario mínimo", "Der Mindestlohn wurde erneut erhöht."],
    ["b2-wirtschaft", "das", "Bruttoinlandsprodukt", "-e", "el producto interno bruto (PIB)", "Das Bruttoinlandsprodukt ist im letzten Jahr leicht gewachsen."],
    ["b2-wirtschaft", "", "fair gehandelt", "", "de comercio justo", "Ich kaufe nur fair gehandelten Kaffee."],
    ["b2-wirtschaft", "die", "Reklamation", "-en", "la reclamación", "Ihre Reklamation wird innerhalb einer Woche bearbeitet."],
    ["b2-wirtschaft", "die", "Gewährleistung", "-en", "la garantía legal", "Die gesetzliche Gewährleistung beträgt in der EU zwei Jahre."],
    ["b2-wirtschaft", "", "erstatten", "hat erstattet", "reembolsar", "Der Kaufpreis wird Ihnen innerhalb von vierzehn Tagen erstattet."],

    /* ---------- Kultur & Kunst ---------- */
    ["b2-kultur", "die", "Vernissage", "-n", "la inauguración de una exposición", "Zur Vernissage kam auch die Künstlerin selbst."],
    ["b2-kultur", "das", "Gemälde", "-", "el cuadro, la pintura", "Das Gemälde wurde für zwei Millionen Euro versteigert."],
    ["b2-kultur", "der", "Bildhauer", "-", "el escultor", "Der Bildhauer arbeitet vor allem mit Holz und Stein."],
    ["b2-kultur", "die", "Inszenierung", "-en", "la puesta en escena", "Die moderne Inszenierung hat das Publikum gespalten."],
    ["b2-kultur", "die", "Uraufführung", "-en", "el estreno (mundial)", "Die Uraufführung der «Zauberflöte» fand 1791 in Wien statt."],
    ["b2-kultur", "das", "Bühnenbild", "-er", "la escenografía", "Das Bühnenbild bestand nur aus einem Stuhl und einer Lampe."],
    ["b2-kultur", "die", "Rezension", "-en", "la reseña", "Die Rezension in der Zeitung war ziemlich kritisch."],
    ["b2-kultur", "das", "Werk", "-e", "la obra", "Kafkas wichtigste Werke wurden erst nach seinem Tod veröffentlicht."],
    ["b2-kultur", "die", "Neuerscheinung", "-en", "la novedad editorial", "Auf der Frankfurter Buchmesse werden Tausende Neuerscheinungen vorgestellt."],
    ["b2-kultur", "das", "Weltkulturerbe", "–", "el patrimonio de la humanidad", "Die Zona Colonial von Santo Domingo gehört zum Weltkulturerbe."],
    ["b2-kultur", "", "fördern", "hat gefördert", "fomentar, financiar", "Der Staat fördert Theater und Museen mit Steuergeld."],
    ["b2-kultur", "das", "Denkmal", "¨-er", "el monumento", "Das Denkmal erinnert an die Opfer des Krieges."],
    ["b2-kultur", "", "zeitgenössisch", "", "contemporáneo", "Das Museum zeigt zeitgenössische Kunst aus Lateinamerika."],
    ["b2-kultur", "die", "Lesung", "-en", "la lectura pública (de un autor)", "Die Autorin hält am Freitag eine Lesung in der Stadtbibliothek."],
    ["b2-kultur", "die", "Gattung", "-en", "el género (literario o artístico)", "Die Kurzgeschichte ist eine beliebte literarische Gattung."],
    ["b2-kultur", "", "darstellen", "hat dargestellt", "representar", "Das Bild stellt eine Szene aus dem Alltag dar."],
    ["b2-kultur", "", "ausdrucksstark", "", "expresivo", "Die Sängerin hat eine sehr ausdrucksstarke Stimme."],
    ["b2-kultur", "die", "Kulturszene", "-n", "la escena cultural", "Berlin ist für seine lebendige Kulturszene bekannt."],
    ["b2-kultur", "die", "Besetzung", "-en", "el reparto (de una obra o película)", "Die Besetzung des Films ist hochkarätig."],
    ["b2-kultur", "", "inspirieren", "hat inspiriert", "inspirar", "Die Landschaft am Rhein hat viele Maler inspiriert."],

    /* ---------- Bildung ---------- */
    ["b2-bildung", "das", "Bildungssystem", "-e", "el sistema educativo", "Das deutsche Bildungssystem trennt die Kinder sehr früh."],
    ["b2-bildung", "die", "Chancengleichheit", "–", "la igualdad de oportunidades", "Chancengleichheit beginnt schon im Kindergarten."],
    ["b2-bildung", "die", "Hochschulreife", "–", "el título que da acceso a la universidad", "Mit der allgemeinen Hochschulreife kann man jedes Fach studieren."],
    ["b2-bildung", "der", "Ausbildungsbetrieb", "-e", "la empresa formadora (formación dual)", "Drei Tage pro Woche lernt sie im Ausbildungsbetrieb, zwei in der Berufsschule."],
    ["b2-bildung", "", "lebenslang", "", "de por vida, permanente", "Lebenslanges Lernen ist heute in fast jedem Beruf nötig."],
    ["b2-bildung", "die", "Zulassung", "-en", "la admisión (a la universidad)", "Für die Zulassung zum Medizinstudium braucht man sehr gute Noten."],
    ["b2-bildung", "die", "Anerkennung", "-en", "el reconocimiento, la homologación", "Die Anerkennung meines Abschlusses hat ein halbes Jahr gedauert."],
    ["b2-bildung", "die", "Studiengebühren", "pl", "la matrícula universitaria", "An staatlichen Universitäten gibt es in Deutschland kaum Studiengebühren."],
    ["b2-bildung", "die", "Studienfinanzierung", "-en", "la financiación de los estudios", "Für die Studienfinanzierung gibt es staatliche Hilfen und Stipendien."],
    ["b2-bildung", "die", "Lehrkraft", "¨-e", "el o la docente", "An vielen Schulen fehlen Lehrkräfte."],
    ["b2-bildung", "die", "Eigenverantwortung", "–", "la responsabilidad propia, la autonomía", "An der Universität wird viel Eigenverantwortung erwartet."],
    ["b2-bildung", "die", "Seminararbeit", "-en", "el trabajo escrito de la universidad", "Bis Ende März muss ich eine Seminararbeit von zwanzig Seiten schreiben."],
    ["b2-bildung", "die", "Abschlussarbeit", "-en", "la tesis (de licenciatura o maestría)", "Er schreibt seine Abschlussarbeit über Windkraft."],
    ["b2-bildung", "das", "Fernstudium", "Fernstudien", "la educación a distancia", "Neben dem Beruf macht sie ein Fernstudium in Psychologie."],
    ["b2-bildung", "der", "Bildungsweg", "-e", "la trayectoria educativa", "Über den zweiten Bildungsweg kann man das Abitur nachholen."],
    ["b2-bildung", "", "nachholen", "hat nachgeholt", "recuperar, hacer más tarde lo pendiente", "Mit dreißig hat er seinen Schulabschluss nachgeholt."],
    ["b2-bildung", "die", "Förderung", "-en", "el apoyo, el fomento", "Kinder mit Lernschwierigkeiten brauchen gezielte Förderung."],
    ["b2-bildung", "die", "Ganztagsschule", "-n", "la escuela de jornada completa", "In der Ganztagsschule essen die Kinder auch zu Mittag."],
    ["b2-bildung", "die", "Schulpflicht", "–", "la escolaridad obligatoria", "In Deutschland gilt die Schulpflicht, Unterricht zu Hause ist nicht erlaubt."],
    ["b2-bildung", "die", "Kompetenz", "-en", "la capacidad, la competencia (¡no la rivalidad: eso es «Wettbewerb»!)", "Neben Fachwissen sind soziale Kompetenzen gefragt."],

    /* ---------- Migration & Identität ---------- */
    ["b2-migration", "die", "Zuwanderung", "–", "la inmigración", "Deutschland ist auf Zuwanderung angewiesen."],
    ["b2-migration", "", "angewiesen sein auf", "", "depender de, necesitar", "Viele Betriebe sind auf ausländische Fachkräfte angewiesen."],
    ["b2-migration", "die", "Einbürgerung", "-en", "la naturalización", "Für die Einbürgerung braucht man Deutschkenntnisse auf dem Niveau B1."],
    ["b2-migration", "der", "Einbürgerungstest", "-s", "el examen de naturalización", "Im Einbürgerungstest muss man 33 Fragen zu Politik, Geschichte und Gesellschaft beantworten."],
    ["b2-migration", "die", "Niederlassungserlaubnis", "-se", "el permiso de residencia permanente", "Nach einigen Jahren kann man eine Niederlassungserlaubnis beantragen."],
    ["b2-migration", "die", "Ausländerbehörde", "-n", "la oficina de extranjería", "Auf einen Termin bei der Ausländerbehörde wartet man oft wochenlang."],
    ["b2-migration", "der", "Migrationshintergrund", "¨-e", "el origen migrante", "Mehr als ein Viertel der Bevölkerung hat einen Migrationshintergrund."],
    ["b2-migration", "die", "Herkunft", "¨-e", "el origen", "Niemand darf wegen seiner Herkunft benachteiligt werden."],
    ["b2-migration", "die", "Identität", "-en", "la identidad", "Viele Kinder von Zugewanderten wachsen mit zwei Identitäten auf."],
    ["b2-migration", "die", "Zugehörigkeit", "-en", "la pertenencia", "Die Sprache schafft ein Gefühl der Zugehörigkeit."],
    ["b2-migration", "", "entwurzelt", "", "desarraigado", "Nach dem Umzug fühlte sich die Familie lange entwurzelt."],
    ["b2-migration", "das", "Klischee", "-s", "el estereotipo, el cliché", "Das Klischee vom immer pünktlichen Deutschen stimmt nicht immer."],
    ["b2-migration", "die", "Diskriminierung", "-en", "la discriminación", "Diskriminierung bei der Wohnungssuche ist leider weit verbreitet."],
    ["b2-migration", "die", "Anpassung", "-en", "la adaptación", "Integration bedeutet nicht vollständige Anpassung."],
    ["b2-migration", "", "sich zurechtfinden", "hat sich zurechtgefunden", "orientarse, adaptarse", "In den ersten Monaten habe ich mich kaum zurechtgefunden."],
    ["b2-migration", "die", "Mehrsprachigkeit", "–", "el multilingüismo", "Mehrsprachigkeit ist ein Vorteil, kein Defizit."],
    ["b2-migration", "der", "Geflüchtete", "-n", "el refugiado", "Viele Geflüchtete arbeiten heute in der Pflege."],
    ["b2-migration", "das", "Asyl", "–", "el asilo", "Die Familie hat in Deutschland Asyl beantragt."],
    ["b2-migration", "die", "Gastfreundschaft", "–", "la hospitalidad", "Die Gastfreundschaft in der Karibik ist sprichwörtlich."],
    ["b2-migration", "die", "Vielfalt", "–", "la diversidad", "Kulturelle Vielfalt bereichert die Gesellschaft."],

    /* ---------- Wohnen & Stadtleben ---------- */
    ["b2-stadt", "der", "Wohnungsmangel", "–", "la escasez de vivienda", "In vielen Großstädten herrscht akuter Wohnungsmangel."],
    ["b2-stadt", "die", "Mietpreisbremse", "-n", "el tope legal a los alquileres", "Die Mietpreisbremse soll den Anstieg der Mieten begrenzen."],
    ["b2-stadt", "die", "Gentrifizierung", "-en", "la gentrificación", "Durch die Gentrifizierung können sich viele alte Bewohner das Viertel nicht mehr leisten."],
    ["b2-stadt", "", "verdrängen", "hat verdrängt", "desplazar", "Teure Neubauten verdrängen kleine Läden aus dem Viertel."],
    ["b2-stadt", "der", "Ballungsraum", "¨-e", "la zona metropolitana", "Das Ruhrgebiet ist einer der größten Ballungsräume Europas."],
    ["b2-stadt", "die", "Infrastruktur", "-en", "la infraestructura", "Auf dem Land fehlt oft die nötige Infrastruktur."],
    ["b2-stadt", "der", "Nahverkehr", "–", "el transporte público local", "Der öffentliche Nahverkehr soll massiv ausgebaut werden."],
    ["b2-stadt", "", "ausbauen", "hat ausgebaut", "ampliar", "Die Stadt baut ihr Radwegenetz weiter aus."],
    ["b2-stadt", "die", "Eigentumswohnung", "-en", "el apartamento propio (comprado)", "Eine Eigentumswohnung in München ist für Normalverdiener kaum bezahlbar."],
    ["b2-stadt", "der", "Altbau", "Altbauten", "el edificio antiguo", "Ich liebe die hohen Decken im Altbau."],
    ["b2-stadt", "der", "Leerstand", "–", "los inmuebles desocupados", "In manchen Dörfern gibt es viel Leerstand."],
    ["b2-stadt", "die", "Sanierung", "-en", "la remodelación, la rehabilitación", "Nach der Sanierung stieg die Miete um dreißig Prozent."],
    ["b2-stadt", "die", "Eigenbedarfskündigung", "-en", "el desalojo porque el dueño necesita la vivienda", "Nach zwanzig Jahren in der Wohnung erhielt die Familie eine Eigenbedarfskündigung."],
    ["b2-stadt", "die", "Lebensqualität", "–", "la calidad de vida", "Parks und Spielplätze erhöhen die Lebensqualität in der Stadt."],
    ["b2-stadt", "die", "Grünfläche", "-n", "la zona verde", "Auf dem ehemaligen Flughafen Tempelhof ist eine riesige Grünfläche entstanden."],
    ["b2-stadt", "", "verkehrsberuhigt", "", "con tráfico restringido (velocidad muy baja)", "In der verkehrsberuhigten Zone darf man nur Schrittgeschwindigkeit fahren."],
    ["b2-stadt", "die", "Nachverdichtung", "-en", "la densificación urbana", "Durch Nachverdichtung sollen in bestehenden Vierteln neue Wohnungen entstehen."],
    ["b2-stadt", "die", "Stadtplanung", "-en", "la planificación urbana", "Gute Stadtplanung denkt zuerst an Fußgänger und Radfahrer."],
    ["b2-stadt", "das", "Mehrgenerationenhaus", "¨-er", "la casa multigeneracional", "Im Mehrgenerationenhaus helfen sich Jung und Alt gegenseitig."],
    ["b2-stadt", "", "bezahlbar", "", "asequible", "Bezahlbarer Wohnraum ist in vielen Städten knapp."],

    /* ---------- Redemittel B2 ---------- */
    ["b2-redemittel", "", "Ich möchte heute über ein Thema sprechen, das uns alle betrifft.", "", "Hoy quiero hablar de un tema que nos afecta a todos.", ""],
    ["b2-redemittel", "", "Mein Vortrag besteht aus drei Teilen.", "", "Mi presentación tiene tres partes.", ""],
    ["b2-redemittel", "", "Zunächst …, anschließend …, zum Schluss …", "", "Primero…, a continuación…, por último…", "Zunächst beschreibe ich die Situation, anschließend nenne ich Vor- und Nachteile und zum Schluss sage ich meine Meinung."],
    ["b2-redemittel", "", "Damit komme ich zum nächsten Punkt.", "", "Con esto paso al siguiente punto.", ""],
    ["b2-redemittel", "", "Was mein Heimatland betrifft, …", "", "En cuanto a mi país…", "Was mein Heimatland betrifft, arbeiten dort nur wenige Menschen von zu Hause aus."],
    ["b2-redemittel", "", "Abschließend möchte ich betonen, dass …", "", "Para terminar, quiero subrayar que…", "Abschließend möchte ich betonen, dass beide Seiten gute Argumente haben."],
    ["b2-redemittel", "", "Lassen Sie mich das an einem Beispiel verdeutlichen.", "", "Permítanme ilustrarlo con un ejemplo.", ""],
    ["b2-redemittel", "", "Meiner Ansicht nach …", "", "En mi opinión…", "Meiner Ansicht nach sollte jede Schule Medienkompetenz unterrichten."],
    ["b2-redemittel", "", "Ich bin der festen Überzeugung, dass …", "", "Estoy firmemente convencido de que…", "Ich bin der festen Überzeugung, dass Bildung kostenlos sein muss."],
    ["b2-redemittel", "", "Dafür spricht, dass …", "", "Un argumento a favor es que…", "Dafür spricht, dass man im Homeoffice keine Zeit mit Pendeln verliert."],
    ["b2-redemittel", "", "Dagegen spricht, dass …", "", "Un argumento en contra es que…", "Dagegen spricht, dass der Kontakt zu den Kollegen leidet."],
    ["b2-redemittel", "", "Das zeigt sich zum Beispiel daran, dass …", "", "Eso se ve, por ejemplo, en que…", "Das zeigt sich zum Beispiel daran, dass immer mehr Menschen mit dem Fahrrad fahren."],
    ["b2-redemittel", "", "Man darf nicht vergessen, dass …", "", "No hay que olvidar que…", "Man darf nicht vergessen, dass nicht jeder ein Auto hat."],
    ["b2-redemittel", "", "Ausschlaggebend ist für mich …", "", "Lo decisivo para mí es…", "Ausschlaggebend ist für mich der Preis."],
    ["b2-redemittel", "", "Da haben Sie zwar recht, aber …", "", "En eso tiene razón, pero…", "Da haben Sie zwar recht, aber die Kosten sind einfach zu hoch."],
    ["b2-redemittel", "", "Das mag sein, trotzdem …", "", "Puede ser; aun así…", "Das mag sein, trotzdem halte ich das Verbot für falsch."],
    ["b2-redemittel", "", "Ich gebe zu, dass …", "", "Reconozco que…", "Ich gebe zu, dass das Argument überzeugend klingt."],
    ["b2-redemittel", "", "Es stimmt zwar, dass …, aber …", "", "Es cierto que…, pero…", "Es stimmt zwar, dass Elektroautos teuer sind, aber sie werden jedes Jahr billiger."],
    ["b2-redemittel", "", "Da muss ich Ihnen widersprechen.", "", "Ahí tengo que contradecirle.", ""],
    ["b2-redemittel", "", "Davon bin ich nicht überzeugt.", "", "No estoy convencido de eso.", ""],
    ["b2-redemittel", "", "Das kann man so nicht verallgemeinern.", "", "Eso no se puede generalizar así.", ""],
    ["b2-redemittel", "", "Darf ich kurz einhaken?", "", "¿Puedo intervenir un momento?", ""],
    ["b2-redemittel", "", "Lassen Sie mich bitte ausreden.", "", "Déjeme terminar, por favor.", ""],
    ["b2-redemittel", "", "Was halten Sie davon, wenn …?", "", "¿Qué le parece si…?", "Was halten Sie davon, wenn wir das Projekt um einen Monat verschieben?"],
    ["b2-redemittel", "", "Könnten wir uns darauf einigen, dass …?", "", "¿Podríamos ponernos de acuerdo en que…?", "Könnten wir uns darauf einigen, dass jeder zwei Tage pro Woche im Büro ist?"],
    ["b2-redemittel", "", "Bezug nehmend auf Ihr Schreiben vom …", "", "En relación con su carta del…", "Bezug nehmend auf Ihr Schreiben vom 3. März möchte ich Ihnen Folgendes mitteilen."],
    ["b2-redemittel", "", "Hiermit möchte ich mich über … beschweren.", "", "Por la presente quiero presentar una queja sobre…", "Hiermit möchte ich mich über den mangelhaften Kundenservice beschweren."],
    ["b2-redemittel", "", "Ich wäre Ihnen dankbar, wenn …", "", "Le agradecería que…", "Ich wäre Ihnen dankbar, wenn Sie mir bis Freitag antworten könnten."],
    ["b2-redemittel", "", "Leider muss ich Ihnen mitteilen, dass …", "", "Lamento informarle que…", "Leider muss ich Ihnen mitteilen, dass ich an der Sitzung nicht teilnehmen kann."],
    ["b2-redemittel", "", "Für Rückfragen stehe ich Ihnen gern zur Verfügung.", "", "Quedo a su disposición para cualquier consulta.", ""]
  );

  /* ======================= Gramática B2 ======================= */
  DE.grammar.push(
    {
      id: "b2-konjunktiv1", level: "B2", title: "Estilo indirecto con Konjunktiv I", de: "Konjunktiv I & indirekte Rede",
      rule: "En noticias, informes y textos formales lo que dijo otra persona se reproduce con el Konjunktiv I: raíz del infinitivo + -e en 3.ª persona (er habe, sie komme, es gebe, er könne, er wolle); sein es irregular: er sei, sie seien. Si el Konjunktiv I es igual al indicativo (casi siempre en plural: sie haben), se usa el Konjunktiv II: sie hätten, sie würden kommen. Pasado: er habe gesagt, sie sei gefahren.",
      trap: "En español el tiempo retrocede («dijo que estaba enfermo») y el hispanohablante escribe «Er sagte, er war krank». En el alemán formal el tiempo NO cambia, solo el modo: «Er sagte, er sei krank». Y ojo con los pronombres: el «ich» del original pasa a «er» o «sie».",
      ex: ["Der Minister sagte, die Lage sei ernst.", "Sie behauptet, sie habe nichts gewusst.", "Die Firma teilte mit, man werde die Preise senken."],
      items: [
        { t: "type", q: "Der Sprecher sagte, die Regierung ___ keine neuen Schulden machen. (wollen)", a: ["wolle"], why: "Konjunktiv I de wollen en 3.ª persona singular: sie wolle." },
        { t: "type", q: "Die Ärztin meint, der Patient ___ sofort operiert werden. (müssen)", a: ["müsse", "muesse"], why: "Konjunktiv I de müssen: raíz del infinitivo (müss-) + -e → er müsse." },
        { t: "type", q: "Die Polizei teilte mit, es ___ keine Verletzten. (geben)", a: ["gebe"], why: "es gibt → es gebe. Típico de las noticias." },
        { t: "type", q: "Er behauptet, er ___ das Geld nie ___. (bekommen)", a: ["habe bekommen"], why: "Pasado en estilo indirecto: Konjunktiv I de haben + participio: er habe … bekommen." },
        { t: "type", q: "Sie erzählte, sie ___ allein nach Berlin ___. (fahren)", a: ["sei gefahren"], why: "fahren forma el Perfekt con sein → sie sei … gefahren." },
        { t: "mc", q: "Estilo indirecto formal: Die Mitarbeiter sagen, sie ___ zu wenig Zeit.", o: ["haben", "hätten", "hatten"], a: 1, why: "El Konjunktiv I «sie haben» es igual al indicativo; para que se note el estilo indirecto se usa el Konjunktiv II: hätten." },
        { t: "mc", q: "Anna: «Ich bin müde.» → ¿Cuál es correcta?", o: ["Anna sagt, ich sei müde.", "Anna sagt, sie seie müde.", "Anna sagt, sie sei müde."], a: 2, why: "ich → sie, y sein en Konjunktiv I es «sei» (nunca «seie»)." },
        { t: "mc", q: "Die Lehrerin sagte zu mir: «Schreib den Text neu!» → Die Lehrerin sagte, ich ___ den Text neu schreiben.", o: ["sollen", "solle", "sollst"], a: 1, why: "Las órdenes en estilo indirecto se expresan con sollen; Konjunktiv I de ich: ich solle." },
        { t: "order", w: ["Der Minister erklärte,", "die Reform", "sei", "ein großer Erfolg", "gewesen."], es: "El ministro declaró que la reforma había sido un gran éxito." },
        { t: "order", w: ["Die Zeugin sagte aus,", "sie", "habe", "den Täter", "nicht", "gesehen."], es: "La testigo declaró que no había visto al autor." }
      ]
    },
    {
      id: "b2-passiversatz", level: "B2", title: "Alternativas a la pasiva", de: "Passiversatzformen",
      rule: "Para decir que algo «se puede» o «se debe» hacer, el alemán formal tiene alternativas a la pasiva con modal: sein + zu + infinitivo (Das Formular ist bis Freitag abzugeben = debe entregarse; Das Problem ist leicht zu lösen = se puede resolver), adjetivos en -bar (lösbar, machbar, lesbar = que se puede resolver, hacer, leer) y sich lassen + infinitivo (Das lässt sich ändern = se puede cambiar).",
      trap: "«sein + zu» puede expresar posibilidad u obligación según el contexto: «Die Rechnung ist sofort zu bezahlen» es una obligación, no «está por pagarse». Con verbos separables el «zu» va en medio: abzugeben, einzureichen, umzusetzen.",
      ex: ["Der Antrag ist bis zum 31. März einzureichen.", "Das Ziel ist mit wenig Aufwand erreichbar.", "Die Tür lässt sich nicht öffnen."],
      items: [
        { t: "type", q: "Das Formular muss bis Freitag abgegeben werden. → Das Formular ist bis Freitag ___. (sein + zu)", a: ["abzugeben"], why: "Verbo separable: el zu va entre el prefijo y el verbo: ab-zu-geben." },
        { t: "type", q: "Man kann das Problem leicht lösen. → Das Problem ist leicht ___. (sein + zu)", a: ["zu lösen", "lösbar", "zu loesen", "loesbar"], why: "sein + zu + infinitivo expresa aquí posibilidad: ist leicht zu lösen (también: leicht lösbar)." },
        { t: "type", q: "Man kann das Wasser trinken. → Das Wasser ist ___. (-bar)", a: ["trinkbar"], why: "Raíz del verbo + -bar = que se puede hacer: trinkbar." },
        { t: "type", q: "Man kann den Fehler nicht erklären. → Der Fehler lässt ___ nicht erklären. (sich lassen)", a: ["sich"], why: "sich lassen + infinitivo = se puede: Der Fehler lässt sich nicht erklären." },
        { t: "type", q: "Man kann den Plan umsetzen. → Der Plan ist ___. (-bar)", a: ["umsetzbar"], why: "umsetzen → umsetzbar (realizable)." },
        { t: "mc", q: "«Die Rechnung ist innerhalb von 14 Tagen zu bezahlen.» significa:", o: ["La factura se pagó en 14 días.", "La factura debe pagarse en un plazo de 14 días.", "La factura se puede pagar en 14 días si uno quiere."], a: 1, why: "En facturas y normas, sein + zu expresa obligación (= muss bezahlt werden)." },
        { t: "mc", q: "Der Vorschlag ___ sich gut umsetzen.", o: ["ist", "wird", "lässt"], a: 2, why: "Con «sich» + infinitivo, el verbo es lassen: lässt sich umsetzen." },
        { t: "mc", q: "Diesen Text kann man kaum lesen. Er ist kaum ___.", o: ["gelesen", "lesbar", "lesend"], a: 1, why: "-bar = que se puede: lesbar (legible)." },
        { t: "order", w: ["Die Kosten", "lassen", "sich", "noch nicht", "genau", "berechnen."], es: "Los costos todavía no se pueden calcular con exactitud." },
        { t: "order", w: ["Medikamente", "sind", "für Kinder", "unzugänglich", "aufzubewahren."], es: "Los medicamentos deben guardarse fuera del alcance de los niños." }
      ]
    },
    {
      id: "b2-partizip", level: "B2", title: "Participios como adjetivo", de: "Partizipialattribute",
      rule: "Un participio puede ir delante del sustantivo como un adjetivo, con su terminación: el Partizip I (infinitivo + d) indica una acción que está ocurriendo, con sentido activo: das schlafende Kind (el niño que duerme). El Partizip II indica algo terminado o pasivo: das renovierte Haus (la casa que fue renovada). Entre el artículo y el participio caben complementos: die seit Jahren steigenden Mieten.",
      trap: "En español el complemento va detrás del sustantivo («los alquileres que suben desde hace años»); en alemán va TODO delante, entre artículo y sustantivo: «die seit Jahren steigenden Mieten». Y no olvides la terminación de adjetivo: das renovierte Haus, im renovierten Haus.",
      ex: ["Die steigenden Preise belasten viele Familien.", "Das gestern veröffentlichte Gesetz tritt im Mai in Kraft.", "Die im Ausland erworbenen Abschlüsse müssen anerkannt werden."],
      items: [
        { t: "type", q: "das Kind, das lacht → das ___ Kind", a: ["lachende"], why: "Acción en curso → Partizip I: lachend; con «das» en nominativo neutro: lachende." },
        { t: "type", q: "die Preise, die steigen → die ___ Preise", a: ["steigenden"], why: "Partizip I steigend; plural con artículo «die» → -en: steigenden." },
        { t: "type", q: "das Haus, das renoviert wurde → das ___ Haus", a: ["renovierte"], why: "Acción terminada y pasiva → Partizip II: renoviert + -e." },
        { t: "type", q: "ein Brief, der nicht geöffnet wurde → ein nicht ___ Brief", a: ["geöffneter", "geoeffneter"], why: "Partizip II geöffnet; tras «ein» en masculino nominativo → -er: geöffneter." },
        { t: "type", q: "Wir sprachen mit den Menschen, die in der Stadt leben. → Wir sprachen mit den in der Stadt ___ Menschen.", a: ["lebenden"], why: "Partizip I lebend; dativo plural tras «den» → -en: lebenden." },
        { t: "mc", q: "der Zug, der gestern angekommen ist → der gestern ___ Zug", o: ["ankommende", "angekommene", "angekommenen"], a: 1, why: "Ya llegó → Partizip II; nominativo masculino tras «der» → angekommene." },
        { t: "mc", q: "¿Cómo se dice «el problema discutido desde hace años»?", o: ["das Problem seit Jahren diskutiert", "das seit Jahren diskutierende Problem", "das seit Jahren diskutierte Problem"], a: 2, why: "Sentido pasivo → Partizip II, y todo el complemento delante del sustantivo." },
        { t: "mc", q: "«kochendes Wasser» significa…", o: ["agua que ya se hirvió", "agua que está hirviendo", "agua para cocinar"], a: 1, why: "Partizip I = acción en curso: el agua está hirviendo. «gekochtes Wasser» sería agua ya hervida." },
        { t: "order", w: ["Die", "von der Regierung", "geplante", "Reform", "ist", "umstritten."], es: "La reforma planeada por el gobierno es polémica." },
        { t: "order", w: ["Wir", "suchen", "eine", "gut", "ausgebildete", "Fachkraft."], es: "Buscamos un profesional bien formado." }
      ]
    },
    {
      id: "b2-nominal", level: "B2", title: "Nominalización y verbalización", de: "Nominalisierung & Verbalisierung",
      rule: "El alemán escrito convierte oraciones subordinadas en grupos nominales con preposición: «nachdem er angekommen war» → «nach seiner Ankunft»; «weil es regnete» → «wegen des Regens»; «bevor wir abreisen» → «vor der Abreise»; «wenn es schneit» → «bei Schnee». El verbo se vuelve sustantivo y el sujeto pasa a genitivo o a posesivo. Verbalizar es el camino inverso, y es clave para entender textos difíciles.",
      trap: "No mezcles las dos estructuras: «wegen es regnet» ✗. Detrás de la preposición necesitas un sustantivo: «wegen des Regens» ✓. El sujeto se convierte en genitivo: «die Preise steigen» → «der Anstieg der Preise».",
      ex: ["Nach dem Abschluss des Studiums ging sie ins Ausland.", "Bei schlechtem Wetter fällt das Konzert aus.", "Wegen der Erkrankung des Kollegen wurde die Sitzung verschoben."],
      items: [
        { t: "type", q: "Nachdem er angekommen war, rief er an. → Nach seiner ___ rief er an.", a: ["Ankunft"], why: "ankommen → die Ankunft." },
        { t: "type", q: "Bevor wir abreisen, packen wir die Koffer. → Vor der ___ packen wir die Koffer.", a: ["Abreise"], why: "abreisen → die Abreise." },
        { t: "type", q: "Weil die Preise steigen, kaufen viele weniger. → Wegen des ___ der Preise kaufen viele weniger.", a: ["Anstiegs", "Anstieges"], why: "steigen → der Anstieg; genitivo masculino: des Anstiegs." },
        { t: "type", q: "Während sie studierte, jobbte sie im Café. → Während ihres ___ jobbte sie im Café.", a: ["Studiums"], why: "studieren → das Studium; genitivo neutro: ihres Studiums." },
        { t: "type", q: "Wenn es schneit, fahren die Busse langsamer. → Bei ___ fahren die Busse langsamer.", a: ["Schnee", "Schneefall"], why: "wenn + condición → bei + sustantivo: bei Schnee." },
        { t: "mc", q: "Verbaliza: «Trotz seiner Erkältung ging er zur Arbeit.»", o: ["Weil er erkältet war, ging er zur Arbeit.", "Obwohl er erkältet war, ging er zur Arbeit.", "Nachdem er erkältet war, ging er zur Arbeit."], a: 1, why: "trotz (a pesar de) → obwohl." },
        { t: "mc", q: "¿Qué sustantivo corresponde a «verlieren»?", o: ["die Verlierung", "der Verlor", "der Verlust"], a: 2, why: "verlieren → der Verlust (la pérdida)." },
        { t: "mc", q: "Nominaliza: «um Energie zu sparen»", o: ["zum Energiesparen", "für Energie sparen", "wegen Energie sparen"], a: 0, why: "um … zu (finalidad) → zum / zur + sustantivo: zum Energiesparen." },
        { t: "order", w: ["Nach", "der Veröffentlichung", "der Studie", "gab", "es", "heftige Kritik."], es: "Tras la publicación del estudio hubo duras críticas." },
        { t: "order", w: ["Wegen", "des Streiks", "fallen", "heute", "viele Flüge", "aus."], es: "Por la huelga, hoy se cancelan muchos vuelos." }
      ]
    },
    {
      id: "b2-konnektoren", level: "B2", title: "Conectores: indem, sodass, falls…", de: "Konnektoren: indem, sodass, falls, sofern, anstatt dass, ohne dass",
      rule: "Todos mandan el verbo al final: indem = haciendo… (explica CÓMO se logra algo); sodass o so …, dass = de modo que (consecuencia); falls = en caso de que; sofern = siempre que, con tal de que; anstatt dass = en vez de que; ohne dass = sin que. Con el mismo sujeto en las dos partes se prefiere ohne … zu y anstatt … zu.",
      trap: "«indem» no significa «en el que»: equivale al gerundio español. «Man lernt, indem man spricht» = se aprende hablando. Y después de «ohne dass» el español usa subjuntivo («sin que lo supiera»), pero el alemán usa indicativo: «ohne dass er es wusste».",
      ex: ["Man spart Energie, indem man die Heizung herunterdreht.", "Es regnete stark, sodass das Spiel abgesagt wurde.", "Falls du Fragen hast, ruf mich an."],
      items: [
        { t: "type", q: "Man verbessert seine Aussprache, ___ man viel laut liest. (haciendo esto)", a: ["indem"], why: "Explica el modo de lograrlo → indem." },
        { t: "type", q: "Der Zug hatte Verspätung, ___ ich den Anschluss verpasste. (de modo que)", a: ["sodass", "so dass"], why: "Consecuencia → sodass." },
        { t: "type", q: "___ der Termin nicht passt, sagen Sie bitte ab. (en caso de que)", a: ["Falls", "Wenn"], why: "Condición posible → falls." },
        { t: "type", q: "Sie hat die Wohnung gekündigt, ___ ___ ihr Mann davon wusste. (sin que)", a: ["ohne dass"], why: "Sujetos distintos (sie / ihr Mann) → ohne dass, con el verbo al final y en indicativo." },
        { t: "type", q: "___ ___ die Firma neue Leute einstellt, müssen alle Überstunden machen. (en vez de que)", a: ["Anstatt dass", "Statt dass"], why: "Sujetos distintos → anstatt dass." },
        { t: "mc", q: "Wir nehmen an der Konferenz teil, ___ die Kosten übernommen werden.", o: ["indem", "sofern", "sodass"], a: 1, why: "sofern = siempre que (condición)." },
        { t: "mc", q: "Elige la frase correcta (mismo sujeto):", o: ["Er ging nach Hause, ohne dass er sich zu verabschieden.", "Er ging nach Hause, ohne sich zu verabschieden.", "Er ging nach Hause, ohne sich verabschiedet."], a: 1, why: "Mismo sujeto → ohne … zu + infinitivo." },
        { t: "mc", q: "«Sie hat Deutsch gelernt, indem sie Serien geschaut hat.» significa:", o: ["Aprendió alemán mientras alguien veía series.", "Aprendió alemán en vez de ver series.", "Aprendió alemán viendo series."], a: 2, why: "indem = gerundio: viendo series." },
        { t: "order", w: ["Die Straße", "war", "so glatt,", "dass", "es", "mehrere Unfälle", "gab."], es: "La calle estaba tan resbaladiza que hubo varios accidentes." },
        { t: "order", w: ["Falls", "es", "Probleme", "gibt,", "melden", "Sie", "sich", "bitte."], es: "En caso de que haya problemas, comuníquese, por favor." }
      ]
    },
    {
      id: "b2-modalsubj", level: "B2", title: "Modales para suponer y citar", de: "Subjektive Modalverben",
      rule: "Los modales también indican cuán seguro está el hablante o de dónde viene la información: muss = estoy casi seguro (debe de); dürfte = es probable; kann o könnte = es posible; soll = dicen que…; will = el propio sujeto lo afirma, pero yo lo dudo. Para el pasado: modal en presente + participio + haben o sein: Er soll viel Geld verdient haben.",
      trap: "«Er soll reich sein» NO es «él debe ser rico», sino «dicen que es rico». «Er will das gesehen haben» = «asegura haberlo visto (y no me lo creo)». En el pasado el modal NO va en pasado: «Sie muss den Zug verpasst haben» = debe de haber perdido el tren.",
      ex: ["Der neue Chef soll sehr streng sein.", "Das dürfte kein Problem sein.", "Er will den Unfall gesehen haben."],
      items: [
        { t: "mc", q: "«Die Firma soll pleite sein.» significa:", o: ["La empresa tiene que quebrar.", "Dicen que la empresa está en quiebra.", "La empresa quiere quebrar."], a: 1, why: "soll = información de otros: dicen que…" },
        { t: "mc", q: "«Sie will die Prüfung ohne Lernen bestanden haben.» significa:", o: ["Ella quiere aprobar sin estudiar.", "Ella aprobó sin estudiar.", "Ella asegura haber aprobado sin estudiar, pero lo dudo."], a: 2, why: "will + infinitivo pasado = el sujeto lo afirma y el hablante lo pone en duda." },
        { t: "mc", q: "Estás casi seguro: «El paquete debe de haber llegado ya.»", o: ["Das Paket muss schon angekommen sein.", "Das Paket soll schon angekommen sein.", "Das Paket will schon angekommen sein."], a: 0, why: "Casi seguro → muss + participio + sein." },
        { t: "type", q: "Wahrscheinlich ist er krank. → Er ___ krank sein. (dürfen)", a: ["dürfte", "duerfte"], why: "Probabilidad → dürfte (Konjunktiv II de dürfen)." },
        { t: "type", q: "Man sagt, dass der Minister zurücktreten wird. → Der Minister ___ zurücktreten.", a: ["soll"], why: "Lo dicen otros → soll." },
        { t: "type", q: "Ich bin sicher, dass sie den Bus verpasst hat. → Sie muss den Bus verpasst ___.", a: ["haben"], why: "Suposición sobre el pasado: muss + participio + haben." },
        { t: "type", q: "Man sagt, dass er früher in Mexiko gelebt hat. → Er soll früher in Mexiko ___ ___.", a: ["gelebt haben"], why: "soll + infinitivo pasado: gelebt haben." },
        { t: "type", q: "Er behauptet, dass er nichts gewusst hat. → Er ___ nichts gewusst haben.", a: ["will"], why: "Afirmación del propio sujeto, puesta en duda → will." },
        { t: "order", w: ["Die Reparatur", "dürfte", "etwa", "zwei Wochen", "dauern."], es: "La reparación probablemente durará unas dos semanas." },
        { t: "order", w: ["Der Täter", "soll", "über die Grenze", "geflohen", "sein."], es: "Se dice que el autor huyó por la frontera." }
      ]
    },
    {
      id: "b2-futur2", level: "B2", title: "Futuro perfecto", de: "Futur II",
      rule: "Futur II = werden + participio + haben o sein (al final). Sirve para (1) una acción que estará terminada en un momento del futuro: «Bis Freitag werde ich den Bericht geschrieben haben», y sobre todo (2) para una suposición sobre el pasado, casi siempre con «wohl» o «schon»: «Er wird den Zug verpasst haben» = habrá perdido el tren (supongo).",
      trap: "Funciona como el español «habrá llegado», pero participio y auxiliar van al final y en este orden: «…angekommen sein», no «sein angekommen». En la conversación diaria, para el futuro terminado basta el Perfekt con una expresión de tiempo: «Bis Freitag habe ich den Bericht geschrieben».",
      ex: ["Bis Ende des Jahres werde ich die B2-Prüfung bestanden haben.", "Sie wird wohl schon nach Hause gegangen sein.", "In zehn Jahren werden Roboter viele Aufgaben übernommen haben."],
      items: [
        { t: "type", q: "Bis morgen ___ ich den Bericht ___ ___. (schreiben)", a: ["werde geschrieben haben"], why: "werde (posición 2) … geschrieben haben (al final)." },
        { t: "type", q: "Er ist noch nicht da. Er ___ den Zug ___ ___. (verpassen)", a: ["wird verpasst haben"], why: "Suposición sobre el pasado: wird … verpasst haben." },
        { t: "type", q: "Sie antwortet nicht. Sie ___ wohl schon ___ ___. (einschlafen)", a: ["wird eingeschlafen sein"], why: "einschlafen forma el Perfekt con sein → eingeschlafen sein." },
        { t: "type", q: "Bis 2030 ___ die Stadt viele neue Radwege ___ ___. (bauen)", a: ["wird gebaut haben"], why: "Acción terminada en el futuro: wird … gebaut haben." },
        { t: "mc", q: "«Der Chef wird die E-Mail schon gelesen haben.» expresa…", o: ["una orden", "una suposición sobre el pasado", "un deseo"], a: 1, why: "Futur II con «schon» = supongo que ya la leyó." },
        { t: "mc", q: "Bis nächsten Sommer werden wir die Wohnung renoviert ___.", o: ["sein", "werden", "haben"], a: 2, why: "renovieren forma el Perfekt con haben → renoviert haben." },
        { t: "mc", q: "Sie ___ wohl schon in Essen angekommen sein.", o: ["wird", "werden", "hat"], a: 0, why: "sie (singular) → wird; ankommen va con sein." },
        { t: "order", w: ["In einer Stunde", "werden", "wir", "alles", "erledigt", "haben."], es: "Dentro de una hora habremos terminado todo." },
        { t: "order", w: ["Das Paket", "wird", "wohl", "verloren gegangen", "sein."], es: "El paquete seguramente se habrá perdido." }
      ]
    },
    {
      id: "b2-fvg", level: "B2", title: "Expresiones verbo + sustantivo", de: "Funktionsverbgefüge",
      rule: "En el registro formal muchas acciones se dicen con un sustantivo y un verbo casi vacío: eine Entscheidung treffen (= entscheiden), eine Frage stellen, zur Verfügung stehen, in Kraft treten, eine Rolle spielen, Kritik üben (= kritisieren), Rücksicht nehmen auf, in Frage kommen, in die Tat umsetzen. El significado está en el sustantivo; el verbo es fijo y hay que aprenderlo en bloque.",
      trap: "No traduzcas el verbo del español: «tomar una decisión» es «eine Entscheidung treffen» (¡no «nehmen»!), «hacer una pregunta» es «eine Frage stellen» (no «machen»), y «poner algo en duda» es «etwas in Frage stellen».",
      ex: ["Wir müssen bis Montag eine Entscheidung treffen.", "Das neue Gesetz tritt am 1. Januar in Kraft.", "Der Raum steht Ihnen ab neun Uhr zur Verfügung."],
      items: [
        { t: "mc", q: "Wir müssen schnell eine Entscheidung ___.", o: ["nehmen", "treffen", "machen"], a: 1, why: "Expresión fija: eine Entscheidung treffen." },
        { t: "mc", q: "Darf ich Ihnen eine Frage ___?", o: ["stellen", "machen", "geben"], a: 0, why: "Expresión fija: eine Frage stellen." },
        { t: "mc", q: "Das Gesetz tritt nächstes Jahr in ___.", o: ["Macht", "Gang", "Kraft"], a: 2, why: "in Kraft treten = entrar en vigor." },
        { t: "type", q: "Für Fragen stehe ich Ihnen gern zur ___. (estar a disposición)", a: ["Verfügung"], why: "zur Verfügung stehen = estar a disposición." },
        { t: "type", q: "Bitte nehmen Sie ___ auf die Nachbarn. (consideración)", a: ["Rücksicht", "Ruecksicht"], why: "Rücksicht nehmen auf + acusativo = tener consideración con." },
        { t: "type", q: "Der Plan wurde endlich in die Tat ___. (umsetzen)", a: ["umgesetzt"], why: "in die Tat umsetzen = llevar a la práctica; pasiva: wurde … umgesetzt." },
        { t: "type", q: "Geld spielt für mich keine große ___. (papel)", a: ["Rolle"], why: "eine Rolle spielen = tener importancia." },
        { t: "type", q: "Die Ministerin hat an dem Vorschlag scharfe Kritik ___. (üben)", a: ["geübt", "geuebt"], why: "Kritik üben an = criticar; Perfekt: hat … geübt." },
        { t: "mc", q: "«etwas in Frage stellen» significa:", o: ["hacer una pregunta", "poner algo en duda", "preguntar a alguien"], a: 1, why: "in Frage stellen = cuestionar, poner en duda." },
        { t: "order", w: ["Der Kandidat", "kommt", "für die Stelle", "nicht", "in Frage."], es: "El candidato no entra en consideración para el puesto." }
      ]
    },
    {
      id: "b2-genitivpraep", level: "B2", title: "Preposiciones con genitivo", de: "Präpositionen mit Genitiv",
      rule: "En textos formales se usan preposiciones con genitivo: aufgrund (debido a), angesichts (ante, en vista de), infolge (a consecuencia de), mithilfe (con ayuda de), anlässlich (con motivo de), hinsichtlich (en cuanto a), innerhalb y außerhalb (dentro de, fuera de). Genitivo: des o eines (+ -s o -es en masculino y neutro), der o einer (femenino y plural).",
      trap: "El genitivo masculino y neutro necesita DOS marcas: el artículo y la -s del sustantivo: «aufgrund des schlechten Wetters», no «des schlechten Wetter». En la calle se oye dativo («wegen dem Wetter»), pero en el examen escrito usa el genitivo.",
      ex: ["Aufgrund des Streiks fallen viele Züge aus.", "Angesichts der hohen Kosten wurde das Projekt gestoppt.", "Mithilfe einer App lernt sie jeden Tag Vokabeln."],
      items: [
        { t: "mc", q: "Aufgrund ___ Wetters wurde das Spiel abgesagt.", o: ["dem schlechten", "des schlechten", "der schlechten"], a: 1, why: "aufgrund + genitivo; das Wetter → des schlechten Wetters." },
        { t: "mc", q: "Angesichts ___ Preise kaufen viele weniger ein.", o: ["der hohen", "den hohen", "die hohen"], a: 0, why: "angesichts + genitivo plural → der hohen Preise." },
        { t: "type", q: "Infolge ___ Unfalls war die Autobahn gesperrt. (ein)", a: ["eines"], why: "infolge + genitivo; der Unfall → eines Unfalls." },
        { t: "type", q: "Mithilfe ___ Kollegin habe ich das Problem gelöst. (meine)", a: ["meiner"], why: "mithilfe + genitivo femenino → meiner." },
        { t: "type", q: "Innerhalb ___ Woche müssen Sie antworten. (eine)", a: ["einer"], why: "innerhalb + genitivo femenino → einer Woche." },
        { t: "type", q: "Anlässlich ___ 50. Geburtstags gab es ein großes Fest. (sein)", a: ["seines"], why: "anlässlich + genitivo masculino → seines 50. Geburtstags." },
        { t: "mc", q: "Elige la preposición: ___ der Klimakrise müssen wir handeln. (en vista de)", o: ["Mithilfe", "Anlässlich", "Angesichts"], a: 2, why: "angesichts = en vista de, ante." },
        { t: "mc", q: "Elige la versión del registro escrito:", o: ["Wegen dem Regen blieben wir zu Hause.", "Wegen des Regens blieben wir zu Hause.", "Wegen der Regen blieben wir zu Hause."], a: 1, why: "Escrito formal → genitivo: wegen des Regens." },
        { t: "order", w: ["Hinsichtlich", "der Kosten", "gibt", "es", "noch", "offene Fragen."], es: "En cuanto a los costos, todavía hay preguntas abiertas." },
        { t: "order", w: ["Infolge", "der Dürre", "sind", "die Lebensmittelpreise", "gestiegen."], es: "A consecuencia de la sequía, subieron los precios de los alimentos." }
      ]
    },
    {
      id: "b2-zustandspassiv", level: "B2", title: "Pasiva de estado", de: "Zustandspassiv",
      rule: "La pasiva de proceso (werden + participio) describe la acción: «Die Tür wird geschlossen» (alguien la está cerrando). La pasiva de estado (sein + participio) describe el resultado: «Die Tür ist geschlossen» (está cerrada). Pasado: «Die Tür war geschlossen».",
      trap: "Aquí el español te ayuda: «ser cerrada» ≈ werden; «estar cerrada» ≈ sein. El error típico es usar werden para un estado: «Das Geschäft wird heute geschlossen» significa que lo están cerrando hoy (o que cierra para siempre); si solo quieres decir que hoy no abre, es «Das Geschäft ist heute geschlossen».",
      ex: ["Das Fenster ist geöffnet.", "Die Rechnung ist schon bezahlt.", "Der Tisch war für acht Personen gedeckt."],
      items: [
        { t: "type", q: "Du musst das Formular nicht mehr ausfüllen, es ___ schon ausgefüllt. (estado, presente)", a: ["ist"], why: "Resultado → sein: ist ausgefüllt." },
        { t: "type", q: "Als wir ankamen, ___ das Restaurant schon geschlossen. (estado, pasado)", a: ["war"], why: "Estado en el pasado → war geschlossen." },
        { t: "type", q: "Keine Sorge, die Rechnung ist schon ___. (bezahlen)", a: ["bezahlt"], why: "Zustandspassiv: ist + participio: bezahlt (be- no lleva ge-)." },
        { t: "type", q: "Das Museum ___ gerade renoviert, deshalb ist es geschlossen. (proceso)", a: ["wird"], why: "La acción está en curso → werden: wird renoviert." },
        { t: "type", q: "Die Wohnung ___ gerade ___. (streichen, proceso)", a: ["wird gestrichen"], why: "Pasiva de proceso: wird + participio de streichen: gestrichen." },
        { t: "mc", q: "Die Tür ___ seit gestern repariert. Du kannst sie wieder benutzen.", o: ["wird", "ist", "hat"], a: 1, why: "«seit gestern» + resultado → estado: ist repariert." },
        { t: "mc", q: "Achtung, die Straße ___ in diesem Moment von der Polizei gesperrt.", o: ["ist", "hat", "wird"], a: 2, why: "Acción en curso con agente (von der Polizei) → pasiva de proceso: wird gesperrt." },
        { t: "mc", q: "«Der Vertrag ist unterschrieben.» significa:", o: ["El contrato está firmado.", "El contrato está siendo firmado.", "El contrato será firmado."], a: 0, why: "sein + participio = estado resultante." },
        { t: "order", w: ["Alle Plätze", "waren", "schon", "seit Wochen", "reserviert."], es: "Todos los asientos estaban reservados desde hacía semanas." },
        { t: "order", w: ["Das Problem", "ist", "inzwischen", "gelöst."], es: "El problema ya está resuelto." }
      ]
    },
    {
      id: "b2-konditional", level: "B2", title: "Condicionales sin «wenn»", de: "Konditionalsätze ohne wenn",
      rule: "En lugar de «wenn», el verbo conjugado puede ir al PRINCIPIO de la condición: «Hast du Zeit, komm vorbei» = si tienes tiempo, pasa. Es muy frecuente con Konjunktiv II («Hätte ich das gewusst, wäre ich gekommen») y con «sollte» para un caso posible («Sollten Sie Fragen haben, rufen Sie uns an» = si tuviera alguna pregunta). La oración principal empieza con el verbo o con «dann» o «so».",
      trap: "Parece una pregunta, pero la coma y la segunda parte lo delatan. Como en español no existe esta estructura, el error típico es no reconocerla al leer. Al escribir, el sujeto va DETRÁS del verbo: «Ich hätte das gewusst, …» ✗ → «Hätte ich das gewusst, …» ✓.",
      ex: ["Hätte ich mehr Zeit, würde ich einen Sprachkurs machen.", "Sollte der Zug Verspätung haben, nehmen wir ein Taxi.", "Regnet es morgen, bleiben wir zu Hause."],
      items: [
        { t: "type", q: "Wenn ich das gewusst hätte, wäre ich früher gekommen. → ___ ich das gewusst, wäre ich früher gekommen.", a: ["Hätte", "Haette"], why: "Sin wenn, el verbo conjugado va primero: Hätte ich…" },
        { t: "type", q: "Wenn Sie Fragen haben sollten, rufen Sie uns an. → ___ Sie Fragen haben, rufen Sie uns an.", a: ["Sollten"], why: "Caso posible → Sollten Sie…" },
        { t: "type", q: "Wenn es morgen regnet, bleiben wir zu Hause. → ___ es morgen, bleiben wir zu Hause.", a: ["Regnet"], why: "El verbo conjugado al principio: Regnet es…" },
        { t: "type", q: "Wenn ich du wäre, würde ich das Angebot annehmen. → ___ ich du, würde ich das Angebot annehmen.", a: ["Wäre", "Waere"], why: "Wäre ich du… = si yo fuera tú." },
        { t: "type", q: "Wenn du Hilfe brauchst, melde dich. → ___ du Hilfe, melde dich.", a: ["Brauchst"], why: "Brauchst du Hilfe, … = si necesitas ayuda." },
        { t: "mc", q: "«Kommt der Bus nicht, gehen wir zu Fuß.» significa:", o: ["Cuando venga el autobús, iremos a pie.", "Si el autobús no viene, vamos a pie.", "Como el autobús no vino, fuimos a pie."], a: 1, why: "Verbo al principio + coma = condición: si no viene…" },
        { t: "mc", q: "Elige la frase correcta:", o: ["Er hätte sich beeilt, hätte er den Zug erreicht.", "Hätte er sich beeilt, er den Zug erreicht hätte.", "Hätte er sich beeilt, hätte er den Zug erreicht."], a: 2, why: "Condición con el verbo primero; la principal también empieza por el verbo." },
        { t: "mc", q: "Sollte es Probleme geben, ___ Sie sich bitte an den Kundenservice.", o: ["wendet", "wenden", "gewendet"], a: 1, why: "Principal con Sie: wenden Sie sich…" },
        { t: "order", w: ["Hätten", "wir", "früher", "gebucht,", "wäre", "es", "billiger", "gewesen."], es: "Si hubiéramos reservado antes, habría sido más barato." },
        { t: "order", w: ["Sollten", "Sie", "verhindert", "sein,", "sagen", "Sie", "bitte rechtzeitig ab."], es: "Si no pudiera venir, cancele a tiempo, por favor." }
      ]
    },
    {
      id: "b2-wer", level: "B2", title: "Relativas con wer, wen, wem", de: "Relativsätze mit wer / wen / wem",
      rule: "Para «quien…» en general (sin sustantivo delante) se usa wer (nominativo), wen (acusativo) o wem (dativo), según la función DENTRO de la relativa. La oración principal suele retomarlo con der, den o dem en el caso que pida su propio verbo: «Wer Hilfe braucht, dem helfen wir». Si los dos casos coinciden, el pronombre se puede omitir: «Wer viel liest, (der) weiß viel».",
      trap: "En español «quien» no cambia; en alemán el caso lo decide el verbo de la relativa: «Wem das nicht gefällt, …» (gefallen + dativo), «Wen das interessiert, …» (interessieren + acusativo). Y el pronombre de la principal lleva el caso de SU verbo.",
      ex: ["Wer zu spät kommt, den bestraft das Leben.", "Wem das Angebot nicht gefällt, der kann es ablehnen.", "Wen das Thema interessiert, der kann sich hier anmelden."],
      items: [
        { t: "type", q: "___ viel liest, weiß viel.", a: ["Wer"], why: "Sujeto de «liest» → nominativo: wer." },
        { t: "type", q: "___ das nicht gefällt, der kann gehen. (gefallen + dativo)", a: ["Wem"], why: "gefallen pide dativo → wem." },
        { t: "type", q: "___ das Thema interessiert, der sollte zum Vortrag kommen. (interessieren + acusativo)", a: ["Wen"], why: "interessieren pide acusativo → wen." },
        { t: "type", q: "Wer Hilfe braucht, ___ helfen wir gern. (helfen + dativo)", a: ["dem"], why: "En la principal, helfen pide dativo → dem." },
        { t: "mc", q: "___ man vertraut, dem erzählt man Geheimnisse.", o: ["Wer", "Wen", "Wem"], a: 2, why: "vertrauen + dativo → wem." },
        { t: "mc", q: "Wer lügt, ___ glaubt man nicht.", o: ["dem", "der", "den"], a: 0, why: "jemandem glauben → dativo en la principal: dem." },
        { t: "mc", q: "___ man einlädt, der sollte pünktlich sein.", o: ["Wem", "Wen", "Wer"], a: 1, why: "einladen + acusativo → wen." },
        { t: "mc", q: "Wer die Prüfung besteht, ___ bekommt ein Zertifikat.", o: ["den", "dem", "der"], a: 2, why: "Sujeto de «bekommt» → nominativo: der." },
        { t: "order", w: ["Wer", "rastet,", "der", "rostet."], es: "Quien se detiene, se oxida. (refrán)" },
        { t: "order", w: ["Wem", "die Wohnung", "nicht", "gefällt,", "der", "muss", "sie", "nicht", "nehmen."], es: "A quien no le guste el apartamento, no tiene que tomarlo." }
      ]
    }
  );

  /* ======================= Diálogos B2 ======================= */
  DE.dialogs.push(
    {
      id: "b2-gehalt", level: "B2", title: "La negociación salarial", de: "Das Gehaltsgespräch",
      who: { H: ["Frau Hartmann (Abteilungsleiterin)", "f"], C: ["Carlos Pérez (Ingenieur)", "m"] },
      lines: [
        ["H", "Herr Pérez, Sie hatten um dieses Gespräch gebeten. Worum geht es?", "Señor Pérez, usted había pedido esta reunión. ¿De qué se trata?"],
        ["C", "Vielen Dank, dass Sie sich Zeit nehmen. Ich möchte gern über mein Gehalt sprechen.", "Muchas gracias por tomarse el tiempo. Quisiera hablar de mi salario."],
        ["H", "Gut. Was schwebt Ihnen denn vor?", "Bien. ¿Qué tiene en mente?"],
        ["C", "Seit meinem Einstieg vor zwei Jahren habe ich deutlich mehr Verantwortung übernommen. Unter anderem leite ich inzwischen das Projekt in Polen.", "Desde que entré hace dos años he asumido mucha más responsabilidad. Entre otras cosas, ahora dirijo el proyecto en Polonia."],
        ["H", "Das stimmt, und Ihre Arbeit wird hier sehr geschätzt. Allerdings ist das Budget in diesem Jahr ziemlich knapp.", "Es cierto, y aquí valoramos mucho su trabajo. Sin embargo, este año el presupuesto es bastante ajustado."],
        ["C", "Das verstehe ich. Trotzdem halte ich eine Erhöhung um acht Prozent für angemessen, zumal vergleichbare Stellen in der Branche besser bezahlt werden.", "Lo entiendo. Aun así, considero adecuado un aumento del ocho por ciento, sobre todo porque los puestos comparables en el sector se pagan mejor."],
        ["H", "Acht Prozent sind leider nicht drin. Ich könnte Ihnen höchstens fünf Prozent anbieten.", "Lamentablemente, un ocho por ciento no es posible. Como mucho podría ofrecerle un cinco por ciento."],
        ["C", "Wäre es denn möglich, die Differenz anders auszugleichen, etwa durch eine Weiterbildung oder einen zusätzlichen Tag im Homeoffice?", "¿Sería posible compensar la diferencia de otra manera, por ejemplo con un curso de formación o un día más de teletrabajo?"],
        ["H", "Darüber lässt sich reden. Die Firma könnte Ihnen zum Beispiel die Ausbildung zum zertifizierten Projektmanager finanzieren.", "De eso se puede hablar. La empresa podría financiarle, por ejemplo, la formación como gestor de proyectos certificado."],
        ["C", "Das wäre mir sehr wichtig. Dann wären fünf Prozent plus Weiterbildung für mich in Ordnung.", "Eso sería muy importante para mí. Entonces, un cinco por ciento más la formación me parecería bien."],
        ["H", "Schön, dass wir uns einigen konnten. Ich lasse die Vereinbarung schriftlich festhalten.", "Qué bien que pudimos llegar a un acuerdo. Haré que el acuerdo quede por escrito."],
        ["C", "Vielen Dank. Ich freue mich auf die neuen Aufgaben.", "Muchas gracias. Tengo muchas ganas de asumir las nuevas tareas."]
      ],
      q: [
        ["Warum findet Carlos, dass er mehr verdienen sollte?", ["Er ist schon fünf Jahre in der Firma.", "Er hat mehr Verantwortung übernommen.", "Er möchte nach Polen ziehen."], 1],
        ["Was bietet Frau Hartmann zuerst an?", ["acht Prozent", "einen zusätzlichen Tag im Homeoffice", "fünf Prozent"], 2],
        ["Worauf einigen sich die beiden?", ["fünf Prozent und eine bezahlte Weiterbildung", "acht Prozent ohne Weiterbildung", "keine Gehaltserhöhung"], 0]
      ],
      tip: "En Alemania se negocia con cifras concretas y argumentos objetivos: responsabilidades nuevas y comparación con el mercado. Pedir que el acuerdo quede por escrito («schriftlich festhalten») es normal, no una falta de confianza."
    },
    {
      id: "b2-reklamation", level: "B2", title: "Una reclamación por teléfono", de: "Reklamation beim Kundenservice",
      who: { K: ["Herr Brandl (Kundenservice)", "m"], L: ["Lucía Gómez (Kundin)", "f"] },
      lines: [
        ["K", "Kundenservice Elektro Fuchs, Sie sprechen mit Thomas Brandl. Was kann ich für Sie tun?", "Servicio al cliente de Elektro Fuchs, habla Thomas Brandl. ¿En qué puedo ayudarle?"],
        ["L", "Guten Tag, hier ist Gómez. Ich habe vor drei Monaten bei Ihnen einen Laptop gekauft, und seit letzter Woche lässt er sich nicht mehr einschalten.", "Buenos días, habla Gómez. Hace tres meses les compré una laptop y desde la semana pasada ya no enciende."],
        ["K", "Das tut mir leid. Haben Sie die Bestellnummer zur Hand?", "Lo siento. ¿Tiene a mano el número de pedido?"],
        ["L", "Ja, vier, sieben, eins, eins, neun. Ich habe das Gerät bereits zweimal eingeschickt, aber das Problem ist immer noch nicht behoben.", "Sí, cuatro, siete, uno, uno, nueve. Ya envié el aparato dos veces, pero el problema sigue sin resolverse."],
        ["K", "Ich sehe es hier im System. Laut unserer Werkstatt soll der Fehler beim zweiten Mal behoben worden sein.", "Lo veo aquí en el sistema. Según nuestro taller, el fallo supuestamente se reparó la segunda vez."],
        ["L", "Offensichtlich nicht. Ehrlich gesagt bin ich ziemlich verärgert, denn ich brauche den Laptop dringend für meine Arbeit.", "Pues está claro que no. Sinceramente, estoy bastante molesta, porque necesito la laptop con urgencia para mi trabajo."],
        ["K", "Das verstehe ich voll und ganz. Da das Gerät noch unter die Gewährleistung fällt, haben Sie mehrere Möglichkeiten.", "Lo entiendo perfectamente. Como el aparato todavía está cubierto por la garantía legal, usted tiene varias opciones."],
        ["L", "Und welche wären das?", "¿Y cuáles serían?"],
        ["K", "Entweder wir reparieren es ein drittes Mal, oder Sie bekommen ein neues Gerät. Falls Sie vom Kauf zurücktreten möchten, wird Ihnen der Kaufpreis erstattet.", "O lo reparamos por tercera vez, o recibe un aparato nuevo. Si prefiere anular la compra, le reembolsamos el precio."],
        ["L", "Nach zwei gescheiterten Reparaturen möchte ich vom Kaufvertrag zurücktreten und mein Geld zurückhaben.", "Después de dos reparaciones fallidas, quiero anular el contrato de compra y que me devuelvan el dinero."],
        ["K", "In Ordnung. Ich schicke Ihnen ein Rücksendeetikett per E-Mail. Sobald das Gerät bei uns eingetroffen ist, erstatten wir den Betrag innerhalb von fünf Werktagen.", "De acuerdo. Le envío una etiqueta de devolución por correo electrónico. En cuanto el aparato nos llegue, le reembolsamos el importe en un plazo de cinco días hábiles."],
        ["L", "Könnten Sie mir das bitte auch schriftlich bestätigen?", "¿Podría confirmármelo también por escrito, por favor?"],
        ["K", "Selbstverständlich. Die Bestätigung erhalten Sie noch heute. Ich bitte nochmals um Entschuldigung für die Unannehmlichkeiten.", "Por supuesto. Recibirá la confirmación hoy mismo. Le pido disculpas otra vez por las molestias."]
      ],
      q: [
        ["Was ist das Problem mit dem Laptop?", ["Der Bildschirm ist kaputt.", "Er lässt sich nicht einschalten.", "Er wurde falsch geliefert."], 1],
        ["Wie oft wurde das Gerät schon eingeschickt?", ["einmal", "dreimal", "zweimal"], 2],
        ["Was möchte Frau Gómez am Ende?", ["ihr Geld zurück", "ein neues Gerät", "eine dritte Reparatur"], 0]
      ],
      tip: "En la Unión Europea la «Gewährleistung» (garantía legal) dura dos años y es obligatoria para el vendedor; la «Garantie» es una promesa voluntaria del fabricante. Si la reparación falla dos veces, normalmente puedes exigir la devolución del dinero."
    },
    {
      id: "b2-teamsitzung", level: "B2", title: "Reunión: ¿más teletrabajo?", de: "Teambesprechung: Mehr Homeoffice?",
      who: { K: ["Frau Krüger (Teamleiterin)", "f"], W: ["Jonas Weber", "m"], C: ["Carlos Pérez", "m"] },
      lines: [
        ["K", "Guten Morgen zusammen. Heute müssen wir eine Entscheidung über die neue Homeoffice-Regelung treffen.", "Buenos días a todos. Hoy tenemos que tomar una decisión sobre la nueva norma de teletrabajo."],
        ["W", "Meiner Ansicht nach sollten wir drei Tage Homeoffice pro Woche einführen. Die meisten Aufgaben lassen sich problemlos von zu Hause erledigen.", "En mi opinión, deberíamos introducir tres días de teletrabajo por semana. La mayoría de las tareas se pueden hacer sin problema desde casa."],
        ["C", "Da muss ich widersprechen. Gerade bei neuen Projekten ist der persönliche Austausch unersetzlich.", "Ahí no estoy de acuerdo. Justamente en los proyectos nuevos, el intercambio en persona es insustituible."],
        ["W", "Das mag sein, aber dafür gibt es Videokonferenzen. Außerdem spart man sich das Pendeln, und das kommt auch der Umwelt zugute.", "Puede ser, pero para eso están las videoconferencias. Además, uno se ahorra el trayecto diario, y eso también beneficia al medio ambiente."],
        ["C", "Ich gebe zu, dass das ein starkes Argument ist. Trotzdem merke ich, dass im Homeoffice viele Informationen verloren gehen.", "Reconozco que es un argumento fuerte. Aun así, noto que con el teletrabajo se pierde mucha información."],
        ["K", "Darf ich kurz einhaken? Laut unserer Umfrage wünschen sich achtzig Prozent des Teams mehr Flexibilität.", "¿Puedo intervenir un momento? Según nuestra encuesta, el ochenta por ciento del equipo quiere más flexibilidad."],
        ["W", "Eben. Wenn wir das ignorieren, laufen uns die guten Leute weg.", "Exacto. Si lo ignoramos, la gente buena se nos va."],
        ["C", "Was halten Sie davon, wenn wir feste Bürotage für alle einführen? Zum Beispiel Dienstag und Donnerstag.", "¿Qué les parece si introducimos días fijos de oficina para todos? Por ejemplo, martes y jueves."],
        ["K", "Das klingt nach einem vernünftigen Kompromiss. Herr Weber, könnten Sie damit leben?", "Suena a un compromiso razonable. Señor Weber, ¿podría aceptarlo?"],
        ["W", "Ja, sofern die übrigen Tage wirklich flexibel bleiben.", "Sí, siempre que los demás días sigan siendo realmente flexibles."],
        ["K", "Gut. Dann halten wir fest: zwei feste Bürotage, an den übrigen Tagen entscheidet jeder selbst.", "Bien. Entonces dejamos constancia: dos días fijos de oficina, y los demás días cada uno decide."],
        ["C", "Sollte sich das nicht bewähren, sprechen wir in drei Monaten noch einmal darüber.", "Si no funciona bien, lo volvemos a hablar dentro de tres meses."],
        ["K", "Einverstanden. Ich schicke Ihnen das Protokoll heute Nachmittag.", "De acuerdo. Les envío el acta esta tarde."]
      ],
      q: [
        ["Was schlägt Herr Weber am Anfang vor?", ["zwei feste Bürotage", "drei Tage Homeoffice pro Woche", "gar kein Homeoffice"], 1],
        ["Was zeigt die Umfrage?", ["Die meisten wünschen sich mehr Flexibilität.", "Die meisten möchten nur im Büro arbeiten.", "Niemand hat an der Umfrage teilgenommen."], 0],
        ["Was wird am Ende beschlossen?", ["Alle arbeiten nur noch zu Hause.", "Die Entscheidung wird auf nächstes Jahr verschoben.", "Dienstag und Donnerstag sind feste Bürotage."], 2]
      ],
      tip: "En las reuniones alemanas se valora llegar a un compromiso explícito y dejarlo en el «Protokoll» (acta). Pedir la palabra con «Darf ich kurz einhaken?» es cortés; cortar al otro sin pedirla, no."
    },
    {
      id: "b2-debatte", level: "B2", title: "Debate: ¿centro sin carros?", de: "Podiumsdiskussion: Autofreie Innenstadt",
      who: { M: ["Moderatorin", "f"], A: ["Herr Albers (Einzelhändler)", "m"], D: ["Frau Demir (Stadtplanerin)", "f"] },
      lines: [
        ["M", "Herzlich willkommen zu unserer Diskussion. Die Stadt plant, die Innenstadt ab 2028 für Autos zu sperren. Frau Demir, warum halten Sie das für sinnvoll?", "Bienvenidos a nuestro debate. La ciudad planea cerrar el centro a los carros a partir de 2028. Señora Demir, ¿por qué le parece sensato?"],
        ["D", "Weil die Lebensqualität enorm steigen würde. Wo heute Autos parken, könnten Grünflächen, Spielplätze und Cafés entstehen.", "Porque la calidad de vida aumentaría muchísimo. Donde hoy se estacionan carros podrían surgir zonas verdes, parques infantiles y cafés."],
        ["M", "Herr Albers, Sie sind Einzelhändler. Wie sehen Sie das?", "Señor Albers, usted es comerciante. ¿Cómo lo ve?"],
        ["A", "Ehrlich gesagt mit großer Sorge. Viele meiner Kunden kommen aus dem Umland, und ohne Parkplätze bleiben sie einfach weg.", "Sinceramente, con mucha preocupación. Muchos de mis clientes vienen de los alrededores y, sin estacionamientos, simplemente dejarán de venir."],
        ["D", "Diese Befürchtung höre ich oft. Studien aus anderen Städten zeigen jedoch, dass die Umsätze nach der Umgestaltung eher gestiegen sind.", "Ese temor lo escucho a menudo. Sin embargo, estudios de otras ciudades muestran que las ventas más bien aumentaron después de la remodelación."],
        ["A", "Das kann man so nicht verallgemeinern. Eine Großstadt wie Kopenhagen ist nicht mit unserer Kleinstadt vergleichbar.", "Eso no se puede generalizar así. Una gran ciudad como Copenhague no es comparable con nuestra pequeña ciudad."],
        ["M", "Was müsste denn passieren, damit Sie dem Projekt zustimmen könnten?", "¿Qué tendría que pasar para que usted pudiera apoyar el proyecto?"],
        ["A", "Der Nahverkehr müsste deutlich ausgebaut werden, bevor man die Autos verbannt. Und Lieferverkehr muss weiterhin möglich sein.", "Habría que ampliar mucho el transporte público antes de prohibir los carros. Y los repartos tienen que seguir siendo posibles."],
        ["D", "Da gebe ich Ihnen recht. Deshalb sind Parkplätze am Stadtrand und ein Bus im Zehn-Minuten-Takt vorgesehen.", "En eso le doy la razón. Por eso están previstos estacionamientos en las afueras y un autobús cada diez minutos."],
        ["A", "Wenn das tatsächlich umgesetzt wird, wäre ich bereit, es zu versuchen.", "Si eso realmente se lleva a cabo, estaría dispuesto a intentarlo."],
        ["M", "Frau Demir, wann soll mit dem Ausbau begonnen werden?", "Señora Demir, ¿cuándo se empezaría con la ampliación?"],
        ["D", "Sofern der Stadtrat zustimmt, schon im nächsten Frühjahr.", "Si el concejo municipal lo aprueba, ya la próxima primavera."],
        ["M", "Vielen Dank Ihnen beiden für die sachliche Diskussion.", "Muchas gracias a los dos por este debate tan objetivo."]
      ],
      q: [
        ["Warum ist Herr Albers zunächst skeptisch?", ["Er befürchtet, dass Kunden aus dem Umland wegbleiben.", "Er wohnt selbst in der Innenstadt.", "Er hält Grünflächen für zu teuer."], 0],
        ["Welches Argument bringt Frau Demir?", ["Kopenhagen ist eine Kleinstadt.", "In anderen Städten sind die Umsätze eher gestiegen.", "Autos sind billiger als Busse."], 1],
        ["Unter welcher Bedingung würde Herr Albers es versuchen?", ["wenn die Stadt ihm Geld zahlt", "wenn es keine Busse mehr gibt", "wenn der Nahverkehr wirklich ausgebaut wird"], 2]
      ],
      tip: "En un debate formal se trata de «Sie» y se usa el apellido. Fíjate en cómo se concede antes de contradecir («Da gebe ich Ihnen recht. Deshalb…»): es justo lo que se evalúa en el Sprechen Teil 2."
    },
    {
      id: "b2-schimmel", level: "B2", title: "Moho en el apartamento", de: "Schimmel in der Wohnung",
      who: { Z: ["Frau Ziegler (Hausverwaltung)", "f"], C: ["Carlos Pérez (Mieter)", "m"] },
      lines: [
        ["Z", "Hausverwaltung Ziegler, guten Tag.", "Administración Ziegler, buenos días."],
        ["C", "Guten Tag, Frau Ziegler, hier spricht Carlos Pérez aus der Kantstraße 14. Ich hatte Ihnen vor drei Wochen wegen des Schimmels im Schlafzimmer geschrieben, aber bisher keine Antwort erhalten.", "Buenos días, señora Ziegler, habla Carlos Pérez, de la calle Kant 14. Le escribí hace tres semanas por el moho en el dormitorio, pero hasta ahora no he recibido respuesta."],
        ["Z", "Ach ja, Herr Pérez. Entschuldigen Sie bitte, wir sind im Moment etwas überlastet. Haben Sie denn regelmäßig gelüftet?", "Ah, sí, señor Pérez. Disculpe, en este momento estamos algo sobrecargados. ¿Ha ventilado usted con regularidad?"],
        ["C", "Selbstverständlich, dreimal am Tag Stoßlüften, wie es im Mietvertrag steht. Der Schimmel kommt eindeutig von der feuchten Außenwand.", "Por supuesto, tres veces al día con las ventanas abiertas de par en par, como dice el contrato. El moho viene claramente de la pared exterior húmeda."],
        ["Z", "Das müsste zunächst ein Gutachter prüfen. Erst danach lässt sich sagen, wer für den Schaden verantwortlich ist.", "Primero tendría que revisarlo un perito. Solo después se puede decir quién es responsable del daño."],
        ["C", "Das verstehe ich. Allerdings ist die Sache dringend, denn meine Tochter hat seit einigen Wochen Atembeschwerden.", "Lo entiendo. Sin embargo, el asunto es urgente, porque desde hace algunas semanas mi hija tiene problemas respiratorios."],
        ["Z", "Oh, das tut mir leid. In dem Fall schicke ich so schnell wie möglich jemanden vorbei.", "Ay, lo siento. En ese caso le mando a alguien lo antes posible."],
        ["C", "Ich wäre Ihnen dankbar, wenn das noch diese Woche geschehen könnte. Andernfalls sehe ich mich gezwungen, die Miete zu mindern.", "Le agradecería que fuera esta misma semana. De lo contrario, me veré obligado a reducir el alquiler."],
        ["Z", "Ich verstehe Ihren Ärger. Der Gutachter könnte am Donnerstag um zehn Uhr kommen. Passt Ihnen das?", "Entiendo su molestia. El perito podría ir el jueves a las diez. ¿Le conviene?"],
        ["C", "Ja, das passt. Wird die Sanierung dann auch zügig durchgeführt?", "Sí, me conviene. ¿Y luego la reparación se hará rápido?"],
        ["Z", "Sofern der Gutachter einen Baumangel feststellt, beauftragen wir sofort eine Fachfirma. Die Kosten trägt dann selbstverständlich der Eigentümer.", "Si el perito encuentra un defecto de construcción, contratamos de inmediato a una empresa especializada. Los costos, por supuesto, los asume entonces el propietario."],
        ["C", "Gut. Bitte bestätigen Sie mir den Termin noch kurz per E-Mail.", "Bien. Por favor, confírmeme la cita por correo electrónico."]
      ],
      q: [
        ["Seit wann wartet Carlos auf eine Antwort?", ["seit drei Tagen", "seit drei Wochen", "seit drei Monaten"], 1],
        ["Warum ist die Sache dringend?", ["Carlos zieht bald aus.", "Der Eigentümer verkauft die Wohnung.", "Seine Tochter hat Atembeschwerden."], 2],
        ["Was passiert am Donnerstag?", ["Ein Gutachter kommt vorbei.", "Die Sanierung beginnt.", "Carlos zahlt weniger Miete."], 0]
      ],
      tip: "«Stoßlüften» (abrir las ventanas de par en par cinco a diez minutos, varias veces al día) es casi una obligación en Alemania para evitar el moho. Si el defecto es del edificio, el inquilino puede reducir el alquiler («Mietminderung»), pero antes conviene avisar por escrito."
    },
    {
      id: "b2-hausarzt", level: "B2", title: "Agotada: en el médico de cabecera", de: "Erschöpft beim Hausarzt",
      who: { N: ["Dr. Neumann (Hausarzt)", "m"], V: ["Valeria Ruiz (Patientin)", "f"] },
      lines: [
        ["N", "Frau Ruiz, was führt Sie zu mir?", "Señora Ruiz, ¿qué la trae por aquí?"],
        ["V", "Ich fühle mich seit Wochen völlig erschöpft. Ich schlafe schlecht, kann mich kaum konzentrieren und habe ständig Kopfschmerzen.", "Desde hace semanas me siento totalmente agotada. Duermo mal, casi no me puedo concentrar y tengo dolor de cabeza todo el tiempo."],
        ["N", "Hat sich in letzter Zeit etwas in Ihrem Leben verändert?", "¿Ha cambiado algo en su vida últimamente?"],
        ["V", "Ja, auf der Arbeit ist eine Kollegin ausgefallen, und seitdem mache ich zwei Jobs gleichzeitig. Oft arbeite ich bis zehn Uhr abends.", "Sí, en el trabajo una colega está de baja y desde entonces hago dos trabajos a la vez. Muchas veces trabajo hasta las diez de la noche."],
        ["N", "Das klingt nach einer enormen Belastung. Ihre Blutwerte sind übrigens unauffällig, körperlich scheint also alles in Ordnung zu sein.", "Eso suena a una carga enorme. Por cierto, sus análisis de sangre salieron normales, así que físicamente todo parece estar bien."],
        ["V", "Heißt das, ich bilde mir das nur ein?", "¿Quiere decir que me lo estoy imaginando?"],
        ["N", "Keineswegs. Ihre Symptome sind typisch für eine Überlastung. Wenn Sie so weitermachen, riskieren Sie ein Burnout.", "De ninguna manera. Sus síntomas son típicos de una sobrecarga. Si sigue así, se arriesga a un burnout."],
        ["V", "Und was soll ich jetzt tun? Ich kann meine Kollegen doch nicht im Stich lassen.", "¿Y qué hago ahora? No puedo dejar solos a mis compañeros."],
        ["N", "Ich schreibe Sie zunächst für zwei Wochen krank. Außerdem empfehle ich Ihnen, mit Ihrer Vorgesetzten über die Verteilung der Arbeit zu sprechen.", "Por lo pronto le doy la baja médica por dos semanas. Además, le recomiendo hablar con su jefa sobre el reparto del trabajo."],
        ["V", "Gibt es auch etwas, was ich selbst tun kann?", "¿Hay también algo que pueda hacer yo misma?"],
        ["N", "Regelmäßige Bewegung, feste Schlafzeiten und bewusste Pausen ohne Handy. Sollten die Beschwerden nicht besser werden, überweise ich Sie an eine Psychotherapeutin.", "Ejercicio regular, horarios fijos para dormir y pausas conscientes sin celular. Si las molestias no mejoran, la remito a una psicoterapeuta."],
        ["V", "Vielen Dank, Herr Doktor. Es tut gut, dass Sie das ernst nehmen.", "Muchas gracias, doctor. Me hace bien que se lo tome en serio."]
      ],
      q: [
        ["Warum arbeitet Valeria so viel?", ["Eine Kollegin ist ausgefallen.", "Sie hat eine zweite Stelle angenommen.", "Sie möchte befördert werden."], 0],
        ["Was zeigen die Blutwerte?", ["einen Vitaminmangel", "nichts Auffälliges", "eine Infektion"], 1],
        ["Was macht der Arzt, wenn es nicht besser wird?", ["Er verschreibt Schlaftabletten.", "Er schreibt sie für sechs Wochen krank.", "Er überweist sie an eine Psychotherapeutin."], 2]
      ],
      tip: "En Alemania el «Hausarzt» es la primera puerta: te da la «Krankschreibung» (baja médica) y la «Überweisung» (remisión) al especialista. Durante la baja, el empleador sigue pagando el sueldo hasta seis semanas."
    },
    {
      id: "b2-radiointerview", level: "B2", title: "Entrevista de radio: llegar a Alemania", de: "Radiointerview: Angekommen in Essen",
      who: { M: ["Moderator", "m"], R: ["Rosa Méndez (Pflegefachkraft)", "f"] },
      lines: [
        ["M", "Frau Méndez, Sie sind vor fünf Jahren aus der Dominikanischen Republik nach Essen gekommen. Wie kam es dazu?", "Señora Méndez, usted llegó a Essen hace cinco años desde la República Dominicana. ¿Cómo se dio eso?"],
        ["R", "Ich habe in Santo Domingo als Krankenschwester gearbeitet. Dann habe ich von einem Programm erfahren, das Pflegekräfte für deutsche Krankenhäuser anwirbt.", "Yo trabajaba como enfermera en Santo Domingo. Entonces me enteré de un programa que recluta personal de enfermería para hospitales alemanes."],
        ["M", "War die Entscheidung schwer?", "¿Fue difícil la decisión?"],
        ["R", "Sehr schwer. Meine Familie war zuerst dagegen. Meine Mutter meinte, ich würde in der Kälte nie glücklich werden.", "Muy difícil. Al principio mi familia estaba en contra. Mi mamá decía que yo nunca sería feliz con ese frío."],
        ["M", "Und, hatte sie recht?", "¿Y tenía razón?"],
        ["R", "Im ersten Winter fast. Ich habe mich kaum zurechtgefunden, und die Anerkennung meines Abschlusses hat über ein Jahr gedauert.", "El primer invierno, casi. Me costó mucho adaptarme, y la homologación de mi título tardó más de un año."],
        ["M", "Was war in dieser Zeit am schwierigsten?", "¿Qué fue lo más difícil en ese tiempo?"],
        ["R", "Ohne Zweifel die Sprache. Im Kurs habe ich Hochdeutsch gelernt, aber auf der Station sprechen viele Ruhrdeutsch. Am Anfang habe ich kaum etwas verstanden.", "Sin duda, el idioma. En el curso aprendí alemán estándar, pero en la sala muchos hablan el alemán del Ruhr. Al principio casi no entendía nada."],
        ["M", "Viele Zugewanderte berichten auch von Vorurteilen. Haben Sie so etwas erlebt?", "Muchos inmigrantes también cuentan que sufren prejuicios. ¿Vivió usted algo así?"],
        ["R", "Leider ja. Manche Patienten haben gefragt, ob ich überhaupt richtig ausgebildet sei. Inzwischen begegne ich solchen Fragen gelassen.", "Lamentablemente sí. Algunos pacientes preguntaban si yo de verdad tenía la formación adecuada. Hoy respondo a esas preguntas con calma."],
        ["M", "Würden Sie den Schritt heute wieder machen?", "¿Volvería a dar el paso hoy?"],
        ["R", "Auf jeden Fall. Ich habe hier eine zweite Heimat gefunden, ohne meine erste zu verlieren. Und seit letztem Jahr habe ich sogar zwei Pässe.", "Sin duda. Aquí encontré un segundo hogar sin perder el primero. Y desde el año pasado hasta tengo dos pasaportes."]
      ],
      q: [
        ["Was war Frau Méndez in der Dominikanischen Republik von Beruf?", ["Ärztin", "Krankenschwester", "Lehrerin"], 1],
        ["Was war für sie am Anfang am schwierigsten?", ["die Sprache", "das Essen", "die Arbeitszeiten"], 0],
        ["Was hat sich letztes Jahr geändert?", ["Sie hat eine zweite Staatsangehörigkeit bekommen.", "Sie ist nach Santo Domingo zurückgekehrt.", "Ihre Mutter ist nach Essen gezogen."], 0]
      ],
      tip: "Desde 2024 Alemania permite la doble nacionalidad. El «Ruhrdeutsch» es la forma coloquial de hablar en la región de Essen: «Wat is dat denn?» en lugar de «Was ist das denn?». Fíjate también en el estilo indirecto: «ob ich richtig ausgebildet sei»."
    },
    {
      id: "b2-anerkennung", level: "B2", title: "Asesoría: homologar el título", de: "Beratung zur Anerkennung",
      who: { L: ["Frau Lindner (Beraterin)", "f"], C: ["Carlos Pérez (Ingenieur)", "m"] },
      lines: [
        ["L", "Guten Tag, Herr Pérez. Sie möchten Ihren Abschluss in Deutschland anerkennen lassen?", "Buenos días, señor Pérez. ¿Usted quiere que le reconozcan su título en Alemania?"],
        ["C", "Genau. Ich habe in Santo Domingo Bauingenieurwesen studiert und möchte hier als Ingenieur arbeiten.", "Exacto. Estudié ingeniería civil en Santo Domingo y quiero trabajar aquí como ingeniero."],
        ["L", "Für Ingenieure ist das Verfahren meist unkompliziert. Allerdings dürfen Sie die Berufsbezeichnung Ingenieur erst führen, wenn die Ingenieurkammer es genehmigt hat.", "Para los ingenieros el trámite suele ser sencillo. Sin embargo, solo podrá usar el título profesional de ingeniero cuando el colegio de ingenieros lo autorice."],
        ["C", "Welche Unterlagen muss ich einreichen?", "¿Qué documentos tengo que presentar?"],
        ["L", "Ihr Diplom, die Übersicht über Ihre Fächer und Noten und Nachweise über Ihre Berufserfahrung. Alle Dokumente sind in beglaubigter Übersetzung vorzulegen.", "Su diploma, el listado de materias con las notas y comprobantes de su experiencia laboral. Todos los documentos deben presentarse con traducción certificada."],
        ["C", "Muss ich die Übersetzungen selbst bezahlen?", "¿Tengo que pagar yo las traducciones?"],
        ["L", "Ja, leider. Unter Umständen können Sie aber einen Zuschuss beantragen, sofern Sie bestimmte Voraussetzungen erfüllen.", "Sí, lamentablemente. Pero en algunos casos puede solicitar una ayuda económica, siempre que cumpla ciertos requisitos."],
        ["C", "Wie lange dauert das Verfahren normalerweise?", "¿Cuánto tarda normalmente el trámite?"],
        ["L", "Sobald alle Unterlagen vollständig vorliegen, ist innerhalb von drei Monaten mit einer Entscheidung zu rechnen.", "En cuanto todos los documentos estén completos, se puede contar con una decisión en un plazo de tres meses."],
        ["C", "Und was passiert, wenn mein Studium nur teilweise anerkannt wird?", "¿Y qué pasa si mis estudios solo se reconocen en parte?"],
        ["L", "Dann erhalten Sie einen Bescheid, in dem die Unterschiede genau aufgeführt sind. Diese lassen sich oft durch eine Weiterbildung ausgleichen.", "Entonces recibe una resolución en la que se detallan las diferencias. A menudo se pueden compensar con un curso de formación."],
        ["C", "Vielen Dank, das hat mir sehr geholfen. Ich werde die Unterlagen so bald wie möglich einreichen.", "Muchas gracias, me ayudó mucho. Presentaré los documentos lo antes posible."]
      ],
      q: [
        ["Was hat Carlos studiert?", ["Architektur", "Bauingenieurwesen", "Informatik"], 1],
        ["Wie müssen die Dokumente vorgelegt werden?", ["nur im spanischen Original", "als einfache Kopie ohne Übersetzung", "in beglaubigter Übersetzung"], 2],
        ["Wie lange dauert das Verfahren ungefähr, wenn alle Unterlagen vorliegen?", ["drei Monate", "ein Jahr", "drei Wochen"], 0]
      ],
      tip: "El portal oficial «Anerkennung in Deutschland» indica qué oficina es competente para cada profesión. Fíjate en las estructuras formales del diálogo: «sind … vorzulegen», «ist mit einer Entscheidung zu rechnen», «lassen sich ausgleichen»."
    }
  );

  /* ======================= Lecturas B2 ======================= */
  DE.texts.push(
    {
      id: "b2-viertagewoche", level: "B2", title: "¿Cuatro días de trabajo?", de: "Die Vier-Tage-Woche: Modell der Zukunft?",
      paras: [
        ["Montag bis Donnerstag arbeiten, am Freitag frei haben und trotzdem das volle Gehalt bekommen: Was nach einem Traum klingt, wurde 2024 in Deutschland ein halbes Jahr lang in einem großen Pilotprojekt getestet. Rund 45 Unternehmen aus ganz unterschiedlichen Branchen nahmen daran teil, von der Werbeagentur über die Steuerberatung bis zum Handwerksbetrieb. Wissenschaftlich begleitet wurde der Versuch von der Universität Münster; Vorbild war ein ähnlicher Test in Großbritannien. Die Idee dahinter ist einfach: Wer ausgeruht ist, arbeitet konzentrierter und schafft in vier Tagen genauso viel wie vorher in fünf.",
         "Trabajar de lunes a jueves, tener libre el viernes y aun así cobrar el sueldo completo: lo que suena a sueño se puso a prueba en Alemania en 2024, durante medio año, en un gran proyecto piloto. Participaron unas 45 empresas de sectores muy distintos, desde agencias de publicidad y asesorías fiscales hasta talleres artesanales. La Universidad de Münster acompañó científicamente el experimento, inspirado en una prueba similar en el Reino Unido. La idea es sencilla: quien está descansado trabaja más concentrado y logra en cuatro días lo mismo que antes en cinco."],
        ["Die Ergebnisse fielen überwiegend positiv aus. Die Beschäftigten berichteten von weniger Stress, besserem Schlaf und mehr Zeit für Familie und Hobbys. Gleichzeitig blieb die Produktivität in den meisten Betrieben stabil, und einige meldeten sogar weniger Krankheitstage als im Vorjahr. Möglich wurde das vor allem durch eine bessere Organisation: Besprechungen wurden gekürzt oder ganz gestrichen, Aufgaben klarer verteilt und Ablenkungen durch ständige E-Mails reduziert. Viele Beschäftigte gaben außerdem an, ihre Arbeit bewusster zu planen, weil die Zeit knapper geworden sei. Die Mehrheit der teilnehmenden Firmen will das Modell deshalb auch nach dem Test beibehalten.",
         "Los resultados fueron mayormente positivos. Los empleados contaron que tenían menos estrés, dormían mejor y les quedaba más tiempo para la familia y sus pasatiempos. Al mismo tiempo, la productividad se mantuvo estable en la mayoría de las empresas, y algunas incluso registraron menos días de incapacidad que el año anterior. Esto fue posible sobre todo gracias a una mejor organización: las reuniones se acortaron o se eliminaron, las tareas se repartieron con más claridad y se redujeron las distracciones por los correos constantes. Muchos empleados dijeron además que planificaban su trabajo de forma más consciente, porque tenían menos tiempo. Por eso, la mayoría de las empresas participantes quiere mantener el modelo también después de la prueba."],
        ["Kritiker halten die Ergebnisse jedoch für wenig aussagekräftig. Sie weisen darauf hin, dass sich vor allem Firmen beteiligt hätten, die ohnehin von der Idee überzeugt gewesen seien. Zudem hätten die Teilnehmenden gewusst, dass sie beobachtet würden, und sich deshalb besonders angestrengt. Außerdem lasse sich das Modell nicht auf alle Branchen übertragen: In einem Krankenhaus, im Einzelhandel oder in der Pflege könne man die Arbeit nicht einfach verdichten, ohne dass die Qualität darunter leide. Angesichts des Fachkräftemangels, so die Arbeitgeberverbände, brauche Deutschland eher mehr als weniger Arbeitsstunden. Und schließlich sei ein halbes Jahr viel zu kurz, um langfristige Effekte zu messen.",
         "Sin embargo, los críticos consideran que los resultados dicen poco. Señalan que participaron sobre todo empresas que ya estaban convencidas de la idea. Además, los participantes sabían que los estaban observando y por eso se esforzaron especialmente. Por otro lado, el modelo no se puede trasladar a todos los sectores: en un hospital, en el comercio minorista o en la enfermería no se puede simplemente comprimir el trabajo sin que la calidad se resienta. Ante la escasez de personal calificado, según las asociaciones de empleadores, Alemania necesita más horas de trabajo, no menos. Y, por último, medio año es demasiado poco para medir efectos a largo plazo."],
        ["Befürworter halten dagegen, dass gerade der Fachkräftemangel für die Vier-Tage-Woche spricht. Wer attraktive Arbeitsbedingungen bietet, findet leichter neues Personal und hält seine Mitarbeitenden länger. Für Jana Krause, Inhaberin einer Tischlerei in Bielefeld, war der Versuch jedenfalls ein Erfolg. „Am Anfang hatte ich große Zweifel“, erzählt sie. „Aber mein Team ist motivierter, und zum ersten Mal seit Jahren bekomme ich mehr Bewerbungen, als ich Stellen habe.“ Ob sich das Modell langfristig durchsetzt, ist noch offen. Klar ist aber: Die Frage, wie viel wir arbeiten wollen, wird die Arbeitswelt der kommenden Jahre prägen.",
         "Los defensores replican que precisamente la escasez de personal habla a favor de la semana de cuatro días. Quien ofrece buenas condiciones laborales encuentra personal nuevo con más facilidad y conserva más tiempo a sus empleados. Para Jana Krause, dueña de una carpintería en Bielefeld, la prueba fue en todo caso un éxito. «Al principio tenía muchas dudas», cuenta. «Pero mi equipo está más motivado y, por primera vez en años, recibo más solicitudes que puestos tengo.» Todavía no se sabe si el modelo se impondrá a largo plazo. Pero algo está claro: la pregunta de cuánto queremos trabajar marcará el mundo laboral de los próximos años."]
      ],
      q: [
        ["Was wurde im Pilotprojekt getestet?", ["vier Arbeitstage bei vollem Gehalt", "vier Arbeitstage bei weniger Gehalt", "fünf Arbeitstage mit kürzeren Pausen"], 0],
        ["Wodurch blieb die Produktivität stabil?", ["durch mehr Überstunden", "durch eine bessere Organisation der Arbeit", "durch neue Maschinen"], 1],
        ["Was meinen die Arbeitgeberverbände?", ["Die Beschäftigten hätten zu wenig Freizeit.", "Das Projekt sei zu kurz gewesen.", "Deutschland brauche wegen des Fachkräftemangels eher mehr Arbeitsstunden."], 2],
        ["Warum war der Test für Frau Krause ein Erfolg?", ["Sie hat weniger Steuern bezahlt.", "Sie bekommt mehr Bewerbungen als früher.", "Sie arbeitet jetzt nur noch drei Tage."], 1]
      ]
    },
    {
      id: "b2-fastfashion", level: "B2", title: "El precio real de la moda rápida", de: "Die wahren Kosten der Fast Fashion",
      paras: [
        ["Ein T-Shirt für fünf Euro, eine Jeans für fünfzehn: Kleidung war noch nie so billig wie heute. Im Durchschnitt kauft jeder Mensch in Deutschland rund sechzig neue Kleidungsstücke pro Jahr und trägt viele davon nur wenige Male. Manche Teile landen sogar mit Preisschild im Müll. Möglich macht das ein Geschäftsmodell, das als Fast Fashion bekannt ist: Große Modeketten bringen nicht mehr nur zwei Kollektionen pro Jahr auf den Markt, sondern bis zu zwanzig. Online-Händler gehen noch weiter und stellen täglich Tausende neue Artikel ins Netz. Ständig neue Ware soll die Kundschaft dazu bringen, immer wieder in die Läden zu kommen.",
         "Una camiseta por cinco euros, unos jeans por quince: la ropa nunca había sido tan barata como hoy. En promedio, cada persona en Alemania compra unas sesenta prendas nuevas al año y muchas las usa solo unas pocas veces. Algunas incluso terminan en la basura con la etiqueta puesta. Esto es posible gracias a un modelo de negocio conocido como «moda rápida»: las grandes cadenas ya no lanzan solo dos colecciones al año, sino hasta veinte. Las tiendas en línea van aún más lejos y publican miles de artículos nuevos cada día. La mercancía siempre nueva busca que la clientela vuelva una y otra vez a las tiendas."],
        ["Den Preis dafür zahlen andere. Ein großer Teil unserer Kleidung wird in Ländern wie Bangladesch, Vietnam oder Äthiopien hergestellt, wo Näherinnen oft für einen Lohn arbeiten, der kaum zum Leben reicht. Nach dem Einsturz der Textilfabrik Rana Plaza im Jahr 2013, bei dem mehr als 1100 Menschen ums Leben kamen, versprachen viele Unternehmen bessere Arbeitsbedingungen. Seitdem hat sich zwar einiges verbessert, doch unbezahlte Überstunden, mangelnder Arbeitsschutz und Druck auf Gewerkschaften sind weiterhin verbreitet. Hinzu kommt, dass die Lieferketten oft so kompliziert sind, dass selbst die Modekonzerne nicht genau wissen, in welchen Fabriken ihre Ware genäht wird.",
         "El precio lo pagan otros. Gran parte de nuestra ropa se fabrica en países como Bangladés, Vietnam o Etiopía, donde las costureras a menudo trabajan por un salario que apenas alcanza para vivir. Después del derrumbe de la fábrica textil Rana Plaza en 2013, en el que murieron más de 1100 personas, muchas empresas prometieron mejores condiciones laborales. Desde entonces algo ha mejorado, pero las horas extra no pagadas, la falta de seguridad laboral y la presión sobre los sindicatos siguen siendo frecuentes. A esto se suma que las cadenas de suministro suelen ser tan complicadas que ni siquiera las grandes marcas saben con exactitud en qué fábricas se cose su mercancía."],
        ["Auch die Umwelt leidet. Für die Herstellung einer einzigen Jeans werden je nach Berechnung mehrere Tausend Liter Wasser verbraucht, vor allem für den Anbau der Baumwolle. Hinzu kommen Chemikalien, die beim Färben in Flüsse gelangen, und Mikroplastik, das sich beim Waschen synthetischer Stoffe löst. Wird die Kleidung schließlich aussortiert, landet sie oft auf riesigen Müllhalden in Ghana oder Chile, wo sie ganze Landschaften verschmutzt. Die Textilindustrie gilt deshalb als einer der großen Verursacher von Treibhausgasen und Abfall weltweit.",
         "También sufre el medio ambiente. Para fabricar un solo par de jeans se gastan, según el cálculo, varios miles de litros de agua, sobre todo para el cultivo del algodón. A eso se suman los químicos que llegan a los ríos durante el teñido y los microplásticos que se desprenden al lavar telas sintéticas. Cuando por fin se desecha la ropa, a menudo termina en enormes basureros en Ghana o Chile, donde contamina paisajes enteros. Por eso la industria textil se considera una de las grandes causantes de gases de efecto invernadero y de residuos en el mundo."],
        ["Was können Verbraucherinnen und Verbraucher tun? Fachleute raten vor allem zu einem: weniger kaufen. Wer Kleidung länger trägt, repariert oder gebraucht kauft, verkleinert seinen ökologischen Fußabdruck deutlich. Secondhandläden, Tauschpartys und Online-Plattformen für gebrauchte Mode erleben bereits einen Boom, besonders bei jungen Leuten. Gütesiegel können bei der Orientierung helfen, doch nicht jedes Siegel ist gleich streng. Auch die Politik ist gefragt: Die EU will Hersteller künftig stärker für die Entsorgung ihrer Produkte verantwortlich machen. Am Ende gilt aber eine einfache Regel: Das nachhaltigste Kleidungsstück ist das, das bereits im Schrank hängt.",
         "¿Qué pueden hacer los consumidores? Los expertos aconsejan sobre todo una cosa: comprar menos. Quien usa la ropa más tiempo, la repara o la compra de segunda mano reduce mucho su huella ecológica. Las tiendas de segunda mano, las fiestas de intercambio y las plataformas en línea de ropa usada ya viven un auge, sobre todo entre los jóvenes. Los sellos de calidad pueden servir de orientación, pero no todos son igual de exigentes. También la política tiene tarea: la UE quiere que en el futuro los fabricantes se hagan más responsables de la eliminación de sus productos. Pero al final vale una regla sencilla: la prenda más sostenible es la que ya está colgada en el clóset."]
      ],
      q: [
        ["Wie viele Kollektionen bringen manche Modeketten pro Jahr heraus?", ["zwei", "bis zu zwanzig", "sechzig"], 1],
        ["Was geschah 2013 in Bangladesch?", ["Eine Textilfabrik stürzte ein.", "Die Löhne wurden verdoppelt.", "Alle Gewerkschaften wurden verboten."], 0],
        ["Wofür wird bei der Herstellung einer Jeans vor allem Wasser gebraucht?", ["für das Waschen im Laden", "für den Transport", "für den Anbau der Baumwolle"], 2],
        ["Wozu raten Fachleute vor allem?", ["nur Kleidung mit Gütesiegel zu kaufen", "weniger Kleidung zu kaufen", "nur synthetische Stoffe zu tragen"], 1]
      ]
    },
    {
      id: "b2-einsamkeit", level: "B2", title: "La soledad, una epidemia silenciosa", de: "Einsamkeit: die stille Epidemie",
      paras: [
        ["Einsamkeit galt lange als Problem älterer Menschen, die nach dem Tod des Partners allein in ihrer Wohnung sitzen. Neuere Umfragen zeichnen jedoch ein anderes Bild: Besonders häufig fühlen sich junge Erwachsene zwischen 18 und 29 Jahren einsam. Viele von ihnen sind ständig online und haben Hunderte Kontakte in sozialen Netzwerken, aber trotzdem niemanden, den sie nachts um drei anrufen könnten, wenn es ihnen schlecht geht. Auch Studierende, die für das Studium in eine neue Stadt gezogen sind, berichten häufig davon. Fachleute sprechen deshalb inzwischen von einer stillen Epidemie.",
         "Durante mucho tiempo la soledad se consideró un problema de personas mayores que, tras la muerte de su pareja, se quedan solas en su apartamento. Sin embargo, encuestas más recientes muestran otra realidad: los adultos jóvenes de entre 18 y 29 años son quienes se sienten solos con más frecuencia. Muchos están conectados todo el tiempo y tienen cientos de contactos en redes sociales, pero aun así no tienen a nadie a quien llamar a las tres de la mañana cuando se sienten mal. También lo cuentan a menudo los estudiantes que se mudaron a otra ciudad para estudiar. Por eso los especialistas hablan ya de una epidemia silenciosa."],
        ["Wichtig ist dabei die Unterscheidung zwischen Alleinsein und Einsamkeit. Wer allein lebt, muss nicht einsam sein, und wer von vielen Menschen umgeben ist, kann sich trotzdem isoliert fühlen. Einsamkeit beschreibt das schmerzhafte Gefühl, dass die eigenen Beziehungen nicht so eng oder so zahlreich sind, wie man es sich wünscht. Wie viele Kontakte jemand braucht, ist dabei sehr individuell: Manchen genügen zwei enge Freunde, andere brauchen eine große Clique. Kurzfristig ist das Gefühl sogar sinnvoll. Ähnlich wie Hunger oder Durst ist es ein Warnsignal, das uns dazu drängt, den Kontakt zu anderen Menschen zu suchen.",
         "Aquí es importante distinguir entre estar solo y sentirse solo. Quien vive solo no tiene por qué sentirse solo, y quien está rodeado de mucha gente puede sentirse aislado de todos modos. La soledad describe el sentimiento doloroso de que las propias relaciones no son tan cercanas o tan numerosas como uno quisiera. Cuántos contactos necesita cada persona es algo muy individual: a algunos les bastan dos amigos íntimos, otros necesitan un grupo grande. A corto plazo, este sentimiento incluso tiene sentido: igual que el hambre o la sed, es una señal de alarma que nos empuja a buscar el contacto con otras personas."],
        ["Problematisch wird es, wenn die Einsamkeit chronisch wird. Studien zeigen, dass dauerhaft einsame Menschen ein höheres Risiko für Herz-Kreislauf-Erkrankungen, Depressionen und Demenz haben. Manche Forschende vergleichen die gesundheitlichen Folgen sogar mit denen des Rauchens. Besonders gefährdet sind Menschen in Umbruchphasen, etwa nach einem Umzug in eine fremde Stadt, nach einer Trennung oder beim Übergang in die Rente. Hinzu kommt ein Teufelskreis: Wer sich lange einsam fühlt, wird oft misstrauischer und deutet harmlose Situationen als Ablehnung. Er zieht sich weiter zurück und findet dadurch noch schwerer Anschluss.",
         "El problema surge cuando la soledad se vuelve crónica. Los estudios muestran que las personas que se sienten solas de forma permanente tienen un mayor riesgo de enfermedades cardiovasculares, depresión y demencia. Algunos investigadores incluso comparan sus efectos sobre la salud con los del tabaco. Corren especial riesgo las personas en etapas de cambio, por ejemplo después de mudarse a una ciudad desconocida, tras una separación o al jubilarse. A esto se suma un círculo vicioso: quien se siente solo durante mucho tiempo suele volverse más desconfiado e interpreta situaciones inofensivas como rechazo. Se aísla aún más y por eso le cuesta todavía más integrarse."],
        ["Inzwischen hat auch die Politik das Thema entdeckt. Großbritannien ernannte 2018 als erstes Land eine Ministerin für Einsamkeit, und auch die Bundesregierung hat eine Strategie gegen Einsamkeit beschlossen. In vielen Städten entstehen Projekte wie Nachbarschaftscafés, Telefonpatenschaften oder Mehrgenerationenhäuser. Bei den Telefonpatenschaften rufen Ehrenamtliche zum Beispiel einmal pro Woche einen älteren Menschen an, der sonst kaum Besuch bekommt. Fachleute betonen jedoch, dass jeder Einzelne etwas beitragen kann: ein kurzes Gespräch mit der Nachbarin, ein Anruf bei einem alten Freund oder die Einladung an den neuen Kollegen, mit in die Kantine zu kommen. Solche kleinen Gesten, so die Forschung, haben oft eine größere Wirkung, als man denkt.",
         "Mientras tanto, también la política ha descubierto el tema. En 2018 el Reino Unido fue el primer país en nombrar a una ministra para la soledad, y el gobierno alemán también aprobó una estrategia contra la soledad. En muchas ciudades surgen proyectos como cafés de barrio, padrinazgos telefónicos o casas multigeneracionales. En los padrinazgos telefónicos, por ejemplo, voluntarios llaman una vez por semana a una persona mayor que casi no recibe visitas. Sin embargo, los especialistas subrayan que cada persona puede aportar algo: una breve conversación con la vecina, una llamada a un viejo amigo o invitar al colega nuevo a ir juntos al comedor. Según los estudios, estos pequeños gestos suelen tener más efecto de lo que uno cree."]
      ],
      q: [
        ["Welche Gruppe fühlt sich laut neueren Umfragen besonders häufig einsam?", ["ältere Menschen über 80", "Familien mit kleinen Kindern", "junge Erwachsene"], 2],
        ["Was ist der Unterschied zwischen Alleinsein und Einsamkeit?", ["Einsamkeit ist ein Gefühl, Alleinsein ist eine Lebenssituation.", "Es gibt keinen Unterschied.", "Alleinsein ist immer gesundheitsschädlich."], 0],
        ["Was meint der Text mit dem «Teufelskreis»?", ["Einsame Menschen rauchen mehr.", "Einsame Menschen telefonieren zu viel.", "Einsame Menschen ziehen sich zurück und finden dadurch noch schwerer Kontakt."], 2],
        ["Was hat Großbritannien 2018 gemacht?", ["ein Gesetz gegen soziale Netzwerke beschlossen", "eine Ministerin für Einsamkeit ernannt", "Mehrgenerationenhäuser gebaut"], 1]
      ]
    },
    {
      id: "b2-ki-schule", level: "B2", title: "La inteligencia artificial en el aula", de: "KI im Klassenzimmer: Verbot oder Chance?",
      paras: [
        ["Ich unterrichte seit fünfzehn Jahren Deutsch und Geschichte an einer Gesamtschule in Dortmund. Als ich vor zwei Jahren zum ersten Mal einen Aufsatz korrigierte, der eindeutig von einer künstlichen Intelligenz geschrieben worden war, war ich empört. Der Text war fehlerfrei, sauber gegliedert und völlig nichtssagend. Mein erster Impuls war, KI-Programme in meinem Unterricht einfach zu verbieten. Heute sehe ich das anders, und in diesem Beitrag möchte ich erklären, warum.",
         "Hace quince años que doy clases de alemán e historia en una escuela integrada de Dortmund. Cuando hace dos años corregí por primera vez una composición que claramente había escrito una inteligencia artificial, me indigné. El texto no tenía errores, estaba bien estructurado y no decía absolutamente nada. Mi primer impulso fue simplemente prohibir los programas de IA en mis clases. Hoy lo veo de otra manera, y en esta entrada quiero explicar por qué."],
        ["Erstens lässt sich ein Verbot kaum kontrollieren. Die Programme sind auf jedem Handy verfügbar, und Software, die KI-Texte angeblich erkennt, liefert keine zuverlässigen Ergebnisse. An unserer Schule wurden sogar schon Schülerinnen zu Unrecht beschuldigt. Zweitens werden meine Schülerinnen und Schüler in ihrem späteren Berufsleben ganz selbstverständlich mit solchen Werkzeugen arbeiten. Wenn die Schule so tut, als gäbe es sie nicht, bereitet sie die Jugendlichen schlecht auf die Zukunft vor. Drittens sind die Programme, richtig eingesetzt, ein hervorragendes Werkzeug: Sie erklären geduldig Grammatik, geben Rückmeldungen zu Texten und helfen dabei, Ideen zu ordnen.",
         "Primero, una prohibición casi no se puede controlar. Los programas están disponibles en cualquier celular, y el software que supuestamente detecta textos de IA no da resultados confiables. En nuestra escuela incluso ya se acusó injustamente a algunas alumnas. Segundo, en su vida profesional mis alumnos trabajarán con estas herramientas con total naturalidad. Si la escuela hace como si no existieran, prepara mal a los jóvenes para el futuro. Tercero, bien usados, estos programas son una herramienta excelente: explican la gramática con paciencia, comentan los textos y ayudan a ordenar las ideas."],
        ["Deshalb habe ich meinen Unterricht umgestellt. Hausaufsätze gibt es bei mir kaum noch; geschrieben wird vor allem in der Schule, oft ganz klassisch mit Stift und Papier. Dafür setzen wir die KI gezielt ein: Die Klasse lässt sich zum Beispiel einen Text zu einem Thema erstellen und sucht anschließend nach sachlichen Fehlern, einseitigen Argumenten und erfundenen Quellen. Neulich behauptete ein Chatbot, Goethe habe den «Faust» in Paris geschrieben, und nannte dafür sogar ein Buch, das es gar nicht gibt. Dabei lernen die Jugendlichen mehr über kritisches Denken als in so mancher Grammatikstunde.",
         "Por eso cambié mi forma de enseñar. Ya casi no dejo composiciones para la casa; se escribe sobre todo en la escuela, muchas veces a la antigua, con lápiz y papel. A cambio, usamos la IA de forma dirigida: por ejemplo, la clase le pide un texto sobre un tema y luego busca errores de contenido, argumentos parciales y fuentes inventadas. Hace poco, un chatbot afirmó que Goethe había escrito el «Fausto» en París, e incluso citó como fuente un libro que no existe. Con esto los jóvenes aprenden más sobre pensamiento crítico que en más de una clase de gramática."],
        ["Natürlich gibt es auch Probleme. Nicht alle Familien können sich die teuren Bezahlversionen leisten, sodass neue Ungleichheiten entstehen. Außerdem ist oft unklar, was mit den Daten der Jugendlichen geschieht. Hier sind die Kultusministerien gefragt: Sie müssen verbindliche Regeln schaffen und den Schulen datenschutzkonforme Programme kostenlos zur Verfügung stellen. Bislang bleibt diese Aufgabe allzu oft an einzelnen engagierten Lehrkräften hängen.",
         "Claro que también hay problemas. No todas las familias pueden pagar las costosas versiones de pago, de modo que surgen nuevas desigualdades. Además, a menudo no está claro qué pasa con los datos de los jóvenes. Aquí les toca actuar a los ministerios de educación: tienen que crear reglas obligatorias y poner gratuitamente a disposición de las escuelas programas que respeten la protección de datos. Hasta ahora, esa tarea recae con demasiada frecuencia en algunos docentes comprometidos."],
        ["Mein Fazit nach zwei Jahren: Die KI wird guten Unterricht nicht ersetzen, aber sie verändert ihn grundlegend. Die wichtigste Aufgabe der Schule besteht nicht mehr nur darin, Wissen zu vermitteln. Sie muss den Jugendlichen beibringen, Informationen zu prüfen, Quellen zu hinterfragen und eigene Gedanken zu formulieren. Diese Arbeit kann ihnen keine Maschine abnehmen. Und wer weiß: Vielleicht lernen wir Lehrkräfte dabei auch selbst noch etwas dazu.",
         "Mi conclusión después de dos años: la IA no va a reemplazar una buena clase, pero la transforma de raíz. La tarea más importante de la escuela ya no es solo transmitir conocimientos. Tiene que enseñar a los jóvenes a verificar información, cuestionar las fuentes y formular sus propias ideas. Ese trabajo ninguna máquina lo puede hacer por ellos. Y quién sabe: tal vez los docentes también aprendamos algo en el camino."]
      ],
      q: [
        ["Wie reagierte die Autorin auf den ersten KI-Aufsatz?", ["Sie war begeistert.", "Sie war empört.", "Sie hat ihn nicht bemerkt."], 1],
        ["Warum hält sie ein Verbot für wenig sinnvoll?", ["Es lässt sich kaum kontrollieren.", "Die Eltern sind dagegen.", "Die Programme sind zu teuer für die Schule."], 0],
        ["Wie nutzt sie die KI im Unterricht?", ["Die KI korrigiert alle Klassenarbeiten.", "Die Schüler schreiben alle Hausaufgaben mit KI.", "Die Klasse sucht Fehler in Texten, die die KI erstellt hat."], 2],
        ["Welches Problem nennt die Autorin?", ["Es können neue Ungleichheiten entstehen.", "Die Lehrkräfte verlieren ihre Arbeit.", "Die Schüler schreiben nicht mehr mit der Hand."], 0]
      ]
    },
    {
      id: "b2-stolpersteine", level: "B2", title: "Piedras contra el olvido", de: "Stolpersteine: Ein Denkmal gegen das Vergessen",
      paras: [
        ["Wer durch deutsche Städte spaziert, stößt früher oder später auf sie: kleine, quadratische Messingplatten im Gehweg, kaum größer als ein Pflasterstein. Auf jeder stehen ein Name, ein Geburtsjahr und wenige Worte über ein Schicksal: wann der Mensch verhaftet oder deportiert wurde und wo er ums Leben kam. Fast alle Inschriften beginnen mit denselben zwei Worten: «Hier wohnte». Es handelt sich um sogenannte Stolpersteine, das wohl größte dezentrale Denkmal der Welt.",
         "Quien pasea por ciudades alemanas tarde o temprano se topa con ellas: pequeñas placas cuadradas de latón en la acera, apenas más grandes que un adoquín. En cada una hay un nombre, un año de nacimiento y pocas palabras sobre un destino: cuándo esa persona fue detenida o deportada y dónde murió. Casi todas las inscripciones empiezan con las mismas dos palabras: «Aquí vivió». Se trata de los llamados Stolpersteine, «piedras para tropezar», probablemente el monumento descentralizado más grande del mundo."],
        ["Die Idee stammt von dem Künstler Gunter Demnig. Anfang der neunziger Jahre begann er, Steine vor den letzten frei gewählten Wohnorten von Menschen zu verlegen, die in der Zeit des Nationalsozialismus verfolgt, deportiert oder ermordet wurden: Jüdinnen und Juden, Sinti und Roma, politisch Verfolgte, Homosexuelle, Menschen mit Behinderung. Jeder Stein wird von Hand gefertigt. Was als kleine Kunstaktion begann, ist längst zu einem europaweiten Projekt geworden: Inzwischen liegen weit über 100.000 Steine in mehr als dreißig Ländern.",
         "La idea es del artista Gunter Demnig. A comienzos de los años noventa empezó a colocar piedras frente al último domicilio elegido libremente por personas que fueron perseguidas, deportadas o asesinadas durante el nacionalsocialismo: judíos y judías, sinti y romaníes, perseguidos políticos, homosexuales, personas con discapacidad. Cada piedra se fabrica a mano. Lo que comenzó como una pequeña acción artística se ha convertido hace tiempo en un proyecto europeo: hoy hay mucho más de 100.000 piedras en más de treinta países."],
        ["Das Besondere an dem Projekt ist sein Konzept. Die Steine erinnern nicht an anonyme Zahlen, sondern an einzelne Menschen, und zwar genau dort, wo sie gelebt haben: mitten im Alltag, zwischen Bäckerei und Bushaltestelle. Wer die Inschrift lesen will, muss sich bücken und verneigt sich damit symbolisch vor dem Opfer. Oft werden die Steine von Schulklassen, Nachbarn oder Angehörigen gespendet, die zuvor in Archiven die Lebensgeschichte der Betroffenen recherchiert haben. Bei der Verlegung sind häufig auch Nachkommen anwesend, die dafür aus Israel, den USA oder Argentinien anreisen. So wird Erinnerung zu einer gemeinsamen Aufgabe der ganzen Nachbarschaft.",
         "Lo especial del proyecto es su concepto. Las piedras no recuerdan cifras anónimas, sino a personas concretas, y justo donde vivieron: en medio de la vida cotidiana, entre la panadería y la parada del autobús. Quien quiere leer la inscripción tiene que agacharse y, con ello, se inclina simbólicamente ante la víctima. A menudo las piedras las donan grupos escolares, vecinos o familiares que antes investigaron en archivos la historia de vida de esas personas. En la colocación suelen estar presentes también descendientes que viajan para ello desde Israel, Estados Unidos o Argentina. Así, la memoria se convierte en una tarea común de todo el barrio."],
        ["Unumstritten ist das Projekt allerdings nicht. Einige jüdische Stimmen kritisieren, dass die Namen der Opfer auf dem Boden liegen und so buchstäblich mit Füßen getreten werden. In München etwa durften lange Zeit keine Stolpersteine auf öffentlichem Grund verlegt werden. Die Stadt entwickelte stattdessen eigene Erinnerungszeichen, die an Hauswänden angebracht werden. Befürworter halten dagegen, dass gerade das unerwartete Stolpern im Alltag zum Nachdenken anregt.",
         "Sin embargo, el proyecto no está libre de polémica. Algunas voces judías critican que los nombres de las víctimas estén en el suelo y que, literalmente, se pisoteen. En Múnich, por ejemplo, durante mucho tiempo no se permitió colocar Stolpersteine en suelo público. En su lugar, la ciudad desarrolló sus propias placas conmemorativas, que se fijan en las paredes de las casas. Los defensores responden que justamente ese tropiezo inesperado en la vida diaria invita a reflexionar."],
        ["Gunter Demnig selbst zitiert gern einen Satz aus dem Talmud: «Ein Mensch ist erst vergessen, wenn sein Name vergessen ist.» In vielen Städten treffen sich Freiwillige deshalb jedes Jahr am 9. November, um die Steine zu putzen und Kerzen daneben zu stellen. Viele Jugendliche erfahren auf diese Weise zum ersten Mal, dass auch aus ihrer eigenen Straße Menschen deportiert wurden. Solange Passanten stehen bleiben, die Namen lesen und sich fragen, wer diese Menschen waren, erfüllt das Kunstwerk seinen Zweck.",
         "El propio Gunter Demnig suele citar una frase del Talmud: «Una persona solo es olvidada cuando se olvida su nombre». Por eso, en muchas ciudades hay voluntarios que se reúnen cada 9 de noviembre para limpiar las piedras y poner velas a su lado. Así, muchos jóvenes descubren por primera vez que también de su propia calle se deportó a personas. Mientras los transeúntes se detengan, lean los nombres y se pregunten quiénes eran esas personas, la obra cumple su propósito."]
      ],
      q: [
        ["Was steht auf einem Stolperstein?", ["ein Gedicht über den Krieg", "der Name des Künstlers", "der Name und das Schicksal eines Menschen"], 2],
        ["Wo werden die Steine verlegt?", ["vor dem letzten frei gewählten Wohnort der Opfer", "nur vor Synagogen", "auf Friedhöfen"], 0],
        ["Warum wird das Projekt von manchen kritisiert?", ["Die Steine sind zu teuer.", "Die Steine sind zu klein, um sie zu lesen.", "Man tritt mit den Füßen auf die Namen der Opfer."], 2],
        ["Was hat München stattdessen entwickelt?", ["Erinnerungszeichen an Hauswänden", "ein großes zentrales Museum", "größere Steine aus Gold"], 0]
      ]
    }
  );

  /* ======================= Lista del curso B2 ======================= */
  DE.course.push({
    lvl: "B2", items: [
      ["b2-c-beruf", "Carrera, negociación salarial y reuniones", ["b2-fvg", "b2-konditional"]],
      ["b2-c-wissenschaft", "Ciencia y técnica: describir procesos", ["b2-passiversatz", "b2-zustandspassiv"]],
      ["b2-c-umwelt", "Medio ambiente y sostenibilidad", ["b2-nominal", "b2-genitivpraep"]],
      ["b2-c-politik", "Sociedad y política: noticias y declaraciones", ["b2-konjunktiv1"]],
      ["b2-c-medien", "Medios, noticias falsas y digitalización", ["b2-modalsubj"]],
      ["b2-c-psyche", "Salud, estrés y psicología", ["b2-konnektoren"]],
      ["b2-c-wirtschaft", "Economía, consumo y reclamaciones", ["b2-genitivpraep", "b2-fvg"]],
      ["b2-c-kultur", "Arte, literatura y memoria", ["b2-partizip"]],
      ["b2-c-bildung", "Educación y formación continua", ["b2-nominal"]],
      ["b2-c-migration", "Migración, identidad y trámites", ["b2-wer", "b2-konjunktiv1"]],
      ["b2-c-stadt", "Vivienda y vida en la ciudad", ["b2-futur2"]],
      ["b2-c-argumentieren", "Argumentar, presentar y escribir formalmente", ["b2-konnektoren", "b2-konditional"]],
      ["b2-c-pruefung", "Simulacro del Goethe-Zertifikat B2", []]
    ]
  });

  /* ======================= Examen B2 ======================= */
  DE.exams.B2 = {
    name: "Goethe-Zertifikat B2",
    pass: "Cada módulo (Lesen, Hören, Schreiben, Sprechen) se aprueba con el 60 %. Los módulos se pueden presentar juntos o por separado, y cada uno recibe su propio certificado.",
    parts: {
      hoeren: "Unos 40 minutos, 4 partes y 30 tareas. Teil 1: cinco textos cortos (mensajes de voz, conversaciones, avisos), cada uno con una tarea richtig/falsch y otra a/b/c; se oyen UNA sola vez. Teil 2: una entrevista de radio con 6 preguntas a/b/c; se oye DOS veces. Teil 3: una discusión de radio con moderador y dos invitados; decides quién dice qué; se oye UNA sola vez. Teil 4: una conferencia (Vortrag) con 8 preguntas a/b/c; se oye DOS veces. Aquí: versión corta de 10 tareas.",
      lesen: "65 minutos, 5 partes y 30 tareas. Teil 1: cuatro opiniones de un foro y 9 afirmaciones; decides a quién corresponde cada una. Teil 2: un artículo de prensa con 6 huecos; eliges la frase que falta en cada uno (sobran dos). Teil 3: un artículo largo con 6 preguntas a/b/c. Teil 4: comentarios de lectores sobre un tema polémico; relacionas cada comentario con su idea principal. Teil 5: un reglamento o unas instrucciones; eliges el título de cada apartado. Aquí: versión corta de 12 tareas.",
      schreiben: "75 minutos, 2 partes. Teil 1 (unos 50 minutos): una contribución a un foro con tu opinión, de unas 150 palabras; en el examen eliges entre dos temas y tienes que tratar los cuatro puntos. Teil 2 (unos 25 minutos): un mensaje formal de unas 100 palabras a un superior, un docente o una institución (disculparse, explicar, proponer, pedir). Se evalúan el contenido, la coherencia, el vocabulario, la gramática y el registro adecuado.",
      sprechen: "Unos 15 minutos en pareja, con 15 minutos de preparación. Teil 1: una presentación de unos 4 minutos sobre un tema que eliges entre dos; después comentas brevemente la presentación de tu pareja, le haces una pregunta y respondes a la suya. Teil 2: una discusión de unos 5 minutos sobre una pregunta polémica: argumentar, reaccionar a los argumentos del otro y buscar juntos una solución."
    },
    hoeren: [
      { teil: 1, n: 1, text: "Hallo Herr Becker, hier ist Sabine Kühn aus der Buchhaltung. Es geht um unsere Besprechung am Mittwoch. Leider muss ich den Termin absagen, weil ich kurzfristig zu einem Kunden nach Hamburg fahren muss. Könnten wir uns stattdessen am Freitag um neun Uhr treffen? Falls Ihnen das nicht passt, schreiben Sie mir einfach eine kurze E-Mail. Die Unterlagen für das Budget schicke ich Ihnen vorab, damit Sie sie schon durchsehen können.", q: "Frau Kühn möchte die Besprechung verschieben.", o: ["Richtig", "Falsch"], a: 0 },
      { teil: 1, n: 1, text: "Hallo Herr Becker, hier ist Sabine Kühn aus der Buchhaltung. Es geht um unsere Besprechung am Mittwoch. Leider muss ich den Termin absagen, weil ich kurzfristig zu einem Kunden nach Hamburg fahren muss. Könnten wir uns stattdessen am Freitag um neun Uhr treffen? Falls Ihnen das nicht passt, schreiben Sie mir einfach eine kurze E-Mail. Die Unterlagen für das Budget schicke ich Ihnen vorab, damit Sie sie schon durchsehen können.", q: "Was soll Herr Becker tun, wenn ihm der neue Termin nicht passt?", o: ["Er soll sie zurückrufen.", "Er soll ihr eine E-Mail schreiben.", "Er soll nach Hamburg kommen."], a: 1 },
      { teil: 1, n: 1, text: "Frau: Und, hast du die Wohnung in der Südstadt genommen? Mann: Nein, leider nicht. Die Wohnung selbst war toll, ein schöner Altbau mit Balkon, aber die Vermieterin wollte eine Kaution von vier Monatsmieten. Frau: Vier? Das ist doch gar nicht erlaubt. Mehr als drei Kaltmieten darf ein Vermieter nicht verlangen. Mann: Genau, das habe ich ihr auch gesagt. Danach war die Stimmung ziemlich schlecht, und am nächsten Tag hat sie mir abgesagt. Frau: Ärgerlich. Aber vielleicht ist es besser so. Mit so einer Vermieterin hättest du bestimmt noch mehr Ärger bekommen.", q: "Der Mann hat die Wohnung in der Südstadt gemietet.", o: ["Richtig", "Falsch"], a: 1 },
      { teil: 1, n: 1, text: "Frau: Und, hast du die Wohnung in der Südstadt genommen? Mann: Nein, leider nicht. Die Wohnung selbst war toll, ein schöner Altbau mit Balkon, aber die Vermieterin wollte eine Kaution von vier Monatsmieten. Frau: Vier? Das ist doch gar nicht erlaubt. Mehr als drei Kaltmieten darf ein Vermieter nicht verlangen. Mann: Genau, das habe ich ihr auch gesagt. Danach war die Stimmung ziemlich schlecht, und am nächsten Tag hat sie mir abgesagt. Frau: Ärgerlich. Aber vielleicht ist es besser so. Mit so einer Vermieterin hättest du bestimmt noch mehr Ärger bekommen.", q: "Warum hat er die Wohnung nicht bekommen?", o: ["Die Wohnung hatte keinen Balkon.", "Es gab Streit wegen der Kaution.", "Die Miete war zu hoch."], a: 1 },
      { teil: 2, n: 2, text: "Mann: Frau Lorenz, Sie haben in Leipzig einen sogenannten Leihladen gegründet. Was genau ist das? Frau: Im Grunde funktioniert er wie eine Bibliothek, nur dass man keine Bücher ausleiht, sondern Gegenstände: Bohrmaschinen, Zelte, Nähmaschinen oder Raclette-Geräte. Mann: Und warum braucht man so etwas? Frau: Denken Sie an eine Bohrmaschine. Sie wird im Durchschnitt nur wenige Minuten im Jahr benutzt, und trotzdem hat fast jeder Haushalt eine. Das ist eine riesige Verschwendung von Ressourcen und Geld. Mann: Und wie finanzieren Sie sich? Frau: Die Mitglieder zahlen einen kleinen Jahresbeitrag, je nach Einkommen zwischen zehn und dreißig Euro. Den Rest decken Spenden und eine Förderung der Stadt.", q: "Was ist ein Leihladen?", o: ["ein Geschäft für gebrauchte Bücher", "ein Ort, an dem man Gegenstände ausleihen kann", "eine Werkstatt für Reparaturen"], a: 1 },
      { teil: 2, n: 2, text: "Mann: Frau Lorenz, Sie haben in Leipzig einen sogenannten Leihladen gegründet. Was genau ist das? Frau: Im Grunde funktioniert er wie eine Bibliothek, nur dass man keine Bücher ausleiht, sondern Gegenstände: Bohrmaschinen, Zelte, Nähmaschinen oder Raclette-Geräte. Mann: Und warum braucht man so etwas? Frau: Denken Sie an eine Bohrmaschine. Sie wird im Durchschnitt nur wenige Minuten im Jahr benutzt, und trotzdem hat fast jeder Haushalt eine. Das ist eine riesige Verschwendung von Ressourcen und Geld. Mann: Und wie finanzieren Sie sich? Frau: Die Mitglieder zahlen einen kleinen Jahresbeitrag, je nach Einkommen zwischen zehn und dreißig Euro. Den Rest decken Spenden und eine Förderung der Stadt.", q: "Wie finanziert sich der Leihladen?", o: ["durch Mitgliedsbeiträge, Spenden und Geld von der Stadt", "nur durch den Verkauf von Geräten", "durch Werbung im Internet"], a: 0 },
      { teil: 3, n: 1, text: "Mann: Willkommen zu unserer Sendung. Heute geht es um die Frage, ob Handys an Schulen verboten werden sollten. Frau Kunze, Sie sind Mutter von zwei Kindern. Was meinen Sie? Frau: Ich bin klar für ein Verbot, zumindest an Grundschulen. Die Kinder sitzen in den Pausen nur noch vor dem Bildschirm, statt miteinander zu spielen. Viele Eltern fühlen sich mit dem Thema allein gelassen und wären froh, wenn die Schule klare Grenzen setzen würde. Mann: Herr Albers, Sie unterrichten an einem Gymnasium. Sehen Sie das genauso? Mann: Nicht ganz. Ein generelles Verbot halte ich für den falschen Weg, denn die Jugendlichen müssen lernen, verantwortungsvoll mit dem Handy umzugehen. Wir haben an unserer Schule gemeinsam mit den Schülern Regeln erarbeitet, und das funktioniert erstaunlich gut.", q: "Wer sagt das? «Ein generelles Verbot ist der falsche Weg.»", o: ["der Moderator", "Frau Kunze", "Herr Albers"], a: 2 },
      { teil: 3, n: 1, text: "Mann: Willkommen zu unserer Sendung. Heute geht es um die Frage, ob Handys an Schulen verboten werden sollten. Frau Kunze, Sie sind Mutter von zwei Kindern. Was meinen Sie? Frau: Ich bin klar für ein Verbot, zumindest an Grundschulen. Die Kinder sitzen in den Pausen nur noch vor dem Bildschirm, statt miteinander zu spielen. Viele Eltern fühlen sich mit dem Thema allein gelassen und wären froh, wenn die Schule klare Grenzen setzen würde. Mann: Herr Albers, Sie unterrichten an einem Gymnasium. Sehen Sie das genauso? Mann: Nicht ganz. Ein generelles Verbot halte ich für den falschen Weg, denn die Jugendlichen müssen lernen, verantwortungsvoll mit dem Handy umzugehen. Wir haben an unserer Schule gemeinsam mit den Schülern Regeln erarbeitet, und das funktioniert erstaunlich gut.", q: "Wer sagt das? «Viele Eltern wünschen sich, dass die Schule klare Grenzen setzt.»", o: ["der Moderator", "Frau Kunze", "Herr Albers"], a: 1 },
      { teil: 4, n: 2, text: "Meine sehr geehrten Damen und Herren, in meinem heutigen Vortrag geht es um die Frage, wie Mehrsprachigkeit unser Gehirn beeinflusst. Lange Zeit glaubte man, dass Kinder durch zwei Sprachen überfordert würden und am Ende beide schlechter beherrschten. Diese Annahme gilt heute als widerlegt. Zahlreiche Studien zeigen, dass mehrsprachige Kinder zwar manchmal etwas später zu sprechen beginnen, diesen Rückstand aber schnell aufholen. Interessanter ist ein anderer Befund: Wer täglich zwischen zwei Sprachen wechselt, trainiert offenbar die Fähigkeit, sich zu konzentrieren und störende Informationen auszublenden. Ob dieser Vorteil im Alter auch vor Demenz schützt, ist allerdings noch umstritten. Einige Untersuchungen deuten darauf hin, dass die Krankheit bei Mehrsprachigen einige Jahre später ausbricht. Andere Studien konnten diesen Effekt dagegen nicht nachweisen.", q: "Was dachte man früher über mehrsprachige Kinder?", o: ["Sie lernen schneller lesen.", "Sie sind mit zwei Sprachen überfordert.", "Sie werden später bessere Musiker."], a: 1 },
      { teil: 4, n: 2, text: "Meine sehr geehrten Damen und Herren, in meinem heutigen Vortrag geht es um die Frage, wie Mehrsprachigkeit unser Gehirn beeinflusst. Lange Zeit glaubte man, dass Kinder durch zwei Sprachen überfordert würden und am Ende beide schlechter beherrschten. Diese Annahme gilt heute als widerlegt. Zahlreiche Studien zeigen, dass mehrsprachige Kinder zwar manchmal etwas später zu sprechen beginnen, diesen Rückstand aber schnell aufholen. Interessanter ist ein anderer Befund: Wer täglich zwischen zwei Sprachen wechselt, trainiert offenbar die Fähigkeit, sich zu konzentrieren und störende Informationen auszublenden. Ob dieser Vorteil im Alter auch vor Demenz schützt, ist allerdings noch umstritten. Einige Untersuchungen deuten darauf hin, dass die Krankheit bei Mehrsprachigen einige Jahre später ausbricht. Andere Studien konnten diesen Effekt dagegen nicht nachweisen.", q: "Was sagt die Referentin über Mehrsprachigkeit und Demenz?", o: ["Der Zusammenhang ist noch nicht eindeutig geklärt.", "Mehrsprachigkeit verhindert Demenz sicher.", "Mehrsprachige erkranken früher an Demenz."], a: 0 }
    ],
    lesen: [
      { teil: 1, text: "Forum: Ein Jahr Auszeit vom Job – gute Idee?\n\nA) Miriam: Ich habe mit 35 ein Sabbatjahr genommen und bin durch Südamerika gereist. Finanziell war das nur möglich, weil ich vorher drei Jahre lang auf einen Teil meines Gehalts verzichtet habe. Bereut habe ich es nie, im Gegenteil: Ich bin mit ganz neuer Energie zurückgekommen.\n\nB) Tobias: Klingt alles schön, aber man sollte die Risiken nicht unterschätzen. Während meiner Auszeit wurde meine Abteilung umstrukturiert, und nach der Rückkehr bekam ich eine Stelle, die mir überhaupt nicht gefallen hat. Heute würde ich vorher eine schriftliche Vereinbarung verlangen.\n\nC) Svenja: Ich finde, man muss nicht gleich ein ganzes Jahr aussteigen. Ich arbeite seit zwei Jahren nur noch vier Tage pro Woche und nutze den freien Tag für ein Fernstudium. Das ist für mich die ideale Lösung.\n\nD) Klaus: Als Arbeitgeber unterstütze ich Auszeiten grundsätzlich. Allerdings muss die Planung früh beginnen, damit die Kollegen nicht überlastet werden. Bei uns muss man den Wunsch mindestens ein Jahr vorher anmelden.", q: "Wer hat die Auszeit durch einen Verzicht auf Gehalt finanziert?", o: ["Miriam", "Tobias", "Svenja", "Klaus"], a: 0 },
      { teil: 1, text: "Forum: Ein Jahr Auszeit vom Job – gute Idee?\n\nA) Miriam: Ich habe mit 35 ein Sabbatjahr genommen und bin durch Südamerika gereist. Finanziell war das nur möglich, weil ich vorher drei Jahre lang auf einen Teil meines Gehalts verzichtet habe. Bereut habe ich es nie, im Gegenteil: Ich bin mit ganz neuer Energie zurückgekommen.\n\nB) Tobias: Klingt alles schön, aber man sollte die Risiken nicht unterschätzen. Während meiner Auszeit wurde meine Abteilung umstrukturiert, und nach der Rückkehr bekam ich eine Stelle, die mir überhaupt nicht gefallen hat. Heute würde ich vorher eine schriftliche Vereinbarung verlangen.\n\nC) Svenja: Ich finde, man muss nicht gleich ein ganzes Jahr aussteigen. Ich arbeite seit zwei Jahren nur noch vier Tage pro Woche und nutze den freien Tag für ein Fernstudium. Das ist für mich die ideale Lösung.\n\nD) Klaus: Als Arbeitgeber unterstütze ich Auszeiten grundsätzlich. Allerdings muss die Planung früh beginnen, damit die Kollegen nicht überlastet werden. Bei uns muss man den Wunsch mindestens ein Jahr vorher anmelden.", q: "Wer meint, dass eine Auszeit beruflich auch Nachteile haben kann?", o: ["Miriam", "Tobias", "Svenja", "Klaus"], a: 1 },
      { teil: 1, text: "Forum: Ein Jahr Auszeit vom Job – gute Idee?\n\nA) Miriam: Ich habe mit 35 ein Sabbatjahr genommen und bin durch Südamerika gereist. Finanziell war das nur möglich, weil ich vorher drei Jahre lang auf einen Teil meines Gehalts verzichtet habe. Bereut habe ich es nie, im Gegenteil: Ich bin mit ganz neuer Energie zurückgekommen.\n\nB) Tobias: Klingt alles schön, aber man sollte die Risiken nicht unterschätzen. Während meiner Auszeit wurde meine Abteilung umstrukturiert, und nach der Rückkehr bekam ich eine Stelle, die mir überhaupt nicht gefallen hat. Heute würde ich vorher eine schriftliche Vereinbarung verlangen.\n\nC) Svenja: Ich finde, man muss nicht gleich ein ganzes Jahr aussteigen. Ich arbeite seit zwei Jahren nur noch vier Tage pro Woche und nutze den freien Tag für ein Fernstudium. Das ist für mich die ideale Lösung.\n\nD) Klaus: Als Arbeitgeber unterstütze ich Auszeiten grundsätzlich. Allerdings muss die Planung früh beginnen, damit die Kollegen nicht überlastet werden. Bei uns muss man den Wunsch mindestens ein Jahr vorher anmelden.", q: "Wer hat eine Alternative zu einer langen Auszeit gefunden?", o: ["Miriam", "Tobias", "Svenja", "Klaus"], a: 2 },
      { teil: 1, text: "Forum: Ein Jahr Auszeit vom Job – gute Idee?\n\nA) Miriam: Ich habe mit 35 ein Sabbatjahr genommen und bin durch Südamerika gereist. Finanziell war das nur möglich, weil ich vorher drei Jahre lang auf einen Teil meines Gehalts verzichtet habe. Bereut habe ich es nie, im Gegenteil: Ich bin mit ganz neuer Energie zurückgekommen.\n\nB) Tobias: Klingt alles schön, aber man sollte die Risiken nicht unterschätzen. Während meiner Auszeit wurde meine Abteilung umstrukturiert, und nach der Rückkehr bekam ich eine Stelle, die mir überhaupt nicht gefallen hat. Heute würde ich vorher eine schriftliche Vereinbarung verlangen.\n\nC) Svenja: Ich finde, man muss nicht gleich ein ganzes Jahr aussteigen. Ich arbeite seit zwei Jahren nur noch vier Tage pro Woche und nutze den freien Tag für ein Fernstudium. Das ist für mich die ideale Lösung.\n\nD) Klaus: Als Arbeitgeber unterstütze ich Auszeiten grundsätzlich. Allerdings muss die Planung früh beginnen, damit die Kollegen nicht überlastet werden. Bei uns muss man den Wunsch mindestens ein Jahr vorher anmelden.", q: "Wer betont, wie wichtig eine frühzeitige Planung ist?", o: ["Miriam", "Tobias", "Svenja", "Klaus"], a: 3 },
      { teil: 2, text: "Reparieren statt wegwerfen\n\nJeden ersten Samstag im Monat verwandelt sich der Gemeindesaal in Bochum-Langendreer in eine Werkstatt. Ehrenamtliche Helferinnen und Helfer reparieren dort kostenlos Toaster, Fahrräder und Lieblingspullover. ( … ) Die Besucher zahlen nur für die Ersatzteile und spenden, wenn sie möchten, ein paar Euro für Kaffee und Kuchen.", q: "Welcher Satz passt in die Lücke?", o: ["Neue Geräte werden dort zu günstigen Preisen verkauft.", "Dabei geht es nicht nur ums Geld, sondern auch ums Lernen: Wer möchte, schraubt selbst mit.", "Deshalb ist der Saal am Wochenende immer geschlossen."], a: 1 },
      { teil: 2, text: "Reparieren statt wegwerfen\n\nDie Idee stammt aus den Niederlanden, wo 2009 in Amsterdam das erste Repair-Café eröffnet wurde. ( … ) Heute gibt es allein in Deutschland mehr als tausend solcher Initiativen.", q: "Welcher Satz passt in die Lücke?", o: ["Dort ist sie aber schon nach einem Jahr wieder verschwunden.", "Trotzdem hat in Deutschland niemand davon gehört.", "Seitdem hat sie sich in vielen Ländern verbreitet."], a: 2 },
      { teil: 3, text: "Mikroabenteuer liegen im Trend. Gemeint sind kleine Ausflüge, die ohne lange Planung, ohne teure Ausrüstung und ganz in der Nähe stattfinden, zum Beispiel eine Nacht unter freiem Himmel auf einer Wiese am Stadtrand oder eine Wanderung vom Büro nach Hause. Der britische Abenteurer Alastair Humphreys, der den Begriff bekannt gemacht hat, wollte damit zeigen, dass man für ein Abenteuer nicht um die halbe Welt fliegen muss. Gerade Menschen mit wenig Zeit und wenig Geld fühlen sich davon angesprochen.", q: "Was ist ein Mikroabenteuer?", o: ["eine teure Reise in ein fernes Land", "ein kurzer, einfacher Ausflug in der Nähe", "ein Abenteuerspiel für Kinder"], a: 1 },
      { teil: 3, text: "Psychologen sehen in dem Trend mehr als eine Mode. Wer regelmäßig Neues erlebt, so ihre Erklärung, nimmt die Zeit bewusster wahr: Wochen voller Routine verschwimmen in der Erinnerung, während ungewöhnliche Erlebnisse lange im Gedächtnis bleiben. Ein Abend am Lagerfeuer mitten in der Woche kann sich deshalb erholsamer anfühlen als ein ganzes Wochenende vor dem Fernseher. Naturschützer mahnen allerdings, die Regeln zu beachten: Wildcampen ist in Deutschland vielerorts verboten.", q: "Warum sind Mikroabenteuer laut Psychologen erholsam?", o: ["Ungewöhnliche Erlebnisse bleiben lange im Gedächtnis.", "Man schläft draußen immer besser als zu Hause.", "Man muss am Wochenende nicht arbeiten."], a: 0 },
      { teil: 4, text: "Leserkommentare zum Artikel «Brauchen wir ein Tempolimit auf der Autobahn?»\n\nPetra W.: Ich fahre jeden Tag achtzig Kilometer zur Arbeit. Seit ich freiwillig nicht schneller als 120 fahre, komme ich entspannter an und verbrauche deutlich weniger Benzin. Ein Zeitverlust? Höchstens fünf Minuten. Ich verstehe ehrlich gesagt nicht, warum man aus dieser Frage einen Glaubenskrieg macht.", q: "Welche Aussage passt zu diesem Kommentar?", o: ["Die Autorin fordert höhere Benzinpreise.", "Die Autorin fährt aus Prinzip so schnell wie möglich.", "Langsamer zu fahren hat für die Autorin vor allem Vorteile."], a: 2 },
      { teil: 4, text: "Leserkommentare zum Artikel «Brauchen wir ein Tempolimit auf der Autobahn?»\n\nHenrik S.: Natürlich würde ein Tempolimit einige Unfälle verhindern und etwas Kraftstoff sparen. Aber muss der Staat wirklich alles regeln? Auf den meisten Autobahnen kann man wegen Baustellen und Staus ohnehin kaum schnell fahren. Statt neuer Verbote sollte man lieber in die Bahn und in gute Straßen investieren.", q: "Welche Aussage passt zu diesem Kommentar?", o: ["Der Autor lehnt neue Verbote ab und setzt auf Investitionen.", "Der Autor glaubt, dass ein Tempolimit überhaupt nichts bringt.", "Der Autor möchte selbst nicht mehr Auto fahren."], a: 0 },
      { teil: 5, text: "Hausordnung des Coworking-Space «Werkbank»\n\nAbschnitt 2: Die Besprechungsräume können über unsere App für maximal drei Stunden pro Tag reserviert werden. Wird ein Raum nicht innerhalb von fünfzehn Minuten nach Beginn der Reservierung genutzt, wird er automatisch für andere Mitglieder freigegeben.", q: "Welche Überschrift passt zu diesem Abschnitt?", o: ["Buchung von Räumen", "Lärm und Telefonate", "Kündigung der Mitgliedschaft"], a: 0 },
      { teil: 5, text: "Hausordnung des Coworking-Space «Werkbank»\n\nAbschnitt 4: Bitte führen Sie Telefonate und Videokonferenzen ausschließlich in den Telefonkabinen oder Besprechungsräumen. Im offenen Arbeitsbereich ist Ruhe zu bewahren; Kopfhörer sind ausdrücklich erwünscht.", q: "Welche Überschrift passt zu diesem Abschnitt?", o: ["Buchung von Räumen", "Sauberkeit in der Küche", "Lärm und Telefonate"], a: 2 }
    ],
    schreiben: [
      {
        teil: 1,
        task: "Sie haben im Fernsehen eine Diskussion zum Thema «Homeoffice für alle?» gesehen. Im Online-Forum der Sendung finden Sie folgende Meinung: «Wer zu Hause arbeitet, arbeitet weniger. Die Firmen sollten das Homeoffice wieder abschaffen.» Schreiben Sie nun Ihre Meinung (etwa 150 Wörter). Gehen Sie auf alle vier Punkte ein.",
        p: ["Äußern Sie Ihre Meinung zu der Aussage im Forum.", "Nennen Sie Vorteile des Homeoffice für Beschäftigte und Firmen.", "Nennen Sie mögliche Nachteile.", "Beschreiben Sie eine Lösung, die beide Seiten berücksichtigt."],
        words: 150,
        model: "Die Meinung, dass Beschäftigte im Homeoffice weniger arbeiten, kann ich so nicht teilen. Meiner Erfahrung nach ist eher das Gegenteil der Fall: Wer zu Hause arbeitet, wird seltener unterbrochen und kann sich deshalb besser konzentrieren. Außerdem spart man sich den oft langen Arbeitsweg, was nicht nur Zeit, sondern auch Nerven schont. Auch die Firmen profitieren, denn sie brauchen weniger Büroflächen und gelten als attraktive Arbeitgeber.\n\nAllerdings will ich nicht verschweigen, dass es auch Nachteile gibt. Der spontane Austausch mit den Kollegen fehlt, und manche Menschen haben Schwierigkeiten, Beruf und Privatleben zu trennen. Gerade neue Mitarbeitende fühlen sich im Homeoffice schnell isoliert.\n\nDeshalb halte ich ein Mischmodell für die beste Lösung. Wenn sich das Team zum Beispiel an zwei festen Tagen im Büro trifft, bleibt der persönliche Kontakt erhalten, ohne dass die Flexibilität verloren geht. Statt das Homeoffice abzuschaffen, sollten die Firmen also klare Regeln vereinbaren."
      },
      {
        teil: 2,
        task: "Sie haben sich für ein Seminar zum Thema «Zeitmanagement» angemeldet, das Ihre Firma am kommenden Freitag anbietet. Leider können Sie nun nicht teilnehmen. Schreiben Sie der Organisatorin, Frau Dr. Wagner, eine Nachricht (etwa 100 Wörter). Achten Sie auf Anrede, Einleitung, die Reihenfolge der Punkte und einen passenden Schluss.",
        p: ["Entschuldigen Sie sich höflich.", "Erklären Sie, warum Sie nicht teilnehmen können.", "Fragen Sie nach einem späteren Termin.", "Bitten Sie um die Seminarunterlagen."],
        words: 100,
        model: "Sehr geehrte Frau Dr. Wagner,\n\nleider muss ich Ihnen mitteilen, dass ich an dem Seminar «Zeitmanagement» am kommenden Freitag nicht teilnehmen kann. Dafür möchte ich mich vielmals entschuldigen. Kurzfristig wurde ein wichtiger Termin bei einem Kunden in München angesetzt, den ich als Projektverantwortlicher wahrnehmen muss.\n\nDa mich das Thema sehr interessiert, wäre ich Ihnen dankbar, wenn Sie mir mitteilen könnten, ob das Seminar zu einem späteren Zeitpunkt noch einmal angeboten wird. Außerdem würde ich mich freuen, wenn Sie mir die Unterlagen zukommen lassen könnten, damit ich mich schon vorab mit den Inhalten beschäftigen kann.\n\nIch bitte um Ihr Verständnis.\n\nMit freundlichen Grüßen\nCarlos Pérez"
      }
    ],
    sprechen: [
      {
        teil: 1,
        task: "Vortrag halten (etwa 4 Minuten). Wählen Sie ein Thema und halten Sie einen kurzen Vortrag. Thema: «Wohnen im Alter». Ihr Partner oder Ihre Partnerin hört zu, gibt Ihnen danach eine kurze Rückmeldung und stellt Ihnen eine Frage.",
        hints: ["Beschreiben Sie verschiedene Wohnformen für ältere Menschen.", "Erläutern Sie eine dieser Wohnformen genauer.", "Nennen Sie Vor- und Nachteile und bewerten Sie diese.", "Gehen Sie auf die Situation in Ihrem Heimatland ein.", "Beantworten Sie am Ende die Frage Ihres Partners."],
        model: "In meinem Vortrag möchte ich über ein Thema sprechen, das uns alle früher oder später betrifft: das Wohnen im Alter. Mein Vortrag besteht aus drei Teilen. Zunächst stelle ich verschiedene Wohnformen vor, anschließend erläutere ich eine davon genauer, und zum Schluss nenne ich Vor- und Nachteile und sage meine Meinung.\n\nEs gibt heute viele Möglichkeiten. Manche älteren Menschen bleiben so lange wie möglich in ihrer eigenen Wohnung, oft mit Unterstützung eines Pflegedienstes. Andere ziehen zu ihren Kindern oder in eine Seniorenwohnung mit Betreuung. Wer pflegebedürftig ist, lebt häufig in einem Pflegeheim. Außerdem gibt es Wohngemeinschaften für Senioren, in denen mehrere ältere Menschen zusammenleben und sich eine Pflegekraft teilen.\n\nIch möchte genauer auf das Mehrgenerationenhaus eingehen. Dort wohnen junge Familien, Studierende und Senioren unter einem Dach. Jeder hat seine eigene Wohnung, aber es gibt gemeinsame Räume, zum Beispiel einen Garten oder eine große Küche. Die Älteren passen manchmal auf die Kinder auf, und die Jüngeren helfen beim Einkaufen.\n\nDamit komme ich zu den Vor- und Nachteilen. Dafür spricht, dass niemand einsam ist und alle voneinander profitieren. Dagegen spricht, dass es solche Projekte bisher nur selten gibt und dass das enge Zusammenleben auch zu Konflikten führen kann. Nicht jeder möchte so viel Kontakt mit seinen Nachbarn haben, und man muss bereit sein, sich aktiv an der Gemeinschaft zu beteiligen.\n\nWas mein Heimatland betrifft, so ist die Situation ganz anders. In der Dominikanischen Republik leben ältere Menschen meistens bei ihrer Familie, Pflegeheime sind eher die Ausnahme. Das hat den Vorteil, dass die Großeltern nicht allein sind. Es bedeutet aber auch eine große Belastung, vor allem für die Frauen, die sich meistens um die Pflege kümmern.\n\nAbschließend möchte ich betonen, dass es meiner Ansicht nach keine perfekte Lösung gibt. Ich persönlich finde das Mehrgenerationenhaus jedoch sehr überzeugend, weil es die Vorteile der Familie mit der Unabhängigkeit verbindet. Vielen Dank für Ihre Aufmerksamkeit."
      },
      {
        teil: 2,
        task: "Diskussion (etwa 5 Minuten). Diskutieren Sie mit Ihrem Partner oder Ihrer Partnerin über die Frage: «Sollte ein soziales Pflichtjahr für alle jungen Menschen eingeführt werden?» Tauschen Sie Argumente aus, reagieren Sie auf die Argumente Ihres Partners und versuchen Sie am Ende, eine gemeinsame Lösung zu finden.",
        hints: ["Nutzen für die Gesellschaft", "Freiheit der jungen Menschen", "Kosten und Organisation", "Alternativen, zum Beispiel ein besser gefördertes freiwilliges Jahr"],
        model: "Ich bin der festen Überzeugung, dass ein soziales Pflichtjahr der Gesellschaft guttun würde. Junge Menschen würden Erfahrungen in Krankenhäusern, Kitas oder im Umweltschutz sammeln und Menschen kennenlernen, denen sie sonst nie begegnen würden. Das stärkt den Zusammenhalt.\n\nDa haben Sie zwar recht, dass ein Pflichtjahr in die Freiheit der Jugendlichen eingreift. Trotzdem gibt es auch eine Schulpflicht, und die hält niemand für falsch.\n\nIhr Argument mit den Kosten verstehe ich. Es stimmt, dass der Staat viel Geld für Unterkunft und Betreuung ausgeben müsste. Andererseits fehlen in der Pflege überall Leute, und davon würden am Ende alle profitieren.\n\nAllerdings gebe ich zu, dass niemand gezwungen werden sollte, eine Arbeit zu machen, die ihm überhaupt nicht liegt. Was halten Sie davon, wenn wir uns auf einen Kompromiss einigen? Das Jahr bleibt freiwillig, wird aber besser bezahlt und zum Beispiel beim Studium angerechnet. Dann hätten mehr junge Leute einen Anreiz, ohne dass man sie zwingen muss."
      }
    ]
  };
})();
