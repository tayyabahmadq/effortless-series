"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowUpRight, Timer } from "lucide-react";
import { useState } from "react";
import { books } from "@/lib/books-data";
import { bookMinutes, formatMinutes } from "@/lib/reading";
import { useReaderStore } from "@/store/reader-store";

// Filter values match the book.layer field exactly (see books-data.ts)
const layerFilters = [
  { name: "All", value: null },
  { name: "Store & protect data", value: "Store & protect data" },
  { name: "Gate identity & keys", value: "Gate identity and keys" },
  { name: "Defend the perimeter", value: "Defend the perimeter" },
  { name: "Move the bytes", value: "Move the bytes" },
  { name: "Shape & stretch", value: "Shape & stretch" },
  { name: "Prove it works", value: "Prove it works" },
  { name: "Ship, survive, watch", value: "Ship, survive, watch" },
] as const;

export function BooksGrid() {
  const { searchQuery, setSearchQuery, openBook } = useReaderStore();
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const q = searchQuery.toLowerCase();
  const filteredBooks = books.filter((b) => {
    const matchesSearch =
      !q ||
      b.title.toLowerCase().includes(q) ||
      b.tagline.toLowerCase().includes(q) ||
      b.description.toLowerCase().includes(q) ||
      b.chapters.some((c) => {
        // title + summary first (cheap)
        if (
          c.title.toLowerCase().includes(q) ||
          c.summary.toLowerCase().includes(q) ||
          (c.keyIdea?.toLowerCase().includes(q) ?? false)
        )
          return true;
        // deep content: deep dive, pitfalls, terms, interviews, quiz, code
        return (
          c.deepDive.some(
            (s) =>
              s.heading.toLowerCase().includes(q) ||
              s.paragraphs.some((p) => p.toLowerCase().includes(q))
          ) ||
          c.pitfalls.some(
            (p) =>
              p.mistake.toLowerCase().includes(q) ||
              p.fix.toLowerCase().includes(q)
          ) ||
          c.keyTerms.some(
            (t) =>
              t.term.toLowerCase().includes(q) ||
              t.definition.toLowerCase().includes(q)
          ) ||
          c.interviewQuestions.some(
            (qa) =>
              qa.q.toLowerCase().includes(q) || qa.a.toLowerCase().includes(q)
          ) ||
          c.quiz.some((qa) => qa.question.toLowerCase().includes(q)) ||
          (c.codeExample?.caption.toLowerCase().includes(q) ?? false)
        );
      });
    // Compare the book's layer directly to the active filter value
    const matchesLayer = !activeFilter || b.layer === activeFilter;
    return matchesSearch && matchesLayer;
  });

  return (
    <section id="books" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-red-600/60" />
              <span className="text-[11px] uppercase tracking-[0.32em] text-red-400/90 font-medium">
                The Library
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground leading-tight tracking-tight">
              Thirteen books,{" "}
              <span className="italic text-red-400/95">one system,</span>{" "}
              seen from thirteen angles.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex items-end"
          >
            <p className="text-muted-foreground/85 leading-relaxed">
              Picture one user request. It crosses the network, hits a load
              balancer, lands on your service, proves who the caller is, opens a
              transaction, reads keys wrapped in TLS, publishes an event, returns
              with security headers — and leaves traces you can query later.{" "}
              <span className="text-foreground">One request, thirteen books.</span>
            </p>
          </motion.div>
        </div>

        {/* Controls: search + layer filters */}
        <div className="mb-12 space-y-5">
          <div className="relative max-w-xl">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/70" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, topic, or chapter — try 'idempotency' or 'replicas'…"
              className="w-full pl-10 pr-10 py-3 bg-card/40 border border-border/60 rounded-lg text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-red-600/50 focus:bg-card/70 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {layerFilters.map((f) => (
              <button
                key={f.value ?? "all"}
                onClick={() => setActiveFilter(f.value)}
                className={`px-3 py-1.5 text-xs rounded-full border transition-all ${
                  activeFilter === f.value
                    ? "bg-red-600/15 text-red-400 border-red-600/40"
                    : "bg-card/30 text-muted-foreground border-border/50 hover:border-red-600/30 hover:text-foreground"
                }`}
              >
                {f.name}
              </button>
            ))}
          </div>
        </div>

        {/* Books grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout">
            {filteredBooks.map((book, i) => (
              <motion.button
                key={book.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.45,
                  delay: Math.min(i * 0.04, 0.3),
                  ease: [0.22, 1, 0.36, 1],
                }}
                onClick={() => openBook(book.id)}
                className="group relative text-left rounded-xl overflow-hidden border border-border/60 bg-card/40 hover:bg-card/70 backdrop-blur-sm transition-all hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/40"
                style={{
                  // Use book accent color on hover via CSS var
                  ["--book-accent" as never]: book.accentColor,
                }}
              >
                {/* Top accent stripe */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 opacity-70 group-hover:opacity-100 group-hover:h-1 transition-all"
                  style={{ backgroundColor: book.accentColor }}
                />

                {/* Hover glow */}
                <div
                  className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at top, ${book.accentColor}15, transparent 60%)`,
                  }}
                />

                <div className="relative p-6">
                  {/* Book number / cover */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="relative">
                      <div
                        className="w-16 h-20 rounded-sm flex flex-col items-center justify-center shadow-lg relative overflow-hidden"
                        style={{
                          background: `linear-gradient(135deg, ${book.accentColor}22, ${book.accentColor}05)`,
                          border: `1px solid ${book.accentColor}40`,
                        }}
                      >
                        <div className="absolute top-1 left-1 right-1 h-px" style={{ backgroundColor: `${book.accentColor}50` }} />
                        <div className="absolute bottom-1 left-1 right-1 h-px" style={{ backgroundColor: `${book.accentColor}50` }} />
                        <span
                          className="font-serif text-xl font-semibold"
                          style={{ color: book.accentColor }}
                        >
                          {book.emoji}
                        </span>
                        <span className="text-[8px] uppercase tracking-[0.2em] text-muted-foreground mt-1">
                          Book
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight
                      className="w-5 h-5 text-muted-foreground/40 group-hover:text-foreground group-hover:rotate-12 transition-all"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Layer tag */}
                  <div
                    className="inline-block px-2 py-0.5 rounded text-[10px] uppercase tracking-[0.15em] mb-3 font-medium"
                    style={{
                      color: book.accentColor,
                      backgroundColor: `${book.accentColor}15`,
                    }}
                  >
                    {book.layer}
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-medium text-foreground mb-2 leading-snug">
                    {book.title}
                  </h3>

                  {/* Short description */}
                  <p className="text-sm text-muted-foreground/85 leading-relaxed line-clamp-3 mb-4">
                    {book.tagline}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/40">
                    <span className="text-xs text-muted-foreground/80">
                      {book.chapters.length} chapters
                    </span>
                    <span className="text-xs text-muted-foreground/80 inline-flex items-center gap-1">
                      <Timer className="w-3 h-3" />
                      {formatMinutes(bookMinutes(book))}
                    </span>
                    <span className="text-xs text-muted-foreground/80 hidden sm:inline">
                      {book.months}
                    </span>
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredBooks.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            <p className="text-sm">
              No books match &ldquo;{searchQuery}&rdquo;
              {activeFilter ? ` in ${activeFilter}` : ""}. Try a different search.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
