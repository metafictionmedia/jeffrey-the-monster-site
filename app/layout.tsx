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
      <body className={`${inter.variable} ${bangers.variable} ${comicNeue.variable}`}>
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
