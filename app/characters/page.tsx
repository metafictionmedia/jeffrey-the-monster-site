import Image from "next/image";
import Link from "next/link";
import { characters } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Characters | Jeffrey the Monster",
  description: "Meet the cast of 'Jeffrey the Monster': Jeffrey, Barry, sMonty, and Sam.",
};

export default function CharactersPage() {
  const characterList = Object.values(characters);

  return (
    <div className="container mx-auto px-4 py-12 sm:py-20">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-7xl">Meet the Cast</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {characterList.map((char) => (
          <Link 
            href={`/characters/${char.id}`} 
            key={char.id}
            className="group comic-panel p-4 flex flex-col items-center text-center transition-transform duration-200 hover:-translate-y-2"
          >
            <div className="w-full aspect-square relative mb-4 border-2 border-light-text dark:border-dark-text overflow-hidden">
              <Image
                src={char.image}
                alt={`Portrait of ${char.name}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h2 className="text-3xl">{char.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
