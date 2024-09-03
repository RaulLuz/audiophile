import { IProduct } from "@/app/types/products";
import React from "react";
import Markdown from "react-markdown";

const ProductFeatures = ({ product }: { product: IProduct }) => {
  return (
    <section className="flex justify-between mb-[160px] tablet:flex-col tablet:gap-y-[120px] tablet:mb-[120px] mobile:gap-y-[88px] mobile:mb-[88px]">
      <div>
        <h3 className="font-bold text-[32px] text-black tracking-[1.14px] leading-[36px] uppercase mb-[32px] mobile:text-[24px] mobile:mb-[24px]">
          Features
        </h3>
        <Markdown className="prose max-w-[635px] font-medium text-[15px] leading-[25px] text-[#00000080]">
          {product.features}
        </Markdown>
      </div>
      <div className="tablet:flex tablet:gap-x-[168px] mobile:flex-col">
        <h3 className="font-bold text-[32px] text-black tracking-[1.14px] leading-[36px] uppercase mb-[32px] mobile:text-[24px] mobile:mb-[24px]">
          In the box
        </h3>
        <div>
          {product.includes.map((item, index) => (
            <div
              key={index}
              className="text-[15px] leading-[25px] font-medium text-black/[.5] capitalize flex gap-x-[20px] mb-[8px]"
            >
              <span className="font-bold text-primary  min-w-[17.25px]">
                {item.quantity}x
              </span>{" "}
              {item.item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
