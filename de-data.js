/* Werkstatt Ü — contenido de alemán para hispanohablantes (A1.4 → A2).
   Vocabulario: [tema, artículo, palabra, plural | Perfekt, español, ejemplo]
   Plural: "-e" sufijo, "¨-e" umlaut + sufijo, "¨" solo umlaut, "-" igual, "–" sin plural, "pl" solo plural, o la forma completa. */
window.DE = {
  themes: {
    chunk: { name: "Frases clave", de: "Redemittel" },
    essen: { name: "Comida y bebida", de: "Essen & Trinken" },
    wohnen: { name: "Casa", de: "Wohnen" },
    familie: { name: "Familia y gente", de: "Familie" },
    stadt: { name: "Ciudad y transporte", de: "Stadt & Verkehr" },
    zeit: { name: "Tiempo y citas", de: "Zeit & Termine" },
    gesund: { name: "Cuerpo y salud", de: "Gesundheit" },
    kleidung: { name: "Ropa y clima", de: "Kleidung & Wetter" },
    arbeit: { name: "Trabajo y estudio", de: "Arbeit & Lernen" },
    winter: { name: "Navidad y Año Nuevo", de: "Weihnachten & Silvester" },
    verben: { name: "Verbos clave (con Perfekt)", de: "Verben" }
  },

  vocab: [
    ["chunk", "", "Wie bitte?", "", "¿Cómo? (no entendí)", ""],
    ["chunk", "", "Können Sie das bitte wiederholen?", "", "¿Puede repetirlo, por favor?", ""],
    ["chunk", "", "Langsamer, bitte.", "", "Más despacio, por favor.", ""],
    ["chunk", "", "Was bedeutet das?", "", "¿Qué significa eso?", ""],
    ["chunk", "", "Wie sagt man das auf Deutsch?", "", "¿Cómo se dice eso en alemán?", ""],
    ["chunk", "", "Ich verstehe das nicht.", "", "No lo entiendo.", ""],
    ["chunk", "", "Ich hätte gern einen Kaffee.", "", "Quisiera un café.", ""],
    ["chunk", "", "Ich möchte bitte bezahlen.", "", "Quisiera pagar, por favor.", ""],
    ["chunk", "", "Zusammen oder getrennt?", "", "¿Junto o por separado? (la cuenta)", ""],
    ["chunk", "", "Stimmt so.", "", "Quédese con el cambio.", ""],
    ["chunk", "", "Kann ich mit Karte zahlen?", "", "¿Puedo pagar con tarjeta?", ""],
    ["chunk", "", "Wo ist die Toilette?", "", "¿Dónde está el baño?", ""],
    ["chunk", "", "Wie komme ich zum Bahnhof?", "", "¿Cómo llego a la estación?", ""],
    ["chunk", "", "Mir ist kalt.", "", "Tengo frío. (¡no «Ich bin kalt»!)", ""],
    ["chunk", "", "Ich bin 25 Jahre alt.", "", "Tengo 25 años. (con sein, no haben)", ""],
    ["chunk", "", "Das schmeckt sehr gut!", "", "¡Está muy rico!", ""],
    ["chunk", "", "Danke für die Einladung.", "", "Gracias por la invitación.", ""],
    ["chunk", "", "Freut mich, Sie kennenzulernen.", "", "Encantado de conocerle.", ""],
    ["chunk", "", "Wollen wir uns duzen?", "", "¿Nos tuteamos?", ""],
    ["chunk", "", "Es tut mir leid.", "", "Lo siento.", ""],
    ["chunk", "", "Das macht nichts.", "", "No pasa nada.", ""],
    ["chunk", "", "Keine Ahnung.", "", "Ni idea.", ""],
    ["chunk", "", "Hast du Lust, ins Kino zu gehen?", "", "¿Tienes ganas de ir al cine?", ""],
    ["chunk", "", "Gute Besserung!", "", "¡Que te mejores!", ""],
    ["chunk", "", "Prost! / Zum Wohl!", "", "¡Salud! (al brindar)", ""],
    ["chunk", "", "Guten Appetit!", "", "¡Buen provecho!", ""],
    ["chunk", "", "Frohe Weihnachten!", "", "¡Feliz Navidad!", ""],
    ["chunk", "", "Guten Rutsch!", "", "¡Feliz salida de año! (antes del 31)", ""],
    ["chunk", "", "Frohes neues Jahr!", "", "¡Feliz año nuevo!", ""],
    ["chunk", "", "Ich freue mich auf Weihnachten.", "", "Tengo muchas ganas de que llegue la Navidad.", ""],
    ["chunk", "", "Wie war dein Tag?", "", "¿Qué tal tu día?", ""],
    ["chunk", "", "Was hast du am Wochenende gemacht?", "", "¿Qué hiciste el fin de semana?", ""],
    ["chunk", "", "Ich habe mich verlaufen.", "", "Me perdí (caminando).", ""],
    ["chunk", "", "Der Zug hat Verspätung.", "", "El tren viene con retraso.", ""],
    ["chunk", "", "Das ist mir egal.", "", "Me da igual.", ""],
    ["chunk", "", "Ich komme aus der Dominikanischen Republik.", "", "Soy de la República Dominicana. (¡con «der»!)", ""],

    ["essen", "der", "Kaffee", "-s", "el café", "Ich trinke morgens Kaffee."],
    ["essen", "der", "Tee", "-s", "el té", "Möchtest du einen Tee?"],
    ["essen", "das", "Wasser", "–", "el agua", "Ein Wasser ohne Kohlensäure, bitte."],
    ["essen", "die", "Milch", "–", "la leche", "Kaffee mit Milch, bitte."],
    ["essen", "das", "Brot", "-e", "el pan", "Das Brot ist frisch."],
    ["essen", "das", "Brötchen", "-", "el panecillo", "Vier Brötchen, bitte."],
    ["essen", "die", "Brezel", "-n", "el pretzel", "Eine Brezel mit Butter."],
    ["essen", "der", "Käse", "–", "el queso", "Ich esse gern Käse."],
    ["essen", "die", "Wurst", "¨-e", "el embutido / la salchicha", "Eine Currywurst, bitte!"],
    ["essen", "das", "Ei", "-er", "el huevo", "Zum Frühstück esse ich ein Ei."],
    ["essen", "der", "Apfel", "¨", "la manzana", "Der Apfel ist rot."],
    ["essen", "die", "Kartoffel", "-n", "la papa", "Kartoffeln mit Gemüse."],
    ["essen", "das", "Fleisch", "–", "la carne", "Ich esse kein Fleisch."],
    ["essen", "der", "Fisch", "-e", "el pescado", "Freitags gibt es Fisch."],
    ["essen", "das", "Gemüse", "–", "las verduras", "Gemüse ist gesund."],
    ["essen", "das", "Obst", "–", "la fruta", "Ich kaufe Obst auf dem Markt."],
    ["essen", "der", "Kuchen", "-", "el pastel / bizcocho", "Kaffee und Kuchen am Sonntag."],
    ["essen", "die", "Rechnung", "-en", "la cuenta", "Die Rechnung, bitte!"],
    ["essen", "das", "Frühstück", "-e", "el desayuno", "Das Frühstück ist um acht."],
    ["essen", "das", "Mittagessen", "-", "el almuerzo", "Was gibt es zum Mittagessen?"],
    ["essen", "das", "Abendessen", "-", "la cena", "Das Abendessen ist fertig."],
    ["essen", "die", "Flasche", "-n", "la botella", "Eine Flasche Wasser kostet Pfand."],
    ["essen", "das", "Glas", "¨-er", "el vaso / la copa", "Ein Glas Wein, bitte."],
    ["essen", "die", "Tasse", "-n", "la taza", "Eine Tasse Tee."],

    ["wohnen", "die", "Wohnung", "-en", "el apartamento", "Die Wohnung hat drei Zimmer."],
    ["wohnen", "das", "Haus", "¨-er", "la casa", "Das Haus ist alt."],
    ["wohnen", "das", "Zimmer", "-", "la habitación", "Mein Zimmer ist klein."],
    ["wohnen", "die", "Küche", "-n", "la cocina", "Wir essen in der Küche."],
    ["wohnen", "das", "Bad", "¨-er", "el baño", "Das Bad ist rechts."],
    ["wohnen", "der", "Schlüssel", "-", "la llave", "Ich habe meinen Schlüssel vergessen."],
    ["wohnen", "der", "Tisch", "-e", "la mesa", "Das Essen steht auf dem Tisch."],
    ["wohnen", "der", "Stuhl", "¨-e", "la silla", "Setz dich auf den Stuhl."],
    ["wohnen", "das", "Bett", "-en", "la cama", "Ich gehe ins Bett."],
    ["wohnen", "die", "Miete", "-n", "el alquiler", "Die Miete ist hoch."],
    ["wohnen", "der", "Nachbar", "-n", "el vecino", "Unser Nachbar ist nett."],
    ["wohnen", "die", "Heizung", "-en", "la calefacción", "Mach bitte die Heizung an."],
    ["wohnen", "das", "Fenster", "-", "la ventana", "Kannst du das Fenster öffnen?"],
    ["wohnen", "die", "Tür", "-en", "la puerta", "Mach die Tür zu, bitte."],
    ["wohnen", "der", "Müll", "–", "la basura", "Den Müll trennen wir."],
    ["wohnen", "die", "Hausschuhe", "pl", "las pantuflas", "Zu Hause trage ich Hausschuhe."],

    ["familie", "die", "Eltern", "pl", "los padres", "Meine Eltern wohnen in Santo Domingo."],
    ["familie", "die", "Mutter", "¨", "la madre", "Meine Mutter heißt Ana."],
    ["familie", "der", "Vater", "¨", "el padre", "Mein Vater arbeitet viel."],
    ["familie", "der", "Bruder", "¨", "el hermano", "Ich habe einen Bruder."],
    ["familie", "die", "Schwester", "-n", "la hermana", "Meine Schwester ist älter."],
    ["familie", "die", "Geschwister", "pl", "los hermanos (en general)", "Hast du Geschwister?"],
    ["familie", "der", "Sohn", "¨-e", "el hijo", "Ihr Sohn ist neun."],
    ["familie", "die", "Tochter", "¨", "la hija", "Ihre Tochter studiert."],
    ["familie", "die", "Großeltern", "pl", "los abuelos", "Die Großeltern kommen zu Weihnachten."],
    ["familie", "der", "Freund", "-e", "el amigo / el novio", "Das ist mein Freund."],
    ["familie", "die", "Freundin", "-nen", "la amiga / la novia", "Meine Freundin kommt aus Deutschland."],
    ["familie", "der", "Schwiegervater", "¨", "el suegro", "Mein Schwiegervater kocht gern."],
    ["familie", "die", "Schwiegermutter", "¨", "la suegra", "Meine Schwiegermutter backt Plätzchen."],
    ["familie", "das", "Kind", "-er", "el niño / la niña", "Das Kind spielt."],
    ["familie", "das", "Mädchen", "-", "la niña (¡neutro!)", "Das Mädchen heißt Lena."],
    ["familie", "der", "Junge", "-n", "el chico", "Der Junge ist neun Jahre alt."],
    ["familie", "der", "Mann", "¨-er", "el hombre / el esposo", "Ihr Mann ist Arzt."],
    ["familie", "die", "Frau", "-en", "la mujer / la esposa", "Seine Frau ist Lehrerin."],

    ["stadt", "der", "Bahnhof", "¨-e", "la estación de tren", "Der Bahnhof ist im Zentrum."],
    ["stadt", "der", "Zug", "¨-e", "el tren", "Der Zug fährt um 9 Uhr."],
    ["stadt", "das", "Gleis", "-e", "el andén / la vía", "Der Zug fährt von Gleis 5."],
    ["stadt", "die", "Fahrkarte", "-n", "el boleto / billete", "Ich kaufe eine Fahrkarte."],
    ["stadt", "die", "Haltestelle", "-n", "la parada", "Die Haltestelle ist da vorne."],
    ["stadt", "die", "U-Bahn", "-en", "el metro", "Ich fahre mit der U-Bahn."],
    ["stadt", "die", "Straßenbahn", "-en", "el tranvía", "Die Straßenbahn kommt gleich."],
    ["stadt", "der", "Bus", "-se", "el autobús / la guagua", "Ich nehme den Bus."],
    ["stadt", "die", "Straße", "-n", "la calle", "Die zweite Straße rechts."],
    ["stadt", "die", "Ampel", "-n", "el semáforo", "An der Ampel links."],
    ["stadt", "die", "Kreuzung", "-en", "el cruce", "Nach der Kreuzung geradeaus."],
    ["stadt", "die", "Apotheke", "-n", "la farmacia", "Die Apotheke ist neben der Bank."],
    ["stadt", "die", "Bäckerei", "-en", "la panadería", "Die Bäckerei öffnet um sechs."],
    ["stadt", "der", "Supermarkt", "¨-e", "el supermercado", "Am Sonntag ist der Supermarkt zu."],
    ["stadt", "der", "Flughafen", "¨", "el aeropuerto", "Wir fahren zum Flughafen."],
    ["stadt", "die", "Verspätung", "-en", "el retraso", "Der Zug hat zehn Minuten Verspätung."],
    ["stadt", "der", "Ausgang", "¨-e", "la salida", "Wo ist der Ausgang?"],
    ["stadt", "der", "Eingang", "¨-e", "la entrada", "Der Eingang ist links."],
    ["stadt", "das", "Auto", "-s", "el carro / coche", "Wir fahren mit dem Auto."],
    ["stadt", "das", "Fahrrad", "¨-er", "la bicicleta", "Viele fahren mit dem Fahrrad."],

    ["zeit", "der", "Termin", "-e", "la cita", "Ich habe morgen einen Termin."],
    ["zeit", "die", "Uhr", "-en", "el reloj / la hora (en punto)", "Es ist drei Uhr."],
    ["zeit", "die", "Stunde", "-n", "la hora (duración)", "Der Kurs dauert zwei Stunden."],
    ["zeit", "die", "Woche", "-n", "la semana", "Nächste Woche habe ich Urlaub."],
    ["zeit", "der", "Monat", "-e", "el mes", "Ich bleibe einen Monat."],
    ["zeit", "das", "Jahr", "-e", "el año", "Frohes neues Jahr!"],
    ["zeit", "das", "Wochenende", "-n", "el fin de semana", "Schönes Wochenende!"],
    ["zeit", "der", "Morgen", "-", "la mañana", "Guten Morgen!"],
    ["zeit", "der", "Abend", "-e", "la tarde-noche", "Am Abend sehe ich fern."],
    ["zeit", "die", "Nacht", "¨-e", "la noche", "Gute Nacht!"],
    ["zeit", "", "heute", "", "hoy", "Heute ist Montag."],
    ["zeit", "", "morgen", "", "mañana", "Morgen arbeite ich."],
    ["zeit", "", "gestern", "", "ayer", "Gestern war ich müde."],
    ["zeit", "", "pünktlich", "", "puntual", "Bitte sei pünktlich!"],
    ["zeit", "", "früh / spät", "", "temprano / tarde", "Es ist schon spät."],

    ["gesund", "der", "Kopf", "¨-e", "la cabeza", "Ich habe Kopfschmerzen."],
    ["gesund", "der", "Bauch", "¨-e", "la barriga", "Mein Bauch tut weh."],
    ["gesund", "der", "Hals", "¨-e", "la garganta / el cuello", "Ich habe Halsschmerzen."],
    ["gesund", "der", "Rücken", "-", "la espalda", "Mein Rücken tut weh."],
    ["gesund", "das", "Bein", "-e", "la pierna", "Mein Bein tut weh."],
    ["gesund", "die", "Hand", "¨-e", "la mano", "Wasch dir die Hände!"],
    ["gesund", "der", "Fuß", "¨-e", "el pie", "Ich gehe zu Fuß."],
    ["gesund", "der", "Zahn", "¨-e", "el diente", "Ich muss zum Zahnarzt."],
    ["gesund", "das", "Auge", "-n", "el ojo", "Sie hat braune Augen."],
    ["gesund", "der", "Arzt", "¨-e", "el médico", "Ich gehe zum Arzt."],
    ["gesund", "die", "Ärztin", "-nen", "la médica", "Die Ärztin ist sehr nett."],
    ["gesund", "das", "Fieber", "–", "la fiebre", "Ich habe Fieber."],
    ["gesund", "die", "Erkältung", "-en", "el resfriado", "Ich habe eine Erkältung."],
    ["gesund", "die", "Tablette", "-n", "la pastilla", "Nehmen Sie zwei Tabletten pro Tag."],
    ["gesund", "das", "Rezept", "-e", "la receta", "Das Rezept bekommen Sie vom Arzt."],

    ["kleidung", "die", "Jacke", "-n", "la chaqueta", "Nimm eine warme Jacke mit."],
    ["kleidung", "der", "Mantel", "¨", "el abrigo (¡no «mantel»!)", "Im Winter trage ich einen Mantel."],
    ["kleidung", "die", "Mütze", "-n", "el gorro", "Die Mütze ist warm."],
    ["kleidung", "der", "Schal", "-s", "la bufanda", "Vergiss deinen Schal nicht!"],
    ["kleidung", "die", "Handschuhe", "pl", "los guantes", "Ohne Handschuhe ist es zu kalt."],
    ["kleidung", "der", "Pullover", "-", "el suéter", "Der Pullover ist zu groß."],
    ["kleidung", "die", "Hose", "-n", "el pantalón", "Die Hose passt gut."],
    ["kleidung", "das", "Hemd", "-en", "la camisa", "Er trägt ein weißes Hemd."],
    ["kleidung", "das", "Kleid", "-er", "el vestido", "Das Kleid ist schön."],
    ["kleidung", "die", "Schuhe", "pl", "los zapatos", "Zieh bitte die Schuhe aus."],
    ["kleidung", "die", "Stiefel", "pl", "las botas", "Im Schnee brauchst du Stiefel."],
    ["kleidung", "der", "Regenschirm", "-e", "el paraguas", "Nimm einen Regenschirm mit."],
    ["kleidung", "das", "Wetter", "–", "el clima / el tiempo", "Wie ist das Wetter?"],
    ["kleidung", "der", "Regen", "–", "la lluvia", "Es gibt viel Regen."],
    ["kleidung", "der", "Schnee", "–", "la nieve", "Gibt es Schnee an Weihnachten?"],
    ["kleidung", "die", "Sonne", "-n", "el sol (¡femenino!)", "Die Sonne scheint."],
    ["kleidung", "der", "Wind", "-e", "el viento", "Der Wind ist kalt."],
    ["kleidung", "", "kalt / warm", "", "frío / cálido", "Heute ist es sehr kalt."],

    ["arbeit", "die", "Arbeit", "-en", "el trabajo", "Ich gehe zur Arbeit."],
    ["arbeit", "der", "Beruf", "-e", "la profesión", "Was sind Sie von Beruf?"],
    ["arbeit", "die", "Firma", "Firmen", "la empresa", "Ich arbeite bei einer Firma."],
    ["arbeit", "der", "Kollege", "-n", "el colega", "Mein Kollege hilft mir."],
    ["arbeit", "das", "Büro", "-s", "la oficina", "Ich bin im Büro."],
    ["arbeit", "der", "Chef", "-s", "el jefe", "Der Chef ist im Urlaub."],
    ["arbeit", "der", "Kurs", "-e", "el curso", "Mein Deutschkurs ist am Abend."],
    ["arbeit", "die", "Prüfung", "-en", "el examen", "Die Prüfung ist im Januar."],
    ["arbeit", "die", "Hausaufgabe", "-n", "la tarea", "Hast du die Hausaufgaben gemacht?"],
    ["arbeit", "das", "Wörterbuch", "¨-er", "el diccionario", "Ich brauche ein Wörterbuch."],
    ["arbeit", "die", "Besprechung", "-en", "la reunión", "Die Besprechung ist um zehn."],
    ["arbeit", "der", "Urlaub", "-e", "las vacaciones", "Ich mache Urlaub in Deutschland."],
    ["arbeit", "der", "Feierabend", "-e", "el fin de la jornada", "Endlich Feierabend!"],

    ["winter", "der", "Weihnachtsmarkt", "¨-e", "el mercado navideño", "Gehen wir auf den Weihnachtsmarkt?"],
    ["winter", "der", "Glühwein", "-e", "el vino caliente con especias", "Ein Glühwein, bitte."],
    ["winter", "das", "Pfand", "¨-er", "el depósito (que te devuelven)", "Auf die Tasse gibt es Pfand."],
    ["winter", "der", "Adventskalender", "-", "el calendario de adviento", "Heute öffne ich das erste Türchen."],
    ["winter", "der", "Tannenbaum", "¨-e", "el árbol de Navidad", "Der Tannenbaum ist schön."],
    ["winter", "das", "Geschenk", "-e", "el regalo", "Das Geschenk ist für dich."],
    ["winter", "die", "Kerze", "-n", "la vela", "Wir zünden eine Kerze an."],
    ["winter", "die", "Plätzchen", "pl", "las galletas navideñas", "Wir backen Plätzchen."],
    ["winter", "der", "Heiligabend", "-e", "la Nochebuena (24 dic.)", "An Heiligabend gibt es Geschenke."],
    ["winter", "das", "Silvester", "-", "la Nochevieja", "Was machst du an Silvester?"],
    ["winter", "das", "Feuerwerk", "-e", "los fuegos artificiales", "Um Mitternacht gibt es Feuerwerk."],
    ["winter", "der", "Sekt", "-e", "el espumante", "Wir trinken Sekt um zwölf."],
    ["winter", "der", "Berliner", "-", "la dona rellena", "An Silvester essen wir Berliner."],
    ["winter", "die", "Bratwurst", "¨-e", "la salchicha a la parrilla", "Eine Bratwurst mit Senf."],

    ["verben", "", "sein", "ist gewesen", "ser / estar", "Ich bin müde."],
    ["verben", "", "haben", "hat gehabt", "tener", "Ich habe keine Zeit."],
    ["verben", "", "gehen", "ist gegangen", "ir (a pie)", "Ich bin nach Hause gegangen."],
    ["verben", "", "fahren", "ist gefahren", "ir (en vehículo) / conducir", "Wir sind nach Köln gefahren."],
    ["verben", "", "kommen", "ist gekommen", "venir", "Er ist spät gekommen."],
    ["verben", "", "bleiben", "ist geblieben", "quedarse", "Ich bin zu Hause geblieben."],
    ["verben", "", "fliegen", "ist geflogen", "volar", "Ich bin nach Frankfurt geflogen."],
    ["verben", "", "aufstehen", "ist aufgestanden", "levantarse", "Ich bin um 7 Uhr aufgestanden."],
    ["verben", "", "ankommen", "ist angekommen", "llegar", "Der Zug ist pünktlich angekommen."],
    ["verben", "", "umsteigen", "ist umgestiegen", "hacer transbordo", "Ich bin in Köln umgestiegen."],
    ["verben", "", "essen", "hat gegessen", "comer", "Wir haben Pizza gegessen."],
    ["verben", "", "trinken", "hat getrunken", "beber", "Ich habe Glühwein getrunken."],
    ["verben", "", "schlafen", "hat geschlafen", "dormir", "Ich habe lange geschlafen."],
    ["verben", "", "machen", "hat gemacht", "hacer", "Was hast du gemacht?"],
    ["verben", "", "arbeiten", "hat gearbeitet", "trabajar", "Ich habe viel gearbeitet."],
    ["verben", "", "kaufen", "hat gekauft", "comprar", "Ich habe Brötchen gekauft."],
    ["verben", "", "bezahlen", "hat bezahlt", "pagar", "Ich habe schon bezahlt."],
    ["verben", "", "sprechen", "hat gesprochen", "hablar", "Wir haben Deutsch gesprochen."],
    ["verben", "", "verstehen", "hat verstanden", "entender", "Ich habe alles verstanden."],
    ["verben", "", "lernen", "hat gelernt", "aprender / estudiar", "Ich habe Vokabeln gelernt."],
    ["verben", "", "besuchen", "hat besucht", "visitar", "Wir haben die Familie besucht."],
    ["verben", "", "treffen", "hat getroffen", "encontrarse con", "Ich habe Freunde getroffen."],
    ["verben", "", "einkaufen", "hat eingekauft", "hacer la compra", "Ich habe im Supermarkt eingekauft."],
    ["verben", "", "anrufen", "hat angerufen", "llamar por teléfono", "Ich habe meine Mutter angerufen."],
    ["verben", "", "fernsehen", "hat ferngesehen", "ver la tele", "Wir haben ferngesehen."],
    ["verben", "", "mitbringen", "hat mitgebracht", "traer (consigo)", "Ich habe ein Geschenk mitgebracht."],
    ["verben", "", "abholen", "hat abgeholt", "recoger (a alguien)", "Er hat mich am Flughafen abgeholt."],
    ["verben", "", "helfen", "hat geholfen", "ayudar (+ Dativ)", "Kannst du mir helfen?"],
    ["verben", "", "gefallen", "hat gefallen", "gustar (+ Dativ)", "Die Stadt gefällt mir."],
    ["verben", "", "brauchen", "hat gebraucht", "necesitar", "Ich brauche einen Termin."],
    ["verben", "", "finden", "hat gefunden", "encontrar / opinar", "Ich habe den Schlüssel gefunden."],
    ["verben", "", "warten", "hat gewartet", "esperar", "Ich habe 20 Minuten gewartet."],
    ["verben", "", "bekommen", "hat bekommen", "recibir (¡no «become»!)", "Ich habe ein Geschenk bekommen."],
    ["verben", "", "vergessen", "hat vergessen", "olvidar", "Ich habe den Schirm vergessen."],
    ["verben", "", "feiern", "hat gefeiert", "celebrar", "Wir haben Silvester gefeiert."],
    ["verben", "", "schenken", "hat geschenkt", "regalar", "Was hast du ihr geschenkt?"]
  ],

  /* Gimnasio de gramática. Tipos: mc (opción), type (escribir), order (ordenar). */
  grammar: [
    {
      id: "v2", level: "A1", title: "El verbo en posición 2", de: "Verbposition",
      rule: "En una frase principal el verbo conjugado va SIEMPRE en el segundo lugar. Si empiezas con «Heute», «Am Montag» o «Dann», el sujeto pasa detrás del verbo.",
      trap: "En español decimos «Hoy yo voy al cine». En alemán eso suena roto: «Heute ich gehe…» ✗ → «Heute gehe ich…» ✓.",
      ex: ["Ich gehe heute ins Kino.", "Heute gehe ich ins Kino.", "Am Wochenende besuche ich meine Familie."],
      items: [
        { t: "order", w: ["Heute", "gehe", "ich", "ins Kino"], es: "Hoy voy al cine." },
        { t: "order", w: ["Am Montag", "habe", "ich", "einen Termin"], es: "El lunes tengo una cita." },
        { t: "order", w: ["Morgen", "fahren", "wir", "nach Köln"], es: "Mañana vamos a Colonia." },
        { t: "order", w: ["Dann", "trinken", "wir", "einen Kaffee"], es: "Después tomamos un café." },
        { t: "order", w: ["Im Winter", "ist", "es", "sehr kalt"], es: "En invierno hace mucho frío." },
        { t: "mc", q: "Elige la frase correcta:", o: ["Jetzt lerne ich Deutsch.", "Jetzt ich lerne Deutsch.", "Jetzt Deutsch ich lerne."], a: 0, why: "«Jetzt» ocupa la posición 1; el verbo «lerne» va en la 2." },
        { t: "mc", q: "Elige la frase correcta:", o: ["Leider ich habe keine Zeit.", "Leider habe ich keine Zeit.", "Ich leider habe keine Zeit."], a: 1, why: "Verbo en posición 2: «Leider habe ich…»." },
        { t: "order", w: ["Wann", "kommst", "du", "nach Hause?"], es: "¿Cuándo vienes a casa?" }
      ]
    },
    {
      id: "trennbar", level: "A1", title: "Verbos separables", de: "Trennbare Verben",
      rule: "Verbos como aufstehen, einkaufen o anrufen se parten: la parte que cambia va en posición 2 y el prefijo se va al FINAL de la frase.",
      trap: "No dejes el prefijo pegado: «Ich aufstehe» ✗ → «Ich stehe um 7 Uhr auf» ✓.",
      ex: ["Ich stehe um 7 Uhr auf.", "Wir kaufen am Samstag ein.", "Ruf mich bitte an!"],
      items: [
        { t: "type", q: "Ich ___ um 7 Uhr ___. (aufstehen)", a: ["stehe auf"], why: "stehe (pos. 2) … auf (final)." },
        { t: "type", q: "Wir ___ am Samstag ___. (einkaufen)", a: ["kaufen ein"], why: "kaufen … ein." },
        { t: "type", q: "Er ___ seine Mutter ___. (anrufen)", a: ["ruft an"], why: "ruft … an." },
        { t: "type", q: "Der Zug ___ um 14 Uhr ___. (ankommen)", a: ["kommt an"], why: "kommt … an." },
        { t: "type", q: "Am Abend ___ ich ___. (fernsehen)", a: ["sehe fern"], why: "sehe … fern." },
        { t: "type", q: "___ du heute ___? (mitkommen)", a: ["kommst mit"], why: "Pregunta: Kommst du heute mit?" },
        { t: "type", q: "Ich ___ dich am Bahnhof ___. (abholen)", a: ["hole ab"], why: "hole … ab." },
        { t: "mc", q: "¿Cuál es correcta?", o: ["Ich räume mein Zimmer auf.", "Ich aufräume mein Zimmer.", "Ich räume auf mein Zimmer."], a: 0, why: "El prefijo «auf» va al final." }
      ]
    },
    {
      id: "modal", level: "A1", title: "Verbos modales", de: "Modalverben",
      rule: "können, müssen, wollen, dürfen, sollen, möchten: el modal va en posición 2 y el otro verbo, en infinitivo, al FINAL. Con ich/er/sie el modal no lleva -t: ich kann, er kann.",
      trap: "«Ich kann sprechen Deutsch» ✗ → «Ich kann Deutsch sprechen» ✓. Y ojo: «müssen nicht» = no hace falta (no es «prohibido»).",
      ex: ["Ich kann heute nicht kommen.", "Wir müssen morgen früh aufstehen.", "Hier darf man nicht rauchen."],
      items: [
        { t: "type", q: "Ich ___ heute nicht kommen. (können)", a: ["kann"], why: "ich kann (sin -e, sin -t)." },
        { t: "type", q: "___ du mir helfen? (können)", a: ["Kannst", "kannst"], why: "du kannst." },
        { t: "type", q: "Wir ___ morgen arbeiten. (müssen)", a: ["müssen"], why: "wir müssen." },
        { t: "type", q: "Hier ___ man nicht rauchen. (dürfen)", a: ["darf"], why: "man darf (como er/sie)." },
        { t: "type", q: "Er ___ Arzt werden. (wollen)", a: ["will"], why: "er will (cambio de vocal)." },
        { t: "type", q: "Ich ___ einen Kaffee, bitte. (möchten)", a: ["möchte"], why: "ich möchte." },
        { t: "type", q: "Was ___ ich mitbringen? (sollen)", a: ["soll"], why: "ich soll." },
        { t: "type", q: "Ihr ___ leise sein. (müssen)", a: ["müsst"], why: "ihr müsst." },
        { t: "order", w: ["Ich", "kann", "heute", "nicht", "kommen"], es: "Hoy no puedo venir." },
        { t: "order", w: ["Wir", "müssen", "um 6 Uhr", "aufstehen"], es: "Tenemos que levantarnos a las 6." }
      ]
    },
    {
      id: "perfekt", level: "A1", title: "Perfekt: haben o sein", de: "Perfekt",
      rule: "Pasado hablado = haben/sein (posición 2) + participio (al final). Usa SEIN con movimiento de un lugar a otro (gehen, fahren, fliegen, kommen) y con cambio de estado (aufstehen, einschlafen) + sein, bleiben, passieren. Todo lo demás: HABEN.",
      trap: "El participio va al final, no junto al auxiliar: «Ich habe gegessen Pizza» ✗ → «Ich habe Pizza gegessen» ✓. Verbos en -ieren y con be-/ver- no llevan ge-: studiert, besucht, verstanden.",
      ex: ["Ich bin nach Köln gefahren.", "Wir haben Glühwein getrunken.", "Er hat mich angerufen."],
      items: [
        { t: "type", q: "Gestern ___ ich ins Kino ___. (gehen)", a: ["bin gegangen"], why: "gehen = movimiento → sein: bin … gegangen." },
        { t: "type", q: "Wir ___ Pizza ___. (essen)", a: ["haben gegessen"], why: "essen → haben: haben … gegessen." },
        { t: "type", q: "Ich ___ um 6 Uhr ___. (aufstehen)", a: ["bin aufgestanden"], why: "aufstehen = cambio de estado → sein; ge- va en medio: auf-ge-standen." },
        { t: "type", q: "___ du schon ___? (bezahlen)", a: ["Hast bezahlt", "hast bezahlt"], why: "bezahlen → haben; be- no lleva ge-: bezahlt." },
        { t: "type", q: "Sie ___ nach Frankfurt ___. (fliegen)", a: ["ist geflogen"], why: "fliegen → sein: ist … geflogen." },
        { t: "type", q: "Ich ___ meine Mutter ___. (anrufen)", a: ["habe angerufen"], why: "anrufen → haben: an-ge-rufen." },
        { t: "type", q: "Wir ___ zu Hause ___. (bleiben)", a: ["sind geblieben"], why: "bleiben siempre con sein." },
        { t: "type", q: "Er ___ Informatik ___. (studieren)", a: ["hat studiert"], why: "-ieren: sin ge-: studiert." },
        { t: "type", q: "Ich ___ das nicht ___. (verstehen)", a: ["habe verstanden"], why: "ver- no lleva ge-: verstanden." },
        { t: "mc", q: "Der Zug ___ pünktlich angekommen.", o: ["ist", "hat"], a: 0, why: "ankommen = llegar (movimiento) → sein." },
        { t: "mc", q: "Ich ___ lange geschlafen.", o: ["habe", "bin"], a: 0, why: "schlafen no es movimiento → haben." },
        { t: "mc", q: "Was ___ passiert?", o: ["ist", "hat"], a: 0, why: "passieren va con sein." }
      ]
    },
    {
      id: "akk", level: "A1", title: "Acusativo", de: "Akkusativ",
      rule: "El objeto directo (lo que tienes, compras, ves, necesitas…) va en acusativo. Solo cambia el masculino: der → den, ein → einen, kein → keinen, mein → meinen. Femenino, neutro y plural quedan igual.",
      trap: "Verbos con acusativo muy frecuentes: haben, brauchen, kaufen, sehen, nehmen, möchten, es gibt. «Es gibt einen Weihnachtsmarkt».",
      ex: ["Ich habe einen Bruder.", "Ich brauche einen Termin.", "Siehst du den Bus?"],
      items: [
        { t: "mc", q: "Ich habe ___ Bruder.", o: ["einen", "ein", "einem"], a: 0, why: "der Bruder → einen (acusativo masculino)." },
        { t: "mc", q: "Ich brauche ___ Termin.", o: ["einen", "ein", "eine"], a: 0, why: "der Termin → einen." },
        { t: "mc", q: "Siehst du ___ Bus?", o: ["den", "der", "dem"], a: 0, why: "der Bus → den." },
        { t: "mc", q: "Ich kaufe ___ Jacke.", o: ["eine", "einen", "einer"], a: 0, why: "die Jacke: femenino no cambia → eine." },
        { t: "mc", q: "Wir haben ___ Auto.", o: ["kein", "keinen", "keine"], a: 0, why: "das Auto: neutro no cambia → kein." },
        { t: "mc", q: "Ich nehme ___ Kaffee.", o: ["den", "der", "das"], a: 0, why: "der Kaffee → den." },
        { t: "mc", q: "Es gibt ___ Weihnachtsmarkt in der Stadt.", o: ["einen", "ein", "eine"], a: 0, why: "es gibt + acusativo: der Markt → einen." },
        { t: "mc", q: "Ich besuche ___ Eltern.", o: ["meine", "meinen", "meinem"], a: 0, why: "Plural no cambia en acusativo → meine." }
      ]
    },
    {
      id: "dat", level: "A1", title: "Dativo con preposiciones", de: "Dativ: mit, bei, zu, von, aus, nach, seit",
      rule: "Después de aus, bei, mit, nach, seit, von, zu va SIEMPRE dativo: der → dem, die → der, das → dem, plural → den (+n). Contracciones: zu + dem = zum, zu + der = zur, bei + dem = beim, von + dem = vom.",
      trap: "Truco: «aus-bei-mit-nach-seit-von-zu» se canta como una canción. Y países femeninos llevan artículo: aus der Dominikanischen Republik.",
      ex: ["Ich fahre mit dem Bus.", "Ich gehe zum Arzt.", "Ich wohne bei meiner Familie."],
      items: [
        { t: "mc", q: "Ich fahre mit ___ Bus.", o: ["dem", "den", "der"], a: 0, why: "mit + Dativ; der Bus → dem." },
        { t: "mc", q: "Ich gehe ___ Arzt.", o: ["zum", "zur", "zu"], a: 0, why: "zu + dem Arzt = zum." },
        { t: "mc", q: "Sie geht ___ Arbeit.", o: ["zur", "zum", "zu die"], a: 0, why: "zu + der Arbeit = zur." },
        { t: "mc", q: "Ich wohne bei ___ Eltern.", o: ["meinen", "meine", "meiner"], a: 0, why: "bei + Dativ plural: meinen." },
        { t: "mc", q: "Das Geschenk ist von ___ Mutter.", o: ["meiner", "meine", "meinem"], a: 0, why: "von + Dativ femenino: meiner." },
        { t: "mc", q: "Ich komme aus ___ Dominikanischen Republik.", o: ["der", "die", "dem"], a: 0, why: "aus + Dativ; die Republik → der." },
        { t: "mc", q: "Ich lerne seit ___ Jahr Deutsch.", o: ["einem", "ein", "einen"], a: 0, why: "seit + Dativ; das Jahr → einem." },
        { t: "mc", q: "Nach ___ Essen gehen wir spazieren.", o: ["dem", "das", "den"], a: 0, why: "nach + Dativ; das Essen → dem." },
        { t: "mc", q: "Ich kaufe Brötchen ___ Bäcker.", o: ["beim", "bei der", "zum"], a: 0, why: "bei + dem Bäcker = beim (en la panadería)." }
      ]
    },
    {
      id: "poss", level: "A1", title: "Posesivos", de: "Possessivartikel",
      rule: "mein (mi), dein (tu), sein (su, de él), ihr (su, de ella), unser, euer, Ihr (de usted). Se declinan como «ein»: mein Vater, meine Mutter, mein Kind, meine Eltern; acusativo masculino: meinen.",
      trap: "«su» en español es ambiguo; en alemán no: sein Bruder (el hermano de él) vs. ihr Bruder (el hermano de ella).",
      ex: ["Das ist mein Vater.", "Ich rufe meinen Bruder an.", "Maria und ihr Bruder."],
      items: [
        { t: "mc", q: "Das ist ___ Vater. (mi)", o: ["mein", "meine", "meinen"], a: 0, why: "der Vater, nominativo → mein." },
        { t: "mc", q: "Das ist ___ Mutter. (mi)", o: ["meine", "mein", "meiner"], a: 0, why: "die Mutter → meine." },
        { t: "mc", q: "Ich rufe ___ Bruder an. (mi)", o: ["meinen", "mein", "meinem"], a: 0, why: "anrufen + acusativo; der Bruder → meinen." },
        { t: "mc", q: "Wie heißt ___ Freundin? (tu)", o: ["deine", "dein", "deinen"], a: 0, why: "die Freundin → deine." },
        { t: "mc", q: "Maria und ___ Bruder. (su, de ella)", o: ["ihr", "sein", "seine"], a: 0, why: "De ella → ihr; der Bruder → ihr." },
        { t: "mc", q: "Peter und ___ Schwester. (su, de él)", o: ["seine", "ihre", "sein"], a: 0, why: "De él → sein-; die Schwester → seine." },
        { t: "mc", q: "Wie ist ___ Name? (de usted)", o: ["Ihr", "dein", "ihr"], a: 0, why: "Usted → Ihr (con mayúscula)." },
        { t: "mc", q: "Das sind ___ Kinder. (nuestros)", o: ["unsere", "unser", "unseren"], a: 0, why: "Plural → unsere." }
      ]
    },
    {
      id: "imperativ", level: "A1", title: "Imperativo", de: "Imperativ",
      rule: "du: raíz sin -st y sin «du» (komm!, mach!, iss!, nimm!). ihr: como el presente sin «ihr» (kommt!). Sie: verbo + Sie (kommen Sie!). Con «bitte» suena amable.",
      trap: "Los verbos e→i lo mantienen: essen → iss!, nehmen → nimm!, sprechen → sprich! Pero a→ä NO: fahren → fahr!",
      ex: ["Komm bitte!", "Öffnen Sie bitte das Fenster.", "Ruf mich an!"],
      items: [
        { t: "type", q: "(du) kommen → ___ bitte!", a: ["Komm", "komm"], why: "du kommst → Komm!" },
        { t: "type", q: "(Sie) warten → ___ ___ bitte!", a: ["Warten Sie", "warten Sie"], why: "Sie-Form: Warten Sie!" },
        { t: "type", q: "(du) essen → ___ doch etwas!", a: ["Iss", "iss"], why: "du isst → Iss!" },
        { t: "type", q: "(du) nehmen → ___ eine Jacke mit!", a: ["Nimm", "nimm"], why: "du nimmst → Nimm!" },
        { t: "type", q: "(ihr) kommen → ___ rein!", a: ["Kommt", "kommt"], why: "ihr kommt → Kommt!" },
        { t: "type", q: "(du) sein → ___ leise!", a: ["Sei", "sei"], why: "sein es irregular: Sei!" },
        { t: "type", q: "(du) fahren → ___ langsam!", a: ["Fahr", "fahr", "Fahre", "fahre"], why: "a→ä no pasa al imperativo: Fahr!" },
        { t: "mc", q: "Pedir amablemente a un desconocido que abra la ventana:", o: ["Öffnen Sie bitte das Fenster.", "Öffne das Fenster!", "Sie öffnen das Fenster."], a: 0, why: "Con desconocidos: forma Sie + bitte." }
      ]
    },
    {
      id: "praet", level: "A1", title: "war y hatte", de: "Präteritum: sein und haben",
      rule: "Para sein y haben (y los modales) en pasado hablado se usa casi siempre el Präteritum: ich war, du warst, er war, wir waren · ich hatte, du hattest, er hatte, wir hatten.",
      trap: "«Ich bin gewesen» es correcto pero suena pesado. En la vida real: «Ich war in Berlin».",
      ex: ["Gestern war ich krank.", "Wir hatten keine Zeit.", "Wie war der Urlaub?"],
      items: [
        { t: "type", q: "Gestern ___ ich krank. (sein)", a: ["war"], why: "ich war." },
        { t: "type", q: "Wir ___ keine Zeit. (haben)", a: ["hatten"], why: "wir hatten." },
        { t: "type", q: "___ du schon in Berlin? (sein)", a: ["Warst", "warst"], why: "du warst." },
        { t: "type", q: "Er ___ Hunger. (haben)", a: ["hatte"], why: "er hatte." },
        { t: "type", q: "Wie ___ der Urlaub? (sein)", a: ["war"], why: "der Urlaub (er) → war." },
        { t: "type", q: "Ihr ___ Glück! (haben)", a: ["hattet"], why: "ihr hattet." },
        { t: "type", q: "Wo ___ ihr am Wochenende? (sein)", a: ["wart"], why: "ihr wart." }
      ]
    },
    {
      id: "dativverben", level: "A1", title: "Dativo de persona: mir, dir…", de: "Dativ-Verben & mir ist kalt",
      rule: "Con gefallen, schmecken, helfen, gehören, danken y en «Wie geht es dir?» o «Mir ist kalt», la persona va en dativo: mir, dir, ihm, ihr, uns, euch, ihnen, Ihnen.",
      trap: "Funciona como «me gusta» en español: «Die Stadt gefällt mir» = la ciudad me gusta. Y «Mir ist kalt» (a mí me está frío), nunca «Ich bin kalt» (= soy una persona fría).",
      ex: ["Das schmeckt mir.", "Kannst du mir helfen?", "Wie geht es Ihnen?"],
      items: [
        { t: "mc", q: "Das Essen schmeckt ___. (yo)", o: ["mir", "mich", "ich"], a: 0, why: "schmecken + Dativ → mir." },
        { t: "mc", q: "Kannst du ___ helfen? (yo)", o: ["mir", "mich", "mein"], a: 0, why: "helfen + Dativ → mir." },
        { t: "mc", q: "Wie geht es ___? (tú)", o: ["dir", "dich", "du"], a: 0, why: "Wie geht es dir?" },
        { t: "mc", q: "Gefällt ___ die Stadt? (usted)", o: ["Ihnen", "Sie", "Ihr"], a: 0, why: "gefallen + Dativ; usted → Ihnen." },
        { t: "mc", q: "Das Handy gehört ___. (él)", o: ["ihm", "ihn", "er"], a: 0, why: "gehören + Dativ; er → ihm." },
        { t: "mc", q: "___ ist kalt. (yo)", o: ["Mir", "Ich", "Mich"], a: 0, why: "Mir ist kalt = tengo frío." },
        { t: "mc", q: "Wir danken ___ für die Einladung. (ustedes / usted)", o: ["Ihnen", "Sie", "euch"], a: 0, why: "danken + Dativ → Ihnen." }
      ]
    },
    {
      id: "neben", level: "A2", title: "weil, dass, wenn (verbo al final)", de: "Nebensätze",
      rule: "Tras weil (porque), dass (que), wenn (cuando/si) y ob (si) el verbo conjugado se va al FINAL. Si la frase empieza con la subordinada, la principal arranca con el verbo: «Wenn ich Zeit habe, komme ich».",
      trap: "«…, weil ich bin krank» ✗ → «…, weil ich krank bin» ✓. Y «denn» es la excepción: «denn ich bin krank» (verbo en posición 2).",
      ex: ["Ich lerne Deutsch, weil ich nach Deutschland fahre.", "Ich glaube, dass der Zug Verspätung hat.", "Wenn ich Zeit habe, komme ich."],
      items: [
        { t: "type", q: "Ich bleibe zu Hause, weil ich krank ___. (sein)", a: ["bin"], why: "weil → verbo al final: …krank bin." },
        { t: "type", q: "Ich glaube, dass der Zug Verspätung ___. (haben)", a: ["hat"], why: "dass → verbo al final." },
        { t: "type", q: "Wenn ich Zeit ___, komme ich. (haben)", a: ["habe"], why: "wenn → verbo al final; después «komme ich»." },
        { t: "type", q: "Weißt du, dass sie morgen ___? (kommen)", a: ["kommt"], why: "dass → verbo al final." },
        { t: "order", w: ["Ich lerne Deutsch,", "weil", "ich", "nach Deutschland", "fahre"], es: "Aprendo alemán porque voy a Alemania." },
        { t: "order", w: ["Ich hoffe,", "dass", "es", "Schnee", "gibt"], es: "Espero que haya nieve." },
        { t: "mc", q: "Elige la correcta:", o: ["Ich bin müde, weil ich wenig geschlafen habe.", "Ich bin müde, weil ich habe wenig geschlafen.", "Ich bin müde, weil habe ich wenig geschlafen."], a: 0, why: "Con Perfekt: el auxiliar va al final del todo." }
      ]
    },
    {
      id: "wechsel", level: "A2", title: "¿Dónde o adónde? (in, auf, an…)", de: "Wechselpräpositionen",
      rule: "in, an, auf, über, unter, vor, hinter, neben, zwischen: con «¿Wo?» (dónde, sin movimiento) → Dativ; con «¿Wohin?» (adónde, movimiento hacia) → Akkusativ. in + dem = im, in + das = ins.",
      trap: "«Ich gehe in die Küche» (voy a la cocina, Akk.) pero «Ich bin in der Küche» (estoy en la cocina, Dat.).",
      ex: ["Ich gehe ins Kino.", "Ich bin im Kino.", "Ich lege das Buch auf den Tisch."],
      items: [
        { t: "mc", q: "Ich gehe in ___ Küche. (Wohin?)", o: ["die", "der", "dem"], a: 0, why: "Movimiento → Akkusativ: die Küche." },
        { t: "mc", q: "Ich bin in ___ Küche. (Wo?)", o: ["der", "die", "den"], a: 0, why: "Sin movimiento → Dativ: der Küche." },
        { t: "mc", q: "Ich lege das Buch auf ___ Tisch.", o: ["den", "dem", "der"], a: 0, why: "legen = movimiento → Akk.: den Tisch." },
        { t: "mc", q: "Das Buch liegt auf ___ Tisch.", o: ["dem", "den", "das"], a: 0, why: "liegen = posición → Dat.: dem Tisch." },
        { t: "mc", q: "Wir gehen heute ___ Kino.", o: ["ins", "im", "in"], a: 0, why: "in + das (Akk.) = ins." },
        { t: "mc", q: "Wir waren gestern ___ Kino.", o: ["im", "ins", "in die"], a: 0, why: "in + dem (Dat.) = im." },
        { t: "mc", q: "Häng das Bild an ___ Wand!", o: ["die", "der", "den"], a: 0, why: "hängen (poner) → Akk.: die Wand." }
      ]
    },
    {
      id: "komparativ", level: "A2", title: "Comparar: größer als…", de: "Komparativ",
      rule: "Adjetivo + -er + als: schnell → schneller als. Muchos de una sílaba llevan umlaut: groß → größer, alt → älter, kalt → kälter. Irregulares: gut → besser, gern → lieber, viel → mehr.",
      trap: "No se dice «mehr groß» (más grande): ✗ → «größer» ✓. Y «als», no «wie», para comparar diferencia.",
      ex: ["Berlin ist größer als Essen.", "Ich trinke lieber Tee als Kaffee.", "Im Januar ist es kälter."],
      items: [
        { t: "type", q: "Berlin ist ___ als Essen. (groß)", a: ["größer", "groesser"], why: "groß → größer." },
        { t: "type", q: "Ich trinke ___ Tee als Kaffee. (gern)", a: ["lieber"], why: "gern → lieber." },
        { t: "type", q: "Dein Deutsch ist schon viel ___! (gut)", a: ["besser"], why: "gut → besser." },
        { t: "type", q: "Im Januar ist es ___ als im Mai. (kalt)", a: ["kälter", "kaelter"], why: "kalt → kälter." },
        { t: "type", q: "Der Zug ist ___ als der Bus. (schnell)", a: ["schneller"], why: "schnell → schneller." },
        { t: "mc", q: "Mein Bruder ist zwei Jahre ___ ich.", o: ["älter als", "mehr alt als", "älter wie"], a: 0, why: "alt → älter + als." }
      ]
    }
  ],

  /* Diálogos para escuchar, imitar (shadowing) y dictado. s: hablante, g: género de voz. */
  dialogs: [
    {
      id: "baeckerei", title: "En la panadería", de: "In der Bäckerei", level: "A1",
      who: { V: ["Verkäuferin", "f"], K: ["Kunde", "m"] },
      lines: [
        ["V", "Guten Morgen! Was darf es sein?", "¡Buenos días! ¿Qué le pongo?"],
        ["K", "Guten Morgen. Ich hätte gern vier Brötchen und eine Brezel, bitte.", "Buenos días. Quisiera cuatro panecillos y un pretzel, por favor."],
        ["V", "Gern. Sonst noch etwas?", "Con gusto. ¿Algo más?"],
        ["K", "Ja, ein Stück Apfelkuchen. Haben Sie auch Kaffee zum Mitnehmen?", "Sí, un trozo de pastel de manzana. ¿Tiene también café para llevar?"],
        ["V", "Natürlich. Mit Milch und Zucker?", "Claro. ¿Con leche y azúcar?"],
        ["K", "Nur mit Milch, bitte.", "Solo con leche, por favor."],
        ["V", "Das macht zusammen sieben Euro achtzig.", "Son siete euros con ochenta en total."],
        ["K", "Kann ich mit Karte zahlen?", "¿Puedo pagar con tarjeta?"],
        ["V", "Ja, kein Problem. Halten Sie die Karte einfach hier dran.", "Sí, sin problema. Acerque la tarjeta aquí."],
        ["K", "Danke. Schönen Tag noch!", "Gracias. ¡Que tenga buen día!"],
        ["V", "Danke, Ihnen auch. Tschüss!", "Gracias, igualmente. ¡Adiós!"]
      ],
      q: [
        ["Wie viele Brötchen kauft der Kunde?", ["vier", "zwei", "acht"], 0],
        ["Wie trinkt er den Kaffee?", ["nur mit Milch", "mit Zucker", "schwarz"], 0],
        ["Wie viel kostet alles?", ["7,80 €", "8,70 €", "7,18 €"], 0]
      ]
    },
    {
      id: "bahnhof", title: "En la estación", de: "Am Bahnhof", level: "A1",
      who: { M: ["Mitarbeiterin", "f"], R: ["Reisender", "m"] },
      lines: [
        ["R", "Entschuldigung, wann fährt der nächste Zug nach Düsseldorf?", "Disculpe, ¿cuándo sale el próximo tren a Düsseldorf?"],
        ["M", "Um vierzehn Uhr zwölf, von Gleis fünf.", "A las 14:12, del andén cinco."],
        ["R", "Muss ich umsteigen?", "¿Tengo que hacer transbordo?"],
        ["M", "Nein, der Zug fährt direkt. Aber er hat heute zehn Minuten Verspätung.", "No, el tren es directo. Pero hoy tiene diez minutos de retraso."],
        ["R", "Ach so. Und wo kann ich eine Fahrkarte kaufen?", "Ah, vale. ¿Y dónde puedo comprar un billete?"],
        ["M", "Am Automaten dort drüben oder in der App.", "En la máquina de allí o en la app."],
        ["R", "Gibt es auch ein Ticket für den ganzen Monat?", "¿Hay también un billete para todo el mes?"],
        ["M", "Ja, das Deutschlandticket. Damit fahren Sie mit Bus und Regionalzug in ganz Deutschland.", "Sí, el Deutschlandticket. Con él viaja en bus y tren regional por toda Alemania."],
        ["R", "Super, vielen Dank für die Hilfe!", "¡Genial, muchas gracias por la ayuda!"],
        ["M", "Gern geschehen. Gute Reise!", "De nada. ¡Buen viaje!"]
      ],
      q: [
        ["Von welchem Gleis fährt der Zug?", ["Gleis 5", "Gleis 14", "Gleis 12"], 0],
        ["Wie viel Verspätung hat der Zug?", ["zehn Minuten", "fünf Minuten", "keine"], 0],
        ["Muss er umsteigen?", ["Nein, der Zug fährt direkt.", "Ja, einmal.", "Ja, zweimal."], 0]
      ]
    },
    {
      id: "familie", title: "Conocer a la familia", de: "Die Familie kennenlernen", level: "A1",
      who: { T: ["Thomas (Vater)", "m"], S: ["Sabine (Mutter)", "f"], C: ["Carlos (Gast)", "m"] },
      lines: [
        ["T", "Herzlich willkommen! Kommen Sie doch rein.", "¡Bienvenido! Pase, pase."],
        ["C", "Guten Abend! Vielen Dank für die Einladung. Freut mich sehr, Sie kennenzulernen.", "¡Buenas noches! Muchas gracias por la invitación. Encantado de conocerles."],
        ["S", "Die Freude ist ganz auf unserer Seite. Wie war die Reise?", "El placer es nuestro. ¿Qué tal el viaje?"],
        ["C", "Lang, aber gut. Der Flug hat elf Stunden gedauert.", "Largo, pero bien. El vuelo duró once horas."],
        ["T", "Möchten Sie etwas trinken? Wasser, Saft oder ein Bier?", "¿Quiere algo de beber? ¿Agua, jugo o una cerveza?"],
        ["C", "Ein Wasser, bitte. Und das ist für Sie: ein kleines Geschenk.", "Un agua, por favor. Y esto es para ustedes: un pequeño regalo."],
        ["S", "Oh, wie nett! Kaffee aus der Dominikanischen Republik! Vielen Dank.", "¡Oh, qué amable! ¡Café de la República Dominicana! Muchas gracias."],
        ["T", "Übrigens, wir können uns gern duzen. Ich bin Thomas.", "Por cierto, podemos tutearnos. Yo soy Thomas."],
        ["C", "Sehr gern! Ich bin Carlos.", "¡Con mucho gusto! Yo soy Carlos."],
        ["S", "Setz dich, Carlos. Das Essen ist gleich fertig.", "Siéntate, Carlos. La comida está casi lista."],
        ["C", "Das riecht super! Kann ich helfen?", "¡Huele genial! ¿Puedo ayudar?"]
      ],
      q: [
        ["Was trinkt Carlos?", ["Wasser", "Bier", "Saft"], 0],
        ["Was ist das Geschenk?", ["Kaffee", "Wein", "Schokolade"], 0],
        ["Wie lange hat der Flug gedauert?", ["elf Stunden", "neun Stunden", "dreizehn Stunden"], 0]
      ],
      tip: "Se trata de «Sie» hasta que el otro ofrece el «du» (normalmente la persona mayor). Un regalo pequeño al llegar, puntualidad y quitarse los zapatos si ves pantuflas en la entrada."
    },
    {
      id: "weihnachtsmarkt", title: "En el mercado navideño", de: "Auf dem Weihnachtsmarkt", level: "A1",
      who: { A: ["Anna", "f"], B: ["Ben", "m"], V: ["Verkäufer", "m"] },
      lines: [
        ["A", "Guck mal, der Weihnachtsmarkt! Wollen wir einen Glühwein trinken?", "¡Mira, el mercado navideño! ¿Tomamos un Glühwein?"],
        ["B", "Gute Idee. Mir ist so kalt!", "Buena idea. ¡Tengo tanto frío!"],
        ["A", "Zwei Glühwein, bitte.", "Dos Glühwein, por favor."],
        ["V", "Mit oder ohne Schuss?", "¿Con o sin chorrito (de licor)?"],
        ["A", "Ohne, bitte. Was kostet das?", "Sin, por favor. ¿Cuánto es?"],
        ["V", "Das macht neun Euro, plus vier Euro Pfand für die Tassen.", "Son nueve euros, más cuatro de depósito por las tazas."],
        ["B", "Pfand? Was ist das?", "¿Pfand? ¿Qué es eso?"],
        ["A", "Wenn wir die Tassen zurückbringen, bekommen wir das Geld zurück. Oder du behältst die Tasse als Souvenir.", "Si devolvemos las tazas, nos devuelven el dinero. O te quedas la taza de recuerdo."],
        ["B", "Cool! Und danach eine Bratwurst?", "¡Genial! ¿Y después una salchicha?"],
        ["A", "Klar! Und gebrannte Mandeln!", "¡Claro! ¡Y almendras garrapiñadas!"]
      ],
      q: [
        ["Warum möchte Ben Glühwein?", ["Ihm ist kalt.", "Er hat Geburtstag.", "Er hat Hunger."], 0],
        ["Wie viel Pfand bezahlen sie?", ["vier Euro", "neun Euro", "zwei Euro"], 0],
        ["Was passiert, wenn man die Tasse zurückbringt?", ["Man bekommt das Geld zurück.", "Man bekommt einen Glühwein gratis.", "Nichts."], 0]
      ]
    },
    {
      id: "arzt", title: "Pedir cita con el médico", de: "Ein Arzttermin am Telefon", level: "A1",
      who: { H: ["Arzthelferin", "f"], P: ["Patient", "m"] },
      lines: [
        ["H", "Praxis Doktor Weber, guten Tag.", "Consulta del doctor Weber, buenos días."],
        ["P", "Guten Tag, ich möchte einen Termin machen. Ich bin krank.", "Buenos días, quisiera pedir una cita. Estoy enfermo."],
        ["H", "Was haben Sie denn?", "¿Qué le pasa?"],
        ["P", "Ich habe Halsschmerzen und Fieber, seit gestern.", "Me duele la garganta y tengo fiebre desde ayer."],
        ["H", "Können Sie heute um elf Uhr kommen?", "¿Puede venir hoy a las once?"],
        ["P", "Ja, das passt.", "Sí, me viene bien."],
        ["H", "Wie ist Ihr Name, bitte?", "¿Cómo se llama, por favor?"],
        ["P", "Pérez. Ich buchstabiere: P, E, R, E, Z.", "Pérez. Lo deletreo: P, E, R, E, Z."],
        ["H", "Danke. Bringen Sie bitte Ihre Versicherungskarte mit.", "Gracias. Traiga por favor su tarjeta del seguro."],
        ["P", "Mache ich. Bis später!", "Lo haré. ¡Hasta luego!"]
      ],
      q: [
        ["Seit wann ist der Patient krank?", ["seit gestern", "seit einer Woche", "seit heute Morgen"], 0],
        ["Um wie viel Uhr ist der Termin?", ["um 11 Uhr", "um 10 Uhr", "um 12 Uhr"], 0],
        ["Was soll er mitbringen?", ["die Versicherungskarte", "den Pass", "ein Rezept"], 0]
      ]
    },
    {
      id: "weg", title: "Preguntar el camino", de: "Wie komme ich zum Rathaus?", level: "A1",
      who: { T: ["Tourist", "m"], P: ["Passantin", "f"] },
      lines: [
        ["T", "Entschuldigung, wie komme ich zum Rathaus?", "Disculpe, ¿cómo llego al ayuntamiento?"],
        ["P", "Gehen Sie hier geradeaus bis zur Ampel.", "Siga recto hasta el semáforo."],
        ["P", "An der Ampel gehen Sie links.", "En el semáforo gire a la izquierda."],
        ["P", "Dann nehmen Sie die zweite Straße rechts.", "Luego tome la segunda calle a la derecha."],
        ["P", "Das Rathaus ist dann auf der linken Seite, neben der Kirche.", "El ayuntamiento queda a la izquierda, al lado de la iglesia."],
        ["T", "Ist das weit?", "¿Está lejos?"],
        ["P", "Nein, zu Fuß ungefähr fünf Minuten.", "No, a pie unos cinco minutos."],
        ["T", "Vielen Dank!", "¡Muchas gracias!"],
        ["P", "Bitte schön!", "¡De nada!"]
      ],
      q: [
        ["Wo geht der Tourist links?", ["an der Ampel", "an der Kirche", "am Bahnhof"], 0],
        ["Wo ist das Rathaus?", ["neben der Kirche", "neben dem Bahnhof", "hinter der Bank"], 0],
        ["Wie lange dauert es zu Fuß?", ["fünf Minuten", "fünfzehn Minuten", "fünfzig Minuten"], 0]
      ]
    },
    {
      id: "wochenende", title: "¿Qué hiciste el fin de semana?", de: "Was hast du am Wochenende gemacht?", level: "A1",
      who: { L: ["Lena", "f"], M: ["Marco", "m"] },
      lines: [
        ["L", "Na, wie war dein Wochenende?", "¿Y bien, qué tal tu fin de semana?"],
        ["M", "Super! Am Samstag bin ich mit Freunden nach Köln gefahren.", "¡Genial! El sábado fui a Colonia con amigos."],
        ["L", "Toll! Was habt ihr da gemacht?", "¡Qué bien! ¿Qué hicieron allí?"],
        ["M", "Wir haben den Dom besichtigt und auf dem Weihnachtsmarkt Glühwein getrunken.", "Visitamos la catedral y tomamos Glühwein en el mercado navideño."],
        ["L", "Und am Sonntag?", "¿Y el domingo?"],
        ["M", "Da habe ich lange geschlafen. Am Nachmittag habe ich meine Mutter angerufen.", "Dormí hasta tarde. Por la tarde llamé a mi madre."],
        ["L", "Klingt entspannt.", "Suena relajado."],
        ["M", "Und du? Was hast du gemacht?", "¿Y tú? ¿Qué hiciste?"],
        ["L", "Ich habe die ganze Wohnung aufgeräumt und dann einen Film gesehen.", "Ordené todo el apartamento y luego vi una película."],
        ["M", "Haha, auch gut!", "¡Jaja, también está bien!"]
      ],
      q: [
        ["Wohin ist Marco gefahren?", ["nach Köln", "nach Berlin", "nach Essen"], 0],
        ["Was hat Marco am Sonntag gemacht?", ["Er hat lange geschlafen.", "Er hat gearbeitet.", "Er hat Fußball gespielt."], 0],
        ["Was hat Lena gemacht?", ["Sie hat aufgeräumt.", "Sie ist nach Köln gefahren.", "Sie hat gekocht."], 0]
      ]
    },
    {
      id: "silvester", title: "Nochevieja", de: "Silvester", level: "A1",
      who: { J: ["Jonas", "m"], E: ["Elena", "f"] },
      lines: [
        ["E", "Was machst du an Silvester?", "¿Qué haces en Nochevieja?"],
        ["J", "Wir feiern bei meinen Eltern. Kommst du mit?", "Lo celebramos en casa de mis padres. ¿Vienes?"],
        ["E", "Gern! Was macht ihr da?", "¡Con gusto! ¿Qué hacen allí?"],
        ["J", "Wir essen Raclette. Um Mitternacht trinken wir Sekt und schauen das Feuerwerk an.", "Comemos raclette. A medianoche tomamos espumante y vemos los fuegos artificiales."],
        ["E", "Und dann sagt man «Frohes neues Jahr», oder?", "Y luego se dice «Feliz año nuevo», ¿no?"],
        ["J", "Genau. Und vorher sagt man «Guten Rutsch».", "Exacto. Y antes se dice «Guten Rutsch»."],
        ["E", "Rutsch? Wie auf dem Eis?", "¿Rutsch? ¿Como resbalar en el hielo?"],
        ["J", "Haha, nein! Das heißt einfach: Komm gut ins neue Jahr.", "¡Jaja, no! Significa simplemente: que entres bien al año nuevo."],
        ["J", "Ach ja, und am Abend schauen viele Leute «Dinner for One» im Fernsehen.", "Ah, y por la noche mucha gente ve «Dinner for One» en la tele."],
        ["E", "Was ist das denn?", "¿Y eso qué es?"],
        ["J", "Ein alter Sketch auf Englisch. Total komisch, aber Tradition!", "Un sketch antiguo en inglés. Rarísimo, ¡pero es tradición!"]
      ],
      q: [
        ["Wo feiern sie Silvester?", ["bei den Eltern", "im Restaurant", "in Berlin"], 0],
        ["Was trinken sie um Mitternacht?", ["Sekt", "Glühwein", "Bier"], 0],
        ["Was bedeutet «Guten Rutsch»?", ["Komm gut ins neue Jahr.", "Fall nicht hin.", "Guten Appetit."], 0]
      ]
    },
    {
      id: "supermarkt", title: "En el supermercado", de: "Im Supermarkt", level: "A1",
      who: { K: ["Kunde", "m"], M: ["Mitarbeiterin", "f"], C: ["Kassiererin", "f"] },
      lines: [
        ["K", "Entschuldigung, wo finde ich die Eier?", "Disculpe, ¿dónde encuentro los huevos?"],
        ["M", "Im Gang drei, neben der Milch.", "En el pasillo tres, al lado de la leche."],
        ["C", "Hallo! Brauchen Sie eine Tüte?", "¡Hola! ¿Necesita una bolsa?"],
        ["K", "Nein danke, ich habe eine Tasche dabei.", "No, gracias, traigo una bolsa."],
        ["C", "Haben Sie einen Pfandbon?", "¿Tiene un ticket de depósito?"],
        ["K", "Ja, hier. Ich habe vorhin Flaschen zurückgegeben.", "Sí, aquí. Devolví botellas hace un rato."],
        ["C", "Danke. Das macht dann zwölf Euro fünfzig.", "Gracias. Entonces son doce euros con cincuenta."],
        ["K", "Mit Karte, bitte.", "Con tarjeta, por favor."],
        ["C", "Bitte schön. Möchten Sie den Kassenbon?", "Aquí tiene. ¿Quiere el ticket?"],
        ["K", "Nein, danke. Tschüss!", "No, gracias. ¡Adiós!"]
      ],
      q: [
        ["Wo sind die Eier?", ["im Gang drei", "im Gang zwei", "an der Kasse"], 0],
        ["Braucht der Kunde eine Tüte?", ["Nein, er hat eine Tasche.", "Ja, eine.", "Ja, zwei."], 0],
        ["Was ist ein Pfandbon?", ["ein Bon für zurückgegebene Flaschen", "eine Fahrkarte", "ein Rezept"], 0]
      ]
    }
  ],

  /* Pares mínimos para entrenar el oído con muchas voces distintas (HVPT). */
  pairs: [
    { c: "ü / u", p: [["Mutter", "Mütter"], ["Bruder", "Brüder"], ["fuhr", "für"], ["Zug", "Züge"]] },
    { c: "ü / i", p: [["Kissen", "küssen"], ["Kiste", "Küste"], ["Tier", "Tür"], ["spielen", "spülen"], ["vier", "für"]] },
    { c: "ö / o / e", p: [["schon", "schön"], ["Ofen", "Öfen"], ["lesen", "lösen"], ["kennen", "können"]] },
    { c: "vocal larga / corta", p: [["Stadt", "Staat"], ["Bett", "Beet"], ["Mitte", "Miete"], ["Hölle", "Höhle"], ["satt", "Saat"], ["Schiff", "schief"], ["offen", "Ofen"]] },
    { c: "ch / sch", p: [["Kirche", "Kirsche"], ["mich", "misch"], ["Fichte", "fischte"]] },
    { c: "w / b", p: [["Wein", "Bein"], ["Wald", "bald"], ["wir", "Bier"], ["Wand", "Band"]] },
    { c: "h aspirada", p: [["Haus", "aus"], ["Hund", "und"], ["hier", "ihr"], ["Hecke", "Ecke"]] },
    { c: "ei / ie", p: [["Wein", "Wien"], ["Leid", "Lied"], ["Reise", "Riese"]] },
    { c: "z / s", p: [["Zeit", "seit"], ["Zahl", "Saal"], ["Zoo", "so"]] }
  ],

  /* Alemán coloquial. g: dónde/quién lo usa. reg: registro. */
  slang: [
    { de: "Na?", es: "¿Qué tal? / ¿Y bien? (saludo corto)", g: "überall", reg: "informal", ex: "Na, alles klar?" },
    { de: "Alles klar?", es: "¿Todo bien?", g: "überall", reg: "informal", ex: "Alles klar bei dir?" },
    { de: "Passt!", es: "¡Vale! / ¡Perfecto!", g: "überall", reg: "informal", ex: "Um acht? Passt!" },
    { de: "Genau!", es: "¡Exacto!", g: "überall", reg: "neutral", ex: "Genau, so ist es." },
    { de: "Echt?", es: "¿En serio?", g: "überall", reg: "informal", ex: "Echt? Das wusste ich nicht." },
    { de: "Krass!", es: "¡Qué fuerte! / ¡Brutal!", g: "überall", reg: "informal", ex: "Krass, so viel Schnee!" },
    { de: "Quatsch!", es: "¡Tonterías!", g: "überall", reg: "informal", ex: "Ach, Quatsch!" },
    { de: "Ich hab keinen Bock.", es: "No tengo ganas.", g: "überall", reg: "informal", ex: "Heute hab ich keinen Bock auf Sport." },
    { de: "Hast du Bock auf …?", es: "¿Te apetece…?", g: "überall", reg: "informal", ex: "Hast du Bock auf Pizza?" },
    { de: "Mach's gut!", es: "¡Cuídate! (despedida)", g: "überall", reg: "informal", ex: "Tschüss, mach's gut!" },
    { de: "Lecker!", es: "¡Rico!", g: "überall", reg: "neutral", ex: "Mmm, lecker!" },
    { de: "Toll! / Super! / Klasse!", es: "¡Genial! (sirve con todos, también con los suegros)", g: "überall", reg: "neutral", ex: "Das Essen ist toll!" },
    { de: "Geil!", es: "¡Genial! (muy coloquial; evítalo con mayores, también tiene sentido sexual)", g: "Jugend", reg: "muy informal", ex: "Das Konzert war geil!" },
    { de: "Na ja …", es: "Bueno… / Más o menos", g: "überall", reg: "neutral", ex: "Na ja, es geht." },
    { de: "Es geht.", es: "Más o menos (respuesta a «¿qué tal?»)", g: "überall", reg: "neutral", ex: "Wie geht's? — Es geht." },
    { de: "Mist!", es: "¡Rayos! / ¡Mierda! (suave)", g: "überall", reg: "informal", ex: "Mist, der Zug ist weg!" },
    { de: "Schade!", es: "¡Qué pena!", g: "überall", reg: "neutral", ex: "Du kannst nicht kommen? Schade!" },
    { de: "Doch!", es: "¡Que sí! (contra una negación)", g: "überall", reg: "neutral", ex: "Du hast keinen Hunger? — Doch!" },
    { de: "Ach so!", es: "¡Ah, ya entiendo!", g: "überall", reg: "neutral", ex: "Ach so, jetzt verstehe ich." },
    { de: "Mahlzeit!", es: "Saludo de oficina al mediodía (y «buen provecho»)", g: "überall", reg: "neutral", ex: "Mahlzeit, Kollegen!" },
    { de: "Feierabend!", es: "¡Se acabó la jornada!", g: "überall", reg: "neutral", ex: "Endlich Feierabend!" },
    { de: "Ich bin fix und fertig.", es: "Estoy molido.", g: "überall", reg: "informal", ex: "Nach dem Umzug bin ich fix und fertig." },
    { de: "Das ist nicht mein Ding.", es: "No es lo mío.", g: "überall", reg: "informal", ex: "Tanzen ist nicht mein Ding." },
    { de: "Bescheid sagen", es: "avisar", g: "überall", reg: "neutral", ex: "Sag mir Bescheid, wenn du da bist." },
    { de: "quatschen", es: "charlar", g: "überall", reg: "informal", ex: "Wir haben stundenlang gequatscht." },
    { de: "pennen", es: "dormir (coloquial)", g: "überall", reg: "informal", ex: "Ich geh jetzt pennen." },
    { de: "die Kohle", es: "la plata, el dinero (coloquial)", g: "überall", reg: "informal", ex: "Ich hab keine Kohle mehr." },
    { de: "der Kumpel", es: "el compa, el pana", g: "überall", reg: "informal", ex: "Das ist mein Kumpel Jan." },
    { de: "Alter!", es: "¡Bro! / ¡Tío! (sorpresa)", g: "Jugend", reg: "muy informal", ex: "Alter, wie cool!" },
    { de: "Digga", es: "bro, pana (sobre todo en el norte)", g: "Jugend", reg: "muy informal", ex: "Was geht, Digga?" },
    { de: "chillen", es: "relajarse", g: "Jugend", reg: "informal", ex: "Heute chillen wir nur." },
    { de: "Läuft bei dir!", es: "¡Te va de lujo!", g: "Jugend", reg: "informal", ex: "Neue Wohnung, neuer Job? Läuft bei dir!" },
    { de: "cringe", es: "que da vergüenza ajena", g: "Jugend", reg: "informal", ex: "Das Video ist so cringe." },
    { de: "Moin!", es: "¡Hola! (a cualquier hora; norte)", g: "Norden", reg: "regional", ex: "Moin, wie geht's?" },
    { de: "Servus!", es: "¡Hola! y ¡chao! (sur y Austria)", g: "Süden", reg: "regional", ex: "Servus, bis morgen!" },
    { de: "Grüß Gott!", es: "¡Buenos días! (Baviera, Austria)", g: "Süden", reg: "regional", ex: "Grüß Gott, Frau Huber." },
    { de: "Gell?", es: "¿Verdad? (sur)", g: "Süden", reg: "regional", ex: "Schön hier, gell?" },
    { de: "Tach!", es: "¡Buen día! (Ruhr y norte)", g: "Ruhrpott", reg: "regional", ex: "Tach zusammen!" },
    { de: "Hömma!", es: "¡Oye! (= Hör mal)", g: "Ruhrpott", reg: "regional", ex: "Hömma, kommste mit?" },
    { de: "Wat is dat denn?", es: "¿Qué es eso? (= Was ist das denn?)", g: "Ruhrpott", reg: "regional", ex: "Wat is dat denn für 'n Ding?" },
    { de: "Glück auf!", es: "Saludo minero tradicional del Ruhr", g: "Ruhrpott", reg: "regional", ex: "Glück auf, Kumpel!" },
    { de: "die Bude", es: "el kiosco del barrio (Ruhr); también «la casa»", g: "Ruhrpott", reg: "regional", ex: "Ich hol mir was an der Bude." },
    { de: "Pommes Schranke", es: "papas fritas con mayonesa y ketchup", g: "Ruhrpott", reg: "regional", ex: "Einmal Pommes Schranke, bitte!" },
    { de: "Tschö!", es: "¡Chao! (Ruhr, Colonia)", g: "Ruhrpott", reg: "regional", ex: "Tschö, bis morgen!" },
    { de: "Icke", es: "yo (= ich, Berlín)", g: "Berlin", reg: "regional", ex: "Icke? Nee!" },
    { de: "die Schrippe", es: "el panecillo (Berlín)", g: "Berlin", reg: "regional", ex: "Zwei Schrippen, bitte." },
    { de: "die Semmel", es: "el panecillo (sur y Austria)", g: "Süden", reg: "regional", ex: "Eine Semmel mit Butter." },
    { de: "Ne?", es: "¿No? (al final de frase; norte)", g: "Norden", reg: "regional", ex: "Kalt heute, ne?" }
  ],

  culture: [
    { t: "Puntualidad", d: "Llegar 5 minutos antes está bien; 15 tarde ya requiere avisar: «Ich verspäte mich zehn Minuten.»" },
    { t: "Sie y du", d: "Con desconocidos, en tiendas y con los padres de tu pareja: «Sie», hasta que te ofrezcan el «du». La persona mayor lo propone." },
    { t: "Brindar", d: "Al decir «Prost!» se mira a los ojos de cada persona. No mirar se considera de mala educación (y, según la broma, trae siete años de mala suerte)." },
    { t: "Pfand", d: "Botellas y latas desechables llevan 0,25 € de depósito; las reutilizables 0,08–0,15 €. Se devuelven en la máquina del súper, que da un ticket descontable en caja." },
    { t: "Domingo", d: "Las tiendas cierran el domingo (Sonntagsruhe). Abren panaderías por la mañana, gasolineras y tiendas de estaciones." },
    { t: "Reciclaje", d: "Basura separada: papel (azul), envases (amarillo), orgánico (marrón), resto (negro/gris). El vidrio, en contenedores por colores." },
    { t: "Lüften", d: "Aunque haga frío, se abren las ventanas de par en par unos minutos varias veces al día (Stoßlüften). No es un descuido." },
    { t: "Zapatos fuera", d: "En muchas casas te quitas los zapatos al entrar. Si ves pantuflas en la entrada, ya sabes." },
    { t: "Efectivo", d: "Aún hay sitios (puestos, bares pequeños) que solo aceptan efectivo: «Nur Barzahlung». Lleva algo de euros." },
    { t: "Propina", d: "Alrededor de 5–10 %. No se deja en la mesa: dices el total al pagar («Machen Sie zwanzig») o «Stimmt so»." },
    { t: "Agua del grifo", d: "Se puede beber en todas partes. En restaurantes el agua se pide y se paga; preguntan «mit oder ohne Kohlensäure?»." },
    { t: "Silencio", d: "De 22:00 a 6:00 es hora de descanso (Nachtruhe), y el domingo también. Nada de taladros ni música alta." },
    { t: "Semáforo", d: "No se cruza en rojo aunque no venga nadie, sobre todo si hay niños mirando." },
    { t: "Kaffee und Kuchen", d: "El domingo hacia las 15:00 es típico tomar café con pastel en familia. Si te invitan, no llegues con hambre de almuerzo." }
  ],

  /* Calendario de invierno 2026/27 */
  winter: [
    { d: "2026-11-29", t: "1. Advent", e: "Se enciende la primera vela de la corona de adviento." },
    { d: "2026-12-01", t: "Adventskalender", e: "Primera ventanita del calendario de adviento." },
    { d: "2026-12-06", t: "Nikolaustag", e: "Los niños dejan las botas fuera la noche anterior; amanecen con dulces." },
    { d: "2026-12-24", t: "Heiligabend", e: "Por la tarde se abren los regalos (Bescherung). Cena en familia." },
    { d: "2026-12-25", t: "1. Weihnachtstag", e: "Festivo. Comida grande en familia (a menudo ganso o pato)." },
    { d: "2026-12-26", t: "2. Weihnachtstag", e: "Festivo. Visitas a la otra parte de la familia." },
    { d: "2026-12-31", t: "Silvester", e: "Raclette o fondue, Sekt a medianoche, fuegos artificiales. «Guten Rutsch!»" },
    { d: "2027-01-01", t: "Neujahr", e: "Festivo. «Frohes neues Jahr!» Casi todo está cerrado." },
    { d: "2027-01-06", t: "Heilige Drei Könige", e: "Festivo solo en algunos estados (Baviera, Baden-Wurtemberg, Sajonia-Anhalt); en Renania del Norte-Westfalia no." }
  ],

  /* Lista del curso A1 → para marcar lo visto en clase. g = temas de gramática relacionados. */
  course: [
    { lvl: "A1.1", items: [["saludos", "Saludos y presentarse", []], ["zahlen", "Números, alfabeto, deletrear", []], ["laender", "Países y lenguas", []], ["wfragen", "Preguntas con W (wer, wo, woher…)", ["v2"]]] },
    { lvl: "A1.2", items: [["familie", "Familia y profesiones", ["poss"]], ["essen", "Comida, compras, precios", ["akk"]], ["akk", "Acusativo (einen, keinen)", ["akk"]], ["uhr", "La hora y la rutina", ["v2"]]] },
    { lvl: "A1.3", items: [["trennbar", "Verbos separables", ["trennbar"]], ["modal", "Verbos modales", ["modal"]], ["wohnen", "La casa y la ciudad", []], ["termine", "Citas y tiempo libre", []]] },
    { lvl: "A1.4", items: [["perfekt", "Perfekt (haben / sein)", ["perfekt"]], ["dativ", "Dativo y preposiciones", ["dat", "dativverben"]], ["weg", "Preguntar el camino", ["dat"]], ["gesund", "Cuerpo y salud", ["imperativ"]], ["kleidung", "Ropa y clima", []], ["praet", "war / hatte", ["praet"]], ["feste", "Fiestas y tradiciones", []]] },
    { lvl: "A2 (adelanto)", items: [["neben", "weil / dass / wenn", ["neben"]], ["wechsel", "Wo? / Wohin?", ["wechsel"]], ["komparativ", "Comparativos", ["komparativ"]]] }
  ],

  /* Simulador del Goethe-Zertifikat A1: Start Deutsch 1 */
  exam: {
    hoeren: [
      { teil: 1, n: 2, text: "Frau: Entschuldigung, wann fährt der Bus nach Steele? Mann: Der nächste fährt um halb zehn. Frau: Um halb zehn? Danke!", q: "Wann fährt der Bus?", o: ["9:30 Uhr", "10:30 Uhr", "9:00 Uhr"], a: 0 },
      { teil: 1, n: 2, text: "Mann: Was möchtest du trinken? Frau: Hm, keinen Kaffee, ich habe heute schon drei getrunken. Einen Tee, bitte.", q: "Was trinkt die Frau?", o: ["Tee", "Kaffee", "Wasser"], a: 0 },
      { teil: 2, n: 1, text: "Achtung am Gleis sieben: Der Regionalexpress nach Dortmund fährt heute von Gleis neun ab.", q: "Der Zug nach Dortmund fährt heute von Gleis 7.", o: ["Richtig", "Falsch"], a: 1 },
      { teil: 2, n: 1, text: "Liebe Kunden, heute bekommen Sie alle Weihnachtsplätzchen zum halben Preis.", q: "Die Plätzchen sind heute billiger.", o: ["Richtig", "Falsch"], a: 0 },
      { teil: 3, n: 2, text: "Hallo Carlos, hier ist Julia. Wir treffen uns nicht um sieben, sondern um acht vor dem Kino. Bis dann!", q: "Wann treffen sie sich?", o: ["um 8 Uhr", "um 7 Uhr", "um 6 Uhr"], a: 0 },
      { teil: 3, n: 2, text: "Guten Tag, hier ist die Praxis Doktor Lange. Ihr Termin am Montag fällt leider aus. Bitte rufen Sie uns zurück.", q: "Was soll der Patient machen?", o: ["zurückrufen", "am Montag kommen", "nichts"], a: 0 }
    ],
    lesen: [
      { teil: 1, text: "Hallo Ana, ich bin jetzt in Essen. Die Wohnung ist schön, aber klein. Am Samstag gehe ich mit Paul auf den Weihnachtsmarkt. Kommst du auch? Liebe Grüße, Tim", q: "Tim wohnt in einer großen Wohnung.", o: ["Richtig", "Falsch"], a: 1 },
      { teil: 1, text: "(mismo correo) … Am Samstag gehe ich mit Paul auf den Weihnachtsmarkt. Kommst du auch?", q: "Tim lädt Ana zum Weihnachtsmarkt ein.", o: ["Richtig", "Falsch"], a: 0 },
      { teil: 2, text: "Sie möchten am Sonntag Brötchen kaufen.", q: "¿Qué anuncio te sirve?", o: ["a) «Bäckerei Schmitz – Mo–Sa 6–18 Uhr, So 7–11 Uhr»", "b) «Supermarkt Neu – Mo–Sa 8–22 Uhr»"], a: 0 },
      { teil: 2, text: "Sie suchen einen Deutschkurs am Abend.", q: "¿Qué anuncio te sirve?", o: ["a) «Volkshochschule: Deutsch A2, Di + Do 18:30–20:00»", "b) «Sprachschule Plus: Intensivkurs Mo–Fr 9–13 Uhr»"], a: 0 },
      { teil: 3, text: "Schild an der Tür einer Arztpraxis: «Vom 24.12. bis 2.1. geschlossen. In dringenden Fällen: Notdienst 116 117.»", q: "Die Praxis ist am 27. Dezember geöffnet.", o: ["Richtig", "Falsch"], a: 1 },
      { teil: 3, text: "Schild im Museum: «Fotografieren ohne Blitz erlaubt.»", q: "Man darf im Museum fotografieren.", o: ["Richtig", "Falsch"], a: 0 }
    ],
    schreibenForm: {
      text: "Ihr Freund Luis Martínez (26) aus Santo Domingo möchte einen Deutschkurs an der Volkshochschule in Essen machen. Er wohnt jetzt im Blumenweg 12, 45127 Essen. Er spricht Spanisch und Englisch und möchte am Abend lernen. Er bezahlt mit Überweisung.",
      fields: [
        ["Familienname", ["martinez", "martínez"]],
        ["Alter", ["26"]],
        ["Postleitzahl, Wohnort", ["45127 essen"]],
        ["Sprachen", ["spanisch und englisch", "spanisch, englisch", "spanisch englisch"]],
        ["Kurszeit (vormittags / abends)", ["abends", "am abend"]]
      ]
    },
    schreiben: [
      { task: "Sie sind krank und können morgen nicht zum Deutschkurs kommen. Schreiben Sie Ihrer Lehrerin, Frau Klein, eine E-Mail.", p: ["Warum kommen Sie nicht?", "Fragen Sie nach den Hausaufgaben.", "Wann kommen Sie wieder?"] },
      { task: "Ihre Freundin hat Sie zum Essen am Samstag eingeladen. Schreiben Sie ihr eine Nachricht.", p: ["Bedanken Sie sich.", "Was bringen Sie mit?", "Fragen Sie nach der Uhrzeit."] },
      { task: "Sie möchten mit einem Freund auf den Weihnachtsmarkt gehen. Schreiben Sie ihm eine Nachricht.", p: ["Wann?", "Wo treffen Sie sich?", "Was möchten Sie dort machen?"] },
      { task: "Sie kommen am Freitag in Frankfurt an. Schreiben Sie Ihrer Gastfamilie.", p: ["Wann kommen Sie an?", "Wie kommen Sie nach Essen?", "Fragen Sie: Was soll ich mitbringen?"] }
    ],
    models: [
      "Liebe Frau Klein, leider kann ich morgen nicht zum Kurs kommen, denn ich bin krank. Ich habe Fieber. Welche Hausaufgaben haben wir? Am Montag komme ich wieder. Viele Grüße, Carlos",
      "Liebe Anna, vielen Dank für die Einladung! Ich komme sehr gern am Samstag. Ich bringe einen Nachtisch mit. Um wie viel Uhr soll ich kommen? Bis Samstag! Liebe Grüße, Carlos",
      "Hallo Paul, hast du am Freitag Zeit? Ich möchte mit dir auf den Weihnachtsmarkt gehen. Treffen wir uns um 18 Uhr am Bahnhof? Wir können Glühwein trinken und Bratwurst essen. Bis dann, Carlos",
      "Liebe Familie Schmidt, ich komme am Freitag um 11:50 Uhr in Frankfurt an. Dann fahre ich mit dem Zug nach Essen. Was soll ich mitbringen? Ich freue mich auf euch! Viele Grüße, Carlos"
    ],
    selbst: "Ich heiße Carlos. Ich bin 25 Jahre alt. Ich komme aus der Dominikanischen Republik und wohne in Santo Domingo. Ich spreche Spanisch, Englisch und ein bisschen Deutsch. Ich bin Ingenieur von Beruf. Meine Hobbys sind Musik und Fußball.",
    ex2: {
      "Frühstück": ["Was isst du zum Frühstück?", "Ich esse Brot mit Käse und trinke Kaffee."], "Lieblingsessen": ["Was ist dein Lieblingsessen?", "Mein Lieblingsessen ist Pizza."],
      "Getränke": ["Was trinkst du gern?", "Ich trinke gern Saft."], "Restaurant": ["Gehst du oft ins Restaurant?", "Nein, ich koche lieber zu Hause."],
      "Obst": ["Isst du gern Obst?", "Ja, ich esse gern Mango."], "Kochen": ["Kochst du gern?", "Ja, am Wochenende koche ich oft."],
      "Wochenende": ["Was machst du am Wochenende?", "Ich treffe Freunde."], "Sport": ["Machst du Sport?", "Ja, ich spiele Fußball."],
      "Kino": ["Wie oft gehst du ins Kino?", "Einmal im Monat."], "Hobby": ["Was ist dein Hobby?", "Mein Hobby ist Musik."],
      "Urlaub": ["Wo machst du gern Urlaub?", "Am Strand."], "Musik": ["Welche Musik hörst du gern?", "Ich höre gern Bachata."],
      "Wohnung": ["Wie groß ist deine Wohnung?", "Sie hat drei Zimmer."], "Zimmer": ["Wie viele Zimmer hat deine Wohnung?", "Drei Zimmer und eine Küche."],
      "Miete": ["Wie hoch ist deine Miete?", "Sie ist nicht so hoch."], "Nachbarn": ["Wie sind deine Nachbarn?", "Sie sind sehr nett."],
      "Küche": ["Ist deine Küche groß?", "Nein, sie ist klein."], "Stadt": ["Wohnst du gern in der Stadt?", "Ja, aber es ist laut."],
      "Supermarkt": ["Wann gehst du in den Supermarkt?", "Am Samstag."], "Preis": ["Was kostet ein Kaffee hier?", "Zwei Euro fünfzig."],
      "Kleidung": ["Wo kaufst du Kleidung?", "Im Einkaufszentrum."], "Sonntag": ["Kann man am Sonntag einkaufen?", "Nein, die Geschäfte sind zu."],
      "Geschenk": ["Was schenkst du deiner Mutter?", "Blumen."], "Markt": ["Kaufst du auf dem Markt ein?", "Ja, Obst und Gemüse."]
    },
    sprechen1: ["Name?", "Alter?", "Land?", "Wohnort?", "Sprachen?", "Beruf?", "Hobby?"],
    sprechen2: [
      { thema: "Essen und Trinken", karten: ["Frühstück", "Lieblingsessen", "Getränke", "Restaurant", "Obst", "Kochen"] },
      { thema: "Freizeit", karten: ["Wochenende", "Sport", "Kino", "Hobby", "Urlaub", "Musik"] },
      { thema: "Wohnen", karten: ["Wohnung", "Zimmer", "Miete", "Nachbarn", "Küche", "Stadt"] },
      { thema: "Einkaufen", karten: ["Supermarkt", "Preis", "Kleidung", "Sonntag", "Geschenk", "Markt"] }
    ],
    sprechen3: [
      { pic: "🪟", hint: "Fenster", ej: "Können Sie bitte das Fenster öffnen?" },
      { pic: "🧂", hint: "Salz", ej: "Gibst du mir bitte das Salz?" },
      { pic: "🕐", hint: "Uhrzeit", ej: "Entschuldigung, wie spät ist es?" },
      { pic: "📱", hint: "Telefon", ej: "Darf ich bitte kurz Ihr Telefon benutzen?" },
      { pic: "✏️", hint: "Kuli", ej: "Kannst du mir bitte einen Kuli geben?" },
      { pic: "☕", hint: "Kaffee", ej: "Ich hätte gern einen Kaffee, bitte." },
      { pic: "🚭", hint: "Rauchen", ej: "Bitte nicht rauchen!" },
      { pic: "🧾", hint: "Rechnung", ej: "Die Rechnung, bitte." },
      { pic: "🔇", hint: "leise", ej: "Kannst du bitte leiser sein?" }
    ]
  },

  /* Lena, la maestra del taller: frases habladas (voz alemana). */
  coach: {
    hello: [["Hallo! Schön, dass du da bist.", "¡Hola! Qué bien que estés aquí."], ["Los geht's! Zwanzig Minuten, und fertig.", "¡Vamos! Veinte minutos y listo."], ["Willkommen zurück in der Werkstatt!", "¡Bienvenido de vuelta al taller!"], ["Guten Tag! Heute machen wir weiter.", "¡Buenos días! Hoy seguimos."]],
    right: ["Richtig!", "Sehr gut!", "Genau!", "Super!", "Perfekt!", "Klasse!"],
    wrong: ["Fast!", "Nicht ganz.", "Kein Problem, weiter!"],
    done: [["Gut gemacht!", "¡Bien hecho!"], ["Feierabend! Für heute bist du fertig.", "¡Fin de la jornada! Por hoy terminaste."], ["Toll! Bis morgen!", "¡Genial! ¡Hasta mañana!"]],
    level: [["Glückwunsch! Du bist eine Stufe weiter.", "¡Enhorabuena! Subiste un nivel."]]
  },

  /* Niveles del taller (gremios alemanes): XP mínima y nombre. */
  levels: [[0, "Lehrling I"], [120, "Lehrling II"], [300, "Lehrling III"], [550, "Geselle I"], [850, "Geselle II"], [1250, "Geselle III"], [1750, "Meister I"], [2400, "Meister II"], [3200, "Meister III"]],

  /* Lecturas por nivel y exámenes A2–B2 (los rellenan los archivos content/de-*.js). */
  texts: [],
  exams: {},

  /* Escenarios del tutor con IA */
  scenes: [
    { id: "frei", t: "Conversación libre", role: "un compañero de tándem amable de Essen", start: "Hallo! Ich bin Jan. Wie heißt du und woher kommst du?" },
    { id: "baecker", t: "En la panadería", role: "la dependienta de una panadería", start: "Guten Morgen! Was darf es sein?" },
    { id: "familie", t: "Cena con la familia de tu pareja", role: "el padre de la pareja del alumno, que lo recibe para cenar (trato de Sie al principio)", start: "Guten Abend! Schön, dass Sie da sind. Kommen Sie rein!" },
    { id: "bahn", t: "En la estación de tren", role: "una empleada de información de la Deutsche Bahn", start: "Guten Tag, wie kann ich Ihnen helfen?" },
    { id: "arzt", t: "Pedir cita al médico por teléfono", role: "la recepcionista de una consulta médica", start: "Praxis Doktor Weber, guten Tag!" },
    { id: "markt", t: "Mercado navideño", role: "un vendedor de Glühwein en un mercado navideño", start: "Guten Abend! Glühwein, Kinderpunsch oder Kakao?" },
    { id: "kollege", t: "Charla con un colega", role: "una colega de oficina en la pausa del café", start: "Mahlzeit! Na, wie war dein Wochenende?" },
    { id: "pruefung", t: "Examen oral A1 (Sprechen)", role: "el examinador del Goethe-Zertifikat A1, que hace las tres partes del examen oral en orden", start: "Guten Tag! Bitte stellen Sie sich vor: Name, Alter, Land, Wohnort, Sprachen, Beruf, Hobby." }
  ]
};
