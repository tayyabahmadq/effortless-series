"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, GraduationCap } from "lucide-react";

/**
 * Top navigation for the Academics section.
 *
 * - Always shows a back-to-home link and the brand.
 * - On a subject page, shows the subject code + a breadcrumb.
 * - Deliberately separate from the Effortless Series navigation: the four
 *   academic PDFs appear ONLY inside /academics, never on the home page.
 *
 * `isOverview` is passed explicitly by the parent rather than read from
 * usePathname(), so SSR/prerender output always matches client hydration
 * (important for static-export deployments where the URL may carry .html).
 */
export function AcademicsNav({
  isOverview = false,
  subjectCode,
  subjectTitle,
  accent,
  backHref = "/",
  backLabel = "Syllabus",
}: {
  isOverview?: boolean;
  subjectCode?: string;
  subjectTitle?: string;
  accent?: string;
  /** Where the "back" link goes — normally the branch-semester syllabus page. */
  backHref?: string;
  backLabel?: string;
}) {
  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border/40">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 gap-3">
          <Link
            href="/"
            className="flex items-center gap-2.5 group shrink-0"
          >
            <motion.div
              initial={{ rotate: -8, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-9 h-9 rounded-md flex items-center justify-center text-white font-serif font-bold text-sm shadow-lg"
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
                Academic Library
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                RGPV · 2022 Curriculum
              </span>
            </div>
          </Link>

          <nav className="flex items-center gap-1 min-w-0">
            {isOverview ? (
              <span className="px-3 py-1.5 text-xs text-muted-foreground">
                Subject library
              </span>
            ) : (
              <Link
                href={backHref}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground border border-border/60 rounded-md hover:border-red-600/40 transition-all whitespace-nowrap"
              >
                <ArrowLeft className="w-3 h-3" />
                {backLabel}
              </Link>
            )}
            {subjectCode && (
              <span
                className="hidden sm:inline-flex items-center px-2.5 py-1.5 text-[11px] font-mono font-medium rounded-md whitespace-nowrap"
                style={{
                  color: accent ?? "#ef4444",
                  backgroundColor: `${accent ?? "#ef4444"}14`,
                  border: `1px solid ${accent ?? "#ef4444"}33`,
                }}
              >
                {subjectCode}
              </span>
            )}
            {subjectTitle && (
              <span className="hidden md:inline text-xs text-muted-foreground truncate max-w-[220px]">
                {subjectTitle}
              </span>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
