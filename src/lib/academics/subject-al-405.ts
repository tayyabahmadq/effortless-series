/**
 * AL-405 - RGPV AI&ML.
 * branch: AI & Machine Learning (AL-XXX codes).
 * The RGPV syllabus for this subject is identical to the base subject's
 * syllabus, so the fully-authored study content is reused via rebrandSubject.
 */

import type { AcademicSubject } from "./types";
import { ad502 } from "./subject-ad-502";
import { rebrandSubject } from "./rebrand";

export const al405: AcademicSubject = rebrandSubject(ad502, {
  id: "al-405",
  code: "AL-405",
  semester: "IV Semester",
  program: "RGPV · Artificial Intelligence & Machine Learning",
  replacements: [
    ["AD-502", "AL-405"],
    ["AI&DS", "AI&ML"],
    ["Artificial Intelligence & Data Science", "Artificial Intelligence & Machine Learning"],
  ],
});
