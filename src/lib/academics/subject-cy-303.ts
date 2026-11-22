/**
 * CY-303 - RGPV Cyber Security.
 * The RGPV syllabus for this subject is identical to the base subject's
 * syllabus, so the fully-authored study content is reused via rebrandSubject.
 */

import type { AcademicSubject } from "./types";
import { cs303 } from "./subject-cs-303";
import { rebrandSubject } from "./rebrand";

export const cy303: AcademicSubject = rebrandSubject(cs303, {
  id: "cy-303",
  code: "CY-303",
  semester: "III Semester",
  program: "RGPV · Cyber Security",
  replacements: [
    ["CS-303", "CY-303"],
    ["Computer Science & Engineering", "Cyber Security"],
    ["Artificial Intelligence & Data Science", "Cyber Security"],
    ["Artificial Intelligence & Machine Learning", "Cyber Security"],
    ["Information Technology", "Cyber Security"],
  ],
});
