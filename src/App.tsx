import { useState } from "react";
import { LEVELS } from "./data/levels";
import { NEWS_LEVELS } from "./data/news-levels";
import { Reader } from "./components/Reader";
import { Vocabulary } from "./components/Vocabulary";

const PAGES = ["Reader", "News", "Vocabulary"] as const;
type Page = (typeof PAGES)[number];

function App() {
  const [page, setPage] = useState<Page>("Reader");

  return (
    <main className="mx-auto min-h-screen max-w-2xl bg-bg px-4 py-6 text-ink">
      <h1 className="font-serif text-4xl text-accent">Korean Graded Reader</h1>

      <nav aria-label="Page" className="mt-4 flex gap-2">
        {PAGES.map((p) => (
          <button
            key={p}
            type="button"
            aria-pressed={p === page}
            className="rounded-full border border-line px-3 py-1 text-sm hover:bg-surface-hi aria-pressed:border-accent aria-pressed:bg-accent aria-pressed:text-accent-ink"
            onClick={() => setPage(p)}
          >
            {p}
          </button>
        ))}
      </nav>

      {page === "Vocabulary" ? (
        <Vocabulary />
      ) : (
        <Reader key={page} levels={page === "News" ? NEWS_LEVELS : LEVELS} />
      )}
    </main>
  );
}

export default App;
