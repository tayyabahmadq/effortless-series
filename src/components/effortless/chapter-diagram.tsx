"use client";

import { motion } from "framer-motion";
import { ArrowRight, GitBranch, Network } from "lucide-react";
import { Fragment } from "react";
import type { DiagramSpec, DiagramStep } from "@/lib/types";

const ease = [0.22, 1, 0.36, 1] as const;

function node(i: number) {
  return {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, delay: 0.15 + i * 0.08, ease },
  };
}

function StepCard({
  step,
  accent,
  index,
  numbered,
}: {
  step: DiagramStep;
  accent: string;
  index: number;
  numbered?: boolean;
}) {
  return (
    <div className="flex-1 min-w-[112px] rounded-lg border bg-card/60 border-border/60 px-3 py-2.5">
      <div className="flex items-center gap-2">
        {numbered && (
          <span
            className="shrink-0 w-5 h-5 rounded-full text-[10px] font-mono font-semibold flex items-center justify-center"
            style={{ backgroundColor: `${accent}22`, color: accent }}
          >
            {index + 1}
          </span>
        )}
        <span className="text-sm font-medium text-foreground leading-snug">
          {step.label}
        </span>
      </div>
      {step.note && (
        <div className="text-[11px] text-muted-foreground mt-1 leading-snug">
          {step.note}
        </div>
      )}
    </div>
  );
}

function Arrow() {
  return (
    <ArrowRight
      className="shrink-0 w-3.5 h-3.5 text-muted-foreground/50 self-center"
      strokeWidth={1.5}
    />
  );
}

function FlowOrPipeline({
  spec,
  accent,
}: {
  spec: Extract<DiagramSpec, { kind: "flow" | "pipeline" }>;
  accent: string;
}) {
  const steps = spec.kind === "pipeline" ? spec.stages : spec.steps;
  return (
    <div className="flex flex-wrap items-stretch gap-y-2 gap-x-1.5">
      {steps.map((s, i) => (
        <Fragment key={i}>
          {i > 0 && <Arrow />}
          <motion.div {...node(i)} className="flex min-w-[130px] flex-1 basis-[130px]">
            <StepCard step={s} accent={accent} index={i} numbered={spec.kind === "pipeline"} />
          </motion.div>
        </Fragment>
      ))}
    </div>
  );
}

function Layers({
  spec,
  accent,
}: {
  spec: Extract<DiagramSpec, { kind: "layers" }>;
  accent: string;
}) {
  const n = spec.layers.length;
  return (
    <div className="space-y-1.5">
      {spec.layers.map((l, i) => (
        <motion.div
          key={i}
          {...node(i)}
          className="flex items-center gap-3 rounded-lg border px-4 py-2.5"
          style={{
            borderColor: `${accent}${i === n - 1 ? "55" : "28"}`,
            backgroundColor: `${accent}${i === n - 1 ? "14" : "08"}`,
            marginLeft: i * 10,
            marginRight: i * 10,
          }}
        >
          <span
            className="shrink-0 w-5 h-5 rounded-full text-[10px] font-mono font-semibold flex items-center justify-center"
            style={{ backgroundColor: `${accent}22`, color: accent }}
          >
            {i + 1}
          </span>
          <span className="text-sm font-medium text-foreground">{l.label}</span>
          {l.note && (
            <span className="text-[11px] text-muted-foreground ml-auto text-right leading-snug">
              {l.note}
            </span>
          )}
        </motion.div>
      ))}
    </div>
  );
}

function Pyramid({
  spec,
  accent,
}: {
  spec: Extract<DiagramSpec, { kind: "pyramid" }>;
  accent: string;
}) {
  const n = spec.tiers.length;
  return (
    <div className="flex flex-col items-center gap-1.5">
      {spec.tiers.map((t, i) => (
        <motion.div
          key={i}
          {...node(i)}
          className="rounded-lg border px-4 py-2.5 text-center"
          style={{
            width: `${55 + (45 * i) / Math.max(n - 1, 1)}%`,
            borderColor: `${accent}30`,
            backgroundColor: `${accent}${Math.max(16 - i * 3, 6).toString(16).padStart(2, "0")}`,
          }}
        >
          <div className="text-sm font-medium text-foreground leading-snug">{t.label}</div>
          {t.note && (
            <div className="text-[11px] text-muted-foreground mt-0.5 leading-snug">{t.note}</div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

function Cycle({
  spec,
  accent,
}: {
  spec: Extract<DiagramSpec, { kind: "cycle" }>;
  accent: string;
}) {
  const n = spec.steps.length;
  return (
    <div className="mx-auto w-full max-w-[420px]">
      <div className="relative aspect-square w-full">
        {/* dashed ring */}
        <div
          className="absolute inset-[17%] rounded-full border border-dashed"
          style={{ borderColor: `${accent}45` }}
        />
        {/* hub */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] aspect-square rounded-full flex flex-col items-center justify-center text-center px-2"
          style={{
            backgroundColor: `${accent}14`,
            border: `1px solid ${accent}45`,
          }}
        >
          <Network className="w-4 h-4 mb-1" style={{ color: accent }} />
          <span className="text-[11px] font-medium text-foreground leading-tight line-clamp-3">
            {spec.title}
          </span>
        </div>
        {/* steps around the ring */}
        {spec.steps.map((s, i) => {
          const angle = -90 + (360 / n) * i;
          const rad = (angle * Math.PI) / 180;
          const x = 50 + 40 * Math.cos(rad);
          const y = 50 + 40 * Math.sin(rad);
          return (
            <motion.div
              key={i}
              {...node(i)}
              className="absolute w-[30%] -translate-x-1/2 -translate-y-1/2 rounded-lg border bg-card/70 border-border/60 px-2 py-1.5 text-center"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <span
                className="mx-auto mb-1 flex w-5 h-5 rounded-full text-[10px] font-mono font-semibold items-center justify-center"
                style={{ backgroundColor: `${accent}22`, color: accent }}
              >
                {i + 1}
              </span>
              <div className="text-[11px] sm:text-xs font-medium text-foreground leading-tight">
                {s.label}
              </div>
              {s.note && (
                <div className="text-[9px] text-muted-foreground mt-0.5 leading-tight line-clamp-2">
                  {s.note}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function Fork({
  spec,
  accent,
}: {
  spec: Extract<DiagramSpec, { kind: "fork" }>;
  accent: string;
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <motion.div
        {...node(0)}
        className="sm:w-44 shrink-0 self-stretch rounded-lg px-4 py-3 flex sm:flex-col items-center sm:items-start justify-center gap-2"
        style={{ backgroundColor: `${accent}14`, border: `1px solid ${accent}50` }}
      >
        <GitBranch className="w-4 h-4 shrink-0" style={{ color: accent }} />
        <span className="text-sm font-medium text-foreground text-center sm:text-left leading-snug">
          {spec.start}
        </span>
      </motion.div>
      <div className="flex-1 flex flex-col gap-1.5">
        {spec.branches.map((b, i) => (
          <motion.div
            key={i}
            {...node(i + 1)}
            className="flex items-center gap-2 rounded-lg border px-3 py-2"
            style={{
              borderColor: b.good ? "rgba(52,211,153,0.3)" : "rgba(248,113,113,0.35)",
              backgroundColor: b.good ? "rgba(52,211,153,0.06)" : "rgba(248,113,113,0.07)",
            }}
          >
            <span className="text-xs sm:text-sm text-foreground/90 flex-1 leading-snug">
              {b.label}
            </span>
            <ArrowRight className="shrink-0 w-3 h-3 text-muted-foreground/50" />
            <span
              className={`shrink-0 max-w-[55%] text-xs sm:text-sm font-medium text-right leading-snug ${
                b.good ? "text-emerald-300" : "text-red-300"
              }`}
            >
              {b.outcome}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Matrix({
  spec,
  accent,
}: {
  spec: Extract<DiagramSpec, { kind: "matrix" }>;
  accent: string;
}) {
  const tint = ["12", "07", "07", "04"];
  return (
    <div className="flex gap-2">
      {/* y axis */}
      <div className="flex items-center">
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground [writing-mode:vertical-rl] rotate-180">
          {spec.axes.y}
        </span>
      </div>
      <div className="flex-1">
        <div className="grid grid-cols-2 gap-1.5">
          {spec.quadrants.map((q, i) => (
            <motion.div
              key={i}
              {...node(i)}
              className="rounded-lg border border-border/50 px-3 py-3 min-h-[84px]"
              style={{ backgroundColor: `${accent}${tint[i]}` }}
            >
              <div className="text-sm font-medium text-foreground leading-snug">{q.label}</div>
              {q.note && (
                <div className="text-[11px] text-muted-foreground mt-1 leading-snug">{q.note}</div>
              )}
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-2">
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
            {spec.axes.x}
          </span>
        </div>
      </div>
    </div>
  );
}

function Compare({
  spec,
}: {
  spec: Extract<DiagramSpec, { kind: "compare" }>;
}) {
  return (
    <div className="grid sm:grid-cols-2 gap-3">
      {(
        [
          { panel: spec.left, good: true },
          { panel: spec.right, good: false },
        ] as const
      ).map(({ panel, good }, p) => (
        <motion.div
          key={p}
          {...node(p)}
          className="rounded-lg border overflow-hidden"
          style={{
            borderColor: good ? "rgba(52,211,153,0.3)" : "rgba(248,113,113,0.35)",
          }}
        >
          <div
            className="px-4 py-2.5 text-sm font-medium border-b"
            style={{
              color: good ? "#6ee7b7" : "#fca5a5",
              backgroundColor: good ? "rgba(52,211,153,0.08)" : "rgba(248,113,113,0.09)",
              borderColor: "inherit",
            }}
          >
            {panel.heading}
          </div>
          <ul className="p-3 space-y-2">
            {panel.items.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-foreground/85 leading-snug">
                <span
                  className={`shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    good
                      ? "bg-emerald-400/15 text-emerald-300"
                      : "bg-red-400/15 text-red-300"
                  }`}
                >
                  {good ? "+" : "-"}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}

export function ChapterDiagram({
  diagram,
  accent,
}: {
  diagram: DiagramSpec;
  accent: string;
}) {
  return (
    <div className="rounded-xl border border-border/50 bg-muted/15 p-5 sm:p-6">
      <div className="flex items-center gap-2 mb-1">
        <Network className="w-4 h-4" style={{ color: accent }} />
        <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-muted-foreground">
          Diagram — {diagram.title}
        </h3>
      </div>
      <div className="mt-4">
        {diagram.kind === "flow" || diagram.kind === "pipeline" ? (
          <FlowOrPipeline spec={diagram} accent={accent} />
        ) : diagram.kind === "layers" ? (
          <Layers spec={diagram} accent={accent} />
        ) : diagram.kind === "pyramid" ? (
          <Pyramid spec={diagram} accent={accent} />
        ) : diagram.kind === "cycle" ? (
          <Cycle spec={diagram} accent={accent} />
        ) : diagram.kind === "fork" ? (
          <Fork spec={diagram} accent={accent} />
        ) : diagram.kind === "matrix" ? (
          <Matrix spec={diagram} accent={accent} />
        ) : (
          <Compare spec={diagram} />
        )}
      </div>
      <p className="text-xs text-muted-foreground/80 mt-4 italic leading-relaxed">
        {diagram.caption}
      </p>
    </div>
  );
}
