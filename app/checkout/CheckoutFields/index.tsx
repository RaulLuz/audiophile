import PaymentDetails from "./PaymentDetails";
import { fields } from "./fields";
import { z } from "zod";

const CheckoutFields = ({ errors, register, formDataSchema }: any) => {
  type formData = z.infer<typeof formDataSchema>;

  return (
    <div className="p-[48px] pt-[54px] rounded-[8px] bg-white max-w-[730px] tablet:max-w-full tablet:mb-[32px] mobile:p-[24px]">
      <h2 className="text-[32px] font-bold tracking-[1.14px] leading-[36px] uppercase mb-[41px] mobile:text-[28px] mobile:tracking-[1px] mobile:mb-[32px]">
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
                } flex flex-col mobile:w-full`}
              >
                <div className="flex justify-between">
                  <label
                    htmlFor={input.id}
                    className={`font-bold text-[12px] -tracking-[.21px] mb-[9px]  ${
                      errors[input.id as keyof formData]
                        ? "text-[#CD2C2C]"
                        : "text-black"
                    }`}
                  >
                    {input.label}
                  </label>
                  {errors[input.id as keyof formData] && (
                    <span className="text-[#CD2C2C] text-[12px] -tracking-[.21px] font-medium">
                      {errors[input.id as keyof formData]?.message}
                    </span>
                  )}
                </div>
                <input
                  type="text"
                  id={input.id}
                  {...register(input.id as keyof formData, { required: true })}
                  className={`h-[56px] ${
                    input.id === "address" ? "w-full" : "w-[309px] mobile:w-full"
                  } 
                  border 
                  ${
                    errors[input.id as keyof formData]
                      ? "border-[#CD2C2C] outline-[#CD2C2C]"
                      : "border-[#CFCFCF] outline-primary"
                  }
                  rounded-[8px] px-[24px] text-[14px] font-bold text-black -tracking-[.25px]`}
                />
              </div>
            ))}
          </div>
        </div>
      ))}

      <PaymentDetails
        register={register}
        errors={errors}
        formDataSchema={formDataSchema}
      />
    </div>
  );
};

export default CheckoutFields;
