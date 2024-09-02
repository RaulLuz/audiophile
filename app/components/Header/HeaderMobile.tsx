import React, { useState } from "react";
import MenuItems from "./MenuItems";
import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "./Logo";
import Cart from "../Cart/Cart";
import CartIcon from "./CartIcon";
import { useStore } from "@/app/context/StoreContext";
import { IProduct } from "@/app/types/products";
import fetchProducts from "@/app/utils/fetchProducts";
import CategoryCard from "../CategoriesSection/CategoryCard";

const variants = {
  open: {
    x: 0,
    transition: { stiffness: 10 },
  },
  closed: {
    x: "-100%",
    transition: { stiffness: 1000 },
  },
};

const variantsOverlay = {
  open: {
    opacity: 0.5,
    visibility: "visible",
  },
  closed: {
    opacity: 0,
    visibility: "hidden",
  },
};

const HeaderMobile = () => {
  const { setIsCartOpen, products } = useStore();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const correctOrder = ["headphones", "speakers", "earphones"];
  const categories = [...new Set(products.map((product) => product.category))];
  const sortedCategories = correctOrder.filter((category) =>
    categories.includes(category)
  );

  return (
    <>
      <header className="bg-black w-full sticky -top-[1px] z-50">
        <div className="flex items-center justify-between max-w-[689px] mx-auto py-[32px] px-[24px] border-b border-white/10 relative">
          <Cart />

          <div className="flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="mr-[42px]"
            >
              <Image
                src={
                  isMenuOpen ? "/svg/drawer-close.svg" : "/svg/hamburger.svg"
                }
                width={16}
                height={16}
                alt="Open menu"
              />
            </button>
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Logo width={143} height={25} />
          </div>
          <button onClick={() => setIsCartOpen(true)}>
            <CartIcon />
          </button>
        </div>
      </header>
      <motion.nav
        initial={false}
        animate={isMenuOpen ? "open" : "closed"}
        variants={variants}
        className="w-[100vw] h-[100vh] bg-white fixed top-[84.44px] left-0 max-w-[450px] pt-[90px] pb-[130px] flex flex-col items-center gap-y-[68px] px-[24px] overflow-y-auto z-30 tablet:flex-row tablet:max-w-[100%] tablet:h-auto mobile:flex-col tablet:px-[40px] tablet:justify-between tablet:pt-[108px] tablet:pb-[67px]"
      >
        {sortedCategories.map((category, index) => (
          <CategoryCard
            key={category}
            category={category}
            index={index}
            mobileHeader={true}
          />
        ))}
      </motion.nav>
      <motion.div
        initial={false}
        animate={isMenuOpen ? "open" : "closed"}
        variants={variantsOverlay}
        className="fixed inset-0 bg-black bg-opacity-50 z-20"
        onClick={() => setIsMenuOpen(false)}
      />
    </>
  );
};

export default HeaderMobile;
