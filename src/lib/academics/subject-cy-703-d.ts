/**
 * CY-703(D) - RGPV Cyber Security.
 * The RGPV syllabus for this subject is identical to the base subject's
 * syllabus, so the fully-authored study content is reused via rebrandSubject.
 */

import type { AcademicSubject } from "./types";
import { al604a } from "./subject-al-604-a";
import { rebrandSubject } from "./rebrand";

export const cy703d: AcademicSubject = rebrandSubject(al604a, {
  id: "cy-703-d",
  code: "CY-703(D)",
  semester: "VII Semester",
  program: "RGPV · Cyber Security",
  replacements: [
    ["AL-604(A)", "CY-703(D)"],
    ["Computer Science & Engineering", "Cyber Security"],
    ["Artificial Intelligence & Data Science", "Cyber Security"],
    ["Artificial Intelligence & Machine Learning", "Cyber Security"],
    ["Information Technology", "Cyber Security"],
  ],
});
