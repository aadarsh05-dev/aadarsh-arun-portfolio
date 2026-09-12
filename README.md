# aadarsh-arun-portfolio

My personal site: who I am, what I've done, and three projects I've built end to end.

**Live:** _add after first Vercel deploy_

## What it is

A single static page (`index.html` + `style.css` + `app.js`), no framework, no build step, no backend. It exists so I have one link to put on applications and my résumé that shows real work instead of just describing it.

## Sections

- **About** and **beyond the résumé** — background and the parts of my life that don't fit on a résumé.
- **Experience** — internships at Procter & Gamble, PortfolioPilot, RPS, and Vector Marketing.
- **Projects** — three things I built this fall:
  - [AI Internship-Fit Screener](https://github.com/aadarsh05-dev/internship-fit-eval) — an eval harness that raised a scoring rubric's agreement with human judgment from 46% to 82%.
  - [Fantasy Draft Value Board](https://ff-value-board.vercel.app) — a live fantasy football draft tool over a transparent value model, backtested honestly against a naive baseline.
  - [Crypto Strategy Backtest & Product Brief](https://github.com/aadarsh05-dev/crypto-strategy-lab) — a fee-aware backtest showing buy-and-hold beat automated strategies in 5 of 6 cases, written up as a product brief.
- **Leadership**, **skills**, and a **résumé** download.

## Why a static page

None of this needs a server or client-side state beyond a mobile nav toggle. A framework would add a build step and a dependency tree for no functional gain, so this follows the same shape as my other shipped projects: plain HTML/CSS/JS, committed and deployed as-is.

## Run it

```
open index.html
```

## Deploy

Deployed to Vercel via GitHub import, framework preset "Other," no build command.

## License

MIT. See [LICENSE](LICENSE).
