import CartProduct from "@/app/components/Cart/CartProduct";
import { IProductInCart } from "@/app/types/products";
import getStorageProducts from "@/app/utils/getStorageProducts";
import React, { useEffect, useState } from "react";

const Summary = () => {
  const [isMounted, setIsMounted] = useState(false);
  const productsInCart: IProductInCart[] = getStorageProducts();
  const prices = productsInCart.map(
    (item) => item.product.price * item.quantity
  );
  const total = prices.reduce((a, b) => a + b, 0);
  const grandTotal = total + 1129;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  console.log({ productsInCart, prices });

  return (
    <div className="bg-white p-[32px] rounded-[8px] h-[fit-content] w-full max-w-[350px] sticky top-[20px]">
      <h3 className="font-bold text-[18px] tracking-[1.29px] text-black uppercase mb-[31px]">
        Summary
      </h3>
      {productsInCart.map((item) => (
        <CartProduct
          key={item.product.id}
          product={item.product}
          quantity={item.quantity}
          isInsideCheckout
        />
      ))}
      <div className="flex justify-between my-[8px]">
        <div className="font-medium text-[15px] leading-[25px] text-black/50 uppercase">
          Total
        </div>
        <div className="font-bold text-[18px] text-black">
          $ {total.toLocaleString("en-US", { currency: "USD" })}
        </div>
      </div>
      <div className="flex justify-between mb-[8px]">
        <div className="font-medium text-[15px] leading-[25px] text-black/50 uppercase">
          Shipping
        </div>
        <div className="font-bold text-[18px] text-black">$ 50</div>
      </div>
      <div className="flex justify-between mb-[24px]">
        <div className="font-medium text-[15px] leading-[25px] text-black/50 uppercase">
          VAT (included)
        </div>
        <div className="font-bold text-[18px] text-black">$ 1,079</div>
      </div>
      <div className="flex justify-between mb-[32px]">
        <div className="font-medium text-[15px] leading-[25px] text-black/50 uppercase">
          Grand Total
        </div>
        <div className="font-bold text-[18px] text-primary">
          $ {grandTotal.toLocaleString("en-US", { currency: "USD" })}
        </div>
      </div>
      <button className="bg-primary text-white font-bold uppercase tracking-[1px] text-[13px] w-full h-[48px] hover:bg-primary-light transition duration-200">
        Continue & Pay
      </button>
    </div>
  );
};

export default Summary;
