// Реестр CS-команд (Major). Ключи (g2, spirit, …) — СТАБИЛЬНЫЕ КЛЮЧИ данных,
// лежат в matches.json в поле `cc: [код, код]` (по аналогии с флагами в футбольном сайте).
// Бейдж рисуется из abbr + цвета бренда (без внешних картинок — работает офлайн).

export const TEAMS = {
  g2:          { name: { ru: 'G2 Esports', en: 'G2 Esports' },     abbr: 'G2',   bg: '#111317', fg: '#ffffff' },
  spirit:      { name: { ru: 'Team Spirit', en: 'Team Spirit' },   abbr: 'SPR',  bg: '#f5c518', fg: '#111111' },
  falcons:     { name: { ru: 'Team Falcons', en: 'Team Falcons' }, abbr: 'FLC',  bg: '#0aa84f', fg: '#ffffff' },
  vitality:    { name: { ru: 'Team Vitality', en: 'Team Vitality' }, abbr: 'VIT', bg: '#ffe600', fg: '#111111' },
  navi:        { name: { ru: 'NAVI', en: 'Natus Vincere' },        abbr: 'NAVI', bg: '#1c1c1c', fg: '#f5d400' },
  faze:        { name: { ru: 'FaZe Clan', en: 'FaZe Clan' },       abbr: 'FAZE', bg: '#e43c3c', fg: '#ffffff' },
  mouz:        { name: { ru: 'MOUZ', en: 'MOUZ' },                 abbr: 'MOUZ', bg: '#e2231a', fg: '#ffffff' },
  vp:          { name: { ru: 'Virtus.pro', en: 'Virtus.pro' },     abbr: 'VP',   bg: '#f7941e', fg: '#111111' },
  liquid:      { name: { ru: 'Team Liquid', en: 'Team Liquid' },   abbr: 'TL',   bg: '#0a1f44', fg: '#ffffff' },
  astralis:    { name: { ru: 'Astralis', en: 'Astralis' },         abbr: 'AST',  bg: '#e4002b', fg: '#ffffff' },
  heroic:      { name: { ru: 'Heroic', en: 'Heroic' },             abbr: 'HER',  bg: '#15161a', fg: '#ff5a5f' },
  furia:       { name: { ru: 'FURIA', en: 'FURIA' },               abbr: 'FUR',  bg: '#0d0d0d', fg: '#ffffff' },
  mongolz:     { name: { ru: 'The MongolZ', en: 'The MongolZ' },   abbr: 'MGZ',  bg: '#0e2a5a', fg: '#ffffff' },
  '3dmax':     { name: { ru: '3DMAX', en: '3DMAX' },               abbr: '3DM',  bg: '#1a1a1a', fg: '#36c5f0' },
  gamerlegion: { name: { ru: 'GamerLegion', en: 'GamerLegion' },   abbr: 'GL',   bg: '#101418', fg: '#36c5f0' },
  pain:        { name: { ru: 'paiN Gaming', en: 'paiN Gaming' },   abbr: 'PAIN', bg: '#111111', fg: '#ff2d55' },
  complexity:  { name: { ru: 'Complexity', en: 'Complexity' },     abbr: 'COL',  bg: '#0a1a3f', fg: '#ffffff' },
  ence:        { name: { ru: 'ENCE', en: 'ENCE' },                 abbr: 'ENCE', bg: '#111111', fg: '#1ea7ff' },
  big:         { name: { ru: 'BIG', en: 'BIG' },                   abbr: 'BIG',  bg: '#111111', fg: '#7a6cff' },
  cloud9:      { name: { ru: 'Cloud9', en: 'Cloud9' },             abbr: 'C9',   bg: '#0a8df0', fg: '#ffffff' },
  eternalfire: { name: { ru: 'Eternal Fire', en: 'Eternal Fire' }, abbr: 'EF',   bg: '#c8102e', fg: '#ffffff' },
  legacy:      { name: { ru: 'Legacy', en: 'Legacy' },             abbr: 'LEG',  bg: '#14213d', fg: '#ffffff' },
  fnatic:      { name: { ru: 'Fnatic', en: 'Fnatic' },             abbr: 'FNC',  bg: '#ff5900', fg: '#111111' },
  g2a:         { name: { ru: 'G2', en: 'G2' },                     abbr: 'G2',   bg: '#111317', fg: '#ffffff' },
};

// Безопасный фолбэк для неизвестного кода: первые 3 буквы заглавными, нейтральный фон.
export function teamOf(code) {
  if (!code) return { name: { ru: '?', en: '?' }, abbr: '?', bg: '#2a313c', fg: '#e8edf2' };
  const k = String(code).toLowerCase();
  if (TEAMS[k]) return TEAMS[k];
  const abbr = String(code).slice(0, 4).toUpperCase();
  return { name: { ru: code, en: code }, abbr, bg: '#2a313c', fg: '#e8edf2' };
}
