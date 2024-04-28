"use client";

import { Product } from "@/app/types/products";
import React from "react";
import InfoCard from "../InfoCard";
import Image from "next/image";
import { motion } from "framer-motion";

const MainSection = ({ products }: { products: Product[] }) => {
  const mainProduct = products.find((product) => product.id === 4);

  if (!mainProduct) return;

  return (
    <section className="bg-secondary">
      <div className="max-w-[1110px] mx-auto flex items-center gap-x-[40px]">
        <InfoCard
          isNew={true}
          textColor="text-white"
          newTextColor="text-white"
          cardSize="w-[400px]"
          title={mainProduct.name}
          description={mainProduct.description}
          buttonBg="bg-primary"
          buttonBgHover="hover:bg-primary-light"
          href={`/product/${mainProduct.slug}`}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 3 * 0.1,
            type: "spring",
          }}
        >
          <Image
            src="/images/home-main-product.png"
            alt="XX99 Mark II Headphones"
            width={675}
            height={674}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default MainSection;
