/**
 * CY-504(C) - RGPV Cyber Security.
 * The RGPV syllabus for this subject is identical to the base subject's
 * syllabus, so the fully-authored study content is reused via rebrandSubject.
 */

import type { AcademicSubject } from "./types";
import { cs404 } from "./subject-cs-404";
import { rebrandSubject } from "./rebrand";

export const cy504c: AcademicSubject = rebrandSubject(cs404, {
  id: "cy-504-c",
  code: "CY-504(C)",
  semester: "V Semester",
  program: "RGPV · Cyber Security",
  replacements: [
    ["CS-404", "CY-504(C)"],
    ["Computer Science & Engineering", "Cyber Security"],
    ["Artificial Intelligence & Data Science", "Cyber Security"],
    ["Artificial Intelligence & Machine Learning", "Cyber Security"],
    ["Information Technology", "Cyber Security"],
  ],
});
