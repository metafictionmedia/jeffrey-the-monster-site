import { cn } from "@/lib/utils";
import Link from "next/link";

interface ComicButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function ComicButton({ href, children, className }: ComicButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "w-full md:w-auto inline-block font-heading text-xl md:text-2xl tracking-wider text-center px-6 py-3 md:px-8 md:py-4 bg-accent-yellow text-light-text border-4 border-light-text dark:border-dark-text shadow-comic dark:shadow-comic-dark hover:shadow-comic-hover dark:hover:shadow-comic-hover-dark hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-100",
        className
      )}
    >
      {children}
    </Link>
  );
}
