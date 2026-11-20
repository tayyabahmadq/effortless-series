"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export const chapterKey = (bookId: string, chapterNumber: number) =>
  `${bookId}/${chapterNumber}`;

interface ReaderState {
  // navigation
  selectedBookId: string | null;
  selectedChapterNumber: number | null;
  isBookModalOpen: boolean;
  isChapterReaderOpen: boolean;
  searchQuery: string;
  activeLayer: string | null;

  // persisted progress
  readMap: Record<string, boolean>;
  quizBest: Record<string, number>;

  openBook: (bookId: string) => void;
  closeBook: () => void;
  openChapter: (bookId: string, chapterNumber: number) => void;
  closeChapter: () => void;
  setSearchQuery: (q: string) => void;
  setActiveLayer: (layer: string | null) => void;
  toggleRead: (bookId: string, chapterNumber: number) => void;
  setQuizScore: (bookId: string, chapterNumber: number, score: number) => void;
}

export const useReaderStore = create<ReaderState>()(
  persist(
    (set) => ({
      selectedBookId: null,
      selectedChapterNumber: null,
      isBookModalOpen: false,
      isChapterReaderOpen: false,
      searchQuery: "",
      activeLayer: null,
      readMap: {},
      quizBest: {},

      openBook: (bookId) =>
        set({
          selectedBookId: bookId,
          isBookModalOpen: true,
          isChapterReaderOpen: false,
          selectedChapterNumber: null,
        }),

      closeBook: () =>
        set({
          isBookModalOpen: false,
          selectedBookId: null,
        }),

      openChapter: (bookId, chapterNumber) =>
        set({
          selectedBookId: bookId,
          selectedChapterNumber: chapterNumber,
          isChapterReaderOpen: true,
          isBookModalOpen: false,
        }),

      closeChapter: () =>
        set({
          isChapterReaderOpen: false,
          selectedChapterNumber: null,
        }),

      setSearchQuery: (q) => set({ searchQuery: q }),
      setActiveLayer: (layer) => set({ activeLayer: layer }),

      toggleRead: (bookId, chapterNumber) =>
        set((state) => {
          const key = chapterKey(bookId, chapterNumber);
          return {
            readMap: { ...state.readMap, [key]: !state.readMap[key] },
          };
        }),

      setQuizScore: (bookId, chapterNumber, score) =>
        set((state) => {
          const key = chapterKey(bookId, chapterNumber);
          const prev = state.quizBest[key] ?? 0;
          if (score <= prev) return {};
          return { quizBest: { ...state.quizBest, [key]: score } };
        }),
    }),
    {
      name: "effortless-progress-v1",
      partialize: (state) => ({ readMap: state.readMap, quizBest: state.quizBest }),
    }
  )
);
