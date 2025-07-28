import Image from "next/image";
import ComicButton from "@/components/ComicButton";
import ImageSlideshow from "@/components/ImageSlideshow";
import { synopsis, homepageSlideshowImages } from "@/lib/data";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function HomePage() {
  return (
    // Use min-h-screen to allow scrolling on mobile, but keep full height on desktop
    <div className="min-h-screen w-screen overflow-x-hidden bg-light-background dark:bg-dark-background bg-grid-light dark:bg-grid-dark bg-grid p-4">
      <div className="absolute top-4 right-4 z-10">
        <ThemeToggle />
      </div>
      {/* Mobile layout: A simple flex column.
        Desktop layout (md and up): The 3x3 grid.
      */}
      <div className="h-full w-full flex flex-col md:grid md:grid-cols-3 md:grid-rows-3 gap-4">
        
        {/* Panel 1: Logo */}
        <div className="md:col-span-1 md:row-span-1 comic-panel flex items-center justify-center p-4 h-48 md:h-auto">
          <Image
            src="/images/logos/current jeffrey logo homepage.PNG"
            alt="Jeffrey the Monster Logo"
            width={300}
            height={300}
            className="object-contain h-full w-auto"
          />
        </div>

        {/* Panel 2: Hero Slideshow */}
        <div className="md:col-span-2 md:row-span-2 comic-panel relative overflow-hidden h-64 md:h-auto order-first md:order-none">
           <ImageSlideshow images={homepageSlideshowImages} />
        </div>

        {/* Panel 3: Synopsis */}
        <div className="md:col-span-1 md:row-span-2 comic-panel p-6 flex flex-col justify-center relative">
            <div className="absolute -top-5 left-4 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[30px] border-b-light-card dark:border-b-dark-card"></div>
            <p className="font-body text-base md:text-lg/relaxed text-light-text-secondary dark:text-dark-text-secondary">
              {synopsis}
            </p>
        </div>

        {/* Panel 4: CTAs */}
        <div className="md:col-span-3 md:row-span-1 comic-panel flex flex-col md:flex-row items-center justify-evenly p-4 gap-4">
            <ComicButton href="/about">About</ComicButton>
            <ComicButton href="/characters">Characters</ComicButton>
            <ComicButton href="/preorder-bonus">Preorder Bonus</ComicButton>
            <ComicButton href="/store">Store</ComicButton>
        </div>

      </div>
    </div>
  );
}
