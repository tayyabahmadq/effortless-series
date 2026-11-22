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

const ROMAN = [
  "",
  "I",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
  "VIII",
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ branch: string; sem: string; subject: string }>;
}) {
  const { branch: branchSlug, sem, subject: subjectSlug } = await params;
  const semNumber = Number(sem);
  const found = findRgpvSubject(branchSlug, semNumber, subjectSlug);
  if (!found) return { title: "Subject not found" };
  const key = `${branchSlug}/${semNumber}/${subjectSlug}`;
  const displayName =
    subjectNameOverrides[key] ?? found.subject.name;
  const { code } = found.subject;
  const branchName = found.branch.name;
  const path = `/rgpv/${branchSlug}/${semNumber}/${subjectSlug}`;
  const title = `${code} ${displayName} Notes — RGPV ${branchName} | ${ROMAN[semNumber] ?? sem} Sem`;
  const description = `Free ${code} ${displayName} notes for RGPV ${branchName} (Semester ${semNumber}, 2022 curriculum): unit-wise notes, diagrams, comparison tables, exam questions with outlines and a Guide-me study plan mapped to the official RGPV syllabus.`;
  return {
    title,
    description,
    keywords: [
      code,
      `${code} notes`,
      `${code} syllabus`,
      `${code} previous year questions`,
      displayName,
      `${displayName} notes`,
      `${displayName} syllabus`,
      "RGPV notes",
      `RGPV ${code} notes`,
      branchName,
      `RGPV ${branchName} notes`,
      `${branchName} ${semNumber}th sem notes`,
      "RGPV 2022 syllabus",
      "RGPV B.Tech notes",
    ],
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: "RGPV Digital Library",
      type: "website",
      locale: "en_IN",
    },
    twitter: { card: "summary_large_image", title, description },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-snippet": -1 },
    },
  };
}

function SubjectJsonLd({
  code,
  name,
  branchName,
  semNumber,
  subjectSlug,
  branchSlug,
}: {
  code: string;
  name: string;
  branchName: string;
  semNumber: number;
  subjectSlug: string;
  branchSlug: string;
}) {
  const base = "https://effortless-series.pages.dev";
  const url = `${base}/rgpv/${branchSlug}/${semNumber}/${subjectSlug}`;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Course", "LearningResource"],
        name: `${code} ${name}`,
        description: `${name} (${code}) — unit-wise RGPV notes, syllabus, exam questions and study plan for ${branchName}, Semester ${semNumber}, RGPV 2022 B.Tech curriculum.`,
        courseCode: code,
        educationalLevel: "B.Tech / Undergraduate",
        inLanguage: "en",
        provider: {
          "@type": "CollegeOrUniversity",
          name: "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal",
        },
        isAccessibleForFree: true,
        url,
      },
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
            name: branchName,
            item: `${base}/rgpv/${branchSlug}`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: `Semester ${semNumber}`,
            item: `${base}/rgpv/${branchSlug}/${semNumber}`,
          },
          {
            "@type": "ListItem",
            position: 5,
            name: `${code} ${name}`,
            item: url,
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
  const jsonLd = (
    <SubjectJsonLd
      code={subject.code}
      name={subjectNameOverrides[`${branchSlug}/${semNumber}/${subjectSlug}`] ?? subject.name}
      branchName={branch.name}
      semNumber={semNumber}
      subjectSlug={subject.slug}
      branchSlug={branchSlug}
    />
  );

  if (content) {
    return (
      <>
        {jsonLd}
        <SubjectReader
          subject={content}
          backHref={backHref}
          backLabel={backLabel}
        />
      </>
    );
  }

  return (
    <>
      {jsonLd}
      <SubjectPlaceholder
        branch={branch}
        semNumber={semNumber}
        subject={subject}
      />
    </>
  );
}
