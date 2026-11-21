"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Circle,
  GraduationCap,
  Info,
} from "lucide-react";
import type { RgpvBranch, RgpvSubject } from "@/lib/rgpv/branches-data";
import { getSubjectContent } from "@/lib/rgpv/content-map";
import { LibraryNav } from "./library-nav";

const ease = [0.22, 1, 0.36, 1] as const;

export function BranchPage({ branch }: { branch: RgpvBranch }) {
  const totalSubjects = branch.semesters.reduce(
    (s, x) => s + x.subjects.length,
    0
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <LibraryNav active="library" />

      {/* Header */}
      <section className="relative overflow-hidden border-b border-border/40">
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 75% 55% at 22% 0%, oklch(0.62 0.22 25), transparent 70%)",
          }}
        />
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10 sm:py-14 relative">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft className="w-3 h-3" />
            All branches
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-red-400 font-semibold">
                <GraduationCap className="w-3.5 h-3.5" />
                RGPV · B.Tech
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground leading-tight">
              {branch.name}
            </h1>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
              {branch.semesters.length} semesters · {totalSubjects} subjects in
              the official 2022 curriculum. Each subject opens as chapter cards
              and topic cards; subjects marked with a green check already carry
              full study content.
            </p>
            <div className="mt-6 inline-flex items-start gap-2 rounded-lg border border-border/50 bg-muted/10 px-3.5 py-2.5 max-w-2xl">
              <Info className="w-3.5 h-3.5 text-muted-foreground shrink-0 mt-0.5" />
              <p className="text-xs text-muted-foreground leading-relaxed">
                Subject lists are parsed from the official scheme documents.
                64 of the 451 official PDFs are scanned images, so some
                branch-semesters may list fewer subjects than the printed
                scheme. Elective variants appear as separate rows — e.g.
                AD-604(A), AD-604(B).
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Semesters */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10 sm:py-14 space-y-10">
        {branch.semesters.map((sem, si) => (
          <motion.section
            key={sem.number}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease, delay: Math.min(si * 0.03, 0.15) }}
          >
            <div className="flex items-center gap-3 mb-4 pb-2.5 border-b border-border/40">
              <span
                className="font-mono text-xs font-bold px-2.5 py-1 rounded-md text-white"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.62 0.22 25), oklch(0.45 0.20 25))",
                }}
              >
                Sem {sem.number}
              </span>
              <h2 className="font-serif text-2xl font-bold text-foreground">
                Semester {sem.number} syllabus
              </h2>
              {sem.number <= 2 && (
                <span className="text-[10px] uppercase tracking-wider text-sky-300/90 border border-sky-500/25 bg-sky-500/10 rounded px-1.5 py-px">
                  Common First Year
                </span>
              )}
              <span className="text-[11px] text-muted-foreground tabular-nums ml-auto">
                {sem.subjects.length} subjects
              </span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {sem.subjects.map((s, i) => (
                <SubjectRow
                  key={`${sem.number}-${s.slug}`}
                  branchSlug={branch.slug}
                  semNumber={sem.number}
                  subject={s}
                  index={i}
                />
              ))}
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
}

function SubjectRow({
  branchSlug,
  semNumber,
  subject,
  index,
}: {
  branchSlug: string;
  semNumber: number;
  subject: RgpvSubject;
  index: number;
}) {
  const hasContent =
    getSubjectContent(branchSlug, semNumber, subject.slug) !== undefined;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, ease, delay: Math.min(index * 0.02, 0.12) }}
    >
      <Link
        href={`/rgpv/${branchSlug}/${semNumber}/${subject.slug}`}
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
              {subject.code}
            </span>
            {hasContent && (
              <span className="text-[9px] uppercase tracking-wider text-emerald-300 border border-emerald-500/25 bg-emerald-500/10 rounded px-1 py-px">
                Full content
              </span>
            )}
          </div>
          <div className="text-sm text-foreground/90 leading-snug mt-0.5 group-hover:text-red-400 transition-colors">
            {subject.name}
          </div>
        </div>
        <ArrowRight className="shrink-0 w-3.5 h-3.5 text-muted-foreground/30 group-hover:text-red-400 transition-colors mt-1" />
      </Link>
    </motion.div>
  );
}
