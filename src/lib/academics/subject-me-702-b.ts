/**
 * ME-702(B) - RGPV Mechanical Engineering.
 * The RGPV syllabus for this subject is identical to the base subject's
 * syllabus, so the fully-authored study content is reused via rebrandSubject.
 */

import type { AcademicSubject } from "./types";
import { ad604a } from "./subject-ad-604-a";
import { rebrandSubject } from "./rebrand";

export const me702b: AcademicSubject = rebrandSubject(ad604a, {
  id: "me-702-b",
  code: "ME-702(B)",
  semester: "VII Semester",
  program: "RGPV · Mechanical Engineering",
  replacements: [
    ["AD-604(A)", "ME-702(B)"],
    ["Computer Science & Engineering", "Mechanical Engineering"],
    ["Artificial Intelligence & Data Science", "Mechanical Engineering"],
    ["Artificial Intelligence & Machine Learning", "Mechanical Engineering"],
    ["Information Technology", "Mechanical Engineering"],
  ],
});
