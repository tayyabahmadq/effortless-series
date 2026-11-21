/**
 * AL-602 - RGPV AI&ML.
 * branch: AI & Machine Learning (AL-XXX codes).
 * The RGPV syllabus for this subject is identical to the base subject's
 * syllabus, so the fully-authored study content is reused via rebrandSubject.
 */

import type { AcademicSubject } from "./types";
import { ad602 } from "./subject-ad-602";
import { rebrandSubject } from "./rebrand";

export const al602: AcademicSubject = rebrandSubject(ad602, {
  id: "al-602",
  code: "AL-602",
  semester: "VI Semester",
  program: "RGPV · Artificial Intelligence & Machine Learning",
  replacements: [
    ["AD-602", "AL-602"],
    ["AI&DS", "AI&ML"],
    ["Artificial Intelligence & Data Science", "Artificial Intelligence & Machine Learning"],
  ],
});
