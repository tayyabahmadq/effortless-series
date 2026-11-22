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
// Information Technology (IT-XXX): identical-syllabus rebrands of the CSE family
import { it302 } from "@/lib/academics/subject-it-302";
import { it303 } from "@/lib/academics/subject-it-303";
import { it304 } from "@/lib/academics/subject-it-304";
import { it305 } from "@/lib/academics/subject-it-305";
import { it402 } from "@/lib/academics/subject-it-402";
import { it403 } from "@/lib/academics/subject-it-403";
import { it404 } from "@/lib/academics/subject-it-404";
import { it405 } from "@/lib/academics/subject-it-405";
import { it501 } from "@/lib/academics/subject-it-501";
import { it502 } from "@/lib/academics/subject-it-502";
import { it503a } from "@/lib/academics/subject-it-503-a";
import { it503b } from "@/lib/academics/subject-it-503-b";
import { it503c } from "@/lib/academics/subject-it-503-c";
import { it504a } from "@/lib/academics/subject-it-504-a";
import { it504b } from "@/lib/academics/subject-it-504-b";
import { it504c } from "@/lib/academics/subject-it-504-c";
import { it601 } from "@/lib/academics/subject-it-601";
import { it602 } from "@/lib/academics/subject-it-602";
import { it603a } from "@/lib/academics/subject-it-603-a";
import { it603b } from "@/lib/academics/subject-it-603-b";
import { it604a } from "@/lib/academics/subject-it-604-a";
import { it604b } from "@/lib/academics/subject-it-604-b";
import { it604c } from "@/lib/academics/subject-it-604-c";
import { it605 } from "@/lib/academics/subject-it-605";
import { it606 } from "@/lib/academics/subject-it-606";
import { it701 } from "@/lib/academics/subject-it-701";
import { it702a } from "@/lib/academics/subject-it-702-a";
import { it702b } from "@/lib/academics/subject-it-702-b";
import { it702c } from "@/lib/academics/subject-it-702-c";
import { it702d } from "@/lib/academics/subject-it-702-d";
import { it703b } from "@/lib/academics/subject-it-703-b";
import { it703c } from "@/lib/academics/subject-it-703-c";
import { it703d } from "@/lib/academics/subject-it-703-d";
import { it801 } from "@/lib/academics/subject-it-801";
import { it802a } from "@/lib/academics/subject-it-802-a";
import { it802b } from "@/lib/academics/subject-it-802-b";
import { it802c } from "@/lib/academics/subject-it-802-c";
import { it802d } from "@/lib/academics/subject-it-802-d";
import { it803a } from "@/lib/academics/subject-it-803-a";
import { it803b } from "@/lib/academics/subject-it-803-b";
import { it803c } from "@/lib/academics/subject-it-803-c";
import { it803d } from "@/lib/academics/subject-it-803-d";
// Priority-branch rebrands of identical RGPV syllabi
import { ec803b } from "@/lib/academics/subject-ec-803-b";
import { me702b } from "@/lib/academics/subject-me-702-b";
import { me803d } from "@/lib/academics/subject-me-803-d";
import { ce604b } from "@/lib/academics/subject-ce-604-b";
import { ce703a } from "@/lib/academics/subject-ce-703-a";
import { ce803a } from "@/lib/academics/subject-ce-803-a";
import { cy301 } from "@/lib/academics/subject-cy-301";
import { cy303 } from "@/lib/academics/subject-cy-303";
import { cy304 } from "@/lib/academics/subject-cy-304";
import { cy305 } from "@/lib/academics/subject-cy-305";
import { cy403 } from "@/lib/academics/subject-cy-403";
import { cy404 } from "@/lib/academics/subject-cy-404";
import { cy405 } from "@/lib/academics/subject-cy-405";
import { cy504b } from "@/lib/academics/subject-cy-504-b";
import { cy504c } from "@/lib/academics/subject-cy-504-c";
import { cy701 } from "@/lib/academics/subject-cy-701";
import { cy703d } from "@/lib/academics/subject-cy-703-d";
// Cyber Security — authored CY subjects
import { cy302 } from "@/lib/academics/subject-cy-302";
import { cy402 } from "@/lib/academics/subject-cy-402";
import { cy406 } from "@/lib/academics/subject-cy-406";
import { cy501 } from "@/lib/academics/subject-cy-501";
import { cy503a } from "@/lib/academics/subject-cy-503-a";
import { cy503b } from "@/lib/academics/subject-cy-503-b";
import { cy503c } from "@/lib/academics/subject-cy-503-c";
import { cy504a } from "@/lib/academics/subject-cy-504-a";
import { cy702a } from "@/lib/academics/subject-cy-702-a";
import { cy703a } from "@/lib/academics/subject-cy-703-a";
import { cy703b } from "@/lib/academics/subject-cy-703-b";
import { cy703c } from "@/lib/academics/subject-cy-703-c";
import { cy801 } from "@/lib/academics/subject-cy-801";
import { cy802b } from "@/lib/academics/subject-cy-802-b";
import { cy802c } from "@/lib/academics/subject-cy-802-c";
// Cyber Security — authored sem 6 subjects
import { cy601 } from "@/lib/academics/subject-cy-601";
import { cy603a } from "@/lib/academics/subject-cy-603-a";
import { cy603b } from "@/lib/academics/subject-cy-603-b";
import { cy603c } from "@/lib/academics/subject-cy-603-c";
import { cy604a } from "@/lib/academics/subject-cy-604-a";
import { cy604b } from "@/lib/academics/subject-cy-604-b";
import { cy604c } from "@/lib/academics/subject-cy-604-c";
import { cy605 } from "@/lib/academics/subject-cy-605";
// ECE — authored subjects
import { ec302 } from "@/lib/academics/subject-ec-302";
import { ec303 } from "@/lib/academics/subject-ec-303";
import { ec304 } from "@/lib/academics/subject-ec-304";
import { ec305 } from "@/lib/academics/subject-ec-305";
import { ec402 } from "@/lib/academics/subject-ec-402";
import { ec403 } from "@/lib/academics/subject-ec-403";
import { ec404 } from "@/lib/academics/subject-ec-404";
import { ec405 } from "@/lib/academics/subject-ec-405";
import { ec501 } from "@/lib/academics/subject-ec-501";
import { ec502 } from "@/lib/academics/subject-ec-502";
import { ec601 } from "@/lib/academics/subject-ec-601";
import { ec602 } from "@/lib/academics/subject-ec-602";
import { ec701 } from "@/lib/academics/subject-ec-701";
import { ec801 } from "@/lib/academics/subject-ec-801";
import { ec802a } from "@/lib/academics/subject-ec-802-a";
import { ec802b } from "@/lib/academics/subject-ec-802-b";
import { ec803a } from "@/lib/academics/subject-ec-803-a";
import { ec803c } from "@/lib/academics/subject-ec-803-c";

const AD = "ai-and-data-science";
const CSE = "computer-science-and-engineering";
const AL = "ai-and-machine-learning";
const IT = "information-technology";
const EC = "electronics-and-communication";
const ME = "mechanical-engineering";
const CE = "civil-engineering";
const CY = "cyber-security";
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
  ...fyEntries(AL),// Semester III
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

  // ===== Information Technology =====
  // Semester III
  [`${IT}/3/it-302`]: it302,
  [`${IT}/3/it-303`]: it303,
  [`${IT}/3/it-304`]: it304,
  [`${IT}/3/it-305`]: it305,
  [`${IT}/3/es-301`]: es301,
  // Semester IV
  [`${IT}/4/it-402`]: it402,
  [`${IT}/4/it-403`]: it403,
  [`${IT}/4/it-404`]: it404,
  [`${IT}/4/it-405`]: it405,
  [`${IT}/4/bt-401`]: bt401,
  // Semester V
  [`${IT}/5/it-501`]: it501,
  [`${IT}/5/it-502`]: it502,
  [`${IT}/5/it-503-a`]: it503a,
  [`${IT}/5/it-503-b`]: it503b,
  [`${IT}/5/it-503-c`]: it503c,
  [`${IT}/5/it-504-a`]: it504a,
  [`${IT}/5/it-504-b`]: it504b,
  [`${IT}/5/it-504-c`]: it504c,
  // Semester VI
  [`${IT}/6/it-601`]: it601,
  [`${IT}/6/it-602`]: it602,
  [`${IT}/6/it-603-a`]: it603a,
  [`${IT}/6/it-603-b`]: it603b,
  [`${IT}/6/it-604-a`]: it604a,
  [`${IT}/6/it-604-b`]: it604b,
  [`${IT}/6/it-604-c`]: it604c,
  [`${IT}/6/it-605`]: it605,
  [`${IT}/6/it-606`]: it606,
  // Semester VII
  [`${IT}/7/it-701`]: it701,
  [`${IT}/7/it-702-a`]: it702a,
  [`${IT}/7/it-702-b`]: it702b,
  [`${IT}/7/it-702-c`]: it702c,
  [`${IT}/7/it-702-d`]: it702d,
  [`${IT}/7/it-703-b`]: it703b,
  [`${IT}/7/it-703-c`]: it703c,
  [`${IT}/7/it-703-d`]: it703d,
  // Semester VIII
  [`${IT}/8/it-801`]: it801,
  [`${IT}/8/it-802-a`]: it802a,
  [`${IT}/8/it-802-b`]: it802b,
  [`${IT}/8/it-802-c`]: it802c,
  [`${IT}/8/it-802-d`]: it802d,
  [`${IT}/8/it-803-a`]: it803a,
  [`${IT}/8/it-803-b`]: it803b,
  [`${IT}/8/it-803-c`]: it803c,
  [`${IT}/8/it-803-d`]: it803d,

  // ===== Electronics & Communication =====
  [`${EC}/3/ec-302`]: ec302,
  [`${EC}/3/ec-303`]: ec303,
  [`${EC}/3/ec-304`]: ec304,
  [`${EC}/3/ec-305`]: ec305,
  [`${EC}/4/ec-402`]: ec402,
  [`${EC}/4/ec-403`]: ec403,
  [`${EC}/4/ec-404`]: ec404,
  [`${EC}/4/ec-405`]: ec405,
  [`${EC}/5/ec-501`]: ec501,
  [`${EC}/5/ec-502`]: ec502,
  [`${EC}/6/ec-601`]: ec601,
  [`${EC}/6/ec-602`]: ec602,
  [`${EC}/7/ec-701`]: ec701,
  [`${EC}/8/ec-801`]: ec801,
  [`${EC}/8/ec-802-a`]: ec802a,
  [`${EC}/8/ec-802-b`]: ec802b,
  [`${EC}/8/ec-803-a`]: ec803a,
  [`${EC}/8/ec-803-b`]: ec803b,
  [`${EC}/8/ec-803-c`]: ec803c,

  // ===== Mechanical Engineering (rebrands) =====
  [`${ME}/7/me-702-b`]: me702b,
  [`${ME}/8/me-803-d`]: me803d,

  // ===== Civil Engineering (rebrands) =====
  [`${CE}/6/ce-604-b`]: ce604b,
  [`${CE}/7/ce-703-a`]: ce703a,
  [`${CE}/8/ce-803-a`]: ce803a,

  // ===== Cyber Security (rebrands) =====
  [`${CY}/3/cy-301`]: cy301,
  [`${CY}/3/cy-302`]: cy302,
  [`${CY}/3/cy-303`]: cy303,
  [`${CY}/3/cy-304`]: cy304,
  [`${CY}/3/cy-305`]: cy305,
  [`${CY}/4/cy-402`]: cy402,
  [`${CY}/4/cy-403`]: cy403,
  [`${CY}/4/cy-404`]: cy404,
  [`${CY}/4/cy-405`]: cy405,
  [`${CY}/4/cy-406`]: cy406,
  [`${CY}/5/cy-501`]: cy501,
  [`${CY}/5/cy-503-a`]: cy503a,
  [`${CY}/5/cy-503-b`]: cy503b,
  [`${CY}/5/cy-503-c`]: cy503c,
  [`${CY}/5/cy-504-a`]: cy504a,
  [`${CY}/5/cy-504-b`]: cy504b,
  [`${CY}/5/cy-504-c`]: cy504c,
  [`${CY}/6/cy-601`]: cy601,
  [`${CY}/6/cy-603-a`]: cy603a,
  [`${CY}/6/cy-603-b`]: cy603b,
  [`${CY}/6/cy-603-c`]: cy603c,
  [`${CY}/6/cy-604-a`]: cy604a,
  [`${CY}/6/cy-604-b`]: cy604b,
  [`${CY}/6/cy-604-c`]: cy604c,
  [`${CY}/6/cy-605`]: cy605,
  [`${CY}/7/cy-701`]: cy701,
  [`${CY}/7/cy-702-a`]: cy702a,
  [`${CY}/7/cy-703-a`]: cy703a,
  [`${CY}/7/cy-703-b`]: cy703b,
  [`${CY}/7/cy-703-c`]: cy703c,
  [`${CY}/7/cy-703-d`]: cy703d,
  // Semester VIII
  [`${CY}/8/cy-801`]: cy801,
  [`${CY}/8/cy-802-b`]: cy802b,
  [`${CY}/8/cy-802-c`]: cy802c,
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
