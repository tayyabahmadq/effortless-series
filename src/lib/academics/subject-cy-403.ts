/**
 * CY-403 - RGPV Cyber Security.
 * The RGPV syllabus for this subject is identical to the base subject's
 * syllabus, so the fully-authored study content is reused via rebrandSubject.
 */

import type { AcademicSubject } from "./types";
import { cs602 } from "./subject-cs-602";
import { rebrandSubject } from "./rebrand";

export const cy403: AcademicSubject = rebrandSubject(cs602, {
  id: "cy-403",
  code: "CY-403",
  semester: "IV Semester",
  program: "RGPV · Cyber Security",
  replacements: [
    ["CS-602", "CY-403"],
    ["Computer Science & Engineering", "Cyber Security"],
    ["Artificial Intelligence & Data Science", "Cyber Security"],
    ["Artificial Intelligence & Machine Learning", "Cyber Security"],
    ["Information Technology", "Cyber Security"],
  ],
});
