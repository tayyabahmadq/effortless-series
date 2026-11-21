"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";

/**
 * Site-wide header for the "Effortless Series Academic Library".
 *
 * Two tabs: the Academic Library (the RGPV university browser — primary)
 * and The Effortless Series (the 13-book career series — secondary, at
 * /series).
 */
export function LibraryNav({ active }: { active: "library" | "series" }) {
  const tabs = [
    {
      key: "library" as const,
      href: "/",
      label: "Academic Library",
      icon: <GraduationCap className="w-3.5 h-3.5" />,
    },
    {
      key: "series" as const,
      href: "/series",
      label: "The Effortless Series",
      icon: <BookOpen className="w-3.5 h-3.5" />,
    },
  ];

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border/40">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 gap-3">
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <motion.div
              initial={{ rotate: -8, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-9 h-9 rounded-md flex items-center justify-center text-white shadow-lg"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.62 0.22 25), oklch(0.45 0.20 25))",
                boxShadow: "0 6px 20px -6px oklch(0.62 0.22 25 / 0.45)",
              }}
            >
              <GraduationCap className="w-4.5 h-4.5" strokeWidth={2.2} />
            </motion.div>
            <div className="hidden sm:flex flex-col leading-none">
              <span className="font-serif text-sm font-semibold tracking-wide text-foreground">
                Effortless Series
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Academic Library
              </span>
            </div>
          </Link>

          <nav className="flex items-center gap-1.5">
            {tabs.map((t) => (
              <Link
                key={t.key}
                href={t.href}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-md transition-all border ${
                  active === t.key
                    ? "text-red-400 border-red-600/30 bg-red-600/10"
                    : "text-muted-foreground hover:text-foreground border-transparent hover:bg-muted/30"
                }`}
              >
                {t.icon}
                <span className="hidden sm:inline">{t.label}</span>
                <span className="sm:hidden">
                  {t.key === "library" ? "Library" : "Series"}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
