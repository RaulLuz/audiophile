import { useState } from "react";
import { paymentMethods, eMoneyFields } from "./fields";
import Image from "next/image";
import { z } from "zod";

const PaymentDetails = ({ errors, register, formDataSchema }: any) => {
  const [selectedMethod, setSelectedMethod] = useState("");
  type formData = z.infer<typeof formDataSchema>;


  return (
    <div>
      <div className="font-bold text-[13px] text-primary tracking-[.93px] leading-[25px] uppercase mb-[16px]">
        Payment Details
      </div>

      <span className="font-bold text-[12px] -tracking-[.21px] mb-[9px] block">
        Payment Method
      </span>

      <div
        className={`${
          selectedMethod === "cash" ? "" : "mb-[34px]"
        } w-full flex gap-x-[16px] mobile:flex-col mobile:gap-y-[16px]`}
      >
        {paymentMethods.map((method) => (
          <button
            key={method.id}
            onClick={() => setSelectedMethod(method.id)}
            type="button"
            className={`border ${
              selectedMethod === method.id
                ? "border-primary"
                : "border-[#CFCFCF]"
            } rounded-[8px] h-[56px] w-full flex items-center pl-[16px] hover:border-primary transition transition-300`}
          >
            <div className="w-[20px] h-[20px] border border-[#CFCFCF] rounded-full mr-[16px] flex items-center justify-center">
              <div
                className={`${
                  selectedMethod === method.id
                    ? "visible opacity-100"
                    : "invisible opacity-0"
                } w-[10px] h-[10px] rounded-full bg-primary transition transition-300`}
              ></div>
            </div>
            <div className="font-bold text-[14px] -tracking-[.25px] text-black">
              {method.name}
            </div>
          </button>
        ))}
      </div>
      {selectedMethod === "e-money" ? (
        <div className="w-full flex gap-x-[16px] mobile:flex-col mobile:gap-y-[16px]">
          {eMoneyFields.map((field) => (
            <div
              key={field.id}
              className={`${
                field.id === "address" ? "w-full" : ""
              } flex flex-col`}
            >
              <label
                htmlFor={field.id}
                className="font-bold text-[12px] -tracking-[.21px] mb-[9px]"
              >
                {field.label}
              </label>
              <input
                type="text"
                id={field.id}
                {...register(field.id as keyof formData, { required: true })}
                  className={`h-[56px] ${
                    field.id === "address" ? "w-full" : "w-[309px] mobile:w-full"
                  } 
                  border border-[#CFCFCF]
                  ${
                    errors[field.id as keyof formData]
                      ? "border-[#CD2C2C] outline-[#CD2C2C]"
                      : ""
                  }
                  rounded-[8px] px-[24px] text-[14px] font-bold text-black -tracking-[.25px] outline-primary`}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center gap-x-[32px] mt-[34px] mobile:flex-col mobile:gap-y-[16px]">
          <Image
            src="/svg/checkout.svg"
            alt="Checkout"
            width={48}
            height={48}
          />
          <p className="text-[15px] text-black/50 leading-[25px] font-medium">
            The Cash on Delivery option enables you to pay in cash when our
            delivery courier arrives at your residence. Just make sure your
            address is correct so that your order will not be cancelled.
          </p>
        </div>
      )}
    </div>
  );
};

export default PaymentDetails;
