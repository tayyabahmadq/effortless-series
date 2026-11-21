/**
 * AL-803(A) - RGPV AI&ML.
 * branch: AI & Machine Learning (AL-XXX codes).
 * The RGPV syllabus for this subject is identical to the base subject's
 * syllabus, so the fully-authored study content is reused via rebrandSubject.
 */

import type { AcademicSubject } from "./types";
import { ad604a } from "./subject-ad-604-a";
import { rebrandSubject } from "./rebrand";

export const al803a: AcademicSubject = rebrandSubject(ad604a, {
  id: "al-803-a",
  code: "AL-803(A)",
  semester: "VIII Semester",
  program: "RGPV · Artificial Intelligence & Machine Learning",
  replacements: [
    ["AD-604(A)", "AL-803(A)"],
    ["AI&DS", "AI&ML"],
    ["Artificial Intelligence & Data Science", "Artificial Intelligence & Machine Learning"],
    ["AD-604", "AL-803"],
  ],
});
