"use client";

import Link from "next/link";
import { InfoCardProps } from "../types/InfoCard.d";
import { motion } from "framer-motion";

const getOptions = (delay: number) => {
  return {
    initial: { opacity: 0, translateX: -50 },
    whileInView: { opacity: 1, translateX: 0 },
    transition: {
      duration: 0.3,
      delay: delay * 0.1,
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
    viewport: { once: true },
  };
};

const InfoCard = ({
  isNew,
  cardSize,
  textColor,
  newTextColor,
  title,
  description,
  buttonBg,
  buttonBgHover,
  href,
}: InfoCardProps) => {
  const finalOpacity =
    newTextColor === "text-primary" ? "opacity-100" : "opacity-50";
  const finalTitleSize =
    textColor === "text-white" ? "text-[56px]" : "text-[40px]";
  const finalTitleLeading =
    textColor === "text-white" ? "leading-[58px]" : "leading-[44px]";

  return (
    <div className={`${cardSize} tablet:flex tablet:flex-col tablet:items-center tablet:relative tablet:z-10`}>
      {isNew && (
        <motion.span
          {...getOptions(0)}
          className={`tracking-[10px] ${newTextColor} ${finalOpacity} uppercase text-[14px] font-normal mb-[24px] block`}
        >
          New product
        </motion.span>
      )}
      <motion.h2
        {...getOptions(1)}
        className={`${finalTitleSize} ${textColor} font-bold uppercase tracking-[2px] ${finalTitleLeading} mb-[24px] tablet:text-center`}
      >
        {title}
      </motion.h2>
      <motion.p
        {...getOptions(2)}
        className={`${textColor} opacity-75 leading-[25px] text-[15px] mb-[40px] tablet:text-center`}
      >
        {description}
      </motion.p>
      <motion.div {...getOptions(3)}>
        <Link
          href={href}
          className={`text-white font-bold uppercase tracking-[1px] text-[13px] py-[15px] px-[30px] block max-w-[fit-content] ${buttonBg} ${buttonBgHover} transition duration-200`}
        >
          See Product
        </Link>
      </motion.div>
    </div>
  );
};

export default InfoCard;
