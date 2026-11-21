/**
 * AL-601 - RGPV AI&ML.
 * branch: AI & Machine Learning (AL-XXX codes).
 * The RGPV syllabus for this subject is identical to the base subject's
 * syllabus, so the fully-authored study content is reused via rebrandSubject.
 */

import type { AcademicSubject } from "./types";
import { cs501 } from "./subject-cs-501";
import { rebrandSubject } from "./rebrand";

export const al601: AcademicSubject = rebrandSubject(cs501, {
  id: "al-601",
  code: "AL-601",
  semester: "VI Semester",
  program: "RGPV · Artificial Intelligence & Machine Learning",
  replacements: [
    ["CS-501", "AL-601"],
    ["AI&DS", "AI&ML"],
    ["Artificial Intelligence & Data Science", "Artificial Intelligence & Machine Learning"],
  ],
});
