/**
 * The Effortless Series — data model.
 *
 * Every chapter follows the same skeleton:
 *   summary → keyIdea → deepDive → diagram → codeExample → pitfalls
 *   → fieldChecklist → keyTerms → interviewQuestions → quiz
 */

export interface DiagramStep {
  label: string;
  note?: string;
}

export interface ForkBranch {
  label: string;
  outcome: string;
  good: boolean;
}

export type DiagramSpec =
  /** Left-to-right steps with arrows. 3-6 steps. */
  | { kind: "flow"; title: string; caption: string; steps: DiagramStep[] }
  /** Numbered stage pipeline, left-to-right. 3-6 stages. */
  | { kind: "pipeline"; title: string; caption: string; stages: DiagramStep[] }
  /** Stacked architecture layers. Index 0 renders as the TOP layer. 3-6 layers. */
  | { kind: "layers"; title: string; caption: string; layers: DiagramStep[] }
  /** Pyramid, narrowest tier on top. Index 0 = top. 3-5 tiers. */
  | { kind: "pyramid"; title: string; caption: string; tiers: DiagramStep[] }
  /** Circular loop of steps around a hub. 4-6 steps. */
  | { kind: "cycle"; title: string; caption: string; steps: DiagramStep[] }
  /** Decision fork: one start node branching into labelled outcomes. 2-4 branches. */
  | {
      kind: "fork";
      title: string;
      caption: string;
      start: string;
      branches: ForkBranch[];
    }
  /** 2x2 quadrant grid with axis labels. Quadrant order: top-left, top-right, bottom-left, bottom-right. */
  | {
      kind: "matrix";
      title: string;
      caption: string;
      axes: { x: string; y: string };
      quadrants: { label: string; note?: string }[];
    }
  /** Two-panel contrast (e.g. "Do this" vs "Not this"). 3-5 items per panel. */
  | {
      kind: "compare";
      title: string;
      caption: string;
      left: { heading: string; items: string[] };
      right: { heading: string; items: string[] };
    };

export interface DeepDiveSection {
  heading: string;
  paragraphs: string[];
}

export interface Pitfall {
  mistake: string;
  fix: string;
}

export interface KeyTerm {
  term: string;
  definition: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
}

export interface InterviewQA {
  q: string;
  a: string;
}

export interface CodeExample {
  /** e.g. "ts", "sql", "yaml", "bash", "python" */
  language: string;
  caption: string;
  code: string;
}

export interface Chapter {
  number: number;
  title: string;
  summary: string;
  keyIdea?: string;
  /** 3 sections; each has a heading and 1-2 substantive paragraphs. */
  deepDive: DeepDiveSection[];
  /** Required. One diagram per chapter — the mental model made visible. */
  diagram: DiagramSpec;
  /** Optional. Realistic, minimal code or config that makes the chapter concrete. */
  codeExample?: CodeExample;
  /** 3-4 entries: the mistake people actually make, and the fix. */
  pitfalls: Pitfall[];
  /** 5-7 actionable items. */
  fieldChecklist?: string[];
  /** 3-5 terms with one-sentence definitions. */
  keyTerms: KeyTerm[];
  /** 3 Q&As (the original interviewAngle first, then two more). */
  interviewQuestions: InterviewQA[];
  /** 3 multiple-choice questions. options has 4 entries; answerIndex is 0-based. */
  quiz: QuizQuestion[];
}

export interface Book {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  layer: string;
  layerQuestion: string;
  accentColor: string;
  emoji: string;
  months: string;
  chapters: Chapter[];
}
