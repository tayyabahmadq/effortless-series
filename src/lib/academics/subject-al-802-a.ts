/**
 * AL-802(A) - RGPV AI&ML.
 * branch: AI & Machine Learning (AL-XXX codes).
 * The RGPV syllabus for this subject is identical to the base subject's
 * syllabus, so the fully-authored study content is reused via rebrandSubject.
 */

import type { AcademicSubject } from "./types";
import { ad604B } from "./subject-ad-604-b";
import { rebrandSubject } from "./rebrand";

export const al802a: AcademicSubject = rebrandSubject(ad604B, {
  id: "al-802-a",
  code: "AL-802(A)",
  semester: "VIII Semester",
  program: "RGPV · Artificial Intelligence & Machine Learning",
  replacements: [
    ["AD-604(B)", "AL-802(A)"],
    ["AI&DS", "AI&ML"],
    ["Artificial Intelligence & Data Science", "Artificial Intelligence & Machine Learning"],
    ["AD-604", "AL-802"],
  ],
});
