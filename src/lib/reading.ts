import type { Book, Chapter } from "./types";

function countWords(s: string): number {
  return s.trim().split(/\s+/).filter(Boolean).length;
}

/** Rough reading time for one chapter, in minutes (min 4). */
export function chapterMinutes(c: Chapter): number {
  const text = [
    c.summary,
    c.keyIdea ?? "",
    ...c.deepDive.flatMap((d) => [d.heading, ...d.paragraphs]),
    ...c.pitfalls.flatMap((p) => [p.mistake, p.fix]),
    ...(c.fieldChecklist ?? []),
    ...c.keyTerms.flatMap((t) => [t.term, t.definition]),
    ...c.interviewQuestions.flatMap((qa) => [qa.q, qa.a]),
    ...c.quiz.flatMap((q) => [q.question, ...q.options, q.explanation]),
    c.codeExample?.caption ?? "",
  ].join(" ");
  const words = countWords(text);
  const interactive =
    c.quiz.length * 0.4 + (c.diagram ? 0.5 : 0) + (c.codeExample ? 1 : 0);
  return Math.max(4, Math.round(words / 200 + interactive));
}

/** Total reading time for a book, in minutes. */
export function bookMinutes(b: Book): number {
  return b.chapters.reduce((sum, c) => sum + chapterMinutes(c), 0);
}

/** "96 min" or "1 h 36 min" */
export function formatMinutes(mins: number): string {
  if (mins < 60) return `${mins} min`;
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return m === 0 ? `${h} h` : `${h} h ${m} min`;
}
