/**
 * CY-404 - RGPV Cyber Security.
 * The RGPV syllabus for this subject is identical to the base subject's
 * syllabus, so the fully-authored study content is reused via rebrandSubject.
 */

import type { AcademicSubject } from "./types";
import { cs405 } from "./subject-cs-405";
import { rebrandSubject } from "./rebrand";

export const cy404: AcademicSubject = rebrandSubject(cs405, {
  id: "cy-404",
  code: "CY-404",
  semester: "IV Semester",
  program: "RGPV · Cyber Security",
  replacements: [
    ["CS-405", "CY-404"],
    ["Computer Science & Engineering", "Cyber Security"],
    ["Artificial Intelligence & Data Science", "Cyber Security"],
    ["Artificial Intelligence & Machine Learning", "Cyber Security"],
    ["Information Technology", "Cyber Security"],
  ],
});
