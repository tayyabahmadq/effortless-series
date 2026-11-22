import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  rgpvBranches,
  findRgpvSubject,
} from "@/lib/rgpv/branches-data";
import {
  getSubjectContent,
  subjectNameOverrides,
} from "@/lib/rgpv/content-map";
import { SubjectReader } from "@/components/academics/subject-reader";
import { SubjectPlaceholder } from "@/components/library/subject-placeholder";

export function generateStaticParams() {
  const out: {
    branch: string;
    sem: string;
    subject: string;
  }[] = [];
  for (const b of rgpvBranches) {
    for (const sem of b.semesters) {
      for (const s of sem.subjects) {
        out.push({
          branch: b.slug,
          sem: String(sem.number),
          subject: s.slug,
        });
      }
    }
  }
  return out;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ branch: string; sem: string; subject: string }>;
}) {
  const { branch: branchSlug, sem, subject: subjectSlug } = await params;
  const found = findRgpvSubject(branchSlug, Number(sem), subjectSlug);
  if (!found) return { title: "Subject not found" };
  const displayName =
    subjectNameOverrides[`${branchSlug}/${Number(sem)}/${subjectSlug}`] ??
    found.subject.name;
  return {
    title: `${found.subject.code} · ${displayName} — RGPV Academic Library`,
    description: `${displayName} (${found.subject.code}) — ${found.branch.name}, Semester ${sem}, RGPV 2022 curriculum. Chapter cards, topic cards and exam-ready content.`,
  };
}

export default async function SubjectRoute({
  params,
}: {
  params: Promise<{ branch: string; sem: string; subject: string }>;
}) {
  const { branch: branchSlug, sem, subject: subjectSlug } = await params;
  const semNumber = Number(sem);
  const found = findRgpvSubject(branchSlug, semNumber, subjectSlug);
  if (!found) notFound();

  const { branch, subject } = found;
  const content = await getSubjectContent(branchSlug, semNumber, subjectSlug);
  const backHref = `/rgpv/${branchSlug}/${semNumber}`;
  const backLabel = `Sem ${semNumber} syllabus`;

  if (content) {
    return (
      <SubjectReader
        subject={content}
        backHref={backHref}
        backLabel={backLabel}
      />
    );
  }

  return (
    <SubjectPlaceholder
      branch={branch}
      semNumber={semNumber}
      subject={subject}
    />
  );
}
