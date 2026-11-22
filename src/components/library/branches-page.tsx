"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MAJOR_BRANCHES, FULLY_AUTHORED } from "./portal-data";

const ease = [0.22, 1, 0.36, 1] as const;

const ROM = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];

export function BranchesPage() {
  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
      {/* First-year banner */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease }}
      >
        <Link
          href="/rgpv/first-year-common"
          className="group relative flex flex-wrap items-center gap-5 rounded-2xl border border-red-500/40 bg-gradient-to-br from-red-500/15 via-violet-500/5 to-card/40 backdrop-blur p-6 sm:p-8 overflow-hidden hover:-translate-y-1 hover:border-red-400 hover:shadow-2xl hover:shadow-red-900/20 transition-all duration-200 mb-10"
        >
          <span
            className="absolute -right-14 -top-16 w-52 h-52 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle,rgba(239,68,68,.3),transparent 70%)",
            }}
          />
          <span className="relative shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-red-800 flex items-center justify-center text-white shadow-xl shadow-red-900/40">
            <svg
              viewBox="0 0 24 24"
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 6.5C10 4.9 7 4.4 4 4.4v13.2c3 0 6 .5 8 2.1 2-1.6 5-2.1 8-2.1V4.4c-3 0-6 .5-8 2.1z" />
              <path d="M12 6.5v13.2" />
              <path d="m16.5 2.5 2.5 1.4-2.5 1.4" />
            </svg>
          </span>
          <span className="relative flex-1 min-w-[220px]">
            <span className="block text-[9.5px] uppercase tracking-[0.22em] text-red-400 mb-1">
              Start here · common to all 40 branches
            </span>
            <span className="font-serif text-2xl sm:text-3xl font-bold block leading-tight">
              First Year · Semesters I &amp; II
            </span>
            <span className="block text-xs text-muted-foreground mt-1.5 leading-relaxed max-w-2xl">
              One shared syllabus for every branch — 14 subjects across both
              semesters, all with full study content. If you are in your first
              year, this is your shelf, regardless of the branch printed on
              your admission slip.
            </span>
            <span className="flex flex-wrap gap-2 mt-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/20 px-3 py-1 text-xs">
                <b className="font-serif text-red-400 text-[13px]">I</b>
                Semester One
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/20 px-3 py-1 text-xs">
                <b className="font-serif text-red-400 text-[13px]">II</b>
                Semester Two
              </span>
              <span className="inline-flex items-center rounded-full border border-border/60 bg-muted/20 px-3 py-1 text-xs text-muted-foreground">
                Mathematics · Physics · Chemistry · Programming · Graphics ·
                Labs
              </span>
            </span>
          </span>
          <span className="relative shrink-0 w-full sm:w-auto">
            <span className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-gradient-to-br from-red-500 to-red-800 text-white shadow-lg shadow-red-900/30 group-hover:brightness-110 transition-all">
              Open first-year syllabus <ArrowRight className="w-4 h-4" />
            </span>
          </span>
        </Link>
      </motion.div>

      {/* Branch grid */}
      <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-3">
        <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
        Then your branch
      </div>
      <h2 className="font-serif text-3xl font-bold">Pick your branch</h2>
      <p className="text-muted-foreground text-sm max-w-3xl mt-2 mb-7 leading-relaxed">
        From Semester III onward the syllabus splits. Eight major B.Tech
        branches below — every card opens the full semester-by-semester
        syllabus and subject list.
      </p>

      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {MAJOR_BRANCHES.map((b, i) => {
          const authored = FULLY_AUTHORED.has(b.slug);
          return (
            <motion.div
              key={b.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, ease, delay: (i % 4) * 0.07 }}
            >
              <Link
                href={`/rgpv/${b.slug}`}
                className="group relative flex flex-col min-h-[238px] rounded-2xl border border-border/60 bg-gradient-to-br from-red-500/5 to-card/40 backdrop-blur p-5 overflow-hidden hover:-translate-y-1 hover:border-red-500/50 hover:shadow-xl hover:shadow-red-900/15 transition-all duration-200"
              >
                <span
                  aria-hidden
                  className="absolute -right-1.5 -bottom-5 font-serif text-6xl font-bold opacity-[0.055] pointer-events-none tracking-tight"
                >
                  {b.code}
                </span>
                <span className="flex items-center justify-between mb-3.5">
                  <span className="w-11 h-11 rounded-xl bg-gradient-to-br from-red-500 to-red-800 text-white flex items-center justify-center text-xs font-bold shadow-lg shadow-red-900/30">
                    {b.code}
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.18em] text-muted-foreground border border-border/60 rounded-full px-2.5 py-1">
                    B.Tech
                  </span>
                </span>
                <h3 className="font-serif text-lg leading-tight group-hover:text-red-400 transition-colors">
                  {b.name}
                </h3>
                <p className="text-[11.5px] text-muted-foreground mt-1.5 leading-relaxed">
                  {b.desc}
                </p>
                <span className="text-xs text-muted-foreground tabular-nums mt-2">
                  {b.sems} · {b.subjects} subjects
                </span>
                <span className="flex flex-wrap gap-1.5 my-3">
                  {ROM.slice(2).map((r) => (
                    <span
                      key={r}
                      className="w-6 h-5 flex items-center justify-center text-[8.5px] font-semibold text-muted-foreground border border-border/60 rounded-md bg-muted/15 group-hover:border-red-500/35 group-hover:text-foreground transition-colors tabular-nums"
                    >
                      {r}
                    </span>
                  ))}
                </span>
                <span className="mt-auto flex items-center justify-between text-[13px] text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    {authored ? (
                      <>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        Full content live
                      </>
                    ) : (
                      "Syllabus live"
                    )}
                  </span>
                  <span className="transition-transform group-hover:translate-x-1 group-hover:text-red-400">
                    Open →
                  </span>
                </span>
              </Link>
            </motion.div>
          );
        })}
      </div>

      <Link
        href="/rgpv"
        className="inline-flex items-center gap-2 mt-7 text-sm text-muted-foreground border-b border-dashed border-border/70 pb-0.5 hover:text-red-400 hover:border-red-400 transition-colors"
      >
        Looking for another branch? Browse all 40 →
      </Link>
    </div>
  );
}
