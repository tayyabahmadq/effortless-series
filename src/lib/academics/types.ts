/**
 * Academics — 5th-semester RGPV subjects.
 *
 * Each subject mirrors the structure of its source PDF: units → chapters →
 * numbered sections.  A section carries body paragraphs and may attach a
 * table, a code sample, a diagram (reusing the Effortless diagram renderer),
 * a callout, or a list of key terms.
 *
 * A separate `studyPlan` array drives the per-subject "Guide Me" tab:
 * exam-weighted topics, a week-by-week schedule, last-day strategy, and
 * common slips.
 */

export type { DiagramSpec, KeyTerm } from "../types";

import type { DiagramSpec, KeyTerm } from "../types";

export interface Callout {
  type: "tip" | "exam" | "warning";
  title: string;
  body: string;
}

export interface AcadCodeExample {
  language: string;
  caption: string;
  code: string;
}

export interface AcadTable {
  caption?: string;
  headers: string[];
  rows: string[][];
}

/**
 * An exam-style question attached to a section.  `outline` lists the points
 * the examiner expects — enough scaffolding to write a full 7-mark answer.
 *
 * PYQ provenance: questions taken from the official RGPV question-paper
 * archive (rgpvonline scrape, Jun 2022 - Jun 2026 sessions) carry
 * `appearances` — every session in which that question (or a near-identical
 * one) appeared, e.g. ["Jun 2023", "Dec 2024"].  The legacy single-string
 * `year` field remains for unverified/hand-authored citations and is still
 * rendered when set.  Only cite sessions you can trace to an actual paper.
 */
export interface ExamQuestion {
  q: string;
  marks: number;
  year?: string;
  /** Verified PYQ sessions in which this question appeared, newest last. */
  appearances?: string[];
  outline?: string[];
}

export interface AcadSection {
  /** "1.1", "1.2" ... */
  number: string;
  title: string;
  body: string[];
  bullets?: string[];
  codeExample?: AcadCodeExample;
  table?: AcadTable;
  diagram?: DiagramSpec;
  callout?: Callout;
  keyTerms?: KeyTerm[];
  examQuestions?: ExamQuestion[];
}

export interface AcadChapter {
  number: string;
  title: string;
  /** One-paragraph orientation shown above the sections. */
  intro: string;
  /** "In one breath" summary printed at the end of the chapter. */
  inOneBreath?: string;
  sections: AcadSection[];
}

export interface AcadUnit {
  number: number;
  roman: string;
  title: string;
  summary: string;
  chapter: AcadChapter;
}

export interface StudyWeek {
  week: string;
  focus: string;
  tasks: string[];
}

export interface StudyPlanSection {
  id: string;
  heading: string;
  body?: string[];
  bullets?: string[];
  weeks?: StudyWeek[];
  /** Topics ranked by typical exam weight. */
  weightedTopics?: { topic: string; weight: string; note: string }[];
  examTips?: string[];
}

export interface AcademicSubject {
  id: string;
  code: string;
  title: string;
  semester: string;
  program: string;
  tagline: string;
  description: string;
  accentColor: string;
  emoji: string;
  unitCount: number;
  totalSections: number;
  units: AcadUnit[];
  studyPlan: StudyPlanSection[];
}
