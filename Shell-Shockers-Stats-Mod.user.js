// ==UserScript==
// @name         Shell Shockers Stats Mod
// @version      2.0.2
// @description  Match History for Shell Shockers: every match's kills, deaths and KDR, a live scoreboard, and pictures to share. Open it from the round button on the home screen or with a key you set in Settings.
// @namespace    https://github.com/Virojet/Shell-Shockers-Stats-Mod
// @author       Virojet
// @license      MIT
// @icon         data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0Ij48Y2lyY2xlIGN4PSIzMiIgY3k9IjMyIiByPSIyOSIgZmlsbD0iIzBiOTNiZCIgc3Ryb2tlPSIjMEM1NzZGIiBzdHJva2Utd2lkdGg9IjQiLz48ZyBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIuNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMy42IDMzLjYpIHNjYWxlKDEuOSkgdHJhbnNsYXRlKC0xMiAtMTIpIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1vcGFjaXR5PSIuMyIgZD0iTTMuNSAxMkE4LjUgOC41IDAgMSAxIDYgMThNMSA5LjZsMi41IDIuN0w2IDkuNk0xMiA3LjZWMTJsMyAyIi8+PHBhdGggdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzIgMzIpIHNjYWxlKDEuOSkgdHJhbnNsYXRlKC0xMiAtMTIpIiBzdHJva2U9IiNmZmYiIGQ9Ik0zLjUgMTJBOC41IDguNSAwIDEgMSA2IDE4TTEgOS42bDIuNSAyLjdMNiA5LjZNMTIgNy42VjEybDMgMiIvPjwvZz48L3N2Zz4K
// @homepageURL  https://github.com/Virojet/Shell-Shockers-Stats-Mod
// @supportURL   https://github.com/Virojet/Shell-Shockers-Stats-Mod/issues
// @updateURL    https://raw.githubusercontent.com/Virojet/Shell-Shockers-Stats-Mod/main/Shell-Shockers-Stats-Mod.user.js
// @downloadURL  https://raw.githubusercontent.com/Virojet/Shell-Shockers-Stats-Mod/main/Shell-Shockers-Stats-Mod.user.js
// @match        *://*.shellshock.io/*
// @match        *://*.algebra.best/*
// @match        *://*.algebra.vip/*
// @match        *://*.biologyclass.club/*
// @match        *://*.deadlyegg.com/*
// @match        *://*.deathegg.world/*
// @match        *://*.eggboy.club/*
// @match        *://*.eggboy.xyz/*
// @match        *://*.eggcombat.com/*
// @match        *://*.egg.dance/*
// @match        *://*.eggfacts.fun/*
// @match        *://*.egghead.institute/*
// @match        *://*.eggisthenewblack.com/*
// @match        *://*.eggsarecool.com/*
// @match        *://*.geometry.best/*
// @match        *://*.geometry.monster/*
// @match        *://*.geometry.pw/*
// @match        *://*.geometry.report/*
// @match        *://*.hardboiled.life/*
// @match        *://*.hardshell.life/*
// @match        *://*.humanorganising.org/*
// @match        *://*.mathactivity.xyz/*
// @match        *://*.mathactivity.club/*
// @match        *://*.mathdrills.info/*
// @match        *://*.mathdrills.life/*
// @match        *://*.mathfun.rocks/*
// @match        *://*.mathgames.world/*
// @match        *://*.math.international/*
// @match        *://*.mathlete.fun/*
// @match        *://*.mathlete.pro/*
// @match        *://*.overeasy.club/*
// @match        *://*.risenegg.com/*
// @match        *://*.scrambled.tech/*
// @match        *://*.scrambled.today/*
// @match        *://*.scrambled.us/*
// @match        *://*.scrambled.world/*
// @match        *://*.shellshockers.club/*
// @match        *://*.shellshockers.life/*
// @match        *://*.shellshockers.site/*
// @match        *://*.shellshockers.us/*
// @match        *://*.shellshockers.world/*
// @match        *://*.shellshockers.xyz/*
// @match        *://*.shellsocks.com/*
// @match        *://*.softboiled.club/*
// @match        *://*.urbanegger.com/*
// @match        *://*.violentegg.club/*
// @match        *://*.violentegg.fun/*
// @match        *://*.yolk.best/*
// @match        *://*.yolk.life/*
// @match        *://*.yolk.rocks/*
// @match        *://*.yolk.tech/*
// @match        *://*.yolk.quest/*
// @match        *://*.yolk.today/*
// @match        *://*.zygote.cafe/*
// @match        *://*.shellshockers.best/*
// @match        *://*.eggboy.me/*
// @require      https://cdnjs.cloudflare.com/ajax/libs/html-to-image/1.11.11/html-to-image.min.js#sha512-7tWCgq9tTYS/QkGVyKrtLpqAoMV9XIUxoou+sPUypsaZx56cYR/qio84fPK9EvJJtKvJEwt7vkn6je5UVzGevw==
// @grant        none
// @run-at       document-start
// ==/UserScript==

/* Shell Shockers Stats Mod: Better HUD's Match History on its own.

   It keeps your last 40 matches (map, mode, server, length, and everyone's kills, deaths and KDR) and shows the
   match you're in as a live scoreboard. Copy Image and Download turn a scoreboard into a picture to share.

   Opening it: the round button after Game Mode on the home screen, or a key (\ unless you pick another). The key is
   in Settings ▸ Keybindings ▸ Match History (Backspace there means no key), and Settings ▸ Misc ▸ More options can
   hide the button. As with the game's settings around them, a change is kept when you press Confirm.

   How it counts: as the page loads, two small additions to the game's code give it the player list
   (window.players) and your place in it (window.myPlayerIdx). Once a second each player's kills and deaths are
   added up from the game's own counters, so switching teams or a counter reset doesn't lose them. The match code
   and server come from the address of the match's connection.

   The history is kept in this site's storage under the same name Better HUD uses, so the two share it. Better HUD
   has Match History built in, so with Better HUD running the Stats Mod stays off.

   window.ssStatsMod: version, openHistory(), openLive(), close(), settings() and status(). */
(() => {
  "use strict";
  if (window.ssStatsMod) return;   // already running: Tampermonkey and the Mod Menu both started it

  const VERSION = "2.0.2";
  const TAG = "[Stats Mod]";
  const betterHud = () => !!(window.SSB_VERSION || window.__ssbSettings || window.__ssbOpenHistory);
  if (betterHud()) {
    console.info(TAG + " Better HUD is running and already has Match History, so the Stats Mod is off.");
    return;
  }
  // Stats Mod 1.x used the same page ids: whichever copy starts first runs.
  if (window.__ssbStatsOnlyInstalled) {
    console.info(TAG + " An older copy of the Stats Mod is running, so this one is off. Remove the older one in Tampermonkey.");
    return;
  }
  window.__ssbStatsOnlyInstalled = true;

  /* ---- Saved data (the same keys as Better HUD) ---- */
  const HISTORY_KEY = "tp-statsHistory";       // the last 40 matches
  const SESSION_KEY = "tp-statsSession";       // the match being played, so a reload can pick it up again
  const SHOW_KEY = "tp-showMatchHistory";      // the home screen button (JSON true / false, on when missing)
  const HOTKEY_KEY = "tp-statsHotkey";         // the key, as KeyboardEvent.key ("" = none, missing = \)
  const CODE_KEY = "tp-statsHotkeyCode";       // { key, code }: the physical key it was set with
  const HISTORY_MAX = 40;
  const DEFAULTS = Object.freeze({ show: true, key: "\\", code: "Backslash" });

  const REGIONS = { singapore: "Singapore", uswest: "US West", sydney: "Sydney", uscentral: "US Central", useast: "US East", germany: "Germany", santiago: "Chile" };
  const MODES = { ctf: "Capture the Spatula", king: "King of the Coop", team: "Teams", ffa: "Free for All" };
  const MAP_NAMES = ["Abduction", "Aqueduct", "Backstage", "Bastion", "Bedrock", "BioHazard", "Blender", "Blue", "Bridge",
    "Canyon", "Cash", "Castle", "Castle Arena", "Catacombs", "Chicken Itza", "Cluckgrounds", "Cobalt",
    "Courtyard", "Creak", "Crossed", "Crowsnest", "Death Pit", "Dirt", "Dirt Base", "Downfall", "Duel Pyramid",
    "Eggcrates", "Enchanted", "Exposure", "Facility", "Feedlot", "Field", "Flux", "Fort Flip", "Foundation",
    "Four Quarters", "Gravel Stomp", "Greenhouse", "Growler", "Haunted", "Helix", "Hydro", "Ice Box", "Indigo",
    "Inmates", "Jail Break", "Jinx", "Junction", "King's Court", "Lunar Module", "Mansion", "Maze Runner",
    "Metamorph", "Metro 1012", "Moonbase", "Mud Gulch", "Nextdoor", "Orbital", "Outer Reach", "Overcooked",
    "Palace Siege", "Quarry", "Queen's Court", "Raceway", "Rameses", "Rats", "Relic", "Rivals", "Road", "Ruins",
    "Sanctuary", "Scales", "Shady Glen", "Shellville", "Shipyard", "Sky Scratcher", "Space Factory",
    "Space Arena", "Sparta", "Spellbound", "Stage", "Starship", "Stax Arena", "Teggtris", "Temple", "Timetwist",
    "Trainyard", "Tree Fort", "Two Towers", "Uncovered", "Vert", "Wimble", "Wonderland", "Wreckage",
    "Yolkido Garrison", "Zoomies"];

  const warned = new Set();
  // Each kind of problem is reported once, so a game update can't flood the console.
  const warn = (what, err) => { if (!warned.has(what)) { warned.add(what); console.warn(TAG + " " + what + ":", err); } };
  const sound = name => { try { window.BAWK?.play?.(name); } catch (e) { /* the game's sounds aren't ready yet */ } };
  const vue = () => { const a = window.vueApp; return (a && (a.$data || a)) || {}; };
  function el(tag, cls, text) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  function addStyle(id, css) {
    if (document.getElementById(id)) return;
    const s = el("style", null, css);
    s.id = id;
    (document.head || document.documentElement).appendChild(s);
  }
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

  let running = false;   // started, and not stopped since
  let wanted = true;     // the Mod Menu's switch (on when there's no Mod Menu)
  let dead = false;      // Better HUD turned up: off for good on this page

  /* ---- Game patches ----
     The game's code is one big inline script (it starts with "(()=>{"). As the page adds it, two additions are made
     to it: window.players (the game's player list) and window.myPlayerIdx (your slot in that list). The list is
     made anew for each match, and each time it's made it's put on window again. If another mod made the same
     additions they're left alone. Anything that reads that script's text still gets the original back. */
  const replaceAll = String.prototype.replaceAll;
  const PATCHES = [
    ["players", src => {
      if (src.includes("window.players=")) return true;
      const k = src.indexOf("[this.playerIdx]");
      let j = k;
      while (j > 0 && /[\w$]/.test(src[j - 1])) j--;
      if (k < 1 || j === k) return null;
      const name = src.slice(j, k);
      return replaceAll.call(src, name + "=[]", () => name + "=[],window.players=" + name);
    }],
    ["my-player-idx", src => {
      if (src.includes("window.myPlayerIdx=")) return true;
      const m = /gameJoined_ received"\),(\w+)=\w+\.unPackInt8U\(\)/.exec(src) || /([A-Z]{2})=[A-Za-z$_]+\.unPackInt8U\(\)/.exec(src);
      return m ? replaceAll.call(src, m[0], () => m[0] + ",window.myPlayerIdx=" + m[1]) : null;
    }],
  ];
  let patchReport = null;
  (() => {
    const nodeText = Object.getOwnPropertyDescriptor(Node.prototype, "textContent");
    const originals = new WeakMap();
    const nativeAppend = HTMLElement.prototype.appendChild;
    HTMLElement.prototype.appendChild = function (node) {
      // Better HUD loaded after this script makes the same additions itself, and this script stands down.
      if (node && node.tagName === "SCRIPT" && !node.src && !originals.has(node) && !betterHud()) {
        try { patch(node); } catch (e) { warn("Patching the game failed", e); }
      }
      return nativeAppend.call(this, node);
    };
    function patch(node) {
      const src = nodeText.get.call(node);
      if (!src || src.length < 100000 || !src.startsWith("(()=>{")) return;
      const t0 = performance.now(), applied = [], there = [], missed = [];
      let out = src;
      for (const [name, fn] of PATCHES) {
        let r = null;
        try { r = fn(out); } catch (e) { warn("Patch " + name, e); }
        if (r === true) there.push(name);
        else if (typeof r === "string" && r !== out) { out = r; applied.push(name); }
        else missed.push(name);
      }
      originals.set(node, src);
      if (out !== src) nodeText.set.call(node, out);
      const ms = +(performance.now() - t0).toFixed(1);
      patchReport = { applied, there, missed, ms };
      const parts = [];
      if (applied.length) parts.push(applied.length + " applied (" + applied.join(", ") + ")");
      if (there.length) parts.push("already there: " + there.join(", "));
      if (missed.length) parts.push("NOT applied: " + missed.join(", ") + " (game updated?)");
      console.log(TAG + " Game patches: " + parts.join("; ") + " in " + ms + " ms");
    }
    const scriptText = Object.getOwnPropertyDescriptor(HTMLScriptElement.prototype, "textContent") || nodeText;
    Object.defineProperty(HTMLScriptElement.prototype, "textContent", {
      get() { const o = originals.get(this); return o !== undefined ? o : scriptText.get.call(this); },
      set: scriptText.set,
      configurable: true,
      enumerable: true,
    });
  })();

  /* ---- Tracking ---- */
  const st = {
    matchStartMs: 0, matchEndMs: 0, inMatch: false, hadLock: false,
    gameCode: "", server: "", map: "", mode: "",
    byName: {}, snapshot: [], everSeenTeams: false, kotcScore: { 1: 0, 2: 0 },
  };

  // The match's connection (wss://…/game/<code>) gives its code, and the server's address its region. The
  // matchmaker and the region pings on the home screen have no code and are skipped.
  const net = { code: "", region: "" };
  (() => {
    const Native = window.WebSocket;
    if (typeof Native !== "function") return;
    try {
      window.WebSocket = new Proxy(Native, {
        construct(target, args, newTarget) {
          try { noteSocket(args[0]); } catch (e) { warn("Reading the match address", e); }
          return Reflect.construct(target, args, newTarget);
        },
      });
    } catch (e) { warn("Watching the game's connection", e); }
  })();
  function noteSocket(url) {
    const u = new URL(String(url), location.href);
    const m = /\/game\/([^/?#]+)/.exec(u.pathname || "");
    if (!m) return;
    // Mid-match the game can open a connection for the next match; only a new code seen on the menus starts a
    // new match.
    if (m[1] !== net.code && !document.pointerLockElement) st._readyForReset = true;
    net.code = m[1];
    const host = u.hostname.toLowerCase();
    net.region = Object.keys(REGIONS).find(r => host.includes(r)) || "";
  }

  function mapName() {
    try {
      const data = vue();
      for (const p of window.players || []) {
        const i = p && p.gameData && p.gameData.mapIdx;
        if (typeof i === "number") {
          if (data.maps && data.maps[i] && data.maps[i].name) return data.maps[i].name;
          if (MAP_NAMES[i]) return MAP_NAMES[i];
        }
      }
    } catch (e) { warn("Reading the map", e); }
    const bad = v => !v || /^(none|photo|menu|lobby|select|loading)/i.test(String(v).trim());
    try {
      const a = vue();
      for (const v of [a.game && a.game.mapName, a.gameMap, a.mapName, a.map, a.ui && a.ui.game && a.ui.game.map]) {
        if (typeof v === "string" && !bad(v)) return v.trim();
      }
    } catch (e) { warn("Reading the map name", e); }
    return "";
  }

  function serverRegion() {
    if (net.region) return net.region;
    try {
      const id = vue().currentRegionId;   // the region picked in the game's Servers list
      if (typeof id === "string") return id;
    } catch (e) { /* no region */ }
    return "";
  }

  // In a game (playing or paused), from the game's own flag. The player list stays filled after you leave a game,
  // so it can't tell.
  function inGame() {
    try {
      const x = window.extern;
      if (x && typeof x.inGame === "boolean") return x.inGame;
      const g = vue().game;
      if (g && typeof g.on === "boolean") return g.on;
    } catch (e) { /* not known: the player list decides */ }
    return true;
  }

  // The game's own mode (0 FFA, 1 Teams, 2 Spatula, 3 King) while a game is on; otherwise its HUD tells.
  function modeNow() {
    try {
      const g = vue().game;
      if (g && g.on && typeof g.gameType === "number") {
        const m = ["ffa", "team", "ctf", "king"][g.gameType];
        if (m) return m;
      }
    } catch (e) { warn("Reading the mode", e); }
    if (st.mode === "king" || st.mode === "ctf") return st.mode;
    const now = Date.now(), wait = document.pointerLockElement ? 1e4 : 2e3;
    if (st._modeTs && now - st._modeTs < wait && st.mode) return st.mode;
    st._modeTs = now;
    const shown = e => {
      if (!e || (e.checkVisibility && !e.checkVisibility())) return false;
      const r = e.getBoundingClientRect();
      return r.width > 0 && r.height > 0;
    };
    if (shown(document.getElementById("captureContainer"))) return "king";
    if (shown(document.getElementById("teamScores")) || shown(document.getElementById("spatulaPlayer"))) return "ctf";
    const p = window.players;
    return (p && p.some(x => x && (x.team === 1 || x.team === 2))) || st.everSeenTeams ? "team" : "ffa";
  }

  /* The history (~57 KB for 40 matches) is read once and kept in memory. Writes wait 2 s; edits and forced saves
     write at once. A write from another tab drops the copy in memory. */
  let histMem = null, histTimer = 0;
  function hist() {
    if (!histMem) {
      try { histMem = JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]"); } catch (e) { histMem = []; }
      if (!Array.isArray(histMem)) histMem = [];
    }
    return histMem;
  }
  function histWrite(now) {
    clearTimeout(histTimer);
    histTimer = 0;
    if (!now) {
      histTimer = setTimeout(() => histWrite(true), 2000);
      return;
    }
    try {
      if (histMem && histMem.length) localStorage.setItem(HISTORY_KEY, JSON.stringify(histMem));
      else localStorage.removeItem(HISTORY_KEY);
    } catch (e) { warn("Saving the history", e); }
  }
  function histSet(list) {
    histMem = Array.isArray(list) ? list : [];
    histWrite(true);
  }

  // Saves the match being played: its session (so a reload in the same match carries on) and its history entry.
  function save(force) {
    try {
      if (force && histTimer) histWrite(true);
      if (!st.matchStartMs) return;
      let sk = 0, sd = 0, sn = 0;
      for (const k in st.byName) {
        const r = st.byName[k];
        sk += r.kills || 0;
        sd += r.deaths || 0;
        sn++;
      }
      // A match goes in the history once it has players and has lasted 20 s. That's part of the fingerprint too,
      // or a match where nothing changed after its first 20 s would never be saved.
      const now = Date.now(), ready = (st.snapshot || []).length > 0 && now - st.matchStartMs >= 2e4;
      const sig = st.gameCode + "|" + st.matchStartMs + "|" + st.map + "|" + st.server + "|" + st.mode + "|" + st.kotcScore[1] + "," + st.kotcScore[2] + "|" + sk + "|" + sd + "|" + sn + "|" + ready;
      if (!force && st._saveSig === sig && !st._histDue && !st._sessDue) return;
      st._saveSig = sig;
      const code = st.gameCode || st._synth || (st._synth = "local-" + (st.matchStartMs || Date.now()));
      // In play the session is written at most every 10 s.
      if (force || !document.pointerLockElement || now - (st._sessTs || 0) >= 1e4) {
        st._sessTs = now;
        st._sessDue = 0;
        localStorage.setItem(SESSION_KEY, JSON.stringify({
          code, map: st.map, server: st.server, byName: st.byName, matchStartMs: st.matchStartMs,
          kotcScore: st.kotcScore, everSeenTeams: st.everSeenTeams, mode: st.mode, ts: now,
        }));
      } else st._sessDue = 1;
      if (!ready) return;
      const players = st.snapshot.map(p => ({ name: p.name, team: p.team, kills: p.kills, deaths: p.deaths, isMe: p.isMe }));
      // In play the history entry is refreshed at most every 15 s; the next tick does a skipped one.
      if (!force && document.pointerLockElement && now - (st._histTs || 0) < 15e3) {
        st._histDue = 1;
        return;
      }
      st._histDue = 0;
      st._histTs = now;
      const list = hist();
      // A match that has ended keeps its end: a save after you left (closing the tab, say) doesn't make it longer.
      const entry = { code, map: st.map, server: st.server, mode: st.mode, startMs: st.matchStartMs, endMs: st.matchEndMs || now, kotc: st.kotcScore, players };
      const i = list.findIndex(h => h && h.code === code && Math.abs((h.startMs || 0) - st.matchStartMs) < 15e3);
      if (i >= 0) {
        entry.label = list[i].label;
        list[i] = entry;
      } else list.unshift(entry);
      if (list.length > HISTORY_MAX) list.splice(HISTORY_MAX);
      histWrite(!!force);
    } catch (e) { warn("Saving the match", e); }
  }

  // After a reload in the same match (same code, same map, within 5 minutes) the counts carry on.
  function restore(code, map) {
    try {
      if (st._restoreDone) return false;
      const s = JSON.parse(localStorage.getItem(SESSION_KEY) || "null");
      if (!s || s.code !== code || !(Date.now() - (s.ts || 0) < 3e5)) return false;
      if (s.map && map && s.map !== map) return false;
      st.byName = s.byName && typeof s.byName === "object" ? s.byName : {};
      for (const k of Object.keys(st.byName)) {
        const r = st.byName[k];
        if (r) {
          r._ret = 1;
          r._q = 0;
        }
      }
      st.matchStartMs = s.matchStartMs || Date.now();
      st.kotcScore = s.kotcScore || { 1: 0, 2: 0 };
      st.everSeenTeams = !!s.everSeenTeams;
      st.mode = s.mode || "";
      st._snapMap = {};
      st._restoreDone = true;
      return true;
    } catch (e) {
      return false;
    }
  }

  const nameOf = (p, slot) => p.name || p.safeName || p.lw || "Player " + slot;

  // Once a second: reads the scoreboard and adds what changed to each player's totals.
  function track() {
    if (!running || document.hidden) return;
    const read = t => {
      for (const id of t === 1 ? ["captureScoreBlue", "teamScoreNum1"] : ["captureScoreRed", "teamScoreNum2"]) {
        const n = document.getElementById(id);
        if (n) {
          const v = parseInt((n.textContent || "").trim(), 10);
          if (Number.isFinite(v)) return v;
        }
      }
      return 0;
    };
    const blue = read(1), red = read(2);
    if (blue + red > 0) st.kotcScore = { 1: blue, 2: red };

    const players = window.players, locked = !!document.pointerLockElement, playing = inGame();
    const has = playing && !!(players && players.some(p => p));
    if (has) {
      st._lastEmptyN = st._emptyN || 0;
      st._emptyN = 0;
    } else st._emptyN = (st._emptyN || 0) + 1;
    if (st._prevHadPlayers && !has) {
      st._readyForReset = true;
      // Left the game: the match ends now, and its history entry is brought up to date at once.
      if (!playing && st.matchStartMs) {
        st.matchEndMs = Date.now();
        st.inMatch = false;
        st.hadLock = false;
        st._prevHadPlayers = false;
        save(true);
        return;
      }
    }
    if (has) {
      if (!(locked && st.matchStartMs && st.inMatch && !st._readyForReset)) {
        const map = mapName(), server = serverRegion(), code = net.code;
        if (!st.matchStartMs || st.gameCode !== code || st._readyForReset) {
          const codeChanged = st.gameCode !== code;
          const changed = codeChanged ||
            (st._readyForReset && st.matchEndMs && Date.now() - st.matchEndMs > 3e5) ||
            (st._readyForReset && (st._lastEmptyN || 0) >= 2 && st.map && map && st.map !== map);
          const restored = codeChanged && code && restore(code, map);
          st.matchEndMs = 0;
          st.inMatch = true;
          st.hadLock = false;
          if (changed && !restored) {
            st.matchStartMs = Date.now();
            st.byName = {};
            st._snapMap = {};
            st.everSeenTeams = false;
            st.mode = "";
            st._modeTs = 0;
            st.kotcScore = { 1: 0, 2: 0 };
            st._seedQ = Date.now();
            st._synth = 0;
          } else if (!st.matchStartMs) st.matchStartMs = Date.now();
          st._readyForReset = false;
          st.gameCode = code;
          st.map = map;
          st.server = server;
          st.mode = modeNow();
        }
      }
      if (locked) {
        st.inMatch = true;
        st.hadLock = true;
        st.matchEndMs = 0;
      } else if (st.hadLock) {
        st.matchEndMs = Date.now();
        st.inMatch = false;
        st.hadLock = false;
      }
    }
    st._prevHadPlayers = has;
    if (st.inMatch) {
      // A mode only moves up (FFA, Teams, Spatula, King): a HUD that hasn't shown yet can't move it back.
      const m = modeNow(), rank = { king: 3, ctf: 2, team: 1, ffa: 0 };
      if (m && (rank[m] || 0) >= (rank[st.mode] || 0)) st.mode = m;
      if (!st.map) st.map = mapName();
      if (!st.server) st.server = serverRegion();
    }
    if (!players || !playing) return;
    if (!st.map) st.map = mapName();
    if (!st.server) st.server = serverRegion();
    if (!st.byName) st.byName = {};
    if (st._seedQ && (locked || Date.now() - st._seedQ > 6e4)) st._seedQ = 0;

    // Each slot's record: by name, or by name plus slot when two players share a name.
    const present = new Set(), rows = [];
    for (let l = 0; l < players.length; l++) {
      const c = players[l];
      if (!c || !c.stats) continue;
      const m = nameOf(c, l), team = c.team || 0;
      if (team === 1 || team === 2) st.everSeenTeams = true;
      const u = 0 | c.stats.kills, f = 0 | c.stats.deaths, tk = 0 | c.totalKills;
      const fk = m + String.fromCharCode(0) + l, bk = st.byName[m];
      let key;
      if (bk && bk._slot === l) key = m;
      else if (st.byName[fk]) key = fk;
      else if (bk) {
        const owner = players[bk._slot];
        key = owner && owner.stats && nameOf(owner, bk._slot) === m ? fk : m;
      } else key = m;
      present.add(key);
      rows.push([key, st.byName[key], l, u, f, team, m, c, fk, tk]);
    }
    const used = new Set();
    for (const row of rows) {
      let [key, rec, l, u, f, team, m, c, fk, tk] = row;
      if (rec && used.has(rec)) rec = undefined;
      if (!rec) {
        const b2 = st.byName[m];
        if (b2 && !used.has(b2) && b2._slot === l) {
          rec = b2;
          key = m;
        } else if (st.byName[fk] && !used.has(st.byName[fk])) {
          rec = st.byName[fk];
          key = fk;
        } else if (b2 && (used.has(b2) || (() => {
          const o2 = players[b2._slot];
          return o2 && o2.stats && nameOf(o2, b2._slot) === m;
        })())) key = fk;
        else if (b2) {
          rec = b2;
          key = m;
        }
        present.add(key);
      }
      if (!rec) {
        rec = st.byName[key] = { name: m, team, isMe: false, kills: u, deaths: f, _lastK: u, _lastD: f, _lastTK: tk, _slot: l, _q: st._seedQ ? 1 : 0 };
      }
      used.add(rec);
      // Kills: the bigger of the scoreboard's and the lifetime counter's rise, so a counter reset (a team
      // switch) loses nothing.
      const gd = u - rec._lastK;
      let ud = rec._lastTK == null ? 0 : tk - rec._lastTK;
      if (ud < 0 || ud > 30) ud = 0;
      const add = Math.max(gd > 0 ? gd : 0, ud > 0 ? ud : 0);
      if (add > 0) rec.kills += add;
      else if (u < rec._lastK && rec._q) rec.kills = u;
      if (f > rec._lastD) rec.deaths += f - rec._lastD;
      else if (f < rec._lastD && rec._q) rec.deaths = f;
      if (rec._ret) rec._ret = 0;
      if (rec._q && !st._seedQ) rec._q = 0;
      rec._slot = l;
      rec._lastK = u;
      rec._lastD = f;
      rec._lastTK = tk;
      rec.team = team;
      const g = vue().game;
      rec.isMe = (typeof window.myPlayerIdx === "number" && l === window.myPlayerIdx) ||
        (g && l === g.myPlayerIdx) || c.isLocalPlayer || c.me || c.isMe ||
        (c.name && g && c.name === g.myName) || rec.isMe;
      if (rec.isMe && st._meRec !== rec) {
        if (st._meRec && st._meRec.isMe) st._meRec.isMe = false;
        st._meRec = rec;
      }
    }
    // Players who left with nothing to their name (or seen only while joining) are dropped after 4 s.
    const now = Date.now();
    for (const k of Object.keys(st.byName)) {
      const r = st.byName[k];
      if (present.has(k)) {
        r._absentTs = 0;
        continue;
      }
      if (!r._absentTs) r._absentTs = now;
      if ((r._q || (!r.kills && !r.deaths)) && now - r._absentTs > 4e3) {
        delete st.byName[k];
        if (st._snapMap) delete st._snapMap[k];
      }
    }
    if (!st._snapMap) st._snapMap = {};
    let si = 0;
    st.snapshot = Object.keys(st.byName).map(k => {
      const o = st.byName[k], s = st._snapMap[k] || (st._snapMap[k] = { id: si++ });
      s.name = o.name;
      s.team = o.team;
      s.isMe = o.isMe;
      s.kills = o.kills;
      s.deaths = o.deaths;
      return s;
    });
  }

  /* ---- Dialogs and toasts (Better HUD's look) ----
     confirm / prompt return Promises. Enter confirms; Esc or a click on the backdrop cancels. While a dialog is
     open its keys stay inside it, so Esc doesn't also close the game's settings and typing can't trigger keys.
     Nothing opens mid-match (pointer locked): the dialog answers as cancelled. */
  const UI_CSS = `
    #ssb-stats-overlay, #ssb-dialog-overlay, #ssb-toast-stack { --ssb-ink:#0C576F; --ssb-blue:#0E7697; --ssb-panel:#8ED9E8; --ssb-orange:#FF981F; --ssb-red:#d82727; --ssb-muted:#216a80; --ssb-focus:#a34d00; }
    #ssb-dialog-overlay { position:fixed; inset:0; z-index:2147483647; display:flex; align-items:center; justify-content:center; padding:18px; box-sizing:border-box; background:rgba(7,39,52,0.55); backdrop-filter:blur(2px); font-family:"Nunito",system-ui,sans-serif; }
    #ssb-dialog-panel { width:min(470px,100%); box-sizing:border-box; padding:16px 22px 20px; border:4px solid var(--ssb-ink); border-radius:10.5px; background:linear-gradient(#1192bc,#3ea2c7 30%,#5bb2d2 55%,#75c3de 78%,#8dd3ea); box-shadow:0 18px 42px rgba(0,0,0,0.36); text-align:center; animation:ssb-pop-in 0.14s ease; }
    #ssb-dialog-panel * { box-sizing:border-box; font-size:inherit; letter-spacing:normal; }
    #ssb-dialog-panel .ssb-dlg-title { margin:0 0 12px; font-family:"Sigmar One",sans-serif; font-weight:normal; font-size:26px; line-height:1.15; color:#fff; text-transform:uppercase; text-shadow:rgba(11,147,189,0.9) 3px 3px 0; }
    #ssb-dialog-panel .ssb-dlg-text { margin:0 0 14px; font-size:16px; font-weight:800; line-height:1.35; color:#fff; text-shadow:rgba(0,0,0,0.3) 1px 1px 0; white-space:pre-line; overflow-wrap:anywhere; }
    #ssb-dialog-panel .ssb-dlg-input { display:block; width:100%; height:42px; margin:0; padding:0 12px; border:3px solid var(--ssb-ink); border-radius:8px; background:#fff; color:var(--ssb-ink); font-family:"Nunito",system-ui,sans-serif; font-size:17px; font-weight:800; text-align:left; outline:none; }
    #ssb-dialog-panel .ssb-dlg-input:focus { border-color:var(--ssb-orange); }
    #ssb-dialog-panel .ssb-dlg-err:not(:empty) { display:inline-block; margin-top:8px; padding:4px 10px; border-radius:6px; background:#e81616; color:#fff; font-size:14px; font-weight:800; box-shadow:inset 0 -2px 0 rgba(0,0,0,0.18); }
    #ssb-dialog-panel .ssb-dlg-foot { display:flex; flex-wrap:wrap; justify-content:center; gap:12px; margin-top:18px; }
    #ssb-dialog-panel .ssb-dlg-btn { min-width:120px; height:44px; margin:0; padding:0 20px; border:4px solid var(--b); border-radius:8.4px; background:var(--c); color:#fff; font-family:"Nunito",system-ui,sans-serif; font-size:18px; font-weight:800; cursor:pointer; text-shadow:rgba(0,0,0,0.3) 2px 2px 0; box-shadow:rgba(11,147,189,0.5) 3.4px 3.4px 0 0, var(--i1) -2.1px -3.2px 2.1px 0 inset, var(--i2) 0 3.2px 4.2px 0 inset; transition:filter 0.1s, transform 0.1s; }
    #ssb-dialog-panel .ssb-dlg-btn:hover { filter:brightness(1.08); }
    #ssb-dialog-panel .ssb-dlg-btn:active { transform:translateY(2px); }
    #ssb-dialog-panel .ssb-dlg-btn:focus-visible { outline:3px solid #fff; outline-offset:2px; }
    #ssb-dialog-panel .ssb-dlg-green { --c:#13ba65; --b:#046306; --i1:#0e8c4c; --i2:#87ddbb; }
    #ssb-dialog-panel .ssb-dlg-red { --c:#e81616; --b:#881a1a; --i1:#d11414; --i2:#e29092; }
    #ssb-dialog-panel .ssb-dlg-blue { --c:#0b93bd; --b:var(--ssb-ink); --i1:#086e8d; --i2:#00ade6; }
    #ssb-toast-stack { position:fixed; top:14px; left:0; right:0; z-index:2147483647; display:flex; flex-direction:column; align-items:center; gap:8px; pointer-events:none; font-family:"Nunito",system-ui,sans-serif; }
    #ssb-toast-stack * { font-size:inherit; letter-spacing:normal; }
    #ssb-toast-stack .ssb-toast { pointer-events:auto; cursor:pointer; max-width:min(540px,92vw); box-sizing:border-box; padding:10px 16px; border:3px solid var(--ssb-blue); border-radius:10px; background:var(--ssb-panel); color:var(--ssb-ink); font-size:15px; font-weight:800; line-height:1.3; text-align:center; white-space:pre-line; box-shadow:0 8px 22px rgba(0,0,0,0.3); animation:ssb-toast-in 0.16s ease; transition:opacity 0.2s; }
    #ssb-toast-stack .ssb-toast-success .ssb-toast-text::before { content:"\\2713"; display:inline-block; width:20px; height:20px; margin-right:8px; border-radius:50%; background:#13ba65; color:#fff; font-size:13px; line-height:20px; text-align:center; vertical-align:1px; }
    #ssb-toast-stack .ssb-toast-error { background:#ffe1e1; border-color:var(--ssb-red); color:#8a1414; }
    #ssb-toast-stack .ssb-toast-out { opacity:0; }
    @keyframes ssb-pop-in { from { opacity:0; transform:scale(0.96); } to { opacity:1; transform:none; } }
    @keyframes ssb-toast-in { from { opacity:0; transform:translateY(-8px); } to { opacity:1; transform:none; } }
    @media (prefers-reduced-motion: reduce) { #ssb-dialog-panel, #ssb-toast-stack .ssb-toast { animation:none; } }
  `;

  let toastStack = null;
  function toast(text, o = {}) {
    if (!document.body) return null;
    addStyle("ssm-ui-style", UI_CSS);
    if (!toastStack) {
      toastStack = el("div");
      toastStack.id = "ssb-toast-stack";
      toastStack.setAttribute("role", "status");
      toastStack.setAttribute("aria-live", "polite");
    }
    document.body.appendChild(toastStack);   // again, so it sits above a dialog opened since
    const t = el("div", "ssb-toast" + (o.type ? " ssb-toast-" + o.type : ""));
    t.appendChild(el("div", "ssb-toast-text", text));
    let gone = false;
    const close = () => {
      if (gone) return;
      gone = true;
      t.classList.add("ssb-toast-out");
      setTimeout(() => t.remove(), 220);
    };
    t.addEventListener("click", close);
    toastStack.appendChild(t);
    while (toastStack.children.length > 4) toastStack.firstElementChild.remove();
    setTimeout(close, o.ms || (o.type === "error" ? 6500 : 3200));
    return t;
  }

  // Swallows the next keyup of a key just used (within 1.5 s), so it doesn't reach the game: the game closes
  // Settings on an Esc keyup.
  function eatKeyUp(key) {
    const k = String(key).toLowerCase();
    const f = e => {
      if (String(e.key).toLowerCase() !== k) return;
      e.preventDefault();
      e.stopImmediatePropagation();
      done();
    };
    const done = () => {
      window.removeEventListener("keyup", f, true);
      clearTimeout(tm);
    };
    const tm = setTimeout(done, 1500);
    window.addEventListener("keyup", f, true);
  }

  let dialogOpen = null;
  function dialog(o) {
    return new Promise(resolve => {
      if (!document.body || document.pointerLockElement) {
        resolve(o.cancel);
        return;
      }
      if (dialogOpen) dialogOpen(dialogOpen.cancelValue);   // one at a time
      addStyle("ssm-ui-style", UI_CSS);
      applyScale();
      const prevFocus = document.activeElement;
      const ov = el("div");
      ov.id = "ssb-dialog-overlay";
      const panel = el("div");
      panel.id = "ssb-dialog-panel";
      panel.setAttribute("role", "dialog");
      panel.setAttribute("aria-modal", "true");
      panel.setAttribute("aria-label", o.title || "Stats Mod");
      panel.appendChild(el("h2", "ssb-dlg-title", o.title || "Stats Mod"));
      if (o.text) panel.appendChild(el("p", "ssb-dlg-text", o.text));
      let input = null, err = null;
      if (o.input) {
        input = el("input", "ssb-dlg-input");
        input.type = "text";
        input.setAttribute("aria-label", o.input.label || o.title || "Name");
        input.setAttribute("aria-describedby", "ssb-dialog-error");
        input.spellcheck = false;
        input.autocomplete = "off";
        input.value = o.input.value == null ? "" : String(o.input.value);
        if (o.input.maxLength) input.maxLength = o.input.maxLength;
        panel.appendChild(input);
        err = el("div", "ssb-dlg-err");
        err.id = "ssb-dialog-error";
        err.setAttribute("role", "alert");
        panel.appendChild(err);
        input.addEventListener("input", () => {
          err.textContent = "";
          input.removeAttribute("aria-invalid");
        });
      }
      const foot = el("div", "ssb-dlg-foot");
      let primary = null;
      for (const b of o.buttons || []) {
        const btn = el("button", "ssb-dlg-btn ssb-dlg-" + (b.kind || "blue"), b.label);
        btn.type = "button";
        btn.addEventListener("click", () => {
          sound("ui_click");
          press(b);
        });
        if (b.primary) primary = btn;
        foot.appendChild(btn);
      }
      panel.appendChild(foot);
      ov.appendChild(panel);

      let done = false;
      function finish(v) {
        if (done) return;
        done = true;
        window.removeEventListener("keydown", onKey, true);
        window.removeEventListener("keyup", swallow, true);
        window.removeEventListener("keypress", swallow, true);
        ov.remove();
        if (dialogOpen === finish) dialogOpen = null;
        try {
          if (prevFocus && prevFocus.isConnected && prevFocus.focus) prevFocus.focus({ preventScroll: true });
        } catch (e) { /* nothing to go back to */ }
        resolve(v);
      }
      finish.cancelValue = o.cancel;
      dialogOpen = finish;
      function press(b) {
        if (b.input) {
          const v = input.value, msg = o.input.validate ? o.input.validate(v) : "";
          if (msg) {
            err.textContent = msg;
            input.setAttribute("aria-invalid", "true");
            input.focus();
            return;
          }
          finish(v);
          return;
        }
        finish(b.value);
      }
      function swallow(e) { e.stopPropagation(); }
      function onKey(e) {
        e.stopPropagation();
        if (e.key === "Escape") {
          e.preventDefault();
          eatKeyUp("Escape");
          finish(o.cancel);
        } else if (e.key === "Enter" && !e.isComposing) {
          e.preventDefault();
          eatKeyUp("Enter");
          const f = document.activeElement;
          if (f && f.tagName === "BUTTON" && panel.contains(f)) f.click();
          else if (primary) primary.click();
        } else if (e.key === "Tab") {
          e.preventDefault();
          const list = [...panel.querySelectorAll("input:not(:disabled), button:not(:disabled)")];
          const i = list.indexOf(document.activeElement);
          const next = list[i < 0 ? (e.shiftKey ? list.length - 1 : 0) : (i + (e.shiftKey ? -1 : 1) + list.length) % list.length];
          if (next) next.focus();
        }
      }
      window.addEventListener("keydown", onKey, true);
      window.addEventListener("keyup", swallow, true);
      window.addEventListener("keypress", swallow, true);
      let downOnBackdrop = false;
      ov.addEventListener("mousedown", e => { downOnBackdrop = e.target === ov; });
      ov.addEventListener("click", e => { if (e.target === ov && downOnBackdrop) finish(o.cancel); });
      document.body.appendChild(ov);
      sound("ui_popupopen");
      if (input) {
        input.focus();
        input.select();
      } else if (primary) primary.focus();
    });
  }
  const confirmBox = o => dialog({
    title: o.title, text: o.text, cancel: false,
    buttons: [{ label: "Cancel", kind: "blue", value: false }, { label: o.ok || "OK", kind: o.danger ? "red" : "green", value: true, primary: true }],
  });
  const promptBox = o => dialog({
    title: o.title, text: o.text, cancel: null,
    input: { value: o.value, maxLength: o.maxLength },
    buttons: [{ label: "Cancel", kind: "blue", value: null }, { label: o.ok || "OK", kind: "green", input: true, primary: true }],
  });

  /* ---- The stats window: the live match, Match History, and a saved match ---- */
  const fmtSecs = s => {
    if (!s || s < 1) return "0s";
    const m = Math.floor(s / 60), r = s % 60;
    return m ? `${m}m ${r}s` : `${r}s`;
  };
  const regionName = r => r ? REGIONS[String(r).toLowerCase().trim()] || r : "-";
  const kdr = (k, d) => ((+k || 0) / Math.max(1, +d || 0)).toFixed(2);
  const modeName = m => MODES[m] || m || "";
  // "Oct 8 · 13:57" (with the year when it isn't this year), or just the time.
  function when(ms, timeOnly) {
    if (!ms) return "-";
    const s = new Date(ms), p = n => String(n).padStart(2, "0"), t = p(s.getHours()) + ":" + p(s.getMinutes());
    if (timeOnly) return t;
    return ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][s.getMonth()] + " " + s.getDate() +
      (s.getFullYear() !== new Date().getFullYear() ? ", " + s.getFullYear() : "") + " · " + t;
  }
  const dateStr = ms => {
    const s = new Date(ms), p = n => String(n).padStart(2, "0");
    return s.getFullYear() + "-" + p(s.getMonth() + 1) + "-" + p(s.getDate());
  };
  const matchLen = h => h && h.startMs && h.endMs ? fmtSecs(Math.floor((h.endMs - h.startMs) / 1000)) : "";
  const liveMe = () => (st.snapshot || []).find(p => p && p.isMe) || { kills: 0, deaths: 0 };
  const liveDur = () => fmtSecs(Math.floor(((st.matchEndMs || Date.now()) - st.matchStartMs) / 1000));
  // In a game right now (playing or paused): the game has players and the match hasn't been left.
  function isLive() {
    const p = window.players;
    return !!st.matchStartMs && !st._readyForReset && inGame() && !!(p && p.some && p.some(x => x));
  }

  // One team's card: its name, player count (and the King of the Coop score), then # / Player / K / D / KDR.
  function teamCard(title, cls, players, mode, team, kotc) {
    const rows = players.map((p, i) =>
      `<tr${p.isMe ? ' class="ssb-me"' : ""}><td class="ssb-rank">${i + 1}</td><td class="ssb-name">${esc(p.name || "Player")}</td><td>${+p.kills || 0}</td><td>${+p.deaths || 0}</td><td>${kdr(p.kills, p.deaths)}</td></tr>`
    ).join("") || `<tr><td class="ssb-none" colspan="5">No players</td></tr>`;
    const score = mode === "king" && (team === 1 || team === 2) ? `<span class="ssb-team-score">Score ${+(kotc && kotc[team]) || 0}</span>` : "";
    return `<section class="ssb-team ${cls}"><div class="ssb-team-hdr"><span class="ssb-team-name">${title}</span><span class="ssb-team-info">${players.length} ${players.length === 1 ? "player" : "players"}</span>${score}</div><table><colgroup><col class="ssb-c-rank"><col><col class="ssb-c-n"><col class="ssb-c-n"><col class="ssb-c-kdr"></colgroup><thead><tr><th>#</th><th>Player</th><th>K</th><th>D</th><th>KDR</th></tr></thead><tbody>${rows}</tbody></table></section>`;
  }
  // Blue and Red side by side when either team has players, anyone without a team in a full-width card below.
  // Sorted by kills, then fewer deaths.
  function teamsHtml(list, mode, empty, kotc) {
    const t = { 1: [], 2: [], 0: [] };
    for (const p of list || []) if (p && typeof p === "object") t[p.team === 1 || p.team === 2 ? p.team : 0].push(p);
    for (const a of Object.values(t)) a.sort((x, y) => (+y.kills || 0) - (+x.kills || 0) || (+x.deaths || 0) - (+y.deaths || 0));
    const teams = t[1].length || t[2].length;
    let out = teams ? teamCard("Blue Team", "ssb-team-blue", t[1], mode, 1, kotc) + teamCard("Red Team", "ssb-team-red", t[2], mode, 2, kotc) : "";
    if (t[0].length) out += teamCard(teams ? "Other Players" : "Players", "ssb-team-ffa", t[0], mode, 0, kotc);
    return out ? `<div class="ssb-cols">${out}</div>` : `<div class="ssb-empty">${empty}</div>`;
  }
  const ICONS = {
    back: '<path d="M19 12H5M12 19l-7-7 7-7"/>',
    copy: '<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
    reset: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>',
    close: '<path d="M18 6L6 18M6 6l12 12"/>',
    clearhist: '<path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
  };
  const iconBtn = (act, label, cls) =>
    `<button type="button" class="ssb-btn ssb-ico${cls ? " " + cls : ""}" data-act="${act}" data-tooltip="${label}" aria-label="${label}"><svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[act === "backhist" ? "back" : act]}</svg></button>`;
  const chipsHtml = (strong, rest) =>
    strong.filter(Boolean).map(c => `<span class="ssb-chip ssb-chip-strong">${c}</span>`).join("") +
    rest.filter(Boolean).map(c => `<span class="ssb-chip">${c}</span>`).join("");
  // The frame: chips, then the icon buttons (.ssb-noimg: left out of the pictures), then the body.
  const shell = (name, tools, body, chips) =>
    `<div id="ssb-stats-panel" class="ssb-v-${name}"><div class="ssb-head"><div class="ssb-chips">${chips || ""}</div><div class="ssb-actions ssb-noimg">${tools}</div></div><div class="ssb-body">${body}</div></div>`;

  const view = { filter: { mode: "", map: "" }, top: 0, key: null, retFocus: null, tick: 0, busy: false };

  function wire(ov, name, label, focus) {
    showOverlay(ov, label, focus);
    const on = (sel, fn) => {
      const b = ov.querySelector(sel);
      if (b) b.onclick = fn;
    };
    on('[data-act="close"]', () => {
      sound("ui_toggletab");
      closeOverlay();
    });
    on('[data-act="backhist"]', () => {
      const k = view.key;
      sound("ui_toggletab");
      openHistory(name === "live" ? ".ssb-hr-live" : k ? rowSel(k[0], k[1]) : null, view.top);
    });
    on('[data-act="copy"]', copyImage);
    on('[data-act="download"]', downloadImage);
  }
  const rowSel = (code, start) => '.ssb-hist-row[data-code="' + CSS.escape(code) + '"][data-start="' + CSS.escape(start) + '"]';

  // Once a second while the window is open: the match time, and the live row's K / D.
  function startViewTick() {
    clearInterval(view.tick);
    view.tick = setInterval(() => {
      if (document.hidden) return;
      const ov = document.getElementById("ssb-stats-overlay");
      if (!ov || !ov.classList.contains("open")) {
        stopViewTick();
        return;
      }
      if (!st.matchStartMs) return;
      for (const t of ov.querySelectorAll(".ssb-dur")) t.textContent = liveDur();
      const kd = ov.querySelector(".ssb-live-kd");
      if (kd && kd.children.length > 1) {
        const m = liveMe(), k = +m.kills || 0, d = +m.deaths || 0;
        kd.children[0].textContent = k + " / " + d;
        kd.children[1].textContent = "KDR " + kdr(k, d);
      }
    }, 1000);
  }
  function stopViewTick() {
    clearInterval(view.tick);
    view.tick = 0;
  }

  // The overlay is made once. A click outside an open dropdown only closes the dropdown; a click on the backdrop
  // (that also started there) or Esc closes the window.
  function overlay() {
    addStyle("ssm-ui-style", UI_CSS);
    addStyle("ssm-stats-style", STATS_CSS);
    addStyle("ssm-scale-style", SCALE_CSS);
    applyScale();
    let ov = document.getElementById("ssb-stats-overlay");
    if (ov) return ov;
    ov = el("div");
    ov.id = "ssb-stats-overlay";
    let eat = false, downOnBackdrop = false;
    ov.addEventListener("pointerdown", e => {
      downOnBackdrop = e.target === ov;
      const dd = ov.querySelector(".ssb-dd.ssb-open");
      eat = !!dd && !dd.contains(e.target);
      if (eat) ddClose(dd, true);
    }, true);
    ov.addEventListener("pointerup", () => { if (eat) setTimeout(() => { eat = false; }, 0); }, true);
    ov.addEventListener("click", e => {
      if (eat) {
        eat = false;
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      if (e.target === ov && downOnBackdrop) {
        sound("ui_toggletab");
        closeOverlay();
      }
    }, true);
    ov.addEventListener("keydown", e => {
      if (e.key !== "Escape") return;
      e.preventDefault();
      e.stopPropagation();
      eatKeyUp("Escape");
      const dd = ov.querySelector(".ssb-dd.ssb-open");
      if (dd) ddClose(dd, true, true);
      else {
        sound("ui_toggletab");
        closeOverlay();
      }
    });
    document.body.appendChild(ov);
    return ov;
  }

  // The window is a modal dialog: focus moves into it (not while playing: the game keeps the keyboard), Esc closes
  // it, and focus goes back to where it was.
  function showOverlay(ov, label, focus) {
    const fresh = !ov.classList.contains("open");
    if (fresh) view.retFocus = document.activeElement;
    ov.classList.add("open");
    const p = ov.querySelector("#ssb-stats-panel");
    if (!p) return;
    p.setAttribute("role", "dialog");
    p.setAttribute("aria-modal", "true");
    p.setAttribute("aria-label", label);
    p.tabIndex = -1;
    if (fresh) {
      p.classList.add("ssb-in");
      setTimeout(() => p.classList.remove("ssb-in"), 260);
    }
    if (document.pointerLockElement) return;
    const f = focus && ov.querySelector(focus);
    if (f) f.focus({ preventScroll: true });
    else if (!p.contains(document.activeElement)) p.focus({ preventScroll: true });
  }
  function closeOverlay() {
    const ov = document.getElementById("ssb-stats-overlay"), wasOpen = !!ov && ov.classList.contains("open");
    if (ov) ov.classList.remove("open");
    stopViewTick();
    tipHide();
    const rf = view.retFocus;
    view.retFocus = null;
    if (wasOpen && rf && rf !== document.body && rf.isConnected && rf.focus && !document.pointerLockElement) rf.focus({ preventScroll: true });
  }
  const isOpen = () => !!document.getElementById("ssb-stats-overlay")?.classList.contains("open");
  // Esc closes the window even when the keyboard isn't in it (it was opened while playing, say). With the keyboard
  // in it, the window's own handler does this.
  function onEscape(e) {
    if (e.key !== "Escape" || dialogOpen || document.pointerLockElement || !isOpen()) return;
    const ov = document.getElementById("ssb-stats-overlay");
    if (ov.contains(e.target)) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    eatKeyUp("Escape");
    const dd = ov.querySelector(".ssb-dd.ssb-open");
    if (dd) ddClose(dd, true, true);
    else {
      sound("ui_toggletab");
      closeOverlay();
    }
  }

  // The live match: from the key in a game, or from its row in Match History.
  function openLive(focus) {
    const ov = overlay();
    track();
    if (!ov.classList.contains("open")) view.top = 0;
    const mode = st.mode || modeNow(), on = !!st.matchStartMs;
    const chips = chipsHtml(
      [esc(st.gameCode || "Live Match"), on && when(st.matchStartMs, true), on && dateStr(st.matchStartMs)],
      [esc(st.map || ""), st.server && esc(regionName(st.server)), esc(modeName(mode)), on && `<span class="ssb-dur">${liveDur()}</span>`]);
    ov.innerHTML = shell("live",
      iconBtn("backhist", "Match History") + iconBtn("copy", "Copy Image") + iconBtn("download", "Download") +
      iconBtn("reset", "Reset Live Stats", "ssb-danger") + iconBtn("close", "Close", "ssb-danger"),
      teamsHtml(st.snapshot, mode, "No player data yet. Join a match and the scoreboard shows up here.", st.kotcScore), chips);
    wire(ov, "live", "Live match", focus);
    ov.querySelector('[data-act="reset"]').onclick = resetLive;
    startViewTick();
  }

  // The mode / map filters: a dropdown that works like the game's Game Mode list. Arrows / Home / End move, Enter
  // or Space picks, Esc or Tab closes.
  function ddHtml(key, allText, cur, values, label) {
    const text = v => v ? esc(label ? label(v) : v) : allText, name = key === "mode" ? "Mode" : "Map";
    return `<div class="ssb-dd" data-dd="${key}"><button type="button" class="ssb-dd-btn" aria-haspopup="listbox" aria-expanded="false" aria-label="${name}: ${text(cur)}"><span class="ssb-dd-val">${text(cur)}</span><svg class="ssb-dd-car" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></button><div class="ssb-dd-list" role="listbox" aria-label="${name}">${["", ...values].map(v => `<div class="ssb-dd-opt" role="option" tabindex="-1" data-v="${esc(v)}" aria-selected="${v === cur}">${text(v)}</div>`).join("")}</div></div>`;
  }
  function ddOpen(dd) {
    const b = dd.querySelector(".ssb-dd-btn"), list = dd.querySelector(".ssb-dd-list");
    const cur = dd.querySelector('.ssb-dd-opt[aria-selected="true"]') || dd.querySelector(".ssb-dd-opt");
    dd.classList.add("ssb-open");
    if (b) b.setAttribute("aria-expanded", "true");
    sound("ui_toggletab");
    if (cur) {
      if (list) list.scrollTop = Math.max(0, cur.offsetTop - (list.clientHeight - cur.offsetHeight) / 2);
      cur.focus({ preventScroll: true });
    }
  }
  function ddClose(dd, withSound, focusBtn) {
    if (!dd || !dd.classList.contains("ssb-open")) return;
    dd.classList.remove("ssb-open");
    const b = dd.querySelector(".ssb-dd-btn");
    if (b) {
      b.setAttribute("aria-expanded", "false");
      if (focusBtn) b.focus({ preventScroll: true });
    }
    if (withSound) sound("ui_toggletab");
  }
  function ddWire(root, onPick) {
    for (const dd of root.querySelectorAll(".ssb-dd")) {
      const b = dd.querySelector(".ssb-dd-btn"), opts = () => [...dd.querySelectorAll(".ssb-dd-opt")];
      const pick = o => {
        const v = o.getAttribute("data-v") || "", same = o.getAttribute("aria-selected") === "true";
        sound("ui_onchange");
        ddClose(dd, true, same);
        if (!same) onPick(dd.getAttribute("data-dd"), v);
      };
      b.onclick = e => {
        e.preventDefault();
        if (dd.classList.contains("ssb-open")) {
          ddClose(dd, true);
          return;
        }
        for (const o of root.querySelectorAll(".ssb-dd.ssb-open")) ddClose(o, false);
        ddOpen(dd);
      };
      dd.querySelector(".ssb-dd-list").onclick = e => {
        const o = e.target.closest(".ssb-dd-opt");
        if (o) pick(o);
      };
      dd.onkeydown = e => {
        const list = opts(), i = list.indexOf(document.activeElement);
        const go = n => { const o = list[Math.max(0, Math.min(list.length - 1, n))]; if (o) o.focus(); };
        if (!dd.classList.contains("ssb-open")) {
          if (e.target === b && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
            e.preventDefault();
            ddOpen(dd);
          }
          return;
        }
        if (e.key === "Escape") {
          e.preventDefault();
          e.stopPropagation();
          eatKeyUp("Escape");
          ddClose(dd, true, true);
        } else if (e.key === "Tab") ddClose(dd, true);
        else if (e.key === "ArrowDown") {
          e.preventDefault();
          go(i + 1);
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          go(i < 0 ? list.length - 1 : i - 1);
        } else if (e.key === "Home") {
          e.preventDefault();
          go(0);
        } else if (e.key === "End") {
          e.preventDefault();
          go(list.length - 1);
        } else if ((e.key === "Enter" || e.key === " ") && i >= 0) {
          e.preventDefault();
          pick(list[i]);
        }
      };
    }
  }

  async function resetLive() {
    if (!(await confirmBox({ title: "Reset Stats", text: "Reset the tracked kills / deaths / KDR for this match?", ok: "Reset", danger: true }))) return;
    const pl = window.players || [];
    st.byName = {};
    st._snapMap = {};
    st.snapshot = [];
    for (let i = 0; i < pl.length; i++) {
      const c = pl[i];
      if (!c || !c.stats) continue;
      const m = nameOf(c, i), key = st.byName[m] ? m + String.fromCharCode(0) + i : m;
      st.byName[key] = { name: m, team: c.team || 0, isMe: false, kills: 0, deaths: 0, _lastK: 0 | c.stats.kills, _lastD: 0 | c.stats.deaths, _lastTK: 0 | c.totalKills, _slot: i };
    }
    st._meRec = null;
    st.matchStartMs = Date.now();
    st.matchEndMs = 0;
    st.kotcScore = { 1: 0, 2: 0 };
    sound("ui_click");
    if (isOpen()) openLive();
    else track();
  }

  // Match History: the saved matches, with the match being played as the first row.
  function openHistory(focus, top) {
    const ov = overlay();
    const all = hist().filter(h => h && typeof h === "object"), flt = view.filter;
    const live = isLive(), lCode = st.gameCode || st._synth || "", lMode = st.mode || modeNow() || "", lMap = st.map || "";
    // The saved entry of the match being played: the live row stands in for it.
    const isCur = h => live && h.code === lCode && Math.abs((h.startMs || 0) - st.matchStartMs) < 15e3;
    const cur = all.find(isCur);
    if (flt.mode && !all.some(h => h.mode === flt.mode) && !(live && lMode === flt.mode)) flt.mode = "";
    if (flt.map && !all.some(h => h.map === flt.map) && !(live && lMap === flt.map)) flt.map = "";
    const fits = (mo, ma) => (!flt.mode || mo === flt.mode) && (!flt.map || ma === flt.map);
    const shown = all.filter(h => fits(h.mode, h.map)), showLive = live && fits(lMode, lMap);
    const me = h => (h.players || []).find(p => p && p.isMe) || { kills: 0, deaths: 0 };
    // Rows are known by code + start time: the same code can be in several saved matches.
    const keyOf = h => `data-code="${esc(h.code || "")}" data-start="${esc(String(h.startMs || ""))}"`;
    let sk = 0, sd = 0;
    for (const h of shown) {
      const m = me(h);
      sk += +m.kills || 0;
      sd += +m.deaths || 0;
    }
    const part = shown.length !== all.length, games = n => n + " " + (n === 1 ? "game" : "games");
    const chips = `<span class="ssb-head-name">Match History</span>` + (all.length
      ? chipsHtml([], [part ? shown.length + " of " + all.length + " games" : games(all.length) + " &middot; last " + HISTORY_MAX + " kept", sk + " / " + sd]) +
        `<span class="ssb-chip ssb-chip-strong">KDR ${kdr(sk, sd)}</span>`
      : "");
    const modes = [...new Set([...all.map(h => h.mode), live && lMode].filter(Boolean).map(String))];
    const maps = [...new Set([...all.map(h => h.map), live && lMap].filter(Boolean).map(String))].sort();
    const lm = liveMe(), lk = +lm.kills || 0, ld = +lm.deaths || 0;
    const liveRow = showLive
      ? `<div class="ssb-hist-row ssb-hr-live" tabindex="0" role="button" data-live="1" aria-label="${esc("Current match, " + (lMap || "unknown map") + ", playing now")}"><div class="ssb-hr-main"><div class="ssb-hr-name">${esc((cur && cur.label) || st.gameCode || "Current match")}</div><div class="ssb-hr-sub">${[cur && cur.label && st.gameCode, lMap, modeName(lMode), st.server && regionName(st.server)].filter(Boolean).map(esc).join(" &middot; ") || "&nbsp;"}</div></div><div class="ssb-hr-when"><div class="ssb-hr-info"><div class="ssb-hr-strong">Playing now</div><div class="ssb-hr-sub ssb-dur">${liveDur()}</div></div></div><div class="ssb-hr-kd ssb-live-kd"><div class="ssb-hr-strong">${lk} / ${ld}</div><div class="ssb-hr-sub">KDR ${kdr(lk, ld)}</div></div></div>`
      : "";
    const rows = liveRow + shown.filter(h => !isCur(h)).map(h => {
      const m = me(h), k = +m.kills || 0, d = +m.deaths || 0, len = matchLen(h), name = h.label || h.code || "-";
      const meta = [h.label && h.code, h.map, modeName(h.mode), h.server && regionName(h.server)].filter(Boolean).map(esc).join(" &middot; ");
      return `<div class="ssb-hist-row" tabindex="0" role="button" ${keyOf(h)} aria-label="${esc(name + ", " + (h.map || "unknown map") + ", " + k + " kills, " + d + " deaths")}"><div class="ssb-hr-main"><div class="ssb-hr-name">${esc(name)}</div><div class="ssb-hr-sub">${meta || "&nbsp;"}</div></div><div class="ssb-hr-when"><div class="ssb-hr-info"><div class="ssb-hr-strong">${esc(when(h.startMs))}</div><div class="ssb-hr-sub">${len || "&nbsp;"}</div></div><div class="ssb-hr-acts"><button type="button" class="ssb-hist-abtn ssb-link" data-hact="rename" ${keyOf(h)}>Rename</button><button type="button" class="ssb-hist-abtn ssb-link ssb-danger" data-hact="del" ${keyOf(h)}>Delete</button></div></div><div class="ssb-hr-kd"><div class="ssb-hr-strong">${k} / ${d}</div><div class="ssb-hr-sub">KDR ${kdr(k, d)}</div></div></div>`;
    }).join("") || `<div class="ssb-empty">${all.length ? "No saved matches fit these filters." : "No games recorded yet. Finish a match and it shows up here."}</div>`;
    const body = (all.length
      ? `<div class="ssb-filters">${ddHtml("mode", "All modes", flt.mode, modes, modeName)}${ddHtml("map", "All maps", flt.map, maps)}<span class="ssb-fx"><button type="button" class="ssb-btn ssb-sm" data-act="exjson" data-tooltip="Download the matches shown as JSON">JSON</button><button type="button" class="ssb-btn ssb-sm" data-act="excsv" data-tooltip="Download the matches shown as a spreadsheet (CSV)">CSV</button></span></div>`
      : "") + (all.length || showLive ? `<div class="ssb-colhd" aria-hidden="true"><span>Match</span><span>Played</span><span>K / D</span></div>` : "") +
      `<div class="ssb-hist-list">${rows}</div>`;
    ov.innerHTML = shell("hist", (all.length ? iconBtn("clearhist", "Clear History", "ssb-danger") : "") + iconBtn("close", "Close", "ssb-danger"), body, chips);
    const list = ov.querySelector(".ssb-hist-list"), keep = () => list && list.isConnected ? list.scrollTop : 0;
    const on = (sel, fn) => {
      const b = ov.querySelector(sel);
      if (b) b.onclick = fn;
    };
    if (top && list) list.scrollTop = top;
    wire(ov, "hist", "Match history", focus);
    on('[data-act="clearhist"]', async () => {
      if (await confirmBox({ title: "Clear History", text: "Delete every match in your saved history?", ok: "Clear", danger: true })) {
        histSet([]);
        openHistory();
      }
    });
    on('[data-act="exjson"]', () => exportHistory(shown, "json"));
    on('[data-act="excsv"]', () => exportHistory(shown, "csv"));
    ddWire(ov, (key, v) => {
      flt[key] = v;
      openHistory('[data-dd="' + key + '"] .ssb-dd-btn');
    });
    const same = node => x => x && x.code === (node.getAttribute("data-code") || "") && String(x.startMs || "") === (node.getAttribute("data-start") || "");
    const open = row => {
      if (row.hasAttribute("data-live")) {
        view.top = keep();
        sound("ui_toggletab");
        openLive('[data-act="backhist"]');
        return;
      }
      const h = shown.find(same(row));
      if (!h) return;
      view.top = keep();
      view.key = [row.getAttribute("data-code") || "", row.getAttribute("data-start") || ""];
      sound("ui_toggletab");
      openMatch(h);
    };
    for (const row of ov.querySelectorAll(".ssb-hist-row")) {
      row.onclick = () => open(row);
      row.onkeydown = e => {
        if (e.target === row && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          open(row);
        }
      };
    }
    for (const b of ov.querySelectorAll(".ssb-hist-abtn")) {
      b.onclick = async e => {
        e.stopPropagation();
        const act = b.getAttribute("data-hact"), x = hist().find(same(b));
        if (!x) return;
        if (act === "del") {
          if (!(await confirmBox({ title: "Delete Match", text: "Delete this match from your history?", ok: "Delete", danger: true }))) return;
          const t = keep(), H = hist(), i = H.findIndex(same(b));
          if (i >= 0) {
            H.splice(i, 1);
            histSet(H);
          }
          openHistory(null, t);
        } else if (act === "rename") {
          let name = await promptBox({ title: "Rename Match", text: "Leave it blank to show the match code again.", value: x.label || x.code || "", ok: "Save", maxLength: 60 });
          if (name == null) return;
          const t = keep(), H = hist(), i = H.findIndex(same(b));
          if (i >= 0) {
            name = name.trim();
            if (name) H[i].label = name;
            else delete H[i].label;
            histSet(H);
          }
          openHistory(rowSel(b.getAttribute("data-code") || "", b.getAttribute("data-start") || ""), t);
        }
      };
    }
    if (showLive) startViewTick();
  }

  // The matches shown (after the filters) as JSON or CSV. CSV cells that start with = + - @ get an apostrophe in
  // front, so a spreadsheet can't run a player's name as a formula.
  function exportHistory(list, kind) {
    try {
      let blob;
      if (kind === "json") blob = new Blob([JSON.stringify(list, null, 2)], { type: "application/json" });
      else {
        const q = v => {
          v = v == null ? "" : String(v);
          if (/^[=+\-@\t\r]/.test(v)) v = "'" + v;
          return /[",\n\r]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v;
        };
        const lines = [["Name", "Code", "Start", "Duration (s)", "Map", "Mode", "Server", "Kills", "Deaths", "KDR", "Players"].join(",")];
        for (const h of list) {
          const m = (h.players || []).find(p => p && p.isMe) || { kills: 0, deaths: 0 }, k = m.kills || 0, d = m.deaths || 0;
          lines.push([h.label || "", h.code || "", h.startMs ? new Date(h.startMs).toISOString() : "",
            h.startMs && h.endMs ? Math.round((h.endMs - h.startMs) / 1000) : "", h.map || "", MODES[h.mode] || h.mode || "",
            regionName(h.server), k, d, kdr(k, d), (h.players || []).length].map(q).join(","));
        }
        blob = new Blob(["﻿" + lines.join("\r\n")], { type: "text/csv" });
      }
      saveFile(blob, "shellshockers-match-history-" + dateStr(Date.now()) + (kind === "json" ? ".json" : ".csv"));
      sound("ui_click");
    } catch (e) {
      toast("Couldn't export the history: " + e.message, { type: "error" });
    }
  }
  function saveFile(blob, name) {
    const a = el("a");
    a.href = URL.createObjectURL(blob);
    a.download = name;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }

  function openMatch(h) {
    if (!h) return;
    const ov = overlay(), mode = h.mode || "ffa";
    const chips = chipsHtml(
      [esc(h.label || h.code || "Match"), h.label && h.code && esc(h.code), h.startMs && when(h.startMs, true), h.startMs && dateStr(h.startMs)],
      [esc(h.map || ""), h.server && esc(regionName(h.server)), esc(modeName(mode)), esc(matchLen(h))]);
    ov.innerHTML = shell("match",
      iconBtn("backhist", "Match History") + iconBtn("copy", "Copy Image") + iconBtn("download", "Download") + iconBtn("close", "Close", "ssb-danger"),
      teamsHtml(h.players, mode, "No player data was saved for this match.", h.kotc || { 1: 0, 2: 0 }), chips);
    wire(ov, "match", "Match details", '[data-act="backhist"]');
  }

  /* ---- Pictures: Copy Image and Download ----
     html-to-image (the script's @require) draws a copy of the window off screen at its designed size, without its
     buttons and with the whole scoreboard, twice as sharp. Nunito and Sigmar One go in as data: URLs, since the
     picture can't load fonts by itself. */
  let fontCssP = null;
  function fontCss() {
    return fontCssP || (fontCssP = fetch("https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800;900&family=Sigmar+One&display=swap")
      .then(r => {
        if (!r.ok) throw new Error("fonts: HTTP " + r.status);
        return r.text();
      })
      .then(css => {
        const urls = [...new Set([...css.matchAll(/url\((https:[^)]+)\)/g)].map(m => m[1]))];
        return Promise.all(urls.map(u => fetch(u).then(r => r.blob()).then(b => new Promise((res, rej) => {
          const fr = new FileReader();
          fr.onload = () => res([u, fr.result]);
          fr.onerror = () => rej(fr.error);
          fr.readAsDataURL(b);
        })))).then(pairs => {
          for (const [u, d] of pairs) css = css.split(u).join(d);
          return css;
        });
      })
      .catch(err => {
        warn("Fonts for the picture (it uses a stand-in font)", err);
        fontCssP = null;
        return "";
      }));
  }
  // eslint-disable-next-line no-undef
  const imageLib = () => (typeof htmlToImage !== "undefined" ? htmlToImage : window.htmlToImage) || null;
  function picture() {
    const panel = document.getElementById("ssb-stats-panel"), lib = imageLib();
    if (!panel) return Promise.reject(new Error("the window is closed"));
    if (!lib || typeof lib.toBlob !== "function") return Promise.reject(new Error("the picture tool didn't load"));
    return fontCss().then(fc => {
      const host = el("div"), c = panel.cloneNode(true);
      host.setAttribute("aria-hidden", "true");
      host.style.cssText = "position:fixed;left:-100000px;top:0;pointer-events:none;";
      for (const a of ["role", "aria-modal", "aria-label", "tabindex"]) c.removeAttribute(a);
      c.classList.remove("ssb-in");
      c.classList.add("ssb-shot");
      c.style.setProperty("zoom", "1", "important");
      c.style.setProperty("max-height", "none", "important");
      c.style.setProperty("overflow", "visible", "important");
      host.appendChild(c);
      document.body.appendChild(host);
      return lib.toBlob(c, { backgroundColor: null, pixelRatio: 2, width: c.scrollWidth, height: c.scrollHeight, ...(fc ? { fontEmbedCSS: fc } : {}) })
        .finally(() => host.remove());
    }).then(blob => {
      if (!blob) throw new Error("no picture came out");
      return blob;
    });
  }
  const missingLib = () => !imageLib() && (toast("The picture tool didn't load. Reinstall the Stats Mod, then try again.", { type: "error" }), true);
  function copyImage() {
    if (view.busy || missingLib()) return;
    if (!navigator.clipboard || !navigator.clipboard.write || typeof window.ClipboardItem !== "function") {
      toast("This browser can't copy pictures. Use Download instead.", { type: "error" });
      return;
    }
    view.busy = true;
    // The picture goes to the clipboard as a promise made in the click, which keeps the click's permission while
    // it's drawn.
    const png = picture();
    png.catch(() => { /* reported below */ });
    let write;
    try { write = navigator.clipboard.write([new window.ClipboardItem({ "image/png": png })]); } catch (e) { write = Promise.reject(e); }
    write.then(() => {
      sound("ui_click");
      toast("Picture copied to clipboard.", { type: "success" });
    }, err => {
      warn("Copying the picture", err);
      toast("Couldn't copy the picture. Use Download instead.", { type: "error" });
    }).finally(() => { view.busy = false; });
  }
  function downloadImage() {
    if (view.busy || missingLib()) return;
    view.busy = true;
    picture().then(blob => {
      saveFile(blob, "shellshockers-stats-" + Date.now() + ".png");
      sound("ui_click");
    }, err => {
      warn("Making the picture", err);
      toast("Couldn't make the picture: " + ((err && err.message) || err), { type: "error" });
    }).finally(() => { view.busy = false; });
  }

  const STATS_CSS = `
    #ssb-stats-overlay { position:fixed; inset:0; z-index:2147483646; display:none; align-items:center; justify-content:center; padding:12px; box-sizing:border-box; background:rgba(7,39,52,0.55); font-family:"Nunito",system-ui,sans-serif; }
    #ssb-stats-overlay.open { display:flex; }
    #ssb-stats-panel {
      --st-ink:#0C576F; --st-sub:rgba(12,87,111,0.74); --st-glass:rgba(255,255,255,0.26); --st-glass-hi:rgba(255,255,255,0.44); --st-edge:rgba(255,255,255,0.55);
      --st-line:rgba(12,87,111,0.12); --st-field:rgba(255,255,255,0.8); --st-orange:linear-gradient(180deg,#ffb23f,#ff961d); --st-orange-edge:#cf700c; --st-red:#c42020;
      --st-lift:0 10px 26px rgba(8,62,84,0.16); --st-grid:minmax(0,1fr) 150px 100px;
      position:relative; box-sizing:border-box; display:flex; flex-direction:column; width:720px; max-height:min(640px, calc(76vh / var(--ssm-ui-scale, 1))); margin:0; padding:18px 22px 22px;
      border:3px solid #0C576F; border-radius:12px; background:linear-gradient(#1192bc 0%, #3ea2c7 20%, #5bb2d2 42%, #75c3de 70%, #8dd3ea 100%);
      color:var(--st-ink); box-shadow:0 18px 50px rgba(0,0,0,0.4); font-family:"Nunito",system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;
      font-size:14px; font-weight:700; line-height:1.3; text-align:left; letter-spacing:normal; word-spacing:normal; font-variant-ligatures:none;
    }
    /* The game gives every element font-size:1.95vh; inside the window only these sizes count. */
    #ssb-stats-panel * { box-sizing:border-box; font-size:inherit; letter-spacing:normal !important; word-spacing:normal !important; }
    #ssb-stats-panel:focus { outline:none; }
    #ssb-stats-panel :is(button, [tabindex="0"]):focus-visible { outline:3px solid var(--ssb-focus, #0C576F); outline-offset:2px; }
    #ssb-stats-panel :is(.ssb-btn, .ssb-link, .ssb-dd-btn) { margin:0; font-family:inherit; line-height:1.2; text-transform:none; text-shadow:none; cursor:pointer; }
    #ssb-stats-panel.ssb-in { animation:ssb-st-in 0.2s ease-out both; }
    @keyframes ssb-st-in { from { opacity:0; transform:translateY(8px) scale(0.985); } to { opacity:1; transform:none; } }

    /* Header and buttons */
    #ssb-stats-panel .ssb-actions { display:flex; flex-wrap:wrap; gap:8px; margin-left:auto; }
    #ssb-stats-panel .ssb-head { flex:none; display:flex; align-items:center; gap:10px 16px; margin:0 0 14px; padding:0 0 14px; border-bottom:1px solid var(--st-edge); }
    #ssb-stats-panel .ssb-head .ssb-actions { flex:none; flex-wrap:nowrap; gap:6px; }
    #ssb-stats-panel .ssb-chips { flex:1 1 auto; min-width:0; display:flex; flex-wrap:wrap; align-items:center; gap:5px; }
    #ssb-stats-panel .ssb-chip { display:inline-flex; align-items:center; height:28px; padding:0 10px; border:1px solid var(--st-edge); border-radius:999px; background:rgba(255,255,255,0.28); color:var(--st-sub); font-size:12px; font-weight:800; line-height:1; white-space:nowrap; }
    #ssb-stats-panel .ssb-chip-strong { background:var(--st-field); color:var(--st-ink); font-weight:900; box-shadow:inset 0 1px 0 #fff; }
    #ssb-stats-panel .ssb-ico { display:inline-flex; align-items:center; justify-content:center; width:32px; height:32px; padding:0; }
    #ssb-stats-panel .ssb-ico svg { flex:none; width:16px !important; height:16px !important; font-size:16px !important; fill:none; stroke:currentColor; stroke-width:2.4; stroke-linecap:round; stroke-linejoin:round; }
    #ssb-stats-panel .ssb-head-name { margin-right:4px; font-size:16px !important; font-weight:900; color:var(--st-ink); white-space:nowrap; }
    #ssb-stats-panel .ssb-fx { display:flex; gap:6px; margin-left:auto; }
    #ssb-stats-panel .ssb-btn.ssb-sm { height:30px; padding:0 11px; font-size:12px; }
    #ssb-stats-panel .ssb-btn { height:32px; padding:0 12px; border:1px solid var(--st-edge); border-radius:9px; background:var(--st-field); color:var(--st-ink); font-size:13px; font-weight:800; white-space:nowrap; box-shadow:0 2px 6px rgba(8,62,84,0.08); transition:background 0.15s, box-shadow 0.15s, transform 0.12s; }
    #ssb-stats-panel .ssb-btn:hover { background:#fff; box-shadow:0 6px 14px rgba(8,62,84,0.14); }
    #ssb-stats-panel .ssb-btn:active { transform:translateY(1px); }
    #ssb-stats-panel .ssb-link { padding:2px 4px; border:none; background:none; color:var(--st-ink); font-size:13.5px; font-weight:800; text-decoration:underline; text-underline-offset:3px; text-decoration-color:rgba(12,87,111,0.35); white-space:nowrap; }
    #ssb-stats-panel .ssb-link:hover { text-decoration-color:currentColor; }
    #ssb-stats-panel .ssb-danger { color:var(--st-red); }
    #ssb-stats-panel .ssb-link.ssb-danger { text-decoration-color:rgba(196,32,32,0.35); }
    #ssb-stats-panel .ssb-link.ssb-danger:hover { text-decoration-color:currentColor; }

    /* Content */
    #ssb-stats-panel .ssb-body { flex:1 1 auto; min-height:0; display:flex; flex-direction:column; gap:14px; margin:0 -10px; padding:2px 10px 6px; overflow-y:auto; container-type:inline-size; }
    #ssb-stats-panel :is(.ssb-body, .ssb-hist-list, .ssb-dd-list) { scrollbar-width:auto !important; scrollbar-color:auto !important; }
    #ssb-stats-panel :is(.ssb-body, .ssb-hist-list, .ssb-dd-list)::-webkit-scrollbar { width:6px; height:6px; }
    #ssb-stats-panel :is(.ssb-body, .ssb-hist-list, .ssb-dd-list)::-webkit-scrollbar-track { background:transparent; }
    #ssb-stats-panel :is(.ssb-body, .ssb-hist-list, .ssb-dd-list)::-webkit-scrollbar-thumb { border-radius:999px; background:rgba(12,87,111,0.28); }
    #ssb-stats-panel :is(.ssb-body, .ssb-hist-list, .ssb-dd-list)::-webkit-scrollbar-thumb:hover { background:rgba(12,87,111,0.5); }

    /* Scoreboard */
    #ssb-stats-panel .ssb-cols { display:grid; grid-template-columns:repeat(2, minmax(0,1fr)); align-items:start; gap:14px; }
    #ssb-stats-panel .ssb-team { --tc:var(--st-ink); min-width:0; overflow:hidden; border:1px solid var(--st-edge); border-radius:14px; background:var(--st-glass); box-shadow:inset 0 1px 0 rgba(255,255,255,0.5), 0 2px 6px rgba(8,62,84,0.06); }
    #ssb-stats-panel .ssb-team-blue { --tc:#0E7697; }
    #ssb-stats-panel .ssb-team-red { --tc:#d82727; }
    #ssb-stats-panel .ssb-team-ffa { grid-column:1 / -1; }
    #ssb-stats-panel .ssb-team-hdr { display:flex; align-items:baseline; gap:10px; padding:12px 14px 10px; border-top:4px solid var(--tc); border-bottom:1px solid var(--st-line); background:rgba(255,255,255,0.24); }
    #ssb-stats-panel .ssb-team-name { font-family:"Sigmar One",sans-serif; font-weight:normal; font-size:17px; line-height:1.2; text-transform:uppercase; color:var(--tc); }
    #ssb-stats-panel .ssb-team-info { font-size:13px; font-weight:700; color:var(--st-sub); }
    #ssb-stats-panel .ssb-team-score { margin-left:auto; font-size:15px; font-weight:900; color:var(--st-ink); }
    #ssb-stats-panel table { width:100%; margin:0; border-collapse:separate; border-spacing:0; table-layout:fixed; }
    #ssb-stats-panel col.ssb-c-rank { width:38px; }
    #ssb-stats-panel col.ssb-c-n { width:46px; }
    #ssb-stats-panel col.ssb-c-kdr { width:62px; }
    #ssb-stats-panel .ssb-team-ffa col.ssb-c-n { width:84px; }
    #ssb-stats-panel .ssb-team-ffa col.ssb-c-kdr { width:96px; }
    #ssb-stats-panel th { padding:8px 6px 6px; background:none; font-size:11px; font-weight:800; letter-spacing:0.6px !important; text-transform:uppercase; color:var(--st-sub); text-align:center; }
    #ssb-stats-panel td { padding:7px 6px; border-top:1px solid var(--st-line); background:none; font-size:14.5px; font-weight:700; color:var(--st-ink); text-align:center; font-variant-numeric:tabular-nums; }
    #ssb-stats-panel :is(th, td):nth-child(2) { text-align:left; }
    #ssb-stats-panel :is(th, td):first-child { padding-left:14px; text-align:left; }
    #ssb-stats-panel :is(th, td):last-child { padding-right:14px; }
    #ssb-stats-panel tbody tr:first-child td { border-top:none; }
    #ssb-stats-panel td.ssb-rank { font-size:13px; color:var(--st-sub); }
    #ssb-stats-panel td.ssb-name { font-weight:800; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
    #ssb-stats-panel tr.ssb-me td { background:rgba(255,255,255,0.55); }
    #ssb-stats-panel tr.ssb-me td.ssb-name { font-weight:900; }
    #ssb-stats-panel td.ssb-none { padding:14px; color:var(--st-sub); text-align:center; }
    #ssb-stats-panel .ssb-empty { flex:none; padding:30px 20px; border:1px dashed rgba(12,87,111,0.3); border-radius:14px; background:rgba(255,255,255,0.18); color:var(--st-sub); font-size:15px; font-weight:800; text-align:center; }

    /* Match History */
    #ssb-stats-panel.ssb-v-hist { height:min(600px, calc(76vh / var(--ssm-ui-scale, 1))); }
    #ssb-stats-panel.ssb-v-hist .ssb-body { overflow:hidden; }
    #ssb-stats-panel .ssb-filters { flex:none; position:relative; z-index:3; display:flex; flex-wrap:wrap; align-items:center; gap:10px; }
    #ssb-stats-panel .ssb-dd { position:relative; }
    #ssb-stats-panel .ssb-dd-btn { display:flex; align-items:center; gap:10px; min-width:200px; height:40px; padding:0 12px 0 14px; border:2px solid rgba(14,118,151,0.28); border-radius:12px; background:#fff; color:var(--st-ink); font-size:14.5px; font-weight:800; box-shadow:inset 0 2px 4px rgba(8,62,84,0.08); transition:border-color 0.15s, box-shadow 0.15s; }
    #ssb-stats-panel .ssb-dd-btn:hover { border-color:rgba(14,118,151,0.5); }
    #ssb-stats-panel .ssb-dd.ssb-open .ssb-dd-btn { border-color:#ff981f; box-shadow:0 0 0 4px rgba(255,152,31,0.22); }
    #ssb-stats-panel .ssb-dd-val { flex:1; min-width:0; text-align:left; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
    #ssb-stats-panel .ssb-dd-car { flex:none; width:16px; height:16px; fill:none; stroke:currentColor; stroke-width:3; stroke-linecap:round; stroke-linejoin:round; transition:transform 0.15s; }
    #ssb-stats-panel .ssb-dd.ssb-open .ssb-dd-car { transform:rotate(180deg); }
    #ssb-stats-panel .ssb-dd-list { display:none; position:absolute; top:calc(100% + 6px); left:0; z-index:5; min-width:100%; max-height:280px; overflow-y:auto; padding:5px; border:1px solid var(--st-edge); border-radius:12px; background:#f4fbfe; box-shadow:0 14px 30px rgba(8,62,84,0.28); }
    #ssb-stats-panel .ssb-dd.ssb-open .ssb-dd-list { display:block; }
    #ssb-stats-panel .ssb-dd-opt { padding:8px 12px; border-radius:8px; color:var(--st-ink); font-size:14.5px; font-weight:800; white-space:nowrap; cursor:pointer; outline:none; }
    #ssb-stats-panel .ssb-dd-opt:is(:hover, :focus) { background:rgba(14,118,151,0.12); }
    #ssb-stats-panel .ssb-dd-opt[aria-selected="true"] { background:var(--st-orange); color:#fff; text-shadow:0 1px 0 rgba(0,0,0,0.22); }
    #ssb-stats-panel .ssb-dd-opt[aria-selected="true"]:focus { box-shadow:inset 0 0 0 2px rgba(255,255,255,0.75); }
    #ssb-stats-panel :is(.ssb-colhd, .ssb-hist-row) { display:grid; grid-template-columns:var(--st-grid); align-items:center; column-gap:16px; }
    #ssb-stats-panel .ssb-colhd { flex:none; margin-bottom:-8px; padding:0 17px; font-size:11px; font-weight:800; letter-spacing:0.6px !important; text-transform:uppercase; color:var(--st-sub); }
    #ssb-stats-panel :is(.ssb-colhd span:last-child, .ssb-hr-kd) { text-align:right; }
    #ssb-stats-panel .ssb-hist-list { flex:1 1 auto; min-height:0; display:flex; flex-direction:column; gap:8px; margin:0 -10px; padding:4px 10px 10px; overflow-y:auto; }
    #ssb-stats-panel .ssb-hist-row { flex:none; min-height:64px; padding:10px 16px; border:1px solid var(--st-edge); border-radius:14px; background:var(--st-glass); box-shadow:inset 0 1px 0 rgba(255,255,255,0.5), 0 2px 6px rgba(8,62,84,0.06); cursor:pointer; transition:background 0.15s, box-shadow 0.15s, transform 0.15s; }
    #ssb-stats-panel .ssb-hist-row:is(:hover, :focus-visible) { background:var(--st-glass-hi); box-shadow:inset 0 1px 0 rgba(255,255,255,0.6), 0 8px 18px rgba(8,62,84,0.12); transform:translateY(-1px); }
    #ssb-stats-panel .ssb-hr-main { min-width:0; }
    #ssb-stats-panel .ssb-hr-name { font-size:16px; font-weight:900; color:var(--st-ink); overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
    #ssb-stats-panel .ssb-hr-sub { margin-top:2px; font-size:12.5px; font-weight:700; color:var(--st-sub); overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
    #ssb-stats-panel .ssb-hr-strong { font-size:14.5px; font-weight:800; color:var(--st-ink); white-space:nowrap; font-variant-numeric:tabular-nums; }
    #ssb-stats-panel .ssb-hr-kd .ssb-hr-strong { font-size:16px; font-weight:900; }
    /* Rename / Delete take the Played cell's place while the row is hovered or focused; hidden, they can't be clicked. */
    #ssb-stats-panel .ssb-hr-when { display:grid; align-items:center; min-width:0; }
    #ssb-stats-panel .ssb-hr-when > * { grid-area:1 / 1; min-width:0; transition:opacity 0.12s; }
    #ssb-stats-panel .ssb-hr-acts { display:flex; gap:4px; margin-left:-4px; opacity:0; pointer-events:none; }
    #ssb-stats-panel .ssb-hist-row:is(:hover, :focus-within) .ssb-hr-acts { opacity:1; pointer-events:auto; }
    #ssb-stats-panel .ssb-hist-row:not(.ssb-hr-live):is(:hover, :focus-within) .ssb-hr-info { opacity:0; pointer-events:none; }
    #ssb-stats-panel .ssb-hr-live { border-color:#fff; background:var(--st-glass-hi); }
    @media (hover: none) { #ssb-stats-panel .ssb-hr-acts { opacity:1; pointer-events:auto; } #ssb-stats-panel .ssb-hist-row:not(.ssb-hr-live) .ssb-hr-info { opacity:0; pointer-events:none; } }

    /* Narrow screens: one column, and narrower list columns */
    @container (max-width: 520px) {
      #ssb-stats-panel .ssb-cols { grid-template-columns:minmax(0,1fr); }
      #ssb-stats-panel :is(.ssb-colhd, .ssb-hist-row) { grid-template-columns:minmax(0,1fr) 128px 84px; column-gap:12px; }
    }
    @media (prefers-reduced-motion: reduce) {
      #ssb-stats-panel.ssb-in { animation:none; }
      #ssb-stats-panel .ssb-hist-row:is(:hover, :focus-visible) { transform:none; }
    }
    /* The pictures: only the chips and the scoreboard. */
    #ssb-stats-panel.ssb-shot { height:auto !important; animation:none !important; box-shadow:none; }
    #ssb-stats-panel.ssb-shot .ssb-noimg { display:none !important; }
    #ssb-stats-panel.ssb-shot .ssb-body { overflow:visible !important; }
  `;

  /* ---- Size ----
     The game sizes its menus from the screen height (1.95vh). The window, dialogs and toasts are drawn for 1080p
     and zoomed by the same factor, so they keep their size next to the game's menus on any screen. vh and vw
     inside a zoomed box are zoomed too, so the window's screen limits are divided by the factor. */
  const SCALE_CSS = `
    #ssb-stats-panel, #ssb-dialog-panel, #ssb-toast-stack { zoom:var(--ssm-ui-scale, 1); }
    #ssb-stats-panel { min-width:min(640px, calc(96vw / var(--ssm-ui-scale, 1))) !important; max-width:min(900px, calc(96vw / var(--ssm-ui-scale, 1))) !important; max-height:calc(92vh / var(--ssm-ui-scale, 1)) !important; overflow:auto !important; }
  `;
  let lastScale = 0, scaleFrame = 0;
  function applyScale() {
    if (document.hidden || document.pointerLockElement) return;
    let base = NaN;
    try { base = parseFloat(getComputedStyle(document.documentElement).fontSize); } catch (e) { /* no root size yet */ }
    let s = base > 0 ? base / 21.06 : (window.innerHeight || 1080) / 1080;
    if (!Number.isFinite(s) || s <= 0) s = 1;
    if (Math.abs(s - 1) < 0.02) s = 1;   // 1080p: no zoom at all, so nothing blurs
    s = Math.round(s * 1000) / 1000;
    if (s !== lastScale) {
      lastScale = s;
      document.documentElement.style.setProperty("--ssm-ui-scale", String(s));
    }
  }

  /* ---- Tooltips for the button and the window's buttons ---- */
  const TIP_TARGETS = "#ssb-history-btn, #ssb-stats-overlay [data-tooltip]";
  const TIP_CSS = `#ssm-tooltip { position:fixed; left:0; top:0; z-index:2147483647; display:none; box-sizing:border-box; max-width:min(calc(250px * var(--ssm-ui-scale, 1)), calc(100vw - 24px)); padding:calc(8px * var(--ssm-ui-scale, 1)) calc(12px * var(--ssm-ui-scale, 1)); border:calc(2px * var(--ssm-ui-scale, 1)) solid #2db8d4; border-radius:calc(8px * var(--ssm-ui-scale, 1)); background:#fff; color:#0C576F; font-family:"Nunito",system-ui,sans-serif; font-size:calc(13px * var(--ssm-ui-scale, 1)); font-weight:700; line-height:1.3; letter-spacing:normal; text-transform:none; overflow-wrap:anywhere; box-shadow:0 4px 15px rgba(0,0,0,0.25); pointer-events:none; opacity:0; transition:opacity 0.12s cubic-bezier(0.4,0,0.2,1); }
    @media (prefers-reduced-motion: reduce) { #ssm-tooltip { transition:none; } }`;
  let tip = null;
  function tipShow(t) {
    const text = t.getAttribute("data-tooltip");
    if (!text || !document.body || document.pointerLockElement) return;
    addStyle("ssm-tip-style", TIP_CSS);
    if (!tip) {
      tip = el("div");
      tip.id = "ssm-tooltip";
      tip.setAttribute("aria-hidden", "true");
    }
    if (document.body.lastElementChild !== tip) document.body.appendChild(tip);   // above the window and dialogs
    tip.textContent = text;
    tip.style.display = "block";
    const r = t.getBoundingClientRect(), tr = tip.getBoundingClientRect(), vw = window.innerWidth, vh = window.innerHeight;
    let left = r.left + (r.width - tr.width) / 2, top = r.top - tr.height - 8;
    left = Math.max(10, Math.min(left, vw - tr.width - 10));
    if (top < 10) top = r.bottom + 8;
    top = Math.max(10, Math.min(top, vh - tr.height - 10));
    tip.style.left = left + "px";
    tip.style.top = top + "px";
    tip.style.opacity = "1";
  }
  function tipHide() {
    if (!tip || tip.style.opacity === "0") return;
    tip.style.opacity = "0";
    const t = tip;
    setTimeout(() => { if (t.style.opacity === "0") t.style.display = "none"; }, 140);
  }
  const tipTarget = n => n instanceof Element ? n.closest(TIP_TARGETS) : null;
  function onTipOver(e) { const t = tipTarget(e.target); if (t) tipShow(t); }
  function onTipOut(e) {
    const t = tipTarget(e.target);
    if (t && !(e.relatedTarget instanceof Node && t.contains(e.relatedTarget))) tipHide();
  }
  function onTipFocus(e) { const t = tipTarget(e.target); if (t && t === e.target && t.matches(":focus-visible")) tipShow(t); }
  function onTipBlur(e) { if (tipTarget(e.target)) tipHide(); }

  /* ---- The round Match History button, after Game Mode on the home screen ----
     It goes in the game's own button row, so the row sizes and lines it up like its other buttons. */
  const BTN_ID = "ssb-history-btn";
  // The clock: the ring and its arrowhead turn as one group, the hands as another, both around the centre (12, 12).
  const BTN_ICON = '<svg class="ssb-hist-ico" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round">' +
    '<g class="ssb-hist-ring"><path d="M3.5 12A8.5 8.5 0 1 1 6 18"/><path d="M1 9.6l2.5 2.7L6 9.6"/></g>' +
    '<g class="ssb-hist-hands"><path d="M12 7.6V12l3 2"/></g></svg>';
  const BTN_CSS = `
    #ssb-history-btn.ssb-hist-round { width:1.8em; min-width:1.8em; max-width:none; height:1.8em; padding:0; border-radius:50%; display:flex; align-items:center; justify-content:center; line-height:1; }
    /* font-size: inherit, or the game's "* { font-size: 1.95vh }" sizes the icon from the screen instead of the button.
       The drop shadow is the game's button text shadow, drawn for the icon. */
    #ssb-history-btn .ssb-hist-ico { font-size:inherit; width:0.82em; height:0.82em; display:block; overflow:visible; pointer-events:none; filter:drop-shadow(0.1em 0.1em 0 rgba(0,0,0,0.3)); }
    #ssb-history-btn .ssb-hist-ico g { transform-box:view-box; transform-origin:12px 12px; }
    #ssb-history-btn.ssb-twist .ssb-hist-ring { animation:ssb-hist-rewind 0.85s cubic-bezier(0.5,0,0.2,1); }
    #ssb-history-btn.ssb-twist .ssb-hist-hands { animation:ssb-hist-hands 0.85s cubic-bezier(0.5,0,0.2,1); }
    @keyframes ssb-hist-rewind { to { transform:rotate(-360deg); } }
    @keyframes ssb-hist-hands { to { transform:rotate(-720deg); } }
  `;
  const still = () => !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  const btnWanted = () => running && saved.show;
  let btnSig = "", btnTicks = 0, btnMO = null;

  const visible = n => {
    if (n.checkVisibility && !n.checkVisibility()) return false;
    const r = n.getBoundingClientRect();
    return r.width > 8 && r.height > 8;
  };
  // After Better HUD's Server selector when it's there, else after Game Mode. Read from the row's classes and
  // inline styles, so it needs no layout; the text match is a fallback.
  function anchorFor(grp) {
    const kids = [...grp.children].filter(c => c.id !== BTN_ID);
    return kids.find(c => c.classList.contains("mod-server-clone") && c.style.display !== "none") ||
      kids.find(c => c.classList.contains("btn_game_mode") && !c.classList.contains("mod-server-clone")) ||
      kids.find(c => visible(c) && /server/i.test(c.textContent || "")) ||
      kids.find(c => visible(c) && /game\s*mode/i.test(c.textContent || "")) ||
      null;
  }
  function buildBtn() {
    const btn = el("button", "ss_button btn_big btn_blue bevel_blue box_relative ssb-hist-round");
    btn.id = BTN_ID;
    btn.type = "button";
    btn.setAttribute("data-tooltip", "Match History");
    btn.setAttribute("aria-label", "Match History");
    btn.innerHTML = BTN_ICON;
    // One whole rewind per hover: the class stays until the animation ends, so leaving early never snaps it back.
    const twist = () => { if (!still()) btn.classList.add("ssb-twist"); };
    btn.addEventListener("mouseenter", twist);
    btn.addEventListener("focus", () => { if (btn.matches(":focus-visible")) twist(); });
    btn.addEventListener("animationend", e => { if (e.animationName === "ssb-hist-rewind") btn.classList.remove("ssb-twist"); });
    btn.addEventListener("click", e => {
      e.preventDefault();
      e.stopPropagation();
      sound("ui_toggletab");
      openHistory();
    });
    return btn;
  }
  // A fingerprint of the play row that needs no layout: its children and their inline display.
  function rowSig(grp) {
    let s = "";
    for (const c of grp.children) s += (c.id || c.className) + ":" + c.style.display + ";";
    return s;
  }
  // On the menus a MutationObserver puts the button in as soon as the row exists and keeps it in place. When nothing
  // moved, a call is a lookup and a string compare. It's off while playing and while the button is turned off.
  function watchBtn() {
    if (btnMO || !btnWanted() || document.pointerLockElement || !document.body) return;
    btnMO = new MutationObserver(() => injectBtn());
    btnMO.observe(document.body, { childList: true, subtree: true });
  }
  function unwatchBtn() {
    if (btnMO) {
      btnMO.disconnect();
      btnMO = null;
    }
  }
  // poll === true: the 1 s menu tick, which also re-checks the place every 8th time.
  function injectBtn(poll) {
    if (document.pointerLockElement) return;
    if (poll === true) {
      if (btnWanted()) watchBtn();
      else unwatchBtn();
    }
    const existing = document.getElementById(BTN_ID);
    if (!btnWanted()) {
      if (existing) existing.remove();
      btnSig = "";
      return;
    }
    const grp = document.querySelector(".play-panel-btn-group");
    if (!grp) return;
    if (existing && existing.parentElement === grp && rowSig(grp) === btnSig && (poll !== true || ++btnTicks % 8)) return;
    btnTicks = 0;
    addStyle("ssm-btn-style", BTN_CSS);
    const btn = existing || buildBtn();
    const a = anchorFor(grp);
    const misplaced = btn.parentElement !== grp || (a ? btn.previousElementSibling !== a : btn !== grp.lastElementChild);
    if (misplaced) grp.insertBefore(btn, a ? a.nextSibling : null);
    btnSig = rowSig(grp);
  }
  function syncBtn() {
    if (btnWanted()) watchBtn();
    else unwatchBtn();
    injectBtn();
  }

  /* ---- Settings ----
     Keybindings ▸ Match History: the key, set like the game's own (click the box, press a key). Backspace or Delete
     there means no key, and Esc leaves it as it was. A key one of the game's controls uses shows IN USE; if you give
     one of the game's controls this key later, this one is cleared, the way the game clears a key used twice.
     Misc ▸ More options ▸ Show match history button.
     Both are kept when you press Confirm. Cancel, the X and Esc leave them as they were, and Reset to Defaults
     puts back \ and the button. */
  let saved = readSettings();
  let pending = null;     // what the open Settings popup shows; null while it's closed
  let capturing = false, flashTimer = 0, bindTimer = 0, lastBinds = null, settingsIO = null, observed = null;
  function readSettings() {
    const s = { ...DEFAULTS };
    try {
      const v = localStorage.getItem(SHOW_KEY);
      if (v !== null) s.show = JSON.parse(v) === true;
    } catch (e) { /* the default */ }
    try {
      const raw = localStorage.getItem(HOTKEY_KEY);
      if (raw !== null) {
        s.key = raw === " " ? raw : raw.trim();
        s.code = "";
        const c = JSON.parse(localStorage.getItem(CODE_KEY) || "null");
        if (c && typeof c === "object" && c.key === s.key && typeof c.code === "string") s.code = c.code;
      }
    } catch (e) { /* the key without its code */ }
    return s;
  }
  // Only what changed is written; a default is kept as no entry at all.
  function writeSettings(p) {
    const cur = readSettings();
    try {
      if (p.show !== cur.show) {
        if (p.show === DEFAULTS.show) localStorage.removeItem(SHOW_KEY);
        else localStorage.setItem(SHOW_KEY, JSON.stringify(!!p.show));
      }
      if (p.key !== cur.key || p.code !== cur.code) {
        if (p.key === DEFAULTS.key && (!p.code || p.code === DEFAULTS.code)) {
          localStorage.removeItem(HOTKEY_KEY);
          localStorage.removeItem(CODE_KEY);
        } else {
          localStorage.setItem(HOTKEY_KEY, p.key);
          if (p.code) localStorage.setItem(CODE_KEY, JSON.stringify({ key: p.key, code: p.code }));
          else localStorage.removeItem(CODE_KEY);
        }
      }
    } catch (e) {
      warn("Saving the settings", e);
    }
    saved = readSettings();
  }

  const SKIP_KEYS = /^(Shift|Control|Alt|Meta|AltGraph|CapsLock|NumLock|ScrollLock|Fn|FnLock|Hyper|Super|Symbol|SymbolLock|OS|Dead|Unidentified|Process)$/;
  const KEY_NAMES = { " ": "SPACE", Control: "CTRL", Escape: "ESC", Delete: "DEL", Insert: "INS", PageUp: "PG UP", PageDown: "PG DN" };
  // A key's name as the game writes it ("SPACE", "ARROW UP", "\").
  function keyLabel(key) {
    if (!key) return "NONE";
    try {
      const l = typeof window.extern?.keyToLabel === "function" ? window.extern.keyToLabel(key) : "";
      if (typeof l === "string" && l && l !== "undefined") return l;
    } catch (e) { /* the game's names aren't ready */ }
    if (KEY_NAMES[key]) return KEY_NAMES[key];
    if (key.startsWith("Arrow")) return "ARROW " + key.slice(5).toUpperCase();
    return key.toUpperCase();
  }
  // The game's controls as the popup shows them now (changed but not confirmed yet included): { code, label }.
  function gameBinds() {
    try {
      const kb = vue().settingsUi.controls.keyboard;
      return [...(kb.game || []), ...(kb.spectate || [])].map(b => b && b.value).filter(v => v && typeof v === "object");
    } catch (e) {
      return [];
    }
  }
  function clashes(key, code, binds) {
    if (!key) return false;
    const label = keyLabel(key).toUpperCase();
    return binds.some(v => (code && v.code === code) || String(v.label || "").toUpperCase() === label);
  }

  const SETTINGS_CSS = `#ssm-key.ssm-in-use { color:#e81616 !important; }`;
  function injectRows() {
    if (!document.getElementById("ssm-key-row")) {
      const col = document.querySelector("#settings_keyboard .f_col.ss_marginleft_xl") || [...document.querySelectorAll("#settings_keyboard .f_col")].pop();
      if (col) {
        addStyle("ssm-settings-style", SETTINGS_CSS);
        const row = el("div", "nowrap");
        row.id = "ssm-key-row";
        const input = el("input", "ss_keybind clickme text_blue8");
        input.type = "text";
        input.id = "ssm-key";
        input.placeholder = "Press A Key";
        input.autocomplete = "off";
        input.spellcheck = false;
        input.setAttribute("aria-label", "Match History key");
        row.append(input, el("div", "label", "Match History"));
        // After the column's last key (Grenade), above Mouse Speed.
        const keys = [...col.children].filter(c => c.matches("div.nowrap") && c.querySelector("input.ss_keybind"));
        if (keys.length) keys[keys.length - 1].after(row);
        else col.appendChild(row);
        input.addEventListener("focus", startCapture);
        input.addEventListener("blur", endCapture);
        for (const ev of ["beforeinput", "paste", "drop"]) input.addEventListener(ev, e => e.preventDefault());
        renderRows();
      }
    }
    if (!document.getElementById("ssm-show-row")) {
      const grid = [...document.querySelectorAll("#settings_misc .display-grid")].find(g => g.querySelector("label.ss_checkbox"));
      const col = grid && grid.querySelector(".f_col");
      if (col) {
        const row = el("div");
        row.id = "ssm-show-row";
        const label = el("label", "ss_checkbox label", "Show match history button");
        const box = el("input");
        box.type = "checkbox";
        box.id = "ssm-show-btn";
        label.append(box, el("span", "checkmark"));
        row.appendChild(label);
        // Under the column's last option (Auto Detail).
        const opts = [...col.children].filter(c => c.querySelector("label.ss_checkbox"));
        if (opts.length) opts[opts.length - 1].after(row);
        else col.appendChild(row);
        box.addEventListener("change", () => {
          beginEdit();
          pending.show = box.checked;
          // The sound the game's own checkboxes make.
          sound("ui_onchange");
        });
        renderRows();
      }
    }
    const s = document.getElementById("settings");
    if (s && s !== observed) {
      if (settingsIO) settingsIO.disconnect();
      settingsIO = new IntersectionObserver(syncOpen);
      settingsIO.observe(s);
      observed = s;
    }
  }
  function removeRows() {
    endEdit();
    if (settingsIO) settingsIO.disconnect();
    settingsIO = null;
    observed = null;
    document.getElementById("ssm-key-row")?.remove();
    document.getElementById("ssm-show-row")?.remove();
  }
  function renderRows() {
    const s = pending || saved;
    const k = document.getElementById("ssm-key");
    if (k && !capturing) {
      k.value = keyLabel(s.key);
      k.classList.remove("ssm-in-use");
    }
    const b = document.getElementById("ssm-show-btn");
    if (b) b.checked = !!s.show;
  }

  // The popup opening starts from what's saved; closing it drops what Confirm didn't keep.
  const settingsShown = () => {
    const s = document.getElementById("settings");
    return !!s && s.getClientRects().length > 0;
  };
  function syncOpen() {
    if (settingsShown()) {
      if (!pending) {
        beginEdit();
        renderRows();
      }
    } else if (pending) {
      endEdit();
      renderRows();
    }
  }
  function beginEdit() {
    if (pending) return;
    pending = { ...saved };
    lastBinds = null;
    watchBinds();
    clearInterval(bindTimer);
    bindTimer = setInterval(watchBinds, 300);
  }
  function endEdit() {
    endCapture();
    clearInterval(bindTimer);
    bindTimer = 0;
    lastBinds = null;
    pending = null;
  }
  // A game control changed to this key while the popup is open: this key is cleared.
  function watchBinds() {
    if (!pending) return;
    const binds = gameBinds(), now = binds.map(v => v.code + "\n" + v.label);
    if (lastBinds && pending.key) {
      for (let i = 0; i < binds.length; i++) {
        if (now[i] !== lastBinds[i] && clashes(pending.key, pending.code, [binds[i]])) {
          pending.key = "";
          pending.code = "";
          renderRows();
          break;
        }
      }
    }
    lastBinds = now;
  }
  // The game's Confirm, Reset to Defaults and Cancel buttons, under the tabs.
  function onSettingsClick(e) {
    const b = e.target instanceof Element && e.target.closest("#settings .grid-column-3-eq > button");
    if (!b || b.classList.contains("ss_bigtab")) return;
    if (b.classList.contains("btn_green")) {
      if (pending) {
        writeSettings(pending);
        syncBtn();
      }
    } else if (b.classList.contains("btn_yolk")) {
      endCapture();
      beginEdit();
      pending.show = DEFAULTS.show;
      pending.key = DEFAULTS.key;
      pending.code = DEFAULTS.code;
      renderRows();
    }
  }

  function startCapture() {
    const k = document.getElementById("ssm-key");
    if (!k || capturing) return;
    beginEdit();
    capturing = true;
    clearTimeout(flashTimer);
    k.classList.remove("ssm-in-use");
    k.value = "";
    window.addEventListener("keydown", onCaptureKey, true);
  }
  function endCapture() {
    if (!capturing) return;
    capturing = false;
    clearTimeout(flashTimer);
    window.removeEventListener("keydown", onCaptureKey, true);
    renderRows();
  }
  function onCaptureKey(e) {
    const k = document.getElementById("ssm-key");
    if (!k || document.activeElement !== k || !pending) {
      endCapture();
      return;
    }
    if (e.key === "Tab" || e.isComposing || SKIP_KEYS.test(e.key)) return;
    if ((e.ctrlKey || e.metaKey || e.altKey) && !e.getModifierState("AltGraph")) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    eatKeyUp(e.key);
    if (e.key === "Escape") {
      k.blur();
      return;
    }
    if (e.key === "Backspace" || e.key === "Delete") {
      pending.key = "";
      pending.code = "";
      k.blur();
      return;
    }
    const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    if (e.key === "Enter" || clashes(key, e.code, gameBinds())) {
      // Enter opens the chat.
      clearTimeout(flashTimer);
      k.value = "IN USE";
      k.classList.add("ssm-in-use");
      flashTimer = setTimeout(() => {
        if (!capturing) return;
        k.value = "";
        k.classList.remove("ssm-in-use");
      }, 900);
      return;
    }
    pending.key = key;
    pending.code = e.code || "";
    k.blur();
  }

  /* ---- The key ---- */
  function onHotkey(e) {
    if (!running || e.repeat || !e.key || !saved.key) return;
    if ((e.ctrlKey || e.metaKey || e.altKey) && !e.getModifierState("AltGraph")) return;
    const t = document.activeElement;
    if (t && (/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName) || t.isContentEditable)) return;
    if (e.key.toLowerCase() !== saved.key.toLowerCase() && !(saved.code && e.code === saved.code)) return;
    e.preventDefault();
    if (isOpen()) {
      sound("ui_toggletab");
      closeOverlay();
    } else if (isLive()) openLive();
    else {
      sound("ui_toggletab");
      openHistory();
    }
  }

  /* ---- On and off ---- */
  let trackTimer = 0, saveTimer = 0, menuTimer = 0, resizeTimer = 0;
  const onUnload = () => save(true);
  const onVisibility = () => { if (document.visibilityState === "hidden") save(true); };
  function onLockChange() {
    if (document.pointerLockElement) {
      unwatchBtn();
      tipHide();
    } else {
      watchBtn();
      injectBtn();
      // Opened while playing, the window didn't take the keyboard. Now that the game has let go, it does, so Esc
      // closes it.
      const p = isOpen() && document.getElementById("ssb-stats-panel");
      if (p && !p.contains(document.activeElement)) p.focus({ preventScroll: true });
    }
  }
  function onResize() {
    cancelAnimationFrame(scaleFrame);
    scaleFrame = requestAnimationFrame(applyScale);
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { if (!document.pointerLockElement) injectBtn(); }, 120);
  }
  function onStorage(e) {
    if ((e.key === HISTORY_KEY || e.key === null) && !histTimer) histMem = null;
    if (e.key === null || e.key === SHOW_KEY || e.key === HOTKEY_KEY || e.key === CODE_KEY) {
      saved = readSettings();
      if (!pending) renderRows();
      syncBtn();
    }
  }
  function tick() {
    if (!running || document.hidden) return;
    if (betterHud()) {
      standDown();
      return;
    }
    if (document.pointerLockElement) return;
    applyScale();
    injectBtn(true);
    injectRows();
    syncOpen();
  }
  function start() {
    if (running || dead || !wanted) return;
    running = true;
    histMem = null;
    saved = readSettings();
    trackTimer = setInterval(track, 1000);
    saveTimer = setInterval(save, 3000);
    menuTimer = setInterval(tick, 1000);
    document.addEventListener("keydown", onHotkey, true);
    window.addEventListener("keydown", onEscape, true);
    document.addEventListener("click", onSettingsClick, true);
    window.addEventListener("beforeunload", onUnload);
    window.addEventListener("pagehide", onUnload);
    document.addEventListener("visibilitychange", onVisibility);
    document.addEventListener("pointerlockchange", onLockChange);
    window.addEventListener("resize", onResize);
    window.addEventListener("storage", onStorage);
    document.addEventListener("mouseover", onTipOver);
    document.addEventListener("mouseout", onTipOut);
    document.addEventListener("mousedown", tipHide, true);
    document.addEventListener("focusin", onTipFocus);
    document.addEventListener("focusout", onTipBlur);
    tick();
    track();
  }
  function stop() {
    if (!running) return;
    save(true);
    running = false;
    clearInterval(trackTimer);
    clearInterval(saveTimer);
    clearInterval(menuTimer);
    clearTimeout(resizeTimer);
    cancelAnimationFrame(scaleFrame);
    document.removeEventListener("keydown", onHotkey, true);
    window.removeEventListener("keydown", onEscape, true);
    document.removeEventListener("click", onSettingsClick, true);
    window.removeEventListener("beforeunload", onUnload);
    window.removeEventListener("pagehide", onUnload);
    document.removeEventListener("visibilitychange", onVisibility);
    document.removeEventListener("pointerlockchange", onLockChange);
    window.removeEventListener("resize", onResize);
    window.removeEventListener("storage", onStorage);
    document.removeEventListener("mouseover", onTipOver);
    document.removeEventListener("mouseout", onTipOut);
    document.removeEventListener("mousedown", tipHide, true);
    document.removeEventListener("focusin", onTipFocus);
    document.removeEventListener("focusout", onTipBlur);
    unwatchBtn();
    document.getElementById(BTN_ID)?.remove();
    btnSig = "";
    removeRows();
    closeOverlay();
    document.getElementById("ssb-stats-overlay")?.remove();
    if (dialogOpen) dialogOpen(dialogOpen.cancelValue);
    toastStack?.remove();
    toastStack = null;
    tip?.remove();
    tip = null;
    for (const id of ["ssm-ui-style", "ssm-stats-style", "ssm-scale-style", "ssm-btn-style", "ssm-settings-style", "ssm-tip-style"]) document.getElementById(id)?.remove();
    document.documentElement.style.removeProperty("--ssm-ui-scale");
    lastScale = 0;
  }
  // Better HUD started after this script: it has Match History, so this copy steps aside for the rest of the visit.
  function standDown() {
    if (dead) return;
    dead = true;
    stop();
    try { window.ssModMenu?.unregister?.("stats-mod"); } catch (e) { /* not listed */ }
    console.info(TAG + " Better HUD is running and already has Match History, so the Stats Mod is off.");
  }

  // The Mod Menu's Settings button: the Keybindings tab, where the Match History key is.
  function openSettings() {
    const app = window.vueApp;
    if (!running || !app || typeof app.showSettingsPopup !== "function") return false;
    try {
      app.showSettingsPopup();
      const tab = document.getElementById("keyboard_button");
      if (tab) tab.click();
    } catch (e) {
      warn("Opening Settings", e);
      return false;
    }
    tick();
    return true;
  }

  window.ssStatsMod = {
    version: VERSION,
    openHistory: () => { if (running) openHistory(); },
    openLive: () => { if (running) openLive(); },
    close: () => closeOverlay(),
    settings: () => ({ ...saved }),
    status: () => ({
      running, off: dead ? "Better HUD" : wanted ? "" : "Mod Menu", patches: patchReport,
      players: Array.isArray(window.players), inGame: inGame(), live: isLive(),
      match: { code: st.gameCode, map: st.map, server: st.server, mode: st.mode, startMs: st.matchStartMs, endMs: st.matchEndMs },
      settingsOpen: !!pending,
    }),
  };

  // Started once the page is there, after one more look for Better HUD (Tampermonkey may have run it after this).
  function boot() {
    if (dead) return;
    if (betterHud()) {
      standDown();
      return;
    }
    // The Mod Menu (if it's installed) lists it with an on/off switch and a shortcut to its settings.
    (window.ssModMenuQueue = window.ssModMenuQueue || []).push({
      id: "stats-mod", name: "Stats Mod", version: VERSION, group: "mod",
      description: "Match History: your last 40 matches and a live scoreboard, from the round button on the home screen or a key.",
      enable() {
        wanted = true;
        start();
      },
      disable() {
        wanted = false;
        stop();
      },
      openSettings,
    });
    start();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot, { once: true });
  else boot();
})();
