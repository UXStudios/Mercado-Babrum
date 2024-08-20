"use client";
import { useState, useEffect } from "react";

export interface ProductsType {
  img: string;
  title: string;
  description: string;
}

export default function Card({ img, title, description }: ProductsType) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="flex w-full md:w-[calc(50%-16px)] lg:w-[calc(25%-24px)] flex-col gap-4">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      ) : (
        <div className="card card-compact skeleton bg-base-100 w-full md:w-[calc(50%-16px)] lg:w-[calc(25%-24px)] shadow-xl">
          <figure>
            <img src={img} alt={title} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Comprar</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
