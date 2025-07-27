"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ImageSlideshowProps {
  images: string[];
  interval?: number;
}

export default function ImageSlideshow({ images, interval = 3000 }: ImageSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative w-full h-full">
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Slideshow image ${index + 1}`}
          fill
          priority={index === 0}
          className={cn(
            'object-cover transition-opacity duration-1000 ease-in-out',
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          )}
        />
      ))}
    </div>
  );
}
