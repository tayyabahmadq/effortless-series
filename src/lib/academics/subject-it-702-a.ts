/**
 * IT-702(A) - RGPV Information Technology.
 * branch: Information Technology (IT-XXX codes).
 * The RGPV syllabus for this subject is identical to the base subject's
 * syllabus, so the fully-authored study content is reused via rebrandSubject.
 */

import type { AcademicSubject } from "./types";
import { ad404 } from "./subject-ad-404";
import { rebrandSubject } from "./rebrand";

export const it702a: AcademicSubject = rebrandSubject(ad404, {
  id: "it-702-a",
  code: "IT-702(A)",
  semester: "VII Semester",
  program: "RGPV · Information Technology",
  replacements: [
    ["AD-404", "IT-702(A)"],
    ["Artificial Intelligence & Data Science", "Information Technology"],
  ],
});
