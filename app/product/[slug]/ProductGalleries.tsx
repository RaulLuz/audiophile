"use client";

import { IProduct } from "@/app/types/products";
import { motion } from "framer-motion";

const ProductGallery = ({ product }: { product: IProduct }) => {
  const firstImg = product.gallery.first.desktop;
  const secondImg = product.gallery.second.desktop;
  const thirdImg = product.gallery.third.desktop;

  return (
    <section className="flex mb-[160px] tablet:mb-[120px] mobile:flex-col">
      <motion.div
        initial={{ opacity: 0, translateX: -50 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{
          duration: 1,
          delay: 3 * 0.1,
          type: "spring",
        }}
        viewport={{ once: true, margin: "0px 0px -150px 0px" }}
        className="mr-[32px] tablet:mr-[20px] mobile:mb-[20px] mobile:mr-0"
      >
        <img
          src={firstImg}
          alt={product.name}
          className="rounded-[8px] mb-[32px] tablet:mb-[20px] mobile:w-full"
        />
        <img
          src={secondImg}
          alt={product.name}
          className="rounded-[8px] mobile:w-full"
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
        viewport={{ once: true, margin: "0px 0px -150px 0px" }}
      >
        <img
          src={thirdImg}
          alt={product.name}
          className="rounded-[8px] mobile:w-full"
        />
      </motion.div>
    </section>
  );
};

export default ProductGallery;
