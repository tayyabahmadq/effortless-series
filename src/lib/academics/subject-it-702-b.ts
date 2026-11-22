/**
 * IT-702(B) - RGPV Information Technology.
 * branch: Information Technology (IT-XXX codes).
 * The RGPV syllabus for this subject is identical to the base subject's
 * syllabus, so the fully-authored study content is reused via rebrandSubject.
 */

import type { AcademicSubject } from "./types";
import { al604a } from "./subject-al-604-a";
import { rebrandSubject } from "./rebrand";

export const it702b: AcademicSubject = rebrandSubject(al604a, {
  id: "it-702-b",
  code: "IT-702(B)",
  semester: "VII Semester",
  program: "RGPV · Information Technology",
  replacements: [
    ["AL-604(A)", "IT-702(B)"],
    ["Artificial Intelligence & Machine Learning", "Information Technology"],
  ],
});
