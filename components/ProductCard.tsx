// src/components/ProductCard.tsx

import Image from 'next/image';
import ShopifyBuyButton from './ShopifyBuyButton';
import { Product } from '../lib/data';


interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-gray-700 bg-gray-800">
      {/* Image Container */}
      <div className="relative h-64 w-full bg-gray-700">
        <Image
          src={product.primaryImage.src}
          alt={product.primaryImage.alt}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content Container */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-white">{product.title}</h3>
        <p className="mt-3 flex-1 text-base text-gray-300 whitespace-pre-line">
          {product.description}
        </p>
        
        {/* Shopify Buy Button */}
        <div className="mt-6">
          <ShopifyBuyButton 
            productId={product.shopifyProductId} 
            buttonText={product.buttonText} 
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
