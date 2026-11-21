/* Structural audit of all book data files. Run: node scripts/audit-books.cjs */
import * as fs from "fs";
import * as path from "path";

const BOOKS_DIR = "/home/z/my-project/src/lib/books";

const problems = [];
const stats = {};

const kinds = ["flow", "pipeline", "layers", "pyramid", "cycle", "fork", "matrix", "compare"];

for (const file of fs.readdirSync(BOOKS_DIR).sort()) {
  if (!/^book-\d+\.ts$/.test(file)) continue;
  const src = fs.readFileSync(path.join(BOOKS_DIR, file), "utf8");

  const m = src.match(/export const (book\d+): Book/);
  if (!m) {
    problems.push(`${file}: no 'export const bookNN: Book' found`);
    continue;
  }

  const chaptersIdx = src.indexOf("chapters: [");
  const tail = src.slice(chaptersIdx);
  const chapMatches = tail.match(/\n\s+number: (\d+),/g) || [];
  const nChapters = chapMatches.length;

  const counts = {
    deepDive: (src.match(/deepDive:/g) || []).length,
    diagram: (src.match(/diagram:/g) || []).length,
    pitfalls: (src.match(/pitfalls:/g) || []).length,
    keyTerms: (src.match(/keyTerms:/g) || []).length,
    interviewQuestions: (src.match(/interviewQuestions:/g) || []).length,
    quiz: (src.match(/quiz:/g) || []).length,
    codeExample: (src.match(/codeExample:/g) || []).length,
    fieldChecklist: (src.match(/fieldChecklist:/g) || []).length,
  };

  const usedKinds = kinds.filter((k) => src.includes(`kind: "${k}"`));

  const answerIdxMatches = src.match(/answerIndex: (\d)/g) || [];
  const badAnswerIdx = answerIdxMatches.filter((a) => {
    const n = parseInt(a.split(":")[1], 10);
    return n < 0 || n > 3;
  }).length;

  if (src.includes("__CONTINUE__")) problems.push(`${file}: leftover __CONTINUE__ marker`);
  if (/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u.test(src)) problems.push(`${file}: emoji found`);

  stats[file] = { export: m[1], nChapters, counts, usedKinds, badAnswerIdx };
}

for (const [file, s] of Object.entries(stats)) {
  if (s.nChapters !== 14) problems.push(`${file}: ${s.nChapters} chapters (expected 14)`);
  for (const field of ["deepDive", "diagram", "pitfalls", "keyTerms", "interviewQuestions", "quiz"]) {
    if (s.counts[field] !== s.nChapters)
      problems.push(`${file}: ${field} on ${s.counts[field]}/${s.nChapters} chapters`);
  }
  if (s.usedKinds.length < 4)
    problems.push(`${file}: only ${s.usedKinds.length} diagram kinds used (${s.usedKinds.join(",")})`);
  if (s.badAnswerIdx > 0) problems.push(`${file}: ${s.badAnswerIdx} quiz answerIndex out of range`);
}

console.log("Problems:", problems.length);
problems.forEach((p) => console.log(" -", p));
console.log("\nPer-file stats:");
for (const [file, s] of Object.entries(stats)) {
  console.log(
    `  ${file}: ch=${s.nChapters} code=${s.counts.codeExample} checklist=${s.counts.fieldChecklist} kinds=${s.usedKinds.join("|")}`
  );
}
