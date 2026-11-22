/**
 * IT-502 - RGPV Information Technology.
 * branch: Information Technology (IT-XXX codes).
 * Display title: "Computer Network".
 * The RGPV syllabus for this subject is identical to the base subject's
 * syllabus, so the fully-authored study content is reused via rebrandSubject.
 */

import type { AcademicSubject } from "./types";
import { cs602 } from "./subject-cs-602";
import { rebrandSubject } from "./rebrand";

export const it502: AcademicSubject = rebrandSubject(cs602, {
  id: "it-502",
  code: "IT-502",
  semester: "V Semester",
  program: "RGPV · Information Technology",
  overrides: { title: "Computer Network" },
  replacements: [
    ["CS-602", "IT-502"],
    ["Computer Science & Engineering", "Information Technology"],
  ],
});
