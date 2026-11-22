"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CERTIFICATIONS, CERT_CATEGORIES, type Certification } from "./portal-data";

const ease = [0.22, 1, 0.36, 1] as const;

function CertGlyph({ c }: { c: Certification }) {
  if (c.glyph === "ms")
    return (
      <svg viewBox="0 0 24 24" aria-hidden className="w-5 h-5">
        <rect x="3" y="3" width="8.5" height="8.5" fill="#f25022" />
        <rect x="12.5" y="3" width="8.5" height="8.5" fill="#7fba00" />
        <rect x="3" y="12.5" width="8.5" height="8.5" fill="#00a4ef" />
        <rect x="12.5" y="12.5" width="8.5" height="8.5" fill="#ffb900" />
      </svg>
    );
  if (c.glyph === "cisco")
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden
        className="w-5 h-5"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      >
        <path d="M4 10v4M8 7v10M12 4v16M16 7v10M20 10v4" />
      </svg>
    );
  if (c.glyph === "mongo")
    return (
      <svg viewBox="0 0 24 24" aria-hidden className="w-5 h-5">
        <path
          d="M12 2c3 4 5 6.5 5 10a5 5 0 0 1-4 4.9V21h-2v-4.1A5 5 0 0 1 7 12c0-3.5 2-6 5-10z"
          fill="#00ed64"
        />
      </svg>
    );
  return <span style={{ fontSize: c.fs || "12px" }}>{c.glyph}</span>;
}

export function CertificationsPage() {
  const [cat, setCat] = useState<string>("all");
  const list = CERTIFICATIONS.filter((c) => cat === "all" || c.cat === cat);
  const catLabel = (k: string) =>
    CERT_CATEGORIES.find((c) => c.k === k)?.label ?? k;

  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
      <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-3">
        <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
        Learn free · get certified
      </div>
      <h2 className="font-serif text-3xl font-bold">
        16 free online certifications
      </h2>
      <p className="text-muted-foreground text-sm max-w-3xl mt-2 mb-6 leading-relaxed">
        Recognised certificates and badges you can earn online at zero cost —
        from Harvard, Google, IBM, Cisco, ISRO and more. Every card opens the
        official site.
      </p>

      <div className="flex flex-wrap gap-2 mb-2">
        {CERT_CATEGORIES.map((c) => (
          <button
            key={c.k}
            onClick={() => setCat(c.k)}
            aria-pressed={cat === c.k}
            className={`px-3.5 py-2 text-[13px] font-medium rounded-full border transition-colors active:scale-[0.96] ${
              cat === c.k
                ? "text-white bg-gradient-to-br from-red-500 to-red-800 border-transparent shadow-md shadow-red-900/25"
                : "text-muted-foreground bg-muted/15 border-border/60 hover:text-foreground hover:border-border"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>
      <p className="text-xs text-muted-foreground tabular-nums mb-5">
        {list.length} / {CERTIFICATIONS.length} shown
      </p>

      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-3.5">
        {list.map((c, i) => (
          <motion.div
            key={c.n}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease, delay: (i % 4) * 0.05 }}
          >
            <a
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col h-full rounded-2xl border border-border/60 bg-card/40 backdrop-blur p-5 hover:-translate-y-1 hover:border-red-500/50 hover:shadow-xl hover:shadow-red-900/10 transition-all duration-200"
            >
              <span className="flex items-center gap-2.5 mb-3">
                <span
                  className="shrink-0 w-10 h-10 rounded-xl border border-border/70 flex items-center justify-center font-bold"
                  style={{ background: c.bg, color: c.fg }}
                >
                  <CertGlyph c={c} />
                </span>
                <span className="min-w-0">
                  <h3 className="text-sm font-semibold leading-snug group-hover:text-red-400 transition-colors">
                    {c.n}
                  </h3>
                  <span className="block text-[10.5px] text-muted-foreground mt-px">
                    {c.p}
                  </span>
                </span>
              </span>
              <p className="text-[11.5px] text-muted-foreground leading-relaxed mb-3">
                {c.d}
              </p>
              <span className="mt-auto flex items-center gap-1.5 flex-wrap">
                <span className="inline-flex items-center rounded-full border border-border/60 bg-muted/15 px-2 py-0.5 text-[10px] uppercase tracking-[0.08em] text-muted-foreground">
                  {catLabel(c.cat)}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/35 px-2 py-0.5 text-[10px] uppercase tracking-[0.08em] text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Free
                </span>
                <span className="ml-auto text-muted-foreground group-hover:text-red-400 group-hover:translate-x-0.5 transition-all">
                  →
                </span>
              </span>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
