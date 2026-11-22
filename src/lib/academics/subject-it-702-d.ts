/**
 * IT-702(D) - RGPV Information Technology.
 * branch: Information Technology (IT-XXX codes).
 * The RGPV syllabus for this subject is identical to the base subject's
 * syllabus, so the fully-authored study content is reused via rebrandSubject.
 */

import type { AcademicSubject } from "./types";
import { al703b } from "./subject-al-703-b";
import { rebrandSubject } from "./rebrand";

export const it702d: AcademicSubject = rebrandSubject(al703b, {
  id: "it-702-d",
  code: "IT-702(D)",
  semester: "VII Semester",
  program: "RGPV · Information Technology",
  replacements: [
    ["AL-703(B)", "IT-702(D)"],
    ["Artificial Intelligence & Machine Learning", "Information Technology"],
  ],
});
