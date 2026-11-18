/* Isla Ñ — nivel B2 (Archipiélago Estrella) */
(function () {
  const ES = window.ES;

  ES.slang.push(
    { es: "Hacerse el sueco", r: "es", de: "so tun, als würde man nichts merken", en: "to play dumb", ex: "Le pregunté quién se había comido la tarta y se hizo el sueco." },
    { es: "Ser un crack", r: "es", de: "ein Ass sein, richtig gut in etwas sein", en: "to be an ace / a star", ex: "Mi hermana es una crack del ajedrez." },
    { es: "Hacer el aguante", r: "ar", de: "jemandem beistehen, zu jemandem halten", en: "to stand by someone", ex: "Mañana tengo la prueba de natación. ¿Me hacés el aguante?" },
    { es: "¡Qué bajón!", r: "ar", de: "Wie schade! / So ein Mist!", en: "What a bummer!", ex: "Se suspendió la excursión por la lluvia. ¡Qué bajón!" },
    { es: "¡Pilas!", r: "co", de: "Pass auf! / Sei hellwach!", en: "Heads up! / Stay sharp!", ex: "¡Pilas, que mañana hay examen!" },
    { es: "¡De una!", r: "co", de: "Klar, sofort!", en: "Sure, right away!", ex: "—¿Vamos al parque? —¡De una!" },
    { es: "No cojas lucha", r: "do", de: "Mach dir keinen Stress!", en: "Don't worry about it!", ex: "No cojas lucha, que yo te ayudo con la tarea." },
    { es: "Estar al garete", r: "pr", de: "drunter und drüber gehen / ziellos treiben", en: "to be all over the place / adrift", ex: "Después de la fiesta, la casa estaba al garete." },
    { es: "¡Qué gacho!", r: "mx", de: "Wie gemein! / Wie blöd!", en: "How mean! / That's awful!", ex: "Se burlaron de mi dibujo. ¡Qué gacho!" },
    { es: "¡Azúcar!", r: "cu", de: "Zucker! (Freudenruf der kubanischen Sängerin Celia Cruz)", en: "Sugar! (the joyful cry of Cuban singer Celia Cruz)", ex: "¡Azúcar! ¡Esa canción me pone a bailar!" }
  );

  ES.units.push(
    /* ---------- 1. Si yo fuera invisible ---------- */
    {
      id: "b2-invisible", level: "B2", title: "Si yo fuera invisible",
      de: "Wenn ich unsichtbar wäre", en: "If I were invisible",
      pic: "👻", sticker: "🪄", color: "sea",
      words: [
        { es: "invisible", de: "unsichtbar", en: "invisible", pic: "👻" },
        { es: "el superpoder", de: "die Superkraft", en: "superpower", pic: "🦸" },
        { es: "el deseo", de: "der Wunsch", en: "wish", pic: "🌠" },
        { es: "desaparecer", de: "verschwinden", en: "to disappear", pic: "💨" },
        { es: "a escondidas", de: "heimlich", en: "secretly", pic: "🤫" },
        { es: "espiar", de: "ausspionieren", en: "to spy on", pic: "🕵️" },
        { es: "hacer trampa", de: "schummeln", en: "to cheat", pic: "🃏", vary: { es: "hacer trampas" } },
        { es: "la broma", de: "der Streich / der Witz", en: "prank / joke", pic: "😜" },
        { es: "la tentación", de: "die Versuchung", en: "temptation", pic: "🍰" },
        { es: "la responsabilidad", de: "die Verantwortung", en: "responsibility", pic: "⚖️" },
        { es: "arrepentirse", de: "bereuen", en: "to regret", pic: "😔" },
        { es: "la huella", de: "die Spur / der Fußabdruck", en: "footprint / trace", pic: "👣" }
      ],
      story: [
        { who: "mia", es: "Está lloviendo y no podemos salir. Juguemos a los deseos: ¿qué harías si fueras invisible?", de: "Es regnet und wir können nicht raus. Lass uns ein Wunschspiel spielen: Was würdest du tun, wenn du unsichtbar wärst?", en: "It's raining and we can't go out. Let's play wishes: what would you do if you were invisible?", pic: "🌧️" },
        { who: "alex", es: "¡Vale! Si yo fuera invisible, entraría en el cine sin pagar y le gastaría bromas a todo el mundo.", de: "Okay! Wenn ich unsichtbar wäre, würde ich ohne zu bezahlen ins Kino gehen und allen Streiche spielen.", en: "OK! If I were invisible, I'd get into the cinema without paying and play pranks on everyone.", pic: "🎬" },
        { who: "mia", es: "¡Álex! Entrar sin pagar sería hacer trampa. Si todos lo hicieran, el cine tendría que cerrar.", de: "Álex! Ohne zu bezahlen reinzugehen wäre Schummeln. Wenn das alle machen würden, müsste das Kino schließen.", en: "Álex! Getting in without paying would be cheating. If everyone did it, the cinema would have to close.", pic: "🃏" },
        { who: "valen", es: "Che, yo, si fuera invisible, espiaría a mi hermano para descubrir dónde esconde los alfajores.", de: "Also ich, wenn ich unsichtbar wäre, würde meinen Bruder ausspionieren, um herauszufinden, wo er die Alfajores versteckt.", en: "Well, if I were invisible, I'd spy on my brother to find out where he hides the alfajores.", pic: "🕵️" },
        { who: "mia", es: "Yo, si tuviera ese superpoder, ayudaría a la gente a escondidas, como una heroína secreta. ¡Qué padre sería!", de: "Wenn ich diese Superkraft hätte, würde ich den Leuten heimlich helfen, wie eine geheime Heldin. Wie cool wäre das!", en: "If I had that superpower, I'd help people in secret, like a secret heroine. How cool would that be!", pic: "🦸‍♀️" },
        { who: "coco", es: "¿Y yo? Si yo fuera invisible, haría desaparecer un chin de ese bizcocho de chocolate sin que nadie me viera.", de: "Und ich? Wenn ich unsichtbar wäre, würde ich ein bisschen von dem Schokoladenkuchen verschwinden lassen, ohne dass mich jemand sieht.", en: "And me? If I were invisible, I'd make a little bit of that chocolate cake disappear without anyone seeing me.", pic: "🎂" },
        { who: "mia", es: "¡Ni se te ocurra, Coco! Ese pastel es para el cumpleaños de mi abuela.", de: "Denk nicht mal dran, Coco! Der Kuchen ist für den Geburtstag meiner Oma.", en: "Don't even think about it, Coco! That cake is for my grandma's birthday.", pic: "👵🏽" },
        { who: "alex", es: "¡Eh, mirad! ¡A la tarta le falta un trozo enorme! Coco, no te hagas el sueco.", de: "He, schaut mal! Von der Torte fehlt ein riesiges Stück! Coco, tu nicht so unschuldig.", en: "Hey, look! A huge piece of the cake is missing! Coco, don't play dumb.", pic: "😱" },
        { who: "coco", es: "¿Yo? Yo no fui. A lo mejor alguien se volvió invisible…", de: "Ich? Ich war's nicht. Vielleicht ist ja jemand unsichtbar geworden …", en: "Me? It wasn't me. Maybe someone turned invisible…", pic: "😇" },
        { who: "valen", es: "Mirá estas huellas en la mesa, Coco. Son huellas de loro… ¡y van directo hasta vos!", de: "Schau dir diese Spuren auf dem Tisch an, Coco. Das sind Papageienspuren … und sie führen direkt zu dir!", en: "Look at these footprints on the table, Coco. They're parrot footprints… and they lead straight to you!", pic: "👣" },
        { who: "coco", es: "¡Diache! No soy invisible… Lo siento mucho, me arrepiento. La tentación era demasiado grande.", de: "Mist! Ich bin gar nicht unsichtbar … Es tut mir sehr leid, ich bereue es. Die Versuchung war einfach zu groß.", en: "Oh no! I'm not invisible… I'm really sorry, I regret it. The temptation was just too big.", pic: "😔" },
        { who: "mia", es: "Gracias por decir la verdad. Si nos ayudaras a hacer otro pastel ahorita, la fiesta se salvaría.", de: "Danke, dass du die Wahrheit sagst. Wenn du uns jetzt gleich hilfst, einen neuen Kuchen zu backen, wäre die Party gerettet.", en: "Thanks for telling the truth. If you helped us make another cake right now, the party would be saved.", pic: "🤝" },
        { who: "alex", es: "¡Venga, todos a la cocina! Yo bato los huevos.", de: "Los, alle in die Küche! Ich verquirle die Eier.", en: "Come on, everyone to the kitchen! I'll beat the eggs.", pic: "🥚" },
        { who: "valen", es: "¿Saben qué? Ahora sé lo que haría si fuera invisible: nada que no hiciera delante de todos.", de: "Wisst ihr was? Jetzt weiß ich, was ich tun würde, wenn ich unsichtbar wäre: nichts, was ich nicht auch vor allen tun würde.", en: "You know what? Now I know what I'd do if I were invisible: nothing I wouldn't do in front of everyone.", pic: "💡" },
        { who: "coco", es: "¡Tá jevi! Y como la responsabilidad es mía, yo lavo los platos.", de: "Cool! Und weil ich die Verantwortung trage, spüle ich das Geschirr.", en: "Cool! And since it's my responsibility, I'll do the dishes.", pic: "🧽" }
      ],
      questions: [
        { q: "¿Qué haría Álex si fuera invisible?", de: "Was würde Álex tun, wenn er unsichtbar wäre?", en: "What would Álex do if he were invisible?", opts: ["Ayudaría a la gente a escondidas.", "Espiaría a su hermano.", "Entraría en el cine sin pagar."], a: 2 },
        { q: "¿Cómo descubren que fue Coco?", de: "Wie finden sie heraus, dass es Coco war?", en: "How do they find out it was Coco?", opts: ["Por las huellas de loro en la mesa.", "Porque Coco lo dice enseguida.", "Porque Mía lo vio por la ventana."], a: 0 },
        { q: "¿Qué aprende Valen al final?", de: "Was lernt Valen am Ende?", en: "What does Valen learn at the end?", opts: ["Que ser invisible es aburrido.", "Que no haría a escondidas nada que no hiciera delante de todos.", "Que los alfajores son mejores que el pastel."], a: 1 }
      ],
      phrases: [
        { es: "Si yo fuera invisible, ayudaría a la gente.", de: "Wenn ich unsichtbar wäre, würde ich den Leuten helfen.", en: "If I were invisible, I would help people." },
        { es: "¿Qué harías si tuvieras un superpoder?", de: "Was würdest du tun, wenn du eine Superkraft hättest?", en: "What would you do if you had a superpower?" },
        { es: "Me arrepiento de lo que hice.", de: "Ich bereue, was ich getan habe.", en: "I regret what I did." },
        { es: "Eso sería hacer trampa.", de: "Das wäre Schummeln.", en: "That would be cheating." }
      ],
      slang: ["Hacerse el sueco", "¡Diache!", "¡Venga!", "¡Qué padre!"],
      tips: [
        { es: "Para imaginar algo que no es real: si + fuera, tuviera, pudiera… + condicional. Si yo tuviera alas, volaría al colegio.", de: "Um dir etwas Unwirkliches vorzustellen: si + fuera, tuviera, pudiera … + Konditional. Si yo tuviera alas, volaría al colegio – Wenn ich Flügel hätte, würde ich zur Schule fliegen.", en: "To imagine something unreal: si + fuera, tuviera, pudiera… + conditional. Si yo tuviera alas, volaría al colegio – If I had wings, I'd fly to school." },
        { es: "El imperfecto de subjuntivo sale del pasado con «ellos»: tuvieron → tuviera, fueron → fuera, hicieron → hiciera, pudieron → pudiera.", de: "Den Subjuntivo der Vergangenheit bildest du aus der „ellos“-Form des Indefinido: tuvieron → tuviera, fueron → fuera, hicieron → hiciera, pudieron → pudiera.", en: "The imperfect subjunctive comes from the past “ellos” form: tuvieron → tuviera, fueron → fuera, hicieron → hiciera, pudieron → pudiera." }
      ],
      note: { es: "¿Te diste cuenta? Coco dice «bizcocho», Mía dice «pastel» y Álex dice «tarta». En Argentina, Valen diría «torta». ¡Cuatro palabras para el mismo postre!", de: "Hast du es gemerkt? Coco sagt „bizcocho“, Mía sagt „pastel“ und Álex sagt „tarta“. In Argentinien würde Valen „torta“ sagen. Vier Wörter für denselben Kuchen!", en: "Did you notice? Coco says “bizcocho”, Mía says “pastel” and Álex says “tarta”. In Argentina, Valen would say “torta”. Four words for the same cake!" }
    },

    /* ---------- 2. El gran debate ---------- */
    {
      id: "b2-debate", level: "B2", title: "El gran debate",
      de: "Die große Debatte", en: "The big debate",
      pic: "🗣️", sticker: "🎤", color: "hib",
      words: [
        { es: "el debate", de: "die Debatte", en: "debate", pic: "🎙️" },
        { es: "el argumento", de: "das Argument", en: "argument / reason", pic: "💬" },
        { es: "la opinión", de: "die Meinung", en: "opinion", pic: "💭" },
        { es: "en mi opinión", de: "meiner Meinung nach", en: "in my opinion", pic: "🙋" },
        { es: "estar de acuerdo", de: "einverstanden sein", en: "to agree", pic: "🤝" },
        { es: "por un lado… por otro lado", de: "einerseits … andererseits", en: "on the one hand… on the other hand", pic: "⚖️" },
        { es: "sin embargo", de: "jedoch / trotzdem", en: "however", pic: "🔄" },
        { es: "la ventaja", de: "der Vorteil", en: "advantage", pic: "👍" },
        { es: "la desventaja", de: "der Nachteil", en: "disadvantage", pic: "👎" },
        { es: "los deberes", de: "die Hausaufgaben", en: "homework", pic: "📚", vary: { mx: "la tarea", do: "la tarea", ar: "la tarea", co: "la tarea" } },
        { es: "el uniforme", de: "die Schuluniform", en: "school uniform", pic: "👔" },
        { es: "convencer", de: "überzeugen", en: "to convince", pic: "🎯" }
      ],
      story: [
        { who: "coco", es: "¡Bienvenidos al gran debate de la escuela! La pregunta de hoy es: ¿deberían eliminarse las tareas?", de: "Willkommen zur großen Debatte der Schule! Die Frage heute lautet: Sollten die Hausaufgaben abgeschafft werden?", en: "Welcome to the school's big debate! Today's question is: should homework be abolished?", pic: "🎙️" },
        { who: "alex", es: "En mi opinión, sí. Por un lado, después del cole estamos cansados; por otro lado, necesitamos tiempo para jugar y hacer deporte.", de: "Meiner Meinung nach ja. Einerseits sind wir nach der Schule müde, andererseits brauchen wir Zeit zum Spielen und für Sport.", en: "In my opinion, yes. On the one hand, we're tired after school; on the other hand, we need time to play and do sport.", pic: "⚽" },
        { who: "mia", es: "No estoy de acuerdo. Es verdad que cansan; sin embargo, las tareas nos ayudan a repasar lo que aprendimos.", de: "Da bin ich anderer Meinung. Es stimmt, dass sie anstrengend sind, aber die Hausaufgaben helfen uns, das Gelernte zu wiederholen.", en: "I don't agree. It's true they're tiring; however, homework helps us review what we've learned.", pic: "📚" },
        { who: "valen", es: "Che, pero no creo que necesitemos tres horas de tarea por día. ¡Es re exagerado!", de: "Hey, aber ich glaube nicht, dass wir drei Stunden Hausaufgaben am Tag brauchen. Das ist total übertrieben!", en: "Hey, but I don't think we need three hours of homework a day. That's way too much!", pic: "⏰" },
        { who: "alex", es: "¡Exacto! Y hay otra desventaja: si no entiendes algo, a lo mejor en casa no hay nadie que te lo explique.", de: "Genau! Und es gibt noch einen Nachteil: Wenn du etwas nicht verstehst, ist zu Hause vielleicht niemand da, der es dir erklärt.", en: "Exactly! And there's another disadvantage: if you don't understand something, maybe there's nobody at home to explain it to you.", pic: "🤷" },
        { who: "mia", es: "¡Oigan, no griten todos a la vez! Así nadie va a convencer a nadie.", de: "Hey, schreit nicht alle gleichzeitig! So wird niemand jemanden überzeugen.", en: "Hey, don't all shout at once! That way nobody's going to convince anybody.", pic: "😵" },
        { who: "coco", es: "¡Silencio, por favor! Regla número uno: cada uno habla un minuto y los demás escuchan con respeto.", de: "Ruhe, bitte! Regel Nummer eins: Jeder spricht eine Minute, und die anderen hören respektvoll zu.", en: "Silence, please! Rule number one: everyone speaks for one minute and the others listen respectfully.", pic: "🔔" },
        { who: "valen", es: "Bueno, reconozco que la tarea tiene una ventaja: aprendés a organizarte solo.", de: "Na gut, ich gebe zu, dass Hausaufgaben einen Vorteil haben: Man lernt, sich selbst zu organisieren.", en: "OK, I admit homework has one advantage: you learn to organise yourself.", pic: "🗓️" },
        { who: "mia", es: "Y yo admito que a veces es demasiada. Aunque sea útil, no debería quitarnos todo el tiempo libre.", de: "Und ich gebe zu, dass es manchmal zu viel ist. Auch wenn Hausaufgaben nützlich sind, sollten sie uns nicht die ganze Freizeit wegnehmen.", en: "And I admit there's sometimes too much. Even if it's useful, it shouldn't take away all our free time.", pic: "🕹️" },
        { who: "alex", es: "¿Y si buscamos una solución con la que todos estemos de acuerdo?", de: "Und wenn wir eine Lösung suchen, mit der alle einverstanden sind?", en: "What if we look for a solution we can all agree on?", pic: "💡" },
        { who: "mia", es: "¡Órale, tengo una! Propongo tarea solo tres días a la semana, y que sea más creativa: experimentos, entrevistas, dibujos…", de: "Super, ich hab eine! Ich schlage Hausaufgaben nur an drei Tagen pro Woche vor, und sie sollen kreativer sein: Experimente, Interviews, Zeichnungen …", en: "Great, I've got one! I propose homework only three days a week, and it should be more creative: experiments, interviews, drawings…", pic: "🧪" },
        { who: "valen", es: "¡Bárbaro, Mía! Con ese argumento me convenciste. Te hago el aguante.", de: "Super, Mía! Mit dem Argument hast du mich überzeugt. Ich bin auf deiner Seite.", en: "Brilliant, Mía! You convinced me with that argument. I'm on your side.", pic: "🎯" },
        { who: "coco", es: "Entonces, ¡a votar! ¿Quién está a favor de la propuesta de Mía?", de: "Dann wird abgestimmt! Wer ist für Mías Vorschlag?", en: "Then let's vote! Who's in favour of Mía's proposal?", pic: "🗳️" },
        { who: "alex", es: "¡Yo! Aunque sigo pensando que sin deberes viviríamos mejor, ¿eh?", de: "Ich! Auch wenn ich immer noch finde, dass wir ohne Hausaufgaben besser leben würden, okay?", en: "Me! Although I still think we'd live better without homework, you know?", pic: "✋" },
        { who: "coco", es: "¡Tá jevi! Ganó la propuesta, y todos defendieron su opinión con respeto. El próximo debate será sobre los uniformes… ¡prepárense!", de: "Cool! Der Vorschlag hat gewonnen, und alle haben ihre Meinung respektvoll vertreten. Die nächste Debatte geht über Schuluniformen … macht euch bereit!", en: "Cool! The proposal won, and everyone defended their opinion respectfully. The next debate will be about uniforms… get ready!", pic: "👔" }
      ],
      questions: [
        { q: "¿Por qué quiere Álex eliminar los deberes?", de: "Warum will Álex die Hausaufgaben abschaffen?", en: "Why does Álex want to get rid of homework?", opts: ["Porque no le gusta el colegio.", "Porque están cansados y necesitan tiempo para jugar.", "Porque su profe se lo pidió."], a: 1 },
        { q: "¿Qué regla pone Coco?", de: "Welche Regel stellt Coco auf?", en: "What rule does Coco set?", opts: ["Gana el que grite más.", "Solo hablan los profesores.", "Cada uno habla un minuto y los demás escuchan."], a: 2 },
        { q: "¿Qué propone Mía?", de: "Was schlägt Mía vor?", en: "What does Mía propose?", opts: ["Tarea tres días a la semana, y más creativa.", "Tarea todos los días, también el domingo.", "Ninguna tarea nunca más."], a: 0 }
      ],
      phrases: [
        { es: "En mi opinión, los uniformes son prácticos.", de: "Meiner Meinung nach sind Schuluniformen praktisch.", en: "In my opinion, uniforms are practical." },
        { es: "No estoy de acuerdo contigo.", de: "Ich bin nicht deiner Meinung.", en: "I don't agree with you." },
        { es: "Por un lado es útil; por otro, cansa.", de: "Einerseits ist es nützlich, andererseits ist es anstrengend.", en: "On the one hand it's useful; on the other, it's tiring." },
        { es: "No creo que sea una buena idea.", de: "Ich glaube nicht, dass das eine gute Idee ist.", en: "I don't think it's a good idea." }
      ],
      slang: ["Hacer el aguante", "¡Bárbaro!", "¡Órale!", "Vale"],
      tips: [
        { es: "Para ordenar tus argumentos: por un lado…, por otro lado…, además…, sin embargo…, por eso… Por un lado, el uniforme es práctico; sin embargo, no podemos elegir la ropa.", de: "So ordnest du deine Argumente: por un lado … (einerseits), por otro lado … (andererseits), además … (außerdem), sin embargo … (jedoch), por eso … (deshalb). Beispiel: Einerseits ist die Uniform praktisch, jedoch können wir unsere Kleidung nicht selbst aussuchen.", en: "To order your arguments: por un lado… (on the one hand), por otro lado… (on the other hand), además… (also), sin embargo… (however), por eso… (that's why). Example: On the one hand, uniforms are practical; however, we can't choose our clothes." },
        { es: "Después de «no creo que», «no pienso que» o «no es verdad que» va subjuntivo: Creo que es justo. No creo que sea justo.", de: "Nach „no creo que“, „no pienso que“ oder „no es verdad que“ kommt der Subjuntivo: Creo que es justo – Ich glaube, es ist fair. No creo que sea justo – Ich glaube nicht, dass es fair ist.", en: "After “no creo que”, “no pienso que” or “no es verdad que” you use the subjunctive: Creo que es justo – I think it's fair. No creo que sea justo – I don't think it's fair." }
      ],
      note: { es: "En Argentina, en muchas escuelas públicas los chicos llevan un guardapolvo blanco encima de la ropa. En España, en cambio, la mayoría de los colegios públicos no tiene uniforme.", de: "In Argentinien tragen die Kinder an vielen staatlichen Schulen einen weißen Kittel, den „guardapolvo“, über der Kleidung. In Spanien dagegen haben die meisten staatlichen Schulen gar keine Uniform.", en: "In Argentina, at many state schools children wear a white smock, the “guardapolvo”, over their clothes. In Spain, on the other hand, most state schools have no uniform at all." }
    },

    /* ---------- 3. El detective Coco ---------- */
    {
      id: "b2-detective", level: "B2", title: "El detective Coco",
      de: "Detektiv Coco", en: "Detective Coco",
      pic: "🕵️", sticker: "🍪", color: "sun",
      words: [
        { es: "el misterio", de: "das Rätsel", en: "mystery", pic: "❓" },
        { es: "la pista", de: "der Hinweis", en: "clue", pic: "🔍" },
        { es: "el sospechoso", de: "der Verdächtige", en: "suspect", pic: "🤨" },
        { es: "el testigo", de: "der Zeuge", en: "witness", pic: "👀" },
        { es: "interrogar", de: "befragen / verhören", en: "to question", pic: "🗣️" },
        { es: "la coartada", de: "das Alibi", en: "alibi", pic: "🕗" },
        { es: "confesar", de: "gestehen", en: "to confess", pic: "😳" },
        { es: "resolver", de: "lösen", en: "to solve", pic: "🧩" },
        { es: "la lupa", de: "die Lupe", en: "magnifying glass", pic: "🔎" },
        { es: "las migas", de: "die Krümel", en: "crumbs", pic: "🍪" },
        { es: "el rastro", de: "die Spur", en: "trail", pic: "🐾" },
        { es: "derretirse", de: "schmelzen", en: "to melt", pic: "🫕" }
      ],
      story: [
        { who: "mia", es: "¡Coco, ayuda! Ayer horneamos galletas para la feria de la escuela y hoy en la mañana la caja ya no estaba.", de: "Coco, Hilfe! Gestern haben wir Kekse für das Schulfest gebacken, und heute Morgen war die Schachtel weg.", en: "Coco, help! Yesterday we baked cookies for the school fair, and this morning the box was gone.", pic: "📦" },
        { who: "coco", es: "¡Un misterio! Tranquila, el detective Coco lo va a resolver. Dame un chin de tiempo… y mi lupa.", de: "Ein Rätsel! Keine Sorge, Detektiv Coco wird es lösen. Gib mir ein bisschen Zeit … und meine Lupe.", en: "A mystery! Don't worry, Detective Coco will solve it. Give me a little time… and my magnifying glass.", pic: "🔎" },
        { who: "coco", es: "Primera pista: hay migas en el suelo. ¡Forman un rastro hasta la puerta!", de: "Erster Hinweis: Auf dem Boden liegen Krümel. Sie bilden eine Spur bis zur Tür!", en: "First clue: there are crumbs on the floor. They make a trail to the door!", pic: "🍪" },
        { who: "alex", es: "¡Eh, a mí no me miréis así! Yo llegué a las ocho y la caja ya había desaparecido.", de: "He, schaut mich nicht so an! Ich bin um acht gekommen, und da war die Schachtel schon verschwunden.", en: "Hey, don't look at me like that! I arrived at eight and the box had already disappeared.", pic: "🕗" },
        { who: "coco", es: "Interesante. El sospechoso dice que llegó a las ocho y que la caja ya había desaparecido. ¿Alguien puede confirmar su coartada?", de: "Interessant. Der Verdächtige sagt, dass er um acht gekommen ist und die Schachtel schon verschwunden war. Kann jemand sein Alibi bestätigen?", en: "Interesting. The suspect says he arrived at eight and that the box had already disappeared. Can anyone confirm his alibi?", pic: "🤨" },
        { who: "valen", es: "Yo te lo confirmo: estaba conmigo en la puerta. Y además vi algo raro: alguien con un gorro blanco salía del aula con una caja.", de: "Das kann ich bestätigen: Er war bei mir am Eingang. Und außerdem habe ich etwas Seltsames gesehen: Jemand mit einer weißen Mütze kam mit einer Schachtel aus dem Klassenzimmer.", en: "I can confirm it: he was with me at the door. And I also saw something strange: someone in a white hat was leaving the classroom with a box.", pic: "👀" },
        { who: "coco", es: "¡Una testigo! A ver si lo entendí: Valen dijo que había visto a alguien con un gorro blanco y que esa persona llevaba una caja.", de: "Eine Zeugin! Mal sehen, ob ich es verstanden habe: Valen hat gesagt, dass sie jemanden mit einer weißen Mütze gesehen hatte und dass diese Person eine Schachtel trug.", en: "A witness! Let me check I've got it: Valen said she had seen someone in a white hat and that this person was carrying a box.", pic: "📝" },
        { who: "mia", es: "¡Un gorro blanco! ¿Quién lleva gorro blanco en la escuela?", de: "Eine weiße Mütze! Wer trägt in der Schule eine weiße Mütze?", en: "A white hat! Who wears a white hat at school?", pic: "🤔" },
        { who: "alex", es: "¡La cocinera! Vamos a la cocina a interrogarla.", de: "Die Köchin! Lasst uns in die Küche gehen und sie befragen.", en: "The cook! Let's go to the kitchen and question her.", pic: "👩‍🍳" },
        { who: "mia", es: "¡Ya volvimos! La cocinera nos explicó que el aula estaba muy caliente y que el chocolate se estaba derritiendo.", de: "Wir sind zurück! Die Köchin hat uns erklärt, dass es im Klassenzimmer sehr heiß war und die Schokolade schon anfing zu schmelzen.", en: "We're back! The cook explained that the classroom was very hot and that the chocolate was melting.", pic: "🍫" },
        { who: "mia", es: "También nos dijo que ayer me había preguntado si las galletas eran para la feria. ¡Es cierto, se me había olvidado! Por eso las guardó en el refri.", de: "Sie hat uns auch gesagt, dass sie mich gestern gefragt hatte, ob die Kekse für das Schulfest sind. Stimmt, das hatte ich vergessen! Deshalb hat sie sie in den Kühlschrank gestellt.", en: "She also told us she had asked me yesterday whether the cookies were for the fair. It's true, I'd forgotten! That's why she put them in the fridge.", pic: "🧊" },
        { who: "valen", es: "¿Y las migas? Mirá, la caja tiene un agujero abajo. ¡Por eso se caían!", de: "Und die Krümel? Schau, die Schachtel hat unten ein Loch. Deshalb sind sie herausgefallen!", en: "And the crumbs? Look, the box has a hole at the bottom. That's why they were falling out!", pic: "🕳️" },
        { who: "coco", es: "¡Misterio resuelto! No hubo ningún ladrón: la cocinera solo quería salvar las galletas.", de: "Fall gelöst! Es gab gar keinen Dieb: Die Köchin wollte nur die Kekse retten.", en: "Mystery solved! There was no thief at all: the cook just wanted to save the cookies.", pic: "🧩" },
        { who: "alex", es: "Pues yo tengo que confesar algo: le pedí a la cocinera que me diera una galleta… ¡y me dio dos!", de: "Also, ich muss etwas gestehen: Ich habe die Köchin gebeten, mir einen Keks zu geben … und sie hat mir zwei gegeben!", en: "Well, I have to confess something: I asked the cook to give me a cookie… and she gave me two!", pic: "😳" },
        { who: "coco", es: "¡Diache, Álex! El detective Coco exige que le paguen con una galleta también.", de: "Mensch, Álex! Detektiv Coco verlangt, dass er auch mit einem Keks bezahlt wird.", en: "Oh man, Álex! Detective Coco demands to be paid with a cookie too.", pic: "🍪" }
      ],
      questions: [
        { q: "¿Qué dijo Álex cuando lo miraron?", de: "Was hat Álex gesagt, als sie ihn angeschaut haben?", en: "What did Álex say when they looked at him?", opts: ["Que se había comido las galletas.", "Que había llegado a las ocho y la caja ya no estaba.", "Que no le gustaban las galletas."], a: 1 },
        { q: "¿Por qué guardó la cocinera las galletas?", de: "Warum hat die Köchin die Kekse weggeräumt?", en: "Why did the cook put the cookies away?", opts: ["Porque quería comérselas.", "Porque Coco se lo pidió.", "Porque el chocolate se estaba derritiendo."], a: 2 },
        { q: "¿Qué confiesa Álex al final?", de: "Was gesteht Álex am Ende?", en: "What does Álex confess at the end?", opts: ["Que le pidió una galleta a la cocinera y le dio dos.", "Que hizo un agujero en la caja.", "Que escondió la lupa de Coco."], a: 0 }
      ],
      phrases: [
        { es: "Dijo que había llegado a las ocho.", de: "Er hat gesagt, dass er um acht gekommen war.", en: "He said he had arrived at eight." },
        { es: "Me preguntó si las galletas eran para la feria.", de: "Sie hat mich gefragt, ob die Kekse für das Schulfest sind.", en: "She asked me whether the cookies were for the fair." },
        { es: "Le pedí que me ayudara.", de: "Ich habe ihn gebeten, mir zu helfen.", en: "I asked him to help me." },
        { es: "¡Misterio resuelto!", de: "Fall gelöst!", en: "Mystery solved!" }
      ],
      slang: ["¡Pilas!", "Un chin", "¿Cachai?", "¡Aguas!"],
      tips: [
        { es: "Para contar lo que dijo otra persona, el tiempo va un paso atrás: «Llegué a las ocho» → Dijo que había llegado a las ocho. «Hace calor» → Dijo que hacía calor.", de: "Wenn du wiedergibst, was jemand gesagt hat, rutscht die Zeit einen Schritt zurück: „Llegué a las ocho“ → Dijo que había llegado a las ocho. „Hace calor“ → Dijo que hacía calor.", en: "When you report what someone said, the tense moves one step back: “Llegué a las ocho” → Dijo que había llegado a las ocho. “Hace calor” → Dijo que hacía calor." },
        { es: "Las preguntas de sí o no se cuentan con «si»: «¿Son para la feria?» → Me preguntó si eran para la feria. Los pedidos, con «que» y subjuntivo: «¡Dame una galleta!» → Le pedí que me diera una galleta.", de: "Ja-Nein-Fragen gibst du mit „si“ (ob) wieder: „¿Son para la feria?“ → Me preguntó si eran para la feria. Bitten mit „que“ und Subjuntivo: „¡Dame una galleta!“ → Le pedí que me diera una galleta.", en: "Yes/no questions are reported with “si” (whether): “¿Son para la feria?” → Me preguntó si eran para la feria. Requests take “que” + subjunctive: “¡Dame una galleta!” → Le pedí que me diera una galleta." }
      ],
      note: { es: "El refrigerador tiene muchos nombres: en México dicen «el refri», en Argentina «la heladera» y en España «la nevera» o «el frigorífico».", de: "Der Kühlschrank hat viele Namen: In Mexiko sagt man „el refri“, in Argentinien „la heladera“ und in Spanien „la nevera“ oder „el frigorífico“.", en: "The fridge has many names: in Mexico they say “el refri”, in Argentina “la heladera” and in Spain “la nevera” or “el frigorífico”." }
    },

    /* ---------- 4. Inventoras y científicas ---------- */
    {
      id: "b2-cientificas", level: "B2", title: "Inventoras y científicas",
      de: "Erfinderinnen und Forscherinnen", en: "Inventors and scientists",
      pic: "🔬", sticker: "💡", color: "leaf",
      words: [
        { es: "el invento", de: "die Erfindung", en: "invention", pic: "💡" },
        { es: "la inventora", de: "die Erfinderin", en: "inventor", pic: "👩‍🔧" },
        { es: "la científica", de: "die Wissenschaftlerin", en: "scientist", pic: "👩‍🔬" },
        { es: "descubrir", de: "entdecken", en: "to discover", pic: "🔭" },
        { es: "patentar", de: "patentieren", en: "to patent", pic: "📜" },
        { es: "el premio", de: "der Preis", en: "prize / award", pic: "🏅" },
        { es: "el laboratorio", de: "das Labor", en: "laboratory", pic: "🧪" },
        { es: "el elemento químico", de: "das chemische Element", en: "chemical element", pic: "⚛️" },
        { es: "la física", de: "die Physik", en: "physics", pic: "🧲" },
        { es: "la química", de: "die Chemie", en: "chemistry", pic: "⚗️" },
        { es: "la astronauta", de: "die Astronautin", en: "astronaut", pic: "👩‍🚀" },
        { es: "la médica", de: "die Ärztin", en: "doctor", pic: "🩺" }
      ],
      story: [
        { who: "coco", es: "¡Bienvenidos al concurso «¿Quién lo inventó?»! Primera pregunta: ¿por quién fue inventado el limpiaparabrisas?", de: "Willkommen beim Quiz „Wer hat's erfunden?“! Erste Frage: Von wem wurde der Scheibenwischer erfunden?", en: "Welcome to the quiz “Who invented it?”! First question: who was the windscreen wiper invented by?", pic: "🚗" },
        { who: "alex", es: "¡Lo sé! Fue inventado por Mary Anderson, una mujer de Estados Unidos, en 1903.", de: "Ich weiß es! Er wurde 1903 von Mary Anderson erfunden, einer Frau aus den USA.", en: "I know! It was invented by Mary Anderson, a woman from the United States, in 1903.", pic: "🌧️" },
        { who: "coco", es: "¡Correcto! Y yo que creía que casi todos los inventos habían sido hechos por hombres…", de: "Richtig! Und ich dachte, fast alle Erfindungen wären von Männern gemacht worden …", en: "Correct! And there was me thinking almost all inventions had been made by men…", pic: "😮" },
        { who: "mia", es: "¡Para nada, Coco! Mira: Ellen Ochoa, de familia mexicana, fue la primera astronauta latina en viajar al espacio, en 1993.", de: "Überhaupt nicht, Coco! Schau: Ellen Ochoa, aus einer mexikanischen Familie, war 1993 die erste Latina, die als Astronautin ins All geflogen ist.", en: "Not at all, Coco! Look: Ellen Ochoa, from a Mexican family, was the first Latina astronaut to travel to space, in 1993.", pic: "🚀" },
        { who: "coco", es: "Segunda pregunta: ¿qué dos elementos químicos fueron descubiertos por Marie Curie?", de: "Zweite Frage: Welche zwei chemischen Elemente wurden von Marie Curie entdeckt?", en: "Second question: which two chemical elements were discovered by Marie Curie?", pic: "⚗️" },
        { who: "valen", es: "¡Fácil, che! El polonio y el radio. Los descubrió en su laboratorio junto con su esposo, Pierre. El polonio se llama así por Polonia, su país.", de: "Einfach! Polonium und Radium. Sie hat sie zusammen mit ihrem Mann Pierre in ihrem Labor entdeckt. Das Polonium ist nach Polen benannt, ihrem Heimatland.", en: "Easy! Polonium and radium. She discovered them in her lab together with her husband, Pierre. Polonium is named after Poland, her country.", pic: "🇵🇱" },
        { who: "valen", es: "Y es la única persona que ganó el premio Nobel en dos ciencias distintas: física y química. ¡Una genia!", de: "Und sie ist der einzige Mensch, der den Nobelpreis in zwei verschiedenen Wissenschaften gewonnen hat: Physik und Chemie. Ein Genie!", en: "And she's the only person who has won the Nobel Prize in two different sciences: physics and chemistry. A genius!", pic: "🏅" },
        { who: "coco", es: "¡Tá jevi! Tercera pregunta, muy difícil: ¿qué actriz nacida en Viena patentó una idea que hoy se usa en el bluetooth?", de: "Cool! Dritte Frage, sehr schwer: Welche in Wien geborene Schauspielerin hat eine Idee patentiert, die heute bei Bluetooth benutzt wird?", en: "Cool! Third question, very hard: which actress born in Vienna patented an idea that's used in Bluetooth today?", pic: "🎬" },
        { who: "alex", es: "¡Hedy Lamarr! Era actriz de cine y, sin embargo, por las noches inventaba cosas. Su sistema, creado con un amigo pianista, fue patentado en 1942.", de: "Hedy Lamarr! Sie war Filmschauspielerin, aber nachts hat sie Dinge erfunden. Ihr System, das sie mit einem befreundeten Pianisten entwickelt hatte, wurde 1942 patentiert.", en: "Hedy Lamarr! She was a film actress, but at night she invented things. Her system, created with a pianist friend, was patented in 1942.", pic: "📡" },
        { who: "mia", es: "¡Qué padre! O sea que cada vez que usamos unos audífonos inalámbricos, en parte se lo debemos a ella.", de: "Wie cool! Das heißt, jedes Mal, wenn wir kabellose Kopfhörer benutzen, verdanken wir das zum Teil ihr.", en: "How cool! So every time we use wireless headphones, we partly owe it to her.", pic: "🎧" },
        { who: "alex", es: "Y en España, la Enciclopedia Mecánica fue inventada en 1949 por una maestra de León, Ángela Ruiz Robles. ¡Dicen que es la abuela del libro electrónico!", de: "Und in Spanien wurde die „Mechanische Enzyklopädie“ 1949 von einer Lehrerin aus León erfunden, Ángela Ruiz Robles. Man sagt, sie ist die Oma des E-Books!", en: "And in Spain, the Mechanical Encyclopedia was invented in 1949 by a teacher from León, Ángela Ruiz Robles. They say she's the grandmother of the e-book!", pic: "📖" },
        { who: "coco", es: "Última pregunta: ¿quién fue la primera médica de Argentina?", de: "Letzte Frage: Wer war die erste Ärztin Argentiniens?", en: "Last question: who was Argentina's first woman doctor?", pic: "🩺" },
        { who: "valen", es: "¡Esa me la sé! Cecilia Grierson. Se recibió de médica en 1889, cuando casi nadie creía que una mujer pudiera estudiar medicina.", de: "Die weiß ich! Cecilia Grierson. Sie hat 1889 ihren Abschluss als Ärztin gemacht, als kaum jemand glaubte, dass eine Frau Medizin studieren könnte.", en: "I know that one! Cecilia Grierson. She qualified as a doctor in 1889, when hardly anyone believed a woman could study medicine.", pic: "👩‍⚕️" },
        { who: "coco", es: "Y en mi país, Evangelina Rodríguez fue la primera médica dominicana. ¡Ayudó a muchísimas madres y niños pobres!", de: "Und in meinem Land war Evangelina Rodríguez die erste dominikanische Ärztin. Sie hat ganz vielen armen Müttern und Kindern geholfen!", en: "And in my country, Evangelina Rodríguez was the first Dominican woman doctor. She helped lots of poor mothers and children!", pic: "🇩🇴" },
        { who: "alex", es: "¡Qué guay! Inventoras, científicas, médicas… ¡Eran unas cracks! Y aunque tuvieron que luchar mucho, cambiaron el mundo.", de: "Wie cool! Erfinderinnen, Wissenschaftlerinnen, Ärztinnen … Die waren echte Asse! Und obwohl sie viel kämpfen mussten, haben sie die Welt verändert.", en: "How cool! Inventors, scientists, doctors… They were real stars! And although they had to fight hard, they changed the world.", pic: "🌍" },
        { who: "coco", es: "¡Y el premio es para… todos! Yo también voy a ser inventor: inventaré un guineo que nunca se ponga negro.", de: "Und der Preis geht an … alle! Ich werde auch Erfinder: Ich erfinde eine Banane, die nie braun wird.", en: "And the prize goes to… everyone! I'm going to be an inventor too: I'll invent a banana that never goes brown.", pic: "🍌" }
      ],
      questions: [
        { q: "¿Por quién fue inventado el limpiaparabrisas?", de: "Von wem wurde der Scheibenwischer erfunden?", en: "Who was the windscreen wiper invented by?", opts: ["Por Marie Curie.", "Por Mary Anderson.", "Por Hedy Lamarr."], a: 1 },
        { q: "¿Por qué se llama así el polonio?", de: "Warum heißt das Polonium so?", en: "Why is polonium called that?", opts: ["Por el polo norte.", "Por un amigo de Pierre.", "Por Polonia, el país de Marie Curie."], a: 2 },
        { q: "¿Qué hacía Hedy Lamarr además de actuar?", de: "Was machte Hedy Lamarr außer Schauspielern?", en: "What did Hedy Lamarr do besides acting?", opts: ["Inventaba cosas.", "Pintaba cuadros.", "Daba clases de piano."], a: 0 }
      ],
      phrases: [
        { es: "El radio fue descubierto por Marie y Pierre Curie.", de: "Das Radium wurde von Marie und Pierre Curie entdeckt.", en: "Radium was discovered by Marie and Pierre Curie." },
        { es: "¿Por quién fue inventado?", de: "Von wem wurde es erfunden?", en: "Who was it invented by?" },
        { es: "Fue la primera mujer que ganó un premio Nobel.", de: "Sie war die erste Frau, die einen Nobelpreis gewonnen hat.", en: "She was the first woman to win a Nobel Prize." },
        { es: "Su invento cambió el mundo.", de: "Ihre Erfindung hat die Welt verändert.", en: "Her invention changed the world." }
      ],
      slang: ["Ser un crack", "¡Tá jevi!", "¡Qué guay!", "¡Bacán!"],
      tips: [
        { es: "Voz pasiva: ser + participio + por. El participio cambia como un adjetivo: El radio fue descubierto por Marie Curie. La enciclopedia fue inventada por una maestra.", de: "Passiv: ser + Partizip + por (von). Das Partizip passt sich an wie ein Adjektiv: El radio fue descubierto … – Das Radium wurde entdeckt … La enciclopedia fue inventada … – Die Enzyklopädie wurde erfunden …", en: "Passive voice: ser + past participle + por (by). The participle agrees like an adjective: El radio fue descubierto… – Radium was discovered… La enciclopedia fue inventada… – The encyclopedia was invented…" },
        { es: "Al hablar, el español prefiere la voz activa: Marie Curie descubrió el radio. La pasiva con «fue… por» es típica de biografías, libros y noticias.", de: "Beim Sprechen nimmt man im Spanischen lieber das Aktiv: Marie Curie descubrió el radio. Das Passiv mit „fue … por“ ist typisch für Biografien, Bücher und Nachrichten.", en: "When speaking, Spanish prefers the active voice: Marie Curie descubrió el radio. The passive with “fue… por” is typical of biographies, books and the news." }
      ],
      note: { es: "Hedy Lamarr nació en Viena en 1914, así que su lengua materna era el alemán. En Alemania, Austria y Suiza, el Día del Inventor se celebra el 9 de noviembre, el día de su cumpleaños.", de: "Hedy Lamarr wurde 1914 in Wien geboren – ihre Muttersprache war also Deutsch. In Deutschland, Österreich und der Schweiz feiert man den Tag der Erfinder am 9. November, ihrem Geburtstag.", en: "Hedy Lamarr was born in Vienna in 1914, so her mother tongue was German. Germany, Austria and Switzerland celebrate Inventors' Day on 9 November, her birthday." }
    },

    /* ---------- 5. Los océanos en peligro ---------- */
    {
      id: "b2-oceanos", level: "B2", title: "Los océanos en peligro",
      de: "Ozeane in Gefahr", en: "Oceans in danger",
      pic: "🌊", sticker: "🐋", color: "sea",
      words: [
        { es: "el océano", de: "der Ozean", en: "ocean", pic: "🌊" },
        { es: "la contaminación", de: "die Verschmutzung", en: "pollution", pic: "🏭" },
        { es: "la bolsa de plástico", de: "die Plastiktüte", en: "plastic bag", pic: "🛍️" },
        { es: "la pajita", de: "der Strohhalm", en: "straw", pic: "🥤", vary: { mx: "el popote", ar: "el sorbete", do: "el sorbete", co: "el pitillo", ve: "el pitillo", cl: "la bombilla", pr: "el sorbeto" } },
        { es: "el arrecife de coral", de: "das Korallenriff", en: "coral reef", pic: "🪸" },
        { es: "la tortuga marina", de: "die Meeresschildkröte", en: "sea turtle", pic: "🐢" },
        { es: "la ballena", de: "der Wal", en: "whale", pic: "🐋" },
        { es: "la basura", de: "der Müll", en: "rubbish", pic: "🗑️" },
        { es: "reciclar", de: "recyceln", en: "to recycle", pic: "♻️" },
        { es: "proteger", de: "schützen", en: "to protect", pic: "🛡️" },
        { es: "en peligro de extinción", de: "vom Aussterben bedroht", en: "endangered", pic: "⚠️" },
        { es: "el calentamiento global", de: "die Erderwärmung", en: "global warming", pic: "🌡️" }
      ],
      story: [
        { who: "coco", es: "¡Buenos días, playa! Hoy es el día de limpieza de la costa. ¡Agarren sus guantes!", de: "Guten Morgen, Strand! Heute ist Küstenputztag. Schnappt euch eure Handschuhe!", en: "Good morning, beach! Today is coast clean-up day. Grab your gloves!", pic: "🏖️" },
        { who: "alex", es: "¡Madre mía, cuánta basura! Botellas, bolsas de plástico, tapones… Aunque lo recojamos todo, mañana habrá más.", de: "Meine Güte, so viel Müll! Flaschen, Plastiktüten, Deckel … Auch wenn wir alles aufsammeln, liegt morgen wieder neuer da.", en: "Oh my goodness, so much rubbish! Bottles, plastic bags, bottle tops… Even if we pick it all up, there'll be more tomorrow.", pic: "🗑️" },
        { who: "mia", es: "Es cierto que el problema es enorme. Sin embargo, cada botella que recogemos ya no llega al océano.", de: "Es stimmt, dass das Problem riesig ist. Trotzdem landet jede Flasche, die wir aufheben, nicht mehr im Meer.", en: "It's true the problem is huge. However, every bottle we pick up no longer reaches the ocean.", pic: "🌊" },
        { who: "valen", es: "¡Che, vengan rápido! Hay una tortuga marina enredada en una bolsa. ¡Pobrecita!", de: "Hey, kommt schnell! Da ist eine Meeresschildkröte, die sich in einer Tüte verfangen hat. Die Arme!", en: "Hey, come quick! There's a sea turtle tangled up in a bag. Poor thing!", pic: "🐢" },
        { who: "coco", es: "¡No la toquen! Voy a llamar a los del centro de rescate para que vengan a ayudarla.", de: "Fasst sie nicht an! Ich rufe die Rettungsstation an, damit sie kommen und ihr helfen.", en: "Don't touch her! I'll call the rescue centre so they come and help her.", pic: "📞" },
        { who: "mia", es: "¿Sabían que las tortugas confunden las bolsas con medusas? Por lo tanto, se las comen y se enferman.", de: "Wusstet ihr, dass Schildkröten Plastiktüten mit Quallen verwechseln? Deshalb fressen sie sie und werden krank.", en: "Did you know turtles mistake plastic bags for jellyfish? So they eat them and get ill.", pic: "🛍️" },
        { who: "valen", es: "¡Qué bajón! Por culpa de la contaminación, muchas especies están en peligro de extinción.", de: "So ein Mist! Wegen der Verschmutzung sind viele Arten vom Aussterben bedroht.", en: "What a bummer! Because of pollution, lots of species are endangered.", pic: "⚠️" },
        { who: "alex", es: "Mi profe dice que el calentamiento global también afecta a los arrecifes de coral: si el agua se calienta demasiado, los corales se ponen blancos.", de: "Mein Lehrer sagt, dass die Erderwärmung auch den Korallenriffen schadet: Wenn das Wasser zu warm wird, werden die Korallen weiß.", en: "My teacher says global warming also affects coral reefs: if the water gets too warm, the corals turn white.", pic: "🪸" },
        { who: "coco", es: "¡Buenas noticias! Ya llegó el equipo de rescate. Dicen que la tortuga está bien y que pronto la devolverán al mar.", de: "Gute Nachrichten! Das Rettungsteam ist da. Sie sagen, dass es der Schildkröte gut geht und dass sie sie bald ins Meer zurückbringen.", en: "Good news! The rescue team is here. They say the turtle is fine and that they'll soon return her to the sea.", pic: "🎉" },
        { who: "mia", es: "¡Qué alivio! Pero no basta con limpiar. Hay que evitar que el plástico llegue al mar.", de: "Was für eine Erleichterung! Aber Aufräumen reicht nicht. Wir müssen verhindern, dass das Plastik ins Meer gelangt.", en: "What a relief! But cleaning up isn't enough. We have to stop the plastic from reaching the sea.", pic: "😮‍💨" },
        { who: "alex", es: "Vale, ¿y qué podemos hacer nosotros? Solo somos niños.", de: "Okay, und was können wir tun? Wir sind doch nur Kinder.", en: "OK, and what can we do? We're just kids.", pic: "🤷" },
        { who: "valen", es: "¡Un montón de cosas! Llevar una botella reutilizable, reciclar y decir que no a los sorbetes de plástico.", de: "Jede Menge! Eine wiederverwendbare Flasche mitnehmen, recyceln und Nein zu Plastikstrohhalmen sagen.", en: "Loads of things! Carry a reusable bottle, recycle and say no to plastic straws.", pic: "♻️" },
        { who: "mia", es: "En México les decimos popotes, y Álex dice pajitas. ¡Yo ya uso uno de metal!", de: "In Mexiko sagen wir „popotes“ dazu, und Álex sagt „pajitas“. Ich benutze schon einen aus Metall!", en: "In Mexico we call them “popotes”, and Álex says “pajitas”. I already use a metal one!", pic: "🥤" },
        { who: "coco", es: "Aunque seamos pequeños, si muchos niños hacen lo mismo, el cambio será enorme. Así que… ¡a proteger el océano!", de: "Auch wenn wir klein sind: Wenn viele Kinder dasselbe tun, wird die Veränderung riesig. Also … los, schützen wir das Meer!", en: "Even if we're small, if lots of kids do the same, the change will be huge. So… let's protect the ocean!", pic: "🛡️" },
        { who: "alex", es: "¡Hala! Mirad allí, en el horizonte… ¡una ballena! Parece que nos está dando las gracias.", de: "Wow! Schaut mal dort am Horizont … ein Wal! Es sieht so aus, als würde er sich bei uns bedanken.", en: "Wow! Look over there, on the horizon… a whale! It looks like it's thanking us.", pic: "🐋" }
      ],
      questions: [
        { q: "¿Qué encuentra Valen en la playa?", de: "Was findet Valen am Strand?", en: "What does Valen find on the beach?", opts: ["Una ballena.", "Un coral blanco.", "Una tortuga enredada en una bolsa."], a: 2 },
        { q: "¿Por qué se comen las tortugas las bolsas?", de: "Warum fressen die Schildkröten die Tüten?", en: "Why do turtles eat the bags?", opts: ["Porque las confunden con medusas.", "Porque tienen mucha hambre.", "Porque les gusta el plástico."], a: 0 },
        { q: "¿Qué piensa Álex al principio?", de: "Was denkt Álex am Anfang?", en: "What does Álex think at the beginning?", opts: ["Que la playa está muy limpia.", "Que, aunque lo recojan todo, mañana habrá más basura.", "Que las ballenas son peligrosas."], a: 1 }
      ],
      phrases: [
        { es: "Aunque sea difícil, vale la pena intentarlo.", de: "Auch wenn es schwer ist, lohnt es sich, es zu versuchen.", en: "Even if it's difficult, it's worth trying." },
        { es: "Hay que evitar que el plástico llegue al mar.", de: "Man muss verhindern, dass das Plastik ins Meer gelangt.", en: "We have to stop plastic from reaching the sea." },
        { es: "Muchas especies están en peligro de extinción.", de: "Viele Arten sind vom Aussterben bedroht.", en: "Many species are endangered." },
        { es: "Por lo tanto, tenemos que reciclar más.", de: "Deshalb müssen wir mehr recyceln.", en: "Therefore, we have to recycle more." }
      ],
      slang: ["¡Qué bajón!", "Estar al garete", "¡Hala!", "¡Ay, bendito!"],
      tips: [
        { es: "«Aunque» con indicativo habla de un hecho: Aunque llueve, vamos a la playa. Con subjuntivo, de algo que no es seguro o no importa: Aunque llueva mañana, iremos.", de: "„Aunque“ mit Indikativ beschreibt eine Tatsache: Aunque llueve … – Obwohl es regnet … Mit Subjuntivo etwas Unsicheres oder Unwichtiges: Aunque llueva mañana … – Auch wenn es morgen regnen sollte …", en: "“Aunque” + indicative is about a fact: Aunque llueve… – Although it's raining… With the subjunctive it's about something uncertain or that doesn't matter: Aunque llueva mañana… – Even if it rains tomorrow…" },
        { es: "«Por lo tanto» une una causa con su consecuencia: Las tortugas confunden las bolsas con medusas; por lo tanto, se las comen. También puedes decir «por eso» o «así que».", de: "„Por lo tanto“ (deshalb, folglich) verbindet eine Ursache mit ihrer Folge: Die Schildkröten verwechseln die Tüten mit Quallen; deshalb fressen sie sie. Du kannst auch „por eso“ oder „así que“ sagen.", en: "“Por lo tanto” (therefore) links a cause to its consequence: Turtles mistake bags for jellyfish; therefore, they eat them. You can also say “por eso” or “así que”." }
      ],
      note: { es: "En México hay campamentos tortugueros: allí, voluntarios cuidan los nidos en la arena hasta que nacen las tortuguitas y corren hacia el mar.", de: "In Mexiko gibt es Schildkröten-Camps: Dort bewachen Freiwillige die Nester im Sand, bis die kleinen Schildkröten schlüpfen und zum Meer laufen.", en: "In Mexico there are turtle camps: volunteers guard the nests in the sand until the baby turtles hatch and run to the sea." }
    },

    /* ---------- 6. Mitos y leyendas ---------- */
    {
      id: "b2-leyendas", level: "B2", title: "Mitos y leyendas",
      de: "Mythen und Legenden", en: "Myths and legends",
      pic: "🌙", sticker: "🪶", color: "hib",
      words: [
        { es: "la leyenda", de: "die Legende / die Sage", en: "legend", pic: "📜" },
        { es: "el mito", de: "der Mythos", en: "myth", pic: "🏛️" },
        { es: "el duende", de: "der Kobold", en: "goblin / elf", pic: "🧝" },
        { es: "el colibrí", de: "der Kolibri", en: "hummingbird", pic: "🐦", vary: { do: "el zumbador", pr: "el zumbador", cu: "el zunzún", ar: "el picaflor", cl: "el picaflor", ve: "el tucusito" } },
        { es: "el cazador", de: "der Jäger", en: "hunter", pic: "🏹" },
        { es: "al revés", de: "verkehrt herum", en: "the wrong way round / backwards", pic: "🙃" },
        { es: "el silbido", de: "das Pfeifen", en: "whistle", pic: "🎵" },
        { es: "la piedra de jade", de: "der Jadestein", en: "jade stone", pic: "💎" },
        { es: "los dioses", de: "die Götter", en: "the gods", pic: "⚡" },
        { es: "la linterna", de: "die Taschenlampe", en: "torch / flashlight", pic: "🔦" },
        { es: "la tienda de campaña", de: "das Zelt", en: "tent", pic: "⛺", vary: { mx: "la casa de campaña", ar: "la carpa", cl: "la carpa", co: "la carpa", ve: "la carpa" } },
        { es: "dar miedo", de: "Angst machen", en: "to be scary", pic: "😱" }
      ],
      story: [
        { who: "mia", es: "Se fue la luz en el campamento. ¿Y si contamos leyendas con la linterna?", de: "Im Zeltlager ist der Strom ausgefallen. Wollen wir mit der Taschenlampe Legenden erzählen?", en: "The power's gone out at camp. What if we tell legends by torchlight?", pic: "🔦" },
        { who: "alex", es: "Vale, pero que no den mucho miedo, ¿eh? Bueno… yo no le tengo miedo a nada.", de: "Okay, aber nicht zu gruselig, ja? Na ja … ich habe sowieso vor nichts Angst.", en: "OK, but nothing too scary, right? Well… I'm not scared of anything anyway.", pic: "😅" },
        { who: "coco", es: "Les cuento la de la Ciguapa. Vivía en las montañas de mi isla, tenía el pelo larguísimo y los pies al revés.", de: "Ich erzähle euch die von der Ciguapa. Sie lebte in den Bergen meiner Insel, hatte superlange Haare und Füße, die verkehrt herum zeigten.", en: "I'll tell you the one about the Ciguapa. She lived in the mountains of my island, had super long hair and backwards feet.", pic: "⛰️" },
        { who: "coco", es: "Los cazadores seguían sus huellas, pero nunca la encontraban. ¿Saben por qué? ¡Porque ella se había ido en la dirección contraria!", de: "Die Jäger folgten ihren Spuren, aber sie fanden sie nie. Wisst ihr, warum? Weil sie in die entgegengesetzte Richtung gegangen war!", en: "The hunters followed her footprints, but they never found her. Know why? Because she had gone the opposite way!", pic: "👣" },
        { who: "mia", es: "¡Qué lista! Yo me sé un mito maya. Cuentan que los dioses ya habían creado a todos los animales, pero faltaba alguien que llevara sus mensajes.", de: "Wie schlau! Ich kenne einen Mythos der Maya. Man erzählt, dass die Götter schon alle Tiere erschaffen hatten, aber es fehlte jemand, der ihre Botschaften überbrachte.", en: "How clever! I know a Maya myth. They say the gods had already created all the animals, but someone was missing to carry their messages.", pic: "🛕" },
        { who: "mia", es: "Entonces tomaron una piedrita de jade, soplaron sobre ella y… ¡salió volando un colibrí!", de: "Da nahmen sie einen kleinen Jadestein, pusteten darauf und … ein Kolibri flog davon!", en: "So they took a little jade stone, blew on it and… a hummingbird flew away!", pic: "💚" },
        { who: "coco", es: "¡En mi isla al colibrí le decimos zumbador, porque zumba cuando vuela!", de: "Auf meiner Insel sagen wir zum Kolibri „zumbador“, weil er beim Fliegen summt!", en: "On my island we call the hummingbird “zumbador”, because it buzzes when it flies!", pic: "🐦" },
        { who: "valen", es: "¡Re lindo! Ahora escuchen la del Pombero, del noreste de Argentina y de Paraguay. Es un duende bajito y peludo que cuida a los pájaros del monte.", de: "Total schön! Jetzt hört die vom Pombero, aus dem Nordosten Argentiniens und aus Paraguay. Er ist ein kleiner, haariger Kobold, der die Vögel im Wald beschützt.", en: "So lovely! Now listen to the one about the Pombero, from north-eastern Argentina and Paraguay. He's a short, hairy goblin who looks after the birds in the forest.", pic: "🌳" },
        { who: "valen", es: "Si alguien había lastimado a un pájaro, el Pombero lo confundía con silbidos hasta que se perdía. Pero, si le dejabas miel, se volvía tu amigo.", de: "Wenn jemand einem Vogel wehgetan hatte, verwirrte ihn der Pombero mit Pfiffen, bis er sich verlief. Aber wenn man ihm Honig hinstellte, wurde er dein Freund.", en: "If someone had hurt a bird, the Pombero confused them with whistles until they got lost. But if you left him honey, he became your friend.", pic: "🍯" },
        { who: "alex", es: "Vale, vale… ¿Y ese silbido? ¿Lo habéis oído vosotros también?", de: "Okay, okay … Und was ist das für ein Pfeifen? Habt ihr das auch gehört?", en: "OK, OK… And what's that whistling? Did you hear it too?", pic: "😨" },
        { who: "valen", es: "¡Uy! Y mirá, Álex: al lado de la carpa hay huellas… ¡que van al revés!", de: "Oh! Und schau mal, Álex: Neben dem Zelt sind Fußspuren … und sie gehen verkehrt herum!", en: "Whoa! And look, Álex: next to the tent there are footprints… going backwards!", pic: "⛺" },
        { who: "alex", es: "¡Ay, madre! ¡La Ciguapa y el Pombero juntos! ¡Yo me vuelvo a casa!", de: "Oh je! Die Ciguapa und der Pombero zusammen! Ich gehe nach Hause!", en: "Oh no! The Ciguapa and the Pombero together! I'm going home!", pic: "😱" },
        { who: "coco", es: "¡Jajaja! No cojas lucha, Álex. El silbido era yo… ¡soy un loro! Y las huellas las había hecho Valen esta tarde, con los zapatos al revés.", de: "Hahaha! Mach dir keinen Stress, Álex. Das Pfeifen war ich … ich bin ein Papagei! Und die Spuren hatte Valen heute Nachmittag gemacht, mit verkehrt angezogenen Schuhen.", en: "Hahaha! Don't worry, Álex. The whistling was me… I'm a parrot! And Valen had made the footprints this afternoon, wearing her shoes backwards.", pic: "🦜" },
        { who: "valen", es: "¡Perdón, Álex! Era una broma. Igual, vos dijiste que no le tenías miedo a nada…", de: "Sorry, Álex! Das war ein Scherz. Aber du hast ja gesagt, dass du vor nichts Angst hast …", en: "Sorry, Álex! It was a joke. Anyway, you did say you weren't scared of anything…", pic: "😜" },
        { who: "alex", es: "Vale, me habéis pillado. ¡Pero mañana os cuento yo una leyenda española y os vais a enterar!", de: "Okay, ihr habt mich erwischt. Aber morgen erzähle ich euch eine spanische Legende, und dann werdet ihr was erleben!", en: "OK, you got me. But tomorrow I'll tell you a Spanish legend, and then you'll see!", pic: "😤" },
        { who: "mia", es: "¡Va! Y le dejamos un poquito de miel al Pombero, por si acaso.", de: "Abgemacht! Und wir stellen dem Pombero ein bisschen Honig hin, für alle Fälle.", en: "Deal! And let's leave a little honey for the Pombero, just in case.", pic: "🍯" }
      ],
      questions: [
        { q: "¿Por qué los cazadores nunca encontraban a la Ciguapa?", de: "Warum fanden die Jäger die Ciguapa nie?", en: "Why did the hunters never find the Ciguapa?", opts: ["Porque era invisible.", "Porque tenía los pies al revés y se había ido en la dirección contraria.", "Porque volaba muy alto."], a: 1 },
        { q: "Según el mito maya, ¿de dónde salió el colibrí?", de: "Woraus entstand der Kolibri laut dem Maya-Mythos?", en: "According to the Maya myth, where did the hummingbird come from?", opts: ["De una pluma de loro.", "De una flor roja.", "De una piedrita de jade."], a: 2 },
        { q: "¿Quién había hecho las huellas al lado de la carpa?", de: "Wer hatte die Spuren neben dem Zelt gemacht?", en: "Who had made the footprints next to the tent?", opts: ["Valen, con los zapatos al revés.", "La Ciguapa.", "El Pombero."], a: 0 }
      ],
      phrases: [
        { es: "Cuenta la leyenda que vivía en las montañas.", de: "Die Legende erzählt, dass sie in den Bergen lebte.", en: "Legend has it that she lived in the mountains." },
        { es: "Cuando llegaron, ella ya se había ido.", de: "Als sie ankamen, war sie schon weg.", en: "When they arrived, she had already gone." },
        { es: "Nunca había oído esa historia.", de: "Ich hatte diese Geschichte noch nie gehört.", en: "I had never heard that story." },
        { es: "¡Era solo una broma!", de: "Es war nur ein Scherz!", en: "It was only a joke!" }
      ],
      slang: ["No cojas lucha", "Re", "¡Ándale!", "¡Qué volá!"],
      tips: [
        { es: "El pluscuamperfecto cuenta lo que pasó antes de otro momento del pasado: había + participio. Cuando los cazadores llegaron, la Ciguapa ya se había ido.", de: "Das Plusquamperfekt erzählt, was vor einem anderen Moment in der Vergangenheit geschehen war: había + Partizip. Cuando los cazadores llegaron, la Ciguapa ya se había ido – Als die Jäger ankamen, war die Ciguapa schon weg.", en: "The pluperfect tells what happened before another moment in the past: había + participle. Cuando los cazadores llegaron, la Ciguapa ya se había ido – When the hunters arrived, the Ciguapa had already gone." },
        { es: "Algunos participios son irregulares: hacer → hecho, decir → dicho, ver → visto, volver → vuelto, poner → puesto, escribir → escrito.", de: "Manche Partizipien sind unregelmäßig: hacer → hecho, decir → dicho, ver → visto, volver → vuelto, poner → puesto, escribir → escrito.", en: "Some participles are irregular: hacer → hecho, decir → dicho, ver → visto, volver → vuelto, poner → puesto, escribir → escrito." }
      ],
      note: { es: "La Ciguapa es una leyenda muy famosa en la República Dominicana. En muchas versiones no es mala: es tímida, vive en lo más alto de las montañas y solo quiere que nadie la encuentre.", de: "Die Ciguapa ist eine sehr bekannte Legende aus der Dominikanischen Republik. In vielen Versionen ist sie nicht böse: Sie ist schüchtern, lebt ganz oben in den Bergen und will nur, dass niemand sie findet.", en: "The Ciguapa is a very famous legend in the Dominican Republic. In many versions she isn't bad at all: she's shy, lives high up in the mountains and just wants nobody to find her." }
    },

    /* ---------- 7. El periódico de la isla ---------- */
    {
      id: "b2-periodico", level: "B2", title: "El periódico de la isla",
      de: "Die Inselzeitung", en: "The island newspaper",
      pic: "📰", sticker: "🗞️", color: "sun",
      words: [
        { es: "el periódico", de: "die Zeitung", en: "newspaper", pic: "📰", vary: { ar: "el diario" } },
        { es: "la noticia", de: "die Nachricht / die Meldung", en: "news story", pic: "📢" },
        { es: "el titular", de: "die Schlagzeile", en: "headline", pic: "🔠" },
        { es: "el periodista", de: "der Journalist", en: "journalist", pic: "✍️" },
        { es: "la entrevista", de: "das Interview", en: "interview", pic: "🎤" },
        { es: "el reportaje", de: "die Reportage", en: "report / feature", pic: "🎥" },
        { es: "la portada", de: "die Titelseite", en: "front page", pic: "🗞️" },
        { es: "inaugurar", de: "eröffnen / einweihen", en: "to open / inaugurate", pic: "✂️" },
        { es: "comprobar", de: "überprüfen", en: "to check", pic: "✅" },
        { es: "la noticia falsa", de: "die Falschmeldung", en: "fake news", pic: "🤥", vary: { es: "el bulo" } },
        { es: "el lector", de: "der Leser", en: "reader", pic: "📖" },
        { es: "la fotógrafa", de: "die Fotografin", en: "photographer", pic: "📷" }
      ],
      story: [
        { who: "mia", es: "¡Ya casi está el primer número de nuestro periódico! Se llama «La Gaceta de la Isla».", de: "Die erste Ausgabe unserer Zeitung ist fast fertig! Sie heißt „La Gaceta de la Isla“.", en: "The first issue of our newspaper is almost ready! It's called “La Gaceta de la Isla”.", pic: "📰" },
        { who: "alex", es: "Yo he escrito la noticia de la portada. El titular es: «Se inaugura la nueva biblioteca del puerto».", de: "Ich habe den Artikel für die Titelseite geschrieben. Die Schlagzeile lautet: „Neue Hafenbibliothek eröffnet“.", en: "I've written the front-page story. The headline is: “New harbour library opens”.", pic: "🗞️" },
        { who: "alex", es: "Y dice así: «El sábado se inauguró la biblioteca. Se prestaron más de cien libros en un solo día».", de: "Und er geht so: „Am Samstag wurde die Bibliothek eröffnet. An einem einzigen Tag wurden über hundert Bücher ausgeliehen.“", en: "And it goes like this: “On Saturday the library was opened. More than a hundred books were lent out in a single day.”", pic: "📚" },
        { who: "valen", es: "¡Bárbaro! Yo le hice una entrevista a la señora de las empanadas. Me contó que en la fiesta del pueblo se habían vendido doscientas.", de: "Super! Ich habe die Frau mit den Empanadas interviewt. Sie hat mir erzählt, dass beim Dorffest zweihundert verkauft worden waren.", en: "Great! I interviewed the empanada lady. She told me two hundred had been sold at the village festival.", pic: "🥟" },
        { who: "coco", es: "¡Esperen, esperen! ¡Tengo una exclusiva! Miren esta foto: ¡se vio un dinosaurio en la playa!", de: "Wartet, wartet! Ich habe eine Exklusivmeldung! Schaut euch dieses Foto an: Am Strand wurde ein Dinosaurier gesichtet!", en: "Wait, wait! I've got an exclusive! Look at this photo: a dinosaur was spotted on the beach!", pic: "🦖" },
        { who: "coco", es: "Mi titular será: «Se busca dinosaurio gigante». ¡Vamos a vender miles de periódicos!", de: "Meine Schlagzeile wird lauten: „Riesiger Dinosaurier gesucht“. Wir werden Tausende Zeitungen verkaufen!", en: "My headline will be: “Giant dinosaur wanted”. We're going to sell thousands of papers!", pic: "🔠" },
        { who: "mia", es: "Ay, Coco… la foto está muy borrosa. Un buen periodista siempre comprueba la noticia antes de publicarla.", de: "Ach, Coco … das Foto ist total verschwommen. Ein guter Journalist überprüft eine Nachricht immer, bevor er sie veröffentlicht.", en: "Oh, Coco… the photo is really blurry. A good journalist always checks a story before publishing it.", pic: "✅" },
        { who: "alex", es: "Es verdad. Si publicamos una noticia falsa, los lectores no volverán a confiar en nosotros.", de: "Das stimmt. Wenn wir eine Falschmeldung veröffentlichen, werden die Leser uns nie wieder vertrauen.", en: "That's true. If we publish fake news, our readers will never trust us again.", pic: "🤥" },
        { who: "valen", es: "¡Dale, vamos a la playa a investigar! Yo llevo la cámara: hoy soy la fotógrafa del periódico.", de: "Los, lasst uns am Strand nachforschen! Ich nehme die Kamera mit: Heute bin ich die Fotografin der Zeitung.", en: "Come on, let's go to the beach and investigate! I'll bring the camera: today I'm the paper's photographer.", pic: "📷" },
        { who: "mia", es: "¡Miren, ahí está! Es… un dinosaurio inflable gigante. Se usó ayer en una fiesta de cumpleaños.", de: "Schaut, da ist er! Es ist … ein riesiger aufblasbarer Dinosaurier. Er wurde gestern bei einer Geburtstagsfeier benutzt.", en: "Look, there it is! It's… a giant inflatable dinosaur. It was used yesterday at a birthday party.", pic: "🎈" },
        { who: "coco", es: "¡Diache! Casi publico una noticia falsa en la portada. ¡Qué vergüenza!", de: "Mist! Fast hätte ich eine Falschmeldung auf die Titelseite gebracht. Wie peinlich!", en: "Oh man! I nearly put fake news on the front page. How embarrassing!", pic: "😳" },
        { who: "alex", es: "Tranqui, Coco. Puedes escribir un reportaje divertido sobre lo que ha pasado.", de: "Ganz ruhig, Coco. Du kannst eine lustige Reportage darüber schreiben, was passiert ist.", en: "Chill, Coco. You can write a fun report about what's happened.", pic: "🎥" },
        { who: "coco", es: "¡Tá jevi! Nuevo titular: «Se resuelve el misterio del dinosaurio: era de plástico y estaba lleno de aire».", de: "Cool! Neue Schlagzeile: „Dinosaurier-Rätsel gelöst: Er war aus Plastik und voller Luft“.", en: "Cool! New headline: “Dinosaur mystery solved: it was plastic and full of air”.", pic: "🦖" },
        { who: "mia", es: "¡Me encanta! Y abajo ponemos: «Se buscan voluntarios para devolvérselo a su dueño».", de: "Ich liebe es! Und darunter schreiben wir: „Freiwillige gesucht, um ihn seinem Besitzer zurückzubringen“.", en: "I love it! And underneath we'll put: “Volunteers wanted to return it to its owner”.", pic: "🙋" },
        { who: "valen", es: "Y la foto la saco yo. ¡Qué buen equipo de periodistas somos, che!", de: "Und das Foto mache ich. Was sind wir für ein gutes Journalistenteam!", en: "And I'll take the photo. What a great team of journalists we are!", pic: "📸" }
      ],
      questions: [
        { q: "¿Qué noticia escribió Álex para la portada?", de: "Welche Nachricht hat Álex für die Titelseite geschrieben?", en: "What story did Álex write for the front page?", opts: ["Que se vendieron doscientas empanadas.", "Que se inauguró la nueva biblioteca.", "Que se vio un dinosaurio en la playa."], a: 1 },
        { q: "¿Qué era en realidad el dinosaurio?", de: "Was war der Dinosaurier in Wirklichkeit?", en: "What was the dinosaur really?", opts: ["Un lagarto muy grande.", "Una estatua de la biblioteca.", "Un dinosaurio inflable de una fiesta."], a: 2 },
        { q: "Según Mía, ¿qué hace siempre un buen periodista?", de: "Was macht ein guter Journalist laut Mía immer?", en: "According to Mía, what does a good journalist always do?", opts: ["Comprueba la noticia antes de publicarla.", "Escribe titulares muy largos.", "Vende muchos periódicos."], a: 0 }
      ],
      phrases: [
        { es: "Se inauguró la nueva biblioteca.", de: "Die neue Bibliothek wurde eröffnet.", en: "The new library was opened." },
        { es: "Se buscan voluntarios.", de: "Freiwillige gesucht.", en: "Volunteers wanted." },
        { es: "Hay que comprobar una noticia antes de compartirla.", de: "Man muss eine Nachricht überprüfen, bevor man sie teilt.", en: "You have to check a story before sharing it." },
        { es: "Según el periódico, mañana va a llover.", de: "Laut der Zeitung wird es morgen regnen.", en: "According to the paper, it's going to rain tomorrow." }
      ],
      slang: ["¡De una!", "¡Dale!", "¡Mola!", "¿Mande?"],
      tips: [
        { es: "Pasiva refleja: se + verbo en tercera persona. El verbo concuerda con la cosa: Se vendió una empanada. Se vendieron doscientas empanadas.", de: "Reflexives Passiv: se + Verb in der 3. Person. Das Verb richtet sich nach der Sache: Se vendió una empanada – Eine Empanada wurde verkauft. Se vendieron doscientas empanadas – Zweihundert Empanadas wurden verkauft.", en: "Reflexive passive: se + verb in the third person. The verb agrees with the thing: Se vendió una empanada – One empanada was sold. Se vendieron doscientas empanadas – Two hundred empanadas were sold." },
        { es: "Los titulares son cortos y usan mucho el presente, aunque la noticia sea del pasado: «Se inaugura la biblioteca», «Gana el equipo de la isla».", de: "Schlagzeilen sind kurz und stehen oft im Präsens, auch wenn die Nachricht aus der Vergangenheit ist: „Se inaugura la biblioteca“, „Gana el equipo de la isla“.", en: "Headlines are short and often use the present tense, even if the news is about the past: “Se inaugura la biblioteca”, “Gana el equipo de la isla”." }
      ],
      note: { es: "Se cree que la palabra «gaceta» viene de Venecia: allí, hace casi quinientos años, las hojas de noticias costaban una «gazzetta», una moneda pequeña.", de: "Man nimmt an, dass das Wort „gaceta“ aus Venedig kommt: Dort kosteten Nachrichtenblätter vor fast fünfhundert Jahren eine „gazzetta“, eine kleine Münze.", en: "The word “gaceta” is thought to come from Venice: almost five hundred years ago, news sheets there cost one “gazzetta”, a small coin." }
    },

    /* ---------- 8. Entender lo que sentimos ---------- */
    {
      id: "b2-emociones", level: "B2", title: "Entender lo que sentimos",
      de: "Verstehen, was wir fühlen", en: "Understanding our feelings",
      pic: "💭", sticker: "💞", color: "leaf",
      words: [
        { es: "la frustración", de: "der Frust", en: "frustration", pic: "😤" },
        { es: "callado", de: "still / schweigsam", en: "quiet", pic: "🤐" },
        { es: "la vergüenza", de: "die Scham / die Peinlichkeit", en: "embarrassment", pic: "😳" },
        { es: "el orgullo", de: "der Stolz", en: "pride", pic: "🦚" },
        { es: "molestar", de: "stören / ärgern", en: "to bother", pic: "😠" },
        { es: "extrañar", de: "vermissen", en: "to miss", pic: "🏡", vary: { es: "echar de menos" } },
        { es: "la empatía", de: "die Empathie / das Mitgefühl", en: "empathy", pic: "🫂" },
        { es: "ponerse en el lugar del otro", de: "sich in jemanden hineinversetzen", en: "to put yourself in someone's shoes", pic: "👟" },
        { es: "el alivio", de: "die Erleichterung", en: "relief", pic: "😮‍💨" },
        { es: "herir los sentimientos", de: "jemanden kränken", en: "to hurt someone's feelings", pic: "💔" },
        { es: "pedir perdón", de: "sich entschuldigen", en: "to apologise", pic: "🙏" },
        { es: "desahogarse", de: "sich aussprechen / sich Luft machen", en: "to get it off your chest", pic: "🗯️" }
      ],
      story: [
        { who: "mia", es: "Valen, hoy estás muy callada. ¿Te pasa algo?", de: "Valen, du bist heute so still. Ist was los?", en: "Valen, you're very quiet today. Is something wrong?", pic: "🤔" },
        { who: "valen", es: "Nada… Bueno, sí. Me molestó que Álex se riera de cómo hablo. ¡Y lo hizo delante de toda la clase!", de: "Nichts … Na ja, doch. Es hat mich geärgert, dass Álex darüber gelacht hat, wie ich spreche. Und das vor der ganzen Klasse!", en: "Nothing… Well, yes. It bothered me that Álex laughed at the way I talk. And he did it in front of the whole class!", pic: "😞" },
        { who: "alex", es: "¿Lo dices por lo de «sho me shamo»? ¡Pero si era solo una broma!", de: "Meinst du das mit „sho me shamo“? Aber das war doch nur ein Witz!", en: "You mean the “sho me shamo” thing? But it was only a joke!", pic: "😅" },
        { who: "coco", es: "Álex, aunque para ti fuera una broma, a Valen le dolió. Intenta ponerte en su lugar.", de: "Álex, auch wenn es für dich ein Witz war, hat es Valen wehgetan. Versuch mal, dich in sie hineinzuversetzen.", en: "Álex, even if it was a joke to you, it hurt Valen. Try to put yourself in her shoes.", pic: "👟" },
        { who: "valen", es: "Además, extraño mucho a mi abuela de Buenos Aires. Cuando escucho mi acento, me acuerdo de ella.", de: "Außerdem vermisse ich meine Oma in Buenos Aires sehr. Wenn ich meinen Akzent höre, muss ich an sie denken.", en: "Besides, I really miss my grandma in Buenos Aires. When I hear my accent, it reminds me of her.", pic: "👵🏼" },
        { who: "mia", es: "Te entiendo. Cuando llegué aquí, todos se reían cuando decía «ahorita». ¡Qué gacho! Me daba vergüenza hablar.", de: "Ich verstehe dich. Als ich hier ankam, haben alle gelacht, wenn ich „ahorita“ gesagt habe. Wie gemein! Ich habe mich nicht getraut zu reden.", en: "I understand. When I got here, everyone laughed when I said “ahorita”. How mean! I was too embarrassed to talk.", pic: "😳" },
        { who: "alex", es: "Vaya… No sabía que os sentíais así. Me sabe fatal que te hayas puesto triste por mi culpa.", de: "Oh … Ich wusste nicht, dass es euch so geht. Es tut mir total leid, dass du wegen mir traurig geworden bist.", en: "Oh… I didn't know you felt like that. I feel awful that you got upset because of me.", pic: "😔" },
        { who: "alex", es: "Te pido perdón, Valen. No quería herir tus sentimientos.", de: "Entschuldige bitte, Valen. Ich wollte dich nicht kränken.", en: "I'm sorry, Valen. I didn't mean to hurt your feelings.", pic: "🙏" },
        { who: "valen", es: "Gracias, Álex. Me alegra que me lo digas. ¡Qué alivio! Ya me siento mejor después de desahogarme.", de: "Danke, Álex. Ich freue mich, dass du mir das sagst. Was für eine Erleichterung! Jetzt, wo ich mich ausgesprochen habe, geht es mir schon besser.", en: "Thanks, Álex. I'm glad you're telling me. What a relief! I already feel better now I've got it off my chest.", pic: "😮‍💨" },
        { who: "coco", es: "¿Ven? Eso es la empatía: escuchar y entender al otro. Cuando uno se lo guarda todo, solo acumula frustración.", de: "Seht ihr? Das ist Empathie: zuhören und den anderen verstehen. Wenn man alles in sich hineinfrisst, sammelt man nur Frust an.", en: "See? That's empathy: listening and understanding the other person. When you keep it all bottled up, you just build up frustration.", pic: "🫂" },
        { who: "mia", es: "¿Y si hacemos una videollamada con tu abuela ahorita?", de: "Und wenn wir jetzt gleich einen Videoanruf mit deiner Oma machen?", en: "And what if we video-call your grandma right now?", pic: "📱" },
        { who: "valen", es: "¡Dale! ¡Mi abuela va a estar re contenta!", de: "Au ja! Meine Oma wird sich total freuen!", en: "Yes, let's! My grandma will be super happy!", pic: "📞" },
        { who: "coco", es: "¡Hola, doña Marta! Saludos desde la isla. ¡Su nieta tiene el acento más bonito del mundo!", de: "Hallo, Doña Marta! Grüße von der Insel. Ihre Enkelin hat den schönsten Akzent der Welt!", en: "Hello, Doña Marta! Greetings from the island. Your granddaughter has the loveliest accent in the world!", pic: "🌎" },
        { who: "alex", es: "Y yo estoy orgulloso de tener amigos de tantos países. ¡Cada acento es un tesoro!", de: "Und ich bin stolz, Freunde aus so vielen Ländern zu haben. Jeder Akzent ist ein Schatz!", en: "And I'm proud to have friends from so many countries. Every accent is a treasure!", pic: "💎" },
        { who: "valen", es: "Y si alguna vez vos te sentís mal, Álex, contá conmigo. Yo te hago el aguante.", de: "Und wenn es dir mal schlecht geht, Álex, kannst du auf mich zählen. Ich halte zu dir.", en: "And if you ever feel bad, Álex, count on me. I'll stand by you.", pic: "🤗" }
      ],
      questions: [
        { q: "¿Por qué está molesta Valen?", de: "Warum ist Valen verärgert?", en: "Why is Valen upset?", opts: ["Porque Álex se rio de su forma de hablar.", "Porque perdió un partido.", "Porque Mía no la invitó a su fiesta."], a: 0 },
        { q: "¿Qué consejo le da Coco a Álex?", de: "Welchen Rat gibt Coco Álex?", en: "What advice does Coco give Álex?", opts: ["Que no hable más con Valen.", "Que se ponga en el lugar de Valen.", "Que cuente otra broma."], a: 1 },
        { q: "¿Qué hacen al final?", de: "Was machen sie am Ende?", en: "What do they do at the end?", opts: ["Van todos a la playa.", "Le escriben una carta a la profe.", "Una videollamada con la abuela de Valen."], a: 2 }
      ],
      phrases: [
        { es: "Me molesta que no me escuchen.", de: "Es stört mich, wenn man mir nicht zuhört.", en: "It bothers me when people don't listen to me." },
        { es: "Te entiendo. Yo también me sentí así.", de: "Ich verstehe dich. Mir ging es auch so.", en: "I understand. I felt the same way." },
        { es: "No quería herir tus sentimientos.", de: "Ich wollte dich nicht kränken.", en: "I didn't mean to hurt your feelings." },
        { es: "Me alegra que estés mejor.", de: "Ich freue mich, dass es dir besser geht.", en: "I'm glad you're feeling better." }
      ],
      slang: ["Hacer el aguante", "¡Qué gacho!", "¡Ay, bendito!", "¡Qué pena!"],
      tips: [
        { es: "Cuando algo que hace otra persona nos provoca un sentimiento, usamos subjuntivo: Me molesta que grites. Me alegra que vengas. Me preocupa que llegue tarde.", de: "Wenn uns etwas, das ein anderer tut, ein Gefühl auslöst, benutzen wir den Subjuntivo: Me molesta que grites – Es stört mich, dass du schreist. Me alegra que vengas – Ich freue mich, dass du kommst.", en: "When something another person does makes us feel something, we use the subjunctive: Me molesta que grites – It bothers me that you shout. Me alegra que vengas – I'm glad you're coming." },
        { es: "En pasado, con imperfecto de subjuntivo: Me molestó que se riera de mí. Me encantó que me llamaras.", de: "In der Vergangenheit mit dem Subjuntivo Imperfekt: Me molestó que se riera de mí – Es hat mich geärgert, dass er über mich gelacht hat. Me encantó que me llamaras – Ich fand es toll, dass du mich angerufen hast.", en: "In the past, with the imperfect subjunctive: Me molestó que se riera de mí – It bothered me that he laughed at me. Me encantó que me llamaras – I loved that you called me." }
      ],
      note: { es: "¡Cuidado! «Me da pena» no significa lo mismo en todas partes. En España quiere decir que algo te pone triste. En México y en Colombia, que te da vergüenza.", de: "Vorsicht! „Me da pena“ bedeutet nicht überall dasselbe. In Spanien heißt es, dass dich etwas traurig macht. In Mexiko und Kolumbien, dass es dir peinlich ist.", en: "Careful! “Me da pena” doesn't mean the same thing everywhere. In Spain it means something makes you sad. In Mexico and Colombia, it means you feel embarrassed." }
    },

    /* ---------- 9. Arte y música ---------- */
    {
      id: "b2-arte", level: "B2", title: "Arte y música",
      de: "Kunst und Musik", en: "Art and music",
      pic: "🖼️", sticker: "🪗", color: "sea",
      words: [
        { es: "el cuadro", de: "das Gemälde", en: "painting", pic: "🖼️" },
        { es: "el autorretrato", de: "das Selbstporträt", en: "self-portrait", pic: "🤳" },
        { es: "la pintora", de: "die Malerin", en: "painter", pic: "👩‍🎨" },
        { es: "la obra de arte", de: "das Kunstwerk", en: "work of art", pic: "🖌️" },
        { es: "la mirada", de: "der Blick", en: "gaze / look", pic: "👁️" },
        { es: "los colores vivos", de: "die kräftigen Farben", en: "bright colours", pic: "🌈" },
        { es: "el ritmo", de: "der Rhythmus", en: "rhythm", pic: "🥁" },
        { es: "el acordeón", de: "das Akkordeon", en: "accordion", pic: "🪗" },
        { es: "melancólico", de: "melancholisch / wehmütig", en: "melancholic", pic: "🌧️" },
        { es: "la piel de gallina", de: "die Gänsehaut", en: "goosebumps", pic: "🐔" },
        { es: "el paso de baile", de: "der Tanzschritt", en: "dance step", pic: "💃" },
        { es: "el estilo", de: "der Stil", en: "style", pic: "✨" }
      ],
      story: [
        { who: "mia", es: "Para la semana cultural, yo presento a la pintora Frida Kahlo. Miren este cuadro: es un autorretrato con monos.", de: "Für die Kulturwoche stelle ich die Malerin Frida Kahlo vor. Schaut euch dieses Bild an: Es ist ein Selbstporträt mit Affen.", en: "For culture week, I'm presenting the painter Frida Kahlo. Look at this painting: it's a self-portrait with monkeys.", pic: "🖼️" },
        { who: "mia", es: "Frida pintó muchísimos autorretratos. Decía que se pintaba a sí misma porque pasaba mucho tiempo sola.", de: "Frida hat unglaublich viele Selbstporträts gemalt. Sie sagte, sie male sich selbst, weil sie viel Zeit allein verbringe.", en: "Frida painted loads of self-portraits. She said she painted herself because she spent a lot of time alone.", pic: "🐒" },
        { who: "alex", es: "Me parece una obra de arte impresionante. Los colores son muy vivos, aunque su mirada es bastante seria.", de: "Ich finde, das ist ein beeindruckendes Kunstwerk. Die Farben sind sehr kräftig, obwohl ihr Blick ziemlich ernst ist.", en: "I think it's an impressive work of art. The colours are very bright, although her gaze is quite serious.", pic: "👁️" },
        { who: "valen", es: "Yo traje un tango. Escuchen el bandoneón… ¿no les pone la piel de gallina?", de: "Ich habe einen Tango mitgebracht. Hört euch das Bandoneon an … kriegt ihr da keine Gänsehaut?", en: "I brought a tango. Listen to the bandoneon… doesn't it give you goosebumps?", pic: "🎶" },
        { who: "alex", es: "No es que no me guste, pero me suena un poco triste. Prefiero la música más alegre.", de: "Nicht, dass es mir nicht gefällt, aber es klingt für mich ein bisschen traurig. Ich mag lieber fröhlichere Musik.", en: "It's not that I don't like it, but it sounds a bit sad to me. I prefer happier music.", pic: "🤔" },
        { who: "valen", es: "Bueno, es verdad que muchos tangos son melancólicos. Pero mirá cómo se baila: ¡es pura elegancia!", de: "Na ja, es stimmt, dass viele Tangos melancholisch sind. Aber schau mal, wie man ihn tanzt: pure Eleganz!", en: "Well, it's true that lots of tangos are melancholic. But look how it's danced: it's pure elegance!", pic: "💃" },
        { who: "valen", es: "¿Y sabías que el bandoneón fue inventado en Alemania? ¡Llegó a Buenos Aires en barco!", de: "Und wusstest du, dass das Bandoneon in Deutschland erfunden wurde? Es kam mit dem Schiff nach Buenos Aires!", en: "And did you know the bandoneon was invented in Germany? It came to Buenos Aires by ship!", pic: "🚢" },
        { who: "coco", es: "¡Eso tá jevi! Pero si quieren alegría, les traigo merengue: tambora, güira y acordeón.", de: "Das ist cool! Aber wenn ihr Fröhlichkeit wollt, bringe ich euch Merengue: Tambora, Güira und Akkordeon.", en: "That's cool! But if you want joy, I'll bring you merengue: tambora drum, güira and accordion.", pic: "🪗" },
        { who: "coco", es: "Y para los días de corazón roto tenemos la bachata. ¡Dos ritmos dominicanos que baila el mundo entero!", de: "Und für Tage mit gebrochenem Herzen haben wir die Bachata. Zwei dominikanische Rhythmen, die die ganze Welt tanzt!", en: "And for broken-hearted days we've got bachata. Two Dominican rhythms the whole world dances to!", pic: "🎸" },
        { who: "alex", es: "¡Ahora sí! Venga, Coco, enséñame a bailar merengue.", de: "Jetzt aber! Los, Coco, bring mir bei, Merengue zu tanzen.", en: "Now you're talking! Come on, Coco, teach me to dance merengue.", pic: "🕺" },
        { who: "coco", es: "El primer paso de baile es fácil: un pasito a la derecha, otro a la izquierda y mueves las caderas… ¡Cuidado, Álex!", de: "Der erste Tanzschritt ist leicht: ein kleiner Schritt nach rechts, einer nach links, und du bewegst die Hüften … Vorsicht, Álex!", en: "The first dance step is easy: a little step to the right, one to the left, and you move your hips… Careful, Álex!", pic: "👣" },
        { who: "alex", es: "¡Ay! Me he tropezado con la güira. Bueno, si tuviera que elegir, me quedaría con los cuadros de Frida.", de: "Autsch! Ich bin über die Güira gestolpert. Na ja, wenn ich wählen müsste, würde ich mich für Fridas Bilder entscheiden.", en: "Ouch! I've tripped over the güira. Well, if I had to choose, I'd go for Frida's paintings.", pic: "😵" },
        { who: "mia", es: "¡Jajaja! Pues en mi opinión no bailaste nada mal. ¡Estuvo bien padre!", de: "Hahaha! Also meiner Meinung nach hast du gar nicht schlecht getanzt. Das war echt cool!", en: "Hahaha! Well, in my opinion you didn't dance badly at all. It was really cool!", pic: "😂" },
        { who: "valen", es: "¿Vieron? Cada estilo cuenta algo de su país: el tango, la nostalgia; el merengue, la fiesta; y Frida, los colores de México.", de: "Habt ihr gesehen? Jeder Stil erzählt etwas über sein Land: der Tango von Sehnsucht, der Merengue vom Feiern und Frida von den Farben Mexikos.", en: "See? Each style tells you something about its country: tango, nostalgia; merengue, partying; and Frida, the colours of Mexico.", pic: "🌎" },
        { who: "coco", es: "¡Azúcar! Y ahora, todos a bailar, aunque sea un chin.", de: "Zucker! Und jetzt tanzen alle, und wenn es nur ein bisschen ist.", en: "Sugar! And now everyone dance, even if it's just a little.", pic: "🎉" }
      ],
      questions: [
        { q: "¿Por qué pintaba Frida tantos autorretratos?", de: "Warum malte Frida so viele Selbstporträts?", en: "Why did Frida paint so many self-portraits?", opts: ["Porque no tenía dinero para pagar modelos.", "Porque su profesor se lo pedía.", "Porque pasaba mucho tiempo sola."], a: 2 },
        { q: "¿Dónde fue inventado el bandoneón?", de: "Wo wurde das Bandoneon erfunden?", en: "Where was the bandoneon invented?", opts: ["En Argentina.", "En Alemania.", "En la República Dominicana."], a: 1 },
        { q: "¿Qué le pasa a Álex cuando baila merengue?", de: "Was passiert Álex beim Merengue-Tanzen?", en: "What happens to Álex when he dances merengue?", opts: ["Se tropieza con la güira.", "Gana un concurso de baile.", "Se cae al mar."], a: 0 }
      ],
      phrases: [
        { es: "No es que no me guste, pero prefiero otro estilo.", de: "Nicht, dass es mir nicht gefällt, aber ich mag lieber einen anderen Stil.", en: "It's not that I don't like it, but I prefer another style." },
        { es: "Este cuadro me transmite mucha alegría.", de: "Dieses Bild strahlt für mich viel Freude aus.", en: "This painting fills me with joy." },
        { es: "Si tuviera que elegir, elegiría el tango.", de: "Wenn ich wählen müsste, würde ich den Tango nehmen.", en: "If I had to choose, I'd pick tango." },
        { es: "Esta canción me pone la piel de gallina.", de: "Bei diesem Lied bekomme ich Gänsehaut.", en: "This song gives me goosebumps." }
      ],
      slang: ["¡Azúcar!", "¡Tá jevi!", "¡Qué copado!", "¡Qué chulo!"],
      tips: [
        { es: "Para opinar con matices: Me parece que… Lo que más me gusta es… Después de «no es que» va subjuntivo: No es que no me guste, es que prefiero el rock.", de: "So gibst du eine differenzierte Meinung: Me parece que … (Ich finde, dass …), Lo que más me gusta es … (Am besten gefällt mir …). Nach „no es que“ kommt der Subjuntivo: No es que no me guste … – Nicht, dass es mir nicht gefällt …", en: "To give a nuanced opinion: Me parece que… (I think that…), Lo que más me gusta es… (What I like most is…). After “no es que” you use the subjunctive: No es que no me guste… – It's not that I don't like it…" },
        { es: "«Aunque sea» significa «aunque solo sea»: Baila, aunque sea un poquito. Llámame, aunque sea cinco minutos.", de: "„Aunque sea“ heißt „und wenn es nur … ist“: Baila, aunque sea un poquito – Tanz, und wenn es nur ein bisschen ist. Llámame, aunque sea cinco minutos – Ruf mich an, und sei es nur für fünf Minuten.", en: "“Aunque sea” means “even if it's only”: Baila, aunque sea un poquito – Dance, even if it's just a little. Llámame, aunque sea cinco minutos – Call me, even if it's just for five minutes." }
      ],
      note: { es: "La UNESCO declaró el tango Patrimonio Cultural Inmaterial de la Humanidad en 2009, el merengue en 2016 y la bachata en 2019. El tango nació a orillas del Río de la Plata, en Buenos Aires y Montevideo.", de: "Die UNESCO hat den Tango 2009 zum immateriellen Kulturerbe der Menschheit erklärt, den Merengue 2016 und die Bachata 2019. Der Tango entstand am Río de la Plata, in Buenos Aires und Montevideo.", en: "UNESCO declared tango part of the Intangible Cultural Heritage of Humanity in 2009, merengue in 2016 and bachata in 2019. Tango was born on the banks of the Río de la Plata, in Buenos Aires and Montevideo." }
    },

    /* ---------- 10. La máquina del tiempo ---------- */
    {
      id: "b2-tiempo", level: "B2", title: "La máquina del tiempo",
      de: "Die Zeitmaschine", en: "The time machine",
      pic: "⏳", sticker: "🕰️", color: "hib",
      words: [
        { es: "la máquina del tiempo", de: "die Zeitmaschine", en: "time machine", pic: "⏳" },
        { es: "viajar en el tiempo", de: "durch die Zeit reisen", en: "to travel in time", pic: "🌀" },
        { es: "el pasado", de: "die Vergangenheit", en: "the past", pic: "📜" },
        { es: "el futuro", de: "die Zukunft", en: "the future", pic: "🔮" },
        { es: "la época", de: "die Epoche / die Zeit", en: "era / period", pic: "🏰" },
        { es: "el siglo", de: "das Jahrhundert", en: "century", pic: "💯" },
        { es: "el reloj", de: "die Uhr", en: "clock / watch", pic: "🕰️" },
        { es: "el despertador", de: "der Wecker", en: "alarm clock", pic: "⏰" },
        { es: "la civilización", de: "die Zivilisation / die Hochkultur", en: "civilisation", pic: "🛕" },
        { es: "la independencia", de: "die Unabhängigkeit", en: "independence", pic: "🎆" },
        { es: "el baúl", de: "die Truhe", en: "trunk / chest", pic: "🧳" },
        { es: "la hamaca", de: "die Hängematte", en: "hammock", pic: "🌴" }
      ],
      story: [
        { who: "coco", es: "¡Miren lo que encontré en el baúl de mi abuelo: una máquina del tiempo!", de: "Schaut mal, was ich in der Truhe meines Opas gefunden habe: eine Zeitmaschine!", en: "Look what I found in my grandpa's trunk: a time machine!", pic: "🧳" },
        { who: "mia", es: "Coco, eso es un reloj viejo con muchos botones. Pero… ¿y si funcionara?", de: "Coco, das ist eine alte Uhr mit vielen Knöpfen. Aber … und wenn sie funktionieren würde?", en: "Coco, that's an old clock with lots of buttons. But… what if it worked?", pic: "🕰️" },
        { who: "alex", es: "Si hubiera tenido esta máquina ayer, habría vuelto al pasado para hacer los deberes de mates.", de: "Wenn ich diese Maschine gestern gehabt hätte, wäre ich in die Vergangenheit zurückgereist, um die Matheaufgaben zu machen.", en: "If I'd had this machine yesterday, I'd have gone back in time to do my maths homework.", pic: "📐" },
        { who: "valen", es: "¿No los hiciste? ¡Ay, Álex! Si los hubieras hecho, ahora no estarías tan nervioso.", de: "Hast du sie nicht gemacht? Ach, Álex! Wenn du sie gemacht hättest, wärst du jetzt nicht so nervös.", en: "You didn't do it? Oh, Álex! If you'd done it, you wouldn't be so nervous now.", pic: "😬" },
        { who: "mia", es: "Yo viajaría a la época de los mayas, a Chichén Itzá. ¡Me habría encantado ver cómo esa civilización estudiaba las estrellas!", de: "Ich würde in die Zeit der Maya reisen, nach Chichén Itzá. Ich hätte so gern gesehen, wie diese Hochkultur die Sterne erforscht hat!", en: "I'd travel to the time of the Maya, to Chichén Itzá. I'd have loved to see how that civilisation studied the stars!", pic: "🌟" },
        { who: "valen", es: "Yo habría viajado al siglo diecinueve, al 9 de julio de 1816, para ver cómo se declaraba la independencia argentina en Tucumán.", de: "Ich wäre ins neunzehnte Jahrhundert gereist, zum 9. Juli 1816, um zu sehen, wie in Tucumán die Unabhängigkeit Argentiniens erklärt wurde.", en: "I'd have travelled to the nineteenth century, to 9 July 1816, to see Argentina's independence being declared in Tucumán.", pic: "🇦🇷" },
        { who: "coco", es: "¡Y yo habría visitado mi isla hace mil años! Habría conocido a los taínos y habría dormido en una hamaca.", de: "Und ich hätte meine Insel vor tausend Jahren besucht! Ich hätte die Taínos kennengelernt und in einer Hängematte geschlafen.", en: "And I'd have visited my island a thousand years ago! I'd have met the Taíno people and slept in a hammock.", pic: "🏝️" },
        { who: "coco", es: "¿Sabían que «hamaca» y «huracán» son palabras taínas? ¡Todavía las usamos!", de: "Wusstet ihr, dass „hamaca“ (Hängematte) und „huracán“ (Hurrikan) Wörter der Taínos sind? Wir benutzen sie heute noch!", en: "Did you know that “hamaca” (hammock) and “huracán” (hurricane) are Taíno words? We still use them!", pic: "🌀" },
        { who: "alex", es: "¡Qué pasada! Venga, probemos la máquina. ¿Qué botón pulsamos?", de: "Wie krass! Los, probieren wir die Maschine aus. Welchen Knopf drücken wir?", en: "How amazing! Come on, let's try the machine. Which button do we press?", pic: "🔘" },
        { who: "mia", es: "Este botón rojo tiene un dinosaurio dibujado. ¡Ándale, Álex, apriétalo!", de: "Auf diesem roten Knopf ist ein Dinosaurier gemalt. Los, Álex, drück ihn!", en: "This red button has a dinosaur drawn on it. Go on, Álex, press it!", pic: "🔴" },
        { who: "alex", es: "Tres, dos, uno… ¡Riiing! ¡Ay, qué susto! ¡Es un despertador!", de: "Drei, zwei, eins … Rrrring! Oh, was für ein Schreck! Das ist ein Wecker!", en: "Three, two, one… Riiing! Ah, what a fright! It's an alarm clock!", pic: "⏰" },
        { who: "valen", es: "¡Jajaja! Si de verdad hubiéramos viajado en el tiempo, ahora estaríamos rodeados de dinosaurios.", de: "Hahaha! Wenn wir wirklich durch die Zeit gereist wären, wären wir jetzt von Dinosauriern umgeben.", en: "Hahaha! If we'd really travelled in time, we'd be surrounded by dinosaurs right now.", pic: "🦕" },
        { who: "coco", es: "Bueno, el pasado no se puede cambiar. Pero el presente y el futuro, sí.", de: "Na ja, die Vergangenheit kann man nicht ändern. Aber die Gegenwart und die Zukunft schon.", en: "Well, you can't change the past. But you can change the present and the future.", pic: "💡" },
        { who: "mia", es: "Exacto. Álex, si empiezas ahorita, terminas la tarea antes de la cena. ¡Te ayudamos!", de: "Genau. Álex, wenn du jetzt gleich anfängst, bist du vor dem Abendessen mit den Hausaufgaben fertig. Wir helfen dir!", en: "Exactly. Álex, if you start right now, you'll finish your homework before dinner. We'll help you!", pic: "✏️" },
        { who: "alex", es: "¡Vale! Así mañana nadie tendrá que decirme: «Si hubieras empezado antes, habrías terminado antes».", de: "Okay! Dann muss mir morgen keiner sagen: „Wenn du früher angefangen hättest, wärst du früher fertig gewesen.“", en: "OK! That way, tomorrow nobody will have to tell me: “If you'd started earlier, you'd have finished earlier.”", pic: "😄" }
      ],
      questions: [
        { q: "¿Qué habría hecho Álex si hubiera tenido la máquina ayer?", de: "Was hätte Álex gemacht, wenn er die Maschine gestern gehabt hätte?", en: "What would Álex have done if he'd had the machine yesterday?", opts: ["Habría visto dinosaurios.", "Habría vuelto al pasado para hacer los deberes.", "Habría dormido en una hamaca."], a: 1 },
        { q: "¿Qué palabras taínas menciona Coco?", de: "Welche Taíno-Wörter nennt Coco?", en: "Which Taíno words does Coco mention?", opts: ["Guagua y guineo.", "Chévere y jevi.", "Hamaca y huracán."], a: 2 },
        { q: "¿Qué era en realidad la máquina del tiempo?", de: "Was war die Zeitmaschine in Wirklichkeit?", en: "What was the time machine really?", opts: ["Un despertador viejo.", "Una computadora.", "Un juguete de Mía."], a: 0 }
      ],
      phrases: [
        { es: "Si hubiera estudiado, habría aprobado.", de: "Wenn ich gelernt hätte, hätte ich bestanden.", en: "If I had studied, I would have passed." },
        { es: "Me habría encantado conocer a los mayas.", de: "Ich hätte die Maya so gern kennengelernt.", en: "I'd have loved to meet the Maya." },
        { es: "Ojalá hubiera empezado antes.", de: "Hätte ich doch früher angefangen!", en: "I wish I'd started earlier." },
        { es: "El pasado no se puede cambiar.", de: "Die Vergangenheit kann man nicht ändern.", en: "You can't change the past." }
      ],
      slang: ["¡Qué pasada!", "¡Ándale!", "¡Wepa!", "Che"],
      tips: [
        { es: "Para imaginar un pasado distinto: si + hubiera + participio, habría + participio. Si hubiera estudiado, habría aprobado el examen.", de: "Um dir eine andere Vergangenheit vorzustellen: si + hubiera + Partizip, habría + Partizip. Si hubiera estudiado, habría aprobado el examen – Wenn ich gelernt hätte, hätte ich die Prüfung bestanden.", en: "To imagine a different past: si + hubiera + participle, habría + participle. Si hubiera estudiado, habría aprobado el examen – If I had studied, I would have passed the exam." },
        { es: "Si el resultado se nota ahora, mezcla los tiempos: Si hubieras hecho los deberes ayer, ahora estarías tranquilo.", de: "Wenn sich die Folge jetzt zeigt, mischst du die Zeiten: Si hubieras hecho los deberes ayer, ahora estarías tranquilo – Wenn du gestern die Hausaufgaben gemacht hättest, wärst du jetzt entspannt.", en: "If the result shows now, mix the tenses: Si hubieras hecho los deberes ayer, ahora estarías tranquilo – If you'd done your homework yesterday, you'd be relaxed now." }
      ],
      note: { es: "Muchas palabras del español vienen del taíno, la lengua de los primeros habitantes del Caribe: hamaca, huracán, canoa, barbacoa… ¡Y algunas llegaron hasta el alemán: Hängematte, Hurrikan, Kanu!", de: "Viele spanische Wörter kommen aus dem Taíno, der Sprache der ersten Bewohner der Karibik: hamaca, huracán, canoa, barbacoa … Und manche haben es bis ins Deutsche geschafft: Hängematte, Hurrikan, Kanu!", en: "Many Spanish words come from Taíno, the language of the Caribbean's first inhabitants: hamaca, huracán, canoa, barbacoa… And some even made it into English: hammock, hurricane, canoe, barbecue!" }
    }
  );

  /* ---------- Gran Desafío B2 ---------- */
  ES.exams.B2 = {
    title: "Gran Desafío B2", de: "Große Herausforderung B2", en: "Big Challenge B2",
    escuchar: [
      { who: "alex", text: "Si hubiera sabido que el examen de inglés era hoy, habría estudiado mucho más. ¡Pensaba que era el jueves! Menos mal que la profe ha dicho que podemos repetirlo la semana que viene.", q: "¿Por qué no estudió más Álex?", de: "Warum hat Álex nicht mehr gelernt?", en: "Why didn't Álex study more?", opts: ["Porque estaba enfermo.", "Porque creía que el examen era el jueves.", "Porque no le gusta el inglés."], a: 1 },
      { who: "valen", text: "Che, ¿te conté lo del sábado? Íbamos a ir al zoológico, pero cuando llegamos ya habían cerrado por la tormenta. Al final fuimos al cine y, la verdad, la pasamos bárbaro.", q: "¿Por qué no entraron al zoológico?", de: "Warum sind sie nicht in den Zoo gegangen?", en: "Why didn't they go into the zoo?", opts: ["Porque no tenían entradas.", "Porque Valen estaba enferma.", "Porque ya habían cerrado por la tormenta."], a: 2 },
      { who: "mia", text: "Mi abuela me contó que, cuando era niña, en su pueblo no había internet. Me dijo que le escribía cartas a su prima de Monterrey y que tardaban dos semanas en llegar. ¡Qué paciencia!", q: "¿Qué le contó la abuela a Mía?", de: "Was hat die Oma Mía erzählt?", en: "What did her grandma tell Mía?", opts: ["Que sus cartas tardaban dos semanas en llegar.", "Que vivía en Monterrey con su prima.", "Que de niña usaba mucho internet."], a: 0 },
      { who: "narr", text: "Atención, por favor. Se informa a los pasajeros de que el ferri a Samaná saldrá con media hora de retraso debido al mal tiempo. Les rogamos que permanezcan en la sala de espera.", q: "¿Qué pasa con el ferri?", de: "Was ist mit der Fähre los?", en: "What's happening with the ferry?", opts: ["Saldrá media hora más tarde.", "Está cancelado.", "Saldrá antes de lo previsto."], a: 0 },
      { who: "coco", text: "Oye, si yo fuera tú, no dejaría la tarea para el domingo por la noche. La semana pasada lo hice y terminé a las once, muerto de sueño. Aunque te cueste, empieza el viernes y así el domingo lo tienes libre.", q: "¿Qué consejo da Coco?", de: "Welchen Rat gibt Coco?", en: "What advice does Coco give?", opts: ["Hacer la tarea el domingo por la noche.", "No hacer la tarea.", "Empezar la tarea el viernes."], a: 2 },
      { who: "narr", text: "Aviso de la radio escolar. Se buscan voluntarios para limpiar la playa el próximo sábado. A todos los participantes se les darán guantes y bolsas; por lo tanto, solo tienen que traer agua y protector solar.", q: "¿Qué tienen que llevar los voluntarios?", de: "Was müssen die Freiwilligen mitbringen?", en: "What do the volunteers have to bring?", opts: ["Guantes y bolsas.", "Agua y protector solar.", "Comida para todos."], a: 1 }
    ],
    leer: [
      { text: "¡Hola, Martina! Te escribo desde Hamburgo. Ya hace un mes que llegamos y, aunque al principio todo me parecía rarísimo, ahora empiezo a acostumbrarme. Lo que más me costó fue el idioma: el primer día no entendí casi nada de lo que dijo la maestra. Sin embargo, mis compañeros fueron muy amables, y una chica, Lena, se ofreció a ayudarme con la tarea. A cambio, yo le enseño español. ¿Sabés qué es lo que más extraño? Las medialunas de la panadería de la esquina y las tardes en la plaza con vos. Acá oscurece muy temprano en invierno y hace un frío tremendo, pero la ciudad es preciosa y tiene un puerto enorme lleno de barcos. Mi mamá dice que, si todo sigue bien, en verano podrías venir a visitarnos. ¡Ojalá puedas! Escribime pronto. Un abrazo enorme, Sofi.", q: "¿Qué hace Sofi a cambio de la ayuda de Lena?", de: "Was macht Sofi als Gegenleistung für Lenas Hilfe?", en: "What does Sofi do in return for Lena's help?", opts: ["Le compra medialunas.", "Le enseña español.", "La lleva a ver el puerto."], a: 1 },
      { text: "Alumnos de primaria construyen un robot que limpia la playa. Un grupo de alumnos de sexto curso de una escuela de la costa norte de la isla ha construido un pequeño robot que recoge plástico de la arena. La idea surgió el año pasado, después de que los niños participaran en una jornada de limpieza. «Recogimos tantas botellas que pensamos que tenía que haber una forma más rápida», explicó una de las alumnas. El robot fue diseñado con piezas recicladas, funciona con energía solar y puede trabajar durante tres horas seguidas. Según la profesora de ciencias, el proyecto se presentará el mes próximo en la feria científica nacional. Aunque todavía es solo un prototipo, varias organizaciones ya se han interesado por él. Los alumnos, sin embargo, insisten en que su robot no es la solución definitiva: «Lo mejor sería que nadie tirara basura en la playa», dicen.", q: "¿Qué opinan los alumnos sobre su robot?", de: "Was denken die Schüler über ihren Roboter?", en: "What do the pupils think about their robot?", opts: ["Que resolverá el problema para siempre.", "Que es demasiado caro.", "Que lo mejor sería que nadie tirara basura en la playa."], a: 2 },
      { text: "Gabriela Mistral, la maestra que ganó el Nobel. Lucila Godoy Alcayaga nació en 1889 en Vicuña, un pueblo del valle de Elqui, en Chile. Muy joven empezó a trabajar como maestra en escuelas rurales y, al mismo tiempo, a escribir poemas, que firmaba con el nombre de Gabriela Mistral. Sus versos hablan de los niños, de la naturaleza y de la ternura, y muchos fueron escritos pensando en sus alumnos. En 1922 fue invitada a México por José Vasconcelos, el responsable de la educación del país, para ayudar a reformar las escuelas. En 1945 recibió el Premio Nobel de Literatura, el primero que se concedió a un escritor de América Latina. Hoy su cara aparece en los billetes de cinco mil pesos chilenos, y en Vicuña se puede visitar un museo dedicado a ella.", q: "¿Para qué fue invitada Gabriela Mistral a México?", de: "Wozu wurde Gabriela Mistral nach Mexiko eingeladen?", en: "Why was Gabriela Mistral invited to Mexico?", opts: ["Para ayudar a reformar las escuelas.", "Para recibir el Premio Nobel.", "Para escribir un libro sobre los niños mexicanos."], a: 0 },
      { text: "Foro juvenil: ¿móviles en el colegio? Pablo, de Valencia: «En mi opinión, deberían prohibirse durante las clases. Por un lado, distraen muchísimo; por otro, en el recreo ya nadie habla, todos miran la pantalla. Desde que en mi colegio no se pueden usar, jugamos mucho más al fútbol». Ximena, de Puebla: «No estoy de acuerdo con prohibirlos del todo. Es verdad que a veces distraen; sin embargo, también sirven para buscar información o grabar videos para los proyectos. Lo importante es que los maestros pongan reglas claras». Tomás, de Rosario: «Yo estoy en el medio. No creo que el celular sea malo, pero sí creo que nos cuesta mucho dejarlo. Propongo que lo guardemos en una caja al empezar la clase y que solo lo usemos cuando el profe lo diga».", q: "¿Qué propone Tomás?", de: "Was schlägt Tomás vor?", en: "What does Tomás suggest?", opts: ["Prohibir los celulares en todo el colegio.", "Usar el celular solo en el recreo.", "Guardar los celulares en una caja durante la clase."], a: 2 },
      { text: "El Cadejo blanco. En muchos pueblos de Centroamérica y del sur de México, los abuelos cuentan la leyenda del Cadejo. Dicen que es un perro grande, de pelo blanco y ojos brillantes, que aparece de noche en los caminos. Cuenta la historia que una vez un campesino volvía muy tarde a su casa. Se había quedado ayudando a un vecino con la cosecha y no se había dado cuenta de que ya era de noche. El camino estaba oscuro y el hombre tenía miedo de perderse. De pronto, vio a su lado un enorme perro blanco que caminaba en silencio. El perro lo acompañó hasta la puerta de su casa y, cuando el campesino se dio la vuelta para darle las gracias, ya había desaparecido. Desde entonces, la gente dice que el Cadejo blanco protege a quienes caminan solos por la noche.", q: "¿Por qué volvía tan tarde el campesino?", de: "Warum kam der Bauer so spät nach Hause?", en: "Why was the farmer coming home so late?", opts: ["Porque se había perdido en el bosque.", "Porque se había quedado ayudando a un vecino.", "Porque estaba buscando a su perro."], a: 1 },
      { text: "Concurso escolar de cómic: «Mi isla en el año 2050». ¿Te gusta dibujar? ¿Cómo te imaginas tu isla dentro de unas décadas? ¡Cuéntanoslo en un cómic! Pueden participar todos los alumnos de entre diez y catorce años. El cómic deberá tener entre cuatro y ocho viñetas y estar dibujado a mano: no se aceptarán trabajos hechos con computadora. Se puede participar solo o en pareja, pero cada alumno podrá presentar un único cómic. Los trabajos se entregarán en la biblioteca antes del 15 de marzo. Un jurado formado por profesores y por una ilustradora de la isla elegirá a los ganadores. El primer premio será un lote de libros y material de dibujo, y los tres mejores cómics se publicarán en el periódico de la escuela. Importante: si el cómic tiene textos, tendrán que estar escritos en español.", q: "Según el cartel, ¿qué es obligatorio?", de: "Was ist laut dem Plakat Pflicht?", en: "According to the poster, what is compulsory?", opts: ["Que el cómic esté dibujado a mano.", "Participar en pareja.", "Presentar por lo menos dos cómics."], a: 0 }
    ],
    escribir: [
      {
        task: "La dirección de tu colegio quiere quitar el recreo de la tarde para tener más clases. Escribe un artículo de opinión para el periódico escolar, de 100 a 130 palabras. Explica las ventajas y las desventajas, da tu opinión con conectores como «por un lado», «sin embargo» o «por lo tanto» y propón una solución.",
        de: "Die Schulleitung will die Nachmittagspause streichen, um mehr Unterricht zu haben. Schreib einen Meinungsartikel für die Schülerzeitung (100 bis 130 Wörter). Erkläre Vor- und Nachteile, sag deine Meinung mit Verbindungswörtern wie „por un lado“, „sin embargo“ oder „por lo tanto“ und schlag eine Lösung vor.",
        en: "Your school wants to cut the afternoon break to have more lessons. Write an opinion article for the school newspaper (100–130 words). Explain the advantages and disadvantages, give your opinion using connectors like “por un lado”, “sin embargo” or “por lo tanto”, and suggest a solution.",
        model: "¿Más clases o más recreo? La dirección quiere quitar el recreo de la tarde para tener más horas de clase. Por un lado, entiendo que tengamos mucho que aprender y que el tiempo sea limitado. Por otro lado, creo que el recreo es necesario: después de tantas horas sentados, nos cuesta concentrarnos, y movernos un poco nos ayuda a volver a clase con energía. Además, en el recreo hacemos amigos y aprendemos a resolver problemas juntos. Por lo tanto, no estoy de acuerdo con la propuesta. Sin embargo, me gustaría proponer una solución: que el recreo dure diez minutos menos y que esos minutos se dediquen a la lectura. Así, todos saldríamos ganando."
      },
      {
        task: "Cerca de tu casa hay un parque muy descuidado. Escribe un correo formal al alcalde o a la alcaldesa de tu ciudad, de 100 a 130 palabras. Preséntate, describe el problema, propón una solución y explica qué pasaría si se hiciera. Trátalo de «usted».",
        de: "In der Nähe deines Zuhauses gibt es einen sehr verwahrlosten Park. Schreib eine formelle E-Mail an den Bürgermeister oder die Bürgermeisterin deiner Stadt (100 bis 130 Wörter). Stell dich vor, beschreib das Problem, schlag eine Lösung vor und erkläre, was passieren würde, wenn man sie umsetzt. Sprich die Person mit „usted“ an.",
        en: "There's a very run-down park near your home. Write a formal email to your town's mayor (100–130 words). Introduce yourself, describe the problem, suggest a solution and explain what would happen if it were carried out. Address them as “usted”.",
        model: "Estimada señora alcaldesa: Me llamo Jonas, tengo doce años y vivo cerca del parque del río. Le escribo porque el parque está muy descuidado: los columpios están rotos, hay basura por todas partes y por la noche no hay luz. Por eso, muchas familias ya no van. Me gustaría proponerle una solución. Si se arreglaran los columpios y se pusieran más papeleras y farolas, los niños podríamos volver a jugar allí. Además, mis compañeros de clase y yo estaríamos dispuestos a organizar una jornada de limpieza un sábado al mes. Estoy seguro de que, si todos colaboráramos, el parque volvería a ser el lugar más alegre del barrio. Le agradezco de antemano su atención. Atentamente, Jonas."
      }
    ],
    hablar: [
      {
        task: "Tu clase quiere hacer algo por el medio ambiente y hay tres propuestas: prohibir las botellas de plástico en el colegio, crear un huerto en el patio o ir al colegio en bici o caminando un día a la semana. Habla durante dos o tres minutos: ¿qué ventajas y desventajas tiene cada propuesta? ¿Cuál elegirías y por qué?",
        de: "Deine Klasse will etwas für die Umwelt tun, und es gibt drei Vorschläge: Plastikflaschen in der Schule verbieten, einen Schulgarten auf dem Hof anlegen oder einmal pro Woche mit dem Rad oder zu Fuß zur Schule kommen. Sprich zwei bis drei Minuten: Welche Vor- und Nachteile hat jeder Vorschlag? Welchen würdest du wählen und warum?",
        en: "Your class wants to do something for the environment and there are three proposals: ban plastic bottles at school, create a vegetable garden in the playground, or come to school by bike or on foot one day a week. Speak for two or three minutes: what are the advantages and disadvantages of each proposal? Which would you choose and why?",
        model: "A mí me parecen interesantes las tres propuestas, pero cada una tiene ventajas y desventajas. Prohibir las botellas de plástico sería muy útil; sin embargo, no creo que funcione si no hay fuentes de agua en el colegio. El huerto me encanta, porque aprenderíamos de dónde viene la comida, aunque en verano, cuando no hay clases, alguien tendría que regarlo. Ir en bici un día a la semana es divertido, pero no es seguro para los que viven lejos. Si tuviera que elegir, elegiría el huerto, porque todos pueden participar y, además, es una forma bonita de aprender ciencias."
      },
      {
        task: "Imagina esta escena: en el recreo, un niño está sentado solo en un banco mientras los demás juegan al fútbol. Descríbela, imagina qué le ha pasado y cómo se siente, y explica qué harías tú si estuvieras allí.",
        de: "Stell dir diese Szene vor: In der Pause sitzt ein Junge allein auf einer Bank, während die anderen Fußball spielen. Beschreib die Szene, überleg dir, was ihm passiert ist und wie er sich fühlt, und erkläre, was du tun würdest, wenn du dort wärst.",
        en: "Imagine this scene: at break time, a boy is sitting alone on a bench while the others play football. Describe it, imagine what has happened to him and how he feels, and explain what you would do if you were there.",
        model: "En la escena veo a un niño que está sentado solo en un banco mientras los demás juegan al fútbol. Me imagino que es nuevo en el colegio y que todavía no conoce a nadie. A lo mejor le gustaría jugar, pero le da vergüenza preguntar. También puede ser que se haya peleado con algún amigo. Seguramente se siente triste y un poco solo. Si yo estuviera allí, me acercaría a él, le preguntaría cómo se llama y lo invitaría a jugar con nosotros. Si yo hubiera sido el niño nuevo, me habría encantado que alguien hiciera lo mismo por mí."
      }
    ]
  };
})();
