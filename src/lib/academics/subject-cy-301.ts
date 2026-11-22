/**
 * CY-301 - RGPV Cyber Security.
 * The RGPV syllabus for this subject is identical to the base subject's
 * syllabus, so the fully-authored study content is reused via rebrandSubject.
 */

import type { AcademicSubject } from "./types";
import { ad301 } from "./subject-ad-301";
import { rebrandSubject } from "./rebrand";

export const cy301: AcademicSubject = rebrandSubject(ad301, {
  id: "cy-301",
  code: "CY-301",
  semester: "III Semester",
  program: "RGPV · Cyber Security",
  replacements: [
    ["AD-301", "CY-301"],
    ["Computer Science & Engineering", "Cyber Security"],
    ["Artificial Intelligence & Data Science", "Cyber Security"],
    ["Artificial Intelligence & Machine Learning", "Cyber Security"],
    ["Information Technology", "Cyber Security"],
  ],
});
