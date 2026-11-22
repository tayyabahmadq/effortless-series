import type { Metadata } from "next";
import { SiteShell } from "@/components/library/site-shell";
import { BranchesPage } from "@/components/library/branches-page";

export const metadata: Metadata = {
  title: "RGPV Branch-wise Notes & Syllabus — Study & Branches",
  description:
    "RGPV notes branch-wise: start with the common first year, then pick your branch — CSE, ECE, AI&ML, AI&DS, Mechanical, IT, Civil, Cyber Security — with semester-wise subject lists and unit-wise notes.",
  keywords: [
    "RGPV notes",
    "RGPV branch wise notes",
    "RGPV CSE notes",
    "RGPV mechanical notes",
    "RGPV civil notes",
    "RGPV syllabus branch wise",
    "RGPV first year notes",
  ],
  alternates: { canonical: "/branches" },
};

export default function BranchesRoute() {
  return (
    <SiteShell>
      <BranchesPage />
    </SiteShell>
  );
}
