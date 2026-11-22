/**
 * CE-703(A) - RGPV Civil Engineering.
 * The RGPV syllabus for this subject is identical to the base subject's
 * syllabus, so the fully-authored study content is reused via rebrandSubject.
 */

import type { AcademicSubject } from "./types";
import { ad604a } from "./subject-ad-604-a";
import { rebrandSubject } from "./rebrand";

export const ce703a: AcademicSubject = rebrandSubject(ad604a, {
  id: "ce-703-a",
  code: "CE-703(A)",
  semester: "VII Semester",
  program: "RGPV · Civil Engineering",
  replacements: [
    ["AD-604(A)", "CE-703(A)"],
    ["Computer Science & Engineering", "Civil Engineering"],
    ["Artificial Intelligence & Data Science", "Civil Engineering"],
    ["Artificial Intelligence & Machine Learning", "Civil Engineering"],
    ["Information Technology", "Civil Engineering"],
  ],
});
