"use client";

import useMobile from "@/app/hooks/useMobile";
import { IProduct } from "@/app/types/products";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const ProductRelated = ({ product }: { product: IProduct }) => {
  const relatedProducts = product.others;
  const { isMobile, isTablet } = useMobile();

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <section className="mb-[40px]">
      <h3 className="font-bold text-[32px] text-black tracking-[1.14px] leading-[36px] uppercase mb-[64px] text-center tablet:mb-[56px] mobile:text-[24px] mobile:mb-[40px]">
        You may also like
      </h3>

      <div className="flex items-center justify-between tablet:gap-x-[11px] mobile:flex-col">
        {relatedProducts.map(({ image, name, slug }) => (
          <div key={slug} className="flex flex-col items-center mobile:mb-[56px] mobile:w-full">
            <Image
              src={
                hydrated
                  ? isMobile
                    ? image.mobile
                    : isTablet
                    ? image.tablet
                    : image.desktop
                  : image.desktop
              }
              alt={name}
              width={350}
              height={318}
              className="rounded-[8px] mb-[40px] tablet:w-full tablet:h-auto mobile:mb-[32px]"
            />

            <h4 className="font-bold text-[24px] text-black tracking-[1.71px] uppercase mb-[32px]">
              {name}
            </h4>

            <Link
              href={slug}
              className="bg-primary hover:bg-primary-light text-white font-bold uppercase tracking-[1px] text-[13px] w-[160px] h-[48px] flex items-center justify-center transition duration-200"
            >
              See Product
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductRelated;
