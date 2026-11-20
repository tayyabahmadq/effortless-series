"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { useRef } from "react";
import { seriesInfo, author } from "@/lib/books-data";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden grain-overlay"
    >
      {/* Atmospheric background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
        aria-hidden
      >
        {/* Deep blue base glow (the "blue-black" depth) */}
        <div className="absolute top-[10%] left-[5%] w-[700px] h-[700px] rounded-full bg-blue-900/20 blur-[140px]" />
        <div className="absolute bottom-[5%] right-[10%] w-[600px] h-[600px] rounded-full bg-indigo-900/15 blur-[130px]" />
        {/* Red lining accents (the "red lining") */}
        <div className="absolute top-[15%] left-[10%] w-[500px] h-[500px] rounded-full bg-red-700/12 blur-[120px]" />
        <div className="absolute bottom-[15%] right-[5%] w-[400px] h-[400px] rounded-full bg-red-900/10 blur-[100px]" />

        {/* Grid lines — subtle */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-32 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Top eyebrow */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
            <div className="h-px w-10 bg-red-600/60" />
            <span className="text-[11px] uppercase tracking-[0.32em] text-red-400/90 font-medium">
              Book 00 of 13 · The Roadmap
            </span>
          </motion.div>

          {/* Big title */}
          <motion.h1
            variants={itemVariants}
            style={{ y: titleY }}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[0.95] font-medium text-foreground mb-8 tracking-tight"
          >
            <span className="block">If I were to start</span>
            <span className="block italic font-normal text-red-400/95">
              my career
            </span>
            <span className="block">in software engineering</span>
            <span className="block text-2xl sm:text-3xl lg:text-4xl mt-4 text-muted-foreground font-sans font-light tracking-normal">
              in 2026 — this is how I would have done it{" "}
              <span className="italic text-red-400/90 font-serif">effortlessly.</span>
            </span>
          </motion.h1>

          {/* Subtitle / author */}
          <motion.p
            variants={itemVariants}
            style={{ y: subtitleY }}
            className="text-lg lg:text-xl text-muted-foreground/90 leading-relaxed max-w-2xl mb-10"
          >
            Thirteen books. One hundred and eighty-two chapters. One goal:{" "}
            <span className="text-foreground font-medium">
              make you the engineer who ships things that do not fall over.
            </span>{" "}
            The twelve-month path from self-taught beginner to hired,
            production-ready engineer in the AI era.
          </motion.p>

          {/* Author tag */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-10"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-900 flex items-center justify-center text-white font-serif font-bold text-sm">
                {author.name.charAt(0)}
              </div>
              <div className="leading-tight">
                <div className="text-sm font-medium text-foreground">
                  {author.name}
                </div>
                <div className="text-xs text-muted-foreground">{author.role}</div>
              </div>
            </div>
            <div className="h-8 w-px bg-border/60" />
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Sparkles className="w-3.5 h-3.5 text-red-400/70" />
              <span>{author.edition}</span>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-8 sm:gap-12 mb-12"
          >
            {[
              { value: "14", label: "Books" },
              { value: "196", label: "Chapters" },
              { value: "196", label: "Diagrams" },
              { value: "588", label: "Quiz Questions" },
              { value: "7", label: "Discipline Layers" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-serif text-3xl sm:text-4xl text-red-400 font-medium leading-none">
                  {stat.value}
                </span>
                <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground/80 mt-2">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
            <a
              href="#overview"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-medium text-sm rounded-md transition-all shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:-translate-y-0.5"
            >
              Begin the journey
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#books"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-red-600/50 text-foreground hover:text-red-400 font-medium text-sm rounded-md transition-all hover:bg-red-600/5"
            >
              Browse the library
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-muted-foreground/60"
        aria-hidden
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-red-600/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
