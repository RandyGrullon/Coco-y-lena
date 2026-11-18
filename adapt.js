/* Motor adaptativo de Coco y Lena.
   - Banco de preguntas generado a partir del contenido de cada nivel (no hay preguntas sueltas que mantener).
   - Prueba de nivel adaptativa (estilo test por computadora): cada respuesta mueve la estimación de nivel
     y la siguiente pregunta se elige cerca de esa estimación.
   - Modelo del alumno: cada respuesta en cualquier juego o ejercicio actualiza su nivel estimado (theta)
     y sus aciertos recientes, que la app usa para ajustar la dificultad y recomendar qué hacer. */
$("#css-adapt") && ($("#css-adapt").textContent = `
.ad{max-width:720px;margin:0 auto;display:grid;gap:16px}
.ad-card{background:var(--surface);border:2px solid var(--line);border-radius:26px;padding:20px;display:grid;gap:14px;box-shadow:var(--shadow)}
.ad h1{font:800 clamp(26px,5vw,34px)/1.1 var(--f-kid)}
.ad .lead{color:var(--ink-2);font-size:16px}
.ad-q{font:700 clamp(20px,4.6vw,26px)/1.3 var(--f-kid)}
body[data-world="werk"] .ad-q,body[data-world="werk"] .ad h1{font-family:var(--f-de)}
.ad-q small{display:block;font:600 14px/1.3 var(--f-body);color:var(--ink-2);margin-top:4px}
.ad-text{background:var(--surface-2);border-radius:18px;padding:14px 16px;font-size:17px;line-height:1.55;white-space:pre-wrap}
.ad-opts{display:grid;gap:10px}
.ad-opts.pics{grid-template-columns:repeat(2,minmax(0,1fr))}
.ad-opts.pics.six{grid-template-columns:repeat(3,minmax(0,1fr))}
.ad-opt{border:2px solid var(--line);background:var(--surface);border-radius:18px;padding:13px 16px;font:700 18px/1.3 var(--f-body);text-align:left;min-height:56px;box-shadow:0 3px 0 var(--line)}
.ad-opts.pics .ad-opt{font-size:clamp(44px,10vw,64px);text-align:center;min-height:96px;line-height:1}
.ad-opt.ok{border-color:var(--ok);background:color-mix(in srgb,var(--ok) 12%,var(--surface))}
.ad-opt.bad{border-color:var(--bad);background:color-mix(in srgb,var(--bad) 10%,var(--surface))}
.ad-prog{display:flex;gap:10px;align-items:center}
.ad-prog .bar{flex:1}
.ad-play{width:84px;height:84px;border-radius:50%;border:0;background:var(--sea);color:#fff;font-size:34px;justify-self:center;box-shadow:0 5px 0 var(--sea-deep)}
.ad-play.on{animation:bump .5s ease infinite alternate}
.ad-choice{display:grid;gap:10px}
.ad-choice button{border:2px solid var(--line);background:var(--surface);border-radius:18px;padding:14px 16px;text-align:left;display:flex;gap:12px;align-items:center;min-height:62px}
.ad-choice button b{font:800 17px/1.2 var(--f-body);display:block}
.ad-choice button span.e{font-size:30px}
.ad-choice button small{color:var(--ink-2)}
.ad-res{display:grid;gap:10px;justify-items:center;text-align:center}
.ad-lvl{font:800 64px/1 var(--f-kid);color:var(--sea-deep)}
body[data-world="werk"] .ad-lvl{font-family:var(--f-de);color:var(--coach)}
.ad-skills{display:grid;gap:8px;width:100%;text-align:left}
.ad-skills .row{flex-wrap:nowrap}
.ad-skills .row span:first-child{width:130px;flex:none;font-weight:700}
.ad-skills .bar{flex:1}
.ad-scale{display:flex;gap:6px;width:100%}
.ad-scale span{flex:1;text-align:center;border-radius:12px;padding:8px 0;font:800 15px var(--f-body);background:var(--surface-2);color:var(--ink-2)}
.ad-scale span.on{background:var(--sea);color:#fff}
body[data-world="werk"] .ad-scale span.on{background:var(--coach)}
.ad-tok{display:flex;flex-wrap:wrap;gap:8px}
.ad-tok button{border:2px solid var(--line);background:var(--surface);border-radius:14px;padding:10px 12px;font:600 17px var(--f-de);min-height:46px}
.ad-tok button.used{visibility:hidden}
.ad-ans{min-height:58px;border:2px dashed var(--line);border-radius:16px;padding:8px;display:flex;flex-wrap:wrap;gap:8px}
`);

window.Adapt = (() => {
  const LV = ["A1", "A2", "B1", "B2"];
  const BASE = { A1: -1.5, A2: -0.5, B1: 0.5, B2: 1.5 };
  const P = (th, b) => 1 / (1 + Math.exp(-1.7 * (th - b)));
  const levelOf = th => (th < -1 ? "A1" : th < 0 ? "A2" : th < 1 ? "B1" : "B2");
  const band = th => { const f = th - BASE[levelOf(th)] + .5; return f < .34 ? "bajo" : f < .67 ? "medio" : "alto"; };
  const H = () => (S.settings.help === "en" ? "en" : "de");
  const hp = o => (o && (o[H()] || o.de)) || "";
  const NT = () => (S.settings.accent === "es" ? "k-es" : "k-lat");

  /* ---------------- modelo del alumno ---------------- */
  function model(lang) {
    const T = S[lang];
    if (T.theta == null) T.theta = lang === "es" ? -1.6 : -1.1;
    T.recent = T.recent || [];
    return T;
  }
  /* Cada respuesta de cualquier actividad pasa por aquí. lv: nivel del contenido. */
  function record(lang, lv, ok, k = .07) {
    const T = model(lang), b = BASE[lv] != null ? BASE[lv] : BASE.A1;
    T.theta = Math.max(-3, Math.min(3, T.theta + k * ((ok ? 1 : 0) - P(T.theta, b))));
    T.recent.push(ok ? 1 : 0); if (T.recent.length > 20) T.recent.shift();
    save();
  }
  const acc = lang => { const r = model(lang).recent; return r.length < 5 ? null : r.reduce((a, b) => a + b, 0) / r.length; };
  /* Número de opciones de los juegos del niño según cómo le va: más fácil si falla, más difícil si acierta todo. */
  function kidOpts() { const a = acc("es"); return a == null ? 4 : a >= .9 ? 6 : a >= .6 ? 4 : 3; }
  const estimate = lang => { const T = model(lang); return { lv: levelOf(T.theta), band: band(T.theta), theta: T.theta }; };

  /* ---------------- banco de preguntas ---------------- */
  const unitLv = u => u.level || "A1";
  function bankES() {
    const items = [], units = ES.units;
    const byLv = lv => units.filter(u => unitLv(u) === lv);
    LV.forEach(lv => {
      const us = byLv(lv); if (!us.length) return;
      const words = us.flatMap(u => u.words.map(w => ({ ...w, unit: u.id })));
      const phrases = us.flatMap(u => u.phrases);
      words.forEach((w, i) => {
        if (lv === "A1" || lv === "A2") {
          items.push({ id: "es-pic-" + w.unit + i, lang: "es", lv, b: BASE[lv] - .4, kind: "Palabras", type: "pic", audio: [NT(), w.es], q: "", w,
            pool: words.filter(x => x.pic !== w.pic) });
        }
        if (lv !== "A1") items.push({ id: "es-mean-" + w.unit + i, lang: "es", lv, b: BASE[lv] - .1, kind: "Palabras", type: "mean", audio: [NT(), w.es], show: w.es, w, pool: words.filter(x => x.es !== w.es) });
      });
      phrases.forEach((p, i) => items.push({ id: "es-ph-" + lv + i, lang: "es", lv, b: BASE[lv], kind: "Frases", type: "mean", audio: [NT(), p.es], show: p.es, w: p, pool: phrases.filter(x => x.es !== p.es) }));
      const ex = ES.exams[lv];
      if (ex) {
        (ex.escuchar || []).forEach((q, i) => items.push({ id: "es-ex-e-" + lv + i, lang: "es", lv, b: BASE[lv] + .15, kind: "Escuchar", type: "mc", audio: [q.who === "narr" ? NT() : q.who, q.text], q: q.q, help: hp(q), opts: q.opts, a: q.a }));
        (ex.leer || []).forEach((q, i) => items.push({ id: "es-ex-l-" + lv + i, lang: "es", lv, b: BASE[lv] + .1, kind: "Leer", type: "mc", text: q.text, q: q.q, help: hp(q), opts: q.opts, a: q.a }));
      }
    });
    return items;
  }
  function bankDE() {
    const items = [], lvOfTheme = th => (DE.themes[th] && DE.themes[th].level) || "A1";
    const vocab = DE.vocab.map((v, i) => ({ th: v[0], art: v[1], w: v[2], es: v[4], i, lv: lvOfTheme(v[0]) }));
    LV.forEach(lv => {
      const vs = vocab.filter(v => v.lv === lv && v.th.indexOf("chunk") < 0 && v.th.indexOf("redemittel") < 0);
      vs.forEach(v => {
        const word = ["der", "die", "das"].includes(v.art) ? v.art + " " + v.w : v.w;
        items.push({ id: "de-v-" + v.i, lang: "de", lv, b: BASE[lv] - .25, kind: "Wortschatz", type: "mean", show: word, audio: [v.i % 2 ? "de-m" : "de-f", word], w: { es: v.es }, pool: vs.filter(x => x.es !== v.es).map(x => ({ es: x.es })), deToEs: true });
      });
      DE.grammar.filter(g => g.level === lv).forEach(g => g.items.forEach((it, k) => {
        if (it.t === "mc") items.push({ id: "de-g-" + g.id + k, lang: "de", lv, b: BASE[lv], kind: "Grammatik", type: "mc", q: it.q, opts: it.o, a: it.a, topic: g.id });
        if (it.t === "order") items.push({ id: "de-o-" + g.id + k, lang: "de", lv, b: BASE[lv] + .15, kind: "Grammatik", type: "order", w: it.w, help: it.es, topic: g.id });
      }));
      const ex = lv === "A1" ? DE.exam : DE.exams[lv];
      if (ex) {
        (ex.lesen || []).forEach((q, i) => items.push({ id: "de-l-" + lv + i, lang: "de", lv, b: BASE[lv] + .1, kind: "Lesen", type: "mc", text: q.text, q: q.q, opts: q.o, a: q.a }));
        (ex.hoeren || []).forEach((q, i) => items.push({ id: "de-h-" + lv + i, lang: "de", lv, b: BASE[lv] + .2, kind: "Hören", type: "mc", script: q.text, q: q.q, opts: q.o, a: q.a }));
      }
    });
    return items;
  }
  const bank = lang => (lang === "es" ? bankES() : bankDE());
  function pickNear(items, theta, used, lastKind) {
    let c = items.filter(x => !used.has(x.id));
    if (!c.length) return null;
    const alt = c.filter(x => x.kind !== lastKind); if (alt.length > 3) c = alt;
    c.sort((a, b) => Math.abs(a.b - theta) - Math.abs(b.b - theta) + (Math.random() - .5) * .35);
    return c[(Math.random() * Math.min(5, c.length)) | 0];
  }

  /* ---------------- audio de un ítem ---------------- */
  async function playItem(it, btn) {
    if (btn) btn.classList.add("on");
    try {
      if (it.script) {
        const parts = it.script.split(/(Frau:|Mann:)/).map(s => s.trim()).filter(Boolean); let g = "de-f";
        const lines = parts.length === 1 ? [[parts[0], "de-f"]] : [];
        for (const p of parts) { if (p === "Frau:") g = "de-f"; else if (p === "Mann:") g = "de-m"; else if (parts.length > 1) lines.push([p, g]); }
        const my = ++SEQ;
        for (const [t, tg] of lines) { if (my !== SEQ) break; await speak(tg, t); await sleep(250); }
      } else if (it.audio) await speak(it.audio[0], it.audio[1]);
    } finally { if (btn) btn.classList.remove("on"); }
  }

  /* ---------------- pintar una pregunta ---------------- */
  function renderItem(it, box, onAnswer, opt = {}) {
    const isKid = it.lang === "es";
    let opts, a, cls = "", html = "";
    if (it.type === "pic") {
      const n = opt.n || 4, others = pick(it.pool, n - 1);
      opts = shuffle([it.w, ...others]); a = opts.indexOf(it.w);
      cls = "pics" + (n >= 6 ? " six" : "");
      html = `<button class="ad-play" data-act="ad-play" aria-label="Escuchar">🔊</button><p class="ad-q" style="text-align:center">${isKid ? "¿Qué es?" : ""}<small>${isKid ? esc(H() === "de" ? "Hör zu und tippe auf das Bild" : "Listen and tap the picture") : ""}</small></p>
        <div class="ad-opts ${cls}">${opts.map((o, k) => `<button class="ad-opt" data-act="ad-ans" data-k="${k}" aria-label="${esc(o.es)}">${o.pic}</button>`).join("")}</div>`;
    } else if (it.type === "mean") {
      const others = pick(it.pool, (opt.n || 4) - 1);
      const lab = o => (it.deToEs ? o.es : hp(o));
      opts = shuffle([it.w, ...others]); a = opts.indexOf(it.w);
      html = `<div class="row" style="flex-wrap:nowrap">${it.audio ? `<button class="say" data-act="ad-play" aria-label="Escuchar">${ICON.play}</button>` : ""}<p class="ad-q">${esc(it.show)}<small>${isKid ? esc(H() === "de" ? "Was bedeutet das?" : "What does it mean?") : "¿Qué significa?"}</small></p></div>
        <div class="ad-opts">${opts.map((o, k) => `<button class="ad-opt" data-act="ad-ans" data-k="${k}">${esc(lab(o))}</button>`).join("")}</div>`;
    } else if (it.type === "order") {
      const pool = shuffle(it.w.map((t, k) => ({ t, k }))), chosen = [];
      const draw = () => {
        box.innerHTML = `<p class="ad-q">Ordena la frase<small>${esc(it.help || "")}</small></p>
          <div class="ad-ans">${chosen.map((x, j) => `<button class="tk" data-act="ad-un" data-j="${j}">${esc(x.t)}</button>`).join("")}</div>
          <div class="ad-tok">${pool.map((x, j) => `<button class="${chosen.includes(x) ? "used" : ""}" data-act="ad-add" data-j="${j}">${esc(x.t)}</button>`).join("")}</div>
          <button class="btn primary" data-act="ad-chk" ${chosen.length === pool.length ? "" : "disabled"}>Comprobar</button>`;
      };
      Object.assign(ACT, {
        "ad-add": el => { const x = pool[+el.dataset.j]; if (!chosen.includes(x)) { chosen.push(x); SFX.play("tap"); draw(); } },
        "ad-un": el => { chosen.splice(+el.dataset.j, 1); draw(); },
        "ad-chk": () => onAnswer(chosen.map(x => x.t).join(" ") === it.w.join(" "), null, it.w.join(" "))
      });
      draw(); return;
    } else {
      opts = it.opts; a = it.a;
      html = `${it.script || it.audio ? `<button class="ad-play" data-act="ad-play" aria-label="Escuchar">🔊</button>` : ""}
        ${it.text ? `<div class="ad-text">${esc(it.text)}</div>` : ""}
        <p class="ad-q">${esc(it.q)}${it.help ? `<small>${esc(it.help)}</small>` : ""}</p>
        <div class="ad-opts">${opts.map((o, k) => `<button class="ad-opt" data-act="ad-ans" data-k="${k}">${esc(o)}</button>`).join("")}</div>`;
    }
    box.innerHTML = html;
    let done = false;
    Object.assign(ACT, {
      "ad-play": el => playItem(it, el),
      "ad-ans": el => {
        if (done) return; done = true;
        const k = +el.dataset.k, ok = k === a;
        el.classList.add(ok ? "ok" : "bad");
        if (!ok && opt.reveal) $$(".ad-opt", box)[a].classList.add("ok");
        const right = typeof opts[a] === "string" ? opts[a] : it.type === "mean" && !it.deToEs ? hp(opts[a]) : opts[a].es;
        onAnswer(ok, el, right);
      }
    });
    if (it.audio || it.script) setTimeout(() => playItem(it, $(".ad-play, .say", box)), 250);
  }

  /* ---------------- prueba de nivel ---------------- */
  const NQ = { es: 12, de: 15 };
  const later = {};
  /* La primera vez que se entra en cada mundo se ofrece la prueba. «Ahora no» la aplaza hasta la próxima visita. */
  const needs = lang => !model(lang).placed && !later[lang];
  function placement(lang, back) {
    const isKid = lang === "es";
    const choices = isKid
      ? [["🌱", "Nada todavía", H() === "de" ? "Ich fange gerade an" : "I'm just starting", null], ["🙂", "Un poco", H() === "de" ? "Ein bisschen" : "A little", -1.5], ["😎", "Bastante", H() === "de" ? "Ziemlich viel" : "Quite a lot", -.4]]
      : [["🌱", "Estoy empezando", "Sé muy poco alemán", null], ["📗", "Terminé el A1 (o casi)", "Por ejemplo, el curso A1.4", -1.0], ["📘", "Tengo un A2", "Entiendo conversaciones sencillas", -.1], ["📙", "Tengo un B1 o más", "Me defiendo en casi todo", .8]];
    view(`<div class="wrap ${isKid ? "isla" : "werk"}"><div class="ad"><div class="ad-card">
      ${isKid ? `<div class="row" style="flex-wrap:nowrap">${cocoHTML(90, "float-anim")}<div><h1>¡Hola! Soy Coco</h1><p class="lead">${H() === "de" ? "Bevor wir losfliegen: Wie viel Spanisch kannst du schon? Ich stelle dir ein paar Fragen und suche deine Insel." : "Before we fly: how much Spanish do you know? I'll ask a few questions and find your island."}</p></div></div>`
        : `<div class="row" style="flex-wrap:nowrap"><span class="lena" style="--s:72px">👩🏼‍🔧</span><div><h1>Prueba de nivel</h1><p class="lead">Unos 5 minutos. Las preguntas se adaptan: si aciertas, la siguiente es más difícil; si fallas, más fácil. Al final te digo tu nivel (A1–B2) y preparo tu plan.</p></div></div>`}
      <div class="ad-choice">${choices.map(([e, t, s, th], k) => `<button data-act="pl-start" data-k="${k}"><span class="e">${e}</span><span><b>${esc(t)}</b><small>${esc(s)}</small></span></button>`).join("")}</div>
      ${back ? `<button class="btn ghost" data-act="pl-later">Ahora no</button>` : ""}
    </div></div></div>`, {
      "pl-later": () => { later[lang] = true; if (location.hash !== back) location.hash = back; else route(); },
      "pl-start": el => {
        const th = choices[+el.dataset.k][3];
        if (th == null) return finish(lang, isKid ? -2 : -1.8, {}, true);
        run(lang, th);
      }
    });
  }
  function run(lang, theta0) {
    const isKid = lang === "es", N = NQ[lang], items = bank(lang), used = new Set(), skills = {};
    let theta = theta0, n = 0, last = "";
    if (items.length < 6) return finish(lang, theta0, {}, true);
    view(`<div class="wrap ${isKid ? "isla" : "werk"}"><div class="ad">
      <div class="ad-prog"><div class="bar"><i id="ad-bar" style="width:0%;background:${isKid ? "var(--sea)" : "var(--coach)"}"></i></div><span class="small muted" id="ad-n">1/${N}</span></div>
      <div class="ad-card" id="ad-box"></div>
      <p class="small muted" style="text-align:center">${isKid ? (H() === "de" ? "Keine Sorge, wenn du etwas nicht weißt: Rate einfach!" : "Don't worry if you don't know: just guess!") : "Si no sabes una, elige la que te parezca: no pasa nada."}</p></div></div>`);
    function next() {
      if (n >= N) return finish(lang, theta, skills);
      const it = pickNear(items, theta, used, last); if (!it) return finish(lang, theta, skills);
      used.add(it.id); last = it.kind;
      $("#ad-n").textContent = (n + 1) + "/" + N; $("#ad-bar").style.width = (n / N * 100) + "%";
      renderItem(it, $("#ad-box"), (ok, el) => {
        const k = Math.max(.25, 1.3 * Math.pow(.84, n));
        theta = Math.max(-3, Math.min(3, theta + k * ((ok ? 1 : 0) - P(theta, it.b))));
        const s = skills[it.kind] = skills[it.kind] || { ok: 0, n: 0 }; s.n++; if (ok) s.ok++;
        SFX.play(ok ? "ok" : "tap"); n++;
        setTimeout(next, ok ? 450 : 550);
      }, { n: isKid ? 4 : 4 });
    }
    next();
  }
  function finish(lang, theta, skills, skipped) {
    const isKid = lang === "es", T = model(lang), lv = levelOf(theta);
    T.theta = theta; T.placed = true; T.placedLv = lv; T.recent = [];
    if (isKid) { T.unlocked = Math.max(T.unlocked || 1, LV.indexOf(lv) + 1); }
    else {
      T.level = lv;
      const lvls = LV.slice(0, LV.indexOf(lv) + 1);
      Object.entries(DE.themes).forEach(([k, th]) => { const tl = th.level || "A1"; if ((tl === lv || k === "chunk") && !T.themes.includes(k)) T.themes.push(k); });
      if (lv !== "A1") T.themes = T.themes.filter(k => { const tl = (DE.themes[k] || {}).level || "A1"; return tl === lv || k.indexOf("redemittel") >= 0 || k === "chunk"; });
      DE.course.forEach(l => { const ll = String(l.lvl).slice(0, 2); if (LV.indexOf(ll) >= 0 && LV.indexOf(ll) < LV.indexOf(lv)) l.items.forEach(([id]) => { T.course[id] = true; }); });
      void lvls;
    }
    save();
    const bars = Object.entries(skills).map(([k, s]) => `<div class="row"><span>${esc(k)}</span><div class="bar"><i style="width:${Math.round(s.ok / s.n * 100)}%"></i></div><span class="small muted">${s.ok}/${s.n}</span></div>`).join("");
    const L = isKid ? ES.levels.find(x => x.id === lv) : null;
    view(`<div class="wrap ${isKid ? "isla" : "werk"}"><div class="ad"><div class="ad-card ad-res">
      ${isKid ? cocoHTML(110, "jump") : `<span class="lena" style="--s:84px">👩🏼‍🔧</span>`}
      <span class="small muted">${skipped ? (isKid ? "Empezamos desde el principio" : "Empezamos desde el principio") : (isKid ? (H() === "de" ? "Dein Niveau" : "Your level") : "Tu nivel estimado")}</span>
      <div class="ad-lvl">${lv}</div>
      ${isKid && L ? `<b class="kf" style="font-size:22px">${L.pic} ${esc(L.es)}</b><span class="small muted">${esc(hp(L))}</span>` : `<b>${{ A1: "Principiante: base sólida del A1", A2: "Elemental: te manejas en lo cotidiano", B1: "Intermedio: te defiendes en casi todo", B2: "Intermedio alto: hablas con soltura" }[lv]} · ${band(theta)}</b>`}
      <div class="ad-scale">${LV.map(x => `<span class="${x === lv ? "on" : ""}">${x}</span>`).join("")}</div>
      ${bars ? `<div class="ad-skills">${bars}</div>` : ""}
      <p class="small muted">${isKid ? (H() === "de" ? "Coco passt die Spiele an: Wenn du alles richtig machst, wird es schwerer; wenn nicht, hilft er dir mehr." : "Coco adapts the games: if you get everything right, it gets harder; if not, he helps you more.") : "A partir de aquí, cada respuesta ajusta tu nivel. El plan diario elige lo que más te cuesta, y te aviso cuando estés listo para el examen del siguiente nivel."}</p>
      <a class="${isKid ? "kbtn go" : "btn primary"}" href="${isKid ? "#isla" : "#werkstatt"}" style="min-width:220px">${isKid ? "¡A mi isla! →" : "Ver mi plan →"}</a>
    </div></div></div>`);
    if (!skipped) { confetti(); SFX.play("level"); }
  }

  /* ---------------- entrenamiento inteligente ---------------- */
  function practice(lang, done) {
    const isKid = lang === "es", T = model(lang), items = bank(lang), used = new Set(), N = isKid ? 8 : 10;
    let n = 0, okN = 0, last = "";
    view(`<div class="wrap ${isKid ? "isla" : "werk"}"><div class="ad">
      <div class="ad-prog"><a class="btn sm ghost" href="${isKid ? "#isla" : "#werkstatt"}" aria-label="Salir">${ICON.close}</a><div class="bar"><i id="ad-bar" style="width:0%;background:${isKid ? "var(--sea)" : "var(--coach)"}"></i></div><span class="small muted" id="ad-n"></span></div>
      <div class="ad-card" id="ad-box"></div><div id="ad-fb"></div></div></div>`);
    function next() {
      if (n >= N) return done(okN, N);
      const it = pickNear(items, T.theta + .15, used, last); if (!it) return done(okN, n);
      used.add(it.id); last = it.kind;
      $("#ad-n").textContent = (n + 1) + "/" + N; $("#ad-bar").style.width = (n / N * 100) + "%"; $("#ad-fb").innerHTML = "";
      renderItem(it, $("#ad-box"), (ok, el, right) => {
        record(lang, it.lv, ok, .15); n++; if (ok) okN++;
        SFX.play(ok ? "ok" : "bad"); if (el && ok) floatText(isKid ? "+1 🪙" : "+4 XP", el);
        if (isKid && ok) { S.es.coins++; save(); } if (!isKid && ok) { S.de.xp = (S.de.xp || 0) + 4; save(); }
        $("#ad-fb").innerHTML = `<div class="ad-card" style="gap:8px">${ok ? `<b style="color:var(--ok)">✓ ${isKid ? one(ES.lines.good) : one(DE.coach.right)}</b>` : `<b style="color:var(--bad)">${isKid ? "La respuesta era:" : "Respuesta:"}</b> <span>${esc(right || "")}</span>`}
          <button class="${isKid ? "kbtn go sm" : "btn primary"}" data-act="ad-next">Siguiente →</button></div>`;
        ACT["ad-next"] = next;
      }, { n: isKid ? kidOpts() : 4, reveal: true });
    }
    next();
  }

  return { LV, BASE, levelOf, band, record, kidOpts, estimate, placement, practice, model, acc, needs };
})();
