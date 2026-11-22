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
  const subjects = branch.semesters.reduce((a, s) => a + s.subjects.length, 0);
  const title = `${branch.name} Notes & Syllabus — RGPV B.Tech (All Semesters)`;
  const description = `Free ${branch.name} notes and syllabus for RGPV B.Tech (2022 curriculum): ${branch.semesters.length} semesters, ${subjects} subjects with unit-wise notes, diagrams, exam questions and study plans. ${branch.name} subject codes, previous year questions and Guide-me plans.`;
  return {
    title,
    description,
    keywords: [
      `RGPV ${branch.name} notes`,
      `RGPV ${branch.name} syllabus`,
      `${branch.name} notes pdf`,
      `${branch.name} previous year questions`,
      `RGPV ${branch.name} question papers`,
      "RGPV notes",
      "RGPV syllabus",
      "RGPV B.Tech notes",
      "RGPV 2022 syllabus",
    ],
    alternates: { canonical: `/rgpv/${slug}` },
    openGraph: {
      title,
      description,
      url: `/rgpv/${slug}`,
      siteName: "RGPV Digital Library",
      type: "website",
      locale: "en_IN",
    },
  };
}

function BranchJsonLd({
  slug,
  name,
  subjectCount,
}: {
  slug: string;
  name: string;
  subjectCount: number;
}) {
  const base = "https://effortless-series.pages.dev";
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: base },
          {
            "@type": "ListItem",
            position: 2,
            name: "Study & Branches",
            item: `${base}/branches`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name,
            item: `${base}/rgpv/${slug}`,
          },
        ],
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default async function BranchRoute({
  params,
}: {
  params: Promise<{ branch: string }>;
}) {
  const { branch: slug } = await params;
  const branch = getRgpvBranch(slug);
  if (!branch) notFound();
  const subjectCount = branch.semesters.reduce(
    (a, s) => a + s.subjects.length,
    0
  );
  return (
    <>
      <BranchJsonLd
        slug={branch.slug}
        name={branch.name}
        subjectCount={subjectCount}
      />
      <BranchPage branch={branch} />
    </>
  );
}
