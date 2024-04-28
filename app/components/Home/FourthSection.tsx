'use client'

import { motion } from "framer-motion";
import Link from "next/link";

const FourthSection = () => {
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
    className="max-w-[1110px] mx-auto bg-[url('/assets/home/desktop/image-speaker-zx7.jpg')] w-full h-[320px] rounded-[8px] pl-[95px] flex items-center mb-[48px]">
      <div>
        <div className="text-[28px] font-bold uppercase text-black tracking-[2px] mb-[32px]">
          ZX7 Speaker
        </div>
        <Link
          href="#"
          className={`text-black font-bold uppercase tracking-[1px] text-[13px] py-[15px] px-[30px] block max-w-[fit-content] border border-black bg-transparent hover:bg-black hover:text-white transition duration-200`}
        >
          See Product
        </Link>
      </div>
    </motion.section>
  );
};

export default FourthSection;
