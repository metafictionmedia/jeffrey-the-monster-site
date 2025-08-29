import Image from "next/image";
import ComicButton from "@/components/ComicButton";
import ComicShowcase from "@/components/ComicShowcase";
import NewsFeed from "@/components/NewsFeed";
import { synopsis, comicPages, newsItems} from "@/lib/data";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function HomePage() {
  return (
    <div className="min-h-screen w-screen overflow-x-hidden bg-light-background dark:bg-dark-background bg-grid-light dark:bg-grid-dark bg-grid p-4">
      <div className="absolute top-4 right-4 z-20">
        <ThemeToggle />
      </div>

      {/* --- MOBILE LAYOUT --- */}
      <div className="flex flex-col gap-4 md:hidden">
        <div className="comic-panel flex items-center justify-center p-4 h-40">
          <Image
            src="/images/logos/current jeffrey logo homepage.PNG"
            alt="Jeffrey the Monster Logo"
            width={300}
            height={300}
            className="object-contain h-full w-auto"
          />
        </div>
        <div className="comic-panel flex flex-col items-center justify-evenly p-4 gap-4">
          <ComicButton href="/story">Story</ComicButton>
          <ComicButton href="/characters">Characters</ComicButton>
          <ComicButton href="/creator">Creator</ComicButton>
          <ComicButton href="/preorder-bonus">Preorder Bonus</ComicButton>
          <ComicButton href="/store">Store</ComicButton>
        </div>
        <div className="comic-panel relative overflow-hidden h-64">
  <ComicShowcase pages={comicPages} />
</div>
        <div className="comic-panel p-6 relative">
          <div className="absolute -top-5 left-4 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[30px] border-b-light-card dark:border-b-dark-card"></div>
          <p className="font-body text-base/relaxed text-light-text-secondary dark:text-dark-text-secondary">
            {synopsis}
          </p>
        </div>
      </div>

      {/* --- DESKTOP LAYOUT --- */}
      <div className="hidden h-full w-full md:grid md:grid-cols-3 md:grid-rows-3 gap-4">
        {/* Panel 1: Logo */}
        <div className="md:col-span-1 md:row-span-1 comic-panel flex items-center justify-center p-4">
          <Image
            src="/images/logos/current jeffrey logo homepage.PNG"
            alt="Jeffrey the Monster Logo"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
        {/* --- NEWS FEED SECTION --- */}
      <NewsFeed items={newsItems} maxItems={3} />

        {/* Panel 2: Navigation - Top Right */}
        <div className="md:col-span-2 md:row-span-1 comic-panel flex items-center justify-evenly p-4 gap-4">
          <ComicButton href="/story">Story</ComicButton>
          <ComicButton href="/characters">Characters</ComicButton>
          <ComicButton href="/creator">Creator</ComicButton>
          <ComicButton href="/preorder-bonus">Preorder Bonus</ComicButton>
          <ComicButton href="/store">Store</ComicButton>
        </div>

       {/* Panel 3: Comic Showcase */}
<div className="md:col-span-2 md:row-span-2 comic-panel relative overflow-hidden">
  <ComicShowcase pages={comicPages} />
</div>

        {/* Panel 4: Synopsis */}
        <div className="md:col-span-1 md:row-span-2 comic-panel p-6 flex flex-col justify-center relative">
          <div className="absolute -top-5 left-4 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[30px] border-b-light-card dark:border-b-dark-card"></div>
          <p className="font-body text-lg/relaxed text-light-text-secondary dark:text-dark-text-secondary">
            {synopsis}
          </p>
        </div>
      </div>
    </div>
  );
}