/**
 * The Effortless Series — data aggregator.
 *
 * The full chapter content lives in per-book files under src/lib/books/.
 * This module assembles them and keeps the public exports stable:
 *   books, author, seriesInfo, studyPlan, layers, type Book, type Chapter
 */
import type { Book } from "./types";
import { book00 } from "./books/book-00";
import { book01 } from "./books/book-01";
import { book02 } from "./books/book-02";
import { book03 } from "./books/book-03";
import { book04 } from "./books/book-04";
import { book05 } from "./books/book-05";
import { book06 } from "./books/book-06";
import { book07 } from "./books/book-07";
import { book08 } from "./books/book-08";
import { book09 } from "./books/book-09";
import { book10 } from "./books/book-10";
import { book11 } from "./books/book-11";
import { book12 } from "./books/book-12";
import { book13 } from "./books/book-13";

export type { Book, Chapter, DiagramSpec } from "./types";

export const author = {
  name: "Tayyab Ahmed",
  role: "AI and Weight-Space Engineer",
  edition: "2026 EDITION",
};

export const books: Book[] = [
  book00,
  book01,
  book02,
  book03,
  book04,
  book05,
  book06,
  book07,
  book08,
  book09,
  book10,
  book11,
  book12,
  book13,
];

// Series-wide totals, derived so they can never drift from the content.
const totalChapters = books.reduce((sum, b) => sum + b.chapters.length, 0);
const totalDiagrams = totalChapters; // one diagram per chapter
const totalQuizQuestions = books.reduce(
  (sum, b) => sum + b.chapters.reduce((s, c) => s + c.quiz.length, 0),
  0
);
const totalCodeExamples = books.reduce(
  (sum, b) => sum + b.chapters.filter((c) => c.codeExample).length,
  0
);
const totalChecklistItems = books.reduce(
  (sum, b) =>
    sum +
    b.chapters.reduce((s, c) => s + (c.fieldChecklist?.length ?? 0), 0),
  0
);

export const seriesInfo = {
  title: "The Effortless Series",
  subtitle:
    "If I were to start my career in Software engineering in 2026, this is how I would have done it effortlessly",
  totalBooks: books.length,
  totalChapters,
  totalDiagrams,
  totalQuizQuestions,
  totalCodeExamples,
  totalChecklistItems,
  promise: "Make you the engineer who ships things that do not fall over.",
};

export const studyPlan = [
  { months: "1–2", books: ["01", "02"], title: "Databases & Encryption", outcome: "Design a schema, index it, explain a plan; TLS everywhere, hashed passwords" },
  { months: "3", books: ["03"], title: "Authentication", outcome: "Full auth with refresh rotation, 2FA and safe cookies" },
  { months: "4", books: ["04", "05"], title: "Secrets & Security", outcome: "Secrets manager, scanned history, hardened endpoints" },
  { months: "5", books: ["06"], title: "Networking", outcome: "nginx in front, websockets alive, latency budgets in your head" },
  { months: "6", books: ["09", "10"], title: "Load Testing & Testing", outcome: "A k6 baseline, a test suite gating every push" },
  { months: "7–8", books: ["07"], title: "System Design", outcome: "Write the RFC for your own next milestone" },
  { months: "9", books: ["08"], title: "Scaling", outcome: "Cache, queue, workers, autoscaling — measured, not guessed" },
  { months: "10", books: ["11"], title: "Deployment", outcome: "CI/CD with canary deploys and one-command rollback" },
  { months: "11", books: ["12"], title: "Disaster Recovery", outcome: "Timed restore drill, runbooks, immutable backups" },
  { months: "12", books: ["13"], title: "Monitoring + polish", outcome: "Dashboards, SLOs, alerts you trust; portfolio written up" },
];

export const layers = [
  {
    name: "Store & protect data",
    question: "Where does truth live, and how do we keep it private?",
    books: ["01", "02"],
    color: "#5dd9c1",
  },
  {
    name: "Gate identity and keys",
    question: "Who are you, what may you do, and what credentials are in play?",
    books: ["03", "04"],
    color: "#fb923c",
  },
  {
    name: "Defend the perimeter",
    question: "What does an attacker try, and what stops it?",
    books: ["05"],
    color: "#ef4444",
  },
  {
    name: "Move the bytes",
    question: "How does a request actually travel and fail?",
    books: ["06"],
    color: "#38bdf8",
  },
  {
    name: "Shape & stretch",
    question: "What architecture survives success?",
    books: ["07", "08"],
    color: "#34d399",
  },
  {
    name: "Prove it works",
    question: "How do we know before the users do?",
    books: ["09", "10"],
    color: "#facc15",
  },
  {
    name: "Ship, survive, watch",
    question: "How does it go live, come back, and tell us the truth?",
    books: ["11", "12", "13"],
    color: "#c084fc",
  },
];
