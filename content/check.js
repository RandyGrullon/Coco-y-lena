/* Validador del contenido.  Uso:  node content/check.js es-a2   (o de-b1, es-b2, …)
   Sin argumento valida todos los archivos de content/. Sale con código 1 si hay errores. */
const fs = require("fs");
const path = require("path");
const dir = __dirname;
global.window = {};
require(path.join(dir, "..", "es-data.js"));
require(path.join(dir, "..", "de-data.js"));
const ES = window.ES, DE = window.DE;
const before = { units: ES.units.length, slang: ES.slang.length, vocab: DE.vocab.length, grammar: DE.grammar.length, dialogs: DE.dialogs.length, texts: DE.texts.length };
const files = process.argv[2] ? [process.argv[2]] : fs.readdirSync(dir).filter(f => /^(es|de)-.*\.js$/.test(f)).map(f => f.replace(/\.js$/, ""));
const errs = [];
const E = (where, msg) => errs.push(where + ": " + msg);
for (const f of files) {
  try { require(path.join(dir, f + ".js")); } catch (e) { E(f, "no carga: " + e.message); }
}
const LV = ["A1", "A2", "B1", "B2"], COLORS = ["sea", "hib", "sun", "leaf"], CAST = Object.keys(ES.cast), REG = Object.keys(ES.regions);
const str = v => typeof v === "string" && v.trim().length > 0;
const isMC = (opts, a) => Array.isArray(opts) && opts.length >= 2 && opts.every(str) && Number.isInteger(a) && a >= 0 && a < opts.length;
const hasEmoji = s => /\p{Extended_Pictographic}/u.test(s || "") || String(s || "").includes("⃣");

/* ---------- español ---------- */
const ids = new Set();
ES.units.forEach((u, i) => {
  const w = "isla " + (u.id || i);
  if (!str(u.id)) E(w, "falta id"); else if (ids.has(u.id)) E(w, "id repetido"); else ids.add(u.id);
  if (u.level && !LV.includes(u.level)) E(w, "level inválido " + u.level);
  ["title", "de", "en"].forEach(k => { if (!str(u[k])) E(w, "falta " + k); });
  if (!hasEmoji(u.pic) || !hasEmoji(u.sticker)) E(w, "pic/sticker deben ser emoji");
  if (!COLORS.includes(u.color)) E(w, "color inválido");
  if (!Array.isArray(u.words) || u.words.length < 8) E(w, "faltan palabras (mín. 8)");
  const pics = new Set();
  (u.words || []).forEach((x, k) => {
    ["es", "de", "en"].forEach(kk => { if (!str(x[kk])) E(w + " palabra " + k, "falta " + kk); });
    if (!hasEmoji(x.pic)) E(w + " palabra " + (x.es || k), "pic no es emoji");
    if (pics.has(x.pic)) E(w + " palabra " + x.es, "pic repetido en la isla"); pics.add(x.pic);
    if (x.vary) Object.keys(x.vary).forEach(r => { if (!REG.includes(r)) E(w + " palabra " + x.es, "región vary inválida " + r); });
  });
  if (!Array.isArray(u.story) || u.story.length < 6) E(w, "cuento demasiado corto");
  (u.story || []).forEach((l, k) => { if (!CAST.includes(l.who)) E(w + " línea " + k, "who inválido " + l.who); ["es", "de", "en"].forEach(kk => { if (!str(l[kk])) E(w + " línea " + k, "falta " + kk); }); });
  if (!Array.isArray(u.questions) || u.questions.length !== 3) E(w, "deben ser 3 preguntas");
  (u.questions || []).forEach((q, k) => { if (!str(q.q) || !str(q.de) || !str(q.en)) E(w + " pregunta " + k, "faltan textos"); if (!isMC(q.opts, q.a)) E(w + " pregunta " + k, "opts/a inválidos"); });
  if (!Array.isArray(u.phrases) || u.phrases.length < 4) E(w, "deben ser 4 frases");
  (u.phrases || []).forEach((p, k) => ["es", "de", "en"].forEach(kk => { if (!str(p[kk])) E(w + " frase " + k, "falta " + kk); }));
  if (!Array.isArray(u.slang) || u.slang.length !== 4) E(w, "deben ser 4 slang");
  (u.slang || []).forEach(s => { if (!ES.slang.find(x => x.es === s)) E(w, "slang no existe: " + s); });
  (u.tips || []).forEach((t, k) => ["es", "de", "en"].forEach(kk => { if (!str(t[kk])) E(w + " tip " + k, "falta " + kk); }));
  if (u.level && u.level !== "A1" && !(u.tips || []).length) E(w, "faltan tips");
});
const sl = new Set();
ES.slang.forEach((s, i) => { if (!str(s.es) || !REG.includes(s.r) || !str(s.de) || !str(s.en)) E("slang " + (s.es || i), "campos o región inválidos"); if (sl.has(s.es)) E("slang " + s.es, "repetido"); sl.add(s.es); });
Object.entries(ES.exams || {}).forEach(([lv, x]) => {
  const w = "examen ES " + lv;
  if (!LV.includes(lv)) E(w, "nivel inválido");
  if (!str(x.title)) E(w, "falta title");
  (x.escuchar || []).forEach((q, k) => { if (![...CAST, "narr"].includes(q.who)) E(w + " escuchar " + k, "who inválido"); if (!str(q.text) || !str(q.q) || !str(q.de)) E(w + " escuchar " + k, "faltan textos"); if (!isMC(q.opts, q.a)) E(w + " escuchar " + k, "opts/a"); });
  (x.leer || []).forEach((q, k) => { if (!str(q.text) || !str(q.q) || !str(q.de)) E(w + " leer " + k, "faltan textos"); if (!isMC(q.opts, q.a)) E(w + " leer " + k, "opts/a"); });
  ["escribir", "hablar"].forEach(p => (x[p] || []).forEach((t, k) => { if (!str(t.task) || !str(t.de) || !str(t.model)) E(w + " " + p + " " + k, "faltan textos"); }));
  if ((x.escuchar || []).length < 6 || (x.leer || []).length < 6 || (x.escribir || []).length < 2 || (x.hablar || []).length < 2) E(w, "faltan ítems (6/6/2/2)");
});

/* ---------- alemán ---------- */
const PL = /^(-|–|pl|¨|¨?-(e|en|n|s|er|nen|se|ien)|[A-ZÄÖÜ][a-zäöüß]+)$/;
const seenW = new Map();
DE.vocab.forEach((v, i) => {
  const w = "vocab " + (v[2] || i);
  if (!Array.isArray(v) || v.length !== 6) return E(w, "deben ser 6 campos");
  if (!DE.themes[v[0]]) E(w, "tema no existe " + v[0]);
  if (!["", "der", "die", "das"].includes(v[1])) E(w, "artículo inválido");
  if (!str(v[2]) || !str(v[4])) E(w, "faltan palabra o traducción");
  if (v[1] && !PL.test(v[3])) E(w, "plural raro: " + v[3]);
  if (v[0].endsWith("verben") && !/^(hat|ist) /.test(v[3])) E(w, "verbo sin Perfekt");
  const k = (v[1] + " " + v[2]).toLowerCase();
  if (seenW.has(k)) E(w, "repetida (también en " + seenW.get(k) + ")"); else seenW.set(k, v[0]);
});
Object.entries(DE.themes).forEach(([k, t]) => { if (!str(t.name) || !str(t.de)) E("tema " + k, "faltan name/de"); if (t.level && !LV.includes(t.level)) E("tema " + k, "level inválido"); });
const gids = new Set();
DE.grammar.forEach((g, i) => {
  const w = "gramática " + (g.id || i);
  if (gids.has(g.id)) E(w, "id repetido"); gids.add(g.id);
  if (!LV.includes(g.level)) E(w, "level inválido");
  ["title", "de", "rule", "trap"].forEach(k => { if (!str(g[k])) E(w, "falta " + k); });
  if (!Array.isArray(g.ex) || g.ex.length < 2) E(w, "faltan ejemplos");
  if (!Array.isArray(g.items) || g.items.length < 6) E(w, "faltan ejercicios");
  (g.items || []).forEach((it, k) => {
    const wi = w + " ítem " + k;
    if (it.t === "mc") { if (!str(it.q) || !isMC(it.o, it.a)) E(wi, "mc inválido"); }
    else if (it.t === "type") {
      const b = (it.q.match(/___/g) || []).length;
      if (!b) E(wi, "type sin ___");
      if (!Array.isArray(it.a) || !it.a.length || !it.a.every(str)) E(wi, "type sin respuestas");
      else if (b > 1 && it.a[0].split(" ").length !== b) E(wi, `type: ${b} huecos pero «${it.a[0]}» tiene ${it.a[0].split(" ").length} palabras`);
    } else if (it.t === "order") { if (!Array.isArray(it.w) || it.w.length < 3 || !it.w.every(str)) E(wi, "order inválido"); if (!str(it.es)) E(wi, "order sin es"); }
    else E(wi, "tipo desconocido " + it.t);
  });
});
const dids = new Set();
DE.dialogs.forEach((d, i) => {
  const w = "diálogo " + (d.id || i);
  if (dids.has(d.id)) E(w, "id repetido"); dids.add(d.id);
  if (!LV.includes(d.level)) E(w, "level inválido");
  if (!d.who || !Object.keys(d.who).length) E(w, "falta who");
  Object.entries(d.who || {}).forEach(([k, v]) => { if (!Array.isArray(v) || !str(v[0]) || !["f", "m"].includes(v[1])) E(w, "who " + k + " inválido"); });
  (d.lines || []).forEach((l, k) => { if (!d.who[l[0]]) E(w + " línea " + k, "hablante desconocido " + l[0]); if (!str(l[1]) || !str(l[2])) E(w + " línea " + k, "faltan textos"); });
  if ((d.lines || []).length < 8) E(w, "pocas líneas");
  if ((d.q || []).length !== 3) E(w, "deben ser 3 preguntas");
  (d.q || []).forEach((q, k) => { if (!str(q[0]) || !isMC(q[1], q[2])) E(w + " pregunta " + k, "inválida"); });
});
const tids = new Set();
DE.texts.forEach((t, i) => {
  const w = "lectura " + (t.id || i);
  if (tids.has(t.id)) E(w, "id repetido"); tids.add(t.id);
  if (!LV.includes(t.level)) E(w, "level inválido");
  if (!str(t.title) || !str(t.de)) E(w, "faltan títulos");
  if (!Array.isArray(t.paras) || t.paras.length < 3) E(w, "pocos párrafos");
  (t.paras || []).forEach((p, k) => { if (!str(p[0]) || !str(p[1])) E(w + " párrafo " + k, "faltan textos"); });
  if ((t.q || []).length !== 4) E(w, "deben ser 4 preguntas");
  (t.q || []).forEach((q, k) => { if (!str(q[0]) || !isMC(q[1], q[2])) E(w + " pregunta " + k, "inválida"); });
});
(DE.course || []).forEach(l => (l.items || []).forEach(([id, t, g]) => { if (!str(id) || !str(t)) E("curso " + l.lvl, "ítem inválido"); (g || []).forEach(x => { if (!gids.has(x)) E("curso " + l.lvl + " " + id, "gramática no existe: " + x); }); }));
Object.entries(DE.exams || {}).forEach(([lv, x]) => {
  const w = "examen DE " + lv;
  if (!["A2", "B1", "B2"].includes(lv)) E(w, "nivel inválido");
  if (!str(x.name) || !x.parts) E(w, "faltan name/parts");
  (x.hoeren || []).forEach((q, k) => { if (!str(q.text) || !str(q.q) || !isMC(q.o, q.a) || !Number.isInteger(q.n) || !Number.isInteger(q.teil)) E(w + " hören " + k, "inválido"); });
  (x.lesen || []).forEach((q, k) => { if (!str(q.text) || !str(q.q) || !isMC(q.o, q.a) || !Number.isInteger(q.teil)) E(w + " lesen " + k, "inválido"); });
  (x.schreiben || []).forEach((t, k) => { if (!str(t.task) || !Array.isArray(t.p) || !Number.isInteger(t.words) || !str(t.model)) E(w + " schreiben " + k, "inválido"); });
  (x.sprechen || []).forEach((t, k) => { if (!str(t.task) || !str(t.model)) E(w + " sprechen " + k, "inválido"); });
  if ((x.hoeren || []).length < 8 || (x.lesen || []).length < 8 || (x.schreiben || []).length < 2 || (x.sprechen || []).length < 2) E(w, "faltan ítems (8/8/2/2)");
});

const added = { islas: ES.units.length - before.units, slang: ES.slang.length - before.slang, vocab: DE.vocab.length - before.vocab, gramatica: DE.grammar.length - before.grammar, dialogos: DE.dialogs.length - before.dialogs, lecturas: DE.texts.length - before.texts };
console.log("Archivos:", files.join(", "));
console.log("Añadido:", JSON.stringify(added));
if (errs.length) { console.log(errs.length + " errores:"); errs.slice(0, 120).forEach(e => console.log(" - " + e)); process.exit(1); }
console.log("OK");
