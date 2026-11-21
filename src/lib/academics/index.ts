/**
 * Academics — aggregator for the four 5th-semester RGPV subjects.
 *
 * Content lives in per-subject files; this module keeps a stable public
 * export: `academicSubjects` (the full set) and `getAcademicSubject(id)`.
 */
import type { AcademicSubject } from "./types";
import { ad501 } from "./subject-ad-501";
import { ad502 } from "./subject-ad-502";
import { ad503a } from "./subject-ad-503a";
import { ad504a } from "./subject-ad-504a";

export type {
  AcademicSubject,
  AcadUnit,
  AcadChapter,
  AcadSection,
  AcadTable,
  AcadCodeExample,
  StudyPlanSection,
  StudyWeek,
  Callout,
} from "./types";

export const academicSubjects: AcademicSubject[] = [ad501, ad502, ad503a, ad504a];

export function getAcademicSubject(id: string): AcademicSubject | undefined {
  return academicSubjects.find((s) => s.id === id);
}

export const academicSubjectIds = academicSubjects.map((s) => s.id);

/** Total section count across all four subjects — used on the overview page. */
export const totalAcademicSections = academicSubjects.reduce(
  (sum, s) => sum + s.totalSections,
  0
);
