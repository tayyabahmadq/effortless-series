/**
 * CY-305 - RGPV Cyber Security.
 * The RGPV syllabus for this subject is identical to the base subject's
 * syllabus, so the fully-authored study content is reused via rebrandSubject.
 */

import type { AcademicSubject } from "./types";
import { cs305 } from "./subject-cs-305";
import { rebrandSubject } from "./rebrand";

export const cy305: AcademicSubject = rebrandSubject(cs305, {
  id: "cy-305",
  code: "CY-305",
  semester: "III Semester",
  program: "RGPV · Cyber Security",
  replacements: [
    ["CS-305", "CY-305"],
    ["Computer Science & Engineering", "Cyber Security"],
    ["Artificial Intelligence & Data Science", "Cyber Security"],
    ["Artificial Intelligence & Machine Learning", "Cyber Security"],
    ["Information Technology", "Cyber Security"],
  ],
});
