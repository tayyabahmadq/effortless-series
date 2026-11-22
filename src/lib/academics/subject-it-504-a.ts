/**
 * IT-504(A) - RGPV Information Technology.
 * branch: Information Technology (IT-XXX codes).
 * The RGPV syllabus for this subject is identical to the base subject's
 * syllabus, so the fully-authored study content is reused via rebrandSubject.
 */

import type { AcademicSubject } from "./types";
import { ad304 } from "./subject-ad-304";
import { rebrandSubject } from "./rebrand";

export const it504a: AcademicSubject = rebrandSubject(ad304, {
  id: "it-504-a",
  code: "IT-504(A)",
  semester: "V Semester",
  program: "RGPV · Information Technology",
  replacements: [
    ["AD-304", "IT-504"],
    ["Artificial Intelligence & Data Science", "Information Technology"],
  ],
});
