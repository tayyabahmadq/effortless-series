import type { Metadata } from "next";
import Link from "next/link";
import { rgpvBranches } from "@/lib/rgpv/branches-data";
import { FULLY_AUTHORED } from "@/components/library/portal-data";

export const metadata: Metadata = {
  title: "All 40 Branches · RGPV Digital Library",
  description:
    "Every B.Tech branch of Rajiv Gandhi Proudyogiki Vishwavidyalaya under the 2022 curriculum — 40 branches, 1,578 subjects, semester by semester from the official scheme documents.",
};

export default function AllBranchesRoute() {
  const rom = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="sticky top-0 z-40 bg-background/85 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <span className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-serif font-bold text-lg shadow-lg shadow-red-900/40 bg-gradient-to-br from-red-500 to-red-800">
              E
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-serif text-sm font-semibold">
                Effortless
              </span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Academic Library
              </span>
            </span>
          </Link>
          <nav className="flex items-center gap-1.5 text-xs">
            <Link
              href="/branches"
              className="px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/25 transition-colors"
            >
              Study &amp; Branches
            </Link>
            <Link
              href="/"
              className="px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/25 transition-colors"
            >
              Overview
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            The complete catalogue
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold">
            All {rgpvBranches.length} branches
          </h1>
          <p className="text-muted-foreground text-sm max-w-3xl mt-2 leading-relaxed">
            Every B.Tech branch of the university under the 2022 curriculum —
            semester by semester, parsed from the official scheme documents.
            Semesters I–II are common to every branch; your branch begins at
            Semester III.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mt-8">
            {rgpvBranches.map((b) => {
              const subjects = b.semesters.reduce(
                (a, s) => a + s.subjects.length,
                0
              );
              const authored = FULLY_AUTHORED.has(b.slug);
              const sems = b.semesters.map((s) => s.number);
              return (
                <Link
                  key={b.slug}
                  href={`/rgpv/${b.slug}`}
                  className="group rounded-xl border border-border/60 bg-card/40 p-4 hover:-translate-y-0.5 hover:border-red-500/50 transition-all duration-200"
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h2 className="font-serif text-[15px] leading-snug group-hover:text-red-400 transition-colors">
                      {b.name}
                    </h2>
                    {authored && (
                      <span className="shrink-0 inline-flex items-center gap-1 rounded-full border border-emerald-500/35 px-2 py-0.5 text-[9px] uppercase tracking-wide text-emerald-400">
                        <span className="w-1 h-1 rounded-full bg-emerald-400" />
                        Full content
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-muted-foreground tabular-nums">
                    {subjects} subjects · Semesters {rom[sems[0] - 1]}–
                    {rom[sems[sems.length - 1] - 1]}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </main>

      <footer className="border-t border-border/50">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-6 text-[11px] text-muted-foreground">
          RGPV Digital Library · Bhopal — an independent student library built
          on the official 2022 scheme documents. Always confirm with rgpv.ac.in
          for anything binding.
        </div>
      </footer>
    </div>
  );
}
