/**
 * IT-503(A) - RGPV Information Technology.
 * branch: Information Technology (IT-XXX codes).
 * The RGPV syllabus for this subject is identical to the base subject's
 * syllabus, so the fully-authored study content is reused via rebrandSubject.
 */

import type { AcademicSubject } from "./types";
import { cs501 } from "./subject-cs-501";
import { rebrandSubject } from "./rebrand";

export const it503a: AcademicSubject = rebrandSubject(cs501, {
  id: "it-503-a",
  code: "IT-503(A)",
  semester: "V Semester",
  program: "RGPV · Information Technology",
  replacements: [
    ["CS-501", "IT-503"],
    ["Computer Science & Engineering", "Information Technology"],
  ],
});
