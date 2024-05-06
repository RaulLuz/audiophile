"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const FifthSection = () => {
  return (
    <motion.section className="max-w-[1110px] mx-auto flex items-center justify-between mb-[200px]">
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
          src="/assets//home/desktop/image-earphones-yx1.jpg"
          alt="YX1 Earphones"
          className="rounded-[8px]"
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
        className="w-[540px] h-[320px] flex flex-col justify-center pl-[95px] rounded-[8px] bg-grey"
      >
        <div className="text-[28px] font-bold uppercase text-black tracking-[2px] mb-[32px]">
          YX1 Earphones
        </div>
        <Link
          href="#"
          className={`text-black font-bold uppercase tracking-[1px] text-[13px] py-[15px] px-[30px] block max-w-[fit-content] border border-black bg-transparent hover:bg-black hover:text-white transition duration-200`}
        >
          See Product
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default FifthSection;
