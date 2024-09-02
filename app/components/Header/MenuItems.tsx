import { motion } from "framer-motion";
import Link from "next/link";

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

const MenuItems = () => {
  return (
    <ul className="flex gap-x-[34px] absolute left-1/2 -translate-x-1/2 tablet:flex-col">
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
  );
};

export default MenuItems;
