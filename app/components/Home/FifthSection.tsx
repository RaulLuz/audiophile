"use client";

import useMobile from "@/app/hooks/useMobile";
import { motion } from "framer-motion";
import Link from "next/link";

const FifthSection = () => {
  const { isTablet, isMobile } = useMobile();

  return (
    <motion.section className="max-w-[1110px] mx-auto flex items-center justify-between mb-[200px] tablet:max-w-[689px] tablet:mb-[96px] mobile:flex-col mobile:max-w-full mobile:mb-[120px]">
      <motion.div
        initial={{ opacity: 0, translateX: -50 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{
          duration: 0.3,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        viewport={{ once: true, margin: "0px 0px -150px 0px" }}
      >
        <img
          src={`/assets/home/${
            isMobile ? "mobile" : isTablet ? "tablet" : "desktop"
          }/image-earphones-yx1.jpg`}
          alt="YX1 Earphones"
          className="rounded-[8px] tablet:max-w-[339px] mobile:max-w-full mobile:mb-[24px]"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, translateX: 50 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{
          duration: 0.3,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        viewport={{ once: true, margin: "0px 0px -150px 0px" }}
        className="w-[540px] h-[320px] flex flex-col justify-center pl-[95px] rounded-[8px] bg-grey tablet:w-[339px] tablet:pl-[41px] mobile:w-full mobile:pl-[24px] mobile:h-[200px]"
      >
        <div className="text-[28px] font-bold uppercase text-black tracking-[2px] mb-[32px]">
          YX1 Earphones
        </div>
        <Link
          href="/product/yx1-earphones"
          className={`text-black font-bold uppercase tracking-[1px] text-[13px] py-[15px] px-[30px] block max-w-[fit-content] border border-black bg-transparent hover:bg-black hover:text-white transition duration-200`}
        >
          See Product
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default FifthSection;
