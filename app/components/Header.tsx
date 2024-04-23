import Image from "next/image";
import Link from "next/link";

const menuItems = ["home", "headphones", "speakers", "earphones"];

const Header = () => {
  return (
    <header className="bg-secondary">
      <div className="border-b border-white border-opacity-20 max-w-[1110px] mx-auto flex justify-between items-center relative py-[35px] ">
        <Link href="/">
          <Image
            src="/svg/logo.svg"
            alt="Audiophile Logo"
            width={143}
            height={25}
          />
        </Link>

        <ul className="flex gap-x-[34px] absolute left-1/2 -translate-x-1/2">
          {menuItems.map((item) => (
            <li
              key={item}
              className="font-bold text-[13px] text-white tracking-[2px] uppercase leading-[25px] cursor-pointer hover:text-primary transition duration-200"
            >
              <Link href={item === "home" ? "/" : "/categories/" + item}>
                {item}
              </Link>
            </li>
          ))}
        </ul>

        <button>
          <Image
            src="/svg/cart.svg"
            alt="Minicart Icon"
            width={23.33}
            height={20}
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
