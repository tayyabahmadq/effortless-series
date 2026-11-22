/**
 * IT-803(A) - RGPV Information Technology.
 * branch: Information Technology (IT-XXX codes).
 * Display title: "Blockchain Technology".
 * The RGPV syllabus for this subject is identical to the base subject's
 * syllabus, so the fully-authored study content is reused via rebrandSubject.
 */

import type { AcademicSubject } from "./types";
import { ad604B } from "./subject-ad-604-b";
import { rebrandSubject } from "./rebrand";

export const it803a: AcademicSubject = rebrandSubject(ad604B, {
  id: "it-803-a",
  code: "IT-803(A)",
  semester: "VIII Semester",
  program: "RGPV · Information Technology",
  overrides: { title: "Blockchain Technology" },
  replacements: [
    ["AD-604(B)", "IT-803(A)"],
    ["Artificial Intelligence & Data Science", "Information Technology"],
    ["Block chain Technologies", "Blockchain Technology"],
  ],
});
