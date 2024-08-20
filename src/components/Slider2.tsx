"use client";
import { useRef, useState, useEffect } from "react";

export default function Slider2() {
  const images = [
    "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
    "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
    "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
  ];

  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    if (carouselRef.current) {
      const handleScroll = () => {
        const index = Math.round(
          carouselRef.current!.scrollLeft / window.innerWidth
        );
        setCurrentIndex(index);
      };

      carouselRef.current.addEventListener("scroll", handleScroll);

      return () => {
        carouselRef.current?.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: index * window.innerWidth,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const scrollNext = () => {
    if (carouselRef.current) {
      const maxIndex = images.length - 1;
      const nextIndex = currentIndex === maxIndex ? 0 : currentIndex + 1;
      scrollToIndex(nextIndex);
    }
  };

  const scrollPrev = () => {
    if (carouselRef.current) {
      const maxIndex = images.length - 1;
      const prevIndex = currentIndex === 0 ? maxIndex : currentIndex - 1;
      scrollToIndex(prevIndex);
    }
  };

  return (
    <div className="relative">
      <div
        ref={carouselRef}
        className="flex overflow-x-scroll snap-x snap-mandatory scroll-smooth"
      >
        {images.map((src, index) => (
          <div key={index} className="min-w-full flex-shrink-0 snap-start">
            <img
              src={src}
              alt={`Imagem ${index + 1}`}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
      <button
        onClick={scrollPrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white px-3 py-1 rounded"
      >
        Anterior
      </button>
      <button
        onClick={scrollNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white px-3 py-1 rounded"
      >
        Próxima
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-blue-600" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
