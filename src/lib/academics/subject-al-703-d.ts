/**
 * AL-703(D) - RGPV AI&ML.
 * branch: AI & Machine Learning (AL-XXX codes).
 * The RGPV syllabus for this subject is identical to the base subject's
 * syllabus, so the fully-authored study content is reused via rebrandSubject.
 */

import type { AcademicSubject } from "./types";
import { ad503a } from "./subject-ad-503a";
import { rebrandSubject } from "./rebrand";

export const al703d: AcademicSubject = rebrandSubject(ad503a, {
  id: "al-703-d",
  code: "AL-703(D)",
  semester: "VII Semester",
  program: "RGPV · Artificial Intelligence & Machine Learning",
  replacements: [
    ["AD503(A)", "AL-703(D)"],
    ["AI&DS", "AI&ML"],
    ["Artificial Intelligence & Data Science", "Artificial Intelligence & Machine Learning"],
    ["AD-503", "AL-703"],
  ],
});
