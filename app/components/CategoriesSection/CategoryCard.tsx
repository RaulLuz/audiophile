'use client'

import { motion } from "framer-motion";
import Link from "next/link";

const CategoryCard = ({ category, index }: { category: string, index: number }) => {
  const images = {
    headphones: "category-headphones.png",
    speakers: "category-speakers.png",
    earphones: "category-earphones.png",
  };

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 50 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.3,
        delay: index * 0.1,
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      viewport={{ once: true }}
      key={category}
    >
      <Link
        href={`/categories/${category}`}
        className="w-[350px] h-[204px] bg-grey flex flex-col rounded-[8px] relative items-center justify-end group"
      >
        <img
          src={`/images/${images[category as keyof typeof images]}`}
          alt={category}
          className={`absolute ${
            category === "earphones" ? "-top-[60px]" : "-top-[75px]"
          }`}
        />

        <h3 className="uppercase text-[18px] font-bold tracking-[1.29px] text-black mb-[15px]">
          {category}
        </h3>

        <div className="flex items-center mb-[30px] transition duration-200 group-hover:text-primary">
          <div className="uppercase tracking-[1px] font-bold text-[13px] mr-[13px] -mb-[3px]">
            Shop
          </div>
          <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.3219 1L6.3219 6L1.3219 11"
              stroke="#D87D4A"
              strokeWidth="2"
            />
          </svg>
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;
