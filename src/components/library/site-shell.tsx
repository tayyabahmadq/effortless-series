"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  BookOpenText,
  Award,
  Briefcase,
  Compass,
  X,
  GraduationCap,
} from "lucide-react";
import { MAJOR_BRANCHES, FULLY_AUTHORED } from "./portal-data";

/**
 * Site-wide shell for the RGPV Digital Library landing pages:
 * fixed sidebar on desktop, top bar + bottom tab bar on mobile, and a
 * "Plan your study route" drawer. The Effortless Series is deliberately
 * not linked here — it moves to its own surface later.
 */

const NAV = [
  { href: "/", label: "Overview", short: "Home", icon: LayoutGrid },
  { href: "/branches", label: "Study & Branches", short: "Study", icon: BookOpenText },
  { href: "/certifications", label: "Certifications", short: "Certs", icon: Award },
  { href: "/jobs", label: "Jobs & Internships", short: "Jobs", icon: Briefcase },
];

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5 group shrink-0">
      <span className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-serif font-bold text-lg shadow-lg shadow-red-900/40 bg-gradient-to-br from-red-500 to-red-800 group-hover:scale-105 transition-transform">
        E
      </span>
      <span className="flex flex-col leading-none min-w-0">
        <span className="font-serif text-sm font-semibold text-foreground whitespace-nowrap">
          Effortless
        </span>
        <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground whitespace-nowrap">
          Academic Library
        </span>
      </span>
      {compact ? null : null}
    </Link>
  );
}

function RouteDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [slug, setSlug] = useState("");
  const all = [
    ...MAJOR_BRANCHES.map((b) => ({ slug: b.slug, name: b.name })),
    { slug: "other", name: "Other branch (all 40)" },
  ];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const branch = MAJOR_BRANCHES.find((b) => b.slug === slug);
  const isAuthored = slug ? FULLY_AUTHORED.has(slug) : false;

  return (
    <>
      <div
        className={`fixed inset-0 z-[70] bg-black/55 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Study route planner"
        className={`fixed top-0 right-0 bottom-0 z-[75] w-[min(400px,100vw)] overflow-y-auto bg-background/95 backdrop-blur-2xl border-l border-border/60 shadow-2xl flex flex-col gap-4 p-6 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-serif text-xl">Plan your study route</h3>
          <button
            onClick={onClose}
            aria-label="Close planner"
            className="w-9 h-9 rounded-lg border border-border/60 bg-muted/20 text-muted-foreground hover:text-foreground hover:border-red-500/60 transition-colors flex items-center justify-center"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <p className="text-sm text-muted-foreground -mt-2">
          Pick your branch — get the shortest path from today to exam-ready
          notes.
        </p>
        <select
          aria-label="Choose branch"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          className="w-full bg-muted/20 border border-border/60 rounded-lg px-3 py-2.5 text-sm text-foreground outline-none focus:border-red-500/60"
        >
          <option value="">Choose your branch…</option>
          {all.map((b) => (
            <option key={b.slug} value={b.slug}>
              {b.name}
            </option>
          ))}
        </select>

        <div className="flex flex-col">
          <Step n={1} title="Clear Semesters I–II">
            Common first-year scheme — identical for every branch.{" "}
            <Link
              href="/rgpv/first-year-common"
              className="text-red-400 border-b border-dashed border-red-400/40 hover:border-solid"
            >
              Open first-year syllabus →
            </Link>
          </Step>
          {slug === "other" ? (
            <Step n={2} title="Find your branch">
              All 40 branches with semester-wise subject lists.{" "}
              <Link
                href="/rgpv"
                className="text-red-400 border-b border-dashed border-red-400/40 hover:border-solid"
              >
                Browse all 40 branches →
              </Link>
            </Step>
          ) : branch ? (
            <>
              <Step n={2} title={`Open ${branch.name}`}>
                {branch.sems} semesters · {branch.subjects} subjects — official
                syllabus live.{" "}
                <Link
                  href={`/rgpv/${branch.slug}`}
                  className="text-red-400 border-b border-dashed border-red-400/40 hover:border-solid"
                >
                  Open branch syllabus →
                </Link>
              </Step>
              <Step n={3} title={isAuthored ? "Study the exam-ready content" : "Notes in authoring"}>
                {isAuthored
                  ? "Every named subject of this branch already carries full study content — chapters, topic cards, diagrams and a Guide-me exam plan."
                  : "Chapter-by-chapter content for this branch is being written. The syllabus above is complete and official."}{" "}
                <Link
                  href={`/rgpv/${branch.slug}`}
                  className="text-red-400 border-b border-dashed border-red-400/40 hover:border-solid"
                >
                  Track the branch →
                </Link>
              </Step>
            </>
          ) : (
            <Step n={2} title="Pick a branch above">
              Your semester path appears here once you choose.
            </Step>
          )}
        </div>

        <p className="mt-auto pt-4 text-[11px] text-muted-foreground leading-relaxed">
          Routes link to the live library. Full exam-ready content is already
          live for the first year and the CSE family — AI&amp;DS, AI&amp;ML,
          CSE, IT, Cyber Security and ECE. Everything else has the official
          syllabus live, with notes being written branch by branch.
        </p>
      </aside>
    </>
  );
}

function Step({
  n,
  title,
  children,
}: {
  n: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-3 py-3 border-b border-dashed border-border/50 last:border-0">
      <span className="shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-red-500 to-red-800 text-white flex items-center justify-center font-serif font-bold text-sm">
        {n}
      </span>
      <div className="min-w-0">
        <h5 className="text-sm font-semibold">{title}</h5>
        <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
          {children}
        </p>
      </div>
    </div>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [drawer, setDrawer] = useState(false);
  const active = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Desktop sidebar */}
      <aside
        aria-label="Pages"
        className="hidden lg:flex fixed top-0 left-0 bottom-0 w-[236px] z-50 flex-col gap-1 p-4 bg-background/80 backdrop-blur-2xl border-r border-border/50"
      >
        <div className="px-1.5 pb-4 pt-1">
          <Brand />
        </div>
        <nav className="flex flex-col gap-1">
          {NAV.map((item) => {
            const on = active(item.href);
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative flex items-center gap-2.5 px-3 py-2.5 text-sm font-medium rounded-lg border transition-colors ${
                  on
                    ? "text-foreground border-red-500/25 bg-gradient-to-r from-red-500/15 to-transparent"
                    : "text-muted-foreground border-transparent hover:text-foreground hover:bg-muted/25"
                }`}
              >
                {on && (
                  <span className="absolute -left-px top-1/4 bottom-1/4 w-0.5 rounded bg-gradient-to-b from-red-400 to-red-700 shadow-[0_0_10px_rgba(239,68,68,0.7)]" />
                )}
                <Icon
                  className={`w-4 h-4 shrink-0 ${on ? "text-red-400" : ""}`}
                />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto flex flex-col gap-3">
          <button
            onClick={() => setDrawer(true)}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg bg-gradient-to-br from-red-500 to-red-800 text-white shadow-lg shadow-red-900/30 hover:brightness-110 transition-all active:scale-[0.97]"
          >
            <Compass className="w-4 h-4" />
            Study route
          </button>
          <p className="text-[11px] text-muted-foreground px-1 leading-relaxed">
            40 branches · 1,578 subjects
            <br />
            RGPV Bhopal
          </p>
        </div>
      </aside>

      {/* Mobile top bar */}
      <header className="lg:hidden sticky top-0 z-40 flex items-center gap-2 px-4 h-14 bg-background/85 backdrop-blur-xl border-b border-border/50">
        <Brand compact />
        <button
          onClick={() => setDrawer(true)}
          aria-label="Open study route planner"
          className="ml-auto w-9 h-9 rounded-lg border border-border/60 bg-muted/20 text-muted-foreground hover:text-foreground hover:border-red-500/60 transition-colors flex items-center justify-center"
        >
          <Compass className="w-4 h-4" />
        </button>
      </header>

      {/* Mobile bottom tabs */}
      <nav
        aria-label="Pages"
        className="lg:hidden fixed left-0 right-0 bottom-0 z-50 flex bg-background/90 backdrop-blur-xl border-t border-border/60 px-1.5 pt-1.5 pb-[calc(6px+env(safe-area-inset-bottom))]"
      >
        {NAV.map((item) => {
          const on = active(item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative flex-1 flex flex-col items-center gap-0.5 py-1.5 text-[10px] font-semibold rounded-lg transition-colors ${
                on ? "text-red-400" : "text-muted-foreground"
              }`}
            >
              {on && (
                <span className="absolute -top-1.5 left-1/4 right-1/4 h-0.5 rounded bg-gradient-to-r from-red-400 to-red-700 shadow-[0_0_8px_rgba(239,68,68,0.7)]" />
              )}
              <Icon className="w-5 h-5" />
              {item.short}
            </Link>
          );
        })}
      </nav>

      <main className="flex-1 lg:ml-[236px] pb-24 lg:pb-0">{children}</main>

      <footer className="border-t border-border/50 lg:ml-[236px]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-6 flex flex-col gap-1.5 text-[11px] text-muted-foreground">
          <span>
            <b className="text-foreground font-serif">
              RGPV Digital Library · Bhopal
            </b>{" "}
            — an independent student library. Syllabus pages cover the official
            scheme; certification and career cards open official external
            portals.
          </span>
          <span>
            Always confirm the syllabus with rgpv.ac.in, and openings,
            eligibility and free-certificate terms at the source before
            applying.
          </span>
        </div>
      </footer>

      <RouteDrawer open={drawer} onClose={() => setDrawer(false)} />
      <span className="sr-only">
        <GraduationCap size={0} />
      </span>
    </div>
  );
}
