# Shell Shockers — Stats Mod

> A lightweight, standalone match‑stats tracker for [Shell Shockers](https://shellshock.io) — live K / D / KDR, a pinned respawn card, saved match history, and one‑click stats image export.

[![INSTALL](https://img.shields.io/badge/INSTALL-one--click-brightgreen?style=for-the-badge)](https://raw.githubusercontent.com/Virojet/Shell-Shockers-Stats-Mod/main/Shell-Shockers-Stats-Mod.user.js)
&nbsp;
[![Version](https://img.shields.io/badge/version-1.0.1-black?style=for-the-badge)](./Shell-Shockers-Stats-Mod.user.js)
[![License](https://img.shields.io/badge/license-MIT-lightgrey?style=for-the-badge)](./LICENSE)

This is the stats tracker from **[Better HUD](https://github.com/Virojet/Shell-Shockers-Better-Hud-Mod)**, pulled out into its own small userscript for people who only want stats — no crosshair editor, no performance panel, nothing else.

---

## Install in 30 seconds

| Step | Action |
|:---:|---|
| **1** | Add a userscript manager — **[Tampermonkey](https://www.tampermonkey.net/)** (recommended) or [Violentmonkey](https://violentmonkey.github.io/) |
| **2** | **[Click here to install](https://raw.githubusercontent.com/Virojet/Shell-Shockers-Stats-Mod/main/Shell-Shockers-Stats-Mod.user.js)** — the install dialog opens automatically |
| **3** | Open **[shellshock.io](https://shellshock.io)** and play — the stats overlay appears at the end of each match |

Updates install automatically from then on.

> [!NOTE]
> Some userscript managers require **Developer Mode** (or an "Allow User Scripts" toggle) to be enabled before custom scripts will run. If the install doesn't take, enable it in your browser's Extensions page and try again.

---

## What it does

- **Live session stats** — your Kills / Deaths / KDR tracked as you play, including melee and grenade kills.
- **End‑of‑match overlay** — a full scoreboard pops up when a match ends.
- **Pinned respawn card** — a compact K / D / KDR readout on the respawn screen (optional).
- **Match History** — recent matches are saved locally so you can revisit the scoreboard, map, mode, server, and duration.
- **Image export** — **Copy** or **Download** any scoreboard as an image, rendered in the game font.
- **Accurate by design** — fresh matches start at 0, leave‑and‑rejoin keeps your totals, duplicate/blank names get their own rows, and a match‑end never wipes your live stats mid‑game.

Everything is stored locally in your browser (`localStorage`). Nothing is uploaded anywhere.

---

## Compatibility

Works on **shellshock.io** and its mirror domains (`algebra.best`, `deadlyegg.com`, `eggcombat.com`, and many more — see the `@match` list in the script).

---

## Credits

Made by **Virojet** — Shell Shockers gameplay, montages, and mod content.
[![YouTube](https://img.shields.io/badge/YouTube-%40subtovirojet-red?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@subtovirojet)

## License

[MIT](./LICENSE) © ViroGear.

A client‑side, cosmetic quality‑of‑life mod. It does **not** modify game logic or interact with the server beyond what the official client does. Use at your own discretion — moderators may still act against use of any third‑party scripts.
