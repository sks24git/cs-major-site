import { teamOf } from '@/lib/teams';

// «Флаги» в CS — это бейджи команд (org), рисуем из реестра lib/teams.js.
// Имя компонента и проп `cc` сохранены, чтобы не трогать места вызова.
export default function Flags({ cc, size = 24 }) {
  if (!cc || cc.length === 0) return null;
  const font = Math.max(8, Math.round(size * 0.36));
  return (
    <span className="flags" aria-hidden="true">
      {cc.map((c, i) => {
        const tm = teamOf(c);
        return (
          <span
            key={i}
            className="team-badge"
            title={tm.name.ru}
            style={{ width: size, height: size, background: tm.bg, color: tm.fg, fontSize: font }}
          >
            {tm.abbr}
          </span>
        );
      })}
    </span>
  );
}
