"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  MessageSquareQuote,
  Lightbulb,
  ListChecks,
  Timer,
  AlertTriangle,
  BookMarked,
  GraduationCap,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { useEffect } from "react";
import { books } from "@/lib/books-data";
import type { Chapter } from "@/lib/types";
import { chapterMinutes } from "@/lib/reading";
import { useReaderStore } from "@/store/reader-store";
import { ChapterDiagram } from "./chapter-diagram";
import { ChapterQuiz } from "./chapter-quiz";
import { CodeBlock } from "./code-block";

const ease = [0.22, 1, 0.36, 1] as const;

function Section({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay, ease }}
      className="mb-12"
    >
      {children}
    </motion.section>
  );
}

function SectionHeader({
  icon: Icon,
  label,
  accent,
}: {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties; strokeWidth?: number }>;
  label: string;
  accent: string;
}) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <Icon className="w-4 h-4" style={{ color: accent }} strokeWidth={1.5} />
      <h2 className="text-xs uppercase tracking-[0.2em] font-medium text-muted-foreground">
        {label}
      </h2>
    </div>
  );
}

export function ChapterReader() {
  const {
    isChapterReaderOpen,
    selectedBookId,
    selectedChapterNumber,
    closeChapter,
    openChapter,
    readMap,
    toggleRead,
  } = useReaderStore();

  const book = books.find((b) => b.id === selectedBookId);
  const chapter: Chapter | undefined = book?.chapters.find(
    (c) => c.number === selectedChapterNumber
  );

  const currentIdx =
    book?.chapters.findIndex((c) => c.number === selectedChapterNumber) ?? -1;

  const prevChapter = currentIdx > 0 ? book?.chapters[currentIdx - 1] : null;
  const nextChapter =
    currentIdx >= 0 && currentIdx < (book?.chapters.length ?? 0) - 1
      ? book?.chapters[currentIdx + 1]
      : null;

  const isRead =
    book && chapter ? !!readMap[`${book.id}/${chapter.number}`] : false;

  // Lock body scroll while the reader is open
  useEffect(() => {
    if (!isChapterReaderOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isChapterReaderOpen]);

  // Keyboard nav + escape
  useEffect(() => {
    if (!isChapterReaderOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeChapter();
      if (e.key === "ArrowLeft" && prevChapter && book)
        openChapter(book.id, prevChapter.number);
      if (e.key === "ArrowRight" && nextChapter && book)
        openChapter(book.id, nextChapter.number);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isChapterReaderOpen, closeChapter, prevChapter, nextChapter, book, openChapter]);

  // Scroll to top on chapter change
  useEffect(() => {
    if (isChapterReaderOpen) {
      const el = document.getElementById("chapter-scroll-container");
      el?.scrollTo({ top: 0 });
    }
  }, [selectedChapterNumber, isChapterReaderOpen]);

  return (
    <AnimatePresence>
      {isChapterReaderOpen && book && chapter && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-background flex flex-col"
        >
          {/* Top bar */}
          <div className="shrink-0 border-b border-border/40 bg-card/40 backdrop-blur-xl">
            <div className="max-w-3xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
              <button
                onClick={closeChapter}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-4 h-4" />
                <span className="hidden sm:inline">Close chapter</span>
              </button>

              <div className="flex items-center gap-3 text-xs text-muted-foreground truncate">
                <span
                  className="font-medium"
                  style={{ color: book.accentColor }}
                >
                  Book {book.emoji}
                </span>
                <span className="text-border hidden sm:inline">/</span>
                <span className="truncate hidden sm:inline">{book.title}</span>
                <span className="text-border">/</span>
                <span className="font-mono">
                  Ch. {String(chapter.number).padStart(2, "0")}
                </span>
              </div>

              <div className="flex items-center gap-1">
                <span className="hidden md:flex items-center gap-1 text-xs text-muted-foreground/80 mr-2">
                  <Timer className="w-3 h-3" />
                  {chapterMinutes(chapter)} min
                </span>
                <button
                  onClick={() =>
                    prevChapter && openChapter(book.id, prevChapter.number)
                  }
                  disabled={!prevChapter}
                  className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/40 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
                  aria-label="Previous chapter"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() =>
                    nextChapter && openChapter(book.id, nextChapter.number)
                  }
                  disabled={!nextChapter}
                  className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/40 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
                  aria-label="Next chapter"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Chapter strip — quick TOC across the whole book */}
          <div className="shrink-0 border-b border-border/40 bg-background/70 backdrop-blur-xl">
            <div className="max-w-3xl mx-auto px-6 py-2 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              {book.chapters.map((c) => {
                const isCurrent = c.number === chapter.number;
                const wasRead = !!readMap[`${book.id}/${c.number}`];
                return (
                  <button
                    key={c.number}
                    onClick={() => openChapter(book.id, c.number)}
                    title={c.title}
                    className={`shrink-0 w-8 h-7 rounded-md font-mono text-[11px] flex items-center justify-center transition-all relative ${
                      isCurrent
                        ? "text-background font-semibold"
                        : wasRead
                          ? "text-muted-foreground border hover:text-foreground"
                          : "text-muted-foreground/70 border border-border/40 hover:text-foreground hover:border-red-600/40"
                    }`}
                    style={
                      isCurrent
                        ? { backgroundColor: book.accentColor }
                        : wasRead
                          ? { borderColor: `${book.accentColor}70` }
                          : undefined
                    }
                  >
                    {String(c.number).padStart(2, "0")}
                    {wasRead && !isCurrent && (
                      <span
                        className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: book.accentColor }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Reading content */}
          <div
            id="chapter-scroll-container"
            className="flex-1 overflow-y-auto"
          >
            <AnimatePresence mode="wait">
              <motion.article
                key={`${book.id}-${chapter.number}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease }}
                className="max-w-3xl mx-auto px-6 sm:px-10 py-12 lg:py-16"
              >
                {/* Chapter eyebrow */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="flex flex-wrap items-center gap-3 mb-6"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="h-px w-10"
                      style={{ backgroundColor: book.accentColor }}
                    />
                    <span
                      className="text-[11px] uppercase tracking-[0.32em] font-medium"
                      style={{ color: book.accentColor }}
                    >
                      Chapter {String(chapter.number).padStart(2, "0")}
                    </span>
                  </div>
                  <span className="text-[11px] text-muted-foreground/70 flex items-center gap-1.5">
                    <Timer className="w-3 h-3" />
                    {chapterMinutes(chapter)} min read
                  </span>
                  {isRead && (
                    <span
                      className="text-[11px] flex items-center gap-1.5 px-2 py-0.5 rounded-full"
                      style={{
                        color: book.accentColor,
                        backgroundColor: `${book.accentColor}15`,
                      }}
                    >
                      <CheckCircle2 className="w-3 h-3" />
                      Read
                    </span>
                  )}
                </motion.div>

                {/* Chapter title */}
                <motion.h1
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.5 }}
                  className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground leading-tight tracking-tight mb-8"
                >
                  {chapter.title}
                </motion.h1>

                {/* Summary / opening */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.5 }}
                  className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-12 font-serif italic border-l-2 pl-6"
                  style={{ borderColor: `${book.accentColor}60` }}
                >
                  {chapter.summary}
                </motion.p>

                {/* Key Idea */}
                {chapter.keyIdea && (
                  <Section delay={0.05}>
                    <SectionHeader icon={Lightbulb} accent={book.accentColor} label="The key idea" />
                    <p className="text-base lg:text-lg text-foreground/90 leading-relaxed bg-muted/30 border border-border/40 rounded-lg p-5">
                      {chapter.keyIdea}
                    </p>
                  </Section>
                )}

                {/* Deep dive */}
                <Section>
                  <SectionHeader
                    icon={BookOpen}
                    accent={book.accentColor}
                    label="Go deeper — the chapter, unpacked"
                  />
                  <div className="space-y-7">
                    {chapter.deepDive.map((sec, i) => (
                      <div key={i}>
                        <h3 className="font-serif text-lg lg:text-xl font-medium text-foreground mb-3 leading-snug">
                          {sec.heading}
                        </h3>
                        {sec.paragraphs.map((p, j) => (
                          <p
                            key={j}
                            className="text-sm lg:text-base text-foreground/80 leading-relaxed mb-3.5"
                          >
                            {p}
                          </p>
                        ))}
                      </div>
                    ))}
                  </div>
                </Section>

                {/* Diagram */}
                <Section>
                  <ChapterDiagram diagram={chapter.diagram} accent={book.accentColor} />
                </Section>

                {/* Code example */}
                {chapter.codeExample && (
                  <Section>
                    <CodeBlock
                      language={chapter.codeExample.language}
                      caption={chapter.codeExample.caption}
                      code={chapter.codeExample.code}
                      accent={book.accentColor}
                    />
                  </Section>
                )}

                {/* Pitfalls */}
                <Section>
                  <SectionHeader
                    icon={AlertTriangle}
                    accent={book.accentColor}
                    label="Where this goes wrong in the field"
                  />
                  <div className="space-y-3">
                    {chapter.pitfalls.map((p, i) => (
                      <div
                        key={i}
                        className="rounded-lg border border-border/50 bg-card/40 overflow-hidden"
                      >
                        <div className="flex items-start gap-2.5 px-4 py-3 bg-red-950/20 border-b border-red-500/15">
                          <X className="shrink-0 w-3.5 h-3.5 mt-0.5 text-red-400" strokeWidth={2} />
                          <p className="text-sm text-foreground/90 leading-relaxed">
                            <span className="text-red-300 font-medium text-xs uppercase tracking-wider mr-2">
                              Mistake
                            </span>
                            {p.mistake}
                          </p>
                        </div>
                        <div className="flex items-start gap-2.5 px-4 py-3 bg-emerald-950/15">
                          <CheckCircle2
                            className="shrink-0 w-3.5 h-3.5 mt-0.5 text-emerald-400"
                            strokeWidth={1.5}
                          />
                          <p className="text-sm text-foreground/85 leading-relaxed">
                            <span className="text-emerald-300/90 font-medium text-xs uppercase tracking-wider mr-2">
                              Fix
                            </span>
                            {p.fix}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Section>

                {/* Field checklist */}
                {chapter.fieldChecklist && chapter.fieldChecklist.length > 0 && (
                  <Section>
                    <SectionHeader
                      icon={ListChecks}
                      accent={book.accentColor}
                      label="Field checklist — do this before you call it done"
                    />
                    <ul className="space-y-2.5">
                      {chapter.fieldChecklist.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm lg:text-base text-foreground/85 leading-relaxed"
                        >
                          <CheckCircle2
                            className="w-4 h-4 mt-1 shrink-0"
                            style={{ color: book.accentColor }}
                            strokeWidth={1.5}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Section>
                )}

                {/* Key terms */}
                <Section>
                  <SectionHeader
                    icon={BookMarked}
                    accent={book.accentColor}
                    label="Terms you will hear in the field"
                  />
                  <dl className="grid sm:grid-cols-2 gap-2.5">
                    {chapter.keyTerms.map((t, i) => (
                      <div
                        key={i}
                        className="rounded-lg border border-border/40 bg-muted/20 px-4 py-3"
                      >
                        <dt
                          className="text-sm font-medium mb-1"
                          style={{ color: book.accentColor }}
                        >
                          {t.term}
                        </dt>
                        <dd className="text-xs lg:text-sm text-muted-foreground leading-relaxed">
                          {t.definition}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </Section>

                {/* Interview angles */}
                <Section>
                  <SectionHeader
                    icon={MessageSquareQuote}
                    accent={book.accentColor}
                    label="Interview angle"
                  />
                  <div className="space-y-3">
                    {chapter.interviewQuestions.map((qa, i) => (
                      <div
                        key={i}
                        className="bg-muted/30 border border-border/40 rounded-lg overflow-hidden"
                      >
                        <div className="px-5 py-4 border-b border-border/40">
                          <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground/70 mb-1">
                            Q{i + 1}
                          </div>
                          <p className="text-sm lg:text-base text-foreground font-medium leading-relaxed">
                            {qa.q}
                          </p>
                        </div>
                        <div className="px-5 py-4">
                          <div
                            className="text-xs uppercase tracking-[0.15em] mb-1"
                            style={{ color: book.accentColor }}
                          >
                            A
                          </div>
                          <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                            {qa.a}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Section>

                {/* Quiz */}
                <Section>
                  <SectionHeader
                    icon={GraduationCap}
                    accent={book.accentColor}
                    label="Check yourself — three questions"
                  />
                  <ChapterQuiz
                    questions={chapter.quiz}
                    accent={book.accentColor}
                    bookId={book.id}
                    chapterNumber={chapter.number}
                  />
                </Section>

                {/* Mark as read */}
                <Section>
                  <button
                    onClick={() => toggleRead(book.id, chapter.number)}
                    className="w-full flex items-center justify-center gap-2 rounded-lg px-5 py-3.5 text-sm font-medium transition-all"
                    style={
                      isRead
                        ? {
                            border: `1px solid ${book.accentColor}55`,
                            color: book.accentColor,
                            backgroundColor: `${book.accentColor}10`,
                          }
                        : { backgroundColor: book.accentColor, color: "#0a0d14" }
                    }
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    {isRead
                      ? "Chapter marked as read — tap to unmark"
                      : "Mark chapter as read"}
                  </button>
                </Section>

                {/* Bottom nav */}
                <div className="mt-4 pt-8 border-t border-border/40 grid grid-cols-2 gap-4">
                  <button
                    onClick={() =>
                      prevChapter && openChapter(book.id, prevChapter.number)
                    }
                    disabled={!prevChapter}
                    className="group text-left p-4 rounded-lg border border-border/40 hover:border-red-600/30 hover:bg-muted/30 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:border-border/40 transition-all"
                  >
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                      <ChevronLeft className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform" />
                      Previous
                    </div>
                    <div className="text-sm font-medium text-foreground line-clamp-1">
                      {prevChapter?.title ?? "—"}
                    </div>
                  </button>
                  <button
                    onClick={() =>
                      nextChapter && openChapter(book.id, nextChapter.number)
                    }
                    disabled={!nextChapter}
                    className="group text-right p-4 rounded-lg border border-border/40 hover:border-red-600/30 hover:bg-muted/30 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:border-border/40 transition-all"
                  >
                    <div className="flex items-center justify-end gap-1 text-xs text-muted-foreground mb-2">
                      Next
                      <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                    <div className="text-sm font-medium text-foreground line-clamp-1 flex items-center justify-end gap-1">
                      <span className="truncate">{nextChapter?.title ?? "—"}</span>
                      {nextChapter && (
                        <ArrowRight className="w-3 h-3 shrink-0" />
                      )}
                    </div>
                  </button>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
