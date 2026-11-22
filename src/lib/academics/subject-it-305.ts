/**
 * IT-305 - RGPV Information Technology.
 * branch: Information Technology (IT-XXX codes).
 * Display title: "Digital Circuits and Systems".
 * The RGPV syllabus for this subject is identical to the base subject's
 * syllabus, so the fully-authored study content is reused via rebrandSubject.
 */

import type { AcademicSubject } from "./types";
import { cs304 } from "./subject-cs-304";
import { rebrandSubject } from "./rebrand";

export const it305: AcademicSubject = rebrandSubject(cs304, {
  id: "it-305",
  code: "IT-305",
  semester: "III Semester",
  program: "RGPV · Information Technology",
  overrides: { title: "Digital Circuits and Systems" },
  replacements: [
    ["CS-304", "IT-305"],
    ["Computer Science & Engineering", "Information Technology"],
    ["Digital Systems", "Digital Circuits and Systems"],
  ],
});
