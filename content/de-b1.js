/* Werkstatt Ü — nivel B1 (Goethe-Zertifikat B1) */
(function () {
  const DE = window.DE;

  /* ---------- Temas de vocabulario ---------- */
  Object.assign(DE.themes, {
    "b1-leben": { name: "Etapas de la vida", de: "Lebensstationen", level: "B1" },
    "b1-beruf": { name: "Trabajo y solicitudes", de: "Arbeit & Bewerbung", level: "B1" },
    "b1-nachbarn": { name: "Vecindad y convivencia", de: "Nachbarschaft & Zusammenleben", level: "B1" },
    "b1-gesundheit": { name: "Salud y alimentación", de: "Gesundheit & Ernährung", level: "B1" },
    "b1-reisen": { name: "Movilidad y viajes", de: "Mobilität & Reisen", level: "B1" },
    "b1-medien": { name: "Medios y comunicación", de: "Medien & Kommunikation", level: "B1" },
    "b1-umwelt": { name: "Medio ambiente", de: "Umwelt & Klima", level: "B1" },
    "b1-gesellschaft": { name: "Sociedad y voluntariado", de: "Gesellschaft & Ehrenamt", level: "B1" },
    "b1-kultur": { name: "Cultura y ocio", de: "Kultur & Freizeit", level: "B1" },
    "b1-bildung": { name: "Formación y aprendizaje", de: "Bildung & Lernen", level: "B1" },
    "b1-geld": { name: "Consumo y dinero", de: "Konsum & Geld", level: "B1" },
    "b1-redemittel": { name: "Frases clave B1: opinar, quejarse, correos", de: "Redemittel B1", level: "B1" }
  });

  /* ---------- Vocabulario: [tema, artículo, palabra, plural | Perfekt, español, ejemplo] ---------- */
  DE.vocab.push(
    ["b1-leben", "die", "Kindheit", "-en", "la infancia", "In meiner Kindheit habe ich viel am Strand gespielt."],
    ["b1-leben", "die", "Jugend", "–", "la juventud, la adolescencia", "In meiner Jugend wollte ich Pilot werden."],
    ["b1-leben", "der", "Erwachsene", "-n", "el adulto (ein Erwachsener)", "Für Erwachsene kostet der Eintritt zwölf Euro."],
    ["b1-leben", "die", "Schwangerschaft", "-en", "el embarazo", "Während der Schwangerschaft hat sie weiter gearbeitet."],
    ["b1-leben", "die", "Geburt", "-en", "el nacimiento, el parto", "Nach der Geburt ihres Sohnes hat sie ein Jahr Elternzeit genommen."],
    ["b1-leben", "", "aufwachsen", "ist aufgewachsen", "criarse, crecer", "Ich bin bei meinen Großeltern in Santiago aufgewachsen."],
    ["b1-leben", "die", "Ehe", "-n", "el matrimonio", "Ihre Ehe hält schon über vierzig Jahre."],
    ["b1-leben", "", "sich verloben", "hat sich verlobt", "comprometerse (para casarse)", "Nach drei Jahren haben sie sich verlobt."],
    ["b1-leben", "", "verheiratet", "", "casado/a", "Meine Eltern sind seit dreißig Jahren verheiratet."],
    ["b1-leben", "", "ledig", "", "soltero/a (estado civil)", "Im Formular steht: ledig, verheiratet oder geschieden."],
    ["b1-leben", "", "geschieden", "", "divorciado/a", "Meine Eltern sind seit zehn Jahren geschieden."],
    ["b1-leben", "die", "Scheidung", "-en", "el divorcio", "Die Scheidung war für die Kinder nicht leicht."],
    ["b1-leben", "", "volljährig", "", "mayor de edad", "In Deutschland ist man mit achtzehn Jahren volljährig."],
    ["b1-leben", "die", "Erinnerung", "-en", "el recuerdo", "Ich habe schöne Erinnerungen an meine Schulzeit."],
    ["b1-leben", "", "sich erinnern", "hat sich erinnert", "acordarse, recordar (an + acusativo = de)", "Erinnerst du dich an unseren ersten Urlaub?"],
    ["b1-leben", "die", "Generation", "-en", "la generación", "In unserem Haus wohnen drei Generationen zusammen."],
    ["b1-leben", "der", "Abschied", "-e", "la despedida", "Der Abschied am Flughafen war sehr traurig."],
    ["b1-leben", "", "sterben", "ist gestorben", "morir", "Meine Uroma ist mit fast hundert Jahren gestorben."],
    ["b1-leben", "die", "Rente", "-n", "la jubilación, la pensión", "Mein Opa ist seit zwei Jahren in Rente."],
    ["b1-leben", "die", "Erziehung", "–", "la crianza, la educación (en casa)", "Beide Eltern kümmern sich um die Erziehung der Kinder."],

    ["b1-beruf", "die", "Bewerbung", "-en", "la solicitud de empleo, la postulación", "Ich schicke meine Bewerbung per E-Mail."],
    ["b1-beruf", "", "sich bewerben", "hat sich beworben", "postularse (um = a un puesto, bei = en una empresa)", "Ich habe mich bei einer Softwarefirma beworben."],
    ["b1-beruf", "die", "Stellenanzeige", "-n", "el anuncio de empleo", "Ich habe die Stellenanzeige auf einem Jobportal gefunden."],
    ["b1-beruf", "das", "Anschreiben", "-", "la carta de presentación", "Im Anschreiben erkläre ich, warum ich die Stelle möchte."],
    ["b1-beruf", "die", "Bewerbungsunterlagen", "pl", "los documentos de la solicitud (currículum, carta, certificados)", "Bitte schicken Sie Ihre vollständigen Bewerbungsunterlagen per E-Mail."],
    ["b1-beruf", "der", "Arbeitnehmer", "-", "el trabajador, el empleado", "Arbeitnehmer haben in Deutschland mindestens zwanzig Urlaubstage im Jahr."],
    ["b1-beruf", "das", "Vorstellungsgespräch", "-e", "la entrevista de trabajo", "Morgen habe ich ein Vorstellungsgespräch bei einer Baufirma."],
    ["b1-beruf", "", "sich vorstellen", "hat sich vorgestellt", "presentarse (sich etwas vorstellen = imaginarse algo)", "Darf ich mich kurz vorstellen? Mein Name ist Carlos Pérez."],
    ["b1-beruf", "die", "Kenntnisse", "pl", "los conocimientos", "Für die Stelle brauchen Sie gute Kenntnisse in Excel."],
    ["b1-beruf", "die", "Voraussetzung", "-en", "el requisito", "Ein Führerschein ist Voraussetzung für diese Stelle."],
    ["b1-beruf", "", "netto", "", "neto (lo que queda después de impuestos)", "Wie viel verdienst du netto im Monat?"],
    ["b1-beruf", "der", "Arbeitgeber", "-", "el empleador, la empresa", "Mein Arbeitgeber bezahlt mir das Deutschlandticket."],
    ["b1-beruf", "", "befördern", "hat befördert", "ascender (a alguien en el trabajo)", "Nach drei Jahren wurde sie zur Teamleiterin befördert."],
    ["b1-beruf", "die", "Kündigung", "-en", "la renuncia, el despido (la carta)", "Er hat seine Kündigung schriftlich abgegeben."],
    ["b1-beruf", "die", "Probezeit", "-en", "el período de prueba", "Die Probezeit dauert sechs Monate."],
    ["b1-beruf", "die", "Gleitzeit", "–", "el horario flexible", "Dank Gleitzeit kann ich zwischen sieben und neun Uhr anfangen."],
    ["b1-beruf", "die", "Stärke", "-n", "la fortaleza, el punto fuerte", "Teamarbeit ist eine meiner Stärken."],
    ["b1-beruf", "", "zuständig", "", "responsable, encargado/a (für = de)", "Wer ist bei Ihnen für die Bewerbungen zuständig?"],
    ["b1-beruf", "das", "Praktikum", "Praktika", "la pasantía, las prácticas", "Während des Studiums habe ich ein Praktikum gemacht."],
    ["b1-beruf", "die", "Schwäche", "-n", "la debilidad, el punto débil", "Meine größte Schwäche ist die Ungeduld."],

    ["b1-nachbarn", "die", "Nachbarschaft", "-en", "el vecindario, la vecindad", "In unserer Nachbarschaft kennt jeder jeden."],
    ["b1-nachbarn", "das", "Zusammenleben", "–", "la convivencia", "Für ein gutes Zusammenleben braucht man klare Regeln."],
    ["b1-nachbarn", "der", "Lärm", "–", "el ruido", "Der Lärm von der Baustelle beginnt schon um sieben Uhr."],
    ["b1-nachbarn", "die", "Ruhezeit", "-en", "las horas de silencio", "Von 22 bis 6 Uhr ist im ganzen Haus Ruhezeit."],
    ["b1-nachbarn", "", "stören", "hat gestört", "molestar", "Stört es Sie, wenn ich kurz Musik höre?"],
    ["b1-nachbarn", "", "sich beschweren", "hat sich beschwert", "quejarse (über + acusativo = de)", "Die Nachbarin hat sich über unseren Hund beschwert."],
    ["b1-nachbarn", "die", "Beschwerde", "-n", "la queja, el reclamo", "Wir haben eine Beschwerde an die Hausverwaltung geschrieben."],
    ["b1-nachbarn", "die", "Hausverwaltung", "-en", "la administración del edificio", "Die Hausverwaltung schickt morgen jemanden für die Heizung."],
    ["b1-nachbarn", "das", "Treppenhaus", "¨-er", "la escalera (del edificio)", "Im Treppenhaus dürfen keine Fahrräder stehen."],
    ["b1-nachbarn", "die", "Rücksicht", "–", "la consideración (hacia los demás)", "Bitte nehmen Sie Rücksicht auf Ihre Nachbarn."],
    ["b1-nachbarn", "", "rücksichtsvoll", "", "considerado/a, respetuoso/a", "Unsere neuen Nachbarn sind sehr rücksichtsvoll."],
    ["b1-nachbarn", "", "hilfsbereit", "", "servicial, dispuesto/a a ayudar", "Herr Kowalski ist sehr hilfsbereit und gießt unsere Blumen."],
    ["b1-nachbarn", "der", "Ärger", "–", "el disgusto, los problemas", "Wegen der Parkplätze gibt es oft Ärger mit den Nachbarn."],
    ["b1-nachbarn", "der", "Hinterhof", "¨-e", "el patio interior (detrás del edificio)", "Die Mülltonnen stehen im Hinterhof."],
    ["b1-nachbarn", "", "sich einigen", "hat sich geeinigt", "ponerse de acuerdo (auf = en)", "Nach langer Diskussion haben wir uns auf einen Termin geeinigt."],
    ["b1-nachbarn", "der", "Kompromiss", "-e", "el término medio, el acuerdo (¡no «compromiso» de obligación!)", "Am Ende haben wir einen Kompromiss gefunden."],
    ["b1-nachbarn", "", "annehmen", "hat angenommen", "recibir (un paquete por alguien); aceptar", "Kannst du bitte mein Paket annehmen? Ich bin nicht zu Hause."],
    ["b1-nachbarn", "der", "Zettel", "-", "la notita, el papelito", "Sie hat einen Zettel an die Haustür gehängt."],
    ["b1-nachbarn", "", "grillen", "hat gegrillt", "asar a la parrilla, hacer una parrillada", "Darf man auf dem Balkon grillen?"],
    ["b1-nachbarn", "", "gegenseitig", "", "mutuo, recíproco", "In unserem Haus helfen wir uns gegenseitig."],

    ["b1-gesundheit", "die", "Ernährung", "–", "la alimentación", "Eine gesunde Ernährung ist mir sehr wichtig."],
    ["b1-gesundheit", "", "sich ernähren", "hat sich ernährt", "alimentarse", "Seit einem Jahr ernähre ich mich vegetarisch."],
    ["b1-gesundheit", "die", "Zutat", "-en", "el ingrediente", "Für einen Sancocho braucht man viele Zutaten."],
    ["b1-gesundheit", "", "enthalten", "hat enthalten", "contener", "Dieses Müsli enthält sehr viel Zucker."],
    ["b1-gesundheit", "die", "Vorsorge", "–", "la prevención, el chequeo preventivo", "Zur Vorsorge gehe ich einmal im Jahr zum Zahnarzt."],
    ["b1-gesundheit", "", "vorbeugen", "hat vorgebeugt", "prevenir (+ dativo)", "Mit Sport kann man vielen Krankheiten vorbeugen."],
    ["b1-gesundheit", "die", "Bewegung", "-en", "el movimiento, la actividad física", "Bewegung an der frischen Luft tut gut."],
    ["b1-gesundheit", "", "abnehmen", "hat abgenommen", "bajar de peso (también: descolgar el teléfono)", "Er hat in drei Monaten fünf Kilo abgenommen."],
    ["b1-gesundheit", "", "zunehmen", "hat zugenommen", "subir de peso, engordar", "Über Weihnachten habe ich zwei Kilo zugenommen."],
    ["b1-gesundheit", "", "erschöpft", "", "agotado/a", "Nach der Nachtschicht bin ich völlig erschöpft."],
    ["b1-gesundheit", "die", "Sucht", "¨-e", "la adicción", "Rauchen kann schnell zur Sucht werden."],
    ["b1-gesundheit", "die", "Impfung", "-en", "la vacuna, la vacunación", "Die Impfung gegen Grippe ist für ältere Menschen kostenlos."],
    ["b1-gesundheit", "", "allergisch", "", "alérgico/a (gegen = a)", "Mein Sohn ist allergisch gegen Katzen."],
    ["b1-gesundheit", "die", "Verletzung", "-en", "la lesión, la herida", "Nach der Verletzung konnte er drei Monate nicht spielen."],
    ["b1-gesundheit", "der", "Blutdruck", "–", "la presión arterial", "Die Ärztin misst meinen Blutdruck."],
    ["b1-gesundheit", "die", "Behandlung", "-en", "el tratamiento", "Die Behandlung dauert ungefähr vier Wochen."],
    ["b1-gesundheit", "die", "Notaufnahme", "-n", "la sala de emergencias", "In der Nacht sind wir mit unserer Tochter in die Notaufnahme gefahren."],
    ["b1-gesundheit", "die", "Nebenwirkung", "-en", "el efecto secundario", "Hat dieses Medikament Nebenwirkungen?"],
    ["b1-gesundheit", "der", "Facharzt", "¨-e", "el médico especialista", "Auf einen Termin beim Facharzt wartet man oft mehrere Wochen."],
    ["b1-gesundheit", "die", "Krankmeldung", "-en", "la constancia de incapacidad, la baja médica", "Wenn man länger als drei Tage krank ist, braucht man eine Krankmeldung."],

    ["b1-reisen", "der", "Fahrgast", "¨-e", "el pasajero", "Die Fahrgäste mussten eine Stunde im Zug warten."],
    ["b1-reisen", "die", "Verbindung", "-en", "la conexión (de tren o bus)", "Die Verbindung über Hannover ist schneller."],
    ["b1-reisen", "der", "Ersatzverkehr", "–", "el servicio de buses sustitutos", "Wegen Bauarbeiten gibt es heute Ersatzverkehr mit Bussen."],
    ["b1-reisen", "das", "Verkehrsmittel", "-", "el medio de transporte", "In der Stadt nutze ich vor allem öffentliche Verkehrsmittel."],
    ["b1-reisen", "", "ausfallen", "ist ausgefallen", "cancelarse, no tener lugar", "Der Zug nach Hamburg fällt heute aus."],
    ["b1-reisen", "die", "Ermäßigung", "-en", "el descuento, la tarifa reducida", "Mit dem Studentenausweis bekommst du eine Ermäßigung."],
    ["b1-reisen", "die", "Hauptverkehrszeit", "-en", "la hora pico", "In der Hauptverkehrszeit sind die Züge total voll."],
    ["b1-reisen", "der", "Mietwagen", "-", "el carro de alquiler", "Am Flughafen holen wir den Mietwagen ab."],
    ["b1-reisen", "das", "Handgepäck", "–", "el equipaje de mano", "Im Handgepäck sind nur kleine Flaschen erlaubt."],
    ["b1-reisen", "die", "Jugendherberge", "-n", "el albergue juvenil", "In der Jugendherberge übernachten auch Erwachsene günstig."],
    ["b1-reisen", "die", "Pauschalreise", "-n", "el paquete turístico (todo incluido)", "Eine Pauschalreise nach Punta Cana ist oft billiger als ein Flug allein."],
    ["b1-reisen", "", "stornieren", "hat storniert", "cancelar (una reserva)", "Kann ich das Hotel kostenlos stornieren?"],
    ["b1-reisen", "die", "Mitfahrgelegenheit", "-en", "el viaje compartido (en carro)", "Ich fahre mit einer Mitfahrgelegenheit nach München."],
    ["b1-reisen", "die", "Strecke", "-n", "el trayecto, la ruta", "Die Strecke zwischen Köln und Bonn ist heute gesperrt."],
    ["b1-reisen", "", "gesperrt", "", "cerrado/a, bloqueado/a (calle, vía)", "Die Brücke ist wegen Bauarbeiten gesperrt."],
    ["b1-reisen", "der", "Umweg", "-e", "el desvío, el rodeo", "Wegen der Baustelle müssen wir einen Umweg fahren."],
    ["b1-reisen", "die", "Grenze", "-n", "la frontera", "An der Grenze wurden unsere Pässe kontrolliert."],
    ["b1-reisen", "der", "Zoll", "¨-e", "la aduana (también: el arancel)", "Am Zoll mussten wir unseren Koffer öffnen."],
    ["b1-reisen", "", "pendeln", "ist gependelt", "viajar a diario entre la casa y el trabajo", "Ich pendle jeden Tag von Essen nach Düsseldorf."],
    ["b1-reisen", "die", "Panne", "-n", "la avería (del carro)", "Auf der Autobahn hatten wir eine Panne."],

    ["b1-medien", "", "speichern", "hat gespeichert", "guardar (un archivo, un número)", "Vergiss nicht, das Dokument zu speichern!"],
    ["b1-medien", "der", "Sender", "-", "el canal, la emisora", "Auf welchem Sender kommt heute das Spiel?"],
    ["b1-medien", "die", "Werbung", "–", "la publicidad, los comerciales", "Im Fernsehen gibt es viel zu viel Werbung."],
    ["b1-medien", "", "löschen", "hat gelöscht", "borrar, eliminar", "Ich habe aus Versehen alle Fotos gelöscht."],
    ["b1-medien", "das", "Netzwerk", "-e", "la red (social)", "In sozialen Netzwerken teilt sie viele Fotos."],
    ["b1-medien", "", "teilen", "hat geteilt", "compartir", "Kannst du den Link mit mir teilen?"],
    ["b1-medien", "der", "Akku", "-s", "la batería (del celular)", "Mein Akku ist fast leer. Hast du ein Ladegerät?"],
    ["b1-medien", "", "hochladen", "hat hochgeladen", "subir (un archivo)", "Laden Sie das Formular bitte als PDF hoch."],
    ["b1-medien", "die", "Benachrichtigung", "-en", "la notificación", "Ich habe fast alle Benachrichtigungen ausgeschaltet."],
    ["b1-medien", "", "sich einloggen", "hat sich eingeloggt", "iniciar sesión", "Ich kann mich nicht in mein Konto einloggen."],
    ["b1-medien", "die", "Datei", "-en", "el archivo", "Die Datei ist zu groß für eine E-Mail."],
    ["b1-medien", "der", "Anhang", "¨-e", "el (archivo) adjunto", "Im Anhang finden Sie meinen Lebenslauf."],
    ["b1-medien", "die", "Schlagzeile", "-n", "el titular", "Die Schlagzeile klingt viel dramatischer als der Artikel."],
    ["b1-medien", "die", "Meinung", "-en", "la opinión", "Jeder darf seine Meinung frei sagen."],
    ["b1-medien", "die", "Quelle", "-n", "la fuente", "Prüf immer die Quelle, bevor du eine Nachricht teilst."],
    ["b1-medien", "", "erreichbar", "", "localizable, disponible", "Im Urlaub bin ich nicht erreichbar."],
    ["b1-medien", "der", "Datenschutz", "–", "la protección de datos", "Wegen des Datenschutzes darf ich Ihnen die Nummer nicht geben."],
    ["b1-medien", "", "abonnieren", "hat abonniert", "suscribirse a", "Ich habe einen Podcast über Geschichte abonniert."],
    ["b1-medien", "der", "Rundfunkbeitrag", "¨-e", "la cuota obligatoria de radio y TV", "Jeder Haushalt in Deutschland zahlt den Rundfunkbeitrag."],
    ["b1-medien", "", "süchtig", "", "adicto/a (nach = a)", "Viele Jugendliche sind süchtig nach ihrem Handy."],

    ["b1-umwelt", "die", "Plastiktüte", "-n", "la bolsa plástica", "Plastiktüten gibt es in deutschen Supermärkten kaum noch."],
    ["b1-umwelt", "", "schützen", "hat geschützt", "proteger", "Wie können wir die Natur besser schützen?"],
    ["b1-umwelt", "der", "Umweltschutz", "–", "la protección del medio ambiente", "Umweltschutz beginnt im Alltag."],
    ["b1-umwelt", "der", "Klimawandel", "–", "el cambio climático", "Den Klimawandel spürt man auch in Deutschland."],
    ["b1-umwelt", "die", "Mülltrennung", "–", "la separación de la basura", "Am Anfang fand ich die Mülltrennung sehr kompliziert."],
    ["b1-umwelt", "der", "Abfall", "¨-e", "los desechos, la basura", "Bitte werfen Sie keinen Abfall in den Wald."],
    ["b1-umwelt", "die", "Biotonne", "-n", "el contenedor de residuos orgánicos", "Kaffeesatz und Eierschalen kommen in die Biotonne."],
    ["b1-umwelt", "", "verschwenden", "hat verschwendet", "desperdiciar", "Wir verschwenden viel zu viel Wasser."],
    ["b1-umwelt", "die", "Lebensmittelverschwendung", "–", "el desperdicio de alimentos", "Gegen Lebensmittelverschwendung kann jeder etwas tun."],
    ["b1-umwelt", "die", "Energie", "-n", "la energía", "Mit LED-Lampen spart man Energie."],
    ["b1-umwelt", "", "erneuerbar", "", "renovable", "Mehr als die Hälfte unseres Stroms kommt aus erneuerbaren Energien."],
    ["b1-umwelt", "die", "Verpackung", "-en", "el empaque, el envase", "Diese Kekse haben viel zu viel Verpackung."],
    ["b1-umwelt", "", "vermeiden", "hat vermieden", "evitar", "Ich versuche, Plastik zu vermeiden."],
    ["b1-umwelt", "", "umweltfreundlich", "", "ecológico/a, amigable con el ambiente", "Das Fahrrad ist das umweltfreundlichste Verkehrsmittel."],
    ["b1-umwelt", "die", "Luftverschmutzung", "–", "la contaminación del aire", "In vielen Großstädten ist die Luftverschmutzung ein Problem."],
    ["b1-umwelt", "", "verschmutzen", "hat verschmutzt", "contaminar, ensuciar", "Plastik verschmutzt die Meere."],
    ["b1-umwelt", "die", "Hitzewelle", "-n", "la ola de calor", "Während der Hitzewelle hatten wir fast 40 Grad."],
    ["b1-umwelt", "das", "Hochwasser", "-", "la inundación, la crecida (de un río)", "Das Hochwasser hat viele Häuser zerstört."],
    ["b1-umwelt", "", "nachhaltig", "", "sostenible", "Ich möchte nachhaltiger leben und weniger Fleisch essen."],
    ["b1-umwelt", "", "recyceln", "hat recycelt", "reciclar", "Glas kann man fast unendlich oft recyceln."],

    ["b1-gesellschaft", "die", "Gesellschaft", "-en", "la sociedad (también: la empresa)", "Ehrenamtliche Arbeit ist wichtig für unsere Gesellschaft."],
    ["b1-gesellschaft", "das", "Ehrenamt", "¨-er", "el voluntariado, el cargo honorario", "Neben ihrem Beruf hat sie zwei Ehrenämter."],
    ["b1-gesellschaft", "", "ehrenamtlich", "", "voluntario/a, sin sueldo", "Sie arbeitet ehrenamtlich bei der Tafel."],
    ["b1-gesellschaft", "", "freiwillig", "", "voluntario/a, por propia voluntad", "Niemand zwingt ihn, er hilft ganz freiwillig."],
    ["b1-gesellschaft", "", "sich engagieren", "hat sich engagiert", "involucrarse, comprometerse (für = por)", "Er engagiert sich seit Jahren für Geflüchtete."],
    ["b1-gesellschaft", "der", "Freiwillige", "-n", "el voluntario (ein Freiwilliger)", "Die Tafel sucht neue Freiwillige für den Samstag."],
    ["b1-gesellschaft", "die", "Hilfsorganisation", "-en", "la organización humanitaria, la ONG", "Das Rote Kreuz ist eine bekannte Hilfsorganisation."],
    ["b1-gesellschaft", "die", "Tafel", "-n", "el banco de alimentos (también: la pizarra)", "Bei der Tafel bekommen Menschen mit wenig Geld günstige Lebensmittel."],
    ["b1-gesellschaft", "die", "Spende", "-n", "la donación", "Der Verein lebt von Spenden."],
    ["b1-gesellschaft", "", "spenden", "hat gespendet", "donar", "Wir haben alte Kleidung und Spielzeug gespendet."],
    ["b1-gesellschaft", "die", "Armut", "–", "la pobreza", "Auch in reichen Ländern gibt es Armut."],
    ["b1-gesellschaft", "das", "Vorurteil", "-e", "el prejuicio", "Gegen Vorurteile hilft es, Menschen persönlich kennenzulernen."],
    ["b1-gesellschaft", "die", "Gleichberechtigung", "–", "la igualdad de derechos", "Die Gleichberechtigung von Frauen und Männern steht im Grundgesetz."],
    ["b1-gesellschaft", "der", "Integrationskurs", "-e", "el curso de integración", "Im Integrationskurs lernt man Deutsch und etwas über Politik und Geschichte."],
    ["b1-gesellschaft", "die", "Behörde", "-n", "la oficina pública, la autoridad", "Bei den Behörden braucht man viel Geduld."],
    ["b1-gesellschaft", "", "beantragen", "hat beantragt", "solicitar (un trámite)", "Wir haben Kindergeld beantragt."],
    ["b1-gesellschaft", "die", "Aufenthaltserlaubnis", "-se", "el permiso de residencia", "Meine Aufenthaltserlaubnis läuft im Juni ab."],
    ["b1-gesellschaft", "die", "Staatsangehörigkeit", "-en", "la nacionalidad, la ciudadanía", "Seit 2024 erlaubt Deutschland die doppelte Staatsangehörigkeit."],
    ["b1-gesellschaft", "die", "Wahl", "-en", "la elección (votación)", "Bei der nächsten Wahl darf ich zum ersten Mal wählen."],
    ["b1-gesellschaft", "die", "Demonstration", "-en", "la manifestación, la protesta (¡no solo «demostración»!)", "Tausende Menschen haben an der Demonstration teilgenommen."],

    ["b1-kultur", "das", "Theaterstück", "-e", "la obra de teatro", "Das Theaterstück war lustig und gleichzeitig traurig."],
    ["b1-kultur", "die", "Aufführung", "-en", "la función, la representación", "Nach der Aufführung gab es langen Applaus."],
    ["b1-kultur", "die", "Vorstellung", "-en", "la función (de cine o teatro); también: la idea, la presentación", "Die Vorstellung beginnt um 20 Uhr."],
    ["b1-kultur", "das", "Publikum", "–", "el público", "Das Publikum hat begeistert geklatscht."],
    ["b1-kultur", "der", "Schriftsteller", "-", "el escritor", "Der Schriftsteller liest heute Abend aus seinem neuen Roman."],
    ["b1-kultur", "die", "Bühne", "-n", "el escenario", "Gleich kommt die Band auf die Bühne."],
    ["b1-kultur", "der", "Auftritt", "-e", "la actuación, la presentación (en escena)", "Ihr Auftritt beim Festival war fantastisch."],
    ["b1-kultur", "", "auftreten", "ist aufgetreten", "actuar, presentarse (en escena)", "Die Sängerin ist schon in vielen Ländern aufgetreten."],
    ["b1-kultur", "die", "Veranstaltung", "-en", "el evento", "Die Veranstaltung findet bei jedem Wetter statt."],
    ["b1-kultur", "", "stattfinden", "hat stattgefunden", "tener lugar, celebrarse", "Das Konzert findet im Stadtpark statt."],
    ["b1-kultur", "der", "Höhepunkt", "-e", "el punto culminante, lo mejor", "Der Höhepunkt des Abends war das Feuerwerk."],
    ["b1-kultur", "der", "Roman", "-e", "la novela (¡no «romance»!)", "Ich lese gerade einen spannenden Roman."],
    ["b1-kultur", "der", "Krimi", "-s", "la novela o película policíaca", "Sonntagabends schauen viele Deutsche einen Krimi im Fernsehen."],
    ["b1-kultur", "", "spannend", "", "emocionante, intrigante", "Der Film war bis zur letzten Minute spannend."],
    ["b1-kultur", "die", "Kunst", "¨-e", "el arte", "Mit moderner Kunst kann ich nicht viel anfangen."],
    ["b1-kultur", "der", "Künstler", "-", "el artista", "Der Künstler stammt aus Kuba und lebt in Berlin."],
    ["b1-kultur", "", "begeistert", "", "entusiasmado/a, encantado/a", "Die Kinder waren vom Zirkus total begeistert."],
    ["b1-kultur", "die", "Kritik", "-en", "la crítica, la reseña", "Der Film hat sehr gute Kritiken bekommen."],
    ["b1-kultur", "der", "Schrebergarten", "¨", "el huerto urbano (parcela con casita y jardín)", "Am Wochenende grillen wir in unserem Schrebergarten."],
    ["b1-kultur", "der", "Brauch", "¨-e", "la costumbre, la tradición", "Zu Ostern gibt es in Deutschland viele alte Bräuche."],

    ["b1-bildung", "die", "Vorlesung", "-en", "la clase universitaria (¡no «lectura»!)", "Die Vorlesung beginnt um Viertel nach zehn."],
    ["b1-bildung", "das", "Semester", "-", "el semestre", "Im ersten Semester war alles neu für mich."],
    ["b1-bildung", "die", "Berufsschule", "-n", "la escuela de formación profesional", "In der Berufsschule lernen die Azubis die Theorie."],
    ["b1-bildung", "das", "Zertifikat", "-e", "el certificado (de un examen)", "Für das Visum brauche ich ein Zertifikat auf dem Niveau B1."],
    ["b1-bildung", "", "anerkennen", "hat anerkannt", "reconocer, homologar", "Mein Diplom muss in Deutschland erst anerkannt werden."],
    ["b1-bildung", "das", "Abitur", "–", "el bachillerato alemán (el examen final del liceo)", "Nach dem Abitur möchte sie Medizin studieren."],
    ["b1-bildung", "die", "Weiterbildung", "-en", "la capacitación, la formación continua", "Meine Firma bezahlt mir eine Weiterbildung."],
    ["b1-bildung", "die", "Volkshochschule", "-n", "el centro de educación para adultos", "An der Volkshochschule gibt es günstige Sprachkurse."],
    ["b1-bildung", "der", "Einstufungstest", "-s", "la prueba de nivel", "Vor dem Kurs macht man einen Einstufungstest."],
    ["b1-bildung", "die", "Nachhilfe", "–", "las clases particulares de refuerzo", "Mein Sohn bekommt Nachhilfe in Mathe."],
    ["b1-bildung", "", "nachschlagen", "hat nachgeschlagen", "buscar (en un diccionario o un libro)", "Unbekannte Wörter schlage ich im Wörterbuch nach."],
    ["b1-bildung", "", "sich vorbereiten", "hat sich vorbereitet", "prepararse (auf + acusativo = para)", "Ich bereite mich auf die Goethe-Prüfung vor."],
    ["b1-bildung", "der", "Wortschatz", "–", "el vocabulario", "Mit Karteikarten erweitere ich meinen Wortschatz."],
    ["b1-bildung", "die", "Fähigkeit", "-en", "la habilidad, la capacidad", "Teamarbeit ist eine wichtige Fähigkeit im Beruf."],
    ["b1-bildung", "", "sich verbessern", "hat sich verbessert", "mejorar", "Mein Deutsch hat sich sehr verbessert."],
    ["b1-bildung", "die", "Fremdsprache", "-n", "la lengua extranjera", "Englisch ist für viele Deutsche die erste Fremdsprache."],
    ["b1-bildung", "das", "Stipendium", "Stipendien", "la beca", "Sie hat ein Stipendium für ihren Master bekommen."],
    ["b1-bildung", "", "auswendig", "", "de memoria", "Die Artikel lerne ich am besten auswendig."],
    ["b1-bildung", "", "teilnehmen", "hat teilgenommen", "participar (an + dativo = en)", "An dem Kurs nehmen zwölf Personen teil."],
    ["b1-bildung", "die", "Bescheinigung", "-en", "la constancia, el certificado", "Für das Amt brauche ich eine Bescheinigung von der Schule."],

    ["b1-geld", "das", "Girokonto", "Girokonten", "la cuenta corriente", "Für das Gehalt brauchen Sie ein Girokonto."],
    ["b1-geld", "", "eröffnen", "hat eröffnet", "abrir (una cuenta, un negocio)", "Ich möchte ein Konto eröffnen."],
    ["b1-geld", "die", "Überweisung", "-en", "la transferencia (bancaria)", "Die Überweisung dauert ein bis zwei Tage."],
    ["b1-geld", "der", "Kredit", "-e", "el préstamo, el crédito", "Für das Auto haben sie einen Kredit aufgenommen."],
    ["b1-geld", "die", "Schulden", "pl", "las deudas", "Er hat fast fünftausend Euro Schulden."],
    ["b1-geld", "", "leihen", "hat geliehen", "prestar; pedir prestado (sich etwas leihen)", "Kannst du mir zwanzig Euro leihen?"],
    ["b1-geld", "", "ausgeben", "hat ausgegeben", "gastar (dinero)", "Für Kleidung gebe ich nicht viel Geld aus."],
    ["b1-geld", "das", "Einkommen", "-", "los ingresos", "Mit nur einem Einkommen ist das Leben in München schwer."],
    ["b1-geld", "die", "Steuer", "-n", "el impuesto (¡ojo: das Steuer = el volante!)", "Wie viel Steuern zahlst du im Monat?"],
    ["b1-geld", "die", "Haftpflichtversicherung", "-en", "el seguro de responsabilidad civil", "Die Haftpflichtversicherung zahlt, wenn man aus Versehen etwas kaputt macht."],
    ["b1-geld", "der", "Konsum", "–", "el consumo", "Weniger Konsum ist gut für die Umwelt und für den Geldbeutel."],
    ["b1-geld", "", "reklamieren", "hat reklamiert", "reclamar (un producto defectuoso)", "Ich möchte diesen Toaster reklamieren, er funktioniert nicht."],
    ["b1-geld", "das", "Schnäppchen", "-", "la ganga, la oferta", "Die Jacke war ein echtes Schnäppchen!"],
    ["b1-geld", "die", "Rate", "-n", "la cuota, el pago a plazos", "Ich bezahle das Handy in zwölf Raten."],
    ["b1-geld", "", "sparsam", "", "ahorrativo/a, económico/a", "Meine Oma ist sehr sparsam und wirft nichts weg."],
    ["b1-geld", "der", "Kontoauszug", "¨-e", "el estado de cuenta", "Auf dem Kontoauszug sehe ich alle Ausgaben des Monats."],
    ["b1-geld", "der", "Schaden", "¨", "el daño, el perjuicio", "Die Versicherung bezahlt den Schaden."],
    ["b1-geld", "", "sich leisten", "hat sich geleistet", "permitirse (comprar algo)", "Ein neues Auto können wir uns im Moment nicht leisten."],
    ["b1-geld", "der", "Betrag", "¨-e", "el importe, el monto", "Bitte überweisen Sie den Betrag bis Ende März."],
    ["b1-geld", "die", "Mahnung", "-en", "el aviso de pago atrasado", "Ich habe eine Mahnung bekommen, weil ich die Rechnung vergessen hatte."],

    ["b1-redemittel", "", "Ich bin davon überzeugt, dass …", "", "Estoy convencido/a de que…", "Ich bin davon überzeugt, dass Sport gegen Stress hilft."],
    ["b1-redemittel", "", "Ich bin der Meinung, dass …", "", "Opino que…", "Ich bin der Meinung, dass Homeoffice viele Vorteile hat."],
    ["b1-redemittel", "", "Ich finde es wichtig, dass …", "", "Me parece importante que…", "Ich finde es wichtig, dass alle Kinder schwimmen lernen."],
    ["b1-redemittel", "", "Da bin ich anderer Meinung.", "", "Ahí no estoy de acuerdo.", "Da bin ich anderer Meinung: In der Stadt braucht man kein Auto."],
    ["b1-redemittel", "", "Ich gebe dir recht, aber …", "", "Te doy la razón, pero…", "Ich gebe dir recht, aber das Problem ist die Zeit."],
    ["b1-redemittel", "", "Das sehe ich genauso.", "", "Lo veo igual.", "Das sehe ich genauso, wir brauchen mehr Radwege."],
    ["b1-redemittel", "", "Das stimmt, aber …", "", "Es cierto, pero…", "Das stimmt, aber man muss auch an die Kosten denken."],
    ["b1-redemittel", "", "Einerseits …, andererseits …", "", "Por un lado…, por otro lado…", "Einerseits ist die Wohnung schön, andererseits ist sie sehr laut."],
    ["b1-redemittel", "", "Ein Vorteil ist, dass …", "", "Una ventaja es que…", "Ein Vorteil ist, dass man im Zug arbeiten kann."],
    ["b1-redemittel", "", "Ein Nachteil ist, dass …", "", "Una desventaja es que…", "Ein Nachteil ist, dass die Tickets so teuer sind."],
    ["b1-redemittel", "", "Was hältst du davon?", "", "¿Qué te parece? ¿Qué opinas?", "Ich möchte im Sommer nach Spanien fahren. Was hältst du davon?"],
    ["b1-redemittel", "", "Wie siehst du das?", "", "¿Tú cómo lo ves?", "Ich finde Sonntagsarbeit unfair. Wie siehst du das?"],
    ["b1-redemittel", "", "Das kommt darauf an.", "", "Depende.", "Ob ich mitkomme? Das kommt darauf an, wie das Wetter wird."],
    ["b1-redemittel", "", "Hättest du Lust, …?", "", "¿Te gustaría…? ¿Tendrías ganas de…?", "Hättest du Lust, am Samstag mit mir wandern zu gehen?"],
    ["b1-redemittel", "", "Ich schlage vor, dass …", "", "Propongo que…", "Ich schlage vor, dass wir uns um zehn am Bahnhof treffen."],
    ["b1-redemittel", "", "Ich würde lieber …", "", "Yo preferiría…", "Ich würde lieber am Abend feiern, dann haben alle Zeit."],
    ["b1-redemittel", "", "Passt dir das?", "", "¿Te queda bien? ¿Te conviene?", "Wir treffen uns am Freitag um sieben. Passt dir das?"],
    ["b1-redemittel", "", "Dann machen wir es so.", "", "Entonces lo hacemos así.", "Du kaufst die Getränke, und ich backe einen Kuchen. Dann machen wir es so."],
    ["b1-redemittel", "", "Ich möchte heute über das Thema … sprechen.", "", "Hoy quiero hablar sobre el tema…", "Ich möchte heute über das Thema Homeoffice sprechen."],
    ["b1-redemittel", "", "In meinem Heimatland ist das anders.", "", "En mi país eso es diferente.", "In meinem Heimatland ist das anders: Dort essen wir erst spät zu Abend."],
    ["b1-redemittel", "", "Zum Schluss möchte ich sagen, dass …", "", "Para terminar, quiero decir que…", "Zum Schluss möchte ich sagen, dass ein Ehrenamt sehr bereichernd ist."],
    ["b1-redemittel", "", "Vielen Dank für Ihre Aufmerksamkeit.", "", "Muchas gracias por su atención.", "Das war meine Präsentation. Vielen Dank für Ihre Aufmerksamkeit."],
    ["b1-redemittel", "", "Ich möchte mich über … beschweren.", "", "Quiero quejarme de…", "Ich möchte mich über den Lärm auf der Baustelle beschweren."],
    ["b1-redemittel", "", "Ich bin mit … nicht zufrieden.", "", "No estoy satisfecho/a con…", "Ich bin mit dem Service in Ihrem Hotel nicht zufrieden."],
    ["b1-redemittel", "", "Ich erwarte, dass …", "", "Exijo que… / Cuento con que… (más fuerte que «ich hoffe»)", "Ich erwarte, dass Sie mir den Betrag zurückzahlen."],
    ["b1-redemittel", "", "Ich habe die Erfahrung gemacht, dass …", "", "Mi experiencia es que…", "Ich habe die Erfahrung gemacht, dass man im Tandem schnell lernt."],
    ["b1-redemittel", "", "Im Vergleich zu meinem Heimatland …", "", "En comparación con mi país…", "Im Vergleich zu meinem Heimatland ist das Leben hier sehr ruhig."],
    ["b1-redemittel", "", "Ich wende mich an Sie, weil …", "", "Me dirijo a usted porque…", "Ich wende mich an Sie, weil meine Bestellung noch nicht angekommen ist."],
    ["b1-redemittel", "", "Ich würde gern wissen, ob …", "", "Me gustaría saber si…", "Ich würde gern wissen, ob der Kurs noch freie Plätze hat."],
    ["b1-redemittel", "", "Über eine baldige Antwort würde ich mich freuen.", "", "Le agradecería una pronta respuesta.", "Vielen Dank im Voraus. Über eine baldige Antwort würde ich mich freuen."],
    ["b1-redemittel", "", "Herzliche Grüße", "", "Saludos cordiales (cierre amable, semiformal)", "Herzliche Grüße aus Essen, Ihr Carlos Pérez"],
    ["b1-redemittel", "", "Entschuldige, dass ich mich so lange nicht gemeldet habe.", "", "Perdona que no te haya escrito en tanto tiempo.", "Liebe Anna, entschuldige, dass ich mich so lange nicht gemeldet habe."]
  );

  /* ---------- Gramática B1 (12 temas) ---------- */
  DE.grammar.push(
    {
      id: "b1-praeteritum", level: "B1", title: "Contar en pasado: el Präteritum", de: "Präteritum",
      rule: "En textos escritos (cuentos, noticias, biografías, correos que narran algo) el pasado se cuenta en Präteritum. Regulares: raíz + -te: ich machte, du machtest, er machte, wir machten. Irregulares cambian la vocal y con ich/er/sie NO llevan terminación: ich ging, er kam, sie fuhr, wir gingen. Mixtos: cambian la vocal y llevan -te: denken → dachte, bringen → brachte, wissen → wusste, kennen → kannte.",
      trap: "No le pongas -e a la 1.ª y 3.ª persona de los irregulares: «er ginge» ✗ (eso es Konjunktiv) → «er ging» ✓. Y el Präteritum alemán vale a la vez por el indefinido y el imperfecto español: «ich ging» = fui / iba. Al hablar se prefiere el Perfekt, salvo con sein, haben y los modales.",
      ex: ["Als Kind wohnte ich in Santiago.", "Plötzlich klingelte das Telefon, und meine Mutter nahm ab.", "Wir kamen spät an und gingen sofort ins Bett."],
      items: [
        { t: "type", q: "Früher ___ meine Oma in einem kleinen Dorf. (wohnen)", a: ["wohnte"], why: "Verbo regular: raíz wohn- + -te. Con er/sie no se añade nada más." },
        { t: "type", q: "Gestern ___ der Zug zwei Stunden zu spät. (kommen)", a: ["kam"], why: "kommen es irregular: kam. Con er/sie/es no lleva terminación." },
        { t: "type", q: "Wir ___ den ganzen Abend über Politik. (sprechen)", a: ["sprachen"], why: "sprechen → sprach; con wir se añade -en: sprachen." },
        { t: "type", q: "Ich ___ nicht, dass du Geburtstag hattest. (wissen)", a: ["wusste"], why: "Verbo mixto: cambia la vocal y lleva -te: wusste." },
        { t: "type", q: "Meine Freundin ___ mir jede Woche einen langen Brief. (schreiben)", a: ["schrieb"], why: "schreiben → schrieb (ei → ie), sin terminación con er/sie." },
        { t: "mc", q: "Als ich klein war, ___ ich jeden Sommer zu meinen Großeltern.", o: ["fuhr", "fahrte", "fuhrte"], a: 0, why: "fahren es irregular: ich fuhr. «fahrte» no existe." },
        { t: "mc", q: "Er ___ oft an seine Familie in Santo Domingo.", o: ["denkte", "dachte", "dacht"], a: 1, why: "denken es mixto: dachte (cambia la vocal y lleva -te)." },
        { t: "mc", q: "Plötzlich ___ das Licht aus.", o: ["gehte", "gang", "ging"], a: 2, why: "ausgehen: ging … aus. Irregular y sin -e al final." },
        { t: "order", w: ["Nach dem Essen", "gingen", "wir", "noch", "spazieren."], es: "Después de comer todavía fuimos a pasear." },
        { t: "order", w: ["Als", "ich", "nach Hause", "kam,", "schlief", "mein Mann", "schon."], es: "Cuando llegué a casa, mi esposo ya dormía." }
      ]
    },
    {
      id: "b1-plusquam", level: "B1", title: "Lo que había pasado antes: Plusquamperfekt", de: "Plusquamperfekt + nachdem",
      rule: "Para decir que algo pasó ANTES de otra acción pasada: hatte/war (Präteritum) + participio al final. Se elige haben o sein igual que en el Perfekt. Es típico con «nachdem»: Nachdem ich gegessen hatte, ging ich los (Plusquamperfekt en la subordinada; Präteritum o Perfekt en la principal).",
      trap: "En español basta a veces el indefinido («después de que comí, salí»), pero con «nachdem» el alemán retrocede un tiempo: «Nachdem ich aß, …» ✗ → «Nachdem ich gegessen hatte, …» ✓. Y no confundas «nachdem» (conjunción, verbo al final) con «nach» (preposición + dativo: nach dem Essen).",
      ex: ["Als wir ins Kino kamen, hatte der Film schon angefangen.", "Nachdem sie das Studium beendet hatte, zog sie nach Berlin.", "Er war schon gegangen, als ich anrief."],
      items: [
        { t: "type", q: "Als wir ins Kino kamen, ___ der Film schon ___. (anfangen)", a: ["hatte angefangen"], why: "anfangen hace el Perfekt con haben → Plusquamperfekt: hatte … angefangen." },
        { t: "type", q: "Der Zug ___ schon ___, als ich am Bahnhof ankam. (abfahren)", a: ["war abgefahren"], why: "abfahren es movimiento → sein: war … abgefahren." },
        { t: "type", q: "Nachdem er die Prüfung ___ ___, feierte er mit seinen Freunden. (bestehen)", a: ["bestanden hatte"], why: "Tras nachdem el verbo conjugado va al final: … bestanden hatte." },
        { t: "type", q: "Nachdem wir den ganzen Tag ___ ___, waren wir todmüde. (wandern)", a: ["gewandert waren"], why: "wandern va con sein: gewandert waren (verbo conjugado al final)." },
        { t: "type", q: "Ich konnte nicht schlafen, weil ich zu viel Kaffee ___ ___. (trinken)", a: ["getrunken hatte"], why: "Pasó antes de no poder dormir → Plusquamperfekt; tras weil, hatte va al final." },
        { t: "mc", q: "Nachdem sie ___, rief sie sofort ihre Mutter an.", o: ["angekommen war", "angekommen hatte", "ankam war"], a: 0, why: "ankommen va con sein → angekommen war." },
        { t: "mc", q: "Elige la frase correcta:", o: ["Nach ich gegessen hatte, ging ich los.", "Nachdem ich hatte gegessen, ging ich los.", "Nachdem ich gegessen hatte, ging ich los."], a: 2, why: "«nachdem» es la conjunción y manda el verbo conjugado (hatte) al final." },
        { t: "mc", q: "___ dem Frühstück gehe ich joggen.", o: ["Nachdem", "Nach", "Danach"], a: 1, why: "Delante de un sustantivo va la preposición «nach» + dativo; «nachdem» necesita una frase con verbo." },
        { t: "order", w: ["Nachdem", "sie", "gefrühstückt hatte,", "fuhr", "sie", "zur Arbeit."], es: "Después de desayunar, se fue al trabajo." },
        { t: "order", w: ["Als", "ich", "anrief,", "war", "er", "schon", "gegangen."], es: "Cuando llamé, él ya se había ido." }
      ]
    },
    {
      id: "b1-temporal", level: "B1", title: "Antes de, mientras, desde que, hasta que", de: "bevor, während, seitdem, bis",
      rule: "Son conjunciones subordinantes, así que el verbo conjugado va al final: bevor = antes de (que); während = mientras; seitdem (o seit) = desde que; bis = hasta que. «Während» también es preposición con genitivo: während des Kurses (durante el curso).",
      trap: "«Antes de + infinitivo» no se traduce con zu: «Bevor zu essen, …» ✗ → «Bevor ich esse, …» ✓ (o «vor dem Essen»). Con «seitdem» se usa el presente si la situación sigue: «Seitdem ich hier wohne, fahre ich Rad» = desde que vivo aquí.",
      ex: ["Bevor ich ins Bett gehe, lese ich noch ein bisschen.", "Während ich koche, hört mein Mann Musik.", "Seitdem sie in Köln wohnt, fährt sie jeden Tag Fahrrad.", "Warte hier, bis ich zurückkomme."],
      items: [
        { t: "mc", q: "___ du losfährst, ruf mich bitte an.", o: ["Bevor", "Nachdem", "Seitdem"], a: 0, why: "Antes de salir → bevor + presente." },
        { t: "mc", q: "___ ich in Deutschland lebe, esse ich viel mehr Brot.", o: ["Bis", "Seitdem", "Bevor"], a: 1, why: "Desde que vivo aquí, y sigue siendo así → seitdem + presente." },
        { t: "mc", q: "Ich warte hier, ___ der Regen aufhört.", o: ["während", "seitdem", "bis"], a: 2, why: "Hasta que → bis." },
        { t: "mc", q: "___ des Unterrichts sind Handys verboten.", o: ["Während", "Bevor", "Seitdem"], a: 0, why: "Aquí «während» es preposición + genitivo: während des Unterrichts." },
        { t: "type", q: "Bevor ich zur Arbeit ___, trinke ich einen Kaffee. (gehen)", a: ["gehe"], why: "Tras bevor el verbo va al final: … zur Arbeit gehe." },
        { t: "type", q: "Während das Baby ___, räumen wir die Küche auf. (schlafen)", a: ["schläft"], why: "Verbo conjugado al final: das Baby schläft (a → ä)." },
        { t: "type", q: "Seitdem er einen Hund ___, geht er jeden Tag spazieren. (haben)", a: ["hat"], why: "Seitdem + presente (lo sigue teniendo); el verbo va al final." },
        { t: "type", q: "Wir bleiben an der Haltestelle, ___ der Bus kommt. (hasta que)", a: ["bis"], why: "bis = hasta que, con el verbo al final." },
        { t: "order", w: ["Bevor", "du", "gehst,", "mach", "das Licht", "aus!"], es: "Antes de irte, apaga la luz." },
        { t: "order", w: ["Während", "ich", "telefonierte,", "brannte", "das Essen", "an."], es: "Mientras hablaba por teléfono, se quemó la comida." }
      ]
    },
    {
      id: "b1-passiv", level: "B1", title: "La voz pasiva en pasado y con modales", de: "Passiv: Präteritum, Perfekt, Modalverb",
      rule: "Con la pasiva lo importante es la acción, no quién la hace. Präteritum: wurde + participio (Das Haus wurde 1990 gebaut). Perfekt: ist + participio + worden (Das Haus ist renoviert worden). Con modal: modal + participio + werden al final (Der Antrag muss unterschrieben werden). Quien hace la acción va con «von» + dativo.",
      trap: "En el Perfekt pasivo se dice «worden», no «geworden»: «Das Auto ist repariert geworden» ✗ → «… repariert worden» ✓. El auxiliar es siempre «sein». Y la pasiva con «se» del español («se construyó el puente») no se traduce con «sich»: «Die Brücke wurde gebaut».",
      ex: ["Der Kölner Dom wurde 1880 fertiggestellt.", "Mein Fahrrad ist gestern gestohlen worden.", "Die Formulare müssen bis Freitag abgegeben werden."],
      items: [
        { t: "type", q: "Das Rathaus ___ 1905 ___. (bauen, Präteritum)", a: ["wurde gebaut"], why: "Pasiva en Präteritum: wurde + participio." },
        { t: "type", q: "Mein Fahrrad ist gestern ___ ___. (stehlen)", a: ["gestohlen worden"], why: "Perfekt pasivo: ist + participio + worden (¡no geworden!)." },
        { t: "type", q: "Die Einladungen ___ schon letzte Woche ___. (verschicken, Präteritum)", a: ["wurden verschickt"], why: "Plural → wurden; verschicken no lleva ge- por el prefijo ver-." },
        { t: "type", q: "Der Antrag muss bis Freitag ___ ___. (unterschreiben)", a: ["unterschrieben werden"], why: "Pasiva con modal: modal + participio + werden al final." },
        { t: "type", q: "Die Patientin ___ sofort ___ ___. (operieren, Perfekt)", a: ["ist operiert worden"], why: "Perfekt pasivo: ist + operiert (-ieren, sin ge-) + worden." },
        { t: "mc", q: "Das Auto ist gestern repariert ___.", o: ["geworden", "worden", "gewesen"], a: 1, why: "En la pasiva el participio de werden pierde el ge-: worden." },
        { t: "mc", q: "Die Fenster ___ jeden Monat geputzt werden.", o: ["wurden", "müssen", "sind"], a: 1, why: "Modal + participio + werden: müssen … geputzt werden." },
        { t: "mc", q: "Das Bild wurde ___ einer jungen Künstlerin gemalt.", o: ["von", "durch", "mit"], a: 0, why: "La persona que hace la acción va con von + dativo." },
        { t: "order", w: ["Die Pakete", "sind", "noch nicht", "geliefert", "worden."], es: "Los paquetes todavía no han sido entregados." },
        { t: "order", w: ["Im Restaurant", "darf", "nicht", "geraucht", "werden."], es: "En el restaurante no se puede fumar." }
      ]
    },
    {
      id: "b1-relativ", level: "B1", title: "Relativas con dativo, preposición, wo y was", de: "Relativsätze",
      rule: "El pronombre relativo toma el género y el número del sustantivo, pero el CASO lo decide el verbo o la preposición de la oración de relativo. Dativo: dem (masculino y neutro), der (femenino), denen (plural). Con preposición, esta va delante: die Firma, bei der ich arbeite. Para lugares se puede usar «wo» (die Stadt, wo ich wohne), y después de alles, etwas, nichts o un superlativo (das Beste) se usa «was».",
      trap: "Como en «el amigo con el que vivo», la preposición va delante; nunca al final como en inglés: «der Freund, dem ich wohne mit» ✗ → «der Freund, mit dem ich wohne» ✓. Y no uses «was» para una cosa concreta: «das Buch, was ich lese» ✗ → «das Buch, das ich lese» ✓; pero «alles, was ich weiß» ✓.",
      ex: ["Das ist die Kollegin, der ich beim Umzug geholfen habe.", "Die Firma, bei der ich arbeite, sucht Ingenieure.", "Essen ist die Stadt, wo ich seit einem Jahr wohne.", "Das ist alles, was ich weiß."],
      items: [
        { t: "mc", q: "Der Mann, ___ ich den Weg erklärt habe, kam aus Italien.", o: ["den", "dem", "der"], a: 1, why: "jemandem etwas erklären: la persona va en dativo → dem." },
        { t: "mc", q: "Die Kinder, ___ wir Geschenke gegeben haben, waren sehr glücklich.", o: ["denen", "den", "die"], a: 0, why: "geben + dativo de persona; el relativo en dativo plural es denen." },
        { t: "mc", q: "Das ist das Beste, ___ mir passieren konnte.", o: ["das", "dem", "was"], a: 2, why: "Después de un superlativo sustantivado (das Beste) se usa «was»." },
        { t: "type", q: "Die Kollegin, mit ___ ich das Büro teile, ist sehr nett. (relativo)", a: ["der"], why: "die Kollegin + mit (dativo) → der." },
        { t: "type", q: "Das Hotel, in ___ wir übernachtet haben, war sehr sauber. (relativo)", a: ["dem"], why: "das Hotel + in con «¿dónde?» → dativo: dem." },
        { t: "type", q: "Meine Nachbarn, ___ ich beim Umzug geholfen habe, haben mich zum Essen eingeladen. (relativo)", a: ["denen"], why: "helfen + dativo; en plural → denen." },
        { t: "type", q: "Er hat nichts gesagt, ___ ich nicht schon wusste. (relativo)", a: ["was"], why: "Después de nichts, alles o etwas → was." },
        { t: "type", q: "Das ist der Verein, für ___ ich mich engagiere. (relativo)", a: ["den"], why: "sich engagieren für + acusativo; der Verein → für den." },
        { t: "order", w: ["Die Stadt,", "in der", "ich", "aufgewachsen bin,", "liegt", "am Meer."], es: "La ciudad en la que crecí está junto al mar." },
        { t: "order", w: ["Das ist", "die Ärztin,", "der", "ich", "vertraue."], es: "Esa es la doctora en quien confío." }
      ]
    },
    {
      id: "b1-konj2", level: "B1", title: "Lo que habría pasado: Konjunktiv II en pasado", de: "Konjunktiv II der Vergangenheit",
      rule: "Para lo irreal en el pasado (lo que habría pasado, lo que lamentas): hätte o wäre + participio. Se elige hätte o wäre igual que haben o sein en el Perfekt. Con «wenn»: Wenn ich mehr gelernt hätte, hätte ich die Prüfung bestanden. Con modales: hätte + infinitivo + infinitivo del modal: Ich hätte anrufen sollen.",
      trap: "En español cambian los tiempos («si hubiera estudiado, habría aprobado»); en alemán las dos partes usan la MISMA forma, hätte/wäre + participio, y no se usa «würde»: «Ich würde bestanden haben» suena muy raro → «Ich hätte bestanden» ✓. Tras «wenn» el verbo conjugado va al final: «wenn ich gelernt hätte».",
      ex: ["Wenn ich das gewusst hätte, wäre ich früher gekommen.", "Ich hätte gern Medizin studiert.", "Du hättest mich anrufen sollen!"],
      items: [
        { t: "type", q: "Wenn ich mehr gelernt ___, hätte ich die Prüfung bestanden. (haben)", a: ["hätte"], why: "lernen va con haben → hätte gelernt (al final tras wenn)." },
        { t: "type", q: "Wenn der Bus pünktlich gewesen ___, wäre ich nicht zu spät gekommen. (sein)", a: ["wäre"], why: "sein va con sein → wäre gewesen." },
        { t: "type", q: "Ohne deine Hilfe ___ ich das nie ___. (schaffen)", a: ["hätte geschafft"], why: "schaffen va con haben: hätte … geschafft." },
        { t: "type", q: "Wenn wir früher losgefahren ___, ___ wir den Zug nicht verpasst. (sein / haben)", a: ["wären hätten"], why: "losfahren → sein (wären losgefahren); verpassen → haben (hätten verpasst)." },
        { t: "mc", q: "Ich ___ gern mitgekommen, aber ich war krank.", o: ["hätte", "wäre", "würde"], a: 1, why: "mitkommen es movimiento → wäre mitgekommen." },
        { t: "mc", q: "Du ___ mir das früher sagen sollen!", o: ["hättest", "wärst", "hattest"], a: 0, why: "Modal en pasado irreal: hättest + infinitivo + sollen = deberías haberme dicho." },
        { t: "mc", q: "Elige la frase correcta:", o: ["Wenn ich Zeit hätte gehabt, hätte ich dich besucht.", "Wenn ich Zeit gehabt hätte, hätte ich dich besucht.", "Wenn ich hätte Zeit gehabt, ich hätte dich besucht."], a: 1, why: "Tras wenn: participio + hätte al final; la principal empieza con el verbo." },
        { t: "mc", q: "Wenn sie den Wecker gehört hätte, ___ sie nicht verschlafen.", o: ["wäre", "hat", "hätte"], a: 2, why: "verschlafen hace el Perfekt con haben → hätte verschlafen." },
        { t: "order", w: ["An deiner Stelle", "hätte", "ich", "das Angebot", "angenommen."], es: "En tu lugar, yo habría aceptado la oferta." },
        { t: "order", w: ["Wenn", "du", "mich", "gefragt hättest,", "hätte", "ich", "dir", "geholfen."], es: "Si me hubieras preguntado, te habría ayudado." }
      ]
    },
    {
      id: "b1-final", level: "B1", title: "Para, para que, en vez de, sin", de: "um … zu, damit, statt … zu, ohne … zu",
      rule: "um … zu + infinitivo = para (con el mismo sujeto): Ich lerne Deutsch, um in Deutschland zu arbeiten. damit + verbo al final = para que (sobre todo con sujetos distintos): Ich spreche langsam, damit du mich verstehst. (an)statt … zu = en vez de; ohne … zu = sin: Er ging, ohne sich zu verabschieden.",
      trap: "«Para» + infinitivo no es «für»: «Ich lerne für arbeiten» ✗ → «… um zu arbeiten» ✓. Con verbos separables el zu va en medio: anzurufen, einzukaufen. Y con sujetos distintos no sirve um … zu: «um du verstehst» ✗ → «damit du verstehst» ✓.",
      ex: ["Ich spare Geld, um im Sommer nach Hause zu fliegen.", "Sprich bitte langsam, damit alle dich verstehen.", "Statt zu lernen, hat er den ganzen Abend gespielt.", "Sie ist gegangen, ohne Tschüss zu sagen."],
      items: [
        { t: "mc", q: "Ich mache einen Computerkurs, ___ meine Chancen zu verbessern.", o: ["damit", "um", "für"], a: 1, why: "Mismo sujeto y zu + infinitivo al final → um … zu." },
        { t: "mc", q: "Ich erkläre es dir noch einmal, ___ du es verstehst.", o: ["damit", "um", "ohne"], a: 0, why: "Sujetos distintos (ich / du) y verbo conjugado al final → damit." },
        { t: "mc", q: "Sie hat das Zimmer verlassen, ___ ein Wort zu sagen.", o: ["um", "damit", "ohne"], a: 2, why: "ohne … zu = sin + infinitivo." },
        { t: "type", q: "Ich stehe früh auf, um den Bus nicht ___ ___. (verpassen)", a: ["zu verpassen"], why: "um … zu + infinitivo al final." },
        { t: "type", q: "Wir fahren nach Köln, um unsere Freunde ___. (besuchen)", a: ["zu besuchen"], why: "um … zu besuchen: zu + infinitivo al final." },
        { t: "type", q: "Ich fahre am Samstag in die Stadt, um ___. (einkaufen)", a: ["einzukaufen"], why: "Con verbos separables el zu va en medio: ein-zu-kaufen." },
        { t: "type", q: "Er hat den ganzen Abend gespielt, ___ für die Prüfung zu lernen. (en vez de)", a: ["statt", "anstatt"], why: "(an)statt … zu = en vez de." },
        { t: "type", q: "Ich lege dir den Schlüssel unter die Matte, ___ du ins Haus kommst. (para que)", a: ["damit"], why: "Sujetos distintos → damit + verbo al final." },
        { t: "order", w: ["Ich", "lerne", "Deutsch,", "um", "in Deutschland", "zu", "studieren."], es: "Aprendo alemán para estudiar en Alemania." },
        { t: "order", w: ["Er", "ist", "gegangen,", "ohne", "sich", "zu", "verabschieden."], es: "Se fue sin despedirse." }
      ]
    },
    {
      id: "b1-konzessiv", level: "B1", title: "Aunque, aun así, a pesar de y por culpa de", de: "obwohl, trotzdem, trotz, wegen",
      rule: "Tres maneras de expresar lo mismo: obwohl + verbo al final (Obwohl es regnet, gehen wir spazieren); trotzdem como adverbio, con el verbo en posición 2 (Es regnet. Trotzdem gehen wir spazieren); trotz + genitivo (Trotz des Regens gehen wir spazieren). Para la causa funciona igual: weil (verbo al final), deshalb (verbo en posición 2) y wegen + genitivo (wegen des Regens).",
      trap: "«Trotzdem» y «deshalb» NO mandan el verbo al final: «Trotzdem wir gehen» ✗ → «Trotzdem gehen wir» ✓. Después de «trotz» y «wegen» va un sustantivo, nunca una frase: «trotz es regnet» ✗. Al hablar mucha gente dice «wegen dem Regen» (dativo), pero en el examen escribe genitivo.",
      ex: ["Obwohl ich müde war, bin ich zur Party gegangen.", "Ich war müde. Trotzdem bin ich zur Party gegangen.", "Trotz der Kälte haben wir draußen gegrillt.", "Wegen des Streiks fahren heute keine Busse."],
      items: [
        { t: "mc", q: "___ er krank ist, geht er zur Arbeit.", o: ["Trotzdem", "Obwohl", "Trotz"], a: 1, why: "obwohl + verbo al final (ist); luego la principal empieza con el verbo." },
        { t: "mc", q: "Es war sehr kalt. ___ sind wir schwimmen gegangen.", o: ["Obwohl", "Trotz", "Trotzdem"], a: 2, why: "trotzdem ocupa la posición 1 y el verbo (sind) va en la 2." },
        { t: "mc", q: "___ des schlechten Wetters fand das Konzert statt.", o: ["Trotz", "Obwohl", "Wegen"], a: 0, why: "trotz + genitivo (des schlechten Wetters) = a pesar del mal tiempo." },
        { t: "type", q: "Wegen ___ Streiks fallen heute viele Züge aus. (der Streik)", a: ["des"], why: "wegen + genitivo; masculino: des Streiks." },
        { t: "type", q: "Trotz ___ Verspätung haben wir den Anschluss noch bekommen. (die Verspätung)", a: ["der"], why: "trotz + genitivo; femenino: der Verspätung." },
        { t: "type", q: "Ich habe wenig Zeit. ___ helfe ich dir. (aun así)", a: ["Trotzdem", "Dennoch"], why: "trotzdem en posición 1 + verbo en posición 2." },
        { t: "type", q: "Obwohl die Wohnung teuer ___, nehmen wir sie. (sein)", a: ["ist"], why: "Tras obwohl el verbo conjugado va al final." },
        { t: "type", q: "Es regnet stark. ___ bleiben wir zu Hause. (por eso)", a: ["Deshalb", "Deswegen", "Darum", "Daher"], why: "deshalb (por eso) también deja el verbo en posición 2." },
        { t: "order", w: ["Obwohl", "sie", "wenig Geld", "hat,", "spendet", "sie", "jeden Monat", "etwas."], es: "Aunque tiene poco dinero, dona algo cada mes." },
        { t: "order", w: ["Der Bus", "kam", "nicht.", "Trotzdem", "war", "ich", "pünktlich."], es: "El bus no llegó. Aun así, llegué puntual." }
      ]
    },
    {
      id: "b1-doppelt", level: "B1", title: "Conectores dobles", de: "sowohl … als auch, weder … noch, je … desto",
      rule: "sowohl … als auch = tanto … como; weder … noch = ni … ni; entweder … oder = o … o; nicht nur … sondern auch = no solo … sino también; zwar … aber = es cierto que … pero; je + comparativo …, desto (o umso) + comparativo = cuanto más …, más. Con «je» el verbo va al final; después de «desto + comparativo» viene enseguida el verbo.",
      trap: "«weder … noch» ya es negativo: no añadas «nicht» ni «kein»: «Ich habe weder keine Zeit noch …» ✗. Con «je … desto» usa el comparativo alemán, no «mehr» + adjetivo: «je mehr schnell» ✗ → «je schneller» ✓.",
      ex: ["Ich spreche sowohl Spanisch als auch Englisch.", "Er hat weder Zeit noch Geld.", "Entweder wir fahren mit dem Zug, oder wir nehmen das Auto.", "Je mehr ich übe, desto besser spreche ich."],
      items: [
        { t: "mc", q: "Ich trinke ___ Kaffee noch Tee.", o: ["weder", "entweder", "sowohl"], a: 0, why: "weder … noch = ni … ni." },
        { t: "mc", q: "Sie spricht sowohl Deutsch ___ Französisch.", o: ["oder", "als auch", "noch"], a: 1, why: "sowohl … als auch = tanto … como." },
        { t: "mc", q: "Je länger ich in Deutschland lebe, ___ besser verstehe ich die Leute.", o: ["mehr", "als", "desto"], a: 2, why: "je + comparativo …, desto + comparativo." },
        { t: "type", q: "Wir können ___ heute ___ morgen kommen. (o … o)", a: ["entweder oder"], why: "entweder … oder = o … o." },
        { t: "type", q: "Das Hotel war nicht nur billig, ___ auch sehr sauber. (sino)", a: ["sondern"], why: "nicht nur … sondern auch = no solo … sino también." },
        { t: "type", q: "Je mehr du schläfst, ___ fitter bist du. (más)", a: ["desto", "umso"], why: "desto (o umso) + comparativo, y el verbo justo después." },
        { t: "type", q: "Die Wohnung ist ___ klein, ___ sehr gemütlich. (es cierto que … pero)", a: ["zwar aber"], why: "zwar … aber = es cierto que … pero." },
        { t: "type", q: "Ich habe ___ Zeit ___ Lust, heute auszugehen. (ni … ni)", a: ["weder noch"], why: "weder … noch, sin «kein» ni «nicht»." },
        { t: "order", w: ["Je", "früher", "wir", "losfahren,", "desto", "weniger", "Stau", "gibt es."], es: "Cuanto antes salgamos, menos tráfico habrá." },
        { t: "order", w: ["Entweder", "du hilfst mir,", "oder", "ich", "mache", "es", "allein."], es: "O me ayudas, o lo hago solo." }
      ]
    },
    {
      id: "b1-ndekl", level: "B1", title: "Sustantivos que añaden -n: la n-Deklination", de: "n-Deklination",
      rule: "Algunos sustantivos masculinos añaden -n o -en en TODOS los casos menos el nominativo singular: der Kollege → den, dem, des Kollegen. Son sobre todo masculinos terminados en -e (der Junge, der Kunde, der Kollege), palabras en -ent, -ant, -ist, -at, -oge (der Student, der Praktikant, der Tourist, der Soldat, der Biologe) y algunas más: der Herr, der Mensch, der Nachbar, der Bär.",
      trap: "Es fácil olvidarlo porque el artículo ya marca el caso: «Ich frage den Kollege» ✗ → «den Kollegen» ✓. En las cartas: «an Herrn Müller» ✓ (Herr lleva -n en singular y -en en plural: die Herren).",
      ex: ["Ich habe meinen Nachbarn um Hilfe gebeten.", "Kennst du den neuen Praktikanten?", "Wir haben dem Kunden ein Angebot geschickt."],
      items: [
        { t: "mc", q: "Ich frage meinen ___.", o: ["Kollege", "Kollegen", "Kolleges"], a: 1, why: "der Kollege → acusativo: meinen Kollegen." },
        { t: "mc", q: "Das Paket ist für ___ Schulz.", o: ["Herrn", "Herr", "Herren"], a: 0, why: "Herr lleva -n fuera del nominativo singular: für Herrn Schulz." },
        { t: "mc", q: "Hast du heute schon den ___ gesehen?", o: ["Nachbar", "Nachbars", "Nachbarn"], a: 2, why: "der Nachbar → den Nachbarn." },
        { t: "type", q: "Die Ärztin spricht mit dem ___. (der Patient)", a: ["Patienten"], why: "Terminación -ent → n-Deklination: dem Patienten." },
        { t: "type", q: "Kennst du den neuen ___? (der Praktikant)", a: ["Praktikanten"], why: "Terminación -ant → den Praktikanten." },
        { t: "type", q: "Wir haben einem ___ den Weg erklärt. (der Tourist)", a: ["Touristen"], why: "Terminación -ist → einem Touristen." },
        { t: "type", q: "Das Fahrrad des ___ steht vor der Tür. (der Junge)", a: ["Jungen"], why: "Masculino en -e → genitivo des Jungen (sin -s)." },
        { t: "type", q: "Der Verkäufer berät den ___. (der Kunde)", a: ["Kunden"], why: "der Kunde → den Kunden." },
        { t: "order", w: ["Heute", "habe", "ich", "einen", "netten", "Menschen", "kennengelernt."], es: "Hoy conocí a una persona simpática." },
        { t: "order", w: ["Der Chef", "hat", "mit dem", "neuen", "Kollegen", "gesprochen."], es: "El jefe habló con el colega nuevo." }
      ]
    },
    {
      id: "b1-lassen", level: "B1", title: "Mandar hacer, dejar y permitir: lassen", de: "lassen",
      rule: "lassen + infinitivo tiene tres usos: 1) mandar hacer algo a otra persona: Ich lasse mein Auto reparieren (lo llevo al taller); 2) permitir: Meine Eltern lassen mich allein reisen; 3) dejar algo en un sitio: Ich lasse den Schirm zu Hause. Presente: du lässt, er lässt. Perfekt con otro infinitivo: Ich habe mein Auto reparieren lassen (¡no «gelassen»!).",
      trap: "En español «me corté el pelo» suele significar que te lo cortaron en la peluquería. En alemán hay que decirlo: «Ich habe mir die Haare schneiden lassen». «Ich habe mir die Haare geschnitten» significa que lo hiciste tú mismo.",
      ex: ["Ich lasse meine Zeugnisse übersetzen.", "Lass mich bitte ausreden!", "Wir haben die Heizung reparieren lassen.", "Ich habe mein Handy im Büro gelassen."],
      items: [
        { t: "type", q: "Er ___ sein Fahrrad in der Werkstatt reparieren. (lassen)", a: ["lässt"], why: "er lässt (a → ä)." },
        { t: "type", q: "___ du mich bitte kurz telefonieren? (lassen)", a: ["Lässt"], why: "du lässt; en la pregunta el verbo va primero." },
        { t: "type", q: "Ich habe meine Zeugnisse übersetzen ___. (lassen)", a: ["lassen"], why: "Con otro infinitivo, el Perfekt de lassen es «lassen», no «gelassen»." },
        { t: "type", q: "Ich habe meinen Schlüssel im Auto ___. (lassen)", a: ["gelassen"], why: "Sin otro infinitivo (dejar algo en un sitio) el participio es «gelassen»." },
        { t: "mc", q: "Ich schneide mir die Haare nicht selbst, ich ___ sie schneiden.", o: ["lasse", "habe", "mache"], a: 0, why: "lassen + infinitivo = mandar hacer algo." },
        { t: "mc", q: "Früher ___ mich meine Eltern nie allein in den Urlaub fahren.", o: ["lassten", "ließen", "liesen"], a: 1, why: "Präteritum irregular: ließ, ließen (con ß)." },
        { t: "mc", q: "El mecánico te reparó el carro. Elige la frase correcta:", o: ["Ich habe das Auto repariert.", "Ich habe das Auto reparieren gelassen.", "Ich habe das Auto reparieren lassen."], a: 2, why: "Lo hizo otra persona → reparieren lassen (Perfekt: haben + infinitivo + lassen)." },
        { t: "mc", q: "Keine Sorge, ich ___ dich nicht allein.", o: ["lässt", "lasse", "lassen"], a: 1, why: "ich lasse (sin cambio de vocal)." },
        { t: "order", w: ["Ich", "lasse", "mir", "die Haare", "schneiden."], es: "Me corto el pelo (en la peluquería)." },
        { t: "order", w: ["Hast du", "das Auto", "waschen", "lassen?"], es: "¿Mandaste a lavar el carro?" }
      ]
    },
    {
      id: "b1-futur", level: "B1", title: "El futuro con werden", de: "Futur I",
      rule: "werden (posición 2) + infinitivo (al final). Para planes, el alemán suele usar el presente con una expresión de tiempo (Morgen fahre ich nach Köln). El Futur I se usa para promesas y decisiones firmes (Ich werde dich anrufen), predicciones (Es wird regnen) y suposiciones sobre el presente con «wohl» (Er wird wohl krank sein).",
      trap: "No confundas «werden» con «wollen»: «Ich will kommen» = quiero venir; «Ich werde kommen» = vendré. Conjuga bien: du wirst, er wird. En una subordinada, werden va al final: «…, dass ich pünktlich sein werde».",
      ex: ["Ich werde nächstes Jahr die B1-Prüfung machen.", "Keine Sorge, ich werde dich nicht vergessen.", "Es ist schon zehn. Er wird wohl noch im Büro sein."],
      items: [
        { t: "type", q: "Morgen ___ es den ganzen Tag regnen. (werden)", a: ["wird"], why: "Predicción: es wird + infinitivo." },
        { t: "type", q: "___ du mich vom Flughafen abholen? (werden)", a: ["Wirst"], why: "du wirst (forma irregular, sin d)." },
        { t: "type", q: "Wir ___ euch bald besuchen, versprochen! (werden)", a: ["werden"], why: "Promesa: wir werden + infinitivo." },
        { t: "type", q: "Ich verspreche dir, dass ich nie wieder zu spät ___ ___. (kommen)", a: ["kommen werde"], why: "En la subordinada: infinitivo + werde al final." },
        { t: "mc", q: "Sie ist noch nicht da. Sie ___ wohl im Stau stehen.", o: ["will", "wird", "wurde"], a: 1, why: "Suposición sobre el presente: wird wohl + infinitivo." },
        { t: "mc", q: "Ihr ___ sehen: Das wird ein tolles Fest!", o: ["werdet", "werden", "wird"], a: 0, why: "ihr werdet." },
        { t: "mc", q: "¿Qué significa «Ich will Arzt werden»?", o: ["Seré médico.", "Quiero ser médico.", "Fui médico."], a: 1, why: "wollen = querer. Aquí «werden» significa «llegar a ser»." },
        { t: "mc", q: "Elige la traducción más natural de «Mañana voy al dentista»:", o: ["Morgen will ich zum Zahnarzt gehen.", "Morgen wurde ich zum Zahnarzt gehen.", "Morgen gehe ich zum Zahnarzt."], a: 2, why: "Para planes con una expresión de tiempo, el alemán usa el presente." },
        { t: "order", w: ["Ich", "werde", "dich", "nie", "vergessen."], es: "Nunca te olvidaré." },
        { t: "order", w: ["Er", "sagt,", "dass", "er", "im Juni", "fertig", "sein", "wird."], es: "Dice que terminará en junio." }
      ]
    }
  );

  /* ---------- Diálogos B1 ---------- */
  DE.dialogs.push(
    {
      id: "b1-vorstellung", level: "B1", title: "La entrevista de trabajo", de: "Das Vorstellungsgespräch",
      who: { P: ["Frau Becker (Personalchefin)", "f"], C: ["Carlos (Bewerber)", "m"] },
      lines: [
        ["P", "Guten Tag, Herr Pérez. Schön, dass Sie da sind. Nehmen Sie bitte Platz.", "Buenos días, señor Pérez. Qué bueno que vino. Siéntese, por favor."],
        ["C", "Guten Tag, Frau Becker. Vielen Dank für die Einladung.", "Buenos días, señora Becker. Muchas gracias por la invitación."],
        ["P", "Erzählen Sie doch bitte kurz etwas über sich und Ihren beruflichen Werdegang.", "Cuénteme brevemente algo sobre usted y su trayectoria profesional."],
        ["C", "Gern. Ich habe in Santo Domingo Elektrotechnik studiert. Danach habe ich fünf Jahre bei einer Energiefirma gearbeitet und war dort für Solaranlagen zuständig.", "Con gusto. Estudié ingeniería eléctrica en Santo Domingo. Después trabajé cinco años en una empresa de energía y allí era responsable de las instalaciones solares."],
        ["P", "Interessant. Und warum haben Sie sich gerade bei uns beworben?", "Interesante. ¿Y por qué se postuló precisamente con nosotros?"],
        ["C", "Ihre Firma ist im Bereich erneuerbare Energien sehr bekannt. Außerdem möchte ich meine Erfahrung gern in ein internationales Team einbringen.", "Su empresa es muy conocida en el área de energías renovables. Además, me gustaría aportar mi experiencia a un equipo internacional."],
        ["P", "Wie gut sind Ihre Deutschkenntnisse? Bei uns ist die Arbeitssprache Deutsch.", "¿Qué tan buenos son sus conocimientos de alemán? Aquí el idioma de trabajo es el alemán."],
        ["C", "Ich habe gerade das B1-Zertifikat gemacht und besuche jetzt einen B2-Kurs. Englisch spreche ich fließend.", "Acabo de sacar el certificado B1 y ahora estoy en un curso de B2. Hablo inglés con fluidez."],
        ["P", "Sehr gut. Was sind Ihre Stärken, und wo sehen Sie Ihre Schwächen?", "Muy bien. ¿Cuáles son sus fortalezas y dónde ve sus debilidades?"],
        ["C", "Ich bin zuverlässig und arbeite gern im Team. Manchmal bin ich zu perfektionistisch, aber ich habe gelernt, Prioritäten zu setzen.", "Soy confiable y me gusta trabajar en equipo. A veces soy demasiado perfeccionista, pero he aprendido a establecer prioridades."],
        ["P", "Die Stelle ist ab dem ersten März frei, und die Probezeit beträgt sechs Monate. Haben Sie noch Fragen?", "El puesto está disponible a partir del primero de marzo, y el período de prueba es de seis meses. ¿Tiene alguna pregunta?"],
        ["C", "Ja. Gibt es bei Ihnen die Möglichkeit, Weiterbildungen zu machen?", "Sí. ¿Existe aquí la posibilidad de hacer capacitaciones?"],
        ["P", "Natürlich, das unterstützen wir sehr. Wir melden uns bis Ende nächster Woche bei Ihnen.", "Por supuesto, lo apoyamos mucho. Nos comunicaremos con usted antes de que termine la próxima semana."],
        ["C", "Vielen Dank für das Gespräch. Ich freue mich auf Ihre Antwort.", "Muchas gracias por la entrevista. Quedo a la espera de su respuesta."]
      ],
      q: [
        ["Was hat Carlos studiert?", ["Informatik", "Elektrotechnik", "Maschinenbau"], 1],
        ["Wie lange dauert die Probezeit?", ["drei Monate", "ein Jahr", "sechs Monate"], 2],
        ["Was möchte Carlos wissen?", ["ob er Weiterbildungen machen kann", "wie hoch das Gehalt ist", "wann er Urlaub nehmen kann"], 0]
      ],
      tip: "En Alemania la entrevista es directa y puntual: llega unos diez minutos antes y prepara una respuesta para «Stärken und Schwächen». Muchas ofertas piden ya en la solicitud tu «Gehaltsvorstellung» (el sueldo que esperas), así que infórmate antes de los sueldos del sector."
    },
    {
      id: "b1-laerm", level: "B1", title: "Problemas con la vecina", de: "Ärger mit der Nachbarin",
      who: { K: ["Frau Kowalski (Nachbarin)", "f"], C: ["Carlos", "m"] },
      lines: [
        ["K", "Guten Abend, Herr Pérez. Haben Sie kurz Zeit? Ich muss mit Ihnen über Samstagnacht sprechen.", "Buenas noches, señor Pérez. ¿Tiene un momento? Tengo que hablar con usted sobre el sábado por la noche."],
        ["C", "Guten Abend, Frau Kowalski. Ja, natürlich. War die Musik zu laut?", "Buenas noches, señora Kowalski. Sí, claro. ¿Estaba la música demasiado alta?"],
        ["K", "Ehrlich gesagt, ja. Es war nach Mitternacht noch sehr laut, und ich musste am Sonntag früh arbeiten.", "Sinceramente, sí. Después de la medianoche todavía había mucho ruido, y yo tenía que trabajar temprano el domingo."],
        ["C", "Das tut mir wirklich leid. Wir haben den Geburtstag meiner Freundin gefeiert und nicht auf die Uhr geachtet.", "Lo siento de verdad. Celebramos el cumpleaños de mi novia y no nos fijamos en la hora."],
        ["K", "Ich verstehe ja, dass man mal feiert. Aber ab zweiundzwanzig Uhr ist im Haus Nachtruhe. Das steht auch in der Hausordnung.", "Entiendo que uno celebre de vez en cuando. Pero a partir de las diez de la noche hay silencio en el edificio. Eso también está en el reglamento."],
        ["C", "Das wusste ich nicht. In der Dominikanischen Republik feiert man oft bis spät in die Nacht, und keiner beschwert sich.", "No lo sabía. En la República Dominicana se celebra a menudo hasta tarde y nadie se queja."],
        ["K", "Das kann ich mir vorstellen! Hier sind die Leute da etwas empfindlicher.", "¡Me lo imagino! Aquí la gente es un poco más sensible con eso."],
        ["C", "Was halten Sie davon: Wenn ich das nächste Mal feiere, sage ich Ihnen vorher Bescheid und hänge einen Zettel ins Treppenhaus.", "¿Qué le parece esto? La próxima vez que haga una fiesta, le aviso antes y pongo una nota en la escalera."],
        ["K", "Das ist eine gute Idee. Und ab zehn Uhr machen Sie bitte die Fenster zu und stellen die Musik leiser.", "Es buena idea. Y a partir de las diez, por favor, cierre las ventanas y baje la música."],
        ["C", "Versprochen. Darf ich Sie als Entschuldigung zu einem Stück Kuchen einladen? Es ist noch etwas übrig.", "Prometido. ¿Puedo invitarla a un pedazo de bizcocho para disculparme? Todavía sobró un poco."],
        ["K", "Oh, wie nett! Da sage ich nicht nein. Und wenn Sie mal Hilfe brauchen, klingeln Sie einfach bei mir.", "¡Ay, qué amable! No le voy a decir que no. Y si alguna vez necesita ayuda, toque mi timbre sin problema."],
        ["C", "Danke, das ist sehr freundlich. Dann bis gleich, Frau Kowalski!", "Gracias, es muy amable. ¡Entonces hasta ahora, señora Kowalski!"]
      ],
      q: [
        ["Warum ist Frau Kowalski verärgert?", ["Weil die Musik nach Mitternacht laut war.", "Weil Carlos sein Fahrrad ins Treppenhaus gestellt hat.", "Weil Carlos sie nicht eingeladen hat."], 0],
        ["Ab wann ist im Haus Nachtruhe?", ["ab zwanzig Uhr", "ab Mitternacht", "ab zweiundzwanzig Uhr"], 2],
        ["Was schlägt Carlos vor?", ["Er will nie wieder feiern.", "Er will vorher Bescheid sagen.", "Er will in eine andere Wohnung ziehen."], 1]
      ],
      tip: "En muchos edificios alemanes la «Hausordnung» fija horas de silencio (la Nachtruhe suele ir de 22 a 6 h) y el domingo es día de descanso. Avisar a los vecinos con una notita antes de una fiesta es un gesto muy apreciado."
    },
    {
      id: "b1-behoerde", level: "B1", title: "En la oficina de extranjería", de: "Bei der Ausländerbehörde",
      who: { S: ["Frau Neumann (Sachbearbeiterin)", "f"], C: ["Carlos", "m"] },
      lines: [
        ["S", "Guten Morgen, Herr Pérez. Sie haben einen Termin um neun Uhr. Worum geht es?", "Buenos días, señor Pérez. Tiene una cita a las nueve. ¿De qué se trata?"],
        ["C", "Guten Morgen. Meine Aufenthaltserlaubnis läuft nächsten Monat ab, und ich möchte sie verlängern lassen.", "Buenos días. Mi permiso de residencia vence el próximo mes y quisiera renovarlo."],
        ["S", "Gut. Haben Sie alle Unterlagen dabei? Ich brauche Ihren Pass, ein aktuelles biometrisches Foto und Ihren Arbeitsvertrag.", "Bien. ¿Trae todos los documentos? Necesito su pasaporte, una foto biométrica actual y su contrato de trabajo."],
        ["C", "Hier sind mein Pass und das Foto. Den neuen Arbeitsvertrag habe ich auch, aber er ist noch nicht unterschrieben worden. Mein Chef ist gerade im Urlaub.", "Aquí están mi pasaporte y la foto. También tengo el contrato de trabajo nuevo, pero todavía no lo han firmado. Mi jefe está de vacaciones."],
        ["S", "Hm, das ist ein Problem. Ohne Unterschrift kann der Antrag leider nicht bearbeitet werden.", "Hm, eso es un problema. Sin firma, lamentablemente la solicitud no puede tramitarse."],
        ["C", "Und was soll ich jetzt machen? Ich will nicht, dass meine Erlaubnis abläuft.", "¿Y qué hago ahora? No quiero que se me venza el permiso."],
        ["S", "Keine Sorge. Sie haben den Antrag ja rechtzeitig gestellt. Ich gebe Ihnen eine Fiktionsbescheinigung. Damit dürfen Sie weiter hier wohnen und arbeiten.", "No se preocupe. Usted presentó la solicitud a tiempo. Le doy un certificado provisional, la Fiktionsbescheinigung. Con él puede seguir viviendo y trabajando aquí."],
        ["C", "Das ist eine Erleichterung! Und bis wann muss ich den unterschriebenen Vertrag bringen?", "¡Qué alivio! ¿Y hasta cuándo tengo que traer el contrato firmado?"],
        ["S", "Innerhalb von vier Wochen. Sie können ihn auch per Post schicken oder online hochladen.", "En un plazo de cuatro semanas. También puede enviarlo por correo o subirlo en línea."],
        ["C", "Perfekt. Muss ich dafür einen neuen Termin vereinbaren?", "Perfecto. ¿Tengo que pedir una nueva cita para eso?"],
        ["S", "Nein, das ist nicht nötig. Die Gebühr bezahlen Sie bitte am Kassenautomaten im Flur.", "No, no hace falta. La tarifa la paga, por favor, en la máquina de pago del pasillo."],
        ["C", "Alles klar. Vielen Dank für Ihre Hilfe!", "Entendido. ¡Muchas gracias por su ayuda!"],
        ["S", "Gern geschehen. Einen schönen Tag noch!", "De nada. ¡Que tenga buen día!"]
      ],
      q: [
        ["Was möchte Carlos?", ["einen neuen Pass beantragen", "die Staatsangehörigkeit beantragen", "seine Aufenthaltserlaubnis verlängern"], 2],
        ["Welches Dokument fehlt noch?", ["das Foto", "der unterschriebene Arbeitsvertrag", "der Pass"], 1],
        ["Was bekommt Carlos heute?", ["eine Fiktionsbescheinigung", "eine neue Aufenthaltserlaubnis", "einen neuen Termin"], 0]
      ],
      tip: "Pide la renovación ANTES de que venza el permiso. Si la solicitud llega a tiempo, la «Fiktionsbescheinigung» te permite seguir viviendo y trabajando legalmente mientras se tramita. Lleva siempre copias de todos tus documentos."
    },
    {
      id: "b1-versicherung", level: "B1", title: "Llamar al seguro", de: "Ein Schaden für die Haftpflicht",
      who: { K: ["Frau Krüger (Versicherung)", "f"], C: ["Carlos (Kunde)", "m"] },
      lines: [
        ["K", "Rheinland Versicherung, Sie sprechen mit Petra Krüger. Was kann ich für Sie tun?", "Seguros Rheinland, habla Petra Krüger. ¿En qué le puedo ayudar?"],
        ["C", "Guten Tag, mein Name ist Carlos Pérez. Ich habe bei Ihnen eine Haftpflichtversicherung und möchte einen Schaden melden.", "Buenos días, me llamo Carlos Pérez. Tengo con ustedes un seguro de responsabilidad civil y quisiera reportar un daño."],
        ["K", "Gern. Wie lautet Ihre Versicherungsnummer, und was ist passiert?", "Con gusto. ¿Cuál es su número de póliza y qué pasó?"],
        ["C", "Die Nummer ist H sieben vier zwei neun null. Gestern war ich bei einem Kollegen zum Essen eingeladen, und beim Abräumen ist mir ein Glas Rotwein auf seinen Laptop gefallen.", "El número es H siete cuatro dos nueve cero. Ayer estaba invitado a comer en casa de un colega y, al recoger la mesa, se me cayó una copa de vino tinto encima de su laptop."],
        ["K", "Oje. Funktioniert der Laptop noch?", "Ay, no. ¿Todavía funciona la laptop?"],
        ["C", "Leider nicht. In der Werkstatt hat man ihm gesagt, dass sich eine Reparatur nicht mehr lohnt.", "Lamentablemente no. En el taller le dijeron que ya no vale la pena repararla."],
        ["K", "Verstehe. Wie alt war das Gerät, und was hat es gekostet?", "Entiendo. ¿Qué antigüedad tenía el aparato y cuánto costó?"],
        ["C", "Er hat ihn vor zwei Jahren für ungefähr tausend Euro gekauft. Die Rechnung hat er noch.", "La compró hace dos años por unos mil euros. Todavía tiene la factura."],
        ["K", "Gut. Bitte laden Sie die Rechnung, den Bericht der Werkstatt und eine kurze Beschreibung des Unfalls online hoch.", "Bien. Por favor, suba en línea la factura, el informe del taller y una breve descripción del accidente."],
        ["C", "Bekommt mein Kollege dann den vollen Preis zurück?", "¿Y a mi colega le devuelven el precio completo?"],
        ["K", "Nicht ganz. Wir ersetzen den Zeitwert, also das, was der Laptop zum Zeitpunkt des Schadens noch wert war. Nach zwei Jahren ist das ungefähr die Hälfte.", "No del todo. Pagamos el valor actual, es decir, lo que la laptop todavía valía en el momento del daño. Después de dos años, es más o menos la mitad."],
        ["C", "Verstehe. Und wie lange dauert die Bearbeitung?", "Entiendo. ¿Y cuánto tarda el trámite?"],
        ["K", "Wenn alle Unterlagen vollständig sind, zwei bis drei Wochen. Ihre Schadensnummer bekommen Sie gleich per E-Mail.", "Si todos los documentos están completos, de dos a tres semanas. Ahora mismo le llega por correo su número de siniestro."],
        ["C", "Vielen Dank! Ich bin wirklich froh, dass ich versichert bin.", "¡Muchas gracias! De verdad me alegro de tener seguro."]
      ],
      q: [
        ["Was ist passiert?", ["Carlos hat seinen Laptop verloren.", "Ein Glas Rotwein ist auf den Laptop eines Kollegen gefallen.", "Der Laptop von Carlos ist in der Werkstatt kaputtgegangen."], 1],
        ["Was soll Carlos online hochladen?", ["die Rechnung, den Werkstattbericht und eine Beschreibung", "nur ein Foto vom Laptop", "seinen Pass und seinen Arbeitsvertrag"], 0],
        ["Wie viel Geld bekommt der Kollege ungefähr?", ["den vollen Preis", "nichts", "etwa die Hälfte des Preises"], 2]
      ],
      tip: "La «Haftpflichtversicherung» (seguro de responsabilidad civil privada) no es obligatoria, pero casi todo el mundo en Alemania la tiene: cuesta poco al año y paga los daños que causas sin querer a otras personas. Ojo: paga el valor actual del objeto, no el precio de uno nuevo."
    },
    {
      id: "b1-aufraeumen", level: "B1", title: "Planear una jornada de limpieza", de: "Wir räumen den Park auf",
      who: { J: ["Jana (Nachbarin)", "f"], C: ["Carlos (Nachbar)", "m"] },
      lines: [
        ["J", "Carlos, hast du gesehen, wie der Stadtpark aussieht? Überall liegen Flaschen, Verpackungen und Zigaretten.", "Carlos, ¿viste cómo está el parque? Por todas partes hay botellas, empaques y colillas."],
        ["C", "Ja, schrecklich. Was hältst du davon, wenn wir mit den Nachbarn eine Aufräumaktion organisieren?", "Sí, horrible. ¿Qué te parece si organizamos una jornada de limpieza con los vecinos?"],
        ["J", "Super Idee! Ich schlage den Samstag in zwei Wochen vor. Dann haben wir genug Zeit für die Einladung.", "¡Súper idea! Propongo el sábado dentro de dos semanas. Así tenemos tiempo suficiente para la invitación."],
        ["C", "Einverstanden. Am besten vormittags, so ab zehn Uhr. Nachmittags ist es im Sommer zu heiß.", "De acuerdo. Mejor en la mañana, a partir de las diez. En verano, en la tarde hace demasiado calor."],
        ["J", "Gut. Brauchen wir dafür eigentlich eine Erlaubnis von der Stadt?", "Bien. ¿Y necesitamos un permiso de la ciudad para eso?"],
        ["C", "Ich glaube, wir sollten die Stadtreinigung informieren. Sie stellt oft kostenlos Müllsäcke, Handschuhe und Greifzangen zur Verfügung und holt den Müll danach ab.", "Creo que deberíamos avisar al servicio de limpieza de la ciudad. Muchas veces presta gratis bolsas, guantes y pinzas, y después recoge la basura."],
        ["J", "Perfekt. Dann rufe ich morgen bei der Stadtreinigung an. Kümmerst du dich um die Einladung?", "Perfecto. Entonces mañana llamo al servicio de limpieza. ¿Te encargas tú de la invitación?"],
        ["C", "Klar. Ich hänge einen Zettel ins Treppenhaus und schreibe etwas in die Gruppe der Nachbarschaft.", "Claro. Pongo una nota en la escalera y escribo algo en el grupo del vecindario."],
        ["J", "Und was machen wir danach? Nach so viel Arbeit haben bestimmt alle Hunger.", "¿Y qué hacemos después? Después de tanto trabajo seguro que todos tienen hambre."],
        ["C", "Lass uns doch ein Picknick im Park machen. Jeder bringt etwas mit, und ich backe dominikanische Pastelitos.", "Hagamos un picnic en el parque. Cada uno trae algo, y yo hago pastelitos dominicanos."],
        ["J", "Lecker! Und was machen wir, wenn es regnet?", "¡Qué rico! ¿Y qué hacemos si llueve?"],
        ["C", "Dann verschieben wir alles um eine Woche. Das schreiben wir am besten gleich in die Einladung.", "Entonces lo pasamos a la semana siguiente. Mejor lo ponemos de una vez en la invitación."],
        ["J", "Gute Idee. Ich freue mich schon! Vielleicht wird das ja eine Tradition.", "Buena idea. ¡Ya tengo ganas! A lo mejor se vuelve una tradición."]
      ],
      q: [
        ["Wann soll die Aufräumaktion stattfinden?", ["am Sonntagnachmittag", "an einem Samstagvormittag", "nächsten Freitagabend"], 1],
        ["Wen ruft Jana an?", ["die Stadtreinigung", "die Polizei", "die Hausverwaltung"], 0],
        ["Was passiert, wenn es regnet?", ["Sie räumen trotzdem auf.", "Sie machen ein Picknick im Haus.", "Sie verschieben die Aktion um eine Woche."], 2]
      ],
      tip: "Muchas ciudades alemanas apoyan a los vecinos que limpian parques o calles: prestan guantes, bolsas y pinzas, y después recogen la basura. Organizar algo así es además una excelente manera de conocer a tus vecinos."
    },
    {
      id: "b1-handy", level: "B1", title: "¿Un celular para un niño de diez años?", de: "Ab wann ein eigenes Handy?",
      who: { S: ["Sabine (Mutter)", "f"], T: ["Thomas (Vater)", "m"], C: ["Carlos (Gast)", "m"] },
      lines: [
        ["S", "Jonas hat heute schon wieder gefragt, ob er ein eigenes Handy bekommt. Er sagt, alle in seiner Klasse haben eins.", "Jonas volvió a preguntar hoy si le vamos a comprar un celular propio. Dice que todos en su clase tienen uno."],
        ["T", "Er ist doch erst zehn! Ich finde, dafür ist er noch zu jung.", "¡Pero si apenas tiene diez años! Me parece que todavía es muy chico para eso."],
        ["S", "Einerseits hast du recht. Andererseits fährt er ab Sommer allein mit dem Bus zur Schule. Dann wäre es schon praktisch, wenn wir ihn erreichen könnten.", "Por un lado tienes razón. Por otro, a partir del verano irá solo en bus a la escuela. Entonces sí sería práctico poder localizarlo."],
        ["T", "Dafür reicht doch ein einfaches Handy ohne Internet.", "Para eso basta un celular sencillo sin internet."],
        ["S", "Carlos, wie siehst du das? Wie ist das in der Dominikanischen Republik?", "Carlos, ¿tú cómo lo ves? ¿Cómo es en la República Dominicana?"],
        ["C", "Bei uns haben viele Kinder sehr früh ein Smartphone. Meine kleine Cousine hat ihr erstes mit acht bekommen.", "Allá muchos niños tienen un smartphone muy temprano. Mi primita recibió el suyo a los ocho."],
        ["T", "Mit acht? Und wie viele Stunden am Tag benutzt sie es?", "¿A los ocho? ¿Y cuántas horas al día lo usa?"],
        ["C", "Viel zu viele, ehrlich gesagt. Meine Tante bereut es inzwischen. Meiner Meinung nach brauchen Kinder klare Regeln.", "Demasiadas, la verdad. Mi tía ahora se arrepiente. En mi opinión, los niños necesitan reglas claras."],
        ["S", "Das sehe ich genauso. Wie wäre es mit einem Kompromiss: Jonas bekommt ein Smartphone, aber mit Kindersicherung und höchstens eine Stunde am Tag?", "Lo veo igual. ¿Qué tal un término medio? Jonas recibe un smartphone, pero con control parental y como máximo una hora al día."],
        ["T", "Hm. Und abends bleibt das Handy in der Küche, nicht im Kinderzimmer.", "Hm. Y en la noche el celular se queda en la cocina, no en su cuarto."],
        ["C", "Das finde ich vernünftig. So kann er trotzdem gut schlafen.", "Eso me parece sensato. Así igual puede dormir bien."],
        ["S", "Gut, dann sind wir uns einig. Das erklären wir Jonas morgen beim Frühstück.", "Bien, entonces estamos de acuerdo. Se lo explicamos a Jonas mañana en el desayuno."]
      ],
      q: [
        ["Warum findet Sabine ein Handy praktisch?", ["Weil Jonas bald allein mit dem Bus fährt.", "Weil alle Kinder ein Handy brauchen.", "Weil Jonas für die Schule im Internet lernen muss."], 0],
        ["Was sagt Carlos über seine Cousine?", ["Sie hat kein Handy.", "Sie benutzt ihr Handy zu viel.", "Sie hat mit zwölf ihr erstes Handy bekommen."], 1],
        ["Welche Regel gilt am Abend?", ["Jonas darf eine Stunde spielen.", "Das Handy bleibt im Kinderzimmer.", "Das Handy bleibt in der Küche."], 2]
      ],
      tip: "En una discusión en alemán es normal mostrar los dos lados (einerseits… andererseits) y terminar buscando un «Kompromiss». Interrumpir a menudo se considera de mala educación: espera a que el otro termine su idea."
    },
    {
      id: "b1-bahn", level: "B1", title: "El tren se canceló", de: "Der Zug fällt aus",
      who: { B: ["Herr Brandt (Servicemitarbeiter)", "m"], L: ["Lucía (Reisende)", "f"] },
      lines: [
        ["L", "Entschuldigung, mein ICE nach Hamburg um zehn Uhr zwölf wird nicht mehr angezeigt. Was ist los?", "Disculpe, mi ICE a Hamburgo de las 10:12 ya no aparece en la pantalla. ¿Qué pasa?"],
        ["B", "Der Zug fällt leider aus. Wegen eines Unfalls ist die Strecke bei Münster gesperrt.", "Lamentablemente el tren se canceló. Por un accidente, la vía está cerrada cerca de Münster."],
        ["L", "Oh nein! Ich habe um sechzehn Uhr einen wichtigen Termin in Hamburg. Wie komme ich jetzt dahin?", "¡Ay, no! Tengo una cita importante en Hamburgo a las cuatro de la tarde. ¿Cómo llego ahora?"],
        ["B", "Moment, ich suche Ihnen eine Verbindung. Sie fahren um zehn Uhr fünfunddreißig nach Hannover und steigen dort in einen ICE nach Hamburg um.", "Un momento, le busco una conexión. Sale a las 10:35 hacia Hannover y allí hace transbordo a un ICE a Hamburgo."],
        ["L", "Und wann wäre ich dann in Hamburg?", "¿Y a qué hora estaría entonces en Hamburgo?"],
        ["B", "Um vierzehn Uhr fünfzig. Das ist zwar fast zwei Stunden später als geplant, aber Sie schaffen Ihren Termin.", "A las 14:50. Es cierto que es casi dos horas más tarde de lo previsto, pero llega a su cita."],
        ["L", "Gilt mein Ticket auch für diese Züge? Ich habe einen Sparpreis mit Zugbindung.", "¿Mi boleto vale también para estos trenes? Tengo una tarifa económica con tren fijo."],
        ["B", "Ja. Weil Ihr Zug ausgefallen ist, ist die Zugbindung aufgehoben. Sie können jeden Zug nehmen.", "Sí. Como su tren se canceló, ya no está obligada a tomar un tren concreto. Puede tomar cualquier tren."],
        ["L", "Gut zu wissen. Bekomme ich wegen der Verspätung auch Geld zurück?", "Qué bueno saberlo. ¿Me devuelven también dinero por el retraso?"],
        ["B", "Ab sechzig Minuten Verspätung am Ziel bekommen Sie fünfundzwanzig Prozent des Fahrpreises zurück, ab hundertzwanzig Minuten die Hälfte.", "A partir de sesenta minutos de retraso en el destino le devuelven el veinticinco por ciento del precio del boleto; a partir de ciento veinte minutos, la mitad."],
        ["L", "Und wie beantrage ich das?", "¿Y cómo lo solicito?"],
        ["B", "Am einfachsten in der App unter «Fahrgastrechte». Dort laden Sie Ihr Ticket hoch, und das Geld wird Ihnen überwiesen.", "Lo más fácil es en la app, en «Derechos del pasajero». Ahí sube su boleto y le transfieren el dinero."],
        ["L", "Vielen Dank, Sie haben mir sehr geholfen!", "¡Muchas gracias, me ayudó mucho!"]
      ],
      q: [
        ["Warum fällt der ICE aus?", ["wegen eines Streiks", "wegen eines Unfalls", "wegen des Wetters"], 1],
        ["Über welche Stadt fährt Lucía jetzt?", ["über Hannover", "über Münster", "über Düsseldorf"], 0],
        ["Wie viel Geld bekommt Lucía wahrscheinlich zurück?", ["die Hälfte des Fahrpreises", "nichts", "fünfundzwanzig Prozent"], 2]
      ],
      tip: "Si tu tren se cancela o se espera un retraso de al menos 20 minutos, la «Zugbindung» de los boletos baratos queda anulada y puedes tomar otro tren. Con 60 minutos de retraso te devuelven el 25 %, con 120 minutos el 50 %, y se pide fácilmente en la app."
    },
    {
      id: "b1-knie", level: "B1", title: "Una lesión de rodilla", de: "Beim Arzt: das verletzte Knie",
      who: { D: ["Frau Doktor Hoffmann (Ärztin)", "f"], C: ["Carlos (Patient)", "m"] },
      lines: [
        ["D", "Guten Tag, Herr Pérez. Was führt Sie zu mir?", "Buenos días, señor Pérez. ¿Qué lo trae por aquí?"],
        ["C", "Ich habe mich am Samstag beim Fußball am Knie verletzt. Ein Gegenspieler hat mich von der Seite gefoult.", "Me lastimé la rodilla el sábado jugando fútbol. Un jugador del otro equipo me hizo una falta de lado."],
        ["D", "Oje. Konnten Sie danach noch laufen?", "Ay. ¿Pudo caminar después?"],
        ["C", "Nur mit Mühe. Seitdem ist das Knie geschwollen, und es tut weh, wenn ich die Treppe hochgehe.", "Solo con dificultad. Desde entonces tengo la rodilla hinchada y me duele cuando subo las escaleras."],
        ["D", "Ich schaue mir das mal an. Tut es hier weh, wenn ich drücke?", "Voy a revisarla. ¿Le duele aquí cuando presiono?"],
        ["C", "Au! Ja, genau da.", "¡Ay! Sí, justo ahí."],
        ["D", "Gut, dass Sie gekommen sind. Ich glaube, das Band ist nur überdehnt, nicht gerissen. Zur Sicherheit machen wir aber noch ein MRT.", "Qué bueno que vino. Creo que el ligamento solo está distendido, no roto. Pero por seguridad le hacemos también una resonancia."],
        ["C", "Muss ich operiert werden?", "¿Me tienen que operar?"],
        ["D", "Das glaube ich nicht. Sie bekommen eine Schiene und Physiotherapie. Das Rezept dafür schreibe ich Ihnen gleich.", "No creo. Le pondremos una férula y hará fisioterapia. Ahora mismo le hago la receta."],
        ["C", "Und kann ich arbeiten? Ich bin Ingenieur und muss oft auf Baustellen.", "¿Y puedo trabajar? Soy ingeniero y tengo que ir a menudo a las obras."],
        ["D", "Auf keinen Fall. Ich schreibe Sie erst einmal für zwei Wochen krank. Ihr Arbeitgeber bekommt die Krankmeldung elektronisch.", "De ninguna manera. Por ahora le doy dos semanas de incapacidad. Su empleador recibe la constancia de forma electrónica."],
        ["C", "Gut. Und was kann ich gegen die Schmerzen nehmen?", "Bien. ¿Y qué puedo tomar para el dolor?"],
        ["D", "Ich verschreibe Ihnen ein Schmerzmittel. Nehmen Sie es nach dem Essen, sonst können Magenschmerzen als Nebenwirkung auftreten. Und kühlen Sie das Knie mehrmals am Tag.", "Le receto un analgésico. Tómelo después de comer; si no, puede tener dolor de estómago como efecto secundario. Y póngase frío en la rodilla varias veces al día."],
        ["C", "Mache ich. Vielen Dank, Frau Doktor.", "Así lo haré. Muchas gracias, doctora."]
      ],
      q: [
        ["Wie hat sich Carlos verletzt?", ["beim Fußball", "auf der Baustelle", "auf der Treppe"], 0],
        ["Wie lange ist Carlos krankgeschrieben?", ["eine Woche", "zwei Wochen", "drei Wochen"], 1],
        ["Wann soll Carlos das Schmerzmittel nehmen?", ["vor dem Schlafen", "auf leeren Magen", "nach dem Essen"], 2]
      ],
      tip: "Si estás enfermo, avisa a tu trabajo el primer día. Desde 2023 la consulta envía la incapacidad («Krankschreibung») de forma electrónica a la caja de salud y la empresa la consulta allí: ya no tienes que entregar el papel."
    }
  );

  /* ---------- Lecturas B1 ---------- */
  DE.texts.push(
    {
      id: "b1-ehrenamt", level: "B1", title: "El voluntariado", de: "Ehrenamt in Deutschland",
      paras: [
        ["Jeden Samstagmorgen steht Petra Lange in einer alten Turnhalle in Essen und sortiert Lebensmittel: Brot vom Vortag, Gemüse mit kleinen Fehlern, Joghurt kurz vor dem Mindesthaltbarkeitsdatum. Die 67-Jährige arbeitet ehrenamtlich bei der Tafel, einer Organisation, die Lebensmittel von Supermärkten abholt und an Menschen mit wenig Geld verteilt. «Seit ich in Rente bin, habe ich Zeit, und ich wollte etwas Sinnvolles tun», erzählt sie. Jede Woche kommen etwa dreihundert Menschen zu ihrer Ausgabestelle.",
          "Cada sábado por la mañana, Petra Lange está en un viejo gimnasio de Essen clasificando alimentos: pan del día anterior, verduras con pequeños defectos, yogur a punto de llegar a su fecha de consumo preferente. La mujer, de 67 años, trabaja como voluntaria en la Tafel, una organización que recoge alimentos de los supermercados y los reparte entre personas con pocos recursos. «Desde que me jubilé tengo tiempo, y quería hacer algo con sentido», cuenta. Cada semana unas trescientas personas acuden a su punto de reparto."],
        ["Petra ist keine Ausnahme. Fast vierzig Prozent der Menschen in Deutschland engagieren sich freiwillig: im Sportverein, in der Kirche, in Schulen, in der Nachbarschaftshilfe oder bei der Feuerwehr. Ohne sie würde vieles nicht funktionieren. In den meisten Dörfern gibt es zum Beispiel nur eine freiwillige Feuerwehr, deren Mitglieder in ihrer Freizeit Brände löschen und bei Unfällen helfen.",
          "Petra no es una excepción. Casi el cuarenta por ciento de las personas en Alemania hace voluntariado: en el club deportivo, en la iglesia, en las escuelas, en la ayuda vecinal o en los bomberos. Sin ellas, muchas cosas no funcionarían. En la mayoría de los pueblos, por ejemplo, solo hay bomberos voluntarios, que en su tiempo libre apagan incendios y ayudan en los accidentes."],
        ["Auch für Zugewanderte kann ein Ehrenamt eine große Chance sein. Ahmad kam vor fünf Jahren aus Syrien nach Deutschland. Heute trainiert der 29-Jährige zweimal pro Woche eine Fußballmannschaft für Kinder. «Im Verein habe ich mehr Deutsch gelernt als im Kurs», sagt er und lacht. «Und ich habe Freunde gefunden, die mir bei der Wohnungssuche und bei Bewerbungen geholfen haben.»",
          "También para los inmigrantes el voluntariado puede ser una gran oportunidad. Ahmad llegó a Alemania desde Siria hace cinco años. Hoy, con 29 años, entrena dos veces por semana a un equipo de fútbol infantil. «En el club aprendí más alemán que en el curso», dice riéndose. «Y encontré amigos que me ayudaron a buscar apartamento y con mis solicitudes de empleo.»"],
        ["Wer sich engagieren möchte, findet in vielen Städten eine Freiwilligenagentur. Dort wird man beraten, welches Ehrenamt zu den eigenen Interessen und zur eigenen Zeit passt. Viele Organisationen suchen dringend Helfer, besonders junge Leute. Geld bekommt man dafür zwar nicht, aber oft eine Bescheinigung, die bei Bewerbungen einen guten Eindruck macht. Petra bringt es auf den Punkt: «Man gibt etwas und bekommt viel mehr zurück.»",
          "Quien quiera participar encuentra en muchas ciudades una agencia de voluntariado. Allí te asesoran sobre qué voluntariado encaja con tus intereses y tu tiempo. Muchas organizaciones buscan ayudantes con urgencia, sobre todo gente joven. Es cierto que no se recibe dinero, pero a menudo sí una constancia que causa buena impresión en las solicitudes de empleo. Petra lo resume así: «Uno da algo y recibe mucho más a cambio.»"]
      ],
      q: [
        ["Was macht Petra bei der Tafel?", ["Sie kocht für Kinder.", "Sie sortiert Lebensmittel.", "Sie verkauft Brot."], 1],
        ["Wie viele Menschen in Deutschland engagieren sich freiwillig?", ["fast vierzig Prozent", "etwa zehn Prozent", "mehr als die Hälfte"], 0],
        ["Was hat Ahmad durch den Verein bekommen?", ["eine feste Stelle als Trainer", "Geld für seine Wohnung", "bessere Deutschkenntnisse und Freunde"], 2],
        ["Was bekommt man oft für ein Ehrenamt?", ["ein kleines Gehalt", "eine Bescheinigung", "eine kostenlose Wohnung"], 1]
      ]
    },
    {
      id: "b1-schrebergarten", level: "B1", title: "El huerto urbano", de: "Kleine Gärten, großes Glück",
      paras: [
        ["Mitten in vielen deutschen Städten gibt es kleine grüne Inseln: Kleingartenanlagen. Dort hat jede Familie ein Stück Land von etwa dreihundert bis vierhundert Quadratmetern, mit einem kleinen Gartenhaus, Blumen, Gemüsebeeten und Obstbäumen. Man nennt diese Gärten auch Schrebergärten, nach dem Leipziger Arzt Moritz Schreber. In ganz Deutschland gibt es fast eine Million davon.",
          "En medio de muchas ciudades alemanas hay pequeñas islas verdes: las colonias de huertos. Allí cada familia tiene un terreno de unos trescientos a cuatrocientos metros cuadrados, con una casita, flores, canteros de verduras y árboles frutales. A estos huertos también se les llama «Schrebergärten», por el médico Moritz Schreber, de Leipzig. En toda Alemania hay casi un millón."],
        ["Früher galten Schrebergärten als Hobby für Rentner, die am Wochenende den Rasen mähen und Gartenzwerge aufstellen. Heute ist das anders: Immer mehr junge Familien und Menschen aus aller Welt wünschen sich einen eigenen Garten. Viele Eltern möchten, dass ihre Kinder sehen, wie Kartoffeln und Erdbeeren wachsen. In vielen Großstädten muss man deshalb mehrere Jahre auf eine freie Parzelle warten.",
          "Antes los huertos se consideraban un pasatiempo de jubilados que el fin de semana cortaban el césped y ponían enanitos de jardín. Hoy es diferente: cada vez más familias jóvenes y personas de todo el mundo quieren su propio jardín. Muchos padres quieren que sus hijos vean cómo crecen las papas y las fresas. Por eso, en muchas ciudades grandes hay que esperar varios años por una parcela libre."],
        ["Ganz ohne Regeln geht es allerdings nicht. Jede Kleingartenanlage ist ein Verein, und wer dort einen Garten pachtet, wird Mitglied. Ein Drittel der Fläche muss für Obst und Gemüse genutzt werden, im Gartenhaus darf man nicht dauerhaft wohnen, und in der Mittagszeit soll es ruhig sein. Einmal im Jahr gibt es außerdem einen Arbeitseinsatz, bei dem alle zusammen die Wege und die gemeinsamen Flächen pflegen.",
          "Eso sí, sin reglas no funciona. Cada colonia de huertos es una asociación, y quien arrienda allí un huerto se hace socio. Un tercio del terreno tiene que usarse para frutas y verduras, en la casita no se puede vivir de forma permanente y a la hora del almuerzo debe haber silencio. Además, una vez al año hay una jornada de trabajo en la que todos juntos cuidan los caminos y las zonas comunes."],
        ["Für Luis Peña aus der Dominikanischen Republik war das am Anfang ungewohnt. «Bei uns wachsen Mangos einfach im Hof, und niemand kontrolliert, wie hoch die Hecke ist», sagt er und lacht. Seit zwei Jahren hat er mit seiner Frau einen Garten in Duisburg. Inzwischen erntet er Tomaten, Paprika und Kürbisse, und von seinen Nachbarn hat er gelernt, wie man Apfelkuchen backt. «Der Garten ist für mich ein Stück Heimat. Hier treffe ich Leute, die ich sonst nie kennengelernt hätte.»",
          "Para Luis Peña, de la República Dominicana, al principio eso era extraño. «Allá los mangos crecen en el patio y nadie controla qué tan alta está la cerca de arbustos», dice riéndose. Desde hace dos años tiene un huerto en Duisburgo con su esposa. Ahora cosecha tomates, pimientos y auyamas, y sus vecinos le enseñaron a hacer pastel de manzana. «El huerto es para mí un pedacito de mi tierra. Aquí conozco a gente que de otra forma nunca habría conocido.»"]
      ],
      q: [
        ["Wie groß ist ein Schrebergarten ungefähr?", ["etwa dreißig Quadratmeter", "etwa dreitausend Quadratmeter", "etwa dreihundert bis vierhundert Quadratmeter"], 2],
        ["Warum muss man in Großstädten oft lange warten?", ["Weil viele Menschen einen Garten möchten.", "Weil die Gärten nur für Rentner sind.", "Weil die Vereine keine neuen Mitglieder aufnehmen."], 0],
        ["Was ist im Schrebergarten nicht erlaubt?", ["Gemüse anbauen", "dauerhaft im Gartenhaus wohnen", "Freunde einladen"], 1],
        ["Was bedeutet der Garten für Luis?", ["ein Stück Heimat und neue Kontakte", "viel Arbeit und Ärger", "eine gute Möglichkeit, Geld zu verdienen"], 0]
      ]
    },
    {
      id: "b1-blog", level: "B1", title: "Blog: mi primer año en Alemania", de: "Mein erstes Jahr in Deutschland",
      paras: [
        ["Hallo zusammen! Heute vor genau einem Jahr bin ich in Düsseldorf gelandet, mit zwei Koffern, einem B1-Zertifikat und viel zu dünnen Schuhen. Viele von euch haben mich gefragt, wie mein erstes Jahr in Deutschland war. Inzwischen wohne ich in Essen und arbeite als Krankenpflegerin in einem Krankenhaus. Hier kommt meine ehrliche Bilanz.",
          "¡Hola a todos! Hoy hace exactamente un año aterricé en Düsseldorf, con dos maletas, un certificado B1 y unos zapatos demasiado finos. Muchos me han preguntado cómo fue mi primer año en Alemania. Ahora vivo en Essen y trabajo como enfermera en un hospital. Aquí va mi balance sincero."],
        ["Was mich am Anfang am meisten überrascht hat? Die Pünktlichkeit. Als ich zu meinem ersten Treffen mit einer Kollegin zehn Minuten zu spät kam, hatte sie schon zweimal angerufen. In Santo Domingo hätte niemand auf die Uhr geschaut! Inzwischen bin ich selbst so deutsch geworden, dass ich mich ärgere, wenn der Bus zwei Minuten Verspätung hat.",
          "¿Qué fue lo que más me sorprendió al principio? La puntualidad. Cuando llegué diez minutos tarde a mi primer encuentro con una colega, ella ya me había llamado dos veces. ¡En Santo Domingo nadie habría mirado el reloj! Ahora yo misma me he vuelto tan alemana que me molesto cuando el bus llega dos minutos tarde."],
        ["Am schwierigsten war für mich der Winter. Im Dezember wird es schon um halb fünf dunkel, und die Sonne habe ich manchmal tagelang nicht gesehen. Geholfen haben mir Vitamin D, mein Fitnessstudio und die Weihnachtsmärkte. Ein anderer Kulturschock war die Mülltrennung: Wir haben im Haus vier verschiedene Tonnen, und ich habe wochenlang gebraucht, bis ich wusste, wohin die Joghurtbecher gehören. Heute trenne ich so gründlich, dass meine Kollegen mich «Frau Recycling» nennen.",
          "Lo más difícil para mí fue el invierno. En diciembre oscurece ya a las cuatro y media, y a veces no vi el sol durante días. Me ayudaron la vitamina D, mi gimnasio y los mercados navideños. Otro choque cultural fue la separación de la basura: en el edificio tenemos cuatro contenedores distintos, y tardé semanas en saber dónde van los vasitos de yogur. Hoy separo con tanto cuidado que mis colegas me dicen «la señora Reciclaje»."],
        ["Was ich an Deutschland liebe? Man kann sich auf Termine und Absprachen verlassen, die Natur ist wunderschön, und mit dem Zug kommt man fast überall hin, wenn er denn fährt. Was ich vermisse? Meine Familie, das Meer und Musik, die laut sein darf, ohne dass sich die Nachbarn beschweren.",
          "¿Qué me encanta de Alemania? Uno puede confiar en las citas y los acuerdos, la naturaleza es preciosa y en tren se llega a casi todas partes, cuando el tren pasa. ¿Qué extraño? A mi familia, el mar y la música que puede sonar fuerte sin que los vecinos se quejen."],
        ["Mein Fazit: Es war ein hartes, aber wunderbares Jahr. Wenn ihr auch nach Deutschland kommen wollt, lernt so viel Deutsch wie möglich, bevor ihr losfliegt. Und kauft euch gute Winterschuhe! Schreibt mir eure Fragen in die Kommentare. Eure Yesenia",
          "Mi conclusión: fue un año duro, pero maravilloso. Si ustedes también quieren venir a Alemania, aprendan todo el alemán que puedan antes de tomar el avión. ¡Y cómprense unos buenos zapatos de invierno! Escríbanme sus preguntas en los comentarios. Su Yesenia"]
      ],
      q: [
        ["Was hat Yesenia am Anfang überrascht?", ["die Pünktlichkeit der Deutschen", "das gute Wetter", "die lauten Nachbarn"], 0],
        ["Was hat ihr im Winter geholfen?", ["lange Reisen nach Hause", "Sport und Weihnachtsmärkte", "viel Kaffee"], 1],
        ["Was vermisst Yesenia?", ["das deutsche Essen", "die Züge", "das Meer"], 2],
        ["Welchen Tipp gibt sie?", ["Man soll im Sommer kommen.", "Man soll vor der Reise viel Deutsch lernen.", "Man soll keine Winterschuhe kaufen."], 1]
      ]
    },
    {
      id: "b1-pendeln", level: "B1", title: "La vida de quien viaja a diario al trabajo", de: "Jeden Tag unterwegs",
      paras: [
        ["Um Viertel vor sechs klingelt bei Sandra Wolff der Wecker. Eine halbe Stunde später sitzt die 38-Jährige schon im Regionalexpress von Hamm nach Düsseldorf. Erst um sieben Uhr abends ist sie wieder zu Hause. Sandra ist eine von rund zwanzig Millionen Pendlern in Deutschland, also Menschen, die nicht in dem Ort arbeiten, in dem sie wohnen.",
          "A las seis menos cuarto suena el despertador de Sandra Wolff. Media hora después, la mujer de 38 años ya está sentada en el tren regional de Hamm a Düsseldorf. No vuelve a casa hasta las siete de la noche. Sandra es una de los cerca de veinte millones de personas que en Alemania viajan a diario al trabajo, es decir, que no trabajan en el lugar donde viven."],
        ["Warum macht sie das? «In Düsseldorf sind die Mieten fast doppelt so hoch wie bei uns», erklärt sie. «Außerdem arbeitet mein Mann in Hamm, und die Kinder gehen hier zur Schule.» So wie Sandra denken viele: Weil Wohnungen in den großen Städten immer teurer werden, ziehen Familien in kleinere Orte und nehmen dafür den langen Weg zur Arbeit in Kauf.",
          "¿Por qué lo hace? «En Düsseldorf los alquileres son casi el doble que donde vivimos», explica. «Además, mi esposo trabaja en Hamm y los niños van a la escuela aquí.» Como Sandra piensan muchos: como los apartamentos en las grandes ciudades son cada vez más caros, las familias se mudan a lugares más pequeños y aceptan a cambio el largo camino al trabajo."],
        ["Das Pendeln hat allerdings seinen Preis. Studien zeigen, dass Menschen mit einem langen Arbeitsweg öfter unter Stress, Rückenschmerzen und Schlafproblemen leiden. Wer mit dem Auto fährt, steht außerdem oft im Stau und zahlt viel für Benzin. Seit es das Deutschlandticket gibt, sind deshalb viele Pendler auf Bus und Bahn umgestiegen. Damit kann man für einen festen Monatspreis den gesamten Nahverkehr in Deutschland nutzen.",
          "Pero viajar a diario tiene su precio. Los estudios muestran que las personas con un trayecto largo al trabajo sufren más a menudo de estrés, dolor de espalda y problemas de sueño. Quien va en carro, además, se queda a menudo en el tráfico y paga mucho de gasolina. Por eso, desde que existe el Deutschlandticket, muchos se han pasado al bus y al tren. Con él, por un precio fijo al mes, se puede usar todo el transporte local y regional de Alemania."],
        ["Sandra nutzt die Zeit im Zug sinnvoll: Morgens beantwortet sie E-Mails, abends liest sie oder hört Podcasts. Im Zug hat sie sogar neue Freundinnen gefunden: Jeden Morgen sitzen sie im selben Wagen und trinken zusammen Kaffee. Zweimal pro Woche darf sie im Homeoffice arbeiten, und an diesen Tagen spart sie fast vier Stunden. «Ohne Homeoffice würde ich das nicht schaffen», sagt sie. «Aber wenn ein Zug ausfällt und ich eine Stunde am Bahnsteig warte, frage ich mich manchmal schon, ob sich das alles lohnt.»",
          "Sandra aprovecha el tiempo en el tren: por la mañana contesta correos y por la tarde lee o escucha podcasts. En el tren hasta hizo nuevas amigas: cada mañana se sientan en el mismo vagón y toman café juntas. Dos veces por semana puede trabajar desde casa, y esos días se ahorra casi cuatro horas. «Sin teletrabajo no podría con esto», dice. «Pero cuando un tren se cancela y espero una hora en el andén, a veces sí me pregunto si todo esto vale la pena.»"]
      ],
      q: [
        ["Wo arbeitet Sandra?", ["in Düsseldorf", "in Hamm", "nur zu Hause"], 0],
        ["Warum wohnt die Familie nicht in Düsseldorf?", ["Weil es dort keine guten Schulen gibt.", "Weil Sandra nicht gern in Großstädten ist.", "Weil die Mieten dort viel höher sind."], 2],
        ["Welches Problem haben viele Pendler?", ["Sie verdienen weniger Geld.", "Sie haben öfter Stress und Schlafprobleme.", "Sie finden keine Wohnung."], 1],
        ["Wie oft arbeitet Sandra im Homeoffice?", ["nie", "jeden Tag", "zweimal pro Woche"], 2]
      ]
    },
    {
      id: "b1-repaircafe", level: "B1", title: "Reparar en vez de tirar", de: "Reparieren statt wegwerfen",
      paras: [
        ["Ein Toaster, der nicht mehr warm wird. Eine Lampe mit kaputtem Kabel. Eine Jeans mit Loch. Früher wären diese Sachen sofort im Müll gelandet. Heute bringen immer mehr Menschen sie ins Repair-Café. Die Idee kommt aus den Niederlanden: In Amsterdam wurde 2009 das erste Repair-Café eröffnet. Inzwischen gibt es allein in Deutschland über tausend davon.",
          "Una tostadora que ya no calienta. Una lámpara con el cable roto. Unos jeans con un hueco. Antes estas cosas habrían terminado de inmediato en la basura. Hoy cada vez más personas las llevan al Repair-Café. La idea viene de los Países Bajos: en Ámsterdam se abrió en 2009 el primer Repair-Café. Hoy solo en Alemania hay más de mil."],
        ["So funktioniert es: Einmal im Monat treffen sich ehrenamtliche Helfer, zum Beispiel Elektriker, Schneiderinnen oder Fahrradmechaniker, in einem Gemeindezentrum oder einer Bibliothek. Die Besucher bringen ihre kaputten Sachen mit und reparieren sie gemeinsam mit den Experten. Besonders oft kommen Kaffeemaschinen, Lampen und Fahrräder. Wer nicht selbst schrauben will, darf auch einfach zuschauen und ein Stück Kuchen essen. Die Reparatur ist kostenlos, aber man freut sich über eine kleine Spende für Kaffee und Ersatzteile.",
          "Así funciona: una vez al mes se reúnen ayudantes voluntarios, por ejemplo electricistas, costureras o mecánicos de bicicletas, en un centro comunitario o en una biblioteca. Los visitantes traen sus cosas rotas y las reparan junto con los expertos. Lo que más llega son cafeteras, lámparas y bicicletas. Quien no quiera ponerse a atornillar también puede simplemente mirar y comerse un pedazo de bizcocho. La reparación es gratuita, pero se agradece una pequeña donación para el café y los repuestos."],
        ["«Uns geht es nicht nur ums Reparieren», erklärt Klaus Berger, 71, der früher als Elektroingenieur gearbeitet hat und jetzt im Repair-Café in Bochum hilft. «Die Leute sollen lernen, dass man viele Dinge selbst reparieren kann. Das spart Geld und schont die Umwelt.» Tatsächlich entstehen bei vielen elektronischen Geräten, zum Beispiel bei Smartphones, die meisten Treibhausgase schon bei der Herstellung. Und jeder Mensch in Deutschland produziert pro Jahr etwa zwanzig Kilo Elektroschrott.",
          "«No se trata solo de reparar», explica Klaus Berger, de 71 años, que antes trabajaba como ingeniero eléctrico y ahora ayuda en el Repair-Café de Bochum. «La gente debe aprender que muchas cosas se pueden reparar uno mismo. Eso ahorra dinero y cuida el medio ambiente.» De hecho, en muchos aparatos electrónicos, por ejemplo en los smartphones, la mayor parte de los gases de efecto invernadero se produce ya en la fabricación. Y cada persona en Alemania produce unos veinte kilos de basura electrónica al año."],
        ["Leider kann nicht alles gerettet werden. Manche Hersteller bauen ihre Produkte so, dass man sie kaum öffnen kann, oder es gibt keine Ersatzteile. Das soll sich aber ändern: Die Europäische Union hat ein «Recht auf Reparatur» beschlossen. Hersteller müssen bestimmte Geräte in Zukunft länger reparieren und Ersatzteile anbieten. Für Klaus Berger ist das ein wichtiger Schritt. «Das beste Gerät ist das, das man nicht neu kaufen muss.»",
          "Lamentablemente no todo se puede salvar. Algunos fabricantes construyen sus productos de forma que casi no se pueden abrir, o no hay repuestos. Pero eso va a cambiar: la Unión Europea aprobó un «derecho a la reparación». En el futuro, los fabricantes tendrán que reparar ciertos aparatos durante más tiempo y ofrecer repuestos. Para Klaus Berger es un paso importante. «El mejor aparato es el que no hay que volver a comprar.»"]
      ],
      q: [
        ["Wo wurde das erste Repair-Café eröffnet?", ["in Bochum", "in Amsterdam", "in Berlin"], 1],
        ["Was kostet eine Reparatur im Repair-Café?", ["nichts, aber man kann spenden", "zehn Euro", "nur die Ersatzteile"], 0],
        ["Was ist Klaus Berger besonders wichtig?", ["dass er Geld verdient", "dass die Geräte neu aussehen", "dass die Leute selbst reparieren lernen"], 2],
        ["Was hat die EU beschlossen?", ["ein Verbot von Smartphones", "ein Recht auf Reparatur", "kostenlose Ersatzteile für alle"], 1]
      ]
    }
  );

  /* ---------- Lista del curso B1 ---------- */
  DE.course.push({
    lvl: "B1",
    items: [
      ["b1-c-leben", "Etapas de la vida: contar tu historia", ["b1-praeteritum", "b1-plusquam"]],
      ["b1-c-beruf", "Trabajo, solicitudes y entrevistas", ["b1-final", "b1-futur"]],
      ["b1-c-nachbarn", "Vecindad, normas y conflictos", ["b1-konzessiv"]],
      ["b1-c-gesundheit", "Salud, alimentación y tratamientos", ["b1-passiv", "b1-temporal"]],
      ["b1-c-reisen", "Viajes, transporte y contratiempos", ["b1-temporal", "b1-konzessiv"]],
      ["b1-c-medien", "Medios, internet y comunicación", ["b1-relativ"]],
      ["b1-c-umwelt", "Medio ambiente y consumo responsable", ["b1-doppelt", "b1-passiv"]],
      ["b1-c-gesellschaft", "Sociedad, voluntariado y trámites", ["b1-lassen", "b1-ndekl"]],
      ["b1-c-kultur", "Cultura, fiestas y tiempo libre", ["b1-relativ", "b1-praeteritum"]],
      ["b1-c-bildung", "Formación, cursos y exámenes", ["b1-konj2", "b1-final"]],
      ["b1-c-geld", "Dinero, bancos y reclamaciones", ["b1-lassen", "b1-konj2"]],
      ["b1-c-meinung", "Opinar, discutir y escribir correos formales", ["b1-doppelt", "b1-konzessiv"]]
    ]
  });

  /* ---------- Examen: Goethe-Zertifikat B1 (versión corta) ---------- */
  const BLOG = "Liebe Leserinnen und Leser, letzte Woche war ich zum ersten Mal auf einer deutschen Hochzeit. Mein Kollege Felix hat seine Freundin Lena geheiratet, und ich war eingeladen. Zuerst waren wir alle im Standesamt, das hat nur zwanzig Minuten gedauert. Danach haben wir auf einem alten Bauernhof gefeiert. Was mich überrascht hat: Um Mitternacht haben ein paar Gäste die Braut «entführt», und der Bräutigam musste sie suchen. Getanzt haben wir bis vier Uhr morgens, fast wie bei uns in der Karibik! Nächsten Monat erzähle ich euch von meinem ersten Karneval in Köln.";
  const ZEITUNG = "Bücher zum Mitnehmen: In der Essener Innenstadt steht seit Mai eine alte Telefonzelle, die zu einem kleinen Bücherschrank umgebaut wurde. Die Idee hatte die Schülerin Mia Hartmann, 16: «Bei uns zu Hause standen so viele Bücher, die niemand mehr gelesen hat.» Jeder darf Bücher hineinstellen oder kostenlos mitnehmen, eine Anmeldung ist nicht nötig. Die Stadt hat die Telefonzelle gespendet, Schüler haben sie gestrichen und Regale eingebaut. Schon nach zwei Wochen war der Schrank so voll, dass Mia eine zweite Telefonzelle beantragt hat.";

  DE.exams.B1 = {
    name: "Goethe-Zertifikat B1",
    pass: "Se aprueba cada módulo con el 60 %. Los cuatro módulos (Lesen, Hören, Schreiben, Sprechen) se pueden hacer juntos o por separado.",
    parts: {
      hoeren: "Unos 40 minutos, 4 partes. Teil 1: cinco textos cortos (mensajes de voz, avisos, radio) con dos tareas cada uno; cada texto se oye DOS veces. Teil 2: una visita guiada o un discurso; se oye UNA sola vez, con 5 preguntas a/b/c. Teil 3: una conversación informal entre dos personas; se oye UNA sola vez, con 7 ítems richtig/falsch. Teil 4: un debate de radio con un moderador y dos invitados; se oye DOS veces y decides quién dice cada una de las 8 afirmaciones.",
      lesen: "65 minutos, 5 partes. Teil 1: un blog o correo personal con 6 ítems richtig/falsch. Teil 2: dos artículos de prensa con 3 preguntas a/b/c cada uno. Teil 3: siete personas buscan algo y hay diez anuncios; para una persona no hay anuncio (se marca 0). Teil 4: siete opiniones de lectores sobre un tema; decides si cada persona está a favor (Ja) o no (Nein). Teil 5: un reglamento o unas instrucciones con 4 preguntas a/b/c.",
      schreiben: "60 minutos, 3 tareas. Teil 1 (unos 20 minutos): correo informal a un amigo, unas 80 palabras, tratando los tres puntos. Teil 2 (unos 25 minutos): tu opinión en el foro o libro de visitas de un programa, unas 80 palabras. Teil 3 (unos 15 minutos): mensaje formal corto a alguien que tratas de usted (disculparte, cancelar, pedir algo), unas 40 palabras, con saludo y despedida.",
      sprechen: "Unos 15 minutos en pareja, con 15 minutos de preparación. Teil 1: planear algo juntos (una fiesta, una visita, un regalo) proponiendo, aceptando y rechazando, unos 3 minutos. Teil 2: presentar un tema con cinco diapositivas (tema, experiencia personal, situación en tu país, ventajas y desventajas con tu opinión, cierre), unos 3 minutos. Teil 3: reaccionar a la presentación del compañero con un comentario y una pregunta, y responder a las preguntas sobre la tuya."
    },
    hoeren: [
      { teil: 1, n: 2, text: "Hallo Maria, hier ist Kerstin. Du, wegen heute Abend: Das Konzert fängt nicht um acht, sondern schon um halb acht an. Wir treffen uns deshalb um sieben direkt vor dem Eingang, nicht im Café. Bis später!", q: "Wo treffen sich Maria und Kerstin?", o: ["im Café", "vor dem Eingang", "an der Kasse"], a: 1 },
      { teil: 1, n: 2, text: "Liebe Fahrgäste, wegen Bauarbeiten fährt die Straßenbahnlinie 107 heute ab neunzehn Uhr nur bis zum Hauptbahnhof. Bitte nutzen Sie von dort die Busse des Ersatzverkehrs. Wir bitten um Ihr Verständnis.", q: "Ab dem Hauptbahnhof fahren heute Abend Ersatzbusse.", o: ["Richtig", "Falsch"], a: 0 },
      { teil: 2, n: 1, text: "Herzlich willkommen auf der Zeche Zollverein! Mein Name ist Frank Weber, und ich führe Sie heute durch das ehemalige Steinkohlebergwerk. Bis 1986 haben hier jeden Tag Tausende Bergleute gearbeitet. Heute ist Zollverein Welterbe der UNESCO und ein Zentrum für Kultur und Design. Unsere Führung dauert ungefähr neunzig Minuten. Bitte bleiben Sie immer bei der Gruppe, denn einige Bereiche sind nicht gesichert.", q: "Wie lange dauert die Führung?", o: ["etwa eine Stunde", "zwei Stunden", "etwa anderthalb Stunden"], a: 2 },
      { teil: 2, n: 1, text: "Nach der Führung haben Sie noch Zeit für einen Besuch im Ruhr Museum. Der Eintritt ist in Ihrem Ticket schon enthalten. Wenn Sie Hunger haben: Das Restaurant im Erdgeschoss hat bis achtzehn Uhr geöffnet. Und noch ein Tipp: Fotografieren ist überall erlaubt, aber bitte ohne Blitz.", q: "Was ist im Ticket enthalten?", o: ["ein Essen im Restaurant", "der Eintritt ins Ruhr Museum", "ein Fotobuch"], a: 1 },
      { teil: 3, n: 1, text: "Mann: Hallo Sandra! Lange nicht gesehen. Wie war dein Urlaub in Portugal? Frau: Ach, Tobias, wunderschön! Aber die Rückreise war eine Katastrophe. Unser Flug wurde gestrichen, und wir mussten eine Nacht im Hotel am Flughafen schlafen. Mann: Oh nein! Hat die Fluggesellschaft das Hotel wenigstens bezahlt? Frau: Ja, zum Glück. Und wir bekommen sogar eine Entschädigung, vierhundert Euro pro Person.", q: "Sandra bekommt Geld von der Fluggesellschaft.", o: ["Richtig", "Falsch"], a: 0 },
      { teil: 3, n: 1, text: "Frau: Und bei dir? Du wolltest doch die Stelle wechseln. Mann: Ja, ich habe im Oktober bei einer neuen Firma angefangen. Ich verdiene zwar nicht viel mehr, aber ich brauche jetzt nur zehn Minuten mit dem Fahrrad zur Arbeit. Früher bin ich jeden Tag eine Stunde gependelt. Frau: Das ist ja super! Dann hast du endlich mehr Zeit für deine Familie.", q: "Tobias verdient in der neuen Firma viel mehr Geld.", o: ["Richtig", "Falsch"], a: 1 },
      { teil: 4, n: 2, text: "Frau: Willkommen bei «Thema am Abend». Heute fragen wir: Sollen Geschäfte auch am Sonntag öffnen? Bei mir im Studio sind Herr Albrecht, Inhaber eines Modegeschäfts, und Frau Demir, Verkäuferin in einem Supermarkt. Herr Albrecht, was meinen Sie? Mann: Ich bin klar dafür. Viele Menschen arbeiten unter der Woche lange und haben nur am Wochenende Zeit zum Einkaufen. Außerdem verlieren wir immer mehr Kunden an das Internet. Online kann man schließlich rund um die Uhr bestellen.", q: "Wer sagt: Die Geschäfte verlieren Kunden an Online-Shops?", o: ["die Moderatorin", "Herr Albrecht", "Frau Demir"], a: 1 },
      { teil: 4, n: 2, text: "Frau: Frau Demir, Sie arbeiten im Verkauf. Wie sehen Sie das? Frau: Ganz anders. Der Sonntag ist für viele Verkäuferinnen der einzige Tag, an dem die ganze Familie zusammen ist. Wenn wir auch sonntags arbeiten müssen, sehen wir unsere Kinder kaum noch. Ich finde, wir brauchen einen gemeinsamen Ruhetag für alle.", q: "Wer sagt: Familien brauchen einen gemeinsamen freien Tag?", o: ["die Moderatorin", "Herr Albrecht", "Frau Demir"], a: 2 }
    ],
    lesen: [
      { teil: 1, text: BLOG, q: "Die Trauung im Standesamt hat lange gedauert.", o: ["Richtig", "Falsch"], a: 1 },
      { teil: 1, text: BLOG, q: "Die Gäste haben bis zum frühen Morgen getanzt.", o: ["Richtig", "Falsch"], a: 0 },
      { teil: 2, text: ZEITUNG, q: "Was ist das Besondere an dem Bücherschrank?", o: ["Er steht in einer Schule.", "Er war früher eine Telefonzelle.", "Man muss sich vorher anmelden."], a: 1 },
      { teil: 2, text: ZEITUNG, q: "Was hat Mia nach zwei Wochen gemacht?", o: ["Sie hat die Bücher verkauft.", "Sie hat die Regale gestrichen.", "Sie hat eine zweite Telefonzelle beantragt."], a: 2 },
      { teil: 3, text: "Ihre Freundin möchte am Wochenende ehrenamtlich mit Tieren arbeiten.", q: "Welche Anzeige passt?", o: ["a) Tierheim Essen-Nord sucht Helfer zum Gassigehen, samstags und sonntags, keine Vorkenntnisse nötig.", "b) Zoo Gelsenkirchen: Ausbildung zum Tierpfleger, Beginn am ersten August, Bewerbung bis März.", "c) Hundeschule Bello: Kurse für junge Hunde und ihre Besitzer, dienstags und donnerstags um 18 Uhr.", "0) Keine Anzeige passt."], a: 0 },
      { teil: 3, text: "Sie möchten Ihr Deutsch für den Beruf verbessern, können aber nur abends lernen.", q: "Welche Anzeige passt?", o: ["a) Volkshochschule: Deutsch im Beruf B1/B2, Montag bis Freitag von 8:30 bis 12 Uhr.", "b) Sprachcafé: Jeden Sonntagnachmittag Tandem Deutsch und Spanisch, nur Konversation, Eintritt frei.", "c) Tanzschule Salsa Libre: Anfängerkurs für Paare, mittwochs um 20 Uhr.", "0) Keine Anzeige passt."], a: 3 },
      { teil: 4, text: "Leserbrief von Jonas, 34, aus Köln: «Jedes Jahr an Silvester versteckt sich unser Hund stundenlang unter dem Bett. Dazu kommen Verletzte, Müll auf den Straßen und schlechte Luft. Ich finde, privates Feuerwerk sollte verboten werden. Ein großes Feuerwerk, das die Stadt organisiert, reicht völlig, und es ist sogar viel schöner.»", q: "Ist Jonas für ein Verbot von privatem Feuerwerk?", o: ["Ja", "Nein"], a: 0 },
      { teil: 5, text: "Benutzungsordnung der Stadtbibliothek: Bücher und andere Medien können vier Wochen ausgeliehen werden. Eine Verlängerung ist zweimal möglich, online oder an der Theke, wenn kein anderer Leser das Medium reserviert hat. Für jeden Tag Verspätung kostet es fünfzig Cent pro Medium. Essen ist in den Lesesälen nicht gestattet, Getränke in verschlossenen Flaschen sind erlaubt. Bitte schalten Sie Ihr Handy auf lautlos.", q: "Was ist in den Lesesälen erlaubt?", o: ["ein Brötchen essen", "Wasser aus einer geschlossenen Flasche trinken", "laut telefonieren"], a: 1 }
    ],
    schreiben: [
      {
        teil: 1,
        task: "Sie haben letztes Wochenende Ihren Geburtstag gefeiert. Ihre Freundin Julia konnte nicht kommen. Schreiben Sie Julia eine E-Mail (circa 80 Wörter).",
        p: ["Beschreiben Sie: Wie war die Feier?", "Begründen Sie: Welches Geschenk hat Ihnen am besten gefallen und warum?", "Machen Sie einen Vorschlag für ein Treffen."],
        words: 80,
        model: "Liebe Julia, schade, dass du am Samstag nicht da warst! Die Feier war wirklich toll. Wir waren ungefähr zwanzig Leute, haben im Garten gegrillt und bis Mitternacht getanzt. Mein Mitbewohner hatte sogar einen dominikanischen Kuchen gebacken. Das schönste Geschenk war ein Gutschein für einen Kochkurs von meinen Kollegen, weil ich schon lange die deutsche Küche lernen wollte. Ein Stück Kuchen habe ich dir natürlich aufgehoben. Hast du nächsten Freitag Zeit? Dann könnten wir zusammen ins Kino gehen und danach etwas trinken. Liebe Grüße, Carlos"
      },
      {
        teil: 2,
        task: "Sie haben im Fernsehen eine Diskussionssendung zum Thema «Haustiere in der Stadt» gesehen. Im Online-Gästebuch der Sendung finden Sie folgende Meinung: «Ein Hund gehört nicht in eine kleine Stadtwohnung. Tiere brauchen Platz und Natur.» (Miriam, 41). Schreiben Sie nun Ihre Meinung (circa 80 Wörter).",
        p: ["Ihre Meinung zum Thema", "Gründe und Beispiele", "eigene Erfahrungen"],
        words: 80,
        model: "Ich verstehe Miriam, aber ich bin anderer Meinung. Ein Hund kann auch in der Stadt glücklich sein, wenn man genug Zeit für ihn hat. Wichtiger als eine große Wohnung ist, dass man jeden Tag lange mit ihm spazieren geht. Meine Nachbarin hat zum Beispiel einen kleinen Hund und geht dreimal am Tag mit ihm in den Park. Einerseits ist das viel Arbeit, andererseits ist ein Haustier ein wunderbarer Freund, besonders für Menschen, die allein leben. Deshalb finde ich Hunde in der Stadt völlig in Ordnung."
      },
      {
        teil: 3,
        task: "Ihre Kursleiterin, Frau Schröder, hat Sie zu einem Kursausflug am Samstag eingeladen. Sie können leider nicht teilnehmen. Schreiben Sie Frau Schröder eine E-Mail (circa 40 Wörter). Vergessen Sie Anrede und Gruß am Schluss nicht.",
        p: ["sich höflich entschuldigen", "den Grund nennen", "Anrede und Gruß"],
        words: 40,
        model: "Sehr geehrte Frau Schröder, vielen Dank für die Einladung zum Kursausflug am Samstag. Leider kann ich nicht teilnehmen, weil an diesem Tag mein Bruder aus der Dominikanischen Republik ankommt und ich ihn vom Flughafen abholen muss. Ich wünsche Ihnen und der Gruppe viel Spaß! Mit freundlichen Grüßen Carlos Pérez"
      }
    ],
    sprechen: [
      {
        teil: 1,
        task: "Eine Kollegin aus Ihrem Deutschkurs zieht in eine andere Stadt. Sie möchten zusammen mit Ihrem Partner oder Ihrer Partnerin eine kleine Abschiedsfeier für sie organisieren. Planen Sie gemeinsam: Machen Sie Vorschläge und reagieren Sie auf die Vorschläge Ihres Partners.",
        hints: ["Wann und wo feiern?", "Wer wird eingeladen?", "Essen und Getränke?", "Welches Geschenk?"],
        model: "Ich finde, wir sollten die Feier am Freitag nach dem Kurs machen, dann haben alle Zeit. Wie wäre es mit unserem Kursraum? Der ist groß genug, und wir müssen nichts bezahlen. Einladen sollten wir den ganzen Kurs und natürlich unsere Lehrerin. Ich schlage vor, dass jeder etwas zu essen mitbringt. Ich kann einen Nudelsalat machen, und du kümmerst dich um die Getränke, einverstanden? Als Geschenk könnten wir ein Fotoalbum mit Bildern vom Kurs basteln. Dann denkt sie in der neuen Stadt immer an uns."
      },
      {
        teil: 2,
        task: "Präsentieren Sie das Thema «Ein soziales Jahr nach der Schule: sinnvoll für alle?». Folgen Sie den fünf Folien.",
        hints: ["Folie 1: Thema und Aufbau der Präsentation vorstellen", "Folie 2: persönliche Erfahrungen", "Folie 3: Situation in Ihrem Heimatland", "Folie 4: Vor- und Nachteile und Ihre Meinung", "Folie 5: Abschluss und Dank"],
        model: "Ich möchte heute über das Thema «Ein soziales Jahr nach der Schule» sprechen. In Deutschland können junge Leute nach der Schule ein Freiwilliges Soziales Jahr machen. Zuerst erzähle ich von meinen Erfahrungen, dann berichte ich über die Situation in meinem Heimatland, und danach nenne ich Vor- und Nachteile. Nach der Schule habe ich selbst ein halbes Jahr ehrenamtlich in einem Kinderheim in Santo Domingo geholfen. Das war anstrengend, aber ich habe sehr viel gelernt. In der Dominikanischen Republik gibt es kein offizielles soziales Jahr. Viele Jugendliche müssen sofort arbeiten, um ihre Familie zu unterstützen. Ein Vorteil ist, dass junge Menschen Verantwortung übernehmen und herausfinden, welcher Beruf zu ihnen passt. Ein Nachteil ist, dass man dabei kaum Geld verdient. Meiner Meinung nach sollte das soziale Jahr freiwillig bleiben, aber besser bezahlt werden. Zum Schluss möchte ich sagen: Wer die Möglichkeit hat, sollte es unbedingt machen. Vielen Dank für Ihre Aufmerksamkeit."
      },
      {
        teil: 3,
        task: "Ihr Partner oder Ihre Partnerin hat das Thema «Online einkaufen oder im Geschäft?» präsentiert. Geben Sie eine kurze Rückmeldung und stellen Sie eine Frage. Beantworten Sie danach die Fragen zu Ihrer eigenen Präsentation.",
        hints: ["Rückmeldung: Was war interessant?", "eine Frage zur Präsentation stellen", "auf eine Frage zur eigenen Präsentation antworten"],
        model: "Vielen Dank für deine interessante Präsentation. Besonders gut hat mir gefallen, dass du von deinen eigenen Erfahrungen erzählt hast. Ich kaufe auch oft online ein, weil es bequem ist. Ich habe aber eine Frage: Du hast gesagt, dass Online-Shopping schlecht für die Umwelt ist. Was könnte man deiner Meinung nach dagegen tun? Und zu deiner Frage an mich: Ja, ich würde ein soziales Jahr allen empfehlen, weil man dabei viel über sich selbst lernt."
      }
    ]
  };
})();
