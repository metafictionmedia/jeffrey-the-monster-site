import type { Metadata } from "next";
import { storeProducts } from "../../lib/data";
import  ProductCard  from "../../components/ProductCard";

export const metadata: Metadata = {
  title: "Store | Jeffrey the Monster",
  description: "Preorder the book and get official 'Jeffrey the Monster' merchandise.",
};

export default function StorePage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:py-20">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-7xl mb-4">Official Store</h1>
        <p className="font-body text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
          Get official 'Jeffrey the Monster' merchandise. Every purchase helps support the creation of future stories!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {storeProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
