const DescriptiveSection = () => {
  return (
    <section className="max-w-[1110px] mx-auto flex items-center justify-between mb-[200px]">
      <div className="max-w-[445px]">
        <h2 className="text-[40px] font-bold tracking-[1.43px] leading-[44px] text-black uppercase mb-[32px]">
          Bringing you the <span className="text-primary">best</span> audio gear
        </h2>
        <p className="font-normal text-black/[.5] leading-[25px] text-[15px] max-w-[440px]">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>

      <img src="/images/sixth-section.png" alt="Person using headphones" />
    </section>
  );
};

export default DescriptiveSection;
