<div align="center">

<img src="icon.svg" width="96" alt="Stats Mod icon">

# Shell Shockers Stats Mod

**Match History for Shell Shockers: your kills, deaths and KDR from every match, a live scoreboard, and pictures to share.**

[![Install](https://img.shields.io/badge/Install-Stats%20Mod-0b93bd?style=for-the-badge)](https://raw.githubusercontent.com/Virojet/Shell-Shockers-Stats-Mod/main/Shell-Shockers-Stats-Mod.user.js)
![Version](https://img.shields.io/badge/version-2.0.3-0C576F?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-13ba65?style=for-the-badge)

</div>

## Install

1. Install [Tampermonkey](https://www.tampermonkey.net/) (or [Violentmonkey](https://violentmonkey.github.io/)).
2. **[Click to install the Stats Mod](https://raw.githubusercontent.com/Virojet/Shell-Shockers-Stats-Mod/main/Shell-Shockers-Stats-Mod.user.js)**, then press **Install**.
3. Reload Shell Shockers.

It updates by itself.

> [!TIP]
> Not showing in Chrome? Turn on **[Allow User Scripts](https://github.com/Virojet/Shell-Shockers-Better-Hud-Mod#allow-user-scripts)** for Tampermonkey.

## What it does

- **Match History**: the round button after Game Mode on the home screen opens your last 40 matches, with map, mode, server, length, and your kills / deaths / KDR. Filter by mode or map, rename or delete a match, or download the list as JSON or CSV.
- **Every scoreboard**: open a match to see everyone's kills, deaths and KDR by team, and the score in King of the Coop.
- **Live**: in a match, press the key to see the scoreboard as it stands.
- **Pictures**: Copy Image and Download turn a scoreboard into a picture to share.

## Settings

Both are in the game's own Settings and are kept when you press **Confirm**.

| Where | What |
|---|---|
| Keybindings ▸ **Match History** | The key that opens it, `\` to start with. Click the box and press a key. Backspace there means no key. |
| Misc ▸ More options ▸ **Show match history button** | Shows the round button (on to start with). The key works either way. |

## Fixed in 2.0.3

- Trade kills count. When two players kill each other at the same moment, or a grenade lands after its thrower died, the kill shows in the kill feed but the game leaves it off its own scoreboard. The Stats Mod now counts every kill in the kill feed.
- Kills and deaths in the last second are no longer lost when a player leaves, when you leave a match or close the tab, or when you press Reset Live Stats.
- A player who leaves during your first minute in a match keeps their row if they got a kill or died while you were there.

## Fixed in 2.0.2

- The Show match history button checkbox makes the same sound as the game's other checkboxes.

## Fixed in 2.0.1

- A match is saved even if nothing changed after its first 20 seconds.
- Leaving a match ends it at once: the key opens Match History again, and the match keeps its real length.
- Esc closes Match History when you opened it during a match.

## New in 2.0

- Rebuilt from Better HUD's Match History: the same window, the round button, filters, exports and pictures.
- The key is set in the game's Settings and is `\` to start with. The old `/` and Tab keys are gone, so they no longer get in the way of the game.
- The pop-up after each match and the pinned card are gone. Open Match History when you want it.
- Your saved matches carry over.

## Good to know

- **Better HUD** has Match History built in, so the Stats Mod stays off while Better HUD runs. Both use the same saved history.
- If you use the Mod Menu, it lists the Stats Mod with an on/off switch.
- Matches are saved in your browser only.

## Credits

- Made by Virojet.
- Pictures are drawn with [html-to-image](https://github.com/bubkoo/html-to-image) (MIT).

## License

[MIT](LICENSE)
