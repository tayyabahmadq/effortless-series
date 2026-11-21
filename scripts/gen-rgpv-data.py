#!/usr/bin/env python3
"""
Generate src/lib/rgpv/branches-data.ts from the RGPV 2022 Course Catalog xlsx
inside upload/RGPV_2022_Course_Catalog.zip.

Output shape:
  export interface RgpvSubject { code, name, slug }
  export interface RgpvSemester { number, subjects: RgpvSubject[] }
  export interface RgpvBranch  { slug, name, semesters: RgpvSemester[] }
  export const rgpvBranches: RgpvBranch[]
  export const rgpvSubjectCount, rgpvBranchCount
"""
import zipfile, tempfile, os, re, sys

UPLOAD = "/home/z/my-project/upload/RGPV_2022_Course_Catalog.zip"
OUT = "/home/z/my-project/src/lib/rgpv/branches-data.ts"

def slugify(code: str) -> str:
    s = code.lower()
    s = re.sub(r"[^a-z0-9]+", "-", s)
    return s.strip("-")

import openpyxl

with tempfile.TemporaryDirectory() as td:
    with zipfile.ZipFile(UPLOAD) as z:
        z.extractall(td)
    root = td
    for dirpath, dirs, files in os.walk(td):
        for f in files:
            if f.endswith(".xlsx"):
                root = dirpath
                break
    xlsx = os.path.join(root, "RGPV_Courses_Offered_2022_Curriculum.xlsx")
    wb = openpyxl.load_workbook(xlsx, read_only=True)
    ws = wb["Subjects"]

    # branch -> sem -> code -> name (keep longest name per code)
    tree: dict[str, dict[int, dict[str, str]]] = {}
    for r in ws.iter_rows(min_row=5, values_only=True):
        branch, sem, code, name = r[1], r[2], r[3], r[4]
        if not branch or not code or sem is None:
            continue
        if not isinstance(branch, str) or not isinstance(code, str):
            continue
        # skip footnote rows
        if len(branch) > 60:
            continue
        try:
            sem = int(sem)
        except (TypeError, ValueError):
            continue
        if not (1 <= sem <= 8):
            continue
        name = str(name or code).strip()
        tree.setdefault(branch, {}).setdefault(sem, {})
        cur = tree[branch][sem].get(code)
        if cur is None or len(name) > len(cur):
            tree[branch][sem][code] = name

def esc(s: str) -> str:
    return s.replace("\\", "\\\\").replace('"', '\\"')

# Inject the two elective variants of AI&DS Semester V that the study library
# carries full content for (parsed from the user's study-edition PDFs).
aids = tree.get("AI and Data Science", {}).get(5, {})
if "AD-503" in aids:
    aids["AD-503(A)"] = "Internet & Web Technology (Departmental Elective — A)"
if "AD-504" in aids:
    aids["AD-504(A)"] = "Management Information System (Open Elective — A)"

lines = []
lines.append("/**")
lines.append(" * RGPV 2022 curriculum — generated from RGPV_Courses_Offered_2022_Curriculum.xlsx")
lines.append(" * (upload/RGPV_2022_Course_Catalog.zip). 43 branches, every subject")
lines.append(" * parsed from the official scheme documents, organised branch → semester.")
lines.append(" * NOTE: 64 of the official 451 PDFs are scanned images, so a few branch-")
lines.append(" * semesters have partial subject listings. Elective variants appear as")
lines.append(" * separate rows (e.g. AD-604(B)).")
lines.append(" */")
lines.append("")
lines.append("export interface RgpvSubject {")
lines.append("  code: string;")
lines.append("  name: string;")
lines.append("  slug: string;")
lines.append("}")
lines.append("")
lines.append("export interface RgpvSemester {")
lines.append("  number: number;")
lines.append("  subjects: RgpvSubject[];")
lines.append("}")
lines.append("")
lines.append("export interface RgpvBranch {")
lines.append("  slug: string;")
lines.append("  name: string;")
lines.append("  semesters: RgpvSemester[];")
lines.append("}")
lines.append("")

branch_count = 0
subject_count = 0
lines.append("export const rgpvBranches: RgpvBranch[] = [")
for branch in sorted(tree.keys()):
    slug = slugify(branch)
    lines.append("  {")
    lines.append(f'    slug: "{slug}",')
    lines.append(f'    name: "{esc(branch)}",')
    lines.append("    semesters: [")
    for sem in sorted(tree[branch].keys()):
        lines.append("      {")
        lines.append(f"        number: {sem},")
        lines.append("        subjects: [")
        for code in sorted(tree[branch][sem].keys()):
            name = tree[branch][sem][code]
            lines.append(f'          {{ code: "{esc(code)}", name: "{esc(name)}", slug: "{slugify(code)}" }},')
            subject_count += 1
        lines.append("        ],")
        lines.append("      },")
    lines.append("    ],")
    lines.append("  },")
    branch_count += 1
lines.append("];")
lines.append("")
lines.append(f"export const rgpvBranchCount = {branch_count};")
lines.append(f"export const rgpvSubjectCount = {subject_count};")
lines.append("")
lines.append("export function getRgpvBranch(slug: string): RgpvBranch | undefined {")
lines.append("  return rgpvBranches.find((b) => b.slug === slug);")
lines.append("}")
lines.append("")
lines.append("export function findRgpvSubject(")
lines.append("  branchSlug: string,")
lines.append("  semester: number,")
lines.append("  subjectSlug: string")
lines.append("): { branch: RgpvBranch; subject: RgpvSubject } | undefined {")
lines.append("  const branch = getRgpvBranch(branchSlug);")
lines.append("  if (!branch) return undefined;")
lines.append("  const sem = branch.semesters.find((s) => s.number === semester);")
lines.append("  if (!sem) return undefined;")
lines.append("  const subject = sem.subjects.find((s) => s.slug === subjectSlug);")
lines.append("  if (!subject) return undefined;")
lines.append("  return { branch, subject };")
lines.append("}")
lines.append("")

os.makedirs(os.path.dirname(OUT), exist_ok=True)
with open(OUT, "w") as f:
    f.write("\n".join(lines))

print(f"OK: {branch_count} branches, {subject_count} subjects -> {OUT}")
