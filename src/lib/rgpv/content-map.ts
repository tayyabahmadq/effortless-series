/**
 * Content map - which RGPV subjects carry full study content.
 *
 * Key format: `${branchSlug}/${semester}/${subjectSlug}` -> the existing
 * AcademicSubject study edition (units -> chapters -> sections, with diagrams,
 * tables, code and the Guide-me exam plan).
 *
 * Subjects NOT in this map render as structured placeholders.
 */
import type { AcademicSubject } from "@/lib/academics/types";
import { ad301 } from "@/lib/academics/subject-ad-301";
import { ad302 } from "@/lib/academics/subject-ad-302";
import { ad303 } from "@/lib/academics/subject-ad-303";
import { ad304 } from "@/lib/academics/subject-ad-304";
import { ad305 } from "@/lib/academics/subject-ad-305";
import { ad402 } from "@/lib/academics/subject-ad-402";
import { ad403 } from "@/lib/academics/subject-ad-403";
import { ad404 } from "@/lib/academics/subject-ad-404";
import { ad405 } from "@/lib/academics/subject-ad-405";
import { ad501 } from "@/lib/academics/subject-ad-501";
import { ad502 } from "@/lib/academics/subject-ad-502";
import { ad503a } from "@/lib/academics/subject-ad-503a";
import { ad504a } from "@/lib/academics/subject-ad-504a";
import { ad601 } from "@/lib/academics/subject-ad-601";
import { ad602 } from "@/lib/academics/subject-ad-602";
import { ad604a } from "@/lib/academics/subject-ad-604-a";
import { ad604B } from "@/lib/academics/subject-ad-604-b";
import { ad701 } from "@/lib/academics/subject-ad-701";
import { ad801 } from "@/lib/academics/subject-ad-801";
import { cs302 } from "@/lib/academics/subject-cs-302";
import { cs303 } from "@/lib/academics/subject-cs-303";
import { cs304 } from "@/lib/academics/subject-cs-304";
import { cs305 } from "@/lib/academics/subject-cs-305";
import { es301 } from "@/lib/academics/subject-es-301";
import { cs402 } from "@/lib/academics/subject-cs-402";
import { cs403 } from "@/lib/academics/subject-cs-403";
import { cs404 } from "@/lib/academics/subject-cs-404";
import { cs405 } from "@/lib/academics/subject-cs-405";
import { cs406 } from "@/lib/academics/subject-cs-406";
import { cs501 } from "@/lib/academics/subject-cs-501";
import { cs502 } from "@/lib/academics/subject-cs-502";
import { cs601 } from "@/lib/academics/subject-cs-601";
import { cs602 } from "@/lib/academics/subject-cs-602";
import { cs701 } from "@/lib/academics/subject-cs-701";
import { cs801 } from "@/lib/academics/subject-cs-801";
// AI & Machine Learning (AL-XXX) rebrands of identical RGPV syllabi
import { al301 } from "@/lib/academics/subject-al-301";
import { al302 } from "@/lib/academics/subject-al-302";
import { al303 } from "@/lib/academics/subject-al-303";
import { al304 } from "@/lib/academics/subject-al-304";
import { al305 } from "@/lib/academics/subject-al-305";
import { al402 } from "@/lib/academics/subject-al-402";
import { al403 } from "@/lib/academics/subject-al-403";
import { al404 } from "@/lib/academics/subject-al-404";
import { al501 } from "@/lib/academics/subject-al-501";
import { al502 } from "@/lib/academics/subject-al-502";
import { al601 } from "@/lib/academics/subject-al-601";
import { al602 } from "@/lib/academics/subject-al-602";
import { al701 } from "@/lib/academics/subject-al-701";
import { al703d } from "@/lib/academics/subject-al-703-d";
import { al802a } from "@/lib/academics/subject-al-802-a";
import { al803a } from "@/lib/academics/subject-al-803-a";
// AI & Machine Learning (AL-XXX) new authored subjects
import { al401 } from "@/lib/academics/subject-al-401";
import { al405 } from "@/lib/academics/subject-al-405";
import { al503c } from "@/lib/academics/subject-al-503-c";
import { al604a } from "@/lib/academics/subject-al-604-a";
import { al604b } from "@/lib/academics/subject-al-604-b";
import { al702a } from "@/lib/academics/subject-al-702-a";
import { al702d } from "@/lib/academics/subject-al-702-d";
import { al703a } from "@/lib/academics/subject-al-703-a";
import { al703b } from "@/lib/academics/subject-al-703-b";
import { al703c } from "@/lib/academics/subject-al-703-c";
import { al801 } from "@/lib/academics/subject-al-801";
import { al802d } from "@/lib/academics/subject-al-802-d";
import { al803b } from "@/lib/academics/subject-al-803-b";
// First-year common B.Tech subjects (BT-XXX), shared across CSE / AI&DS / AI&ML
import { bt101 } from "@/lib/academics/subject-bt-101";
import { bt102 } from "@/lib/academics/subject-bt-102";
import { bt103 } from "@/lib/academics/subject-bt-103";
import { bt104 } from "@/lib/academics/subject-bt-104";
import { bt105 } from "@/lib/academics/subject-bt-105";
import { bt106 } from "@/lib/academics/subject-bt-106";
import { bt201 } from "@/lib/academics/subject-bt-201";
import { bt202 } from "@/lib/academics/subject-bt-202";
import { bt203 } from "@/lib/academics/subject-bt-203";
import { bt204 } from "@/lib/academics/subject-bt-204";
import { bt205 } from "@/lib/academics/subject-bt-205";
import { bt401 } from "@/lib/academics/subject-bt-401";

const AD = "ai-and-data-science";
const CSE = "computer-science-and-engineering";
const AL = "ai-and-machine-learning";
const FY = "first-year-common";

/** First-year subject objects reused across every B.Tech branch's Sem 1-2. */
const fy1: [string, AcademicSubject][] = [
  ["bt-101", bt101],
  ["bt-102", bt102],
  ["bt-103", bt103],
  ["bt-104", bt104],
  ["bt-105", bt105],
  ["bt-106", bt106],
];
const fy2: [string, AcademicSubject][] = [
  ["bt-201", bt201],
  ["bt-202", bt202],
  ["bt-203", bt203],
  ["bt-204", bt204],
  ["bt-205", bt205],
];

/** Build the Sem 1 + Sem 2 entries for one branch (shared first-year content). */
function fyEntries(branch: string): Record<string, AcademicSubject> {
  const out: Record<string, AcademicSubject> = {};
  for (const [slug, subj] of fy1) out[`${branch}/1/${slug}`] = subj;
  for (const [slug, subj] of fy2) out[`${branch}/2/${slug}`] = subj;
  return out;
}

export const subjectContentMap: Record<string, AcademicSubject> = {
  // ===== First Year Common (standalone branch) =====
  ...fyEntries(FY),

  // ===== AI & Data Science =====
  ...fyEntries(AD),
  // Semester III
  [`${AD}/3/ad-301`]: ad301,
  [`${AD}/3/ad-302`]: ad302,
  [`${AD}/3/ad-303`]: ad303,
  [`${AD}/3/ad-304`]: ad304,
  [`${AD}/3/ad-305`]: ad305,
  // Semester IV
  [`${AD}/4/ad-402`]: ad402,
  [`${AD}/4/ad-403`]: ad403,
  [`${AD}/4/ad-404`]: ad404,
  [`${AD}/4/ad-405`]: ad405,
  [`${AD}/4/bt-401`]: bt401,
  // Semester V
  [`${AD}/5/ad-501`]: ad501,
  [`${AD}/5/ad-502`]: ad502,
  [`${AD}/5/ad-503-a`]: ad503a,
  [`${AD}/5/ad-504-a`]: ad504a,
  // Semester VI
  [`${AD}/6/ad-601`]: ad601,
  [`${AD}/6/ad-602`]: ad602,
  [`${AD}/6/ad-604-a`]: ad604a,
  [`${AD}/6/ad-604-b`]: ad604B,
  // Semester VII
  [`${AD}/7/ad-701`]: ad701,
  // Semester VIII
  [`${AD}/8/ad-801`]: ad801,

  // ===== Computer Science & Engineering =====
  ...fyEntries(CSE),
  // Semester III
  [`${CSE}/3/cs-302`]: cs302,
  [`${CSE}/3/cs-303`]: cs303,
  [`${CSE}/3/cs-304`]: cs304,
  [`${CSE}/3/cs-305`]: cs305,
  [`${CSE}/3/es-301`]: es301,
  // Semester IV
  [`${CSE}/4/cs-402`]: cs402,
  [`${CSE}/4/cs-403`]: cs403,
  [`${CSE}/4/cs-404`]: cs404,
  [`${CSE}/4/cs-405`]: cs405,
  [`${CSE}/4/cs-406`]: cs406,
  [`${CSE}/4/bt-401`]: bt401,
  // Semester V
  [`${CSE}/5/cs-501`]: cs501,
  [`${CSE}/5/cs-502`]: cs502,
  // Semester VI
  [`${CSE}/6/cs-601`]: cs601,
  [`${CSE}/6/cs-602`]: cs602,
  // Semester VII
  [`${CSE}/7/cs-701`]: cs701,
  // Semester VIII
  [`${CSE}/8/cs-801`]: cs801,

  // ===== AI & Machine Learning =====
  ...fyEntries(AL),
  // Semester III
  [`${AL}/3/al-301`]: al301,
  [`${AL}/3/al-302`]: al302,
  [`${AL}/3/al-303`]: al303,
  [`${AL}/3/al-304`]: al304,
  [`${AL}/3/al-305`]: al305,
  // Semester IV
  [`${AL}/4/al-401`]: al401,
  [`${AL}/4/al-402`]: al402,
  [`${AL}/4/al-403`]: al403,
  [`${AL}/4/al-404`]: al404,
  [`${AL}/4/al-405`]: al405,
  // Semester V
  [`${AL}/5/al-501`]: al501,
  [`${AL}/5/al-502`]: al502,
  [`${AL}/5/al-503-c`]: al503c,
  // Semester VI
  [`${AL}/6/al-601`]: al601,
  [`${AL}/6/al-602`]: al602,
  [`${AL}/6/al-604-a`]: al604a,
  [`${AL}/6/al-604-b`]: al604b,
  // Semester VII
  [`${AL}/7/al-701`]: al701,
  [`${AL}/7/al-702-a`]: al702a,
  [`${AL}/7/al-702-d`]: al702d,
  [`${AL}/7/al-703-a`]: al703a,
  [`${AL}/7/al-703-b`]: al703b,
  [`${AL}/7/al-703-c`]: al703c,
  [`${AL}/7/al-703-d`]: al703d,
  // Semester VIII
  [`${AL}/8/al-801`]: al801,
  [`${AL}/8/al-802-a`]: al802a,
  [`${AL}/8/al-802-d`]: al802d,
  [`${AL}/8/al-803-a`]: al803a,
  [`${AL}/8/al-803-b`]: al803b,
};

/** Slugs of the subjects with full content - used for badges. */
export const fullContentKeys = new Set(Object.keys(subjectContentMap));

export function getSubjectContent(
  branchSlug: string,
  semester: number,
  subjectSlug: string
): AcademicSubject | undefined {
  return subjectContentMap[`${branchSlug}/${semester}/${subjectSlug}`];
}

/** Display name override for subjects whose catalog row is generic. */
export const subjectNameOverrides: Record<string, string> = {
  [`${AD}/5/ad-503-a`]: "Internet & Web Technology",
  [`${AD}/5/ad-504-a`]: "Management Information System",
};
