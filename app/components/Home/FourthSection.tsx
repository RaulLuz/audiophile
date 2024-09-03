"use client";

import useMobile from "@/app/hooks/useMobile";
import { motion } from "framer-motion";
import Link from "next/link";

const FourthSection = () => {
  const { isTablet, isMobile } = useMobile();
  const currentBackground = isMobile
    ? "/assets/home/mobile/image-speaker-zx7.jpg"
    : isTablet
    ? "/assets/home/tablet/image-speaker-zx7.jpg"
    : "/assets/home/desktop/image-speaker-zx7.jpg";

  return (
    <motion.section
      initial={{ opacity: 0, translateX: 50 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      transition={{
        duration: 0.3,
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      viewport={{ once: true, margin: "0px 0px -150px 0px" }}
      className={`max-w-[1110px] mx-auto w-full h-[320px] rounded-[8px] pl-[95px] flex items-center mb-[48px] tablet:w-auto tablet:pl-[62px] tablet:mb-[32px] tablet:max-w-[689px] mobile:bg-[length:100%] mobile:bg-no-repeat mobile:max-w-full mobile:pl-[24px]`}
      style={{ backgroundImage: `url(${currentBackground})` }}
    >
      <div>
        <div className="text-[28px] font-bold uppercase text-black tracking-[2px] mb-[32px]">
          ZX7 Speaker
        </div>
        <Link
          href="/product/zx9-speaker"
          className={`text-black font-bold uppercase tracking-[1px] text-[13px] py-[15px] px-[30px] block max-w-[fit-content] border border-black bg-transparent hover:bg-black hover:text-white transition duration-200`}
        >
          See Product
        </Link>
      </div>
    </motion.section>
  );
};

export default FourthSection;
