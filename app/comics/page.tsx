"use client"

import { comicStrips } from "@/lib/data";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";

const COMICS_PER_PAGE = 10;

function ComicsContent() {
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  const sortedComics = [...comicStrips].sort((a, b) =>
    new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );

  const totalPages = Math.ceil(sortedComics.length / COMICS_PER_PAGE);
  const startIndex = (currentPage - 1) * COMICS_PER_PAGE;
  const endIndex = startIndex + COMICS_PER_PAGE;
  const currentComics = sortedComics.slice(startIndex, endIndex);

  return (
    <>
      {sortedComics.length === 0 ? (
        <div className="comic-panel p-12 text-center">
          <p className="font-body text-xl text-light-text-secondary dark:text-dark-text-secondary">
            No comic strips yet. Check back soon!
          </p>
        </div>
      ) : (
        <>
          <div className="grid gap-8">
            {currentComics.map((comic) => (
              <Link key={comic.id} href={`/comics/${comic.id}`}>
                <div className="comic-panel p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="mb-4">
                    <h2 className="font-heading text-2xl md:text-3xl text-light-text-primary dark:text-dark-text-primary mb-2">
                      {comic.title}
                    </h2>
                    <p className="font-body text-sm text-light-text-secondary dark:text-dark-text-secondary">
                      {new Date(comic.publishDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                      })}
                    </p>
                  </div>
                  <div className="relative w-full bg-white dark:bg-gray-900 rounded-lg overflow-hidden mb-4">
                    <Image
                      src={comic.images[0]}
                      alt={`${comic.title} - Preview`}
                      width={1200}
                      height={800}
                      className="w-full h-auto"
                      priority={currentComics.indexOf(comic) === 0}
                    />
                  </div>
                  {comic.description && (
                    <p className="font-body text-base text-light-text-secondary dark:text-dark-text-secondary mb-2">
                      {comic.description}
                    </p>
                  )}
                  <p className="font-body text-accent-purple font-semibold">
                    Read Full Comic →
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-8">
              <Link
                href={`/comics?page=${currentPage - 1}`}
                className={`px-4 py-2 rounded-lg font-body font-semibold transition-colors ${
                  currentPage === 1
                    ? "opacity-50 pointer-events-none bg-gray-300 dark:bg-gray-700"
                    : "bg-accent-purple text-white hover:bg-accent-purple/80"
                }`}
                aria-disabled={currentPage === 1}
              >
                Previous
              </Link>

              <span className="font-body text-light-text-primary dark:text-dark-text-primary">
                Page {currentPage} of {totalPages}
              </span>

              <Link
                href={`/comics?page=${currentPage + 1}`}
                className={`px-4 py-2 rounded-lg font-body font-semibold transition-colors ${
                  currentPage === totalPages
                    ? "opacity-50 pointer-events-none bg-gray-300 dark:bg-gray-700"
                    : "bg-accent-purple text-white hover:bg-accent-purple/80"
                }`}
                aria-disabled={currentPage === totalPages}
              >
                Next
              </Link>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default function ComicsPage() {
  return (
    <div className="min-h-screen bg-light-background dark:bg-dark-background bg-grid-light dark:bg-grid-dark bg-grid p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-heading text-4xl md:text-6xl text-light-text-primary dark:text-dark-text-primary text-center mb-8">
          Comic Strips
        </h1>
        <Suspense fallback={
          <div className="comic-panel p-12 text-center">
            <p className="font-body text-xl text-light-text-secondary dark:text-dark-text-secondary">
              Loading...
            </p>
          </div>
        }>
          <ComicsContent />
        </Suspense>
      </div>
    </div>
  );
}
