"use client";

import { Navigation } from "@/components/effortless/navigation";
import { Hero } from "@/components/effortless/hero";
import { Overview } from "@/components/effortless/overview";
import { BooksGrid } from "@/components/effortless/books-grid";
import { BookModal } from "@/components/effortless/book-modal";
import { ChapterReader } from "@/components/effortless/chapter-reader";
import { LayersSection } from "@/components/effortless/layers";
import { StudyPlan } from "@/components/effortless/study-plan";
import { AboutAuthor } from "@/components/effortless/about-author";
import { Footer } from "@/components/effortless/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <Overview />
        <BooksGrid />
        <LayersSection />
        <StudyPlan />
        <AboutAuthor />
      </main>
      <Footer />

      {/* Modals / overlays */}
      <BookModal />
      <ChapterReader />
    </div>
  );
}
