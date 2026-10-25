import { useState } from "react";
import { Navigate, useParams } from "react-router";
import type { Level } from "../data/levels";
import { LevelNav } from "./LevelNav";
import { Questions } from "./Questions";
import { Reading } from "./Reading";
import { Translation } from "./Translation";

type Tab = "Reading" | "Translation" | "Questions";

export function Reader({ levels, basePath }: { levels: Level[]; basePath: string }) {
  const levelNum = Number(useParams().level);
  const [storyIndex, setStoryIndex] = useState(0);
  const [tab, setTab] = useState<Tab>("Reading");
  const level = levels.find((l) => l.level === levelNum);
  if (!level) return <Navigate to={`${basePath}/level/1`} replace />;
  const story = level.stories[storyIndex];
  const tabs: Tab[] = story?.questions.length
    ? ["Reading", "Translation", "Questions"]
    : ["Reading", "Translation"];

  return (
    <>
      {levels.length > 1 && (
        <LevelNav
          basePath={basePath}
          levels={levels.map((l) => ({ level: l.level, empty: l.stories.length === 0 }))}
        />
      )}
      <p className="mt-2 text-sm text-muted">
        {level.label}{level.topik && ` · ${level.topik}`}. {level.blurb}
      </p>

      {level.stories.length > 1 && (
        <nav aria-label="Story" className="mt-4 flex flex-wrap gap-2">
          {level.stories.map((s, i) => (
            <button
              key={s.id}
              type="button"
              aria-pressed={i === storyIndex}
              className="rounded-full border border-line px-3 py-1 text-sm hover:bg-surface-hi aria-pressed:border-accent aria-pressed:bg-accent aria-pressed:text-accent-ink"
              onClick={() => {
                setStoryIndex(i);
                setTab("Reading");
              }}
            >
              {s.titleEn}
            </button>
          ))}
        </nav>
      )}

      {story && (
        <>
          <h2 lang="ko" className="mt-8 font-serif text-2xl">
            {story.titleKo}
          </h2>
          <p className="text-muted">{story.titleEn}</p>
          {story.source && (
            <p className="mt-1 text-sm text-muted">
              Based on a{" "}
              <a
                href={story.source.url}
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-ink"
              >
                {story.source.outlet}
              </a>{" "}
              report · {story.source.date}. Rewritten in simple Korean.
            </p>
          )}

          <div role="tablist" className="mt-6 flex border-b border-line">
            {tabs.map((t) => (
              <button
                key={t}
                role="tab"
                type="button"
                aria-selected={tab === t}
                className="-mb-px border-b-2 border-transparent px-4 py-2 text-muted hover:text-ink aria-selected:border-accent aria-selected:text-ink"
                onClick={() => setTab(t)}
              >
                {t}
              </button>
            ))}
          </div>

          <div role="tabpanel" className="mt-6">
            {tab === "Reading" && <Reading key={story.id} story={story} />}
            {tab === "Translation" && (
              <Translation key={story.id} story={story} />
            )}
            {tab === "Questions" && (
              <Questions key={story.id} story={story} />
            )}
          </div>
        </>
      )}
    </>
  );
}
