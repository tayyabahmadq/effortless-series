/**
 * IT-802(A) - RGPV Information Technology.
 * branch: Information Technology (IT-XXX codes).
 * The RGPV syllabus for this subject is identical to the base subject's
 * syllabus, so the fully-authored study content is reused via rebrandSubject.
 */

import type { AcademicSubject } from "./types";
import { cs601 } from "./subject-cs-601";
import { rebrandSubject } from "./rebrand";

export const it802a: AcademicSubject = rebrandSubject(cs601, {
  id: "it-802-a",
  code: "IT-802(A)",
  semester: "VIII Semester",
  program: "RGPV · Information Technology",
  replacements: [
    ["CS-601", "IT-802(A)"],
    ["Computer Science & Engineering", "Information Technology"],
  ],
});
