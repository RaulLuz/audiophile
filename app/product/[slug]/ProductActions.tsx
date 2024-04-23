"use client";

import { Product } from "@/app/types/products";
import { useRouter } from "next/navigation";
import Image from "next/image";
import AddToCart from "./AddToCart";

const ProductActions = ({ product }: { product: Product }) => {
  const router = useRouter();

  return (
    <section className="mb-[160px]">
      <button onClick={() => router.back()} className="mb-[56px] mt-[79px] text-[15px] leading-[25px] font-medium text-black/[.5]">Go back</button>
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
          <div className="font-bold text-[18px] tracking-[1.29px] text-black mb-[47px]">$ {product.price.toLocaleString("en-US", { currency: "USD" })}</div>

          <AddToCart />
        </div>
      </div>
    </section>
  );
};

export default ProductActions;
