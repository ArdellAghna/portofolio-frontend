"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const photos = [
  "/jepretan/jepretan-1.png",
  "/jepretan/jepretan-2.png",
  "/jepretan/jepretan-3.jpeg",
  "/jepretan/jepretan-4.jpeg",
  "/jepretan/jepretan-5.jpeg",
  "/jepretan/jepretan-6.jpeg",
  "/jepretan/jepretan-7.jpeg",
  "/jepretan/jepretan-8.jpeg",
  "/jepretan/jepretan-9.jpeg",
  "/jepretan/jepretan-10.jpeg",
  "/jepretan/jepretan-11.jpeg",
  "/jepretan/jepretan-12.jpeg",
  "/jepretan/jepretan-13.jpeg",
  "/jepretan/jepretan-14.jpeg",
  "/jepretan/jepretan-15.jpeg",
  "/jepretan/jepretan-16.jpeg",
  "/jepretan/jepretan-17.jpeg",
  "/jepretan/jepretan-18.jpeg",
];

export default function PhotographyPage() {
  const [selected, setSelected] = useState<number | null>(null);

  const navigate = (dir: "prev" | "next") => {
    if (selected === null) return;
    if (dir === "prev") setSelected((selected - 1 + photos.length) % photos.length);
    else setSelected((selected + 1) % photos.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Portfolio
          </Link>
          <div className="text-sm text-gray-400">{photos.length} photos</div>
        </div>
      </div>

      {/* hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-600 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Visual Documentation
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Photography</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Moments captured during breaks and daily life — a personal visual journal from my time as a student and documentation enthusiast.
          </p>
        </motion.div>
      </div>

      {/* masonry grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
          {photos.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              onClick={() => setSelected(i)}
            >
              <img
                src={src}
                alt={`Photo ${i + 1}`}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            {/* close */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* counter */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium">
              {selected + 1} / {photos.length}
            </div>

            {/* prev */}
            <button
              onClick={(e) => { e.stopPropagation(); navigate("prev"); }}
              className="absolute left-4 text-white/70 hover:text-white transition-colors bg-black/30 hover:bg-black/50 rounded-full p-2"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* image */}
            <motion.img
              key={selected}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              src={photos[selected]}
              alt={`Photo ${selected + 1}`}
              className="max-w-4xl max-h-[85vh] w-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* next */}
            <button
              onClick={(e) => { e.stopPropagation(); navigate("next"); }}
              className="absolute right-4 text-white/70 hover:text-white transition-colors bg-black/30 hover:bg-black/50 rounded-full p-2"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
