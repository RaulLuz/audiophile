"use client";

import GoBackButton from "../components/GoBackButton";
import CheckoutFields from "./CheckoutFields";
import Summary from "./Summary";

const page = () => {
  return (
    <section className="bg-[#F1F1F1] pb-[141px]">
      <div className="max-w-[1110px] mx-auto">
        <GoBackButton />

        <div className="flex gap-x-[30px]">
          <CheckoutFields />
          <Summary />
        </div>
      </div>
    </section>
  );
};

export default page;
