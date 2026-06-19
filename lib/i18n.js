// i18n ядро — чистые функции (без 'use client'), импортируются и сервером, и клиентом.
// Хуки (useLang/useT/useTz/useTimeFmt) живут в app/providers.js.

export const LANGS = ['ru', 'en'];
export const DEFAULT_LANG = 'ru';

// Резолвер двуязычного поля контента: строку отдаёт как есть, {ru,en} — по языку (фолбэк ru).
// Это позволяет сайту работать на RU даже до заполнения всех EN.
export function L(value, lang = DEFAULT_LANG) {
  if (value == null) return value;
  if (typeof value === 'object' && !Array.isArray(value)) {
    return value[lang] ?? value.ru ?? value.en ?? '';
  }
  return value;
}

// Отображаемое имя стороны: в данных ключ всегда "Миша"/"AI", тут — что видно на экране.
export function sideLabel(side, lang = DEFAULT_LANG) {
  if (side === 'AI') return 'AI';
  return lang === 'en' ? 'Misha' : 'Миша';
}

// Все строки интерфейса. Поддерживается интерполяция {var} через t(lang, key, vars).
export const STRINGS = {
  ru: {
    'a11y.toContent': 'К содержимому',
    'a11y.mainNav': 'Основная навигация',
    'a11y.homeLink': 'Major-26 · на главную',
    'a11y.grouping': 'Группировка',
    'a11y.side': 'Сторона',
    'a11y.battle': 'Батл Миша против AI',
    'a11y.matchBets': 'Ставки на матч',
    'a11y.soonMatches': 'Ближайшие матчи',
    'a11y.recentMatches': 'Недавние матчи',
    'a11y.futureMatches': 'Будущие матчи',
    'a11y.pastMatches': 'Сыгранные матчи',
    'a11y.newsFeed': 'Лента инсайдов',
    'a11y.matchesAndBets': 'Матчи и ставки',
    'a11y.facts': 'Факты',
    'a11y.bankChart': 'Банк Миши и AI по ходу Мейджора',

    'brand.subtitle': 'Миша vs AI',
    'brand.day': 'Major·26 · Миша vs AI',
    'brand.logo': 'Major·26',

    'meta.home.title': 'IEM Cologne Major 2026 · Миша vs AI',
    'meta.home.desc': 'Прогнозы, ставки и статистика IEM Cologne Major 2026 по CS2 — батл Миша vs AI',
    'meta.bets': 'Ставки · Major-26',
    'meta.matches': 'Матчи · Major-26',
    'meta.stats': 'Статистика · Major-26',
    'meta.cards': 'Купоны дня · Major-26',

    'nav.today': 'Сегодня',
    'nav.bets': 'Ставки',
    'nav.stats': 'Стата',
    'nav.cards': 'Купоны',
    'nav.matches': 'Матчи',

    'common.vs': 'vs',
    'common.bank': 'банк',
    'common.roi': 'ROI',
    'common.inPlay': 'в игре',
    'common.inPlayShort': 'в игре',
    'common.stakeShort': 'ст.',
    'common.zoneMsk': 'МСК',

    'home.h1': 'Сегодня',
    'home.cardsOfDay': 'Купоны дня',
    'home.upcoming': 'Ближайшие матчи',
    'home.noCards': 'Купонов пока нет — скоро добавим',
    'home.alsoInPlay': 'Также в игре',
    'home.facts': 'Факты',
    'home.footNote': 'Полная лента и расчёт — во вкладках «Ставки» и «Матчи»',

    'battle.aheadMid': 'впереди на',
    'battle.even': 'Счёт равный — всё решат ближайшие матчи',
    'battle.start': ' · старт у каждого 100 000 ₽',

    'bets.group.match': 'По матчам',
    'bets.group.day': 'По дням',
    'bets.group.type': 'По рынкам',
    'bets.side.all': 'Батл',
    'bets.none': 'По этому фильтру ставок нет',
    'bets.footNote': 'Ставки обновляются по ходу Мейджора — сайт пересобирается за пару минут',
    'bets.inPlayCount': 'В игре · {n}',
    'bets.sysInPlay': 'Системы и экспрессы · в игре',
    'bets.settledCount': 'Сыграно · {n}',
    'bets.sysSettled': 'Системы и экспрессы · сыграно',
    'bets.waiting': 'ждём ставку',
    'bets.noPick': 'без прогноза',

    'matches.title': 'Матчи',
    'matches.soon': 'Скоро · ближайшие 24 ч',
    'matches.recent': 'Недавние · последние 24 ч',
    'matches.none24': 'В ближайшие сутки матчей нет — смотри афишу ниже',
    'matches.moreAhead': 'Дальше в афише',
    'matches.past': 'Прошедшие матчи',

    'cards.title': 'Купоны дня',
    'cards.sub': 'Разворот дня: AI слева, Миша справа. Листай по дням стрелками или точками — можно скринить и кидать в чат.',
    'cards.none': 'Купонов пока нет',
    'cards.prevDay': 'Прошлый день',
    'cards.nextDay': 'Следующий день',
    'cardsStrip.all': 'Все купоны дня по матчам →',
    'cardsStrip.hit': 'зашло',

    'daycard.atStake': 'на кону',
    'daycard.soFar': 'пока',
    'daycard.dayTotal': 'итог дня',
    'daycard.hit': 'зашло {w}/{n}',
    'daycard.inPlayN': '{n} в игре',
    'daycard.notPlayed': 'в этот день не играл',
    'daycard.noBetsYet': 'пока без ставок',

    'legend.odds': 'кф',
    'legend.cap': 'Иконка = надёжность (🛡 щит · ⚡ риск · 🔥 лотерея). Цвет суммы — результат. Банк у каждого 100 000 ₽. Размер ставки — по светофору (см. стратегию).',

    'stats.title': 'Статистика',
    'stats.bankOverTime': 'Банк по ходу Мейджора',
    'stats.noSettled': 'Пока нет рассчитанных ставок',
    'stats.trafficLight': 'Светофор',
    'stats.byMarket': 'По рынкам',
    'stats.records': 'Рекорды',
    'stats.best': 'Лучшая',
    'stats.worst': 'Худшая',
    'stats.noSettledShort': 'нет рассчитанных',
    'stats.total': 'Всего ставок: {total} · рассчитано: {settled} · в игре: {pending}',

    'match.analysis': 'Разбор',
    'match.betsTitle': 'Ставки на матч · Миша vs AI',
    'match.back': '← Все матчи',

    'result.refund': 'возврат',

    'news.feed': 'Лента',
    'news.author.staff': 'Штаб',
    'news.tag.lineup': 'Состав',
    'news.tag.insight': 'Инсайд',
    'news.tag.misha': 'Миша',
    'news.tag.result': 'Итог',

    'status.pending': 'В игре',
    'status.win': 'Зашла',
    'status.lose': 'Мимо',
    'status.void': 'Возврат',

    'cardstatus.done': 'Завершён',
    'cardstatus.live': 'Идёт',
    'cardstatus.soon': 'Скоро',

    'tier.green': 'Зелёная',
    'tier.yellow': 'Жёлтая',
    'tier.red': 'Красная',
    'tier.green.note': 'надёжные события · одинары и экспресс из 2 (до ×3)',
    'tier.yellow.note': 'риск повыше · повышенные коэффициенты',
    'tier.red.note': 'максимальный риск · точные счёта по картам, апсеты, тройники',

    'settings.language': 'Язык',
    'settings.timezone': 'Таймзона',
    'settings.browserDefault': 'Зона браузера',

    'footer.daysMsk': 'дни группируются по МСК',
  },

  en: {
    'a11y.toContent': 'Skip to content',
    'a11y.mainNav': 'Main navigation',
    'a11y.homeLink': 'Major-26 · home',
    'a11y.grouping': 'Grouping',
    'a11y.side': 'Side',
    'a11y.battle': 'Misha vs AI battle',
    'a11y.matchBets': 'Match bets',
    'a11y.soonMatches': 'Upcoming matches',
    'a11y.recentMatches': 'Recent matches',
    'a11y.futureMatches': 'Future matches',
    'a11y.pastMatches': 'Played matches',
    'a11y.newsFeed': 'Insights feed',
    'a11y.matchesAndBets': 'Matches and bets',
    'a11y.facts': 'Facts',
    'a11y.bankChart': 'Misha and AI bankroll over the Major',

    'brand.subtitle': 'Misha vs AI',
    'brand.day': 'Major·26 · Misha vs AI',
    'brand.logo': 'Major·26',

    'meta.home.title': 'IEM Cologne Major 2026 · Misha vs AI',
    'meta.home.desc': 'IEM Cologne Major 2026 CS2 predictions, bets and stats — the Misha vs AI battle',
    'meta.bets': 'Bets · Major-26',
    'meta.matches': 'Matches · Major-26',
    'meta.stats': 'Stats · Major-26',
    'meta.cards': 'Daily slips · Major-26',

    'nav.today': 'Today',
    'nav.bets': 'Bets',
    'nav.stats': 'Stats',
    'nav.cards': 'Slips',
    'nav.matches': 'Matches',

    'common.vs': 'vs',
    'common.bank': 'bank',
    'common.roi': 'ROI',
    'common.inPlay': 'in play',
    'common.inPlayShort': 'live',
    'common.stakeShort': 'b.',
    'common.zoneMsk': 'MSK',

    'home.h1': 'Today',
    'home.cardsOfDay': 'Slips of the day',
    'home.upcoming': 'Upcoming matches',
    'home.noCards': 'No slips yet — coming soon',
    'home.alsoInPlay': 'Also in play',
    'home.facts': 'Facts',
    'home.footNote': 'Full feed and settlement — in the “Bets” and “Matches” tabs',

    'battle.aheadMid': 'ahead by',
    'battle.even': 'All square — the next matches will decide it',
    'battle.start': ' · each starts with ₽100,000',

    'bets.group.match': 'By match',
    'bets.group.day': 'By day',
    'bets.group.type': 'By market',
    'bets.side.all': 'Battle',
    'bets.none': 'No bets for this filter',
    'bets.footNote': 'Bets update as the Major goes — the site rebuilds in a couple of minutes',
    'bets.inPlayCount': 'In play · {n}',
    'bets.sysInPlay': 'Systems and accumulators · in play',
    'bets.settledCount': 'Settled · {n}',
    'bets.sysSettled': 'Systems and accumulators · settled',
    'bets.waiting': 'awaiting pick',
    'bets.noPick': 'no pick',

    'matches.title': 'Matches',
    'matches.soon': 'Soon · next 24 h',
    'matches.recent': 'Recent · last 24 h',
    'matches.none24': 'No matches in the next 24 h — see the schedule below',
    'matches.moreAhead': 'More in the schedule',
    'matches.past': 'Played matches',

    'cards.title': 'Slips of the day',
    'cards.sub': 'Day spread: AI on the left, Misha on the right. Swipe through days with arrows or dots — screenshot-friendly for the chat.',
    'cards.none': 'No slips yet',
    'cards.prevDay': 'Previous day',
    'cards.nextDay': 'Next day',
    'cardsStrip.all': 'All daily slips by match →',
    'cardsStrip.hit': 'hit',

    'daycard.atStake': 'at stake',
    'daycard.soFar': 'so far',
    'daycard.dayTotal': 'day total',
    'daycard.hit': 'hit {w}/{n}',
    'daycard.inPlayN': '{n} in play',
    'daycard.notPlayed': 'did not play this day',
    'daycard.noBetsYet': 'no bets yet',

    'legend.odds': 'odds',
    'legend.cap': 'Icon = reliability (🛡 shield · ⚡ risk · 🔥 lottery). Amount colour = result. Each side starts with ₽100,000. Stake size follows the traffic light (see strategy).',

    'stats.title': 'Stats',
    'stats.bankOverTime': 'Bankroll over the Major',
    'stats.noSettled': 'No settled bets yet',
    'stats.trafficLight': 'Traffic light',
    'stats.byMarket': 'By market',
    'stats.records': 'Records',
    'stats.best': 'Best',
    'stats.worst': 'Worst',
    'stats.noSettledShort': 'none settled',
    'stats.total': 'Total bets: {total} · settled: {settled} · in play: {pending}',

    'match.analysis': 'Analysis',
    'match.betsTitle': 'Match bets · Misha vs AI',
    'match.back': '← All matches',

    'result.refund': 'refund',

    'news.feed': 'Feed',
    'news.author.staff': 'Desk',
    'news.tag.lineup': 'Lineup',
    'news.tag.insight': 'Insight',
    'news.tag.misha': 'Misha',
    'news.tag.result': 'Result',

    'status.pending': 'In play',
    'status.win': 'Won',
    'status.lose': 'Lost',
    'status.void': 'Void',

    'cardstatus.done': 'Finished',
    'cardstatus.live': 'Live',
    'cardstatus.soon': 'Soon',

    'tier.green': 'Green',
    'tier.yellow': 'Yellow',
    'tier.red': 'Red',
    'tier.green.note': 'reliable picks · singles and 2-leg accas (up to ×3)',
    'tier.yellow.note': 'higher risk · bigger odds',
    'tier.red.note': 'max risk · correct map scores, upsets, trebles',

    'settings.language': 'Language',
    'settings.timezone': 'Timezone',
    'settings.browserDefault': 'Browser default',

    'footer.daysMsk': 'days grouped by MSK',
  },
};

// Чистый переводчик: t(lang, key, vars?). Неизвестный ключ → фолбэк ru → сам ключ.
export function t(lang, key, vars) {
  const table = STRINGS[lang] || STRINGS[DEFAULT_LANG];
  let str = table[key];
  if (str == null) str = STRINGS[DEFAULT_LANG][key];
  if (str == null) return key;
  if (vars) {
    for (const k of Object.keys(vars)) {
      str = str.replaceAll('{' + k + '}', String(vars[k]));
    }
  }
  return str;
}
