/**
 * AL-502 - RGPV AI&ML.
 * branch: AI & Machine Learning (AL-XXX codes).
 * The RGPV syllabus for this subject is identical to the base subject's
 * syllabus, so the fully-authored study content is reused via rebrandSubject.
 */

import type { AcademicSubject } from "./types";
import { ad402 } from "./subject-ad-402";
import { rebrandSubject } from "./rebrand";

export const al502: AcademicSubject = rebrandSubject(ad402, {
  id: "al-502",
  code: "AL-502",
  semester: "V Semester",
  program: "RGPV · Artificial Intelligence & Machine Learning",
  replacements: [
    ["AD-402", "AL-502"],
    ["AI&DS", "AI&ML"],
    ["Artificial Intelligence & Data Science", "Artificial Intelligence & Machine Learning"],
  ],
});
