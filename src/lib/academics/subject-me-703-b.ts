/**
 * ME-703(B) - RGPV Mechanical Engineering.
 * The RGPV syllabus for this subject is identical to the base subject's
 * syllabus, so the fully-authored study content is reused via rebrandSubject.
 */

import type { AcademicSubject } from "./types";
import { ad304 } from "./subject-ad-304";
import { rebrandSubject } from "./rebrand";

export const me703b: AcademicSubject = rebrandSubject(ad304, {
  id: "me-703-b",
  code: "ME-703(B)",
  semester: "VII Semester",
  program: "RGPV · Mechanical Engineering",
  replacements: [
    ["AD-304", "ME-703(B)"],
    ["Computer Science & Engineering", "Mechanical Engineering"],
    ["Artificial Intelligence & Data Science", "Mechanical Engineering"],
    ["Artificial Intelligence & Machine Learning", "Mechanical Engineering"],
    ["Information Technology", "Mechanical Engineering"],
  ],
});
