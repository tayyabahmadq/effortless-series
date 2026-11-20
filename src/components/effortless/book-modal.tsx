"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Clock, Layers as LayersIcon, BookOpen, Timer, CheckCircle2, Network, GraduationCap } from "lucide-react";
import { useEffect } from "react";
import { books } from "@/lib/books-data";
import { bookMinutes, chapterMinutes, formatMinutes } from "@/lib/reading";
import { useReaderStore } from "@/store/reader-store";
import { useMounted } from "@/hooks/use-mounted";

export function BookModal() {
  const {
    isBookModalOpen,
    selectedBookId,
    closeBook,
    openChapter,
    readMap,
  } = useReaderStore();
  const mounted = useMounted();

  const book = books.find((b) => b.id === selectedBookId);

  const readCount = book
    ? book.chapters.filter((c) => readMap[`${book.id}/${c.number}`]).length
    : 0;
  const total = book?.chapters.length ?? 0;
  const pct = total > 0 ? Math.round((readCount / total) * 100) : 0;

  useEffect(() => {
    if (!isBookModalOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeBook();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [isBookModalOpen, closeBook]);

  return (
    <AnimatePresence>
      {isBookModalOpen && book && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto bg-black/70 backdrop-blur-md"
          onClick={closeBook}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl my-8 rounded-2xl overflow-hidden bg-card border border-border/60 shadow-2xl shadow-black/60"
          >
            {/* Accent strip */}
            <div
              className="absolute top-0 left-0 right-0 h-1"
              style={{ backgroundColor: book.accentColor }}
            />

            {/* Background glow */}
            <div
              className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-[120px] opacity-20 pointer-events-none"
              style={{ backgroundColor: book.accentColor }}
            />

            {/* Header */}
            <div className="relative p-6 sm:p-8 lg:p-10 border-b border-border/40">
              <button
                onClick={closeBook}
                className="absolute top-5 right-5 p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-all"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col sm:flex-row gap-6 sm:items-start pr-10">
                {/* Book cover */}
                <div
                  className="shrink-0 w-24 h-32 rounded-md flex flex-col items-center justify-center shadow-xl relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${book.accentColor}25, ${book.accentColor}08)`,
                    border: `1px solid ${book.accentColor}50`,
                  }}
                >
                  <div className="absolute top-2 left-2 right-2 h-px" style={{ backgroundColor: `${book.accentColor}60` }} />
                  <div className="absolute bottom-2 left-2 right-2 h-px" style={{ backgroundColor: `${book.accentColor}60` }} />
                  <span
                    className="font-serif text-3xl font-semibold"
                    style={{ color: book.accentColor }}
                  >
                    {book.emoji}
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground mt-1.5">
                    Book
                  </span>
                </div>

                {/* Title and meta */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="text-[10px] uppercase tracking-[0.25em] font-medium"
                      style={{ color: book.accentColor }}
                    >
                      {book.subtitle}
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium text-foreground leading-tight tracking-tight mb-4">
                    {book.title}
                  </h2>
                  <p className="text-base text-muted-foreground/90 leading-relaxed mb-5">
                    {book.description}
                  </p>

                  <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <LayersIcon className="w-3.5 h-3.5" style={{ color: book.accentColor }} />
                      {book.layer}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5" style={{ color: book.accentColor }} />
                      {book.chapters.length} chapters
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Timer className="w-3.5 h-3.5" style={{ color: book.accentColor }} />
                      {formatMinutes(bookMinutes(book))} total
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" style={{ color: book.accentColor }} />
                      {book.months}
                    </span>
                  </div>
                </div>
              </div>

              {/* Progress (persisted locally) */}
              {mounted && total > 0 && (
                <div className="mt-6">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-muted-foreground">
                      Your progress —{" "}
                      <span style={{ color: book.accentColor }} className="font-medium">
                        {readCount} of {total} chapters read
                      </span>
                    </span>
                    <span className="text-muted-foreground/70">{pct}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-muted/60 overflow-hidden">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: pct / 100 }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full origin-left rounded-full"
                      style={{ backgroundColor: book.accentColor }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Chapters list */}
            <div className="relative p-6 sm:p-8 lg:p-10 max-h-[60vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-serif text-lg font-medium text-foreground">
                  Chapters
                </h3>
                <span className="text-xs text-muted-foreground">
                  Every chapter: deep dive · diagram · quiz
                </span>
              </div>

              <div className="space-y-1.5">
                {book.chapters.map((chapter, idx) => (
                  <motion.button
                    key={chapter.number}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.35,
                      delay: Math.min(idx * 0.03, 0.4),
                    }}
                    onClick={() => openChapter(book.id, chapter.number)}
                    className="group w-full flex items-start gap-4 p-4 rounded-lg hover:bg-muted/40 transition-all text-left"
                  >
                    {/* Chapter number */}
                    <div
                      className="shrink-0 w-10 h-10 rounded-md flex items-center justify-center font-mono text-xs font-medium transition-all"
                      style={{
                        color: book.accentColor,
                        backgroundColor: `${book.accentColor}10`,
                        border: `1px solid ${book.accentColor}25`,
                      }}
                    >
                      {String(chapter.number).padStart(2, "0")}
                    </div>

                    {/* Chapter content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium text-foreground text-sm sm:text-base leading-snug group-hover:text-red-400 transition-colors">
                          {chapter.title}
                        </h4>
                        {mounted && readMap[`${book.id}/${chapter.number}`] && (
                          <CheckCircle2
                            className="shrink-0 w-3.5 h-3.5"
                            style={{ color: book.accentColor }}
                          />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground/80 leading-relaxed line-clamp-2 mt-1">
                        {chapter.summary}
                      </p>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 text-[10px] text-muted-foreground/70">
                        <span className="inline-flex items-center gap-1">
                          <Timer className="w-3 h-3" />
                          {chapterMinutes(chapter)} min
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Network className="w-3 h-3" />
                          diagram
                        </span>
                        {chapter.codeExample && (
                          <span className="inline-flex items-center gap-1">
                            <span className="font-mono">{"</>"}</span>
                            {chapter.codeExample.language}
                          </span>
                        )}
                        <span className="inline-flex items-center gap-1">
                          <GraduationCap className="w-3 h-3" />
                          {chapter.quiz.length}-question quiz
                        </span>
                      </div>
                    </div>

                    <ArrowRight
                      className="shrink-0 w-4 h-4 text-muted-foreground/40 group-hover:text-foreground group-hover:translate-x-1 transition-all mt-1"
                      strokeWidth={1.5}
                    />
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
