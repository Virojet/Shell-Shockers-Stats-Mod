// ==UserScript==
// @name         Shell Shockers Stats Mod
// @version      1.0.2
// @description  Standalone match stats tracker from Better HUD: live K/D/KDR, pinned respawn card, match history, and stats image export.
// @namespace    https://github.com/Virojet/Shell-Shockers-Stats-Mod
// @author       Virojet
// @license      MIT
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
// @connect      cdnjs.cloudflare.com
// @connect      fonts.googleapis.com
// @connect      fonts.gstatic.com
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    "use strict";

    if (window.__ssbStatsOnlyInstalled) return;
    window.__ssbStatsOnlyInstalled = true;

    const REGION_NAMES = {
        singapore: "Singapore",
        uswest: "US West",
        sydney: "Sydney",
        uscentral: "US Central",
        useast: "US East",
        germany: "Germany",
        santiago: "Chile"
    };

    const MAP_NAMES = [
        "Abduction", "Aqueduct", "Backstage", "Bastion", "Bedrock", "BioHazard", "Blender", "Blue",
        "Bridge", "Canyon", "Cash", "Castle", "Castle Arena", "Catacombs", "Chicken Itza", "Cluckgrounds",
        "Cobalt", "Courtyard", "Creak", "Crossed", "Crowsnest", "Death Pit", "Dirt", "Dirt Base",
        "Downfall", "Duel Pyramid", "Eggcrates", "Enchanted", "Exposure", "Facility", "Feedlot", "Field",
        "Flux", "Fort Flip", "Foundation", "Four Quarters", "Gravel Stomp", "Greenhouse", "Growler",
        "Haunted", "Helix", "Hydro", "Ice Box", "Indigo", "Inmates", "Jail Break", "Jinx", "Junction",
        "King's Court", "Lunar Module", "Mansion", "Maze Runner", "Metamorph", "Metro 1012", "Moonbase",
        "Mud Gulch", "Nextdoor", "Orbital", "Outer Reach", "Overcooked", "Palace Siege", "Quarry",
        "Queen's Court", "Raceway", "Rameses", "Rats", "Relic", "Rivals", "Road", "Ruins", "Sanctuary",
        "Scales", "Shady Glen", "Shellville", "Shipyard", "Sky Scratcher", "Space Factory", "Space Arena",
        "Sparta", "Spellbound", "Stage", "Starship", "Stax Arena", "Teggtris", "Temple", "Timetwist",
        "Trainyard", "Tree Fort", "Two Towers", "Uncovered", "Vert", "Wimble", "Wonderland", "Wreckage",
        "Yolkido Garrison", "Zoomies"
    ];

    const config = {
        pinned: getBool("tp-statsPinned", false),
        autoShow: getBool("tp-statsAutoShow", true),
        hotkey: localStorage.getItem("tp-statsHotkey") || "/"
    };

    const state = {
        matchStartMs: 0,
        matchEndMs: 0,
        inMatch: false,
        hadLock: false,
        userClosed: false,
        server: "",
        map: "",
        mode: "",
        gameCode: "",
        snapshot: [],
        byName: {},
        everSeenTeams: false,
        kotcScore: { 1: 0, 2: 0 }
    };

    let pinnedCard = null;
    let liveDurationTimer = null;
    let imageLoadPromise = null;
    let fontCssPromise = null;

    function getBool(key, fallback) {
        try {
            const value = localStorage.getItem(key);
            if (value === null) return fallback;
            return JSON.parse(value) === true;
        } catch (err) {
            return fallback;
        }
    }

    function setBool(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(!!value));
        } catch (err) { }
    }

    function byId(id) {
        return document.getElementById(id);
    }

    function qs(selector) {
        return document.querySelector(selector);
    }

    function escapeHtml(value) {
        return String(value).replace(/[&<>"']/g, (ch) => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        })[ch]);
    }

    function formatDuration(totalSeconds) {
        if (!totalSeconds || totalSeconds < 1) return "0s";
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return minutes ? minutes + "m " + seconds + "s" : seconds + "s";
    }

    function formatDateTime(ms) {
        if (!ms) return "-";
        const d = new Date(ms);
        const pad = (n) => String(n).padStart(2, "0");
        return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()) + " " + pad(d.getHours()) + ":" + pad(d.getMinutes());
    }

    function formatServer(value) {
        if (!value) return "-";
        const key = String(value).toLowerCase().trim();
        return REGION_NAMES[key] || value;
    }

    function formatMode(value) {
        return {
            ctf: "Capture the Spatula",
            king: "King of the Coop",
            team: "Teams",
            ffa: "Free for All"
        }[value] || "-";
    }

    function shortMode(value) {
        return {
            ctf: "CTS",
            king: "KotC",
            team: "Teams",
            ffa: "FFA"
        }[value] || value || "-";
    }

    function playUi(sound) {
        try {
            window.BAWK && window.BAWK.play && window.BAWK.play(sound || "ui_click");
        } catch (err) { }
    }

    function getPlayers() {
        const candidates = [
            window.players,
            window.vueApp && window.vueApp.game && window.vueApp.game.players,
            window.vueApp && window.vueApp.$data && window.vueApp.$data.players,
            window.vueApp && window.vueApp.$data && window.vueApp.$data.game && window.vueApp.$data.game.players
        ];
        for (const value of candidates) {
            if (Array.isArray(value)) return value;
        }
        return null;
    }

    function installGameScriptPatch() {
        const replaceAll = String.prototype.replaceAll;
        let originalMainScript = null;
        const nativeAppendChild = HTMLElement.prototype.appendChild;

        HTMLElement.prototype.appendChild = function (node) {
            if (node && node.tagName === "SCRIPT" && typeof node.innerHTML === "string" && node.innerHTML.startsWith("(()=>{")) {
                originalMainScript = node.innerHTML;
                try {
                    let code = node.innerHTML;
                    const playerMatch = /(([a-zA-Z_$][a-zA-Z0-9_$]*)\[this\.playerIdx\])/.exec(code);
                    if (playerMatch) {
                        const playersVar = playerMatch[2];
                        code = replaceAll.call(code, playersVar + "=[]", playersVar + "=[],window.players=" + playersVar);
                    }

                    const myIdxMatch =
                        /gameJoined_ received"\),(\w+)=\w+\.unPackInt8U\(\)/.exec(code) ||
                        /([A-Z]{2})=[A-Za-z$_]+\.unPackInt8U\(\)/.exec(code);
                    if (myIdxMatch) {
                        code = replaceAll.call(code, myIdxMatch[0], myIdxMatch[0] + ",window.myPlayerIdx=" + myIdxMatch[1]);
                    }

                    node.innerHTML = code;
                    console.log("[Stats Only] Game player hooks installed.");
                } catch (err) {
                    console.warn("[Stats Only] Game script patch failed:", err);
                }
            }
            return nativeAppendChild.call(this, node);
        };

        const proto = HTMLScriptElement.prototype;
        const desc = Object.getOwnPropertyDescriptor(proto, "textContent") || Object.getOwnPropertyDescriptor(Node.prototype, "textContent");
        if (desc && desc.get && desc.set) {
            try {
                Object.defineProperty(proto, "textContent", {
                    get() {
                        const value = desc.get.call(this);
                        return value && value.startsWith("(()=>{") && originalMainScript ? originalMainScript : value;
                    },
                    set: desc.set,
                    configurable: true,
                    enumerable: true
                });
            } catch (err) { }
        }
    }

    function installWebSocketPatch() {
        const NativeWebSocket = window.WebSocket;
        if (!NativeWebSocket || NativeWebSocket.__ssbStatsOnlyWrapped) return;

        function StatsOnlyWebSocket(url, protocols) {
            try {
                const parsed = new URL(url, location.href);
                const gameMatch = /\/game\/([^/?#]+)/.exec(parsed.pathname || "");
                if (gameMatch) {
                    // Only arm a reset from a game-code change when NOT actively in a
                    // match (pointer unlocked). Shell Shockers can open background or
                    // next-match sockets to a different /game/<code> mid-match; without
                    // this guard that flips the code and resets your live timer/stats
                    // for no reason. A real new match unlocks (end screen) first, so
                    // legitimate resets are still armed then.
                    if (gameMatch[1] !== window.__ssbGameCode && !document.pointerLockElement) state._readyForReset = true;
                    window.__ssbGameCode = gameMatch[1];
                    window.__ssbGameHost = parsed.hostname;
                }

                const host = String(parsed.hostname || "").toLowerCase();
                Object.keys(REGION_NAMES).some((region) => {
                    if (host.includes(region)) {
                        window.currentServerRegion = region;
                        return true;
                    }
                    return false;
                });
            } catch (err) { }

            return protocols === undefined ? new NativeWebSocket(url) : new NativeWebSocket(url, protocols);
        }

        try {
            StatsOnlyWebSocket.prototype = NativeWebSocket.prototype;
            Object.assign(StatsOnlyWebSocket, NativeWebSocket);
            StatsOnlyWebSocket.__ssbStatsOnlyWrapped = true;
            window.WebSocket = StatsOnlyWebSocket;
        } catch (err) {
            console.warn("[Stats Only] WebSocket patch failed:", err);
        }
    }

    function getMapName() {
        try {
            const players = getPlayers() || [];
            const data = window.vueApp && (window.vueApp.$data || window.vueApp) || {};
            const maps = data.maps;
            for (const player of players) {
                const mapIdx = player && player.gameData && player.gameData.mapIdx;
                if (typeof mapIdx === "number") {
                    if (maps && maps[mapIdx] && maps[mapIdx].name) return maps[mapIdx].name;
                    if (MAP_NAMES[mapIdx]) return MAP_NAMES[mapIdx];
                }
            }
        } catch (err) { }

        const isBad = (value) => !value || /^(none|photo|menu|lobby|select|loading)/i.test(String(value).trim());
        try {
            const data = window.vueApp && (window.vueApp.$data || window.vueApp) || {};
            const candidates = [
                data.gameMap,
                data.mapName,
                data.map,
                data.ui && data.ui.game && data.ui.game.map,
                data.$data && data.$data.map,
                qs(".btn_game_mode:not(.mod-server-clone) .game-mode-type") && qs(".btn_game_mode:not(.mod-server-clone) .game-mode-type").textContent
            ];
            for (const value of candidates) {
                if (typeof value === "string" && !isBad(value)) return value.trim();
            }
        } catch (err) { }

        return "";
    }

    function getServerRegion() {
        if (window.currentServerRegion) return window.currentServerRegion;
        try {
            const hosts = JSON.parse(localStorage.getItem("mod-server-hosts") || "{}");
            const keys = Object.keys(hosts);
            return keys.length ? keys[keys.length - 1] : "";
        } catch (err) {
            return "";
        }
    }

    function elementVisible(el) {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.width > 0 && rect.height > 0;
    }

    function getMode() {
        if (state.mode === "king" || state.mode === "ctf") return state.mode;

        const now = Date.now();
        const cacheWindow = document.pointerLockElement ? 10000 : 2000;
        if (state._modeTs && now - state._modeTs < cacheWindow && state.mode) return state.mode;
        state._modeTs = now;

        if (elementVisible(byId("captureContainer"))) return "king";
        if (elementVisible(byId("teamScores")) || elementVisible(byId("spatulaPlayer"))) return "ctf";

        const players = getPlayers();
        if ((players && players.some((p) => p && (p.team === 1 || p.team === 2))) || state.everSeenTeams) return "team";
        return "ffa";
    }

    function saveStats(force) {
        try {
            if (!state.matchStartMs) return;

            let totalKills = 0;
            let totalDeaths = 0;
            let totalRows = 0;
            for (const key in state.byName) {
                const rec = state.byName[key];
                totalKills += rec.kills || 0;
                totalDeaths += rec.deaths || 0;
                totalRows++;
            }

            const signature = [
                state.gameCode,
                state.matchStartMs,
                state.map,
                state.server,
                state.mode,
                state.kotcScore ? state.kotcScore[1] + "," + state.kotcScore[2] : "",
                totalKills,
                totalDeaths,
                totalRows
            ].join("|");

            if (!force && state._saveSig === signature) return;
            state._saveSig = signature;

            const gameCode = state.gameCode || (state._syntheticCode || (state._syntheticCode = "local-" + (state.matchStartMs || Date.now())));
            localStorage.setItem("tp-statsSession", JSON.stringify({
                code: gameCode,
                map: state.map,
                server: state.server,
                byName: state.byName || {},
                matchStartMs: state.matchStartMs,
                kotcScore: state.kotcScore || { 1: 0, 2: 0 },
                everSeenTeams: state.everSeenTeams,
                mode: state.mode,
                ts: Date.now()
            }));

            const players = (state.snapshot || []).map((p) => ({
                name: p.name,
                team: p.team,
                kills: p.kills,
                deaths: p.deaths,
                isMe: p.isMe
            }));
            if (!players.length) return;
            // Never write a history entry for a trivially-short match (rollover artifact).
            // The session snapshot above (for rejoin-carry) is already saved and unaffected.
            if (Date.now() - state.matchStartMs < 20000) return;

            let history = readHistory();
            const entry = {
                code: gameCode,
                map: state.map,
                server: state.server,
                mode: state.mode,
                startMs: state.matchStartMs,
                endMs: state.matchEndMs || Date.now(),
                kotc: state.kotcScore || { 1: 0, 2: 0 },
                players
            };

            const index = history.findIndex((h) => h && h.code === gameCode && Math.abs((h.startMs || 0) - (state.matchStartMs || 0)) < 15000);
            if (index >= 0) {
                entry.label = history[index].label;
                history[index] = entry;
            } else {
                history.unshift(entry);
            }

            if (history.length > 40) history = history.slice(0, 40);
            writeHistory(history);
        } catch (err) { }
    }

    function restoreStats(gameCode, mapName) {
        try {
            if (state._restoreDone) return false;
            const raw = localStorage.getItem("tp-statsSession");
            if (!raw) return false;

            const saved = JSON.parse(raw);
            if (!saved || saved.code !== gameCode || !(Date.now() - (saved.ts || 0) < 300000)) return false;
            if (saved.map && mapName && saved.map !== mapName) return false;

            state.byName = saved.byName || {};
            Object.keys(state.byName).forEach((key) => {
                const row = state.byName[key];
                if (row) {
                    row._ret = 1;
                    row._q = 0;
                }
            });
            state.matchStartMs = saved.matchStartMs || Date.now();
            state.kotcScore = saved.kotcScore || { 1: 0, 2: 0 };
            state.everSeenTeams = !!saved.everSeenTeams;
            state.mode = saved.mode || "";
            state._snapMap = {};
            state._restoreDone = true;
            return true;
        } catch (err) {
            return false;
        }
    }

    function updateKotcScore() {
        if (!state.kotcScore) state.kotcScore = { 1: 0, 2: 0 };

        const read = (team) => {
            const ids = team === 1 ? ["captureScoreBlue", "teamScoreNum1"] : ["captureScoreRed", "teamScoreNum2"];
            for (const id of ids) {
                const el = byId(id);
                if (!el) continue;
                const value = parseInt((el.textContent || "").trim(), 10);
                if (Number.isFinite(value)) return value;
            }
            return 0;
        };

        const blue = read(1);
        const red = read(2);
        if (blue + red > 0) {
            state.kotcScore[1] = blue;
            state.kotcScore[2] = red;
        }
    }

    function resetMatchState(mapName, serverRegion, gameCode) {
        state.matchStartMs = Date.now();
        state.matchEndMs = 0;
        state.byName = {};
        state._snapMap = {};
        state.everSeenTeams = false;
        state.mode = "";
        state._modeTs = 0;
        state.kotcScore = { 1: 0, 2: 0 };
        state._seedQ = Date.now();
        state._syntheticCode = 0;
        state._pendReset = 0;
        state._pendUnlock = 0;
        state.map = mapName || state.map;
        state.server = serverRegion || state.server;
        state.gameCode = gameCode || "";
        state._autoShownForEmpty = false;
    }

    function updateStats() {
        if (document.hidden) return;

        updateKotcScore();

        const players = getPlayers();
        const hasPlayers = !!(players && players.some((p) => p));
        const hasPointerLock = !!document.pointerLockElement;

        if (hasPlayers) {
            state._lastEmptyN = state._emptyN || 0;
            state._emptyN = 0;
        } else {
            state._emptyN = (state._emptyN || 0) + 1;
        }

        if (state._prevHadPlayers && !hasPlayers) {
            state._readyForReset = true;
            if (state.snapshot.length) {
                state.matchEndMs = state.matchEndMs || Date.now();
                saveStats(true);
                if (config.autoShow && !state.userClosed && !state._autoShownForEmpty) {
                    state._autoShownForEmpty = true;
                    renderLiveStats();
                }
            }
        }

        if (hasPlayers) {
            const mapName = getMapName();
            const serverRegion = getServerRegion();
            const gameCode = window.__ssbGameCode || "";

            if (!(hasPointerLock && state.matchStartMs && state.inMatch && !state._readyForReset)) {
                if (!state.matchStartMs || state.gameCode !== gameCode || state._readyForReset) {
                    const codeChanged = state.gameCode !== gameCode;
                    const shouldReset =
                        codeChanged ||
                        (state._readyForReset && state.matchEndMs && Date.now() - state.matchEndMs > 300000) ||
                        (state._readyForReset && (state._lastEmptyN || 0) >= 2 && state.map && mapName && state.map !== mapName);
                    const restored = codeChanged && gameCode && restoreStats(gameCode, mapName);

                    state.matchEndMs = 0;
                    state.inMatch = true;
                    state.hadLock = false;
                    state.userClosed = false;

                    if (shouldReset && !restored) resetMatchState(mapName, serverRegion, gameCode);
                    else if (!state.matchStartMs) state.matchStartMs = Date.now();

                    state._readyForReset = false;
                    state.gameCode = gameCode;
                    state.map = mapName;
                    state.server = serverRegion;
                    state.mode = getMode();
                    state._autoShownForEmpty = false;
                }
            }

            if (hasPointerLock) {
                state.inMatch = true;
                state.hadLock = true;
                state.matchEndMs = 0;
            } else if (state.hadLock) {
                state.matchEndMs = Date.now();
                state.inMatch = false;
                state.hadLock = false;
            }
        }

        state._prevHadPlayers = hasPlayers;

        if (state.inMatch) {
            const mode = getMode();
            if (mode) {
                const rank = { king: 3, ctf: 2, team: 1, ffa: 0 };
                if ((rank[mode] || 0) >= (rank[state.mode] || 0)) state.mode = mode;
            }
            if (!state.map) state.map = getMapName();
            if (!state.server) state.server = getServerRegion();
        }

        if (players) {
            if (!state.map) state.map = getMapName();
            if (!state.server) state.server = getServerRegion();
            if (!state.byName) state.byName = {};

            if (state._seedQ && (document.pointerLockElement || Date.now() - state._seedQ > 60000)) state._seedQ = 0;

            const debug = getBool("tp-statsDebug", false);
            const debugLog = debug ? (...args) => {
                const log = window.__ssbStatsLog || (window.__ssbStatsLog = []);
                log.push(args.join(" "));
                if (log.length > 400) log.splice(0, 200);
                console.log("[SSB-STATS]", ...args);
            } : () => { };
            window.__ssbDlog = debug ? debugLog : null;

            const presentKeys = new Set();
            const rows = [];
            let dropVotes = 0;
            let totalVotes = 0;
            const voteSet = new Set();

            for (let slot = 0; slot < players.length; slot++) {
                const player = players[slot];
                if (!player || !player.stats) continue;

                const name = player.name || player.safeName || player.lw || "Player " + slot;
                const team = player.team || 0;
                if (team === 1 || team === 2) state.everSeenTeams = true;

                const rawKills = player.stats.kills | 0;
                const rawDeaths = player.stats.deaths | 0;
                const totalKills = player.totalKills | 0;
                const fallbackKey = name + String.fromCharCode(0) + slot;
                const baseRecord = state.byName[name];
                let key;

                if (baseRecord && baseRecord._slot === slot) key = name;
                else if (state.byName[fallbackKey]) key = fallbackKey;
                else if (baseRecord) {
                    const old = players[baseRecord._slot];
                    key = old && old.stats && (old.name || old.safeName || old.lw || "Player " + baseRecord._slot) === name ? fallbackKey : name;
                } else {
                    key = name;
                }

                presentKeys.add(key);
                const record = state.byName[key];
                // Vote against a STICKY peak (_hiK/_hiD), not _lastK/_lastD: the latter
                // are re-baselined to the current value every tick, so a real drop can
                // never persist across ticks. The sticky peak lets a genuine match-end
                // register on consecutive ticks while a 1-tick glitch does not.
                if (record && !voteSet.has(record) && !record._ret && !record._absentTs && (record._hiK > 0 || record._hiD > 0)) {
                    voteSet.add(record);
                    totalVotes++;
                    if (rawKills < record._hiK || rawDeaths < record._hiD) dropVotes++;
                }

                rows.push([key, record, slot, rawKills, rawDeaths, team, name, player, fallbackKey, totalKills]);
            }

            // A match ending zeroes everyone's kills; don't reset the live scoreboard right
            // then. Flush the finished match to history once, HOLD the display, and defer the
            // actual reset until the next match is really underway (you spawn back in =
            // pointer-lock returns after the end-screen unlock), or a 5-minute safety timeout.
            const locked = !!document.pointerLockElement;
            // Cooldown: don't re-arm a match-end save within 8s of a roll apply,
            // otherwise a transitional double-drop writes a junk 2-second match.
            // Debounce: mid-match, kills/deaths only rise, so a lone-tick drop of 2+
            // players is a data glitch, not a match end. Require the signal to persist
            // across 2 consecutive ticks before arming a reset (prevents mid-match wipes).
            // Require a MAJORITY of scoreboard players to drop (not just 2), so a
            // couple of glitching or rejoining players in a larger lobby can't trigger
            // a reset. A genuine new match/round zeroes everyone, easily clearing this.
            const dropThreshold = Math.max(2, Math.ceil(totalVotes / 2));
            const dropHot = !state._seedQ && dropVotes >= dropThreshold &&
                !(state._rollTs && Date.now() - state._rollTs < 8000);
            state._dropStreak = dropHot ? (state._dropStreak || 0) + 1 : 0;
            const rollSignal = state._dropStreak >= 2;
            if (state._pendReset && !locked) state._pendUnlock = 1;
            if (rollSignal && !state._pendReset) {
                debugLog("MATCH-END drops=" + dropVotes + "/" + totalVotes);
                try { saveStats(true); } catch (err) { }
                state._pendReset = Date.now();
                state._pendUnlock = locked ? 0 : 1;
            }
            const rolledOver = !!state._pendReset && ((state._pendUnlock && locked) || Date.now() - state._pendReset > 300000);
            if (rolledOver) {
                debugLog("ROLLOVER-APPLY");
                state.matchStartMs = Date.now();
                state.matchEndMs = 0;
                state.kotcScore = { 1: 0, 2: 0 };
                state._snapMap = {};
                state.mode = "";
                state._modeTs = 0;
                state.everSeenTeams = false;
                state._syntheticCode = 0;
                state._rollTs = Date.now();
                state._pendReset = 0;
                state._pendUnlock = 0;
                state.map = getMapName() || state.map;
                Object.keys(state.byName).forEach((key) => {
                    if (!presentKeys.has(key)) delete state.byName[key];
                });
            }

            const usedRecords = new Set();
            for (const row of rows) {
                let [key, record, slot, rawKills, rawDeaths, team, name, player, fallbackKey, totalKills] = row;
                if (record && usedRecords.has(record)) record = undefined;

                if (!record) {
                    const baseRecord = state.byName[name];
                    if (baseRecord && !usedRecords.has(baseRecord) && baseRecord._slot === slot) {
                        record = baseRecord;
                        key = name;
                    } else if (state.byName[fallbackKey] && !usedRecords.has(state.byName[fallbackKey])) {
                        record = state.byName[fallbackKey];
                        key = fallbackKey;
                    } else if (baseRecord && (usedRecords.has(baseRecord) || (() => {
                        const old = players[baseRecord._slot];
                        return old && old.stats && (old.name || old.safeName || old.lw || "Player " + baseRecord._slot) === name;
                    })())) {
                        key = fallbackKey;
                    } else if (baseRecord) {
                        record = baseRecord;
                        key = name;
                    }
                    presentKeys.add(key);
                }

                if (!record) {
                    debugLog("new " + name + " slot" + slot + " seed " + rawKills + "/" + rawDeaths + (state._seedQ ? " Q" : ""));
                    record = state.byName[key] = {
                        name,
                        team,
                        isMe: false,
                        kills: rawKills,
                        deaths: rawDeaths,
                        _lastK: rawKills,
                        _lastD: rawDeaths,
                        _lastTK: totalKills,
                        _hiK: rawKills,
                        _hiD: rawDeaths,
                        _slot: slot,
                        _q: state._seedQ ? 1 : 0
                    };
                }

                usedRecords.add(record);

                if (rolledOver) {
                    // Clean 0/0 baseline for the new match. The trailing block below
                    // rebaselines _lastK/_lastD to the current raw values, so future
                    // kills/deaths accumulate from now — a transitional frame (kills
                    // already zeroed, deaths not yet) can never leave stale deaths.
                    record.kills = 0;
                    record.deaths = 0;
                    record._lastTK = totalKills;
                    record._hiK = rawKills;
                    record._hiD = rawDeaths;
                    record._ret = 0;
                    record._q = 0;
                } else {
                    const gameKillDelta = rawKills - record._lastK;
                    let totalKillDelta = record._lastTK == null ? 0 : totalKills - record._lastTK;
                    if (totalKillDelta < 0 || totalKillDelta > 30) totalKillDelta = 0;

                    const positiveGameKills = gameKillDelta > 0 ? gameKillDelta : 0;
                    const positiveTotalKills = totalKillDelta > 0 ? totalKillDelta : 0;
                    const killsToAdd = positiveGameKills > positiveTotalKills ? positiveGameKills : positiveTotalKills;
                    const resetWindow = record._q || (state._rollTs && Date.now() - state._rollTs < 8000);

                    if (killsToAdd > 0) record.kills += killsToAdd;
                    else if (rawKills < record._lastK && resetWindow) record.kills = rawKills;

                    if (rawDeaths > record._lastD) record.deaths += rawDeaths - record._lastD;
                    else if (rawDeaths < record._lastD && resetWindow) record.deaths = rawDeaths;
                }

                record._ret = 0;
                if (record._q && !state._seedQ) record._q = 0;
                record._slot = slot;
                if (rawKills > (record._hiK || 0)) record._hiK = rawKills;
                if (rawDeaths > (record._hiD || 0)) record._hiD = rawDeaths;
                record._lastK = rawKills;
                record._lastD = rawDeaths;
                record._lastTK = totalKills;
                record.team = team;
                record.isMe =
                    (typeof window.myPlayerIdx === "number" && slot === window.myPlayerIdx) ||
                    (window.vueApp && window.vueApp.game && slot === window.vueApp.game.myPlayerIdx) ||
                    player.isLocalPlayer ||
                    player.me ||
                    player.isMe ||
                    (player.name && window.vueApp && window.vueApp.game && player.name === window.vueApp.game.myName) ||
                    record.isMe;

                if (record.isMe && state._meRec !== record) {
                    if (state._meRec && state._meRec.isMe) state._meRec.isMe = false;
                    state._meRec = record;
                    debugLog("me-row -> " + record.name + " slot" + slot);
                }
            }

            const now = Date.now();
            Object.keys(state.byName).forEach((key) => {
                const record = state.byName[key];
                if (presentKeys.has(key)) {
                    record._absentTs = 0;
                    return;
                }
                if (!record._absentTs) record._absentTs = now;
                if ((record._q || (!record.kills && !record.deaths)) && now - record._absentTs > 4000) {
                    delete state.byName[key];
                    if (state._snapMap) delete state._snapMap[key];
                }
            });

            state._snapMap = state._snapMap || {};
            let snapIndex = 0;
            state.snapshot = Object.keys(state.byName).map((key) => {
                const record = state.byName[key];
                const snap = state._snapMap[key] || (state._snapMap[key] = { id: snapIndex++ });
                snap.name = record.name;
                snap.team = record.team;
                snap.isMe = record.isMe;
                snap.kills = record.kills;
                snap.deaths = record.deaths;
                return snap;
            });
        }

        ensurePinnedStats();
        updateOpenLiveStats();
    }

    function ensurePinnedStats() {
        if (!config.pinned) {
            if (pinnedCard) {
                pinnedCard.remove();
                pinnedCard = null;
            }
            return;
        }

        if (document.pointerLockElement) return;

        const weaponSelect = qs(".pause-game-weapon-select");
        if (!pinnedCard) {
            pinnedCard = document.createElement("div");
            pinnedCard.id = "ssb-pinned-stats";
            pinnedCard.innerHTML = [
                '<div class="ssb-pinned-title">MATCH STATS</div>',
                '<div class="ssb-pinned-content">',
                '<div><span>Kills</span><b data-k>0</b></div>',
                '<div><span>Deaths</span><b data-d>0</b></div>',
                '<div><span>KDR</span><b data-r>0.00</b></div>',
                '</div>'
            ].join("");
        }

        if (weaponSelect) {
            const anchor = weaponSelect.closest(".ss_box") || weaponSelect.closest(".pause-game-container") || weaponSelect.parentNode;
            if (anchor && anchor.parentNode && pinnedCard.parentNode !== anchor.parentNode) {
                anchor.parentNode.insertBefore(pinnedCard, anchor);
            }
        }

        pinnedCard.style.display = weaponSelect ? "flex" : "none";
        const me = (state.snapshot || []).find((p) => p.isMe) || { kills: 0, deaths: 0 };
        pinnedCard.querySelector("[data-k]").textContent = String(me.kills || 0);
        pinnedCard.querySelector("[data-d]").textContent = String(me.deaths || 0);
        pinnedCard.querySelector("[data-r]").textContent = ((me.kills || 0) / Math.max(1, me.deaths || 0)).toFixed(2);
    }

    function ensureStatsStyle() {
        if (byId("ssb-stats-style")) return;
        const style = document.createElement("style");
        style.id = "ssb-stats-style";
        style.textContent = `
            #ssb-stats-overlay {
                position: fixed;
                inset: 0;
                z-index: 2147483646;
                display: none;
                align-items: center;
                justify-content: center;
                background: rgba(13, 61, 79, 0.55);
                font-family: inherit;
            }
            #ssb-stats-overlay.open { display: flex; }
            #ssb-stats-panel {
                width: fit-content;
                min-width: 640px;
                max-width: 900px;
                max-height: 92vh;
                overflow: auto;
                padding: 20px 22px;
                background: linear-gradient(180deg, #6cc5d6 0%, #4ba9bc 100%);
                border: 3px solid #216a80;
                border-radius: 14px;
                color: #0d3d4f;
                box-shadow: 0 10px 50px rgba(0, 0, 0, 0.5);
                font-size: 14px;
                letter-spacing: normal;
                word-spacing: normal;
                font-variant-ligatures: none;
            }
            #ssb-stats-panel * {
                font-size: inherit;
                letter-spacing: normal !important;
                word-spacing: normal !important;
            }
            #ssb-stats-panel .ssb-head {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                gap: 10px;
                margin-bottom: 18px;
                padding-bottom: 14px;
                border-bottom: 2px solid rgba(33, 106, 128, 0.3);
            }
            #ssb-stats-panel .ssb-meta {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                gap: 6px;
                min-width: 0;
                color: #216a80;
                font-size: 12px;
                font-weight: 600;
            }
            #ssb-stats-panel .ssb-meta-row {
                display: contents;
            }
            #ssb-stats-panel .ssb-meta .ssb-bold {
                color: #0d3d4f;
                font-size: 15px;
                font-weight: 900;
            }
            #ssb-stats-panel .ssb-chip {
                display: inline-flex;
                align-items: center;
                padding: 5px 11px;
                border: 2px solid #b0d8e8;
                border-radius: 999px;
                background: rgba(255, 255, 255, 0.3);
                color: #216a80;
                font-size: 12px;
                font-weight: 700;
                line-height: 1;
                white-space: nowrap;
            }
            #ssb-stats-panel .ssb-chip-strong {
                color: #0d3d4f;
                font-weight: 900;
            }
            #ssb-stats-panel .ssb-code-reveal { display: none; }
            #ssb-stats-panel .ssb-chip-strong:hover .ssb-code-reveal { display: inline; }
            #ssb-stats-panel .ssb-dur:empty { display: none; }
            #ssb-stats-panel .ssb-actions {
                display: flex;
                gap: 8px;
                flex-shrink: 0;
                justify-content: flex-end;
            }
            #ssb-stats-panel .ssb-btn {
                padding: 8px 14px;
                border: 2px solid #b0d8e8;
                border-radius: 8px;
                background: rgba(255, 255, 255, 0.3);
                color: #216a80;
                font-family: inherit;
                font-size: 13px;
                font-weight: 700;
                cursor: pointer;
                transition: all 0.15s;
            }
            #ssb-stats-panel .ssb-btn:hover {
                border-color: #216a80;
                background: rgba(255, 255, 255, 0.55);
                color: #0d3d4f;
            }
            #ssb-stats-panel .ssb-btn.on {
                border-color: #216a80;
                background: rgba(255, 255, 255, 0.72);
                color: #0d3d4f;
            }
            #ssb-stats-panel .ssb-btn.ssb-close {
                border-color: #c0392b;
                color: #c0392b;
            }
            #ssb-stats-panel .ssb-btn.ssb-close:hover {
                background: rgba(192, 57, 43, 0.15);
                color: #a32a1d;
            }
            #ssb-stats-panel .ssb-icon-btn {
                padding: 8px 10px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
            }
            #ssb-stats-panel .ssb-icon-btn svg {
                display: block;
            }
            #ssb-stats-panel .ssb-btn.ssb-reset {
                border-color: #e0a020;
                color: #b8860b;
            }
            #ssb-stats-panel .ssb-btn.ssb-reset:hover {
                background: rgba(224, 160, 32, 0.15);
                color: #8a6508;
            }
            #ssb-stats-panel .ssb-cols {
                display: flex;
                align-items: flex-start;
                gap: 16px;
            }
            #ssb-stats-panel .ssb-team {
                flex: 1;
                min-width: 0;
                overflow: hidden;
                border: 2px solid #b0d8e8;
                border-radius: 10px;
                background: rgba(255, 255, 255, 0.22);
            }
            #ssb-stats-panel .ssb-team-hdr {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 12px 14px;
                font-size: 18px;
                font-weight: 900;
                letter-spacing: 1px;
                color: #fff;
            }
            #ssb-stats-panel .ssb-team-blue .ssb-team-hdr { background: linear-gradient(135deg, rgba(33, 106, 128, 0.85), rgba(33, 106, 128, 0.55)); }
            #ssb-stats-panel .ssb-team-red .ssb-team-hdr { background: linear-gradient(135deg, rgba(192, 57, 43, 0.85), rgba(192, 57, 43, 0.55)); }
            #ssb-stats-panel .ssb-team-ffa .ssb-team-hdr { background: linear-gradient(135deg, rgba(13, 61, 79, 0.85), rgba(13, 61, 79, 0.55)); }
            #ssb-stats-panel table {
                width: 100%;
                border-collapse: collapse;
                table-layout: fixed;
            }
            #ssb-stats-panel thead th {
                width: 74px;
                padding: 7px 10px;
                background: rgba(176, 216, 232, 0.4);
                color: #216a80;
                font-size: 11px;
                font-weight: 800;
                text-align: center;
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }
            #ssb-stats-panel thead th:first-child {
                width: auto;
                text-align: left;
            }
            #ssb-stats-panel tbody td {
                padding: 7px 10px;
                border-top: 1px solid rgba(33, 106, 128, 0.12);
                color: #0d3d4f;
                font-size: 14px;
                font-weight: 600;
                line-height: 1.35;
                text-align: center;
                font-variant-numeric: tabular-nums;
            }
            #ssb-stats-panel tbody td:first-child {
                overflow: hidden;
                text-align: left;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-weight: 700;
            }
            #ssb-stats-panel tbody tr:nth-child(even) td { background: rgba(255, 255, 255, 0.10); }
            #ssb-stats-panel tbody tr.ssb-me td { background: rgba(45, 184, 212, 0.18); }
            #ssb-stats-panel .ssb-team-blue tbody td:first-child { color: #216a80; }
            #ssb-stats-panel .ssb-team-red tbody td:first-child { color: #a32a1d; }
            #ssb-stats-panel .ssb-hist-list {
                display: flex;
                flex-direction: column;
                gap: 6px;
                max-height: 62vh;
                overflow: auto;
            }
            #ssb-stats-panel .ssb-hist-row {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 12px;
                padding: 10px 14px;
                border: 2px solid #b0d8e8;
                border-radius: 8px;
                background: rgba(255, 255, 255, 0.22);
                cursor: pointer;
                transition: all 0.12s;
            }
            #ssb-stats-panel .ssb-hist-row:hover {
                border-color: #216a80;
                background: rgba(255, 255, 255, 0.45);
            }
            #ssb-stats-panel .ssb-hist-main { flex: 1; min-width: 0; }
            #ssb-stats-panel .ssb-hist-code {
                display: block;
                color: #0d3d4f;
                font-size: 15px;
                font-weight: 900;
            }
            #ssb-stats-panel .ssb-hist-meta {
                color: #216a80;
                font-size: 12px;
                font-weight: 600;
            }
            #ssb-stats-panel .ssb-hist-side {
                flex-shrink: 0;
                text-align: right;
            }
            #ssb-stats-panel .ssb-hist-kd {
                display: block;
                color: #0d3d4f;
                font-size: 15px;
                font-weight: 900;
            }
            #ssb-stats-panel .ssb-hist-time {
                color: #216a80;
                font-size: 11px;
                font-weight: 600;
            }
            #ssb-stats-panel .ssb-hist-actions {
                display: flex;
                gap: 6px;
                flex-shrink: 0;
                opacity: 0;
                transition: opacity 0.12s;
            }
            #ssb-stats-panel .ssb-hist-row:hover .ssb-hist-actions { opacity: 1; }
            #ssb-stats-panel .ssb-hist-abtn {
                width: 30px;
                height: 30px;
                padding: 0;
                border: none;
                border-radius: 7px;
                background: #0E7697;
                color: #fff;
                cursor: pointer;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                transition: background 0.1s;
            }
            #ssb-stats-panel .ssb-hist-abtn:hover { background: #2db8d4; }
            #ssb-stats-panel .ssb-hist-abtn.danger { background: #d82727; }
            #ssb-stats-panel .ssb-hist-abtn.danger:hover { background: #ec4343; }
            #ssb-stats-panel .ssb-hist-abtn svg {
                display: block;
                pointer-events: none;
            }
            #ssb-stats-panel .ssb-empty {
                padding: 20px;
                color: #216a80;
                font-weight: 800;
            }
            #ssb-pinned-stats {
                width: 100%;
                margin-bottom: 15px;
                overflow: hidden;
                display: flex;
                flex-direction: column;
                border: 5px solid var(--ss-blue4, #1b6e82);
                border-radius: 12px;
                background: var(--ss-blue1, linear-gradient(180deg, #99def2 0%, #b5e8f7 100%));
                color: #fff;
                box-sizing: border-box;
            }
            #ssb-pinned-stats .ssb-pinned-title {
                margin: 0;
                padding: 10px;
                background: var(--ss-blue3, #04a2d1);
                font-family: "Lilita One", var(--ss-font-secondary), cursive, sans-serif;
                font-size: 18px;
                text-align: center;
                text-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
            }
            #ssb-pinned-stats .ssb-pinned-content {
                display: flex;
                align-items: center;
                justify-content: space-evenly;
                padding: 14px;
            }
            #ssb-pinned-stats .ssb-pinned-content div {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            #ssb-pinned-stats .ssb-pinned-content span {
                color: var(--ss-blue4, #1b6e82);
                font-family: "Lilita One", var(--ss-font-secondary), cursive, sans-serif;
                font-size: 12px;
                font-weight: 900;
                text-transform: uppercase;
            }
            #ssb-pinned-stats .ssb-pinned-content b {
                font-family: "Nunito", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
                font-size: 21px;
                font-weight: 500;
                color: #fff;
                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.22);
            }
            #ssb-pinned-stats [data-d] { color: #ff5a5a !important; }
            #ssb-pinned-stats [data-r] { color: var(--ss-yolk, #ffc900) !important; }
            @media (max-width: 720px) {
                #ssb-stats-panel .ssb-head,
                #ssb-stats-panel .ssb-cols,
                #ssb-stats-panel .ssb-hist-row {
                    flex-direction: column;
                    align-items: stretch;
                }
                #ssb-stats-panel .ssb-actions,
                #ssb-stats-panel .ssb-hist-side {
                    justify-content: flex-start;
                    text-align: left;
                }
                #ssb-stats-panel thead th { width: 52px; }
                #ssb-stats-panel tbody td,
                #ssb-stats-panel thead th { padding: 7px 6px; }
            }
        `;
        (document.head || document.documentElement).appendChild(style);
    }

    function ensureOverlay() {
        ensureStatsStyle();
        let overlay = byId("ssb-stats-overlay");
        if (!overlay) {
            overlay = document.createElement("div");
            overlay.id = "ssb-stats-overlay";
            overlay.addEventListener("click", (event) => {
                if (event.target === overlay) closeStats();
            });
            (document.body || document.documentElement).appendChild(overlay);
        }
        return overlay;
    }

    function sortedTeams(players) {
        const teams = { 1: [], 2: [], 0: [] };
        players.forEach((player) => {
            const bucket = player.team === 1 || player.team === 2 ? player.team : 0;
            teams[bucket].push(player);
        });
        Object.keys(teams).forEach((key) => {
            teams[key].sort((a, b) => (b.kills - a.kills) || (a.deaths - b.deaths) || String(a.name).localeCompare(String(b.name)));
        });
        return teams;
    }

    function teamTable(title, rows, className, mode, team) {
        const score = mode === "king" && (team === 1 || team === 2)
            ? '<span>' + (state.kotcScore ? (state.kotcScore[team] || 0) : 0) + '</span>'
            : "";
        const body = rows.map((row) => {
            const kdr = (row.kills / Math.max(1, row.deaths)).toFixed(2);
            return [
                '<tr class="' + (row.isMe ? "ssb-me" : "") + '">',
                '<td>' + escapeHtml(row.name) + '</td>',
                '<td>' + (row.kills || 0) + '</td>',
                '<td>' + (row.deaths || 0) + '</td>',
                '<td>' + kdr + '</td>',
                '</tr>'
            ].join("");
        }).join("");

        return [
            '<div class="ssb-team ' + className + '">',
            '<div class="ssb-team-hdr"><span>' + escapeHtml(title) + '</span>' + score + '</div>',
            '<table>',
            '<thead><tr><th>Player</th><th>K</th><th>D</th><th>KDR</th></tr></thead>',
            '<tbody>' + body + '</tbody>',
            '</table>',
            '</div>'
        ].join("");
    }

    const ICONS = {
        reset: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v6h6"/><path d="M3.5 8a9 9 0 1 0 2.3-3.3L3 8"/></svg>',
        copy: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
        download: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
        history: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
        close: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
        back: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>',
        trash: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>',
        rename: '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zm14.71-7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>',
        delete: '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M9 3v1H4v2h16V4h-5V3H9zM6 7l1 13h10l1-13H6z"/></svg>'
    };

    function iconButton(action, title, iconName, extraClass) {
        return '<button class="ssb-btn ssb-icon-btn ' + (extraClass || "") + '" data-act="' + action + '" title="' + escapeHtml(title) + '">' + ICONS[iconName] + '</button>';
    }

    function renderLiveStats() {
        const overlay = ensureOverlay();
        const players = state.snapshot || [];
        const teams = sortedTeams(players);
        const mode = state.mode || getMode();
        let columns;
        if (teams[1].length || teams[2].length) {
            columns = (teams[1].length ? teamTable("BLUE TEAM", teams[1], "ssb-team-blue", mode, 1) : "") +
                (teams[2].length ? teamTable("RED TEAM", teams[2], "ssb-team-red", mode, 2) : "");
        } else if (teams[0].length) {
            columns = teamTable("PLAYERS", teams[0], "ssb-team-ffa", mode, 0);
        } else {
            columns = '<div style="padding:20px;color:#9ec3d2;">No player data yet - fire up a match first.</div>';
        }
        const started = state.matchStartMs || Date.now();
        const nowText = formatDateTime(Date.now());
        const duration = formatDuration(Math.floor(((state.matchEndMs || Date.now()) - started) / 1000));
        const meta = '<div class="ssb-meta-row">' +
            '<span class="ssb-chip ssb-chip-strong">' + escapeHtml(nowText.slice(11)) + '</span>' +
            '<span class="ssb-chip ssb-chip-strong">' + escapeHtml(nowText.slice(0, 10)) + '</span>' +
            '</div><div class="ssb-meta-row">' +
            '<span class="ssb-chip">' + escapeHtml(state.map || "-") + '</span>' +
            '<span class="ssb-chip">' + escapeHtml(formatServer(state.server)) + '</span>' +
            '<span class="ssb-chip">' + escapeHtml(formatMode(mode)) + '</span>' +
            '<span class="ssb-chip ssb-dur">' + escapeHtml(duration) + '</span>' +
            '</div>';

        overlay.innerHTML = [
            '<div id="ssb-stats-panel">',
            '<div class="ssb-head">',
            '<div class="ssb-meta">' + meta + '</div>',
            '<div class="ssb-actions">',
            iconButton("reset", "Reset match stats", "reset", "ssb-reset"),
            iconButton("copy", "Copy as Image", "copy"),
            iconButton("download", "Download PNG", "download"),
            iconButton("history", "History", "history"),
            iconButton("close", "Close", "close", "ssb-close"),
            '</div>',
            '</div>',
            '<div class="ssb-cols">' + columns + '</div>',
            '</div>'
        ].join("");

        overlay.classList.add("open");
        wireLiveActions(overlay);
        startLiveDurationTimer();
    }

    function wireLiveActions(overlay) {
        const handlers = {
            close: closeStats,
            copy: copyStatsImage,
            download: downloadStatsImage,
            history: renderHistory,
            reset: resetCurrentStats,
            pin: () => {
                config.pinned = !config.pinned;
                setBool("tp-statsPinned", config.pinned);
                playUi();
                ensurePinnedStats();
                renderLiveStats();
            },
            auto: () => {
                config.autoShow = !config.autoShow;
                setBool("tp-statsAutoShow", config.autoShow);
                playUi();
                renderLiveStats();
            }
        };

        overlay.querySelectorAll("[data-act]").forEach((button) => {
            const action = button.getAttribute("data-act");
            if (handlers[action]) button.onclick = handlers[action];
        });
    }

    function updateOpenLiveStats() {
        const overlay = byId("ssb-stats-overlay");
        if (!overlay || !overlay.classList.contains("open")) return;
        const panel = byId("ssb-stats-panel");
        if (!panel || panel.querySelector(".ssb-hist-list")) return;
        const duration = panel.querySelector(".ssb-dur");
        if (duration && state.matchStartMs) {
            duration.textContent = formatDuration(Math.floor(((state.matchEndMs || Date.now()) - state.matchStartMs) / 1000));
        }
    }

    function startLiveDurationTimer() {
        if (liveDurationTimer) clearInterval(liveDurationTimer);
        liveDurationTimer = setInterval(() => {
            const overlay = byId("ssb-stats-overlay");
            if (!overlay || !overlay.classList.contains("open")) {
                clearInterval(liveDurationTimer);
                liveDurationTimer = null;
                return;
            }
            updateOpenLiveStats();
        }, 1000);
    }

    function closeStats() {
        state.userClosed = true;
        const overlay = byId("ssb-stats-overlay");
        if (overlay) overlay.classList.remove("open");
        if (liveDurationTimer) {
            clearInterval(liveDurationTimer);
            liveDurationTimer = null;
        }
    }

    function resetCurrentStats() {
        if (!confirm("Reset tracked match stats for this session?")) return;
        const players = getPlayers() || [];
        state.byName = {};
        state._snapMap = {};
        state.snapshot = [];

        for (let slot = 0; slot < players.length; slot++) {
            const player = players[slot];
            if (!player || !player.stats) continue;
            const name = player.name || player.safeName || player.lw || "Player " + slot;
            const key = state.byName[name] ? name + String.fromCharCode(0) + slot : name;
            state.byName[key] = {
                name,
                team: player.team || 0,
                isMe: false,
                kills: 0,
                deaths: 0,
                _lastK: player.stats.kills | 0,
                _lastD: player.stats.deaths | 0,
                _lastTK: player.totalKills | 0,
                _slot: slot
            };
        }

        state.matchStartMs = Date.now();
        state.matchEndMs = 0;
        state.kotcScore = { 1: 0, 2: 0 };
        playUi();
        updateStats();
        renderLiveStats();
    }

    function readHistory() {
        try {
            const value = JSON.parse(localStorage.getItem("tp-statsHistory") || "[]");
            return Array.isArray(value) ? value : [];
        } catch (err) {
            return [];
        }
    }

    function writeHistory(history) {
        try {
            localStorage.setItem("tp-statsHistory", JSON.stringify(history));
        } catch (err) { }
    }

    function renderHistory() {
        const overlay = ensureOverlay();
        const history = readHistory();
        let lifetimeKills = 0;
        let lifetimeDeaths = 0;

        history.forEach((entry) => {
            const me = (entry.players || []).find((p) => p.isMe) || {};
            lifetimeKills += me.kills || 0;
            lifetimeDeaths += me.deaths || 0;
        });

        const rows = history.map((entry, index) => {
            const me = (entry.players || []).find((p) => p.isMe) || { kills: 0, deaths: 0 };
            const duration = entry.startMs && entry.endMs ? formatDuration(Math.floor((entry.endMs - entry.startMs) / 1000)) : "";
            const label = entry.label || entry.code || "-";
            return [
                '<div class="ssb-hist-row" data-index="' + index + '">',
                '<div class="ssb-hist-main">',
                '<span class="ssb-hist-code">' + escapeHtml(label) + '</span>',
                '<span class="ssb-hist-meta">' + (entry.label ? escapeHtml(entry.code || "-") + " &middot; " : "") + escapeHtml(entry.map || "-") + " &middot; " + escapeHtml(shortMode(entry.mode)) + " &middot; " + escapeHtml(formatServer(entry.server)) + '</span>',
                '</div>',
                '<div class="ssb-hist-side">',
                '<span class="ssb-hist-kd">' + (me.kills || 0) + " / " + (me.deaths || 0) + '</span>',
                '<span class="ssb-hist-time">' + escapeHtml(formatDateTime(entry.startMs)) + (duration ? " &middot; " + escapeHtml(duration) : "") + '</span>',
                '</div>',
                '<div class="ssb-hist-actions">',
                '<button class="ssb-hist-abtn" data-hact="rename" data-index="' + index + '" title="Rename">' + ICONS.rename + '</button>',
                '<button class="ssb-hist-abtn danger" data-hact="delete" data-index="' + index + '" title="Delete">' + ICONS.delete + '</button>',
                '</div>',
                '</div>'
            ].join("");
        }).join("") || '<div class="ssb-empty">No games recorded yet.</div>';

        overlay.innerHTML = [
            '<div id="ssb-stats-panel">',
            '<div class="ssb-head">',
            '<div class="ssb-meta"><span class="ssb-bold">Match History</span> | ' + history.length + ' games | ' + lifetimeKills + ' / ' + lifetimeDeaths + ' | KDR ' + (lifetimeKills / Math.max(1, lifetimeDeaths)).toFixed(2) + '</div>',
            '<div class="ssb-actions">',
            iconButton("live", "Back to Live", "back"),
            iconButton("clear", "Clear all history", "trash", "ssb-reset"),
            iconButton("close", "Close", "close", "ssb-close"),
            '</div>',
            '</div>',
            '<div class="ssb-hist-list">' + rows + '</div>',
            '</div>'
        ].join("");

        overlay.classList.add("open");
        overlay.querySelector('[data-act="close"]').onclick = closeStats;
        overlay.querySelector('[data-act="live"]').onclick = renderLiveStats;
        overlay.querySelector('[data-act="clear"]').onclick = () => {
            if (confirm("Clear all match history?")) {
                localStorage.removeItem("tp-statsHistory");
                renderHistory();
            }
        };
        overlay.querySelectorAll(".ssb-hist-row").forEach((row) => {
            row.onclick = () => renderHistoryDetail(history[Number(row.getAttribute("data-index"))]);
        });
        overlay.querySelectorAll(".ssb-hist-abtn").forEach((button) => {
            button.onclick = (event) => {
                event.stopPropagation();
                const index = Number(button.getAttribute("data-index"));
                const action = button.getAttribute("data-hact");
                const next = readHistory();
                if (!next[index]) return;

                if (action === "delete") {
                    if (confirm("Delete this match from history?")) {
                        next.splice(index, 1);
                        writeHistory(next);
                        renderHistory();
                    }
                } else {
                    let name = prompt("Rename this match (leave blank to restore the game code):", next[index].label || next[index].code || "");
                    if (name !== null) {
                        name = name.trim();
                        if (name) next[index].label = name;
                        else delete next[index].label;
                        writeHistory(next);
                        renderHistory();
                    }
                }
            };
        });
    }

    function renderHistoryDetail(entry) {
        if (!entry) return;
        const overlay = ensureOverlay();
        const teams = sortedTeams(entry.players || []);
        const savedScore = state.kotcScore;
        state.kotcScore = entry.kotc || { 1: 0, 2: 0 };

        let columns;
        if (teams[1].length || teams[2].length) {
            columns = (teams[1].length ? teamTable("BLUE TEAM", teams[1], "ssb-team-blue", entry.mode, 1) : "") +
                (teams[2].length ? teamTable("RED TEAM", teams[2], "ssb-team-red", entry.mode, 2) : "");
        } else {
            columns = teams[0].length ? teamTable("PLAYERS", teams[0], "ssb-team-ffa", entry.mode, 0) : '<div class="ssb-empty">No player data.</div>';
        }

        state.kotcScore = savedScore;

        const dateTime = formatDateTime(entry.startMs);
        const duration = entry.startMs && entry.endMs ? formatDuration(Math.floor((entry.endMs - entry.startMs) / 1000)) : "";
        const code = entry.label || entry.code || "-";
        const codeReveal = entry.label ? '<span class="ssb-code-reveal"> &middot; ' + escapeHtml(entry.code || "-") + '</span>' : "";
        const meta = '<div class="ssb-meta-row">' +
            '<span class="ssb-chip ssb-chip-strong">' + escapeHtml(code) + codeReveal + '</span>' +
            '<span class="ssb-chip ssb-chip-strong">' + escapeHtml(dateTime.slice(11)) + '</span>' +
            '<span class="ssb-chip ssb-chip-strong">' + escapeHtml(dateTime.slice(0, 10)) + '</span>' +
            '</div><div class="ssb-meta-row">' +
            '<span class="ssb-chip">' + escapeHtml(entry.map || "-") + '</span>' +
            '<span class="ssb-chip">' + escapeHtml(formatServer(entry.server)) + '</span>' +
            '<span class="ssb-chip">' + escapeHtml(formatMode(entry.mode)) + '</span>' +
            (duration ? '<span class="ssb-chip ssb-dur">' + escapeHtml(duration) + '</span>' : "") +
            '</div>';

        overlay.innerHTML = [
            '<div id="ssb-stats-panel">',
            '<div class="ssb-head">',
            '<div class="ssb-meta">' + meta + '</div>',
            '<div class="ssb-actions">',
            iconButton("history", "Back to History", "back"),
            iconButton("copy", "Copy as Image", "copy"),
            iconButton("download", "Download PNG", "download"),
            iconButton("close", "Close", "close", "ssb-close"),
            '</div>',
            '</div>',
            '<div class="ssb-cols">' + columns + '</div>',
            '</div>'
        ].join("");

        overlay.classList.add("open");
        overlay.querySelector('[data-act="history"]').onclick = renderHistory;
        overlay.querySelector('[data-act="copy"]').onclick = copyStatsImage;
        overlay.querySelector('[data-act="download"]').onclick = downloadStatsImage;
        overlay.querySelector('[data-act="close"]').onclick = closeStats;
    }

    function loadFontCss() {
        if (fontCssPromise) return fontCssPromise;
        fontCssPromise = fetch("https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&family=Lilita+One&display=swap")
            .then((response) => response.text())
            .then((css) => {
                const urls = [...new Set([...css.matchAll(/url\((https:[^)]+)\)/g)].map((match) => match[1]))];
                return Promise.all(urls.map((url) => fetch(url)
                    .then((response) => response.blob())
                    .then((blob) => new Promise((resolve) => {
                        const reader = new FileReader();
                        reader.onload = () => resolve([url, reader.result]);
                        reader.readAsDataURL(blob);
                    })))).then((pairs) => {
                        pairs.forEach(([url, data]) => {
                            css = css.split(url).join(data);
                        });
                        return css;
                    });
            })
            .catch((err) => {
                console.warn("[Stats Only] Font embed failed, image export may use fallback fonts:", err);
                fontCssPromise = null;
                return "";
            });
        return fontCssPromise;
    }

    function loadHtmlToImage() {
        if (typeof window.htmlToImage === "object") return Promise.resolve();
        if (imageLoadPromise) return imageLoadPromise;

        imageLoadPromise = new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = "https://cdnjs.cloudflare.com/ajax/libs/html-to-image/1.11.11/html-to-image.min.js";
            script.onload = resolve;
            script.onerror = () => {
                imageLoadPromise = null;
                reject(new Error("html-to-image failed to load"));
            };
            document.head.appendChild(script);
        });

        return imageLoadPromise;
    }

    function captureStatsPanel(callback) {
        const panel = byId("ssb-stats-panel");
        if (!panel) return;

        loadHtmlToImage().then(() => {
            if (typeof window.htmlToImage !== "object") {
                alert("Image export failed to load. Check your network connection.");
                return;
            }

            const actions = panel.querySelector(".ssb-actions");
            const oldOpacity = actions ? actions.style.opacity : "";
            const oldStyle = panel.style.cssText;
            if (actions) actions.style.opacity = "0";
            panel.style.setProperty("zoom", "1", "important");
            panel.style.setProperty("max-height", "none", "important");
            panel.style.setProperty("overflow", "visible", "important");

            const restore = () => {
                if (actions) actions.style.opacity = oldOpacity;
                panel.style.cssText = oldStyle;
            };

            loadFontCss()
                .then((fontEmbedCSS) => window.htmlToImage.toBlob(panel, {
                    backgroundColor: null,
                    pixelRatio: 2,
                    width: panel.scrollWidth,
                    height: panel.scrollHeight,
                    ...(fontEmbedCSS ? { fontEmbedCSS } : {})
                }))
                .then((blob) => {
                    restore();
                    callback(blob);
                })
                .catch((err) => {
                    restore();
                    console.error("[Stats Only] Stats screenshot failed:", err);
                    alert("Stats image export failed: " + err.message);
                });
        }).catch((err) => alert(err.message));
    }

    function copyStatsImage() {
        captureStatsPanel((blob) => {
            if (!blob) return;
            try {
                navigator.clipboard.write([new ClipboardItem({ "image/png": blob })])
                    .then(() => playUi())
                    .catch((err) => alert("Clipboard write failed: " + err.message));
            } catch (err) {
                alert("Clipboard image copy is not available in this browser.");
            }
        });
    }

    function downloadStatsImage() {
        captureStatsPanel((blob) => {
            if (!blob) return;
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "shellshockers-stats-" + Date.now() + ".png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(link.href);
            playUi();
        });
    }

    function toggleStats() {
        const overlay = byId("ssb-stats-overlay");
        if (overlay && overlay.classList.contains("open")) closeStats();
        else {
            state.userClosed = false;
            renderLiveStats();
        }
    }

    function isStatsHotkey(event) {
        const key = event.key || "";
        const saved = config.hotkey || "";
        return key === "/" ||
            event.code === "Slash" ||
            key === "Tab" ||
            (!!saved && key.toLowerCase() === saved.toLowerCase());
    }

    document.addEventListener("keydown", (event) => {
        const active = document.activeElement;
        if (active && (/^(INPUT|TEXTAREA|SELECT)$/i.test(active.tagName) || active.isContentEditable)) return;

        if (event.key === "Escape") {
            const overlay = byId("ssb-stats-overlay");
            if (overlay && overlay.classList.contains("open")) closeStats();
            return;
        }

        if (isStatsHotkey(event)) {
            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();
            toggleStats();
        }
    }, true);

    window.addEventListener("beforeunload", () => saveStats(true));
    window.addEventListener("pagehide", () => saveStats(true));
    document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "hidden") saveStats(true);
    });

    installGameScriptPatch();
    installWebSocketPatch();
    setInterval(updateStats, 1000);
    setInterval(() => saveStats(false), 3000);
    setInterval(ensurePinnedStats, 1200);

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => {
            ensureStatsStyle();
            ensurePinnedStats();
        });
    } else {
        ensureStatsStyle();
        ensurePinnedStats();
    }
})();
