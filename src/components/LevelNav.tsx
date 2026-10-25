import { NavLink } from "react-router";

export function LevelNav({ basePath, levels }: { basePath: string; levels: { level: number; empty: boolean }[] }) {
  return (
    <nav aria-label="Level" className="mt-4 flex gap-2">
      {levels.map(({ level, empty }) => (
        <NavLink
          key={level}
          to={`${basePath}/level/${level}`}
          className={`rounded-full border border-line px-3 py-1 text-sm hover:bg-surface-hi aria-[current=page]:border-accent aria-[current=page]:bg-accent aria-[current=page]:text-accent-ink ${empty ? "opacity-40" : ""}`}
        >
          {level}
        </NavLink>
      ))}
    </nav>
  );
}
