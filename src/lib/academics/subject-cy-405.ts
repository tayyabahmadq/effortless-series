/**
 * CY-405 - RGPV Cyber Security.
 * The RGPV syllabus for this subject is identical to the base subject's
 * syllabus, so the fully-authored study content is reused via rebrandSubject.
 */

import type { AcademicSubject } from "./types";
import { cs502 } from "./subject-cs-502";
import { rebrandSubject } from "./rebrand";

export const cy405: AcademicSubject = rebrandSubject(cs502, {
  id: "cy-405",
  code: "CY-405",
  semester: "IV Semester",
  program: "RGPV · Cyber Security",
  replacements: [
    ["CS-502", "CY-405"],
    ["Computer Science & Engineering", "Cyber Security"],
    ["Artificial Intelligence & Data Science", "Cyber Security"],
    ["Artificial Intelligence & Machine Learning", "Cyber Security"],
    ["Information Technology", "Cyber Security"],
  ],
});
