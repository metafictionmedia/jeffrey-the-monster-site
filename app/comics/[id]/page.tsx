import { comicStrips } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateStaticParams() {
  return comicStrips.map((comic) => ({
    id: comic.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const comic = comicStrips.find((c) => c.id === params.id);

  if (!comic) {
    return {
      title: "Comic Not Found | Jeffrey the Monster",
    };
  }

  return {
    title: `${comic.title} | Jeffrey the Monster Comics`,
    description: comic.description || `Read the ${comic.title} comic strip`,
  };
}

export default function ComicPage({ params }: Props) {
  const comic = comicStrips.find((c) => c.id === params.id);

  if (!comic) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-light-background dark:bg-dark-background bg-grid-light dark:bg-grid-dark bg-grid p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/comics"
          className="inline-flex items-center font-body text-accent-purple hover:text-accent-purple/80 mb-6"
        >
          ← Back to Comics
        </Link>

        <div className="comic-panel p-6">
          <div className="mb-6">
            <h1 className="font-heading text-3xl md:text-5xl text-light-text-primary dark:text-dark-text-primary mb-2">
              {comic.title}
            </h1>
            <p className="font-body text-sm text-light-text-secondary dark:text-dark-text-secondary">
              {new Date(comic.publishDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric"
              })}
            </p>
            {comic.description && (
              <p className="font-body text-base text-light-text-secondary dark:text-dark-text-secondary mt-4">
                {comic.description}
              </p>
            )}
          </div>

          <div className="space-y-4">
            {comic.images.map((image, index) => (
              <div key={index} className="relative w-full bg-white dark:bg-gray-900 rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt={`${comic.title} - Panel ${index + 1}`}
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
