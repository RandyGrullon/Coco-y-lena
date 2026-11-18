/* Werkstatt Ü — nivel A2 (Goethe-Zertifikat A2) */
(function () {
  const DE = window.DE;

  Object.assign(DE.themes, {
    "a2-wohnen": { name: "Vivienda y mudanza", de: "Wohnen & Umzug", level: "A2" },
    "a2-arbeit": { name: "Trabajo y profesión", de: "Arbeit & Beruf", level: "A2" },
    "a2-gesundheit": { name: "Salud y médico", de: "Gesundheit & Arztbesuch", level: "A2" },
    "a2-reisen": { name: "Viajes y transporte", de: "Reisen & Verkehr", level: "A2" },
    "a2-feste": { name: "Fiestas y regalos", de: "Feste & Geschenke", level: "A2" },
    "a2-einkaufen": { name: "Compras y ropa", de: "Einkaufen & Kleidung", level: "A2" },
    "a2-freizeit": { name: "Tiempo libre y medios", de: "Freizeit & Medien", level: "A2" },
    "a2-schule": { name: "Escuela y formación", de: "Schule & Ausbildung", level: "A2" },
    "a2-natur": { name: "Naturaleza y clima", de: "Natur & Wetter", level: "A2" },
    "a2-gefuehle": { name: "Relaciones y sentimientos", de: "Beziehungen & Gefühle", level: "A2" },
    "a2-behoerden": { name: "Trámites y banco", de: "Ämter & Bank", level: "A2" },
    "a2-redemittel": { name: "Frases clave A2", de: "Redemittel A2", level: "A2" }
  });

  DE.vocab.push(
    ["a2-wohnen", "der", "Umzug", "¨-e", "la mudanza", "Nach dem Umzug war ich total müde."],
    ["a2-wohnen", "", "umziehen", "ist umgezogen", "mudarse (de casa)", "Wir sind im Sommer nach Essen umgezogen."],
    ["a2-wohnen", "", "einziehen", "ist eingezogen", "mudarse a (entrar a vivir)", "Die neuen Nachbarn sind gestern eingezogen."],
    ["a2-wohnen", "", "ausziehen", "ist ausgezogen", "irse de una vivienda (con haben: quitarse la ropa)", "Mein Mitbewohner ist im Mai ausgezogen."],
    ["a2-wohnen", "der", "Vermieter", "-", "el casero, el dueño que alquila", "Der Vermieter wohnt im Erdgeschoss."],
    ["a2-wohnen", "der", "Mieter", "-", "el inquilino", "Alle Mieter haben einen Brief vom Vermieter bekommen."],
    ["a2-wohnen", "die", "Kaution", "-en", "el depósito de garantía", "Die Kaution bekommen Sie zurück, wenn Sie ausziehen."],
    ["a2-wohnen", "die", "Nebenkosten", "pl", "los gastos adicionales (agua, calefacción, basura)", "Die Miete ist 600 Euro plus Nebenkosten."],
    ["a2-wohnen", "der", "Stock", "-", "el piso, la planta (¡der erste Stock es el 2.º piso en RD!)", "Wir wohnen im dritten Stock."],
    ["a2-wohnen", "das", "Erdgeschoss", "-e", "la planta baja (en RD, el primer piso)", "Im Erdgeschoss ist eine Bäckerei."],
    ["a2-wohnen", "der", "Aufzug", "¨-e", "el ascensor", "Leider hat das Haus keinen Aufzug."],
    ["a2-wohnen", "der", "Keller", "-", "el sótano", "Die Fahrräder stehen im Keller."],
    ["a2-wohnen", "der", "Flur", "-e", "el pasillo, la entrada", "Bitte lass die Schuhe im Flur."],
    ["a2-wohnen", "die", "Möbel", "pl", "los muebles", "Die Wohnung ist noch leer, wir brauchen Möbel."],
    ["a2-wohnen", "der", "Schrank", "¨-e", "el armario, el clóset", "Der Schrank passt nicht durch die Tür."],
    ["a2-wohnen", "der", "Kühlschrank", "¨-e", "la nevera", "Im Kühlschrank ist nur noch Milch."],
    ["a2-wohnen", "die", "Wohngemeinschaft", "-en", "el apartamento compartido (WG)", "Ich wohne in einer Wohngemeinschaft mit zwei Studentinnen."],
    ["a2-wohnen", "", "möbliert", "", "amueblado", "Das Zimmer ist möbliert und kostet 450 Euro."],
    ["a2-wohnen", "", "hell", "", "claro, con mucha luz", "Die Wohnung ist hell und ruhig."],
    ["a2-wohnen", "die", "Hausordnung", "-en", "el reglamento del edificio", "In der Hausordnung steht: Ab 22 Uhr ist Ruhe."],

    ["a2-arbeit", "die", "Stelle", "-n", "el puesto, la vacante", "Ich habe eine neue Stelle in einem Hotel gefunden."],
    ["a2-arbeit", "der", "Lebenslauf", "¨-e", "el currículum, la hoja de vida", "Bitte schicken Sie uns Ihren Lebenslauf."],
    ["a2-arbeit", "das", "Gehalt", "¨-er", "el sueldo, el salario", "Das Gehalt kommt immer am Monatsende."],
    ["a2-arbeit", "", "verdienen", "hat verdient", "ganar (dinero)", "In diesem Job verdient man nicht so viel."],
    ["a2-arbeit", "die", "Erfahrung", "-en", "la experiencia", "Haben Sie Erfahrung im Verkauf?"],
    ["a2-arbeit", "die", "Schicht", "-en", "el turno", "Meine Schicht beginnt um sechs Uhr morgens."],
    ["a2-arbeit", "die", "Teilzeit", "–", "el medio tiempo (lo contrario: die Vollzeit)", "Meine Frau arbeitet in Teilzeit, nur vormittags."],
    ["a2-arbeit", "der", "Mitarbeiter", "-", "el empleado, el trabajador", "Die Firma hat fünfzig Mitarbeiter."],
    ["a2-arbeit", "der", "Kunde", "-n", "el cliente", "Der Kunde wartet schon seit zehn Minuten."],
    ["a2-arbeit", "die", "Pause", "-n", "el descanso, la pausa", "In der Pause trinken wir einen Kaffee."],
    ["a2-arbeit", "die", "Überstunde", "-n", "la hora extra", "Diese Woche habe ich viele Überstunden gemacht."],
    ["a2-arbeit", "", "sich krankmelden", "hat sich krankgemeldet", "reportarse enfermo (avisar al trabajo)", "Ich habe mich heute Morgen krankgemeldet."],
    ["a2-arbeit", "", "kündigen", "hat gekündigt", "renunciar; despedir (terminar un contrato)", "Sie hat gekündigt, weil sie nach Hamburg zieht."],
    ["a2-arbeit", "der", "Vertrag", "¨-e", "el contrato", "Der Vertrag ist erst einmal für ein Jahr."],
    ["a2-arbeit", "", "selbstständig", "", "independiente, por cuenta propia", "Mein Onkel ist selbstständig, er hat eine Werkstatt."],
    ["a2-arbeit", "", "arbeitslos", "", "desempleado", "Nach dem Studium war er drei Monate arbeitslos."],
    ["a2-arbeit", "die", "Kantine", "-n", "el comedor de la empresa", "Mittags essen wir in der Kantine."],
    ["a2-arbeit", "", "erledigen", "hat erledigt", "hacer, resolver (una tarea)", "Ich muss heute noch viel erledigen."],
    ["a2-arbeit", "der", "Drucker", "-", "la impresora", "Der Drucker hat schon wieder kein Papier."],
    ["a2-arbeit", "die", "Aufgabe", "-n", "la tarea, la función", "Was sind Ihre Aufgaben in der Firma?"],

    ["a2-gesundheit", "die", "Krankenkasse", "-n", "el seguro médico (la aseguradora)", "In Deutschland braucht jeder eine Krankenkasse."],
    ["a2-gesundheit", "die", "Praxis", "Praxen", "el consultorio", "Die Praxis ist mittwochnachmittags geschlossen."],
    ["a2-gesundheit", "das", "Wartezimmer", "-", "la sala de espera", "Bitte nehmen Sie im Wartezimmer Platz."],
    ["a2-gesundheit", "die", "Sprechstunde", "-n", "el horario de consulta", "Die Sprechstunde ist von acht bis zwölf Uhr."],
    ["a2-gesundheit", "der", "Schmerz", "-en", "el dolor", "Ich habe starke Schmerzen im Knie."],
    ["a2-gesundheit", "", "wehtun", "hat wehgetan", "doler (+ dativo: mir tut … weh)", "Mein Rücken tut seit gestern weh."],
    ["a2-gesundheit", "der", "Husten", "–", "la tos", "Gegen Husten trinke ich Tee mit Honig."],
    ["a2-gesundheit", "der", "Schnupfen", "–", "la nariz tapada, el moqueo", "Ich habe Schnupfen und brauche Taschentücher."],
    ["a2-gesundheit", "die", "Grippe", "-n", "la gripe (influenza)", "Er liegt mit Grippe im Bett."],
    ["a2-gesundheit", "das", "Medikament", "-e", "el medicamento", "Dieses Medikament bekommen Sie nur mit Rezept."],
    ["a2-gesundheit", "", "krankschreiben", "hat krankgeschrieben", "darle a alguien licencia médica", "Die Ärztin hat mich drei Tage krankgeschrieben."],
    ["a2-gesundheit", "", "untersuchen", "hat untersucht", "examinar, revisar (el médico)", "Der Arzt untersucht mein Bein."],
    ["a2-gesundheit", "", "sich verletzen", "hat sich verletzt", "lastimarse, herirse", "Ich habe mich beim Fußball verletzt."],
    ["a2-gesundheit", "der", "Unfall", "¨-e", "el accidente", "Zum Glück war der Unfall nicht schlimm."],
    ["a2-gesundheit", "das", "Krankenhaus", "¨-er", "el hospital", "Nach dem Unfall war er zwei Tage im Krankenhaus."],
    ["a2-gesundheit", "der", "Krankenwagen", "-", "la ambulancia", "Schnell, ruf einen Krankenwagen!"],
    ["a2-gesundheit", "das", "Pflaster", "-", "la curita", "Hast du ein Pflaster für mich?"],
    ["a2-gesundheit", "die", "Allergie", "-n", "la alergia", "Ich habe eine Allergie gegen Nüsse."],
    ["a2-gesundheit", "", "sich ausruhen", "hat sich ausgeruht", "descansar", "Sie müssen sich ein paar Tage ausruhen."],
    ["a2-gesundheit", "die", "Gesundheit", "–", "la salud («¡Gesundheit!» = ¡salud!, cuando alguien estornuda)", "Gesundheit ist wichtiger als Geld."],

    ["a2-reisen", "", "reisen", "ist gereist", "viajar", "Letztes Jahr bin ich durch Spanien gereist."],
    ["a2-reisen", "das", "Gepäck", "–", "el equipaje", "Wie viel Gepäck darf ich mitnehmen?"],
    ["a2-reisen", "der", "Reisepass", "¨-e", "el pasaporte", "Vergiss deinen Reisepass nicht!"],
    ["a2-reisen", "das", "Visum", "Visa", "la visa", "Für Deutschland brauche ich ein Visum."],
    ["a2-reisen", "der", "Flug", "¨-e", "el vuelo", "Der Flug nach Frankfurt dauert ungefähr neun Stunden."],
    ["a2-reisen", "die", "Ankunft", "¨-e", "la llegada", "Die Ankunft ist um zwanzig vor acht."],
    ["a2-reisen", "", "buchen", "hat gebucht", "reservar (vuelo, hotel, viaje)", "Ich habe den Flug im Internet gebucht."],
    ["a2-reisen", "die", "Unterkunft", "¨-e", "el alojamiento", "Wir suchen eine günstige Unterkunft in Berlin."],
    ["a2-reisen", "das", "Einzelzimmer", "-", "la habitación individual (la doble: das Doppelzimmer)", "Ich hätte gern ein Einzelzimmer für zwei Nächte."],
    ["a2-reisen", "die", "Sehenswürdigkeit", "-en", "el lugar turístico, el monumento", "Der Kölner Dom ist eine berühmte Sehenswürdigkeit."],
    ["a2-reisen", "", "besichtigen", "hat besichtigt", "visitar (un lugar, un apartamento)", "Morgen besichtigen wir das Schloss."],
    ["a2-reisen", "der", "Stau", "-s", "el tapón, el atasco", "Ich komme später, ich stehe im Stau."],
    ["a2-reisen", "die", "Tankstelle", "-n", "la bomba de gasolina, la gasolinera", "An der Tankstelle kann man auch Brötchen kaufen."],
    ["a2-reisen", "der", "Führerschein", "-e", "la licencia de conducir", "Ich mache gerade den Führerschein."],
    ["a2-reisen", "", "abfahren", "ist abgefahren", "salir, partir (un vehículo)", "Der Bus fährt in fünf Minuten ab."],
    ["a2-reisen", "", "verpassen", "hat verpasst", "perder (el tren, el autobús)", "Ich habe den letzten Zug verpasst."],
    ["a2-reisen", "die", "Durchsage", "-n", "el aviso por altavoz", "Hast du die Durchsage verstanden?"],
    ["a2-reisen", "der", "Anschluss", "¨-e", "la conexión (de tren o de vuelo)", "Wegen der Verspätung habe ich meinen Anschluss verpasst."],
    ["a2-reisen", "", "aussteigen", "ist ausgestiegen", "bajarse (de un vehículo)", "Wir müssen an der nächsten Haltestelle aussteigen."],
    ["a2-reisen", "das", "Ausland", "–", "el extranjero", "Ich war noch nie im Ausland."],

    ["a2-feste", "der", "Gastgeber", "-", "el anfitrión", "Der Gastgeber begrüßt alle Gäste an der Tür."],
    ["a2-feste", "die", "Feier", "-n", "la celebración, la fiesta", "Die Feier beginnt um acht Uhr."],
    ["a2-feste", "die", "Einladung", "-en", "la invitación", "Ich habe eine Einladung zur Hochzeit bekommen."],
    ["a2-feste", "", "einladen", "hat eingeladen", "invitar", "Wir haben alle Nachbarn eingeladen."],
    ["a2-feste", "der", "Gast", "¨-e", "el invitado, el huésped", "Wie viele Gäste kommen zur Party?"],
    ["a2-feste", "", "gratulieren", "hat gratuliert", "felicitar (+ dativo)", "Ich gratuliere dir zum Geburtstag!"],
    ["a2-feste", "der", "Glückwunsch", "¨-e", "la felicitación", "Herzlichen Glückwunsch zur Hochzeit!"],
    ["a2-feste", "die", "Hochzeit", "-en", "la boda", "Die Hochzeit ist im Juni am See."],
    ["a2-feste", "das", "Fest", "-e", "la fiesta, la celebración", "Weihnachten ist ein Fest für die ganze Familie."],
    ["a2-feste", "der", "Karneval", "-s", "el carnaval", "Im Februar ist in Köln Karneval."],
    ["a2-feste", "das", "Kostüm", "-e", "el disfraz", "Was für ein Kostüm trägst du an Karneval?"],
    ["a2-feste", "", "sich verkleiden", "hat sich verkleidet", "disfrazarse", "Ich verkleide mich als Pirat."],
    ["a2-feste", "die", "Überraschung", "-en", "la sorpresa", "Die Party ist eine Überraschung, sag ihr nichts!"],
    ["a2-feste", "der", "Blumenstrauß", "¨-e", "el ramo de flores", "Wir bringen der Gastgeberin einen Blumenstrauß mit."],
    ["a2-feste", "der", "Feiertag", "-e", "el día feriado", "Am ersten Mai ist Feiertag, da sind die Geschäfte zu."],
    ["a2-feste", "die", "Torte", "-n", "la torta, el bizcocho con crema", "Wer hat die Torte gebacken? Sie ist super!"],
    ["a2-feste", "", "einpacken", "hat eingepackt", "envolver (un regalo); empacar", "Können Sie das Geschenk bitte einpacken?"],
    ["a2-feste", "der", "Gutschein", "-e", "el vale, la tarjeta de regalo", "Ich schenke ihr einen Gutschein für ein Restaurant."],
    ["a2-feste", "", "anstoßen", "hat angestoßen", "brindar", "Lasst uns auf Lenas Geburtstag anstoßen!"],
    ["a2-feste", "die", "Stimmung", "-en", "el ambiente", "Die Stimmung auf der Party war super."],

    ["a2-einkaufen", "das", "Geschäft", "-e", "la tienda, el negocio", "Die Geschäfte schließen um acht Uhr abends."],
    ["a2-einkaufen", "das", "Kaufhaus", "¨-er", "la tienda por departamentos", "Im Kaufhaus gibt es Kleidung, Spielzeug und Elektronik."],
    ["a2-einkaufen", "das", "Einkaufszentrum", "Einkaufszentren", "el centro comercial, la plaza", "Am Samstag ist das Einkaufszentrum sehr voll."],
    ["a2-einkaufen", "die", "Kasse", "-n", "la caja", "Bitte zahlen Sie vorne an der Kasse."],
    ["a2-einkaufen", "das", "Angebot", "-e", "la oferta", "Die Schuhe sind diese Woche im Angebot."],
    ["a2-einkaufen", "der", "Preis", "-e", "el precio", "Der Preis ist mir zu hoch."],
    ["a2-einkaufen", "", "günstig", "", "barato, a buen precio", "Auf dem Flohmarkt kann man günstig einkaufen."],
    ["a2-einkaufen", "die", "Größe", "-n", "la talla", "Welche Größe haben Sie?"],
    ["a2-einkaufen", "", "anprobieren", "hat anprobiert", "probarse (ropa)", "Kann ich die Jacke anprobieren?"],
    ["a2-einkaufen", "die", "Umkleidekabine", "-n", "el probador", "Die Umkleidekabinen sind hinten links."],
    ["a2-einkaufen", "", "passen", "hat gepasst", "quedar bien de talla (+ dativo)", "Die Hose passt mir nicht, sie ist zu klein."],
    ["a2-einkaufen", "", "stehen", "hat gestanden", "quedarle bien a alguien, verse bien (+ dativo)", "Die Farbe steht dir super!"],
    ["a2-einkaufen", "", "umtauschen", "hat umgetauscht", "cambiar (un producto en la tienda)", "Kann ich das Hemd umtauschen?"],
    ["a2-einkaufen", "die", "Quittung", "-en", "el recibo", "Ohne Quittung können wir das leider nicht umtauschen."],
    ["a2-einkaufen", "der", "Rock", "¨-e", "la falda", "Der Rock ist mir zu kurz."],
    ["a2-einkaufen", "der", "Anzug", "¨-e", "el traje (saco y pantalón)", "Für die Hochzeit kaufe ich mir einen Anzug."],
    ["a2-einkaufen", "die", "Socke", "-n", "la media, el calcetín", "Ich brauche warme Socken für den Winter."],
    ["a2-einkaufen", "die", "Brille", "-n", "los lentes, las gafas (¡en singular!)", "Ich kann meine Brille nicht finden."],
    ["a2-einkaufen", "", "bequem", "", "cómodo", "Die Schuhe sind sehr bequem."],
    ["a2-einkaufen", "", "eng", "", "apretado, estrecho", "Die Jacke ist mir zu eng."],

    ["a2-freizeit", "die", "Freizeit", "–", "el tiempo libre", "In meiner Freizeit spiele ich Gitarre."],
    ["a2-freizeit", "der", "Verein", "-e", "el club, la asociación", "Ich spiele Fußball in einem Verein."],
    ["a2-freizeit", "das", "Mitglied", "-er", "el miembro, el socio", "Seit Mai bin ich Mitglied im Fitnessstudio."],
    ["a2-freizeit", "das", "Konzert", "-e", "el concierto", "Am Samstag gehen wir in ein Konzert."],
    ["a2-freizeit", "die", "Ausstellung", "-en", "la exposición", "Die Ausstellung im Museum ist sehr interessant."],
    ["a2-freizeit", "der", "Eintritt", "-e", "la entrada (lo que se paga)", "Der Eintritt ist für Studenten frei."],
    ["a2-freizeit", "", "spazieren gehen", "ist spazieren gegangen", "pasear, dar una vuelta", "Am Sonntag sind wir im Park spazieren gegangen."],
    ["a2-freizeit", "die", "Mannschaft", "-en", "el equipo (deportivo)", "Welche Mannschaft hat gewonnen?"],
    ["a2-freizeit", "", "gewinnen", "hat gewonnen", "ganar (un juego, un premio)", "Unsere Mannschaft hat zwei zu eins gewonnen."],
    ["a2-freizeit", "", "verlieren", "hat verloren", "perder", "Ich habe meinen Schlüssel verloren."],
    ["a2-freizeit", "die", "Verabredung", "-en", "la cita con amigos (la cita formal es der Termin)", "Heute Abend habe ich eine Verabredung mit Lisa."],
    ["a2-freizeit", "", "sich verabreden", "hat sich verabredet", "quedar (con alguien)", "Wir haben uns für Freitag verabredet."],
    ["a2-freizeit", "die", "Nachricht", "-en", "el mensaje; en plural, las noticias", "Ich schicke dir gleich eine Nachricht."],
    ["a2-freizeit", "die", "Zeitschrift", "-en", "la revista", "Beim Arzt lese ich immer Zeitschriften."],
    ["a2-freizeit", "die", "Sendung", "-en", "el programa (de televisión o radio)", "Die Sendung beginnt um acht Uhr."],
    ["a2-freizeit", "die", "Serie", "-n", "la serie", "Ich schaue gerade eine spanische Serie."],
    ["a2-freizeit", "der", "Bildschirm", "-e", "la pantalla", "Der Bildschirm von meinem Handy ist kaputt."],
    ["a2-freizeit", "", "herunterladen", "hat heruntergeladen", "descargar", "Du kannst die App kostenlos herunterladen."],
    ["a2-freizeit", "das", "Passwort", "¨-er", "la contraseña", "Ich habe mein Passwort vergessen."],
    ["a2-freizeit", "das", "Instrument", "-e", "el instrumento", "Spielst du ein Instrument?"],

    ["a2-schule", "die", "Grundschule", "-n", "la escuela primaria", "Meine Tochter geht in die Grundschule."],
    ["a2-schule", "das", "Gymnasium", "Gymnasien", "el liceo, la secundaria académica (¡no «gimnasio»!)", "Nach der Grundschule geht er aufs Gymnasium."],
    ["a2-schule", "die", "Klasse", "-n", "el grado, el curso; el salón de clase", "Mein Sohn ist in der dritten Klasse."],
    ["a2-schule", "das", "Fach", "¨-er", "la materia, la asignatura", "Mein Lieblingsfach war Mathe."],
    ["a2-schule", "die", "Note", "-n", "la calificación (1 es la mejor, 6 la peor)", "In Deutschland ist eine Eins die beste Note."],
    ["a2-schule", "das", "Zeugnis", "-se", "el boletín de notas, el certificado", "Vor den Sommerferien gibt es Zeugnisse."],
    ["a2-schule", "der", "Abschluss", "¨-e", "el título, la graduación", "Ohne Abschluss ist es schwer, eine gute Stelle zu finden."],
    ["a2-schule", "die", "Ausbildung", "-en", "la formación profesional", "Sie macht eine Ausbildung als Köchin."],
    ["a2-schule", "der", "Azubi", "-s", "el aprendiz (en formación profesional)", "Unser Azubi lernt drei Tage im Betrieb und zwei Tage in der Berufsschule."],
    ["a2-schule", "das", "Studium", "Studien", "la carrera universitaria", "Nach dem Studium möchte ich in Deutschland arbeiten."],
    ["a2-schule", "der", "Schüler", "-", "el alumno (de escuela)", "Die Schüler schreiben heute einen Test."],
    ["a2-schule", "die", "Ferien", "pl", "las vacaciones (escolares)", "In den Ferien fahren wir ans Meer."],
    ["a2-schule", "", "bestehen", "hat bestanden", "aprobar (un examen)", "Ich habe die Prüfung bestanden!"],
    ["a2-schule", "", "durchfallen", "ist durchgefallen", "reprobar, quemarse (en un examen)", "Er ist in der Prüfung leider durchgefallen."],
    ["a2-schule", "", "wiederholen", "hat wiederholt", "repetir, repasar", "Vor der Prüfung wiederhole ich die Vokabeln."],
    ["a2-schule", "der", "Unterricht", "–", "las clases, la enseñanza", "Der Unterricht beginnt um acht Uhr."],
    ["a2-schule", "der", "Stundenplan", "¨-e", "el horario de clases", "Auf meinem Stundenplan steht heute zweimal Mathe."],
    ["a2-schule", "", "erklären", "hat erklärt", "explicar", "Kannst du mir die Aufgabe erklären?"],
    ["a2-schule", "", "üben", "hat geübt", "practicar", "Ich übe jeden Tag zwanzig Minuten Deutsch."],
    ["a2-schule", "die", "Bibliothek", "-en", "la biblioteca", "In der Bibliothek kann man in Ruhe lernen."],

    ["a2-natur", "der", "Wald", "¨-er", "el bosque", "Hinter unserem Haus beginnt der Wald."],
    ["a2-natur", "der", "Berg", "-e", "la montaña", "Am Wochenende fahren wir in die Berge."],
    ["a2-natur", "der", "See", "-n", "el lago (¡die See es el mar!)", "Im Sommer schwimmen wir im See."],
    ["a2-natur", "das", "Meer", "-e", "el mar", "Ich vermisse das Meer."],
    ["a2-natur", "der", "Fluss", "¨-e", "el río", "Der Rhein ist ein langer Fluss."],
    ["a2-natur", "der", "Strand", "¨-e", "la playa", "Der Strand in Punta Cana ist wunderschön."],
    ["a2-natur", "die", "Insel", "-n", "la isla", "Die Dominikanische Republik liegt auf einer Insel."],
    ["a2-natur", "der", "Himmel", "-", "el cielo", "Heute ist der Himmel ganz blau."],
    ["a2-natur", "die", "Wolke", "-n", "la nube", "Schau mal, die dunklen Wolken! Gleich regnet es."],
    ["a2-natur", "das", "Gewitter", "-", "la tormenta eléctrica", "Bei Gewitter bleiben wir lieber zu Hause."],
    ["a2-natur", "die", "Temperatur", "-en", "la temperatura", "Heute Nacht fallen die Temperaturen unter null Grad."],
    ["a2-natur", "", "sonnig", "", "soleado", "Morgen wird es sonnig und warm."],
    ["a2-natur", "", "bewölkt", "", "nublado", "Heute ist es bewölkt, aber trocken."],
    ["a2-natur", "", "regnen", "hat geregnet", "llover", "Gestern hat es den ganzen Tag geregnet."],
    ["a2-natur", "die", "Pflanze", "-n", "la planta", "Meine Pflanzen brauchen mehr Licht."],
    ["a2-natur", "das", "Tier", "-e", "el animal", "Welches Tier magst du am liebsten?"],
    ["a2-natur", "die", "Umwelt", "–", "el medio ambiente", "Fahrradfahren ist gut für die Umwelt."],
    ["a2-natur", "", "wandern", "ist gewandert", "hacer senderismo, caminar por el monte", "Letzten Sommer sind wir im Harz gewandert."],
    ["a2-natur", "der", "Ausflug", "¨-e", "la excursión, el paseo", "Am Sonntag machen wir einen Ausflug an den See."],
    ["a2-natur", "der", "Wetterbericht", "-e", "el pronóstico del tiempo", "Im Wetterbericht haben sie Schnee angesagt."],

    ["a2-gefuehle", "das", "Gefühl", "-e", "el sentimiento, la sensación", "Ich habe ein gutes Gefühl bei der Prüfung."],
    ["a2-gefuehle", "", "zufrieden", "", "satisfecho, contento", "Mit meiner neuen Wohnung bin ich sehr zufrieden."],
    ["a2-gefuehle", "", "traurig", "", "triste", "Warum bist du so traurig?"],
    ["a2-gefuehle", "", "sauer", "", "bravo, enojado (coloquial; también «ácido»)", "Bist du sauer auf mich?"],
    ["a2-gefuehle", "", "nervös", "", "nervioso", "Vor einer Prüfung bin ich immer nervös."],
    ["a2-gefuehle", "die", "Angst", "¨-e", "el miedo", "Ich habe Angst vor großen Hunden."],
    ["a2-gefuehle", "", "sich freuen", "hat sich gefreut", "alegrarse (auf: esperar con ganas; über: por algo que ya pasó)", "Ich freue mich über dein Geschenk."],
    ["a2-gefuehle", "", "sich ärgern", "hat sich geärgert", "enojarse, molestarse", "Ich ärgere mich über den Stau."],
    ["a2-gefuehle", "", "sich verlieben", "hat sich verliebt", "enamorarse", "Sie hat sich in einen Kollegen verliebt."],
    ["a2-gefuehle", "", "heiraten", "hat geheiratet", "casarse (con alguien: ¡sin «mit»!)", "Mein Bruder heiratet im Sommer seine Freundin."],
    ["a2-gefuehle", "", "sich trennen", "hat sich getrennt", "separarse, terminar (una relación)", "Meine Eltern haben sich vor zwei Jahren getrennt."],
    ["a2-gefuehle", "der", "Streit", "–", "la pelea, la discusión", "Wir hatten Streit wegen des Geldes."],
    ["a2-gefuehle", "", "sich streiten", "hat sich gestritten", "pelear, discutir", "Die Kinder streiten sich schon wieder."],
    ["a2-gefuehle", "die", "Beziehung", "-en", "la relación", "Sie hat eine gute Beziehung zu ihren Eltern."],
    ["a2-gefuehle", "der", "Partner", "-", "la pareja (hombre), el compañero", "Kommt dein Partner auch zur Feier?"],
    ["a2-gefuehle", "", "vermissen", "hat vermisst", "extrañar", "Ich vermisse meine Familie sehr."],
    ["a2-gefuehle", "", "sich entschuldigen", "hat sich entschuldigt", "disculparse, pedir perdón", "Ich möchte mich für gestern entschuldigen."],
    ["a2-gefuehle", "die", "Laune", "-n", "el humor, el ánimo", "Heute hast du aber gute Laune!"],
    ["a2-gefuehle", "", "stolz", "", "orgulloso", "Meine Mutter ist stolz auf mich."],
    ["a2-gefuehle", "", "enttäuscht", "", "decepcionado", "Er war enttäuscht, weil niemand gekommen ist."],

    ["a2-behoerden", "das", "Amt", "¨-er", "la oficina pública", "Morgen muss ich aufs Amt."],
    ["a2-behoerden", "das", "Bürgeramt", "¨-er", "la oficina de registro ciudadano", "Im Bürgeramt melde ich meine neue Adresse an."],
    ["a2-behoerden", "das", "Formular", "-e", "el formulario", "Bitte füllen Sie dieses Formular aus."],
    ["a2-behoerden", "", "ausfüllen", "hat ausgefüllt", "llenar (un formulario)", "Ich habe das Formular schon ausgefüllt."],
    ["a2-behoerden", "", "unterschreiben", "hat unterschrieben", "firmar", "Unterschreiben Sie bitte hier unten."],
    ["a2-behoerden", "", "sich anmelden", "hat sich angemeldet", "registrarse, inscribirse", "Nach dem Umzug muss man sich innerhalb von zwei Wochen anmelden."],
    ["a2-behoerden", "der", "Ausweis", "-e", "el documento de identidad, la cédula", "Haben Sie Ihren Ausweis dabei?"],
    ["a2-behoerden", "die", "Wartenummer", "-n", "el número de turno", "Ziehen Sie bitte eine Wartenummer."],
    ["a2-behoerden", "das", "Konto", "Konten", "la cuenta de banco", "Ich möchte ein Konto eröffnen."],
    ["a2-behoerden", "die", "Bank", "-en", "el banco (el banco para sentarse también es die Bank, pero en plural Bänke)", "Die Bank ist samstags geschlossen."],
    ["a2-behoerden", "", "überweisen", "hat überwiesen", "transferir (dinero)", "Ich überweise dir das Geld morgen."],
    ["a2-behoerden", "", "abheben", "hat abgehoben", "sacar, retirar (dinero)", "Ich muss noch Geld abheben."],
    ["a2-behoerden", "der", "Geldautomat", "-en", "el cajero automático", "Gibt es hier in der Nähe einen Geldautomaten?"],
    ["a2-behoerden", "die", "Gebühr", "-en", "la comisión, la tarifa", "Für die Karte bezahlt man keine Gebühr."],
    ["a2-behoerden", "das", "Bargeld", "–", "el efectivo", "Hast du Bargeld dabei? Der Kiosk nimmt keine Karten."],
    ["a2-behoerden", "die", "Briefmarke", "-n", "la estampilla, el sello", "Ich brauche eine Briefmarke für die Dominikanische Republik."],
    ["a2-behoerden", "der", "Antrag", "¨-e", "la solicitud (de un trámite)", "Den Antrag können Sie auch online stellen."],
    ["a2-behoerden", "die", "Unterlagen", "pl", "los documentos, los papeles", "Bringen Sie bitte alle Unterlagen mit."],
    ["a2-behoerden", "", "gültig", "", "válido, vigente", "Ihr Reisepass ist nur noch drei Monate gültig."],
    ["a2-behoerden", "die", "Versicherung", "-en", "el seguro", "Die Versicherung bezahlt den Schaden am Auto."],

    ["a2-redemittel", "", "Ich finde, dass …", "", "Me parece que… / Creo que…", "Ich finde, dass die Wohnung zu teuer ist."],
    ["a2-redemittel", "", "Meiner Meinung nach …", "", "En mi opinión… (¡el verbo va justo después!)", "Meiner Meinung nach ist der Zug besser als das Auto."],
    ["a2-redemittel", "", "Da hast du recht.", "", "Ahí tienes razón.", "Der Bus ist schneller. – Da hast du recht."],
    ["a2-redemittel", "", "Das sehe ich anders.", "", "Yo lo veo de otra manera.", "Deutsch ist zu schwer? Das sehe ich anders!"],
    ["a2-redemittel", "", "Ich bin dafür.", "", "Estoy a favor.", "Ein Ausflug an den See? Ich bin dafür!"],
    ["a2-redemittel", "", "Ich bin mir nicht sicher.", "", "No estoy seguro.", "Ich bin mir nicht sicher, ob das Geschäft heute offen ist."],
    ["a2-redemittel", "", "Wie wäre es mit …?", "", "¿Qué tal…? / ¿Qué te parece…? (para proponer)", "Wie wäre es mit Samstag um zehn?"],
    ["a2-redemittel", "", "Da kann ich leider nicht.", "", "Ese día no puedo, lamentablemente.", "Am Montag? Da kann ich leider nicht, da arbeite ich."],
    ["a2-redemittel", "", "Das passt mir gut.", "", "Me viene bien.", "Um drei Uhr? Ja, das passt mir gut."],
    ["a2-redemittel", "", "Lass uns doch …", "", "¿Y si…? / Vamos a… (para proponer algo entre amigos)", "Lass uns doch zusammen ein Geschenk kaufen!"],
    ["a2-redemittel", "", "Einverstanden!", "", "¡De acuerdo!", "Wir treffen uns um acht am Bahnhof. – Einverstanden!"],
    ["a2-redemittel", "", "Gute Idee, aber …", "", "Buena idea, pero…", "Gute Idee, aber am Sonntag sind die Geschäfte zu."],
    ["a2-redemittel", "", "Wer kümmert sich um …?", "", "¿Quién se encarga de…?", "Wer kümmert sich um die Getränke?"],
    ["a2-redemittel", "", "Sehr geehrte Damen und Herren,", "", "Estimados señores: (correo formal, sin nombre)", "Sehr geehrte Damen und Herren, ich interessiere mich für Ihren Deutschkurs."],
    ["a2-redemittel", "", "Sehr geehrte Frau … / Sehr geehrter Herr …,", "", "Estimada señora… / Estimado señor… (¡con Herr es «geehrter»!)", "Sehr geehrter Herr Krause, vielen Dank für Ihre schnelle Antwort."],
    ["a2-redemittel", "", "Mit freundlichen Grüßen", "", "Atentamente (despedida formal)", "Ich freue mich auf Ihre Antwort. Mit freundlichen Grüßen"],
    ["a2-redemittel", "", "Viele Grüße / Liebe Grüße", "", "Saludos / Un abrazo (despedida informal)", "Bis bald und liebe Grüße!"],
    ["a2-redemittel", "", "Vielen Dank für Ihre E-Mail.", "", "Muchas gracias por su correo.", "Vielen Dank für Ihre E-Mail. Am Freitag komme ich gern."],
    ["a2-redemittel", "", "Ich schreibe Ihnen, weil …", "", "Le escribo porque…", "Ich schreibe Ihnen, weil meine Heizung nicht funktioniert."],
    ["a2-redemittel", "", "Könnten Sie mir bitte sagen, …?", "", "¿Podría decirme…?", "Könnten Sie mir bitte sagen, wann der Kurs beginnt?"],
    ["a2-redemittel", "", "Ich freue mich auf Ihre Antwort.", "", "Quedo atento a su respuesta.", "Ich freue mich auf Ihre Antwort und wünsche Ihnen ein schönes Wochenende."],
    ["a2-redemittel", "", "Entschuldigung, dass ich so spät antworte.", "", "Perdón por responder tan tarde.", "Entschuldigung, dass ich so spät antworte, ich war im Urlaub."],
    ["a2-redemittel", "", "Leider kann ich nicht kommen, weil …", "", "Lamentablemente no puedo ir porque…", "Leider kann ich nicht kommen, weil ich arbeiten muss."],
    ["a2-redemittel", "", "Hier spricht …", "", "Habla… (al teléfono)", "Guten Tag, hier spricht Carlos Pérez."],
    ["a2-redemittel", "", "Ich rufe wegen … an.", "", "Llamo por… (motivo de la llamada)", "Ich rufe wegen der Wohnungsanzeige an."],
    ["a2-redemittel", "", "Kann ich eine Nachricht hinterlassen?", "", "¿Puedo dejar un mensaje?", "Frau Wolf ist nicht da? Kann ich eine Nachricht hinterlassen?"],
    ["a2-redemittel", "", "Das freut mich!", "", "¡Me alegro!", "Du hast die Prüfung bestanden? Das freut mich!"],
    ["a2-redemittel", "", "Schade, dass …", "", "Qué pena que…", "Schade, dass du nicht kommen kannst."],
    ["a2-redemittel", "", "Alles Gute zum Geburtstag!", "", "¡Feliz cumpleaños!", "Alles Gute zum Geburtstag, Lena!"],
    ["a2-redemittel", "", "Viel Erfolg!", "", "¡Mucho éxito!", "Morgen hast du die Prüfung? Viel Erfolg!"]
  );

  DE.grammar.push(
    {
      id: "a2-adjektiv", level: "A2", title: "Terminaciones del adjetivo", de: "Adjektivdeklination",
      rule: "Delante de un sustantivo, el adjetivo lleva terminación. Con der/die/das: -e en nominativo singular (y en acusativo femenino y neutro) y -en en todo lo demás: der neue Job, den neuen Job, mit dem neuen Job. Con ein/kein/mein, el adjetivo muestra el género cuando el artículo no lo hace: ein neuer Job, ein neues Handy, eine neue Wohnung; en dativo y en plural, siempre -en.",
      trap: "En español el adjetivo va detrás y solo cambia por género y número (una casa vieja). En alemán va delante y cambia también por caso. Y detrás del verbo sein no lleva nada: «Das Haus ist alt», nunca «ist alte».",
      ex: ["Ich suche eine günstige Wohnung.", "Der neue Kollege kommt aus Spanien.", "Mit dem alten Fahrrad fahre ich zur Arbeit."],
      items: [
        { t: "mc", q: "Ich suche eine ___ Wohnung.", o: ["günstiger", "günstige", "günstigen"], a: 1, why: "eine + femenino en acusativo → -e: eine günstige Wohnung." },
        { t: "mc", q: "Wir haben einen ___ Kühlschrank gekauft.", o: ["neues", "neuen", "neuer"], a: 1, why: "einen (acusativo masculino) → -en: einen neuen Kühlschrank." },
        { t: "mc", q: "Das ist ein sehr ___ Hotel.", o: ["schöne", "schönen", "schönes"], a: 2, why: "«ein» no muestra el neutro, así que lo muestra el adjetivo: ein schönes Hotel." },
        { t: "type", q: "Der ___ Kollege kommt aus Spanien. (neu)", a: ["neue"], why: "der + nominativo singular → -e." },
        { t: "type", q: "Mit dem ___ Fahrrad fahre ich zur Arbeit. (alt)", a: ["alten"], why: "Dativo (mit dem) → siempre -en." },
        { t: "type", q: "Mein ___ Bruder wohnt in Madrid. (groß)", a: ["großer"], why: "mein + masculino en nominativo: el artículo no muestra el género, el adjetivo sí → -er." },
        { t: "type", q: "Wir wohnen in einer ___ Straße. (ruhig)", a: ["ruhigen"], why: "Dativo (in einer) → -en." },
        { t: "type", q: "Ich habe die ___ Schuhe gekauft. (rot)", a: ["roten"], why: "Plural con artículo definido → -en." },
        { t: "mc", q: "Elige la frase correcta:", o: ["Die Wohnung ist helle.", "Die Wohnung ist hell.", "Die Wohnung ist hellen."], a: 1, why: "Detrás de sein el adjetivo no lleva terminación." },
        { t: "order", w: ["Wir", "haben", "einen", "großen", "Balkon."], es: "Tenemos un balcón grande." }
      ]
    },
    {
      id: "a2-reflexiv", level: "A2", title: "Verbos reflexivos", de: "Reflexive Verben",
      rule: "Muchos verbos llevan pronombre reflexivo, como en español: ich freue mich, du freust dich, er/sie/es freut sich, wir freuen uns, ihr freut euch, sie/Sie freuen sich. El pronombre va justo después del verbo conjugado (o después del sujeto, si el sujeto va detrás del verbo). Si ya hay un objeto directo, el reflexivo pasa a dativo: Ich wasche mir die Hände. En Perfekt usan haben: Ich habe mich verletzt.",
      trap: "No coinciden siempre con el español: «sich beeilen» (apurarse) y «sich ausruhen» (descansar) son reflexivos, pero «aufstehen» (levantarse) NO: «Ich stehe auf», nunca «Ich stehe mich auf». Y para er, sie, es y Sie el reflexivo es siempre «sich».",
      ex: ["Ich freue mich auf das Wochenende.", "Wir treffen uns um acht.", "Hast du dich verletzt?"],
      items: [
        { t: "mc", q: "Ich freue ___ auf den Urlaub.", o: ["mich", "mir", "sich"], a: 0, why: "ich → mich." },
        { t: "mc", q: "Beeil ___, der Bus kommt!", o: ["sich", "dich", "dir"], a: 1, why: "Imperativo de du → dich." },
        { t: "type", q: "Wir treffen ___ um acht vor dem Kino.", a: ["uns"], why: "wir → uns." },
        { t: "type", q: "Meine Schwester ärgert ___ über den Stau.", a: ["sich"], why: "er/sie/es → sich." },
        { t: "type", q: "Habt ihr ___ schon beim Bürgeramt angemeldet?", a: ["euch"], why: "ihr → euch." },
        { t: "type", q: "Ich habe ___ beim Fußball verletzt.", a: ["mich"], why: "Perfekt con haben; ich → mich." },
        { t: "type", q: "Ich putze ___ jeden Morgen die Zähne.", a: ["mir"], why: "Ya hay objeto directo (die Zähne), así que el reflexivo va en dativo: mir." },
        { t: "mc", q: "Elige la frase correcta:", o: ["Ich stehe mich um sieben auf.", "Ich mich stehe um sieben auf.", "Ich stehe um sieben auf."], a: 2, why: "aufstehen no es reflexivo en alemán." },
        { t: "order", w: ["Am Wochenende", "ruhe", "ich", "mich", "aus."], es: "El fin de semana descanso." },
        { t: "order", w: ["Wir", "haben", "uns", "im Deutschkurs", "kennengelernt."], es: "Nos conocimos en el curso de alemán." }
      ]
    },
    {
      id: "a2-praepverb", level: "A2", title: "Verbos con preposición (worauf? darauf)", de: "Verben mit Präpositionen",
      rule: "Muchos verbos llevan una preposición fija que se aprende junto con el verbo: warten auf + Akk., sich freuen auf (algo futuro) o über (algo que ya pasó) + Akk., denken an + Akk., sich interessieren für + Akk., träumen von + Dat., Angst haben vor + Dat. Para cosas se pregunta con wo(r) + preposición (Worauf wartest du?) y se responde con da(r) + preposición (Ich warte darauf). Para personas: Auf wen wartest du? – Auf meine Schwester.",
      trap: "La preposición casi nunca es la del español: esperar A alguien = warten AUF, pensar EN = denken AN, interesarse POR = sich interessieren FÜR. No traduzcas palabra por palabra: aprende el paquete completo «verbo + preposición + caso».",
      ex: ["Ich warte auf den Bus.", "Worauf freust du dich? – Auf die Ferien.", "Denkst du an das Geschenk? – Ja, ich denke daran."],
      items: [
        { t: "mc", q: "Ich warte schon zwanzig Minuten ___ den Bus.", o: ["für", "auf", "an"], a: 1, why: "warten auf + acusativo." },
        { t: "mc", q: "Ich interessiere mich ___ Fußball.", o: ["für", "über", "an"], a: 0, why: "sich interessieren für + acusativo." },
        { t: "type", q: "Ich denke oft ___ meine Familie. (pensar en)", a: ["an"], why: "denken an + acusativo." },
        { t: "type", q: "Wir freuen uns schon ___ die Ferien. (todavía no llegan)", a: ["auf"], why: "sich freuen auf = esperar con ganas algo que viene." },
        { t: "type", q: "Danke für das Geschenk, ich freue mich sehr ___! (por eso)", a: ["darüber"], why: "sich freuen über algo que ya tienes; para una cosa: da + r + über = darüber." },
        { t: "type", q: "___ wartest du? – Auf den Bus.", a: ["Worauf"], why: "Pregunta por una cosa: wo + r + auf = worauf." },
        { t: "mc", q: "Hast du Angst ___ der Prüfung?", o: ["von", "auf", "vor"], a: 2, why: "Angst haben vor + dativo." },
        { t: "mc", q: "Auf ___ wartest du? – Auf meine Schwester.", o: ["was", "wen", "wem"], a: 1, why: "Para personas no se usa wo(r)-: auf wen (acusativo)." },
        { t: "order", w: ["Ich", "träume", "von", "einer", "Reise", "nach Japan."], es: "Sueño con un viaje a Japón." },
        { t: "order", w: ["Interessierst", "du", "dich", "für", "Politik?"], es: "¿Te interesa la política?" }
      ]
    },
    {
      id: "a2-relativ", level: "A2", title: "Oraciones de relativo (der, den, das…)", de: "Relativsätze",
      rule: "Para describir a alguien o algo se usa un pronombre relativo que se parece al artículo: der, die, das y, en plural, die. El género lo da la palabra a la que se refiere; el caso, su función dentro de la oración de relativo: si hace la acción, nominativo (der); si la recibe, acusativo (solo cambia el masculino: den). Va una coma antes y el verbo conjugado se va al final.",
      trap: "En español todo es «que»: el hombre que vive aquí, el hombre que veo. En alemán cambia: der Mann, der hier wohnt / der Mann, den ich sehe. Pregúntate: ¿hace la acción (der) o la recibe (den)? Y no te dejes engañar por el artículo de delante: «einen Job, der mir Spaß macht».",
      ex: ["Das ist der Kollege, der aus Spanien kommt.", "Das ist der Kollege, den ich gestern getroffen habe.", "Die Wohnung, die wir besichtigt haben, ist zu teuer."],
      items: [
        { t: "mc", q: "Das ist der Mann, ___ neben uns wohnt.", o: ["den", "der", "die"], a: 1, why: "El hombre es el sujeto de «wohnt» → nominativo: der." },
        { t: "mc", q: "Das ist der Mann, ___ ich im Kurs kennengelernt habe.", o: ["den", "der", "dem"], a: 0, why: "El sujeto es ich; al hombre lo conocí → acusativo masculino: den." },
        { t: "mc", q: "Wie heißt die Serie, ___ du gerade schaust?", o: ["der", "den", "die"], a: 2, why: "die Serie, acusativo femenino → die (no cambia)." },
        { t: "type", q: "Das Hotel, ___ wir gebucht haben, liegt am Meer.", a: ["das", "welches"], why: "das Hotel, acusativo neutro → das." },
        { t: "type", q: "Der Bus, ___ nach Essen fährt, kommt gleich.", a: ["der", "welcher"], why: "El bus es el sujeto de «fährt» → der." },
        { t: "type", q: "Ich suche einen Job, ___ mir Spaß macht.", a: ["der", "welcher"], why: "El trabajo es el sujeto de «macht» → der, aunque delante diga «einen»." },
        { t: "type", q: "Die Leute, ___ ich auf der Party getroffen habe, waren sehr nett.", a: ["die", "welche"], why: "Plural → die." },
        { t: "type", q: "Hier ist der Schlüssel, ___ du gesucht hast.", a: ["den", "welchen"], why: "La llave la buscaste (la recibe) → acusativo masculino: den." },
        { t: "order", w: ["Das ist", "die Kollegin,", "die", "sehr gut", "Spanisch", "spricht."], es: "Esa es la colega que habla muy bien español." },
        { t: "order", w: ["Der Pullover,", "den", "du", "mir", "geschenkt hast,", "ist super."], es: "El suéter que me regalaste es genial." }
      ]
    },
    {
      id: "a2-indirekt", level: "A2", title: "Preguntas indirectas (ob, wann, wo…)", de: "Indirekte Fragen",
      rule: "Una pregunta puede ir dentro de otra frase: Wissen Sie, …? / Können Sie mir sagen, …? / Ich weiß nicht, … Si la pregunta tiene palabra W (wann, wo, wie viel…), esa palabra abre la subordinada; si es de sí o no, se usa ob. En los dos casos el verbo conjugado va al FINAL.",
      trap: "«ob» es el «si» de las preguntas de sí o no (No sé si viene = Ich weiß nicht, ob er kommt). No lo confundas con «wenn», que es el «si» de condición. Y nada de verbo en posición 2: «Wissen Sie, wann fährt der Zug?» ✗ → «Wissen Sie, wann der Zug fährt?» ✓.",
      ex: ["Wissen Sie, wann der Zug nach Köln fährt?", "Ich weiß nicht, ob ich morgen Zeit habe.", "Können Sie mir sagen, wo das Bürgeramt ist?"],
      items: [
        { t: "mc", q: "Ich weiß nicht, ___ er heute kommt. (si viene o no)", o: ["wenn", "ob", "dass"], a: 1, why: "Pregunta de sí o no dentro de otra frase → ob." },
        { t: "mc", q: "Elige la frase correcta:", o: ["Wissen Sie, wo ist die Post?", "Wissen Sie, die Post wo ist?", "Wissen Sie, wo die Post ist?"], a: 2, why: "En la pregunta indirecta el verbo va al final." },
        { t: "type", q: "Können Sie mir sagen, wie viel das Ticket ___? (kosten)", a: ["kostet"], why: "Verbo conjugado al final: …, wie viel das Ticket kostet." },
        { t: "type", q: "Ich möchte wissen, ___ der Kurs beginnt. (cuándo)", a: ["wann"], why: "Pregunta W: se mantiene la palabra W → wann." },
        { t: "type", q: "Weißt du, ___ Lisa einen Freund hat? (si)", a: ["ob"], why: "Sí o no → ob." },
        { t: "type", q: "Ich frage mich, wo ich meinen Schlüssel ___ ___. (lassen, Perfekt)", a: ["gelassen habe"], why: "En la subordinada el auxiliar va al final del todo, detrás del participio: gelassen habe." },
        { t: "mc", q: "Kannst du mir sagen, ___ spät es ist?", o: ["wie", "was", "ob"], a: 0, why: "«Wie spät ist es?» → indirecta: wie spät es ist." },
        { t: "type", q: "Darf ich fragen, ___ Sie kommen? (de dónde)", a: ["woher"], why: "woher = de dónde." },
        { t: "order", w: ["Wissen Sie,", "ob", "die Apotheke", "heute", "geöffnet", "ist?"], es: "¿Sabe si la farmacia está abierta hoy?" },
        { t: "order", w: ["Ich weiß nicht,", "wann", "der Bus", "abfährt."], es: "No sé cuándo sale el autobús." }
      ]
    },
    {
      id: "a2-konj2", level: "A2", title: "Pedir con cortesía: würde, könnte, hätte gern", de: "Konjunktiv II (Höflichkeit)",
      rule: "Para pedir algo con amabilidad, expresar un deseo o dar un consejo se usa el Konjunktiv II: ich hätte gern (quisiera), ich würde gern + infinitivo (me gustaría), Könnten Sie…? (¿podría…?), du solltest… (deberías). Formas: ich/er würde, du würdest, wir/sie würden; ich/er könnte, du könntest; ich/er hätte, du hättest; ich/er sollte, du solltest. El infinitivo va al final.",
      trap: "En español «quiero un café» suena normal; en alemán «Ich will einen Kaffee» suena brusco. Di «Ich hätte gern einen Kaffee». Y cuidado con el umlaut: könnte (podría) no es konnte (pude), y würde (haría) no es wurde (fue).",
      ex: ["Könnten Sie mir bitte helfen?", "Ich würde gern am Samstag kommen.", "Du solltest mehr schlafen."],
      items: [
        { t: "mc", q: "___ Sie bitte das Fenster schließen? (cortesía)", o: ["Konnten", "Könnten", "Kannten"], a: 1, why: "Könnten (con umlaut) = podría; konnten = pudieron." },
        { t: "type", q: "Ich ___ gern ein Einzelzimmer für zwei Nächte. (haben, cortesía)", a: ["hätte"], why: "ich hätte gern = quisiera." },
        { t: "type", q: "Wir ___ gern nächstes Jahr nach Spanien fahren. (werden, Konjunktiv II)", a: ["würden"], why: "wir würden + infinitivo al final." },
        { t: "type", q: "Du ___ zum Arzt gehen. (sollen, consejo)", a: ["solltest"], why: "Consejo: du solltest + infinitivo." },
        { t: "type", q: "___ du mir kurz helfen? (können, cortesía)", a: ["Könntest"], why: "du könntest." },
        { t: "type", q: "Ihr ___ mehr Wasser trinken. (sollen, consejo)", a: ["solltet"], why: "ihr solltet." },
        { t: "mc", q: "Elige la forma más amable en una tienda:", o: ["Ich will diese Jacke.", "Gib mir diese Jacke.", "Ich hätte gern diese Jacke."], a: 2, why: "«Ich hätte gern» es la forma cortés de pedir." },
        { t: "mc", q: "Was ___ du an meiner Stelle machen?", o: ["würdest", "wirst", "wurdest"], a: 0, why: "Situación imaginada: würdest (Konjunktiv II de werden)." },
        { t: "order", w: ["Ich", "würde", "gern", "einen Termin", "machen."], es: "Me gustaría pedir una cita." },
        { t: "order", w: ["Könnten", "Sie", "mir", "bitte", "die Rechnung", "bringen?"], es: "¿Podría traerme la cuenta, por favor?" }
      ]
    },
    {
      id: "a2-modalpraet", level: "A2", title: "Modales en pasado: konnte, musste, wollte", de: "Präteritum der Modalverben",
      rule: "Los modales en pasado se usan casi siempre en Präteritum, no en Perfekt: raíz sin umlaut + -te. können → konnte, müssen → musste, dürfen → durfte, wollen → wollte, sollen → sollte. «möchten» no tiene pasado propio: se usa wollte. Como war y hatte, ich y er/sie no llevan terminación: ich konnte, er konnte, du konntest, wir konnten, ihr konntet.",
      trap: "En pasado se pierde el umlaut: ich musste, no «müsste» (que significa «tendría que»). Y aunque «Ich habe nicht gekonnt» existe, casi nadie lo dice: «Ich konnte nicht kommen».",
      ex: ["Gestern konnte ich nicht kommen.", "Wir mussten zwei Stunden warten.", "Als Kind wollte ich Pilot werden."],
      items: [
        { t: "type", q: "Gestern ___ ich nicht zum Kurs kommen. (können)", a: ["konnte"], why: "können → konnte (sin umlaut)." },
        { t: "type", q: "Letzte Woche ___ wir am Flughafen zwei Stunden warten. (müssen)", a: ["mussten"], why: "müssen → mussten." },
        { t: "type", q: "Als Kind ___ er Fußballspieler werden. (wollen)", a: ["wollte"], why: "wollen → wollte." },
        { t: "type", q: "Früher ___ man im Krankenhaus nicht telefonieren. (dürfen)", a: ["durfte"], why: "dürfen → durfte." },
        { t: "type", q: "___ du gestern auch arbeiten? (müssen)", a: ["Musstest"], why: "du musstest." },
        { t: "mc", q: "Ich ___ eigentlich einen Kuchen mitbringen, aber ich habe es vergessen.", o: ["soll", "sollte", "gesollt"], a: 1, why: "sollen en pasado → sollte (se suponía que)." },
        { t: "mc", q: "Ihr ___ gestern nicht kommen, oder?", o: ["konnten", "konntest", "konntet"], a: 2, why: "ihr konntet." },
        { t: "mc", q: "Heute möchte ich Pizza. Gestern ___ ich Sushi.", o: ["möchtete", "wollte", "möchte"], a: 1, why: "möchten no tiene pasado propio: se usa wollte." },
        { t: "order", w: ["Leider", "musste", "ich", "lange", "arbeiten."], es: "Lamentablemente tuve que trabajar hasta tarde." },
        { t: "order", w: ["Warum", "konntest", "du", "nicht", "kommen?"], es: "¿Por qué no pudiste venir?" }
      ]
    },
    {
      id: "a2-genitiv", level: "A2", title: "El genitivo (¿de quién?)", de: "Genitiv",
      rule: "El genitivo dice a quién pertenece algo. Masculino y neutro: des + sustantivo con -s o -es (das Auto des Lehrers, der Name des Hotels). Femenino y plural: der (die Tür der Wohnung, das Zimmer der Kinder). Con nombres propios basta una -s, sin apóstrofo: Annas Bruder. Al hablar se usa mucho von + dativo: das Auto von meinem Vater.",
      trap: "En español decimos «el carro de mi padre»; en alemán el «de» se mete en el artículo: das Auto meines Vaters. Y no pongas apóstrofo como en inglés: «Anna's Handy» ✗ → «Annas Handy» ✓.",
      ex: ["Das ist das Auto meines Vaters.", "Die Tür der Wohnung ist kaputt.", "Annas Bruder wohnt in Berlin."],
      items: [
        { t: "mc", q: "Das ist das Fahrrad ___ Lehrers.", o: ["der", "des", "dem"], a: 1, why: "der Lehrer → genitivo masculino: des Lehrers." },
        { t: "mc", q: "Die Fenster ___ Wohnung sind sehr groß.", o: ["der", "des", "die"], a: 0, why: "die Wohnung → genitivo femenino: der." },
        { t: "mc", q: "Wie ist der Name ___ Hotels?", o: ["dem", "der", "des"], a: 2, why: "das Hotel → des Hotels." },
        { t: "type", q: "Das Zimmer ___ Kinder ist im ersten Stock. (die Kinder)", a: ["der"], why: "Plural → der." },
        { t: "type", q: "Das ist die Wohnung ___ Bruders. (mein)", a: ["meines"], why: "mein Bruder → genitivo: meines Bruders." },
        { t: "type", q: "Wir feiern den Geburtstag ___ Mutter. (unser)", a: ["unserer"], why: "Femenino → unserer." },
        { t: "type", q: "Das ist ___ Handy. (Anna)", a: ["Annas"], why: "Nombre propio + -s, sin apóstrofo." },
        { t: "type", q: "Am Ende ___ Monats bekomme ich mein Gehalt. (der Monat)", a: ["des"], why: "der Monat → des Monats." },
        { t: "mc", q: "Elige la versión hablada de «das Auto meines Vaters»:", o: ["das Auto von mein Vater", "das Auto von meinem Vater", "das Auto von meines Vaters"], a: 1, why: "von + dativo: von meinem Vater." },
        { t: "order", w: ["Das", "ist", "das Büro", "der", "Chefin."], es: "Esa es la oficina de la jefa." }
      ]
    },
    {
      id: "a2-deshalb", level: "A2", title: "deshalb, trotzdem, sonst", de: "Konnektoren: deshalb, trotzdem, sonst",
      rule: "deshalb (por eso), trotzdem (aun así) y sonst (si no, de lo contrario) unen dos frases principales. Ocupan la posición 1 de la segunda frase, así que justo después va el verbo y luego el sujeto: Ich bin krank, deshalb bleibe ich zu Hause. Funcionan igual que «heute» o «dann».",
      trap: "Compara con weil: «…, weil ich krank bin» (verbo al final), pero «…, deshalb bleibe ich zu Hause» (verbo en posición 2). El error típico es «deshalb ich bleibe» ✗. Y «sonst» no es el «si» de condición: avisa de lo que pasa si no haces algo: Beeil dich, sonst verpassen wir den Zug.",
      ex: ["Ich habe morgen eine Prüfung, deshalb lerne ich heute.", "Es regnet, trotzdem gehen wir spazieren.", "Nimm eine Jacke mit, sonst frierst du."],
      items: [
        { t: "mc", q: "Der Zug hatte Verspätung, ___ bin ich zu spät gekommen.", o: ["trotzdem", "deshalb", "sonst"], a: 1, why: "Consecuencia lógica → deshalb." },
        { t: "mc", q: "Ich war sehr müde, ___ habe ich bis Mitternacht gelernt.", o: ["trotzdem", "deshalb", "sonst"], a: 0, why: "Contraste inesperado → trotzdem." },
        { t: "mc", q: "Wir müssen jetzt los, ___ verpassen wir den Bus.", o: ["deshalb", "trotzdem", "sonst"], a: 2, why: "Si no salimos ya, pasa algo malo → sonst." },
        { t: "type", q: "Ich habe Fieber, deshalb ___ ich heute zu Hause. (bleiben)", a: ["bleibe"], why: "Después de deshalb el verbo va en posición 2: deshalb bleibe ich." },
        { t: "type", q: "Die Wohnung ist teuer, ___ nehmen wir sie. (aun así)", a: ["trotzdem"], why: "aun así = trotzdem." },
        { t: "type", q: "Zieh dich warm an, ___ wirst du krank. (si no)", a: ["sonst"], why: "sonst = si no, de lo contrario." },
        { t: "type", q: "Ich hatte keine Zeit, deshalb ___ ich dich nicht ___. (anrufen, Perfekt)", a: ["habe angerufen"], why: "deshalb + verbo en posición 2 (habe) y participio al final (angerufen)." },
        { t: "mc", q: "Elige la frase correcta:", o: ["Es regnet, trotzdem wir gehen spazieren.", "Es regnet, trotzdem gehen wir spazieren.", "Es regnet, trotzdem wir spazieren gehen."], a: 1, why: "trotzdem ocupa la posición 1: verbo + sujeto." },
        { t: "order", w: ["Ich", "habe", "kein Auto,", "deshalb", "fahre", "ich", "mit dem Bus."], es: "No tengo carro, por eso voy en autobús." },
        { t: "order", w: ["Er", "ist", "krank,", "trotzdem", "geht", "er", "zur Arbeit."], es: "Está enfermo; aun así, va al trabajo." }
      ]
    },
    {
      id: "a2-zuinf", level: "A2", title: "zu + infinitivo", de: "Infinitiv mit zu",
      rule: "Después de ciertas expresiones, el segundo verbo va al final con «zu»: Ich habe keine Zeit, heute zu kochen. Las más frecuentes: Lust haben, Zeit haben, Es ist wichtig, schön o schwer, versuchen, vergessen, anfangen, aufhören. En los verbos separables, el zu va en medio: anzurufen, mitzukommen, aufzuräumen.",
      trap: "Después de los modales (können, müssen, wollen…) NUNCA va zu: «Ich kann zu kommen» ✗. Y en los separables el zu se mete dentro: «zu anrufen» ✗ → «anzurufen» ✓.",
      ex: ["Hast du Lust, ins Kino zu gehen?", "Es ist wichtig, jeden Tag Deutsch zu üben.", "Vergiss nicht, deine Mutter anzurufen!"],
      items: [
        { t: "type", q: "Ich habe keine Lust, heute ___ ___. (kochen)", a: ["zu kochen"], why: "Lust haben + zu + infinitivo al final." },
        { t: "type", q: "Vergiss nicht, die Tür ___! (abschließen)", a: ["abzuschließen"], why: "Verbo separable: el zu va en medio → abzuschließen." },
        { t: "type", q: "Es ist wichtig, jeden Tag Wasser ___ ___. (trinken)", a: ["zu trinken"], why: "Es ist wichtig + zu + infinitivo." },
        { t: "type", q: "Hast du Zeit, morgen ___? (mitkommen)", a: ["mitzukommen"], why: "mitkommen → mitzukommen." },
        { t: "type", q: "Ich habe aufgehört, ___ ___. (rauchen)", a: ["zu rauchen"], why: "aufhören + zu + infinitivo." },
        { t: "mc", q: "Ich kann morgen leider nicht ___.", o: ["kommen", "zu kommen", "zukommen"], a: 0, why: "Después de un modal no va zu." },
        { t: "mc", q: "Ich versuche, mehr Deutsch ___.", o: ["sprechen", "zu sprechen", "gesprochen"], a: 1, why: "versuchen + zu + infinitivo." },
        { t: "mc", q: "Er hat angefangen, Gitarre ___.", o: ["spielen", "gespielt", "zu spielen"], a: 2, why: "anfangen + zu + infinitivo." },
        { t: "order", w: ["Es", "ist", "schwer,", "eine Wohnung", "zu", "finden."], es: "Es difícil encontrar apartamento." },
        { t: "order", w: ["Hast du", "Lust,", "am Samstag", "wandern", "zu", "gehen?"], es: "¿Tienes ganas de ir a caminar al monte el sábado?" }
      ]
    },
    {
      id: "a2-superlativ", level: "A2", title: "El superlativo: am schnellsten", de: "Superlativ",
      rule: "Para decir «el más…» se usa am + adjetivo + -sten (Das Flugzeug ist am schnellsten) o, delante de un sustantivo, artículo + adjetivo + -st- + terminación (der schnellste Zug). Si el adjetivo termina en -t, -d, -s, -ß o -z se añade una e: am ältesten, am kürzesten, am heißesten. Irregulares: gut → am besten, gern → am liebsten, viel → am meisten, groß → am größten, hoch → am höchsten.",
      trap: "No se dice «am meisten groß» (lo más grande) ✗ → «am größten» ✓. Y lo que más te gusta se dice con am liebsten: «Am liebsten esse ich Mangú», no «am meisten gern».",
      ex: ["Im Juli ist es am heißesten.", "Der Pico Duarte ist der höchste Berg der Karibik.", "Am liebsten trinke ich Kaffee."],
      items: [
        { t: "type", q: "Das Flugzeug ist am ___. (schnell)", a: ["schnellsten"], why: "am + schnell + -sten." },
        { t: "type", q: "Am ___ trinke ich Tee. (gern)", a: ["liebsten"], why: "gern → lieber → am liebsten." },
        { t: "type", q: "Das ist der ___ Film des Jahres. (gut)", a: ["beste"], why: "gut → best-; der + nominativo → der beste Film." },
        { t: "type", q: "Im Januar ist es am ___. (kalt)", a: ["kältesten"], why: "kalt termina en -t → am kältesten, con umlaut." },
        { t: "type", q: "Berlin ist teuer, Paris ist teurer, aber London ist am ___. (teuer)", a: ["teuersten"], why: "teuer → am teuersten." },
        { t: "mc", q: "Welcher Berg ist am ___?", o: ["hochsten", "meisten hoch", "höchsten"], a: 2, why: "hoch → am höchsten." },
        { t: "mc", q: "Wer hat am ___ gearbeitet?", o: ["meisten", "mehrsten", "vielsten"], a: 0, why: "viel → mehr → am meisten." },
        { t: "mc", q: "Das ist die ___ Wohnung in der Straße. (groß)", o: ["am größten", "größte", "größeste"], a: 1, why: "Delante del sustantivo: die größte Wohnung." },
        { t: "order", w: ["Von allen Fächern", "finde", "ich", "Mathe", "am schwersten."], es: "De todas las materias, matemáticas me parece la más difícil." },
        { t: "order", w: ["Was", "isst", "du", "am liebsten?"], es: "¿Qué es lo que más te gusta comer?" }
      ]
    },
    {
      id: "a2-passiv", level: "A2", title: "La voz pasiva en presente", de: "Passiv Präsens",
      rule: "Cuando importa la acción y no quién la hace, se usa werden + participio al final: Die Briefe werden um zehn Uhr abgeholt. En singular es «wird», en plural «werden». Si se dice quién hace la acción, va con von + dativo: Das Essen wird von meiner Mutter gekocht.",
      trap: "En español solemos usar «se»: «Aquí se habla español» = Hier wird Spanisch gesprochen. No confundas werden + participio (pasiva) con werden + infinitivo (futuro): Das Haus wird gebaut (se está construyendo) no es lo mismo que Ich werde bauen (construiré).",
      ex: ["In Deutschland wird der Müll getrennt.", "Die Pakete werden morgen gebracht.", "Hier wird Deutsch gesprochen."],
      items: [
        { t: "mc", q: "Das Formular ___ online ausgefüllt.", o: ["werden", "wird", "hat"], a: 1, why: "das Formular (singular) → wird + participio." },
        { t: "mc", q: "Die Briefe ___ jeden Tag um zehn Uhr abgeholt.", o: ["werden", "wird", "haben"], a: 0, why: "die Briefe (plural) → werden + participio." },
        { t: "type", q: "Der Müll ___ in Deutschland ___. (trennen)", a: ["wird getrennt"], why: "wird + participio al final." },
        { t: "type", q: "Die Wohnung ___ nächste Woche ___. (renovieren)", a: ["wird renoviert"], why: "Los verbos en -ieren no llevan ge-: renoviert." },
        { t: "type", q: "Hier ___ Spanisch ___. (sprechen)", a: ["wird gesprochen"], why: "Aquí se habla español = Hier wird Spanisch gesprochen." },
        { t: "type", q: "Die Pakete ___ morgen ___. (bringen)", a: ["werden gebracht"], why: "Plural → werden; bringen → gebracht." },
        { t: "mc", q: "Das Essen wird ___ meiner Mutter gekocht.", o: ["für", "aus", "von"], a: 2, why: "Quien hace la acción → von + dativo." },
        { t: "mc", q: "Elige la frase en voz pasiva:", o: ["Das Essen wird gekocht.", "Ich werde morgen kochen.", "Ich koche das Essen."], a: 0, why: "Pasiva = werden + participio (gekocht). «werde kochen» es futuro." },
        { t: "order", w: ["Im Bürgeramt", "werden", "viele", "Formulare", "ausgefüllt."], es: "En la oficina de registro se llenan muchos formularios." },
        { t: "order", w: ["Wann", "wird", "das Paket", "gebracht?"], es: "¿Cuándo traen el paquete?" }
      ]
    }
  );

  DE.dialogs.push(
    {
      id: "a2-besichtigung", level: "A2", title: "Visitar un apartamento", de: "Die Wohnungsbesichtigung",
      who: { V: ["Frau Krämer (Vermieterin)", "f"], C: ["Carlos (Interessent)", "m"] },
      lines: [
        ["V", "Guten Tag, Sie sind sicher Herr Pérez. Kommen Sie herein!", "Buenas tardes, usted debe ser el señor Pérez. ¡Pase!"],
        ["C", "Guten Tag, Frau Krämer. Danke, dass ich die Wohnung heute schon sehen darf.", "Buenas tardes, señora Krämer. Gracias por dejarme ver el apartamento hoy mismo."],
        ["V", "Gern. Also, hier ist der Flur, links das Bad und geradeaus das Wohnzimmer mit Balkon.", "Con gusto. Bueno, aquí está el pasillo, a la izquierda el baño y al frente la sala con balcón."],
        ["C", "Oh, das Wohnzimmer ist schön hell! Wie groß ist die Wohnung insgesamt?", "¡Oh, la sala tiene mucha luz! ¿Cuánto mide el apartamento en total?"],
        ["V", "Zweiundfünfzig Quadratmeter. Die Küche ist neu, mit Kühlschrank und Herd.", "Cincuenta y dos metros cuadrados. La cocina es nueva, con nevera y estufa."],
        ["C", "Und wie hoch ist die Miete?", "¿Y cuánto es el alquiler?"],
        ["V", "Fünfhundertachtzig Euro kalt, plus hundertzwanzig Euro Nebenkosten.", "Quinientos ochenta euros sin gastos, más ciento veinte euros de gastos adicionales."],
        ["C", "Muss ich auch eine Kaution bezahlen?", "¿Tengo que pagar también un depósito?"],
        ["V", "Ja, zwei Monatsmieten. Die bekommen Sie zurück, wenn Sie ausziehen.", "Sí, dos meses de alquiler. Se lo devuelven cuando se mude."],
        ["C", "Gibt es einen Keller? Ich habe ein Fahrrad.", "¿Hay sótano? Tengo una bicicleta."],
        ["V", "Ja, zu jeder Wohnung gehört ein Kellerraum. Die Waschmaschinen stehen auch unten.", "Sí, cada apartamento tiene un cuarto en el sótano. Las lavadoras también están abajo."],
        ["C", "Perfekt. Ab wann ist die Wohnung frei?", "Perfecto. ¿A partir de cuándo está libre el apartamento?"],
        ["V", "Ab dem ersten Februar. Wenn Sie möchten, schicke ich Ihnen den Mietvertrag per E-Mail.", "A partir del primero de febrero. Si quiere, le envío el contrato de alquiler por correo."],
        ["C", "Ja, sehr gern. Ich melde mich bis Freitag bei Ihnen.", "Sí, con mucho gusto. Le aviso antes del viernes."]
      ],
      q: [
        ["Wie hoch sind die Nebenkosten?", ["580 Euro", "120 Euro", "700 Euro"], 1],
        ["Wie hoch ist die Kaution?", ["zwei Monatsmieten", "drei Monatsmieten", "Es gibt keine Kaution."], 0],
        ["Warum fragt Carlos nach dem Keller?", ["Er hat viele Möbel.", "Er braucht eine Waschmaschine.", "Er hat ein Fahrrad."], 2]
      ],
      tip: "«Kaltmiete» es el alquiler sin gastos; «Warmmiete» ya incluye calefacción, agua y basura. La Kaution puede ser de hasta tres meses de Kaltmiete, y te la devuelven al salir si todo está en orden."
    },
    {
      id: "a2-praxis", level: "A2", title: "En la consulta del médico", de: "In der Arztpraxis",
      who: { A: ["Frau Doktor Hoffmann (Ärztin)", "f"], C: ["Carlos (Patient)", "m"] },
      lines: [
        ["A", "Guten Morgen, Herr Pérez. Was kann ich für Sie tun?", "Buenos días, señor Pérez. ¿En qué le puedo ayudar?"],
        ["C", "Guten Morgen. Ich fühle mich seit drei Tagen nicht gut. Ich habe Husten und Halsschmerzen.", "Buenos días. Desde hace tres días no me siento bien. Tengo tos y me duele la garganta."],
        ["A", "Haben Sie auch Fieber?", "¿Tiene fiebre también?"],
        ["C", "Gestern Abend hatte ich achtunddreißig Grad. Und mir tut alles weh.", "Anoche tenía treinta y ocho grados. Y me duele todo."],
        ["A", "Ich untersuche Sie mal. Bitte machen Sie den Mund auf. Gut, und jetzt tief einatmen.", "Voy a revisarlo. Abra la boca, por favor. Bien, y ahora respire hondo."],
        ["A", "Sie haben eine Grippe. Sie sollten ein paar Tage im Bett bleiben und viel trinken.", "Tiene gripe. Debería quedarse unos días en cama y tomar mucho líquido."],
        ["C", "Aber ich muss arbeiten. Können Sie mich krankschreiben?", "Pero tengo que trabajar. ¿Me puede dar una licencia médica?"],
        ["A", "Ja, ich schreibe Sie bis Freitag krank. Die Krankmeldung bekommt Ihre Krankenkasse direkt von uns.", "Sí, le doy licencia hasta el viernes. Nosotros le enviamos la licencia directamente a su seguro médico."],
        ["C", "Muss ich meinem Chef ein Papier geben?", "¿Tengo que darle algún papel a mi jefe?"],
        ["A", "Nein, Sie müssen ihm nur Bescheid sagen, dass Sie krank sind. Ihr Chef bekommt die Informationen dann von der Krankenkasse.", "No, solo tiene que avisarle que está enfermo. Su jefe recibe luego la información del seguro."],
        ["C", "Brauche ich auch Medikamente?", "¿Necesito también medicamentos?"],
        ["A", "Ich gebe Ihnen ein Rezept für einen Hustensaft. Gegen das Fieber können Sie Paracetamol nehmen.", "Le doy una receta para un jarabe para la tos. Para la fiebre puede tomar paracetamol."],
        ["C", "Vielen Dank, Frau Doktor.", "Muchas gracias, doctora."],
        ["A", "Gute Besserung! Wenn es nicht besser wird, kommen Sie am Montag wieder.", "¡Que se mejore! Si no mejora, vuelva el lunes."]
      ],
      q: [
        ["Seit wann fühlt sich Carlos nicht gut?", ["seit gestern", "seit drei Tagen", "seit einer Woche"], 1],
        ["Was hat Carlos?", ["eine Grippe", "eine Allergie", "Zahnschmerzen"], 0],
        ["Was muss Carlos für seinen Chef machen?", ["Er muss ihm die Krankmeldung bringen.", "Er muss ihm das Rezept zeigen.", "Er muss ihm nur Bescheid sagen."], 2]
      ],
      tip: "Desde 2023 la licencia médica (Krankschreibung) es electrónica: el consultorio la envía al seguro y la empresa la consulta allí. Tú solo tienes que avisar al jefe el primer día, antes de empezar tu jornada."
    },
    {
      id: "a2-erster-tag", level: "A2", title: "El primer día de trabajo", de: "Der erste Arbeitstag",
      who: { S: ["Sabine Wolf (Teamleiterin)", "f"], C: ["Carlos", "m"], J: ["Jonas (Kollege)", "m"] },
      lines: [
        ["S", "Guten Morgen, Herr Pérez! Herzlich willkommen bei uns. Haben Sie gut hergefunden?", "¡Buenos días, señor Pérez! Bienvenido. ¿Encontró bien el lugar?"],
        ["C", "Guten Morgen! Ja, danke. Ich bin mit der U-Bahn gekommen, das ging ganz schnell.", "¡Buenos días! Sí, gracias. Vine en metro, fue muy rápido."],
        ["S", "Schön. Ich zeige Ihnen zuerst Ihren Arbeitsplatz. Hier ist Ihr Schreibtisch, direkt am Fenster.", "Qué bien. Primero le enseño su puesto. Aquí está su escritorio, justo al lado de la ventana."],
        ["C", "Super, hier ist es schön hell!", "¡Genial, aquí hay mucha luz!"],
        ["S", "Und das ist Jonas. Er ist schon seit fünf Jahren im Team und hilft Ihnen in der ersten Woche.", "Y este es Jonas. Está en el equipo desde hace cinco años y le va a ayudar la primera semana."],
        ["J", "Hallo! Bei uns im Team duzen sich alle, auch mit Sabine. Ich bin Jonas.", "¡Hola! En el equipo todos nos tuteamos, también con Sabine. Yo soy Jonas."],
        ["C", "Freut mich, Jonas. Ich bin Carlos.", "Mucho gusto, Jonas. Yo soy Carlos."],
        ["J", "Wann machst du normalerweise Mittagspause? Wir gehen meistens um halb eins in die Kantine.", "¿A qué hora sueles almorzar? Nosotros casi siempre vamos al comedor a las doce y media."],
        ["C", "Halb eins passt mir gut. Wie lange dauert die Pause?", "A las doce y media me viene bien. ¿Cuánto dura el descanso?"],
        ["J", "Eine halbe Stunde. Die Arbeitszeit ist flexibel, aber von neun bis drei sollten alle da sein.", "Media hora. El horario es flexible, pero de nueve a tres todos deberían estar aquí."],
        ["S", "Genau. Ach ja, Carlos: Überstunden schreibst du bitte immer in die Liste. Die kannst du später frei nehmen.", "Exacto. Ah, Carlos: anota siempre las horas extra en la lista. Luego puedes tomarlas como tiempo libre."],
        ["C", "Alles klar. Und wo finde ich den Drucker?", "Entendido. ¿Y dónde encuentro la impresora?"],
        ["J", "Gleich neben der Küche. Komm, ich zeige dir alles. Möchtest du auch einen Kaffee?", "Justo al lado de la cocina. Ven, te enseño todo. ¿Quieres un café?"],
        ["C", "Sehr gern, danke!", "¡Con mucho gusto, gracias!"]
      ],
      q: [
        ["Wie ist Carlos zur Arbeit gekommen?", ["mit dem Bus", "mit der U-Bahn", "mit dem Fahrrad"], 1],
        ["Wann gehen die Kollegen meistens in die Kantine?", ["um halb eins", "um zwölf Uhr", "um halb zwei"], 0],
        ["Was soll Carlos mit den Überstunden machen?", ["Er bekommt mehr Geld dafür.", "Er soll keine machen.", "Er schreibt sie in eine Liste."], 2]
      ],
      tip: "En muchas oficinas alemanas el equipo se tutea, a veces incluso con la jefa, pero espera a que te lo ofrezcan. Las horas extra se suelen anotar y compensar con tiempo libre."
    },
    {
      id: "a2-hotel", level: "A2", title: "Un problema en el hotel", de: "An der Hotelrezeption",
      who: { R: ["Rezeptionist", "m"], E: ["Elena (Gast)", "f"] },
      lines: [
        ["E", "Guten Abend. Ich habe ein Einzelzimmer für drei Nächte reserviert. Mein Name ist Elena Rodríguez.", "Buenas noches. Reservé una habitación individual para tres noches. Me llamo Elena Rodríguez."],
        ["R", "Guten Abend, Frau Rodríguez. Einen Moment … Ja, hier ist Ihre Buchung. Darf ich bitte Ihren Ausweis sehen?", "Buenas noches, señora Rodríguez. Un momento… Sí, aquí está su reserva. ¿Me permite su documento de identidad?"],
        ["E", "Hier ist mein Reisepass.", "Aquí tiene mi pasaporte."],
        ["R", "Danke. Ihr Zimmer ist im vierten Stock, Nummer vierhundertzwölf. Der Aufzug ist dort rechts.", "Gracias. Su habitación está en el cuarto piso, número cuatrocientos doce. El ascensor está ahí a la derecha."],
        ["E", "Ist das Frühstück im Preis inklusive?", "¿El desayuno está incluido en el precio?"],
        ["R", "Ja, Frühstück gibt es von halb sieben bis zehn Uhr im Erdgeschoss.", "Sí, el desayuno es de seis y media a diez en la planta baja."],
        ["E", "Entschuldigung, ich bin's noch mal. In meinem Zimmer funktioniert die Heizung nicht, und es ist sehr kalt.", "Disculpe, soy yo otra vez. En mi habitación no funciona la calefacción y hace mucho frío."],
        ["R", "Oh, das tut mir leid. Ich schicke sofort jemanden von der Technik.", "Oh, lo siento. Enseguida le mando a alguien de mantenimiento."],
        ["E", "Könnten Sie mir vielleicht ein anderes Zimmer geben? Ich bin sehr müde.", "¿Podría darme otra habitación? Estoy muy cansada."],
        ["R", "Natürlich. Ich kann Ihnen ein Doppelzimmer im zweiten Stock geben, ohne Aufpreis.", "Claro. Le puedo dar una habitación doble en el segundo piso, sin costo adicional."],
        ["E", "Das ist sehr nett, vielen Dank!", "¡Qué amable, muchas gracias!"],
        ["R", "Gern geschehen. Hier ist Ihr neuer Schlüssel, Zimmer zweihundertfünf.", "De nada. Aquí tiene su nueva llave, habitación doscientos cinco."],
        ["E", "Wissen Sie, ob ich morgen früh ein Taxi zum Bahnhof bestellen kann?", "¿Sabe si mañana temprano puedo pedir un taxi a la estación?"],
        ["R", "Selbstverständlich. Sagen Sie mir einfach die Uhrzeit, dann bestelle ich es für Sie.", "Por supuesto. Dígame la hora y yo se lo pido."]
      ],
      q: [
        ["Was funktioniert im Zimmer nicht?", ["die Dusche", "die Heizung", "das Licht"], 1],
        ["Welches Zimmer bekommt Elena am Ende?", ["Zimmer 412", "Zimmer 250", "Zimmer 205"], 2],
        ["Bis wann gibt es Frühstück?", ["bis zehn Uhr", "bis halb zehn", "bis halb sieben"], 0]
      ],
      tip: "En Alemania el «erster Stock» es lo que en RD llamamos segundo piso: la planta a nivel de la calle es el «Erdgeschoss». Así que el cuarto piso alemán es nuestro quinto."
    },
    {
      id: "a2-umtausch", level: "A2", title: "Cambiar una prenda", de: "Umtausch im Kaufhaus",
      who: { V: ["Verkäuferin", "f"], C: ["Carlos (Kunde)", "m"] },
      lines: [
        ["C", "Guten Tag. Ich habe letzte Woche diese Jacke gekauft. Leider ist sie mir zu eng.", "Buenas tardes. La semana pasada compré esta chaqueta. Lamentablemente me queda apretada."],
        ["V", "Kein Problem. Haben Sie die Quittung dabei?", "No hay problema. ¿Tiene el recibo?"],
        ["C", "Ja, hier ist sie.", "Sí, aquí está."],
        ["V", "Möchten Sie die Jacke eine Größe größer? Oder lieber Ihr Geld zurück?", "¿Quiere la chaqueta una talla más grande? ¿O prefiere que le devolvamos el dinero?"],
        ["C", "Lieber eine Größe größer, in L. Die Farbe gefällt mir nämlich sehr.", "Mejor una talla más grande, en L. Es que el color me gusta mucho."],
        ["V", "Moment, ich schaue mal nach … Hier, in L haben wir sie leider nur noch in Schwarz.", "Un momento, voy a mirar… Aquí está, pero en L solo nos queda en negro."],
        ["C", "Hm, schade. Kann ich sie trotzdem mal anprobieren?", "Mmm, qué pena. ¿Me la puedo probar de todos modos?"],
        ["V", "Natürlich, die Umkleidekabinen sind gleich da hinten.", "Claro, los probadores están justo ahí atrás."],
        ["C", "Und? Wie sieht sie aus?", "¿Y? ¿Cómo me queda?"],
        ["V", "Sie passt perfekt, und Schwarz steht Ihnen wirklich gut.", "Le queda perfecta, y el negro le sienta muy bien."],
        ["C", "Stimmt, und sie ist auch viel bequemer. Dann nehme ich die schwarze.", "Es verdad, y además es mucho más cómoda. Entonces me llevo la negra."],
        ["V", "Gut. Der Preis ist derselbe, Sie müssen also nichts bezahlen.", "Bien. El precio es el mismo, así que no tiene que pagar nada."],
        ["C", "Super, vielen Dank für Ihre Hilfe!", "¡Genial, muchas gracias por su ayuda!"]
      ],
      q: [
        ["Warum bringt Carlos die Jacke zurück?", ["Sie ist zu teuer.", "Sie ist zu eng.", "Die Farbe gefällt ihm nicht."], 1],
        ["Welche Farbe hat die neue Jacke?", ["Schwarz", "Blau", "Das sagt er nicht."], 0],
        ["Was muss Carlos bezahlen?", ["zehn Euro mehr", "die ganze Jacke noch einmal", "nichts"], 2]
      ],
      tip: "En una tienda física no están obligados a cambiarte un producto sin defecto, pero casi todas lo hacen en 14 a 30 días si traes el recibo. Lo que compras por internet sí se puede devolver en 14 días por ley."
    },
    {
      id: "a2-ausflug", level: "A2", title: "Planear una excursión", de: "Wir planen einen Ausflug",
      who: { L: ["Lena", "f"], C: ["Carlos", "m"] },
      lines: [
        ["L", "Hast du am Wochenende schon was vor? Ich würde gern einen Ausflug machen.", "¿Ya tienes planes para el fin de semana? Me gustaría hacer una excursión."],
        ["C", "Gute Idee! Wohin denn?", "¡Buena idea! ¿A dónde?"],
        ["L", "Wie wäre es mit dem Baldeneysee? Da kann man spazieren gehen und Boot fahren.", "¿Qué tal el lago Baldeney? Allí se puede pasear y andar en bote."],
        ["C", "Klingt super. Am Samstag kann ich aber erst ab zwei. Vormittags habe ich Deutschkurs.", "Suena genial. Pero el sábado solo puedo a partir de las dos. Por la mañana tengo curso de alemán."],
        ["L", "Hm, im Wetterbericht haben sie für Samstagnachmittag Gewitter angesagt.", "Mmm, en el pronóstico anunciaron tormentas para el sábado por la tarde."],
        ["C", "Dann lass uns doch am Sonntag fahren. Da soll es sonnig sein, oder?", "Entonces vamos mejor el domingo. Dicen que va a estar soleado, ¿no?"],
        ["L", "Ja, sonnig und zweiundzwanzig Grad. Perfekt! Fahren wir mit dem Fahrrad?", "Sí, soleado y veintidós grados. ¡Perfecto! ¿Vamos en bicicleta?"],
        ["C", "Mein Fahrrad ist leider kaputt. Können wir die S-Bahn nehmen?", "Lamentablemente mi bicicleta está dañada. ¿Podemos tomar el tren urbano?"],
        ["L", "Klar. Treffen wir uns um zehn am Hauptbahnhof?", "Claro. ¿Nos vemos a las diez en la estación central?"],
        ["C", "Einverstanden. Wer kümmert sich ums Essen?", "De acuerdo. ¿Quién se encarga de la comida?"],
        ["L", "Ich mache Brötchen und einen Obstsalat. Bringst du die Getränke mit?", "Yo preparo panecillos y una ensalada de frutas. ¿Traes tú las bebidas?"],
        ["C", "Mache ich. Und ich nehme meine Kamera mit, da gibt es bestimmt schöne Fotos.", "Hecho. Y llevo mi cámara, seguro que salen fotos bonitas."],
        ["L", "Super, ich freue mich schon darauf!", "¡Genial, ya tengo muchas ganas!"]
      ],
      q: [
        ["Warum fahren sie nicht am Samstag?", ["Carlos muss arbeiten.", "Am Samstagnachmittag soll es Gewitter geben.", "Lena hat keine Zeit."], 1],
        ["Wie fahren sie zum See?", ["mit dem Fahrrad", "mit dem Auto", "mit der S-Bahn"], 2],
        ["Was bringt Carlos mit?", ["die Getränke", "Brötchen", "einen Obstsalat"], 0]
      ],
      tip: "Así funciona el Sprechen Teil 3 del Goethe A2: proponer («Wie wäre es mit…?»), rechazar con un motivo («Da kann ich leider nicht, weil…»), aceptar («Einverstanden!») y repartir tareas («Wer kümmert sich um…?»)."
    },
    {
      id: "a2-bank", level: "A2", title: "Abrir una cuenta en el banco", de: "Ein Konto eröffnen",
      who: { B: ["Herr Schulte (Bankberater)", "m"], E: ["Elena", "f"] },
      lines: [
        ["B", "Guten Tag, Frau Rodríguez. Bitte setzen Sie sich. Sie möchten ein Konto eröffnen?", "Buenas tardes, señora Rodríguez. Siéntese, por favor. ¿Quiere abrir una cuenta?"],
        ["E", "Ja, genau. Ich habe eine Stelle in Essen gefunden und brauche ein Girokonto für mein Gehalt.", "Sí, exacto. Conseguí un trabajo en Essen y necesito una cuenta corriente para el sueldo."],
        ["B", "Sehr gern. Haben Sie Ihren Reisepass und die Meldebescheinigung dabei?", "Con mucho gusto. ¿Trae su pasaporte y el certificado de registro de domicilio?"],
        ["E", "Die Meldebescheinigung? Was ist das?", "¿El certificado de registro? ¿Qué es eso?"],
        ["B", "Das ist das Papier vom Bürgeramt. Sie bekommen es, wenn Sie sich mit Ihrer Adresse anmelden.", "Es el papel de la oficina de registro ciudadano. Se lo dan cuando registra su dirección."],
        ["E", "Ach so, ja, hier ist es. Kostet das Konto etwas?", "Ah, ya. Sí, aquí está. ¿La cuenta cuesta algo?"],
        ["B", "Die Kontoführung kostet vier Euro neunzig im Monat. Dafür bekommen Sie eine Karte, und das Online-Banking ist kostenlos.", "El mantenimiento cuesta cuatro euros con noventa al mes. A cambio recibe una tarjeta, y la banca en línea es gratis."],
        ["E", "Kann ich mit der Karte auch im Ausland Geld abheben?", "¿Puedo sacar dinero con la tarjeta también en el extranjero?"],
        ["B", "Ja, aber am Geldautomaten im Ausland zahlen Sie eine Gebühr.", "Sí, pero en los cajeros del extranjero paga una comisión."],
        ["E", "Und wie lange dauert es, bis ich die Karte bekomme?", "¿Y cuánto tarda en llegarme la tarjeta?"],
        ["B", "Ungefähr eine Woche. Die Karte und die Geheimzahl kommen getrennt mit der Post.", "Más o menos una semana. La tarjeta y el PIN llegan por separado por correo."],
        ["B", "So, jetzt müssen Sie nur noch hier und hier unterschreiben.", "Bueno, ahora solo tiene que firmar aquí y aquí."],
        ["E", "Gern. Vielen Dank für Ihre Hilfe!", "Con gusto. ¡Muchas gracias por su ayuda!"]
      ],
      q: [
        ["Warum braucht Elena ein Konto?", ["für ihr Gehalt", "für die Miete", "für eine Reise"], 0],
        ["Wie viel kostet das Konto im Monat?", ["nichts", "9,40 Euro", "4,90 Euro"], 2],
        ["Wie bekommt Elena die Geheimzahl?", ["per E-Mail", "mit der Post", "am Schalter"], 1]
      ],
      tip: "Para casi todo (contrato de alquiler, banco, plan de celular) te piden la Meldebescheinigung. Por eso, al llegar, lo primero es registrarte en el Bürgeramt: tienes dos semanas después de mudarte."
    },
    {
      id: "a2-geburtstag", level: "A2", title: "Una fiesta sorpresa", de: "Ein Geschenk für Jana",
      who: { K: ["Katrin", "f"], C: ["Carlos", "m"] },
      lines: [
        ["K", "Du, Carlos, nächsten Freitag hat Jana Geburtstag. Sie wird dreißig!", "Oye, Carlos, el próximo viernes es el cumpleaños de Jana. ¡Cumple treinta!"],
        ["C", "Echt? Macht sie eine Party?", "¿En serio? ¿Va a hacer una fiesta?"],
        ["K", "Nein, aber wir planen eine Überraschungsparty bei mir. Sie darf aber nichts davon wissen!", "No, pero estamos planeando una fiesta sorpresa en mi casa. ¡Pero ella no puede saber nada!"],
        ["C", "Super Idee! Was schenken wir ihr?", "¡Súper idea! ¿Qué le regalamos?"],
        ["K", "Ich weiß nicht genau. Sie liest gern, aber sie hat schon so viele Bücher.", "No sé bien. Le gusta leer, pero ya tiene muchísimos libros."],
        ["C", "Wie wäre es mit einem Gutschein für einen Tanzkurs? Sie hat mir erzählt, dass sie gern Salsa lernen möchte.", "¿Qué tal un vale para un curso de baile? Me contó que le gustaría aprender salsa."],
        ["K", "Das ist perfekt! Und du kannst doch tanzen, oder?", "¡Es perfecto! Y tú sabes bailar, ¿verdad?"],
        ["C", "Ein bisschen Bachata und Merengue. Ich kann ihr gern etwas zeigen.", "Un poco de bachata y merengue. Con gusto le enseño algo."],
        ["K", "Toll. Ich backe eine Torte. Kannst du dich um die Musik kümmern?", "Genial. Yo hago una torta. ¿Te puedes encargar de la música?"],
        ["C", "Klar, ich mache eine Playlist mit Musik aus der Karibik.", "Claro, hago una lista con música del Caribe."],
        ["K", "Wir treffen uns alle um sieben, und Jana kommt um halb acht. Ihr Freund bringt sie her.", "Nos vemos todos a las siete y Jana llega a las siete y media. Su novio la trae."],
        ["C", "Und wie viel bezahlt jeder für den Gutschein?", "¿Y cuánto pone cada uno para el vale?"],
        ["K", "Wir sind zehn Leute, also zehn Euro pro Person.", "Somos diez personas, así que diez euros por persona."]
      ],
      q: [
        ["Was schenken sie Jana?", ["ein Buch", "einen Gutschein für einen Tanzkurs", "eine Torte"], 1],
        ["Worum kümmert sich Carlos?", ["um die Musik", "um die Torte", "um die Getränke"], 0],
        ["Wann kommt Jana zur Party?", ["um sieben", "um acht", "um halb acht"], 2]
      ],
      tip: "En Alemania no se felicita a nadie antes del día de su cumpleaños: se considera de mala suerte. Y quien cumple años suele invitar: lleva pastel a la oficina o paga la primera ronda."
    }
  );

  DE.texts.push(
    {
      id: "a2-umzug-blog", level: "A2", title: "Blog: mi mudanza a Essen", de: "Mein Umzug nach Essen",
      paras: [
        ["Hallo zusammen, ich bin Carlos! Seit drei Wochen wohne ich in Essen. Ich komme aus Santo Domingo und arbeite jetzt als Ingenieur in einer Firma im Zentrum. Heute erzähle ich euch, wie meine Wohnungssuche war.", "¡Hola a todos, soy Carlos! Desde hace tres semanas vivo en Essen. Soy de Santo Domingo y ahora trabajo como ingeniero en una empresa del centro. Hoy les cuento cómo fue mi búsqueda de apartamento."],
        ["Am Anfang habe ich in einer Wohngemeinschaft gewohnt, denn eine Wohnung in Deutschland zu finden ist nicht leicht. Auf jede Anzeige antworten sehr viele Leute. Ich habe über dreißig E-Mails geschrieben und nur vier Antworten bekommen.", "Al principio viví en un apartamento compartido, porque encontrar vivienda en Alemania no es fácil. A cada anuncio responde muchísima gente. Escribí más de treinta correos y solo recibí cuatro respuestas."],
        ["Bei der vierten Besichtigung hatte ich endlich Glück. Die Wohnung liegt im zweiten Stock, hat zwei Zimmer und einen kleinen Balkon und ist sehr hell. Die Miete ist nicht billig, aber die Nachbarn sind nett, und bis zur Arbeit brauche ich mit dem Fahrrad nur zehn Minuten.", "En la cuarta visita por fin tuve suerte. El apartamento está en el segundo piso, tiene dos habitaciones y un balcón pequeño, y tiene mucha luz. El alquiler no es barato, pero los vecinos son amables y en bicicleta llego al trabajo en solo diez minutos."],
        ["Am Samstag war der Umzug. Zwei Kollegen haben mir geholfen, die Möbel in den zweiten Stock zu tragen, denn es gibt keinen Aufzug. Am Abend haben wir zusammen Pizza auf dem Balkon gegessen. Nächste Woche muss ich mich noch beim Bürgeramt anmelden, aber das ist ein Thema für einen anderen Artikel!", "El sábado fue la mudanza. Dos colegas me ayudaron a subir los muebles al segundo piso, porque no hay ascensor. Por la noche comimos pizza juntos en el balcón. La semana que viene todavía tengo que registrarme en la oficina de registro, ¡pero ese es tema para otro artículo!"]
      ],
      q: [
        ["Wo hat Carlos am Anfang gewohnt?", ["in einem Hotel", "in einer Wohngemeinschaft", "bei einer Gastfamilie"], 1],
        ["Wie viele Antworten hat er bekommen?", ["vier", "dreißig", "zwei"], 0],
        ["Wie kommt Carlos zur Arbeit?", ["mit dem Bus", "zu Fuß", "mit dem Fahrrad"], 2],
        ["Was muss er nächste Woche machen?", ["Möbel kaufen", "sich beim Bürgeramt anmelden", "noch einmal umziehen"], 1]
      ]
    },
    {
      id: "a2-ausbildung", level: "A2", title: "La formación dual", de: "Die duale Ausbildung",
      paras: [
        ["In Deutschland studieren nicht alle jungen Leute an der Universität. Viele machen nach der Schule lieber eine Ausbildung, weil sie praktisch arbeiten möchten. Es gibt über dreihundert Ausbildungsberufe, zum Beispiel Koch, Friseurin oder Mechatroniker.", "En Alemania no todos los jóvenes estudian en la universidad. Muchos prefieren hacer una formación profesional después de la escuela, porque quieren hacer un trabajo práctico. Hay más de trescientas profesiones con formación, por ejemplo cocinero, peluquera o mecatrónico."],
        ["Das Besondere ist das duale System: Die Azubis lernen an zwei Orten. Drei oder vier Tage pro Woche arbeiten sie in einem Betrieb, und ein oder zwei Tage gehen sie in die Berufsschule. Im Betrieb lernen sie die Praxis, in der Schule die Theorie, zum Beispiel Deutsch, Mathe und Fachkunde.", "Lo especial es el sistema dual: los aprendices aprenden en dos lugares. Tres o cuatro días por semana trabajan en una empresa y uno o dos días van a la escuela profesional. En la empresa aprenden la práctica y en la escuela la teoría, por ejemplo alemán, matemáticas y conocimientos del oficio."],
        ["Eine Ausbildung dauert meistens drei Jahre. Die Azubis bekommen schon vom ersten Monat an Geld, auch wenn es nicht sehr viel ist. Am Ende machen sie eine Prüfung. Wer sie besteht, hat einen anerkannten Abschluss. Oft bleiben die jungen Leute danach in ihrer Firma.", "Una formación dura casi siempre tres años. Los aprendices reciben dinero desde el primer mes, aunque no sea mucho. Al final hacen un examen. Quien lo aprueba tiene un título reconocido. Muchas veces, después, los jóvenes se quedan en su empresa."],
        ["Auch für Menschen aus dem Ausland ist eine Ausbildung interessant. Man braucht meistens Deutsch auf Niveau B1 oder B2 und einen Schulabschluss. Viele Firmen suchen dringend Azubis, besonders in der Pflege, im Handwerk und in der Gastronomie.", "La formación también es interesante para personas del extranjero. Normalmente se necesita alemán de nivel B1 o B2 y un título escolar. Muchas empresas buscan aprendices con urgencia, sobre todo en enfermería y cuidados, en los oficios y en hostelería."]
      ],
      q: [
        ["Wo lernen die Azubis?", ["nur in der Berufsschule", "im Betrieb und in der Berufsschule", "an der Universität"], 1],
        ["Wie lange dauert eine Ausbildung meistens?", ["drei Jahre", "ein Jahr", "fünf Jahre"], 0],
        ["Bekommen Azubis Geld?", ["Nein, sie müssen bezahlen.", "Nur im dritten Jahr.", "Ja, vom ersten Monat an."], 2],
        ["Was brauchen Menschen aus dem Ausland meistens?", ["ein Studium", "Deutsch auf Niveau B1 oder B2", "einen Führerschein"], 1]
      ]
    },
    {
      id: "a2-karneval", level: "A2", title: "Un correo desde Colonia", de: "Eine Einladung zum Karneval",
      paras: [
        ["Lieber Carlos, wie geht es dir? Ich hoffe, die neue Wohnung gefällt dir. Ich habe eine Idee: Hast du Lust, im Februar zum Karneval nach Köln zu kommen? Du kannst bei mir schlafen, mein Sofa ist sehr bequem!", "Querido Carlos, ¿cómo estás? Espero que te guste el apartamento nuevo. Tengo una idea: ¿tienes ganas de venir a Colonia en febrero para el carnaval? Puedes dormir en mi casa, ¡mi sofá es muy cómodo!"],
        ["In Köln nennt man den Karneval die «fünfte Jahreszeit». Am Donnerstag vor Rosenmontag ist Weiberfastnacht. An diesem Tag schneiden die Frauen den Männern die Krawatten ab. Also trag an dem Tag lieber keine teure Krawatte!", "En Colonia al carnaval lo llaman «la quinta estación del año». El jueves antes del lunes de carnaval es la Weiberfastnacht, el jueves de las mujeres. Ese día las mujeres les cortan la corbata a los hombres. ¡Así que mejor no te pongas una corbata cara ese día!"],
        ["Am Rosenmontag gibt es den großen Umzug durch die Stadt. Die Leute auf den Wagen werfen Bonbons und Blumen, und alle rufen «Kölle Alaaf!». Fast alle sind verkleidet, als Pirat, Clown oder Superheld. Ein Kostüm brauchst du also auch!", "El lunes de carnaval es el gran desfile por la ciudad; ojo, aquí «Umzug» significa desfile, no mudanza. La gente de las carrozas tira caramelos y flores, y todos gritan «Kölle Alaaf». Casi todos van disfrazados de pirata, payaso o superhéroe. ¡Así que tú también necesitas un disfraz!"],
        ["Die Stimmung ist fantastisch, aber es ist auch sehr voll und laut. Wenn du kommst, sag mir bitte bis Ende Januar Bescheid. Dann kaufe ich die Zugtickets früh, die sind günstiger. Ich freue mich auf deine Antwort! Viele Grüße, Jonas", "El ambiente es fantástico, pero también hay muchísima gente y ruido. Si vienes, avísame antes de que termine enero. Así compro temprano los boletos de tren, que salen más baratos. ¡Espero tu respuesta! Saludos, Jonas"]
      ],
      q: [
        ["Wo kann Carlos in Köln schlafen?", ["im Hotel", "bei Jonas", "bei Freunden von Jonas"], 1],
        ["Was passiert an Weiberfastnacht?", ["Die Frauen schneiden Krawatten ab.", "Es gibt einen großen Umzug.", "Alle bleiben zu Hause."], 0],
        ["Was werfen die Leute beim Umzug?", ["Krawatten", "Geld", "Bonbons und Blumen"], 2],
        ["Bis wann soll Carlos antworten?", ["bis Rosenmontag", "bis Ende Januar", "bis morgen"], 1]
      ]
    },
    {
      id: "a2-ohne-handy", level: "A2", title: "Una semana sin celular", de: "Eine Woche ohne Handy",
      paras: [
        ["Wie oft schauen Sie am Tag auf Ihr Handy? Viele Menschen in Deutschland verbringen mehrere Stunden täglich am Smartphone. Die Journalistin Mareike Brandt wollte wissen, wie das Leben ohne Handy ist. Deshalb hat sie es eine Woche lang in den Schrank gelegt.", "¿Cuántas veces al día mira usted su celular? Mucha gente en Alemania pasa varias horas diarias con el teléfono. La periodista Mareike Brandt quería saber cómo es la vida sin celular. Por eso lo guardó una semana entera en el armario."],
        ["«Die ersten zwei Tage waren schrecklich», erzählt sie. «Ich wollte immer wieder meine Nachrichten lesen. Am ersten Morgen bin ich zu spät zur Arbeit gekommen, denn mein Wecker war immer das Handy. Ohne Navigation habe ich mich zweimal in der Stadt verlaufen, und ich musste Leute nach dem Weg fragen.»", "«Los dos primeros días fueron horribles», cuenta. «Todo el tiempo quería leer mis mensajes. La primera mañana llegué tarde al trabajo, porque mi despertador siempre era el celular. Sin navegador me perdí dos veces en la ciudad y tuve que preguntarle a la gente por el camino.»"],
        ["Aber dann hat sie gemerkt, dass sie viel mehr Zeit hatte. Sie hat zwei Bücher gelesen, ist jeden Abend spazieren gegangen und hat ihre Freundinnen vom Festnetz angerufen. «Ich habe besser geschlafen und war viel ruhiger», sagt sie.", "Pero después se dio cuenta de que tenía mucho más tiempo. Leyó dos libros, salió a caminar todas las noches y llamó a sus amigas desde el teléfono fijo. «Dormí mejor y estaba mucho más tranquila», dice."],
        ["Benutzt sie ihr Handy jetzt wieder? «Natürlich, ich brauche es für die Arbeit. Aber am Abend bleibt es jetzt in der Küche, und beim Essen ist es tabu.» Ihr Tipp für alle: «Probieren Sie es einmal aus, wenigstens für ein Wochenende!»", "¿Ahora vuelve a usar el celular? «Claro, lo necesito para el trabajo. Pero por la noche se queda en la cocina, y en la mesa está prohibido.» Su consejo para todos: «¡Pruébenlo una vez, aunque sea un fin de semana!»"]
      ],
      q: [
        ["Wie lange war Mareike ohne Handy?", ["einen Tag", "eine Woche", "einen Monat"], 1],
        ["Was war am Anfang schwierig?", ["Sie hat sich in der Stadt verlaufen.", "Sie konnte nicht schlafen.", "Sie hatte keine Bücher."], 0],
        ["Was hat sie in der Woche gemacht?", ["Sie hat Serien geschaut.", "Sie hat mehr gearbeitet.", "Sie hat Bücher gelesen."], 2],
        ["Wo ist das Handy jetzt am Abend?", ["im Schrank", "in der Küche", "im Schlafzimmer"], 1]
      ]
    }
  );

  DE.course.push({
    lvl: "A2",
    items: [
      ["a2-wohnen", "Vivienda y mudanza", ["wechsel", "a2-adjektiv"]],
      ["a2-arbeit", "Trabajo y profesión", ["neben", "a2-modalpraet"]],
      ["a2-gesundheit", "Salud y médico", ["a2-reflexiv", "a2-konj2"]],
      ["a2-reisen", "Viajes y transporte", ["a2-indirekt"]],
      ["a2-feste", "Fiestas, invitaciones y regalos", ["a2-genitiv", "a2-zuinf"]],
      ["a2-einkaufen", "Compras y ropa", ["a2-adjektiv", "komparativ"]],
      ["a2-freizeit", "Tiempo libre y medios", ["a2-praepverb", "a2-zuinf"]],
      ["a2-schule", "Escuela y formación", ["a2-modalpraet", "a2-relativ"]],
      ["a2-natur", "Naturaleza y clima", ["komparativ", "a2-superlativ"]],
      ["a2-gefuehle", "Relaciones y sentimientos", ["a2-reflexiv", "a2-praepverb"]],
      ["a2-behoerden", "Trámites, correo y banco", ["a2-passiv", "a2-indirekt"]],
      ["a2-schreiben", "Escribir mensajes y correos (Schreiben A2)", ["a2-deshalb", "neben"]],
      ["a2-planen", "Proponer y planear juntos (Sprechen A2)", ["a2-konj2", "neben"]]
    ]
  });

  DE.exams.A2 = {
    name: "Goethe-Zertifikat A2",
    pass: "Se aprueba con 60 de 100 puntos en total. Hören, Lesen, Schreiben y Sprechen valen 25 puntos cada uno, y hay que presentar los cuatro.",
    parts: {
      hoeren: "Unos 30 minutos, 4 partes y 20 preguntas. Teil 1: cinco textos cortos de radio o del teléfono (avisos, mensajes, el tiempo), elegir a, b o c; cada texto se oye dos veces. Teil 2: una conversación entre conocidos; hay que relacionar cinco días o personas con imágenes; se oye una sola vez. Teil 3: cinco diálogos cortos de la vida diaria, a, b o c; cada uno se oye una sola vez. Teil 4: una entrevista de radio con cinco frases para marcar Ja o Nein; se oye dos veces.",
      lesen: "30 minutos, 4 partes y 20 preguntas. Teil 1: un artículo corto de periódico, a, b o c. Teil 2: el directorio de unos grandes almacenes o un tablero informativo: ¿a qué piso o lugar vas? Teil 3: un correo electrónico, a, b o c. Teil 4: seis personas buscan algo y hay varios anuncios; hay que decir qué anuncio sirve a cada una, y para una persona no hay ninguno.",
      schreiben: "30 minutos, 2 tareas, cada una con tres puntos que hay que tratar. Teil 1: un SMS o mensaje corto e informal a un amigo, de 20 a 30 palabras. Teil 2: un correo semiformal (a la profesora, al jefe, a la casera), de 30 a 40 palabras, sin olvidar el saludo y la despedida.",
      sprechen: "Unos 15 minutos, en pareja con otro candidato, 3 partes. Teil 1: hacer y contestar preguntas personales a partir de tarjetas con una palabra (Geburtstag?, Wohnort?, Beruf?). Teil 2: hablar de tu vida a partir de una tarjeta con una pregunta y cuatro ideas, y luego responder una pregunta. Teil 3: planear algo juntos comparando las agendas de los dos hasta encontrar una hora."
    },
    hoeren: [
      { teil: 1, n: 2, text: "Hier ist die Praxis Doktor Schneider. Wir haben vom zwanzigsten Dezember bis zum dritten Januar Urlaub. In dringenden Fällen rufen Sie bitte die Praxis Doktor Yilmaz in der Goethestraße an. Vielen Dank.", q: "Was soll man in dringenden Fällen machen?", o: ["Die Praxis Doktor Schneider anrufen.", "Die Praxis Doktor Yilmaz anrufen.", "Ins Krankenhaus fahren."], a: 1 },
      { teil: 1, n: 2, text: "Und nun das Wetter für morgen: Am Vormittag ist es noch bewölkt, aber trocken. Ab Mittag regnet es im ganzen Ruhrgebiet, und am Abend gibt es auch Gewitter. Die Temperaturen liegen bei acht Grad.", q: "Wie ist das Wetter morgen am Nachmittag?", o: ["Es ist sonnig.", "Es schneit.", "Es regnet."], a: 2 },
      { teil: 1, n: 2, text: "Achtung, eine Durchsage für die Fahrgäste nach Düsseldorf: Der Regionalexpress um vierzehn Uhr zwölf fällt heute leider aus. Bitte nehmen Sie die S-Bahn um vierzehn Uhr zwanzig von Gleis drei.", q: "Was sollen die Fahrgäste nach Düsseldorf machen?", o: ["Die S-Bahn nehmen.", "Auf den nächsten Regionalexpress warten.", "Zu Gleis zwölf gehen."], a: 0 },
      { teil: 2, n: 1, text: "Mann: Jana, wann hast du nächste Woche Zeit? Ich möchte dir meine neue Wohnung zeigen. Frau: Hm, am Montag nicht, Tobias. Da muss ich nach der Arbeit zum Zahnarzt.", q: "Was macht Jana am Montag?", o: ["zum Zahnarzt gehen", "Yoga machen", "einer Freundin beim Umzug helfen", "ins Konzert gehen", "Tobias besuchen"], a: 0 },
      { teil: 2, n: 1, text: "Mann: Und am Mittwoch? Frau: Am Mittwoch helfe ich einer Freundin beim Umzug. Sie wohnt im vierten Stock, und es gibt keinen Aufzug! Mann: Oh je, viel Spaß!", q: "Was macht Jana am Mittwoch?", o: ["zum Zahnarzt gehen", "Yoga machen", "einer Freundin beim Umzug helfen", "ins Konzert gehen", "Tobias besuchen"], a: 2 },
      { teil: 2, n: 1, text: "Mann: Hast du vielleicht am Freitag Zeit? Frau: Am Freitagabend gehe ich mit Paul ins Konzert. Aber am Samstag habe ich frei, dann komme ich gern zu dir. Mann: Super, dann bis Samstag!", q: "Was macht Jana am Freitag?", o: ["zum Zahnarzt gehen", "Yoga machen", "einer Freundin beim Umzug helfen", "ins Konzert gehen", "Tobias besuchen"], a: 3 },
      { teil: 3, n: 1, text: "Frau: Entschuldigung, wie viel kosten die Äpfel? Mann: Das Kilo kostet zwei Euro achtzig. Aber heute haben wir ein Angebot: zwei Kilo für fünf Euro. Frau: Prima, dann nehme ich zwei Kilo.", q: "Wie viel bezahlt die Frau?", o: ["2,80 Euro", "5,60 Euro", "5,00 Euro"], a: 2 },
      { teil: 3, n: 1, text: "Mann: Hallo Sabine, wo bist du denn? Der Film fängt gleich an! Frau: Tut mir leid, ich stehe im Stau. Geh schon mal rein, ich komme in zehn Minuten nach. Mann: Okay, ich lasse deine Karte an der Kasse.", q: "Warum kommt Sabine zu spät?", o: ["Sie hat den Bus verpasst.", "Sie steht im Stau.", "Sie hat die Karte vergessen."], a: 1 },
      { teil: 3, n: 1, text: "Frau: Guten Tag, ich möchte dieses Paket nach Spanien schicken. Mann: Gern. Normal oder Express? Normal dauert es eine Woche, Express zwei Tage. Frau: Normal reicht. Der Geburtstag ist erst in zwei Wochen.", q: "Wie schickt die Frau das Paket?", o: ["normal", "Express", "Sie schickt es heute nicht."], a: 0 },
      { teil: 4, n: 2, text: "Mann: Frau Martínez, Sie kommen aus Santo Domingo und leben seit zehn Jahren in Köln. Wie war der Anfang? Frau: Ehrlich gesagt, sehr schwer. Ich konnte nur ein bisschen Englisch und gar kein Deutsch. Im ersten Winter war ich oft traurig, weil ich die Sonne und meine Familie vermisst habe.", q: "Frau Martínez konnte am Anfang schon gut Deutsch.", o: ["Ja", "Nein"], a: 1 },
      { teil: 4, n: 2, text: "Mann: Und wie haben Sie Deutsch gelernt? Frau: Zuerst habe ich einen Kurs an der Volkshochschule gemacht. Aber am meisten habe ich im Chor gelernt. Dort singe ich jeden Dienstag mit Leuten aus meinem Viertel, und danach trinken wir immer noch etwas zusammen.", q: "Frau Martínez singt in einem Chor.", o: ["Ja", "Nein"], a: 0 },
      { teil: 4, n: 2, text: "Mann: Was machen Sie heute beruflich? Frau: Ich bin Krankenpflegerin in einem Krankenhaus. Die Arbeit ist anstrengend, besonders die Nachtschichten, aber sie macht mir Spaß. Mann: Möchten Sie irgendwann zurück in die Karibik? Frau: Im Urlaub ja, jedes Jahr. Aber leben möchte ich in Köln.", q: "Frau Martínez möchte wieder in der Dominikanischen Republik leben.", o: ["Ja", "Nein"], a: 1 }
    ],
    lesen: [
      { teil: 1, text: "Aus der Zeitung: Ein Café, in dem man für die Zeit bezahlt\n\nIm Stadtteil Rüttenscheid hat im Oktober ein besonderes Café aufgemacht: das «Wohnzimmer». Hier gibt es Kaffee, Tee und Kuchen, aber man bezahlt nicht für das Essen, sondern für die Zeit: fünf Cent pro Minute.", q: "Im Café «Wohnzimmer» bezahlt man …", o: ["für jedes Getränk.", "für die Zeit im Café.", "gar nichts."], a: 1 },
      { teil: 1, text: "(Fortsetzung) Die Idee hatte die Studentin Merve Aydın. «Viele junge Leute haben kleine Wohnungen und keinen Platz, um Freunde zu treffen», sagt sie. Im Café gibt es Sofas, Brettspiele und schnelles Internet. Am Vormittag kommen vor allem Studenten zum Lernen, am Abend Gruppen zum Spielen.", q: "Am Vormittag kommen vor allem …", o: ["Familien mit Kindern.", "Gruppen zum Spielen.", "Studenten zum Lernen."], a: 2 },
      { teil: 1, text: "(Fortsetzung) Nicht alle finden die Idee gut. «Fünf Cent pro Minute, das sind drei Euro pro Stunde. Für einen ganzen Nachmittag ist das zu teuer», meint ein Nachbar. Merve Aydın will deshalb ab Januar einen Monatspass für dreißig Euro anbieten.", q: "Was plant Merve Aydın für Januar?", o: ["einen Monatspass", "höhere Preise", "ein zweites Café"], a: 0 },
      { teil: 2, text: "Kaufhaus Brandt – Wegweiser\n4. Stock: Restaurant · Toiletten · Kundenservice\n3. Stock: Elektronik · Handys · Computer · Spielwaren\n2. Stock: Kindermode · Sport · Koffer und Taschen\n1. Stock: Damenmode · Herrenmode · Schuhe\nErdgeschoss: Kosmetik · Schmuck · Bücher · Zeitschriften\nUntergeschoss: Lebensmittel · Haushalt · Geschenkpapier", q: "Sie möchten einen Koffer für Ihre Reise kaufen. Wohin gehen Sie?", o: ["1. Stock", "2. Stock", "anderer Stock"], a: 1 },
      { teil: 2, text: "Kaufhaus Brandt – Wegweiser\n4. Stock: Restaurant · Toiletten · Kundenservice\n3. Stock: Elektronik · Handys · Computer · Spielwaren\n2. Stock: Kindermode · Sport · Koffer und Taschen\n1. Stock: Damenmode · Herrenmode · Schuhe\nErdgeschoss: Kosmetik · Schmuck · Bücher · Zeitschriften\nUntergeschoss: Lebensmittel · Haushalt · Geschenkpapier", q: "Sie möchten Ihrer Schwester ein Buch schenken. Wohin gehen Sie?", o: ["Erdgeschoss", "3. Stock", "anderer Stock"], a: 0 },
      { teil: 2, text: "Kaufhaus Brandt – Wegweiser\n4. Stock: Restaurant · Toiletten · Kundenservice\n3. Stock: Elektronik · Handys · Computer · Spielwaren\n2. Stock: Kindermode · Sport · Koffer und Taschen\n1. Stock: Damenmode · Herrenmode · Schuhe\nErdgeschoss: Kosmetik · Schmuck · Bücher · Zeitschriften\nUntergeschoss: Lebensmittel · Haushalt · Geschenkpapier", q: "Ihr Handy ist kaputt, und Sie brauchen ein neues. Wohin gehen Sie?", o: ["Erdgeschoss", "1. Stock", "anderer Stock"], a: 2 },
      { teil: 3, text: "E-Mail von Kerstin, Teil 1\n\nLiebe Ana,\nvielen Dank für deine Nachricht! Entschuldige, dass ich erst heute antworte, aber wir sind letzte Woche umgezogen. Die neue Wohnung ist größer als die alte und hat einen Garten. Die Kinder spielen jeden Tag draußen.", q: "Warum hat Kerstin nicht früher geschrieben?", o: ["Sie war krank.", "Sie ist umgezogen.", "Sie war im Urlaub."], a: 1 },
      { teil: 3, text: "E-Mail von Kerstin, Teil 2\n\nAm zwölften Mai feiern wir eine kleine Einweihungsparty, und du bist natürlich herzlich eingeladen! Wir fangen um 16 Uhr mit Kaffee und Kuchen an, am Abend wollen wir im Garten grillen. Du kannst gern deinen Freund mitbringen.", q: "Was machen sie am Abend?", o: ["Sie trinken Kaffee.", "Sie gehen ins Restaurant.", "Sie grillen im Garten."], a: 2 },
      { teil: 3, text: "E-Mail von Kerstin, Teil 3\n\nUnsere neue Adresse ist Lindenweg 7. Mit dem Bus 142 bist du in zwanzig Minuten bei uns, die Haltestelle heißt «Lindenplatz». Bitte sag mir bis Ende April, ob du kommst.\nLiebe Grüße\nKerstin", q: "Was soll Ana bis Ende April machen?", o: ["Kerstin sagen, ob sie kommt.", "Einen Kuchen backen.", "Den Bus 142 nehmen."], a: 0 },
      { teil: 4, text: "Anzeigen:\na) Gebrauchte Möbel günstig: Sofa, Schrank und Esstisch. Nur Abholung am Samstag.\nb) Sprachcafé im Stadtteilzentrum: jeden Donnerstag ab 18 Uhr Deutsch sprechen mit Muttersprachlern. Eintritt frei, alle Niveaus willkommen.\nc) Fahrradwerkstatt Speiche: Reparatur in 24 Stunden, auch samstags geöffnet. Gebrauchte Fahrräder ab 90 Euro.\nd) Salsa für Anfänger: neuer Kurs ab März, immer montags um 19 Uhr, 8 Abende für 64 Euro. Sie brauchen keinen Partner.", q: "Lucía möchte abends Deutsch sprechen, aber sie hat wenig Geld. Welche Anzeige passt?", o: ["Anzeige a", "Anzeige b", "Anzeige c", "Anzeige d", "Keine Anzeige passt."], a: 1 },
      { teil: 4, text: "Anzeigen:\na) Gebrauchte Möbel günstig: Sofa, Schrank und Esstisch. Nur Abholung am Samstag.\nb) Sprachcafé im Stadtteilzentrum: jeden Donnerstag ab 18 Uhr Deutsch sprechen mit Muttersprachlern. Eintritt frei, alle Niveaus willkommen.\nc) Fahrradwerkstatt Speiche: Reparatur in 24 Stunden, auch samstags geöffnet. Gebrauchte Fahrräder ab 90 Euro.\nd) Salsa für Anfänger: neuer Kurs ab März, immer montags um 19 Uhr, 8 Abende für 64 Euro. Sie brauchen keinen Partner.", q: "Tim möchte tanzen lernen, hat aber keine Partnerin. Welche Anzeige passt?", o: ["Anzeige a", "Anzeige b", "Anzeige c", "Anzeige d", "Keine Anzeige passt."], a: 3 },
      { teil: 4, text: "Anzeigen:\na) Gebrauchte Möbel günstig: Sofa, Schrank und Esstisch. Nur Abholung am Samstag.\nb) Sprachcafé im Stadtteilzentrum: jeden Donnerstag ab 18 Uhr Deutsch sprechen mit Muttersprachlern. Eintritt frei, alle Niveaus willkommen.\nc) Fahrradwerkstatt Speiche: Reparatur in 24 Stunden, auch samstags geöffnet. Gebrauchte Fahrräder ab 90 Euro.\nd) Salsa für Anfänger: neuer Kurs ab März, immer montags um 19 Uhr, 8 Abende für 64 Euro. Sie brauchen keinen Partner.", q: "Familie Öztürk sucht jemanden, der nachmittags auf ihre Tochter aufpasst. Welche Anzeige passt?", o: ["Anzeige a", "Anzeige b", "Anzeige c", "Anzeige d", "Keine Anzeige passt."], a: 4 }
    ],
    schreiben: [
      { teil: 1, task: "Sie wollten heute Abend mit Ihrem Freund Max ins Kino gehen, aber Sie können nicht. Schreiben Sie Max eine SMS. Schreiben Sie 20 bis 30 Wörter und schreiben Sie zu allen drei Punkten.", p: ["Entschuldigen Sie sich und sagen Sie, warum Sie nicht kommen können.", "Machen Sie einen neuen Vorschlag.", "Was soll Max mit Ihrer Kinokarte machen?"], words: 30, model: "Hallo Max, tut mir leid, aber ich kann heute nicht ins Kino kommen. Ich muss länger arbeiten. Gehen wir am Samstag? Gib meine Karte doch Lisa. Liebe Grüße, Carlos" },
      { teil: 2, task: "Ihre Kursleiterin, Frau Wolf, hat alle zu einem Kursfest am Freitag eingeladen. Sie können nicht kommen. Schreiben Sie Frau Wolf eine E-Mail. Schreiben Sie 30 bis 40 Wörter und schreiben Sie zu allen drei Punkten. Vergessen Sie nicht Anrede und Gruß.", p: ["Bedanken Sie sich für die Einladung.", "Erklären Sie, warum Sie nicht kommen können.", "Bieten Sie Ihre Hilfe an."], words: 40, model: "Liebe Frau Wolf,\nvielen Dank für die Einladung zum Kursfest. Leider kann ich am Freitag nicht kommen, weil ich meine Schwester vom Flughafen abholen muss. Soll ich vielleicht einen Kuchen backen?\nMit freundlichen Grüßen\nCarlos Pérez" },
      { teil: 2, task: "In Ihrer Wohnung funktioniert seit zwei Tagen die Heizung nicht. Schreiben Sie Ihrer Vermieterin, Frau Krämer, eine E-Mail. Schreiben Sie 30 bis 40 Wörter und schreiben Sie zu allen drei Punkten. Vergessen Sie nicht Anrede und Gruß.", p: ["Beschreiben Sie das Problem.", "Bitten Sie um schnelle Hilfe.", "Schreiben Sie, wann Sie zu Hause sind."], words: 40, model: "Sehr geehrte Frau Krämer,\nseit zwei Tagen funktioniert die Heizung in meiner Wohnung nicht, und es ist sehr kalt. Könnten Sie bitte schnell einen Handwerker schicken? Ich bin jeden Tag ab 16 Uhr zu Hause.\nMit freundlichen Grüßen\nCarlos Pérez" }
    ],
    sprechen: [
      { teil: 1, task: "Fragen zur Person. Sie und Ihr Partner bekommen je vier Karten mit einem Wort. Stellen Sie Ihrem Partner zu jeder Karte eine Frage und beantworten Sie dann seine Fragen.", hints: ["Geburtstag?", "Wohnort?", "Beruf?", "Hobby?", "Sprachen?", "Familie?", "Reisen?", "Lieblingsessen?"], model: "Wann hast du Geburtstag? – Am vierzehnten Juli. Wo wohnst du? – Ich wohne in Essen, im Stadtteil Rüttenscheid. Was bist du von Beruf? – Ich bin Ingenieur und arbeite in einer Firma im Zentrum. Was ist dein Hobby? – Ich tanze gern Bachata und spiele Fußball in einem Verein." },
      { teil: 2, task: "Erzählen Sie von sich. Auf Ihrer Karte steht die Frage: Was machen Sie am Wochenende? Sprechen Sie zu den vier Punkten. Danach stellt Ihnen Ihr Partner eine Frage.", hints: ["Familie?", "Sport?", "Freunde?", "Haushalt?"], model: "Am Wochenende schlafe ich zuerst lange, weil ich unter der Woche um sechs Uhr aufstehe. Am Samstagvormittag mache ich den Haushalt: Ich putze die Wohnung und kaufe ein. Danach spiele ich Fußball in einem Verein. Am Abend treffe ich oft Freunde, wir gehen essen oder tanzen Salsa. Am Sonntag telefoniere ich mit meiner Familie in Santo Domingo. Das ist mir sehr wichtig, denn ich vermisse sie oft." },
      { teil: 3, task: "Etwas gemeinsam planen. Ein Kollege hat Geburtstag. Sie möchten am Samstag zusammen ein Geschenk für ihn kaufen. Wann haben Sie beide Zeit? Ihr Kalender: 9 bis 11 Uhr Deutschkurs, 13 Uhr Mittagessen mit Lena, 15 bis 17 Uhr Fußball, ab 20 Uhr Kino.", hints: ["Wann hast du Zeit?", "Wie wäre es mit …?", "Da kann ich leider nicht, weil …", "Das passt mir gut.", "Einverstanden!"], model: "Wann hast du am Samstag Zeit? Wie wäre es mit zehn Uhr? – Da kann ich leider nicht, da habe ich Deutschkurs. Ich habe erst ab elf Zeit. – Um elf muss ich meiner Schwester beim Umzug helfen. Geht es am Nachmittag, so um drei? – Nein, von drei bis fünf spiele ich Fußball. Wie wäre es mit halb sechs? – Ja, das passt mir gut. Treffen wir uns vor dem Kaufhaus? – Einverstanden! Und was schenken wir ihm? Vielleicht ein Buch? – Gute Idee!" }
    ]
  };
})();
