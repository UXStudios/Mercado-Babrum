"use client";
import { useState, useEffect } from "react";

export interface ProductsType {
  img: string;
  title: string;
  description: string;
  price: number;
}

export default function Card({ img, title, description, price }: ProductsType) {
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
            <div className="flex text-lg">
              <div className="mask mask-star size-4 bg-amber-400" />
              <div className="mask mask-star size-4 bg-amber-400" />
              <div className="mask mask-star size-4 bg-amber-400" />
              <div className="mask mask-star size-4 bg-amber-400" />
              <div className="mask mask-star mask-half-1 w-2 h-4 bg-amber-400" />
            </div>
            <div className="flex justify-between items-center">
              <h2 className="card-title">{title}</h2>
              <div className="badge badge-md">R$ {price}</div>
            </div>
            <p>{description}</p>
            <div className="flex items-center justify-between">
              <button className="btn btn-primary">Detalhes</button>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
