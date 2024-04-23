import Image from "next/image";
import Link from "next/link";
import FacebookIcon from "./FacebookIcon";
import TwitterIcon from "./TwitterIcon";
import InstagramIcon from "./InstagramIcon";

const menuItems = ["home", "headphones", "speakers", "earphones"];

const Footer = () => {
  return (
    <footer className="bg-secondary pt-[75px] pb-[48px]">
      <div className="max-w-[1110px] mx-auto relative">
        <span className="block absolute -top-[75px] left-0 w-[104px] h-[4px] bg-primary"></span>
        <div className="flex items-center justify-between mb-[36px]">
          <Image
            src="/svg/logo.svg"
            alt="Audiophile Logo"
            width={143}
            height={25}
          />

          <ul className="flex gap-x-[34px]">
            {menuItems.map((item) => (
              <li
                key={item}
                className="font-bold text-[13px] text-white tracking-[2px] uppercase leading-[25px] cursor-pointer hover:text-primary transition duration-200"
              >
                <Link href={item === "home" ? "/" : "/categories/" + item}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-end justify-between mb-[56px]">
          <p className="text-white/[.5] text-[15px] leading-[25px] font-medium max-w-[530px]">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>

          <div className="flex items-center gap-x-[16px] max-h-[24px]">
            <Link href="">
              <FacebookIcon />
            </Link>
            <Link href="">
              <TwitterIcon />
            </Link>
            <Link href="">
              <InstagramIcon />
            </Link>
          </div>
        </div>
        <p className="text-white/[.5] text-[15px] leading-[25px] font-bold max-w-[530px]">
          Copyright 2024. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
