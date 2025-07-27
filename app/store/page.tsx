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
