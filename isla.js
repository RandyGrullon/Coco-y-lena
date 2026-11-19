/* Isla Ñ — el mundo del niño (español). Pensado para iPad: todo se toca, nada depende del ratón. */
$("#css-isla").textContent = `
.isla{font-family:var(--f-body)}
.isla h1,.isla h2,.isla h3,.kf{font-family:var(--f-kid)}
.kh{display:block;font:700 14px/1.3 var(--f-body);color:var(--ink-2)}
.kbtn{font:800 19px/1.1 var(--f-kid);border:0;border-radius:18px;padding:13px 20px;background:var(--surface);color:var(--ink);box-shadow:0 5px 0 var(--line),inset 0 0 0 2px var(--line);min-height:58px;display:inline-flex;gap:8px;align-items:center;justify-content:center;text-decoration:none;transition:transform .08s}
.kbtn:active{transform:translateY(3px);box-shadow:0 2px 0 var(--line),inset 0 0 0 2px var(--line)}
.kbtn.go{background:#FFD166;color:#3A2A00;box-shadow:0 5px 0 #C99A2E}
.kbtn.sea{background:var(--sea);color:#fff;box-shadow:0 5px 0 var(--sea-deep)}
.kbtn.hib{background:var(--hib);color:#fff;box-shadow:0 5px 0 #A82652}
.kbtn.leaf{background:var(--leaf);color:#fff;box-shadow:0 5px 0 #23804A}
.kbtn.sm{min-height:46px;padding:8px 15px;font-size:16px;border-radius:14px}
.kbtn:disabled{opacity:.45}

/* HUD */
.hud{display:flex;gap:8px;flex-wrap:wrap;align-items:center}
.pill{display:inline-flex;gap:6px;align-items:center;background:var(--surface);border:2px solid var(--line);border-radius:999px;padding:6px 13px;font:800 18px/1 var(--f-kid);font-variant-numeric:tabular-nums;white-space:nowrap}
.pill.coins{background:var(--sun-2);border-color:#F5D58A}
.pill.bump{animation:pbump .35s}
@keyframes pbump{50%{transform:scale(1.18)}}

/* mapa */
.map-grid{display:grid;grid-template-columns:minmax(260px,320px) minmax(0,1fr) minmax(260px,320px);gap:20px;align-items:start}
.side{display:grid;gap:16px;align-content:start;position:sticky;top:calc(var(--toph) + 16px + env(safe-area-inset-top,0px))}
.coco-card{background:linear-gradient(170deg,var(--sea-2),var(--surface));border:2px solid var(--line);border-radius:26px;padding:16px;display:grid;justify-items:center;gap:8px;text-align:center}
.coco-card .coco{cursor:pointer}
.bubble-c{position:relative;background:var(--surface);border:2px solid var(--line);border-radius:20px;padding:10px 14px;font:800 20px/1.25 var(--f-kid);width:100%}
.bubble-c::before{content:"";position:absolute;top:-10px;left:50%;margin-left:-9px;border:9px solid transparent;border-top:0;border-bottom-color:var(--line)}
.bubble-c .kh{font-size:13px;margin-top:2px}
.rank{font:800 15px/1 var(--f-kid);color:var(--sea-deep);background:var(--surface);border-radius:999px;padding:5px 11px}
.mission{background:var(--surface);border:2px solid var(--line);border-radius:24px;padding:14px;display:grid;gap:10px}
.mission h2{font-size:21px}
.m-item{display:flex;gap:10px;align-items:center;padding:10px 12px;border-radius:16px;background:var(--surface-2);text-decoration:none;font:800 16px/1.2 var(--f-kid);min-height:56px}
.m-item .ck{width:32px;height:32px;border-radius:50%;border:3px solid var(--line);display:grid;place-items:center;flex:none;background:var(--surface);font-size:16px}
.m-item.ok .ck{background:var(--leaf);border-color:var(--leaf);color:#fff}
.chest-btn{display:flex;gap:10px;align-items:center;justify-content:center;border:0;border-radius:18px;padding:10px;background:var(--sun-2);font:800 17px var(--f-kid);min-height:56px}
.chest-btn .c{font-size:34px}
.chest-btn.ready{background:#FFD166;box-shadow:0 5px 0 #C99A2E;animation:wiggle 1.4s ease-in-out infinite}
@keyframes wiggle{0%,60%,100%{transform:rotate(0)}70%{transform:rotate(-4deg)}80%{transform:rotate(4deg)}90%{transform:rotate(-2deg)}}
.sea{position:relative;border-radius:30px;padding:26px 10px 40px;background:radial-gradient(120px 40px at 15% 12%,rgba(255,255,255,.25),transparent 70%),radial-gradient(160px 50px at 85% 40%,rgba(255,255,255,.18),transparent 70%),radial-gradient(140px 40px at 20% 78%,rgba(255,255,255,.18),transparent 70%),linear-gradient(180deg,#5FD0DA,#18A8B8 55%,#0E8FA6);overflow:hidden;min-height:400px}
.sea h2{color:#fff;text-align:center;font-size:26px;text-shadow:0 2px 0 rgba(0,0,0,.15)}
.sea .sub{color:rgba(255,255,255,.9);text-align:center;font-weight:700;margin-bottom:8px}
.path{position:relative;display:grid;gap:30px;padding:18px 0}
.path svg.route{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;overflow:visible}
.node{position:relative;justify-self:center;left:calc(var(--x) * 1%);display:grid;justify-items:center;gap:6px;text-decoration:none;color:#fff;width:150px;text-align:center}
.disc{position:relative;width:108px;height:108px;border-radius:50%;display:grid;place-items:center;background:conic-gradient(#FFD166 calc(var(--p) * 1%),rgba(255,255,255,.35) 0);padding:7px;box-shadow:0 8px 0 rgba(0,0,0,.12);transition:transform .15s}
.disc .in{width:100%;height:100%;border-radius:50%;display:grid;place-items:center;font-size:48px;background:radial-gradient(circle at 50% 70%,#FFE7A8 0 55%,#F5C46B 56% 70%,#52C27A 71%)}
.node:active .disc{transform:scale(.95)}
.node.cur .disc{animation:glow 1.6s ease-in-out infinite}
@keyframes glow{50%{box-shadow:0 8px 0 rgba(0,0,0,.12),0 0 0 12px rgba(255,255,255,.35)}}
.node.done .disc{background:conic-gradient(#FFD166 100%,transparent 0)}
.node .stk{position:absolute;right:-6px;top:-6px;font-size:30px;filter:drop-shadow(0 2px 0 rgba(0,0,0,.2))}
.nlabel{font:800 18px/1.15 var(--f-kid);text-shadow:0 2px 0 rgba(0,0,0,.18)}
.nlabel small{display:block;font:700 13px/1.2 var(--f-body);opacity:.9;text-shadow:none}
.node .here{position:absolute;left:-74px;top:4px}
.node .here .tip{position:absolute;top:-30px;left:6px;background:#fff;color:var(--ink);font:800 14px var(--f-kid);border-radius:12px;padding:4px 8px;white-space:nowrap}
.games{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}
.gt{border-radius:20px;padding:12px;text-decoration:none;display:grid;gap:2px;align-content:start;min-height:104px;border:0;text-align:left;color:var(--ink);box-shadow:0 4px 0 rgba(0,0,0,.07)}
.gt .pic{font-size:34px;line-height:1.1}
.gt b{font:800 17px/1.15 var(--f-kid)}
.gt .kh{font-size:12.5px}
.gt.c1{background:var(--sun-2)} .gt.c2{background:var(--hib-2)} .gt.c3{background:var(--leaf-2)} .gt.c4{background:var(--sea-2)} .gt.c5{background:var(--grape-2)}
.badge{display:inline-block;background:var(--hib);color:#fff;font:800 12px/1 var(--f-kid);border-radius:999px;padding:3px 7px;margin-left:4px;vertical-align:middle}

/* pantalla de juego */
.stage{max-width:880px;margin:0 auto;display:grid;gap:14px}
.gbar{display:flex;gap:10px;align-items:center;position:sticky;top:calc(var(--toph) + env(safe-area-inset-top,0px));z-index:5;background:var(--bg);padding:6px 0}
.gx{width:50px;height:50px;border-radius:16px;display:grid;place-items:center;background:var(--surface);border:2px solid var(--line);text-decoration:none;flex:none;color:var(--ink)}
.gprog{flex:1;display:flex;gap:6px;min-width:0}
.gprog i{flex:1;height:14px;border-radius:99px;background:var(--surface-2)}
.gprog i.on{background:var(--leaf)} .gprog i.cur{background:linear-gradient(90deg,var(--leaf) 50%,var(--surface-2) 50%)}
.combo{font:800 18px/1 var(--f-kid);color:#E2562B;white-space:nowrap}
.steps{display:flex;gap:8px;overflow-x:auto;padding-bottom:4px;scrollbar-width:none}
.steps::-webkit-scrollbar{display:none}
.step{display:flex;gap:8px;align-items:center;padding:6px 14px 6px 6px;border-radius:999px;background:var(--surface);border:2px solid var(--line);font:800 15px/1 var(--f-kid);white-space:nowrap;min-height:44px}
.step .n{width:30px;height:30px;border-radius:50%;display:grid;place-items:center;background:var(--surface-2);font-size:14px}
.step.ok .n{background:var(--leaf);color:#fff}
.step.cur{border-color:var(--sea);background:var(--sea-2)}
.gcard{background:var(--surface);border:2px solid var(--line);border-radius:28px;padding:20px;display:grid;gap:16px}
.ghead{display:flex;gap:12px;align-items:center}
.ghead .t{font:800 21px/1.2 var(--f-kid)}
.ghead .t small{display:block;font:700 14px/1.3 var(--f-body);color:var(--ink-2)}
.ghead .count{margin-left:auto;font:800 16px var(--f-kid);background:var(--surface-2);border-radius:999px;padding:6px 12px;white-space:nowrap}
.narr{border:0;background:var(--grape-2);color:var(--grape);width:44px;height:44px;border-radius:50%;flex:none;font-size:20px}
.coach-k{display:flex;gap:10px;align-items:flex-end;justify-content:flex-end}
.coach-k .bubble-c{width:auto;max-width:300px;font-size:17px;border-bottom-right-radius:6px}
.coach-k .bubble-c::before{display:none}
.story{display:grid;gap:12px}
.brow{display:flex;gap:10px;align-items:flex-start}
.ava{width:54px;height:54px;border-radius:50%;display:grid;place-items:center;font-size:30px;background:var(--surface-2);flex:none;position:relative}
.ava .fl{position:absolute;right:-4px;bottom:-4px;font-size:18px}
.bub{background:var(--surface-2);border:2px solid transparent;border-radius:22px;border-top-left-radius:6px;padding:10px 16px;text-align:left;display:grid;gap:2px;flex:1;min-width:0;max-width:620px;min-height:54px}
.bub .who{font:800 12px/1 var(--f-body);color:var(--ink-2);text-transform:uppercase;letter-spacing:.06em}
.bub .es{font:800 22px/1.3 var(--f-kid)}
.bub.on{border-color:var(--sea);background:var(--sea-2)}
.lpic{font-size:34px;flex:none;align-self:center}
.note-k{background:var(--sun-2);border-radius:20px;padding:14px 16px;font:800 18px/1.3 var(--f-kid)}
.qblock{display:grid;gap:10px}
.qt{font:800 21px/1.3 var(--f-kid)}
.qopts{display:flex;gap:10px;flex-wrap:wrap}
.qopt{font:800 19px/1.2 var(--f-kid);border:2px solid var(--line);background:var(--surface);border-radius:18px;padding:12px 16px;box-shadow:0 4px 0 var(--line);min-height:56px}
.ok-x{background:var(--leaf-2)!important;border-color:var(--leaf)!important}
.bad-x{background:var(--hib-2)!important;border-color:var(--hib)!important;animation:shake .35s}
@keyframes shake{25%{transform:translateX(-6px)}75%{transform:translateX(6px)}}
.wgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:12px}
.wcard{background:var(--surface-2);border-radius:22px;padding:10px;display:grid;gap:8px;align-content:start}
.wmain{border:0;background:var(--surface);border-radius:18px;display:grid;gap:2px;justify-items:center;text-align:center;padding:12px 6px;box-shadow:0 4px 0 var(--line)}
.wmain .wp{font-size:56px;line-height:1.1}
.wmain .we{font:800 21px/1.2 var(--f-kid)}
.wmain.heard{box-shadow:0 4px 0 var(--leaf),inset 0 0 0 2px var(--leaf)}
.vary{display:flex;flex-wrap:wrap;gap:5px;justify-content:center}
.vchip{border:2px solid var(--line);background:var(--surface);border-radius:999px;padding:5px 10px;font:800 14px/1.2 var(--f-body);min-height:36px}
.big-play{width:96px;height:96px;border-radius:50%;border:0;background:var(--sea);color:#fff;font-size:42px;box-shadow:0 6px 0 var(--sea-deep);justify-self:center}
.big-play.on{animation:bump .5s ease infinite alternate}
.opts{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;width:100%;max-width:620px;justify-self:center}
.opt{font:800 23px/1.2 var(--f-kid);border:2px solid var(--line);background:var(--surface);border-radius:24px;padding:14px;min-height:clamp(96px,16vw,150px);box-shadow:0 5px 0 var(--line)}
.opt.pic{font-size:clamp(54px,9vw,84px);line-height:1}
.opt:active{transform:translateY(3px);box-shadow:0 2px 0 var(--line)}
.prompt-word{font:800 clamp(32px,6vw,48px)/1.15 var(--f-kid);text-align:center}
.fb-k{text-align:center;font:800 24px/1.2 var(--f-kid);min-height:30px}
.mem{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;width:100%;max-width:640px;justify-self:center}
.mc{aspect-ratio:1/1;border-radius:20px;border:0;background:linear-gradient(160deg,#25BCC8,#0E95B8);color:#fff;font:800 clamp(15px,2.6vw,22px)/1.1 var(--f-kid);box-shadow:0 5px 0 var(--sea-deep);padding:6px;display:grid;place-items:center;max-width:100%;overflow:hidden;word-break:break-word;transition:transform .2s}
.mc.open{background:var(--surface);color:var(--ink);box-shadow:0 5px 0 var(--line),inset 0 0 0 2px var(--line);transform:rotateY(180deg) scaleX(-1)}
.mc.open.p{font-size:clamp(36px,7vw,58px)}
.mc.found{background:var(--leaf-2);color:var(--ink);box-shadow:inset 0 0 0 2px var(--leaf)}
.build-ans{min-height:76px;border:3px dashed var(--line);border-radius:22px;padding:10px;display:flex;flex-wrap:wrap;gap:10px;align-items:center;justify-content:center}
.toks{display:flex;flex-wrap:wrap;gap:10px;justify-content:center}
.tok{font:800 22px/1 var(--f-kid);border:2px solid var(--line);background:var(--surface);border-radius:16px;padding:13px 15px;box-shadow:0 4px 0 var(--line);min-height:54px}
.tok.used{visibility:hidden}
.tok.in{background:var(--sea-2);border-color:var(--sea)}
.sp-list{display:grid;gap:12px}
.sp-item{background:var(--surface-2);border-radius:22px;padding:12px 14px;display:flex;gap:12px;align-items:center;flex-wrap:wrap}
.sp-item .pic{font-size:44px}
.sp-item .t{font:800 22px/1.2 var(--f-kid)}
.sp-out{font:700 15px/1.3 var(--f-body);color:var(--ink-2);min-height:20px}
.slangs{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:12px}
.slang{background:var(--surface-2);border-radius:22px;padding:14px;display:grid;gap:4px;align-content:start}
.slang .e{font:800 24px/1.2 var(--f-kid)}
.slang .flag{font-size:26px}
.slang .ex{font-style:italic;color:var(--ink-2)}
.flags{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;width:100%;max-width:620px;justify-self:center}
.timer{font:800 34px/1 var(--f-kid);font-variant-numeric:tabular-nums;color:var(--hib)}
.simon-cmd{min-height:130px;display:grid;place-items:center;text-align:center}
.filters{display:flex;gap:6px;flex-wrap:wrap}
.retos{display:grid;gap:10px}
.reto{display:flex;gap:12px;align-items:center;background:var(--surface-2);border-radius:20px;padding:12px 14px}
.reto .t{font:800 18px/1.3 var(--f-kid);flex:1;min-width:0}
.reto.today{background:var(--sun-2);box-shadow:inset 0 0 0 2px #F5D58A}
.album{display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:12px}
.stk-c{background:var(--surface-2);border-radius:22px;padding:14px;text-align:center;display:grid;gap:4px}
.stk-c .pic{font-size:52px}
.stk-c.locked .pic{filter:grayscale(1);opacity:.25}
.stk-c b{font:800 15px/1.2 var(--f-kid)}
.shop-top{display:grid;grid-template-columns:auto 1fr;gap:20px;align-items:center}
.shop{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:12px}
.item{background:var(--surface-2);border-radius:22px;padding:12px;display:grid;gap:6px;justify-items:center;text-align:center}
.item .pic{font-size:52px}
.item.worn{box-shadow:inset 0 0 0 3px var(--leaf)}
.cchat{display:grid;gap:10px}
.cmsg{padding:12px 16px;border-radius:22px;max-width:88%}
.cmsg.coco{background:var(--sea-2);justify-self:start;border-top-left-radius:6px}
.cmsg.kid{background:var(--sun-2);justify-self:end;border-top-right-radius:6px}
.cmsg .es{font:800 20px/1.3 var(--f-kid)}
.rw-coins{font:800 30px/1 var(--f-kid);color:var(--sun-deep)}
.chest-anim{font-size:96px;line-height:1;animation:chest 1s ease-in-out}
@keyframes chest{0%,100%{transform:none}20%{transform:rotate(-10deg) scale(1.05)}40%{transform:rotate(10deg) scale(1.1)}60%{transform:rotate(-6deg) scale(1.15)}}


/* archipiélagos por nivel */
.seas{display:grid;gap:18px;min-width:0}
.sea-h{display:flex;gap:12px;align-items:center;justify-content:center;color:#fff;text-align:left}
.sea-h h2{font-size:24px;text-align:left}
.sea-h .sub{text-align:left;margin:0}
.sea-pic{font-size:44px}
.sea.lv-A2{background:radial-gradient(120px 40px at 15% 12%,rgba(255,255,255,.22),transparent 70%),linear-gradient(180deg,#FF9A8B,#F0607E 60%,#C9406A)}
.sea.lv-B1{background:radial-gradient(120px 40px at 80% 10%,rgba(255,255,255,.18),transparent 70%),linear-gradient(180deg,#9B7BF0,#6A4FD1 60%,#46339C)}
.sea.lv-B2{background:radial-gradient(2px 2px at 20% 20%,#fff,transparent),radial-gradient(2px 2px at 70% 35%,#fff,transparent),radial-gradient(1.5px 1.5px at 40% 70%,#fff,transparent),linear-gradient(180deg,#2B3F8F,#1A2766 60%,#0E1640)}
.sea.locked .path{filter:grayscale(.8) opacity(.55)}
.lockmsg{color:#fff;text-align:center;font-weight:800;margin:6px 0 0}
.lockmsg a{color:#FFE08A}
.node.boss .disc{background:conic-gradient(#FFD166 calc(var(--p) * 1%),rgba(255,255,255,.35) 0)}
.node.boss .disc .in{background:radial-gradient(circle at 50% 60%,#FFF1C2 0 60%,#F5C46B 61%)}
.opt small.ow{display:block;font:700 14px/1.2 var(--f-body);margin-top:6px;color:var(--ink-2)}
.opts.six{grid-template-columns:repeat(3,minmax(0,1fr))}
.opts.six .opt.pic{font-size:clamp(40px,7vw,64px);min-height:clamp(84px,13vw,120px)}
@media (max-width:1080px){
  .map-grid{grid-template-columns:minmax(0,1fr) minmax(260px,300px)}
  .map-grid .side.left{grid-column:1/-1;position:static;grid-template-columns:minmax(0,1.1fr) minmax(0,1fr);align-items:stretch}
  .map-grid .side.left .coco-card{grid-template-columns:auto 1fr;justify-items:start;text-align:left;align-items:center}
}
@media (max-width:760px){
  .map-grid{grid-template-columns:minmax(0,1fr)}
  .side{position:static}
  .map-grid .side.left{grid-template-columns:minmax(0,1fr)}
  .node .here{display:none}
  .disc{width:92px;height:92px}.disc .in{font-size:40px}
  .gcard{padding:16px;border-radius:24px}
  .bub .es{font-size:19px}.lpic{display:none}
  .opts{gap:10px}
  .mem{gap:8px}
  .shop-top{grid-template-columns:1fr;justify-items:center;text-align:center}
}
@media (max-width:420px){.flags{grid-template-columns:minmax(0,1fr)}}
.map-grid>*,.side>*{min-width:0}`;

window.Isla = (() => {
  const T = () => S.es;
  const H = () => (S.settings.help === "en" ? "en" : "de");
  const hp = o => (o && (o[H()] || o.de)) || "";
  const ui = k => ES.ui[k];
  const NT = () => (S.settings.accent === "es" ? "k-es" : "k-lat");
  const unitById = id => ES.units.find(u => u.id === id);
  const allWords = () => ES.units.flatMap(u => u.words.map((w, i) => ({ ...w, key: u.id + ":" + i, unit: u.id })));
  const slangByEs = es => ES.slang.find(s => s.es === es);
  const UP = id => (T().units[id] = T().units[id] || { steps: [false, false, false, false, false], done: false });
  const sayW = (t, btn) => speak(NT(), t, { btn });
  const EXTRA = [
    ["racha3", "🔥", "3 días seguidos", "3 Tage in Folge", "3 days in a row"],
    ["racha7", "🏅", "7 días seguidos", "7 Tage in Folge", "7 days in a row"],
    ["e100", "💯", "100 estrellas", "100 Sterne", "100 stars"],
    ["e300", "🚀", "300 estrellas", "300 Sterne", "300 stars"],
    ["retos5", "🤝", "5 retos con un adulto", "5 Aufgaben mit Erwachsenen", "5 challenges with an adult"],
    ["rapido", "⚡", "10 en el contrarreloj", "10 Punkte gegen die Uhr", "10 points against the clock"],
    ["memoria", "🧠", "Memoria de campeón", "Memory-Champion", "Memory champion"],
    ["simon", "🦘", "Simón dice sin fallos", "Simon sagt ohne Fehler", "Simon says, no mistakes"],
    ["tienda", "🛍️", "Primera compra", "Erster Einkauf", "First purchase"],
    ["charla", "💬", "Charlar con Coco", "Mit Coco plaudern", "Chat with Coco"]
  ];

  /* ---------- premios y Coco ---------- */
  const stage = () => { let s = 0; ES.coco.forEach((c, i) => { if (T().stars >= c.min) s = i; }); return s; };
  let combo = 0;
  function hudPaint() {
    const c = $("#hud-coins"); if (c) { c.textContent = T().coins; c.parentElement.classList.remove("bump"); void c.offsetWidth; c.parentElement.classList.add("bump"); }
    const s = $("#hud-stars"); if (s) s.textContent = T().stars;
    const k = $("#combo"); if (k) { k.hidden = combo < 2; k.textContent = "🔥 x" + combo; }
  }
  function addCoins(n, el) { if (n <= 0) return; T().coins += n; save(); floatText("+" + n + " 🪙", el); setTimeout(() => SFX.play("coin"), 90); hudPaint(); }
  function addStars(n) {
    if (n <= 0) return;
    const before = stage(); T().stars += n; logActivity("es", n);
    if (stage() !== before) setTimeout(() => { confetti(); SFX.play("level"); toast("¡Coco es ahora " + ES.coco[stage()].es + "!"); }, 900);
    checkStickers(); hudPaint();
  }
  function sticker(id) { if (!T().stickers.includes(id)) { T().stickers.push(id); save(); setTimeout(() => toast("¡Nueva pegatina para tu álbum!"), 1200); } }
  function checkStickers() {
    const st = streakNow("es");
    if (st >= 3) sticker("racha3"); if (st >= 7) sticker("racha7");
    if (T().stars >= 100) sticker("e100"); if (T().stars >= 300) sticker("e300");
    if (Object.values(T().retos).reduce((a, b) => a + (+b || 0), 0) >= 5) sticker("retos5");
  }
  function cocoSay(kind, voice = true, text) {
    const t = text || one(ES.lines[kind]);
    const b = $("#coco-line"); if (b) b.textContent = t;
    const c = $(".coach-k .coco, .coco-card .coco"); if (c) { c.classList.remove("jump"); void c.offsetWidth; c.classList.add("jump"); }
    if (voice) speak("coco", t);
  }
  let curLv = "A1"; /* nivel del contenido que se está jugando: alimenta el modelo adaptativo */
  function right(el, lv) {
    Adapt.record("es", lv || curLv, true);
    combo++; SFX.play("ok"); addCoins(1, el);
    if (combo > 0 && combo % 3 === 0) { setTimeout(() => { SFX.play("combo"); addCoins(2, el); }, 250); cocoSay("combo"); }
    else if (Math.random() < .35) cocoSay("good");
    else { const b = $("#coco-line"); if (b) b.textContent = one(ES.lines.good); }
    hudPaint();
  }
  function wrong(lv) { Adapt.record("es", lv || curLv, false); combo = 0; SFX.play("bad"); vibrate(40); cocoSay("try", false); hudPaint(); }
  function mission() { const t = T(); if (!t.mission || t.mission.d !== today()) t.mission = { d: today(), rev: false, unit: false, reto: false, chest: false }; return t.mission; }
  function missionDone(k) { const m = mission(); if (!m[k]) { m[k] = true; save(); } }
  function narr(key) {
    if (!S.settings.narr || !ES.narr[key] || !AUD.running()) return Promise.resolve();
    return speak("k-" + H(), ES.narr[key][H()]);
  }
  const narrBtn = key => `<button class="narr" data-act="narr" data-k="${key}" aria-label="${H() === "de" ? "Anleitung hören" : "Hear instructions"}">❔</button>`;
  const head = (key, es, extra = "") => `<div class="ghead">${narrBtn(key)}<span class="t">${esc(es)}<small>${esc(hp(ES.narr[key] || {}))}</small></span>${extra}</div>`;
  const hud = () => `<div class="hud"><span class="pill coins">🪙 <span id="hud-coins">${T().coins}</span></span><span class="pill">⭐ <span id="hud-stars">${T().stars}</span></span><span class="pill">🔥 ${streakNow("es")}</span></div>`;
  const coachK = () => `<div class="coach-k"><div class="bubble-c" id="coco-line">${esc(one(ES.lines.hello))}</div>${cocoHTML(74)}</div>`;
  const BASEACT = {
    narr: el => narr(el.dataset.k),
    poke: () => cocoSay("poke")
  };
  function stageView(inner, act, opts = {}) {
    combo = 0;
    view(`<div class="wrap isla"><div class="stage">
      <div class="gbar"><a class="gx" href="${opts.back || "#isla"}" aria-label="Volver al mapa">${ICON.close}</a>
        <div class="gprog">${opts.prog || ""}</div><span class="combo" id="combo" hidden></span><span class="pill coins">🪙 <span id="hud-coins">${T().coins}</span></span></div>
      ${opts.top || ""}<div id="gbox" class="gcard">${inner}</div>${coachK()}</div></div>`, { ...BASEACT, ...act });
  }
  function reward({ stars, coins = 0, title, help, nextLabel, next, kind = "good" }) {
    if (coins) { T().coins += coins; save(); }
    overlay(`${starsPop(stars)}<h2>${esc(title)}</h2>${help ? `<span class="kh">${esc(help)}</span>` : ""}${coins ? `<div class="rw-coins">+${coins} 🪙</div>` : ""}${cocoHTML(90, "jump")}
      <div class="center">${nextLabel ? `<button class="kbtn go" data-act="rw-next">${esc(nextLabel)} →</button>` : ""}<a class="kbtn sm" href="#isla">🗺️ Mapa</a></div>`, {
      "rw-next": () => { closeOverlay(); next && next(); }
    });
    SFX.play("level"); if (stars >= 2) confetti(); setTimeout(() => speak("coco", one(ES.lines[kind])), 500); hudPaint();
  }
  const starsFor = (s, n) => (s >= n - 1 ? 3 : s >= n / 2 ? 2 : 1);

  /* ---------- mapa ---------- */
  const XS = [0, 24, 32, 18, -6, -28, -32, -14, 10, 22, 30, 12, -10];
  const LVS = () => ES.levels.filter(L => ES.units.some(u => (u.level || "A1") === L.id));
  const unlocked = () => Math.max(1, T().unlocked || 1);
  const isOpen = lv => ES.levels.findIndex(L => L.id === lv) < unlocked();
  /* La siguiente isla empieza en el nivel donde lo situó la prueba (no le hace repetir lo que ya sabe). */
  const nextUnit = () => {
    const from = Math.max(0, ES.levels.findIndex(L => L.id === (T().placedLv || "A1")));
    const lvIdx = u => ES.levels.findIndex(L => L.id === (u.level || "A1"));
    return ES.units.find(u => isOpen(u.level || "A1") && lvIdx(u) >= from && !UP(u.id).done)
      || ES.units.find(u => isOpen(u.level || "A1") && !UP(u.id).done)
      || ES.units.filter(u => isOpen(u.level || "A1")).pop() || ES.units[0];
  };
  function home() {
    if (Adapt.needs("es")) return Adapt.placement("es", "#isla");
    const t = T(), s = stage(), c = ES.coco[s], nx = ES.coco[s + 1];
    const dueN = allWords().filter(w => isDue(t.srs[w.key])).length;
    const next = nextUnit();
    const m = mission(), name = S.settings.kidName, allM = m.rev && m.unit && m.reto;
    const est = Adapt.estimate("es"), lvls = LVS(), openN = unlocked();
    const lastOpen = lvls[Math.min(openN, lvls.length) - 1];
    const ready = lastOpen && ES.exams[lastOpen.id] && !((t.exams || {})[lastOpen.id] || {}).pass && Adapt.LV.indexOf(est.lv) >= Adapt.LV.indexOf(lastOpen.id) && openN < lvls.length;
    AUD.prefetch("k-coco"); AUD.prefetch("k-narr"); AUD.prefetch("k-" + next.id);
    const tile = (href, pic, k, cl, extra = "") => `<a class="gt ${cl}" href="${href}"><span class="pic">${pic}</span><b>${esc(ui(k).es)}${extra}</b><span class="kh">${esc(hp(ui(k)))}</span></a>`;
    const seas = lvls.map((L, li) => {
      const us = ES.units.filter(u => (u.level || "A1") === L.id), open = li < openN, done = us.filter(u => UP(u.id).done).length;
      const ex = ES.exams[L.id], er = (t.exams || {})[L.id] || {};
      return `<section class="sea lv-${L.id} ${open ? "" : "locked"}" id="sea-${L.id}">
        <div class="sea-h"><span class="sea-pic">${L.pic}</span><div><h2>${esc(L.es)} · ${L.id}</h2><p class="sub">${esc(hp(L))} · ${done}/${us.length} ${er.pass ? "· " + L.trophy : ""}</p></div></div>
        ${open ? "" : `<p class="lockmsg">🔒 ${H() === "de" ? "Gewinne die Große Herausforderung " + lvls[li - 1].id : "Win the Big Challenge " + lvls[li - 1].id} · <a href="#isla-examen-${lvls[li - 1].id}">${esc(ES.exams[lvls[li - 1].id] ? ES.exams[lvls[li - 1].id].title : "")}</a></p>`}
        <div class="path"><svg class="route" aria-hidden="true"></svg>
          ${us.map((u, i) => {
            const p = UP(u.id), n = p.steps.filter(Boolean).length, cur = open && u === next && !p.done, tag = open ? "a" : "span";
            return `<${tag} class="node ${cur ? "cur" : ""} ${p.done ? "done" : ""}" ${open ? `href="#isla-u-${u.id}"` : ""} style="--x:${XS[i % XS.length]}">
              <span class="disc" style="--p:${n * 20}"><span class="in">${u.pic}</span>${p.done ? `<span class="stk">${u.sticker}</span>` : ""}</span>
              ${cur ? `<span class="here">${cocoHTML(60, "float-anim")}<span class="tip">¡Aquí!</span></span>` : ""}
              <span class="nlabel">${esc(u.title)}<small>${esc(hp(u))}</small></span></${tag}>`;
          }).join("")}
          ${ex ? `<a class="node boss ${er.pass ? "done" : ""}" href="#isla-examen-${L.id}" style="--x:0"><span class="disc" style="--p:${er.pass ? 100 : er.best || 0}"><span class="in">${er.pass ? L.trophy : "🏁"}</span></span><span class="nlabel">${esc(ex.title)}<small>${er.best != null ? er.best + " %" : (H() === "de" ? "Prüfung" : "Exam")}</small></span></a>` : ""}
        </div></section>`;
    }).join("");
    view(`<div class="wrap isla">
      <div class="row" style="margin-bottom:14px;justify-content:space-between">${hud()}<span class="rank">${c.pic} ${esc(c.es)} · ${est.lv}</span></div>
      ${Voz.streakWarn("es") ? `<div style="margin-bottom:14px">${Voz.streakWarn("es")}</div>` : ""}
      <div class="map-grid">
        <aside class="side left">
          <div class="coco-card">
            <span data-act="poke" role="button" aria-label="Coco">${cocoHTML(150, "float-anim")}</span>
            <div class="stack" style="gap:8px;width:100%">
              <div class="bubble-c" id="coco-line">${ready ? "¡Creo que ya puedes con el " + esc(ES.exams[lastOpen.id].title) + "!" : name ? "¡Hola, " + esc(name) + "!" : esc(ES.lines.hello[0])}<span class="kh">${ready ? (H() === "de" ? "Du bist bereit für die nächste Prüfung!" : "You're ready for the next exam!") : H() === "de" ? "Tippe auf mich!" : "Tap me!"}</span></div>
              ${ready ? `<a class="kbtn go sm" href="#isla-examen-${lastOpen.id}">🏁 ${esc(ES.exams[lastOpen.id].title)}</a>` : ""}
              ${nx ? `<div class="bar" title="Estrellas para el siguiente rango"><i style="width:${Math.round((t.stars - c.min) / (nx.min - c.min) * 100)}%;background:var(--sun)"></i></div><span class="kh">${nx.min - t.stars} ⭐ → ${nx.pic} ${esc(nx.es)}</span>` : ""}
            </div>
          </div>
          <div class="mission"><h2>${esc(ui("mission").es)} <span class="kh" style="display:inline">· ${esc(hp(ui("mission")))}</span></h2>
            <a class="m-item ${m.rev ? "ok" : ""}" href="${dueN ? "#isla-repaso" : "#isla-desafio"}"><span class="ck">${m.rev ? "✓" : "1"}</span><span>${dueN ? `Cofre de repaso <span class="badge">${dueN}</span>` : "Desafío de Coco"}<span class="kh">${esc(hp(dueN ? ui("review") : ui("smart")))}</span></span></a>
            <a class="m-item ${m.unit ? "ok" : ""}" href="#isla-u-${next.id}"><span class="ck">${m.unit ? "✓" : "2"}</span><span>${next.pic} ${esc(next.title)}<span class="kh">${esc(hp(next))}</span></span></a>
            <a class="m-item ${m.reto ? "ok" : ""}" href="#isla-retos"><span class="ck">${m.reto ? "✓" : "3"}</span><span>Un reto con un adulto<span class="kh">${esc(hp(ui("retos")))}</span></span></a>
            <button class="chest-btn ${allM && !m.chest ? "ready" : ""}" data-act="chest" ${allM && !m.chest ? "" : "disabled"}><span class="c">${m.chest ? "🎁" : "🧰"}</span>${m.chest ? "¡Cofre abierto!" : allM ? "¡Abre tu cofre!" : "Cofre del día"}</button>
          </div>
          ${Voz.daily("es")}
        </aside>
        <div class="seas">${seas}</div>
        <aside class="side right">
          <div class="games">
            ${tile("#isla-voz", "🎤", "voz", "c2")}
            ${tile("#isla-desafio", "🧠", "smart", "c5")}
            ${tile("#isla-repaso", "🧰", "review", "c1", dueN ? `<span class="badge">${dueN}</span>` : "")}
            ${tile("#isla-rapido", "⏱️", "fast", "c2")}
            ${tile("#isla-simon", "🦘", "simon", "c3")}
            ${tile("#isla-donde", "🌎", "where", "c4")}
            ${tile("#isla-dicc", "📖", "dict", "c5")}
            ${tile("#isla-tienda", "🛍️", "shop", "c1")}
            ${tile("#isla-retos", "🤝", "retos", "c3")}
            ${tile("#isla-album", "🗂️", "album", "c4", ` <span class="kh" style="display:inline">${t.stickers.length}/${ES.units.length + EXTRA.length + lvls.length}</span>`)}
            <a class="gt c2" href="#isla-coco" data-ai><span class="pic">💬</span><b>${esc(ui("chat").es)}</b><span class="kh">${esc(hp(ui("chat")))}</span></a>
          </div>
        </aside>
      </div></div>`, {
      ...BASEACT,
      chest: () => {
        const mm = mission(); if (mm.chest) return; mm.chest = true; save();
        overlay(`<div class="chest-anim">🧰</div><h2>¡Misión cumplida!</h2><span class="kh">${esc(hp(ES.narr.chest))}</span><div class="rw-coins">+15 🪙</div><button class="kbtn go" data-act="chest-ok">¡Genial!</button>`, { "chest-ok": () => { closeOverlay(); home(); } });
        SFX.play("chest"); narr("chest"); setTimeout(() => { $(".chest-anim").textContent = "🎁"; confetti(); addCoins(15); }, 1000);
      }
    });
    drawRoute(); narrOnce("map");
    const curNode = $(".node.cur"); if (curNode && !home.scrolled) { home.scrolled = 1; setTimeout(() => curNode.scrollIntoView({ block: "center", behavior: "smooth" }), 350); }
  }
  let narrated = {};
  function narrOnce(k) { if (narrated[k]) return; narrated[k] = 1; setTimeout(() => narr(k), 250); }
  function drawRoute() {
    $$(".path").forEach(p => {
      const svg = $("svg.route", p); if (!svg) return;
      const box = p.getBoundingClientRect();
      const pts = $$(".disc", p).map(d => { const r = d.getBoundingClientRect(); return [r.left + r.width / 2 - box.left, r.top + r.height / 2 - box.top]; });
      let dpath = ""; pts.forEach(([x, y], i) => { if (!i) dpath = `M${x},${y}`; else { const [px, py] = pts[i - 1], my = (py + y) / 2; dpath += ` C${px},${my} ${x},${my} ${x},${y}`; } });
      svg.setAttribute("viewBox", `0 0 ${box.width} ${box.height}`);
      svg.innerHTML = `<path d="${dpath}" fill="none" stroke="rgba(255,255,255,.75)" stroke-width="6" stroke-linecap="round" stroke-dasharray="2 16"/>`;
    });
  }
  let rT = 0; addEventListener("resize", () => { clearTimeout(rT); rT = setTimeout(drawRoute, 120); });

  /* ---------- Gran Desafío (examen del nivel) ---------- */
  function exam(lv) {
    const ex = ES.exams[lv], L = ES.levels.find(x => x.id === lv);
    if (!ex) return home();
    curLv = lv; AUD.prefetch("k-x-" + lv);
    const t = T(); t.exams = t.exams || {};
    const parts = [["escuchar", "👂", "Escuchar", "Hören", "Listening"], ["leer", "📖", "Leer", "Lesen", "Reading"], ["escribir", "✍️", "Escribir", "Schreiben", "Writing"], ["hablar", "🗣️", "Hablar", "Sprechen", "Speaking"]];
    const sc = { escuchar: 0, leer: 0, escribir: 0, hablar: 0 }, max = { escuchar: ex.escuchar.length, leer: ex.leer.length, escribir: ex.escribir.length * 2, hablar: ex.hablar.length * 2 };
    let pi = -1;
    const intro = () => stageView(`<div class="stack" style="justify-items:center;text-align:center">
        <div style="font-size:72px">${L.pic}</div><h2 class="kf" style="font-size:30px">${esc(ex.title)}</h2><span class="kh">${esc(hp(ex))}</span>
        <div class="games" style="width:100%;max-width:520px">${parts.map(p => `<div class="gt c4"><span class="pic">${p[1]}</span><b>${p[2]}</b><span class="kh">${H() === "de" ? p[3] : p[4]}</span></div>`).join("")}</div>
        <p class="kh">${H() === "de" ? "Mit 60 % gewinnst du die Trophäe und öffnest die nächsten Inseln." : "Get 60% to win the trophy and open the next islands."}</p>
        <button class="kbtn go" data-act="ex-go">¡Empezar!</button></div>`, { "ex-go": () => nextPart() });
    function nextPart() {
      pi++;
      if (pi >= parts.length) return finish();
      const [k] = parts[pi], box = $("#gbox");
      const prog = parts.map((_, i) => `<i class="${i < pi ? "on" : i === pi ? "cur" : ""}"></i>`).join("");
      $(".gprog").innerHTML = prog;
      if (k === "escuchar" || k === "leer") mcPart(k, box);
      else openPart(k, box);
    }
    function mcPart(k, box) {
      const items = ex[k]; let i = 0;
      const one1 = () => {
        if (i >= items.length) return nextPart();
        const q = items[i]; let locked = false;
        box.innerHTML = `<div class="ghead"><span class="t">${k === "escuchar" ? "👂 Escuchar" : "📖 Leer"}<small>${i + 1}/${items.length}</small></span></div>
          ${k === "escuchar" ? `<button class="big-play" data-act="ex-play" aria-label="Escuchar">🔊</button>` : `<div class="note-k" style="background:var(--surface-2);font:600 18px/1.55 var(--f-body)">${esc(q.text)}</div>`}
          <div class="qt" style="font:800 21px/1.3 var(--f-kid)">${esc(q.q)}<span class="kh">${esc(hp(q))}</span></div>
          <div class="qopts" style="display:grid;gap:10px">${q.opts.map((o, j) => `<button class="qopt" data-act="ex-a" data-j="${j}" style="text-align:left">${esc(o)}</button>`).join("")}</div>`;
        const tag = q.who === "narr" ? NT() : q.who;
        Object.assign(ACT, {
          "ex-play": el => speak(tag, q.text, { btn: el }),
          "ex-a": el => {
            if (locked) return; locked = true;
            const ok = +el.dataset.j === q.a; el.classList.add(ok ? "ok-x" : "bad-x");
            if (ok) { sc[k]++; right(el, lv); } else wrong(lv);
            setTimeout(() => { i++; one1(); }, 700);
          }
        });
        if (k === "escuchar") setTimeout(() => speak(tag, q.text, { btn: $(".big-play", box) }), 300);
      };
      one1();
    }
    function openPart(k, box) {
      const items = ex[k]; let i = 0, stopFn = null;
      const one1 = () => {
        if (i >= items.length) return nextPart();
        const q = items[i];
        box.innerHTML = `<div class="ghead"><span class="t">${k === "escribir" ? "✍️ Escribir" : "🗣️ Hablar"}<small>${i + 1}/${items.length}</small></span></div>
          <div class="note-k">${esc(q.task)}<span class="kh" style="margin-top:4px">${esc(hp(q))}</span></div>
          ${k === "escribir" ? `<textarea id="ex-t" rows="5" placeholder="Escribe aquí en español…" style="font:600 18px/1.5 var(--f-body)"></textarea>`
            : `<div class="center"><button class="mic" data-mic data-act="ex-mic">${ICON.mic}<span>Hablar</span></button></div><p class="kh" data-nomic style="text-align:center">${H() === "de" ? "Sag es laut zu einem Erwachsenen." : "Say it out loud to an adult."}</p><p class="sp-out" id="ex-o"></p>`}
          <div class="center"><button class="kbtn sea sm" data-act="ex-model">👀 Ver un ejemplo</button></div>
          <div id="ex-m"></div>
          <p class="kh" style="text-align:center">${H() === "de" ? "Wie ist es gelaufen? (am besten entscheidet ein Erwachsener)" : "How did it go? (ideally an adult decides)"}</p>
          <div class="center"><button class="kbtn leaf sm" data-act="ex-s" data-v="2">😃 Muy bien</button><button class="kbtn sm" data-act="ex-s" data-v="1">🙂 Más o menos</button><button class="kbtn sm" data-act="ex-s" data-v="0">🤔 Todavía no</button></div>`;
        paintCaps(box);
        Object.assign(ACT, {
          "ex-model": () => { $("#ex-m").innerHTML = `<div class="note-k" style="background:var(--leaf-2)">${sayBtn(q.model, NT())} ${esc(q.model)}</div>`; paintCaps(box); },
          "ex-mic": el => { if (stopFn) { stopFn(); return; } el.classList.add("on"); stopFn = listen("es", txt => { $("#ex-o").textContent = "🎧 " + txt; }, () => { el.classList.remove("on"); stopFn = null; }); if (!stopFn) el.classList.remove("on"); },
          "ex-s": el => { const v = +el.dataset.v; sc[k] += v; Adapt.record("es", lv, v === 2, .05); if (v) SFX.play("ok"); i++; one1(); }
        });
      };
      one1();
    }
    function finish() {
      const tot = Object.values(sc).reduce((a, b) => a + b, 0), mx = Object.values(max).reduce((a, b) => a + b, 0), pct = Math.round(tot / mx * 100), pass = pct >= 60;
      const r = t.exams[lv] = t.exams[lv] || {}; r.best = Math.max(r.best || 0, pct);
      const li = ES.levels.findIndex(x => x.id === lv);
      if (pass && !r.pass) { r.pass = true; t.unlocked = Math.max(unlocked(), li + 2); sticker("examen-" + lv); }
      save(); addStars(pass ? 10 : 3);
      overlay(`<div style="font-size:84px">${pass ? L.trophy : "💪"}</div><h2>${pass ? "¡Ganaste el " + esc(ex.title) + "!" : pct + " %"}</h2>
        <span class="kh">${pass ? (ES.levels[li + 1] ? (H() === "de" ? "Neue Inseln sind offen: " : "New islands are open: ") + esc(ES.levels[li + 1].es) : "") : (H() === "de" ? "Noch nicht ganz. Spiel noch ein paar Inseln und versuch es wieder!" : "Not quite yet. Play a few more islands and try again!")}</span>
        <div class="ad-skills" style="width:100%">${parts.map(([k, , n]) => `<div class="row" style="flex-wrap:nowrap"><span style="width:90px;font-weight:800">${n}</span><div class="bar" style="flex:1"><i style="width:${Math.round(sc[k] / max[k] * 100)}%"></i></div></div>`).join("")}</div>
        ${pass ? `<div class="rw-coins">+50 🪙</div>` : ""}
        <a class="kbtn go" href="#isla">🗺️ Mapa</a>`);
      if (pass) { T().coins += 50; save(); confetti(); SFX.play("chest"); setTimeout(() => speak("coco", one(ES.lines.done)), 600); }
    }
    intro();
  }

  function smart() {
    Adapt.practice("es", (ok, n) => {
      addStars(Math.ceil(ok / 2)); missionDone("rev");
      reward({ stars: starsFor(ok, n), coins: 3, title: `${ok} de ${n}`, help: (H() === "de" ? "Coco schätzt dein Niveau: " : "Coco estimates your level: ") + Adapt.estimate("es").lv, nextLabel: "Otra vez", next: smart });
    });
  }

  /* ---------- una isla: 5 pasos ---------- */
  const STEPS = ["story", "words", "game", "speak", "slang"];
  function unit(id, idx) {
    const u = unitById(id); if (!u) return home();
    if (!isOpen(u.level || "A1")) return home();
    curLv = u.level || "A1";
    AUD.prefetch("k-" + u.id);
    const p = UP(id);
    let cur = idx != null ? idx : p.steps.findIndex(s => !s); if (cur < 0) cur = 0;
    const prog = STEPS.map((_, i) => `<i class="${p.steps[i] ? "on" : i === cur ? "cur" : ""}"></i>`).join("");
    const top = `<div class="row" style="gap:10px"><h1 class="kf" style="font-size:28px">${u.pic} ${esc(u.title)}</h1><span class="kh" style="display:inline">${esc(hp(u))}</span></div>
      <nav class="steps" aria-label="Pasos">${STEPS.map((k, i) => `<button class="step ${i === cur ? "cur" : ""} ${p.steps[i] ? "ok" : ""}" data-act="step" data-i="${i}"><span class="n">${p.steps[i] ? "✓" : i + 1}</span>${esc(ui(k).es)}</button>`).join("")}</nav>`;
    const st = [stepStory, stepWords, stepGame, stepSpeak, stepSlang][cur](u, cur);
    stageView(st.html, { ...st.act, step: el => unit(id, +el.dataset.i) }, { prog, top });
    st.init && st.init();
  }
  function completeStep(u, i, stars, label) {
    const p = UP(u.id), first = !p.steps[i];
    p.steps[i] = true; addStars(first ? stars : 1); missionDone("unit");
    const islandDone = p.steps.every(Boolean) && !p.done;
    if (islandDone) { p.done = true; sticker(u.id); }
    save();
    if (islandDone) {
      setTimeout(() => {
        overlay(`<div class="chest-anim">🧰</div><h2>¡Isla completada!</h2><span class="kh">${esc(hp(ES.narr.island))}</span><div style="font-size:64px">${u.sticker}</div><div class="rw-coins">+20 🪙</div><a class="kbtn go" href="#isla">🗺️ Siguiente isla</a>`);
        SFX.play("chest"); narr("island"); setTimeout(() => { confetti(); addCoins(20); speak("coco", one(ES.lines.done)); }, 900);
      }, 50);
      return;
    }
    reward({ stars, coins: first ? 5 : 1, title: label || one(["¡Muy bien!", "¡Genial!", "¡Lo hiciste!"]), help: hp(ui("great")), nextLabel: i < 4 ? ui(STEPS[i + 1]).es : null, next: () => unit(u.id, i + 1) });
  }

  /* Paso 1: cuento + preguntas */
  function stepStory(u, i) {
    const lines = u.story.map((l, k) => {
      const c = ES.cast[l.who];
      return `<div class="brow"><span class="ava">${c.pic}<span class="fl">${ES.regions[c.region].flag}</span></span>
        <button class="bub" data-act="line" data-i="${k}"><span class="who">${esc(c.name)}</span><span class="es">${esc(l.es)}</span><span class="kh tr" hidden>${esc(hp(l))}</span></button><span class="lpic">${l.pic}</span></div>`;
    }).join("");
    const qs = u.questions.map((q, k) => {
      const opts = shuffle(q.opts.map((o, j) => ({ o, ok: j === q.a })));
      return `<div class="qblock"><div class="row" style="gap:10px;flex-wrap:nowrap">${sayBtn(q.q, NT())}<div><div class="qt">${esc(q.q)}</div><span class="kh">${esc(hp(q))}</span></div></div>
        <div class="qopts">${opts.map(o => `<button class="qopt" data-act="qa" data-q="${k}" data-ok="${o.ok ? 1 : 0}">${esc(o.o)}</button>`).join("")}</div></div>`;
    }).join("");
    const sounds = u.sounds ? `<div class="note-k" style="background:var(--leaf-2)">🐾 ¿Qué dice cada animal?<span class="kh">${H() === "de" ? "Auf Deutsch klingen die Tiere anders!" : "Animals sound different in English!"}</span>
      <div class="stack" style="gap:8px;margin-top:10px">${u.sounds.map(s => `<div class="row" style="flex-wrap:nowrap">${sayBtn(s.es, NT())}<span style="font-size:30px">${s.pic}</span><span>${esc(s.es)}<span class="kh">🇩🇪 ${esc(s.de)}</span></span></div>`).join("")}</div></div>` : "";
    const answered = {}; let rightN = 0;
    const html = `${head("story", ui("story").es, `<button class="kbtn sea sm" data-act="playall" style="margin-left:auto">▶ Todo</button>`)}
      <div class="row"><button class="chip" data-act="trans" aria-pressed="false">${H() === "de" ? "🇩🇪 Übersetzung" : "🇬🇧 Translation"}</button></div>
      <div class="story">${lines}</div>
      ${(u.tips || []).map(tp => `<div class="note-k" style="background:var(--grape-2)">🧩 ${esc(tp.es)}<span class="kh" style="margin-top:4px">${esc(hp(tp))}</span></div>`).join("")}
      ${u.note ? `<div class="note-k">💡 ${esc(u.note.es)}<span class="kh" style="margin-top:4px">${esc(hp(u.note))}</span></div>` : ""}
      ${sounds}
      <div class="stack" id="qsec"><div class="ghead">${narrBtn("questions")}<span class="t">${esc(ui("questions").es)}<small>${esc(hp(ES.narr.questions))}</small></span></div>${qs}</div>`;
    const sayLine = (k, btn) => speak(u.story[k].who, u.story[k].es, { btn });
    return {
      html,
      init: () => narrOnce("story"),
      act: {
        line: el => sayLine(+el.dataset.i, el),
        trans: el => { const on = el.getAttribute("aria-pressed") !== "true"; el.setAttribute("aria-pressed", on); $$(".tr").forEach(x => x.hidden = !on); },
        playall: async () => {
          const my = ++SEQ;
          for (let k = 0; k < u.story.length; k++) {
            if (my !== SEQ) return;
            const b = $(`.bub[data-i="${k}"]`); b && b.scrollIntoView({ block: "nearest", behavior: "smooth" });
            await sayLine(k, b); await sleep(250);
          }
        },
        qa: el => {
          const k = el.dataset.q; if (answered[k] != null) return;
          const ok = el.dataset.ok === "1"; answered[k] = ok; el.classList.add(ok ? "ok-x" : "bad-x");
          if (ok) { rightN++; right(el); } else { wrong(); $(`.qopt[data-q="${k}"][data-ok="1"]`).classList.add("ok-x"); }
          if (Object.keys(answered).length === u.questions.length) setTimeout(() => completeStep(u, i, 1 + rightN, rightN === u.questions.length ? "¡Lo entendiste todo!" : "¡Bien escuchado!"), 900);
        }
      }
    };
  }

  /* Paso 2: palabras */
  function stepWords(u, i) {
    const heard = new Set();
    const html = `${head("words", ui("words").es, `<button class="kbtn sea sm" data-act="wall" style="margin-left:auto">▶ Todas</button>`)}
      ${u.id === "cuerpo" ? `<div class="note-k">🙆 ¡Toca la parte de tu cuerpo mientras dices la palabra!</div>` : ""}
      <div class="wgrid">${u.words.map((w, k) => `<div class="wcard"><button class="wmain" data-act="w" data-i="${k}"><span class="wp">${w.pic}</span><span class="we">${esc(w.es)}</span><span class="kh">${esc(hp(w))}</span></button>
        ${w.vary ? `<div class="vary">${Object.entries(w.vary).map(([r, t]) => `<button class="vchip" data-act="v" data-r="${r}" data-t="${esc(t)}" aria-label="${esc(ES.regions[r].name)}">${ES.regions[r].flag} ${esc(t)}</button>`).join("")}</div>` : ""}</div>`).join("")}</div>
      <div class="center"><button class="kbtn go" data-act="wdone">✅ ¡Ya las conozco!</button></div>`;
    return {
      html,
      init: () => narrOnce("words"),
      act: {
        w: el => { const k = +el.dataset.i; sayW(u.words[k].es); el.classList.add("heard"); if (!heard.has(k)) { heard.add(k); SFX.play("tap"); } },
        v: el => speak("r-" + el.dataset.r, el.dataset.t, { btn: el }),
        wall: async () => { const my = ++SEQ; for (const [k, w] of u.words.entries()) { if (my !== SEQ) return; const b = $(`.wmain[data-i="${k}"]`); b && b.classList.add("heard"); await sayW(w.es); await sleep(300); } },
        wdone: () => {
          const now = Date.now();
          u.words.forEach((w, k) => { const key = u.id + ":" + k; if (!T().srs[key]) T().srs[key] = { b: 1, d: startOfDay(now) + DAY + 3 * 3600e3, n: 0 }; });
          completeStep(u, i, heard.size >= u.words.length / 2 ? 3 : 2, "¡Palabras guardadas en tu cofre!");
        }
      }
    };
  }

  /* Paso 3: elegir juego */
  function stepGame(u, i) {
    const games = [["listen", "👂", "Escucha y toca", "c4"], ["memory", "🃏", "Memoria", "c2"], ["build", "🧩", "Ordena la frase", "c1"]];
    if (u.tpr) games.unshift(["simon", "🦘", "Simón dice", "c3"]);
    const html = `<div class="ghead"><span class="t">Elige un juego<small>${H() === "de" ? "Wähle ein Spiel" : "Choose a game"}</small></span></div>
      <div class="games" style="grid-template-columns:repeat(auto-fill,minmax(170px,1fr))">${games.map(([k, p, t, cl]) => `<button class="gt ${cl}" data-act="g" data-g="${k}"><span class="pic">${p}</span><b>${t}</b><span class="kh">${esc(hp(ES.narr[k] || {}))}</span></button>`).join("")}</div>`;
    const end = (s, label) => completeStep(u, i, s, label);
    return {
      html,
      act: {
        g: el => {
          const box = $("#gbox"), g = el.dataset.g;
          if (g === "listen") gListen(box, u.words, { rounds: 8, onEnd: (s, n) => end(starsFor(s, n), `${s} de ${n}`) });
          if (g === "memory") gMemory(box, u.words, mv => { if (mv <= 9) sticker("memoria"); end(mv <= 9 ? 3 : mv <= 13 ? 2 : 1, `¡En ${mv} intentos!`); });
          if (g === "build") gBuild(box, [...u.phrases.map(p => ({ ...p, tag: NT() })), ...u.story.filter(l => l.es.split(" ").length <= 7).map(l => ({ ...l, tag: l.who }))], (s, n) => end(s === n ? 3 : s >= n / 2 ? 2 : 1, `${s} de ${n} frases`));
          if (g === "simon") gSimon(box, u.tpr, (s, n) => end(s === n ? 3 : s >= n * .7 ? 2 : 1, `${s} de ${n}`));
        }
      }
    };
  }

  /* Paso 4: ¡habla! */
  function stepSpeak(u, i) {
    const items = [...u.phrases.slice(0, 2), ...pick(u.words, 2)];
    const res = {}; let stopFn = null;
    const html = `${head("speak", ui("speak").es)}
      <div class="sp-list">${items.map((it, k) => `<div class="sp-item" id="sp${k}">
        <span class="pic">${it.pic || "💬"}</span><div style="flex:1;min-width:150px"><div class="t">${esc(it.es)}</div><span class="kh">${esc(hp(it))}</span><div class="sp-out" id="spo${k}"></div></div>
        ${sayBtn(it.es, NT())}
        <button class="mic" data-mic data-act="mic" data-i="${k}">${ICON.mic}<span>Decirlo</span></button>
        <button class="kbtn sm leaf" data-nomic data-act="said" data-i="${k}">🗣️ ¡Lo dije!</button></div>`).join("")}</div>
      <p class="kh" data-nomic>${H() === "de" ? "Am besten sagst du es einem Erwachsenen – der hört, ob es stimmt!" : "Best said to an adult – they can tell if it's right!"}</p>`;
    const grade = (k, n, txt, el) => {
      if (res[k] != null) return;
      res[k] = n; $("#spo" + k).innerHTML = `${txt ? "Coco oyó: «" + esc(txt) + "» · " : ""}<span style="font-size:20px">${"⭐".repeat(n)}</span>`;
      if (n >= 2) right(el); else wrong();
      if (Object.keys(res).length === items.length) { const avg = Math.round(Object.values(res).reduce((a, b) => a + b, 0) / items.length); setTimeout(() => completeStep(u, i, Math.max(1, avg), "¡Qué bien hablas español!"), 900); }
    };
    return {
      html,
      init: () => narrOnce("speak"),
      act: {
        said: el => { el.disabled = true; grade(+el.dataset.i, 3, "", el); },
        mic: el => {
          const k = +el.dataset.i;
          if (stopFn) { stopFn(); return; }
          const o = $("#spo" + k); o.textContent = "🎧 …"; el.classList.add("on");
          stopFn = listen("es", (txt, fin) => { o.textContent = "🎧 " + txt; if (fin && stopFn) stopFn(); }, (txt, reason) => {
            el.classList.remove("on"); stopFn = null;
            if (!txt) { o.textContent = reason === "not_granted" ? "Micrófono apagado: usa «¡Lo dije!»." : "No te oí. ¡Más fuerte!"; if (reason === "not_granted") { CAP.dict = null; paintCaps(); } return; }
            const s = sim(txt, items[k].es); grade(k, s >= .8 ? 3 : s >= .55 ? 2 : 1, txt, el);
          });
          if (!stopFn) { el.classList.remove("on"); o.textContent = ""; }
        }
      }
    };
  }

  /* Paso 5: como un nativo */
  function stepSlang(u, i) {
    AUD.prefetch("k-slang");
    const ents = u.slang.map(slangByEs).filter(Boolean);
    const html = `${head("slang", ui("slang").es)}
      <div class="slangs">${ents.map(slangCard).join("")}</div>
      <div class="center"><button class="kbtn go" data-act="quiz">🌎 ¿De dónde es? ¡Jugar!</button></div>`;
    return {
      html,
      init: () => narrOnce("slang"),
      act: {
        ss: el => speak("r-" + el.dataset.r, el.dataset.t, { btn: el }),
        quiz: () => gWhere($("#gbox"), [...ents, ...pick(ES.slang.filter(s => !ents.includes(s)), 2)], 4, (s, n) => completeStep(u, i, starsFor(s, n), `${s} de ${n}`))
      }
    };
  }
  const slangCard = s => `<div class="slang"><div class="row" style="gap:8px"><span class="flag">${ES.regions[s.r].flag}</span><span class="kh">${esc(ES.regions[s.r].name)}</span><span class="spacer"></span>
      <button class="say" data-act="ss" data-t="${esc(s.ex || s.es)}" data-r="${s.r}" aria-label="Escuchar">${ICON.play}</button></div>
      <div class="e">${esc(s.es)}</div><span class="kh">= ${esc(hp(s))}</span>${s.ex ? `<div class="ex">«${esc(s.ex)}»</div>` : ""}</div>`;

  /* ---------- juegos ---------- */
  function gListen(box, words, o) {
    const pool = o.pool || words;
    const seq = o.seq || pick(words, Math.min(o.rounds || 8, words.length));
    let r = 0, score = 0;
    async function round() {
      if (r >= seq.length) return o.onEnd(score, seq.length);
      const w = seq[r], reading = o.mixed && r % 2 === 1;
      const nOpt = Adapt.kidOpts(), wl = w.unit ? ((unitById(w.unit) || {}).level || "A1") : curLv, showW = wl !== "A1";
      const others = pick(pool.filter(x => x.pic !== w.pic && x.es !== w.es), nOpt - 1);
      const opts = shuffle([w, ...others]);
      let locked = false;
      const key = reading ? "read" : "listen";
      box.innerHTML = `${head(key, reading ? "Lee y toca el dibujo" : ui("listen").es, `<span class="count">${r + 1}/${seq.length}</span>`)}
        ${reading ? `<div class="prompt-word">${esc(w.es)}</div>` : `<button class="big-play" data-act="g-rep" aria-label="Escuchar otra vez">🔊</button>`}
        <div class="opts ${nOpt >= 6 ? "six" : ""}">${opts.map(x => `<button class="opt pic" data-act="g-pick" data-ok="${x === w ? 1 : 0}" aria-label="${esc(x.es)}">${x.pic}${showW && !reading ? `<small class="ow">${esc(hp(x))}</small>` : ""}</button>`).join("")}</div>
        ${nOpt >= 6 ? `<p class="kh" style="text-align:center">🔥 ${H() === "de" ? "Profi-Modus: mehr Bilder!" : "Pro mode: more pictures!"}</p>` : ""}
        <p class="fb-k" id="g-fb"></p>`;
      Object.assign(ACT, {
        "g-rep": el => sayW(w.es, el),
        "g-pick": el => {
          if (locked) return; locked = true;
          const ok = el.dataset.ok === "1";
          el.classList.add(ok ? "ok-x" : "bad-x");
          if (ok) { score++; right(el, wl); } else { wrong(wl); $('.opt[data-ok="1"]', box).classList.add("ok-x"); }
          $("#g-fb").textContent = (ok ? "✓ " : "") + w.es;
          o.onAnswer && o.onAnswer(w, ok);
          const go = () => { r++; round(); };
          if (ok) { if (reading) sayW(w.es).then(() => setTimeout(go, 250)); else setTimeout(go, 1000); }
          else sayW(w.es).then(() => setTimeout(go, 700));
        }
      });
      if (r === 0) await narr(key);
      if (!reading) sayW(w.es, $(".big-play", box));
    }
    round();
  }

  function gMemory(box, words, onEnd) {
    const ws = pick(words.filter((w, k, a) => a.findIndex(x => x.pic === w.pic) === k), 6);
    const cards = shuffle(ws.flatMap((w, k) => [{ k, p: 1, t: w.pic, w }, { k, p: 0, t: w.es, w }]));
    let open = [], found = new Set(), moves = 0, lock = false;
    const draw = () => {
      box.innerHTML = `${head("memory", ui("memory").es, `<span class="count">${moves} 🔁</span>`)}
        <div class="mem">${cards.map((c, i) => { const vis = open.includes(i) || found.has(c.k); return `<button class="mc ${vis ? "open" : ""} ${c.p ? "p" : ""} ${found.has(c.k) ? "found" : ""}" data-act="m-flip" data-i="${i}" aria-label="${vis ? esc(c.w.es) : "carta"}">${vis ? esc(c.t) : "Ñ"}</button>`; }).join("")}</div>`;
    };
    Object.assign(ACT, {
      "m-flip": el => {
        const i = +el.dataset.i, c = cards[i];
        if (lock || open.includes(i) || found.has(c.k)) return;
        open.push(i); SFX.play("flip"); sayW(c.w.es); draw();
        if (open.length === 2) {
          moves++;
          const [a, b] = open.map(j => cards[j]);
          if (a.k === b.k) { found.add(a.k); open = []; setTimeout(() => right($$(".mc.found", box).pop()), 50); draw(); if (found.size === ws.length) setTimeout(() => onEnd(moves), 900); }
          else { lock = true; setTimeout(() => { open = []; lock = false; combo = 0; hudPaint(); draw(); }, 1100); }
        }
      }
    });
    draw(); narr("memory");
  }

  function gBuild(box, items, onEnd) {
    const seq = pick(items, Math.min(4, items.length));
    let r = 0, score = 0;
    function round() {
      if (r >= seq.length) return onEnd(score, seq.length);
      const it = seq[r], toks = it.es.split(" ");
      let pool = shuffle(toks.map((t, i) => ({ t, i }))); if (pool.map(x => x.t).join(" ") === it.es && toks.length > 1) pool = pool.reverse();
      const chosen = []; let checked = false;
      const draw = () => {
        box.innerHTML = `${head("build", ui("build").es, `<span class="count">${r + 1}/${seq.length}</span>`)}
          <div class="center">${sayBtn(it.es, it.tag)}<span class="kf" style="font-size:20px">${esc(hp(it))}</span></div>
          <div class="build-ans">${chosen.map((x, j) => `<button class="tok in" data-act="b-un" data-j="${j}">${esc(x.t)}</button>`).join("") || '<span class="kh">👆 …</span>'}</div>
          <div class="toks">${pool.map((x, j) => `<button class="tok ${chosen.includes(x) ? "used" : ""}" data-act="b-add" data-j="${j}">${esc(x.t)}</button>`).join("")}</div>
          <div class="center"><button class="kbtn go" data-act="b-chk" ${chosen.length === toks.length ? "" : "disabled"}>✔ Comprobar</button></div>
          <p class="fb-k" id="b-fb"></p>`;
      };
      Object.assign(ACT, {
        "b-add": el => { if (checked) return; const x = pool[+el.dataset.j]; if (!chosen.includes(x)) { chosen.push(x); SFX.play("tap"); draw(); } },
        "b-un": el => { if (checked) return; chosen.splice(+el.dataset.j, 1); draw(); },
        "b-chk": el => {
          if (checked) return; checked = true;
          const ok = chosen.map(x => x.t).join(" ") === it.es;
          if (ok) { score++; right(el); } else wrong();
          $("#b-fb").innerHTML = ok ? "✓ ¡Perfecto!" : "Era: <b>" + esc(it.es) + "</b>";
          speak(it.tag, it.es).then(() => setTimeout(() => { r++; round(); }, ok ? 300 : 1000));
        }
      });
      draw();
    }
    round(); narr("build");
  }

  function gSimon(box, tpr, onEnd) {
    const N = 10; let r = 0, score = 0;
    async function round() {
      if (r >= N) { if (score === N) sticker("simon"); return onEnd(score, N); }
      const c = pick(tpr, 1)[0], simon = Math.random() < .68, text = (simon ? "Simón dice: " : "") + c.es + ".";
      let locked = false;
      box.innerHTML = `${head("simon", ui("simon").es, `<span class="count">${r + 1}/${N}</span>`)}
        <div class="simon-cmd" id="s-cmd"><button class="big-play" data-act="s-rep" aria-label="Escuchar">🔊</button></div>
        <div class="opts"><button class="opt" data-act="s-ans" data-v="1">🙌<br>${esc(ui("done").es)}</button><button class="opt" data-act="s-ans" data-v="0">✋<br>${esc(ui("notsaid").es)}</button></div>`;
      Object.assign(ACT, {
        "s-rep": el => speak("alex", text, { btn: el }),
        "s-ans": el => {
          if (locked) return; locked = true;
          const ok = (el.dataset.v === "1") === simon;
          el.classList.add(ok ? "ok-x" : "bad-x"); if (ok) { score++; right(el); } else wrong();
          $("#s-cmd").innerHTML = `<div><div style="font-size:64px">${simon ? c.pic : "🙅"}</div><div class="kf" style="font-size:24px">${esc(text)}</div><span class="kh">${esc(hp(c))}${simon ? "" : " — " + (H() === "de" ? "Simon hat es nicht gesagt!" : "Simon didn't say it!")}</span></div>`;
          setTimeout(() => { r++; round(); }, 2000);
        }
      });
      if (r === 0) await narr("simon");
      speak("alex", text, { btn: $(".big-play", box) });
    }
    round();
  }

  function gWhere(box, ents, N, onEnd) {
    AUD.prefetch("k-slang");
    const seq = pick(ents, Math.min(N, ents.length)); let r = 0, score = 0;
    const regs = Object.keys(ES.regions);
    async function round() {
      if (r >= seq.length) return onEnd(score, seq.length);
      const s = seq[r], opts = shuffle([s.r, ...pick(regs.filter(x => x !== s.r), 2)]); let locked = false;
      box.innerHTML = `${head("where", ui("where").es, `<span class="count">${r + 1}/${seq.length}</span>`)}
        <div class="prompt-word">«${esc(s.es)}»</div>
        <div class="center"><button class="kbtn sea sm" data-act="wh-rep">🔊 Oír</button></div>
        <div class="flags">${opts.map(x => `<button class="opt" data-act="wh" data-r="${x}"><span style="font-size:50px">${ES.regions[x].flag}</span><br><small style="font-size:14px">${esc(ES.regions[x].name)}</small></button>`).join("")}</div>
        <p class="fb-k" id="wh-fb" style="font-size:19px"></p>`;
      Object.assign(ACT, {
        "wh-rep": el => speak("r-" + s.r, s.ex || s.es, { btn: el }),
        wh: el => {
          if (locked) return; locked = true;
          const ok = el.dataset.r === s.r; el.classList.add(ok ? "ok-x" : "bad-x");
          if (ok) { score++; right(el); } else { wrong(); $(`.opt[data-r="${s.r}"]`, box).classList.add("ok-x"); }
          $("#wh-fb").innerHTML = `${ES.regions[s.r].flag} ${esc(s.es)} = ${esc(hp(s))}`;
          setTimeout(() => { r++; round(); }, 2100);
        }
      });
      if (r === 0) await narr("where");
      speak("r-" + s.r, s.ex || s.es);
    }
    round();
  }

  /* ---------- pantallas sueltas ---------- */
  const endBox = (n, title, help, againAct) => `<div class="stack" style="justify-items:center;text-align:center">${starsPop(n)}<h2 class="kf" style="font-size:28px">${esc(title)}</h2>${help ? `<span class="kh">${esc(help)}</span>` : ""}<div class="center">${againAct ? `<button class="kbtn go" data-act="${againAct}">🔁 Otra vez</button>` : ""}<a class="kbtn sm" href="#isla">🗺️ Mapa</a></div></div>`;
  function review() {
    const due = shuffle(allWords().filter(w => isDue(T().srs[w.key]))).slice(0, 12);
    if (!due.length) {
      const has = Object.keys(T().srs).length;
      return stageView(`<div class="stack" style="justify-items:center;text-align:center"><div style="font-size:80px">${has ? "✨" : "🏝️"}</div><h2 class="kf" style="font-size:26px">${has ? "¡El cofre está vacío por hoy!" : "Tu cofre aún no tiene palabras"}</h2>
        <span class="kh">${has ? (H() === "de" ? "Morgen kommen neue Wörter zum Wiederholen." : "New words come back tomorrow.") : (H() === "de" ? "Spiele eine Insel und tippe bei „Palabras“ auf „¡Ya las conozco!“." : "Play an island and tap “¡Ya las conozco!”.")}</span>
        <div class="center"><a class="kbtn go" href="#isla-rapido">⏱️ Contrarreloj</a><a class="kbtn sm" href="#isla">🗺️ Mapa</a></div></div>`, {});
    }
    due.forEach(w => AUD.prefetch("k-" + w.unit));
    stageView("", {});
    gListen($("#gbox"), due, {
      seq: due, mixed: true, pool: allWords(),
      onAnswer: (w, ok) => { srsGrade(T().srs[w.key], ok ? 2 : 0); save(); },
      onEnd: (s, n) => { addStars(s); missionDone("rev"); reward({ stars: starsFor(s, n), coins: 3, title: `${s} de ${n}`, help: H() === "de" ? "Die Wörter, die du wusstest, kommen in ein paar Tagen wieder." : "Words you knew come back in a few days." }); }
    });
  }

  function fast() {
    const kn = allWords().filter(w => T().srs[w.key]);
    const pool = kn.length >= 8 ? kn : allWords().filter(w => ["hola", "familia", "comida", "animales"].includes(w.unit));
    const best = (T().best || {}).fast || 0;
    stageView(`<div class="stack" style="justify-items:center;text-align:center"><div style="font-size:80px">⏱️</div><h2 class="kf" style="font-size:28px">45 segundos</h2><span class="kh">${esc(hp(ES.narr.fast))}</span>
      ${best ? `<p class="kf" style="font-size:20px">🏆 Récord: ${best}</p>` : ""}<button class="kbtn go" data-act="f-go">¡Empezar!</button></div>`, {
      "f-go": async () => {
        const box = $("#gbox"); let score = 0, locked = false;
        await narr("fast");
        const end = Date.now() + 45000;
        const tick = setInterval(() => {
          const left = Math.max(0, Math.ceil((end - Date.now()) / 1000)), t = $("#f-t");
          if (!t) { clearInterval(tick); return; } t.textContent = left;
          if (left <= 0) { clearInterval(tick); finish(); }
        }, 200);
        const finish = () => {
          T().best = T().best || {}; const rec = score > (T().best.fast || 0); if (rec) T().best.fast = score;
          if (score >= 10) sticker("rapido"); addStars(Math.min(5, Math.ceil(score / 3))); missionDone("rev");
          reward({ stars: score >= 12 ? 3 : score >= 7 ? 2 : 1, coins: Math.ceil(score / 2), title: `${score} aciertos${rec ? " · ¡Récord!" : ""}`, nextLabel: "Otra vez", next: fast });
        };
        const round = () => {
          if (Date.now() >= end) return;
          const w = pick(pool, 1)[0], opts = shuffle([w, ...pick(pool.filter(x => x.pic !== w.pic), 3)]); locked = false;
          box.innerHTML = `<div class="ghead"><span class="timer" id="f-t">${Math.ceil((end - Date.now()) / 1000)}</span><span class="count">⚡ ${score}</span></div>
            <div class="prompt-word">${esc(w.es)}</div>
            <div class="opts">${opts.map(x => `<button class="opt pic" data-act="f-pick" data-ok="${x === w ? 1 : 0}">${x.pic}</button>`).join("")}</div>`;
          ACT["f-pick"] = el => { if (locked) return; locked = true; const ok = el.dataset.ok === "1"; el.classList.add(ok ? "ok-x" : "bad-x"); if (ok) { score++; right(el); } else wrong(); setTimeout(round, ok ? 250 : 650); };
        };
        round();
      }
    });
  }

  function simonScreen() {
    AUD.prefetch("k-cuerpo");
    stageView("", { again: simonScreen });
    gSimon($("#gbox"), unitById("cuerpo").tpr, (s, n) => { addStars(Math.ceil(s / 3)); reward({ stars: s === n ? 3 : s >= 7 ? 2 : 1, coins: 3, title: `${s} de ${n}`, nextLabel: "Otra vez", next: simonScreen }); });
  }

  function dict(filter = "") {
    AUD.prefetch("k-slang");
    const regs = Object.entries(ES.regions), list = ES.slang.filter(s => !filter || s.r === filter);
    stageView(`${head("slang", ui("dict").es)}
      <div class="filters"><button class="chip" data-act="f" data-r="" aria-pressed="${!filter}">Todos</button>${regs.map(([k, r]) => `<button class="chip" data-act="f" data-r="${k}" aria-pressed="${filter === k}">${r.flag} ${esc(r.name)}</button>`).join("")}</div>
      <div class="slangs">${list.map(slangCard).join("")}</div>
      <div class="center"><a class="kbtn go" href="#isla-donde">🌎 Jugar: ¿De dónde es?</a></div>`, {
      f: el => dict(el.dataset.r),
      ss: el => speak("r-" + el.dataset.r, el.dataset.t, { btn: el })
    });
  }

  function where() {
    stageView("", {});
    gWhere($("#gbox"), ES.slang, 8, (s, n) => { addStars(Math.ceil(s / 2)); reward({ stars: s >= 7 ? 3 : s >= 4 ? 2 : 1, coins: 3, title: `${s} de ${n}`, nextLabel: "Otra vez", next: where }); });
  }

  function retos() {
    const t = T(); t.retoDay = t.retoDay && t.retoDay.d === today() ? t.retoDay : { d: today(), done: [] };
    const seed = [...today()].reduce((a, c) => a + c.charCodeAt(0), 0) % ES.retos.length;
    const order = [seed, ...ES.retos.map((_, i) => i).filter(i => i !== seed)];
    stageView(`${head("retos", ui("retos").es)}
      <div class="retos">${order.map((i, k) => { const r = ES.retos[i], dn = t.retoDay.done.includes(i); return `<div class="reto ${k === 0 ? "today" : ""}">
        <span style="font-size:32px">${k === 0 ? "⭐" : "🎯"}</span><div class="t">${esc(r.es)}<span class="kh">${esc(hp(r))}</span></div>
        <button class="kbtn sm ${dn ? "" : "go"}" data-act="rd" data-i="${i}" ${dn ? "disabled" : ""}>${dn ? "✓" : "¡Hecho!"}</button></div>`; }).join("")}</div>`, {
      rd: el => { const i = +el.dataset.i; if (t.retoDay.done.includes(i)) return; t.retoDay.done.push(i); t.retos[i] = (t.retos[i] || 0) + 1; addStars(3); missionDone("reto"); right(el); addCoins(5, el); el.disabled = true; el.textContent = "✓"; el.classList.remove("go"); save(); }
    });
    narrOnce("retos");
  }

  function album() {
    const t = T();
    const items = [...ES.levels.filter(L => ES.exams[L.id]).map(L => ["examen-" + L.id, L.trophy, ES.exams[L.id].title, hp(ES.exams[L.id])]), ...ES.units.map(u => [u.id, u.sticker, u.title, hp(u)]), ...EXTRA.map(x => [x[0], x[1], x[2], H() === "de" ? x[3] : x[4]])];
    stageView(`<div class="ghead"><span class="t">${esc(ui("album").es)}<small>${t.stickers.length} / ${items.length}</small></span></div>
      <div class="album">${items.map(([id, p, es, h]) => { const has = t.stickers.includes(id); return `<div class="stk-c ${has ? "" : "locked"}"><span class="pic">${p}</span><b>${esc(es)}</b><span class="kh">${has ? esc(h) : "?"}</span></div>`; }).join("")}</div>`, {});
  }

  function shop() {
    const t = T(); t.owned = t.owned || []; t.wear = t.wear || {};
    AUD.prefetch("k-coco");
    stageView(`<div class="shop-top"><span id="shop-coco">${cocoHTML(170, "float-anim")}</span>
        <div class="stack" style="gap:8px"><h2 class="kf" style="font-size:30px">La tienda de Coco</h2><span class="kh">${esc(hp(ES.narr.shop))}</span><span class="pill coins" style="justify-self:start">🪙 <span id="hud-coins">${t.coins}</span></span></div></div>
      <div class="shop">${ES.shop.map(it => { const own = t.owned.includes(it.id), worn = t.wear[it.slot] === it.id; return `<div class="item ${worn ? "worn" : ""}"><span class="pic">${it.pic}</span><b class="kf" style="font-size:16px">${esc(it.es)}</b>
        ${own ? `<button class="kbtn sm ${worn ? "" : "sea"}" data-act="wear" data-id="${it.id}">${worn ? "Quitar" : "Ponerse"}</button>` : `<button class="kbtn sm go" data-act="buy" data-id="${it.id}" ${t.coins >= it.price ? "" : "disabled"}>🪙 ${it.price}</button>`}</div>`; }).join("")}</div>`, {
      buy: el => {
        const it = ES.shop.find(x => x.id === el.dataset.id); if (!it || t.coins < it.price || t.owned.includes(it.id)) return;
        t.coins -= it.price; t.owned.push(it.id); t.wear[it.slot] = it.id; save(); sticker("tienda");
        SFX.play("buy"); confetti(); shop(); speak("k-lat", it.es).then(() => speak("coco", one(ES.lines.shop)));
      },
      wear: el => { const it = ES.shop.find(x => x.id === el.dataset.id); if (t.wear[it.slot] === it.id) delete t.wear[it.slot]; else t.wear[it.slot] = it.id; save(); SFX.play("pop"); shop(); }
    });
    narrOnce("shop");
  }

  function chat() {
    if (!aiOK()) {
      return stageView(`<div class="stack" style="justify-items:center;text-align:center"><div style="font-size:80px">🦜💤</div><h2 class="kf" style="font-size:26px">Coco está durmiendo</h2>
        <span class="kh">Charlar con Coco usa Claude y solo funciona con una cuenta de Claude que lo permita. ¡Los retos con un adulto son todavía mejores!</span>
        <a class="kbtn go" href="#isla-retos">🤝 Retos</a></div>`, {});
    }
    const msgs = [{ from: "coco", es: "¡Hola! Soy Coco, el loro. ¿Cómo te llamas?", help: H() === "de" ? "Hallo! Ich bin Coco, der Papagei. Wie heißt du?" : "Hi! I'm Coco the parrot. What's your name?", opts: ["Me llamo…", "¡Hola, Coco!"] }];
    let busy = false, stopFn = null;
    const known = allWords().filter(w => T().srs[w.key]).map(w => w.es).slice(0, 80);
    const words = known.length ? known : ES.units[0].words.map(w => w.es).concat(ES.units[1].words.map(w => w.es));
    const draw = () => {
      const last = msgs[msgs.length - 1];
      $("#cc").innerHTML = msgs.map(m => m.from === "coco"
        ? `<div class="cmsg coco"><div class="row" style="gap:8px;flex-wrap:nowrap">${sayBtn(m.es, "coco")}<div><div class="es">${m.emoji ? m.emoji + " " : ""}${esc(m.es)}</div><span class="kh">${esc(m.help || "")}</span></div></div></div>`
        : `<div class="cmsg kid"><div class="es">${esc(m.es)}</div></div>`).join("") + (busy ? `<div class="cmsg coco"><span class="es">🦜 …</span></div>` : "");
      $("#c-opts").innerHTML = (last.from === "coco" && last.opts ? last.opts : []).map(o => `<button class="chip" data-act="c-opt" data-t="${esc(o)}">${esc(o)}</button>`).join("");
    };
    const send = async text => {
      text = String(text || "").trim(); if (!text || busy) return;
      msgs.push({ from: "kid", es: text }); busy = true; draw(); $("#c-in").value = "";
      const helpLang = H() === "de" ? "alemán" : "inglés";
      const transcript = msgs.slice(-12).map(m => (m.from === "coco" ? "Coco: " : "Niño: ") + m.es).join("\n");
      const prompt = `Eres Coco, un loro dominicano muy simpático que ayuda a un niño de 9 años (su lengua es el ${helpLang}) a aprender español. Es principiante.
Reglas:
- Responde en español MUY sencillo: 1 o 2 frases cortas (máximo 14 palabras en total) y termina con una pregunta fácil.
- Usa sobre todo estas palabras que ya conoce: ${words.join(", ")}.
- Si el niño se equivoca, no lo corrijas de forma directa: repite la frase bien dicha de forma natural.
- Si escribe en ${helpLang}, responde en español sencillo igualmente.
- De vez en cuando usa una palabra caribeña simpática (chévere, un chin, ¡tá jevi!) y explícala.
- Todo 100 % apto para niños. Nunca pidas datos personales (dirección, colegio, teléfono, fotos). Si cuenta algo preocupante, responde con cariño y dile que se lo cuente a un adulto de confianza.
Conversación:
${transcript}
Devuelve SOLO JSON: {"coco":"tu frase en español","ayuda":"traducción al ${helpLang}","emoji":"un emoji","opciones":["respuesta corta posible del niño en español","otra respuesta corta"]}`;
      try {
        const r = await askJSON(prompt, "quick");
        msgs.push({ from: "coco", es: String(r.coco || "¡Chévere!"), help: String(r.ayuda || ""), emoji: String(r.emoji || ""), opts: Array.isArray(r.opciones) ? r.opciones.slice(0, 3).map(String) : [] });
        sticker("charla"); addCoins(1);
        busy = false; draw(); speak("coco", msgs[msgs.length - 1].es);
      } catch (e) { busy = false; draw(); toast(aiMsg(e)); }
    };
    stageView(`<div class="ghead"><span class="t">${esc(ui("chat").es)}<small>${H() === "de" ? "Schreib oder sprich auf Spanisch." : "Write or speak in Spanish."}</small></span></div>
      <div class="cchat" id="cc"></div><div class="row" id="c-opts"></div>
      <form class="row" id="c-form" style="flex-wrap:nowrap"><input id="c-in" autocomplete="off" placeholder="Escribe en español…"><button class="mic" type="button" data-mic data-act="c-mic" aria-label="Hablar">${ICON.mic}</button><button class="kbtn go sm" type="submit">Enviar</button></form>`, {
      "c-opt": el => { $("#c-in").value = el.dataset.t.replace("…", " "); $("#c-in").focus(); },
      "c-mic": el => {
        if (stopFn) { stopFn(); return; }
        el.classList.add("on");
        stopFn = listen("es", txt => { $("#c-in").value = txt; }, txt => { el.classList.remove("on"); stopFn = null; if (txt) send(txt); });
        if (!stopFn) el.classList.remove("on");
      }
    });
    $("#c-form").addEventListener("submit", e => { e.preventDefault(); send($("#c-in").value); });
    draw();
  }

  /* ---------- escalera de voz: niveles que solo se superan hablando ---------- */
  function vozHome() {
    Voz.ladder({
      lang: "es", hrefOf: (l, si) => `#isla-voz-${l}-${si}`,
      page: (html, act) => view(`<div class="wrap isla"><div class="row" style="margin-bottom:14px;justify-content:space-between"><a class="gx" href="#isla" aria-label="Volver al mapa">${ICON.close}</a>${hud()}</div>${html}</div>`, { ...BASEACT, ...act })
    });
  }
  function vozStage(lv, si) {
    si = Math.max(0, Math.min(4, +si || 0));
    if (!Voz.openLv("es").includes(lv)) return vozHome();
    Voz.stage({
      lang: "es", lv, si, backHref: "#isla-voz",
      page: (html, act) => view(`<div class="wrap isla">${html}${coachK()}</div>`, { ...BASEACT, ...act }),
      onDone: (avg, pass, first) => {
        const stars = avg >= .85 ? 3 : avg >= .65 ? 2 : 1;
        if (pass) addStars(stars);
        reward({
          stars, coins: pass ? (first ? 6 : 2) : 0, kind: pass ? "good" : "try",
          title: pass ? (si === 4 ? "¡Subiste toda la escalera " + lv + "!" : "¡Peldaño superado!") : "¡Casi! " + Math.round(avg * 100) + " %",
          help: pass ? (H() === "de" ? "Super gesprochen! Die nächste Stufe ist offen." : "Great speaking! The next step is open.") : (H() === "de" ? "Du brauchst zwei Sterne (65 %). Hör gut zu und versuch es noch einmal." : "You need two stars (65 %). Listen carefully and try again."),
          nextLabel: pass && si < 4 ? "Siguiente peldaño" : pass ? "Escalera" : "Otra vez",
          next: () => { location.hash = pass && si < 4 ? `#isla-voz-${lv}-${si + 1}` : pass ? "#isla-voz" : `#isla-voz-${lv}-${si}`; if (!pass) vozStage(lv, si); }
        });
      }
    });
  }

  function route(parts) {
    const [a, b] = parts;
    if (a === "u") return unit(parts.slice(1).join("-"));
    if (a === "examen") return exam(b);
    if (a === "desafio") return smart();
    if (a === "voz") return b ? vozStage(b, parts[2]) : vozHome();
    if (a === "repaso") return review();
    if (a === "rapido") return fast();
    if (a === "simon") return simonScreen();
    if (a === "dicc") return dict();
    if (a === "donde") return where();
    if (a === "retos") return retos();
    if (a === "album") return album();
    if (a === "tienda") return shop();
    if (a === "coco") return chat();
    return home();
  }
  return { route };
})();
