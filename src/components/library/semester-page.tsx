"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Circle,
  GraduationCap,
} from "lucide-react";
import type { RgpvBranch, RgpvSemester } from "@/lib/rgpv/branches-data";
import { fullContentKeys } from "@/lib/rgpv/content-map";
import { LibraryNav } from "./library-nav";

const ease = [0.22, 1, 0.36, 1] as const;

export function SemesterPage({
  branch,
  semester,
}: {
  branch: RgpvBranch;
  semester: RgpvSemester;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <LibraryNav active="library" />

      <section className="relative overflow-hidden border-b border-border/40">
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 20% 0%, oklch(0.62 0.22 25), transparent 70%)",
          }}
        />
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10 sm:py-14 relative">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-5 flex-wrap">
            <Link
              href="/"
              className="hover:text-foreground transition-colors"
            >
              Branches
            </Link>
            <span className="text-muted-foreground/40">/</span>
            <Link
              href={`/rgpv/${branch.slug}`}
              className="hover:text-foreground transition-colors"
            >
              {branch.name}
            </Link>
            <span className="text-muted-foreground/40">/</span>
            <span className="text-foreground">Semester {semester.number}</span>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              <span
                className="font-mono text-xs font-bold px-2.5 py-1 rounded-md text-white"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.62 0.22 25), oklch(0.45 0.20 25))",
                }}
              >
                Sem {semester.number}
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                <GraduationCap className="w-3.5 h-3.5" />
                {branch.name}
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground leading-tight">
              Semester {semester.number} syllabus
            </h1>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
              {semester.subjects.length} subjects from the official RGPV 2022
              scheme. Each subject opens as chapter cards → topic cards →
              content; green check = full study content available.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {semester.subjects.map((s, i) => {
            const hasContent = fullContentKeys.has(
              `${branch.slug}/${semester.number}/${s.slug}`
            );
            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, ease, delay: Math.min(i * 0.02, 0.12) }}
              >
                <Link
                  href={`/rgpv/${branch.slug}/${semester.number}/${s.slug}`}
                  className="group flex items-start gap-2.5 rounded-lg border border-border/50 bg-card/30 hover:bg-card/50 transition-all px-3.5 py-3 h-full"
                >
                  <span className="shrink-0 mt-0.5">
                    {hasContent ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Circle className="w-4 h-4 text-muted-foreground/30" />
                    )}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-mono text-[11px] font-semibold text-red-400/90">
                        {s.code}
                      </span>
                      {hasContent && (
                        <span className="text-[9px] uppercase tracking-wider text-emerald-300 border border-emerald-500/25 bg-emerald-500/10 rounded px-1 py-px">
                          Full content
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-foreground/90 leading-snug mt-0.5 group-hover:text-red-400 transition-colors">
                      {s.name}
                    </div>
                  </div>
                  <ArrowRight className="shrink-0 w-3.5 h-3.5 text-muted-foreground/30 group-hover:text-red-400 transition-colors mt-1" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10">
          <Link
            href={`/rgpv/${branch.slug}`}
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-3 h-3" />
            All semesters of {branch.name}
          </Link>
        </div>
      </div>
    </div>
  );
}
