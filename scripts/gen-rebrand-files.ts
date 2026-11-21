/**
 * AI&ML rebrand files generator — one small subject file per AL-code subject
 * whose RGPV syllabus is identical to an already-authored subject.
 */
import { writeFileSync } from "fs";
import { join } from "path";

const DIR = "/home/z/my-project/src/lib/academics";

const PROGRAM = "RGPV · Artificial Intelligence & Machine Learning";
const HEADER = ` * branch: AI & Machine Learning (AL-XXX codes).
 * The RGPV syllabus for this subject is identical to the base subject's
 * syllabus, so the fully-authored study content is reused via rebrandSubject.`;

type Spec = {
  file: string;
  exportName: string;
  baseVar: string;
  baseFile: string;
  id: string;
  code: string;
  sem: string;
  fromCode: string;
  title?: string;
  extraPairs?: [string, string][];
}

const specs: Spec[] = [
  { file: "subject-al-301.ts", exportName: "al301", baseVar: "ad301", baseFile: "subject-ad-301", id: "al-301", code: "AL-301", sem: "III Semester", fromCode: "AD-301" },
  { file: "subject-al-302.ts", exportName: "al302", baseVar: "ad302", baseFile: "subject-ad-302", id: "al-302", code: "AL-302", sem: "III Semester", fromCode: "AD-302", title: "Introduction to Probability and Statistics", extraPairs: [["Probability and Statistics for Data Science", "Introduction to Probability and Statistics"]] },
  { file: "subject-al-303.ts", exportName: "al303", baseVar: "ad303", baseFile: "subject-ad-303", id: "al-303", code: "AL-303", sem: "III Semester", fromCode: "AD-303" },
  { file: "subject-al-304.ts", exportName: "al304", baseVar: "ad304", baseFile: "subject-ad-304", id: "al-304", code: "AL-304", sem: "III Semester", fromCode: "AD-304" },
  { file: "subject-al-305.ts", exportName: "al305", baseVar: "ad305", baseFile: "subject-ad-305", id: "al-305", code: "AL-305", sem: "III Semester", fromCode: "AD-305" },
  { file: "subject-al-402.ts", exportName: "al402", baseVar: "cs402", baseFile: "subject-cs-402", id: "al-402", code: "AL-402", sem: "IV Semester", fromCode: "CS-402" },
  { file: "subject-al-403.ts", exportName: "al403", baseVar: "cs403", baseFile: "subject-cs-403", id: "al-403", code: "AL-403", sem: "IV Semester", fromCode: "CS-403" },
  { file: "subject-al-404.ts", exportName: "al404", baseVar: "cs404", baseFile: "subject-cs-404", id: "al-404", code: "AL-404", sem: "IV Semester", fromCode: "CS-404" },
  { file: "subject-al-405.ts", exportName: "al405", baseVar: "ad502", baseFile: "subject-ad-502", id: "al-405", code: "AL-405", sem: "IV Semester", fromCode: "AD-502" },
  { file: "subject-al-501.ts", exportName: "al501", baseVar: "ad405", baseFile: "subject-ad-405", id: "al-501", code: "AL-501", sem: "V Semester", fromCode: "AD-405" },
  { file: "subject-al-502.ts", exportName: "al502", baseVar: "ad402", baseFile: "subject-ad-402", id: "al-502", code: "AL-502", sem: "V Semester", fromCode: "AD-402" },
  { file: "subject-al-601.ts", exportName: "al601", baseVar: "cs501", baseFile: "subject-cs-501", id: "al-601", code: "AL-601", sem: "VI Semester", fromCode: "CS-501" },
  { file: "subject-al-602.ts", exportName: "al602", baseVar: "ad602", baseFile: "subject-ad-602", id: "al-602", code: "AL-602", sem: "VI Semester", fromCode: "AD-602" },
  { file: "subject-al-701.ts", exportName: "al701", baseVar: "ad701", baseFile: "subject-ad-701", id: "al-701", code: "AL-701", sem: "VII Semester", fromCode: "AD-701", title: "Computer Vision", extraPairs: [["AI for Computer Vision", "Computer Vision"]] },
  { file: "subject-al-703-d.ts", exportName: "al703d", baseVar: "ad503a", baseFile: "subject-ad-503a", id: "al-703-d", code: "AL-703(D)", sem: "VII Semester", fromCode: "AD503(A)", extraPairs: [["AD-503", "AL-703"]] },
  { file: "subject-al-802-a.ts", exportName: "al802a", baseVar: "ad604b", baseFile: "subject-ad-604-b", id: "al-802-a", code: "AL-802(A)", sem: "VIII Semester", fromCode: "AD-604(B)", extraPairs: [["AD-604", "AL-802"]] },
  { file: "subject-al-803-a.ts", exportName: "al803a", baseVar: "ad604a", baseFile: "subject-ad-604-a", id: "al-803-a", code: "AL-803(A)", sem: "VIII Semester", fromCode: "AD-604(A)", extraPairs: [["AD-604", "AL-803"]] },
];

let count = 0;
for (const s of specs) {
  const titleNote = s.title ? `\n * Display title: "${s.title}".` : "";
  const out = `/**
 * ${s.code} - RGPV AI&ML.${titleNote}
${HEADER}
 */

import type { AcademicSubject } from "./types";
import { ${s.baseVar} } from "./${s.baseFile}";
import { rebrandSubject } from "./rebrand";

export const ${s.exportName}: AcademicSubject = rebrandSubject(${s.baseVar}, {
  id: "${s.id}",
  code: "${s.code}",
  semester: "${s.sem}",
  program: "${PROGRAM}",
  replacements: [
    ["${s.fromCode}", "${s.code}"],
    ["AI&DS", "AI&ML"],
    ["Artificial Intelligence & Data Science", "Artificial Intelligence & Machine Learning"],${s.extraPairs ? "\n" + s.extraPairs.map((p) => `    ["${p[0]}", "${p[1]}"],`).join("\n") : ""}
  ],${s.title ? `\n  overrides: { title: "${s.title}" },` : ""}
});
`;
  writeFileSync(join(DIR, s.file), out);
  count++;
}

console.log("generated", count, "rebrand files");
