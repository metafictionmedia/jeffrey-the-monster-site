import Image from "next/image";
import ComicButton from "@/components/ComicButton";
import type { Metadata } from "next";
import { preorderBonuses } from "@/lib/data"; // This now correctly imports our data

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

      {/* This new section uses the data correctly */}
      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        {preorderBonuses.map((bonus) => (
          <div key={bonus.id} className="comic-panel p-8 flex flex-col items-center text-center">
            
            <div className="relative w-full h-72 mb-6">
              <Image 
                src={bonus.src} 
                alt={bonus.alt} 
                fill
                className="object-contain border-2 border-light-text dark:border-dark-text" 
              />
            </div>

            <h2 className="text-4xl mb-4">{bonus.title}</h2>
            
            <p 
              className="font-body text-lg/relaxed flex-grow"
              dangerouslySetInnerHTML={{ __html: bonus.description }}
            />

          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <ComicButton href="/store">Preorder Now!</ComicButton>
      </div>
    </div>
  );
}
