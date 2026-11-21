import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { rgpvBranches, getRgpvBranch } from "@/lib/rgpv/branches-data";
import { SemesterPage } from "@/components/library/semester-page";

export function generateStaticParams() {
  const out: { branch: string; sem: string }[] = [];
  for (const b of rgpvBranches) {
    for (const sem of b.semesters) {
      out.push({ branch: b.slug, sem: String(sem.number) });
    }
  }
  return out;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ branch: string; sem: string }>;
}) {
  const { branch: slug, sem } = await params;
  const branch = getRgpvBranch(slug);
  if (!branch) return { title: "Branch not found" };
  const semester = branch.semesters.find((s) => s.number === Number(sem));
  if (!semester) return { title: "Semester not found" };
  return {
    title: `${branch.name} · Semester ${semester.number} syllabus — RGPV Academic Library`,
    description: `Semester ${semester.number} subject list for ${branch.name} under the RGPV 2022 curriculum — ${semester.subjects.length} subjects from the official scheme.`,
  };
}

export default async function SemesterRoute({
  params,
}: {
  params: Promise<{ branch: string; sem: string }>;
}) {
  const { branch: slug, sem } = await params;
  const branch = getRgpvBranch(slug);
  if (!branch) notFound();
  const semester = branch.semesters.find((s) => s.number === Number(sem));
  if (!semester) notFound();
  return <SemesterPage branch={branch} semester={semester} />;
}
