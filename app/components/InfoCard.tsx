import Link from "next/link";
import { InfoCardProps } from "../types/InfoCard.d";

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
  const finalOpacity = newTextColor === "text-primary" ? "opacity-100" : "opacity-50";
  const finalTitleSize = textColor === "text-white" ? "text-[56px]" : "text-[40px]";
  const finalTitleLeading = textColor === "text-white" ? "leading-[58px]" : "leading-[44px]";

  return (
    <div className={cardSize}>
      {isNew && (
        <span
          className={`tracking-[10px] ${newTextColor} ${finalOpacity} uppercase text-[14px] font-normal mb-[24px] block`}
        >
          New product
        </span>
      )}
      <h2
        className={`${finalTitleSize} ${textColor} font-bold uppercase tracking-[2px] ${finalTitleLeading} mb-[24px]`}
      >
        {title}
      </h2>
      <p
        className={`${textColor} opacity-75 leading-[25px] text-[15px] mb-[40px]`}
      >
        {description}
      </p>
      <Link
        href={href}
        className={`text-white font-bold uppercase tracking-[1px] text-[13px] py-[15px] px-[30px] block max-w-[fit-content] ${buttonBg} ${buttonBgHover} transition duration-200`}
      >
        See Product
      </Link>
    </div>
  );
};

export default InfoCard;
