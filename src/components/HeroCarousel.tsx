"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface Slide {
  src: string;
  alt: string;
}

const slides: Slide[] = [
  { src: "/images/hero-images/head-office.jpg", alt: "Head Office" },
  { src: "/images/hero-images/wheels.jpg", alt: "Collection of Grinding Wheels" },
  { src: "/images/hero-images/demolition-hammer.jpg", alt: "Marksman power tools on site" },
];

const SLIDE_INTERVAL = 5000; // 5 s

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  // Auto-advance
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-screen overflow-hidden">
      {/* Wrapper keeps 16 : 9 on md+, 4 : 3 on mobile */}
      <div className="relative aspect-[4/3] sm:aspect-[16/9]">
        {slides.map((slide, i) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover object-center transition-opacity duration-700
                        ${i === index ? "opacity-100" : "opacity-0"}`}
          />
        ))}

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Headline */}
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-3xl font-semibold md:text-5xl lg:text-6xl">
          Family-owned&nbsp;since&nbsp;1996
        </h1>

        {/* Dot indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-3 w-3 rounded-full border border-white
                          ${i === index ? "bg-white" : "bg-transparent"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
