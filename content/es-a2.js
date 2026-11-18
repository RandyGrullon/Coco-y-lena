/* Isla Ñ — nivel A2 (Archipiélago Coral) */
(function () {
  const ES = window.ES;

  [
    { es: "Chamaco / chamaca", r: "mx", de: "Junge / Mädchen, Kind", en: "kid, boy / girl", ex: "Cuando era chamaco, jugaba en la calle con mis primos." },
    { es: "La chamba", r: "mx", de: "die Arbeit, der Job", en: "work, job", ex: "Mi papá ya se fue a la chamba." },
    { es: "El laburo", r: "ar", de: "die Arbeit, der Job", en: "work, job", ex: "Mi mamá tiene mucho laburo hoy." },
    { es: "¡Qué embole!", r: "ar", de: "Wie langweilig!", en: "How boring!", ex: "Estoy en la cama todo el día. ¡Qué embole!" },
    { es: "Majo / maja", r: "es", de: "nett, sympathisch", en: "nice, friendly", ex: "Tu prima es muy maja." },
    { es: "Harto", r: "cl", de: "viel, sehr", en: "lots, really", ex: "En la plaza hay hartos niños jugando." },
    { es: "¡Brutal!", r: "pr", de: "Mega! / Der Hammer!", en: "Awesome!", ex: "¡Esa película estuvo brutal!" },
    { es: "Una pila de", r: "do", de: "ganz viele, ein Haufen", en: "loads of, a lot of", ex: "Hoy tengo una pila de tareas." },
    { es: "¡Hágale!", r: "co", de: "Los, mach schon!", en: "Go for it!", ex: "¡Hágale, que usted puede!" },
    { es: "Asere", r: "cu", de: "Kumpel", en: "buddy, mate", ex: "¿Qué volá, asere? ¿Vamos a jugar pelota?" }
  ].forEach(s => { if (!ES.slang.some(x => x.es === s.es)) ES.slang.push(s); });

  ES.units.push(
    /* ---------- 1. El fin de semana: pretérito indefinido regular ---------- */
    {
      id: "a2-finde", level: "A2", title: "El fin de semana", pic: "🗓️", sticker: "🛼", color: "sea",
      de: "Das Wochenende", en: "The weekend",
      words: [
        { es: "el fin de semana", de: "das Wochenende", en: "weekend", pic: "🗓️" },
        { es: "ayer", de: "gestern", en: "yesterday", pic: "⏪" },
        { es: "el parque", de: "der Park", en: "park", pic: "🌳" },
        { es: "la bici", de: "das Fahrrad", en: "bike", pic: "🚲" },
        { es: "pasear", de: "spazieren gehen, eine Runde drehen", en: "to go for a walk or a ride", pic: "🚶" },
        { es: "el cine", de: "das Kino", en: "cinema", pic: "🎬" },
        { es: "la película", de: "der Film", en: "film, movie", pic: "🎞️" },
        { es: "el primo / la prima", de: "der Cousin / die Cousine", en: "cousin", pic: "🧑‍🤝‍🧑" },
        { es: "ordenar", de: "aufräumen", en: "to tidy up", pic: "🧹" },
        { es: "visitar", de: "besuchen", en: "to visit", pic: "🏡" },
        { es: "encontrar", de: "finden", en: "to find", pic: "🔍" },
        { es: "la basura", de: "der Müll", en: "rubbish, trash", pic: "🗑️" }
      ],
      story: [
        { who: "mia", es: "¡Hola! ¿Qué hicieron el fin de semana?", de: "Hallo! Was habt ihr am Wochenende gemacht?", en: "Hi! What did you all do at the weekend?", pic: "🗓️" },
        { who: "alex", es: "El sábado jugué al fútbol con mi equipo. ¡Ganamos tres a uno!", de: "Am Samstag habe ich mit meiner Mannschaft Fußball gespielt. Wir haben drei zu eins gewonnen!", en: "On Saturday I played football with my team. We won three to one!", pic: "⚽" },
        { who: "alex", es: "Y el domingo vi una película en el cine con mi primo.", de: "Und am Sonntag habe ich mit meinem Cousin einen Film im Kino gesehen.", en: "And on Sunday I saw a film at the cinema with my cousin.", pic: "🎬" },
        { who: "valen", es: "Yo ayer paseé en bici por el parque con mi papá. ¡Re lindo!", de: "Ich bin gestern mit meinem Papa mit dem Fahrrad durch den Park gefahren. Total schön!", en: "Yesterday I rode my bike in the park with my dad. Super nice!", pic: "🚲" },
        { who: "mia", es: "Yo visité a mi abuela y comí tamales. ¡Me comí cinco!", de: "Ich habe meine Oma besucht und Tamales gegessen. Ich habe fünf verputzt!", en: "I visited my grandma and ate tamales. I ate five of them!", pic: "🫔" },
        { who: "coco", es: "Yo… ordené mi cuarto.", de: "Ich … habe mein Zimmer aufgeräumt.", en: "I… tidied my room.", pic: "🧹" },
        { who: "valen", es: "¿Nada más? ¡Qué aburrido, Coco!", de: "Sonst nichts? Wie langweilig, Coco!", en: "Nothing else? How boring, Coco!", pic: "🥱" },
        { who: "coco", es: "¡Diache, no! Debajo de la cama encontré mi pelota perdida.", de: "Oh Mann, nein! Unter dem Bett habe ich meinen verlorenen Ball gefunden.", en: "Oh man, no! Under the bed I found my lost ball.", pic: "🔍" },
        { who: "coco", es: "¡Y también un guineo viejo y negro!", de: "Und auch eine alte, schwarze Banane!", en: "And an old black banana too!", pic: "🍌" },
        { who: "alex", es: "¡Hala! ¿Y qué hiciste con el guineo?", de: "Wow! Und was hast du mit der Banane gemacht?", en: "Wow! And what did you do with the banana?", pic: "😲" },
        { who: "coco", es: "Lo tiré a la basura. Después salí a jugar dominó con mi abuelo. ¡Y gané!", de: "Ich habe sie in den Müll geworfen. Danach bin ich raus und habe mit meinem Opa Domino gespielt. Und ich habe gewonnen!", en: "I threw it in the bin. Then I went out and played dominoes with my grandpa. And I won!", pic: "🗑️" },
        { who: "mia", es: "¡Órale! Entonces sí te divertiste mucho.", de: "Wow! Dann hattest du ja doch viel Spaß!", en: "Wow! So you did have lots of fun!", pic: "😄" }
      ],
      questions: [
        { q: "¿Qué hizo Álex el sábado?", de: "Was hat Álex am Samstag gemacht?", en: "What did Álex do on Saturday?", opts: ["Vio una película.", "Jugó al fútbol.", "Paseó en bici."], a: 1 },
        { q: "¿Cuántos tamales comió Mía?", de: "Wie viele Tamales hat Mía gegessen?", en: "How many tamales did Mía eat?", opts: ["tres", "uno", "cinco"], a: 2 },
        { q: "¿Qué encontró Coco debajo de la cama?", de: "Was hat Coco unter dem Bett gefunden?", en: "What did Coco find under the bed?", opts: ["su pelota y un guineo viejo", "un gato y un libro", "su celular"], a: 0 }
      ],
      phrases: [
        { es: "¿Qué hiciste el fin de semana?", de: "Was hast du am Wochenende gemacht?", en: "What did you do at the weekend?" },
        { es: "Ayer jugué al fútbol.", de: "Gestern habe ich Fußball gespielt.", en: "Yesterday I played football." },
        { es: "Visité a mi abuela.", de: "Ich habe meine Oma besucht.", en: "I visited my grandma." },
        { es: "Salí al parque con mis amigos.", de: "Ich bin mit meinen Freunden in den Park gegangen.", en: "I went to the park with my friends." }
      ],
      slang: ["¡Diache!", "¡Hala!", "¡Órale!", "Re"],
      tips: [
        { es: "Para contar qué pasó ayer: jugar → jugué, comer → comí, salir → salí.", de: "So erzählst du, was gestern passiert ist: jugar → jugué (ich habe gespielt), comer → comí (ich habe gegessen), salir → salí (ich bin rausgegangen).", en: "To say what happened yesterday: jugar → jugué (I played), comer → comí (I ate), salir → salí (I went out)." },
        { es: "¡Ojo con la tilde! «Hablo» es yo, hoy. «Habló» es él o ella, ayer.", de: "Achtung, Akzent! „Hablo“ heißt: ich spreche (heute). „Habló“ heißt: er oder sie hat gesprochen (gestern).", en: "Watch the accent! “Hablo” means I speak (today). “Habló” means he or she spoke (yesterday)." }
      ],
      note: { es: "En República Dominicana el dominó es muy popular: la gente juega en la calle, en el parque y en las fiestas familiares.", de: "In der Dominikanischen Republik ist Domino super beliebt: Die Leute spielen auf der Straße, im Park und bei Familienfesten.", en: "In the Dominican Republic dominoes is really popular: people play in the street, in the park and at family parties." }
    },

    /* ---------- 2. El cumpleaños: fui, tuve, hice ---------- */
    {
      id: "a2-cumple", level: "A2", title: "El cumpleaños", pic: "🎂", sticker: "🎁", color: "hib",
      de: "Der Geburtstag", en: "The birthday",
      words: [
        { es: "el cumpleaños", de: "der Geburtstag", en: "birthday", pic: "🥳" },
        { es: "la fiesta", de: "die Party, das Fest", en: "party", pic: "🎉" },
        { es: "el regalo", de: "das Geschenk", en: "present", pic: "🎁" },
        { es: "el pastel", de: "der Kuchen, die Torte", en: "cake", pic: "🎂", vary: { es: "la tarta", ar: "la torta", ve: "la torta", do: "el bizcocho", pr: "el bizcocho", co: "el ponqué" } },
        { es: "las velas", de: "die Kerzen", en: "candles", pic: "🕯️" },
        { es: "el globo", de: "der Luftballon", en: "balloon", pic: "🎈" },
        { es: "la piñata", de: "die Piñata", en: "piñata", pic: "🪅" },
        { es: "los dulces", de: "die Süßigkeiten", en: "sweets", pic: "🍬", vary: { es: "las chuches", ar: "las golosinas" } },
        { es: "cantar", de: "singen", en: "to sing", pic: "🎤" },
        { es: "soplar", de: "pusten, auspusten", en: "to blow out", pic: "🌬️" },
        { es: "pedir un deseo", de: "sich etwas wünschen", en: "to make a wish", pic: "🌠" },
        { es: "romper", de: "kaputt machen", en: "to break", pic: "💥" }
      ],
      story: [
        { who: "alex", es: "Mía, ayer no fui a tu cumple porque tuve un partido. ¿Qué tal la fiesta?", de: "Mía, gestern bin ich nicht zu deinem Geburtstag gekommen, weil ich ein Spiel hatte. Wie war die Party?", en: "Mía, yesterday I didn't come to your birthday because I had a match. How was the party?", pic: "⚽" },
        { who: "mia", es: "¡Estuvo padrísima! Tuve globos, muchos regalos y una piñata enorme.", de: "Sie war mega! Ich hatte Luftballons, viele Geschenke und eine riesige Piñata.", en: "It was awesome! I had balloons, lots of presents and a huge piñata.", pic: "🪅" },
        { who: "coco", es: "¡Y yo hice el pastel! En mi país lo llamamos bizcocho.", de: "Und ich habe den Kuchen gebacken! In meinem Land nennen wir ihn „bizcocho“.", en: "And I made the cake! In my country we call it “bizcocho”.", pic: "🎂" },
        { who: "valen", es: "¡Contale lo que pasó con las velas, Coco!", de: "Erzähl ihm, was mit den Kerzen passiert ist, Coco!", en: "Tell him what happened with the candles, Coco!", pic: "🕯️" },
        { who: "coco", es: "Bueno… cuando cantamos «Las mañanitas», me emocioné y soplé las velas yo.", de: "Na ja … als wir „Las mañanitas“ gesungen haben, war ich so aufgeregt, dass ich die Kerzen selbst ausgepustet habe.", en: "Well… when we sang “Las mañanitas”, I got so excited that I blew out the candles myself.", pic: "🌬️" },
        { who: "alex", es: "¡Hala! ¿Y qué hicisteis entonces?", de: "Oh nein! Und was habt ihr dann gemacht?", en: "Oh no! And what did you all do then?", pic: "😲" },
        { who: "mia", es: "Mi papá las prendió otra vez y yo pedí un deseo.", de: "Mein Papa hat sie wieder angezündet, und ich habe mir etwas gewünscht.", en: "My dad lit them again and I made a wish.", pic: "🌠" },
        { who: "valen", es: "Después rompimos la piñata. ¡Yo le di el último golpe!", de: "Danach haben wir die Piñata kaputt gehauen. Den letzten Schlag habe ich gemacht!", en: "Then we broke the piñata. I gave it the last hit!", pic: "💥" },
        { who: "coco", es: "¡Y salió una pila de dulces! Yo agarré veinte.", de: "Und es kamen ganz viele Süßigkeiten heraus! Ich habe mir zwanzig geschnappt.", en: "And loads of sweets came out! I grabbed twenty.", pic: "🍬" },
        { who: "alex", es: "¡Qué guay! En mi cumple, yo hago la tarta… ¡y yo soplo las velas!", de: "Wie cool! An meinem Geburtstag backe ich die Torte … und ich puste die Kerzen aus!", en: "How cool! On my birthday I'll make the cake… and I'll blow out the candles!", pic: "🎂" },
        { who: "coco", es: "¡Tá jevi! Te lo prometo: esta vez no las soplo yo.", de: "Cool! Versprochen: Diesmal puste ich sie nicht aus.", en: "Cool! I promise: this time I won't blow them out.", pic: "🤞" }
      ],
      questions: [
        { q: "¿Por qué no fue Álex a la fiesta?", de: "Warum ist Álex nicht zur Party gekommen?", en: "Why didn't Álex go to the party?", opts: ["Tuvo un partido.", "Estaba enfermo.", "No tenía regalo."], a: 0 },
        { q: "¿Quién hizo el pastel?", de: "Wer hat den Kuchen gebacken?", en: "Who made the cake?", opts: ["la mamá de Mía", "Valen", "Coco"], a: 2 },
        { q: "¿Qué hizo Coco con las velas?", de: "Was hat Coco mit den Kerzen gemacht?", en: "What did Coco do with the candles?", opts: ["Las prendió.", "Las sopló antes que Mía.", "Las perdió."], a: 1 }
      ],
      phrases: [
        { es: "¡Feliz cumpleaños!", de: "Alles Gute zum Geburtstag!", en: "Happy birthday!" },
        { es: "¿Cuántos años cumples?", de: "Wie alt wirst du?", en: "How old are you turning?" },
        { es: "Fui a la fiesta de mi amiga.", de: "Ich war auf der Party meiner Freundin.", en: "I went to my friend's party." },
        { es: "Hice un pastel de chocolate.", de: "Ich habe einen Schokoladenkuchen gebacken.", en: "I made a chocolate cake." }
      ],
      slang: ["¡Qué padre!", "Una pila de", "¡Qué guay!", "¡Tá jevi!"],
      tips: [
        { es: "Algunos verbos son rebeldes: ir → fui, tener → tuve, hacer → hice. ¡Apréndelos de memoria!", de: "Manche Verben sind Rebellen: ir → fui (ich bin gegangen), tener → tuve (ich hatte), hacer → hice (ich habe gemacht). Lern sie auswendig!", en: "Some verbs are rebels: ir → fui (I went), tener → tuve (I had), hacer → hice (I did, I made). Learn them by heart!" },
        { es: "«Fui» sirve para dos verbos: «Fui a la fiesta» viene de ir, y «Fui el primero» viene de ser.", de: "„Fui“ gehört zu zwei Verben: „Fui a la fiesta“ (ich bin zur Party gegangen) kommt von ir, „Fui el primero“ (ich war der Erste) kommt von ser.", en: "“Fui” belongs to two verbs: “Fui a la fiesta” (I went to the party) comes from ir, and “Fui el primero” (I was the first) comes from ser." }
      ],
      note: { es: "En México, en los cumpleaños se canta «Las mañanitas». ¡A veces la familia la canta muy temprano para despertar al cumpleañero!", de: "In Mexiko singt man zum Geburtstag „Las mañanitas“. Manchmal singt die Familie das Lied ganz früh am Morgen, um das Geburtstagskind zu wecken!", en: "In Mexico people sing “Las mañanitas” on birthdays. Sometimes the family sings it very early in the morning to wake up the birthday kid!" }
    },

    /* ---------- 3. El mercado: comprar, cantidades, precios, lo / la ---------- */
    {
      id: "a2-mercado", level: "A2", title: "El mercado", pic: "🛒", sticker: "🥭", color: "sun",
      de: "Auf dem Markt", en: "At the market",
      words: [
        { es: "el mercado", de: "der Markt", en: "market", pic: "🛒" },
        { es: "la ensalada de frutas", de: "der Obstsalat", en: "fruit salad", pic: "🥗", vary: { es: "la macedonia" } },
        { es: "el mango", de: "die Mango", en: "mango", pic: "🥭" },
        { es: "la piña", de: "die Ananas", en: "pineapple", pic: "🍍", vary: { ar: "el ananá" } },
        { es: "la fresa", de: "die Erdbeere", en: "strawberry", pic: "🍓", vary: { ar: "la frutilla", cl: "la frutilla" } },
        { es: "el aguacate", de: "die Avocado", en: "avocado", pic: "🥑", vary: { ar: "la palta", cl: "la palta" } },
        { es: "el coco", de: "die Kokosnuss", en: "coconut", pic: "🥥" },
        { es: "la sandía", de: "die Wassermelone", en: "watermelon", pic: "🍉", vary: { ve: "la patilla", co: "la patilla" } },
        { es: "medio kilo", de: "ein halbes Kilo", en: "half a kilo", pic: "⚖️" },
        { es: "barato", de: "billig", en: "cheap", pic: "🏷️" },
        { es: "caro", de: "teuer", en: "expensive", pic: "💎" },
        { es: "gastar", de: "ausgeben", en: "to spend", pic: "💸" }
      ],
      story: [
        { who: "mia", es: "¡Vamos a hacer una ensalada de frutas! Tenemos cien pesos.", de: "Wir machen einen Obstsalat! Wir haben hundert Pesos.", en: "We're going to make a fruit salad! We have a hundred pesos.", pic: "🥗" },
        { who: "valen", es: "¡Dale! Yo quiero frutillas. ¡Mirá, ahí están!", de: "Okay! Ich will „frutillas“. Schau, da sind sie!", en: "OK! I want “frutillas”. Look, there they are!", pic: "🍓" },
        { who: "mia", es: "En México les decimos fresas. Medio kilo cuesta veinte pesos. ¡Lo compramos!", de: "In Mexiko sagen wir „fresas“ zu Erdbeeren. Ein halbes Kilo kostet zwanzig Pesos. Das kaufen wir!", en: "In Mexico we call strawberries “fresas”. Half a kilo costs twenty pesos. Let's buy it!", pic: "⚖️" },
        { who: "alex", es: "¡Hala, mirad este mango! Es más grande que mi mano.", de: "Wow, schaut euch diese Mango an! Sie ist größer als meine Hand.", en: "Wow, look at this mango! It's bigger than my hand.", pic: "🥭" },
        { who: "mia", es: "Cuesta quince pesos. ¡Qué barato! Lo llevamos.", de: "Sie kostet fünfzehn Pesos. Wie billig! Die nehmen wir.", en: "It costs fifteen pesos. How cheap! We'll take it.", pic: "🏷️" },
        { who: "valen", es: "Che, ¿y una palta? A mí me encanta la palta.", de: "Hey, und eine „palta“? Ich liebe „palta“!", en: "Hey, what about a “palta”? I love “palta”!", pic: "🥑" },
        { who: "mia", es: "¿Una palta? ¡Ah, un aguacate! Pero el aguacate no va en la ensalada de frutas.", de: "Eine „palta“? Ach so, eine Avocado! Aber Avocado gehört nicht in den Obstsalat.", en: "A “palta”? Oh, an avocado! But avocado doesn't go in a fruit salad.", pic: "🤭" },
        { who: "alex", es: "¿Y este coco? Cuesta treinta pesos. Es un poco caro, pero ¿lo compramos?", de: "Und diese Kokosnuss? Sie kostet dreißig Pesos. Ein bisschen teuer, aber kaufen wir sie?", en: "And this coconut? It costs thirty pesos. It's a bit expensive, but shall we buy it?", pic: "🥥" },
        { who: "coco", es: "¿Comprarme a mí? ¡No, no, no! ¡Yo no estoy a la venta!", de: "Mich kaufen? Nein, nein, nein! Ich bin nicht zu verkaufen!", en: "Buy me? No, no, no! I'm not for sale!", pic: "🦜" },
        { who: "valen", es: "¡Jaja! Vos no, Coco. ¡Ese coco de ahí!", de: "Haha! Nicht du, Coco. Die Kokosnuss da!", en: "Haha! Not you, Coco. That coconut there!", pic: "😂" },
        { who: "mia", es: "Gastamos sesenta y cinco pesos. ¿Ahora qué compramos: una piña o una sandía?", de: "Wir haben fünfundsechzig Pesos ausgegeben. Was kaufen wir jetzt: eine Ananas oder eine Wassermelone?", en: "We've spent sixty-five pesos. What shall we buy now: a pineapple or a watermelon?", pic: "🤔" },
        { who: "alex", es: "¡La piña! La sandía es más cara y pesa más que yo.", de: "Die Ananas! Die Wassermelone ist teurer und wiegt mehr als ich.", en: "The pineapple! The watermelon is more expensive and weighs more than me.", pic: "🍍" }
      ],
      questions: [
        { q: "¿Cómo dice Valen «fresas»?", de: "Wie sagt Valen zu Erdbeeren?", en: "What does Valen call strawberries?", opts: ["frutillas", "palta", "ananá"], a: 0 },
        { q: "¿Cuánto cuesta el mango?", de: "Wie viel kostet die Mango?", en: "How much is the mango?", opts: ["veinte pesos", "quince pesos", "treinta pesos"], a: 1 },
        { q: "¿Por qué no compran la sandía?", de: "Warum kaufen sie die Wassermelone nicht?", en: "Why don't they buy the watermelon?", opts: ["No les gusta.", "No hay sandías.", "Es más cara y pesa mucho."], a: 2 }
      ],
      phrases: [
        { es: "¿Cuánto cuesta?", de: "Wie viel kostet das?", en: "How much is it?" },
        { es: "Medio kilo de fresas, por favor.", de: "Ein halbes Kilo Erdbeeren, bitte.", en: "Half a kilo of strawberries, please." },
        { es: "¡Qué caro!", de: "Wie teuer!", en: "That's expensive!" },
        { es: "Lo llevo.", de: "Ich nehme es.", en: "I'll take it." }
      ],
      slang: ["Che", "¡Dale!", "¡Qué rico!", "¡Qué chévere!"],
      tips: [
        { es: "Para no repetir, usamos lo y la: «¿El mango? Lo compro.» «¿La piña? La compro.»", de: "Damit du nichts wiederholen musst, sagst du lo und la: „¿El mango? Lo compro.“ (Die Mango? Die kaufe ich.) „¿La piña? La compro.“ (Die Ananas? Die kaufe ich.)", en: "So you don't repeat yourself, use lo and la: “¿El mango? Lo compro.” (The mango? I'll buy it.) “¿La piña? La compro.” (The pineapple? I'll buy it.)" },
        { es: "Una cosa cuesta, dos cosas cuestan: «El mango cuesta quince pesos. Las fresas cuestan veinte.»", de: "Eine Sache „cuesta“, mehrere Sachen „cuestan“: „El mango cuesta quince pesos.“ „Las fresas cuestan veinte.“", en: "One thing “cuesta”, several things “cuestan”: “El mango cuesta quince pesos.” “Las fresas cuestan veinte.”" }
      ],
      note: { es: "Muchas frutas cambian de nombre: en Argentina la fresa es frutilla y el aguacate es palta. ¡Y en Venezuela la sandía se llama patilla!", de: "Viele Früchte heißen in jedem Land anders: In Argentinien heißt die Erdbeere „frutilla“ und die Avocado „palta“. Und in Venezuela heißt die Wassermelone „patilla“!", en: "Lots of fruits change their names: in Argentina a strawberry is a “frutilla” and an avocado is a “palta”. And in Venezuela a watermelon is called a “patilla”!" }
    },

    /* ---------- 4. Por la ciudad: direcciones e imperativo ---------- */
    {
      id: "a2-ciudad", level: "A2", title: "Por la ciudad", pic: "🏙️", sticker: "🧭", color: "leaf",
      de: "Unterwegs in der Stadt", en: "Around town",
      words: [
        { es: "la calle", de: "die Straße", en: "street", pic: "🛣️" },
        { es: "la esquina", de: "die Ecke", en: "corner", pic: "📐" },
        { es: "el semáforo", de: "die Ampel", en: "traffic lights", pic: "🚦" },
        { es: "el puente", de: "die Brücke", en: "bridge", pic: "🌉" },
        { es: "la plaza", de: "der Platz", en: "square", pic: "⛲" },
        { es: "el museo", de: "das Museum", en: "museum", pic: "🏛️" },
        { es: "la panadería", de: "die Bäckerei", en: "bakery", pic: "🥐" },
        { es: "a la derecha", de: "rechts", en: "on the right, to the right", pic: "➡️" },
        { es: "a la izquierda", de: "links", en: "on the left, to the left", pic: "⬅️" },
        { es: "todo derecho", de: "geradeaus", en: "straight on", pic: "⬆️", vary: { es: "todo recto" } },
        { es: "girar", de: "abbiegen", en: "to turn", pic: "↪️", vary: { ar: "doblar", mx: "dar vuelta" } },
        { es: "cruzar", de: "überqueren", en: "to cross", pic: "🚸" }
      ],
      story: [
        { who: "mia", es: "¡Ay, no! Me perdí. ¿Dónde está el museo de los dinosaurios?", de: "Oh nein! Ich habe mich verlaufen. Wo ist das Dinosauriermuseum?", en: "Oh no! I'm lost. Where's the dinosaur museum?", pic: "🦖" },
        { who: "coco", es: "¡Tranquila, Mía! Yo te veo desde arriba.", de: "Keine Sorge, Mía! Ich sehe dich von oben.", en: "Don't worry, Mía! I can see you from up here.", pic: "🦜" },
        { who: "coco", es: "Sigue todo derecho hasta el semáforo.", de: "Geh immer geradeaus bis zur Ampel.", en: "Go straight on to the traffic lights.", pic: "🚦" },
        { who: "mia", es: "Ya llegué al semáforo. ¿Y ahora?", de: "Ich bin an der Ampel. Und jetzt?", en: "I'm at the traffic lights. Now what?", pic: "🙋‍♀️" },
        { who: "coco", es: "Gira a la izquierda… ¡y cruza el río volando!", de: "Bieg links ab … und flieg über den Fluss!", en: "Turn left… and fly across the river!", pic: "🪽" },
        { who: "mia", es: "¡Coco! ¡Yo no tengo alas!", de: "Coco! Ich habe doch keine Flügel!", en: "Coco! I don't have wings!", pic: "😅" },
        { who: "valen", es: "¡Jaja! Mía, escuchame a mí. Doblá a la derecha y cruzá el puente.", de: "Haha! Mía, hör lieber auf mich. Bieg rechts ab und geh über die Brücke.", en: "Haha! Mía, listen to me. Turn right and cross the bridge.", pic: "🌉" },
        { who: "alex", es: "Luego sigue por la calle de la panadería. ¡Huele genial!", de: "Dann geh weiter durch die Straße mit der Bäckerei. Da riecht es super!", en: "Then keep going down the street with the bakery. It smells great!", pic: "🥐" },
        { who: "mia", es: "Ya veo la panadería… ¡y una plaza con una fuente!", de: "Ich sehe schon die Bäckerei … und einen Platz mit einem Brunnen!", en: "I can see the bakery… and a square with a fountain!", pic: "⛲" },
        { who: "alex", es: "¡Muy bien! El museo está en la esquina, al lado de la plaza.", de: "Super! Das Museum ist an der Ecke, neben dem Platz.", en: "Great! The museum is on the corner, next to the square.", pic: "🏛️" },
        { who: "mia", es: "¡Llegué! ¡Mira, un dinosaurio enorme!", de: "Ich bin da! Schau mal, ein riesiger Dinosaurier!", en: "I made it! Look, a huge dinosaur!", pic: "🦕" },
        { who: "coco", es: "¡Tá jevi! La próxima vez te presto mis alas.", de: "Cool! Nächstes Mal leihe ich dir meine Flügel.", en: "Cool! Next time I'll lend you my wings.", pic: "🦜" }
      ],
      questions: [
        { q: "¿Adónde quiere ir Mía?", de: "Wohin will Mía?", en: "Where does Mía want to go?", opts: ["a la panadería", "a la plaza", "al museo"], a: 2 },
        { q: "¿Por qué Mía no puede cruzar el río volando?", de: "Warum kann Mía nicht über den Fluss fliegen?", en: "Why can't Mía fly across the river?", opts: ["Porque no tiene alas.", "Porque tiene miedo.", "Porque está cansada."], a: 0 },
        { q: "¿Dónde está el museo?", de: "Wo ist das Museum?", en: "Where is the museum?", opts: ["debajo del puente", "en la esquina, al lado de la plaza", "dentro de la panadería"], a: 1 }
      ],
      phrases: [
        { es: "¿Dónde está el museo?", de: "Wo ist das Museum?", en: "Where is the museum?" },
        { es: "Sigue todo derecho.", de: "Geh immer geradeaus.", en: "Go straight on." },
        { es: "Gira a la derecha.", de: "Bieg rechts ab.", en: "Turn right." },
        { es: "Cruza la calle en el semáforo.", de: "Geh an der Ampel über die Straße.", en: "Cross the street at the traffic lights." }
      ],
      slang: ["Harto", "¡Venga!", "¡Ándale!", "¡Tá jevi!"],
      tips: [
        { es: "Para dar instrucciones a un amigo: gira, sigue, cruza, mira. Valen dice: doblá, seguí, cruzá, mirá.", de: "So gibst du einem Freund Anweisungen: gira (bieg ab), sigue (geh weiter), cruza (geh rüber), mira (schau). Valen aus Argentinien sagt: doblá, seguí, cruzá, mirá.", en: "To give a friend directions: gira (turn), sigue (keep going), cruza (cross), mira (look). Valen from Argentina says: doblá, seguí, cruzá, mirá." },
        { es: "¡Cuidado! «A la derecha» es un lado, pero «todo derecho» quiere decir sin girar.", de: "Vorsicht! „A la derecha“ heißt rechts, aber „todo derecho“ heißt geradeaus.", en: "Careful! “A la derecha” means right, but “todo derecho” means straight on." }
      ],
      note: { es: "En América Latina las distancias se cuentan en cuadras: «Camina dos cuadras». En España, un bloque de casas se llama «manzana»… ¡como la fruta!", de: "In Lateinamerika zählt man Straßenblocks in „cuadras“: „Camina dos cuadras“ heißt „Geh zwei Blocks weiter“. In Spanien heißt ein Häuserblock „manzana“ … wie der Apfel!", en: "In Latin America distances are counted in “cuadras”: “Camina dos cuadras” means “Walk two blocks”. In Spain a block of houses is called a “manzana”… like the apple!" }
    },

    /* ---------- 5. En el médico: me duele, consejos ---------- */
    {
      id: "a2-medico", level: "A2", title: "En el médico", pic: "🏥", sticker: "🩺", color: "sea",
      de: "Beim Arzt", en: "At the doctor's",
      words: [
        { es: "el médico / la médica", de: "der Arzt / die Ärztin", en: "doctor", pic: "🧑‍⚕️" },
        { es: "estar enfermo", de: "krank sein", en: "to be ill", pic: "🤒", vary: { es: "estar malo" } },
        { es: "la fiebre", de: "das Fieber", en: "fever, temperature", pic: "🌡️" },
        { es: "la tos", de: "der Husten", en: "cough", pic: "😷" },
        { es: "me duele la garganta", de: "mir tut der Hals weh", en: "my throat hurts", pic: "🤕" },
        { es: "el resfriado", de: "die Erkältung", en: "cold", pic: "🤧", vary: { mx: "la gripa", ar: "el resfrío" } },
        { es: "el jarabe", de: "der Hustensaft", en: "cough syrup", pic: "🥄" },
        { es: "la medicina", de: "das Medikament", en: "medicine", pic: "💊", vary: { ar: "el remedio" } },
        { es: "descansar", de: "sich ausruhen", en: "to rest", pic: "🛌" },
        { es: "el té", de: "der Tee", en: "tea", pic: "🍵" },
        { es: "la miel", de: "der Honig", en: "honey", pic: "🍯" },
        { es: "curarse", de: "gesund werden", en: "to get better", pic: "💪" }
      ],
      story: [
        { who: "alex", es: "¡Qué rollo! Estoy malo: tengo fiebre, tos y me duele la garganta.", de: "Wie blöd! Ich bin krank: Ich habe Fieber, Husten und Halsweh.", en: "What a pain! I'm ill: I've got a fever, a cough and a sore throat.", pic: "🤒" },
        { who: "valen", es: "¿Malo? ¡Pero si vos sos re bueno, Álex!", de: "„Malo“, also böse? Aber du bist doch total lieb, Álex!", en: "“Malo”, as in bad? But you're super nice, Álex!", pic: "😇" },
        { who: "alex", es: "¡Jaja! En España, «estar malo» quiere decir «estar enfermo».", de: "Haha! In Spanien heißt „estar malo“ so viel wie „krank sein“.", en: "Haha! In Spain, “estar malo” means “to be ill”.", pic: "🇪🇸" },
        { who: "mia", es: "¡Pobrecito! ¿Fuiste al médico?", de: "Du Armer! Warst du beim Arzt?", en: "Poor you! Did you go to the doctor?", pic: "🧑‍⚕️" },
        { who: "alex", es: "Sí, ayer. La médica me dijo: «Es un resfriado. Descansa y toma este jarabe».", de: "Ja, gestern. Die Ärztin hat gesagt: „Das ist eine Erkältung. Ruh dich aus und nimm diesen Hustensaft.“", en: "Yes, yesterday. The doctor said: “It's a cold. Rest and take this syrup.”", pic: "🥄" },
        { who: "alex", es: "Pero el sábado tengo un partido y no voy a poder jugar.", de: "Aber am Samstag habe ich ein Spiel, und ich kann nicht mitspielen.", en: "But on Saturday I have a match and I won't be able to play.", pic: "😢" },
        { who: "valen", es: "¡Qué macana! Pero descansá mucho, así te curás más rápido.", de: "So ein Pech! Aber ruh dich gut aus, dann wirst du schneller gesund.", en: "What a shame! But get lots of rest, then you'll get better faster.", pic: "🛌" },
        { who: "coco", es: "¡Yo tengo la medicina perfecta: un guineo cada hora!", de: "Ich habe die perfekte Medizin: jede Stunde eine Banane!", en: "I've got the perfect medicine: a banana every hour!", pic: "🍌" },
        { who: "mia", es: "¡Ay, Coco, eso no cura! Mejor un té con miel. Mi abuela siempre me lo prepara.", de: "Ach Coco, davon wird man nicht gesund! Besser ein Tee mit Honig. Meine Oma macht ihn mir immer.", en: "Oh Coco, that won't make you better! Tea with honey is better. My grandma always makes it for me.", pic: "🍵" },
        { who: "alex", es: "Vale: descanso, jarabe y té con miel. ¡Sois los mejores!", de: "Okay: ausruhen, Hustensaft und Tee mit Honig. Ihr seid die Besten!", en: "OK: rest, syrup and tea with honey. You're the best!", pic: "🥰" },
        { who: "coco", es: "¡Tá jevi! Y el sábado yo voy a gritar «¡gol!» más fuerte que nadie.", de: "Cool! Und am Samstag rufe ich „Tor!“ lauter als alle anderen.", en: "Cool! And on Saturday I'm going to shout “goal!” louder than anyone.", pic: "📣" }
      ],
      questions: [
        { q: "¿Qué tiene Álex?", de: "Was hat Álex?", en: "What's wrong with Álex?", opts: ["Le duele un diente.", "Se rompió un brazo.", "Tiene un resfriado."], a: 2 },
        { q: "¿Qué quiere decir «estar malo» en España?", de: "Was bedeutet „estar malo“ in Spanien?", en: "What does “estar malo” mean in Spain?", opts: ["ser antipático", "estar enfermo", "tener hambre"], a: 1 },
        { q: "¿Qué le prepara a Mía su abuela?", de: "Was macht Mías Oma ihr immer?", en: "What does Mía's grandma make for her?", opts: ["un té con miel", "un guineo", "un jarabe"], a: 0 }
      ],
      phrases: [
        { es: "Me duele la barriga.", de: "Ich habe Bauchweh.", en: "My tummy hurts." },
        { es: "Tengo fiebre.", de: "Ich habe Fieber.", en: "I have a temperature." },
        { es: "Tienes que descansar.", de: "Du musst dich ausruhen.", en: "You have to rest." },
        { es: "¡Que te mejores!", de: "Gute Besserung!", en: "Get well soon!" }
      ],
      slang: ["¡Qué embole!", "¡Ay, bendito!", "Vale", "Re"],
      tips: [
        { es: "«Me duele» funciona como «me gusta»: me duele la garganta, me duelen los pies.", de: "„Me duele“ funktioniert wie „me gusta“: me duele la garganta (eine Sache), me duelen los pies (mehrere Sachen).", en: "“Me duele” works like “me gusta”: me duele la garganta (one thing), me duelen los pies (more than one)." },
        { es: "Para dar un consejo: «Tienes que descansar». O más directo: «¡Descansa!».", de: "Einen Rat gibst du mit „Tienes que …“ (du musst …): „Tienes que descansar.“ Oder direkter: „¡Descansa!“ (Ruh dich aus!)", en: "To give advice: “Tienes que descansar” (you have to rest). Or more directly: “¡Descansa!” (Rest!)" }
      ],
      note: { es: "Cuando alguien estornuda, en español decimos «¡Salud!». ¡Es como «Gesundheit» en alemán!", de: "Wenn jemand niest, sagt man auf Spanisch „¡Salud!“ – genau wie „Gesundheit!“ auf Deutsch.", en: "When someone sneezes, in Spanish we say “¡Salud!” – like “Bless you!” in English." }
    },

    /* ---------- 6. Vacaciones en la playa: estar + gerundio ---------- */
    {
      id: "a2-playa", level: "A2", title: "Vacaciones en la playa", pic: "🏖️", sticker: "🐬", color: "hib",
      de: "Ferien am Strand", en: "Beach holidays",
      words: [
        { es: "las vacaciones", de: "die Ferien", en: "holidays", pic: "🧳" },
        { es: "la playa", de: "der Strand", en: "beach", pic: "🏖️" },
        { es: "el mar", de: "das Meer", en: "sea", pic: "🌊" },
        { es: "la ola", de: "die Welle", en: "wave", pic: "🏄" },
        { es: "el castillo de arena", de: "die Sandburg", en: "sandcastle", pic: "🏰" },
        { es: "la concha", de: "die Muschel", en: "shell", pic: "🐚", vary: { ar: "el caracol" } },
        { es: "el cangrejo", de: "die Krabbe", en: "crab", pic: "🦀" },
        { es: "la chancla", de: "der Flip-Flop", en: "flip-flop", pic: "🩴", vary: { ar: "la ojota", do: "la chancleta", cu: "la chancleta" } },
        { es: "el protector solar", de: "die Sonnencreme", en: "sun cream", pic: "🧴", vary: { es: "la crema solar", mx: "el bloqueador" } },
        { es: "tomar el sol", de: "sich sonnen", en: "to sunbathe", pic: "😎" },
        { es: "bucear", de: "tauchen, schnorcheln", en: "to dive, to snorkel", pic: "🤿" },
        { es: "nadar", de: "schwimmen", en: "to swim", pic: "🏊" }
      ],
      story: [
        { who: "coco", es: "¡Hola desde la playa! Soy Coco, su reportero de vacaciones.", de: "Hallo vom Strand! Ich bin Coco, euer Ferien-Reporter.", en: "Hello from the beach! I'm Coco, your holiday reporter.", pic: "🎙️" },
        { who: "coco", es: "¿Qué están haciendo mis amigos? ¡Vamos a ver!", de: "Was machen meine Freunde gerade? Schauen wir mal!", en: "What are my friends doing? Let's see!", pic: "👀" },
        { who: "mia", es: "Estoy construyendo un castillo de arena. ¡Está quedando padrísimo!", de: "Ich baue gerade eine Sandburg. Sie wird mega!", en: "I'm building a sandcastle. It's turning out awesome!", pic: "🏰" },
        { who: "alex", es: "Yo estoy tomando el sol con mi crema solar. ¡Qué gustazo!", de: "Ich sonne mich gerade – natürlich mit Sonnencreme. Herrlich!", en: "I'm sunbathing with my sun cream on. Bliss!", pic: "😎" },
        { who: "valen", es: "¡Y yo estoy buceando! Hay peces de colores y caracoles re lindos.", de: "Und ich schnorchle gerade! Hier gibt es bunte Fische und total schöne Muscheln.", en: "And I'm snorkelling! There are colourful fish and really pretty shells.", pic: "🤿" },
        { who: "coco", es: "¡Atención! Un cangrejo está caminando hacia la toalla de Álex.", de: "Achtung! Eine Krabbe läuft gerade zu Álex' Handtuch.", en: "Attention! A crab is walking towards Álex's towel.", pic: "🦀" },
        { who: "alex", es: "¿Qué? ¡Eh, que se está llevando mi chancla!", de: "Was? He, die klaut gerade meinen Flip-Flop!", en: "What? Hey, it's running off with my flip-flop!", pic: "🩴" },
        { who: "mia", es: "¡Aguas, Álex! ¡Ahora está corriendo hacia el mar!", de: "Pass auf, Álex! Jetzt rennt sie zum Meer!", en: "Watch out, Álex! Now it's running towards the sea!", pic: "🌊" },
        { who: "valen", es: "¡Dale, corré, Álex! ¡Si no, vas a tener que nadar!", de: "Los, renn, Álex! Sonst musst du schwimmen!", en: "Come on, run, Álex! Or you'll have to swim!", pic: "🏃" },
        { who: "coco", es: "¡Increíble! ¡Una ola le está devolviendo la chancla a Álex!", de: "Unglaublich! Eine Welle bringt Álex gerade seinen Flip-Flop zurück!", en: "Incredible! A wave is bringing Álex's flip-flop back to him!", pic: "🏄" },
        { who: "alex", es: "¡Gracias, ola! Pero ahora estoy mojado de la cabeza a los pies.", de: "Danke, Welle! Aber jetzt bin ich von Kopf bis Fuß nass.", en: "Thanks, wave! But now I'm wet from head to toe.", pic: "💦" },
        { who: "coco", es: "Y el cangrejo… ¡está bailando en la arena! ¡Tá jevi!", de: "Und die Krabbe … tanzt gerade im Sand! Cool!", en: "And the crab… is dancing in the sand! Cool!", pic: "💃" }
      ],
      questions: [
        { q: "¿Qué está haciendo Mía?", de: "Was macht Mía gerade?", en: "What is Mía doing?", opts: ["Está buceando.", "Está tomando el sol.", "Está construyendo un castillo de arena."], a: 2 },
        { q: "¿Qué se lleva el cangrejo?", de: "Was schnappt sich die Krabbe?", en: "What does the crab take?", opts: ["la chancla de Álex", "la toalla de Mía", "una concha"], a: 0 },
        { q: "¿Quién le devuelve la chancla a Álex?", de: "Wer bringt Álex seinen Flip-Flop zurück?", en: "Who gives Álex his flip-flop back?", opts: ["Coco", "una ola", "Valen"], a: 1 }
      ],
      phrases: [
        { es: "¿Qué estás haciendo?", de: "Was machst du gerade?", en: "What are you doing?" },
        { es: "Estoy nadando en el mar.", de: "Ich schwimme gerade im Meer.", en: "I'm swimming in the sea." },
        { es: "Ponte protector solar.", de: "Creme dich mit Sonnencreme ein.", en: "Put some sun cream on." },
        { es: "¡Vamos a la playa!", de: "Auf zum Strand!", en: "Let's go to the beach!" }
      ],
      slang: ["¡Qué pasada!", "¡Wepa!", "¡Dale!", "¡Aguas!"],
      tips: [
        { es: "Para decir lo que pasa ahora mismo: estar + -ando o -iendo. Nadar → estoy nadando. Comer → estoy comiendo.", de: "Für das, was genau jetzt passiert: estar + -ando oder -iendo. Nadar → estoy nadando (ich schwimme gerade). Comer → estoy comiendo (ich esse gerade).", en: "To say what's happening right now: estar + -ando or -iendo. Nadar → estoy nadando (I'm swimming). Comer → estoy comiendo (I'm eating)." },
        { es: "Algunos son especiales: leer → leyendo, dormir → durmiendo, traer → trayendo.", de: "Ein paar sind besonders: leer → leyendo, dormir → durmiendo, traer → trayendo. „Estoy leyendo“ heißt: Ich lese gerade.", en: "A few are special: leer → leyendo, dormir → durmiendo, traer → trayendo. “Estoy leyendo” means: I'm reading." }
      ],
      note: { es: "En el Caribe, el mar está calentito todo el año: ¡a unos veintisiete grados! En el mar del Norte, en verano, el agua está a unos diecisiete.", de: "In der Karibik ist das Meer das ganze Jahr über schön warm: ungefähr 27 Grad! Die Nordsee hat im Sommer nur ungefähr 17 Grad.", en: "In the Caribbean the sea is nice and warm all year round: about 27 degrees! The North Sea is only about 17 degrees in summer." }
    },

    /* ---------- 7. Los deportes: comparativos y superlativos ---------- */
    {
      id: "a2-deportes", level: "A2", title: "Los deportes", pic: "🏅", sticker: "🏆", color: "sun",
      de: "Sport", en: "Sports",
      words: [
        { es: "el deporte", de: "der Sport", en: "sport", pic: "🏅" },
        { es: "el béisbol", de: "der Baseball", en: "baseball", pic: "⚾" },
        { es: "el baloncesto", de: "der Basketball", en: "basketball", pic: "🏀", vary: { mx: "el básquetbol", ar: "el básquet" } },
        { es: "la natación", de: "das Schwimmen", en: "swimming", pic: "🏊" },
        { es: "la carrera", de: "das Wettrennen", en: "race", pic: "🏁" },
        { es: "el equipo", de: "die Mannschaft, das Team", en: "team", pic: "👥" },
        { es: "el ganador / la ganadora", de: "der Gewinner / die Gewinnerin", en: "winner", pic: "🏆" },
        { es: "rápido", de: "schnell", en: "fast", pic: "⚡" },
        { es: "lento", de: "langsam", en: "slow", pic: "🐌" },
        { es: "fuerte", de: "stark", en: "strong", pic: "🏋️" },
        { es: "mejor", de: "besser", en: "better", pic: "🥇" },
        { es: "peor", de: "schlechter", en: "worse", pic: "📉" }
      ],
      story: [
        { who: "alex", es: "El fútbol es el mejor deporte del mundo. ¡Es más divertido que todos los demás!", de: "Fußball ist der beste Sport der Welt. Er macht mehr Spaß als alle anderen!", en: "Football is the best sport in the world. It's more fun than all the others!", pic: "⚽" },
        { who: "valen", es: "¡Obvio! Pero en Argentina jugamos mejor que en España, ¿eh?", de: "Na klar! Aber in Argentinien spielen wir besser als in Spanien, oder?", en: "Obviously! But in Argentina we play better than in Spain, right?", pic: "😏" },
        { who: "coco", es: "¡Diache, no! El mejor deporte es el béisbol. En mi país es el rey.", de: "Oh Mann, nein! Der beste Sport ist Baseball. In meinem Land ist er der König.", en: "Oh man, no! The best sport is baseball. In my country it's the king.", pic: "⚾" },
        { who: "mia", es: "Para mí, el básquetbol o la natación. ¡Son más emocionantes que el fútbol!", de: "Für mich Basketball oder Schwimmen. Die sind spannender als Fußball!", en: "For me, basketball or swimming. They're more exciting than football!", pic: "🏀" },
        { who: "alex", es: "Vale, vale. ¿Hacemos una carrera hasta el árbol? ¡El ganador elige el deporte!", de: "Okay, okay. Machen wir ein Wettrennen bis zum Baum? Wer gewinnt, sucht den Sport aus!", en: "OK, OK. Shall we race to the tree? The winner chooses the sport!", pic: "🏁" },
        { who: "valen", es: "¡Dale! Preparados, listos… ¡ya!", de: "Okay! Auf die Plätze, fertig … los!", en: "OK! Ready, steady… go!", pic: "🏃" },
        { who: "coco", es: "¡Gané yo! Soy el más rápido de todos.", de: "Ich habe gewonnen! Ich bin der Schnellste von allen.", en: "I won! I'm the fastest of all.", pic: "🦜" },
        { who: "mia", es: "¡Coco, tú no corriste, volaste! Eso no vale.", de: "Coco, du bist nicht gerannt, du bist geflogen! Das gilt nicht.", en: "Coco, you didn't run, you flew! That doesn't count.", pic: "🙅‍♀️" },
        { who: "alex", es: "Entonces gana Valen. ¡Corre más rápido que yo! Hoy soy más lento que una tortuga.", de: "Dann gewinnt Valen. Sie läuft schneller als ich! Heute bin ich langsamer als eine Schildkröte.", en: "Then Valen wins. She runs faster than me! Today I'm slower than a tortoise.", pic: "🐢" },
        { who: "valen", es: "¡Gracias! Pero Mía es la más fuerte, y Álex mete los mejores goles.", de: "Danke! Aber Mía ist die Stärkste, und Álex schießt die besten Tore.", en: "Thanks! But Mía is the strongest, and Álex scores the best goals.", pic: "💪" },
        { who: "coco", es: "¿Y yo qué? ¿Soy el peor?", de: "Und ich? Bin ich der Schlechteste?", en: "And what about me? Am I the worst?", pic: "🥺" },
        { who: "mia", es: "¡No! Tú eres el mejor animador. ¡Juntos somos el mejor equipo!", de: "Nein! Du feuerst uns am besten an. Zusammen sind wir das beste Team!", en: "No! You're the best cheerleader. Together we're the best team!", pic: "👥" }
      ],
      questions: [
        { q: "¿Cuál es el mejor deporte para Coco?", de: "Welcher Sport ist für Coco der beste?", en: "Which sport is the best for Coco?", opts: ["el béisbol", "la natación", "el fútbol"], a: 0 },
        { q: "¿Por qué no vale la carrera de Coco?", de: "Warum zählt Cocos Rennen nicht?", en: "Why doesn't Coco's race count?", opts: ["Porque corre muy lento.", "Porque no corrió, voló.", "Porque se cayó."], a: 1 },
        { q: "¿Quién gana la carrera al final?", de: "Wer gewinnt am Ende das Rennen?", en: "Who wins the race in the end?", opts: ["Mía", "Coco", "Valen"], a: 2 }
      ],
      phrases: [
        { es: "Corro más rápido que tú.", de: "Ich laufe schneller als du.", en: "I run faster than you." },
        { es: "¿Cuál es tu deporte favorito?", de: "Was ist dein Lieblingssport?", en: "What's your favourite sport?" },
        { es: "Somos el mejor equipo.", de: "Wir sind das beste Team.", en: "We're the best team." },
        { es: "¡Eso no vale!", de: "Das gilt nicht!", en: "That doesn't count!" }
      ],
      slang: ["¡Brutal!", "¡Hágale!", "¡Bárbaro!", "¡Diache!"],
      tips: [
        { es: "Para comparar: más… que y menos… que. «Valen es más rápida que Álex.»", de: "Zum Vergleichen: más … que (mehr … als) und menos … que (weniger … als). „Valen es más rápida que Álex.“ (Valen ist schneller als Álex.)", en: "To compare: más… que (more… than) and menos… que (less… than). “Valen es más rápida que Álex.” (Valen is faster than Álex.)" },
        { es: "¡Ojo! «Bueno» se convierte en «mejor» y «malo» en «peor»: «El béisbol es mejor que el tenis.»", de: "Achtung! Aus „bueno“ wird „mejor“ (besser) und aus „malo“ wird „peor“ (schlechter): „El béisbol es mejor que el tenis.“", en: "Careful! “Bueno” becomes “mejor” (better) and “malo” becomes “peor” (worse): “El béisbol es mejor que el tenis.”" }
      ],
      note: { es: "En República Dominicana el deporte favorito no es el fútbol, ¡es el béisbol! Muchos jugadores de las grandes ligas de Estados Unidos son dominicanos.", de: "In der Dominikanischen Republik ist nicht Fußball der Lieblingssport, sondern Baseball! Viele Spieler der großen US-Profiligen kommen aus der Dominikanischen Republik.", en: "In the Dominican Republic the favourite sport isn't football, it's baseball! Lots of players in the big US leagues are Dominican." }
    },

    /* ---------- 8. En el campo: ir a + infinitivo ---------- */
    {
      id: "a2-campo", level: "A2", title: "En el campo", pic: "🌾", sticker: "🐓", color: "leaf",
      de: "Auf dem Land", en: "In the countryside",
      words: [
        { es: "el campo", de: "das Land", en: "countryside", pic: "🌾" },
        { es: "la granja", de: "der Bauernhof", en: "farm", pic: "🚜" },
        { es: "la gallina", de: "das Huhn", en: "hen", pic: "🐔" },
        { es: "la oveja", de: "das Schaf", en: "sheep", pic: "🐑" },
        { es: "la cabra", de: "die Ziege", en: "goat", pic: "🐐" },
        { es: "el huerto", de: "der Gemüsegarten", en: "vegetable patch", pic: "🥕", vary: { ar: "la huerta" } },
        { es: "la tienda de campaña", de: "das Zelt", en: "tent", pic: "⛺", vary: { mx: "la casa de campaña", ar: "la carpa", cl: "la carpa" } },
        { es: "la estrella", de: "der Stern", en: "star", pic: "⭐" },
        { es: "el río", de: "der Fluss", en: "river", pic: "🏞️" },
        { es: "el bosque", de: "der Wald", en: "forest, woods", pic: "🌲" },
        { es: "la mariposa", de: "der Schmetterling", en: "butterfly", pic: "🦋" },
        { es: "la flor", de: "die Blume", en: "flower", pic: "🌻" }
      ],
      story: [
        { who: "valen", es: "¡Bienvenidos al campo! Esta es la granja de mi tío.", de: "Willkommen auf dem Land! Das ist der Bauernhof von meinem Onkel.", en: "Welcome to the countryside! This is my uncle's farm.", pic: "🚜" },
        { who: "mia", es: "¡Qué padre! ¡Mira cuántas flores y mariposas! ¿Qué vamos a hacer hoy?", de: "Wie cool! Schau mal, wie viele Blumen und Schmetterlinge! Was machen wir heute?", en: "How cool! Look at all the flowers and butterflies! What are we going to do today?", pic: "🦋" },
        { who: "valen", es: "Tengo una lista. Primero, vamos a darles de comer a las gallinas y a las ovejas.", de: "Ich habe eine Liste. Zuerst füttern wir die Hühner und die Schafe.", en: "I've got a list. First, we're going to feed the hens and the sheep.", pic: "📝" },
        { who: "alex", es: "Después vamos a recoger zanahorias en el huerto, ¿vale?", de: "Danach ernten wir Karotten im Gemüsegarten, okay?", en: "After that we're going to pick carrots in the vegetable patch, OK?", pic: "🥕" },
        { who: "valen", es: "A la tarde vamos a caminar por el bosque hasta el río.", de: "Am Nachmittag wandern wir durch den Wald bis zum Fluss.", en: "In the afternoon we're going to walk through the woods to the river.", pic: "🌲" },
        { who: "valen", es: "Y a la noche vamos a dormir en una carpa y mirar las estrellas.", de: "Und in der Nacht schlafen wir in einem Zelt und schauen uns die Sterne an.", en: "And at night we're going to sleep in a tent and look at the stars.", pic: "⛺" },
        { who: "coco", es: "¡Tá jevi! Yo voy a cantar canciones toda la noche.", de: "Cool! Ich werde die ganze Nacht Lieder singen.", en: "Cool! I'm going to sing songs all night.", pic: "🎶" },
        { who: "alex", es: "¡Uf! Entonces no voy a pegar ojo.", de: "Puh! Dann mache ich kein Auge zu.", en: "Ugh! Then I won't sleep a wink.", pic: "😅" },
        { who: "mia", es: "¡Aguas, Valen! ¡Esa cabra se está comiendo tu lista!", de: "Pass auf, Valen! Die Ziege da frisst gerade deine Liste!", en: "Watch out, Valen! That goat is eating your list!", pic: "🐐" },
        { who: "coco", es: "Demasiado tarde. ¡Ya se la comió entera!", de: "Zu spät. Sie hat sie schon ganz aufgefressen!", en: "Too late. It's already eaten the whole thing!", pic: "😮" },
        { who: "valen", es: "¡Uy, no! ¿Y ahora qué vamos a hacer?", de: "Oh nein! Und was machen wir jetzt?", en: "Oh no! So what are we going to do now?", pic: "😩" },
        { who: "mia", es: "¡Tranquila! Nos acordamos de todo: gallinas, huerto, bosque, río y estrellas.", de: "Keine Sorge! Wir wissen noch alles: Hühner, Gemüsegarten, Wald, Fluss und Sterne.", en: "Don't worry! We remember everything: hens, vegetable patch, woods, river and stars.", pic: "😊" }
      ],
      questions: [
        { q: "¿De quién es la granja?", de: "Wem gehört der Bauernhof?", en: "Whose farm is it?", opts: ["del tío de Valen", "del abuelo de Mía", "de Coco"], a: 0 },
        { q: "¿Dónde van a dormir por la noche?", de: "Wo schlafen sie in der Nacht?", en: "Where are they going to sleep at night?", opts: ["en la casa del tío", "al lado del río", "en una carpa"], a: 2 },
        { q: "¿Qué se comió la cabra?", de: "Was hat die Ziege gefressen?", en: "What did the goat eat?", opts: ["una zanahoria", "la lista de Valen", "una flor"], a: 1 }
      ],
      phrases: [
        { es: "Mañana voy a visitar una granja.", de: "Morgen besuche ich einen Bauernhof.", en: "Tomorrow I'm going to visit a farm." },
        { es: "¿Qué vamos a hacer hoy?", de: "Was machen wir heute?", en: "What are we going to do today?" },
        { es: "Vamos a dormir en una tienda de campaña.", de: "Wir schlafen in einem Zelt.", en: "We're going to sleep in a tent." },
        { es: "¡Mira las estrellas!", de: "Schau dir die Sterne an!", en: "Look at the stars!" }
      ],
      slang: ["¡Qué padre!", "¡Qué chulo!", "¡Bacán!", "¡Épale!"],
      tips: [
        { es: "Para hablar de planes: ir a + verbo. «Voy a nadar.» «Vamos a dormir en una carpa.»", de: "Für Pläne sagst du: ir a + Verb. „Voy a nadar.“ (Ich werde schwimmen.) „Vamos a dormir en una carpa.“ (Wir werden im Zelt schlafen.)", en: "To talk about plans: ir a + verb. “Voy a nadar.” (I'm going to swim.) “Vamos a dormir en una carpa.” (We're going to sleep in a tent.)" },
        { es: "«¡Vamos a…!» también sirve para invitar: «¡Vamos a jugar!»", de: "„¡Vamos a …!“ ist auch eine Einladung: „¡Vamos a jugar!“ (Komm, wir spielen!)", en: "“¡Vamos a…!” is also an invitation: “¡Vamos a jugar!” (Let's play!)" }
      ],
      note: { es: "En Argentina se dice «a la tarde» y «a la noche». En España dicen «por la tarde» y en México, «en la tarde».", de: "In Argentinien sagt man „a la tarde“ und „a la noche“ (am Nachmittag, in der Nacht). In Spanien sagt man „por la tarde“ und in Mexiko „en la tarde“.", en: "In Argentina people say “a la tarde” and “a la noche” (in the afternoon, at night). In Spain they say “por la tarde”, and in Mexico “en la tarde”." }
    },

    /* ---------- 9. ¿Qué quieres ser?: profesiones, porque ---------- */
    {
      id: "a2-trabajos", level: "A2", title: "¿Qué quieres ser?", pic: "🧑‍🚀", sticker: "🚀", color: "sea",
      de: "Was willst du werden?", en: "What do you want to be?",
      words: [
        { es: "el trabajo", de: "die Arbeit", en: "work, job", pic: "💼", vary: { mx: "la chamba", ar: "el laburo" } },
        { es: "el bombero / la bombera", de: "der Feuerwehrmann / die Feuerwehrfrau", en: "firefighter", pic: "🧑‍🚒" },
        { es: "el veterinario / la veterinaria", de: "der Tierarzt / die Tierärztin", en: "vet", pic: "🐾" },
        { es: "el astronauta / la astronauta", de: "der Astronaut / die Astronautin", en: "astronaut", pic: "🧑‍🚀" },
        { es: "el cocinero / la cocinera", de: "der Koch / die Köchin", en: "cook, chef", pic: "🧑‍🍳" },
        { es: "el policía / la policía", de: "der Polizist / die Polizistin", en: "police officer", pic: "👮" },
        { es: "el científico / la científica", de: "der Wissenschaftler / die Wissenschaftlerin", en: "scientist", pic: "🧑‍🔬" },
        { es: "el piloto / la piloto", de: "der Pilot / die Pilotin", en: "pilot", pic: "🧑‍✈️" },
        { es: "el cantante / la cantante", de: "der Sänger / die Sängerin", en: "singer", pic: "🧑‍🎤" },
        { es: "el granjero / la granjera", de: "der Bauer / die Bäuerin", en: "farmer", pic: "🧑‍🌾" },
        { es: "el pintor / la pintora", de: "der Maler / die Malerin", en: "painter", pic: "🧑‍🎨" },
        { es: "el dentista / la dentista", de: "der Zahnarzt / die Zahnärztin", en: "dentist", pic: "🦷" }
      ],
      story: [
        { who: "mia", es: "Hoy la maestra nos preguntó: «¿Qué quieren ser de grandes?»", de: "Heute hat uns die Lehrerin gefragt: „Was wollt ihr werden, wenn ihr groß seid?“", en: "Today our teacher asked us: “What do you want to be when you grow up?”", pic: "🏫" },
        { who: "mia", es: "Yo quiero ser veterinaria, porque me encantan los animales.", de: "Ich will Tierärztin werden, weil ich Tiere liebe.", en: "I want to be a vet because I love animals.", pic: "🐾" },
        { who: "alex", es: "Yo, de mayor, quiero ser cocinero. Mi padre es cocinero y su tortilla de patatas mola mucho.", de: "Ich will später Koch werden. Mein Vater ist Koch, und seine Kartoffeltortilla ist der Hammer.", en: "When I grow up, I want to be a chef. My dad is a chef and his potato omelette is amazing.", pic: "🧑‍🍳" },
        { who: "valen", es: "Mi mamá es científica. Su laburo es re interesante: estudia los volcanes.", de: "Meine Mama ist Wissenschaftlerin. Ihre Arbeit ist total spannend: Sie erforscht Vulkane.", en: "My mom is a scientist. Her job is super interesting: she studies volcanoes.", pic: "🌋" },
        { who: "valen", es: "Por eso yo también quiero ser científica… ¡o astronauta!", de: "Deshalb will ich auch Wissenschaftlerin werden … oder Astronautin!", en: "That's why I want to be a scientist too… or an astronaut!", pic: "🧑‍🚀" },
        { who: "mia", es: "¡Qué padre! Mi tío es bombero. Dice que su chamba es difícil, pero muy bonita.", de: "Wie cool! Mein Onkel ist Feuerwehrmann. Er sagt, seine Arbeit ist schwer, aber sehr schön.", en: "How cool! My uncle is a firefighter. He says his job is hard but really great.", pic: "🧑‍🚒" },
        { who: "alex", es: "¿Y tú, Coco? ¿Qué quieres ser?", de: "Und du, Coco? Was willst du werden?", en: "And you, Coco? What do you want to be?", pic: "🤔" },
        { who: "coco", es: "Ay… no sé. Quiero ser cantante, pero canto un chin mal.", de: "Ach … ich weiß nicht. Ich will Sänger werden, aber ich singe ein bisschen schief.", en: "Oh… I don't know. I want to be a singer, but I sing a bit badly.", pic: "🎤" },
        { who: "coco", es: "¿Policía? ¿Bombero? No sé qué elegir.", de: "Polizist? Feuerwehrmann? Ich weiß nicht, was ich nehmen soll.", en: "A police officer? A firefighter? I don't know what to choose.", pic: "🤷" },
        { who: "valen", es: "¡Che, Coco! Vos sabés volar. ¿Por qué no querés ser piloto?", de: "Hey, Coco! Du kannst doch fliegen. Warum willst du nicht Pilot werden?", en: "Hey, Coco! You can fly. Why don't you want to be a pilot?", pic: "✈️" },
        { who: "coco", es: "¡Tá jevi! ¡Voy a ser el primer loro piloto del mundo!", de: "Cool! Ich werde der erste Papageien-Pilot der Welt!", en: "Cool! I'm going to be the first parrot pilot in the world!", pic: "🦜" },
        { who: "alex", es: "¡Y nosotros, tus primeros pasajeros!", de: "Und wir sind deine ersten Passagiere!", en: "And we'll be your first passengers!", pic: "🧳" }
      ],
      questions: [
        { q: "¿Qué quiere ser Mía?", de: "Was will Mía werden?", en: "What does Mía want to be?", opts: ["astronauta", "veterinaria", "cocinera"], a: 1 },
        { q: "¿Qué estudia la mamá de Valen?", de: "Was erforscht Valens Mama?", en: "What does Valen's mom study?", opts: ["los volcanes", "los animales", "las estrellas"], a: 0 },
        { q: "¿Por qué puede ser piloto Coco?", de: "Warum kann Coco Pilot werden?", en: "Why can Coco be a pilot?", opts: ["Porque canta bien.", "Porque su tío es piloto.", "Porque sabe volar."], a: 2 }
      ],
      phrases: [
        { es: "¿Qué quieres ser de grande?", de: "Was willst du werden, wenn du groß bist?", en: "What do you want to be when you grow up?" },
        { es: "Quiero ser veterinaria porque me gustan los animales.", de: "Ich will Tierärztin werden, weil ich Tiere mag.", en: "I want to be a vet because I like animals." },
        { es: "Mi papá es bombero.", de: "Mein Papa ist Feuerwehrmann.", en: "My dad is a firefighter." },
        { es: "¿En qué trabaja tu mamá?", de: "Was macht deine Mama beruflich?", en: "What does your mom do?" }
      ],
      slang: ["La chamba", "El laburo", "Majo / maja", "Un chin"],
      tips: [
        { es: "Con las profesiones no decimos «un»: «Mi papá es bombero», no «es un bombero».", de: "Bei Berufen sagt man kein „un“: „Mi papá es bombero.“ Genau wie im Deutschen: „Mein Papa ist Feuerwehrmann.“", en: "With jobs we don't use “un”: “Mi papá es bombero” – not “es un bombero”. In English you say “a firefighter”!" },
        { es: "«¿Por qué?» sirve para preguntar y «porque» para responder: «¿Por qué quieres ser piloto? Porque me gusta volar.»", de: "„¿Por qué?“ (warum?) ist die Frage, „porque“ (weil) ist die Antwort: „¿Por qué quieres ser piloto? Porque me gusta volar.“", en: "“¿Por qué?” (why?) asks, and “porque” (because) answers: “¿Por qué quieres ser piloto? Porque me gusta volar.”" }
      ],
      note: { es: "En España se pregunta «¿Qué quieres ser de mayor?» y en América Latina, «¿Qué quieres ser de grande?».", de: "In Spanien fragt man „¿Qué quieres ser de mayor?“, in Lateinamerika „¿Qué quieres ser de grande?“. Beides heißt: Was willst du werden, wenn du groß bist?", en: "In Spain people ask “¿Qué quieres ser de mayor?” and in Latin America “¿Qué quieres ser de grande?”. Both mean: what do you want to be when you grow up?" }
    },

    /* ---------- 10. Cuando era pequeño: pretérito imperfecto ---------- */
    {
      id: "a2-pequeno", level: "A2", title: "Cuando era pequeño", pic: "🧸", sticker: "🪀", color: "hib",
      de: "Als ich klein war", en: "When I was little",
      words: [
        { es: "de pequeño", de: "als ich klein war", en: "when I was little", pic: "👶", vary: { mx: "de chiquito", ar: "de chico" } },
        { es: "la foto", de: "das Foto", en: "photo", pic: "📷" },
        { es: "travieso", de: "frech", en: "naughty, cheeky", pic: "😜" },
        { es: "tímido", de: "schüchtern", en: "shy", pic: "🙈" },
        { es: "los dibujos animados", de: "die Zeichentrickfilme", en: "cartoons", pic: "📺", vary: { mx: "las caricaturas", ar: "los dibujitos" } },
        { es: "la siesta", de: "der Mittagsschlaf", en: "nap", pic: "💤" },
        { es: "el kínder", de: "der Kindergarten", en: "kindergarten", pic: "🖍️", vary: { ar: "el jardín de infantes", co: "el jardín infantil" } },
        { es: "el peluche", de: "das Kuscheltier", en: "cuddly toy", pic: "🧸" },
        { es: "el conejo", de: "das Kaninchen", en: "rabbit", pic: "🐰" },
        { es: "llorar", de: "weinen", en: "to cry", pic: "😭" },
        { es: "el diente de leche", de: "der Milchzahn", en: "baby tooth", pic: "🦷" },
        { es: "nacer", de: "geboren werden, schlüpfen", en: "to be born, to hatch", pic: "🐣" }
      ],
      story: [
        { who: "alex", es: "¡Mirad estas fotos! Son de cuando éramos pequeños.", de: "Schaut mal, diese Fotos! Die sind von früher, als wir klein waren.", en: "Look at these photos! They're from when we were little.", pic: "📷" },
        { who: "alex", es: "Aquí yo tenía cuatro años. Era muy travieso y pintaba las paredes.", de: "Hier war ich vier Jahre alt. Ich war sehr frech und habe die Wände bemalt.", en: "Here I was four years old. I was really naughty and I used to draw on the walls.", pic: "🖍️" },
        { who: "valen", es: "¡Jaja! Yo de chica miraba dibujitos todo el día. ¡Y nunca quería dormir la siesta!", de: "Haha! Als ich klein war, habe ich den ganzen Tag Zeichentrickfilme geschaut. Und ich wollte nie Mittagsschlaf machen!", en: "Haha! When I was little I watched cartoons all day. And I never wanted to have a nap!", pic: "📺" },
        { who: "mia", es: "Y esta soy yo en el kínder. Era muy tímida y siempre llevaba mi peluche.", de: "Und das bin ich im Kindergarten. Ich war sehr schüchtern und hatte immer mein Kuscheltier dabei.", en: "And this is me at kindergarten. I was very shy and I always carried my cuddly toy.", pic: "🧸" },
        { who: "mia", es: "Era un conejo azul. Se llamaba Pelusa y dormía conmigo.", de: "Es war ein blaues Kaninchen. Es hieß Pelusa und hat bei mir geschlafen.", en: "It was a blue rabbit. It was called Pelusa and it slept with me.", pic: "🐰" },
        { who: "valen", es: "¿Y por qué estás llorando en esta foto?", de: "Und warum weinst du auf diesem Foto?", en: "And why are you crying in this photo?", pic: "😭" },
        { who: "mia", es: "Porque ese día se me cayó un diente de leche. ¡Ay, qué oso!", de: "Weil mir an dem Tag ein Milchzahn ausgefallen ist. Oh, wie peinlich!", en: "Because one of my baby teeth fell out that day. Oh, how embarrassing!", pic: "🦷" },
        { who: "coco", es: "¡Tranquila, Mía! Mi foto es más rara. ¡Miren!", de: "Keine Sorge, Mía! Mein Foto ist noch komischer. Schaut mal!", en: "Don't worry, Mía! My photo is even weirder. Look!", pic: "🖼️" },
        { who: "valen", es: "Pero, Coco… ¡eso es un huevo! ¿Qué hacías ahí adentro?", de: "Aber Coco … das ist ja ein Ei! Was hast du da drin gemacht?", en: "But Coco… that's an egg! What were you doing in there?", pic: "🥚" },
        { who: "coco", es: "¡Claro! Era yo antes de nacer. Dormía todo el día y soñaba con volar.", de: "Klar! Das war ich, bevor ich geschlüpft bin. Ich habe den ganzen Tag geschlafen und vom Fliegen geträumt.", en: "Of course! That was me before I hatched. I slept all day and dreamed of flying.", pic: "🐣" },
        { who: "mia", es: "¡Jaja! Tienes razón, Coco. ¡Tu foto es la más rara de todas!", de: "Haha! Du hast recht, Coco. Dein Foto ist das komischste von allen!", en: "Haha! You're right, Coco. Your photo is the weirdest of all!", pic: "😂" },
        { who: "alex", es: "¡Qué guay! Venga, ahora vamos a hacer una foto de los cuatro.", de: "Wie cool! Los, jetzt machen wir ein Foto von uns vieren.", en: "How cool! Come on, let's take a photo of the four of us now.", pic: "🤳" }
      ],
      questions: [
        { q: "¿Cómo era Álex de pequeño?", de: "Wie war Álex, als er klein war?", en: "What was Álex like when he was little?", opts: ["muy tímido", "muy travieso", "muy tranquilo"], a: 1 },
        { q: "¿Por qué lloraba Mía en la foto?", de: "Warum hat Mía auf dem Foto geweint?", en: "Why was Mía crying in the photo?", opts: ["Porque se le cayó un diente de leche.", "Porque no quería dormir la siesta.", "Porque perdió su peluche."], a: 0 },
        { q: "¿Qué hay en la foto de Coco?", de: "Was ist auf Cocos Foto?", en: "What's in Coco's photo?", opts: ["un conejo azul", "un nido", "un huevo"], a: 2 }
      ],
      phrases: [
        { es: "Cuando era pequeño, tenía un perro.", de: "Als ich klein war, hatte ich einen Hund.", en: "When I was little, I had a dog." },
        { es: "De pequeña jugaba en el parque.", de: "Als ich klein war, habe ich im Park gespielt.", en: "When I was little, I used to play in the park." },
        { es: "Mi juguete favorito era un peluche.", de: "Mein Lieblingsspielzeug war ein Kuscheltier.", en: "My favourite toy was a cuddly toy." },
        { es: "Antes no me gustaba la siesta.", de: "Früher mochte ich keinen Mittagsschlaf.", en: "I didn't use to like naps." }
      ],
      slang: ["Chamaco / chamaca", "Pibe / piba", "Chamo / chama", "Asere"],
      tips: [
        { es: "Para contar cómo eran las cosas antes: era, tenía, jugaba. «Cuando era pequeño, jugaba mucho.»", de: "Wenn du erzählst, wie es früher war, sagst du: era (war), tenía (hatte), jugaba (spielte). „Cuando era pequeño, jugaba mucho.“ (Als ich klein war, habe ich viel gespielt.)", en: "To talk about how things used to be: era (was), tenía (had), jugaba (used to play). “Cuando era pequeño, jugaba mucho.” (When I was little, I used to play a lot.)" },
        { es: "El truco: los verbos en -ar hacen -aba (jugaba, miraba) y los verbos en -er o -ir hacen -ía (tenía, dormía).", de: "Der Trick: Verben auf -ar bekommen -aba (jugaba, miraba), Verben auf -er oder -ir bekommen -ía (tenía, dormía).", en: "The trick: -ar verbs take -aba (jugaba, miraba), and -er or -ir verbs take -ía (tenía, dormía)." }
      ],
      note: { es: "Cuando se cae un diente de leche, muchos niños hispanos lo ponen debajo de la almohada. Por la noche viene el Ratoncito Pérez y deja un regalito. ¡Es un ratón, no un hada!", de: "Wenn ein Milchzahn ausfällt, legen viele spanischsprachige Kinder ihn unter das Kopfkissen. In der Nacht kommt das Mäuschen „Ratoncito Pérez“ und lässt ein kleines Geschenk da. Es ist eine Maus, keine Zahnfee!", en: "When a baby tooth falls out, lots of Spanish-speaking children put it under their pillow. At night the little mouse “Ratoncito Pérez” comes and leaves a small present. It's a mouse, not a tooth fairy!" }
    }
  );

  /* ---------- Gran Desafío A2 (inspirado en el DELE escolar A2/B1) ---------- */
  ES.exams.A2 = {
    title: "Gran Desafío A2", de: "Große Herausforderung A2", en: "Big Challenge A2",
    escuchar: [
      { who: "valen", text: "¡Hola, Mía! Soy Valen. El sábado festejo mi cumple en la casa de mi abuela. La fiesta empieza a las cuatro de la tarde. ¡Traé tu malla, porque vamos a nadar en la pileta!", q: "¿A qué hora empieza la fiesta de Valen?", de: "Um wie viel Uhr beginnt Valens Party?", en: "What time does Valen's party start?", opts: ["a las dos", "a las cuatro", "a las siete"], a: 1 },
      { who: "coco", text: "¿Qué lo que, Mía? Estoy en la playa con mi familia. Mi hermano está buceando y mi abuela está tomando el sol. Yo estoy comiendo un chin de coco. ¡Tá jevi!", q: "¿Qué está haciendo la abuela de Coco?", de: "Was macht Cocos Oma gerade?", en: "What is Coco's grandma doing?", opts: ["Está buceando.", "Está comiendo coco.", "Está tomando el sol."], a: 2 },
      { who: "mia", text: "Ayer fui al doctor porque me dolía mucho la garganta. El doctor me dijo que tengo gripa. Tengo que tomar un jarabe tres veces al día y descansar. ¡Ahorita estoy en la cama con mi gato!", q: "¿Cuántas veces al día tiene que tomar Mía el jarabe?", de: "Wie oft am Tag muss Mía den Hustensaft nehmen?", en: "How many times a day does Mía have to take the syrup?", opts: ["tres veces", "una vez", "dos veces"], a: 0 },
      { who: "narr", text: "Bienvenidos al museo de los dinosaurios. Para ver el dinosaurio más grande, sigan todo derecho y suban la escalera. Los baños están a la izquierda de la entrada. La tienda del museo cierra a las seis.", q: "¿Dónde están los baños?", de: "Wo sind die Toiletten?", en: "Where are the toilets?", opts: ["arriba, al lado del dinosaurio", "a la izquierda de la entrada", "al lado de la tienda"], a: 1 },
      { who: "alex", text: "Mi hermano y yo jugamos al tenis todos los sábados. Él es mayor y más alto que yo, pero yo corro más rápido. Ayer jugamos un partido muy largo y, al final, ¡gané yo! Mi hermano dice que ahora soy el mejor de la familia.", q: "¿Quién ganó el partido ayer?", de: "Wer hat gestern das Spiel gewonnen?", en: "Who won the match yesterday?", opts: ["el hermano de Álex", "nadie", "Álex"], a: 2 },
      { who: "narr", text: "Hace muchos años, la abuela de Mía vivía en un pueblo pequeño. No tenía televisión ni teléfono. Por las tardes jugaba en el río con sus hermanos. Por las noches, su papá les contaba cuentos.", q: "¿Qué hacía la abuela de Mía por las tardes?", de: "Was hat Mías Oma nachmittags gemacht?", en: "What did Mía's grandma use to do in the afternoons?", opts: ["Jugaba en el río con sus hermanos.", "Veía la televisión.", "Leía cuentos."], a: 0 }
    ],
    leer: [
      { text: "¡Hola, Álex! Te escribo desde la playa. Hace mucho calor y el mar está muy bonito. Ahora mismo mi papá está nadando y mi hermano está jugando con la arena. Ayer vimos tortugas en el agua. ¡Fue increíble! Mañana vamos a visitar un pueblo de pescadores. Un abrazo, Mía.", q: "¿Qué va a hacer Mía mañana?", de: "Was macht Mía morgen?", en: "What is Mía going to do tomorrow?", opts: ["Va a nadar con su papá.", "Va a ver tortugas.", "Va a visitar un pueblo de pescadores."], a: 2 },
      { text: "¡Fiesta de cumpleaños! Valen cumple diez años y te invita a su fiesta. Día: sábado 12 de abril. Hora: de cuatro a siete de la tarde. Lugar: calle de las Flores, número 25. Vamos a comer torta, romper una piñata y jugar en el jardín. Trae ropa cómoda. Por favor, avisa antes del jueves si puedes venir.", q: "¿Qué tienes que hacer antes del jueves?", de: "Was musst du vor Donnerstag machen?", en: "What do you have to do before Thursday?", opts: ["comprar una piñata", "avisar si puedes ir", "hacer una torta"], a: 1 },
      { text: "Frutería La Tropical. Hoy tenemos fruta fresca: mangos a treinta pesos el kilo, fresas a cuarenta pesos el kilo y piñas a veinticinco pesos cada una. Los aguacates están en oferta: tres por veinte pesos. Abrimos todos los días de siete de la mañana a dos de la tarde. Los domingos cerramos a las doce.", q: "¿Cuánto cuesta medio kilo de fresas?", de: "Wie viel kostet ein halbes Kilo Erdbeeren?", en: "How much is half a kilo of strawberries?", opts: ["veinte pesos", "cuarenta pesos", "treinta pesos"], a: 0 },
      { text: "¡Hola, Mía! Mañana vamos juntos a la biblioteca. Desde tu casa es muy fácil: sal a la calle y gira a la izquierda. Sigue todo derecho hasta la plaza. Cruza la plaza y vas a ver un edificio amarillo al lado del museo. ¡Esa es la biblioteca! Te espero en la puerta a las cinco. Coco", q: "¿Dónde está la biblioteca?", de: "Wo ist die Bücherei?", en: "Where is the library?", opts: ["a la izquierda de la casa de Mía", "al lado del museo", "detrás de la plaza"], a: 1 },
      { text: "Me llamo Lucía y tengo once años. Cuando era pequeña, vivía con mis abuelos en el campo. Tenían una granja con gallinas, dos cabras y un caballo muy viejo. Todas las mañanas mi abuelo y yo recogíamos los huevos. Por las tardes yo leía cuentos debajo de un árbol. Ahora vivo en la ciudad y estudio en una escuela muy grande.", q: "¿Qué hacía Lucía todas las mañanas?", de: "Was hat Lucía jeden Morgen gemacht?", en: "What did Lucía use to do every morning?", opts: ["Leía cuentos debajo de un árbol.", "Montaba a caballo.", "Recogía los huevos con su abuelo."], a: 2 },
      { text: "En mi clase hicimos una encuesta: «¿Qué quieres ser de mayor?». Siete niños quieren ser futbolistas y cinco quieren ser veterinarios. Tres niñas quieren ser astronautas porque les encanta el espacio. Yo quiero ser cocinero, como mi padre, porque cocinar es más divertido que estudiar matemáticas. ¡Y su tortilla de patatas es la mejor del mundo! Álex", q: "¿Por qué quiere ser cocinero Álex?", de: "Warum will Álex Koch werden?", en: "Why does Álex want to be a chef?", opts: ["Porque cocinar es más divertido que estudiar matemáticas.", "Porque le encanta el espacio.", "Porque su abuelo es cocinero."], a: 0 }
    ],
    escribir: [
      { task: "Coco te escribe: «¿Qué hiciste el fin de semana?». Contéstale con un mensaje de 40 a 60 palabras. Cuenta adónde fuiste, con quién y qué fue lo mejor.", de: "Coco schreibt dir: „Was hast du am Wochenende gemacht?“ Antworte ihm mit einer Nachricht von 40 bis 60 Wörtern. Erzähl, wohin du gegangen bist, mit wem und was das Beste war.", en: "Coco writes to you: “What did you do at the weekend?” Reply with a message of 40 to 60 words. Say where you went, who with, and what the best part was.", model: "¡Hola, Coco! El sábado fui al parque con mi hermana. Jugamos al fútbol y después comimos un helado. El domingo visité a mis abuelos y mi abuela hizo una tarta de chocolate. Lo mejor fue el partido: ¡gané tres a dos! ¿Y tú qué hiciste? Un abrazo." },
      { task: "Escribe un texto corto sobre cuando eras pequeño o pequeña: cómo eras, qué te gustaba hacer y cuál era tu juguete favorito. Escribe de 40 a 60 palabras.", de: "Schreib einen kurzen Text darüber, wie es war, als du klein warst: wie du warst, was du gern gemacht hast und was dein Lieblingsspielzeug war. Schreib 40 bis 60 Wörter.", en: "Write a short text about when you were little: what you were like, what you liked doing and what your favourite toy was. Write 40 to 60 words.", model: "Cuando era pequeño, vivía en una casa con jardín. Era un niño muy travieso, pero también un poco tímido. Me gustaba jugar con mi perro y ver dibujos animados. Mi juguete favorito era un dinosaurio verde que se llamaba Rex. Siempre dormía con él. ¡Ahora está encima de mi cama!" }
    ],
    hablar: [
      { task: "Habla de ti durante un minuto: ¿qué quieres ser de grande y por qué? ¿Cuál es tu deporte favorito? ¿Qué vas a hacer en las próximas vacaciones?", de: "Sprich eine Minute lang über dich: Was willst du werden, wenn du groß bist, und warum? Was ist dein Lieblingssport? Was machst du in den nächsten Ferien?", en: "Talk about yourself for one minute: what do you want to be when you grow up, and why? What's your favourite sport? What are you going to do in the next holidays?", model: "De grande quiero ser veterinario, porque me encantan los animales. Mi deporte favorito es la natación: es más divertida que el fútbol y yo nado bastante rápido. En las próximas vacaciones voy a ir a la playa con mi familia. Vamos a bucear y a construir castillos de arena." },
      { task: "Juego de roles: estás en el mercado y quieres hacer una ensalada de frutas. Pide la fruta, pregunta el precio y paga. Un adulto hace de vendedor.", de: "Rollenspiel: Du bist auf dem Markt und willst einen Obstsalat machen. Bestell das Obst, frag nach dem Preis und bezahl. Ein Erwachsener spielt den Verkäufer.", en: "Role play: you're at the market and want to make a fruit salad. Ask for the fruit, ask the price and pay. An adult plays the seller.", model: "¡Buenos días! Quiero un mango, una piña y medio kilo de fresas, por favor. ¿Cuánto cuesta todo? ¿Sesenta pesos? Muy bien, aquí tiene. ¡Muchas gracias y hasta luego!" }
    ]
  };
})();
