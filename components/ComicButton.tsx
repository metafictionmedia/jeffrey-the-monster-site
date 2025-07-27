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
        "inline-block font-heading text-2xl tracking-wider text-center px-8 py-4 bg-accent-yellow text-light-text border-4 border-light-text dark:border-dark-text shadow-comic dark:shadow-comic-dark hover:shadow-comic-hover dark:hover:shadow-comic-hover-dark hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-100",
        className
      )}
    >
      {children}
    </Link>
  );
}
