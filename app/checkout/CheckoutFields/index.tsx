import { useState, useEffect } from "react";
import PaymentDetails from "./PaymentDetails";
import { fields } from "./fields";

const CheckoutFields = () => {
  return (
    <div className="p-[48px] pt-[54px] rounded-[8px] bg-white max-w-[730px]">
      <h2 className="text-[32px] font-bold tracking-[1.14px] leading-[36px] uppercase mb-[41px]">
        Checkout
      </h2>

      {fields.map((field) => (
        <div key={field.title} className="mb-[53px]">
          <div className="font-bold text-[13px] text-primary tracking-[.93px] leading-[25px] uppercase mb-[16px]">
            {field.title}
          </div>

          <div className="flex flex-wrap items-center gap-x-[16px] gap-y-[24px]">
            {field.input.map((input) => (
              <div
                key={input.id}
                className={`${
                  input.id === "address" ? "w-full" : ""
                } flex flex-col`}
              >
                <label
                  htmlFor={input.id}
                  className="font-bold text-[12px] -tracking-[.21px] mb-[9px]"
                >
                  {input.label}
                </label>
                <input
                  type="text"
                  id={input.id}
                  className={` h-[56px] ${
                    input.id === "address" ? "w-full" : "w-[309px]"
                  } border border-[#CFCFCF] rounded-[8px] px-[24px] text-[14px] font-bold text-black -tracking-[.25px] outline-primary`}
                />
              </div>
            ))}
          </div>
        </div>
      ))}

      <PaymentDetails />
    </div>
  );
};

export default CheckoutFields;
