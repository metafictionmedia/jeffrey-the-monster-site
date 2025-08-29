import ImageSlideshow from "@/components/ImageSlideshow";
import Image from "next/image";
import { conceptArtImages } from "@/lib/data";
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
            {<div className="font-body text-base md:text-lg/relaxed text-light-text-secondary dark:text-dark-text-secondary space-y-4">
            <p>
              <strong>The Story</strong> Jeffrey the Monster didn't ask to be the new kid. He didn't ask to start over in a strange neighborhood, in a school where nobody knows him, and where the most popular kid just happens to be another puppet. But life rarely asks permission—it just hands you a mess and dares you to figure it out.
            </p>
            <p>
              The first week of eighth grade was already a disaster: wrong impressions, quick judgments, and enough eye-rolling to power a small town. Leave it to Jeffrey to turn it into the kind of disaster that spawns made-for-TV movies and cautionary tales you pass down to your kids, hoping they never go through anything like it. His sharp tongue and short fuse earned him a reputation that trails into every classroom he manages to doze off in. But it was his bad luck—and worse judgment—that landed him in the crosshairs of the only other puppet at the school: Smonty, the self-appointed king of popularity, determined to make sure Jeffrey never forgets his place.
            </p>
            <p>
              His place, of course, was the garage—where he could avoid his parents, who were somehow both dismissive and deafening at the same time. At school, he was attached to Barry, his mom-assigned conjoined twin, a label Jeffrey wished he could rip off every time Barry opened his mouth. And like the work of a sociopathic writer, things only got worse: he was grouped with Barry <em>and</em> Sam—a girl so determined to be the best that even the teachers seemed intimidated by her—for the one event he feared most: the Talent Show. In other words, the perfect setup for everything to go spectacularly wrong.
            </p>
            <p>
              And stories like this aren't really about fitting in—unless we're talking about pants that should never be worn by anyone, least of all a monster who doesn't even own a pair. No, stories like this are about the legends that start when kids who don't belong anywhere find themselves stuck together, forced to figure out if being outcasts means being alone… or being the last ones standing.
            </p>
            <p>
              And through all the drama, sharp comebacks, and questionable decisions, I'll be here to keep things honest. Not to help, not to fix, but to make sure you don't miss a single running gag, subtle homage, or hidden clue that takes the whole thing from confusing to coherent. Otherwise, you might just mistake the smoke and mirrors for a monster and his magic. Don't ask me what it means—it just sounded good.
            </p>
          </div>}
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
  <div className="comic-panel relative overflow-hidden h-96">
    <ImageSlideshow images={conceptArtImages} />
  </div>
</section>
    </div>
  );
}
