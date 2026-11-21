/**
 * AL-501 - RGPV AI&ML.
 * branch: AI & Machine Learning (AL-XXX codes).
 * The RGPV syllabus for this subject is identical to the base subject's
 * syllabus, so the fully-authored study content is reused via rebrandSubject.
 */

import type { AcademicSubject } from "./types";
import { ad405 } from "./subject-ad-405";
import { rebrandSubject } from "./rebrand";

export const al501: AcademicSubject = rebrandSubject(ad405, {
  id: "al-501",
  code: "AL-501",
  semester: "V Semester",
  program: "RGPV · Artificial Intelligence & Machine Learning",
  replacements: [
    ["AD-405", "AL-501"],
    ["AI&DS", "AI&ML"],
    ["Artificial Intelligence & Data Science", "Artificial Intelligence & Machine Learning"],
  ],
});
