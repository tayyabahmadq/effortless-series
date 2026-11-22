/**
 * EC-803(B) - RGPV Electronics and Communication Engineering.
 * The RGPV syllabus for this subject is identical to the base subject's
 * syllabus, so the fully-authored study content is reused via rebrandSubject.
 */

import type { AcademicSubject } from "./types";
import { it703d } from "./subject-it-703-d";
import { rebrandSubject } from "./rebrand";

export const ec803b: AcademicSubject = rebrandSubject(it703d, {
  id: "ec-803-b",
  code: "EC-803(B)",
  semester: "VIII Semester",
  program: "RGPV · Electronics and Communication Engineering",
  replacements: [
    ["IT-703(D)", "EC-803(B)"],
    ["Computer Science & Engineering", "Electronics and Communication Engineering"],
    ["Artificial Intelligence & Data Science", "Electronics and Communication Engineering"],
    ["Artificial Intelligence & Machine Learning", "Electronics and Communication Engineering"],
    ["Information Technology", "Electronics and Communication Engineering"],
  ],
});
