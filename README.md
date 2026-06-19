# IEM Cologne Major 2026 · Миша vs AI

Статичный сайт по CS2-мейджору: ставки Миши, разборы и ставки AI, лента и статистика.
Батл «Миша vs AI» по аналогии с футбольным [wc2026-site](https://github.com/sks24git/wc2026-site).
Next.js (static export) → GitHub Pages. Без бэкенда и авторизации — сайт только для чтения.

**Лайв:** https://sks24git.github.io/cs-major-site/

## Как обновляются данные

Всё в папке `content/` (двуязычно RU/EN — см. `content/README.md`):

- `content/matches.json` — матчи (команды `cc`, дата, время МСК, стадион, счёт по картам)
- `content/bets.json` — ставки (`side`: `Миша`/`AI`, светофор `tier`, кэф, статус)
- `content/news.json` — лента (`tag`: lineup/insight/misha/result)
- `content/facts.json` — факты на главной
- `content/analysis/<id>.md` (+ `<id>.en.md`) — разбор матча
- `lib/teams.js` — реестр команд (бейджи без внешних картинок)
- `lib/glossary.js` — коды CS-рынков (ТС/Фкарт/тоталы карт/раундов…)

Правка контента → `npm run build` (прогонит `npm run validate`) → `git push` → GitHub Actions пересобирает сайт (~2 мин).

## Деплой на GitHub Pages

Workflow `.github/workflows/deploy.yml` уже в репо (`NEXT_PUBLIC_BASE_PATH=/cs-major-site`).
Источник Pages — **GitHub Actions**. Сайт: `https://sks24git.github.io/cs-major-site/`.

## Локально

```bash
npm install
npm run dev      # http://localhost:3000
npm run validate # проверка контента {ru,en}
npm run build    # статика в out/
```
