import Link from "next/link";

const FourthSection = () => {
  return (
    <section className="max-w-[1110px] mx-auto bg-[url('/assets/home/desktop/image-speaker-zx7.jpg')] w-full h-[320px] rounded-[8px] pl-[95px] flex items-center mb-[48px]">
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
    </section>
  );
};

export default FourthSection;
