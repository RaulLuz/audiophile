"use client";

import { motion } from "framer-motion";
import InfoCard from "../InfoCard";
import useMobile from "@/app/hooks/useMobile";

const ThirdSection = () => {
  const { isMobile } = useMobile();
  const currentImage = isMobile
    ? "zx9-speaker-section-tablet.png"
    : "zx9-speaker-section.png";

  console.log({ isMobile });

  return (
    <motion.section
      initial={{ opacity: 0, translateX: -50 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      transition={{
        duration: 0.3,
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      viewport={{ once: true, margin: "0px 0px -150px 0px" }}
      className="max-w-[1110px] mx-auto bg-primary rounded-[8px] relative w-full h-[560px] mb-[48px] flex justify-end items-center pr-[95px] tablet:w-auto tablet:h-[720px] tablet:mb-[32px] tablet:max-w-[689px]"
    >
      <motion.img
        initial={{ opacity: 0, translateX: -50 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{
          duration: 0.3,
          type: "spring",
          delay: 0.7,
          stiffness: 260,
          damping: 20,
        }}
        viewport={{ once: true }}
        src={`/images/${currentImage}`}
        alt="ZX9 Speaker"
        className="absolute left-0"
      />
      <div className="relative tablet:absolute tablet:left-1/2 tablet:transform tablet:-translate-x-1/2 tablet:bottom-[64px]">
        <InfoCard
          isNew={false}
          textColor="text-white"
          newTextColor="text-white"
          cardSize="w-[349px]"
          title="ZX9 Speaker"
          description="Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound."
          buttonBg="bg-black"
          buttonBgHover="hover:bg-[#4C4C4C]"
          href="/product/zx9-speaker"
        />
      </div>
    </motion.section>
  );
};

export default ThirdSection;
