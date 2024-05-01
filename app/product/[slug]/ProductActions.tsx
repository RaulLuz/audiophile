"use client";

import { IProduct } from "@/app/types/products";
import Image from "next/image";
import AddToCart from "./AddToCart";
import GoBackButton from "@/app/components/GoBackButton";

const ProductActions = ({ product }: { product: IProduct }) => {
  return (
    <section className="mb-[160px]">
      <GoBackButton />
      <div className="flex items-center justify-between mb-[160px]`">
        <Image
          src={product.categoryImage.desktop}
          width={540}
          height={560}
          alt={product.name}
        />

        <div className="max-w-[445.5px]">
          {product.new && (
            <span className="tracking-[10px] uppercase text-[14px] text-primary font-normal mb-[16px] block">
              New product
            </span>
          )}
          <h2 className="font-bold uppercase text-[40px] tracking-[1.43px] leading-[44px] mb-[32px]">
            {product.name}
          </h2>
          <p className="opacity-50 leading-[25px] text-[15px] mb-[32px] text-black">
            {product.description}
          </p>
          <div className="font-bold text-[18px] tracking-[1.29px] text-black mb-[47px]">
            $ {product.price.toLocaleString("en-US", { currency: "USD" })}
          </div>

          <AddToCart product={product} />
        </div>
      </div>
    </section>
  );
};

export default ProductActions;
