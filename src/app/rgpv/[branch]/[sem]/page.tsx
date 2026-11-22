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
  const title = `${branch.name} Semester ${semester.number} Notes & Syllabus — RGPV`;
  const description = `RGPV ${branch.name} Semester ${semester.number} notes and syllabus (2022 curriculum): ${semester.subjects.map((s) => s.code).join(", ")}. Unit-wise notes, exam questions and study plans for every subject.`;
  return {
    title,
    description,
    keywords: [
      `RGPV ${branch.name} semester ${semester.number} notes`,
      `RGPV ${branch.name} sem ${semester.number} syllabus`,
      `${branch.name} ${semester.number}th sem notes`,
      ...semester.subjects.map((s) => `${s.code} notes`),
      "RGPV notes",
      "RGPV syllabus",
    ],
    alternates: { canonical: `/rgpv/${slug}/${sem}` },
    openGraph: {
      title,
      description,
      url: `/rgpv/${slug}/${sem}`,
      siteName: "RGPV Digital Library",
      type: "website",
      locale: "en_IN",
    },
  };
}

function SemesterJsonLd({
  slug,
  sem,
  name,
  subjects,
}: {
  slug: string;
  sem: string;
  name: string;
  subjects: { code: string; name: string; slug: string }[];
}) {
  const base = "https://effortless-series.pages.dev";
  const url = `${base}/rgpv/${slug}/${sem}`;
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
          {
            "@type": "ListItem",
            position: 4,
            name: `Semester ${sem}`,
            item: url,
          },
        ],
      },
      {
        "@type": "ItemList",
        name: `${name} Semester ${sem} subjects`,
        itemListElement: subjects.map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: `${s.code} ${s.name}`,
          url: `${base}/rgpv/${slug}/${sem}/${s.slug}`,
        })),
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
  return (
    <>
      <SemesterJsonLd
        slug={slug}
        sem={sem}
        name={branch.name}
        subjects={semester.subjects}
      />
      <SemesterPage branch={branch} semester={semester} />
    </>
  );
}
