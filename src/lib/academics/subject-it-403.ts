/**
 * IT-403 - RGPV Information Technology.
 * branch: Information Technology (IT-XXX codes).
 * The RGPV syllabus for this subject is identical to the base subject's
 * syllabus, so the fully-authored study content is reused via rebrandSubject.
 */

import type { AcademicSubject } from "./types";
import { cs402 } from "./subject-cs-402";
import { rebrandSubject } from "./rebrand";

export const it403: AcademicSubject = rebrandSubject(cs402, {
  id: "it-403",
  code: "IT-403",
  semester: "IV Semester",
  program: "RGPV · Information Technology",
  replacements: [
    ["CS-402", "IT-403"],
    ["Computer Science & Engineering", "Information Technology"],
  ],
});
