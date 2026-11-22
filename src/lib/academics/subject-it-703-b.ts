/**
 * IT-703(B) - RGPV Information Technology.
 * branch: Information Technology (IT-XXX codes).
 * The RGPV syllabus for this subject is identical to the base subject's
 * syllabus, so the fully-authored study content is reused via rebrandSubject.
 */

import type { AcademicSubject } from "./types";
import { ad604a } from "./subject-ad-604-a";
import { rebrandSubject } from "./rebrand";

export const it703b: AcademicSubject = rebrandSubject(ad604a, {
  id: "it-703-b",
  code: "IT-703(B)",
  semester: "VII Semester",
  program: "RGPV · Information Technology",
  replacements: [
    ["AD-604(A)", "IT-703(B)"],
    ["Artificial Intelligence & Data Science", "Information Technology"],
  ],
});
