/**
 * AL-701 - RGPV AI&ML.
 * Display title: "Computer Vision".
 * branch: AI & Machine Learning (AL-XXX codes).
 * The RGPV syllabus for this subject is identical to the base subject's
 * syllabus, so the fully-authored study content is reused via rebrandSubject.
 */

import type { AcademicSubject } from "./types";
import { ad701 } from "./subject-ad-701";
import { rebrandSubject } from "./rebrand";

export const al701: AcademicSubject = rebrandSubject(ad701, {
  id: "al-701",
  code: "AL-701",
  semester: "VII Semester",
  program: "RGPV · Artificial Intelligence & Machine Learning",
  replacements: [
    ["AD-701", "AL-701"],
    ["AI&DS", "AI&ML"],
    ["Artificial Intelligence & Data Science", "Artificial Intelligence & Machine Learning"],
    ["AI for Computer Vision", "Computer Vision"],
  ],
  overrides: { title: "Computer Vision" },
});
