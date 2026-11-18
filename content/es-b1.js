/* Isla Ñ — nivel B1 (Archipiélago Volcán) */
(function () {
  const ES = window.ES;

  ES.slang.push(
    { es: "Estar como un flan", r: "es", de: "total nervös sein (wie ein Wackelpudding)", en: "to be a bundle of nerves (like jelly)", ex: "Antes del examen estaba como un flan." },
    { es: "¡Échale ganas!", r: "mx", de: "Gib dein Bestes!", en: "Give it your all!", ex: "¡Échale ganas, que tú puedes!" },
    { es: "¡Qué oso!", r: "mx", de: "Wie peinlich!", en: "How embarrassing!", ex: "Me caí delante de toda la clase. ¡Qué oso!" },
    { es: "Te banco", r: "ar", de: "Ich halte zu dir!", en: "I've got your back", ex: "Tranqui, yo te banco." },
    { es: "¡Qué macana!", r: "ar", de: "So ein Pech! / Wie schade!", en: "What a bummer!", ex: "Se suspendió el partido. ¡Qué macana!" },
    { es: "La ñapa", r: "do", de: "die kleine Zugabe (gratis)", en: "a little extra (for free)", ex: "En el colmado me dieron un caramelo de ñapa." },
    { es: "¡Al tiro!", r: "cl", de: "Sofort!", en: "Right away!", ex: "—¿Vienes? —¡Voy al tiro!" },
    { es: "Fome", r: "cl", de: "langweilig", en: "boring", ex: "Esa película es muy fome." },
    { es: "Janguear", r: "pr", de: "abhängen (mit Freunden)", en: "to hang out", ex: "¿Vamos a janguear al parque?" },
    { es: "¡Qué nota!", r: "co", de: "Wie toll!", en: "How awesome!", ex: "¡Qué nota tu disfraz!" }
  );

  ES.units.push(
    /* ---------- 1. Inventos del futuro: futuro simple ---------- */
    {
      id: "b1-inventos", level: "B1", title: "Inventos del futuro",
      de: "Erfindungen der Zukunft", en: "Inventions of the future",
      pic: "💡", sticker: "🤖", color: "sea",
      words: [
        { es: "el invento", de: "die Erfindung", en: "invention", pic: "💡" },
        { es: "el inventor", de: "der Erfinder", en: "inventor", pic: "🧑‍🔬" },
        { es: "el futuro", de: "die Zukunft", en: "the future", pic: "🔮" },
        { es: "la máquina", de: "die Maschine", en: "machine", pic: "⚙️" },
        { es: "el carro volador", de: "das fliegende Auto", en: "flying car", pic: "🛸", vary: { es: "el coche volador", ar: "el auto volador", cl: "el auto volador" } },
        { es: "el imán", de: "der Magnet", en: "magnet", pic: "🧲" },
        { es: "la batería", de: "der Akku / die Batterie", en: "battery", pic: "🔋" },
        { es: "el tornillo", de: "die Schraube", en: "screw", pic: "🔩" },
        { es: "el cable", de: "das Kabel", en: "cable / wire", pic: "🔌" },
        { es: "inventar", de: "erfinden", en: "to invent", pic: "🛠️" },
        { es: "funcionar", de: "funktionieren", en: "to work (machines)", pic: "✅" },
        { es: "habrá", de: "es wird … geben", en: "there will be", pic: "🗓️" }
      ],
      story: [
        { who: "mia", es: "¡Mañana será la feria de inventos de la escuela! Yo presentaré mi máquina.", de: "Morgen ist die Erfindermesse an unserer Schule! Ich werde meine Maschine vorstellen.", en: "Tomorrow is the school inventions fair! I'll present my machine.", pic: "🏫💡" },
        { who: "alex", es: "¡Qué guay! ¿Y qué hará tu máquina?", de: "Wie cool! Und was wird deine Maschine machen?", en: "How cool! And what will your machine do?", pic: "🤔" },
        { who: "mia", es: "Ordenará los juguetes de mi cuarto. ¡Nunca más tendré que recogerlos yo!", de: "Sie wird die Spielsachen in meinem Zimmer aufräumen. Nie wieder muss ich sie selbst wegräumen!", en: "It will tidy up the toys in my room. I'll never have to pick them up myself again!", pic: "🧸⚙️" },
        { who: "valen", es: "¡Qué copado! Yo creo que en el futuro habrá autos voladores.", de: "Voll cool! Ich glaube, in der Zukunft wird es fliegende Autos geben.", en: "So cool! I think in the future there will be flying cars.", pic: "🔮🛸" },
        { who: "alex", es: "¡Y en el año 2050 iremos al cole volando! Llegaremos en dos minutos.", de: "Und im Jahr 2050 werden wir zur Schule fliegen! In zwei Minuten sind wir da.", en: "And in 2050 we'll fly to school! We'll get there in two minutes.", pic: "🛸🏫" },
        { who: "coco", es: "Y yo inventaré una máquina que me haga mangú todas las mañanas. ¡Tá jevi!", de: "Und ich erfinde eine Maschine, die mir jeden Morgen Mangú macht. Voll cool!", en: "And I'll invent a machine that makes me mangú every morning. Awesome!", pic: "🦜🍽️" },
        { who: "mia", es: "Ay, no… ¡Mi máquina no funciona! No se mueve nada.", de: "Oh nein … Meine Maschine funktioniert nicht! Nichts bewegt sich.", en: "Oh no… My machine isn't working! Nothing's moving.", pic: "😟" },
        { who: "valen", es: "Tranqui, Mía. Mirá: este cable está suelto.", de: "Keine Panik, Mía. Schau mal: Dieses Kabel ist locker.", en: "Relax, Mía. Look: this wire is loose.", pic: "🔌" },
        { who: "coco", es: "¡Y aquí falta un tornillo! Lo buscaré con mi imán… ¡Aquí está!", de: "Und hier fehlt eine Schraube! Ich suche sie mit meinem Magneten … Da ist sie!", en: "And there's a screw missing here! I'll look for it with my magnet… Here it is!", pic: "🧲🔩" },
        { who: "alex", es: "Ahora le pondremos una batería nueva y funcionará, ya verás.", de: "Jetzt bauen wir einen neuen Akku ein, und dann funktioniert sie, wirst schon sehen.", en: "Now we'll put in a new battery and it'll work, you'll see.", pic: "🔋" },
        { who: "mia", es: "¡Funciona! ¡Está recogiendo todos los juguetes!", de: "Sie funktioniert! Sie räumt alle Spielsachen auf!", en: "It works! It's picking up all the toys!", pic: "🧸✅" },
        { who: "coco", es: "Eh… ¡y también está recogiendo mis plumas! ¡Diache!", de: "Äh … und meine Federn sammelt sie auch ein! Mensch!", en: "Er… and it's picking up my feathers too! Oh man!", pic: "🪶😂" },
        { who: "mia", es: "¡Jajaja! Tranquilo, Coco, esta noche la arreglaré. ¡Mañana seremos los mejores inventores de la feria!", de: "Hahaha! Keine Sorge, Coco, heute Abend repariere ich sie. Morgen werden wir die besten Erfinder der Messe sein!", en: "Hahaha! Don't worry, Coco, I'll fix it tonight. Tomorrow we'll be the best inventors at the fair!", pic: "🏆" }
      ],
      questions: [
        { q: "¿Qué hará la máquina de Mía?", de: "Was wird Mías Maschine machen?", en: "What will Mía's machine do?", opts: ["Hará mangú.", "Ordenará los juguetes.", "Volará hasta la escuela."], a: 1 },
        { q: "¿Por qué no funciona la máquina al principio?", de: "Warum funktioniert die Maschine am Anfang nicht?", en: "Why doesn't the machine work at first?", opts: ["Hay un cable suelto y falta un tornillo.", "Coco la rompió.", "Está mojada."], a: 0 },
        { q: "¿Qué recoge la máquina por error?", de: "Was sammelt die Maschine aus Versehen ein?", en: "What does the machine pick up by mistake?", opts: ["los libros de Álex", "el mangú de Coco", "las plumas de Coco"], a: 2 }
      ],
      phrases: [
        { es: "En el futuro habrá carros voladores.", de: "In der Zukunft wird es fliegende Autos geben.", en: "In the future there will be flying cars." },
        { es: "¿Qué harás este fin de semana?", de: "Was machst du dieses Wochenende?", en: "What will you do this weekend?" },
        { es: "Creo que funcionará.", de: "Ich glaube, das wird funktionieren.", en: "I think it will work." },
        { es: "Mañana lo arreglaré.", de: "Morgen repariere ich es.", en: "I'll fix it tomorrow." }
      ],
      tips: [
        { es: "El futuro es fácil: verbo entero más é, ás, á, emos, éis, án. Hablar → hablaré, hablarás, hablará.", de: "Das Futur ist leicht: das ganze Verb plus é, ás, á, emos, éis, án. hablar → hablaré = ich werde sprechen.", en: "The future is easy: the whole verb plus é, ás, á, emos, éis, án. hablar → hablaré = I will speak." },
        { es: "Algunos verbos son rebeldes: tener → tendré, hacer → haré, poder → podré, haber → habrá.", de: "Manche Verben sind Rebellen: tener → tendré, hacer → haré, poder → podré, haber → habrá (es wird … geben).", en: "Some verbs are rebels: tener → tendré, hacer → haré, poder → podré, haber → habrá (there will be)." }
      ],
      note: { es: "En Argentina, al bolígrafo lo llaman «birome». El nombre viene de Ladislao Biro, un inventor que vivía en Buenos Aires y lo patentó allí en 1943.", de: "In Argentinien heißt der Kugelschreiber „birome“. Der Name kommt von Ladislao Biro, einem Erfinder, der in Buenos Aires lebte und ihn dort 1943 patentieren ließ.", en: "In Argentina a ballpoint pen is called a “birome”. The name comes from Ladislao Biro, an inventor who lived in Buenos Aires and patented it there in 1943." },
      slang: ["¡Qué copado!", "¡Tá jevi!", "¡Diache!", "¡Al tiro!"]
    },

    /* ---------- 2. Cuidemos el planeta: condicional ---------- */
    {
      id: "b1-planeta", level: "B1", title: "Cuidemos el planeta",
      de: "Wir schützen unseren Planeten", en: "Let's look after the planet",
      pic: "🌍", sticker: "♻️", color: "leaf",
      words: [
        { es: "el medio ambiente", de: "die Umwelt", en: "the environment", pic: "🌳" },
        { es: "el planeta", de: "der Planet", en: "planet", pic: "🌍" },
        { es: "reciclar", de: "recyceln", en: "to recycle", pic: "♻️" },
        { es: "reutilizar", de: "wiederverwenden", en: "to reuse", pic: "🔁" },
        { es: "contaminar", de: "verschmutzen", en: "to pollute", pic: "🏭" },
        { es: "proteger", de: "schützen", en: "to protect", pic: "🛡️" },
        { es: "el plástico", de: "das Plastik", en: "plastic", pic: "🥤" },
        { es: "el vidrio", de: "das Glas", en: "glass", pic: "🫙" },
        { es: "el cartón", de: "die Pappe / der Karton", en: "cardboard", pic: "📦" },
        { es: "el bote de basura", de: "der Mülleimer", en: "rubbish bin", pic: "🗑️", vary: { es: "el cubo de la basura", do: "el zafacón", pr: "el zafacón", ar: "el tacho de basura", co: "la caneca", ve: "el pipote" } },
        { es: "ahorrar agua", de: "Wasser sparen", en: "to save water", pic: "🚿" },
        { es: "la bolsa de tela", de: "die Stofftasche", en: "cloth bag", pic: "👜" }
      ],
      story: [
        { who: "coco", es: "¡Bienvenidos a mi playa! Pero… ¡diache, cuánta basura hay hoy!", de: "Willkommen an meinem Strand! Aber … Mensch, heute liegt hier so viel Müll!", en: "Welcome to my beach! But… oh man, there's so much rubbish today!", pic: "🏖️🗑️" },
        { who: "mia", es: "Hay botellas de plástico, latas y bolsas por todas partes.", de: "Überall liegen Plastikflaschen, Dosen und Tüten.", en: "There are plastic bottles, cans and bags everywhere.", pic: "🥤" },
        { who: "valen", es: "¡Qué macana! Y mirá esa tortuga: ¡está a punto de comerse una bolsa!", de: "So ein Mist! Und schau dir die Schildkröte an: Gleich frisst sie eine Tüte!", en: "What a bummer! And look at that turtle: it's about to eat a bag!", pic: "🐢" },
        { who: "alex", es: "¡Cuidado! Las tortugas creen que las bolsas son medusas.", de: "Vorsicht! Schildkröten denken, dass Tüten Quallen sind.", en: "Careful! Turtles think bags are jellyfish.", pic: "🪼" },
        { who: "coco", es: "¡Ya está! Saqué la bolsa del agua y la tortuga se fue nadando muy tranquila.", de: "Geschafft! Ich habe die Tüte aus dem Wasser geholt, und die Schildkröte ist ganz ruhig weggeschwommen.", en: "Done! I took the bag out of the water and the turtle swam off, nice and calm.", pic: "🐢🌊" },
        { who: "mia", es: "Deberíamos limpiar la playa entre todos. ¿Quién me ayuda?", de: "Wir sollten den Strand alle zusammen sauber machen. Wer hilft mir?", en: "We should all clean the beach together. Who'll help me?", pic: "🧤" },
        { who: "alex", es: "¡Yo! Y podríamos separar la basura para reciclarla. ¡Y estas botellas de vidrio se pueden reutilizar!", de: "Ich! Und wir könnten den Müll trennen, um ihn zu recyceln. Und diese Glasflaschen kann man wiederverwenden!", en: "Me! And we could sort the rubbish to recycle it. And these glass bottles can be reused!", pic: "♻️" },
        { who: "valen", es: "En casa también podríamos ahorrar agua. Yo cierro la canilla cuando me lavo los dientes.", de: "Zu Hause könnten wir auch Wasser sparen. Ich drehe den Wasserhahn zu, wenn ich mir die Zähne putze.", en: "At home we could save water too. I turn off the tap when I brush my teeth.", pic: "🚰" },
        { who: "coco", es: "¿La canilla? En mi país decimos «la llave», y en España, «el grifo».", de: "„Canilla“? In meinem Land sagen wir „la llave“, und in Spanien „el grifo“.", en: "“Canilla”? In my country we say “la llave”, and in Spain “el grifo”.", pic: "🤔" },
        { who: "mia", es: "El plástico contamina el mar. Yo usaría bolsas de tela para ir de compras.", de: "Plastik verschmutzt das Meer. Ich würde zum Einkaufen Stofftaschen benutzen.", en: "Plastic pollutes the sea. I'd use cloth bags for shopping.", pic: "👜" },
        { who: "coco", es: "¡Y yo pondría un zafacón en cada esquina de la playa!", de: "Und ich würde an jede Ecke vom Strand einen Mülleimer stellen!", en: "And I'd put a bin on every corner of the beach!", pic: "🗑️" },
        { who: "valen", es: "¡Listo! La playa quedó re limpia. Así se protege el planeta.", de: "Fertig! Der Strand ist jetzt total sauber. So schützt man den Planeten.", en: "Done! The beach is super clean now. That's how you protect the planet.", pic: "✨🏖️" },
        { who: "alex", es: "¡Qué guay! El medio ambiente nos lo agradecerá. Deberíamos hacerlo todos los meses, ¿no os parece?", de: "Wie cool! Die Umwelt wird es uns danken. Das sollten wir jeden Monat machen, findet ihr nicht?", en: "How cool! The environment will thank us. We should do this every month, don't you think?", pic: "🗓️" }
      ],
      questions: [
        { q: "¿Qué creen las tortugas cuando ven una bolsa?", de: "Was denken Schildkröten, wenn sie eine Tüte sehen?", en: "What do turtles think when they see a bag?", opts: ["Que es un pez.", "Que es una medusa.", "Que es una piedra."], a: 1 },
        { q: "¿Cómo llama Valen al grifo?", de: "Wie nennt Valen den Wasserhahn?", en: "What does Valen call the tap?", opts: ["la canilla", "la llave", "el zafacón"], a: 0 },
        { q: "¿Qué usaría Mía para ir de compras?", de: "Was würde Mía zum Einkaufen benutzen?", en: "What would Mía use for shopping?", opts: ["cajas de cartón", "bolsas de plástico", "bolsas de tela"], a: 2 }
      ],
      phrases: [
        { es: "Deberíamos reciclar más.", de: "Wir sollten mehr recyceln.", en: "We should recycle more." },
        { es: "Podríamos ir al colegio en bici.", de: "Wir könnten mit dem Fahrrad zur Schule fahren.", en: "We could cycle to school." },
        { es: "Yo en tu lugar apagaría la luz.", de: "An deiner Stelle würde ich das Licht ausmachen.", en: "If I were you, I'd switch off the light." },
        { es: "¿Dónde se tira el vidrio?", de: "Wo wirft man das Glas weg?", en: "Where does the glass go?" }
      ],
      tips: [
        { es: "Para dar ideas y consejos usamos el condicional: deberíamos, podríamos, sería mejor.", de: "Für Ideen und Ratschläge nimmt man das Konditional: deberíamos (wir sollten), podríamos (wir könnten), sería mejor (es wäre besser).", en: "To suggest ideas and give advice we use the conditional: deberíamos (we should), podríamos (we could), sería mejor (it would be better)." },
        { es: "El condicional es el verbo entero más ía: reciclar → reciclaría. Los rebeldes son los mismos del futuro: poder → podría, hacer → haría, poner → pondría.", de: "Das Konditional ist das ganze Verb plus ía: reciclar → reciclaría. Die Rebellen sind dieselben wie im Futur: poder → podría, hacer → haría, poner → pondría.", en: "The conditional is the whole verb plus ía: reciclar → reciclaría. The rebels are the same as in the future: poder → podría, hacer → haría, poner → pondría." }
      ],
      note: { es: "En España, el contenedor amarillo es para plásticos y latas, el azul para papel y cartón, y el verde para el vidrio. ¡Se parece mucho a Alemania!", de: "In Spanien kommen Plastik und Dosen in die gelbe Tonne, Papier und Pappe in die blaue und Glas in den grünen Container. Ganz ähnlich wie in Deutschland!", en: "In Spain, the yellow bin is for plastic and cans, the blue one for paper and cardboard, and the green one for glass. Very similar to Germany!" },
      slang: ["¡Qué macana!", "¡Diache!", "¡Qué guay!", "¡Aguas!"]
    },

    /* ---------- 3. El misterio del faro: indefinido + imperfecto ---------- */
    {
      id: "b1-faro", level: "B1", title: "El misterio del faro",
      de: "Das Geheimnis des Leuchtturms", en: "The mystery of the lighthouse",
      pic: "🔦", sticker: "🐈", color: "hib",
      words: [
        { es: "el faro", de: "der Leuchtturm", en: "lighthouse", pic: "🗼" },
        { es: "el misterio", de: "das Rätsel / das Geheimnis", en: "mystery", pic: "❓" },
        { es: "la pista", de: "der Hinweis / die Spur", en: "clue", pic: "🔍" },
        { es: "la huella", de: "der Fußabdruck / die Spur", en: "footprint / track", pic: "🐾" },
        { es: "la linterna", de: "die Taschenlampe", en: "torch / flashlight", pic: "🔦" },
        { es: "la niebla", de: "der Nebel", en: "fog", pic: "🌫️" },
        { es: "la escalera de caracol", de: "die Wendeltreppe", en: "spiral staircase", pic: "🐌" },
        { es: "el ruido", de: "das Geräusch / der Lärm", en: "noise", pic: "🔊" },
        { es: "el pescador", de: "der Fischer", en: "fisherman", pic: "🎣" },
        { es: "el puerto", de: "der Hafen", en: "harbour / port", pic: "⚓" },
        { es: "de repente", de: "plötzlich", en: "suddenly", pic: "⚡" },
        { es: "encender", de: "anmachen / einschalten", en: "to switch on / to light", pic: "💡", vary: { mx: "prender", do: "prender", ar: "prender", co: "prender" } }
      ],
      story: [
        { who: "valen", es: "¿Les cuento una historia? El verano pasado estábamos en un pueblo de pescadores, al lado del mar.", de: "Soll ich euch eine Geschichte erzählen? Letzten Sommer waren wir in einem Fischerdorf am Meer.", en: "Shall I tell you a story? Last summer we were in a fishing village by the sea.", pic: "🏘️🌊" },
        { who: "mia", es: "Una noche había mucha niebla y no se veía nada.", de: "Eines Nachts war es sehr neblig, und man konnte nichts sehen.", en: "One night it was very foggy and you couldn't see a thing.", pic: "🌫️" },
        { who: "alex", es: "De repente, se encendió una luz en el faro viejo. ¡Y ese faro llevaba años apagado!", de: "Plötzlich ging im alten Leuchtturm ein Licht an. Dabei war der Leuchtturm schon seit Jahren aus!", en: "Suddenly a light came on in the old lighthouse. And that lighthouse had been dark for years!", pic: "🗼✨" },
        { who: "coco", es: "Y yo oí un ruido muy raro: toc, toc, toc. ¡Qué misterio!", de: "Und ich hörte ein ganz komisches Geräusch: tock, tock, tock. Wie rätselhaft!", en: "And I heard a really strange noise: knock, knock, knock. What a mystery!", pic: "🔊❓" },
        { who: "valen", es: "A la mañana siguiente, agarramos una linterna y fuimos al faro.", de: "Am nächsten Morgen nahmen wir eine Taschenlampe und gingen zum Leuchtturm.", en: "The next morning we grabbed a torch and went to the lighthouse.", pic: "🔦" },
        { who: "mia", es: "La puerta estaba abierta. En el suelo había huellas: unas grandes y otras chiquitas.", de: "Die Tür war offen. Auf dem Boden waren Spuren: große und ganz kleine.", en: "The door was open. There were footprints on the floor: some big ones and some tiny ones.", pic: "🚪🐾" },
        { who: "alex", es: "¡Una pista! Subimos despacio por la escalera de caracol.", de: "Ein Hinweis! Wir stiegen langsam die Wendeltreppe hinauf.", en: "A clue! We slowly climbed the spiral staircase.", pic: "🔍🐌" },
        { who: "coco", es: "Arriba encontramos a una señora mayor. Estaba arreglando la lámpara con un martillo.", de: "Oben fanden wir eine ältere Dame. Sie reparierte gerade die Lampe mit einem Hammer.", en: "At the top we found an old lady. She was fixing the lamp with a hammer.", pic: "👵🔨" },
        { who: "mia", es: "Se llamaba doña Carmen. De joven, era la farera del pueblo.", de: "Sie hieß Doña Carmen. Als sie jung war, war sie die Leuchtturmwärterin des Dorfes.", en: "Her name was Doña Carmen. When she was young, she was the village lighthouse keeper.", pic: "👵" },
        { who: "valen", es: "Nos contó que esa noche un pescador estaba perdido en la niebla y no encontraba el puerto. Por eso prendió el faro.", de: "Sie erzählte uns, dass sich in jener Nacht ein Fischer im Nebel verirrt hatte und den Hafen nicht fand. Deshalb hat sie den Leuchtturm angemacht.", en: "She told us that a fisherman had got lost in the fog that night and couldn't find the harbour. That's why she switched on the lighthouse.", pic: "🎣⚓" },
        { who: "alex", es: "Entonces, ¡el ruido era el martillo de doña Carmen!", de: "Das Geräusch war also der Hammer von Doña Carmen!", en: "So the noise was Doña Carmen's hammer!", pic: "🔨" },
        { who: "coco", es: "¿Y las huellas chiquitas? ¡Eran de su gato, que se llamaba Capitán!", de: "Und die kleinen Spuren? Die waren von ihrem Kater, der Capitán hieß!", en: "And the tiny footprints? They were her cat's, and he was called Capitán!", pic: "🐈" },
        { who: "mia", es: "Al final, el pescador llegó bien al puerto y doña Carmen nos invitó a chocolate caliente. ¡Qué final tan padre!", de: "Am Ende kam der Fischer gut im Hafen an, und Doña Carmen lud uns zu heißer Schokolade ein. Was für ein tolles Ende!", en: "In the end, the fisherman got safely to the harbour and Doña Carmen treated us to hot chocolate. What a great ending!", pic: "⚓☕" }
      ],
      questions: [
        { q: "¿Por qué era raro ver una luz en el faro?", de: "Warum war es seltsam, ein Licht im Leuchtturm zu sehen?", en: "Why was it strange to see a light in the lighthouse?", opts: ["Porque llevaba años apagado.", "Porque era de día.", "Porque no tenía puerta."], a: 0 },
        { q: "¿Por qué encendió doña Carmen el faro?", de: "Warum hat Doña Carmen den Leuchtturm angemacht?", en: "Why did Doña Carmen switch on the lighthouse?", opts: ["Porque tenía miedo de la niebla.", "Para ayudar a un pescador perdido.", "Para buscar a su gato."], a: 1 },
        { q: "¿De quién eran las huellas chiquitas?", de: "Von wem waren die kleinen Spuren?", en: "Whose were the tiny footprints?", opts: ["de Coco", "de un pescador", "del gato de doña Carmen"], a: 2 }
      ],
      phrases: [
        { es: "De repente, vi una luz.", de: "Plötzlich sah ich ein Licht.", en: "Suddenly I saw a light." },
        { es: "Era de noche y había niebla.", de: "Es war Nacht und es war neblig.", en: "It was night-time and it was foggy." },
        { es: "¿Y qué pasó después?", de: "Und was ist dann passiert?", en: "And what happened next?" },
        { es: "Al final, todo salió bien.", de: "Am Ende ist alles gut ausgegangen.", en: "In the end, everything turned out fine." }
      ],
      tips: [
        { es: "En un cuento, el imperfecto pinta el fondo: era de noche, había niebla. El indefinido cuenta lo que pasa: de repente, vi una luz.", de: "In einer Geschichte malt das Imperfekt den Hintergrund: era de noche (es war Nacht), había niebla (es war neblig). Das Indefinido erzählt, was passiert: de repente vi una luz (plötzlich sah ich ein Licht).", en: "In a story, the imperfect paints the background: era de noche (it was night), había niebla (it was foggy). The preterite tells what happens: de repente vi una luz (suddenly I saw a light)." },
        { es: "Palabras para contar una historia: primero, luego, de repente, entonces, al final.", de: "Wörter zum Erzählen: primero (zuerst), luego (dann), de repente (plötzlich), entonces (da / also), al final (am Ende).", en: "Words for telling a story: primero (first), luego (then), de repente (suddenly), entonces (so / then), al final (in the end)." }
      ],
      note: { es: "La Torre de Hércules, en A Coruña, España, es un faro romano de hace casi dos mil años. ¡Y todavía funciona!", de: "Der Herkulesturm in A Coruña in Spanien ist ein römischer Leuchtturm, fast zweitausend Jahre alt. Und er leuchtet immer noch!", en: "The Tower of Hercules in A Coruña, Spain, is a Roman lighthouse almost two thousand years old. And it still works!" },
      slang: ["¡Hala!", "¡Órale!", "¡Qué pasada!", "¡Épale!"]
    },

    /* ---------- 4. Problemas entre amigos: consejos con subjuntivo ---------- */
    {
      id: "b1-amigos", level: "B1", title: "Problemas entre amigos",
      de: "Ärger unter Freunden", en: "Trouble between friends",
      pic: "🫂", sticker: "💛", color: "sun",
      words: [
        { es: "el consejo", de: "der Rat / der Ratschlag", en: "advice", pic: "💬" },
        { es: "pelearse", de: "sich streiten", en: "to fight / to argue", pic: "😤" },
        { es: "hacer las paces", de: "sich wieder vertragen", en: "to make up", pic: "🕊️" },
        { es: "pedir perdón", de: "sich entschuldigen", en: "to say sorry", pic: "🙏" },
        { es: "el secreto", de: "das Geheimnis", en: "secret", pic: "🤫" },
        { es: "el chisme", de: "der Klatsch / das Gerücht", en: "gossip", pic: "🗣️", vary: { es: "el cotilleo" } },
        { es: "el malentendido", de: "das Missverständnis", en: "misunderstanding", pic: "🤷" },
        { es: "los celos", de: "die Eifersucht", en: "jealousy", pic: "😒" },
        { es: "compartir", de: "teilen", en: "to share", pic: "🤲" },
        { es: "ponerse de acuerdo", de: "sich einigen", en: "to agree", pic: "👌" },
        { es: "burlarse de", de: "sich lustig machen über", en: "to make fun of", pic: "😝" },
        { es: "extrañar", de: "vermissen", en: "to miss (someone)", pic: "🥺", vary: { es: "echar de menos" } }
      ],
      story: [
        { who: "mia", es: "¡Estoy enojadísima con Valen! Le contó mi secreto a toda la clase.", de: "Ich bin total sauer auf Valen! Sie hat mein Geheimnis der ganzen Klasse erzählt.", en: "I'm so angry with Valen! She told my secret to the whole class.", pic: "😠🤫" },
        { who: "alex", es: "¿Qué secreto?", de: "Welches Geheimnis?", en: "What secret?", pic: "🤔" },
        { who: "mia", es: "Que todavía duermo con mi peluche, el señor Pancho. ¡Qué oso!", de: "Dass ich noch mit meinem Kuscheltier schlafe, Herrn Pancho. Wie peinlich!", en: "That I still sleep with my teddy, Mr Pancho. How embarrassing!", pic: "🧸😳" },
        { who: "alex", es: "Vale, tranquila. Te recomiendo que hables con ella antes de enfadarte más.", de: "Okay, ganz ruhig. Ich rate dir, mit ihr zu reden, bevor du dich noch mehr ärgerst.", en: "OK, calm down. I'd suggest you talk to her before you get even angrier.", pic: "💬" },
        { who: "mia", es: "No quiero. ¡Ya no es mi amiga!", de: "Will ich nicht. Sie ist nicht mehr meine Freundin!", en: "I don't want to. She's not my friend any more!", pic: "😤" },
        { who: "alex", es: "Es mejor que le preguntes primero. A lo mejor es un malentendido.", de: "Es ist besser, wenn du sie zuerst fragst. Vielleicht ist es ein Missverständnis.", en: "It's better if you ask her first. Maybe it's a misunderstanding.", pic: "🤷" },
        { who: "valen", es: "Mía, ¿por qué no me hablás? ¿Estás enojada conmigo?", de: "Mía, warum redest du nicht mit mir? Bist du sauer auf mich?", en: "Mía, why aren't you talking to me? Are you angry with me?", pic: "🥺" },
        { who: "mia", es: "¡Les contaste a todos lo del señor Pancho!", de: "Du hast allen das mit Herrn Pancho erzählt!", en: "You told everyone about Mr Pancho!", pic: "🧸" },
        { who: "valen", es: "¡Te juro que no dije nada! Yo nunca cuento los secretos de mis amigas.", de: "Ich schwöre, ich habe nichts gesagt! Ich verrate nie die Geheimnisse meiner Freundinnen.", en: "I swear I didn't say anything! I never tell my friends' secrets.", pic: "🤐" },
        { who: "coco", es: "Eh… «¡Señor Pancho, señor Pancho!». Creo que fui yo. Lo repetí en el recreo.", de: "Äh … „Herr Pancho, Herr Pancho!“ Ich glaube, das war ich. Ich habe es in der Pause nachgeplappert.", en: "Er… “Mr Pancho, Mr Pancho!” I think it was me. I repeated it at break time.", pic: "🦜😳" },
        { who: "coco", es: "¡Perdón, Mía! Soy un loro y a veces repito todo sin pensar.", de: "Entschuldigung, Mía! Ich bin ein Papagei und plappere manchmal alles nach, ohne nachzudenken.", en: "Sorry, Mía! I'm a parrot and sometimes I repeat everything without thinking.", pic: "🙏" },
        { who: "alex", es: "Coco, te aconsejo que pienses antes de hablar. ¡Y vosotras, haced las paces!", de: "Coco, ich rate dir, erst zu denken und dann zu reden. Und ihr zwei, vertragt euch wieder!", en: "Coco, my advice is to think before you speak. And you two, make up!", pic: "🕊️" },
        { who: "mia", es: "Perdón, Valen. Te acusé sin preguntarte primero. ¿Amigas otra vez?", de: "Entschuldigung, Valen. Ich habe dich beschuldigt, ohne dich vorher zu fragen. Wieder Freundinnen?", en: "Sorry, Valen. I blamed you without asking you first. Friends again?", pic: "🤝" },
        { who: "valen", es: "¡Obvio! Y el señor Pancho también puede ser mi amigo.", de: "Na klar! Und Herr Pancho darf auch mein Freund sein.", en: "Of course! And Mr Pancho can be my friend too.", pic: "🫂🧸" }
      ],
      questions: [
        { q: "¿Cuál es el secreto de Mía?", de: "Was ist Mías Geheimnis?", en: "What is Mía's secret?", opts: ["Le dan miedo los perros.", "Todavía duerme con un peluche.", "No sabe nadar."], a: 1 },
        { q: "¿Qué le recomienda Álex a Mía?", de: "Was rät Álex Mía?", en: "What does Álex advise Mía to do?", opts: ["Que hable con Valen.", "Que cuente un secreto de Valen.", "Que no vaya a la escuela."], a: 0 },
        { q: "¿Quién contó el secreto en realidad?", de: "Wer hat das Geheimnis wirklich verraten?", en: "Who really gave away the secret?", opts: ["Valen", "Álex", "Coco"], a: 2 }
      ],
      phrases: [
        { es: "Te recomiendo que hables con ella.", de: "Ich rate dir, mit ihr zu reden.", en: "I suggest you talk to her." },
        { es: "Es mejor que le digas la verdad.", de: "Es ist besser, wenn du ihr die Wahrheit sagst.", en: "It's better if you tell her the truth." },
        { es: "Lo siento mucho. ¿Hacemos las paces?", de: "Es tut mir echt leid. Vertragen wir uns wieder?", en: "I'm really sorry. Shall we make up?" },
        { es: "No te enojes conmigo, por favor.", de: "Sei bitte nicht sauer auf mich.", en: "Please don't be angry with me." }
      ],
      tips: [
        { es: "Para dar consejos usamos «que» + subjuntivo: te recomiendo que hables, es mejor que comas. ¡La vocal cambia! Hablar → hables, comer → comas.", de: "Für Ratschläge nimmt man „que“ + Subjuntivo: te recomiendo que hables (ich rate dir zu reden), es mejor que comas (iss lieber). Der Vokal tauscht: hablar → hables, comer → comas.", en: "To give advice we use “que” + subjunctive: te recomiendo que hables (I suggest you talk), es mejor que comas (you'd better eat). The vowel swaps: hablar → hables, comer → comas." },
        { es: "Para decir «no lo hagas» también usamos el subjuntivo: no te enojes, no grites, no digas nada.", de: "Auch Verbote bildet man mit dem Subjuntivo: no te enojes (ärgere dich nicht), no grites (schrei nicht), no digas nada (sag nichts).", en: "To say “don't do it” we also use the subjunctive: no te enojes (don't get angry), no grites (don't shout), no digas nada (don't say anything)." }
      ],
      note: { es: "En México y en muchos otros países, el 14 de febrero es el «Día del Amor y la Amistad»: ese día también se celebra a los amigos. ¡En Colombia, esta fiesta es en septiembre!", de: "In Mexiko und vielen anderen Ländern heißt der 14. Februar „Tag der Liebe und der Freundschaft“: An diesem Tag feiert man auch seine Freunde. In Kolumbien ist dieses Fest im September!", en: "In Mexico and many other countries, 14 February is the “Day of Love and Friendship”: people celebrate their friends too. In Colombia this celebration is in September!" },
      slang: ["Te banco", "¡Qué oso!", "Pana", "¡Qué pena!"]
    },

    /* ---------- 5. Cocinamos juntos: se impersonal e imperativo ---------- */
    {
      id: "b1-cocina", level: "B1", title: "Cocinamos juntos",
      de: "Wir kochen zusammen", en: "Let's cook together",
      pic: "🧑‍🍳", sticker: "🥟", color: "leaf",
      words: [
        { es: "la receta", de: "das Rezept", en: "recipe", pic: "📜" },
        { es: "los ingredientes", de: "die Zutaten", en: "ingredients", pic: "🧺" },
        { es: "la harina de maíz", de: "das Maismehl", en: "corn flour", pic: "🌽" },
        { es: "la masa", de: "der Teig", en: "dough", pic: "🫓" },
        { es: "el relleno", de: "die Füllung", en: "filling", pic: "🥟" },
        { es: "la sartén", de: "die Pfanne", en: "frying pan", pic: "🍳" },
        { es: "la olla", de: "der Kochtopf", en: "pot / saucepan", pic: "🍲" },
        { es: "mezclar", de: "mischen / verrühren", en: "to mix", pic: "🥣" },
        { es: "hervir", de: "kochen (in Wasser)", en: "to boil", pic: "♨️" },
        { es: "freír", de: "braten / frittieren", en: "to fry", pic: "🔥" },
        { es: "añadir", de: "hinzufügen / dazugeben", en: "to add", pic: "➕" },
        { es: "una pizca de sal", de: "eine Prise Salz", en: "a pinch of salt", pic: "🧂" }
      ],
      story: [
        { who: "alex", es: "¡Hoy cocinamos juntos! Ya tenemos todos los ingredientes. Pero antes, lavaos las manos, ¿vale?", de: "Heute kochen wir zusammen! Wir haben schon alle Zutaten. Aber vorher wascht ihr euch die Hände, okay?", en: "Today we're cooking together! We've got all the ingredients. But first, wash your hands, OK?", pic: "🧼" },
        { who: "coco", es: "Yo voy a hacer mangú, el desayuno más rico de mi país.", de: "Ich mache Mangú, das leckerste Frühstück aus meinem Land.", en: "I'm going to make mangú, the yummiest breakfast in my country.", pic: "🇩🇴🍽️" },
        { who: "coco", es: "Primero se pelan los plátanos verdes y se hierven en una olla con agua y sal.", de: "Zuerst schält man die grünen Kochbananen und kocht sie in einem Topf mit Wasser und Salz.", en: "First you peel the green plantains and boil them in a pot with water and salt.", pic: "🍲" },
        { who: "valen", es: "¿Plátanos verdes? ¿No son bananas?", de: "Grüne „plátanos“? Sind das nicht Bananen?", en: "Green “plátanos”? Aren't they bananas?", pic: "🍌❓" },
        { who: "coco", es: "¡No! El guineo es dulce y se come crudo. El plátano es más grande y siempre se cocina.", de: "Nein! Der „guineo“ ist süß und wird roh gegessen. Der „plátano“ ist größer und wird immer gekocht.", en: "No! The guineo is sweet and you eat it raw. The plátano is bigger and always gets cooked.", pic: "🍌" },
        { who: "mia", es: "Yo haré arepas. Mi vecina Daniela, que es de Venezuela, me enseñó la receta.", de: "Ich mache Arepas. Meine Nachbarin Daniela, die aus Venezuela kommt, hat mir das Rezept beigebracht.", en: "I'll make arepas. My neighbour Daniela, who's from Venezuela, taught me the recipe.", pic: "🫓" },
        { who: "mia", es: "Se mezcla la harina de maíz con agua tibia y una pizca de sal.", de: "Man verrührt das Maismehl mit lauwarmem Wasser und einer Prise Salz.", en: "You mix the corn flour with warm water and a pinch of salt.", pic: "🥣" },
        { who: "coco", es: "¿Una pizza? ¿Le vamos a poner pizza a la masa?", de: "Eine Pizza? Kommt etwa Pizza in den Teig?", en: "A pizza? Are we putting pizza in the dough?", pic: "🍕🤔" },
        { who: "mia", es: "¡No, Coco! Una pizca: un poquito, así, con dos dedos.", de: "Nein, Coco! Eine „pizca“, eine Prise: ein winziges bisschen, so, mit zwei Fingern.", en: "No, Coco! A “pizca”, a pinch: just a tiny bit, like this, with two fingers.", pic: "🤏🧂" },
        { who: "alex", es: "Uy, la masa está muy seca y se rompe. ¿Qué hacemos?", de: "Oje, der Teig ist zu trocken und bricht. Was machen wir?", en: "Uh-oh, the dough is too dry and it's cracking. What do we do?", pic: "😬" },
        { who: "coco", es: "Añádele un chin de agua y amásala bien con las manos.", de: "Gib ein bisschen Wasser dazu und knete ihn gut mit den Händen.", en: "Add a little bit of water and knead it well with your hands.", pic: "💧👐" },
        { who: "valen", es: "Yo hago empanadas fritas. Mirá: se pone el relleno en el centro y se cierra la masa así. ¡Pero no la llenes demasiado!", de: "Ich mache frittierte Empanadas. Schau: Man legt die Füllung in die Mitte und klappt den Teig so zu. Aber füll sie nicht zu voll!", en: "I'm making fried empanadas. Look: you put the filling in the middle and close the dough like this. But don't overfill it!", pic: "🥟" },
        { who: "alex", es: "¡Tened cuidado con la sartén, que el aceite quema!", de: "Passt mit der Pfanne auf, das Öl ist sehr heiß!", en: "Be careful with the frying pan, the oil is really hot!", pic: "🍳⚠️" },
        { who: "mia", es: "¡Ya está todo! Mangú, arepas y empanadas. ¡Buen provecho!", de: "Alles fertig! Mangú, Arepas und Empanadas. Guten Appetit!", en: "Everything's ready! Mangú, arepas and empanadas. Enjoy your meal!", pic: "😋" }
      ],
      questions: [
        { q: "¿Qué hace Coco primero con los plátanos verdes?", de: "Was macht Coco zuerst mit den grünen Kochbananen?", en: "What does Coco do first with the green plantains?", opts: ["Los fríe con azúcar.", "Los pela y los hierve.", "Se los come crudos."], a: 1 },
        { q: "¿Qué entiende Coco cuando Mía dice «una pizca»?", de: "Was versteht Coco, als Mía „una pizca“ sagt?", en: "What does Coco hear when Mía says “una pizca”?", opts: ["una piña", "una pizarra", "una pizza"], a: 2 },
        { q: "¿Qué problema tiene la masa de las arepas?", de: "Welches Problem hat der Arepa-Teig?", en: "What's wrong with the arepa dough?", opts: ["Está muy seca.", "Tiene demasiada sal.", "Se quemó."], a: 0 }
      ],
      phrases: [
        { es: "Primero se pelan los plátanos.", de: "Zuerst schält man die Kochbananen.", en: "First you peel the plantains." },
        { es: "Añade una pizca de sal.", de: "Gib eine Prise Salz dazu.", en: "Add a pinch of salt." },
        { es: "No toques la sartén, que quema.", de: "Fass die Pfanne nicht an, die ist heiß.", en: "Don't touch the pan, it's hot." },
        { es: "¿Cómo se hacen las arepas?", de: "Wie macht man Arepas?", en: "How do you make arepas?" }
      ],
      tips: [
        { es: "En las recetas usamos «se»: se mezcla la harina, se hierven los plátanos. Es como «man» en alemán.", de: "In Rezepten benutzt man „se“: se mezcla la harina = man verrührt das Mehl, se hierven los plátanos = man kocht die Kochbananen. Genau wie „man“ auf Deutsch!", en: "In recipes we use “se”: se mezcla la harina = you mix the flour, se hierven los plátanos = you boil the plantains. It's like the general “you” in English." },
        { es: "Para dar órdenes: mezcla, añade, pela. Para decir que no, la vocal cambia: no mezcles, no añadas, no toques.", de: "Befehle: mezcla (misch!), añade (gib dazu!), pela (schäl!). Mit „no“ tauscht der Vokal: no mezcles, no añadas, no toques (fass nicht an!).", en: "Giving orders: mezcla (mix!), añade (add!), pela (peel!). With “no”, the vowel swaps: no mezcles, no añadas, no toques (don't touch!)." }
      ],
      note: { es: "En la República Dominicana, el mangú con salami frito, queso frito y huevo frito se llama «los tres golpes». ¡Es un desayuno muy típico!", de: "In der Dominikanischen Republik heißt Mangú mit gebratener Salami, gebratenem Käse und Spiegelei „los tres golpes“, also „die drei Schläge“. Ein ganz typisches Frühstück!", en: "In the Dominican Republic, mangú with fried salami, fried cheese and a fried egg is called “los tres golpes”, “the three hits”. It's a very typical breakfast!" },
      slang: ["La ñapa", "Un chin", "¡Qué rico!", "¡Ándale!"]
    },

    /* ---------- 6. Viaje al espacio: pretérito perfecto ---------- */
    {
      id: "b1-espacio", level: "B1", title: "Viaje al espacio",
      de: "Reise ins Weltall", en: "Journey into space",
      pic: "🚀", sticker: "🪐", color: "sea",
      words: [
        { es: "el cohete", de: "die Rakete", en: "rocket", pic: "🚀" },
        { es: "la astronauta", de: "die Astronautin", en: "astronaut", pic: "👩‍🚀" },
        { es: "la nave espacial", de: "das Raumschiff", en: "spaceship", pic: "🛸" },
        { es: "el satélite", de: "der Satellit", en: "satellite", pic: "🛰️" },
        { es: "el telescopio", de: "das Teleskop", en: "telescope", pic: "🔭" },
        { es: "el sistema solar", de: "das Sonnensystem", en: "solar system", pic: "🌞" },
        { es: "la galaxia", de: "die Galaxie", en: "galaxy", pic: "🌌" },
        { es: "el cometa", de: "der Komet", en: "comet", pic: "☄️" },
        { es: "la estrella fugaz", de: "die Sternschnuppe", en: "shooting star", pic: "🌠" },
        { es: "el extraterrestre", de: "der Außerirdische", en: "alien", pic: "👽" },
        { es: "despegar", de: "abheben / starten", en: "to take off", pic: "🛫" },
        { es: "aterrizar", de: "landen", en: "to land", pic: "🛬" }
      ],
      story: [
        { who: "mia", es: "¡Esta noche se van a ver muchas estrellas fugaces! ¿Alguna vez han visto una?", de: "Heute Nacht kann man ganz viele Sternschnuppen sehen! Habt ihr schon mal eine gesehen?", en: "Tonight you'll be able to see lots of shooting stars! Have you ever seen one?", pic: "🌠" },
        { who: "alex", es: "Yo nunca he visto ninguna. ¡Hoy será la primera vez!", de: "Ich habe noch nie eine gesehen. Heute ist das erste Mal!", en: "I've never seen one. Tonight will be the first time!", pic: "🔭" },
        { who: "valen", es: "Yo vi muchas en la Patagonia. Allá el cielo es re oscuro y se ve muy bien nuestra galaxia, la Vía Láctea.", de: "Ich habe in Patagonien ganz viele gesehen. Da ist der Himmel total dunkel, und man sieht unsere Galaxie, die Milchstraße, richtig gut.", en: "I saw loads in Patagonia. The sky there is super dark and you can see our galaxy, the Milky Way, really well.", pic: "🌌" },
        { who: "coco", es: "¡Y yo he visto un extraterrestre! Una luz que cruzaba el cielo muy rápido.", de: "Und ich habe einen Außerirdischen gesehen! Ein Licht, das ganz schnell über den Himmel flog.", en: "And I've seen an alien! A light that was zooming across the sky.", pic: "👽" },
        { who: "mia", es: "¿De verdad, Coco? ¿Dónde lo has visto?", de: "Echt, Coco? Wo hast du ihn gesehen?", en: "Really, Coco? Where have you seen it?", pic: "🤨" },
        { who: "coco", es: "Aquí mismo. Esta semana lo he visto tres veces, ¡y siempre a la misma hora!", de: "Genau hier. Diese Woche habe ich ihn dreimal gesehen, und immer zur selben Uhrzeit!", en: "Right here. I've seen it three times this week, and always at the same time!", pic: "🕘" },
        { who: "alex", es: "¡Mirad por el telescopio! No es un extraterrestre… ¡es un satélite!", de: "Schaut durchs Teleskop! Das ist kein Außerirdischer … das ist ein Satellit!", en: "Look through the telescope! It's not an alien… it's a satellite!", pic: "🛰️" },
        { who: "valen", es: "Claro, los satélites dan vueltas alrededor de la Tierra y brillan con la luz del Sol.", de: "Klar, Satelliten kreisen um die Erde und leuchten im Licht der Sonne.", en: "Of course, satellites go round the Earth and shine in the sunlight.", pic: "🌍☀️" },
        { who: "mia", es: "¡Miren, miren! ¡Una estrella fugaz! ¡Pidan un deseo!", de: "Schaut, schaut! Eine Sternschnuppe! Wünscht euch was!", en: "Look, look! A shooting star! Make a wish!", pic: "🌠✨" },
        { who: "alex", es: "¡La he visto! ¡He visto mi primera estrella fugaz!", de: "Ich hab sie gesehen! Ich habe meine erste Sternschnuppe gesehen!", en: "I saw it! I've seen my first shooting star!", pic: "🤩" },
        { who: "coco", es: "Yo he pedido un deseo: despegar en un cohete y aterrizar en Marte.", de: "Ich habe mir etwas gewünscht: mit einer Rakete abheben und auf dem Mars landen.", en: "I've made a wish: to take off in a rocket and land on Mars.", pic: "🚀🔴" },
        { who: "valen", es: "¿En Marte? Es el cuarto planeta del sistema solar, ¡y allá hace un frío tremendo!", de: "Auf dem Mars? Das ist der vierte Planet im Sonnensystem, und da ist es eiskalt!", en: "On Mars? It's the fourth planet in the solar system, and it's freezing cold there!", pic: "🥶" },
        { who: "coco", es: "Bueno… entonces viajaré en una nave espacial con calefacción y muchos guineos.", de: "Na gut … dann reise ich in einem Raumschiff mit Heizung und ganz vielen Bananen.", en: "OK… then I'll travel in a spaceship with heating and lots of bananas.", pic: "🛸🍌" },
        { who: "mia", es: "¡Qué padre! Y nosotros seremos tus astronautas.", de: "Wie cool! Und wir werden deine Astronauten sein.", en: "So cool! And we'll be your astronauts.", pic: "👩‍🚀" }
      ],
      questions: [
        { q: "¿Quién no ha visto nunca una estrella fugaz?", de: "Wer hat noch nie eine Sternschnuppe gesehen?", en: "Who has never seen a shooting star?", opts: ["Valen", "Álex", "Coco"], a: 1 },
        { q: "¿Qué era en realidad la luz que vio Coco?", de: "Was war das Licht, das Coco gesehen hat, wirklich?", en: "What was the light Coco saw really?", opts: ["un satélite", "un extraterrestre", "un cometa"], a: 0 },
        { q: "¿Qué deseo ha pedido Coco?", de: "Was hat sich Coco gewünscht?", en: "What wish has Coco made?", opts: ["ver un extraterrestre", "comer mangú en la Luna", "viajar a Marte en un cohete"], a: 2 }
      ],
      phrases: [
        { es: "¿Alguna vez has visto una estrella fugaz?", de: "Hast du schon mal eine Sternschnuppe gesehen?", en: "Have you ever seen a shooting star?" },
        { es: "Nunca he subido a un cohete.", de: "Ich war noch nie in einer Rakete.", en: "I've never been in a rocket." },
        { es: "Hoy he aprendido muchas cosas.", de: "Heute habe ich viel gelernt.", en: "I've learnt a lot today." },
        { es: "Todavía no he ido al planetario.", de: "Ich war noch nicht im Planetarium.", en: "I haven't been to the planetarium yet." }
      ],
      tips: [
        { es: "El pretérito perfecto: he, has, ha, hemos, habéis, han + participio. Hablar → he hablado, comer → he comido, vivir → he vivido.", de: "Das Pretérito perfecto: he, has, ha, hemos, habéis, han + Partizip. Fast wie „ich habe gesprochen“: hablar → he hablado, comer → he comido.", en: "The present perfect: he, has, ha, hemos, habéis, han + participle. hablar → he hablado (I have spoken), comer → he comido (I have eaten)." },
        { es: "En España se usa mucho: «hoy he visto un satélite». En gran parte de Latinoamérica se dice más: «hoy vi un satélite». ¡Las dos formas están bien!", de: "In Spanien sagt man oft: „hoy he visto un satélite“. In großen Teilen Lateinamerikas eher: „hoy vi un satélite“. Beides ist richtig!", en: "In Spain people often say “hoy he visto un satélite”. In much of Latin America they'd rather say “hoy vi un satélite”. Both are correct!" }
      ],
      note: { es: "El cometa viaja por el espacio, pero la cometa vuela en el parque. En México la cometa se llama «papalote»; en la República Dominicana, «chichigua», y en Argentina, «barrilete».", de: "Der Komet (el cometa) fliegt durchs Weltall, aber der Drachen (la cometa) fliegt im Park! In Mexiko heißt der Drachen „papalote“, in der Dominikanischen Republik „chichigua“ und in Argentinien „barrilete“.", en: "A comet (el cometa) travels through space, but a kite (la cometa) flies in the park! In Mexico a kite is called a “papalote”, in the Dominican Republic a “chichigua” and in Argentina a “barrilete”." },
      slang: ["¡Qué nota!", "¡Me flipa!", "¡Bacán!", "Re"]
    },

    /* ---------- 7. Cuando vivían los dinosaurios: relativos que / donde ---------- */
    {
      id: "b1-dinos", level: "B1", title: "Cuando vivían los dinosaurios",
      de: "Als die Dinosaurier lebten", en: "When the dinosaurs lived",
      pic: "🦕", sticker: "🦖", color: "sun",
      words: [
        { es: "el dinosaurio", de: "der Dinosaurier", en: "dinosaur", pic: "🦕" },
        { es: "el tiranosaurio", de: "der Tyrannosaurus", en: "Tyrannosaurus rex", pic: "🦖" },
        { es: "el fósil", de: "das Fossil", en: "fossil", pic: "🐚" },
        { es: "el hueso", de: "der Knochen", en: "bone", pic: "🦴" },
        { es: "el esqueleto", de: "das Skelett", en: "skeleton", pic: "🩻" },
        { es: "la paleontóloga", de: "die Paläontologin", en: "palaeontologist", pic: "👩‍🔬" },
        { es: "excavar", de: "ausgraben", en: "to dig", pic: "⛏️" },
        { es: "el carnívoro", de: "der Fleischfresser", en: "meat-eater", pic: "🥩" },
        { es: "el herbívoro", de: "der Pflanzenfresser", en: "plant-eater", pic: "🌿" },
        { es: "el meteorito", de: "der Meteorit", en: "meteorite", pic: "☄️" },
        { es: "extinguirse", de: "aussterben", en: "to die out", pic: "🦤" },
        { es: "hace millones de años", de: "vor Millionen von Jahren", en: "millions of years ago", pic: "⏳" }
      ],
      story: [
        { who: "valen", es: "¡Bienvenidos al museo de mi ciudad! Acá está el esqueleto del dinosaurio más grande que conozco.", de: "Willkommen im Museum meiner Stadt! Hier steht das Skelett des größten Dinosauriers, den ich kenne.", en: "Welcome to my city's museum! Here's the skeleton of the biggest dinosaur I know.", pic: "🏛️🦕" },
        { who: "alex", es: "¡Hala! ¡Es más largo que tres autobuses! ¿Dónde lo encontraron?", de: "Wow! Der ist länger als drei Busse! Wo hat man ihn gefunden?", en: "Wow! It's longer than three buses! Where did they find it?", pic: "😮🚌" },
        { who: "valen", es: "En la Patagonia, una región donde se encontraron algunos de los dinosaurios más grandes del mundo.", de: "In Patagonien, einer Gegend, wo man einige der größten Dinosaurier der Welt gefunden hat.", en: "In Patagonia, a region where some of the biggest dinosaurs in the world were found.", pic: "🗺️" },
        { who: "mia", es: "La paleontóloga que nos guía dice que vivió hace millones de años.", de: "Die Paläontologin, die uns herumführt, sagt, dass er vor Millionen von Jahren gelebt hat.", en: "The palaeontologist who's showing us round says it lived millions of years ago.", pic: "👩‍🔬⏳" },
        { who: "coco", es: "¿Y era carnívoro, como el tiranosaurio? ¿Comía loros?", de: "Und war er ein Fleischfresser, wie der Tyrannosaurus? Hat er Papageien gefressen?", en: "And was it a meat-eater, like T. rex? Did it eat parrots?", pic: "🦜😬" },
        { who: "mia", es: "Tranquilo, Coco. Era herbívoro: comía las hojas de los árboles más altos.", de: "Keine Sorge, Coco. Er war ein Pflanzenfresser: Er fraß die Blätter von den höchsten Bäumen.", en: "Don't worry, Coco. It was a plant-eater: it ate the leaves from the tallest trees.", pic: "🌿🌳" },
        { who: "alex", es: "Y los dinosaurios se extinguieron cuando cayó un meteorito enorme, ¿verdad?", de: "Und die Dinosaurier sind ausgestorben, als ein riesiger Meteorit eingeschlagen ist, oder?", en: "And the dinosaurs died out when a huge meteorite crashed into the Earth, right?", pic: "☄️" },
        { who: "mia", es: "¡Sí! Y cayó en México, en un lugar que se llama Chicxulub.", de: "Ja! Und er ist in Mexiko eingeschlagen, an einem Ort, der Chicxulub heißt.", en: "Yes! And it landed in Mexico, in a place called Chicxulub.", pic: "🇲🇽" },
        { who: "valen", es: "Ahora vamos a la sala donde se puede excavar. ¡Hoy somos paleontólogos!", de: "Jetzt gehen wir in den Raum, wo man graben darf. Heute sind wir Paläontologen!", en: "Now let's go to the room where you can dig. Today we're palaeontologists!", pic: "⛏️" },
        { who: "coco", es: "¡Encontré un hueso! Es el fósil de un dinosaurio nuevo. ¡Lo llamaré Cocosaurio!", de: "Ich habe einen Knochen gefunden! Das ist das Fossil von einem neuen Dinosaurier. Ich nenne ihn Cocosaurus!", en: "I found a bone! It's the fossil of a new dinosaur. I'll call it Cocosaurus!", pic: "🦴🤩" },
        { who: "valen", es: "Che, Coco… ese hueso es de pollo. ¡Alguien se olvidó el almuerzo!", de: "Hey, Coco … der Knochen ist von einem Hähnchen. Da hat jemand sein Mittagessen vergessen!", en: "Hey, Coco… that bone is from a chicken. Someone forgot their lunch!", pic: "🍗😂" },
        { who: "mia", es: "Pero, ¿saben qué? La paleontóloga dice que los pájaros son parientes de los dinosaurios.", de: "Aber wisst ihr was? Die Paläontologin sagt, dass Vögel mit den Dinosauriern verwandt sind.", en: "But guess what? The palaeontologist says that birds are related to dinosaurs.", pic: "🐦🦖" },
        { who: "coco", es: "¿Los pájaros? ¿Entonces yo soy un dinosaurio? ¡Tá jevi! ¡Grrr!", de: "Vögel? Dann bin ich ja ein Dinosaurier? Voll cool! Grrr!", en: "Birds? So I'm a dinosaur? Awesome! Grrr!", pic: "🦜🦖" },
        { who: "alex", es: "¡El dinosaurio más pequeño y más hablador del mundo!", de: "Der kleinste und gesprächigste Dinosaurier der Welt!", en: "The smallest and chattiest dinosaur in the world!", pic: "😂" }
      ],
      questions: [
        { q: "¿Qué comía el dinosaurio gigante del museo?", de: "Was hat der Riesendinosaurier aus dem Museum gefressen?", en: "What did the giant dinosaur in the museum eat?", opts: ["loros", "hojas de los árboles", "pescado"], a: 1 },
        { q: "¿Dónde cayó el meteorito?", de: "Wo ist der Meteorit eingeschlagen?", en: "Where did the meteorite land?", opts: ["en la Patagonia", "en España", "en México"], a: 2 },
        { q: "¿Qué encuentra Coco en la sala?", de: "Was findet Coco im Raum?", en: "What does Coco find in the room?", opts: ["un hueso de pollo", "un huevo de dinosaurio", "un diente de tiranosaurio"], a: 0 }
      ],
      phrases: [
        { es: "Es el lugar donde encontraron los fósiles.", de: "Das ist der Ort, wo man die Fossilien gefunden hat.", en: "That's the place where they found the fossils." },
        { es: "El dinosaurio que más me gusta es el tiranosaurio.", de: "Der Dinosaurier, den ich am liebsten mag, ist der Tyrannosaurus.", en: "The dinosaur I like best is T. rex." },
        { es: "Vivió hace millones de años.", de: "Er lebte vor Millionen von Jahren.", en: "It lived millions of years ago." },
        { es: "¿Sabías que los pájaros son parientes de los dinosaurios?", de: "Wusstest du, dass Vögel mit den Dinosauriern verwandt sind?", en: "Did you know that birds are related to dinosaurs?" }
      ],
      tips: [
        { es: "«Que» une dos frases: Es un dinosaurio. Comía hojas. → Es un dinosaurio que comía hojas.", de: "„Que“ verbindet zwei Sätze, wie der, die, das: Es un dinosaurio que comía hojas = Das ist ein Dinosaurier, der Blätter fraß.", en: "“Que” joins two sentences, like who / which / that: Es un dinosaurio que comía hojas = It's a dinosaur that ate leaves." },
        { es: "«Donde» es para lugares: la Patagonia es el lugar donde vivía.", de: "„Donde“ ist für Orte, wie „wo“: la Patagonia es el lugar donde vivía = Patagonien ist der Ort, wo er lebte.", en: "“Donde” is for places, like “where”: la Patagonia es el lugar donde vivía = Patagonia is the place where it lived." }
      ],
      note: { es: "El meteorito de Chicxulub cayó hace unos 66 millones de años en la península de Yucatán, en México. Dejó un cráter de unos 180 kilómetros.", de: "Der Meteorit von Chicxulub schlug vor etwa 66 Millionen Jahren auf der Halbinsel Yucatán in Mexiko ein. Er hinterließ einen Krater von etwa 180 Kilometern.", en: "The Chicxulub meteorite hit the Yucatán Peninsula in Mexico about 66 million years ago. It left a crater about 180 kilometres wide." },
      slang: ["Che", "¡Qué chulo!", "¿Cachai?", "¡Bárbaro!"]
    },

    /* ---------- 8. La obra de teatro: ojalá + subjuntivo ---------- */
    {
      id: "b1-teatro", level: "B1", title: "La obra de teatro",
      de: "Das Theaterstück", en: "The school play",
      pic: "🎭", sticker: "💐", color: "hib",
      words: [
        { es: "la obra de teatro", de: "das Theaterstück", en: "play", pic: "🎭" },
        { es: "el personaje", de: "die Figur / die Rolle", en: "character / role", pic: "🤴" },
        { es: "el disfraz", de: "das Kostüm / die Verkleidung", en: "costume", pic: "🥸" },
        { es: "el guion", de: "das Drehbuch / der Text", en: "script", pic: "📜" },
        { es: "el estreno", de: "die Premiere", en: "opening night", pic: "🎟️" },
        { es: "el público", de: "das Publikum", en: "audience", pic: "👥" },
        { es: "el aplauso", de: "der Applaus", en: "applause", pic: "👏" },
        { es: "los nervios", de: "das Lampenfieber / die Nervosität", en: "nerves", pic: "😰" },
        { es: "dar vergüenza", de: "peinlich sein", en: "to feel embarrassed", pic: "😳", vary: { mx: "dar pena", co: "dar pena" } },
        { es: "equivocarse", de: "sich vertun / einen Fehler machen", en: "to make a mistake", pic: "❌" },
        { es: "respirar hondo", de: "tief durchatmen", en: "to take a deep breath", pic: "🌬️" },
        { es: "ojalá", de: "hoffentlich", en: "hopefully / I hope", pic: "🤞" }
      ],
      story: [
        { who: "valen", es: "¡Hoy es el estreno de nuestra obra de teatro! ¿Están todos listos?", de: "Heute ist die Premiere von unserem Theaterstück! Seid ihr alle bereit?", en: "Today is the opening night of our play! Is everyone ready?", pic: "🎭" },
        { who: "mia", es: "¡Ya tengo el disfraz de mi personaje, la reina! Ojalá que le guste al público.", de: "Ich habe schon das Kostüm für meine Rolle, die Königin! Hoffentlich gefällt es dem Publikum.", en: "I've already got the costume for my character, the queen! I hope the audience likes it.", pic: "👑" },
        { who: "alex", es: "Pues yo estoy como un flan. ¡Me tiemblan las piernas!", de: "Also ich bin wie ein Wackelpudding. Mir zittern die Knie!", en: "Well, I'm like a jelly. My legs are shaking!", pic: "😰" },
        { who: "coco", es: "¿Como un flan? ¿Tú eres un postre?", de: "Wie ein Wackelpudding? Bist du etwa ein Nachtisch?", en: "Like a jelly? Are you a dessert?", pic: "🍮🤔" },
        { who: "alex", es: "Que no, Coco. En España decimos «estar como un flan» cuando tienes muchos nervios.", de: "Nein, Coco. In Spanien sagt man „estar como un flan“, wenn man total nervös ist.", en: "No, Coco. In Spain we say “estar como un flan” when you're really nervous.", pic: "🇪🇸🍮" },
        { who: "alex", es: "Me da vergüenza equivocarme delante de tanta gente. ¡Ojalá que no se me olvide nada!", de: "Es ist mir peinlich, mich vor so vielen Leuten zu vertun. Hoffentlich vergesse ich nichts!", en: "I'd be so embarrassed to make a mistake in front of all those people. I hope I don't forget anything!", pic: "👥" },
        { who: "valen", es: "Tranqui. Respirá hondo, contá hasta cinco y pensá en algo lindo.", de: "Ganz ruhig. Atme tief durch, zähl bis fünf und denk an etwas Schönes.", en: "Relax. Take a deep breath, count to five and think of something nice.", pic: "🌬️" },
        { who: "mia", es: "¡Échale ganas, Álex! Te sabes todo el guion de memoria.", de: "Gib alles, Álex! Du kannst den ganzen Text auswendig.", en: "Give it your all, Álex! You know the whole script by heart.", pic: "💪📜" },
        { who: "coco", es: "Y yo me esconderé detrás del telón. Si te olvidas de algo, te lo digo bajito.", de: "Und ich verstecke mich hinter dem Vorhang. Wenn du etwas vergisst, flüstere ich es dir zu.", en: "And I'll hide behind the curtain. If you forget something, I'll whisper it to you.", pic: "🦜🤫" },
        { who: "alex", es: "«Soy el rey de esta isla y…». Eh… ¿y qué venía después?", de: "„Ich bin der König dieser Insel und …“ Äh … wie ging es weiter?", en: "“I am the king of this island and…” Er… what came next?", pic: "🤴😳" },
        { who: "coco", es: "«¡Y en mi isla todos comen mangú!». Ups… lo dije demasiado alto.", de: "„Und auf meiner Insel essen alle Mangú!“ Ups … das war viel zu laut.", en: "“And on my island everyone eats mangú!” Oops… I said that way too loud.", pic: "🦜📢" },
        { who: "valen", es: "¡Coco, eso no está en el guion! Pero mirá… ¡el público se ríe!", de: "Coco, das steht nicht im Text! Aber schau … das Publikum lacht!", en: "Coco, that's not in the script! But look… the audience is laughing!", pic: "😂" },
        { who: "mia", es: "¡Qué padre! ¡Escuchen ese aplauso! ¡Es un éxito!", de: "Wie toll! Hört euch diesen Applaus an! Das ist ein Riesenerfolg!", en: "Awesome! Listen to that applause! It's a hit!", pic: "👏" },
        { who: "alex", es: "¡Ojalá que hagamos otra obra pronto! Pero la próxima vez, Coco será el rey.", de: "Hoffentlich spielen wir bald wieder ein Stück! Aber nächstes Mal ist Coco der König.", en: "I hope we do another play soon! But next time, Coco will be the king.", pic: "🦜👑" }
      ],
      questions: [
        { q: "¿Qué significa «estar como un flan»?", de: "Was bedeutet „estar como un flan“?", en: "What does “estar como un flan” mean?", opts: ["tener mucha hambre", "estar muy nervioso", "estar muy contento"], a: 1 },
        { q: "¿Qué le aconseja Valen a Álex?", de: "Was rät Valen Álex?", en: "What does Valen advise Álex to do?", opts: ["Que respire hondo y cuente hasta cinco.", "Que se vaya a casa.", "Que coma un flan."], a: 0 },
        { q: "¿Qué pasa cuando Coco dice algo que no está en el guion?", de: "Was passiert, als Coco etwas sagt, das nicht im Text steht?", en: "What happens when Coco says something that isn't in the script?", opts: ["El público se va.", "Álex se pone a llorar.", "El público se ríe."], a: 2 }
      ],
      phrases: [
        { es: "¡Ojalá que salga bien!", de: "Hoffentlich klappt es!", en: "I hope it goes well!" },
        { es: "Me da vergüenza hablar delante de mucha gente.", de: "Es ist mir peinlich, vor vielen Leuten zu sprechen.", en: "I get embarrassed speaking in front of lots of people." },
        { es: "Me sé el texto de memoria.", de: "Ich kann den Text auswendig.", en: "I know my lines by heart." },
        { es: "¡Mucha suerte en el estreno!", de: "Viel Glück bei der Premiere!", en: "Good luck on opening night!" }
      ],
      tips: [
        { es: "Ojalá + subjuntivo sirve para desear algo: ojalá que llueva, ojalá que ganemos, ojalá que no me equivoque.", de: "Ojalá + Subjuntivo bedeutet „hoffentlich“: ojalá que llueva (hoffentlich regnet es), ojalá que ganemos (hoffentlich gewinnen wir).", en: "Ojalá + subjunctive means “I hope”: ojalá que llueva (I hope it rains), ojalá que ganemos (I hope we win)." },
        { es: "«Me da vergüenza» funciona como «me gusta»: me da vergüenza, te da vergüenza, le da vergüenza.", de: "„Me da vergüenza“ funktioniert wie „me gusta“: me da vergüenza (es ist mir peinlich), te da vergüenza (es ist dir peinlich), le da vergüenza (es ist ihm oder ihr peinlich).", en: "“Me da vergüenza” works like “me gusta”: me da vergüenza (I'm embarrassed), te da vergüenza (you're embarrassed), le da vergüenza (he or she is embarrassed)." }
      ],
      note: { es: "La palabra «ojalá» viene del árabe y significaba algo como «si Dios quiere». ¡El español tiene miles de palabras de origen árabe, como «almohada», «azúcar» o «aceite»!", de: "Das Wort „ojalá“ kommt aus dem Arabischen und bedeutete ungefähr „so Gott will“. Im Spanischen gibt es Tausende Wörter arabischer Herkunft, zum Beispiel „almohada“ (Kissen), „azúcar“ (Zucker) oder „aceite“ (Öl)!", en: "The word “ojalá” comes from Arabic and meant something like “God willing”. Spanish has thousands of words from Arabic, such as “almohada” (pillow), “azúcar” (sugar) and “aceite” (oil)!" },
      slang: ["Estar como un flan", "¡Échale ganas!", "¡Wepa!", "¡Ay, bendito!"]
    },

    /* ---------- 9. Pantallas y redes: creo que / no creo que + subjuntivo ---------- */
    {
      id: "b1-pantallas", level: "B1", title: "Pantallas y redes",
      de: "Bildschirme und soziale Netzwerke", en: "Screens and social media",
      pic: "📱", sticker: "🔐", color: "sea",
      words: [
        { es: "la pantalla", de: "der Bildschirm", en: "screen", pic: "🖥️" },
        { es: "las redes sociales", de: "die sozialen Netzwerke", en: "social media", pic: "🌐" },
        { es: "la aplicación", de: "die App", en: "app", pic: "📲" },
        { es: "descargar", de: "herunterladen", en: "to download", pic: "⬇️", vary: { mx: "bajar", ar: "bajar" } },
        { es: "subir una foto", de: "ein Foto hochladen", en: "to post a photo", pic: "📸" },
        { es: "la contraseña", de: "das Passwort", en: "password", pic: "🔑" },
        { es: "la privacidad", de: "die Privatsphäre", en: "privacy", pic: "🔒" },
        { es: "los datos personales", de: "die persönlichen Daten", en: "personal details", pic: "🪪" },
        { es: "bloquear", de: "blockieren", en: "to block", pic: "🚫" },
        { es: "la noticia falsa", de: "die Falschmeldung", en: "fake news", pic: "🤥" },
        { es: "el tiempo de pantalla", de: "die Bildschirmzeit", en: "screen time", pic: "⏱️" },
        { es: "desconectar", de: "abschalten / offline gehen", en: "to switch off / to unplug", pic: "🔌" }
      ],
      story: [
        { who: "coco", es: "¡Tengo una idea genial! Voy a abrir un canal de videos: «Los chistes de Coco».", de: "Ich habe eine geniale Idee! Ich mache einen Videokanal auf: „Cocos Witze“.", en: "I've got a brilliant idea! I'm going to start a video channel: “Coco's Jokes”.", pic: "🦜📹" },
        { who: "mia", es: "Mmm… no creo que sea buena idea. Casi todas las redes sociales son para mayores de trece años.", de: "Hmm … ich glaube nicht, dass das eine gute Idee ist. Fast alle sozialen Netzwerke sind erst ab dreizehn.", en: "Hmm… I don't think that's a good idea. Almost all social media is for over-thirteens.", pic: "🤔" },
        { who: "coco", es: "Ah… ¿Y si lo hago con la ayuda de un adulto?", de: "Ach so … Und wenn ich es mit der Hilfe eines Erwachsenen mache?", en: "Oh… And what if I do it with an adult's help?", pic: "🦜🧑" },
        { who: "valen", es: "Eso sí. Pero igual tenés que tener cuidado: nunca subas datos personales, como tu dirección o el nombre de tu escuela.", de: "Das geht. Aber du musst trotzdem aufpassen: Lade nie persönliche Daten hoch, wie deine Adresse oder den Namen deiner Schule.", en: "That's OK. But you still have to be careful: never post personal details, like your address or the name of your school.", pic: "🪪🚫" },
        { who: "alex", es: "Y no le digas tu contraseña a nadie, ¿vale? Si alguien te molesta, lo bloqueas y se lo cuentas a un adulto.", de: "Und verrate niemandem dein Passwort, okay? Wenn dich jemand ärgert, blockierst du ihn und erzählst es einem Erwachsenen.", en: "And don't tell anyone your password, OK? If someone bothers you, block them and tell an adult.", pic: "🔑" },
        { who: "coco", es: "¡Entendido! Oigan, miren este video: dice que mañana no habrá clases porque va a nevar en el Caribe.", de: "Verstanden! Hey, schaut euch dieses Video an: Da heißt es, dass morgen die Schule ausfällt, weil es in der Karibik schneien wird.", en: "Got it! Hey, look at this video: it says there's no school tomorrow because it's going to snow in the Caribbean.", pic: "📱❄️" },
        { who: "mia", es: "¿Nieve en el Caribe? ¡No creo que sea verdad! Es una noticia falsa.", de: "Schnee in der Karibik? Ich glaube nicht, dass das stimmt! Das ist eine Falschmeldung.", en: "Snow in the Caribbean? I don't think that's true! It's fake news.", pic: "🤥" },
        { who: "alex", es: "Yo creo que antes de compartir algo, hay que comprobar si es verdad.", de: "Ich finde, bevor man etwas teilt, muss man prüfen, ob es stimmt.", en: "I think that before you share something, you have to check whether it's true.", pic: "🔍" },
        { who: "valen", es: "Además, Coco, pasás demasiado tiempo frente a la pantalla. ¡Tenés los ojos rojos!", de: "Außerdem, Coco, verbringst du zu viel Zeit vor dem Bildschirm. Deine Augen sind ganz rot!", en: "Besides, Coco, you spend too much time in front of the screen. Your eyes are all red!", pic: "🖥️👀" },
        { who: "coco", es: "Bueno… es verdad. Ayer estuve cinco horas jugando y después no podía dormir.", de: "Na ja … das stimmt. Gestern habe ich fünf Stunden gespielt, und danach konnte ich nicht schlafen.", en: "Well… that's true. Yesterday I played for five hours and afterwards I couldn't sleep.", pic: "😵‍💫" },
        { who: "mia", es: "Mi mamá usa una aplicación para controlar el tiempo de pantalla. Dice que es mejor que desconectemos una hora antes de dormir.", de: "Meine Mama hat eine App, die die Bildschirmzeit kontrolliert. Sie sagt, es ist besser, wenn wir eine Stunde vor dem Schlafen abschalten.", en: "My mum uses an app to keep track of screen time. She says it's better if we switch off an hour before bedtime.", pic: "🔌🌙" },
        { who: "coco", es: "Tienen razón. ¡Entonces vamos a janguear al parque!", de: "Ihr habt recht. Dann lasst uns im Park abhängen!", en: "You're right. Then let's go and hang out at the park!", pic: "🌳⚽" },
        { who: "alex", es: "¡Guay! Y otro día haremos un video juntos… pero solo para nuestras familias.", de: "Cool! Und ein andermal drehen wir zusammen ein Video … aber nur für unsere Familien.", en: "Cool! And another day we'll make a video together… but just for our families.", pic: "🎥" },
        { who: "valen", es: "¡Dale! Así sí me parece bien.", de: "Abgemacht! So finde ich das gut.", en: "Deal! That sounds good to me.", pic: "👍" }
      ],
      questions: [
        { q: "¿Qué quiere hacer Coco al principio?", de: "Was will Coco am Anfang machen?", en: "What does Coco want to do at the beginning?", opts: ["comprar un celular nuevo", "abrir un canal de videos", "ver una película"], a: 1 },
        { q: "¿Por qué Mía no cree la noticia del video?", de: "Warum glaubt Mía die Nachricht aus dem Video nicht?", en: "Why doesn't Mía believe the news in the video?", opts: ["Porque en el Caribe no nieva.", "Porque el video es muy largo.", "Porque Coco no tiene celular."], a: 0 },
        { q: "¿Qué deciden hacer al final?", de: "Wofür entscheiden sie sich am Ende?", en: "What do they decide to do in the end?", opts: ["jugar videojuegos toda la noche", "subir fotos a las redes", "ir a jugar al parque"], a: 2 }
      ],
      phrases: [
        { es: "Creo que es una buena idea.", de: "Ich glaube, das ist eine gute Idee.", en: "I think it's a good idea." },
        { es: "No creo que sea verdad.", de: "Ich glaube nicht, dass das stimmt.", en: "I don't think it's true." },
        { es: "En mi opinión, deberíamos jugar más al aire libre.", de: "Meiner Meinung nach sollten wir mehr draußen spielen.", en: "In my opinion, we should play outside more." },
        { es: "Nunca compartas tu contraseña.", de: "Gib nie dein Passwort weiter.", en: "Never share your password." }
      ],
      tips: [
        { es: "Creo que + indicativo: creo que es verdad. No creo que + subjuntivo: no creo que sea verdad. ¡El «no» cambia el verbo!", de: "Creo que + Indikativ: creo que es verdad (ich glaube, es stimmt). No creo que + Subjuntivo: no creo que sea verdad (ich glaube nicht, dass es stimmt). Das „no“ verändert das Verb!", en: "Creo que + indicative: creo que es verdad (I think it's true). No creo que + subjunctive: no creo que sea verdad (I don't think it's true). The “no” changes the verb!" },
        { es: "Para dar tu opinión: creo que, pienso que, me parece que, en mi opinión.", de: "So sagst du deine Meinung: creo que (ich glaube), pienso que (ich denke), me parece que (ich finde), en mi opinión (meiner Meinung nach).", en: "To give your opinion: creo que (I believe), pienso que (I think), me parece que (it seems to me), en mi opinión (in my opinion)." }
      ],
      note: { es: "Muchas palabras de internet vienen del inglés: «chatear», «hacer clic», «el wifi». En Puerto Rico, de «hang out» salió «janguear».", de: "Viele Internetwörter kommen aus dem Englischen: „chatear“ (chatten), „hacer clic“ (klicken), „el wifi“ (WLAN). In Puerto Rico wurde aus „hang out“ sogar „janguear“ (abhängen).", en: "Lots of internet words come from English: “chatear” (to chat), “hacer clic” (to click), “el wifi”. In Puerto Rico, “hang out” even became “janguear”." },
      slang: ["Fome", "Janguear", "¡Dale!", "¿Qué onda?"]
    },

    /* ---------- 10. Viaje por Latinoamérica: cuando / para que + subjuntivo ---------- */
    {
      id: "b1-latinoamerica", level: "B1", title: "Viaje por Latinoamérica",
      de: "Reise durch Lateinamerika", en: "A trip around Latin America",
      pic: "🗺️", sticker: "🦙", color: "leaf",
      words: [
        { es: "la cordillera", de: "die Gebirgskette", en: "mountain range", pic: "🏔️" },
        { es: "la selva", de: "der Regenwald / der Dschungel", en: "rainforest / jungle", pic: "🌳" },
        { es: "el desierto", de: "die Wüste", en: "desert", pic: "🏜️" },
        { es: "el glaciar", de: "der Gletscher", en: "glacier", pic: "🧊" },
        { es: "la pirámide", de: "die Pyramide", en: "pyramid", pic: "🔺" },
        { es: "las ruinas", de: "die Ruinen", en: "ruins", pic: "🏛️" },
        { es: "el equipaje", de: "das Gepäck", en: "luggage", pic: "🧳" },
        { es: "la tradición", de: "die Tradition / der Brauch", en: "tradition", pic: "🪅" },
        { es: "el idioma indígena", de: "die indigene Sprache", en: "indigenous language", pic: "🗣️" },
        { es: "la llama", de: "das Lama", en: "llama", pic: "🦙" },
        { es: "el mate", de: "der Mate-Tee", en: "mate (herbal tea)", pic: "🧉" },
        { es: "el guacamayo", de: "der Ara", en: "macaw", pic: "🦜", vary: { mx: "la guacamaya", ve: "la guacamaya", co: "la guacamaya" } }
      ],
      story: [
        { who: "mia", es: "¡Este verano haremos un gran viaje por Latinoamérica! ¿Por dónde empezamos?", de: "Diesen Sommer machen wir eine große Reise durch Lateinamerika! Wo fangen wir an?", en: "This summer we're going on a big trip around Latin America! Where shall we start?", pic: "🗺️✈️" },
        { who: "mia", es: "Cuando lleguemos a México, los llevaré a Chichén Itzá, donde hay una pirámide maya enorme.", de: "Wenn wir in Mexiko ankommen, bringe ich euch nach Chichén Itzá, wo es eine riesige Maya-Pyramide gibt.", en: "When we get to Mexico, I'll take you to Chichén Itzá, where there's a huge Mayan pyramid.", pic: "🔺" },
        { who: "alex", es: "¡Qué guay! ¿Y después adónde iremos?", de: "Wie cool! Und wohin fahren wir danach?", en: "How cool! And where will we go after that?", pic: "🤩" },
        { who: "valen", es: "Cuando estemos en Perú, subiremos a Machu Picchu. Son unas ruinas incas en la cordillera de los Andes.", de: "Wenn wir in Peru sind, steigen wir nach Machu Picchu hinauf. Das sind Ruinen der Inka in den Anden.", en: "When we're in Peru, we'll go up to Machu Picchu. They're Inca ruins in the Andes mountains.", pic: "🏔️🏛️" },
        { who: "mia", es: "Allí veremos llamas. Pero cuidado: ¡a veces escupen!", de: "Dort sehen wir Lamas. Aber Vorsicht: Manchmal spucken sie!", en: "We'll see llamas there. But watch out: sometimes they spit!", pic: "🦙💦" },
        { who: "alex", es: "En Perú mucha gente habla quechua, un idioma indígena muy antiguo.", de: "In Peru sprechen viele Leute Quechua, eine sehr alte indigene Sprache.", en: "In Peru lots of people speak Quechua, a very old indigenous language.", pic: "🗣️" },
        { who: "valen", es: "Y cuando lleguemos a la Patagonia, veremos un glaciar gigante y tomaremos mate con mi abuela.", de: "Und wenn wir in Patagonien ankommen, sehen wir einen riesigen Gletscher und trinken Mate mit meiner Oma.", en: "And when we get to Patagonia, we'll see a giant glacier and drink mate with my grandma.", pic: "🧊🧉" },
        { who: "valen", es: "Tomar mate es una tradición argentina: se comparte con la familia y con los amigos.", de: "Mate trinken ist eine argentinische Tradition: Man teilt ihn mit der Familie und mit Freunden.", en: "Drinking mate is an Argentinian tradition: you share it with family and friends.", pic: "🧉" },
        { who: "coco", es: "Yo quiero ir a la selva del Amazonas para que mis primos los guacamayos me conozcan.", de: "Ich will in den Amazonas-Regenwald, damit meine Cousins, die Aras, mich kennenlernen.", en: "I want to go to the Amazon rainforest so that my cousins the macaws can meet me.", pic: "🌳🦜" },
        { who: "mia", es: "¡Uy, Coco! ¿Qué llevas en ese equipaje tan pesado?", de: "Oh, Coco! Was hast du denn in deinem schweren Gepäck?", en: "Whoa, Coco! What have you got in that heavy luggage?", pic: "🧳" },
        { who: "coco", es: "Guineos, mangú y un ventilador, para que no tengamos calor en el desierto de Atacama.", de: "Bananen, Mangú und einen Ventilator, damit uns in der Atacama-Wüste nicht zu heiß wird.", en: "Bananas, mangú and a fan, so that we don't get too hot in the Atacama Desert.", pic: "🍌🏜️" },
        { who: "alex", es: "Coco, con esa maleta no vas a poder volar, ¡ni en avión ni con tus alas!", de: "Coco, mit dem Koffer kannst du nicht fliegen, weder mit dem Flugzeug noch mit deinen Flügeln!", en: "Coco, with that suitcase you won't be able to fly, not by plane or with your wings!", pic: "✈️🪽" },
        { who: "valen", es: "Llevá solo lo necesario. Y cuando tengas hambre, probá la comida de cada país.", de: "Nimm nur das Nötigste mit. Und wenn du Hunger hast, probier das Essen aus jedem Land.", en: "Only take what you need. And when you get hungry, try the food in each country.", pic: "🍽️" },
        { who: "coco", es: "¡Buena idea! Y cuando volvamos, les haré mangú a todos. ¡Qué viaje tan chévere!", de: "Gute Idee! Und wenn wir zurückkommen, mache ich euch allen Mangú. Was für eine tolle Reise!", en: "Good idea! And when we get back, I'll make mangú for everyone. What an awesome trip!", pic: "🦜🍽️" }
      ],
      questions: [
        { q: "¿Qué hay en Chichén Itzá?", de: "Was gibt es in Chichén Itzá?", en: "What is there at Chichén Itzá?", opts: ["un glaciar gigante", "una pirámide maya", "una selva enorme"], a: 1 },
        { q: "Según Álex, ¿qué idioma indígena se habla en Perú?", de: "Welche indigene Sprache spricht man laut Álex in Peru?", en: "According to Álex, what indigenous language is spoken in Peru?", opts: ["el guaraní", "el maya", "el quechua"], a: 2 },
        { q: "¿Para qué lleva Coco un ventilador?", de: "Wozu nimmt Coco einen Ventilator mit?", en: "Why is Coco taking a fan?", opts: ["Para que no tengan calor en el desierto.", "Para volar más rápido.", "Para enfriar el mangú."], a: 0 }
      ],
      phrases: [
        { es: "Cuando lleguemos, te llamaré.", de: "Wenn wir ankommen, rufe ich dich an.", en: "When we arrive, I'll call you." },
        { es: "Cuando sea mayor, viajaré por todo el continente.", de: "Wenn ich groß bin, reise ich durch den ganzen Kontinent.", en: "When I grow up, I'll travel all over the continent." },
        { es: "Te doy mi gorra para que no te quemes.", de: "Ich gebe dir meine Kappe, damit du keinen Sonnenbrand bekommst.", en: "Here's my cap so you don't get sunburnt." },
        { es: "¿Qué me recomiendas visitar?", de: "Was empfiehlst du mir anzuschauen?", en: "What do you recommend I visit?" }
      ],
      tips: [
        { es: "Cuando + subjuntivo habla del futuro: cuando llegue, te llamaré. Para cosas de siempre usamos el presente: cuando llego a casa, como.", de: "Cuando + Subjuntivo spricht über die Zukunft: cuando llegue, te llamaré (wenn ich ankomme, rufe ich dich an). Für Gewohnheiten nimmt man das Präsens: cuando llego a casa, como (immer wenn ich heimkomme, esse ich).", en: "Cuando + subjunctive talks about the future: cuando llegue, te llamaré (when I arrive, I'll call you). For habits we use the present: cuando llego a casa, como (whenever I get home, I eat)." },
        { es: "Para que + subjuntivo dice para qué hacemos algo: te lo explico para que lo entiendas.", de: "Para que + Subjuntivo nennt den Zweck, wie „damit“: te lo explico para que lo entiendas = ich erkläre es dir, damit du es verstehst.", en: "Para que + subjunctive gives the purpose, like “so that”: te lo explico para que lo entiendas = I'll explain it so that you understand." }
      ],
      note: { es: "En Paraguay hay dos idiomas oficiales: el español y el guaraní, un idioma indígena. ¡Muchísima gente habla los dos!", de: "In Paraguay gibt es zwei Amtssprachen: Spanisch und Guaraní, eine indigene Sprache. Sehr viele Menschen sprechen beide!", en: "Paraguay has two official languages: Spanish and Guaraní, an indigenous language. Lots of people speak both!" },
      slang: ["¡Qué chévere!", "Bacano", "Chamo / chama", "¡Qué volá!"]
    }
  );

  /* ---------- Gran Desafío B1 (inspirado en el DELE escolar A2/B1, parte B1) ---------- */
  ES.exams.B1 = {
    title: "Gran Desafío B1", de: "Große Herausforderung B1", en: "Big Challenge B1",
    escuchar: [
      { who: "narr", text: "Atención, visitantes del museo. El taller de fósiles para niños empezará a las once y media en la sala dos. Les recomendamos que lleguen diez minutos antes. ¡No olviden traer su entrada!", q: "¿Dónde será el taller de fósiles?", de: "Wo findet die Fossilien-Werkstatt statt?", en: "Where will the fossil workshop be?", opts: ["en la entrada del museo", "en la sala dos", "en la cafetería"], a: 1 },
      { who: "mia", text: "Hola, Álex, soy Mía. Mañana no podré ir al cine contigo porque tengo que cuidar a mi hermanito. ¿Qué te parece si vamos el sábado por la tarde? Llámame cuando puedas.", q: "¿Por qué no puede ir Mía al cine mañana?", de: "Warum kann Mía morgen nicht ins Kino gehen?", en: "Why can't Mía go to the cinema tomorrow?", opts: ["Porque tiene que cuidar a su hermanito.", "Porque está enferma.", "Porque no le gustan las películas."], a: 0 },
      { who: "valen", text: "Ayer fue un día re complicado. Perdí el colectivo, llegué tarde a la escuela y me olvidé la merienda en casa. Pero a la tarde mi abuela me hizo empanadas, así que terminó muy bien.", q: "¿Cómo terminó el día de Valen?", de: "Wie ging Valens Tag zu Ende?", en: "How did Valen's day end?", opts: ["Perdió el colectivo otra vez.", "Llegó tarde a casa de su abuela.", "Comió las empanadas de su abuela."], a: 2 },
      { who: "alex", text: "Os cuento mi plan para el verano. Cuando terminen las clases, iré con mis padres a Galicia, en el norte de España. Allí visitaremos la Torre de Hércules y nos bañaremos en el mar. ¡Ojalá que haga buen tiempo!", q: "¿Qué hará Álex cuando terminen las clases?", de: "Was macht Álex, wenn die Schule aus ist?", en: "What will Álex do when school finishes?", opts: ["Irá a México con sus amigos.", "Viajará a Galicia con sus padres.", "Se quedará en casa jugando."], a: 1 },
      { who: "coco", text: "Les explico cómo se hace el jugo de chinola. Primero se corta la fruta por la mitad y se saca la pulpa con una cuchara. Después se mezcla con agua fría y un poquito de azúcar. ¡Pero no le pongas demasiada azúcar!", q: "¿Qué se hace primero?", de: "Was macht man zuerst?", en: "What do you do first?", opts: ["Se mezcla con agua fría.", "Se añade azúcar.", "Se corta la fruta por la mitad."], a: 2 },
      { who: "narr", text: "Buenos días a todos. Esta semana la escuela organiza una campaña de reciclaje. Traigan las botellas de plástico el martes y el papel el jueves. La clase que recicle más ganará una excursión al parque natural.", q: "¿Qué día hay que traer el papel?", de: "An welchem Tag soll man das Papier mitbringen?", en: "Which day should you bring the paper?", opts: ["el martes", "el jueves", "el viernes"], a: 1 }
    ],
    leer: [
      { text: "¡Hola, Lucas! ¿Cómo estás? Te escribo desde Santiago de Chile. Ya llevamos un mes aquí y me gusta mucho mi nueva escuela. Al principio estaba un poco nerviosa porque no conocía a nadie, pero ahora tengo dos amigas muy simpáticas, Antonia y Fernanda. Ellas me han enseñado palabras chilenas, como «al tiro», que significa «enseguida». Desde mi ventana se ve la cordillera de los Andes, ¡y en invierno tiene nieve! Cuando vengas a visitarme en julio, iremos a esquiar. ¡Ojalá que puedas venir! Escríbeme pronto. Un abrazo, Sofía.", q: "¿Cómo se sentía Sofía al principio en la nueva escuela?", de: "Wie fühlte sich Sofía am Anfang in der neuen Schule?", en: "How did Sofía feel at first at her new school?", opts: ["Estaba muy aburrida.", "Estaba un poco nerviosa.", "Estaba enojada con sus amigas."], a: 1 },
      { text: "Campamento de verano «Aventura Verde». Para niños y niñas de nueve a doce años. Del 1 al 15 de julio, en el bosque de La Esperanza. ¿Qué haremos? Excursiones por la montaña, talleres de reciclaje, juegos en el río y noches de cuentos alrededor del fuego. No se permiten celulares ni tabletas: ¡dos semanas para desconectar! Cada participante tiene que traer saco de dormir, linterna, botas cómodas y una botella de agua reutilizable. La comida está incluida. Si quieres participar, pídeles a tus padres que llenen el formulario de inscripción antes del 15 de junio. ¡Te esperamos!", q: "¿Qué no se puede llevar al campamento?", de: "Was darf man nicht ins Camp mitnehmen?", en: "What are you not allowed to bring to the camp?", opts: ["una linterna", "un saco de dormir", "un celular"], a: 2 },
      { text: "El blog de Tomás. La semana pasada mi profesora nos propuso un reto: vivir siete días sin pantallas. Al principio pensé que sería imposible. El lunes me aburrí muchísimo y el martes estuve de mal humor. Pero el miércoles saqué del armario un juego de mesa y jugué con mi hermana toda la tarde. El jueves leí un libro de misterio entero y el viernes fui en bici al parque con mis vecinos. No creo que pueda dejar las pantallas para siempre, porque me encantan los videojuegos. Pero ahora sé que es bueno desconectar de vez en cuando. ¡Os recomiendo que probéis el reto!", q: "¿Qué opina Tomás al final?", de: "Was meint Tomás am Ende?", en: "What does Tomás think in the end?", opts: ["Que nunca más usará pantallas.", "Que el reto fue muy aburrido.", "Que es bueno desconectar a veces."], a: 2 },
      { text: "Los colibríes son los pájaros más pequeños del mundo. Viven solo en América, desde Alaska hasta el sur de Argentina, y hay más de trescientas especies. Sus alas se mueven tan rápido que hacen un zumbido; por eso en inglés los llaman «pájaros que zumban». Son los únicos pájaros que pueden volar hacia atrás. Se alimentan sobre todo del néctar de las flores y, como gastan mucha energía, tienen que comer muchas veces al día. En Cuba vive el zunzuncito, que es el pájaro más pequeño del planeta: mide unos cinco centímetros y pesa menos que una moneda.", q: "¿Qué tiene de especial el zunzuncito?", de: "Was ist das Besondere am Zunzuncito?", en: "What is special about the zunzuncito?", opts: ["Es el pájaro más pequeño del planeta.", "Vive en Alaska.", "No puede volar hacia atrás."], a: 0 },
      { text: "Querido diario: Anoche pasó algo muy curioso. Estábamos cenando cuando, de repente, se fue la luz en todo el barrio. No se veía nada y mi hermanito empezó a llorar. Mi papá encontró una linterna y mi mamá encendió unas velas. Como no podíamos ver la tele, mi abuelo nos contó historias de cuando él era niño en el campo, donde no había electricidad. Después salimos al patio y vimos más estrellas que nunca. Cuando volvió la luz, dos horas más tarde, ¡nadie quería entrar en casa! Mañana le pediré al abuelo que nos cuente más historias.", q: "¿Qué hicieron cuando se fue la luz?", de: "Was haben sie gemacht, als der Strom ausfiel?", en: "What did they do when the power went out?", opts: ["Vieron una película.", "Escucharon las historias del abuelo.", "Se fueron a dormir enseguida."], a: 1 },
      { text: "Cómo hacer un comedero para pájaros. Necesitas una botella de plástico vacía, dos cucharas de madera, unas tijeras y semillas. Pídele a un adulto que te ayude con las tijeras. Primero, lava bien la botella. Después, haz dos agujeros, uno enfrente del otro, y mete una cuchara por ellos. Encima de la parte ancha de la cuchara, haz un agujero pequeño: por ahí saldrán las semillas. Repite lo mismo un poco más arriba con la otra cuchara. Así los pájaros tendrán un lugar donde posarse para comer. Por último, llena la botella de semillas, ciérrala y cuélgala de un árbol.", q: "¿Para qué sirven las cucharas de madera?", de: "Wozu dienen die Holzlöffel?", en: "What are the wooden spoons for?", opts: ["Para que los pájaros se posen y coman.", "Para mezclar las semillas.", "Para cerrar la botella."], a: 0 }
    ],
    escribir: [
      { task: "Tu amiga Valen te escribe: «¡El sábado hago una fiesta de disfraces por mi cumpleaños! ¿Venís?». Contéstale con un correo de 70 a 90 palabras. Dale las gracias, dile si puedes ir, cuéntale de qué te vas a disfrazar y pregúntale qué puedes llevar.", de: "Deine Freundin Valen schreibt dir: „Am Samstag mache ich zu meinem Geburtstag eine Kostümparty! Kommst du?“ Antworte ihr mit einer E-Mail von 70 bis 90 Wörtern. Bedanke dich, sag, ob du kommen kannst, erzähl, als was du dich verkleidest, und frag, was du mitbringen kannst.", en: "Your friend Valen writes: “On Saturday I'm having a costume party for my birthday! Are you coming?” Reply with an email of 70 to 90 words. Thank her, say whether you can come, tell her what you'll dress up as and ask what you can bring.", model: "¡Hola, Valen! Muchas gracias por invitarme a tu fiesta. ¡Claro que iré! El sábado por la mañana tengo partido de fútbol, pero llegaré a tu casa a las cinco. Me disfrazaré de astronauta: mi mamá me está haciendo un casco con una caja de cartón. ¡Creo que te va a encantar! ¿Qué puedo llevar? Si quieres, haré un pastel de chocolate con mi papá. Ojalá que haga buen tiempo para jugar en el jardín. ¡Nos vemos el sábado! Un abrazo muy fuerte." },
      { task: "Escribe en tu diario un texto de 100 a 120 palabras sobre un día en el que algo salió mal, pero terminó bien. Cuenta dónde estabas, qué pasó, cómo te sentiste y cómo terminó.", de: "Schreib einen Tagebucheintrag von 100 bis 120 Wörtern über einen Tag, an dem etwas schiefging, aber gut ausging. Erzähl, wo du warst, was passiert ist, wie du dich gefühlt hast und wie es ausging.", en: "Write a diary entry of 100 to 120 words about a day when something went wrong but ended well. Say where you were, what happened, how you felt and how it ended.", model: "Querido diario: El sábado pasado fui con mi familia al zoológico. Hacía sol y había muchísima gente. Mientras mirábamos a los monos, me di cuenta de que no tenía mi mochila. ¡Dentro estaban mi cámara y mi sándwich! Me sentí muy triste y un poco asustado. Mi papá y yo volvimos por todo el camino, pero no la encontramos. Entonces fuimos a la oficina del zoológico. Allí una señora muy amable me preguntó cómo era mi mochila y sonrió. Un niño la encontró al lado de los leones y la llevó a la oficina. ¡Qué alegría! Al final, me comí el sándwich mirando a los elefantes. Fue un día con un susto, pero muy divertido." }
    ],
    hablar: [
      { task: "Presenta un tema durante dos o tres minutos: «Un viaje que me gustaría hacer». Di adónde irías y con quién, qué harás cuando llegues y por qué te gustaría ir.", de: "Halte einen kurzen Vortrag von zwei bis drei Minuten: „Eine Reise, die ich gern machen würde“. Sag, wohin du fahren würdest und mit wem, was du machst, wenn du ankommst, und warum du dorthin möchtest.", en: "Give a short talk of two to three minutes: “A trip I'd like to take”. Say where you'd go and who with, what you'll do when you get there and why you'd like to go.", model: "Me gustaría mucho viajar a México con mi familia. Cuando lleguemos, primero visitaremos la Ciudad de México y probaremos tacos de verdad. Después iremos a Yucatán para ver la pirámide de Chichén Itzá, porque me encantan las historias de los mayas. También me gustaría nadar en un cenote, que es como una piscina natural dentro de una cueva. Creo que sería un viaje increíble, porque podría practicar español todos los días. ¡Ojalá que podamos ir pronto, quizás el próximo verano!" },
      { task: "Conversación. Tu compañero dice: «Creo que los niños deberían tener celular desde los ocho años». ¿Estás de acuerdo? Da tu opinión con «creo que» o «no creo que», explica por qué y dale un consejo.", de: "Gespräch. Dein Mitschüler sagt: „Ich finde, Kinder sollten ab acht Jahren ein Handy haben.“ Bist du einverstanden? Sag deine Meinung mit „creo que“ oder „no creo que“, begründe sie und gib ihm einen Rat.", en: "Conversation. Your classmate says: “I think kids should have a mobile phone from the age of eight.” Do you agree? Give your opinion using “creo que” or “no creo que”, explain why and give him some advice.", model: "Yo no creo que sea una buena idea tener celular a los ocho años. Es verdad que un celular es útil para llamar a tus padres, pero creo que los niños pequeños pasarían demasiado tiempo frente a la pantalla. En mi opinión, es mejor que los niños jueguen al aire libre y que hablen con sus amigos en persona. Si un niño tiene celular, le recomiendo que use una aplicación para controlar el tiempo de pantalla y que nunca comparta sus datos personales. Y tú, ¿qué piensas?" }
    ]
  };
})();
