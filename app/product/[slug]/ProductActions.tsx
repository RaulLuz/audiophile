"use client";

import { IProduct } from "@/app/types/products";
import Image from "next/image";
import AddToCart from "./AddToCart";
import GoBackButton from "@/app/components/GoBackButton";
import useMobile from "@/app/hooks/useMobile";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ProductActions = ({ product }: { product: IProduct }) => {
  const { isMobile, isTablet } = useMobile();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  const imageSrc = hydrated
    ? isMobile
      ? product.image.mobile
      : isTablet
      ? product.image.tablet
      : product.image.desktop
    : product.image.desktop;

  return (
    <section className="mb-[160px] tablet:mb-[120px]">
      <motion.div
        initial={{ opacity: 0, translateY: -50 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{
          duration: 1,
          delay: 3 * 0.1,
          type: "spring",
        }}
        viewport={{ once: true, margin: "0px 0px -150px 0px" }}
      >
        <GoBackButton />
      </motion.div>
      <div className="flex items-center justify-between mb-[160px] tablet:gap-x-[69px] mobile:flex-col mobile:mb-[88px]">
        <motion.div
          initial={{ opacity: 0, translateX: -50 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{
            duration: 1,
            delay: 3 * 0.1,
            type: "spring",
          }}
          viewport={{ once: true, margin: "0px 0px -150px 0px" }}
        >
          <Image
            src={imageSrc}
            width={540}
            height={560}
            alt={product.name}
            className="rounded-[8px] tablet:w-[281px] tablet:h-auto mobile:w-full mobile:mb-[32px]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, translateX: 50 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{
            duration: 1,
            delay: 3 * 0.1,
            type: "spring",
          }}
          viewport={{ once: true, margin: "0px 0px -150px 0px" }} className="max-w-[445.5px] mobile:max-w-full">
          {product.new && (
            <span className="tracking-[10px] uppercase text-[14px] text-primary font-normal mb-[16px] block tablet:text-[12px] tablet:tracking-[8.57px] mobile:text-[14px] mobile:mb-[24px]">
              New product
            </span>
          )}
          <h2 className="font-bold uppercase text-[40px] tracking-[1.43px] leading-[44px] mb-[32px] tablet:text-[28px] tablet:max-w-[200px] tablet:leading-[32px] mobile:mb-[24px]">
            {product.name}
          </h2>
          <p className="opacity-50 leading-[25px] text-[15px] mb-[32px] text-black mobile:mb-[24px]">
            {product.description}
          </p>
          <div className="font-bold text-[18px] tracking-[1.29px] text-black mb-[47px] mobile:mb-[31px]">
            $ {product.price.toLocaleString("en-US", { currency: "USD" })}
          </div>

          <AddToCart product={product} />
        </motion.div>
      </div>
    </section>
  );
};

export default ProductActions;
