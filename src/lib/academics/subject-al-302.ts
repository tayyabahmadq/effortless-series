/**
 * AL-302 - RGPV AI&ML.
 * Display title: "Introduction to Probability and Statistics".
 * branch: AI & Machine Learning (AL-XXX codes).
 * The RGPV syllabus for this subject is identical to the base subject's
 * syllabus, so the fully-authored study content is reused via rebrandSubject.
 */

import type { AcademicSubject } from "./types";
import { ad302 } from "./subject-ad-302";
import { rebrandSubject } from "./rebrand";

export const al302: AcademicSubject = rebrandSubject(ad302, {
  id: "al-302",
  code: "AL-302",
  semester: "III Semester",
  program: "RGPV · Artificial Intelligence & Machine Learning",
  replacements: [
    ["AD-302", "AL-302"],
    ["AI&DS", "AI&ML"],
    ["Artificial Intelligence & Data Science", "Artificial Intelligence & Machine Learning"],
    ["Probability and Statistics for Data Science", "Introduction to Probability and Statistics"],
  ],
  overrides: { title: "Introduction to Probability and Statistics" },
});
