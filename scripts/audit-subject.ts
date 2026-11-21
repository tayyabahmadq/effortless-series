/**
 * Per-subject audit for authored study content.
 *
 * Usage: npx tsx scripts/audit-subject.ts <relative-src-file> <exportName>
 * Example: npx tsx scripts/audit-subject.ts subject-al-604-a.ts al604a
 *
 * Validates the "7-mark guarantee": every section carries a diagram, 3 exam
 * questions (one 7-mark with outline), key terms, a callout, body paragraphs,
 * bullets, a practical element (code or table), continuous numbering, and
 * ASCII-only strings.
 */

import path from "path";
import fs from "fs";
import type { AcademicSubject } from "../src/lib/academics/types";

const [, , fileArg, exportName] = process.argv;
if (!fileArg || !exportName) {
  console.error("usage: npx tsx scripts/audit-subject.ts <file> <exportName>");
  process.exit(2);
}

const full = fileArg.startsWith("/")
  ? fileArg
  : path.resolve(process.cwd(), "src/lib/academics", fileArg);
if (!fs.existsSync(full)) {
  console.error(`file not found: ${full}`);
  process.exit(2);
}

async function load() {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const mod = await import(full);
  const subject = mod[exportName] as AcademicSubject | undefined;
  if (!subject) {
    console.error(`export "${exportName}" not found in ${full}`);
    process.exit(2);
  }
  return subject;
}

async function main() {
  const subject = await load();
let bad = 0;
let sections = 0;
let words = 0;
const problems: string[] = [];

const fail = (msg: string) => {
  problems.push(msg);
  bad++;
};

const ALLOWED_NON_ASCII = new Set(["·", "—", "–", "≈", "≥", "≤", "±"]);

for (const u of subject.units) {
  const unitNum = u.number;
  const seen: string[] = [];
  for (const sec of u.chapter.sections) {
    sections++;
    const tag = `${subject.code} unit ${unitNum} sec ${sec.number}`;
    if (!sec.diagram) fail(`${tag}: MISSING diagram`);
    if (!sec.examQuestions || sec.examQuestions.length < 3) {
      fail(`${tag}: examQuestions < 3 (${sec.examQuestions?.length ?? 0})`);
    } else {
      const seven = sec.examQuestions.find((q) => q.marks >= 7);
      if (!seven) fail(`${tag}: no 7-mark question`);
      if (seven && (!seven.outline || seven.outline.length < 5)) {
        fail(`${tag}: 7-mark outline has < 5 points`);
      }
    }
    if (!sec.keyTerms || sec.keyTerms.length < 3) fail(`${tag}: keyTerms < 3`);
    else if (sec.keyTerms.some((t) => !t.definition)) fail(`${tag}: keyTerm missing definition`);
    if (!sec.callout) fail(`${tag}: MISSING callout`);
    if (!sec.body || sec.body.length < 3) fail(`${tag}: body < 3 paragraphs`);
    if (!sec.bullets || sec.bullets.length < 5) fail(`${tag}: bullets < 5`);
    if (!sec.codeExample && !sec.table) fail(`${tag}: no code sample or table`);
    const w = sec.body.join(" ").split(/\s+/).length;
    words += w;
    if (w < 250) fail(`${tag}: body only ${w} words`);
    seen.push(sec.number);
    // ASCII check on all strings of the section
    const strings: string[] = [
      sec.title,
      ...sec.body,
      ...(sec.bullets ?? []),
      sec.callout ? sec.callout.title + " " + sec.callout.body : "",
      ...(sec.keyTerms ?? []).flatMap((t) => [t.term, t.definition]),
      ...(sec.examQuestions ?? []).flatMap((q) => [q.q, ...(q.outline ?? [])]),
      ...(sec.table ? [sec.table.caption ?? "", ...sec.table.headers, ...sec.table.rows.flat()] : []),
      sec.codeExample ? sec.codeExample.caption : "",
    ];
    for (const s of strings) {
      for (const ch of s) {
        const cp = ch.codePointAt(0) ?? 0;
        if (cp > 127 && !ALLOWED_NON_ASCII.has(ch)) {
          fail(`${tag}: non-ASCII char ${JSON.stringify(ch)} (U+${cp.toString(16)})`);
          break;
        }
      }
    }
  }
  // numbering continuity within the unit
  const expected = seen.map((_, i) => `${unitNum}.${i + 1}`);
  for (let i = 0; i < seen.length; i++) {
    if (seen[i] !== expected[i]) {
      fail(`unit ${unitNum}: numbering break - expected ${expected[i]}, found ${seen[i]}`);
      break;
    }
  }
}

if (subject.units.length !== subject.unitCount) fail(`unitCount ${subject.unitCount} != units.length ${subject.units.length}`);
if (sections !== subject.totalSections) fail(`totalSections ${subject.totalSections} != actual ${sections}`);
if (subject.units.length !== 5) fail(`expected 5 units, found ${subject.units.length}`);

  console.log(`${subject.code} "${subject.title}": ${sections} sections, ${subject.units.length} units, avg ${Math.round(words / Math.max(sections, 1))} words/section`);
  for (const p of problems) console.log("  FAIL " + p);
  console.log(bad === 0 ? "AUDIT_OK" : `AUDIT_FAILED (${bad} problems)`);
  process.exit(bad === 0 ? 0 : 1);
}

main();
