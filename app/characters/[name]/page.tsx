import { characters } from '@/lib/data';
import type { Character, CharacterId } from '@/lib/data';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

type Props = {
  params: { name: CharacterId }
}

// Generate metadata for each character page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const character = characters[params.name];

  if (!character) {
    return {
      title: 'Character Not Found',
    }
  }

  return {
    title: `${character.name} | Characters`,
    description: `Character bio for ${character.name} from Jeffrey the Monster.`,
  }
}

// Generate static pages for each character at build time
export async function generateStaticParams() {
  return Object.keys(characters).map((name) => ({
    name,
  }));
}

export default function CharacterBioPage({ params }: Props) {
  const character = characters[params.name];

  if (!character) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 sm:py-20">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="comic-panel p-4">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src={character.image}
                alt={`Full portrait of ${character.name}`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="md:col-span-2">
            <div className="comic-panel p-8 h-full">
                <h1 className="text-6xl md:text-8xl text-accent-green-dark dark:text-accent-green mb-6">{character.name}</h1>
                <p className="font-body text-lg/relaxed text-light-text-secondary dark:text-dark-text-secondary whitespace-pre-line">
                    {character.bio}
                </p>
            </div>
        </div>
      </div>
    </div>
  );
}
