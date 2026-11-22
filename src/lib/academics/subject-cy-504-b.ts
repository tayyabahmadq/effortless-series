/**
 * CY-504(B) - RGPV Cyber Security.
 * The RGPV syllabus for this subject is identical to the base subject's
 * syllabus, so the fully-authored study content is reused via rebrandSubject.
 */

import type { AcademicSubject } from "./types";
import { ad604a } from "./subject-ad-604-a";
import { rebrandSubject } from "./rebrand";

export const cy504b: AcademicSubject = rebrandSubject(ad604a, {
  id: "cy-504-b",
  code: "CY-504(B)",
  semester: "V Semester",
  program: "RGPV · Cyber Security",
  replacements: [
    ["AD-604(A)", "CY-504(B)"],
    ["Computer Science & Engineering", "Cyber Security"],
    ["Artificial Intelligence & Data Science", "Cyber Security"],
    ["Artificial Intelligence & Machine Learning", "Cyber Security"],
    ["Information Technology", "Cyber Security"],
  ],
});
