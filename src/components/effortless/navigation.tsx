"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { BookOpen, Search, CheckCircle2 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { books } from "@/lib/books-data";
import { useReaderStore } from "@/store/reader-store";
import { useMounted } from "@/hooks/use-mounted";

const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "Books", href: "#books" },
  { label: "Layers", href: "#layers" },
  { label: "Study Plan", href: "#study-plan" },
  { label: "Author", href: "#author" },
];

export function Navigation() {
  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const [scrolled, setScrolled] = useState(false);
  const setSearchQuery = useReaderStore((s) => s.setSearchQuery);
  const readMap = useReaderStore((s) => s.readMap);
  const mounted = useMounted();

  const totalChapters = useMemo(
    () => books.reduce((sum, b) => sum + b.chapters.length, 0),
    []
  );
  const readCount = useMemo(
    () => Object.values(readMap).filter(Boolean).length,
    [readMap]
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/40"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <motion.div
        className="absolute bottom-0 left-0 h-px w-full origin-left bg-gradient-to-r from-red-600 via-red-400 to-red-600"
        style={{ scaleX: progressScale }}
      />
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          <a href="#top" className="flex items-center gap-2.5 group">
            <motion.div
              initial={{ rotate: -10, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-9 h-9 rounded-md bg-gradient-to-br from-red-500 to-red-800 flex items-center justify-center text-white font-serif font-bold text-sm shadow-lg shadow-red-600/30"
            >
              E
              <div className="absolute inset-0 rounded-md ring-1 ring-red-400/40 group-hover:ring-red-400/60 transition-all" />
            </motion.div>
            <div className="hidden sm:flex flex-col leading-none">
              <span className="font-serif text-sm font-semibold tracking-wide text-foreground">
                The Effortless Series
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                2026 Edition
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3.5 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/40"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {mounted && readCount > 0 && (
              <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-emerald-300/90 border border-emerald-500/25 bg-emerald-500/10 rounded-md">
                <CheckCircle2 className="w-3 h-3" />
                {readCount}/{totalChapters} read
              </span>
            )}
            <a
              href="#books"
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground border border-border/60 rounded-md hover:border-red-600/40 transition-all"
            >
              <Search className="w-3 h-3" />
              <span>Browse the library</span>
            </a>
            <button
              onClick={() => {
                setSearchQuery("");
                document.getElementById("books")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium bg-red-600/10 hover:bg-red-600/20 text-red-400 border border-red-600/30 rounded-md transition-all"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Start reading</span>
              <span className="sm:hidden">Read</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
