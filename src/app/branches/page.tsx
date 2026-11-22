import type { Metadata } from "next";
import { SiteShell } from "@/components/library/site-shell";
import { BranchesPage } from "@/components/library/branches-page";

export const metadata: Metadata = {
  title: "Study & Branches · RGPV Digital Library",
  description:
    "Start with the common first year, then pick your branch — eight major B.Tech branches with semester-wise subject lists, plus all 40 RGPV branches.",
};

export default function BranchesRoute() {
  return (
    <SiteShell>
      <BranchesPage />
    </SiteShell>
  );
}
