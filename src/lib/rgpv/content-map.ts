/**
 * Content map — which RGPV subjects carry full study content.
 *
 * Key format: `${branchSlug}/${semester}/${subjectSlug}` -> a loader that
 * dynamically imports that subject's study edition (units -> chapters ->
 * sections, with diagrams, tables, code and the Guide-me exam plan).
 *
 * Every subject is a SEPARATE dynamic-import chunk: with 100+ subjects of
 * authored content, a static import map bundles the whole library into one
 * shared JS chunk that breaks Cloudflare Pages' 25 MiB per-file asset limit.
 * Lazily importing per subject keeps every emitted file small.
 *
 * Subjects NOT in this map render as structured placeholders.
 */
import type { AcademicSubject } from "@/lib/academics/types";

const AD = "ai-and-data-science";
const CSE = "computer-science-and-engineering";
const AL = "ai-and-machine-learning";
const IT = "information-technology";
const EC = "electronics-and-communication";
const ME = "mechanical-engineering";
const CE = "civil-engineering";
const CY = "cyber-security";
const FY = "first-year-common";

type SubjectLoader = () => Promise<AcademicSubject>;

/** Shared first-year subjects (BT-XXX), reused across every B.Tech branch. */
const FY1: Record<string, SubjectLoader> = {
  "bt-101": () => import("@/lib/academics/subject-bt-101").then((m) => m.bt101),
  "bt-102": () => import("@/lib/academics/subject-bt-102").then((m) => m.bt102),
  "bt-103": () => import("@/lib/academics/subject-bt-103").then((m) => m.bt103),
  "bt-104": () => import("@/lib/academics/subject-bt-104").then((m) => m.bt104),
  "bt-105": () => import("@/lib/academics/subject-bt-105").then((m) => m.bt105),
  "bt-106": () => import("@/lib/academics/subject-bt-106").then((m) => m.bt106),
};

const FY2: Record<string, SubjectLoader> = {
  "bt-201": () => import("@/lib/academics/subject-bt-201").then((m) => m.bt201),
  "bt-202": () => import("@/lib/academics/subject-bt-202").then((m) => m.bt202),
  "bt-203": () => import("@/lib/academics/subject-bt-203").then((m) => m.bt203),
  "bt-204": () => import("@/lib/academics/subject-bt-204").then((m) => m.bt204),
  "bt-205": () => import("@/lib/academics/subject-bt-205").then((m) => m.bt205),
};

/** Build the Sem 1 + Sem 2 loaders for one branch (shared first-year content). */
function fyLoaders(branch: string): Record<string, SubjectLoader> {
  const out: Record<string, SubjectLoader> = {};
  for (const [slug, loader] of Object.entries(FY1))
    out[`${branch}/1/${slug}`] = loader;
  for (const [slug, loader] of Object.entries(FY2))
    out[`${branch}/2/${slug}`] = loader;
  return out;
}

export const subjectContentLoaders: Record<string, SubjectLoader> = {
  ...fyLoaders(FY),
  ...fyLoaders(AD),
  ...fyLoaders(CSE),
  ...fyLoaders(AL),
  [`${AD}/3/ad-301`]: () => import("@/lib/academics/subject-ad-301").then((m) => m.ad301),
  [`${AD}/3/ad-302`]: () => import("@/lib/academics/subject-ad-302").then((m) => m.ad302),
  [`${AD}/3/ad-303`]: () => import("@/lib/academics/subject-ad-303").then((m) => m.ad303),
  [`${AD}/3/ad-304`]: () => import("@/lib/academics/subject-ad-304").then((m) => m.ad304),
  [`${AD}/3/ad-305`]: () => import("@/lib/academics/subject-ad-305").then((m) => m.ad305),
  [`${AD}/4/ad-402`]: () => import("@/lib/academics/subject-ad-402").then((m) => m.ad402),
  [`${AD}/4/ad-403`]: () => import("@/lib/academics/subject-ad-403").then((m) => m.ad403),
  [`${AD}/4/ad-404`]: () => import("@/lib/academics/subject-ad-404").then((m) => m.ad404),
  [`${AD}/4/ad-405`]: () => import("@/lib/academics/subject-ad-405").then((m) => m.ad405),
  [`${AD}/4/bt-401`]: () => import("@/lib/academics/subject-bt-401").then((m) => m.bt401),
  [`${AD}/5/ad-501`]: () => import("@/lib/academics/subject-ad-501").then((m) => m.ad501),
  [`${AD}/5/ad-502`]: () => import("@/lib/academics/subject-ad-502").then((m) => m.ad502),
  [`${AD}/5/ad-503-a`]: () => import("@/lib/academics/subject-ad-503a").then((m) => m.ad503a),
  [`${AD}/5/ad-504-a`]: () => import("@/lib/academics/subject-ad-504a").then((m) => m.ad504a),
  [`${AD}/6/ad-601`]: () => import("@/lib/academics/subject-ad-601").then((m) => m.ad601),
  [`${AD}/6/ad-602`]: () => import("@/lib/academics/subject-ad-602").then((m) => m.ad602),
  [`${AD}/6/ad-604-a`]: () => import("@/lib/academics/subject-ad-604-a").then((m) => m.ad604a),
  [`${AD}/6/ad-604-b`]: () => import("@/lib/academics/subject-ad-604-b").then((m) => m.ad604B),
  [`${AD}/7/ad-701`]: () => import("@/lib/academics/subject-ad-701").then((m) => m.ad701),
  [`${AD}/8/ad-801`]: () => import("@/lib/academics/subject-ad-801").then((m) => m.ad801),
  [`${CSE}/3/cs-302`]: () => import("@/lib/academics/subject-cs-302").then((m) => m.cs302),
  [`${CSE}/3/cs-303`]: () => import("@/lib/academics/subject-cs-303").then((m) => m.cs303),
  [`${CSE}/3/cs-304`]: () => import("@/lib/academics/subject-cs-304").then((m) => m.cs304),
  [`${CSE}/3/cs-305`]: () => import("@/lib/academics/subject-cs-305").then((m) => m.cs305),
  [`${CSE}/3/es-301`]: () => import("@/lib/academics/subject-es-301").then((m) => m.es301),
  [`${CSE}/4/cs-402`]: () => import("@/lib/academics/subject-cs-402").then((m) => m.cs402),
  [`${CSE}/4/cs-403`]: () => import("@/lib/academics/subject-cs-403").then((m) => m.cs403),
  [`${CSE}/4/cs-404`]: () => import("@/lib/academics/subject-cs-404").then((m) => m.cs404),
  [`${CSE}/4/cs-405`]: () => import("@/lib/academics/subject-cs-405").then((m) => m.cs405),
  [`${CSE}/4/cs-406`]: () => import("@/lib/academics/subject-cs-406").then((m) => m.cs406),
  [`${CSE}/4/bt-401`]: () => import("@/lib/academics/subject-bt-401").then((m) => m.bt401),
  [`${CSE}/5/cs-501`]: () => import("@/lib/academics/subject-cs-501").then((m) => m.cs501),
  [`${CSE}/5/cs-502`]: () => import("@/lib/academics/subject-cs-502").then((m) => m.cs502),
  [`${CSE}/6/cs-601`]: () => import("@/lib/academics/subject-cs-601").then((m) => m.cs601),
  [`${CSE}/6/cs-602`]: () => import("@/lib/academics/subject-cs-602").then((m) => m.cs602),
  [`${CSE}/7/cs-701`]: () => import("@/lib/academics/subject-cs-701").then((m) => m.cs701),
  [`${CSE}/8/cs-801`]: () => import("@/lib/academics/subject-cs-801").then((m) => m.cs801),
  [`${AL}/3/al-301`]: () => import("@/lib/academics/subject-al-301").then((m) => m.al301),
  [`${AL}/3/al-302`]: () => import("@/lib/academics/subject-al-302").then((m) => m.al302),
  [`${AL}/3/al-303`]: () => import("@/lib/academics/subject-al-303").then((m) => m.al303),
  [`${AL}/3/al-304`]: () => import("@/lib/academics/subject-al-304").then((m) => m.al304),
  [`${AL}/3/al-305`]: () => import("@/lib/academics/subject-al-305").then((m) => m.al305),
  [`${AL}/4/al-401`]: () => import("@/lib/academics/subject-al-401").then((m) => m.al401),
  [`${AL}/4/al-402`]: () => import("@/lib/academics/subject-al-402").then((m) => m.al402),
  [`${AL}/4/al-403`]: () => import("@/lib/academics/subject-al-403").then((m) => m.al403),
  [`${AL}/4/al-404`]: () => import("@/lib/academics/subject-al-404").then((m) => m.al404),
  [`${AL}/4/al-405`]: () => import("@/lib/academics/subject-al-405").then((m) => m.al405),
  [`${AL}/5/al-501`]: () => import("@/lib/academics/subject-al-501").then((m) => m.al501),
  [`${AL}/5/al-502`]: () => import("@/lib/academics/subject-al-502").then((m) => m.al502),
  [`${AL}/5/al-503-c`]: () => import("@/lib/academics/subject-al-503-c").then((m) => m.al503c),
  [`${AL}/6/al-601`]: () => import("@/lib/academics/subject-al-601").then((m) => m.al601),
  [`${AL}/6/al-602`]: () => import("@/lib/academics/subject-al-602").then((m) => m.al602),
  [`${AL}/6/al-604-a`]: () => import("@/lib/academics/subject-al-604-a").then((m) => m.al604a),
  [`${AL}/6/al-604-b`]: () => import("@/lib/academics/subject-al-604-b").then((m) => m.al604b),
  [`${AL}/7/al-701`]: () => import("@/lib/academics/subject-al-701").then((m) => m.al701),
  [`${AL}/7/al-702-a`]: () => import("@/lib/academics/subject-al-702-a").then((m) => m.al702a),
  [`${AL}/7/al-702-d`]: () => import("@/lib/academics/subject-al-702-d").then((m) => m.al702d),
  [`${AL}/7/al-703-a`]: () => import("@/lib/academics/subject-al-703-a").then((m) => m.al703a),
  [`${AL}/7/al-703-b`]: () => import("@/lib/academics/subject-al-703-b").then((m) => m.al703b),
  [`${AL}/7/al-703-c`]: () => import("@/lib/academics/subject-al-703-c").then((m) => m.al703c),
  [`${AL}/7/al-703-d`]: () => import("@/lib/academics/subject-al-703-d").then((m) => m.al703d),
  [`${AL}/8/al-801`]: () => import("@/lib/academics/subject-al-801").then((m) => m.al801),
  [`${AL}/8/al-802-a`]: () => import("@/lib/academics/subject-al-802-a").then((m) => m.al802a),
  [`${AL}/8/al-802-d`]: () => import("@/lib/academics/subject-al-802-d").then((m) => m.al802d),
  [`${AL}/8/al-803-a`]: () => import("@/lib/academics/subject-al-803-a").then((m) => m.al803a),
  [`${AL}/8/al-803-b`]: () => import("@/lib/academics/subject-al-803-b").then((m) => m.al803b),
  [`${IT}/3/it-302`]: () => import("@/lib/academics/subject-it-302").then((m) => m.it302),
  [`${IT}/3/it-303`]: () => import("@/lib/academics/subject-it-303").then((m) => m.it303),
  [`${IT}/3/it-304`]: () => import("@/lib/academics/subject-it-304").then((m) => m.it304),
  [`${IT}/3/it-305`]: () => import("@/lib/academics/subject-it-305").then((m) => m.it305),
  [`${IT}/3/es-301`]: () => import("@/lib/academics/subject-es-301").then((m) => m.es301),
  [`${IT}/4/it-402`]: () => import("@/lib/academics/subject-it-402").then((m) => m.it402),
  [`${IT}/4/it-403`]: () => import("@/lib/academics/subject-it-403").then((m) => m.it403),
  [`${IT}/4/it-404`]: () => import("@/lib/academics/subject-it-404").then((m) => m.it404),
  [`${IT}/4/it-405`]: () => import("@/lib/academics/subject-it-405").then((m) => m.it405),
  [`${IT}/4/bt-401`]: () => import("@/lib/academics/subject-bt-401").then((m) => m.bt401),
  [`${IT}/5/it-501`]: () => import("@/lib/academics/subject-it-501").then((m) => m.it501),
  [`${IT}/5/it-502`]: () => import("@/lib/academics/subject-it-502").then((m) => m.it502),
  [`${IT}/5/it-503-a`]: () => import("@/lib/academics/subject-it-503-a").then((m) => m.it503a),
  [`${IT}/5/it-503-b`]: () => import("@/lib/academics/subject-it-503-b").then((m) => m.it503b),
  [`${IT}/5/it-503-c`]: () => import("@/lib/academics/subject-it-503-c").then((m) => m.it503c),
  [`${IT}/5/it-504-a`]: () => import("@/lib/academics/subject-it-504-a").then((m) => m.it504a),
  [`${IT}/5/it-504-b`]: () => import("@/lib/academics/subject-it-504-b").then((m) => m.it504b),
  [`${IT}/5/it-504-c`]: () => import("@/lib/academics/subject-it-504-c").then((m) => m.it504c),
  [`${IT}/6/it-601`]: () => import("@/lib/academics/subject-it-601").then((m) => m.it601),
  [`${IT}/6/it-602`]: () => import("@/lib/academics/subject-it-602").then((m) => m.it602),
  [`${IT}/6/it-603-a`]: () => import("@/lib/academics/subject-it-603-a").then((m) => m.it603a),
  [`${IT}/6/it-603-b`]: () => import("@/lib/academics/subject-it-603-b").then((m) => m.it603b),
  [`${IT}/6/it-604-a`]: () => import("@/lib/academics/subject-it-604-a").then((m) => m.it604a),
  [`${IT}/6/it-604-b`]: () => import("@/lib/academics/subject-it-604-b").then((m) => m.it604b),
  [`${IT}/6/it-604-c`]: () => import("@/lib/academics/subject-it-604-c").then((m) => m.it604c),
  [`${IT}/6/it-605`]: () => import("@/lib/academics/subject-it-605").then((m) => m.it605),
  [`${IT}/6/it-606`]: () => import("@/lib/academics/subject-it-606").then((m) => m.it606),
  [`${IT}/7/it-701`]: () => import("@/lib/academics/subject-it-701").then((m) => m.it701),
  [`${IT}/7/it-702-a`]: () => import("@/lib/academics/subject-it-702-a").then((m) => m.it702a),
  [`${IT}/7/it-702-b`]: () => import("@/lib/academics/subject-it-702-b").then((m) => m.it702b),
  [`${IT}/7/it-702-c`]: () => import("@/lib/academics/subject-it-702-c").then((m) => m.it702c),
  [`${IT}/7/it-702-d`]: () => import("@/lib/academics/subject-it-702-d").then((m) => m.it702d),
  [`${IT}/7/it-703-b`]: () => import("@/lib/academics/subject-it-703-b").then((m) => m.it703b),
  [`${IT}/7/it-703-c`]: () => import("@/lib/academics/subject-it-703-c").then((m) => m.it703c),
  [`${IT}/7/it-703-d`]: () => import("@/lib/academics/subject-it-703-d").then((m) => m.it703d),
  [`${IT}/8/it-801`]: () => import("@/lib/academics/subject-it-801").then((m) => m.it801),
  [`${IT}/8/it-802-a`]: () => import("@/lib/academics/subject-it-802-a").then((m) => m.it802a),
  [`${IT}/8/it-802-b`]: () => import("@/lib/academics/subject-it-802-b").then((m) => m.it802b),
  [`${IT}/8/it-802-c`]: () => import("@/lib/academics/subject-it-802-c").then((m) => m.it802c),
  [`${IT}/8/it-802-d`]: () => import("@/lib/academics/subject-it-802-d").then((m) => m.it802d),
  [`${IT}/8/it-803-a`]: () => import("@/lib/academics/subject-it-803-a").then((m) => m.it803a),
  [`${IT}/8/it-803-b`]: () => import("@/lib/academics/subject-it-803-b").then((m) => m.it803b),
  [`${IT}/8/it-803-c`]: () => import("@/lib/academics/subject-it-803-c").then((m) => m.it803c),
  [`${IT}/8/it-803-d`]: () => import("@/lib/academics/subject-it-803-d").then((m) => m.it803d),
  [`${EC}/3/ec-302`]: () => import("@/lib/academics/subject-ec-302").then((m) => m.ec302),
  [`${EC}/3/ec-303`]: () => import("@/lib/academics/subject-ec-303").then((m) => m.ec303),
  [`${EC}/3/ec-304`]: () => import("@/lib/academics/subject-ec-304").then((m) => m.ec304),
  [`${EC}/3/ec-305`]: () => import("@/lib/academics/subject-ec-305").then((m) => m.ec305),
  [`${EC}/4/ec-402`]: () => import("@/lib/academics/subject-ec-402").then((m) => m.ec402),
  [`${EC}/4/ec-403`]: () => import("@/lib/academics/subject-ec-403").then((m) => m.ec403),
  [`${EC}/4/ec-404`]: () => import("@/lib/academics/subject-ec-404").then((m) => m.ec404),
  [`${EC}/4/ec-405`]: () => import("@/lib/academics/subject-ec-405").then((m) => m.ec405),
  [`${EC}/5/ec-501`]: () => import("@/lib/academics/subject-ec-501").then((m) => m.ec501),
  [`${EC}/5/ec-502`]: () => import("@/lib/academics/subject-ec-502").then((m) => m.ec502),
  [`${EC}/6/ec-601`]: () => import("@/lib/academics/subject-ec-601").then((m) => m.ec601),
  [`${EC}/6/ec-602`]: () => import("@/lib/academics/subject-ec-602").then((m) => m.ec602),
  [`${EC}/7/ec-701`]: () => import("@/lib/academics/subject-ec-701").then((m) => m.ec701),
  [`${EC}/8/ec-801`]: () => import("@/lib/academics/subject-ec-801").then((m) => m.ec801),
  [`${EC}/8/ec-802-a`]: () => import("@/lib/academics/subject-ec-802-a").then((m) => m.ec802a),
  [`${EC}/8/ec-802-b`]: () => import("@/lib/academics/subject-ec-802-b").then((m) => m.ec802b),
  [`${EC}/8/ec-803-a`]: () => import("@/lib/academics/subject-ec-803-a").then((m) => m.ec803a),
  [`${EC}/8/ec-803-b`]: () => import("@/lib/academics/subject-ec-803-b").then((m) => m.ec803b),
  [`${EC}/8/ec-803-c`]: () => import("@/lib/academics/subject-ec-803-c").then((m) => m.ec803c),
  [`${ME}/7/me-702-b`]: () => import("@/lib/academics/subject-me-702-b").then((m) => m.me702b),
  [`${ME}/8/me-803-d`]: () => import("@/lib/academics/subject-me-803-d").then((m) => m.me803d),
  [`${CE}/6/ce-604-b`]: () => import("@/lib/academics/subject-ce-604-b").then((m) => m.ce604b),
  [`${CE}/7/ce-703-a`]: () => import("@/lib/academics/subject-ce-703-a").then((m) => m.ce703a),
  [`${CE}/8/ce-803-a`]: () => import("@/lib/academics/subject-ce-803-a").then((m) => m.ce803a),
  [`${CY}/3/cy-301`]: () => import("@/lib/academics/subject-cy-301").then((m) => m.cy301),
  [`${CY}/3/cy-302`]: () => import("@/lib/academics/subject-cy-302").then((m) => m.cy302),
  [`${CY}/3/cy-303`]: () => import("@/lib/academics/subject-cy-303").then((m) => m.cy303),
  [`${CY}/3/cy-304`]: () => import("@/lib/academics/subject-cy-304").then((m) => m.cy304),
  [`${CY}/3/cy-305`]: () => import("@/lib/academics/subject-cy-305").then((m) => m.cy305),
  [`${CY}/4/cy-402`]: () => import("@/lib/academics/subject-cy-402").then((m) => m.cy402),
  [`${CY}/4/cy-403`]: () => import("@/lib/academics/subject-cy-403").then((m) => m.cy403),
  [`${CY}/4/cy-404`]: () => import("@/lib/academics/subject-cy-404").then((m) => m.cy404),
  [`${CY}/4/cy-405`]: () => import("@/lib/academics/subject-cy-405").then((m) => m.cy405),
  [`${CY}/4/cy-406`]: () => import("@/lib/academics/subject-cy-406").then((m) => m.cy406),
  [`${CY}/5/cy-501`]: () => import("@/lib/academics/subject-cy-501").then((m) => m.cy501),
  [`${CY}/5/cy-503-a`]: () => import("@/lib/academics/subject-cy-503-a").then((m) => m.cy503a),
  [`${CY}/5/cy-503-b`]: () => import("@/lib/academics/subject-cy-503-b").then((m) => m.cy503b),
  [`${CY}/5/cy-503-c`]: () => import("@/lib/academics/subject-cy-503-c").then((m) => m.cy503c),
  [`${CY}/5/cy-504-a`]: () => import("@/lib/academics/subject-cy-504-a").then((m) => m.cy504a),
  [`${CY}/5/cy-504-b`]: () => import("@/lib/academics/subject-cy-504-b").then((m) => m.cy504b),
  [`${CY}/5/cy-504-c`]: () => import("@/lib/academics/subject-cy-504-c").then((m) => m.cy504c),
  [`${CY}/6/cy-601`]: () => import("@/lib/academics/subject-cy-601").then((m) => m.cy601),
  [`${CY}/6/cy-603-a`]: () => import("@/lib/academics/subject-cy-603-a").then((m) => m.cy603a),
  [`${CY}/6/cy-603-b`]: () => import("@/lib/academics/subject-cy-603-b").then((m) => m.cy603b),
  [`${CY}/6/cy-603-c`]: () => import("@/lib/academics/subject-cy-603-c").then((m) => m.cy603c),
  [`${CY}/6/cy-604-a`]: () => import("@/lib/academics/subject-cy-604-a").then((m) => m.cy604a),
  [`${CY}/6/cy-604-b`]: () => import("@/lib/academics/subject-cy-604-b").then((m) => m.cy604b),
  [`${CY}/6/cy-604-c`]: () => import("@/lib/academics/subject-cy-604-c").then((m) => m.cy604c),
  [`${CY}/6/cy-605`]: () => import("@/lib/academics/subject-cy-605").then((m) => m.cy605),
  [`${CY}/7/cy-701`]: () => import("@/lib/academics/subject-cy-701").then((m) => m.cy701),
  [`${CY}/7/cy-702-a`]: () => import("@/lib/academics/subject-cy-702-a").then((m) => m.cy702a),
  [`${CY}/7/cy-703-a`]: () => import("@/lib/academics/subject-cy-703-a").then((m) => m.cy703a),
  [`${CY}/7/cy-703-b`]: () => import("@/lib/academics/subject-cy-703-b").then((m) => m.cy703b),
  [`${CY}/7/cy-703-c`]: () => import("@/lib/academics/subject-cy-703-c").then((m) => m.cy703c),
  [`${CY}/7/cy-703-d`]: () => import("@/lib/academics/subject-cy-703-d").then((m) => m.cy703d),
  [`${CY}/8/cy-801`]: () => import("@/lib/academics/subject-cy-801").then((m) => m.cy801),
  [`${CY}/8/cy-802-b`]: () => import("@/lib/academics/subject-cy-802-b").then((m) => m.cy802b),
  [`${CY}/8/cy-802-c`]: () => import("@/lib/academics/subject-cy-802-c").then((m) => m.cy802c),
};

/** Slugs of the subjects with full content - used for badges. */
export const fullContentKeys = new Set(Object.keys(subjectContentLoaders));

export async function getSubjectContent(
  branchSlug: string,
  semester: number,
  subjectSlug: string
): Promise<AcademicSubject | undefined> {
  const loader =
    subjectContentLoaders[`${branchSlug}/${semester}/${subjectSlug}`];
  return loader ? loader() : undefined;
}

/** Display name override for subjects whose catalog row is generic. */
export const subjectNameOverrides: Record<string, string> = {
  [`${AD}/5/ad-503-a`]: "Internet & Web Technology",
  [`${AD}/5/ad-504-a`]: "Management Information System",
};
