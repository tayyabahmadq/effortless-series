/**
 * IT-405 - RGPV Information Technology.
 * branch: Information Technology (IT-XXX codes).
 * Display title: "Data base Management System".
 * The RGPV syllabus for this subject is identical to the base subject's
 * syllabus, so the fully-authored study content is reused via rebrandSubject.
 */

import type { AcademicSubject } from "./types";
import { cs502 } from "./subject-cs-502";
import { rebrandSubject } from "./rebrand";

export const it405: AcademicSubject = rebrandSubject(cs502, {
  id: "it-405",
  code: "IT-405",
  semester: "IV Semester",
  program: "RGPV · Information Technology",
  overrides: { title: "Data base Management System" },
  replacements: [
    ["CS-502", "IT-405"],
    ["Computer Science & Engineering", "Information Technology"],
    ["Database Management Systems", "Data base Management System"],
  ],
});
