"use client";

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Lightbox } from './Lightbox';

interface ComicPage {
  id: string;
  title: string;
  image: string;
  description?: string;
}

interface ComicShowcaseProps {
  pages: ComicPage[];
}

export default function ComicShowcase({ pages }: ComicShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const nextPage = () => {
    setCurrentIndex((prev) => (prev + 1) % pages.length);
  };

  const prevPage = () => {
    setCurrentIndex((prev) => (prev - 1 + pages.length) % pages.length);
  };

  const currentPage = pages[currentIndex];

  return (
    <>
      <div className="relative w-full h-full bg-gradient-to-br from-amber-50 to-orange-100 dark:from-slate-800 dark:to-slate-900 rounded-lg overflow-hidden">
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-r from-purple-600 to-purple-800 text-white p-3">
          <h3 className="text-lg font-bold text-center">Comic Showcase</h3>
        </div>

        {/* Main Content */}
        <div className="pt-16 p-6 h-full flex flex-col">
          {pages.length === 0 ? (
            /* Empty State */
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <div className="w-full max-w-md aspect-[3/4] bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 rounded-lg shadow-lg flex items-center justify-center">
                <div className="text-gray-500 dark:text-gray-400">
                  <div className="text-6xl mb-4">📖</div>
                  <h4 className="text-lg font-semibold mb-2">Coming Soon!</h4>
                  <p className="text-sm">Comic pages will appear here once published</p>
                </div>
              </div>
            </div>
          ) : (
            /* Comic Page Display */
            <>
              <div className="flex-1 flex flex-col items-center justify-center">
                <div 
                  className="relative w-full max-w-md aspect-[3/4] bg-white dark:bg-slate-100 rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform hover:scale-105"
                  onClick={() => setLightboxOpen(true)}
                >
                  <Image
                    src={currentPage.image}
                    alt={currentPage.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  {/* Page overlay info */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h4 className="text-white font-semibold text-sm">{currentPage.title}</h4>
                    {currentPage.description && (
                      <p className="text-white/90 text-xs mt-1">{currentPage.description}</p>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-4">
            <button
              onClick={prevPage}
              className="flex items-center gap-2 px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors text-sm font-medium"
              disabled={pages.length <= 1}
            >
              <ChevronLeft size={16} />
              Previous
            </button>

            {/* Page indicator */}
            <div className="flex items-center gap-2">
              {pages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex 
                      ? 'bg-purple-600' 
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextPage}
              className="flex items-center gap-2 px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors text-sm font-medium"
              disabled={pages.length <= 1}
            >
              Next
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Page counter */}
          <div className="text-center mt-2">
            <span className="text-xs text-gray-600 dark:text-gray-400">
              Page {currentIndex + 1} of {pages.length}
            </span>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          image={currentPage.image}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}