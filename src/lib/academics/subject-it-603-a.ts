/**
 * IT-603(A) - RGPV Information Technology.
 * branch: Information Technology (IT-XXX codes).
 * The RGPV syllabus for this subject is identical to the base subject's
 * syllabus, so the fully-authored study content is reused via rebrandSubject.
 */

import type { AcademicSubject } from "./types";
import { al703a } from "./subject-al-703-a";
import { rebrandSubject } from "./rebrand";

export const it603a: AcademicSubject = rebrandSubject(al703a, {
  id: "it-603-a",
  code: "IT-603(A)",
  semester: "VI Semester",
  program: "RGPV · Information Technology",
  replacements: [
    ["AL-703(A)", "IT-603(A)"],
    ["Artificial Intelligence & Machine Learning", "Information Technology"],
  ],
});
