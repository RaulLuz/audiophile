"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IProduct } from "@/app/types/products";
const CategoryProductImg = ({
  product,
  index,
}: {
  product: IProduct;
  index: number;
}) => {
  return (
    <motion.div
      initial={
        index % 2 === 0
          ? { opacity: 0, translateX: -50 }
          : { opacity: 0, translateX: 50 }
      }
      whileInView={{ opacity: 1, translateX: 0 }}
      transition={{
        duration: 1,
        delay: 3 * 0.1,
        type: "spring",
      }}
      viewport={{ once: true, margin: "0px 0px -150px 0px" }}
    >
      <Image
        src={product.categoryImage.desktop}
        width={540}
        height={560}
        alt={product.name}
        className="tablet:w-[689px] tablet:h-auto tablet:mx-auto mobile:w-[88%]"
      />
    </motion.div>
  );
};

export default CategoryProductImg;
