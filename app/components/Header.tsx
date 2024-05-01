"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useStore } from "../context/StoreContext";

const menuItems = ["home", "headphones", "speakers", "earphones"];

const getOptions = (delay: number) => {
  return {
    initial: { opacity: 0, translateY: -100 },
    animate: { opacity: 1, translateY: 0 },
    transition: {
      duration: 0.1,
      delay: delay * 0.05,
      type: "spring",
      stiffness: 260,
      damping: 40,
    },
  };
};

const Header = () => {
  const { productsInCart, setIsCartOpen, isCartOpen } = useStore();

  return (
    <header className="bg-secondary relative z-10">
      <div className="border-b border-white border-opacity-20 max-w-[1110px] mx-auto flex justify-between items-center relative py-[35px] ">
        <motion.div {...getOptions(0)}>
          <Link href="/">
            <Image
              src="/svg/logo.svg"
              alt="Audiophile Logo"
              width={143}
              height={25}
            />
          </Link>
        </motion.div>

        <ul className="flex gap-x-[34px] absolute left-1/2 -translate-x-1/2">
          {menuItems.map((item, index) => (
            <motion.li
              {...getOptions(index + 1)}
              key={item}
              className="font-bold text-[13px] text-white tracking-[2px] uppercase leading-[25px] cursor-pointer hover:text-primary transition-colors duration-200"
            >
              <Link href={item === "home" ? "/" : "/categories/" + item}>
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>

        <motion.button {...getOptions(5)} className="relative" onClick={() => setIsCartOpen(!isCartOpen)}>
          <Image
            src="/svg/cart.svg" 
            alt="Minicart Icon"
            width={23.33}
            height={20}
          />
          <span className="bg-primary rounded-full w-4 h-4 flex items-center justify-center text-white text-[10px] absolute -top-[7px] -right-[7px]">{productsInCart.length}</span>
        </motion.button>
      </div>
    </header>
  );
};

export default Header;
