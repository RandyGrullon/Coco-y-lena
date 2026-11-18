/* Isla Ñ — nivel A1 (islas nuevas y Gran Desafío A1) */
(function () {
  const ES = window.ES;

  ES.slang.push(
    { es: "¡Fuchi!", r: "mx", de: "Igitt!", en: "Yuck!", ex: "¡Fuchi, qué calcetines tan sucios!" },
    { es: "¡Jo!", r: "es", de: "Menno!", en: "Aww, man!", ex: "¡Jo, mamá! ¡Cinco minutos más!" },
    { es: "Tato", r: "do", de: "Okay! / Abgemacht!", en: "OK! / Deal!", ex: "—¿Nos vemos a las cinco? —¡Tato!" },
    { es: "¡Al toque!", r: "ar", de: "Sofort! / Ganz schnell!", en: "Right away!", ex: "—¿Venís a jugar? —¡Voy al toque!" }
  );

  ES.units.push(
    {
      id: "a1-casa", level: "A1", title: "Mi casa", pic: "🏠", sticker: "🙈", color: "hib",
      de: "Mein Zuhause", en: "My home",
      words: [
        { es: "la casa", de: "das Haus", en: "house", pic: "🏠" },
        { es: "la cocina", de: "die Küche", en: "kitchen", pic: "🍳" },
        { es: "el baño", de: "das Bad", en: "bathroom", pic: "🛁" },
        { es: "el cuarto", de: "das Zimmer", en: "room / bedroom", pic: "🧸", vary: { es: "la habitación", mx: "la recámara", ar: "la pieza" } },
        { es: "la sala", de: "das Wohnzimmer", en: "living room", pic: "🛋️", vary: { es: "el salón", ar: "el living" } },
        { es: "la cama", de: "das Bett", en: "bed", pic: "🛏️" },
        { es: "la mesa", de: "der Tisch", en: "table", pic: "🍽️" },
        { es: "la silla", de: "der Stuhl", en: "chair", pic: "🪑" },
        { es: "la ventana", de: "das Fenster", en: "window", pic: "🪟" },
        { es: "la lámpara", de: "die Lampe", en: "lamp", pic: "💡" },
        { es: "encima de", de: "auf / oben auf", en: "on top of", pic: "⬆️" },
        { es: "debajo de", de: "unter", en: "under", pic: "⬇️" }
      ],
      story: [
        { who: "alex", es: "¡Bienvenidos a mi casa! Es pequeña, pero muy chula.", de: "Willkommen in meinem Haus! Es ist klein, aber total schön.", en: "Welcome to my house! It's small, but really nice.", pic: "🏠" },
        { who: "alex", es: "¡Venga! ¿Jugamos al escondite? Coco se esconde y nosotros buscamos.", de: "Los! Spielen wir Verstecken? Coco versteckt sich und wir suchen ihn.", en: "Come on! Shall we play hide-and-seek? Coco hides and we look for him.", pic: "🙈" },
        { who: "coco", es: "¡Tá jevi! Cierren los ojos y cuenten hasta diez.", de: "Cool! Macht die Augen zu und zählt bis zehn.", en: "Cool! Close your eyes and count to ten.", pic: "🦜" },
        { who: "mia", es: "¿Está en el cuarto, debajo de la cama? No… ¡Aquí solo hay una pelota!", de: "Ist er im Zimmer, unter dem Bett? Nein … Hier liegt nur ein Ball!", en: "Is he in the bedroom, under the bed? No… There's only a ball here!", pic: "🛏️⚽" },
        { who: "valen", es: "Che, ¿y en la cocina? Mirá: encima de la mesa hay una pizza… ¡pero ningún loro!", de: "Hey, und in der Küche? Schau mal: Auf dem Tisch liegt eine Pizza … aber kein Papagei!", en: "Hey, what about the kitchen? Look: there's a pizza on the table… but no parrot!", pic: "🍳🍕" },
        { who: "alex", es: "¿En el baño? ¿En el salón, detrás del sofá? ¿En la ventana? ¡Nada!", de: "Im Bad? Im Wohnzimmer, hinter dem Sofa? Am Fenster? Nichts!", en: "In the bathroom? In the living room, behind the sofa? By the window? Nothing!", pic: "🛁🛋️🪟" },
        { who: "coco", es: "¡A… a… achís!", de: "Ha … ha … hatschi!", en: "Ah… ah… achoo!", pic: "🤧" },
        { who: "valen", es: "¡Miren arriba! ¡Coco está encima de la lámpara!", de: "Schaut mal nach oben! Coco sitzt oben auf der Lampe!", en: "Look up! Coco is on top of the lamp!", pic: "💡🦜" },
        { who: "coco", es: "¡Uy! Mi escondite es perfecto… pero aquí arriba hay mucho polvo.", de: "Ups! Mein Versteck ist perfekt … aber hier oben ist ganz viel Staub.", en: "Oops! My hiding place is perfect… but there's loads of dust up here.", pic: "😅" },
        { who: "mia", es: "¡Salud, Coco! Y Álex… ¡fuchi! Tu lámpara necesita un baño.", de: "Gesundheit, Coco! Und Álex … igitt! Deine Lampe braucht ein Bad.", en: "Bless you, Coco! And Álex… yuck! Your lamp needs a bath.", pic: "😂" }
      ],
      questions: [
        { q: "¿Qué hay debajo de la cama?", de: "Was liegt unter dem Bett?", en: "What is under the bed?", opts: ["🍕 una pizza", "⚽ una pelota", "🦜 Coco"], a: 1 },
        { q: "¿Dónde está la pizza?", de: "Wo ist die Pizza?", en: "Where is the pizza?", opts: ["en el baño", "debajo de la cama", "encima de la mesa"], a: 2 },
        { q: "¿Dónde se esconde Coco?", de: "Wo versteckt sich Coco?", en: "Where does Coco hide?", opts: ["💡 encima de la lámpara", "🛋️ detrás del sofá", "🛁 en el baño"], a: 0 }
      ],
      phrases: [
        { es: "¡Bienvenidos a mi casa!", de: "Willkommen bei mir zu Hause!", en: "Welcome to my home!" },
        { es: "En mi casa hay tres cuartos.", de: "In meinem Haus gibt es drei Zimmer.", en: "There are three rooms in my house." },
        { es: "El gato está debajo de la mesa.", de: "Die Katze ist unter dem Tisch.", en: "The cat is under the table." },
        { es: "¿Dónde está el baño?", de: "Wo ist das Bad?", en: "Where is the bathroom?" }
      ],
      tips: [
        { es: "«Hay» dice qué cosas hay: En mi cuarto hay una cama. «Está» dice dónde está una cosa: La pelota está debajo de la cama.", de: "„Hay“ heißt „es gibt“: En mi cuarto hay una cama – In meinem Zimmer gibt es ein Bett. Mit „está“ sagst du, wo etwas ist: La pelota está debajo de la cama – Der Ball ist unter dem Bett.", en: "“Hay” means “there is” or “there are”: En mi cuarto hay una cama – There's a bed in my room. With “está” you say where something is: La pelota está debajo de la cama – The ball is under the bed." }
      ],
      note: { es: "Cuando alguien estornuda, en español decimos «¡Salud!». Es como «Gesundheit» en alemán.", de: "Wenn jemand niest, sagt man auf Spanisch „¡Salud!“ – genau wie „Gesundheit!“ auf Deutsch.", en: "When someone sneezes, Spanish speakers say “¡Salud!” – just like “Bless you!” in English." },
      slang: ["¡Qué chulo!", "¡Venga!", "¡Tá jevi!", "¡Fuchi!"]
    },
    {
      id: "a1-ropa", level: "A1", title: "La ropa y el tiempo", pic: "👕", sticker: "🧣", color: "sun",
      de: "Kleidung und Wetter", en: "Clothes and weather",
      words: [
        { es: "la camiseta", de: "das T-Shirt", en: "T-shirt", pic: "👕", vary: { mx: "la playera", ar: "la remera", ve: "la franela", cl: "la polera" } },
        { es: "el suéter", de: "der Pullover / der Pulli", en: "jumper / sweater", pic: "🧶", vary: { es: "el jersey", ar: "el pulóver", cl: "el chaleco" } },
        { es: "los pantalones", de: "die Hose", en: "trousers", pic: "👖" },
        { es: "la gorra", de: "die Kappe", en: "cap", pic: "🧢" },
        { es: "los calcetines", de: "die Socken", en: "socks", pic: "🧦", vary: { ar: "las medias", co: "las medias", ve: "las medias" } },
        { es: "los tenis", de: "die Turnschuhe", en: "trainers / sneakers", pic: "👟", vary: { es: "las zapatillas", ar: "las zapatillas" } },
        { es: "la bufanda", de: "der Schal", en: "scarf", pic: "🧣" },
        { es: "el paraguas", de: "der Regenschirm", en: "umbrella", pic: "☂️", vary: { co: "la sombrilla", pr: "la sombrilla" } },
        { es: "hace frío", de: "es ist kalt", en: "it's cold", pic: "❄️" },
        { es: "hace calor", de: "es ist heiß", en: "it's hot", pic: "🔥" },
        { es: "hace sol", de: "die Sonne scheint", en: "it's sunny", pic: "🌞" },
        { es: "llueve", de: "es regnet", en: "it's raining", pic: "🌧️" }
      ],
      story: [
        { who: "coco", es: "¡Valen, ya estoy en Argentina! Llevo mi camiseta y mi gorra.", de: "Valen, ich bin schon in Argentinien! Ich habe mein T-Shirt und meine Kappe an.", en: "Valen, I'm here in Argentina! I'm wearing my T-shirt and my cap.", pic: "✈️👕🧢" },
        { who: "valen", es: "¿Remera y gorra? ¡Che, Coco, acá hace frío! En julio es invierno.", de: "T-Shirt und Kappe? Hey Coco, hier ist es kalt! Im Juli ist hier Winter.", en: "A T-shirt and a cap? Hey Coco, it's cold here! In July it's winter.", pic: "❄️" },
        { who: "coco", es: "¿Invierno en julio? ¡Diache! En mi isla, en julio hace calor.", de: "Winter im Juli? Oje! Auf meiner Insel ist es im Juli heiß.", en: "Winter in July? Oh no! On my island it's hot in July.", pic: "🥶" },
        { who: "valen", es: "Tomá: un pulóver, unos pantalones, una bufanda y unas medias.", de: "Hier, nimm: einen Pulli, eine Hose, einen Schal und Socken.", en: "Here you go: a jumper, some trousers, a scarf and some socks.", pic: "🧶👖🧣🧦" },
        { who: "coco", es: "¿Un pulóver? ¡Ah, un suéter! Me pongo todo… ¡Qué calentito!", de: "Einen „pulóver“? Ach so, einen Pulli! Ich ziehe alles an … Schön warm!", en: "A “pulóver”? Oh, a jumper! I'm putting it all on… Nice and cosy!", pic: "😌" },
        { who: "valen", es: "¡Uy, mirá! Ahora llueve. Tomá también el paraguas.", de: "Oh, schau! Jetzt regnet es. Nimm auch den Regenschirm.", en: "Oh, look! Now it's raining. Take the umbrella too.", pic: "🌧️☂️" },
        { who: "coco", es: "Suéter, bufanda, medias, paraguas… ¡No puedo volar! Parezco una bola de lana.", de: "Pulli, Schal, Socken, Regenschirm … Ich kann nicht fliegen! Ich sehe aus wie ein Wollknäuel.", en: "Jumper, scarf, socks, umbrella… I can't fly! I look like a ball of wool.", pic: "🧶🦜" },
        { who: "mia", es: "¡Hola, Coco! ¿Qué onda? Aquí en México hace sol. ¡Yo ando en playera y tenis!", de: "Hallo Coco! Was geht? Hier in Mexiko scheint die Sonne. Ich hab nur T-Shirt und Turnschuhe an!", en: "Hi Coco! What's up? Here in Mexico it's sunny. I'm just wearing a T-shirt and trainers!", pic: "📱🌞" },
        { who: "coco", es: "¿Sol? ¡Qué suerte! Mañana me voy a México… con mi camiseta.", de: "Sonne? Du Glückliche! Morgen fliege ich nach Mexiko … mit meinem T-Shirt.", en: "Sun? Lucky you! Tomorrow I'm flying to Mexico… in my T-shirt.", pic: "✈️🇲🇽" },
        { who: "valen", es: "¡Jajaja! No, quedate. Mañana acá también hace sol… ¡re lindo!", de: "Hahaha! Nein, bleib hier. Morgen scheint hier auch die Sonne … richtig schön!", en: "Hahaha! No, stay. Tomorrow it'll be sunny here too… really nice!", pic: "😂🌞" }
      ],
      questions: [
        { q: "¿Por qué hace frío en Argentina?", de: "Warum ist es in Argentinien kalt?", en: "Why is it cold in Argentina?", opts: ["Porque llueve.", "Porque es invierno.", "Porque es de noche."], a: 1 },
        { q: "¿Qué le da Valen a Coco?", de: "Was gibt Valen Coco?", en: "What does Valen give Coco?", opts: ["👕🧢", "👗👟", "🧶👖🧣🧦"], a: 2 },
        { q: "¿Qué tiempo hace en México?", de: "Wie ist das Wetter in Mexiko?", en: "What's the weather like in Mexico?", opts: ["🌞 Hace sol.", "❄️ Hace frío.", "🌧️ Llueve."], a: 0 }
      ],
      phrases: [
        { es: "¿Qué tiempo hace hoy?", de: "Wie ist das Wetter heute?", en: "What's the weather like today?" },
        { es: "Hace mucho frío.", de: "Es ist sehr kalt.", en: "It's very cold." },
        { es: "Me pongo el suéter.", de: "Ich ziehe den Pulli an.", en: "I'm putting on my jumper." },
        { es: "Hoy llueve. ¡Necesito el paraguas!", de: "Heute regnet es. Ich brauche den Regenschirm!", en: "It's raining today. I need the umbrella!" }
      ],
      tips: [
        { es: "Para el tiempo usamos «hace»: hace frío, hace calor, hace sol. Pero ojo: «hace frío» habla del tiempo y «tengo frío» habla de ti.", de: "Fürs Wetter sagt man „hace“: hace frío – es ist kalt, hace calor – es ist heiß, hace sol – die Sonne scheint. Aber Achtung: „hace frío“ ist das Wetter, „tengo frío“ heißt: Mir ist kalt.", en: "For the weather we use “hace”: hace frío – it's cold, hace calor – it's hot, hace sol – it's sunny. But careful: “hace frío” is about the weather, “tengo frío” means: I'm cold." },
        { es: "Para la ropa usamos «ponerse»: me pongo, te pones, se pone. Me pongo la bufanda.", de: "Für Kleidung benutzt man „ponerse“ – anziehen: me pongo – ich ziehe an, te pones – du ziehst an, se pone – er oder sie zieht an. Me pongo la bufanda – Ich binde mir den Schal um.", en: "For clothes we use “ponerse” – to put on: me pongo – I put on, te pones – you put on, se pone – he or she puts on. Me pongo la bufanda – I put on my scarf." }
      ],
      note: { es: "En Argentina y en Chile, julio es invierno y diciembre es verano. ¡Allí la Navidad es con calor!", de: "In Argentinien und Chile ist im Juli Winter und im Dezember Sommer. Dort feiert man Weihnachten bei Hitze!", en: "In Argentina and Chile, July is winter and December is summer. There, Christmas is hot!" },
      slang: ["Che", "Re", "¿Qué onda?", "¡Diache!"]
    },
    {
      id: "a1-dias", level: "A1", title: "Los días y la hora", pic: "📅", sticker: "💤", color: "leaf",
      de: "Tage und Uhrzeit", en: "Days and time",
      words: [
        { es: "el lunes", de: "der Montag", en: "Monday", pic: "⚾" },
        { es: "el martes", de: "der Dienstag", en: "Tuesday", pic: "🎹" },
        { es: "el miércoles", de: "der Mittwoch", en: "Wednesday", pic: "🥋" },
        { es: "el jueves", de: "der Donnerstag", en: "Thursday", pic: "💃" },
        { es: "el viernes", de: "der Freitag", en: "Friday", pic: "🎉" },
        { es: "el sábado", de: "der Samstag", en: "Saturday", pic: "📺" },
        { es: "el domingo", de: "der Sonntag", en: "Sunday", pic: "🌳" },
        { es: "es la una", de: "es ist ein Uhr", en: "it's one o'clock", pic: "🕐" },
        { es: "son las tres", de: "es ist drei Uhr", en: "it's three o'clock", pic: "🕒" },
        { es: "me levanto", de: "ich stehe auf", en: "I get up", pic: "⏰" },
        { es: "desayuno", de: "ich frühstücke", en: "I have breakfast", pic: "🥣" },
        { es: "me acuesto", de: "ich gehe ins Bett", en: "I go to bed", pic: "🛌" }
      ],
      story: [
        { who: "mia", es: "¡Hola, Coco! ¿Jugamos juntos esta semana?", de: "Hallo Coco! Spielen wir diese Woche zusammen?", en: "Hi Coco! Shall we play together this week?", pic: "📱" },
        { who: "coco", es: "A ver mi agenda… El lunes tengo béisbol y el martes, piano.", de: "Mal sehen, was in meinem Kalender steht … Am Montag habe ich Baseball und am Dienstag Klavier.", en: "Let me check my diary… On Monday I have baseball and on Tuesday, piano.", pic: "⚾🎹" },
        { who: "coco", es: "El miércoles, karate; el jueves, baile; y el viernes… ¡fiesta en casa de mi abuela!", de: "Am Mittwoch Karate, am Donnerstag Tanzen und am Freitag … Party bei meiner Oma!", en: "On Wednesday, karate; on Thursday, dance; and on Friday… a party at my grandma's!", pic: "🥋💃🎉" },
        { who: "mia", es: "¡Órale, qué semana! ¿Y el sábado?", de: "Wow, was für eine Woche! Und am Samstag?", en: "Wow, what a week! And on Saturday?", pic: "😅" },
        { who: "coco", es: "El sábado me levanto a las once, desayuno y veo la tele.", de: "Am Samstag stehe ich um elf auf, frühstücke und schaue fern.", en: "On Saturday I get up at eleven, have breakfast and watch TV.", pic: "⏰🥣📺" },
        { who: "valen", es: "Che, ¿y el domingo? ¿Nos vemos a las tres en la plaza?", de: "Hey, und am Sonntag? Treffen wir uns um drei auf dem Spielplatz?", en: "Hey, what about Sunday? Shall we meet at three at the playground?", pic: "🌳" },
        { who: "coco", es: "¿A las tres? ¡Imposible! De la una a las cuatro duermo la siesta.", de: "Um drei? Unmöglich! Von eins bis vier mache ich Mittagsschlaf.", en: "At three? Impossible! From one to four I have my nap.", pic: "😴" },
        { who: "alex", es: "¡Jo, Coco! Entonces, ¿a las cinco?", de: "Menno, Coco! Dann um fünf?", en: "Aww, Coco! At five, then?", pic: "🙄" },
        { who: "coco", es: "¡Tato! El domingo a las cinco, en la plaza.", de: "Abgemacht! Am Sonntag um fünf auf dem Spielplatz.", en: "Deal! Sunday at five, at the playground.", pic: "🤝" },
        { who: "mia", es: "¡Qué padre! Oye, ya son las nueve. Me acuesto. ¡Buenas noches!", de: "Super! Du, es ist schon neun Uhr. Ich gehe ins Bett. Gute Nacht!", en: "Great! Hey, it's already nine o'clock. I'm going to bed. Good night!", pic: "🛌🌙" }
      ],
      questions: [
        { q: "¿Qué tiene Coco el lunes?", de: "Was hat Coco am Montag?", en: "What does Coco have on Monday?", opts: ["🎹 piano", "⚾ béisbol", "💃 baile"], a: 1 },
        { q: "¿Qué hace Coco de la una a las cuatro?", de: "Was macht Coco von eins bis vier?", en: "What does Coco do from one to four?", opts: ["Ve la tele.", "Juega en la plaza.", "Duerme la siesta."], a: 2 },
        { q: "¿Cuándo juegan los amigos?", de: "Wann spielen die Freunde zusammen?", en: "When do the friends play together?", opts: ["el domingo a las cinco", "el sábado a las once", "el viernes a las tres"], a: 0 }
      ],
      phrases: [
        { es: "¿Qué hora es?", de: "Wie spät ist es?", en: "What time is it?" },
        { es: "Hoy es lunes.", de: "Heute ist Montag.", en: "Today is Monday." },
        { es: "Me levanto a las siete.", de: "Ich stehe um sieben Uhr auf.", en: "I get up at seven o'clock." },
        { es: "Lunes, martes, miércoles, jueves, viernes, sábado y domingo.", de: "Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag und Sonntag.", en: "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday and Sunday." }
      ],
      tips: [
        { es: "Decimos «es la una», pero «son las dos», «son las tres»… ¡porque son más de una! Y para decir cuándo: «a las tres».", de: "Man sagt „es la una“ – es ist ein Uhr. Aber „son las dos“, „son las tres“ … weil es mehr als eins sind! Und „um drei Uhr“ heißt „a las tres“.", en: "We say “es la una” – it's one o'clock. But “son las dos”, “son las tres”… because it's more than one! And “at three o'clock” is “a las tres”." },
        { es: "En español, los días se escriben con minúscula: lunes, martes, miércoles… Y para decir cuándo, usamos «el»: El lunes tengo béisbol.", de: "Auf Spanisch schreibt man die Wochentage klein: lunes, martes, miércoles … Und „am Montag“ heißt einfach „el lunes“: El lunes tengo béisbol – Am Montag habe ich Baseball.", en: "In Spanish, the days are written with a small letter: lunes, martes, miércoles… And “on Monday” is just “el lunes”: El lunes tengo béisbol – On Monday I have baseball." }
      ],
      note: { es: "«Lunes» viene de «Luna». ¡Y en alemán, «Montag» viene de «Mond»!", de: "„Lunes“ kommt von „Luna“, dem Mond. Genau wie „Montag“ vom „Mond“ kommt!", en: "“Lunes” comes from “Luna”, the Moon – just like “Monday” comes from “Moon”!" },
      slang: ["¡Órale!", "¡Jo!", "Tato", "¡Al toque!"]
    }
  );

  ES.exams.A1 = {
    title: "Gran Desafío A1", de: "Große Herausforderung A1", en: "Big Challenge A1",
    escuchar: [
      { who: "coco", text: "¡Hola! Me llamo Coco y soy un loro de la República Dominicana. Tengo siete años. Mis plumas son verdes, rojas y amarillas.", q: "¿Cuántos años tiene Coco?", de: "Wie alt ist Coco?", en: "How old is Coco?", opts: ["cinco", "siete", "nueve"], a: 1 },
      { who: "mia", text: "En mi familia somos cinco: mi papá, mi mamá, mi abuela, mi hermano y yo. Mi hermano es un bebé. ¡Y tenemos un gato que se llama Taco!", q: "¿Cuántas personas hay en la familia de Mía?", de: "Wie viele Personen sind in Mías Familie?", en: "How many people are there in Mía's family?", opts: ["tres", "cuatro", "cinco"], a: 2 },
      { who: "alex", text: "Por la mañana desayuno pan con tomate y un zumo de naranja. No me gusta la leche. ¡Pero me flipa el helado de chocolate!", q: "¿Qué no le gusta a Álex?", de: "Was mag Álex nicht?", en: "What doesn't Álex like?", opts: ["🥛 la leche", "🍞 el pan", "🍦 el helado"], a: 0 },
      { who: "valen", text: "Hoy es sábado y hace mucho frío. Me pongo un pulóver, una bufanda y la campera. ¡Y me voy a la plaza con mi perro!", q: "¿Qué tiempo hace hoy?", de: "Wie ist das Wetter heute?", en: "What's the weather like today?", opts: ["🌧️ Llueve.", "🌞 Hace sol.", "❄️ Hace frío."], a: 2 },
      { who: "narr", text: "Este es el cuarto de Álex. Hay una cama azul, una mesa y una silla. El libro está encima de la cama y la mochila está debajo de la mesa.", q: "¿Dónde está la mochila?", de: "Wo ist der Rucksack?", en: "Where is the backpack?", opts: ["encima de la cama", "debajo de la mesa", "en la cocina"], a: 1 },
      { who: "coco", text: "Los lunes me levanto a las siete. Desayuno a las siete y media y voy al colegio en guagua. ¡Las clases empiezan a las ocho!", q: "¿A qué hora se levanta Coco los lunes?", de: "Um wie viel Uhr steht Coco montags auf?", en: "What time does Coco get up on Mondays?", opts: ["a las siete", "a las ocho", "a las siete y media"], a: 0 }
    ],
    leer: [
      { text: "Zoológico de la Isla. Abrimos de martes a domingo, de nueve a cinco. Los lunes está cerrado. Por favor, no des comida a los monos. ¡A las diez comen los leones!", q: "¿Qué día no puedes ir al zoológico?", de: "An welchem Tag kannst du nicht in den Zoo gehen?", en: "On which day can't you go to the zoo?", opts: ["el domingo", "el lunes", "el sábado"], a: 1 },
      { text: "Hola, profe: Hoy no voy al colegio. Me duele la cabeza y estoy muy cansado. Estoy en la cama con mi perro. ¡El lunes vuelvo! Un abrazo, Álex.", q: "¿Por qué no va Álex al colegio?", de: "Warum geht Álex heute nicht in die Schule?", en: "Why isn't Álex going to school today?", opts: ["Está de vacaciones.", "Llueve mucho.", "Le duele la cabeza."], a: 2 },
      { text: "¡Club de fútbol del colegio! ¿Te gusta correr y jugar con la pelota? Ven los martes y los jueves a las cuatro. Necesitas unos tenis y una botella de agua. ¡Te esperamos!", q: "¿Qué necesitas para el club?", de: "Was brauchst du für den Fußballclub?", en: "What do you need for the football club?", opts: ["👟💧 unos tenis y agua", "📕✏️ un libro y un lápiz", "🧣☂️ una bufanda y un paraguas"], a: 0 },
      { text: "Querido diario: Hoy es mi cumpleaños y estoy muy feliz. Mis amigos están en mi casa. Coco está un poco nervioso porque tiene un regalo para mí. ¡Es un libro de dragones! ¡Qué padre!", q: "¿Cómo está Coco?", de: "Wie fühlt sich Coco?", en: "How does Coco feel?", opts: ["un poco nervioso", "triste", "muy enojado"], a: 0 },
      { text: "¡Hola, Álex! Estoy en Mendoza, en la casa de mi abuela. Hace sol, pero hace frío. Hoy vamos al zoológico en colectivo. En Argentina, el autobús se llama así. ¡Chau! Valen.", q: "¿Cómo va Valen al zoológico?", de: "Womit fährt Valen in den Zoo?", en: "How does Valen get to the zoo?", opts: ["✈️ en avión", "🚗 en carro", "🚌 en colectivo"], a: 2 },
      { text: "¡Cumplo ocho años! Te invito a mi fiesta el sábado a las cuatro, en mi casa. Hay pizza, jugo y bizcocho de chocolate. ¡Trae tu traje de baño, que hay piscina! Un abrazo, Coco.", q: "¿Cuándo es la fiesta de Coco?", de: "Wann ist Cocos Party?", en: "When is Coco's party?", opts: ["el domingo a las ocho", "el sábado a las cuatro", "el viernes a la una"], a: 1 }
    ],
    escribir: [
      { task: "Completa tu ficha para el Club de Coco: tu nombre, tu edad, tu país, tu color favorito, tu animal favorito y tu comida favorita.", de: "Füll deinen Steckbrief für Cocos Club aus: dein Name, dein Alter, dein Land, deine Lieblingsfarbe, dein Lieblingstier und dein Lieblingsessen.", en: "Fill in your profile for Coco's Club: your name, your age, your country, your favourite colour, your favourite animal and your favourite food.", model: "Me llamo Max. Tengo nueve años. Soy de Alemania. Mi color favorito es el verde. Mi animal favorito es el elefante. Mi comida favorita es la pizza." },
      { task: "Estás de vacaciones. Escribe una postal a Mía: dónde estás, qué tiempo hace, qué ropa llevas y qué te gusta hacer. Escribe entre veinte y treinta palabras.", de: "Du bist in den Ferien. Schreib Mía eine Postkarte: wo du bist, wie das Wetter ist, was du anhast und was du gern machst. Schreib zwanzig bis dreißig Wörter.", en: "You're on holiday. Write Mía a postcard: where you are, what the weather is like, what you're wearing and what you like doing. Write twenty to thirty words.", model: "¡Hola, Mía! Estoy en la playa con mi familia. Hace sol y mucho calor. Llevo una camiseta y una gorra. Me gusta nadar en el mar. ¡Un abrazo! Max" }
    ],
    hablar: [
      { task: "Preséntate a Coco: di cómo te llamas, cuántos años tienes, de dónde eres, cómo es tu familia y qué te gusta hacer.", de: "Stell dich Coco vor: Sag, wie du heißt, wie alt du bist, woher du kommst, wie deine Familie ist und was du gern machst.", en: "Introduce yourself to Coco: say your name, how old you are, where you're from, what your family is like and what you like doing.", model: "¡Hola, Coco! Me llamo Max y tengo nueve años. Soy de Alemania. En mi familia somos cuatro: mi mamá, mi papá, mi hermana y yo. Tengo un perro. Me gusta jugar al fútbol y dibujar." },
      { task: "Describe tu cuarto: ¿qué hay? ¿Dónde están las cosas? ¿Qué te gusta de tu cuarto?", de: "Beschreib dein Zimmer: Was gibt es dort? Wo sind die Sachen? Was magst du an deinem Zimmer?", en: "Describe your room: What's in it? Where are things? What do you like about your room?", model: "Mi cuarto es pequeño, pero me gusta mucho. Hay una cama, una mesa, una silla y una ventana grande. Mis libros están encima de la mesa y mi pelota está debajo de la cama. Me gusta mucho mi lámpara azul." }
    ]
  };
})();
