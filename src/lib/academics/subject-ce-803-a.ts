/**
 * CE-803(A) - RGPV Civil Engineering.
 * The RGPV syllabus for this subject is identical to the base subject's
 * syllabus, so the fully-authored study content is reused via rebrandSubject.
 */

import type { AcademicSubject } from "./types";
import { ad304 } from "./subject-ad-304";
import { rebrandSubject } from "./rebrand";

export const ce803a: AcademicSubject = rebrandSubject(ad304, {
  id: "ce-803-a",
  code: "CE-803(A)",
  semester: "VIII Semester",
  program: "RGPV · Civil Engineering",
  replacements: [
    ["AD-304", "CE-803(A)"],
    ["Computer Science & Engineering", "Civil Engineering"],
    ["Artificial Intelligence & Data Science", "Civil Engineering"],
    ["Artificial Intelligence & Machine Learning", "Civil Engineering"],
    ["Information Technology", "Civil Engineering"],
  ],
});
