"use client";

import { z } from "zod";
import GoBackButton from "../components/GoBackButton";
import CheckoutFields from "./CheckoutFields";
import Summary from "./Summary";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import SuccessModal from "./SuccessModal";

const formDataSchema = z.object({
  name: z.string().min(3, { message: "Full name required" }),
  email: z.string().email("Wrong format"),
  phone: z.string().min(6, { message: "Wrong format" }),
  address: z.string().min(1, { message: "This field is required" }),
  "zip-code": z.string().min(3, { message: "This field is required" }),
  city: z.string().min(3, { message: "This field is required" }),
  country: z.string().min(3, { message: "This field is required" }),
  'e-money-number': z.string().optional(),
  'e-money-pin': z.string().optional()
});

export type formData = z.infer<typeof formDataSchema>;

const Checkout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<formData>({ resolver: zodResolver(formDataSchema) });

  const sendFormData = (data: formData) => {
    console.log({ data });
  };

  return (
    <>
      <section className="bg-[#F1F1F1] pb-[141px] tablet:px-[39px] tablet:pb-[116px] mobile:px-[24px] mobile:pb-[97px]">
        <div className="max-w-[1110px] mx-auto">
          <GoBackButton />

          <form
            onSubmit={handleSubmit(sendFormData)}
            className="flex gap-x-[30px] tablet:flex-col"
          >
            <CheckoutFields
              register={register}
              errors={errors}
              formDataSchema={formDataSchema}
            />
            <Summary />
          </form>
        </div>
      </section>
      {isSubmitSuccessful && <SuccessModal />}
    </>
  );
};

export default Checkout;
