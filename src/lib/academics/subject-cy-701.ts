/**
 * CY-701 - RGPV Cyber Security.
 * The RGPV syllabus for this subject is identical to the base subject's
 * syllabus, so the fully-authored study content is reused via rebrandSubject.
 */

import type { AcademicSubject } from "./types";
import { cs601 } from "./subject-cs-601";
import { rebrandSubject } from "./rebrand";

export const cy701: AcademicSubject = rebrandSubject(cs601, {
  id: "cy-701",
  code: "CY-701",
  semester: "VII Semester",
  program: "RGPV · Cyber Security",
  replacements: [
    ["CS-601", "CY-701"],
    ["Computer Science & Engineering", "Cyber Security"],
    ["Artificial Intelligence & Data Science", "Cyber Security"],
    ["Artificial Intelligence & Machine Learning", "Cyber Security"],
    ["Information Technology", "Cyber Security"],
  ],
});
