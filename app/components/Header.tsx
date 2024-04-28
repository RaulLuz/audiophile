"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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
  return (
    <header className="bg-secondary">
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

        <motion.button {...getOptions(5)}>
          <Image
            src="/svg/cart.svg"
            alt="Minicart Icon"
            width={23.33}
            height={20}
          />
        </motion.button>
      </div>
    </header>
  );
};

export default Header;
