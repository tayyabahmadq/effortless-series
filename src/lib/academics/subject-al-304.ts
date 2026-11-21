/**
 * AL-304 - RGPV AI&ML.
 * branch: AI & Machine Learning (AL-XXX codes).
 * The RGPV syllabus for this subject is identical to the base subject's
 * syllabus, so the fully-authored study content is reused via rebrandSubject.
 */

import type { AcademicSubject } from "./types";
import { ad304 } from "./subject-ad-304";
import { rebrandSubject } from "./rebrand";

export const al304: AcademicSubject = rebrandSubject(ad304, {
  id: "al-304",
  code: "AL-304",
  semester: "III Semester",
  program: "RGPV · Artificial Intelligence & Machine Learning",
  replacements: [
    ["AD-304", "AL-304"],
    ["AI&DS", "AI&ML"],
    ["Artificial Intelligence & Data Science", "Artificial Intelligence & Machine Learning"],
  ],
});
