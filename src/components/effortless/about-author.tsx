"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { author } from "@/lib/books-data";

export function AboutAuthor() {
  return (
    <section
      id="author"
      className="relative py-24 lg:py-32 border-t border-border/30 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-900/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-red-700/8 blur-[100px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          {/* Avatar */}
          <div className="relative inline-block mb-8">
            <div className="absolute -inset-2 bg-gradient-to-br from-red-600/30 to-blue-900/30 rounded-full blur-xl" />
            <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-red-500 to-red-900 flex items-center justify-center font-serif text-3xl font-bold text-white shadow-2xl shadow-red-600/30">
              {author.name.charAt(0)}
            </div>
          </div>

          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-red-600/60" />
            <span className="text-[11px] uppercase tracking-[0.32em] text-red-400/90 font-medium">
              About the author
            </span>
            <div className="h-px w-8 bg-red-600/60" />
          </div>

          {/* Name */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground mb-2 tracking-tight">
            {author.name}
          </h2>
          <p className="text-base text-muted-foreground/90 mb-8">
            {author.role} · {author.edition}
          </p>

          {/* Manifesto quote */}
          <div className="relative max-w-2xl mx-auto">
            <Quote className="absolute -top-3 -left-2 w-8 h-8 text-red-600/30" />
            <blockquote className="font-serif text-xl lg:text-2xl italic text-foreground/90 leading-relaxed px-6">
              I wrote this for the person I was at twenty-two: self-taught,
              hungry, dangerous with a tutorial, and completely unarmed against
              production. You can already make a web page talk to a database.
              You have deployed something once. And you know, in your gut, that
              the gap between{" "}
              <span className="text-red-400 not-italic">
                &lsquo;it works on my machine&rsquo;
              </span>{" "}
              and{" "}
              <span className="text-red-400 not-italic">
                &lsquo;it works for a million strangers&rsquo;
              </span>{" "}
              is enormous — and nobody has explained it to you end to end. This
              series is that explanation.
            </blockquote>
          </div>

          {/* The one rule */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 inline-block px-6 py-4 rounded-lg border border-red-600/30 bg-red-600/5"
          >
            <div className="text-xs uppercase tracking-[0.25em] text-red-400/90 font-medium mb-2">
              The one rule of the series
            </div>
            <p className="font-serif text-base lg:text-lg italic text-foreground/90 leading-relaxed">
              Never read a chapter without running something. Type the config.
              Break the query. Restore the backup into a scratch database and
              feel how long it takes. Ten minutes of hands-on failure teaches
              more than three hours of reading.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
