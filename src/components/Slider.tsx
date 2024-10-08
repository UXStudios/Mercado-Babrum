"use client";
import { useRef, useState, useEffect } from "react";

export default function Slider() {
  const images = [
    "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
    "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
    "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
  ];
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      const handleScroll = () => {
        const index = Math.round(
          carouselRef.current!.scrollLeft / carouselRef.current!.clientWidth
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
        left: index * carouselRef.current.clientWidth,
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
    <div className="relative max-w-[1024px] mx-auto px-4 md:px-8">
      <div
        ref={carouselRef}
        className="flex overflow-x-scroll snap-x snap-mandatory scroll-smooth rounded-2xl [scrollbar-width:none]"
        style={{ width: "100%" }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 snap-start"
            style={{ width: "100%" }}
          >
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
        {"<-"}
      </button>
      <button
        onClick={scrollNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white px-3 py-1 rounded"
      >
        {"->"}
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`w-3 h-3 rounded-full duration-300 ${
              currentIndex === index ? "bg-blue-600" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
