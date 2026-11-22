/**
 * CE-604(B) - RGPV Civil Engineering.
 * The RGPV syllabus for this subject is identical to the base subject's
 * syllabus, so the fully-authored study content is reused via rebrandSubject.
 */

import type { AcademicSubject } from "./types";
import { it604a } from "./subject-it-604-a";
import { rebrandSubject } from "./rebrand";

export const ce604b: AcademicSubject = rebrandSubject(it604a, {
  id: "ce-604-b",
  code: "CE-604(B)",
  semester: "VI Semester",
  program: "RGPV · Civil Engineering",
  replacements: [
    ["IT-604(A)", "CE-604(B)"],
    ["Computer Science & Engineering", "Civil Engineering"],
    ["Artificial Intelligence & Data Science", "Civil Engineering"],
    ["Artificial Intelligence & Machine Learning", "Civil Engineering"],
    ["Information Technology", "Civil Engineering"],
  ],
});
