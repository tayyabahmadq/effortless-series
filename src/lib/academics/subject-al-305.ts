/**
 * AL-305 - RGPV AI&ML.
 * branch: AI & Machine Learning (AL-XXX codes).
 * The RGPV syllabus for this subject is identical to the base subject's
 * syllabus, so the fully-authored study content is reused via rebrandSubject.
 */

import type { AcademicSubject } from "./types";
import { ad305 } from "./subject-ad-305";
import { rebrandSubject } from "./rebrand";

export const al305: AcademicSubject = rebrandSubject(ad305, {
  id: "al-305",
  code: "AL-305",
  semester: "III Semester",
  program: "RGPV · Artificial Intelligence & Machine Learning",
  replacements: [
    ["AD-305", "AL-305"],
    ["AI&DS", "AI&ML"],
    ["Artificial Intelligence & Data Science", "Artificial Intelligence & Machine Learning"],
  ],
});
