/**
 * IT-304 - RGPV Information Technology.
 * branch: Information Technology (IT-XXX codes).
 * The RGPV syllabus for this subject is identical to the base subject's
 * syllabus, so the fully-authored study content is reused via rebrandSubject.
 */

import type { AcademicSubject } from "./types";
import { cs305 } from "./subject-cs-305";
import { rebrandSubject } from "./rebrand";

export const it304: AcademicSubject = rebrandSubject(cs305, {
  id: "it-304",
  code: "IT-304",
  semester: "III Semester",
  program: "RGPV · Information Technology",
  replacements: [
    ["CS-305", "IT-304"],
    ["Computer Science & Engineering", "Information Technology"],
  ],
});
