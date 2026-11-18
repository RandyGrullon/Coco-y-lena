# Especificación del contenido de Coco y Lena

Cada archivo de `content/` añade un nivel a uno de los dos cursos. Se carga **después** de `es-data.js` y `de-data.js`, en el navegador, como script clásico. No uses `import`, `export` ni `require`. Escribe JavaScript válido con comillas dobles, y no metas comillas dobles sin escapar dentro de los textos: usa «comillas latinas» o „deutsche Anführungszeichen“.

Valida siempre tu archivo con:

```bash
cd C:/Users/randy/code/aprende-idiomas && node content/check.js es-a2   # o de-b1, etc.
```

El validador tiene que terminar con `OK` y 0 errores. Corrige todo lo que marque.

Todas las voces se generan después con TTS a partir de estos textos, así que escribe como se habla: sin abreviaturas raras, sin emojis dentro de los textos que se leen (los emojis van solo en los campos `pic`/`sticker`) y sin paréntesis explicativos dentro de frases que se van a escuchar.

---

## A. Isla Ñ — español para un niño de 9 años (archivos `content/es-*.js`)

El niño es alemanohablante y principiante. La ayuda va en alemán (`de`) y en inglés (`en`). Lee `es-data.js` para ver el formato real, los personajes (`ES.cast`), las regiones (`ES.regions`) y las expresiones que ya existen (`ES.slang`).

Plantilla del archivo:

```js
/* Isla Ñ — nivel A2 */
(function () {
  const ES = window.ES;
  ES.slang.push(/* expresiones nuevas, opcional */);
  ES.units.push(/* islas */);
  ES.exams.A2 = { /* Gran Desafío */ };
})();
```

### Isla (unidad)

```js
{
  id: "a2-mercado",            // prefijo del nivel + tema, minúsculas, sin acentos, único
  level: "A2",                 // A1 | A2 | B1 | B2
  title: "El mercado",         // español, corto
  de: "Auf dem Markt", en: "At the market",
  pic: "🛒", sticker: "🍉",     // un emoji cada uno; el sticker es el premio al terminar la isla
  color: "sun",                // sea | hib | sun | leaf
  words: [                     // 10–12 palabras o expresiones cortas del nivel
    { es: "la sandía", de: "die Wassermelone", en: "watermelon", pic: "🍉", vary: { ar: "la sandía" } }
  ],
  story: [                     // A2: 9–12 líneas · B1: 11–14 · B2: 12–16
    { who: "mia", es: "…", de: "…", en: "…", pic: "🛒" }
  ],
  questions: [                 // exactamente 3, sobre el cuento
    { q: "¿Qué compra Mía?", de: "…", en: "…", opts: ["…", "…", "…"], a: 0 }
  ],
  phrases: [                   // exactamente 4 frases útiles del nivel
    { es: "¿Cuánto cuesta?", de: "Wie viel kostet das?", en: "How much is it?" }
  ],
  slang: ["¡Qué chévere!", "…", "…", "…"],   // exactamente 4, deben existir en ES.slang (las viejas o las que añadas)
  tips: [                      // 1–2 notas de gramática para niños: cortas, concretas, con ejemplo
    { es: "Para hablar de ayer usamos: fui, comí, jugué.", de: "…", en: "…" }
  ],
  note: { es: "…", de: "…", en: "…" }        // opcional: curiosidad cultural o regional
}
```

Reglas:
- `who` solo puede ser `coco` (loro dominicano), `mia` (México), `alex` (España) o `valen` (Argentina). Cada uno habla como su país: Álex usa «vale», «guay», «vosotros»; Valen usa voseo («vos sos», «mirá», «tenés»); Mía usa «¡qué padre!», «ahorita»; Coco usa «¡tá jevi!», «un chin», «guagua». Que se note sin exagerar.
- `pic` de las palabras: un emoji que represente la palabra, **sin repetir dentro de la misma isla**. Los sustantivos van con artículo («la sandía»).
- `vary` es opcional: cómo se dice en otros países, con claves de `ES.regions` (es, mx, do, ar, co, ve, cl, pr, cu). Úsalo cuando la variación sea real y conocida.
- `questions[].a` es el índice (0–2) de la respuesta correcta. Varía la posición correcta entre preguntas.
- El cuento usa sobre todo las palabras de la isla y la gramática del nivel. Tiene que ser divertido, con un pequeño problema y una resolución. Apto para niños: nada de miedo fuerte, violencia, marcas comerciales ni datos personales.
- Expresiones nuevas en `ES.slang`: `{ es, r, de, en, ex }`, con `r` como clave de región. Deben ser aptas para niños, reales y conocidas en ese país. Su `es` no puede repetir uno existente.
- Gramática por nivel, siempre dentro de los cuentos:
  - A1: presente, ser/estar, tener, gustar, artículos y plural, hay.
  - A2: pretérito indefinido (fui, comí), pretérito imperfecto (era, jugaba), ir a + infinitivo, comparativos, imperativo afirmativo, estar + gerundio, pronombres de objeto (lo, la, le).
  - B1: futuro simple, condicional, presente de subjuntivo (quiero que, ojalá, para que, cuando + futuro), pretérito perfecto, imperativo negativo, se impersonal, relativos (que, donde).
  - B2: imperfecto de subjuntivo, oraciones con si + imperfecto de subjuntivo + condicional, pluscuamperfecto, estilo indirecto, voz pasiva, conectores (aunque, sin embargo, por lo tanto, en cambio), condicional compuesto.
- La dificultad sube con el nivel, pero siempre con un tono para niños de 9 a 12 años.

### Gran Desafío (examen del nivel)

```js
ES.exams.A2 = {
  title: "Gran Desafío A2", de: "Große Herausforderung A2", en: "Big Challenge A2",
  escuchar: [ { who: "coco", text: "…", q: "…", de: "…", en: "…", opts: ["…","…","…"], a: 1 } ],  // exactamente 6
  leer:     [ { text: "…", q: "…", de: "…", en: "…", opts: ["…","…","…"], a: 2 } ],              // exactamente 6
  escribir: [ { task: "…", de: "…", en: "…", model: "…" } ],                                     // exactamente 2
  hablar:   [ { task: "…", de: "…", en: "…", model: "…" } ]                                      // exactamente 2
}
```

- `escuchar.who`: coco | mia | alex | valen | narr (narradora). Cada `text` tiene 2–5 frases.
- `leer.text`: A1 25–45 palabras · A2 40–70 · B1 80–120 · B2 120–180.
- `escribir`/`hablar`: tareas como las del DELE escolar del nivel, adaptadas a un niño. `task` en español sencillo; `de`/`en`, la consigna traducida; `model`, una respuesta modelo del nivel.
- Inspírate en el formato del DELE para escolares (A1, A2/B1) y, para B2, en tareas de B2 adaptadas a temas infantiles.

---

## B. Werkstatt Ü — alemán para un hispanohablante adulto (archivos `content/de-*.js`)

El alumno es dominicano. Terminó el A1 en el curso de la embajada y quiere llegar a B2 (Goethe-Zertifikat). Las explicaciones van en español latinoamericano. Lee `de-data.js` para ver el formato real y todo lo que ya existe (vocabulario A1, temas de gramática `v2, trennbar, modal, perfekt, akk, dat, poss, imperativ, praet, dativverben, neben, wechsel, komparativ`, diálogos y examen A1). **No repitas** palabras ni temas que ya estén.

Plantilla del archivo:

```js
/* Werkstatt Ü — nivel B1 */
(function () {
  const DE = window.DE;
  Object.assign(DE.themes, {
    "b1-arbeit": { name: "Trabajo y solicitudes", de: "Arbeit & Bewerbung", level: "B1" }
  });
  DE.vocab.push(
    ["b1-arbeit", "die", "Bewerbung", "-en", "la solicitud de empleo", "Ich schicke meine Bewerbung per E-Mail."]
  );
  DE.grammar.push({ /* temas */ });
  DE.dialogs.push({ /* diálogos */ });
  DE.texts.push({ /* lecturas */ });
  DE.course.push({ lvl: "B1", items: [ ["b1-passiv", "Pasiva", ["b1-passiv"]] ] });
  DE.exams.B1 = { /* examen */ };
})();
```

### Vocabulario: `[tema, artículo, palabra, plural o Perfekt, español, ejemplo]`

- Entre 230 y 260 filas por nivel, repartidas en 10–11 temas del nivel más un tema de **Redemittel** (`"b1-redemittel"`, 25–35 frases hechas útiles: opinar, discutir, escribir correos formales…).
- Claves de tema: prefijo del nivel en minúsculas y nombre corto sin acentos (`a2-wohnen`, `b2-wissenschaft`).
- Sustantivos: artículo `der|die|das`; plural en código corto: `-e`, `-en`, `-n`, `-s`, `-er`, `¨-e`, `¨-er`, `¨` (solo umlaut), `-` (no cambia), `–` (sin plural), `pl` (solo plural, artículo `die`) o la forma completa (`Firmen`).
- Verbos: artículo `""` y en el 4.º campo el Perfekt con auxiliar (`hat sich beworben`, `ist umgezogen`).
- Adjetivos, adverbios, Redemittel y conectores: artículo `""` y 4.º campo `""`.
- Ejemplo: una frase natural del nivel, siempre con la palabra.
- Traducción: español latinoamericano natural. Marca falsos amigos con «(¡no …!)» cuando ayude.

### Gramática (exactamente 12 temas por nivel)

```js
{
  id: "b1-passiv", level: "B1", title: "La voz pasiva", de: "Passiv",
  rule: "Explicación clara en español, 2–4 frases, con la estructura.",
  trap: "El error típico del hispanohablante y cómo evitarlo.",
  ex: ["Ejemplo 1 en alemán.", "Ejemplo 2.", "Ejemplo 3."],
  items: [ /* 9–10 ejercicios */ ]
}
```

Tipos de ejercicio:
- `{ t: "mc", q: "Das Haus ___ 1990 gebaut.", o: ["wurde", "wird", "ist"], a: 0, why: "por qué, en español" }`. `a` es el índice de la correcta en `o`; varía su posición. `q` puede llevar `___` o ser una consigna («Elige la frase correcta:»).
- `{ t: "type", q: "Der Brief ___ gestern ___. (schreiben)", a: ["wurde geschrieben"], why: "…" }`. Con varios huecos, la respuesta lleva una palabra por hueco, en orden, separadas por un espacio, y el número de palabras de `a[0]` tiene que ser igual al número de `___`. Con un solo hueco, la respuesta puede tener varias palabras. Incluye variantes aceptables en `a`. El infinitivo o la pista van entre paréntesis al final.
- `{ t: "order", w: ["Obwohl", "es", "regnet,", "gehen", "wir", "spazieren"], es: "Aunque llueve, vamos a pasear." }`. `w` son los trozos en el orden correcto (pueden ser grupos de palabras), con la puntuación pegada a su trozo.
- Mezcla los tres tipos, con al menos 3 `type` por tema.

Temas orientativos:
- A2: Adjektivdeklination, reflexive Verben, Verben mit Präpositionen (+ worauf/darauf), Relativsätze (Nominativ/Akkusativ), indirekte Fragen (ob, W-Wort), Konjunktiv II de cortesía (würde, könnte, hätte gern), Präteritum de los modales, Genitiv, deshalb/trotzdem/sonst, zu + Infinitiv, Superlativ, Passiv Präsens.
- B1: Präteritum narrativo (regulares e irregulares), Plusquamperfekt, Passiv (Präteritum, Perfekt, con modal), Relativsätze con Dativ y preposición (wo, was), Konjunktiv II pasado (hätte/wäre + Partizip), um…zu / damit / statt…zu / ohne…zu, obwohl/trotzdem, nachdem/bevor/während/seitdem, Genitiv-Präpositionen (wegen, trotz, während), conectores dobles (sowohl…als auch, weder…noch, entweder…oder, je…desto), n-Deklination, lassen, Futur I.
- B2: Konjunktiv I e indirekte Rede, Passiversatzformen (sein + zu, -bar, sich lassen), Partizipialattribute, Nominalisierung/Verbalisierung, Konnektoren (indem, sodass, falls, sofern, anstatt dass, ohne dass), subjektive Modalverben (soll, muss, dürfte, will), Futur II, Funktionsverbgefüge, Präpositionen con Genitiv (aufgrund, angesichts, infolge, mithilfe), Zustandspassiv, Konditionalsätze ohne «wenn», Relativsätze con wer/wen/wem.

### Diálogos (exactamente 8 por nivel)

```js
{
  id: "b1-bewerbung", level: "B1", title: "La entrevista de trabajo", de: "Das Vorstellungsgespräch",
  who: { P: ["Frau Becker (Personalchefin)", "f"], C: ["Carlos (Bewerber)", "m"] },   // 2–3 personas, con su género
  lines: [ ["P", "Guten Tag, Herr Pérez. Nehmen Sie bitte Platz.", "Buenos días, señor Pérez. Siéntese, por favor."] ],  // 10–14 líneas
  q: [ ["Frage auf Deutsch?", ["richtig", "falsch 1", "falsch 2"], 0] ],          // exactamente 3; el índice correcto varía
  tip: "Opcional: una nota cultural en español."
}
```

Situaciones reales del nivel: vivienda, trabajo, médico, oficinas públicas, vida con una familia alemana, viajes, debates, el trabajo… Los nombres alemanes son inventados.

### Lecturas (A2: 4 · B1: 5 · B2: 5)

```js
{
  id: "b1-ehrenamt", level: "B1", title: "El voluntariado", de: "Ehrenamt in Deutschland",
  paras: [ ["Párrafo en alemán.", "Traducción al español."] ],   // 3–5 párrafos
  q: [ ["Frage?", ["…", "…", "…"], 1] ]                          // exactamente 4
}
```

Longitud total: A2 150–200 palabras · B1 250–320 · B2 350–450. Que sean textos interesantes y auténticos en tono: artículo, blog, correo, reportaje.

### Lista del curso

`DE.course.push({ lvl: "B1", items: [[id, "nombre en español", [ids de gramática]], …] })`, con 10–14 elementos que cubran el programa del nivel.

### Examen del nivel (formato Goethe del nivel, versión corta)

```js
DE.exams.B1 = {
  name: "Goethe-Zertifikat B1",
  pass: "Se aprueba cada módulo con el 60 %.",
  parts: {
    hoeren:    "Descripción en español del Hören real: partes, minutos, cuántas veces se oye.",
    lesen:     "…",
    schreiben: "…",
    sprechen:  "…"
  },
  hoeren: [ { teil: 1, n: 2, text: "Frau: … Mann: …", q: "…", o: ["…","…","…"], a: 0 } ],   // 8 ítems
  lesen:  [ { teil: 1, text: "…", q: "…", o: ["Richtig","Falsch"], a: 1 } ],                 // 8 ítems
  schreiben: [ { teil: 1, task: "Consigna en alemán", p: ["punto 1", "punto 2", "punto 3"], words: 80, model: "Texto modelo." } ],  // 2–3 tareas
  sprechen:  [ { teil: 1, task: "Consigna en alemán", hints: ["…", "…"], model: "Respuesta modelo." } ]                           // 2–3 tareas
}
```

- `n` es cuántas veces se oye el texto en el examen real de esa parte.
- En `text` de Hören, marca a quién habla con `Frau:` y `Mann:` (para elegir la voz). Un anuncio o un monólogo va sin marcas.
- `words`: palabras objetivo de la tarea real (A2: 20–40 · B1: 40–80 · B2: 100–150).
- Sigue el formato oficial del Goethe-Zertifikat de ese nivel lo más fielmente que sepas.
