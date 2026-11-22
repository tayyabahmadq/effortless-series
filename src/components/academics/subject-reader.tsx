"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState, useEffect } from "react";
import {
  BookOpen,
  Compass,
  ChevronRight,
  Check,
  Layers as LayersIcon,
  LayoutGrid,
  Circle,
  CircleCheck,
} from "lucide-react";
import type { AcademicSubject } from "@/lib/academics/types";
import { SectionRenderer } from "./section-renderer";
import { StudyPlanView } from "./study-plan-view";
import { AcademicsNav } from "./academics-nav";
import { useMounted } from "@/hooks/use-mounted";

const ease = [0.22, 1, 0.36, 1] as const;

type Tab = "content" | "topics" | "guide";

interface ReadState {
  [sectionId: string]: boolean;
}

function storageKey(subjectId: string) {
  return `acad-progress-${subjectId}`;
}

export function SubjectReader({
  subject,
  backHref = "/",
  backLabel = "Syllabus",
}: {
  subject: AcademicSubject;
  backHref?: string;
  backLabel?: string;
}) {
  const [tab, setTab] = useState<Tab>("content");
  const [activeUnit, setActiveUnit] = useState<number>(subject.units[0]?.number ?? 1);
  const [read, setRead] = useState<ReadState>({});
  const mounted = useMounted();

  // Load persisted read state on mount (client-only).
  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey(subject.id));
      if (raw) {
        const parsed = JSON.parse(raw) as ReadState;
        // Defer the set so it does not run synchronously inside the effect body.
        Promise.resolve().then(() => setRead(parsed));
      }
    } catch {
      /* ignore */
    }
  }, [subject.id]);

  useEffect(() => {
    if (!mounted) return;
    try {
      localStorage.setItem(storageKey(subject.id), JSON.stringify(read));
    } catch {
      /* ignore */
    }
  }, [read, subject.id]);

  const activeUnitObj = useMemo(
    () => subject.units.find((u) => u.number === activeUnit) ?? subject.units[0],
    [subject.units, activeUnit]
  );

  const totalSections = useMemo(
    () => subject.units.reduce((s, u) => s + u.chapter.sections.length, 0),
    [subject.units]
  );
  const readCount = Object.values(read).filter(Boolean).length;
  const progressPct = totalSections
    ? Math.round((readCount / totalSections) * 100)
    : 0;

  const toggleRead = (sectionId: string) => {
    setRead((r) => ({ ...r, [sectionId]: !r[sectionId] }));
  };

  // Jump from the Topics tab to a specific section in the Content tab.
  const jumpToSection = (unitNumber: number, sectionNumber: string) => {
    setActiveUnit(unitNumber);
    setTab("content");
    // Defer the scroll until the content tab has rendered.
    setTimeout(() => {
      const el = document.getElementById(`sec-${sectionNumber.replace(".", "-")}`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AcademicsNav
        subjectCode={subject.code}
        subjectTitle={subject.title}
        accent={subject.accentColor}
        backHref={backHref}
        backLabel={backLabel}
      />

      {/* Hero band */}
      <section className="relative overflow-hidden border-b border-border/40">
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 80% 60% at 20% 0%, ${subject.accentColor}, transparent 70%)`,
          }}
        />
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10 sm:py-14 relative">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="flex flex-col sm:flex-row sm:items-end gap-6"
          >
            <div
              className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl font-serif font-bold shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${subject.accentColor}, ${subject.accentColor}99)`,
                color: "white",
                boxShadow: `0 12px 30px -10px ${subject.accentColor}80`,
              }}
            >
              {subject.emoji}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span
                  className="font-mono text-xs font-semibold px-2 py-0.5 rounded"
                  style={{
                    color: subject.accentColor,
                    backgroundColor: `${subject.accentColor}18`,
                  }}
                >
                  {subject.code}
                </span>
                <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  {subject.program}
                </span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground leading-tight">
                {subject.title}{" "}
                <span className="text-red-400">Notes</span>
                <span className="sr-only">
                  {" "}
                  — {subject.code}, {subject.program}
                </span>
              </h1>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
                {subject.tagline}
              </p>
            </div>
          </motion.div>

          {/* Progress + stats */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.15 }}
            className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3"
          >
            {[
              { label: "Units", value: subject.unitCount },
              { label: "Sections", value: totalSections },
              { label: "Read", value: `${readCount}/${totalSections}` },
              { label: "Progress", value: `${progressPct}%` },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-lg border border-border/40 bg-muted/10 px-3 py-2.5"
              >
                <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {s.label}
                </div>
                <div className="text-base font-semibold text-foreground tabular-nums">
                  {s.value}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Always-visible progress bar with unit breakdown */}
          <div className="mt-4">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground font-medium">
                Your progress
              </span>
              <span className="text-[11px] font-mono tabular-nums" style={{ color: subject.accentColor }}>
                {readCount} of {totalSections} sections read
              </span>
            </div>
            <div className="h-2 rounded-full bg-muted/30 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progressPct}%` }}
                transition={{ duration: 0.6, ease }}
                className="h-full rounded-full"
                style={{ backgroundColor: subject.accentColor }}
              />
            </div>
            {/* Per-unit mini bars */}
            <div className="mt-2.5 grid grid-cols-3 sm:grid-cols-5 gap-1.5">
              {subject.units.map((u) => {
                const uRead = u.chapter.sections.filter((s) => read[`${u.number}-${s.number}`]).length;
                const uTotal = u.chapter.sections.length;
                const uPct = uTotal ? Math.round((uRead / uTotal) * 100) : 0;
                return (
                  <div key={u.number} className="flex flex-col gap-1">
                    <div className="flex items-center justify-between text-[9px] text-muted-foreground">
                      <span className="font-mono">U{u.roman}</span>
                      <span className="tabular-nums">{uRead}/{uTotal}</span>
                    </div>
                    <div className="h-1 rounded-full bg-muted/25 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{ width: `${uPct}%`, backgroundColor: subject.accentColor }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Tab bar */}
      <div className="sticky top-16 z-30 bg-background/85 backdrop-blur-xl border-b border-border/40">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-center gap-1 h-12">
            <TabButton
              active={tab === "content"}
              onClick={() => setTab("content")}
              accent={subject.accentColor}
              icon={<BookOpen className="w-4 h-4" />}
              label="Syllabus content"
            />
            <TabButton
              active={tab === "topics"}
              onClick={() => setTab("topics")}
              accent={subject.accentColor}
              icon={<LayoutGrid className="w-4 h-4" />}
              label="Topic cards"
            />
            <TabButton
              active={tab === "guide"}
              onClick={() => setTab("guide")}
              accent={subject.accentColor}
              icon={<Compass className="w-4 h-4" />}
              label="Guide me · exam plan"
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8 sm:py-10">
        <AnimatePresence mode="wait">
          {tab === "content" ? (
            <motion.div
              key="content"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease }}
              className="grid lg:grid-cols-[220px_1fr] gap-8"
            >
              {/* Unit sidebar */}
              <aside className="hidden lg:block">
                <div className="sticky top-32">
                  <div className="flex items-center gap-2 mb-3 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    <LayersIcon className="w-3.5 h-3.5" />
                    Units
                  </div>
                  <ul className="space-y-1">
                    {subject.units.map((u) => {
                      const unitRead = u.chapter.sections.filter(
                        (s) => read[`${u.number}-${s.number}`]
                      ).length;
                      const unitTotal = u.chapter.sections.length;
                      const active = u.number === activeUnit;
                      return (
                        <li key={u.number}>
                          <button
                            onClick={() => setActiveUnit(u.number)}
                            className={`w-full text-left rounded-lg px-3 py-2 transition-all border ${
                              active
                                ? "bg-muted/30"
                                : "bg-transparent border-transparent hover:bg-muted/15"
                            }`}
                            style={
                              active
                                ? {
                                    borderColor: `${subject.accentColor}55`,
                                  }
                                : undefined
                            }
                          >
                            <div className="flex items-center justify-between gap-2">
                              <span
                                className="font-mono text-[10px] font-semibold"
                                style={{
                                  color: active
                                    ? subject.accentColor
                                    : undefined,
                                }}
                              >
                                Unit {u.roman}
                              </span>
                              <span className="text-[10px] text-muted-foreground tabular-nums">
                                {unitRead}/{unitTotal}
                              </span>
                            </div>
                            <div className="text-[13px] text-foreground/85 leading-snug mt-0.5 line-clamp-2">
                              {u.title}
                            </div>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </aside>

              {/* Mobile unit selector */}
              <div className="lg:hidden -mt-2 mb-2">
                <div className="flex gap-1.5 overflow-x-auto pb-1">
                  {subject.units.map((u) => (
                    <button
                      key={u.number}
                      onClick={() => setActiveUnit(u.number)}
                      className={`shrink-0 rounded-lg px-3 py-1.5 text-xs border transition-all ${
                        u.number === activeUnit
                          ? "bg-muted/30"
                          : "bg-transparent border-border/40"
                      }`}
                      style={
                        u.number === activeUnit
                          ? { borderColor: `${subject.accentColor}55` }
                          : undefined
                      }
                    >
                      <span
                        className="font-mono font-semibold"
                        style={{
                          color:
                            u.number === activeUnit
                              ? subject.accentColor
                              : undefined,
                        }}
                      >
                        {u.roman}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Main content */}
              <article className="min-w-0">
                {activeUnitObj && (
                  <motion.div
                    key={activeUnitObj.number}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.25 }}
                  >
                    {/* Unit band */}
                    <div
                      className="rounded-xl px-5 py-4 mb-6 border"
                      style={{
                        borderColor: `${subject.accentColor}33`,
                        background: `linear-gradient(135deg, ${subject.accentColor}10, transparent)`,
                      }}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="font-mono text-[10px] uppercase tracking-[0.2em] font-semibold"
                          style={{ color: subject.accentColor }}
                        >
                          Unit {activeUnitObj.roman}
                        </span>
                      </div>
                      <h2 className="font-serif text-2xl font-bold text-foreground leading-tight">
                        {activeUnitObj.title}
                      </h2>
                      <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                        {activeUnitObj.summary}
                      </p>
                    </div>

                    {/* Chapter intro */}
                    <div className="mb-6 pl-4 border-l-2" style={{ borderColor: `${subject.accentColor}40` }}>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
                        Chapter {activeUnitObj.chapter.number} · {activeUnitObj.chapter.title}
                      </div>
                      <p className="text-sm text-foreground/80 leading-relaxed italic">
                        {activeUnitObj.chapter.intro}
                      </p>
                    </div>

                    {/* Sections */}
                    <div className="space-y-8">
                      {activeUnitObj.chapter.sections.map((s, i) => {
                        const sectionId = `${activeUnitObj.number}-${s.number}`;
                        return (
                          <div key={s.number} className="relative">
                            <SectionRenderer
                              section={s}
                              accent={subject.accentColor}
                              index={i}
                            />
                            <button
                              onClick={() => toggleRead(sectionId)}
                              className={`mt-3 ml-0 sm:ml-9 inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-md border transition-all ${
                                read[sectionId]
                                  ? "text-emerald-300 border-emerald-500/30 bg-emerald-500/10"
                                  : "text-muted-foreground border-border/50 hover:border-foreground/30"
                              }`}
                            >
                              <Check
                                className={`w-3 h-3 ${read[sectionId] ? "" : "opacity-40"}`}
                              />
                              {read[sectionId] ? "Read" : "Mark as read"}
                            </button>
                          </div>
                        );
                      })}
                    </div>

                    {/* In one breath */}
                    {activeUnitObj.chapter.inOneBreath && (
                      <div className="mt-10 rounded-xl border border-border/50 bg-muted/10 px-5 py-4">
                        <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1.5">
                          Unit {activeUnitObj.roman} in one breath
                        </div>
                        <p className="text-sm sm:text-[15px] text-foreground/85 leading-relaxed font-serif italic">
                          {activeUnitObj.chapter.inOneBreath}
                        </p>
                      </div>
                    )}

                    {/* Next unit nav */}
                    <div className="mt-8 flex items-center justify-between gap-3">
                      {subject.units.find((u) => u.number === activeUnit - 1) ? (
                        <button
                          onClick={() =>
                            setActiveUnit((n) => Math.max(1, n - 1))
                          }
                          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                        >
                          ← Previous unit
                        </button>
                      ) : (
                        <span />
                      )}
                      {subject.units.find((u) => u.number === activeUnit + 1) ? (
                        <button
                          onClick={() =>
                            setActiveUnit((n) =>
                              Math.min(subject.units.length, n + 1)
                            )
                          }
                          className="flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-md border transition-all"
                          style={{
                            color: subject.accentColor,
                            borderColor: `${subject.accentColor}40`,
                            backgroundColor: `${subject.accentColor}10`,
                          }}
                        >
                          Next unit
                          <ChevronRight className="w-3 h-3" />
                        </button>
                      ) : (
                        <button
                          onClick={() => setTab("guide")}
                          className="flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-md border transition-all"
                          style={{
                            color: subject.accentColor,
                            borderColor: `${subject.accentColor}40`,
                            backgroundColor: `${subject.accentColor}10`,
                          }}
                        >
                          Open the exam guide
                          <ChevronRight className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  </motion.div>
                )}
              </article>
            </motion.div>
          ) : tab === "topics" ? (
            <motion.div
              key="topics"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease }}
              className="max-w-5xl mx-auto"
            >
              <div className="mb-6 flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground">
                    All {totalSections} topics
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    Click any topic card to jump straight to it. Green check = read.
                  </p>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    <CircleCheck className="w-3.5 h-3.5 text-emerald-400" />
                    {readCount} read
                  </span>
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    <Circle className="w-3.5 h-3.5" />
                    {totalSections - readCount} left
                  </span>
                </div>
              </div>

              {subject.units.map((u) => {
                const uRead = u.chapter.sections.filter((s) => read[`${u.number}-${s.number}`]).length;
                const uTotal = u.chapter.sections.length;
                return (
                  <div key={u.number} className="mb-8">
                    <div className="flex items-center gap-3 mb-3 pb-2 border-b border-border/40">
                      <span
                        className="font-mono text-xs font-bold px-2 py-0.5 rounded"
                        style={{ color: subject.accentColor, backgroundColor: `${subject.accentColor}18` }}
                      >
                        Unit {u.roman}
                      </span>
                      <h3 className="font-serif text-lg font-semibold text-foreground">{u.title}</h3>
                      <span className="text-[11px] text-muted-foreground tabular-nums ml-auto">
                        {uRead}/{uTotal}
                      </span>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                      {u.chapter.sections.map((s, i) => {
                        const sid = `${u.number}-${s.number}`;
                        const isRead = !!read[sid];
                        return (
                          <motion.button
                            key={s.number}
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, ease, delay: Math.min(i * 0.015, 0.12) }}
                            onClick={() => jumpToSection(u.number, s.number)}
                            className="group text-left rounded-lg border bg-card/30 hover:bg-card/50 transition-all p-3 relative overflow-hidden"
                            style={{
                              borderColor: isRead ? "rgba(52,211,153,0.3)" : "var(--border)",
                            }}
                          >
                            <div className="flex items-start gap-2">
                              <span
                                className="shrink-0 font-mono text-[11px] font-semibold tabular-nums mt-0.5"
                                style={{ color: subject.accentColor }}
                              >
                                {s.number}
                              </span>
                              <div className="flex-1 min-w-0">
                                <div className="text-sm font-medium text-foreground leading-snug group-hover:text-red-400 transition-colors line-clamp-2">
                                  {s.title}
                                </div>
                                {/* Tags showing what assets the section carries */}
                                <div className="flex flex-wrap gap-1 mt-1.5">
                                  {s.diagram && (
                                    <span className="text-[9px] px-1 py-0.5 rounded bg-muted/30 text-muted-foreground">diagram</span>
                                  )}
                                  {s.table && (
                                    <span className="text-[9px] px-1 py-0.5 rounded bg-muted/30 text-muted-foreground">table</span>
                                  )}
                                  {s.codeExample && (
                                    <span className="text-[9px] px-1 py-0.5 rounded bg-muted/30 text-muted-foreground">code</span>
                                  )}
                                  {s.callout && (
                                    <span className="text-[9px] px-1 py-0.5 rounded bg-muted/30 text-muted-foreground">
                                      {s.callout.type}
                                    </span>
                                  )}
                                  {s.keyTerms && s.keyTerms.length > 0 && (
                                    <span className="text-[9px] px-1 py-0.5 rounded bg-muted/30 text-muted-foreground">
                                      {s.keyTerms.length} terms
                                    </span>
                                  )}
                                </div>
                              </div>
                              {isRead ? (
                                <CircleCheck className="shrink-0 w-4 h-4 text-emerald-400" />
                              ) : (
                                <Circle className="shrink-0 w-4 h-4 text-muted-foreground/30" />
                              )}
                            </div>
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              key="guide"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease }}
              className="max-w-3xl mx-auto"
            >
              <div className="mb-8 rounded-xl px-5 py-4 border" style={{ borderColor: `${subject.accentColor}33`, background: `linear-gradient(135deg, ${subject.accentColor}10, transparent)` }}>
                <div className="flex items-center gap-2 mb-1">
                  <Compass className="w-4 h-4" style={{ color: subject.accentColor }} />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-semibold" style={{ color: subject.accentColor }}>
                    Guide me · {subject.code} exam plan
                  </span>
                </div>
                <h2 className="font-serif text-2xl font-bold text-foreground leading-tight">
                  How to study {subject.title} for the exam
                </h2>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                  Weightage, a six-week schedule, exam-hall strategy, and the slips that cost easy marks.
                </p>
              </div>
              <StudyPlanView
                sections={subject.studyPlan}
                accent={subject.accentColor}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function TabButton({
  active,
  onClick,
  icon,
  label,
  accent,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
  accent: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all border-b-2 -mb-px ${
        active
          ? "text-foreground"
          : "text-muted-foreground hover:text-foreground border-transparent"
      }`}
      style={
        active
          ? { borderColor: accent, color: accent }
          : undefined
      }
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
      <span className="sm:hidden">{label.split(" ")[0]}</span>
    </button>
  );
}
