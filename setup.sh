#!/bin/bash

# This script will set up the entire Next.js project structure and files
# for the "Jeffree the Monster" website.

echo "🚀 Starting Jeffree the Monster website setup..."

# --- 1. Create Directory Structure ---
echo "📁 Creating project directories..."
mkdir -p app/characters/[name] app/about app/preorder-bonus app/store
mkdir -p components
mkdir -p lib
mkdir -p public/images/logos public/images/characters public/images/concept-art public/images/ui

# --- 2. Create Project Configuration Files ---

# --- package.json ---
echo "📦 Creating package.json..."
cat <<EOF > package.json
{
  "name": "jeffreythemonster",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.2.4",
    "react": "^18",
    "react-dom": "^18",
    "react-icons": "^5.2.1",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.3.0",
    "next-themes": "^0.3.0"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "autoprefixer": "^10.4.19",
    "eslint": "^8",
    "eslint-config-next": "14.2.4"
  }
}
EOF

# --- next.config.mjs ---
echo "📜 Creating next.config.mjs..."
cat <<EOF > next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // Assuming images might be hosted elsewhere in the future,
        // but for now this is mainly for structure.
        remotePatterns: [],
    },
};

export default nextConfig;
EOF

# --- tsconfig.json ---
echo "📜 Creating tsconfig.json..."
cat <<EOF > tsconfig.json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts", "next.config.mjs"],
  "exclude": ["node_modules"]
}
EOF

# --- tailwind.config.ts ---
echo "🎨 Creating tailwind.config.ts..."
cat <<EOF > tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        heading: ["var(--font-bangers)"],
        body: ["var(--font-comic-neue)"],
      },
      colors: {
        // Light Mode Palette
        light: {
          background: "#ffffff", // White
          card: "#f8fafc", // Slate-50
          text: "#0f172a", // Slate-900
          "text-secondary": "#475569", // Slate-600
          border: "#e2e8f0", // Slate-200
        },
        // Dark Mode Palette
        dark: {
          background: "#000000", // Black
          card: "#1f2937", // Gray-800
          text: "#ffffff", // White
          "text-secondary": "#d1d5db", // Gray-300
          border: "rgba(255, 255, 255, 0.2)",
        },
        // Accent Colors
        accent: {
          green: "#4ade80",
          "green-dark": "#16a34a",
          purple: "#a855f7",
          "purple-dark": "#7c3aed",
          yellow: "#facc15",
          "yellow-dark": "#eab308",
          "yellow-hover": "#f59e0b",
        },
      },
      boxShadow: {
        comic: "4px 4px 0px 0px rgba(0,0,0,1)",
        "comic-dark": "4px 4px 0px 0px rgba(255,255,255,0.7)",
        "comic-hover": "2px 2px 0px 0px rgba(0,0,0,1)",
        "comic-hover-dark": "2px 2px 0px 0px rgba(255,255,255,0.7)",
      },
      backgroundImage: {
        'grid-light': "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
        'grid-dark': "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid': '20px 20px',
      },
    },
  },
  plugins: [],
};
export default config;
EOF

# --- postcss.config.mjs ---
echo "📜 Creating postcss.config.mjs..."
cat <<EOF > postcss.config.mjs
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
EOF

# --- 3. Create Global CSS and Layout ---

# --- app/globals.css ---
echo "🎨 Creating app/globals.css..."
cat <<EOF > app/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Light Mode Variables */
    --background: 255 255 255;
    --foreground: 15 23 42;
    --card: 248 250 252;
    --card-foreground: 15 23 42;
    --primary-text: 15 23 42;
    --secondary-text: 71 85 105;
    --border: 226 232 240;
    --accent-yellow: 250 204 21;
    --accent-yellow-hover: 245 158 11;
  }

  .dark {
    /* Dark Mode Variables */
    --background: 0 0 0;
    --foreground: 255 255 255;
    --card: 31 41 55;
    --card-foreground: 255 255 255;
    --primary-text: 255 255 255;
    --secondary-text: 209 213 219;
    --border: 55 65 81;
    --accent-yellow: 250 204 21;
    --accent-yellow-hover: 245 158 11;
  }
}

body {
  color: rgb(var(--primary-text));
  background: rgb(var(--background));
  font-family: var(--font-comic-neue);
}

.comic-panel {
    @apply border-4 border-light-text dark:border-dark-text bg-light-card dark:bg-dark-card shadow-comic dark:shadow-comic-dark;
}

h1, h2, h3 {
    font-family: var(--font-bangers);
    letter-spacing: 0.05em;
}
EOF

# --- app/layout.tsx ---
echo "🏗️ Creating app/layout.tsx..."
cat <<EOF > app/layout.tsx
import type { Metadata } from "next";
import { Inter, Bangers, Comic_Neue } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter' 
});

const bangers = Bangers({
  subsets: ["latin"],
  weight: "400",
  variable: '--font-bangers'
});

const comicNeue = Comic_Neue({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: '--font-comic-neue'
});

export const metadata: Metadata = {
  title: "Jeffrey the Monster | Official Site",
  description: "The official launch site for the graphic novel 'Jeffrey the Monster - Talent Show Magic'.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={\`\${inter.variable} \${bangers.variable} \${comicNeue.variable}\`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-[calc(100vh-120px)]">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
EOF

# --- 4. Create Core Components ---

# --- components/ThemeProvider.tsx ---
echo "💡 Creating components/ThemeProvider.tsx..."
cat <<EOF > components/ThemeProvider.tsx
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
EOF

# --- components/ThemeToggle.tsx ---
echo "💡 Creating components/ThemeToggle.tsx..."
cat <<EOF > components/ThemeToggle.tsx
"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { FaSun, FaMoon } from "react-icons/fa";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <button
      className="p-2 rounded-full text-2xl text-accent-yellow hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <FaMoon /> : <FaSun />}
    </button>
  )
}
EOF

# --- components/Header.tsx ---
echo "🏗️ Creating components/Header.tsx..."
cat <<EOF > components/Header.tsx
"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navLinks = [
    { href: "/about", label: "About" },
    { href: "/characters", label: "Characters" },
    { href: "/preorder-bonus", label: "Bonus" },
    { href: "/store", label: "Store" },
];

export default function Header() {
    const pathname = usePathname();

    // Don't show header on the homepage
    if (pathname === '/') {
        return null;
    }

    return (
        <header className="sticky top-0 z-50 w-full border-b border-light-border dark:border-dark-border bg-white/90 dark:bg-black/80 backdrop-blur-sm">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                     <Image src="/images/logos/current jeffrey logo homepage.PNG" alt="Jeffrey the Monster Logo" width={50} height={50} />
                     <span className="font-heading text-2xl hidden sm:block">Jeffrey The Monster</span>
                </Link>
                <nav className="flex items-center gap-4 sm:gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "font-sans font-semibold text-lg hover:text-accent-purple transition-colors",
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
EOF

# --- components/Footer.tsx ---
echo "🏗️ Creating components/Footer.tsx..."
cat <<EOF > components/Footer.tsx
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
EOF

# --- components/ComicButton.tsx ---
echo "🏗️ Creating components/ComicButton.tsx..."
cat <<EOF > components/ComicButton.tsx
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
EOF

# --- lib/utils.ts ---
echo "📚 Creating lib/utils.ts..."
cat <<EOF > lib/utils.ts
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
EOF

# --- lib/data.ts ---
echo "📚 Creating lib/data.ts..."
cat <<EOF > lib/data.ts
export const synopsis = "After moving to a new neighborhood a week ago, Jeffrey the Monster's first week of 8th grade at a new school goes terribly after being humiliated by Smonty, the most popular kid and only other puppet at school. A group project due by the end of the week forces Jeffrey to work with two other outcast students, while Smonty sets out to make Jeffrey's life miserable hoping to get him to move to another school.";

export const characters = {
  jeffrey: {
    id: 'jeffrey',
    name: "Jeffrey",
    image: "/images/characters/jeffreyy.jpeg",
    bio: "Jeffrey is a purple, puppet-like monster, new to his town and high school. He carries himself with the perpetually unimpressed and weary attitude of a grumpy old man, despite being a teenager. His typical outfit, featuring a backwards cap and a sarcastic t-shirt, combined with his generally withdrawn nature, suggests he uses a wall of annoyance to keep others at a distance. He is not one for small talk and is easily irritated by unexpected events or overly enthusiastic people, as seen in his interactions with Barry. Beneath the grumpy exterior, Jeffrey seems to be a creature of habit and order who gets flustered when things go wrong, like the threat of rain on his fur or the indignity of being splashed with gutter water. He is clearly intelligent, using a PDA-like device to check the weather, but he is also self-conscious, as shown by his reluctant decision to wear pants after being called out. His first day of school is already a series of unfortunate events, setting the stage for a difficult adjustment period where his patience will be thoroughly tested."
  },
  barry: {
    id: 'barry',
    name: "Barry",
    image: "/images/characters/Barry version 1.jpeg",
    bio: "Barry is a kind-hearted, energetic, and extremely talkative human kid who is tasked with walking Jeffrey to school. He appears to be younger than Jeffrey and possesses a childlike innocence and curiosity, looking at Jeffrey's tech with wonder and openly sharing his thoughts on everything from the weather to schoolyard politics. He is unabashedly himself, admitting he talks too much but seeing it as a core part of his identity. His friendly and slightly naive nature makes him the complete opposite of the cynical Jeffrey. Despite his chattiness, Barry is also observant and socially aware. He immediately recognizes sMonty on the bus and understands the social hierarchy of their school, knowing that sMonty's popularity means Jeffrey's embarrassing moment will quickly become public knowledge. He acts as a guide and an exposition-provider for both Jeffrey and the audience, establishing the world and its key players through his non-stop, good-natured chatter."
  },
  smonty: {
    id: 'smonty',
    name: "sMonty",
    image: "/images/characters/smonty.JPG",
    bio: "sMonty is a green, humanoid puppet monster who holds the title of the most popular puppet at school—a title that was uncontested until Jeffrey's arrival. He projects an aura of effortless cool, with his sunglasses, stylish hoodie, and confident demeanor. He travels with an entourage of friends and clearly enjoys being the center of attention, taking immediate and cruel delight in Jeffrey's public misfortune. His introduction, laughing from the safety of the school bus, establishes him as the primary antagonist. He represents the social challenge Jeffrey will have to face. Barry's description of him as 'disgustingly' popular suggests that sMonty's charm may be superficial, masking a mean-spirited or bullying nature. His actions are calculated to maintain his social standing by targeting and mocking the newcomer, making a confrontation between him and Jeffrey seem inevitable."
  },
  sam: {
    id: 'sam',
    name: "Sam",
    image: "/images/characters/sam.PNG",
    bio: "Sam is a highly intelligent, driven, and perfectionistic student whose entire focus is on academic excellence. She operates with a critical eye and has zero tolerance for laziness or mediocrity, a trait that often causes her to inadvertently push her peers away. This self-imposed isolation, born from her high standards, has made her something of a loner, similar in status but different in reason to Jeffrey and Barry. Her intense focus on school may be a response to her home life, where her parents are described as being in their own world, leaving her feeling overlooked and channeling her energy into the one area she can control: her grades. Her primary motivation is to be the best, and she perceives anyone or anything that might jeopardize her academic standing as a direct threat. This makes her fiercely competitive and protective of her goals. Her world is set to be turned upside down when she is forced into a group with Jeffrey and Barry for the school talent show. The prospect of working with Jeffrey's cynical apathy and Barry's scattered energy will be a supreme test of her patience, forcing her to navigate a collaborative dynamic that is completely at odds with her perfectionist, independent nature."
  }
};

export type Character = typeof characters[keyof typeof characters];
export type CharacterId = keyof typeof characters;
EOF

# --- 5. Create Pages ---

# --- app/page.tsx (Homepage) ---
echo "📄 Creating app/page.tsx (Homepage)..."
cat <<EOF > app/page.tsx
import Image from "next/image";
import ComicButton from "@/components/ComicButton";
import { synopsis } from "@/lib/data";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function HomePage() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-light-background dark:bg-dark-background bg-grid-light dark:bg-grid-dark bg-grid p-4">
      <div className="absolute top-4 right-4 z-10">
        <ThemeToggle />
      </div>
      <div className="h-full w-full grid grid-cols-3 grid-rows-3 gap-4">
        
        {/* Panel 1: Logo */}
        <div className="col-span-1 row-span-1 comic-panel flex items-center justify-center p-4">
          <Image
            src="/images/logos/current jeffrey logo homepage.PNG"
            alt="Jeffrey the Monster Logo"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>

        {/* Panel 2: Hero Artwork */}
        <div className="col-span-2 row-span-2 comic-panel relative overflow-hidden">
           <Image
            src="/images/characters/hero-artwork.jpg" // Placeholder - replace with actual hero art
            alt="Jeffrey, Barry, and Sam"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Panel 3: Synopsis */}
        <div className="col-span-1 row-span-2 comic-panel p-6 flex flex-col justify-center relative">
            <div className="absolute -top-5 left-4 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[30px] border-b-light-card dark:border-b-dark-card"></div>
            <p className="font-body text-lg/relaxed text-light-text-secondary dark:text-dark-text-secondary">
              {synopsis}
            </p>
        </div>

        {/* Panel 4: CTAs */}
        <div className="col-span-3 row-span-1 comic-panel flex items-center justify-evenly p-4 gap-4">
            <ComicButton href="/about">About</ComicButton>
            <ComicButton href="/characters">Characters</ComicButton>
            <ComicButton href="/preorder-bonus">Preorder Bonus</ComicButton>
            <ComicButton href="/store">Store</ComicButton>
        </div>

      </div>
    </div>
  );
}
EOF

# --- app/about/page.tsx ---
echo "📄 Creating app/about/page.tsx..."
cat <<EOF > app/about/page.tsx
import Image from "next/image";
import { synopsis } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About the Book | Jeffrey the Monster",
  description: "Learn about the story, release date, and creators of 'Jeffrey the Monster - Talent Show Magic'.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="comic-panel p-8">
          <h1 className="text-5xl md:text-6xl text-accent-purple-dark dark:text-accent-purple mb-4">
            Jeffrey the Monster
          </h1>
          <h2 className="text-3xl md:text-4xl text-light-text dark:text-dark-text mb-6">
            Talent Show Magic
          </h2>
          <p className="font-body text-lg/relaxed text-light-text-secondary dark:text-dark-text-secondary">
            {synopsis}
          </p>
        </div>
        <div className="comic-panel p-8 text-center">
          <h3 className="text-4xl mb-4">Release Information</h3>
          <p className="text-xl font-body mb-6">
            Part One is targeted for release in <span className="font-bold text-accent-green-dark dark:text-accent-green">October-November 2025</span>.
          </p>
          <div className="border-t border-light-border dark:border-dark-border my-6"></div>
          <h3 className="text-4xl mb-4">Created By</h3>
          <div className="flex justify-center">
            <Image src="/images/logos/Logo 6.PNG" alt="Metafiction Media Logo" width={200} height={80} className="dark:invert"/>
          </div>
        </div>
      </div>
    </div>
  );
}
EOF

# --- app/preorder-bonus/page.tsx ---
echo "📄 Creating app/preorder-bonus/page.tsx..."
cat <<EOF > app/preorder-bonus/page.tsx
import Image from "next/image";
import ComicButton from "@/components/ComicButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preorder Bonus | Jeffrey the Monster",
  description: "Get exclusive bonuses when you preorder 'Jeffrey the Monster', including a free coloring book!",
};

export default function PreorderBonusPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:py-20">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-7xl text-accent-yellow-dark dark:text-accent-yellow">Preorder Exclusives!</h1>
        <p className="text-xl mt-4 font-body text-light-text-secondary dark:text-dark-text-secondary">
          Get these amazing bonuses when you preorder the book.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        {/* Bonus 1: Coloring Book */}
        <div className="comic-panel p-8 flex flex-col items-center text-center">
          <Image src="/images/concept-art/gate-sketch.png" alt="Sketch of a gate" width={400} height={300} className="object-cover mb-6 border-2 border-light-text dark:border-dark-text" />
          <h2 className="text-4xl mb-4">Free Coloring Book!</h2>
          <p className="font-body text-lg/relaxed flex-grow">
            Every preorder of "Jeffrey the Monster - Talent Show Magic" comes with a <span className="font-bold">FREE</span> digital coloring book featuring your favorite characters and scenes from the story.
          </p>
        </div>

        {/* Bonus 2: Limited Edition */}
        <div className="comic-panel p-8 flex flex-col items-center text-center">
          <Image src="/images/concept-art/margin-doodles.png" alt="Sketch doodles" width={400} height={300} className="object-cover mb-6 border-2 border-light-text dark:border-dark-text" />
          <h2 className="text-4xl mb-4">Ultra-Limited Edition</h2>
          <p className="font-body text-lg/relaxed flex-grow">
            The <span className="font-bold text-accent-purple dark:text-accent-purple">first three (3) preorders</span> will receive an exclusive, limited-edition script/sketch draft version of the book. This draft includes the original script and rough panel artwork, detailing the creative process from idea to final page.
          </p>
        </div>
      </div>

      <div className="text-center mt-12">
        <ComicButton href="/store">Preorder Now!</ComicButton>
      </div>
    </div>
  );
}
EOF

# --- app/store/page.tsx ---
echo "📄 Creating app/store/page.tsx..."
cat <<EOF > app/store/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Store | Jeffrey the Monster",
  description: "Preorder the book and get official 'Jeffrey the Monster' merchandise.",
};

export default function StorePage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:py-20">
        <div className="text-center">
            <h1 className="text-5xl md:text-7xl mb-6">Official Store</h1>
            <div className="comic-panel max-w-2xl mx-auto p-8">
                <h2 className="text-4xl mb-4">Coming Soon!</h2>
                <p className="font-body text-xl text-light-text-secondary dark:text-dark-text-secondary">
                    The official store is under construction. This is where the Shopify "Buy" button and other merchandise will live. Check back soon to preorder the book and get your gear!
                </p>
            </div>
        </div>
    </div>
  );
}
EOF

# --- app/characters/page.tsx ---
echo "📄 Creating app/characters/page.tsx..."
cat <<EOF > app/characters/page.tsx
import Image from "next/image";
import Link from "next/link";
import { characters } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Characters | Jeffrey the Monster",
  description: "Meet the cast of 'Jeffrey the Monster': Jeffrey, Barry, sMonty, and Sam.",
};

export default function CharactersPage() {
  const characterList = Object.values(characters);

  return (
    <div className="container mx-auto px-4 py-12 sm:py-20">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-7xl">Meet the Cast</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {characterList.map((char) => (
          <Link 
            href={\`/characters/\${char.id}\`} 
            key={char.id}
            className="group comic-panel p-4 flex flex-col items-center text-center transition-transform duration-200 hover:-translate-y-2"
          >
            <div className="w-full aspect-square relative mb-4 border-2 border-light-text dark:border-dark-text overflow-hidden">
              <Image
                src={char.image}
                alt={\`Portrait of \${char.name}\`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h2 className="text-3xl">{char.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
EOF

# --- app/characters/[name]/page.tsx ---
echo "📄 Creating app/characters/[name]/page.tsx..."
cat <<EOF > app/characters/[name]/page.tsx
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
    title: \`\${character.name} | Characters\`,
    description: \`Character bio for \${character.name} from Jeffrey the Monster.\`,
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
                alt={\`Full portrait of \${character.name}\`}
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
EOF

# --- 6. Add Placeholder Images (IMPORTANT) ---
echo "🖼️ Creating placeholder image directories..."
echo "IMPORTANT: Please add your actual image assets to the 'public/images' subdirectories."
echo "I have used the filenames from the design plan. Ensure they match exactly."
echo "Creating a placeholder hero image..."
mkdir -p public/images/characters
# Create a simple placeholder SVG
cat <<SVG > public/images/characters/hero-artwork.jpg.svg
<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#e0e0e0"/>
  <text x="50%" y="50%" font-family="sans-serif" font-size="30" fill="#888" text-anchor="middle" dy=".3em">Hero Artwork Placeholder (800x600)</text>
</svg>
SVG
# We can't add all images, but we'll remind the user.

echo "✅ Setup complete!"
echo ""
echo "--- Next Steps ---"
echo "1. IMPORTANT: Place your image files in the corresponding folders inside '/public/images/'."
echo "   - /public/images/logos/..."
echo "   - /public/images/characters/..."
echo "   - /public/images/concept-art/..."
echo "   Make sure the filenames match those in the code (e.g., 'current jeffrey logo homepage.PNG')."
echo "2. Run 'npm install' to install dependencies."
echo "3. Run 'npm run dev' to start the development server at http://localhost:3000."

