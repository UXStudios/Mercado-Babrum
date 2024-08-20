"use client";

import { useState } from "react";

export default function Slider() {
  const [imgCount, setImgCount] = useState<number>(0);

  const items: string[] = [
    "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
    "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
    "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
  ];

  const prevImg = (props: number) => {
    setImgCount((imgCount) =>
      imgCount <= 0 ? items.length - props : imgCount - 1
    );
  };

  const nextImg = (props: number) => {
    setImgCount((imgCount) =>
      imgCount >= items.length - props ? 0 : imgCount + 1
    );
  };

  return (
    <main className="pt-[106px] pb-10 max-w-[1024px] px-4 md:px-8 mx-auto space-y-4">
      <div className="carousel w-full rounded-2xl">
        {items.map((item, index) => (
          <div
            key={index}
            className="carousel-item w-full transition duration-500"
            style={{ transform: `translateX(-${100 * imgCount}%)` }}
          >
            <img src={item} alt="seila" className="w-full" />
          </div>
        ))}
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={() => prevImg(1)}
          className="border border-[#444] text-[#444] text-xl size-10 flex items-center justify-center"
        >
          {"<-"}
        </button>
        <button
          onClick={() => nextImg(1)}
          className="border border-[#444] text-[#444] text-xl size-10 flex items-center justify-center"
        >
          {"->"}
        </button>
      </div>
    </main>
  );
}
