import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { rgpvBranches, getRgpvBranch } from "@/lib/rgpv/branches-data";
import { BranchPage } from "@/components/library/branch-page";

export function generateStaticParams() {
  return rgpvBranches.map((b) => ({ branch: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ branch: string }>;
}) {
  const { branch: slug } = await params;
  const branch = getRgpvBranch(slug);
  if (!branch) return { title: "Branch not found" };
  return {
    title: `${branch.name} — RGPV Academic Library`,
    description: `${branch.name} B.Tech syllabus under the RGPV 2022 curriculum: ${branch.semesters.length} semesters, subjects parsed from the official scheme documents.`,
  };
}

export default async function BranchRoute({
  params,
}: {
  params: Promise<{ branch: string }>;
}) {
  const { branch: slug } = await params;
  const branch = getRgpvBranch(slug);
  if (!branch) notFound();
  return <BranchPage branch={branch} />;
}
