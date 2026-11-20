"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { author, seriesInfo } from "@/lib/books-data";

export function Footer() {
  return (
    <footer className="relative border-t border-border/40 bg-card/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <div className="grid lg:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-md bg-gradient-to-br from-red-500 to-red-800 flex items-center justify-center text-white font-serif font-bold text-sm">
                E
              </div>
              <div className="leading-none">
                <div className="font-serif text-base font-semibold text-foreground">
                  The Effortless Series
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">
                  2026 Edition
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground/80 leading-relaxed max-w-xs">
              {seriesInfo.subtitle}
            </p>
          </div>

          {/* Books quick nav */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-2">
              {[
                "The Roadmap",
                "Databases",
                "Encryption",
                "Authentication",
                "Secrets",
                "Security",
                "Networking",
                "System Design",
                "Scaling",
                "Load Testing",
                "Testing",
                "Deployment",
                "Disaster Recovery",
                "Monitoring",
              ].map((title) => (
                <a
                  key={title}
                  href="#books"
                  className="text-sm text-muted-foreground/80 hover:text-red-400 transition-colors py-1"
                >
                  {title}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/70 text-center sm:text-left">
            © 2026 {author.name}. {author.role}. Written for the engineer you
            are about to become.
          </p>
          <motion.a
            href="#top"
            whileHover={{ y: -2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 text-xs text-muted-foreground hover:text-red-400 border border-border/40 hover:border-red-600/30 rounded-md transition-all"
          >
            Back to top
            <ArrowUp className="w-3 h-3" />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
