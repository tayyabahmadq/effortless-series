/**
 * AL-404 - RGPV AI&ML.
 * branch: AI & Machine Learning (AL-XXX codes).
 * The RGPV syllabus for this subject is identical to the base subject's
 * syllabus, so the fully-authored study content is reused via rebrandSubject.
 */

import type { AcademicSubject } from "./types";
import { cs404 } from "./subject-cs-404";
import { rebrandSubject } from "./rebrand";

export const al404: AcademicSubject = rebrandSubject(cs404, {
  id: "al-404",
  code: "AL-404",
  semester: "IV Semester",
  program: "RGPV · Artificial Intelligence & Machine Learning",
  replacements: [
    ["CS-404", "AL-404"],
    ["AI&DS", "AI&ML"],
    ["Artificial Intelligence & Data Science", "Artificial Intelligence & Machine Learning"],
  ],
});
