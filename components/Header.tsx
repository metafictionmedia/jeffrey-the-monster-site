"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navLinks = [
    { href: "/story", label: "Story" },
    { href: "/characters", label: "Characters" },
    { href: "/creator", label: "Creator" },
    { href: "/preorder-bonus", label: "Bonus" },
    { href: "/store", label: "Store" },
];

export default function Header() {
    const pathname = usePathname();

    if (pathname === '/') {
        return null;
    }

    return (
        <header className="sticky top-0 z-50 w-full border-b border-light-border dark:border-dark-border bg-white/90 dark:bg-black/80 backdrop-blur-sm">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 shrink-0">
                     <Image src="/images/logos/current jeffrey logo homepage.PNG" alt="Jeffrey the Monster Logo" width={50} height={50} />
                     <span className="font-heading text-xl md:text-2xl hidden sm:block">Jeffrey The Monster</span>
                </Link>
                <nav className="flex items-center gap-1 sm:gap-2 md:gap-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "font-sans font-semibold text-sm sm:text-base md:text-lg hover:text-accent-purple transition-colors px-1",
                                pathname.startsWith(link.href) ? "text-accent-purple" : "text-light-text-secondary dark:text-dark-text-secondary"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <ThemeToggle />
                </nav>
            </div>
        </header>
    );
}
