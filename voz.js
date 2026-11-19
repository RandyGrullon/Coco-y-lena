/* Voz de Coco y Lena: micrófono, permisos, reconocimiento de voz, consejos de pronunciación,
   la «Escalera de voz» (niño) y el «Sprechstudio» (adulto): niveles que solo se superan hablando.
   Fuera de Claude usa el reconocimiento del navegador (Apple en iPad/iPhone, Google en Android/Chrome).
   Si no hay reconocimiento, graba la voz para escucharla y compararla con la voz nativa. */
$("#css-voz") && ($("#css-voz").textContent = `
.vz{max-width:760px;margin:0 auto;display:grid;gap:16px}
.vz-card{background:var(--surface);border:2px solid var(--line);border-radius:26px;padding:20px;display:grid;gap:14px;box-shadow:var(--shadow)}
.vz h1{font:800 clamp(26px,5vw,34px)/1.1 var(--f-kid)}
body[data-world="werk"] .vz h1,body[data-world="werk"] .vz .vz-target{font-family:var(--f-de)}
.vz-target{font:800 clamp(24px,6vw,36px)/1.25 var(--f-kid);text-align:center}
.vz-target.hidden-t{filter:blur(9px);user-select:none}
.vz-help{text-align:center;color:var(--ink-2);font-weight:700}
.vz-pic{font-size:72px;text-align:center;line-height:1}
.vz-mic{width:118px;height:118px;border-radius:50%;border:0;background:var(--hib);color:#fff;justify-self:center;display:grid;place-items:center;box-shadow:0 6px 0 #A82652;position:relative}
.vz-mic svg{width:46px;height:46px}
.vz-mic.on{animation:vzpulse 1.1s ease-in-out infinite;background:#E2324F}
@keyframes vzpulse{0%{box-shadow:0 6px 0 #A82652,0 0 0 0 rgba(240,79,126,.55)}70%{box-shadow:0 6px 0 #A82652,0 0 0 22px rgba(240,79,126,0)}100%{box-shadow:0 6px 0 #A82652,0 0 0 0 rgba(240,79,126,0)}}
.vz-mic.rec{background:#C0362C}
.vz-meter{height:10px;border-radius:99px;background:var(--surface-2);overflow:hidden;width:min(320px,100%);justify-self:center}
.vz-meter i{display:block;height:100%;width:0;background:var(--leaf);transition:width .08s}
.vz-heard{min-height:30px;text-align:center;font:700 18px/1.4 var(--f-body);color:var(--ink-2)}
.vz-words{display:flex;flex-wrap:wrap;gap:6px;justify-content:center}
.vz-words span{padding:5px 10px;border-radius:10px;font:800 18px var(--f-body)}
.vz-words .ok{background:color-mix(in srgb,var(--ok) 16%,transparent);color:var(--ok)}
.vz-words .no{background:color-mix(in srgb,var(--bad) 14%,transparent);color:var(--bad);text-decoration:underline wavy}
.vz-stars{font-size:38px;text-align:center;letter-spacing:4px}
.tipbox{background:var(--grape-2);border-radius:18px;padding:12px 14px;display:grid;gap:4px}
.tipbox b{font:800 15px var(--f-body)}
.tipbox .ex{font-style:italic;color:var(--ink-2)}
.side.left > .tipbox{grid-column:1/-1}
.warn{display:flex;gap:12px;align-items:flex-start;background:var(--sun-2);border:2px solid #F5D58A;border-radius:18px;padding:12px 14px}
.warn.bad{background:var(--hib-2);border-color:color-mix(in srgb,var(--hib) 45%,transparent)}
.warn.info{background:var(--sea-2);border-color:color-mix(in srgb,var(--sea) 40%,transparent)}
.warn .i{font-size:24px;line-height:1.2}
.warn p{font-size:15px;line-height:1.45}
.warn ol{margin:6px 0 0;padding-left:20px;font-size:14.5px;line-height:1.5}
.ladder{display:grid;gap:14px}
.lad-lv{background:var(--surface);border:2px solid var(--line);border-radius:24px;padding:14px;display:grid;gap:10px}
.lad-lv h2{font:800 21px var(--f-kid)}
body[data-world="werk"] .lad-lv h2{font-family:var(--f-de)}
.lad-steps{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:8px}
.lad-step{border:2px solid var(--line);background:var(--surface-2);border-radius:18px;padding:10px 6px;text-decoration:none;display:grid;justify-items:center;gap:4px;text-align:center;min-height:104px}
.lad-step .e{font-size:28px}
.lad-step b{font:800 13px/1.15 var(--f-body)}
.lad-step small{font-size:11.5px;color:var(--ink-2)}
.lad-step.done{border-color:var(--ok);background:color-mix(in srgb,var(--ok) 10%,var(--surface))}
.lad-step.locked{opacity:.45;pointer-events:none}
.lad-step.next{border-color:var(--hib);box-shadow:0 0 0 3px color-mix(in srgb,var(--hib) 25%,transparent)}
.dl-line{display:flex;gap:10px;align-items:flex-start}
.dl-line .av{width:40px;height:40px;border-radius:50%;display:grid;place-items:center;flex:none;background:var(--surface-2);font-size:22px}
.dl-line .bb{background:var(--surface-2);border-radius:18px;padding:10px 14px;flex:1;min-width:0}
.dl-line.mine .bb{background:color-mix(in srgb,var(--hib) 12%,var(--surface));border:2px solid color-mix(in srgb,var(--hib) 40%,transparent)}
.dl-line.cur .bb{box-shadow:0 0 0 3px color-mix(in srgb,var(--sun) 55%,transparent)}
@media (max-width:560px){.lad-steps{grid-template-columns:minmax(0,1fr);gap:6px}.lad-step{grid-template-columns:34px minmax(0,1fr) auto;grid-template-rows:auto auto;justify-items:start;align-items:center;text-align:left;min-height:0;padding:9px 12px;column-gap:10px;row-gap:0}.lad-step .e{font-size:24px;grid-row:1/3}.lad-step b{font-size:15px}.lad-step small{grid-column:2}.lad-step small+small{grid-column:3;grid-row:1/3;font-weight:800}.vz-mic{width:104px;height:104px}.vz-card{padding:16px;border-radius:22px}}
`);

window.MIC = (() => {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const secure = window.isSecureContext !== false;
  const canASR = !!SR && secure && !CAP.dict;
  const canRec = !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder) && secure;
  const ua = navigator.userAgent;
  const isIOS = /iphone|ipad|ipod/i.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const isAndroid = /android/i.test(ua);
  const st = { perm: "unknown", asrBroken: false };
  try { st.perm = localStorage.getItem("nyu-mic") || "unknown"; } catch (e) {}
  const remember = v => { st.perm = v; try { localStorage.setItem("nyu-mic", v); } catch (e) {} };
  if (navigator.permissions && navigator.permissions.query) {
    navigator.permissions.query({ name: "microphone" }).then(p => { if (p.state !== "prompt") remember(p.state); p.onchange = () => remember(p.state); }).catch(() => {});
  }
  const back = () => { try { if (navigator.audioSession) navigator.audioSession.type = "playback"; } catch (e) {} };
  const ready = () => CAP.dict || canASR || canRec;

  /* Pide permiso de verdad (diálogo del sistema). Debe llamarse desde un toque. */
  async function request() {
    if (CAP.dict) { remember("granted"); return true; }
    if (!canRec && !canASR) { remember("unavailable"); return false; }
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) { remember("granted"); return true; }
    try {
      try { if (navigator.audioSession) navigator.audioSession.type = "play-and-record"; } catch (e) {}
      const s = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true } });
      s.getTracks().forEach(t => t.stop()); back(); remember("granted"); return true;
    } catch (e) {
      back();
      const n = e && e.name;
      remember(n === "NotAllowedError" || n === "SecurityError" ? "denied" : n === "NotFoundError" || n === "OverconstrainedError" ? "nomic" : "error");
      return false;
    }
  }

  /* Reconocimiento de voz. onEnd(texto, error, alternativas). Devuelve la función para parar. */
  function recognize(lang, { onText = () => {}, onEnd = () => {}, long = false } = {}) {
    if (CAP.dict) {
      return listen(lang.slice(0, 2), (t) => onText(t), (t, reason) => onEnd(t, reason && reason !== "stopped" && reason !== "viewer_stopped" ? reason : null, [t]));
    }
    if (!canASR || st.asrBroken) return null;
    stopSpeech();
    const r = new SR();
    r.lang = lang; r.interimResults = true; r.continuous = !!long; r.maxAlternatives = 4;
    let fin = "", alts = [], ended = false, timer = 0, silence = 0;
    const done = err => {
      if (ended) return; ended = true; clearTimeout(timer); clearTimeout(silence); back();
      if (err === "not-allowed" || err === "service-not-allowed") { if (err === "service-not-allowed") st.asrBroken = true; else remember("denied"); }
      onEnd(fin.trim(), err, alts.length ? alts : [fin.trim()]);
    };
    r.onresult = e => {
      let interim = "";
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const res = e.results[i];
        if (res.isFinal) { fin += (fin ? " " : "") + res[0].transcript.trim(); alts = [...res].map(x => x.transcript.trim()); }
        else interim += res[0].transcript;
      }
      onText((fin + " " + interim).trim());
      if (long) { clearTimeout(silence); silence = setTimeout(() => { try { r.stop(); } catch (er) {} }, 3500); }
    };
    r.onerror = e => done(e.error === "no-speech" || e.error === "aborted" ? null : e.error);
    r.onend = () => done(null);
    try { r.start(); remember("granted"); } catch (e) { done("start"); return null; }
    timer = setTimeout(() => { try { r.stop(); } catch (e) {} }, long ? 75000 : 9000);
    return () => { try { r.stop(); } catch (e) {} };
  }

  /* Grabar la propia voz (respaldo cuando no hay reconocimiento). */
  async function record(onLevel, maxMs = 9000) {
    if (!canRec) return null;
    try { if (navigator.audioSession) navigator.audioSession.type = "play-and-record"; } catch (e) {}
    let stream;
    try { stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true } }); remember("granted"); }
    catch (e) { back(); remember(e && e.name === "NotAllowedError" ? "denied" : "error"); return null; }
    const chunks = [], mr = new MediaRecorder(stream);
    let raf = 0, an = null, ctx = AUD.ensure();
    try { ctx && ctx.resume(); } catch (e) {}
    try { const src = ctx.createMediaStreamSource(stream); an = ctx.createAnalyser(); an.fftSize = 512; src.connect(an); } catch (e) {}
    const buf = new Uint8Array(256);
    const tick = () => { if (an) { an.getByteTimeDomainData(buf); let m = 0; for (const v of buf) m = Math.max(m, Math.abs(v - 128)); onLevel && onLevel(Math.min(1, m / 60)); } raf = requestAnimationFrame(tick); };
    tick();
    const result = new Promise(res => {
      mr.ondataavailable = e => { if (e.data && e.data.size) chunks.push(e.data); };
      mr.onstop = () => { cancelAnimationFrame(raf); stream.getTracks().forEach(t => t.stop()); back(); res(chunks.length ? URL.createObjectURL(new Blob(chunks, { type: mr.mimeType || "audio/mp4" })) : null); };
    });
    mr.start();
    const timer = setTimeout(() => { if (mr.state !== "inactive") mr.stop(); }, maxMs);
    return { stop: () => { clearTimeout(timer); if (mr.state !== "inactive") mr.stop(); }, result };
  }

  /* Instrucciones para volver a activar el micrófono, según el dispositivo. */
  function fixSteps(kid) {
    const de = kid && S.settings.help !== "en", en = kid && S.settings.help === "en";
    if (isIOS) return de ? ["Tippe oben in der Adressleiste auf „aA“ → „Website-Einstellungen“ → Mikrofon → „Erlauben“.", "In der installierten App: iPad-Einstellungen → Safari → Mikrofon → „Erlauben“.", "Für die Spracherkennung: Einstellungen → Allgemein → Tastatur → „Diktieren“ einschalten."]
      : en ? ["Tap “aA” in the address bar → “Website Settings” → Microphone → “Allow”.", "In the installed app: Settings → Safari → Microphone → “Allow”.", "For speech recognition: Settings → General → Keyboard → turn on “Dictation”."]
      : ["Toca «aA» en la barra de direcciones → «Ajustes del sitio web» → Micrófono → «Permitir».", "Si usas la app instalada: Ajustes del iPhone/iPad → Safari → Micrófono → «Permitir».", "Para que reconozca la voz: Ajustes → General → Teclado → activa «Dictado»."];
    if (isAndroid) return de ? ["Tippe auf das Schloss neben der Adresse → „Berechtigungen“ → Mikrofon → „Zulassen“.", "Oder: Android-Einstellungen → Apps → Chrome → Berechtigungen → Mikrofon."]
      : en ? ["Tap the lock next to the address → “Permissions” → Microphone → “Allow”.", "Or: Android Settings → Apps → Chrome → Permissions → Microphone."]
      : ["Toca el candado junto a la dirección → «Permisos» → Micrófono → «Permitir».", "O bien: Ajustes de Android → Aplicaciones → Chrome → Permisos → Micrófono."];
    return de ? ["Klicke auf das Schloss in der Adressleiste → Mikrofon → „Zulassen“, dann lade die Seite neu."] : en ? ["Click the lock in the address bar → Microphone → “Allow”, then reload."] : ["Haz clic en el candado de la barra de direcciones → Micrófono → «Permitir» y recarga la página."];
  }
  return { canASR: () => (CAP.dict || canASR) && !st.asrBroken, canRec, ready, request, recognize, record, fixSteps, st, isIOS };
})();

window.Voz = (() => {
  const LV = ["A1", "A2", "B1", "B2"];
  const H = () => (S.settings.help === "en" ? "en" : "de");
  const hp = o => (o && (o[H()] || o.de)) || "";
  const NT = () => (S.settings.accent === "es" ? "k-es" : "k-lat");
  const asrLang = lang => (lang === "de" ? "de-DE" : S.settings.accent === "es" ? "es-ES" : "es-MX");
  const NUM = {
    es: ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez", "once", "doce", "trece", "catorce", "quince", "dieciseis", "diecisiete", "dieciocho", "diecinueve", "veinte"],
    de: ["null", "eins", "zwei", "drei", "vier", "funf", "sechs", "sieben", "acht", "neun", "zehn", "elf", "zwolf", "dreizehn", "vierzehn", "funfzehn", "sechzehn", "siebzehn", "achtzehn", "neunzehn", "zwanzig"]
  };
  let numLang = "es";
  const nk = s => deUml(deacc(norm(s))).replace(/\b(\d{1,2})\b/g, (m, d) => NUM[numLang][+d] || m);

  /* ---------------- puntuación: palabra por palabra ---------------- */
  function score(target, heard) {
    const tw = String(target).replace(/[«»"„“]/g, "").split(/\s+/).filter(Boolean), T = tw.map(nk), Hh = nk(heard).split(" ").filter(Boolean);
    if (!Hh.length) return { r: 0, marks: tw.map(w => ({ w, ok: false })), missed: tw };
    const dp = Array.from({ length: T.length + 1 }, () => new Array(Hh.length + 1).fill(0));
    const same = (a, b) => a === b || (a.length >= 7 && lev(a, b) <= 1);
    for (let i = T.length - 1; i >= 0; i--) for (let j = Hh.length - 1; j >= 0; j--) dp[i][j] = same(T[i], Hh[j]) ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    const okSet = new Set(); let i = 0, j = 0;
    while (i < T.length && j < Hh.length) { if (same(T[i], Hh[j])) { okSet.add(i); i++; j++; } else if (dp[i + 1][j] >= dp[i][j + 1]) i++; else j++; }
    const real = T.filter(Boolean).length || 1;
    let r = okSet.size / real;
    if (T.length === 1) r = Math.max(r, Math.max(0, sim(target, heard) - .5) * 2);
    const marks = tw.map((w, k) => ({ w, ok: okSet.has(k) || !T[k] }));
    return { r, marks, missed: marks.filter(m => !m.ok).map(m => m.w) };
  }
  const best = (target, alts) => alts.map(a => ({ a, s: score(target, a) })).sort((x, y) => y.s.r - x.s.r)[0] || { a: "", s: score(target, "") };
  const starsOf = r => (r >= .85 ? 3 : r >= .65 ? 2 : r >= .4 ? 1 : 0);

  /* ---------------- consejos de pronunciación ---------------- */
  const TIPS = {
    es: [
      { re: /rr|^r|\sr/, de: ["Das „rr“ (und r am Wortanfang) wird gerollt: Die Zungenspitze vibriert wie ein kleiner Motor.", "perro, rojo, ratón"], en: ["Roll the “rr” (and r at the start of a word): the tip of your tongue buzzes like a little motor.", "perro, rojo, ratón"] },
      { re: /[aeiouáéíóú]r[aeiouáéíóú]/, de: ["Das einfache r zwischen Vokalen ist ganz kurz: Die Zunge tippt einmal oben an.", "pero, cara, loro"], en: ["A single r between vowels is very short: the tongue taps once.", "pero, cara, loro"] },
      { re: /j|g[ei]/, de: ["Das spanische „j“ (und g vor e/i) klingt wie das deutsche „ch“ in „Bach“.", "jugar, gente, jirafa"], en: ["Spanish “j” (and g before e/i) sounds like a strong h, from the throat.", "jugar, gente, jirafa"] },
      { re: /ñ/, de: ["Das „ñ“ klingt wie „nj“ – wie in „Champagner“.", "niño, mañana, España"], en: ["“ñ” sounds like “ny” in “canyon”.", "niño, mañana, España"] },
      { re: /ll|y/, de: ["„ll“ und „y“ klingen meist wie das deutsche „j“ in „ja“.", "llama, yo, pollo"], en: ["“ll” and “y” usually sound like the “y” in “yes”.", "llama, yo, pollo"] },
      { re: /(^|\s)h|h[aeiou]/, de: ["Das „h“ ist stumm: Man spricht es gar nicht.", "hola = „ola“, helado, hermano"], en: ["The “h” is silent: you don't say it.", "hola = “ola”, helado, hermano"] },
      { re: /z|c[ei]/, de: ["„z“ und „ce/ci“: in Spanien wie englisches „th“, in Lateinamerika wie ein „s“.", "zapato, cielo, cinco"], en: ["“z” and “ce/ci”: like “th” in Spain, like “s” in Latin America.", "zapato, cielo, cinco"] },
      { re: /v|b/, de: ["„v“ und „b“ klingen gleich, wie ein weiches deutsches „b“ – nie wie „f“!", "vaca, burro, nueve"], en: ["“v” and “b” sound the same, like a soft “b”.", "vaca, burro, nueve"] },
      { re: /qu|gu[ei]/, de: ["Bei „que/qui“ und „gue/gui“ hört man das „u“ nicht.", "queso, guitarra, pequeño"], en: ["In “que/qui” and “gue/gui” the “u” is silent.", "queso, guitarra, pequeño"] },
      { re: /[áéíóú]/, de: ["Der Akzent zeigt die betonte Silbe: Diese Silbe sagst du etwas stärker.", "ca-FÉ, ár-bol, ra-TÓN"], en: ["The accent mark shows the stressed syllable: say it a little stronger.", "ca-FÉ, ár-bol, ra-TÓN"] },
      { re: /[aeiou]{2}/, de: ["Spanische Vokale sind kurz und klar. Zwei Vokale zusammen sagst du schnell hintereinander.", "bueno, ciudad, aire"], en: ["Spanish vowels are short and clear. Two vowels together are said quickly one after the other.", "bueno, ciudad, aire"] }
    ],
    de: [
      { re: /(^|\s)(der|die|das|den|dem|des)(\s|$)/, es: "No te comas el artículo: «der», «die» o «das» es parte de la palabra. Apréndelos siempre juntos.", ex: "der Tisch, die Lampe, das Bett" },
      { re: /ü/, es: "La ü: di «i» y, sin mover la lengua, redondea los labios como para «u».", ex: "über, müde, Tür" },
      { re: /ö/, es: "La ö: di «e» y redondea los labios como para «o».", ex: "schön, hören, Öl" },
      { re: /ä/, es: "La ä suena como una «e» abierta, como en «perro».", ex: "Männer, spät, Käse" },
      { re: /sch/, es: "«sch» es como la «sh» inglesa, con los labios hacia adelante.", ex: "Schule, schnell, Tisch" },
      { re: /(^|\s)(sp|st)/, es: "Al principio de palabra, «sp» y «st» suenan «schp» y «scht».", ex: "Sport, Stadt, sprechen" },
      { re: /[ieäöü]ch|lch|nch|rch/, es: "«ch» después de e, i, ä, ö, ü o de una consonante es un soplido suave, como un gato que bufa.", ex: "ich, nicht, Milch" },
      { re: /[aou]ch/, es: "«ch» después de a, o, u se pronuncia en la garganta, como la «j» española.", ex: "Buch, acht, noch" },
      { re: /ei/, es: "«ei» se lee «ai».", ex: "mein, Zeit, eins" },
      { re: /ie/, es: "«ie» es una «i» larga.", ex: "Liebe, sie, vier" },
      { re: /eu|äu/, es: "«eu» y «äu» se leen «oi».", ex: "neu, heute, Häuser" },
      { re: /z/, es: "La z alemana suena «ts».", ex: "Zeit, zehn, Pizza" },
      { re: /w/, es: "La w alemana es una «v» de verdad, con los dientes sobre el labio de abajo.", ex: "Wasser, wir, Woche" },
      { re: /(^|\s)v/, es: "La v alemana casi siempre suena «f».", ex: "Vater, viel, vier" },
      { re: /(^|\s)h/, es: "La h alemana se pronuncia: es un soplo, como empañar un espejo.", ex: "Haus, heute, hier" },
      { re: /[bdg](\s|$)/, es: "Al final de palabra, b, d y g se endurecen: suenan p, t y k.", ex: "Hund = «Hunt», Tag = «Tak», ab = «ap»" },
      { re: /er(\s|$)/, es: "La terminación «-er» suena casi como una «a» suave.", ex: "Lehrer, aber, Mutter" },
      { re: /ß|ss/, es: "«ß» y «ss» son una «s» sorda, como en español.", ex: "Straße, groß, wissen" },
      { re: /r/, es: "La r alemana se hace atrás, en la garganta, casi como gargarear suave. Nunca la «rr» española.", ex: "rot, Brot, Reise" }
    ]
  };
  const GENERAL = {
    es: { de: ["Sprich langsam und deutlich, ganz nah am Mikrofon.", "Hör dir das Wort noch einmal an und sprich es dann nach."], en: ["Speak slowly and clearly, close to the microphone.", "Listen to the word again and repeat it."] },
    de: ["Habla a ritmo normal, a un palmo del micrófono y en un sitio tranquilo.", "Escucha otra vez el modelo y copia la melodía de la frase, no solo los sonidos.", "En alemán casi siempre se acentúa la primera sílaba: «AR-beit», «KÜ-che»."]
  };
  let lastTip = "";
  function tipFor(lang, target, missed) {
    const text = " " + (missed && missed.length ? missed.join(" ") : target).toLowerCase() + " ";
    const list = TIPS[lang].filter(t => t.re.test(text)), cand = list.filter(t => (t.es || t.de[0]) !== lastTip);
    const t = (cand.length ? cand : list)[0];
    if (lang === "es") {
      const g = t ? t[H()] : [one(GENERAL.es[H()]), ""]; lastTip = t ? t.de[0] : "";
      return `<div class="tipbox"><b>💡 ${H() === "de" ? "Tipp von Coco" : "Coco's tip"}</b><span>${esc(g[0])}</span>${g[1] ? `<span class="ex">${esc(g[1])}</span>` : ""}</div>`;
    }
    lastTip = t ? t.es : "";
    return `<div class="tipbox"><b>💡 Consejo de pronunciación</b><span>${esc(t ? t.es : one(GENERAL.de))}</span>${t ? `<span class="ex">${esc(t.ex)}</span>` : ""}</div>`;
  }

  /* ---------------- avisos ---------------- */
  const warn = (kind, icon, html) => `<div class="warn ${kind}"><span class="i">${icon}</span><div>${html}</div></div>`;
  function permCard(lang) {
    const kid = lang === "es";
    if (!MIC.ready()) return warn("bad", "🚫", kid ? `<p><b>${H() === "de" ? "Dieses Gerät kann kein Mikrofon benutzen." : "This device can't use a microphone."}</b> ${H() === "de" ? "Du kannst trotzdem laut sprechen und dich selbst bewerten." : "You can still speak out loud and rate yourself."}</p>` : `<p><b>Este navegador no permite usar el micrófono.</b> Puedes practicar diciendo las frases en voz alta y puntuándote tú. Para que te corrija, abre la app en Safari (iPhone/iPad) o Chrome (Android).</p>`);
    if (MIC.st.perm === "denied") return warn("bad", "🔇", `<p><b>${kid ? (H() === "de" ? "Das Mikrofon ist blockiert." : "The microphone is blocked.") : "El micrófono está bloqueado."}</b> ${kid ? (H() === "de" ? "Ein Erwachsener kann es so wieder erlauben:" : "An adult can allow it again like this:") : "Puedes volver a permitirlo así:"}</p><ol>${MIC.fixSteps(kid).map(s => `<li>${esc(s)}</li>`).join("")}</ol>`);
    if (MIC.st.perm === "nomic") return warn("bad", "🎙️", `<p><b>${kid ? (H() === "de" ? "Kein Mikrofon gefunden." : "No microphone found.") : "No encuentro ningún micrófono."}</b> ${kid ? "" : "Conecta unos auriculares con micrófono o usa el celular/iPad."}</p>`);
    if (MIC.st.perm === "granted") return "";
    return `<div class="vz-card vz-permc" style="gap:10px">${kid ? `<div class="row" style="flex-wrap:nowrap">${cocoHTML(70, "float-anim")}<div><h2 class="kf" style="font-size:24px">¡Coco quiere oírte!</h2><p class="kh">${H() === "de" ? "Damit Coco dich hören kann, braucht die App das Mikrofon. Bitte einen Erwachsenen, auf „Erlauben“ zu tippen." : "So Coco can hear you, the app needs the microphone. Ask an adult to tap “Allow”."}</p></div></div>` : `<div class="row" style="flex-wrap:nowrap"><span class="lena" style="--s:60px">👩🏼‍🔧</span><div><h2 class="wf" style="font-size:22px">Activa el micrófono</h2><p class="muted">Para corregir tu pronunciación, la app tiene que oírte. Tu teléfono te va a pedir permiso.</p></div></div>`}
      ${warn("info", "🔒", kid ? `<p>${H() === "de" ? "Die Spracherkennung macht dein Gerät (Apple oder Google). Diese App speichert deine Stimme nicht." : "Speech recognition is done by your device (Apple or Google). This app doesn't store your voice."}</p>` : `<p>El reconocimiento lo hace tu dispositivo: Apple en iPhone/iPad, Google en Android y Chrome. Esta app no guarda tu voz. En Android hace falta internet para reconocer.</p>`)}
      <button class="${kid ? "kbtn go" : "btn primary"}" data-act="vz-perm" style="justify-self:center">🎤 ${kid ? (H() === "de" ? "Mikrofon erlauben" : "Allow microphone") : "Permitir micrófono"}</button></div>`;
  }
  const quietTip = lang => warn("info", "🤫", lang === "es" ? `<p>${H() === "de" ? "Such dir einen ruhigen Ort, halte das Gerät nah und sprich laut und deutlich." : "Find a quiet spot, hold the device close and speak loud and clear."}</p>` : "<p>Busca un sitio tranquilo, sujeta el teléfono a un palmo de la boca y habla a ritmo normal. Tienes 3 intentos por frase.</p>");

  /* ---------------- contenido de cada peldaño (sale de los niveles) ---------------- */
  const STEP = {
    es: [["🗣️", "Palabras", "Wörter nachsprechen", "Repeat words"], ["💬", "Frases", "Sätze nachsprechen", "Repeat phrases"], ["🧠", "Sin ayuda", "Ohne Vorlage sagen", "Say it from memory"], ["🎭", "Mi papel", "Deine Rolle spielen", "Play your part"], ["🎤", "Habla libre", "Frei sprechen", "Speak freely"]],
    de: [["🗣️", "Wörter", "Palabras con su artículo"], ["💬", "Redemittel", "Frases hechas"], ["🧠", "Übersetzen", "Del español al alemán, de memoria"], ["🎭", "Rollenspiel", "Tu papel en un diálogo"], ["🎤", "Prüfung", "Hablar libre, como en el examen"]]
  };
  function dlgTags(who) { const pools = { f: ["de-f", "de-f2", "de-f3"], m: ["de-m", "de-m2", "de-m3"] }, out = {}; Object.entries(who).forEach(([k, [, g]]) => { const p = pools[g]; out[k] = p.length > 1 ? p.shift() : p[0]; }); return out; }
  function itemsES(lv, si) {
    const us = ES.units.filter(u => (u.level || "A1") === lv); if (!us.length) return [];
    const words = us.flatMap(u => u.words), phrases = us.flatMap(u => u.phrases);
    if (si === 0) return pick(words, 8).map(w => ({ target: w.es.replace(/…/g, ""), tag: NT(), pic: w.pic, help: hp(w), show: true }));
    if (si === 1) return pick(phrases, 6).map(p => ({ target: p.es, tag: NT(), help: hp(p), show: true }));
    if (si === 2) return pick([...phrases, ...words], 6).map(x => ({ target: x.es.replace(/…/g, ""), tag: NT(), pic: x.pic, help: hp(x), show: false }));
    if (si === 3) {
      const u = pick(us.filter(x => x.story.length >= 6), 1)[0], who = [...new Set(u.story.map(l => l.who))], role = who[1] || who[0];
      return [{ dialog: true, title: u.title, role, lines: u.story.slice(0, 10).map(l => ({ target: l.es, tag: l.who, who: l.who, mine: l.who === role, help: hp(l), show: true })) }];
    }
    const ex = ES.exams[lv]; return ex ? ex.hablar.map(t => ({ free: true, task: t.task, help: hp(t), model: t.model, tag: NT() })) : [];
  }
  function itemsDE(lv, si) {
    const th = k => (DE.themes[k] || {}).level || "A1", rows = DE.vocab.map((v, i) => ({ v, i })).filter(({ v }) => th(v[0]) === lv);
    const word = v => (["der", "die", "das"].includes(v[1]) ? v[1] + " " + v[2] : v[2]), tag = i => (i % 2 ? "de-m" : "de-f");
    const isChunk = k => k === "chunk" || k.indexOf("redemittel") >= 0;
    if (si === 0) return pick(rows.filter(({ v }) => !isChunk(v[0])), 8).map(({ v, i }) => ({ target: word(v), tag: tag(i), help: v[4], show: true }));
    if (si === 1) return pick(rows.filter(({ v }) => isChunk(v[0])), 6).map(({ v, i }) => ({ target: v[2], tag: tag(i), help: v[4], show: true }));
    if (si === 2) {
      const ord = DE.grammar.filter(g => g.level === lv).flatMap(g => g.items.filter(it => it.t === "order").map(it => ({ target: it.w.join(" "), tag: "de-f", help: it.es, show: false })));
      const dl = DE.dialogs.filter(d => (d.level || "A1") === lv).flatMap(d => { const t = dlgTags(d.who); return d.lines.filter(l => l[1].split(" ").length <= 12).map(l => ({ target: l[1], tag: t[l[0]], help: l[2], show: false })); });
      return pick([...ord, ...dl], 6);
    }
    if (si === 3) {
      const d = pick(DE.dialogs.filter(x => (x.level || "A1") === lv), 1)[0]; if (!d) return [];
      const t = dlgTags(d.who), keys = Object.keys(d.who), role = keys[1] || keys[0];
      return [{ dialog: true, title: d.de, role, roleName: d.who[role][0], lines: d.lines.slice(0, 12).map(l => ({ target: l[1], tag: t[l[0]], who: d.who[l[0]][0], mine: l[0] === role, help: l[2], show: true })) }];
    }
    if (lv === "A1") return [{ free: true, task: "Stellen Sie sich vor: Name, Alter, Land, Wohnort, Sprachen, Beruf, Hobby.", help: "Preséntate con los 7 datos del examen A1.", model: DE.exam.selbst, tag: "de-m" }, ...pick(DE.exam.sprechen3, 2).map(c => ({ free: true, short: true, task: "Formulieren Sie eine Bitte: " + c.pic + " " + c.hint, help: "Pide algo con lo que ves en la tarjeta.", model: c.ej, tag: "de-f" }))];
    const ex = DE.exams[lv]; return ex ? ex.sprechen.map(t => ({ free: true, task: t.task, help: (t.hints || []).join(" · "), model: t.model, tag: "de-m" })) : [];
  }
  const items = (lang, lv, si) => (lang === "es" ? itemsES(lv, si) : itemsDE(lv, si));
  const prog = lang => { const T = S[lang]; T.voz = T.voz || {}; return T.voz; };
  const openLv = lang => {
    if (lang === "es") return LV.slice(0, Math.max(1, S.es.unlocked || 1)).filter(l => ES.units.some(u => (u.level || "A1") === l));
    const cur = LV.indexOf(S.de.level && LV.includes(S.de.level) ? S.de.level : "A1");
    return LV.slice(0, Math.min(LV.length, cur + 2));
  };

  /* ---------------- pantalla de la escalera ---------------- */
  function ladder({ lang, page, hrefOf }) {
    const kid = lang === "es", P = prog(lang), open = openLv(lang);
    const lvName = l => (kid ? (ES.levels.find(x => x.id === l) || {}).es || l : ({ A1: "Einstieg", A2: "Grundlagen", B1: "Mittelstufe", B2: "Selbstständig" })[l]);
    page(`<div class="vz">
      <div class="vz-card" style="gap:8px">${kid ? `<div class="row" style="flex-wrap:nowrap">${cocoHTML(76, "float-anim")}<div><h1>Escalera de voz</h1><p class="kh">${H() === "de" ? "Hier kommst du nur weiter, wenn du sprichst! Jede Stufe hat ein paar Sätze. Mit zwei Sternen geht die nächste Stufe auf." : "Here you only move on by speaking! Each step has a few sentences. Two stars open the next step."}</p></div></div>`
        : `<div class="row" style="flex-wrap:nowrap"><span class="lena" style="--s:64px">👩🏼‍🔧</span><div><h1>Sprechstudio</h1><p class="muted">Cinco peldaños por nivel que solo se superan hablando: de repetir palabras a hablar libre como en el examen. Con 65 % de acierto se abre el siguiente.</p></div></div>`}
        ${MIC.canASR() ? "" : MIC.ready() ? warn("", "⚠️", kid ? `<p>${H() === "de" ? "Auf diesem Gerät kann die App deine Wörter nicht erkennen. Du nimmst dich auf, hörst dich an und vergleichst mit Coco." : "This device can't recognize words. You'll record yourself, listen and compare with Coco."}</p>` : "<p>Este dispositivo no reconoce la voz. Te grabarás, te escucharás y te compararás con la voz nativa (sin corrección automática).</p>") : ""}
        ${permCard(lang)}</div>
      <div class="ladder">${LV.map(l => {
        const isOpen = open.includes(l), b = P[l] || [];
        return `<div class="lad-lv" ${isOpen ? "" : 'style="opacity:.55"'}><h2>${kid ? ((ES.levels.find(x => x.id === l) || {}).pic || "") + " " + esc(lvName(l)) + " · " + l : l + " · " + esc(lvName(l))} ${isOpen ? "" : "🔒"}</h2>
          <div class="lad-steps">${STEP[lang].map((s, si) => { const done = (b[si] || 0) >= .65, unl = isOpen && (si === 0 || (b[si - 1] || 0) >= .65), nx = unl && !done; return `<a class="lad-step ${done ? "done" : ""} ${unl ? "" : "locked"} ${nx ? "next" : ""}" href="${hrefOf(l, si)}"><span class="e">${done ? "✅" : unl ? s[0] : "🔒"}</span><b>${esc(s[1])}</b><small>${esc(kid ? (H() === "de" ? s[2] : s[3]) : s[2])}</small>${b[si] != null ? `<small>${Math.round(b[si] * 100)} %</small>` : ""}</a>`; }).join("")}</div>
          ${isOpen ? "" : `<p class="small muted">${kid ? (H() === "de" ? "Gewinne zuerst die Große Herausforderung des vorherigen Levels." : "First win the previous level's Big Challenge.") : "Se abre al subir de nivel en «Hoy»."}</p>`}</div>`;
      }).join("")}</div></div>`, { "vz-perm": permAct(lang, () => ladder({ lang, page, hrefOf })) });
  }
  const permAct = (lang, after) => async el => { el.disabled = true; const ok = await MIC.request(); SFX.play(ok ? "ok" : "bad"); after(); if (ok) toast(lang === "es" ? (H() === "de" ? "Super! Coco kann dich jetzt hören." : "Great! Coco can hear you now.") : "Micrófono activado"); };

  /* ---------------- un peldaño ---------------- */
  function stage({ lang, lv, si, page, backHref, onDone }) {
    const kid = lang === "es", list = items(lang, lv, si), P = prog(lang);
    if (!list.length) return page(`<div class="vz"><div class="vz-card"><p>No hay contenido para este peldaño todavía.</p><a class="btn" href="${backHref}">Volver</a></div></div>`, {});
    const isDialog = !!list[0].dialog, results = [];
    let k = 0, stopFn = null, recObj = null, tries = 0, bestR = 0, dlg = isDialog ? list[0] : null, li = 0;
    const scored = isDialog ? dlg.lines.filter(l => l.mine) : list;
    const S1 = STEP[lang][si];
    const shell = () => page(`<div class="vz">
      <div class="row" style="flex-wrap:nowrap"><a class="${kid ? "gx" : "btn sm ghost"}" href="${backHref}" aria-label="Volver">${ICON.close}</a><div class="bar" style="flex:1"><i id="vz-bar" style="width:0%;background:var(--hib)"></i></div><span class="small muted" id="vz-n"></span></div>
      <div class="vz-card" style="gap:6px"><span class="small muted">${lv} · ${esc(S1[1])}</span><h1 style="font-size:24px">${S1[0]} ${esc(kid ? (H() === "de" ? S1[2] : S1[3]) : S1[2])}</h1></div>
      ${permCard(lang)}
      <div class="vz-card" id="vz-box"></div></div>`, { "vz-perm": permAct(lang, () => stage({ lang, lv, si, page, backHref, onDone })) });
    shell();
    const setProg = () => { const n = isDialog ? scored.length : list.length, d = results.length; $("#vz-n").textContent = Math.min(d + 1, n) + "/" + n; $("#vz-bar").style.width = (d / n * 100) + "%"; };
    const micIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>';

    function itemUI(it, extraTop = "") {
      tries = 0; bestR = 0;
      const box = $("#vz-box"); if (!box) return;
      const showT = it.show || it.free;
      box.innerHTML = `${extraTop}
        ${it.free ? `<p class="vz-target" style="font-size:20px;text-align:left">${esc(it.task)}</p><p class="vz-help" style="text-align:left">${esc(it.help || "")}</p>`
          : `${it.pic ? `<div class="vz-pic">${it.pic}</div>` : ""}<div class="vz-target ${showT ? "" : "hidden-t"}" id="vz-t">${esc(it.target)}</div><div class="vz-help">${esc(it.help || "")}</div>`}
        <div class="center"><button class="${kid ? "kbtn sea sm" : "btn sm"}" data-act="vz-hear">🔊 ${it.free ? (kid ? "Ejemplo" : "Modelo") : showT ? (kid ? "Escuchar" : "Escuchar") : (kid ? "Pista" : "Pista (cuenta menos)")}</button></div>
        <button class="vz-mic" data-act="vz-mic" aria-label="Hablar">${micIcon}</button>
        <div class="vz-meter" id="vz-m" hidden><i></i></div>
        <div class="vz-heard" id="vz-h">${MIC.canASR() ? (kid ? (H() === "de" ? "Tippe auf das Mikrofon und sprich" : "Tap the mic and speak") : "Toca el micrófono y habla") : (kid ? (H() === "de" ? "Tippe zum Aufnehmen" : "Tap to record") : "Toca para grabarte")}</div>
        <div id="vz-r" class="stack" style="gap:10px"></div>`;
      let hinted = false;
      Object.assign(ACT, {
        "vz-hear": el => { if (!showT && !it.free) { hinted = true; $("#vz-t").classList.remove("hidden-t"); } speak(it.tag, it.free ? it.model : it.target, { btn: el }); if (it.free) $("#vz-r").innerHTML = `<div class="tipbox"><b>${kid ? "Ejemplo" : "Modelo"}</b><span style="white-space:pre-wrap">${esc(it.model)}</span></div>`; },
        "vz-mic": el => { if (stopFn) { stopFn(); return; } if (recObj) { recObj.stop(); return; } go(el); },
        "vz-next": () => next(), "vz-again": () => itemUI(it, extraTop)
      });
      function go(el) {
        const h = $("#vz-h");
        if (MIC.canASR()) {
          el.classList.add("on"); h.textContent = kid ? "🎧 …" : "🎧 Te escucho…";
          stopFn = MIC.recognize(asrLang(lang), {
            long: !!it.free && !it.short,
            onText: t => { h.textContent = "🎧 " + t; },
            onEnd: (t, err, alts) => {
              el.classList.remove("on"); stopFn = null;
              if (err && err !== "no-speech") {
                if (err === "not-allowed") { shell(); return itemUI(it, extraTop); }
                if (err === "service-not-allowed") { h.innerHTML = warnText("asr"); return; }
                if (err === "network") { h.innerHTML = kid ? "📶 " + (H() === "de" ? "Für die Spracherkennung braucht man Internet." : "Speech recognition needs internet.") : "📶 Para reconocer la voz hace falta internet."; return; }
              }
              if (!t) { h.textContent = kid ? (H() === "de" ? "Ich habe nichts gehört. Sprich lauter!" : "I didn't hear anything. Speak louder!") : "No te oí. Habla más cerca del micrófono."; return; }
              judge(it, t, alts, hinted);
            }
          });
          if (!stopFn) { el.classList.remove("on"); go2(el); }
          return;
        }
        go2(el);
      }
      async function go2(el) {
        const h = $("#vz-h"), m = $("#vz-m");
        if (!MIC.canRec) { return selfGrade(it, ""); }
        el.classList.add("rec", "on"); m.hidden = false; h.textContent = kid ? "🔴 …" : "🔴 Grabando… toca para parar";
        recObj = await MIC.record(v => { const i = $("#vz-m i"); if (i) i.style.width = Math.round(v * 100) + "%"; }, it.free && !it.short ? 60000 : 8000);
        if (!recObj) { el.classList.remove("rec", "on"); m.hidden = true; shell(); return itemUI(it, extraTop); }
        const url = await recObj.result; recObj = null;
        el.classList.remove("rec", "on"); m.hidden = true; h.textContent = "";
        selfGrade(it, url);
      }
    }
    const warnText = w => (w === "asr" ? (kid ? "⚠️ " + (H() === "de" ? "Die Spracherkennung ist aus. Schalte „Diktieren“ in den Einstellungen ein." : "Speech recognition is off. Turn on “Dictation” in Settings.") : "⚠️ El reconocimiento de voz está desactivado. En iPhone/iPad: Ajustes → General → Teclado → activa «Dictado». También puedes abrir la página en Safari en vez de la app instalada.") : "");

    function judge(it, heard, alts, hinted) {
      tries++; numLang = lang; $$(".vz-permc").forEach(x => x.remove());
      const target = it.free ? it.model : it.target;
      const b = it.free ? { a: heard, s: freeScore(it, heard) } : best(target, alts && alts.length ? alts : [heard]);
      let r = b.s.r; if (hinted && !it.show) r *= .8;
      bestR = Math.max(bestR, r);
      const n = starsOf(r), ok = r >= .65;
      SFX.play(ok ? "ok" : "bad"); if (!ok) vibrate(30);
      if (tries === 1) Adapt.record(lang, lv, ok, .06);
      const R = $("#vz-r");
      R.innerHTML = `<div class="vz-stars">${"⭐".repeat(n)}<span style="opacity:.25">${"⭐".repeat(3 - n)}</span></div>
        ${it.free ? `<div class="tipbox"><b>${kid ? "Coco oyó" : "Transcripción"} · ${heard.split(/\s+/).filter(Boolean).length} ${kid ? "palabras" : "palabras"}</b><span>${esc(heard)}</span></div>${b.s.note ? `<p class="small muted">${esc(b.s.note)}</p>` : ""}<div class="tipbox"><b>${kid ? "Ejemplo" : "Modelo"}</b><span style="white-space:pre-wrap">${esc(it.model)}</span></div>`
          : `<div class="vz-words">${b.s.marks.map(m => `<span class="${m.ok ? "ok" : "no"}">${esc(m.w)}</span>`).join("")}</div><p class="vz-help">${kid ? "Coco oyó" : "Oí"}: «${esc(b.a)}»</p>`}
        ${ok ? "" : tipFor(lang, target, b.s.missed)}
        <div class="center">${!ok && tries < 3 ? `<button class="${kid ? "kbtn sm" : "btn"}" data-act="vz-again">🔁 ${kid ? "Otra vez" : "Otra vez"} (${3 - tries})</button>` : ""}<button class="${kid ? "kbtn go sm" : "btn primary"}" data-act="vz-next">${ok || tries >= 3 ? "Siguiente →" : kid ? "Saltar" : "Saltar"}</button></div>`;
      if (!it.show && !it.free) { const t = $("#vz-t"); t && t.classList.remove("hidden-t"); }
      if (ok) { if (kid) { S.es.coins++; floatText("+1 🪙", $(".vz-mic")); } else { S.de.xp = (S.de.xp || 0) + 4; floatText("+4 XP", $(".vz-mic")); } save(); }
      ACT["vz-again"] = () => { R.innerHTML = ""; $("#vz-h").textContent = ""; };
    }
    /* Hablar libre: cuenta palabras y, en A1, los 7 datos de la presentación. */
    function freeScore(it, heard) {
      const n = heard.split(/\s+/).filter(Boolean).length, target = it.short ? 5 : (lang === "es" ? 25 : ({ A1: 30, A2: 45, B1: 70, B2: 100 })[lv] || 40);
      let r = Math.min(1, n / target), note = "";
      if (lang === "de" && lv === "A1" && !it.short) {
        const kw = [/(hei(ß|ss)e|name ist)/i, /jahre/i, /(komme aus|bin aus)/i, /(wohne|lebe)/i, /(spreche|sprachen)/i, /(beruf|arbeite)/i, /(hobby|gern)/i];
        const got = kw.filter(re => re.test(heard)).length; r = (r + got / 7) / 2; note = got + " de 7 datos de la presentación.";
      }
      const mod = score(it.model, heard); r = Math.max(r * .8, mod.r);
      return { r, marks: [], missed: [], note: note || (n < target ? (kid ? "Intenta decir un poco más." : "Intenta hablar un poco más: en el examen cuenta la extensión.") : "") };
    }
    function selfGrade(it, url) {
      const R = $("#vz-r");
      R.innerHTML = `${url ? `<div class="center"><audio controls src="${url}" style="max-width:100%"></audio></div>` : ""}
        <p class="vz-help">${kid ? (H() === "de" ? "Hör dich an und vergleiche mit Coco. Wie war es?" : "Listen to yourself and compare with Coco. How was it?") : "Escúchate y compárate con el modelo. ¿Cómo salió?"}</p>
        <div class="center"><button class="${kid ? "kbtn leaf sm" : "btn"}" data-act="vz-s" data-v="1">😃 ${kid ? "Igual" : "Igual que el modelo"}</button><button class="${kid ? "kbtn sm" : "btn"}" data-act="vz-s" data-v=".7">🙂 ${kid ? "Fast" : "Casi"}</button><button class="${kid ? "kbtn sm" : "btn"}" data-act="vz-s" data-v=".3">🤔 ${kid ? "Nochmal üben" : "Me falta"}</button></div>
        ${tipFor(lang, it.free ? it.model : it.target, [])}`;
      ACT["vz-s"] = el => { const v = +el.dataset.v; bestR = Math.max(bestR, v); Adapt.record(lang, lv, v >= .7, .04); SFX.play(v >= .7 ? "ok" : "tap"); next(); };
    }
    function next() {
      results.push(bestR);
      if (isDialog) return dialogStep();
      k++; setProg();
      if (k >= list.length) return finish();
      itemUI(list[k]);
    }
    /* Diálogo: las líneas de los otros suenan solas; en las tuyas, hablas tú. */
    async function dialogStep() {
      const box = $("#vz-box"); if (!box) return;
      setProg();
      while (li < dlg.lines.length && !dlg.lines[li].mine) {
        const l = dlg.lines[li], my = SEQ;
        box.innerHTML = head(l) ;
        await speak(l.tag, l.target); if (my !== SEQ) return; await sleep(250); li++;
      }
      if (li >= dlg.lines.length) return finish();
      const l = dlg.lines[li]; li++;
      itemUI({ ...l, show: l.show }, head(l, true));
    }
    const head = (l, mine) => {
      const prev = dlg.lines.slice(Math.max(0, li - 2), li).filter(x => x !== l);
      const av = w => (kid ? (ES.cast[w] || {}).pic || "🙂" : "🙂");
      return `<p class="small muted">${kid ? "🎭 " + esc(dlg.title) + " · " + (H() === "de" ? "Du bist " : "You are ") + esc((ES.cast[dlg.role] || {}).name || "") : "🎭 " + esc(dlg.title) + " · tú eres " + esc(dlg.roleName || "")}</p>
        ${prev.map(x => `<div class="dl-line ${x.mine ? "mine" : ""}"><span class="av">${av(x.who)}</span><div class="bb"><b class="small">${esc(kid ? (ES.cast[x.who] || {}).name || "" : x.who)}</b><div>${esc(x.target)}</div></div></div>`).join("")}
        ${mine ? "" : `<div class="dl-line cur"><span class="av">${av(l.who)}</span><div class="bb"><b class="small">${esc(kid ? (ES.cast[l.who] || {}).name || "" : l.who)}</b><div>${esc(l.target)}</div><div class="small muted">${esc(l.help)}</div></div></div>`}`;
    };
    function finish() {
      const avg = results.length ? results.reduce((a, b) => a + b, 0) / results.length : 0, pass = avg >= .65;
      const b = P[lv] = P[lv] || []; const first = (b[si] || 0) < .65 && pass; b[si] = Math.max(b[si] || 0, avg); save();
      if (lang === "de") logActivity("de", Math.max(1, Math.round(avg * 10)));
      onDone && onDone(avg, pass, first);
    }
    if (isDialog) dialogStep(); else { setProg(); itemUI(list[0]); }
  }

  /* ---------------- consejo del día ---------------- */
  const DAILY = {
    de: ["Habla en voz alta aunque estés solo: la boca también tiene que aprender.", "Aprende frases enteras, no palabras sueltas: «Ich hätte gern…» vale más que «haben».", "Cada sustantivo, con su artículo y su plural: «der Tisch, die Tische».", "Pon el celular en alemán una semana: aprenderás el vocabulario de todos los días sin esfuerzo.", "Escucha cada día algo lento: Deutsche Welle tiene «Langsam gesprochene Nachrichten».", "Equivocarte y ver la corrección fija más que acertar a la primera. Arriesga.", "20 minutos diarios ganan a 3 horas el domingo: la memoria necesita espacio.", "Escribe 3 frases en Perfekt sobre tu día antes de dormir.", "Grábate leyendo un diálogo y compáralo con el modelo: oirás lo que no notas al hablar.", "Haz tándem: el niño te corrige el alemán y tú le corriges el español.", "Piensa en alemán en rutinas fijas: cocinar, ducharte, ir al trabajo.", "Repasa las tarjetas justo antes de dormir: el sueño consolida lo aprendido.", "No traduzcas palabra por palabra: «Mir ist kalt» no es «a mí es frío», es «tengo frío».", "Si no entiendes algo en Alemania, di «Wie bitte?» o «Langsamer, bitte»: la gente ayuda."],
    es: [["Sprich laut mit – auch wenn es komisch klingt!", "Say it out loud – even if it sounds funny!"], ["Fehler sind super: So lernt dein Gehirn am meisten.", "Mistakes are great: that's how your brain learns most."], ["Zeig auf Sachen und sag sie auf Spanisch.", "Point at things and say them in Spanish."], ["Bring Mama oder Papa ein spanisches Wort bei.", "Teach mom or dad a Spanish word."], ["Jeden Tag ein bisschen ist besser als einmal ganz viel.", "A little every day beats a lot once."], ["Hör dir die Geschichte zweimal an: Beim zweiten Mal verstehst du mehr.", "Listen to the story twice: you'll understand more the second time."], ["Sag beim Essen „gracias“ und „por favor“.", "Say “gracias” and “por favor” at meals."], ["Sing ein Lied auf Spanisch oder erfinde eins mit Coco.", "Sing a song in Spanish or make one up with Coco."], ["Wenn du ein Wort nicht weißt, beschreib es mit anderen Wörtern.", "If you don't know a word, describe it with other words."], ["Spiel „Simón dice“ mit deiner Familie.", "Play “Simón dice” with your family."]]
  };
  function daily(lang) {
    const n = Math.floor(startOfDay(Date.now()) / DAY);
    if (lang === "de") { const t = DAILY.de[n % DAILY.de.length]; return `<div class="tipbox"><b>💡 Consejo del día</b><span>${esc(t)}</span></div>`; }
    const t = DAILY.es[n % DAILY.es.length]; return `<div class="tipbox"><b>💡 ${H() === "de" ? "Cocos Tipp des Tages" : "Coco's tip of the day"}</b><span>${esc(H() === "de" ? t[0] : t[1])}</span></div>`;
  }
  /* Aviso de racha: si ayer hubo práctica y hoy todavía no. */
  function streakWarn(lang) {
    const st = S[lang].streak, y = fmtDay(new Date(Date.now() - DAY));
    if (st.last !== y || st.n < 2) return "";
    return lang === "es" ? warn("", "🔥", `<p><b>${H() === "de" ? "Spiel heute, sonst verlierst du deine Serie von " + st.n + " Tagen!" : "Play today or you'll lose your " + st.n + "-day streak!"}</b></p>`)
      : warn("", "🔥", `<p><b>Haz al menos una actividad hoy para no perder tu racha de ${st.n} días.</b></p>`);
  }

  /* ---------------- ajustes del micrófono ---------------- */
  function settingsHtml() {
    const s = MIC.st.perm, lab = { granted: "✅ permitido", denied: "⛔ bloqueado", nomic: "🎙️ no hay micrófono", unavailable: "🚫 no disponible en este navegador", error: "⚠️ error", unknown: "todavía no se ha pedido" }[s] || s;
    return `<div class="field"><span class="lbl">Micrófono</span>
      <p class="small muted">Estado: ${lab}. ${MIC.canASR() ? "Reconocimiento de voz disponible." : MIC.canRec ? "Sin reconocimiento: se graba la voz para compararla." : ""}</p>
      ${s === "denied" ? `<ol class="small" style="margin:0 0 0 18px">${MIC.fixSteps(false).map(x => `<li>${esc(x)}</li>`).join("")}</ol>` : ""}
      <div class="row"><button class="btn sm" data-act="mic-test">🎤 Probar micrófono</button><span class="small muted" id="mic-out"></span></div></div>`;
  }
  async function test(el) {
    const out = $("#mic-out"); el.disabled = true;
    const ok = await MIC.request(); if (!ok) { out.textContent = "No hay permiso. Revisa los pasos de arriba."; el.disabled = false; openSettings(); return; }
    if (MIC.canASR()) {
      out.textContent = "Di «hola»…";
      MIC.recognize(asrLang("es"), { onText: t => { out.textContent = "🎧 " + t; }, onEnd: (t, err) => { out.textContent = t ? "✅ Te oí: «" + t + "»" : err ? "⚠️ " + err : "No te oí. Prueba otra vez."; el.disabled = false; } });
    } else { out.textContent = "✅ Permiso concedido (este navegador no reconoce la voz; se grabará para compararla)."; el.disabled = false; }
  }

  return { ladder, stage, tipFor, daily, streakWarn, settingsHtml, test, permCard, warn, openLv };
})();
