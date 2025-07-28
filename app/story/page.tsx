import Image from "next/image";
import { synopsis, conceptArtImages } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Story | Jeffrey the Monster",
  description: "Learn about the story, release date, and concept art for 'Jeffrey the Monster - Talent Show Magic'.",
};

export default function StoryPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:py-20 space-y-16">
      {/* --- About the Book Section --- */}
      <section className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="comic-panel p-6 md:p-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-accent-purple-dark dark:text-accent-purple mb-4">
            Jeffrey the Monster
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-light-text dark:text-dark-text mb-6">
            Talent Show Magic
          </h2>
          <p className="font-body text-base md:text-lg/relaxed text-light-text-secondary dark:text-dark-text-secondary">
            {synopsis}
          </p>
        </div>
        <div className="comic-panel p-6 md:p-8 text-center">
          <h3 className="text-3xl md:text-4xl mb-4">Release Information</h3>
          <p className="text-lg md:text-xl font-body mb-6">
            Part One is targeted for release in <span className="font-bold text-accent-green-dark dark:text-accent-green">October-November 2025</span>.
          </p>
          <div className="border-t border-light-border dark:border-dark-border my-6"></div>
          <h3 className="text-3xl md:text-4xl mb-4">Created By</h3>
          <div className="flex justify-center">
            <Image src="/images/logos/Logo 6.PNG" alt="Metafiction Media Logo" width={200} height={80} className="dark:invert"/>
          </div>
        </div>
      </section>

      {/* --- Concept Art Section --- */}
      <section>
        <h2 className="text-4xl sm:text-5xl text-center mb-8">Concept Art</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {conceptArtImages.map((src, index) => (
            <div key={index} className="comic-panel p-2">
              <div className="relative aspect-square">
                <Image src={src} alt="Concept art" fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
