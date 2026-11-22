/**
 * IT-303 - RGPV Information Technology.
 * branch: Information Technology (IT-XXX codes).
 * The RGPV syllabus for this subject is identical to the base subject's
 * syllabus, so the fully-authored study content is reused via rebrandSubject.
 */

import type { AcademicSubject } from "./types";
import { cs303 } from "./subject-cs-303";
import { rebrandSubject } from "./rebrand";

export const it303: AcademicSubject = rebrandSubject(cs303, {
  id: "it-303",
  code: "IT-303",
  semester: "III Semester",
  program: "RGPV · Information Technology",
  replacements: [
    ["CS-303", "IT-303"],
    ["Computer Science & Engineering", "Information Technology"],
  ],
});
