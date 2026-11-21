"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Landmark,
  Layers as LayersIcon,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import {
  rgpvBranches,
  rgpvBranchCount,
  rgpvSubjectCount,
} from "@/lib/rgpv/branches-data";
import { fullContentKeys } from "@/lib/rgpv/content-map";
import { LibraryNav } from "./library-nav";

const ease = [0.22, 1, 0.36, 1] as const;

const FEATURED = [
  { key: "ai-and-data-science/5/ad-501", code: "AD-501", title: "Theory of Computation", sem: 5 },
  { key: "ai-and-data-science/5/ad-502", code: "AD-502", title: "Machine Learning", sem: 5 },
  { key: "ai-and-data-science/5/ad-503-a", code: "AD-503(A)", title: "Internet & Web Technology", sem: 5 },
  { key: "ai-and-data-science/5/ad-504-a", code: "AD-504(A)", title: "Management Information System", sem: 5 },
];

function branchSubjectCount(slug: string) {
  const b = rgpvBranches.find((x) => x.slug === slug);
  if (!b) return 0;
  return b.semesters.reduce((s, x) => s + x.subjects.length, 0);
}

export function LibraryHome() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <LibraryNav active="library" />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/40">
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 25% 0%, oklch(0.62 0.22 25), transparent 70%)",
          }}
        />
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14 sm:py-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <span
                className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.2em] font-semibold px-2.5 py-1 rounded-md text-white"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.62 0.22 25), oklch(0.45 0.20 25))",
                }}
              >
                <Landmark className="w-3 h-3" />
                RGPV · 2022 Curriculum
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                B.Tech · Batches admitted 2022 onwards
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground leading-[1.05] tracking-tight">
              Effortless Series{" "}
              <span className="text-red-400">Academic Library</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              The complete RGPV university library: {rgpvBranchCount} branches,{" "}
              {rgpvSubjectCount} subjects across every semester — each organized
              as <em>syllabus → chapter cards → topic cards → content</em>.
              Four AI &amp; DS subjects already carry full exam-ready study
              content; the rest are being authored branch by branch.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#branches"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-md text-white transition-transform hover:scale-[1.02]"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.62 0.22 25), oklch(0.45 0.20 25))",
                  boxShadow: "0 10px 28px -10px oklch(0.62 0.22 25 / 0.55)",
                }}
              >
                Browse {rgpvBranchCount} branches
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/series"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground border border-border/60 rounded-md hover:border-red-600/40 transition-all"
              >
                <BookOpen className="w-4 h-4" />
                The Effortless Series
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.2 }}
            className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3"
          >
            {[
              { label: "University", value: "RGPV" },
              { label: "Branches", value: rgpvBranchCount },
              { label: "Subjects", value: rgpvSubjectCount },
              { label: "Full-content subjects", value: 4 },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-border/40 bg-muted/10 px-4 py-3"
              >
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {s.label}
                </div>
                <div className="text-2xl font-serif font-bold text-foreground tabular-nums">
                  {s.value}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured: AI&DS Semester V full-content subjects */}
      <section id="featured" className="max-w-6xl mx-auto px-5 sm:px-8 py-14 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease }}
          className="flex items-center gap-2 mb-2"
        >
          <Sparkles className="w-4 h-4 text-red-400" />
          <span className="text-[11px] uppercase tracking-[0.25em] text-red-400 font-semibold">
            Complete now — start here
          </span>
        </motion.div>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-2">
          AI &amp; DS · Semester V — four subjects, fully authored
        </h2>
        <p className="text-sm text-muted-foreground mb-10 max-w-2xl leading-relaxed">
          Chapter cards, topic cards and exam-ready content (300–500 words per
          section, diagrams, tables, code, plus a per-subject Guide-me exam
          plan) — ready to study today.
        </p>

        <div className="grid sm:grid-cols-2 gap-5">
          {FEATURED.map((f, i) => (
            <motion.div
              key={f.key}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease, delay: i * 0.08 }}
            >
              <Link
                href={`/rgpv/${f.key}`}
                className="group block rounded-2xl border border-border/50 bg-card/30 hover:bg-card/50 transition-all p-6 relative overflow-hidden"
              >
                <div
                  className="absolute inset-0 opacity-[0.06] pointer-events-none group-hover:opacity-[0.12] transition-opacity"
                  style={{
                    background:
                      "radial-gradient(ellipse 60% 50% at 80% 0%, oklch(0.62 0.22 25), transparent 70%)",
                  }}
                />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded text-red-400 bg-red-600/15">
                      {f.code}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      AI &amp; DS · Semester {f.sem}
                    </span>
                    <span className="ml-auto inline-flex items-center gap-1 text-[10px] text-emerald-300 border border-emerald-500/25 bg-emerald-500/10 rounded px-1.5 py-0.5">
                      <CheckCircle2 className="w-3 h-3" />
                      Full content
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground leading-snug group-hover:text-red-400 transition-colors">
                    {f.title}
                  </h3>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-[11px] text-muted-foreground">
                      Syllabus → chapters → topics → content
                    </span>
                    <span className="flex items-center gap-1 text-xs font-medium text-red-400 transition-transform group-hover:translate-x-0.5">
                      Open
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* RGPV branch browser */}
      <section
        id="branches"
        className="border-t border-border/40 bg-muted/8 scroll-mt-16"
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14 sm:py-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease }}
            className="flex items-center gap-2 mb-2"
          >
            <Landmark className="w-4 h-4 text-red-400" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-red-400 font-semibold">
              University · RGPV
            </span>
          </motion.div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal
          </h2>
          <p className="text-sm text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            All {rgpvBranchCount} B.Tech branches of the current (2022 onwards)
            curriculum. Open a branch to see its semesters and the official
            syllabus subject list — each subject opens as chapter cards and
            topic cards. Note: a few branch-semesters have partial listings
            because the official source PDFs are scanned images.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {rgpvBranches.map((b, i) => {
              const count = branchSubjectCount(b.slug);
              return (
                <motion.div
                  key={b.slug}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, ease, delay: Math.min((i % 9) * 0.04, 0.2) }}
                >
                  <Link
                    href={`/rgpv/${b.slug}`}
                    className="group flex items-center gap-3 rounded-xl border border-border/50 bg-card/30 hover:bg-card/50 transition-all px-4 py-3.5 h-full"
                  >
                    <span className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center bg-red-600/12 text-red-400">
                      <GraduationCap className="w-4 h-4" />
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-foreground leading-snug group-hover:text-red-400 transition-colors">
                        {b.name}
                      </div>
                      <div className="text-[11px] text-muted-foreground mt-0.5">
                        {b.semesters.length} semesters · {count} subjects
                      </div>
                    </div>
                    <ArrowRight className="shrink-0 w-3.5 h-3.5 text-muted-foreground/40 group-hover:text-red-400 transition-colors" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Effortless Series tab — second shelf */}
      <section className="border-t border-border/40">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease }}
          >
            <div className="flex items-center gap-2 mb-2">
              <LayersIcon className="w-4 h-4 text-red-400" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-red-400 font-semibold">
                Second shelf
              </span>
            </div>
            <div className="rounded-2xl border border-border/50 bg-card/30 hover:bg-card/50 transition-all p-6 sm:p-8 relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 60% at 85% 20%, oklch(0.62 0.22 25), transparent 70%)",
                }}
              />
              <div className="relative flex flex-col sm:flex-row sm:items-center gap-5">
                <span className="shrink-0 w-14 h-14 rounded-xl flex items-center justify-center bg-red-600/12 text-red-400">
                  <BookOpen className="w-6 h-6" />
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-2xl font-bold text-foreground">
                    The Effortless Series
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed max-w-2xl">
                    13 books · 182 chapters for the 2026 software engineer —
                    the career series that started this library. Now the second
                    shelf: open it as its own tab whenever you want the
                    industry view alongside your university syllabus.
                  </p>
                </div>
                <Link
                  href="/series"
                  className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-md text-white transition-transform hover:scale-[1.02]"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.62 0.22 25), oklch(0.45 0.20 25))",
                    boxShadow: "0 10px 28px -10px oklch(0.62 0.22 25 / 0.55)",
                  }}
                >
                  Open series
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-border/40">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8">
          <p className="text-xs text-muted-foreground leading-relaxed">
            Effortless Series Academic Library — RGPV 2022 curriculum parsed
            from the official scheme/syllabus documents. Structure: university →
            branch → semester → syllabus → chapter cards → topic cards →
            content. Full study content currently available for the four AI &amp;
            DS Semester V subjects; remaining subjects are being authored.
          </p>
        </div>
      </footer>
    </div>
  );
}
