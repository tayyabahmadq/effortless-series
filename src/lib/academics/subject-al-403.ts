/**
 * AL-403 - RGPV AI&ML.
 * branch: AI & Machine Learning (AL-XXX codes).
 * The RGPV syllabus for this subject is identical to the base subject's
 * syllabus, so the fully-authored study content is reused via rebrandSubject.
 */

import type { AcademicSubject } from "./types";
import { cs403 } from "./subject-cs-403";
import { rebrandSubject } from "./rebrand";

export const al403: AcademicSubject = rebrandSubject(cs403, {
  id: "al-403",
  code: "AL-403",
  semester: "IV Semester",
  program: "RGPV · Artificial Intelligence & Machine Learning",
  replacements: [
    ["CS-403", "AL-403"],
    ["AI&DS", "AI&ML"],
    ["Artificial Intelligence & Data Science", "Artificial Intelligence & Machine Learning"],
  ],
});
