import InfoCard from "../InfoCard";

const ThirdSection = () => {
  return (
    <section className="max-w-[1110px] mx-auto bg-primary rounded-[8px] relative w-full h-[560px] mb-[48px] flex justify-end items-center pr-[95px]">
      <img
        src="/images/zx9-speaker-section.png"
        alt="ZX9 Speaker"
        className="absolute left-0"
      />
      <div className="relative">
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
    </section>
  );
};

export default ThirdSection;
