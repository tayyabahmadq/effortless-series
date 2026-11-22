/**
 * IT-604(B) - RGPV Information Technology.
 * branch: Information Technology (IT-XXX codes).
 * The RGPV syllabus for this subject is identical to the base subject's
 * syllabus, so the fully-authored study content is reused via rebrandSubject.
 */

import type { AcademicSubject } from "./types";
import { cs403 } from "./subject-cs-403";
import { rebrandSubject } from "./rebrand";

export const it604b: AcademicSubject = rebrandSubject(cs403, {
  id: "it-604-b",
  code: "IT-604(B)",
  semester: "VI Semester",
  program: "RGPV · Information Technology",
  replacements: [
    ["CS-403", "IT-604(B)"],
    ["Computer Science & Engineering", "Information Technology"],
  ],
});
