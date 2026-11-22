/**
 * IT-402 - RGPV Information Technology.
 * branch: Information Technology (IT-XXX codes).
 * Display title: "Computer Architecture".
 * The RGPV syllabus for this subject is identical to the base subject's
 * syllabus, so the fully-authored study content is reused via rebrandSubject.
 */

import type { AcademicSubject } from "./types";
import { cs404 } from "./subject-cs-404";
import { rebrandSubject } from "./rebrand";

export const it402: AcademicSubject = rebrandSubject(cs404, {
  id: "it-402",
  code: "IT-402",
  semester: "IV Semester",
  program: "RGPV · Information Technology",
  overrides: { title: "Computer Architecture" },
  replacements: [
    ["CS-404", "IT-402"],
    ["Computer Science & Engineering", "Information Technology"],
    ["Computer Organization & Architecture", "Computer Architecture"],
    ["Computer Org. & Architecture", "Computer Architecture"],
  ],
});
