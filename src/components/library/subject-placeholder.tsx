"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  BookOpen,
  Clock,
  FileText,
  GraduationCap,
  Layers as LayersIcon,
  PenLine,
} from "lucide-react";
import type { RgpvBranch, RgpvSubject } from "@/lib/rgpv/branches-data";
import { LibraryNav } from "./library-nav";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Structured placeholder for RGPV subjects whose chapter → topic → content
 * skeleton has not been authored yet. Shows the official syllabus metadata
 * and explains exactly what is coming, without faking content.
 */
export function SubjectPlaceholder({
  branch,
  semNumber,
  subject,
}: {
  branch: RgpvBranch;
  semNumber: number;
  subject: RgpvSubject;
}) {
  const backHref = `/rgpv/${branch.slug}/${semNumber}`;

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
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-10 sm:py-14 relative">
          <Link
            href={backHref}
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors mb-5"
          >
            <ArrowLeft className="w-3 h-3" />
            Semester {semNumber} syllabus
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded text-red-400 bg-red-600/15">
                {subject.code}
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                {branch.name} · Semester {semNumber}
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground leading-tight">
              {subject.name} <span className="text-red-400">Notes</span>
              <span className="sr-only">
                {" "}
                — {subject.code}, {branch.name} Semester {semNumber}, RGPV
              </span>
            </h1>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Official RGPV 2022-curriculum subject ({subject.code}), listed in
              the Semester {semNumber} scheme of {branch.name}. Unit-wise notes
              for this subject are being authored.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-5 sm:px-8 py-10 sm:py-14 space-y-6">
        {/* In preparation panel */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease, delay: 0.1 }}
          className="rounded-2xl border border-border/50 bg-card/30 p-6 sm:p-8 relative overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 60% at 85% 10%, oklch(0.62 0.22 25), transparent 70%)",
            }}
          />
          <div className="relative">
            <div className="flex items-center gap-2 mb-3">
              <PenLine className="w-4 h-4 text-red-400" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-red-400 font-semibold">
                Content in preparation
              </span>
            </div>
            <h2 className="font-serif text-2xl font-bold text-foreground leading-snug">
              Chapter cards and topic cards for this subject are being authored
            </h2>
            <p className="mt-3 text-sm sm:text-[15px] text-muted-foreground leading-relaxed">
              Every subject in this library follows the same study structure —
              the official syllabus broken into <strong>chapter cards</strong>,
              each chapter split into <strong>topic cards</strong>, and every
              topic written at exam-ready depth (300–500 words per section with
              diagrams, tables, code and worked examples). The four AI &amp; DS
              Semester V subjects already carry this full treatment; this
              subject is queued for an upcoming update.
            </p>
          </div>
        </motion.div>

        {/* What the full subject page will contain */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease }}
          className="rounded-2xl border border-border/50 bg-card/20 p-6 sm:p-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <LayersIcon className="w-4 h-4 text-muted-foreground" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground font-semibold">
              What you will find here once authored
            </span>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              {
                icon: BookOpen,
                title: "Chapter cards",
                body: "The syllabus unit-wise, each unit as a card with its summary and section map.",
              },
              {
                icon: FileText,
                title: "Topic cards",
                body: "Every numbered section as a navigable card, tagged with the diagrams, tables and code it carries.",
              },
              {
                icon: GraduationCap,
                title: "Exam-ready content",
                body: "3–5 paragraphs (~300–500 words) per topic with worked examples — enough to write a full 7-mark answer.",
              },
              {
                icon: Clock,
                title: "Progress tracking",
                body: "Mark topics as read; per-unit progress bars remember where you left off.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="flex items-start gap-3 rounded-xl border border-border/40 bg-muted/10 px-4 py-3.5"
              >
                <f.icon className="w-4 h-4 text-red-400/80 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-medium text-foreground">
                    {f.title}
                  </div>
                  <div className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                    {f.body}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* See a completed example */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease }}
          className="rounded-2xl border border-border/50 bg-muted/8 px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4"
        >
          <div className="flex-1">
            <div className="text-sm font-medium text-foreground">
              Want to see a completed subject?
            </div>
            <div className="text-xs text-muted-foreground mt-1 leading-relaxed">
              The AI &amp; DS Semester V shelf — Theory of Computation, Machine
              Learning, Internet &amp; Web Technology, Management Information
              System — shows the full chapter → topic → content treatment.
            </div>
          </div>
          <Link
            href="/rgpv/ai-and-data-science/5/ad-501"
            className="shrink-0 inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-md text-white"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.62 0.22 25), oklch(0.45 0.20 25))",
            }}
          >
            <BookOpen className="w-3.5 h-3.5" />
            Open AD-501
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
