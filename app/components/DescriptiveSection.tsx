"use client";

import { motion } from "framer-motion";
import useMobile from "../hooks/useMobile";
import { useState, useEffect } from "react";

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
    viewport: { once: true, margin: "0px 0px -150px 0px" },
  };
};

const DescriptiveSection = () => {
  const { isTablet, isMobile } = useMobile();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    hydrated && (
      <section className="max-w-[1110px] mx-auto flex items-center justify-between mb-[200px] tablet:flex-col-reverse tablet:max-w-[689px] mobile:mb-[120px]">
        <div className="max-w-[445px] tablet:max-w-[573px] tablet:text-center flex flex-col items-center">
          <motion.h2
            {...getOptions(0)}
            className="text-[40px] font-bold tracking-[1.43px] leading-[44px] text-black uppercase mb-[32px] mobile:text-[28px] mobile:tracking-[1px] mobile:max-w-full mobile:leading-[35px]"
          >
            Bringing you the <span className="text-primary">best</span> audio
            gear
          </motion.h2>
          <motion.p
            {...getOptions(1)}
            className="font-normal text-black/[.5] leading-[25px] text-[15px] max-w-[440px] tablet:max-w-[570px] mobile:max-w-full"
          >
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, translateX: 50 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{
            duration: 1,
            delay: 3 * 0.1,
            type: "spring",
          }}
          viewport={{ once: true, margin: "0px 0px -150px 0px" }}
          className="tablet:mb-[63px] mobile:mb-[40px] mobile:w-full"
        >
          <img
            src={`/images/sixth-section${
              isMobile ? "-mobile" : isTablet ? "-tablet" : ""
            }.png`}
            alt="Person using headphones"
            className="mobile:w-full"
          />
        </motion.div>
      </section>
    )
  );
};

export default DescriptiveSection;
