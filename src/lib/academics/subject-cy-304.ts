/**
 * CY-304 - RGPV Cyber Security.
 * The RGPV syllabus for this subject is identical to the base subject's
 * syllabus, so the fully-authored study content is reused via rebrandSubject.
 */

import type { AcademicSubject } from "./types";
import { cs304 } from "./subject-cs-304";
import { rebrandSubject } from "./rebrand";

export const cy304: AcademicSubject = rebrandSubject(cs304, {
  id: "cy-304",
  code: "CY-304",
  semester: "III Semester",
  program: "RGPV · Cyber Security",
  replacements: [
    ["CS-304", "CY-304"],
    ["Computer Science & Engineering", "Cyber Security"],
    ["Artificial Intelligence & Data Science", "Cyber Security"],
    ["Artificial Intelligence & Machine Learning", "Cyber Security"],
    ["Information Technology", "Cyber Security"],
  ],
});
