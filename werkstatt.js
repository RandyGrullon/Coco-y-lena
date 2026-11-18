/* Werkstatt Ü — el taller de alemán. Pensado primero para el celular. */
$("#css-werk").textContent = `
.werk h1,.werk h2,.werk h3,.wf{font-family:var(--f-de)}
@media (max-width:900px){body[data-world="werk"]{--navh:70px}}
.tnav{display:flex;gap:6px;overflow-x:auto;scrollbar-width:none;margin-bottom:18px}
.tnav::-webkit-scrollbar{display:none}
.tnav a{white-space:nowrap;text-decoration:none;padding:9px 14px;border-radius:999px;font:600 15px var(--f-de);background:var(--surface);border:2px solid var(--line);display:flex;gap:6px;align-items:center}
.tnav a[aria-current="page"]{background:var(--ink);color:var(--bg);border-color:var(--ink)}
.bnav{display:none}
@media (max-width:900px){
  .tnav{display:none}
  .bnav{display:grid;grid-template-columns:repeat(5,1fr);position:fixed;left:0;right:0;bottom:0;z-index:24;background:var(--surface);border-top:1px solid var(--line);padding:6px max(8px,env(safe-area-inset-right,0px)) calc(6px + env(safe-area-inset-bottom,0px)) max(8px,env(safe-area-inset-left,0px));box-shadow:0 -6px 20px rgba(0,0,0,.06)}
  .bnav a,.bnav button{border:0;background:transparent;text-decoration:none;display:grid;justify-items:center;gap:2px;font:600 11.5px var(--f-de);color:var(--ink-2);padding:4px 0;min-height:54px;border-radius:14px}
  .bnav .i{font-size:23px;line-height:1.1}
  .bnav [aria-current="page"]{color:var(--ink);background:var(--surface-2)}
}
.whead{display:flex;gap:12px;align-items:center;margin-bottom:14px}
.whead .ic{width:52px;height:52px;border-radius:16px;display:grid;place-items:center;font-size:28px;background:var(--surface-2);flex:none}
.whead h1{font-size:clamp(24px,5vw,32px);line-height:1.1}
.whead p{color:var(--ink-2);font-size:15px}
.wlabel{font:600 12px/1.2 var(--f-de);letter-spacing:.1em;text-transform:uppercase;color:var(--ink-2)}
.coach{display:flex;gap:12px;align-items:flex-start;background:linear-gradient(160deg,var(--coach-2),var(--surface));border:2px solid var(--line);border-radius:24px;padding:14px}
.coach .bub2{flex:1;min-width:0;display:grid;gap:2px}
.coach .de{font:600 19px/1.3 var(--f-de)}
.coach .es{color:var(--ink-2);font-size:14px}
.lvlcard{display:grid;gap:8px}
.lvlrow{display:flex;gap:10px;align-items:center;flex-wrap:wrap}
.lvlname{font:700 20px var(--f-de)}
.xpbar{height:14px;border-radius:99px;background:var(--surface-2);overflow:hidden}
.xpbar i{display:block;height:100%;border-radius:99px;background:linear-gradient(90deg,var(--coach),#FFC531)}
.hgrid{display:grid;grid-template-columns:minmax(0,1.25fr) minmax(0,1fr);gap:16px;align-items:start}
.hgrid>*{min-width:0}
.two{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;align-items:start}
.plan{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
.pcard{position:relative;text-decoration:none;background:var(--surface);border:2px solid var(--line);border-radius:22px;padding:14px;display:grid;gap:4px;align-content:start;min-height:136px;box-shadow:var(--shadow)}
.pcard .ic{font-size:30px}
.pcard b{font:700 17px/1.2 var(--f-de)}
.pcard .muted{font-size:13.5px;line-height:1.35}
.pcard .min{position:absolute;right:12px;top:12px;font:600 12px var(--f-de);color:var(--ink-2);background:var(--surface-2);border-radius:99px;padding:3px 8px}
.pcard.ok{border-color:var(--ok);background:color-mix(in srgb,var(--ok) 8%,var(--surface))}
.pcard.ok .min{background:var(--ok);color:#fff}
.week{display:flex;gap:8px;align-items:flex-end;height:96px}
.week .d{flex:1;display:grid;justify-items:center;gap:4px;font:600 12px var(--f-de);color:var(--ink-2)}
.week .b{width:100%;max-width:30px;border-radius:8px 8px 4px 4px;background:var(--surface-2);min-height:6px}
.week .b.on{background:var(--coach)}
.week .d.today{color:var(--ink)}
.badges{display:flex;gap:10px;overflow-x:auto;padding-bottom:4px;scrollbar-width:thin}
.bdg{flex:none;width:104px;text-align:center;display:grid;gap:4px;justify-items:center;font:600 12.5px/1.25 var(--f-de)}
.bdg .m{width:62px;height:62px;border-radius:50%;display:grid;place-items:center;font-size:30px;background:var(--sun-2);box-shadow:inset 0 0 0 3px #F5D58A}
.bdg.locked .m{background:var(--surface-2);box-shadow:none;filter:grayscale(1);opacity:.4}
.tiles{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}
.tile{background:var(--surface);border:2px solid var(--line);border-radius:18px;padding:12px}
.tile b{font:700 26px/1 var(--f-de);display:block;font-variant-numeric:tabular-nums;margin-top:4px}
.a-der{color:var(--der)} .a-die{color:var(--die)} .a-das{color:var(--das)} .a-pl{color:var(--pl)}
.artkey{display:flex;gap:12px;flex-wrap:wrap;font:600 14px var(--f-de)}
.artkey span::before{content:"";display:inline-block;width:10px;height:10px;border-radius:3px;margin-right:5px;background:currentColor}
.sess{max-width:600px;margin:0 auto;display:grid;gap:14px}
.sbar{display:flex;gap:10px;align-items:center}
.sbar .bar{flex:1}
.fc{perspective:1400px;width:100%}
.fc-in{position:relative;min-height:min(340px,52vh);transition:transform .55s cubic-bezier(.3,.9,.3,1);transform-style:preserve-3d;cursor:pointer}
.fc.flip .fc-in{transform:rotateY(180deg)}
.fc-face{position:absolute;inset:0;-webkit-backface-visibility:hidden;backface-visibility:hidden;border-radius:28px;background:var(--surface);border:2px solid var(--line);box-shadow:var(--shadow);display:grid;align-content:center;justify-items:center;gap:12px;text-align:center;padding:24px 18px;overflow:auto}
.fc-face::before{content:"";position:absolute;left:0;right:0;top:0;height:10px;border-radius:28px 28px 0 0;background:var(--stripe,var(--surface-2))}
.fc-back{transform:rotateY(180deg)}
.fc .w{font:700 clamp(30px,8vw,44px)/1.1 var(--f-de);word-break:break-word}
.fc .es{font-size:21px;font-weight:700}
.fc .ex{color:var(--ink-2);font-style:italic}
.fc .hint{font:600 13px var(--f-de);color:var(--ink-2)}
.tagnew{font:700 12px/1 var(--f-de);letter-spacing:.08em;background:var(--coach);color:#fff;border-radius:99px;padding:5px 10px}
.grades{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px}
.grades button{border:2px solid var(--line);background:var(--surface);border-radius:18px;padding:10px 4px;display:grid;justify-items:center;gap:2px;font:700 14px var(--f-de);min-height:76px}
.grades .e{font-size:24px}
.grades small{font-weight:500;color:var(--ink-2);font-size:11.5px}
.grades .sug{border-color:var(--ink);box-shadow:inset 0 0 0 2px var(--ink)}
.uml{display:flex;gap:6px;justify-content:center;flex-wrap:wrap}
.uml button{border:2px solid var(--line);background:var(--surface-2);border-radius:12px;width:46px;height:44px;font:700 18px var(--f-de)}
.fb{border-radius:16px;padding:12px 14px;font-weight:700}
.fb.ok{background:color-mix(in srgb,var(--ok) 14%,transparent);color:var(--ok)}
.fb.bad{background:color-mix(in srgb,var(--bad) 12%,transparent);color:var(--bad)}
.fb.mid{background:var(--sun-2);color:var(--ink)}
.boxbar{display:flex;height:16px;border-radius:99px;overflow:hidden;background:var(--surface-2)}
.boxbar i{display:block;height:100%}
.legend{display:flex;gap:14px;flex-wrap:wrap;font-size:13px;color:var(--ink-2);margin-top:8px}
.legend span::before{content:"";display:inline-block;width:10px;height:10px;border-radius:3px;margin-right:5px;background:var(--c)}
.wrow{display:grid;grid-template-columns:auto minmax(0,1.3fr) minmax(0,1fr) auto;gap:10px;align-items:center;padding:8px 4px;border-bottom:1px solid var(--line)}
.wrow .w{font:600 17px/1.25 var(--f-de)}
.wrow .pl{font-size:12.5px;color:var(--ink-2)}
.dotbox{display:flex;gap:2px}
.dotbox i{width:6px;height:14px;border-radius:2px;background:var(--surface-2)}
.dotbox i.on{background:var(--das)}
.cards{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:12px}
.tcard{background:var(--surface);border:2px solid var(--line);border-radius:22px;padding:14px;text-decoration:none;display:grid;gap:6px;align-content:start;box-shadow:var(--shadow)}
.tcard .top{display:flex;gap:8px;align-items:center}
.tcard .ic{font-size:26px}
.tcard h3{font-size:18px}
.lvl{font:700 11px/1 var(--f-de);letter-spacing:.06em;padding:4px 7px;border-radius:6px;background:#FFC531;color:#3A2A00}
.lvl.a2{background:var(--pl);color:#fff}
.seen{font:600 11px/1 var(--f-de);letter-spacing:.04em;color:var(--das)}
.rule{font-size:17px;line-height:1.6}
.trap{background:var(--sun-2);border-radius:20px;padding:14px 16px}
.exde{font:500 18px/1.35 var(--f-de)}
.drill{max-width:680px;display:grid;gap:14px}
.drill .q{font:600 clamp(20px,4.6vw,25px)/1.35 var(--f-de)}
.mcopts{display:grid;gap:10px}
.mcopt{text-align:left;border:2px solid var(--line);background:var(--surface);border-radius:18px;padding:13px 16px;font:500 18px/1.3 var(--f-de);min-height:54px}
.mcopt.ok{border-color:var(--ok);background:color-mix(in srgb,var(--ok) 12%,var(--surface))}
.mcopt.bad{border-color:var(--bad);background:color-mix(in srgb,var(--bad) 10%,var(--surface));animation:shake .35s}
@keyframes shake{25%{transform:translateX(-6px)}75%{transform:translateX(6px)}}
.ans{min-height:60px;border:2px dashed var(--line);border-radius:18px;padding:8px;display:flex;flex-wrap:wrap;gap:8px}
.tk{border:2px solid var(--line);background:var(--surface);border-radius:14px;padding:10px 12px;font:500 18px/1 var(--f-de);min-height:46px}
.tk.used{visibility:hidden}
.combo-w{font:700 15px var(--f-de);color:#E2562B}
.ctrl{position:sticky;top:calc(var(--toph) + env(safe-area-inset-top,0px));z-index:5;background:var(--bg);padding:8px 0;display:grid;gap:8px}
.chat2{display:grid;gap:10px}
.cl{display:flex;gap:8px;align-items:flex-end;max-width:92%}
.cl.r{flex-direction:row-reverse;justify-self:end}
.cl .av{width:38px;height:38px;border-radius:50%;display:grid;place-items:center;font:700 15px var(--f-de);color:#fff;flex:none}
.cl .bb{border-radius:20px;padding:10px 14px;background:var(--surface);border:2px solid var(--line);display:grid;gap:3px;min-width:0}
.cl.r .bb{background:var(--surface-2)}
.cl.on .bb{border-color:#FFC531;box-shadow:0 0 0 3px color-mix(in srgb,#FFC531 40%,transparent)}
.cl .nm{font:600 11.5px var(--f-de);color:var(--ink-2)}
.cl .lt{font:500 18px/1.4 var(--f-de)}
.cl .les{color:var(--ink-2);font-size:14px}
.cl .say{width:38px;height:38px}
.diff .okw{color:var(--ok);font-weight:700} .diff .badw{color:var(--bad);text-decoration:underline wavy}
.repeat{font:700 15px var(--f-de);color:var(--hib)}
.pairs{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;max-width:520px;margin:0 auto;width:100%}
.pairbtn{border:2px solid var(--line);background:var(--surface);border-radius:22px;padding:26px 10px;font:700 clamp(24px,6vw,32px)/1 var(--f-de);box-shadow:0 4px 0 var(--line)}
.pairbtn.ok{border-color:var(--ok);background:color-mix(in srgb,var(--ok) 12%,var(--surface))}
.pairbtn.bad{border-color:var(--bad);background:color-mix(in srgb,var(--bad) 10%,var(--surface))}
.vname{font:600 13px var(--f-de);background:var(--surface-2);border-radius:99px;padding:4px 10px}
.slg{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:12px}
.sl{background:var(--surface);border:2px solid var(--line);border-radius:22px;padding:14px;display:grid;gap:6px;align-content:start}
.sl .d{font:700 22px/1.15 var(--f-de)}
.reg{font:600 11px/1 var(--f-de);letter-spacing:.05em;text-transform:uppercase;padding:5px 7px;border-radius:6px;background:var(--surface-2)}
.reg.hot{background:color-mix(in srgb,var(--bad) 16%,transparent);color:var(--bad)}
.cal .ev{display:grid;grid-template-columns:88px 1fr;gap:14px;padding:10px 0;border-bottom:1px solid var(--line)}
.cal .ev.past{opacity:.5}
.cal .dd{font:700 15px/1.2 var(--f-de)}
.cal .dd small{display:block;font-weight:500;color:var(--ink-2)}
.tmsg{max-width:90%;padding:12px 14px;border-radius:20px;display:grid;gap:6px}
.tmsg.me{justify-self:end;background:var(--ink);color:var(--bg);border-bottom-right-radius:6px}
.tmsg.ai{justify-self:start;background:var(--surface);border:2px solid var(--line);border-bottom-left-radius:6px}
.tmsg .de{font:500 18px/1.4 var(--f-de)}
.fix{background:var(--sun-2);color:var(--ink);border-radius:12px;padding:8px 10px;font-size:14px}
.chk{display:flex;gap:12px;align-items:flex-start;padding:10px 0;border-bottom:1px solid var(--line)}
.chk input{width:24px;height:24px;margin-top:1px;flex:none;accent-color:var(--das)}
.kw{display:flex;gap:8px;flex-wrap:wrap}
.kw span{border:2px solid var(--line);border-radius:12px;padding:6px 10px;font:600 15px var(--f-de)}
.kw span.ok{border-color:var(--ok);color:var(--ok)} .kw span.no{border-color:var(--bad);color:var(--bad)}
.thcard{border:3px solid var(--ink);border-radius:18px;padding:12px 16px;text-align:center;min-width:150px}
.thcard small{display:block;font:600 11px var(--f-de);letter-spacing:.08em;text-transform:uppercase;color:var(--ink-2)}
.thcard b{font:700 24px var(--f-de)}
.picard{font-size:64px;line-height:1}
.abc{display:flex;flex-wrap:wrap;gap:6px}
.abc button{border:2px solid var(--line);background:var(--surface);border-radius:12px;padding:6px 8px;font:600 15px var(--f-de);min-width:54px;min-height:50px}
.abc button small{display:block;color:var(--ink-2);font-weight:500;font-size:11px}
.sheet a{display:flex;gap:12px;align-items:center;padding:12px;border-radius:16px;text-decoration:none;background:var(--surface-2);font:600 17px var(--f-de);text-align:left}
.sheet a .i{font-size:26px}
.sheet{display:grid;gap:8px;width:100%}
@media (max-width:900px){.hgrid{grid-template-columns:minmax(0,1fr)}}
@media (max-width:700px){.two{grid-template-columns:minmax(0,1fr)}}
@media (max-width:560px){
  .tiles{grid-template-columns:repeat(2,minmax(0,1fr))}
  .plan{gap:10px}.pcard{min-height:128px;padding:12px}
  .grades{grid-template-columns:repeat(2,minmax(0,1fr))}
  .wrow{grid-template-columns:auto minmax(0,1fr) auto}.wrow .es{grid-column:2/3}
  .cal .ev{grid-template-columns:70px 1fr}
}`;

window.Werk = (() => {
  const D = window.DE;
  const T = () => S.de;
  const BASE = D.vocab.map((v, i) => ({ id: v[0] + ":" + v[2], th: v[0], art: v[1], w: v[2], pl: v[3], es: v[4], ex: v[5], i }));
  const allCards = () => [...BASE, ...T().custom];
  const isNoun = c => ["der", "die", "das"].includes(c.art);
  const wTag = c => (c.i == null ? "de-f" : c.i % 2 ? "de-m" : "de-f");
  const eTag = c => (c.i == null ? "de-m" : c.i % 2 ? "de-f" : "de-m");
  const uml = w => w.replace(/(Au|au|a|o|u|A|O|U)(?=[^aouAOU]*$)/, m => ({ a: "ä", o: "ö", u: "ü", au: "äu", A: "Ä", O: "Ö", U: "Ü", Au: "Äu" })[m]);
  function plural(c) {
    if (!c.pl) return "";
    if (!isNoun(c)) return c.pl;
    const p = c.pl;
    if (p === "pl") return "solo plural"; if (p === "–") return "sin plural";
    if (p === "-") return "die " + c.w; if (p === "¨") return "die " + uml(c.w);
    if (p.startsWith("¨-")) return "die " + uml(c.w) + p.slice(2);
    if (p.startsWith("-")) return "die " + c.w + p.slice(1);
    return "die " + p;
  }
  const artCls = c => (c.pl === "pl" ? "a-pl" : "a-" + c.art);
  const artVar = c => (!isNoun(c) ? "var(--surface-2)" : c.pl === "pl" ? "var(--pl)" : "var(--" + c.art + ")");
  const wordHtml = c => (isNoun(c) ? `<span class="${artCls(c)}">${c.art}</span> ${esc(c.w)}` : esc(c.w));
  const wordText = c => (isNoun(c) ? c.art + " " + c.w : c.w);
  const nx = s => deUml(norm(s));
  const sayDe = (tag, t, btn) => speak(tag, t, { btn });
  const PAIR_TAGS = [["de-f", "Tanja · DE"], ["de-m", "Christoph · DE"], ["de-f2", "Ingrid · AT"], ["de-m2", "Jonas · AT"], ["de-f3", "Leni · CH"], ["de-m3", "Jan · CH"]];
  const DAYS = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];

  /* ---------- XP, niveles, insignias ---------- */
  let combo = 0;
  function addXP(n, el) {
    if (n <= 0) return;
    const before = levelOf(T().xp || 0).i;
    T().xp = (T().xp || 0) + n; save(); floatText("+" + n + " XP", el);
    const after = levelOf(T().xp);
    if (after.i > before) setTimeout(() => {
      const [de, es] = D.coach.level[0];
      overlay(`<span class="lena" style="--s:96px">👩🏼‍🔧</span><h2 class="wf">${esc(after.name)}</h2><p class="muted">${esc(es)}</p><p class="wf" style="font-size:18px">«${esc(de)}»</p><button class="btn primary" data-act="ov-ok">Weiter</button>`, { "ov-ok": closeOverlay });
      SFX.play("level"); confetti(); speak("de-f", de);
    }, 700);
  }
  function good(el, xp = 5) {
    combo++; SFX.play("ok"); addXP(xp, el);
    if (combo % 3 === 0) { setTimeout(() => SFX.play("combo"), 200); addXP(5); }
    const c = $("#combo"); if (c) { c.hidden = combo < 2; c.textContent = "🔥 " + combo + " seguidas"; }
  }
  function bad() { combo = 0; SFX.play("bad"); vibrate(40); const c = $("#combo"); if (c) c.hidden = true; }
  function badges() {
    const t = T(), st = t.srs, firm = Object.values(st).filter(c => c.b >= 4).length;
    const a1 = D.grammar.filter(g => g.level === "A1");
    const ex = t.exam, exSum = ["hoeren", "lesen", "schreiben", "sprechen"].every(k => ex[k] != null) ? ["hoeren", "lesen", "schreiben", "sprechen"].reduce((a, k) => a + ex[k], 0) : 0;
    const pr = Object.values(t.pron).reduce((a, r) => ({ ok: a.ok + r.ok, n: a.n + r.n }), { ok: 0, n: 0 });
    return [
      ["🔨", "Erster Tag", Object.keys(t.days).length >= 1],
      ["🔥", "7 Tage am Stück", t.streak.n >= 7],
      ["🧠", "50 Wörter fest", firm >= 50],
      ["📚", "150 Wörter fest", firm >= 150],
      ["⏳", "Perfekt-Profi", ((t.gym.perfekt || {}).best || 0) >= 80],
      ["🏗️", "A1-Grammatik", a1.every(g => ((t.gym[g.id] || {}).best || 0) >= 80)],
      ["👂", "Feines Ohr", pr.n >= 50 && pr.ok / pr.n >= .8],
      ["🎧", "Alle Dialoge", D.dialogs.every(d => (t.dlg[d.id] || {}).q != null)],
      ["🎓", "Prüfungsreif", exSum >= 60],
      ["💬", "Plaudertasche", (t.tutorN || 0) >= 20]
    ];
  }

  /* ---------- navegación ---------- */
  const NAV = [["", "🏠", "Hoy"], ["wortschatz", "🃏", "Wörter"], ["grammatik", "🧩", "Grammatik"], ["hoeren", "🎧", "Hören"], ["aussprache", "👂", "Aussprache"], ["pruefung", "🎓", "Prüfung"], ["umgangssprache", "🗣️", "Umgangssprache"], ["kultur", "🎄", "Kultur"], ["tutor", "💬", "Tutor IA"], ["kurs", "✅", "Mi curso"]];
  const href = k => "#werkstatt" + (k ? "-" + k : "");
  function navs(cur) {
    const main = ["", "wortschatz", "grammatik", "hoeren"], inMore = !main.includes(cur);
    return `<nav class="tnav" aria-label="Secciones">${NAV.map(([k, i, l]) => `<a href="${href(k)}" aria-current="${k === cur ? "page" : "false"}"><span>${i}</span>${l}</a>`).join("")}</nav>
      <nav class="bnav" aria-label="Secciones">${NAV.filter(n => main.includes(n[0])).map(([k, i, l]) => `<a href="${href(k)}" aria-current="${k === cur ? "page" : "false"}"><span class="i">${i}</span>${l}</a>`).join("")}
      <button data-act="more" aria-current="${inMore ? "page" : "false"}"><span class="i">☰</span>Más</button></nav>`;
  }
  const MOREACT = {
    more: () => overlay(`<h2 class="wf" style="font-size:22px">Más del taller</h2><div class="sheet">${NAV.slice(4).map(([k, i, l]) => `<a href="${href(k)}"><span class="i">${i}</span>${l}</a>`).join("")}</div><button class="btn" data-act="ov-x">Cerrar</button>`, { "ov-x": closeOverlay })
  };
  const page = (cur, html, act = {}) => { combo = 0; view(`<div class="wrap werk">${navs(cur)}${html}</div>`, { ...MOREACT, ...act }); };
  const whead = (ic, title, sub, bg) => `<div class="whead"><span class="ic" style="${bg ? "background:" + bg : ""}">${ic}</span><div><h1>${esc(title)}</h1>${sub ? `<p>${sub}</p>` : ""}</div></div>`;

  function plan() {
    const p = T().plan, t = today();
    if (!p[t]) { const lim = fmtDay(new Date(Date.now() - 14 * DAY)); Object.keys(p).forEach(k => { if (k < lim) delete p[k]; }); p[t] = { srs: false, gram: false, hoer: false, out: false }; }
    return p[t];
  }
  function planDone(k) {
    const p = plan(); if (p[k]) return; p[k] = true; save(); addXP(10);
    if (p.srs && p.gram && p.hoer && p.out) setTimeout(() => {
      const [de, es] = one(D.coach.done); addXP(20);
      overlay(`<span class="lena" style="--s:96px">👩🏼‍🔧</span><h2 class="wf">Plan de hoy completo</h2><p class="wf" style="font-size:18px">«${esc(de)}»</p><p class="muted">${esc(es)}</p><div class="rw-coins" style="font:700 26px var(--f-de);color:var(--coach)">+20 XP</div><button class="btn primary" data-act="ov-ok">Fertig!</button>`, { "ov-ok": closeOverlay });
      SFX.play("level"); confetti(); speak("de-f", de);
    }, 900);
  }
  function seenTopics() { const s = new Set(); D.course.forEach(l => l.items.forEach(([id, , g]) => { if (T().course[id]) g.forEach(x => s.add(x)); })); return s; }
  function suggestTopic() {
    const seen = seenTopics(), gym = T().gym;
    let list = D.grammar.filter(g => (seen.size ? seen.has(g.id) : g.level === "A1")); if (!list.length) list = D.grammar;
    const sc = g => { const r = gym[g.id]; if (!r) return -1; return r.best + (r.last === today() ? 200 : 0); };
    return [...list].sort((a, b) => sc(a) - sc(b))[0];
  }
  function suggestDialog() { const d = T().dlg, use = x => { const r = d[x.id] || {}; return (r.n || 0) + (r.q != null ? 1 : 0); }; return [...D.dialogs].sort((a, b) => use(a) - use(b))[0]; }
  function newLeft() { const nt = T().newToday; if (nt.d !== today()) { nt.d = today(); nt.n = 0; } return Math.max(0, T().newPerDay - nt.n); }
  function buildQueue() {
    const st = T().srs, all = allCards();
    const due = all.filter(c => st[c.id] && isDue(st[c.id])).sort((a, b) => st[a.id].d - st[b.id].d).slice(0, 60);
    const fresh = all.filter(c => !st[c.id] && (T().themes.includes(c.th) || c.th === "mine")).sort((a, b) => (b.th === "mine") - (a.th === "mine")).slice(0, newLeft());
    return [...due, ...fresh];
  }

  /* ================= HOY ================= */
  let greeted = false;
  function hoy() {
    AUD.prefetch("d-coach");
    const t = T(), st = t.srs, all = allCards();
    const due = all.filter(c => st[c.id] && isDue(st[c.id])).length, nl = newLeft();
    const p = plan(), g = suggestTopic(), d = suggestDialog();
    const L = levelOf(t.xp || 0), pct = L.next ? Math.round(((t.xp || 0) - L.min) / (L.next - L.min) * 100) : 100;
    const [hde, hes] = D.coach.hello[Math.floor(Date.now() / DAY) % D.coach.hello.length];
    const chunks = BASE.filter(c => c.th === "chunk"), chunk = chunks[Math.floor(startOfDay(Date.now()) / DAY) % chunks.length];
    const daysTo = s => Math.round((new Date(s + "T12:00").getTime() - new Date(today() + "T12:00").getTime()) / DAY);
    const nextW = D.winter.find(x => x.d >= today()), goal = t.goal, gd = goal.date ? daysTo(goal.date) : null;
    const week = Array.from({ length: 7 }, (_, k) => { const dt = new Date(Date.now() - (6 - k) * DAY); return { k: fmtDay(dt), l: DAYS[dt.getDay()], v: t.days[fmtDay(dt)] || 0 }; });
    const maxW = Math.max(10, ...week.map(w => w.v));
    const dateDe = new Date().toLocaleDateString("de-DE", { weekday: "long", day: "numeric", month: "long" });
    const pc = (k, h, ic, title, sub, min) => `<a class="pcard ${p[k] ? "ok" : ""}" href="${h}"><span class="min">${p[k] ? "✓ hecho" : min}</span><span class="ic">${ic}</span><b>${title}</b><span class="muted">${sub}</span></a>`;
    page("", `
      <div class="hgrid">
        <div class="stack">
          <div class="coach"><span class="lena" style="--s:60px">👩🏼‍🔧</span><div class="bub2"><span class="wlabel">Lena · ${esc(dateDe)}</span><span class="de">${esc(hde)}</span><span class="es">${esc(hes)}</span></div>${sayBtn(hde, "de-f")}</div>
          <div class="plan">
            ${pc("srs", "#werkstatt-repaso", "🃏", "Tarjetas", `${due} por repasar · ${nl} nuevas`, "5 min")}
            ${pc("gram", "#werkstatt-grammatik-" + g.id, "🧩", esc(g.title), seenTopics().has(g.id) ? "Lo viste en clase" : "Regla + ejercicios", "5 min")}
            ${pc("hoer", "#werkstatt-hoeren-" + d.id, "🎧", esc(d.title), "Escucha, repite y responde", "5 min")}
            ${pc("out", aiOK() ? "#werkstatt-tutor" : "#werkstatt-pruefung-sprechen", "💬", aiOK() ? "Conversar con el tutor" : "Hablar: examen oral", aiOK() ? "Te corrige sin cortar la charla" : "Preséntate, pregunta, pide", "5 min")}
          </div>
          <div class="card stack" style="gap:8px"><span class="wlabel">Frase del día</span>
            <div class="row" style="flex-wrap:nowrap">${sayBtn(chunk.w, wTag(chunk))}<div><div class="exde">${esc(chunk.w)}</div><div class="muted small">${esc(chunk.es)}</div></div></div></div>
        </div>
        <div class="stack">
          <div class="card lvlcard"><div class="lvlrow"><span class="wlabel">Tu nivel</span><span class="spacer"></span><span class="wlabel">🔥 ${streakNow("de")} días</span></div>
            <div class="lvlrow"><span class="lvlname">${esc(L.name)}</span><span class="muted small">${t.xp || 0} XP${L.next ? " · faltan " + (L.next - (t.xp || 0)) : ""}</span></div>
            <div class="xpbar"><i style="width:${pct}%"></i></div>
            ${gd != null ? `<span class="small">⏳ ${gd > 0 ? gd + " días para" : gd === 0 ? "Hoy:" : "Pasó:"} <b>${esc(goal.label || "tu meta")}</b></span>` : ""}</div>
          <div class="card"><span class="wlabel">Esta semana</span>
            <div class="week" style="margin-top:10px">${week.map(w => `<div class="d ${w.k === today() ? "today" : ""}"><span class="b ${w.v ? "on" : ""}" style="height:${Math.max(6, w.v / maxW * 70)}px"></span>${w.l}</div>`).join("")}</div></div>
          <div class="card"><span class="wlabel">Abzeichen · insignias</span>
            <div class="badges" style="margin-top:10px">${badges().map(([i, n, ok]) => `<div class="bdg ${ok ? "" : "locked"}"><span class="m">${i}</span>${esc(n)}</div>`).join("")}</div></div>
          ${nextW ? `<div class="card stack" style="gap:4px"><span class="wlabel">Calendario de invierno</span><b class="wf">${esc(nextW.t)} <span class="muted small">· ${daysTo(nextW.d) === 0 ? "hoy" : "en " + daysTo(nextW.d) + " días"}</span></b><p class="muted small">${esc(nextW.e)}</p><a class="small" href="#werkstatt-kultur">Ver el calendario →</a></div>` : ""}
          <details class="card"><summary class="wlabel" style="cursor:pointer">Tu meta (examen, viaje…)</summary>
            <div class="stack" style="margin-top:10px"><input id="g-l" value="${esc(goal.label)}" placeholder="Examen A1, fin del curso…"><input id="g-d" type="date" value="${esc(goal.date)}"><button class="btn" data-act="g-save">Guardar</button></div></details>
        </div>
      </div>`, {
      "g-save": () => { t.goal = { label: $("#g-l").value.trim(), date: $("#g-d").value }; save(); hoy(); toast("Meta guardada"); }
    });
    if (!greeted && AUD.running()) { greeted = true; setTimeout(() => speak("de-f", hde), 300); }
  }

  /* ================= TARJETAS ================= */
  function previewDays(c, g) {
    const tmp = srsGrade({ ...(c || { b: 0 }) }, g), ms = tmp.d - Date.now();
    if (ms < 3600e3) return Math.max(1, Math.round(ms / 60e3)) + " min";
    const d = Math.round(ms / DAY); return d <= 1 ? "1 día" : d + " días";
  }
  function checkTyped(c, raw) {
    raw = raw.trim();
    if (!raw) return { g: 0, msg: "Escribe algo: intentar recordar es lo que fija la palabra." };
    if (isNoun(c)) {
      const m = raw.match(/^(der|die|das)\s+(.+)$/i), art = m ? m[1].toLowerCase() : "", word = (m ? m[2] : raw).trim();
      const wOk = nx(word) === nx(c.w), wClose = !wOk && lev(nx(word), nx(c.w)) <= 1, aOk = art === c.art;
      const cap = word[0] && word[0] === word[0].toUpperCase();
      if (wOk && aOk) return { g: 2, ok: true, msg: cap ? "¡Correcto!" : "¡Correcto! Ojo: los sustantivos van con mayúscula." };
      if (wOk && !art) return { g: 1, msg: `Bien, pero falta el artículo: «${c.art} ${c.w}». Apréndelos siempre juntos.` };
      if (wOk) return { g: 1, msg: `La palabra está bien, pero el artículo es «${c.art}».` };
      if (wClose && aOk) return { g: 1, msg: `Casi: se escribe «${c.w}».` };
      return { g: 0, msg: `Era «${c.art} ${c.w}».` };
    }
    const s = sim(deUml(raw), deUml(c.w));
    if (s >= .97) return { g: 2, ok: true, msg: "¡Correcto!" };
    if (s >= .8) return { g: 1, msg: `Casi. Forma exacta: «${c.w}».` };
    return { g: 0, msg: `Era «${c.w}».` };
  }
  function repaso() {
    const q = buildQueue();
    [...new Set(q.map(c => c.th))].forEach(th => AUD.prefetch("d-v-" + th));
    if (!q.length) return page("wortschatz", `<div class="sess"><div class="card stack" style="text-align:center;justify-items:center"><span style="font-size:64px">✨</span><h2 class="wf">Nada pendiente</h2><p class="muted">Las tarjetas vuelven justo cuando empiezan a olvidarse. Mientras, añade las palabras de tu clase.</p><div class="row" style="justify-content:center"><a class="btn primary" href="#werkstatt-wortschatz">Añadir palabras</a><a class="btn" href="#werkstatt">Volver a Hoy</a></div></div></div>`);
    let i = 0, n = 0, rightN = 0; const again = new Set(), st = T().srs;
    function show() {
      if (i >= q.length) return end();
      const c = q[i], s = st[c.id], mode = !s ? "new" : s.b <= 2 ? "recog" : "prod", pl = plural(c);
      const sbar = `<div class="sbar"><a class="btn sm ghost" href="#werkstatt" aria-label="Salir">${ICON.close}</a><div class="bar"><i style="width:${i / q.length * 100}%;background:var(--coach)"></i></div><span class="wlabel">${i + 1}/${q.length}</span></div><span class="combo-w" id="combo" hidden></span>`;
      const back = `<div class="w">${wordHtml(c)}</div>${pl ? `<div class="muted">${isNoun(c) ? "Plural: " : "Perfekt: "}${esc(pl)}</div>` : ""}<div class="es">${esc(c.es)}</div>${c.ex ? `<div class="row" style="justify-content:center;flex-wrap:nowrap">${sayBtn(c.ex, eTag(c))}<span class="ex">${esc(c.ex)}</span></div>` : ""}`;
      const gradesHtml = sug => `<div class="grades">${[["😵", "Otra vez"], ["😅", "Difícil"], ["🙂", "Bien"], ["😎", "Fácil"]].map(([e, l], g) => `<button class="${sug === g ? "sug" : ""}" data-act="grade" data-g="${g}"><span class="e">${e}</span>${l}<small>${previewDays(s, g)}</small></button>`).join("")}</div>`;
      let html;
      if (mode === "new") {
        html = `${sbar}<div class="fc"><div class="fc-in" style="cursor:default"><div class="fc-face" style="--stripe:${artVar(c)};position:relative;min-height:min(340px,52vh)"><span class="tagnew">NUEVA</span>${back}${sayBtn(wordText(c), wTag(c))}</div></div></div>
          <button class="btn primary" data-act="learned" style="min-height:56px">Entendido → la practico</button><p class="small muted" style="text-align:center">Dila en voz alta. En unos minutos te la pregunto.</p>`;
      } else if (mode === "recog") {
        html = `${sbar}<div class="fc" id="fc"><div class="fc-in" data-act="flip">
            <div class="fc-face" style="--stripe:${artVar(c)}"><div class="w">${wordHtml(c)}</div><span class="hint">¿Qué significa? Piénsalo y toca la tarjeta</span></div>
            <div class="fc-face fc-back" style="--stripe:${artVar(c)}">${back}</div></div></div>
          <div class="center">${sayBtn(wordText(c), wTag(c))}</div>
          <div id="gr" hidden>${gradesHtml(-1)}</div>`;
      } else {
        html = `${sbar}<div class="card stack" style="text-align:center;border-radius:28px"><span class="wlabel">Escríbelo en alemán</span><div class="es" style="font:700 24px var(--f-de)">${esc(c.es)}</div>
          <p class="small muted">${isNoun(c) ? "Con su artículo: der, die o das." : ""}</p>
          <form id="pf" class="stack" style="gap:10px"><input id="pin" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" style="font:600 22px var(--f-de);text-align:center" placeholder="${isNoun(c) ? "der / die / das …" : "auf Deutsch …"}">
          <div class="uml">${["ä", "ö", "ü", "ß", "Ä", "Ö", "Ü"].map(x => `<button type="button" data-act="ins" data-c="${x}">${x}</button>`).join("")}</div>
          <button class="btn primary" type="submit" id="chkbtn" style="min-height:52px">Comprobar</button></form>
          <div id="pfb" hidden class="stack" style="gap:10px"></div></div>`;
      }
      page("wortschatz", `<div class="sess">${html}</div>`, {
        learned: el => { st[c.id] = { b: 1, d: Date.now() + 60e3, n: 1, t: Date.now() }; T().newToday.n++; save(); addXP(2, el); SFX.play("pop"); if (!again.has(c.id)) { again.add(c.id); q.push(c); } i++; show(); },
        flip: () => { const f = $("#fc"); if (f.classList.contains("flip")) return; f.classList.add("flip"); $("#gr").hidden = false; SFX.play("flip"); if (c.ex) setTimeout(() => sayDe(eTag(c), c.ex, null), 0); },
        grade: el => doGrade(c, +el.dataset.g, el),
        ins: el => { const inp = $("#pin"), p = inp.selectionStart ?? inp.value.length; inp.value = inp.value.slice(0, p) + el.dataset.c + inp.value.slice(inp.selectionEnd ?? p); inp.focus(); inp.setSelectionRange(p + 1, p + 1); }
      });
      if (mode !== "prod") sayDe(wTag(c), wordText(c));
      else {
        const inp = $("#pin"); inp.focus();
        let checked = null;
        $("#pf").addEventListener("submit", e => {
          e.preventDefault();
          if (checked) return doGrade(c, checked.g, $("#chkbtn"));
          checked = checkTyped(c, inp.value); inp.readOnly = true; $("#chkbtn").hidden = true;
          if (checked.ok) SFX.play("ok"); else if (checked.g === 0) SFX.play("bad");
          const fb = $("#pfb"); fb.hidden = false;
          fb.innerHTML = `<div class="fb ${checked.ok ? "ok" : checked.g === 1 ? "mid" : "bad"}">${esc(checked.msg)}</div>${back}${gradesHtml(checked.g)}<p class="small muted">Enter = aceptar la nota sugerida</p>`;
          sayDe(wTag(c), wordText(c));
        });
      }
    }
    function doGrade(c, g, el) {
      srsGrade(st[c.id], g); n++;
      if (g >= 2) { rightN++; good(el, 3); } else if (g === 1) { combo = 0; addXP(2, el); } else { bad(); addXP(1, el); }
      if (g === 0 && !again.has(c.id)) { again.add(c.id); q.push(c); }
      save(); i++; setTimeout(show, 180);
    }
    function end() {
      planDone("srs"); logActivity("de", n);
      const due = allCards().filter(c => st[c.id] && isDue(st[c.id])).length, [de, es] = one(D.coach.done);
      page("wortschatz", `<div class="sess"><div class="card stack" style="text-align:center;justify-items:center"><span class="lena" style="--s:84px">👩🏼‍🔧</span><span class="wlabel">Sesión terminada</span><div class="wf" style="font-size:40px;font-weight:700">${rightN} / ${n}</div>
        <p class="wf">«${esc(de)}»</p><p class="muted">${rightN === n ? "Sin fallos. Mañana vuelven solo las que tocan." : "Las que fallaste vuelven pronto; las que sabías se alejan unos días."}</p>
        <div class="row" style="justify-content:center">${due ? `<button class="btn" data-act="again">Seguir (${due})</button>` : ""}<a class="btn primary" href="#werkstatt">Volver a Hoy</a></div></div></div>`, { again: repaso });
      speak("de-f", de);
    }
    show();
  }

  function wortschatz() {
    const t = T(), st = t.srs, all = allCards();
    const cnt = { nuevo: 0, apr: 0, rep: 0, firm: 0 };
    all.forEach(c => { const s = st[c.id]; if (!s) cnt.nuevo++; else if (s.b <= 2) cnt.apr++; else if (s.b <= 4) cnt.rep++; else cnt.firm++; });
    const tot = all.length, pc = k => (cnt[k] / tot * 100).toFixed(1) + "%";
    const due = all.filter(c => st[c.id] && isDue(st[c.id])).length;
    let filt = "", query = "", limit = 50, gen = [];
    page("wortschatz", `${whead("🃏", "Wörter", `${tot} tarjetas con artículo, plural y ejemplo`, "var(--coach-2)")}
      <a class="btn primary" href="#werkstatt-repaso" style="width:100%;min-height:58px;font-size:18px">▶ Repasar ahora · ${due} + ${newLeft()} nuevas</a>
      <div class="card" style="margin-top:14px">
        <div class="boxbar"><i style="width:${pc("firm")};background:var(--das)"></i><i style="width:${pc("rep")};background:var(--der)"></i><i style="width:${pc("apr")};background:#FFC531"></i></div>
        <div class="legend"><span style="--c:var(--das)">Firmes ${cnt.firm}</span><span style="--c:var(--der)">Repasando ${cnt.rep}</span><span style="--c:#FFC531">Aprendiendo ${cnt.apr}</span><span style="--c:var(--surface-2)">Sin ver ${cnt.nuevo}</span></div>
        <div class="artkey" style="margin-top:12px"><span class="a-der">der · masculino</span><span class="a-die">die · femenino</span><span class="a-das">das · neutro</span><span class="a-pl">solo plural</span></div></div>
      <h2 class="wf" style="font-size:20px;margin:22px 0 10px">Qué entra como nuevo</h2>
      <div class="row">${Object.entries(D.themes).map(([k, th]) => `<button class="chip" data-act="th" data-k="${k}" aria-pressed="${t.themes.includes(k)}">${esc(th.name)}</button>`).join("")}</div>
      <div class="row" style="margin-top:10px"><span class="small muted">Nuevas por día:</span>${[5, 10, 15, 20].map(v => `<button class="chip" data-act="npd" data-n="${v}" aria-pressed="${t.newPerDay === v}">${v}</button>`).join("")}</div>
      <h2 class="wf" style="font-size:20px;margin:22px 0 10px">Palabras de tu clase</h2>
      <div class="two">
        <form class="card stack" id="addf" style="gap:10px"><span class="wlabel">Añadir una tarjeta</span>
          <div class="row" style="flex-wrap:nowrap"><select id="a-art" style="width:100px"><option value="">—</option><option>der</option><option>die</option><option>das</option></select><input id="a-w" placeholder="Wort / Satz" required></div>
          <input id="a-es" placeholder="Significado en español" required>
          <input id="a-pl" placeholder="Plural (-e, ¨-er…) o Perfekt"><input id="a-ex" placeholder="Ejemplo (opcional)">
          <button class="btn primary" type="submit">Añadir</button></form>
        <div class="card stack" style="gap:10px"><span class="wlabel">Crear tarjetas con IA</span>
          <div data-ai class="stack" style="gap:10px"><p class="small muted">Pega las palabras de la pizarra o del cuaderno. La IA corrige, pone artículo, plural, traducción y ejemplo.</p>
            <textarea id="ai-in" rows="4" placeholder="Termin, Arzt, Rezept, abholen…"></textarea><button class="btn primary" data-act="gen">Crear tarjetas</button><div id="ai-out"></div></div>
          <p data-noai class="small muted">Esta función usa Claude y se activa al abrir la página con tu cuenta de Claude. Mientras, usa el formulario.</p></div>
      </div>
      <h2 class="wf" style="font-size:20px;margin:22px 0 10px">Todas las palabras</h2>
      <div class="row"><select id="wl-th" style="max-width:240px"><option value="">Todos los temas</option>${Object.entries(D.themes).map(([k, th]) => `<option value="${k}">${esc(th.name)}</option>`).join("")}<option value="mine">Mis palabras</option></select><input id="wl-q" placeholder="Buscar" style="max-width:260px"></div>
      <div id="wl" style="margin-top:8px"></div>`, {
      th: el => { const k = el.dataset.k, i = t.themes.indexOf(k); if (i >= 0) t.themes.splice(i, 1); else t.themes.push(k); save(); el.setAttribute("aria-pressed", i < 0); },
      npd: el => { t.newPerDay = +el.dataset.n; save(); $$('[data-act="npd"]').forEach(b => b.setAttribute("aria-pressed", b === el)); },
      more: () => { limit += 80; list(); },
      gen: async el => {
        const txt = $("#ai-in").value.trim(); if (!txt) return toast("Pega primero algunas palabras.");
        el.disabled = true; $("#ai-out").innerHTML = '<p class="muted small">Pensando…</p>';
        const prompt = `Eres profesor de alemán para hispanohablantes (nivel A1-A2). Convierte esta lista de palabras o frases de una clase de alemán en tarjetas de vocabulario. Corrige la ortografía. Para sustantivos da el artículo (der/die/das) y el plural en formato corto ("-e", "¨-er", "-n", "-" si no cambia, "–" si no tiene plural, o "pl" si solo existe en plural). Para verbos deja "art" vacío y pon en "pl" el Perfekt con auxiliar ("hat gemacht" / "ist gegangen"). Para todo lo demás deja "art" y "pl" vacíos. "es": traducción natural al español de Latinoamérica. "ex": una frase de ejemplo corta y fácil en alemán (nivel A1).
Lista:
"""${txt.slice(0, 4000)}"""
Devuelve SOLO un array JSON (máximo 40 elementos): [{"art":"der","w":"Termin","pl":"-e","es":"la cita","ex":"Ich habe morgen einen Termin."}]`;
        try {
          const r = await askJSON(prompt, "default");
          gen = (Array.isArray(r) ? r : []).filter(x => x && x.w && x.es).slice(0, 40).map(x => ({ art: ["der", "die", "das"].includes(String(x.art).toLowerCase()) ? String(x.art).toLowerCase() : "", w: String(x.w).trim(), pl: String(x.pl || "").trim(), es: String(x.es).trim(), ex: String(x.ex || "").trim() }));
          $("#ai-out").innerHTML = gen.length ? `<div style="max-height:260px;overflow:auto">${gen.map((x, k) => `<label class="chk"><input type="checkbox" checked data-k="${k}"><span><b>${x.art ? `<span class="a-${x.art}">${x.art}</span> ` : ""}${esc(x.w)}</b> ${x.pl ? `<span class="muted small">(${esc(x.pl)})</span>` : ""} — ${esc(x.es)}</span></label>`).join("")}</div><button class="btn primary" data-act="gen-add" style="margin-top:8px">Añadir las marcadas</button>` : '<p class="muted small">No salió ninguna tarjeta. Revisa la lista.</p>';
        } catch (e) { $("#ai-out").innerHTML = `<p class="small" style="color:var(--bad)">${esc(aiMsg(e))}</p>`; }
        el.disabled = false;
      },
      "gen-add": () => {
        const picks = $$("#ai-out input[type=checkbox]").filter(x => x.checked).map(x => gen[+x.dataset.k]);
        let added = 0;
        picks.forEach(x => { if (!allCards().some(c => nx(c.w) === nx(x.w))) { t.custom.push({ id: "my:" + x.w + ":" + Date.now() + ":" + added, th: "mine", ...x }); added++; } });
        save(); toast(added + " tarjetas añadidas"); wortschatz();
      }
    });
    $("#addf").addEventListener("submit", e => {
      e.preventDefault();
      const c = { art: $("#a-art").value, w: $("#a-w").value.trim(), es: $("#a-es").value.trim(), pl: $("#a-pl").value.trim(), ex: $("#a-ex").value.trim() };
      if (!c.w || !c.es) return;
      t.custom.push({ id: "my:" + c.w + ":" + Date.now(), th: "mine", ...c }); save(); SFX.play("pop"); toast("Tarjeta añadida: entra hoy como nueva"); e.target.reset(); list();
    });
    function list() {
      const ql = nx(query);
      const rows = allCards().filter(c => (!filt || c.th === filt) && (!ql || nx(c.w).includes(ql) || nx(c.es).includes(ql)));
      $("#wl").innerHTML = rows.slice(0, limit).map(c => { const s = st[c.id], b = s ? s.b : 0, pl = plural(c); return `<div class="wrow">${sayBtn(wordText(c), wTag(c))}<div><div class="w">${wordHtml(c)}</div>${pl ? `<div class="pl">${esc(pl)}</div>` : ""}</div><div class="es small">${esc(c.es)}</div><span class="dotbox" aria-label="Caja ${b} de 7">${[1, 2, 3, 4, 5, 6, 7].map(k => `<i class="${b >= k ? "on" : ""}"></i>`).join("")}</span></div>`; }).join("")
        + (rows.length > limit ? `<div class="center" style="margin-top:10px"><button class="btn" data-act="more">Mostrar más (${rows.length - limit})</button></div>` : "")
        + (!rows.length ? '<p class="muted">Nada con ese filtro.</p>' : "");
    }
    $("#wl-th").onchange = e => { filt = e.target.value; limit = 50; list(); };
    $("#wl-q").oninput = e => { query = e.target.value; limit = 50; list(); };
    list();
  }

  /* ================= GRAMÁTICA ================= */
  const GIC = { v2: "2️⃣", trennbar: "✂️", modal: "🔑", perfekt: "⏳", akk: "🎯", dat: "🧭", poss: "👪", imperativ: "📣", praet: "🕰️", dativverben: "🎁", neben: "🔗", wechsel: "📦", komparativ: "📈" };
  function grammatik(id) {
    if (id) return topic(id);
    const gym = T().gym, seen = seenTopics();
    page("grammatik", `${whead("🧩", "Grammatik", "La regla en español, la trampa del hispanohablante y práctica de memoria. Con 80 % el tema queda dominado.", "var(--grape-2)")}
      <div class="cards">${D.grammar.map(g => { const r = gym[g.id]; return `<a class="tcard" href="#werkstatt-grammatik-${g.id}">
        <div class="top"><span class="ic">${GIC[g.id] || "🧩"}</span><span class="lvl ${g.level === "A2" ? "a2" : ""}">${g.level}</span>${seen.has(g.id) ? '<span class="seen">✓ visto en clase</span>' : ""}</div>
        <h3>${esc(g.title)}</h3><span class="muted small">${esc(g.de)} · ${g.items.length} ejercicios</span>
        <div class="bar"><i style="width:${r ? r.best : 0}%;background:${r && r.best >= 80 ? "var(--das)" : "var(--der)"}"></i></div>
        <span class="small muted">${r ? "Mejor: " + r.best + " %" + (r.best >= 80 ? " · dominado ✓" : "") : "Sin practicar"}</span></a>`; }).join("")}</div>`);
  }
  function fillQ(it, ansText) {
    let q = it.q;
    const blanks = (q.match(/___/g) || []).length, words = String(ansText).split(" ");
    if (blanks > 1 && words.length === blanks) words.forEach(w => { q = q.replace("___", w); });
    else q = q.replace("___", ansText);
    if (q.includes("→")) q = q.split("→")[1];
    return q.replace(/\s*\([^)]*\)/g, "").replace(/\s+([.!?])/g, "$1").trim();
  }
  async function askText(prompt) {
    if (!aiOK()) throw { code: "unavailable" };
    try { return (await CAP.sample(prompt, { modelTier: "quick" })).text; }
    catch (e) { if (["not_granted", "sampling_disabled", "not_declared", "capability_disabled", "capability_removed"].includes(e && e.code)) { CAP.aiOff = true; paintCaps(); } throw e; }
  }
  function topic(id) {
    const g = D.grammar.find(x => x.id === id); if (!g) return grammatik();
    AUD.prefetch("d-g-" + g.id);
    page("grammatik", `<a class="btn sm ghost" href="#werkstatt-grammatik">${ICON.back} Temas</a>
      ${whead(GIC[g.id] || "🧩", g.title, `<span class="lvl ${g.level === "A2" ? "a2" : ""}">${g.level}</span> ${esc(g.de)}`, "var(--grape-2)")}
      <div id="dr" class="drill">
        <div class="card stack"><span class="wlabel">La regla</span><p class="rule">${esc(g.rule)}</p></div>
        <div class="trap"><span class="wlabel">⚠️ Trampa del hispanohablante</span><p style="margin-top:6px">${esc(g.trap)}</p></div>
        <div class="card stack" style="gap:10px"><span class="wlabel">Ejemplos</span>${g.ex.map(e => `<div class="row" style="flex-wrap:nowrap">${sayBtn(e, "de-m")}<span class="exde">${esc(e)}</span></div>`).join("")}</div>
        <button class="btn primary" data-act="start" style="min-height:56px;font-size:18px">Practicar · ${g.items.length} ejercicios →</button>
      </div>`, { start: () => drill(g) });
  }
  function drill(g) {
    const items = shuffle(g.items); let i = 0, ok = 0;
    const box = $("#dr");
    function show() {
      if (i >= items.length) return end();
      const it = items[i]; let done = false;
      const headH = `<div class="sbar"><div class="bar"><i style="width:${(i / items.length) * 100}%;background:var(--grape)"></i></div><span class="wlabel">${i + 1}/${items.length}</span></div><span class="combo-w" id="combo" ${combo >= 2 ? "" : "hidden"}>🔥 ${combo} seguidas</span>`;
      const after = (isOk, correctText, userText, el) => {
        done = true; if (isOk) { ok++; good(el, 5); } else bad();
        const full = it.t === "order" ? it.w.join(" ") : it.t === "mc" ? (it.q.includes("___") ? fillQ(it, it.o[it.a]) : it.o[it.a]) : fillQ(it, it.a[0]);
        $("#dfb").innerHTML = `<div class="fb ${isOk ? "ok" : "bad"}">${isOk ? one(D.coach.right) : "Respuesta: " + esc(correctText)}</div>
          <div class="row" style="flex-wrap:nowrap">${sayBtn(full, "de-f")}<span class="exde">${esc(full)}</span></div>
          ${it.why ? `<p class="muted">${esc(it.why)}</p>` : ""}${it.es ? `<p class="muted">${esc(it.es)}</p>` : ""}
          ${!isOk ? `<div data-ai><button class="btn sm" data-act="why">¿Por qué? Explícamelo (IA)</button><p id="whyout" class="small" style="margin-top:6px"></p></div>` : ""}
          <button class="btn primary" data-act="nxt" style="min-height:54px">Siguiente →</button>`;
        paintCaps(box); speak("de-f", full);
        ACT.why = async el2 => { el2.disabled = true; $("#whyout").textContent = "Pensando…"; try { $("#whyout").textContent = await askText(`Explica en español, en 2 o 3 frases sencillas para un alumno hispanohablante de nivel A1, por qué en la frase alemana «${full}» la forma correcta es «${correctText}»${userText ? " y no «" + userText + "»" : ""}. Tema: ${g.title}. Sin saludos ni listas.`); } catch (e) { $("#whyout").textContent = aiMsg(e); } };
      };
      ACT.nxt = () => { i++; show(); };
      if (it.t === "mc") {
        box.innerHTML = `${headH}<p class="q">${esc(it.q)}</p><div class="mcopts">${shuffle(it.o.map((o, k) => ({ o, k }))).map(x => `<button class="mcopt" data-act="mc" data-k="${x.k}">${esc(x.o)}</button>`).join("")}</div><div id="dfb" class="stack" style="gap:10px"></div>`;
        ACT.mc = el => { if (done) return; const k = +el.dataset.k, isOk = k === it.a; el.classList.add(isOk ? "ok" : "bad"); if (!isOk) $(`.mcopt[data-k="${it.a}"]`).classList.add("ok"); after(isOk, it.o[it.a], it.o[k], el); };
      } else if (it.t === "type") {
        box.innerHTML = `${headH}<p class="q">${esc(it.q)}</p><form id="tf" class="stack" style="gap:10px"><input id="tin" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" style="font:600 21px var(--f-de)" placeholder="${(it.q.match(/___/g) || []).length > 1 ? "Las dos partes, separadas por un espacio" : "La palabra que falta"}">
          <div class="uml" style="justify-content:flex-start">${["ä", "ö", "ü", "ß"].map(x => `<button type="button" data-act="ins" data-c="${x}">${x}</button>`).join("")}</div>
          <button class="btn primary" type="submit" style="min-height:52px">Comprobar</button></form><div id="dfb" class="stack" style="gap:10px"></div>`;
        ACT.ins = el => { const inp = $("#tin"); inp.value += el.dataset.c; inp.focus(); };
        $("#tf").addEventListener("submit", e => { e.preventDefault(); if (done) return ACT.nxt(); const v = $("#tin").value; if (!v.trim()) return; const isOk = it.a.some(a => nx(a) === nx(v)); $("#tin").readOnly = true; after(isOk, it.a[0], v, $("#tin")); });
        $("#tin").focus();
      } else {
        const pool = shuffle(it.w.map((t, k) => ({ t, k }))); const chosen = [];
        const draw = () => {
          box.innerHTML = `${headH}<p class="muted">Ordena la frase: ${esc(it.es || "")}</p><div class="ans">${chosen.map((x, j) => `<button class="tk" data-act="un" data-j="${j}">${esc(x.t)}</button>`).join("")}</div>
            <div class="row">${pool.map((x, j) => `<button class="tk ${chosen.includes(x) ? "used" : ""}" data-act="add" data-j="${j}">${esc(x.t)}</button>`).join("")}</div>
            <button class="btn primary" data-act="ochk" style="min-height:52px" ${chosen.length === pool.length ? "" : "disabled"}>Comprobar</button><div id="dfb" class="stack" style="gap:10px"></div>`;
        };
        ACT.add = el => { if (done) return; const x = pool[+el.dataset.j]; if (!chosen.includes(x)) { chosen.push(x); SFX.play("tap"); draw(); } };
        ACT.un = el => { if (done) return; chosen.splice(+el.dataset.j, 1); draw(); };
        ACT.ochk = el => { if (done) return; const isOk = chosen.map(x => x.t).join(" ") === it.w.join(" "); after(isOk, it.w.join(" "), chosen.map(x => x.t).join(" "), el); };
        draw();
      }
    }
    function end() {
      const pct = Math.round(ok / items.length * 100), r = T().gym[g.id] || { best: 0, n: 0 };
      T().gym[g.id] = { best: Math.max(r.best, pct), n: r.n + 1, last: today() };
      planDone("gram"); logActivity("de", ok);
      const [de] = one(D.coach.done);
      box.innerHTML = `<div class="card stack" style="text-align:center;justify-items:center"><span class="lena" style="--s:80px">👩🏼‍🔧</span><span class="wlabel">${esc(g.title)}</span><div class="wf" style="font-size:44px;font-weight:700">${pct} %</div>
        <p class="muted">${pct >= 80 ? "Dominado. Vuelve en unos días para que no se oxide." : "Repite mañana: el segundo intento, espaciado, fija mucho más."}</p>
        <div class="row" style="justify-content:center"><button class="btn" data-act="start">Otra vez</button><a class="btn primary" href="#werkstatt">Volver a Hoy</a></div></div>`;
      ACT.start = () => drill(g);
      if (pct >= 80) { confetti(); SFX.play("level"); } speak("de-f", pct >= 80 ? de : "Gut gemacht!");
    }
    show();
  }

  /* ================= HÖREN ================= */
  function dialogTags(who) {
    const pools = { f: ["de-f", "de-f2", "de-f3"], m: ["de-m", "de-m2", "de-m3"] }, out = {};
    Object.entries(who).forEach(([k, [, g]]) => { const p = pools[g]; out[k] = p.length > 1 ? p.shift() : p[0]; });
    return out;
  }
  function hoeren(id) {
    if (id) return dialog(id);
    const d = T().dlg;
    page("hoeren", `${whead("🎧", "Hören", "Diálogos de la vida real con voces distintas. Tres modos: escuchar, <b>shadowing</b> (repites en la pausa) y <b>dictado</b>.", "var(--sea-2)")}
      <div class="cards">${D.dialogs.map(x => { const r = d[x.id] || {}; return `<a class="tcard" href="#werkstatt-hoeren-${x.id}"><div class="top"><span class="ic">💬</span><span class="lvl">${x.level}</span>${r.q != null ? `<span class="seen">✓ ${r.q}/${x.q.length}</span>` : ""}</div><h3>${esc(x.title)}</h3><span class="muted small">«${esc(x.de)}» · ${x.lines.length} frases</span></a>`; }).join("")}</div>`);
  }
  function lcsMark(target, user) {
    const a = target.split(/\s+/), b = norm(user).split(" ").map(deUml), A = a.map(w => deUml(norm(w)));
    const dp = Array.from({ length: A.length + 1 }, () => new Array(b.length + 1).fill(0));
    for (let i = A.length - 1; i >= 0; i--) for (let j = b.length - 1; j >= 0; j--) dp[i][j] = A[i] === b[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    const ok = new Set(); let i = 0, j = 0;
    while (i < A.length && j < b.length) { if (A[i] === b[j]) { ok.add(i); i++; j++; } else if (dp[i + 1][j] >= dp[i][j + 1]) i++; else j++; }
    return { html: a.map((w, k) => `<span class="${ok.has(k) || !A[k] ? "okw" : "badw"}">${esc(w)}</span>`).join(" "), score: ok.size / Math.max(1, A.filter(Boolean).length) };
  }
  function dialog(id) {
    const d = D.dialogs.find(x => x.id === id); if (!d) return hoeren();
    let mode = "read", showEs = false, slow = false;
    const tags = dialogTags(d.who), answers = {}, order = Object.keys(d.who);
    AUD.prefetch("d-dl-" + d.id);
    const COL = ["var(--der)", "var(--die)", "var(--das)"];
    const sayLine = k => { const [s, de] = d.lines[k]; return speak(tags[s] + (slow ? "~s" : ""), de); };
    const rec = () => (T().dlg[id] = T().dlg[id] || { n: 0 });
    function draw() {
      page("hoeren", `<a class="btn sm ghost" href="#werkstatt-hoeren">${ICON.back} Diálogos</a>
        ${whead("💬", d.de, esc(d.title), "var(--sea-2)")}
        <div class="ctrl">
          <div class="row">${[["read", "👂 Escuchar"], ["shadow", "🗣️ Shadowing"], ["diktat", "✍️ Dictado"]].map(([k, l]) => `<button class="chip" data-act="mode" data-m="${k}" aria-pressed="${mode === k}">${l}</button>`).join("")}</div>
          <div class="row"><button class="btn primary sm" data-act="all">▶ ${mode === "shadow" ? "Empezar shadowing" : "Todo"}</button><button class="btn sm" data-act="stop">■</button>
            <button class="chip" data-act="slow" aria-pressed="${slow}">🐢 Lento</button><button class="chip" data-act="es" aria-pressed="${showEs}">ES</button><span id="rep" class="repeat"></span></div></div>
        ${mode === "shadow" ? '<p class="small muted">Escucha cada frase y repítela en voz alta en la pausa, copiando ritmo y melodía. Sin mirar el texto, mejor.</p>' : ""}
        ${d.tip ? `<div class="trap" style="margin:6px 0 12px"><span class="wlabel">Cultura</span><p style="margin-top:4px">${esc(d.tip)}</p></div>` : ""}
        <div class="chat2">${d.lines.map(([s, de, es], k) => { const [name, g] = d.who[s], idx = order.indexOf(s); return `<div class="cl ${idx % 2 ? "r" : ""}" id="ln${k}"><span class="av" style="background:${COL[idx % 3]}">${esc(name[0])}</span>
          <div class="bb"><span class="nm">${esc(name)}</span>${mode === "diktat" ? `<input class="dk-in" id="dk${k}" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Escribe lo que oyes…" style="font:500 17px var(--f-de)"><div class="diff small" id="df${k}"></div>` : `<span class="lt">${esc(de)}</span>`}
          <span class="les" ${showEs ? "" : "hidden"}>${esc(es)}</span></div>
          <div class="stack" style="gap:6px"><button class="say" data-act="ln" data-k="${k}" aria-label="Escuchar">${ICON.play}</button>${mode === "diktat" ? `<button class="say" data-act="dk" data-k="${k}" aria-label="Comprobar">✓</button>` : ""}</div></div>`; }).join("")}</div>
        <div class="card" style="margin-top:18px"><span class="wlabel">Preguntas</span><div class="stack" style="margin-top:10px">${d.q.map(([q, o, a], k) => `<div class="stack" style="gap:8px"><p class="exde">${esc(q)}</p><div class="mcopts">${shuffle(o.map((x, j) => ({ x, j }))).map(z => `<button class="mcopt" data-act="qa" data-q="${k}" data-j="${z.j}">${esc(z.x)}</button>`).join("")}</div></div>`).join("")}</div><p id="qres" class="fb" hidden style="margin-top:12px"></p></div>`, {
        mode: el => { mode = el.dataset.m; draw(); },
        slow: el => { slow = !slow; el.setAttribute("aria-pressed", slow); if (slow) AUD.prefetch("d-ds-" + d.id); },
        es: el => { showEs = !showEs; el.setAttribute("aria-pressed", showEs); $$(".les").forEach(x => x.hidden = !showEs); },
        ln: el => { el.classList.add("on"); sayLine(+el.dataset.k).then(() => el.classList.remove("on")); },
        stop: () => { SEQ++; stopSpeech(); $$(".cl.on").forEach(x => x.classList.remove("on")); $("#rep").textContent = ""; },
        all: async () => {
          const my = ++SEQ;
          for (let k = 0; k < d.lines.length; k++) {
            if (my !== SEQ) return;
            $$(".cl.on").forEach(x => x.classList.remove("on"));
            const ln = $("#ln" + k); ln.classList.add("on"); ln.scrollIntoView({ block: "center", behavior: "smooth" });
            const t0 = Date.now(); await sayLine(k); if (my !== SEQ) return;
            if (mode === "shadow") { $("#rep").textContent = "🗣️ ¡Repite!"; await sleep(Math.max(1400, (Date.now() - t0) * 1.15 + 500)); $("#rep").textContent = ""; }
            else await sleep(300);
          }
          $$(".cl.on").forEach(x => x.classList.remove("on"));
          rec().n++; save(); logActivity("de", 3); addXP(10); if (mode !== "read") planDone("hoer");
        },
        dk: el => {
          const k = +el.dataset.k, v = $("#dk" + k).value; if (!v.trim()) return sayLine(k);
          const r = lcsMark(d.lines[k][1], v);
          $("#df" + k).innerHTML = `${r.html} <b>${Math.round(r.score * 100)} %</b>`;
          if (r.score >= .9) good(el, 5); else bad();
          if ($$(".diff").every(x => x.innerHTML)) { planDone("hoer"); logActivity("de", 3); }
        },
        qa: el => {
          const k = +el.dataset.q, j = +el.dataset.j; if (answers[k] != null) return;
          const isOk = j === d.q[k][2]; answers[k] = isOk; el.classList.add(isOk ? "ok" : "bad");
          if (isOk) good(el, 4); else { bad(); $(`.mcopt[data-q="${k}"][data-j="${d.q[k][2]}"]`).classList.add("ok"); }
          if (Object.keys(answers).length === d.q.length) {
            const n = Object.values(answers).filter(Boolean).length, r = rec();
            r.q = Math.max(r.q || 0, n); save(); planDone("hoer"); logActivity("de", n);
            const q = $("#qres"); q.hidden = false; q.className = "fb " + (n === d.q.length ? "ok" : "mid");
            q.textContent = n === d.q.length ? "3 de 3. Ahora prueba el shadowing o el dictado." : n + " de " + d.q.length + ". Escucha otra vez con el español activado.";
          }
        }
      });
      if (mode === "diktat") $$(".dk-in").forEach((inp, k) => inp.addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); ACT.dk({ dataset: { k } }); } }));
    }
    draw();
  }

  /* ================= AUSSPRACHE ================= */
  const PTIPS = {
    "ü / u": "La ü: di «i» y, sin mover la lengua, redondea los labios como para «u».",
    "ü / i": "La ü es una «i» con labios redondos; la i alemana va con labios estirados. Kissen (cojín) ≠ küssen (besar).",
    "ö / o / e": "La ö: di «e» y redondea los labios como para «o». schon (ya) ≠ schön (bonito).",
    "vocal larga / corta": "Vocal ante doble consonante = corta (Stadt, Bett); vocal + h, doble vocal o «ie» = larga (Staat, Beet, Miete).",
    "ch / sch": "«ch» tras e, i, ä, ö, ü es un soplido suave con la lengua alta (ich). «sch» es la «sh» inglesa con labios hacia adelante.",
    "w / b": "La w alemana es una «v» de verdad: dientes de arriba sobre el labio de abajo. La b se hace con los dos labios.",
    "h aspirada": "La h alemana suena: un soplo, como empañar un espejo. Haus ≠ aus.",
    "ei / ie": "Se lee la segunda letra: «ei» = «ai» (Wein), «ie» = «i» larga (Wien).",
    "z / s": "La z alemana es «ts»: Zeit = «tsait». La s delante de vocal zumba como una abeja: seit."
  };
  function aussprache() {
    const cats = D.pairs.map(p => p.c); let sel = new Set(cats);
    function draw() {
      const pr = T().pron;
      page("aussprache", `${whead("👂", "Aussprache", "Oirás una de dos palabras casi iguales y eliges cuál fue. Cada intento usa una de 6 voces (Alemania, Austria, Suiza): oír muchas voces es lo que mejor entrena el oído.", "var(--leaf-2)")}
        <div class="row" style="margin-bottom:14px">${cats.map(c => { const r = pr[c]; return `<button class="chip" data-act="cat" data-c="${esc(c)}" aria-pressed="${sel.has(c)}">${esc(c)}${r && r.n ? ` · ${Math.round(r.ok / r.n * 100)} %` : ""}</button>`; }).join("")}</div>
        <div id="pbox" class="card stack" style="justify-items:center;text-align:center"><span style="font-size:56px">🎧</span><p>12 intentos con las categorías marcadas.</p><button class="btn primary" data-act="go" style="min-width:200px;min-height:54px">Empezar</button></div>
        <h2 class="wf" style="font-size:20px;margin:22px 0 10px">Cómo se pronuncian</h2>
        <div class="slg">${D.pairs.map((p, pi) => `<div class="sl"><span class="reg" style="justify-self:start">${esc(p.c)}</span><p class="small">${esc(PTIPS[p.c] || "")}</p><div class="row" style="gap:6px">${p.p.slice(0, 3).map(([a, b]) => `<button class="chip" data-act="both" data-a="${esc(a)}" data-b="${esc(b)}" data-pi="${pi}">🔊 ${esc(a)} / ${esc(b)}</button>`).join("")}</div></div>`).join("")}</div>`, {
        cat: el => { const c = el.dataset.c; if (sel.has(c)) { if (sel.size > 1) sel.delete(c); } else sel.add(c); draw(); },
        both: async el => { AUD.prefetch("d-p-" + el.dataset.pi); const my = ++SEQ; await speak("de-f", el.dataset.a); await sleep(350); if (my === SEQ) speak("de-f", el.dataset.b); },
        go: () => trials()
      });
    }
    function trials() {
      const pool = D.pairs.flatMap((p, pi) => sel.has(p.c) ? p.p.map(pair => ({ c: p.c, pair, pi })) : []);
      [...new Set(pool.map(x => x.pi))].forEach(pi => AUD.prefetch("d-p-" + pi));
      let i = 0, okN = 0; const N = 12, box = $("#pbox");
      function round() {
        if (i >= N) {
          logActivity("de", okN);
          box.innerHTML = `<span class="wlabel">Resultado</span><div class="wf" style="font-size:44px;font-weight:700">${okN} / ${N}</div><p class="muted">${okN >= 11 ? "Oído fino. Prueba otra categoría." : "Vuelve mañana: mejora con sesiones cortas y repetidas."}</p><button class="btn primary" data-act="go">Otra ronda</button>`;
          if (okN >= 10) { confetti(); SFX.play("level"); }
          return;
        }
        const it = pick(pool, 1)[0], tgt = Math.random() < .5 ? 0 : 1, [tag, vname] = one(PAIR_TAGS);
        const play = w => speak(tag, w);
        let done = false;
        box.innerHTML = `<div class="row" style="width:100%"><span class="wlabel">${i + 1} / ${N} · ${esc(it.c)}</span><span class="spacer"></span><span class="vname">🎙️ ${vname}</span></div>
          <button class="big-play" data-act="rep" aria-label="Escuchar otra vez" style="width:84px;height:84px;border-radius:50%;border:0;background:var(--sea);color:#fff;font-size:34px">🔊</button>
          <div class="pairs">${it.pair.map((w, k) => `<button class="pairbtn" data-act="ans" data-k="${k}">${esc(w)}</button>`).join("")}</div>
          <div id="pfb2" class="row" style="justify-content:center"></div>`;
        Object.assign(ACT, {
          rep: () => play(it.pair[tgt]),
          ans: el => {
            if (done) return; done = true;
            const k = +el.dataset.k, isOk = k === tgt; if (isOk) { okN++; good(el, 2); } else bad();
            el.classList.add(isOk ? "ok" : "bad"); if (!isOk) $(`.pairbtn[data-k="${tgt}"]`).classList.add("ok");
            const r = T().pron[it.c] = T().pron[it.c] || { ok: 0, n: 0 }; r.n++; if (isOk) r.ok++; save();
            $("#pfb2").innerHTML = `<button class="btn sm" data-act="cmp">🔊 Las dos</button><button class="btn sm primary" data-act="nx">Siguiente →</button>`;
          },
          cmp: async () => { await play(it.pair[0]); await sleep(300); await play(it.pair[1]); },
          nx: () => { i++; round(); }
        });
        play(it.pair[tgt]);
      }
      round();
    }
    draw();
  }

  /* ================= PRÜFUNG A1 ================= */
  const KW = [["Name?", /(ich hei(ß|ss)e|mein name ist)/i], ["Alter?", /(jahre|jahr alt)/i], ["Land?", /(komme aus|bin aus)/i], ["Wohnort?", /(wohne in|wohne jetzt|lebe in)/i], ["Sprachen?", /(spreche|sprachen)/i], ["Beruf?", /(von beruf|arbeite als|arbeite bei|bin student|bin studentin|beruf)/i], ["Hobby?", /(hobby|hobbys|gern|in meiner freizeit)/i]];
  const SECS = [["hoeren", "🎧", "Hören", "≈ 20 min · la parte 2 se oye una sola vez"], ["lesen", "📖", "Lesen", "25 min · correos, anuncios y carteles"], ["schreiben", "✍️", "Schreiben", "20 min · formulario + mensaje de ~30 palabras"], ["sprechen", "🗣️", "Sprechen", "≈ 15 min en grupo · presentarse, preguntar, pedir"]];
  function pruefung(sec) {
    const ex = T().exam;
    AUD.prefetch("d-exam");
    if (!sec) {
      const all = SECS.every(([k]) => ex[k] != null), sum = SECS.reduce((a, [k]) => a + (ex[k] || 0), 0);
      return page("pruefung", `${whead("🎓", "Prüfung A1", "Goethe-Zertifikat A1: Start Deutsch 1. Cuatro partes de 25 puntos; se aprueba con 60 de 100.", "var(--sun-2)")}
        <div class="cards">${SECS.map(([k, i, t, dsc]) => `<a class="tcard" href="#werkstatt-pruefung-${k}"><div class="top"><span class="ic">${i}</span><span class="wlabel">${t}</span></div><h3>${ex[k] != null ? ex[k] + " / 25" : "Sin hacer"}</h3><div class="bar"><i style="width:${(ex[k] || 0) * 4}%;background:${(ex[k] || 0) >= 15 ? "var(--das)" : "var(--coach)"}"></i></div><span class="small muted">${dsc}</span></a>`).join("")}</div>
        <div class="card" style="margin-top:14px"><b class="wf">Total estimado: ${all ? sum + " / 100 " + (sum >= 60 ? "✅ aprobado" : "· te faltan " + (60 - sum)) : "completa las cuatro partes"}</b><p class="small muted" style="margin-top:4px">Versiones cortas con el mismo tipo de tarea. Formato completo en el <a href="https://www.goethe.de/pro/relaunch/prf/materialien/A1_sd1/sd_1_uebungssatz01.pdf" target="_blank" rel="noopener">modelo oficial</a>.</p></div>`);
    }
    if (sec === "hoeren" || sec === "lesen") return mcExam(sec);
    if (sec === "schreiben") return schreiben();
    if (sec === "sprechen") return sprechen();
    pruefung();
  }
  function speakScript(text) {
    const parts = text.split(/(Frau:|Mann:)/).map(s => s.trim()).filter(Boolean), lines = []; let g = "de-f";
    if (parts.length === 1) lines.push([parts[0], "de-f"]);
    for (const p of parts) { if (p === "Frau:") g = "de-f"; else if (p === "Mann:") g = "de-m"; else if (parts.length > 1) lines.push([p, g]); }
    return (async () => { const my = ++SEQ; for (const [t, tg] of lines) { if (my !== SEQ) return; await speak(tg, t); await sleep(300); } })();
  }
  const back = `<a class="btn sm ghost" href="#werkstatt-pruefung">${ICON.back} Examen</a>`;
  function mcExam(sec) {
    const items = D.exam[sec], ans = {}, plays = {};
    page("pruefung", `${back}${whead(sec === "hoeren" ? "🎧" : "📖", sec === "hoeren" ? "Hören" : "Lesen", sec === "hoeren" ? "Partes 1 y 3: dos escuchas. Parte 2: una sola. El texto aparece al final." : "Lee y elige. En el examen real: 25 minutos para 15 tareas.", "var(--sun-2)")}
      <div class="stack">${items.map((it, k) => `<div class="card stack" style="gap:10px"><span class="wlabel">Teil ${it.teil} · Aufgabe ${k + 1}</span>
        ${sec === "hoeren" ? `<div class="row"><button class="btn" data-act="play" data-k="${k}">🔊 Escuchar (${it.n}×)</button></div><p class="small muted tr" hidden>«${esc(it.text)}»</p>` : `<div class="exde" style="white-space:pre-wrap">${esc(it.text)}</div>`}
        <p class="exde"><b>${esc(it.q)}</b></p>
        <div class="mcopts">${it.o.map((o, j) => `<button class="mcopt" data-act="a" data-k="${k}" data-j="${j}">${esc(o)}</button>`).join("")}</div></div>`).join("")}</div>
      <div id="res" style="margin-top:14px"></div>`, {
      play: el => { const k = +el.dataset.k, it = items[k]; plays[k] = (plays[k] || 0) + 1; const left = it.n - plays[k]; el.textContent = left > 0 ? `🔊 Escuchar (${left}×)` : "Ya no quedan escuchas"; if (left <= 0) el.disabled = true; speakScript(it.text); },
      a: el => {
        const k = +el.dataset.k, j = +el.dataset.j; if (ans[k] != null) return;
        const isOk = j === items[k].a; ans[k] = isOk; el.classList.add(isOk ? "ok" : "bad");
        if (isOk) good(el, 4); else { bad(); $(`.mcopt[data-k="${k}"][data-j="${items[k].a}"]`).classList.add("ok"); }
        if (Object.keys(ans).length === items.length) {
          const n = Object.values(ans).filter(Boolean).length, pts = Math.round(n / items.length * 25);
          T().exam[sec] = Math.max(T().exam[sec] || 0, pts); save(); logActivity("de", n); addXP(20);
          $$(".tr").forEach(x => x.hidden = false);
          $("#res").innerHTML = `<div class="fb ${pts >= 15 ? "ok" : "mid"}">${n} de ${items.length} → unos ${pts} de 25 puntos.${sec === "hoeren" ? " Ya puedes leer las transcripciones." : ""}</div>`;
          $("#res").scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
    });
  }
  function schreiben() {
    const f = D.exam.schreibenForm; let ti = (Math.random() * D.exam.schreiben.length) | 0, p1 = null, p2 = null;
    const total = () => { if (p1 != null && p2 != null) { const pts = Math.round((p1 + p2) / 15 * 25); T().exam.schreiben = Math.max(T().exam.schreiben || 0, pts); save(); planDone("out"); $("#stot").innerHTML = `<div class="fb ${pts >= 15 ? "ok" : "mid"}">Total: ${p1 + p2} de 15 puntos brutos → unos ${pts} de 25.</div>`; } };
    function drawTask() {
      const t = D.exam.schreiben[ti];
      $("#t2").innerHTML = `<p class="exde">${esc(t.task)}</p><ul style="margin:6px 0 0 18px">${t.p.map(x => `<li class="exde" style="font-size:16px">${esc(x)}</li>`).join("")}</ul>
        <textarea id="txt" rows="7" style="margin-top:10px;font:500 17px/1.5 var(--f-de)" placeholder="Liebe … / Lieber … / Hallo …"></textarea>
        <div class="row"><span class="small muted" id="wc">0 palabras (objetivo: unas 30)</span><span class="spacer"></span><button class="btn sm" data-act="other">Otra tarea</button><button class="btn sm" data-act="model">Ver modelo</button><button class="btn sm primary" data-ai data-act="eval">Corregir con IA</button></div>
        <div id="evo" class="stack" style="gap:8px"></div>`;
      $("#txt").oninput = e => { $("#wc").textContent = e.target.value.trim().split(/\s+/).filter(Boolean).length + " palabras (objetivo: unas 30)"; };
      paintCaps($("#t2"));
    }
    page("pruefung", `${back}${whead("✍️", "Schreiben", "Formulario (5 puntos) + mensaje corto (10 puntos).", "var(--sun-2)")}
      <div class="card stack"><span class="wlabel">Teil 1 · Formular</span><p class="exde">${esc(f.text)}</p>
        ${f.fields.map(([l], k) => `<div class="field"><label for="ff${k}">${esc(l)}</label><input id="ff${k}" autocomplete="off" style="font:500 17px var(--f-de)"><span class="small" id="fa${k}"></span></div>`).join("")}
        <div class="row"><button class="btn primary" data-act="form">Comprobar formulario</button><b id="ffr"></b></div></div>
      <div class="card stack" style="margin-top:12px"><span class="wlabel">Teil 2 · Kurzmitteilung (3 puntos por cada punto + 1 por saludo y despedida)</span><div id="t2"></div></div>
      <div id="stot" style="margin-top:12px"></div>`, {
      form: el => {
        let n = 0;
        f.fields.forEach(([, okv], k) => { const inp = $("#ff" + k), v = deacc(norm(inp.value)).replace(/\s+/g, " "), good1 = okv.some(o => deacc(norm(o)) === v); if (good1) n++; inp.style.borderColor = good1 ? "var(--ok)" : "var(--bad)"; $("#fa" + k).innerHTML = good1 ? "" : `<span style="color:var(--bad)">Respuesta: ${esc(okv[0])}</span>`; });
        p1 = n; $("#ffr").textContent = n + " / 5"; if (n === 5) good(el, 10); total();
      },
      other: () => { ti = (ti + 1) % D.exam.schreiben.length; drawTask(); },
      model: () => {
        $("#evo").innerHTML = `<div class="trap"><span class="wlabel">Modelo (~30 palabras)</span><p class="exde" style="margin-top:6px">${esc(D.exam.models[ti])}</p></div>
          <div class="card"><span class="wlabel">Revisa tu texto</span><ul style="margin:6px 0 0 18px"><li>¿Saludo (Liebe/Lieber/Hallo) y despedida (Viele Grüße)?</li><li>¿Respondes a los tres puntos?</li><li>¿Verbo en posición 2 en cada frase?</li><li>¿Sustantivos con mayúscula?</li></ul>
          <div class="row" style="margin-top:8px"><span class="small muted">Tu nota:</span>${[0, 4, 7, 10].map(v => `<button class="chip" data-act="self" data-n="${v}">${v}</button>`).join("")}</div></div>`;
      },
      self: el => { p2 = +el.dataset.n; total(); addXP(8, el); toast("Guardado: " + p2 + " / 10"); },
      eval: async el => {
        const txt = $("#txt").value.trim(); if (txt.split(/\s+/).length < 8) return toast("Escribe al menos unas frases.");
        const t = D.exam.schreiben[ti]; el.disabled = true; $("#evo").innerHTML = '<p class="muted small">Corrigiendo como un examinador…</p>';
        const prompt = `Eres examinador del Goethe-Zertifikat A1 (Start Deutsch 1), Schreiben Teil 2. Tarea: "${t.task}" Puntos de contenido: 1) ${t.p[0]} 2) ${t.p[1]} 3) ${t.p[2]}.
Texto del candidato (hispanohablante):
"""${txt.slice(0, 1500)}"""
Puntúa con la escala oficial: cada punto de contenido vale 3 (cumplido y comprensible), 1.5 (incompleto o con errores que dificultan entenderlo) o 0 (no aparece o no se entiende). Forma del texto (saludo y despedida adecuados): 1 o 0. La ortografía solo resta si impide entender. Total máximo 10.
Responde SOLO JSON: {"puntos":[{"punto":"texto del punto","nota":3,"comentario":"en español, breve"}],"forma":1,"total":10,"corregido":"el texto completo corregido en alemán","errores":[{"mal":"…","bien":"…","porque":"en español, breve"}],"consejo":"una frase en español"}`;
        try {
          const r = await askJSON(prompt, "default");
          const tot = Math.max(0, Math.min(10, Number(r.total) || 0)); p2 = tot; total(); addXP(15, el);
          $("#evo").innerHTML = `<div class="fb ${tot >= 7 ? "ok" : "mid"}">${tot} / 10</div>
            <div class="card stack" style="gap:6px">${(r.puntos || []).map(x => `<div><b>${esc(x.nota)} / 3</b> · ${esc(x.punto)}<br><span class="small muted">${esc(x.comentario)}</span></div>`).join("")}<div><b>${esc(r.forma)} / 1</b> · Saludo y despedida</div></div>
            ${(r.errores || []).length ? `<div class="card stack" style="gap:6px"><span class="wlabel">Errores</span>${r.errores.map(x => `<div><s style="color:var(--bad)">${esc(x.mal)}</s> → <b style="color:var(--ok)">${esc(x.bien)}</b><br><span class="small muted">${esc(x.porque)}</span></div>`).join("")}</div>` : ""}
            <div class="trap"><span class="wlabel">Versión corregida</span><p class="exde" style="margin-top:6px">${esc(r.corregido || "")}</p></div>${r.consejo ? `<p class="muted">${esc(r.consejo)}</p>` : ""}`;
        } catch (e) { $("#evo").innerHTML = `<p class="small" style="color:var(--bad)">${esc(aiMsg(e))}</p>`; }
        el.disabled = false;
      }
    });
    drawTask();
  }
  function sprechen() {
    const ABC = [["A", "a"], ["B", "be"], ["C", "tse"], ["D", "de"], ["E", "e"], ["F", "ef"], ["G", "gue"], ["H", "ja"], ["I", "i"], ["J", "yot"], ["K", "ka"], ["L", "el"], ["M", "em"], ["N", "en"], ["O", "o"], ["P", "pe"], ["Q", "ku"], ["R", "er"], ["S", "es"], ["T", "te"], ["U", "u"], ["V", "fau"], ["W", "ve"], ["X", "iks"], ["Y", "ípsilon"], ["Z", "tset"], ["Ä", "e abierta"], ["Ö", "ö"], ["Ü", "ü"], ["ß", "es-tset"]];
    let th = pick(D.exam.sprechen2, 1)[0], card = pick(th.karten, 1)[0], pc = pick(D.exam.sprechen3, 1)[0], stopFn = null;
    const scores = {};
    const micBtn = id => `<button class="mic" type="button" data-mic data-act="mic" data-t="${id}">${ICON.mic}<span>Hablar</span></button>`;
    const fin = () => { const v = Object.values(scores); if (v.length === 3) { const pts = Math.round(v.reduce((a, b) => a + b, 0) / 3 * 25); T().exam.sprechen = Math.max(T().exam.sprechen || 0, pts); save(); planDone("out"); $("#sres").innerHTML = `<div class="fb ${pts >= 15 ? "ok" : "mid"}">Estimación: unos ${pts} de 25 puntos.</div>`; } };
    const aiCheck = async (el, task, txt, out) => {
      el.disabled = true; $(out).innerHTML = '<p class="muted small">Escuchando como examinador…</p>';
      try {
        const r = await askJSON(`Eres examinador del Goethe A1 (Sprechen). Tarea: ${task}. Respuesta transcrita del candidato hispanohablante: """${txt.slice(0, 1200)}""". Evalúa si cumple la tarea y la corrección gramatical a nivel A1. Responde SOLO JSON: {"cumple":true,"nota":0.0 a 1.0,"corregido":"versión corregida en alemán","comentario":"1-2 frases en español","modelo":"una respuesta modelo breve en alemán"}`, "quick");
        $(out).innerHTML = `<div class="fb ${r.cumple ? "ok" : "mid"}">${esc(r.comentario || "")}</div>${r.corregido ? `<div class="row" style="flex-wrap:nowrap">${sayBtn(r.corregido, "de-f")}<span class="exde">${esc(r.corregido)}</span></div>` : ""}${r.modelo ? `<p class="small muted">Modelo: ${esc(r.modelo)}</p>` : ""}`;
        addXP(6, el); return Math.max(0, Math.min(1, Number(r.nota) || 0));
      } catch (e) { $(out).innerHTML = `<p class="small" style="color:var(--bad)">${esc(aiMsg(e))}</p>`; return null; }
      finally { el.disabled = false; }
    };
    function draw() {
      page("pruefung", `${back}${whead("🗣️", "Sprechen", `Di cada respuesta en voz alta${CAP.dict ? " con el micrófono" : ""} o escríbela. En el examen no hay tiempo de preparación: practica hasta que salga sola.`, "var(--sun-2)")}
        <div class="card stack"><span class="wlabel">Teil 1 · Sich vorstellen</span>
          <div class="kw" id="kw">${D.exam.sprechen1.map(k => `<span>${esc(k)}</span>`).join("")}</div>
          <textarea id="t1" rows="4" style="font:500 17px/1.5 var(--f-de)" placeholder="Ich heiße … Ich bin … Jahre alt. Ich komme aus …"></textarea>
          <div class="row">${micBtn("t1")}<button class="btn primary" data-act="c1">Comprobar</button><button class="btn" data-ai data-act="ai1">Corrección IA</button></div><div id="o1"></div>
          <details><summary class="small" style="cursor:pointer">También te piden deletrear tu nombre y decir un número</summary><div class="abc" style="margin-top:8px">${ABC.map(([l, s]) => `<button data-act="say" data-t="${l}" data-tag="de-f">${l}<small>${s}</small></button>`).join("")}</div></details></div>
        <div class="card stack" style="margin-top:12px"><span class="wlabel">Teil 2 · Preguntar y responder</span>
          <p class="small muted">Con la tarjeta, haz una pregunta a tu compañero. Luego responde tú.</p>
          <div class="row"><div class="thcard"><small>Thema: ${esc(th.thema)}</small><b>${esc(card)}</b></div><button class="btn sm" data-act="new2">Otra tarjeta</button></div>
          <textarea id="t2s" rows="2" style="font:500 17px/1.5 var(--f-de)" placeholder="Pregunta + respuesta…"></textarea>
          <div class="row">${micBtn("t2s")}<button class="btn" data-act="ex2">Ver ejemplo</button><button class="btn" data-ai data-act="ai2">Corrección IA</button></div><div id="o2"></div></div>
        <div class="card stack" style="margin-top:12px"><span class="wlabel">Teil 3 · Pedir algo</span>
          <p class="small muted">Haz una petición con lo que ves (Können Sie bitte…? / Gibst du mir bitte…? / Ich hätte gern…).</p>
          <div class="row"><div class="thcard"><span class="picard">${pc.pic}</span><small>${esc(pc.hint)}</small></div><button class="btn sm" data-act="new3">Otra tarjeta</button></div>
          <textarea id="t3" rows="2" style="font:500 17px/1.5 var(--f-de)" placeholder="Können Sie bitte …?"></textarea>
          <div class="row">${micBtn("t3")}<button class="btn" data-act="ex3">Ver ejemplo</button><button class="btn" data-ai data-act="ai3">Corrección IA</button></div><div id="o3"></div></div>
        <div id="sres" style="margin-top:12px"></div>`, {
        mic: el => {
          if (stopFn) { stopFn(); return; }
          const ta = $("#" + el.dataset.t), base = ta.value ? ta.value.trim() + " " : "";
          el.classList.add("on"); stopFn = listen("de", txt => { ta.value = base + txt; }, () => { el.classList.remove("on"); stopFn = null; });
          if (!stopFn) el.classList.remove("on");
        },
        c1: el => {
          const v = $("#t1").value; let n = 0;
          $("#kw").innerHTML = KW.map(([k, re]) => { const ok1 = re.test(v); if (ok1) n++; return `<span class="${ok1 ? "ok" : "no"}">${ok1 ? "✓ " : ""}${esc(k)}</span>`; }).join("");
          scores.t1 = n / KW.length; if (n === 7) good(el, 10); else addXP(3, el);
          $("#o1").innerHTML = `<div class="fb ${n === 7 ? "ok" : "mid"}">${n} de 7 datos.${n < 7 ? " Te faltan los marcados en rojo." : " ¡Completo!"}</div><div class="row" style="flex-wrap:nowrap;margin-top:8px">${sayBtn(D.exam.selbst, "de-m")}<span class="small muted">Modelo: ${esc(D.exam.selbst)}</span></div>`;
          fin();
        },
        ai1: async el => { const v = $("#t1").value.trim(); if (!v) return toast("Primero di o escribe tu presentación."); const s = await aiCheck(el, "Teil 1: presentarse con Name, Alter, Land, Wohnort, Sprachen, Beruf, Hobby", v, "#o1"); if (s != null) { scores.t1 = s; fin(); } },
        new2: () => { th = pick(D.exam.sprechen2, 1)[0]; card = pick(th.karten, 1)[0]; redraw(); },
        ex2: el => { const e = D.exam.ex2[card] || ["Was …?", "…"]; $("#o2").innerHTML = `<div class="row" style="flex-wrap:nowrap">${sayBtn(e[0] + " " + e[1], "de-f")}<span class="exde">— ${esc(e[0])}<br>— ${esc(e[1])}</span></div>`; scores.t2 = scores.t2 ?? .6; addXP(3, el); fin(); },
        ai2: async el => { const v = $("#t2s").value.trim(); if (!v) return toast("Primero di o escribe tu pregunta."); const s = await aiCheck(el, `Teil 2: con la tarjeta de tema «${th.thema}» y la palabra «${card}», formular una pregunta adecuada y responderla`, v, "#o2"); if (s != null) { scores.t2 = s; fin(); } },
        new3: () => { pc = pick(D.exam.sprechen3, 1)[0]; redraw(); },
        ex3: el => { $("#o3").innerHTML = `<div class="row" style="flex-wrap:nowrap">${sayBtn(pc.ej, "de-f")}<span class="exde">${esc(pc.ej)}<br><span class="small muted">Reacción: Ja, gern. / Natürlich. / Tut mir leid, das geht nicht.</span></span></div>`; scores.t3 = scores.t3 ?? .6; addXP(3, el); fin(); },
        ai3: async el => { const v = $("#t3").value.trim(); if (!v) return toast("Primero di o escribe tu petición."); const s = await aiCheck(el, `Teil 3: formular una petición (Bitte) adecuada a una tarjeta con la imagen de: ${pc.hint}`, v, "#o3"); if (s != null) { scores.t3 = s; fin(); } }
      });
    }
    function redraw() {
      const keep = ["t1", "t2s", "t3"].map(id => [id, ($("#" + id) || {}).value || ""]), y = window.scrollY;
      draw(); keep.forEach(([id, v]) => { if ($("#" + id)) $("#" + id).value = v; }); window.scrollTo(0, y);
    }
    draw();
  }

  /* ================= UMGANGSSPRACHE ================= */
  function umgang(filter = "") {
    AUD.prefetch("d-slang");
    const groups = [["", "Todos"], ["überall", "En todas partes"], ["Jugend", "Jóvenes"], ["Norden", "Norte"], ["Süden", "Sur y Austria"], ["Ruhrpott", "Ruhrpott"], ["Berlin", "Berlín"]];
    const list = D.slang.filter(s => !filter || s.g === filter);
    page("umgangssprache", `${whead("🗣️", "Umgangssprache", "Lo que no sale en el libro pero oirás desde el primer día. Con los padres de tu pareja, mejor lo «neutral».", "var(--hib-2)")}
      <div class="row" style="margin-bottom:14px">${groups.map(([k, l]) => `<button class="chip" data-act="f" data-g="${k}" aria-pressed="${filter === k}">${l}</button>`).join("")}</div>
      <div class="slg">${list.map(s => `<div class="sl"><div class="row" style="gap:6px"><span class="reg">${esc(s.g)}</span><span class="reg ${s.reg === "muy informal" ? "hot" : ""}">${esc(s.reg)}</span><span class="spacer"></span>${sayBtn(s.de, "de-m")}</div>
        <div class="d">${esc(s.de)}</div><div>${esc(s.es)}</div>
        <div class="row" style="flex-wrap:nowrap;gap:6px">${sayBtn(s.ex, "de-f")}<span class="exde" style="font-size:15px;font-style:italic">${esc(s.ex)}</span></div>
        <button class="btn sm" data-act="add" data-k="${D.slang.indexOf(s)}" style="justify-self:start">+ A mis tarjetas</button></div>`).join("")}</div>`, {
      f: el => umgang(el.dataset.g),
      add: el => { const s = D.slang[+el.dataset.k]; if (T().custom.some(c => c.w === s.de)) return toast("Ya está en tus tarjetas"); T().custom.push({ id: "my:" + s.de + ":" + Date.now(), th: "mine", art: "", w: s.de, pl: "", es: s.es, ex: s.ex }); save(); SFX.play("pop"); toast("Añadida a tus tarjetas"); el.disabled = true; }
    });
  }

  /* ================= KULTUR ================= */
  function kultur() {
    AUD.prefetch("d-v-winter");
    const t0 = new Date(today() + "T12:00").getTime();
    const phr = BASE.filter(c => c.th === "winter" || ["Frohe Weihnachten!", "Guten Rutsch!", "Frohes neues Jahr!", "Prost! / Zum Wohl!", "Danke für die Einladung."].includes(c.w)).slice(0, 16);
    page("kultur", `${whead("🎄", "Kultur", "Normas que en Alemania se dan por sabidas, sobre todo en casa de una familia alemana.", "var(--leaf-2)")}
      <div class="slg">${D.culture.map(c => `<div class="sl"><h3 style="font-size:19px">${esc(c.t)}</h3><p class="small">${esc(c.d)}</p></div>`).join("")}</div>
      <h2 class="wf" style="font-size:20px;margin:22px 0 10px">Calendario de invierno 2026/27</h2>
      <div class="card cal">${D.winter.map(e => { const dd = Math.round((new Date(e.d + "T12:00").getTime() - t0) / DAY), dt = new Date(e.d + "T12:00").toLocaleDateString("de-DE", { day: "numeric", month: "short" }); return `<div class="ev ${dd < 0 ? "past" : ""}"><div class="dd">${esc(dt)}<small>${dd === 0 ? "hoy" : dd > 0 ? "en " + dd + " días" : "pasó"}</small></div><div><b class="wf">${esc(e.t)}</b><p class="small muted">${esc(e.e)}</p></div></div>`; }).join("")}</div>
      <h2 class="wf" style="font-size:20px;margin:22px 0 10px">Frases de la temporada</h2>
      <div class="card stack" style="gap:10px">${phr.map(c => `<div class="row" style="flex-wrap:nowrap">${c.ex ? sayBtn(c.ex, eTag(c)) : sayBtn(wordText(c), wTag(c))}<div><b class="exde">${wordHtml(c)}</b> <span class="muted">· ${esc(c.es)}</span>${c.ex ? `<div class="small muted">${esc(c.ex)}</div>` : ""}</div></div>`).join("")}</div>`);
  }

  /* ================= TUTOR IA ================= */
  let TUT = null;
  function tutor() {
    if (!aiOK()) {
      return page("tutor", `${whead("💬", "Tutor IA", "Conversación con corrección en español.", "var(--grape-2)")}
        <div class="card stack"><p>El tutor usa Claude y se activa cuando abres la página con tu cuenta de Claude. Mientras tanto, lo que más se parece a conversar:</p>
        <div class="row"><a class="btn primary" href="#werkstatt-pruefung-sprechen">Examen oral A1</a><a class="btn" href="#werkstatt-hoeren">Shadowing de diálogos</a></div></div>`);
    }
    if (!TUT) TUT = { scene: D.scenes[0], msgs: [{ r: "ai", de: D.scenes[0].start, es: "", ideas: [] }] };
    let busy = false, stopFn = null;
    const lvl = T().level;
    function draw() {
      page("tutor", `${whead("💬", TUT.scene.t, "Escribe o habla como puedas: el tutor sigue la charla y te muestra la versión correcta.", "var(--grape-2)")}
        <div class="row" style="margin-bottom:8px">${D.scenes.map(s => `<button class="chip" data-act="sc" data-id="${s.id}" aria-pressed="${s === TUT.scene}">${esc(s.t)}</button>`).join("")}</div>
        <div class="row" style="margin-bottom:16px"><span class="small muted">Nivel:</span>${["A1", "A2"].map(l => `<button class="chip" data-act="lv" data-l="${l}" aria-pressed="${lvl === l}">${l}</button>`).join("")}<span class="spacer"></span><button class="btn sm" data-act="reset">Empezar de nuevo</button></div>
        <div class="chat2" id="cw">${TUT.msgs.map((m, k) => m.r === "ai"
          ? `<div class="tmsg ai"><div class="row" style="flex-wrap:nowrap;align-items:flex-start">${sayBtn(m.de, "de-f")}<div class="de">${esc(m.de)}</div></div>${m.es ? `<details><summary class="small muted" style="cursor:pointer">Traducción</summary><p class="small">${esc(m.es)}</p></details>` : ""}${k === TUT.msgs.length - 1 && m.ideas && m.ideas.length ? `<div class="row" style="gap:6px">${m.ideas.map(x => `<button class="chip" data-act="idea" data-t="${esc(x)}">${esc(x)}</button>`).join("")}</div>` : ""}</div>`
          : `<div class="tmsg me"><div class="de">${esc(m.de)}</div>${m.fix ? `<div class="fix">✏️ <b>${esc(m.fix.mejor || "")}</b><br>${esc(m.fix.porque || "")}</div>` : m.ok ? '<span class="small" style="opacity:.8">✓ Bien dicho</span>' : ""}</div>`).join("")}
          ${busy ? '<div class="tmsg ai"><span class="muted">…</span></div>' : ""}</div>
        <form class="row" id="tf" style="margin-top:14px;flex-wrap:nowrap"><input id="tin" autocomplete="off" placeholder="Schreib auf Deutsch …" style="font:500 17px var(--f-de)"><button class="mic" type="button" data-mic data-act="mic" aria-label="Hablar">${ICON.mic}</button><button class="btn primary" type="submit">Enviar</button></form>`, {
        sc: el => { const s = D.scenes.find(x => x.id === el.dataset.id); TUT = { scene: s, msgs: [{ r: "ai", de: s.start, es: "", ideas: [] }] }; draw(); },
        lv: el => { T().level = el.dataset.l; save(); tutor(); },
        reset: () => { TUT = { scene: TUT.scene, msgs: [{ r: "ai", de: TUT.scene.start, es: "", ideas: [] }] }; draw(); },
        idea: el => { $("#tin").value = el.dataset.t; $("#tin").focus(); },
        mic: el => { if (stopFn) { stopFn(); return; } el.classList.add("on"); stopFn = listen("de", txt => { $("#tin").value = txt; }, () => { el.classList.remove("on"); stopFn = null; }); if (!stopFn) el.classList.remove("on"); }
      });
      $("#tf").addEventListener("submit", e => { e.preventDefault(); send($("#tin").value); });
      const cw = $("#cw"); cw.lastElementChild && cw.lastElementChild.scrollIntoView({ block: "nearest" });
    }
    async function send(text) {
      text = String(text || "").trim(); if (!text || busy) return;
      const me = { r: "me", de: text }; TUT.msgs.push(me); busy = true; draw();
      const transcript = TUT.msgs.slice(-14).map(m => (m.r === "ai" ? "A: " : "B: ") + m.de).join("\n");
      const prompt = `Eres compañero de conversación y tutor de alemán para un hispanohablante de nivel ${lvl} (está terminando el curso A1.4). Escenario: ${TUT.scene.t}. Tú haces de: ${TUT.scene.role}.
Reglas:
- Responde SIEMPRE en alemán de nivel ${lvl}: como mucho 2 frases cortas (unas 20 palabras), vocabulario frecuente, y termina con una pregunta o algo que invite a seguir.
- Mantente en tu papel y haz avanzar la situación de forma realista (precios, horarios, nombres alemanes inventados).
- Revisa SOLO el último mensaje del alumno (B). Si tiene errores de gramática, orden de palabras, artículo, mayúsculas de sustantivos o elección de palabra, da la frase corregida y una explicación breve en español. Si está bien o solo tiene un error mínimo de tecleo, "correccion" es null.
- En "ideas" propón 2 respuestas cortas que el alumno podría dar a tu mensaje, a su nivel.
Conversación (A = tú, B = alumno):
${transcript}
Devuelve SOLO JSON: {"reply":"tu respuesta en alemán","es":"traducción al español","correccion":null,"ideas":["…","…"]} o con "correccion":{"mejor":"frase corregida","porque":"explicación en español"}`;
      try {
        const r = await askJSON(prompt, "quick");
        if (r.correccion && r.correccion.mejor) me.fix = { mejor: String(r.correccion.mejor), porque: String(r.correccion.porque || "") }; else me.ok = true;
        TUT.msgs.push({ r: "ai", de: String(r.reply || "…"), es: String(r.es || ""), ideas: Array.isArray(r.ideas) ? r.ideas.slice(0, 3).map(String) : [] });
        T().tutorN = (T().tutorN || 0) + 1; busy = false; planDone("out"); logActivity("de", 2); addXP(4); draw();
        speak("de-f", TUT.msgs[TUT.msgs.length - 1].de);
      } catch (e) { busy = false; draw(); toast(aiMsg(e)); }
    }
    draw();
  }

  /* ================= MI CURSO ================= */
  function kurs() {
    const c = T().course, tot = D.course.reduce((a, l) => a + l.items.length, 0), done = Object.values(c).filter(Boolean).length;
    page("kurs", `${whead("✅", "Mi curso", "Marca lo que tu profesor ya explicó. El plan diario elige la gramática entre lo marcado, empezando por lo que menos dominas.", "var(--leaf-2)")}
      <div class="bar" style="max-width:420px;margin:4px 0 6px"><i style="width:${(done / tot) * 100}%;background:var(--das)"></i></div><p class="small muted" style="margin-bottom:14px">${done} de ${tot} temas marcados</p>
      <div class="two">${D.course.map(l => `<div class="card"><span class="wlabel">${esc(l.lvl)}</span>${l.items.map(([id, t, g]) => `<label class="chk"><input type="checkbox" data-id="${id}" ${c[id] ? "checked" : ""}><span>${esc(t)}${g.length ? `<br><span class="small">${g.map(x => { const gg = D.grammar.find(y => y.id === x); return gg ? `<a href="#werkstatt-grammatik-${x}">${esc(gg.title)}</a>` : ""; }).join(" · ")}</span>` : ""}</span></label>`).join("")}</div>`).join("")}</div>
      <div class="card" style="margin-top:12px"><span class="wlabel">Después de cada clase</span><p style="margin-top:6px">Mete las palabras nuevas en tus tarjetas el mismo día: mañana empiezan a repasarse solas. <a href="#werkstatt-wortschatz">Ir a Wörter →</a></p></div>`);
    $$('.chk input[data-id]').forEach(inp => inp.addEventListener("change", () => { c[inp.dataset.id] = inp.checked; save(); SFX.play(inp.checked ? "pop" : "tap"); }));
  }

  function route(parts) {
    const [a, b] = parts;
    if (a === "repaso") return repaso();
    if (a === "wortschatz") return wortschatz();
    if (a === "grammatik") return grammatik(b);
    if (a === "hoeren") return hoeren(b);
    if (a === "aussprache") return aussprache();
    if (a === "pruefung") return pruefung(b);
    if (a === "umgangssprache") return umgang();
    if (a === "kultur") return kultur();
    if (a === "tutor") return tutor();
    if (a === "kurs") return kurs();
    return hoy();
  }
  return { route };
})();
