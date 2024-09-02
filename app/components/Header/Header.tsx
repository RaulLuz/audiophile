"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useStore } from "../../context/StoreContext";
import { useState, useEffect } from "react";
import Cart from "../Cart/Cart";
import MenuItems from "./MenuItems";
import useMobile from "@/app/hooks/useMobile";
import HeaderMobile from "./HeaderMobile";
import Logo from "./Logo";
import CartIcon from "./CartIcon";

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
  const { isMobile } = useMobile();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return isMobile ? (
    <HeaderMobile />
  ) : (
    <>
      <header className="bg-secondary relative z-10">
        <div className="border-b border-white border-opacity-20 max-w-[1110px] mx-auto flex justify-between items-center relative py-[35px] ">
          <Cart />

          <motion.div {...getOptions(0)}>
            <Logo width={143} height={25} />
          </motion.div>

          <MenuItems />

          <motion.button
            {...getOptions(5)}
            onClick={() => setIsCartOpen(!isCartOpen)}
          >
            <CartIcon />
          </motion.button>
        </div>
      </header>
    </>
  );
};

export default Header;
