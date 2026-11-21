/**
 * AL-301 - RGPV AI&ML.
 * branch: AI & Machine Learning (AL-XXX codes).
 * The RGPV syllabus for this subject is identical to the base subject's
 * syllabus, so the fully-authored study content is reused via rebrandSubject.
 */

import type { AcademicSubject } from "./types";
import { ad301 } from "./subject-ad-301";
import { rebrandSubject } from "./rebrand";

export const al301: AcademicSubject = rebrandSubject(ad301, {
  id: "al-301",
  code: "AL-301",
  semester: "III Semester",
  program: "RGPV · Artificial Intelligence & Machine Learning",
  replacements: [
    ["AD-301", "AL-301"],
    ["AI&DS", "AI&ML"],
    ["Artificial Intelligence & Data Science", "Artificial Intelligence & Machine Learning"],
  ],
});
