import Image from "next/image";
import { creatorBio } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About the Creator | Jeffrey the Monster",
  description: "Learn about Phil Marquez, the creator of 'Jeffrey the Monster'.",
};

export default function CreatorPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:py-20">
      <section>
        <h1 className="text-4xl sm:text-5xl text-center mb-8">About the Creator</h1>
        <div className="comic-panel p-6 md:p-8 grid md:grid-cols-3 gap-8 items-center md:items-start max-w-4xl mx-auto">
          <div className="md:col-span-1 flex justify-center">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-light-text dark:border-dark-text">
              <Image src="/images/bio/IMG_0111.jpg" alt="Phil Marquez, Creator" fill className="object-cover" />
            </div>
          </div>
          <div className="md:col-span-2">
            <h2 className="text-3xl md:text-4xl mb-2">Phil Marquez</h2>
            <h3 className="text-lg md:text-xl font-sans font-semibold text-light-text-secondary dark:text-dark-text-secondary mb-4">Owner & Founder, Metafiction Media</h3>
            <p className="font-body text-base/relaxed text-light-text-secondary dark:text-dark-text-secondary whitespace-pre-line">
              {creatorBio}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
