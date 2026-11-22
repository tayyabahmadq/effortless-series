/**
 * IT-501 - RGPV Information Technology.
 * branch: Information Technology (IT-XXX codes).
 * Display title: "Operating System".
 * The RGPV syllabus for this subject is identical to the base subject's
 * syllabus, so the fully-authored study content is reused via rebrandSubject.
 */

import type { AcademicSubject } from "./types";
import { cs405 } from "./subject-cs-405";
import { rebrandSubject } from "./rebrand";

export const it501: AcademicSubject = rebrandSubject(cs405, {
  id: "it-501",
  code: "IT-501",
  semester: "V Semester",
  program: "RGPV · Information Technology",
  overrides: { title: "Operating System" },
  replacements: [
    ["CS-405", "IT-501"],
    ["Computer Science & Engineering", "Information Technology"],
  ],
});
