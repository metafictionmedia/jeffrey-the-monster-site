import Image from "next/image";
import ComicButton from "@/components/ComicButton";
import EmailSignup from "@/components/EmailSignup";
import type { Metadata } from "next";
import { limitedEditionInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Extras | Jeffrey the Monster",
  description: "Sign up for updates, get notified about new comic strips, and enter to win exclusive limited edition rewards!",
};

export default function ExtrasPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:py-20">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-7xl text-accent-yellow-dark dark:text-accent-yellow">Extras!</h1>
        <p className="text-xl mt-4 font-body text-light-text-secondary dark:text-dark-text-secondary">
          Stay connected and get exclusive rewards
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        {/* Left Panel: Email Signup */}
        <EmailSignup />

        {/* Right Panel: Limited Edition Drawing */}
        <div className="comic-panel p-8 flex flex-col items-center text-center">
          <div className="relative w-full h-72 mb-6">
            <Image
              src={limitedEditionInfo.src}
              alt={limitedEditionInfo.alt}
              fill
              className="object-contain border-2 border-light-text dark:border-dark-text"
            />
          </div>

          <h2 className="text-4xl mb-4">{limitedEditionInfo.title}</h2>

          <p
            className="font-body text-lg/relaxed flex-grow"
            dangerouslySetInnerHTML={{ __html: limitedEditionInfo.description }}
          />
        </div>
      </div>

      <div className="text-center mt-12">
        <ComicButton href="/store">Preorder Now!</ComicButton>
      </div>
    </div>
  );
}
