/**
 * Branch-variant helper.
 *
 * Several RGPV subjects carry the *identical* syllabus across the CSE family
 * of branches (CSE, AI&DS, AI&ML) and are only re-coded (CS-303 -> AL-303).
 * For those we reuse the fully-authored subject and rebrand it: deep-clone
 * the data and rewrite every occurrence of the old code / branch name in
 * every nested string, then apply top-level overrides.
 */

import type { AcademicSubject } from "./types";

export interface RebrandOptions {
  id: string;
  code: string;
  semester: string;
  program: string;
  /** [from, to] string pairs replaced in every nested string of the clone. */
  replacements: [string, string][];
  /** Optional extra top-level overrides (e.g. a different title). */
  overrides?: Partial<Pick<AcademicSubject, "title" | "tagline" | "description" | "emoji">>;
}

function replaceAll(s: string, replacements: [string, string][]): string {
  for (const [from, to] of replacements) {
    if (s.includes(from)) s = s.split(from).join(to);
  }
  return s;
}

function walkStrings(node: unknown, replacements: [string, string][]): void {
  if (Array.isArray(node)) {
    for (let i = 0; i < node.length; i++) {
      if (typeof node[i] === "string") {
        node[i] = replaceAll(node[i] as string, replacements);
      } else {
        walkStrings(node[i], replacements);
      }
    }
    return;
  }
  if (node !== null && typeof node === "object") {
    for (const key of Object.keys(node as Record<string, unknown>)) {
      const obj = node as Record<string, unknown>;
      const value = obj[key];
      if (typeof value === "string") {
        obj[key] = replaceAll(value, replacements);
      } else {
        walkStrings(value, replacements);
      }
    }
  }
}

/** Deep-clone `base` and rebrand it as a new subject for another branch. */
export function rebrandSubject(
  base: AcademicSubject,
  opts: RebrandOptions
): AcademicSubject {
  const clone = JSON.parse(JSON.stringify(base)) as unknown;
  walkStrings(clone, opts.replacements);
  const out = clone as AcademicSubject;
  out.id = opts.id;
  out.code = opts.code;
  out.semester = opts.semester;
  out.program = opts.program;
  if (opts.overrides) Object.assign(out, opts.overrides);
  return out;
}
