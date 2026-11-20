"use client";

import { motion } from "framer-motion";
import { layers, books } from "@/lib/books-data";
import { useReaderStore } from "@/store/reader-store";

export function LayersSection() {
  const openBook = useReaderStore((s) => s.openBook);

  return (
    <section id="layers" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Atmospheric bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blue-900/8 blur-[140px]" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-red-700/5 blur-[110px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-px w-8 bg-red-600/60" />
            <span className="text-[11px] uppercase tracking-[0.32em] text-red-400/90 font-medium">
              The seven layers
            </span>
            <div className="h-px w-8 bg-red-600/60" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground leading-tight tracking-tight"
          >
            One request,{" "}
            <span className="italic text-red-400/95">seven layers</span> of
            discipline.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-muted-foreground/85 leading-relaxed"
          >
            The thirteen books are grouped by the question each layer answers.
            Read them in order and you become the engineer who can trace one
            request end to end — and know how every hop fails.
          </motion.p>
        </div>

        {/* Layer stack */}
        <div className="space-y-3 max-w-5xl mx-auto">
          {layers.map((layer, i) => {
            const layerBooks = books.filter((b) =>
              layer.books.includes(b.emoji)
            );
            return (
              <motion.div
                key={layer.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative rounded-xl border border-border/50 bg-card/30 hover:bg-card/50 backdrop-blur-sm overflow-hidden transition-all"
              >
                {/* Accent line on left */}
                <div
                  className="absolute top-0 left-0 bottom-0 w-1"
                  style={{ backgroundColor: layer.color }}
                />

                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at left, ${layer.color}10, transparent 50%)`,
                  }}
                />

                <div className="relative p-5 sm:p-6 flex flex-col lg:flex-row lg:items-center gap-5">
                  {/* Layer info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className="font-mono text-xs font-medium"
                        style={{ color: layer.color }}
                      >
                        L{i + 1}
                      </span>
                      <h3 className="font-serif text-base sm:text-lg font-medium text-foreground">
                        {layer.name}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground/80 leading-relaxed italic">
                      {layer.question}
                    </p>
                  </div>

                  {/* Book badges */}
                  <div className="flex flex-wrap gap-2 lg:justify-end">
                    {layerBooks.map((b) => (
                      <button
                        key={b.id}
                        onClick={() => openBook(b.id)}
                        className="group/book flex items-center gap-2 px-3 py-1.5 rounded-md border border-border/50 hover:border-red-600/40 bg-background/40 hover:bg-red-600/5 transition-all"
                      >
                        <span
                          className="font-mono text-xs font-semibold"
                          style={{ color: b.accentColor }}
                        >
                          {b.emoji}
                        </span>
                        <span className="text-xs font-medium text-foreground/90 group-hover/book:text-red-400 transition-colors">
                          {b.title.replace("Master ", "")}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
