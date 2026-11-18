/* Isla Ñ — contenido del curso de español para niños (9 años).
   Cada palabra: es (con artículo), de / en (ayuda), pic (dibujo), vary (cómo se dice en otros países). */
window.ES = {
  regions: {
    es: { flag: "🇪🇸", name: "España", langs: ["es-ES"] },
    mx: { flag: "🇲🇽", name: "México", langs: ["es-MX", "es-US"] },
    do: { flag: "🇩🇴", name: "República Dominicana", langs: ["es-DO", "es-PR", "es-CU", "es-US", "es-MX"] },
    ar: { flag: "🇦🇷", name: "Argentina", langs: ["es-AR", "es-UY", "es-US"] },
    co: { flag: "🇨🇴", name: "Colombia", langs: ["es-CO", "es-US"] },
    ve: { flag: "🇻🇪", name: "Venezuela", langs: ["es-VE", "es-CO", "es-US"] },
    cl: { flag: "🇨🇱", name: "Chile", langs: ["es-CL", "es-US"] },
    pr: { flag: "🇵🇷", name: "Puerto Rico", langs: ["es-PR", "es-US"] },
    cu: { flag: "🇨🇺", name: "Cuba", langs: ["es-CU", "es-US"] }
  },

  cast: {
    coco: { name: "Coco", pic: "🦜", region: "do", de: "der Papagei aus der Karibik", en: "the parrot from the Caribbean" },
    mia: { name: "Mía", pic: "👧🏽", region: "mx", de: "aus Mexiko", en: "from Mexico" },
    alex: { name: "Álex", pic: "👦🏻", region: "es", de: "aus Spanien", en: "from Spain" },
    valen: { name: "Valen", pic: "🧒🏼", region: "ar", de: "aus Argentinien", en: "from Argentina" }
  },

  ui: {
    mission: { es: "Tu misión de hoy", de: "Deine Mission heute", en: "Your mission today" },
    story: { es: "Cuento", de: "Geschichte", en: "Story" },
    words: { es: "Palabras", de: "Wörter", en: "Words" },
    game: { es: "Juego", de: "Spiel", en: "Game" },
    speak: { es: "¡Habla!", de: "Sprich!", en: "Speak!" },
    slang: { es: "Como un nativo", de: "Wie ein Einheimischer", en: "Like a local" },
    tapword: { es: "Toca una frase para oírla", de: "Tippe auf einen Satz, um ihn zu hören", en: "Tap a sentence to hear it" },
    listen: { es: "Escucha y toca el dibujo", de: "Hör zu und tippe auf das Bild", en: "Listen and tap the picture" },
    memory: { es: "Encuentra las parejas", de: "Finde die Paare", en: "Find the pairs" },
    build: { es: "Ordena la frase", de: "Bring den Satz in die richtige Reihenfolge", en: "Put the sentence in order" },
    say: { es: "Dilo en voz alta", de: "Sag es laut", en: "Say it out loud" },
    review: { es: "Cofre de repaso", de: "Wiederholungs-Truhe", en: "Review chest" },
    dict: { es: "El diccionario del loro", de: "Das Wörterbuch des Papageis", en: "The parrot's dictionary" },
    where: { es: "¿De dónde es?", de: "Woher kommt das?", en: "Where is it from?" },
    retos: { es: "Retos con un adulto", de: "Aufgaben mit einem Erwachsenen", en: "Challenges with an adult" },
    album: { es: "Álbum de pegatinas", de: "Sticker-Album", en: "Sticker album" },
    shop: { es: "Tienda de Coco", de: "Cocos Laden", en: "Coco's shop" },
    smart: { es: "Desafío de Coco", de: "Cocos Quiz, passt sich dir an", en: "Coco's quiz, adapts to you" },
    chat: { es: "Charla con Coco", de: "Plaudere mit Coco", en: "Chat with Coco" },
    simon: { es: "Simón dice", de: "Simon sagt", en: "Simon says" },
    fast: { es: "¡Contrarreloj!", de: "Gegen die Uhr!", en: "Beat the clock!" },
    great: { es: "¡Muy bien!", de: "Super gemacht!", en: "Great job!" },
    again: { es: "¡Otra vez!", de: "Nochmal!", en: "Try again!" },
    questions: { es: "¿Entendiste?", de: "Hast du es verstanden?", en: "Did you understand?" },
    next: { es: "Siguiente", de: "Weiter", en: "Next" },
    done: { es: "¡Lo hice!", de: "Geschafft!", en: "I did it!" },
    notsaid: { es: "¡Simón no lo dijo!", de: "Simon hat es nicht gesagt!", en: "Simon didn't say it!" },
    simonhelp: { es: "Haz lo que dice solo si empieza con «Simón dice».", de: "Mach es nur, wenn der Satz mit „Simón dice“ anfängt.", en: "Only do it if it starts with “Simón dice”." }
  },

  /* Niveles (archipiélagos). Cada isla lleva level; las del archivo base son A1. */
  levels: [
    { id: "A1", es: "Archipiélago Palmera", de: "Palmen-Inseln", en: "Palm Islands", pic: "🌴", trophy: "🥉" },
    { id: "A2", es: "Archipiélago Coral", de: "Korallen-Inseln", en: "Coral Islands", pic: "🐠", trophy: "🥈" },
    { id: "B1", es: "Archipiélago Volcán", de: "Vulkan-Inseln", en: "Volcano Islands", pic: "🌋", trophy: "🥇" },
    { id: "B2", es: "Archipiélago Estrella", de: "Sternen-Inseln", en: "Star Islands", pic: "🌟", trophy: "🏆" }
  ],
  /* Gran Desafío al final de cada nivel (lo rellenan los archivos content/es-*.js). */
  exams: {},

  units: [
    {
      id: "hola", title: "¡Hola!", pic: "👋", sticker: "🦜", color: "sea",
      de: "Hallo sagen", en: "Saying hello",
      words: [
        { es: "hola", de: "hallo", en: "hello", pic: "👋" },
        { es: "adiós", de: "tschüss", en: "goodbye", pic: "🚪" },
        { es: "buenos días", de: "guten Morgen", en: "good morning", pic: "☀️" },
        { es: "buenas noches", de: "gute Nacht", en: "good night", pic: "🌙" },
        { es: "por favor", de: "bitte", en: "please", pic: "🙏" },
        { es: "gracias", de: "danke", en: "thank you", pic: "💐" },
        { es: "me llamo…", de: "ich heiße …", en: "my name is …", pic: "📛" },
        { es: "¿cómo estás?", de: "wie geht's?", en: "how are you?", pic: "🤔" },
        { es: "bien", de: "gut", en: "good / fine", pic: "👍" },
        { es: "mal", de: "schlecht", en: "bad", pic: "👎" },
        { es: "el amigo", de: "der Freund", en: "the friend", pic: "🤝" }
      ],
      story: [
        { who: "coco", es: "¡Hola! Me llamo Coco. Soy un loro.", de: "Hallo! Ich heiße Coco. Ich bin ein Papagei.", en: "Hi! My name is Coco. I am a parrot.", pic: "🦜" },
        { who: "coco", es: "Vivo en una isla, en el Caribe.", de: "Ich wohne auf einer Insel in der Karibik.", en: "I live on an island in the Caribbean.", pic: "🏝️" },
        { who: "mia", es: "¡Hola, Coco! Me llamo Mía. ¿Cómo estás?", de: "Hallo Coco! Ich heiße Mía. Wie geht's dir?", en: "Hi Coco! My name is Mía. How are you?", pic: "👧🏽" },
        { who: "coco", es: "¡Muy bien, gracias! ¿Y tú?", de: "Sehr gut, danke! Und dir?", en: "Very well, thanks! And you?", pic: "👍" },
        { who: "mia", es: "Bien también. ¡Mira! Es Álex.", de: "Auch gut. Schau! Das ist Álex.", en: "Fine too. Look! It's Álex.", pic: "👀" },
        { who: "alex", es: "¡Buenos días! ¿Qué tal?", de: "Guten Morgen! Wie geht's?", en: "Good morning! How's it going?", pic: "☀️" },
        { who: "coco", es: "¡Hola, Álex! ¿Quieres ser mi amigo?", de: "Hallo Álex! Willst du mein Freund sein?", en: "Hi Álex! Do you want to be my friend?", pic: "🤝" },
        { who: "alex", es: "¡Vale! ¡Qué guay!", de: "Okay! Wie cool!", en: "OK! How cool!", pic: "😄" }
      ],
      questions: [
        { q: "¿Cómo se llama el loro?", de: "Wie heißt der Papagei?", en: "What is the parrot's name?", opts: ["Coco", "Mía", "Álex"], a: 0 },
        { q: "¿Dónde vive Coco?", de: "Wo wohnt Coco?", en: "Where does Coco live?", opts: ["🏝️ en una isla", "🏙️ en una ciudad", "❄️ en la nieve"], a: 0 },
        { q: "¿Qué dice Álex al final?", de: "Was sagt Álex am Ende?", en: "What does Álex say at the end?", opts: ["¡Vale! ¡Qué guay!", "Buenas noches", "Adiós"], a: 0 }
      ],
      phrases: [
        { es: "Me llamo Coco.", de: "Ich heiße Coco.", en: "My name is Coco." },
        { es: "¿Cómo te llamas?", de: "Wie heißt du?", en: "What's your name?" },
        { es: "¿Cómo estás?", de: "Wie geht es dir?", en: "How are you?" },
        { es: "Muy bien, gracias.", de: "Sehr gut, danke.", en: "Very well, thank you." }
      ],
      slang: ["¡Qué guay!", "Vale", "¿Qué lo que?", "¿Qué onda?"]
    },
    {
      id: "familia", title: "Mi familia", pic: "👨‍👩‍👧‍👦", sticker: "🐱", color: "hib",
      de: "Meine Familie", en: "My family",
      words: [
        { es: "la mamá", de: "die Mama", en: "mom", pic: "👩" },
        { es: "el papá", de: "der Papa", en: "dad", pic: "👨" },
        { es: "el hermano", de: "der Bruder", en: "brother", pic: "👦" },
        { es: "la hermana", de: "die Schwester", en: "sister", pic: "👧" },
        { es: "el abuelo", de: "der Opa", en: "grandpa", pic: "👴" },
        { es: "la abuela", de: "die Oma", en: "grandma", pic: "👵" },
        { es: "el bebé", de: "das Baby", en: "baby", pic: "👶", vary: { cl: "la guagua", do: "el chichí" } },
        { es: "el perro", de: "der Hund", en: "dog", pic: "🐶" },
        { es: "el gato", de: "die Katze", en: "cat", pic: "🐱" },
        { es: "la familia", de: "die Familie", en: "family", pic: "👨‍👩‍👧‍👦" }
      ],
      story: [
        { who: "mia", es: "Esta es mi familia.", de: "Das ist meine Familie.", en: "This is my family.", pic: "👨‍👩‍👧‍👦" },
        { who: "mia", es: "Mi mamá se llama Rosa. Mi papá se llama Luis.", de: "Meine Mama heißt Rosa. Mein Papa heißt Luis.", en: "My mom is called Rosa. My dad is called Luis.", pic: "👩👨" },
        { who: "mia", es: "Tengo un hermano. Es muy pequeño. ¡Es un bebé!", de: "Ich habe einen Bruder. Er ist sehr klein. Er ist ein Baby!", en: "I have a brother. He is very small. He's a baby!", pic: "👶" },
        { who: "mia", es: "Mi abuela hace tortillas. ¡Qué ricas!", de: "Meine Oma macht Tortillas. Wie lecker!", en: "My grandma makes tortillas. So tasty!", pic: "👵🌮" },
        { who: "coco", es: "¿Y tienes un perro?", de: "Und hast du einen Hund?", en: "And do you have a dog?", pic: "🐶" },
        { who: "mia", es: "No, tengo un gato. Se llama Taco.", de: "Nein, ich habe eine Katze. Sie heißt Taco.", en: "No, I have a cat. It's called Taco.", pic: "🐱" },
        { who: "coco", es: "¿Un gato que se llama Taco? ¡Tá jevi!", de: "Eine Katze, die Taco heißt? Cool!", en: "A cat called Taco? Cool!", pic: "😆" },
        { who: "mia", es: "¡Sí! ¡Está bien padre!", de: "Ja! Total cool!", en: "Yes! It's really cool!", pic: "😺" }
      ],
      questions: [
        { q: "¿Cómo se llama el gato?", de: "Wie heißt die Katze?", en: "What is the cat's name?", opts: ["Taco", "Rosa", "Luis"], a: 0 },
        { q: "¿Qué hace la abuela?", de: "Was macht die Oma?", en: "What does grandma make?", opts: ["🌮 tortillas", "⚽ fútbol", "🎸 música"], a: 0 },
        { q: "¿Mía tiene un perro?", de: "Hat Mía einen Hund?", en: "Does Mía have a dog?", opts: ["No, tiene un gato.", "Sí, tiene un perro."], a: 0 }
      ],
      phrases: [
        { es: "Tengo un hermano.", de: "Ich habe einen Bruder.", en: "I have a brother." },
        { es: "Mi mamá se llama Rosa.", de: "Meine Mama heißt Rosa.", en: "My mom is called Rosa." },
        { es: "¿Tienes hermanos?", de: "Hast du Geschwister?", en: "Do you have siblings?" },
        { es: "Tengo un gato.", de: "Ich habe eine Katze.", en: "I have a cat." }
      ],
      slang: ["¡Tá jevi!", "¡Qué padre!", "Chamo / chama", "Pibe / piba"]
    },
    {
      id: "colores", title: "Colores y números", pic: "🎨", sticker: "🎨", color: "sun",
      de: "Farben und Zahlen", en: "Colours and numbers",
      words: [
        { es: "rojo", de: "rot", en: "red", pic: "🔴" },
        { es: "azul", de: "blau", en: "blue", pic: "🔵" },
        { es: "verde", de: "grün", en: "green", pic: "🟢" },
        { es: "amarillo", de: "gelb", en: "yellow", pic: "🟡" },
        { es: "naranja", de: "orange", en: "orange", pic: "🟠" },
        { es: "morado", de: "lila", en: "purple", pic: "🟣" },
        { es: "negro", de: "schwarz", en: "black", pic: "⚫" },
        { es: "blanco", de: "weiß", en: "white", pic: "⚪" },
        { es: "uno", de: "eins", en: "one", pic: "1️⃣" },
        { es: "dos", de: "zwei", en: "two", pic: "2️⃣" },
        { es: "tres", de: "drei", en: "three", pic: "3️⃣" },
        { es: "cuatro", de: "vier", en: "four", pic: "4️⃣" },
        { es: "cinco", de: "fünf", en: "five", pic: "5️⃣" },
        { es: "seis", de: "sechs", en: "six", pic: "6️⃣" },
        { es: "siete", de: "sieben", en: "seven", pic: "7️⃣" },
        { es: "ocho", de: "acht", en: "eight", pic: "8️⃣" },
        { es: "nueve", de: "neun", en: "nine", pic: "9️⃣" },
        { es: "diez", de: "zehn", en: "ten", pic: "🔟" }
      ],
      story: [
        { who: "valen", es: "¡Hola! Soy Valen. Soy de Argentina.", de: "Hallo! Ich bin Valen. Ich komme aus Argentinien.", en: "Hi! I'm Valen. I'm from Argentina.", pic: "🇦🇷" },
        { who: "valen", es: "Me encanta pintar. ¡Mirá mis colores!", de: "Ich male total gern. Schau dir meine Farben an!", en: "I love painting. Look at my colours!", pic: "🎨" },
        { who: "valen", es: "El sol es amarillo. El mar es azul.", de: "Die Sonne ist gelb. Das Meer ist blau.", en: "The sun is yellow. The sea is blue.", pic: "☀️🌊" },
        { who: "valen", es: "Pinto tres árboles verdes.", de: "Ich male drei grüne Bäume.", en: "I paint three green trees.", pic: "🌳🌳🌳" },
        { who: "coco", es: "¡Y yo soy verde, rojo y amarillo!", de: "Und ich bin grün, rot und gelb!", en: "And I'm green, red and yellow!", pic: "🦜" },
        { who: "valen", es: "¡Che, Coco! ¡Sos re lindo!", de: "Hey Coco! Du bist sooo hübsch!", en: "Hey Coco! You're super pretty!", pic: "😍" },
        { who: "coco", es: "Gracias. Uno, dos, tres… ¡una foto!", de: "Danke. Eins, zwei, drei … ein Foto!", en: "Thanks. One, two, three… a photo!", pic: "📸" }
      ],
      questions: [
        { q: "¿De dónde es Valen?", de: "Woher kommt Valen?", en: "Where is Valen from?", opts: ["🇦🇷 Argentina", "🇪🇸 España", "🇲🇽 México"], a: 0 },
        { q: "¿De qué color es el mar?", de: "Welche Farbe hat das Meer?", en: "What colour is the sea?", opts: ["azul", "rojo", "verde"], a: 0 },
        { q: "¿Cuántos árboles pinta?", de: "Wie viele Bäume malt Valen?", en: "How many trees does Valen paint?", opts: ["tres", "cinco", "uno"], a: 0 }
      ],
      phrases: [
        { es: "El sol es amarillo.", de: "Die Sonne ist gelb.", en: "The sun is yellow." },
        { es: "Mi color favorito es el azul.", de: "Meine Lieblingsfarbe ist Blau.", en: "My favourite colour is blue." },
        { es: "Tengo nueve años.", de: "Ich bin neun Jahre alt.", en: "I am nine years old." },
        { es: "Uno, dos, tres.", de: "Eins, zwei, drei.", en: "One, two, three." }
      ],
      note: { es: "En Argentina dicen «vos sos» en vez de «tú eres». ¡Es el voseo!", de: "In Argentinien sagt man „vos sos“ statt „tú eres“ (du bist).", en: "In Argentina they say “vos sos” instead of “tú eres” (you are)." },
      slang: ["Che", "Re", "¡Qué copado!", "¡Bárbaro!"]
    },
    {
      id: "comida", title: "La comida", pic: "🍎", sticker: "🍦", color: "leaf",
      de: "Essen", en: "Food",
      words: [
        { es: "la manzana", de: "der Apfel", en: "apple", pic: "🍎" },
        { es: "el pan", de: "das Brot", en: "bread", pic: "🍞" },
        { es: "el agua", de: "das Wasser", en: "water", pic: "💧" },
        { es: "la leche", de: "die Milch", en: "milk", pic: "🥛" },
        { es: "el queso", de: "der Käse", en: "cheese", pic: "🧀" },
        { es: "el huevo", de: "das Ei", en: "egg", pic: "🥚" },
        { es: "el helado", de: "das Eis", en: "ice cream", pic: "🍦" },
        { es: "el jugo", de: "der Saft", en: "juice", pic: "🧃", vary: { es: "el zumo" } },
        { es: "el plátano", de: "die Banane", en: "banana", pic: "🍌", vary: { do: "el guineo", pr: "el guineo", ar: "la banana", ve: "el cambur" } },
        { es: "la pizza", de: "die Pizza", en: "pizza", pic: "🍕" },
        { es: "tengo hambre", de: "ich habe Hunger", en: "I'm hungry", pic: "😋" },
        { es: "me gusta", de: "ich mag / mir gefällt", en: "I like", pic: "❤️" }
      ],
      story: [
        { who: "coco", es: "¡Tengo hambre! ¿Desayunamos?", de: "Ich habe Hunger! Frühstücken wir?", en: "I'm hungry! Shall we have breakfast?", pic: "😋" },
        { who: "alex", es: "¡Vale! Yo quiero pan con tomate.", de: "Okay! Ich möchte Brot mit Tomate.", en: "OK! I want bread with tomato.", pic: "🍞🍅" },
        { who: "mia", es: "Yo quiero un huevo y un jugo de naranja.", de: "Ich möchte ein Ei und einen Orangensaft.", en: "I want an egg and an orange juice.", pic: "🥚🧃" },
        { who: "alex", es: "En España decimos «zumo de naranja».", de: "In Spanien sagen wir „zumo de naranja“.", en: "In Spain we say “zumo de naranja”.", pic: "🇪🇸🧃" },
        { who: "coco", es: "Y yo quiero un guineo.", de: "Und ich möchte einen „guineo“.", en: "And I want a “guineo”.", pic: "🍌" },
        { who: "mia", es: "¿Un qué?", de: "Einen was?", en: "A what?", pic: "🤔" },
        { who: "coco", es: "¡Un guineo! Así se dice plátano en mi país.", de: "Einen guineo! So sagt man Banane in meinem Land.", en: "A guineo! That's how we say banana in my country.", pic: "🇩🇴🍌" },
        { who: "valen", es: "¡En Argentina es banana! Y de postre… ¡helado!", de: "In Argentinien heißt es banana! Und zum Nachtisch … Eis!", en: "In Argentina it's banana! And for dessert… ice cream!", pic: "🍦" }
      ],
      questions: [
        { q: "¿Qué quiere Álex?", de: "Was möchte Álex?", en: "What does Álex want?", opts: ["pan con tomate", "helado", "un huevo"], a: 0 },
        { q: "¿Cómo dice Coco «plátano»?", de: "Wie sagt Coco „Banane“?", en: "How does Coco say “banana”?", opts: ["guineo", "zumo", "queso"], a: 0 },
        { q: "¿Qué hay de postre?", de: "Was gibt es zum Nachtisch?", en: "What's for dessert?", opts: ["🍦", "🍕", "🧀"], a: 0 }
      ],
      phrases: [
        { es: "Tengo hambre.", de: "Ich habe Hunger.", en: "I'm hungry." },
        { es: "Quiero agua, por favor.", de: "Ich möchte Wasser, bitte.", en: "I want water, please." },
        { es: "Me gusta el helado.", de: "Ich mag Eis.", en: "I like ice cream." },
        { es: "No me gusta el queso.", de: "Ich mag keinen Käse.", en: "I don't like cheese." }
      ],
      slang: ["¡Qué rico!", "Un chin", "¡Ándale!", "¡Qué chévere!"]
    },
    {
      id: "animales", title: "Los animales", pic: "🐘", sticker: "🐘", color: "sea",
      de: "Tiere", en: "Animals",
      words: [
        { es: "el pájaro", de: "der Vogel", en: "bird", pic: "🐦" },
        { es: "el pez", de: "der Fisch", en: "fish", pic: "🐟" },
        { es: "el caballo", de: "das Pferd", en: "horse", pic: "🐴" },
        { es: "la vaca", de: "die Kuh", en: "cow", pic: "🐮" },
        { es: "el cerdo", de: "das Schwein", en: "pig", pic: "🐷", vary: { mx: "el puerco", do: "el puerco", ar: "el chancho" } },
        { es: "el mono", de: "der Affe", en: "monkey", pic: "🐒" },
        { es: "la tortuga", de: "die Schildkröte", en: "turtle", pic: "🐢" },
        { es: "el león", de: "der Löwe", en: "lion", pic: "🦁" },
        { es: "el elefante", de: "der Elefant", en: "elephant", pic: "🐘" },
        { es: "la rana", de: "der Frosch", en: "frog", pic: "🐸" },
        { es: "el ratón", de: "die Maus", en: "mouse", pic: "🐭" }
      ],
      story: [
        { who: "mia", es: "Hoy vamos al zoológico.", de: "Heute gehen wir in den Zoo.", en: "Today we're going to the zoo.", pic: "🦁" },
        { who: "mia", es: "¡Mira el elefante! Es muy grande.", de: "Schau mal, der Elefant! Er ist sehr groß.", en: "Look at the elephant! It's very big.", pic: "🐘" },
        { who: "alex", es: "Y el ratón es muy pequeño.", de: "Und die Maus ist sehr klein.", en: "And the mouse is very small.", pic: "🐭" },
        { who: "coco", es: "El mono come plátanos… ¡perdón, guineos!", de: "Der Affe isst Bananen … Entschuldigung, guineos!", en: "The monkey eats bananas… sorry, guineos!", pic: "🐒🍌" },
        { who: "valen", es: "La tortuga es lenta. ¡Muy lenta!", de: "Die Schildkröte ist langsam. Sehr langsam!", en: "The turtle is slow. Very slow!", pic: "🐢" },
        { who: "alex", es: "El león hace «¡grrr!».", de: "Der Löwe macht „grrr!“.", en: "The lion goes “grrr!”.", pic: "🦁" },
        { who: "coco", es: "¿Y la vaca? ¡Muuu!", de: "Und die Kuh? Muuuh!", en: "And the cow? Mooo!", pic: "🐮" },
        { who: "mia", es: "¡Qué divertido!", de: "Wie lustig!", en: "How fun!", pic: "😂" }
      ],
      questions: [
        { q: "¿Qué animal es muy grande?", de: "Welches Tier ist sehr groß?", en: "Which animal is very big?", opts: ["🐘", "🐭", "🐸"], a: 0 },
        { q: "¿Cómo es la tortuga?", de: "Wie ist die Schildkröte?", en: "What is the turtle like?", opts: ["lenta", "rápida", "roja"], a: 0 },
        { q: "¿Qué come el mono?", de: "Was isst der Affe?", en: "What does the monkey eat?", opts: ["🍌", "🍕", "🧀"], a: 0 }
      ],
      phrases: [
        { es: "El elefante es grande.", de: "Der Elefant ist groß.", en: "The elephant is big." },
        { es: "El ratón es pequeño.", de: "Die Maus ist klein.", en: "The mouse is small." },
        { es: "Mi animal favorito es el león.", de: "Mein Lieblingstier ist der Löwe.", en: "My favourite animal is the lion." },
        { es: "La vaca hace muu.", de: "Die Kuh macht muh.", en: "The cow goes moo." }
      ],
      sounds: [
        { es: "El perro hace guau guau.", de: "Der Hund macht wau wau.", pic: "🐶" },
        { es: "El gato hace miau.", de: "Die Katze macht miau.", pic: "🐱" },
        { es: "El pato hace cuac cuac.", de: "Die Ente macht quak quak.", pic: "🦆" },
        { es: "El gallo hace quiquiriquí.", de: "Der Hahn macht kikeriki.", pic: "🐓" },
        { es: "La rana hace croac.", de: "Der Frosch macht quak.", pic: "🐸" }
      ],
      slang: ["¡Qué chulo!", "¡Órale!", "¡Bacán!", "¡Hala!"]
    },
    {
      id: "cuerpo", title: "Mi cuerpo", pic: "🙌", sticker: "🦘", color: "hib",
      de: "Mein Körper", en: "My body",
      words: [
        { es: "la cabeza", de: "der Kopf", en: "head", pic: "🙆" },
        { es: "los ojos", de: "die Augen", en: "eyes", pic: "👀" },
        { es: "la nariz", de: "die Nase", en: "nose", pic: "👃" },
        { es: "la boca", de: "der Mund", en: "mouth", pic: "👄" },
        { es: "las orejas", de: "die Ohren", en: "ears", pic: "👂" },
        { es: "el pelo", de: "die Haare", en: "hair", pic: "💇" },
        { es: "las manos", de: "die Hände", en: "hands", pic: "🙌" },
        { es: "los pies", de: "die Füße", en: "feet", pic: "🦶" },
        { es: "el brazo", de: "der Arm", en: "arm", pic: "💪" },
        { es: "la pierna", de: "das Bein", en: "leg", pic: "🦵" }
      ],
      story: [
        { who: "alex", es: "¿Jugamos a «Simón dice»?", de: "Spielen wir „Simon sagt“?", en: "Shall we play “Simon says”?", pic: "🎲" },
        { who: "mia", es: "¡Sí! Simón dice: toca tu nariz.", de: "Ja! Simon sagt: Fass deine Nase an.", en: "Yes! Simon says: touch your nose.", pic: "👃" },
        { who: "coco", es: "¡Yo no tengo nariz! Tengo pico.", de: "Ich habe keine Nase! Ich habe einen Schnabel.", en: "I don't have a nose! I have a beak.", pic: "🦜" },
        { who: "mia", es: "Jajaja. Simón dice: levanta las manos.", de: "Hahaha. Simon sagt: Heb die Hände hoch.", en: "Hahaha. Simon says: raise your hands.", pic: "🙌" },
        { who: "coco", es: "¡Yo tengo alas, no manos!", de: "Ich habe Flügel, keine Hände!", en: "I have wings, not hands!", pic: "🪽" },
        { who: "valen", es: "Simón dice: ¡salta!", de: "Simon sagt: Spring!", en: "Simon says: jump!", pic: "🦘" },
        { who: "coco", es: "¡Eso sí! ¡Mira cómo vuelo!", de: "Das kann ich! Schau, wie ich fliege!", en: "That I can do! Look how I fly!", pic: "🦜💨" }
      ],
      questions: [
        { q: "¿Qué tiene Coco en vez de nariz?", de: "Was hat Coco statt einer Nase?", en: "What does Coco have instead of a nose?", opts: ["un pico", "orejas", "pelo"], a: 0 },
        { q: "¿Coco tiene manos?", de: "Hat Coco Hände?", en: "Does Coco have hands?", opts: ["No, tiene alas.", "Sí, tiene manos."], a: 0 },
        { q: "¿A qué juegan?", de: "Was spielen sie?", en: "What are they playing?", opts: ["Simón dice", "fútbol", "al escondite"], a: 0 }
      ],
      phrases: [
        { es: "Toca tu nariz.", de: "Fass deine Nase an.", en: "Touch your nose." },
        { es: "Levanta las manos.", de: "Heb die Hände hoch.", en: "Raise your hands." },
        { es: "Me duele la cabeza.", de: "Mir tut der Kopf weh.", en: "My head hurts." },
        { es: "Tengo dos ojos.", de: "Ich habe zwei Augen.", en: "I have two eyes." }
      ],
      tpr: [
        { es: "toca tu nariz", de: "fass deine Nase an", en: "touch your nose", pic: "👃" },
        { es: "toca tu cabeza", de: "fass deinen Kopf an", en: "touch your head", pic: "🙆" },
        { es: "levanta las manos", de: "heb die Hände hoch", en: "raise your hands", pic: "🙌" },
        { es: "salta", de: "spring", en: "jump", pic: "🦘" },
        { es: "aplaude", de: "klatsch in die Hände", en: "clap", pic: "👏" },
        { es: "da una vuelta", de: "dreh dich einmal", en: "turn around", pic: "🔄" },
        { es: "cierra los ojos", de: "mach die Augen zu", en: "close your eyes", pic: "😌" },
        { es: "abre la boca", de: "mach den Mund auf", en: "open your mouth", pic: "😮" },
        { es: "toca tus orejas", de: "fass deine Ohren an", en: "touch your ears", pic: "👂" },
        { es: "baila", de: "tanz", en: "dance", pic: "💃" },
        { es: "levanta una pierna", de: "heb ein Bein", en: "lift one leg", pic: "🦵" },
        { es: "siéntate", de: "setz dich", en: "sit down", pic: "🪑" }
      ],
      slang: ["¡Venga!", "¡Dale!", "¡Aguas!", "¡Wepa!"]
    },
    {
      id: "juegos", title: "En el cole y a jugar", pic: "⚽", sticker: "⚽", color: "sun",
      de: "Schule und Spielen", en: "School and play",
      words: [
        { es: "el colegio", de: "die Schule", en: "school", pic: "🏫", vary: { es: "el cole", mx: "la escuela", do: "la escuela" } },
        { es: "el libro", de: "das Buch", en: "book", pic: "📕" },
        { es: "el lápiz", de: "der Bleistift", en: "pencil", pic: "✏️" },
        { es: "la mochila", de: "der Rucksack", en: "backpack", pic: "🎒" },
        { es: "el profe", de: "der Lehrer", en: "teacher", pic: "🧑‍🏫" },
        { es: "la pelota", de: "der Ball", en: "ball", pic: "🏀", vary: { es: "el balón" } },
        { es: "el fútbol", de: "der Fußball", en: "football", pic: "⚽" },
        { es: "el videojuego", de: "das Videospiel", en: "video game", pic: "🎮" },
        { es: "jugar", de: "spielen", en: "to play", pic: "🧩" },
        { es: "dibujar", de: "malen / zeichnen", en: "to draw", pic: "🖍️" },
        { es: "correr", de: "rennen", en: "to run", pic: "🏃" },
        { es: "ganar", de: "gewinnen", en: "to win", pic: "🏆" }
      ],
      story: [
        { who: "valen", es: "¿Qué hacés después del cole?", de: "Was machst du nach der Schule?", en: "What do you do after school?", pic: "🏫" },
        { who: "alex", es: "Juego al fútbol con mis amigos.", de: "Ich spiele Fußball mit meinen Freunden.", en: "I play football with my friends.", pic: "⚽" },
        { who: "mia", es: "Yo leo libros de dragones.", de: "Ich lese Bücher über Drachen.", en: "I read books about dragons.", pic: "📕🐉" },
        { who: "coco", es: "Yo juego videojuegos. ¡Construyo casas de bloques!", de: "Ich spiele Videospiele. Ich baue Häuser aus Blöcken!", en: "I play video games. I build houses out of blocks!", pic: "🎮🧱" },
        { who: "alex", es: "¡Mola mucho! ¿Jugamos juntos?", de: "Das ist voll cool! Spielen wir zusammen?", en: "That's so cool! Shall we play together?", pic: "😎" },
        { who: "valen", es: "¡Dale! Pero yo gano.", de: "Okay! Aber ich gewinne.", en: "OK! But I win.", pic: "🏆" },
        { who: "coco", es: "¡Ja! ¡Ya veremos!", de: "Ha! Das werden wir sehen!", en: "Ha! We'll see!", pic: "😏" }
      ],
      questions: [
        { q: "¿A qué juega Álex?", de: "Was spielt Álex?", en: "What does Álex play?", opts: ["⚽", "🎮", "📕"], a: 0 },
        { q: "¿Qué lee Mía?", de: "Was liest Mía?", en: "What does Mía read?", opts: ["libros de dragones", "el periódico", "cómics de gatos"], a: 0 },
        { q: "¿Qué construye Coco?", de: "Was baut Coco?", en: "What does Coco build?", opts: ["casas de bloques", "barcos", "robots"], a: 0 }
      ],
      phrases: [
        { es: "¿Jugamos juntos?", de: "Spielen wir zusammen?", en: "Shall we play together?" },
        { es: "Juego al fútbol.", de: "Ich spiele Fußball.", en: "I play football." },
        { es: "Me gusta dibujar.", de: "Ich male gern.", en: "I like drawing." },
        { es: "¡Gané!", de: "Ich habe gewonnen!", en: "I won!" }
      ],
      slang: ["¡Mola!", "Chido", "¡Me flipa!", "Pana"]
    },
    {
      id: "emociones", title: "¿Cómo te sientes?", pic: "😄", sticker: "🌈", color: "leaf",
      de: "Wie fühlst du dich?", en: "How do you feel?",
      words: [
        { es: "feliz", de: "glücklich", en: "happy", pic: "😄" },
        { es: "triste", de: "traurig", en: "sad", pic: "😢" },
        { es: "enojado", de: "wütend / sauer", en: "angry", pic: "😠", vary: { es: "enfadado", do: "bravo", co: "bravo" } },
        { es: "cansado", de: "müde", en: "tired", pic: "😴" },
        { es: "asustado", de: "erschrocken / ängstlich", en: "scared", pic: "😱" },
        { es: "sorprendido", de: "überrascht", en: "surprised", pic: "😮" },
        { es: "nervioso", de: "nervös", en: "nervous", pic: "😬" },
        { es: "tranquilo", de: "ruhig", en: "calm", pic: "😌" },
        { es: "tengo sueño", de: "ich bin müde (schläfrig)", en: "I'm sleepy", pic: "🥱" },
        { es: "tengo frío", de: "mir ist kalt", en: "I'm cold", pic: "🥶" },
        { es: "tengo calor", de: "mir ist warm", en: "I'm hot", pic: "🥵" }
      ],
      story: [
        { who: "mia", es: "Hoy llueve. Estoy un poco triste.", de: "Heute regnet es. Ich bin ein bisschen traurig.", en: "It's raining today. I'm a bit sad.", pic: "🌧️😢" },
        { who: "alex", es: "¿Por qué? ¡La lluvia mola!", de: "Warum? Regen ist cool!", en: "Why? Rain is cool!", pic: "🌧️😎" },
        { who: "coco", es: "Yo estoy enojado. ¡Mis plumas están mojadas!", de: "Ich bin sauer. Meine Federn sind nass!", en: "I'm angry. My feathers are wet!", pic: "😠🪶" },
        { who: "valen", es: "En Argentina decimos «estoy re enojado».", de: "In Argentinien sagen wir „estoy re enojado“ (ich bin total sauer).", en: "In Argentina we say “estoy re enojado”.", pic: "🇦🇷" },
        { who: "alex", es: "En España decimos «estoy enfadado».", de: "In Spanien sagen wir „estoy enfadado“.", en: "In Spain we say “estoy enfadado”.", pic: "🇪🇸" },
        { who: "coco", es: "Y en mi país: «¡estoy bravo!».", de: "Und in meinem Land: „estoy bravo!“", en: "And in my country: “estoy bravo!”", pic: "🇩🇴" },
        { who: "mia", es: "¡Ya no estoy triste! Estoy feliz con mis amigos.", de: "Ich bin nicht mehr traurig! Ich bin glücklich mit meinen Freunden.", en: "I'm not sad any more! I'm happy with my friends.", pic: "😄" }
      ],
      questions: [
        { q: "¿Cómo está Mía al principio?", de: "Wie fühlt sich Mía am Anfang?", en: "How does Mía feel at the start?", opts: ["triste", "feliz", "cansada"], a: 0 },
        { q: "¿Por qué está enojado Coco?", de: "Warum ist Coco sauer?", en: "Why is Coco angry?", opts: ["Sus plumas están mojadas.", "Tiene hambre.", "Perdió un juego."], a: 0 },
        { q: "¿Cómo se dice «enojado» en España?", de: "Wie sagt man „enojado“ in Spanien?", en: "How do you say “enojado” in Spain?", opts: ["enfadado", "bravo", "feliz"], a: 0 }
      ],
      phrases: [
        { es: "Estoy feliz.", de: "Ich bin glücklich.", en: "I'm happy." },
        { es: "Tengo frío.", de: "Mir ist kalt.", en: "I'm cold." },
        { es: "¿Cómo te sientes?", de: "Wie fühlst du dich?", en: "How do you feel?" },
        { es: "Estoy un poco cansado.", de: "Ich bin ein bisschen müde.", en: "I'm a little tired." }
      ],
      note: { es: "En español decimos «tengo frío» (tengo = habe), como en alemán «ich habe Hunger».", de: "Auf Spanisch sagt man „tengo frío“ – wörtlich „ich habe Kälte“. Lustig, oder?", en: "In Spanish you say “tengo frío” – literally “I have cold”." },
      slang: ["¡Diache!", "¡Qué pena!", "¡Qué pasada!", "¡Ay, bendito!"]
    },
    {
      id: "viajeras", title: "Palabras viajeras", pic: "🚌", sticker: "🚌", color: "sea",
      de: "Wörter auf Reisen", en: "Travelling words",
      words: [
        { es: "el autobús", de: "der Bus", en: "bus", pic: "🚌", vary: { do: "la guagua", cu: "la guagua", pr: "la guagua", mx: "el camión", ar: "el colectivo" } },
        { es: "el carro", de: "das Auto", en: "car", pic: "🚗", vary: { es: "el coche", ar: "el auto", cl: "el auto" } },
        { es: "la computadora", de: "der Computer", en: "computer", pic: "💻", vary: { es: "el ordenador" } },
        { es: "el celular", de: "das Handy", en: "mobile phone", pic: "📱", vary: { es: "el móvil" } },
        { es: "los lentes", de: "die Brille", en: "glasses", pic: "👓", vary: { es: "las gafas", do: "los espejuelos", cu: "los espejuelos", pr: "los espejuelos" } },
        { es: "la piscina", de: "das Schwimmbad", en: "swimming pool", pic: "🏊", vary: { mx: "la alberca", ar: "la pileta" } },
        { es: "las palomitas", de: "das Popcorn", en: "popcorn", pic: "🍿", vary: { ve: "las cotufas", ar: "el pochoclo" } },
        { es: "la chaqueta", de: "die Jacke", en: "jacket", pic: "🧥", vary: { mx: "la chamarra", ar: "la campera" } },
        { es: "el niño", de: "das Kind / der Junge", en: "kid / boy", pic: "🧒", vary: { es: "el chaval", mx: "el chavo", ar: "el pibe", ve: "el chamo" } },
        { es: "el avión", de: "das Flugzeug", en: "plane", pic: "✈️" }
      ],
      story: [
        { who: "coco", es: "¡Me voy de viaje por el mundo hispano!", de: "Ich mache eine Reise durch die spanischsprachige Welt!", en: "I'm going on a trip around the Spanish-speaking world!", pic: "✈️🌎" },
        { who: "coco", es: "En mi país tomo la guagua.", de: "In meinem Land nehme ich die „guagua“ (den Bus).", en: "In my country I take the “guagua” (the bus).", pic: "🇩🇴🚌" },
        { who: "mia", es: "¡En México es el camión!", de: "In Mexiko heißt das „camión“!", en: "In Mexico it's the “camión”!", pic: "🇲🇽🚌" },
        { who: "valen", es: "En Argentina, el colectivo.", de: "In Argentinien: „colectivo“.", en: "In Argentina: the “colectivo”.", pic: "🇦🇷🚌" },
        { who: "alex", es: "Y en España, el autobús. ¡Es lo mismo!", de: "Und in Spanien: „autobús“. Es ist dasselbe!", en: "And in Spain, the “autobús”. It's the same thing!", pic: "🇪🇸🚌" },
        { who: "coco", es: "Cuidado: en Chile, una guagua es… ¡un bebé!", de: "Vorsicht: In Chile ist eine „guagua“ … ein Baby!", en: "Careful: in Chile, a “guagua” is… a baby!", pic: "🇨🇱👶" },
        { who: "mia", es: "¡Jajaja! ¡Qué lío!", de: "Hahaha! Was für ein Durcheinander!", en: "Hahaha! What a mess!", pic: "🤯" }
      ],
      questions: [
        { q: "¿Cómo se dice «autobús» en México?", de: "Wie sagt man „Bus“ in Mexiko?", en: "How do you say “bus” in Mexico?", opts: ["el camión", "la guagua", "el colectivo"], a: 0 },
        { q: "¿Qué es una «guagua» en Chile?", de: "Was ist eine „guagua“ in Chile?", en: "What is a “guagua” in Chile?", opts: ["👶 un bebé", "🚌 un autobús", "🐦 un pájaro"], a: 0 },
        { q: "¿Cómo dicen «autobús» en Argentina?", de: "Wie sagt man „Bus“ in Argentinien?", en: "How do they say “bus” in Argentina?", opts: ["el colectivo", "el camión", "la guagua"], a: 0 }
      ],
      phrases: [
        { es: "Tomo la guagua.", de: "Ich nehme den Bus.", en: "I take the bus." },
        { es: "¿Dónde está mi celular?", de: "Wo ist mein Handy?", en: "Where is my phone?" },
        { es: "Vamos a la piscina.", de: "Wir gehen ins Schwimmbad.", en: "Let's go to the pool." },
        { es: "Me gustan las palomitas.", de: "Ich mag Popcorn.", en: "I like popcorn." }
      ],
      slang: ["La guagua", "¡Qué volá!", "¿Cachai?", "Parce"]
    }
  ],

  /* Expresiones coloquiales aptas para niños. r = región. */
  slang: [
    { es: "¡Qué guay!", r: "es", de: "Wie cool!", en: "How cool!", ex: "¡Qué guay tu mochila!" },
    { es: "¡Mola!", r: "es", de: "Das ist cool!", en: "That's cool!", ex: "Este juego mola mucho." },
    { es: "Vale", r: "es", de: "Okay", en: "OK", ex: "—¿Jugamos? —¡Vale!" },
    { es: "¡Qué chulo!", r: "es", de: "Wie schön! / Wie cool!", en: "How nice!", ex: "¡Qué chulo tu dibujo!" },
    { es: "¡Venga!", r: "es", de: "Los! / Komm schon!", en: "Come on!", ex: "¡Venga, que llegamos tarde!" },
    { es: "¡Hala!", r: "es", de: "Wow!", en: "Wow!", ex: "¡Hala, qué grande!" },
    { es: "¡Me flipa!", r: "es", de: "Ich liebe das!", en: "I love it!", ex: "¡Me flipa el helado de chocolate!" },
    { es: "¡Qué pasada!", r: "es", de: "Wie krass!", en: "How amazing!", ex: "¡Qué pasada de película!" },
    { es: "¡Qué padre!", r: "mx", de: "Wie cool!", en: "How cool!", ex: "¡Qué padre tu bici!" },
    { es: "¡Órale!", r: "mx", de: "Wow! / Okay, los!", en: "Wow! / OK, go!", ex: "¡Órale, qué rápido corres!" },
    { es: "¿Qué onda?", r: "mx", de: "Was geht?", en: "What's up?", ex: "¿Qué onda, Mía?" },
    { es: "Chido", r: "mx", de: "cool", en: "cool", ex: "Tu juego está bien chido." },
    { es: "¡Aguas!", r: "mx", de: "Pass auf!", en: "Watch out!", ex: "¡Aguas, que viene la pelota!" },
    { es: "Ahorita", r: "mx", de: "gleich (oder irgendwann 😉)", en: "in a moment (or sometime 😉)", ex: "Ahorita voy." },
    { es: "¿Mande?", r: "mx", de: "Wie bitte?", en: "Pardon?", ex: "—Mía, ven. —¿Mande?" },
    { es: "¡Ándale!", r: "mx", de: "Los, schnell!", en: "Hurry up!", ex: "¡Ándale, vámonos!" },
    { es: "¿Qué lo que?", r: "do", de: "Was geht?", en: "What's up?", ex: "¿Qué lo que, Coco?" },
    { es: "¡Tá jevi!", r: "do", de: "Ist cool!", en: "It's cool!", ex: "Ese juego tá jevi." },
    { es: "Un chin", r: "do", de: "ein bisschen", en: "a little bit", ex: "Dame un chin de agua." },
    { es: "La guagua", r: "do", de: "der Bus", en: "the bus", ex: "Vamos en la guagua." },
    { es: "¡Diache!", r: "do", de: "Mensch! / Oh nein!", en: "Oh man!", ex: "¡Diache, se me olvidó el lápiz!" },
    { es: "Pana", r: "ve", de: "Kumpel", en: "buddy", ex: "Él es mi pana." },
    { es: "Chamo / chama", r: "ve", de: "Junge / Mädchen, Kumpel", en: "kid / buddy", ex: "¡Epa, chamo!" },
    { es: "¡Épale!", r: "ve", de: "Hey!", en: "Hey!", ex: "¡Épale! ¿Cómo estás?" },
    { es: "Che", r: "ar", de: "Hey", en: "Hey", ex: "Che, ¿jugamos?" },
    { es: "Re", r: "ar", de: "sehr / total", en: "very", ex: "Está re lindo." },
    { es: "¡Qué copado!", r: "ar", de: "Wie cool!", en: "How cool!", ex: "¡Qué copado tu dibujo!" },
    { es: "¡Bárbaro!", r: "ar", de: "Super!", en: "Great!", ex: "—Gané. —¡Bárbaro!" },
    { es: "Pibe / piba", r: "ar", de: "Junge / Mädchen", en: "boy / girl", ex: "Ese pibe juega muy bien." },
    { es: "¡Dale!", r: "ar", de: "Okay! / Los!", en: "OK! / Go!", ex: "—¿Vamos? —¡Dale!" },
    { es: "¡Qué chévere!", r: "co", de: "Wie toll!", en: "How great!", ex: "¡Qué chévere tu fiesta!" },
    { es: "Bacano", r: "co", de: "cool", en: "cool", ex: "Ese parque es muy bacano." },
    { es: "Parce", r: "co", de: "Kumpel", en: "buddy", ex: "¿Qué más, parce?" },
    { es: "¡Qué pena!", r: "co", de: "Entschuldigung! (in Kolumbien)", en: "Sorry! (in Colombia)", ex: "¡Qué pena, llegué tarde!" },
    { es: "¡Bacán!", r: "cl", de: "Cool!", en: "Cool!", ex: "¡Qué bacán tu perro!" },
    { es: "¿Cachai?", r: "cl", de: "Verstehst du?", en: "Get it?", ex: "Es así, ¿cachai?" },
    { es: "¡Wepa!", r: "pr", de: "Juhu!", en: "Yay!", ex: "¡Wepa, ganamos!" },
    { es: "¡Ay, bendito!", r: "pr", de: "Ach, du Armer!", en: "Aww, poor thing!", ex: "¡Ay, bendito, se cayó!" },
    { es: "¡Qué volá!", r: "cu", de: "Was geht?", en: "What's up?", ex: "¡Qué volá, asere!" },
    { es: "¡Qué rico!", r: "do", de: "Wie lecker!", en: "How yummy!", ex: "¡Qué rico este mango!" }
  ],

  /* Retos con un adulto que habla español (o con quien aprende alemán: ¡tándem!). */
  retos: [
    { es: "Saluda a alguien en español y pregúntale «¿Cómo estás?».", de: "Begrüße jemanden auf Spanisch und frag „¿Cómo estás?“.", en: "Greet someone in Spanish and ask “¿Cómo estás?”." },
    { es: "Pide agua: «¿Me das agua, por favor?».", de: "Bitte um Wasser: „¿Me das agua, por favor?“", en: "Ask for water: “¿Me das agua, por favor?”" },
    { es: "Cuenta del 1 al 10 saltando en cada número.", de: "Zähle von 1 bis 10 und spring bei jeder Zahl.", en: "Count from 1 to 10 and jump on every number." },
    { es: "Di tres colores que ves ahora mismo.", de: "Nenne drei Farben, die du gerade siehst.", en: "Name three colours you can see right now." },
    { es: "Juega a «Simón dice» en español con un adulto.", de: "Spiel „Simón dice“ auf Spanisch mit einem Erwachsenen.", en: "Play “Simón dice” in Spanish with an adult." },
    { es: "Enseña una palabra en alemán y aprende una en español.", de: "Bring jemandem ein deutsches Wort bei und lerne ein spanisches.", en: "Teach someone a German word and learn a Spanish one." },
    { es: "Antes de dormir, di «buenas noches».", de: "Sag vor dem Schlafen „buenas noches“.", en: "Say “buenas noches” before bed." },
    { es: "Señala tres cosas y pregunta: «¿Qué es esto?».", de: "Zeig auf drei Dinge und frag: „¿Qué es esto?“", en: "Point at three things and ask “¿Qué es esto?”." },
    { es: "En la comida di qué te gusta: «Me gusta…».", de: "Sag beim Essen, was du magst: „Me gusta …“", en: "At a meal, say what you like: “Me gusta…”." },
    { es: "Pregunta a alguien: «¿De dónde eres?».", de: "Frag jemanden: „¿De dónde eres?“ (Woher kommst du?)", en: "Ask someone: “¿De dónde eres?”." },
    { es: "Di cómo te sientes hoy: «Estoy…».", de: "Sag, wie du dich heute fühlst: „Estoy …“", en: "Say how you feel today: “Estoy…”." },
    { es: "Describe un animal sin decir su nombre. ¡Que adivinen!", de: "Beschreibe ein Tier, ohne seinen Namen zu sagen. Die anderen raten!", en: "Describe an animal without saying its name. Let others guess!" },
    { es: "Usa una palabra de otro país hoy: guagua, chévere, guay…", de: "Benutze heute ein Wort aus einem anderen Land: guagua, chévere, guay …", en: "Use a word from another country today: guagua, chévere, guay…" },
    { es: "Di «gracias» y «por favor» en español todo el día.", de: "Sag den ganzen Tag „gracias“ und „por favor“.", en: "Say “gracias” and “por favor” all day." }
  ],

  /* Instrucciones habladas en la lengua del niño (voz de narradora). */
  narr: {
    map: { de: "Tippe auf eine Insel, um zu spielen!", en: "Tap an island to play!" },
    story: { de: "Hör dir die Geschichte an. Tippe auf einen Satz, um ihn noch einmal zu hören.", en: "Listen to the story. Tap a sentence to hear it again." },
    questions: { de: "Hast du alles verstanden? Wähle die richtige Antwort.", en: "Did you understand? Choose the right answer." },
    words: { de: "Tippe auf jedes Bild und sprich das Wort laut nach.", en: "Tap each picture and say the word out loud." },
    listen: { de: "Hör gut zu und tippe auf das richtige Bild.", en: "Listen carefully and tap the right picture." },
    read: { de: "Lies das Wort und tippe auf das passende Bild.", en: "Read the word and tap the matching picture." },
    memory: { de: "Finde die Paare: ein Bild und sein Wort.", en: "Find the pairs: a picture and its word." },
    build: { de: "Tippe die Wörter in der richtigen Reihenfolge an.", en: "Tap the words in the right order." },
    simon: { de: "Mach es nur, wenn der Satz mit Simón dice anfängt!", en: "Only do it if the sentence starts with Simón dice!" },
    speak: { de: "Hör zu und sag es laut nach. Du schaffst das!", en: "Listen and say it out loud. You can do it!" },
    slang: { de: "So reden Kinder in anderen Ländern. Tippe zum Hören.", en: "This is how kids talk in other countries. Tap to listen." },
    where: { de: "Woher kommt dieser Ausdruck? Tippe auf die richtige Flagge.", en: "Where is this expression from? Tap the right flag." },
    fast: { de: "Schnell! Lies das Wort und tippe auf das Bild. Du hast fünfundvierzig Sekunden.", en: "Quick! Read the word and tap the picture. You have forty-five seconds." },
    review: { de: "Zeit für die Truhe! Mal sehen, was du noch weißt.", en: "Time for the chest! Let's see what you remember." },
    shop: { de: "Mit deinen Münzen kannst du Sachen für Coco kaufen.", en: "Use your coins to buy things for Coco." },
    retos: { de: "Mach eine Aufgabe zusammen mit einem Erwachsenen.", en: "Do a challenge together with an adult." },
    island: { de: "Super! Du hast die ganze Insel geschafft!", en: "Great! You finished the whole island!" },
    chest: { de: "Mission erfüllt! Öffne deine Schatztruhe!", en: "Mission complete! Open your treasure chest!" }
  },

  /* Lo que dice Coco (voz dominicana). */
  lines: {
    hello: ["¡Hola! ¿Jugamos?", "¡Hola, amigo! ¡Vamos a la isla!", "¡Qué bueno verte! ¿Qué aprendemos hoy?"],
    good: ["¡Muy bien!", "¡Chévere!", "¡Excelente!", "¡Eso es!", "¡Tá jevi!", "¡Perfecto!", "¡Qué bien!"],
    try: ["¡Casi! Escucha otra vez.", "¡Uy! Inténtalo otra vez.", "No pasa nada. ¡Otra vez!"],
    combo: ["¡Racha de fuego!", "¡Imparable!", "¡Wepa! ¡Qué racha!"],
    done: ["¡Lo lograste!", "¡Isla completada! ¡Eres un campeón!"],
    shop: ["¡Qué bien me queda!", "¡Me encanta! ¡Gracias!"],
    poke: ["¡Ay! ¡Me haces cosquillas!", "¡Cra, cra! Soy Coco.", "¿Jugamos un poco más?", "¡Me gusta el guineo!"]
  },

  /* Tienda de Coco: se compra con monedas. */
  shop: [
    { id: "guineo", pic: "🍌", slot: "hand", price: 20, es: "un guineo" },
    { id: "globo", pic: "🎈", slot: "hand", price: 25, es: "un globo" },
    { id: "flor", pic: "🌺", slot: "hat", price: 30, es: "una flor" },
    { id: "lentes", pic: "👓", slot: "face", price: 40, es: "unos lentes" },
    { id: "helado", pic: "🍦", slot: "hand", price: 45, es: "un helado" },
    { id: "gorra", pic: "🧢", slot: "hat", price: 50, es: "una gorra" },
    { id: "gafas", pic: "🕶️", slot: "face", price: 60, es: "unas gafas de sol" },
    { id: "pelota", pic: "⚽", slot: "hand", price: 60, es: "una pelota" },
    { id: "sombrero", pic: "👒", slot: "hat", price: 70, es: "un sombrero" },
    { id: "chistera", pic: "🎩", slot: "hat", price: 90, es: "una chistera" },
    { id: "guitarra", pic: "🎸", slot: "hand", price: 120, es: "una guitarra" },
    { id: "birrete", pic: "🎓", slot: "hat", price: 150, es: "un birrete" },
    { id: "corona", pic: "👑", slot: "hat", price: 400, es: "una corona" }
  ],

  /* Rangos de Coco según las estrellas. */
  coco: [
    { min: 0, pic: "🌱", es: "Loro novato", de: "Neuling", en: "Rookie" },
    { min: 30, pic: "🔍", es: "Loro curioso", de: "Neugieriger Papagei", en: "Curious parrot" },
    { min: 120, pic: "🧭", es: "Loro viajero", de: "Reise-Papagei", en: "Travelling parrot" },
    { min: 300, pic: "🦉", es: "Loro sabio", de: "Kluger Papagei", en: "Wise parrot" },
    { min: 600, pic: "👑", es: "Rey de la isla", de: "König der Insel", en: "King of the island" }
  ]
};
