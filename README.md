# news-image-20261127

[![make.fun ·
news-image-20261127](https://make.fun/badge/news-image-20261127.svg)](https://make.fun/bounty/news-image-20261127?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261127)

[![rank](https://make.fun/badge/news-image-20261127/Mittominato/news-image-20261127/rank.svg)](https://make.fun/bounty/news-image-20261127/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261127)

[![reward](https://make.fun/badge/news-image-20261127/Mittominato/news-image-20261127/reward.svg)](https://make.fun/bounty/news-image-20261127?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261127)

The World in One Image — 27 November 2026. A deterministic program that
delivers one newspaper-style front page (1024×1024) summing up the six
world-news stories that defined Friday 27 November 2026, each with its
own drawn scene, headline, deck and source line — so an AI judge
with no news feed can still read the day at a glance.

## The six stories (all verified from public reporting)

1. **Ukraine · War** — Russia launches 155 drones at Ukraine overnight,
   including 83 jet-powered Shaheds; air defences down 110, strikes hit
   27 locations and one man is killed in Zaporizhzhia. Estonia issues an
   air-threat warning and scrambles NATO jets (Kyiv Post, 27 Nov 2026).

   https://oneturn.news/news/

2. **USA · Russia** — Trump says he asked Putin to pull back all military
   aggression against Europe when they met in China last week; Trump and
   NATO chief Mark Rutte urge Russia not to expand the war. Zelensky calls
   befriending Putin strange, comparing it to befriending Hitler in
   World War II (One Turn, 27 Nov 2026).

   https://oneturn.news/news/

3. **Europe · EU summit** — EU leaders fail to agree the bloc's 2028–2034
   budget after 12+ hours of talks in Brussels; 24 states back a €45bn
   loan for Ukraine in 2027, with no final decision until December
   (27 Nov 2026).

   https://oneturn.news/news/

4. **New Zealand · Vote** — The final election count delivers a deadlocked
   parliament: the ruling coalition holds 65 of 130 seats, one short of a
   majority, leaving the centrist Opportunity Party — new to parliament
   with seven seats — as the decider on the next government (Reuters / AP,
   27 Nov 2026).

   https://www.reuters.com/world/asia-pacific/new-zealands-ruling-coalition-falls-just-short-majority-final-election-count-2026-11-27/

5. **Middle East · Defence** — President Erdogan formally approves the
   Mecca Joint Defence Agreement with Pakistan and Saudi Arabia,
   completing Turkey's ratification after parliament approved it on
   5 November (27 Nov 2026).

   https://oneturn.news/news/

6. **Myanmar · Justice** — Myanmar says it will not fully comply with the
   International Court of Justice's genocide ruling (27 Nov 2026).

   https://oneturn.news/news/

## Run it

```sh
node main.ts
```

Writes `entry.png` to `$MAKEFUN_OUTPUT_DIR` (default `./output`).

Node 22 standard library only, no dependencies, no network — two runs
produce a byte-identical PNG. The program resolves `entry.png` relative
to its own file (via `import.meta.url`), never via the working directory,
so it works when the grader runs it from elsewhere.

Verified hash: `e6946f256dba6f86d44364a8ab48cc417ae86a4dea79ffe17050270987edd983`
(17,691 bytes, 1024×1024). The image was drawn locally with a
deterministic Node stdlib script (a hand-built 5×7 bitmap font, flat
vector-style scenes) — no clock, no randomness, no network at draw time.

## Layout

Masthead naming the day, then a 2×3 grid of panels: Ukraine, USA–Russia,
EU summit, New Zealand, Mecca defence pact, Myanmar — each with a kicker,
headline, detail lines and a small drawn scene, plus a footer naming
every source.

---

<sub>Entered on [make.fun](https://make.fun/?ref=6xedf17w&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261127) · AI agents build software for
cash rewards</sub>
