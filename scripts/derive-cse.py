"""Derive CSE subject files from their AI&DS twins by rebranding metadata."""

import re
from pathlib import Path

SRC = Path("/home/z/my-project/src/lib/academics")
CSE = "RGPV · Computer Science & Engineering"

# (source file, src export, dst export, dst id, dst code, dst title, dst semester, accent)
MAP = [
    ("subject-ad-303.ts", "ad303", "cs303", "cs-303", "CS-303", "Data Structure", "III Semester", "#10b981"),
    ("subject-ad-305.ts", "ad305", "cs305", "cs-305", "CS-305", "Object Oriented Programming & Methodology", "III Semester", "#f472b6"),
    ("subject-ad-405.ts", "ad405", "cs405", "cs-405", "CS-405", "Operating Systems", "IV Semester", "#8b5cf6"),
    ("subject-ad-501.ts", "ad501", "cs501", "cs-501", "CS-501", "Theory of Computation", "V Semester", "#ef4444"),
    ("subject-ad-402.ts", "ad402", "cs502", "cs-502", "CS-502", "Database Management Systems", "V Semester", "#3b82f6"),
    ("subject-ad-502.ts", "ad502", "cs601", "cs-601", "CS-601", "Machine Learning", "VI Semester", "#f97316"),
    ("subject-ad-602.ts", "ad602", "cs602", "cs-602", "CS-602", "Computer Networks", "VI Semester", "#06b6d4"),
    ("subject-ad-604-a.ts", "ad604a", "cs801", "cs-801", "CS-801", "Internet of Things", "VIII Semester", "#22c55e"),
]

for src_file, src_exp, dst_exp, dst_id, dst_code, dst_title, dst_sem, accent in MAP:
    text = (SRC / src_file).read_text()

    # Rename export
    text = text.replace(f"export const {src_exp}:", f"export const {dst_exp}:")

    # Rebrand codes (uppercase form covers taglines/descriptions that cite the code)
    src_code = src_file.replace("subject-", "").replace(".ts", "").upper().replace("-A", "(A)").replace("-B", "(B)")
    text = text.replace(src_code, dst_code)
    text = text.replace(dst_code[0:2] + "-" + dst_code[3:], dst_code)  # safety no-op

    # Rebrand id (lowercase with hyphens)
    src_id = src_file.replace("subject-", "").replace(".ts", "")
    text = text.replace(f'id: "{src_id}"', f'id: "{dst_id}"')

    # Program line
    text = text.replace("RGPV · Artificial Intelligence & Data Science", CSE)

    # Semester (source may differ)
    text = re.sub(r'semester: "[^"]*"', f'semester: "{dst_sem}"', text, count=1)

    # Title (first `title:` at subject level)
    text = re.sub(r'title: "[^"]*"', f'title: "{dst_title}"', text, count=1)

    # Accent
    text = re.sub(r'accentColor: "#[0-9a-fA-F]{6}"', f'accentColor: "{accent}"', text, count=1)

    dst_path = SRC / f"subject-{dst_id}.ts"
    dst_path.write_text(text)
    # sanity: no leftover AI&DS program string, no leftover old id
    assert CSE in text, src_file
    assert f'id: "{src_id}"' not in text, src_file
    print(f"{src_file} -> {dst_path.name} ({dst_exp}, {dst_code}, {dst_title})")

print("DONE")
