import { BrowserRouter, Navigate, NavLink, Route, Routes, useLocation } from "react-router";
import { LEVELS } from "./data/levels";
import { CHURCH_LEVELS } from "./data/church-levels";
import { NEWS_LEVELS } from "./data/news-levels";
import { Reader } from "./components/Reader";
import { Vocabulary } from "./components/Vocabulary";

const PAGES = [
  { name: "Reader", path: "/reader", levels: LEVELS },
  { name: "News", path: "/news", levels: NEWS_LEVELS },
  { name: "Church", path: "/church", levels: CHURCH_LEVELS },
] as const;

const basename = import.meta.env.BASE_URL.replace(/\/$/, "");

function Shell() {
  const { pathname } = useLocation();
  return (
    <>
      <main className="mx-auto min-h-screen max-w-2xl bg-bg px-4 py-6 text-ink">
        <h1 className="font-serif text-4xl text-accent">Korean Graded Reader</h1>

        <nav aria-label="Page" className="mt-4 flex gap-2">
          {[...PAGES.map(({ name, path }) => ({ name, path })), { name: "Vocabulary", path: "/vocabulary" }].map(
            ({ name, path }) => (
              <NavLink
                key={path}
                to={`${path}/level/1`}
                aria-current={pathname.startsWith(`${path}/`) ? "page" : undefined}
                className="rounded-full border border-line px-3 py-1 text-sm hover:bg-surface-hi aria-[current=page]:border-accent aria-[current=page]:bg-accent aria-[current=page]:text-accent-ink"
              >
                {name}
              </NavLink>
            ),
          )}
        </nav>

        <Routes>
          <Route path="/" element={<Navigate to="/reader/level/1" replace />} />
          {PAGES.map(({ name, path, levels }) => (
            <Route key={path} path={`${path}/level/:level`} element={<Reader key={name} levels={levels} basePath={path} />} />
          ))}
          <Route path="/vocabulary/level/:level" element={<Vocabulary />} />
          <Route path="*" element={<Navigate to="/reader/level/1" replace />} />
        </Routes>
      </main>
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename={basename}>
      <Shell />
    </BrowserRouter>
  );
}

export default App;
