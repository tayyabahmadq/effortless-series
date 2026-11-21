/**
 * AL-303 - RGPV AI&ML.
 * branch: AI & Machine Learning (AL-XXX codes).
 * The RGPV syllabus for this subject is identical to the base subject's
 * syllabus, so the fully-authored study content is reused via rebrandSubject.
 */

import type { AcademicSubject } from "./types";
import { ad303 } from "./subject-ad-303";
import { rebrandSubject } from "./rebrand";

export const al303: AcademicSubject = rebrandSubject(ad303, {
  id: "al-303",
  code: "AL-303",
  semester: "III Semester",
  program: "RGPV · Artificial Intelligence & Machine Learning",
  replacements: [
    ["AD-303", "AL-303"],
    ["AI&DS", "AI&ML"],
    ["Artificial Intelligence & Data Science", "Artificial Intelligence & Machine Learning"],
  ],
});
