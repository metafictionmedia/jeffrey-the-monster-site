import Image from "next/image";
import ComicButton from "@/components/ComicButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preorder Bonus | Jeffrey the Monster",
  description: "Get exclusive bonuses when you preorder 'Jeffrey the Monster', including a free coloring book!",
};

export default function PreorderBonusPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:py-20">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-7xl text-accent-yellow-dark dark:text-accent-yellow">Preorder Exclusives!</h1>
        <p className="text-xl mt-4 font-body text-light-text-secondary dark:text-dark-text-secondary">
          Get these amazing bonuses when you preorder the book.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        {/* Bonus 1: Coloring Book - UPDATED IMAGE */}
        <div className="comic-panel p-8 flex flex-col items-center text-center">
          <Image 
            src="/images/concept art/IMG_6005.jpg" 
            alt="Sketch of Jeffrey and Barry" 
            width={400} 
            height={300} 
            className="object-contain mb-6 border-2 border-light-text dark:border-dark-text" 
          />
          <h2 className="text-4xl mb-4">Free Coloring Book!</h2>
          <p className="font-body text-lg/relaxed flex-grow">
            Every preorder of "Jeffrey the Monster - Talent Show Magic" comes with a <span className="font-bold">FREE</span> digital coloring book featuring your favorite characters and scenes from the story.
          </p>
        </div>

        {/* Bonus 2: Limited Edition - UPDATED IMAGE */}
        <div className="comic-panel p-8 flex flex-col items-center text-center">
          <Image 
            src="/images/concept art/IMG_6007.jpg" 
            alt="Sketch of various comic panels" 
            width={400} 
            height={300} 
            className="object-contain mb-6 border-2 border-light-text dark:border-dark-text" 
          />
          <h2 className="text-4xl mb-4">Ultra-Limited Edition</h2>
          <p className="font-body text-lg/relaxed flex-grow">
            The <span className="font-bold text-accent-purple dark:text-accent-purple">first three (3) preorders</span> will receive an exclusive, limited-edition script/sketch draft version of the book. This draft includes the original script and rough panel artwork, detailing the creative process from idea to final page.
          </p>
        </div>
      </div>

      <div className="text-center mt-12">
        <ComicButton href="/store">Preorder Now!</ComicButton>
      </div>
    </div>
  );
}
