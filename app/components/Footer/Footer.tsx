"use client";

import Image from "next/image";
import Link from "next/link";
import FacebookIcon from "./FacebookIcon";
import TwitterIcon from "./TwitterIcon";
import InstagramIcon from "./InstagramIcon";
import { motion } from "framer-motion";

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

const Footer = () => {
  return (
    <footer className="bg-secondary pt-[75px] pb-[48px] tablet:px-[40px] tablet:relative">
      <div className="max-w-[1110px] mx-auto relative">
        <span className="block absolute -top-[75px] left-0 w-[104px] h-[4px] bg-primary"></span>
        <div className="flex items-center justify-between mb-[36px] tablet:flex-col tablet:items-start">
          <motion.div {...getOptions(0)} className="tablet:mb-[32px]">
            <Image
              src="/svg/logo.svg"
              alt="Audiophile Logo"
              width={143}
              height={25}
            />
          </motion.div>

          <ul className="flex gap-x-[34px]">
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
        </div>
        <div className="flex items-end justify-between mb-[56px]">
          <motion.p
            {...getOptions(6)}
            className="text-white/[.5] text-[15px] leading-[25px] font-medium max-w-[530px] tablet:max-w-[100%]"
          >
            Audiophile is an all in one stop to fulfill your audio needs. We are
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we are open 7 days a week.
          </motion.p>

          <motion.div
            {...getOptions(7)}
            className="flex items-center gap-x-[16px] max-h-[24px] tablet:absolute tablet:bottom-0 tablet:right-0"
          >
            <Link href="">
              <FacebookIcon />
            </Link>
            <Link href="">
              <TwitterIcon />
            </Link>
            <Link href="">
              <InstagramIcon />
            </Link>
          </motion.div>
        </div>
        <motion.p
          {...getOptions(8)}
          className="text-white/[.5] text-[15px] leading-[25px] font-bold max-w-[530px]"
        >
          Copyright 2024. All Rights Reserved
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
