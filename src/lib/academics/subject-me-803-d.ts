/**
 * ME-803(D) - RGPV Mechanical Engineering.
 * The RGPV syllabus for this subject is identical to the base subject's
 * syllabus, so the fully-authored study content is reused via rebrandSubject.
 */

import type { AcademicSubject } from "./types";
import { ad504a } from "./subject-ad-504-a";
import { rebrandSubject } from "./rebrand";

export const me803d: AcademicSubject = rebrandSubject(ad504a, {
  id: "me-803-d",
  code: "ME-803(D)",
  semester: "VIII Semester",
  program: "RGPV · Mechanical Engineering",
  replacements: [
    ["AD-504(A)", "ME-803(D)"],
    ["Computer Science & Engineering", "Mechanical Engineering"],
    ["Artificial Intelligence & Data Science", "Mechanical Engineering"],
    ["Artificial Intelligence & Machine Learning", "Mechanical Engineering"],
    ["Information Technology", "Mechanical Engineering"],
  ],
});
