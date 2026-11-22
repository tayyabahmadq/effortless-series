"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { JOB_PORTALS, SECTORS, type JobPortal } from "./portal-data";

const ease = [0.22, 1, 0.36, 1] as const;

const SECTOR_ORDER = ["all", "it", "core", "govt", "research", "multi"] as const;

function TypePills({ t }: { t: JobPortal["t"] }) {
  return (
    <>
      {t.map((x) =>
        x === "intern" ? (
          <span
            key={x}
            className="inline-flex items-center gap-1 rounded-full border border-blue-500/35 px-2 py-0.5 text-[10px] uppercase tracking-[0.08em] text-blue-400"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            Internship
          </span>
        ) : (
          <span
            key={x}
            className="inline-flex items-center gap-1 rounded-full border border-amber-500/35 px-2 py-0.5 text-[10px] uppercase tracking-[0.08em] text-amber-400"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            Jobs
          </span>
        )
      )}
    </>
  );
}

export function JobsPage() {
  const [type, setType] = useState<"all" | "intern" | "job">("all");
  const [sector, setSector] = useState<string>("all");

  const list = JOB_PORTALS.filter((j) => {
    const okT = type === "all" || j.t.includes(type);
    const okS = sector === "all" || j.s === sector;
    return okT && okS;
  });

  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
      <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-3">
        <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
        Careers
      </div>
      <h2 className="font-serif text-3xl font-bold">
        Jobs &amp; internships · live right now
      </h2>
      <p className="text-muted-foreground text-sm max-w-3xl mt-2 mb-6 leading-relaxed">
        Official portals and recurring programs across every sector — software,
        core, PSU, government, defence, research and space. Openings update
        daily at the source; each card takes you straight there.
      </p>

      <div className="flex items-center gap-2 flex-wrap mb-2">
        <span className="inline-flex rounded-full border border-border/60 overflow-hidden bg-muted/15">
          {(
            [
              ["all", "All"],
              ["intern", "Internships"],
              ["job", "Jobs"],
            ] as const
          ).map(([k, label]) => (
            <button
              key={k}
              onClick={() => setType(k)}
              aria-pressed={type === k}
              className={`px-4 py-2 text-[13px] font-medium transition-colors ${
                type === k ? "text-white bg-gradient-to-br from-red-500 to-red-800" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {label}
            </button>
          ))}
        </span>
        {SECTOR_ORDER.map((k) => (
          <button
            key={k}
            onClick={() => setSector(k)}
            aria-pressed={sector === k}
            className={`px-3.5 py-2 text-[13px] font-medium rounded-full border transition-colors active:scale-[0.96] ${
              sector === k
                ? "text-white bg-gradient-to-br from-red-500 to-red-800 border-transparent shadow-md shadow-red-900/25"
                : "text-muted-foreground bg-muted/15 border-border/60 hover:text-foreground hover:border-border"
            }`}
          >
            {k === "all" ? "All sectors" : SECTORS[k].label}
          </button>
        ))}
      </div>
      <p className="text-xs text-muted-foreground tabular-nums mb-5">
        {list.length} / {JOB_PORTALS.length} shown
      </p>

      {list.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border/70 p-8 text-sm text-muted-foreground text-center">
          No live portals match this combination.
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-3.5">
          {list.map((j, i) => {
            const sc = SECTORS[j.s];
            return (
              <motion.div
                key={j.n}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease, delay: (i % 4) * 0.05 }}
              >
                <a
                  href={j.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col h-full rounded-2xl border border-border/60 bg-card/40 backdrop-blur p-5 hover:-translate-y-1 hover:border-red-500/50 hover:shadow-xl hover:shadow-red-900/10 transition-all duration-200"
                >
                  <span className="flex items-center gap-2.5 mb-3">
                    <span
                      className="shrink-0 w-10 h-10 rounded-xl border flex items-center justify-center font-bold text-sm"
                      style={{
                        background: `${sc.c}22`,
                        color: sc.c,
                        borderColor: `${sc.c}55`,
                      }}
                    >
                      {j.i}
                    </span>
                    <span className="min-w-0">
                      <h3 className="text-sm font-semibold leading-snug group-hover:text-red-400 transition-colors">
                        {j.n}
                      </h3>
                      <span className="block text-[10.5px] text-muted-foreground mt-px">
                        {j.o}
                      </span>
                    </span>
                  </span>
                  <p className="text-[11.5px] text-muted-foreground leading-relaxed mb-3">
                    {j.d}
                  </p>
                  <span className="mt-auto flex items-center gap-1.5 flex-wrap">
                    <span className="inline-flex items-center rounded-full border border-border/60 bg-muted/15 px-2 py-0.5 text-[10px] uppercase tracking-[0.08em] text-muted-foreground">
                      {sc.label}
                    </span>
                    <TypePills t={j.t} />
                    <span className="ml-auto text-muted-foreground group-hover:text-red-400 group-hover:translate-x-0.5 transition-all">
                      →
                    </span>
                  </span>
                </a>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
