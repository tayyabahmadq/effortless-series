/**
 * IT-302 - RGPV Information Technology.
 * branch: Information Technology (IT-XXX codes).
 * The RGPV syllabus for this subject is identical to the base subject's
 * syllabus, so the fully-authored study content is reused via rebrandSubject.
 */

import type { AcademicSubject } from "./types";
import { cs302 } from "./subject-cs-302";
import { rebrandSubject } from "./rebrand";

export const it302: AcademicSubject = rebrandSubject(cs302, {
  id: "it-302",
  code: "IT-302",
  semester: "III Semester",
  program: "RGPV · Information Technology",
  replacements: [
    ["CS-302", "IT-302"],
    ["Computer Science & Engineering", "Information Technology"],
  ],
});
