"use client"
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const socialLinks = {
    jeffrey: {
        instagram: "https://instagram.com/jeffreethemonster",
        facebook: "https://facebook.com/Jeffreethemonster",
    },
    metafiction: {
        instagram: "https://instagram.com/metafictionmedia",
        facebook: "https://facebook.com/metafictionmedia",
    }
}

export default function Footer() {
    const pathname = usePathname();
    
    // Don't show footer on the homepage
    if (pathname === '/') {
        return null;
    }

    return (
        <footer className="border-t border-light-border dark:border-dark-border">
            <div className="container mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex flex-col items-center sm:items-start">
                    <Image src="/images/logos/Logo 6.PNG" alt="Metafiction Media Logo" width={120} height={40} className="dark:invert"/>
                    <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary mt-2">
                        &copy; {new Date().getFullYear()} Metafiction Media. All Rights Reserved.
                    </p>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <div className="flex items-center gap-4">
                        <span className="font-bold text-sm">Jeffrey:</span>
                        <Link href={socialLinks.jeffrey.instagram} target="_blank" aria-label="Jeffrey the Monster Instagram"><FaInstagram className="text-2xl hover:text-accent-purple transition-colors" /></Link>
                        <Link href={socialLinks.jeffrey.facebook} target="_blank" aria-label="Jeffrey the Monster Facebook"><FaFacebook className="text-2xl hover:text-accent-purple transition-colors" /></Link>
                    </div>
                     <div className="flex items-center gap-4">
                        <span className="font-bold text-sm">Metafiction:</span>
                        <Link href={socialLinks.metafiction.instagram} target="_blank" aria-label="Metafiction Media Instagram"><FaInstagram className="text-2xl hover:text-accent-purple transition-colors" /></Link>
                        <Link href={socialLinks.metafiction.facebook} target="_blank" aria-label="Metafiction Media Facebook"><FaFacebook className="text-2xl hover:text-accent-purple transition-colors" /></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
