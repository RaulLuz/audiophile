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
  const finalTitleSize =
    textColor === "text-white" ? "text-[56px] mobile:text-[36px]" : "text-[40px] mobile:text-[28px]";
  const finalTitleLeading =
    textColor === "text-white" ? "leading-[58px]" : "leading-[44px]";
    const finalCardSize = cardSize == "w-[445px]" ? "w-[445px] mobile:w-[100%] mobile:mx-auto" : cardSize;

  return (
    <div className={`${finalCardSize} tablet:flex tablet:flex-col tablet:items-center tablet:relative tablet:z-10`}>
      {isNew && (
        <motion.span
          {...getOptions(0)}
          className={`tracking-[10px] ${newTextColor} uppercase text-[14px] font-normal mb-[24px] block`}
        >
          New product
        </motion.span>
      )}
      <motion.h2
        {...getOptions(1)}
        className={`font-bold uppercase tracking-[2px]  mb-[24px] tablet:text-center  mobile:tracking-[1.29px] mobile:leading-[40px] ${finalTitleSize} ${textColor} ${finalTitleLeading}`}
      >
        {title}
      </motion.h2>
      <motion.p
        {...getOptions(2)}
        className={`${textColor == "text-white" ? "text-[#FFFFFFbf]" : "text-[#00000080]"} opacity-75 leading-[25px] text-[15px] mb-[40px] tablet:text-center mobile:max-w-[80%]`}
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
