import Image from "next/image";
import React, { useState } from "react";
import { IProductInCart } from "../types/products";
import getStorageProducts from "../utils/getStorageProducts";
import CartProduct from "../components/Cart/CartProduct";
import Link from "next/link";

const SuccessModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const productsInCart: IProductInCart[] = getStorageProducts();
  const prices = productsInCart.map(
    (item) => item.product.price * item.quantity
  );
  const total = prices.reduce((a, b) => a + b, 0);
  const grandTotal = total + 1129;
  const remainingProducts = productsInCart.length - 1;
  const blackBackgroundHeight =
    (isOpen ? productsInCart.length : remainingProducts) * 50 + 96;

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-20" />
      <div className="fixed bg-white top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 p-[48px] rounded-[8px] z-20">
        <Image
          src={"/svg/success-modal-check.svg"}
          width={64}
          height={64}
          alt="Success Modal Check"
        />

        <div className="text-[32px] font-bold tracking-[1.14px] leading-[36px] text-black uppercase mt-[33px] mb-[24px]">
          Thank you <br />
          for your order
        </div>
        <p className="text-[15px] text-black/50 leading-[25px] font-medium mb-[33px]">
          You will receive an email confirmation shortly.
        </p>
        <div className="flex items-center">
          <div className="min-h-[140px] w-[246px] bg-[#F1F1F1] p-[24px] pb-0 rounded-[8px] rounded-r-none">
            <div
              className={`${isOpen ? "h-full" : "h-[65px]"} overflow-hidden`}
            >
              {productsInCart.map((item) => (
                <CartProduct
                  key={item.product.id}
                  product={item.product}
                  quantity={item.quantity}
                  isInsideCheckout
                  isInsideModal
                />
              ))}
            </div>
            {productsInCart.length > 0 && (
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-[12px] text-black/50 -tracking-[.21px] font-bold text-center w-full py-[12px] border-t border-black/[8%]"
              >
                {isOpen
                  ? `View less`
                  : `and ${remainingProducts} other item(s)`}
              </button>
            )}
          </div>
          <div
            className={`h-[${blackBackgroundHeight}px] min-h-[142px] w-[198px] rounded-[8px] rounded-l-none bg-black py-[42px] pl-[32px] flex flex-col justify-end `}
          >
            <p className="text-[15px] text-white/50 font-medium mb-[8px] leading-[25px] uppercase">
              Grand total
            </p>
            <p className="text-white text-[18px] leading-[25px] font-bold">
              $ {grandTotal.toLocaleString("en-US", { currency: "USD" })}
            </p>
          </div>
        </div>

        <Link
          href="/"
          className="bg-primary text-white font-bold uppercase tracking-[1px] text-[13px] w-full h-[48px] hover:bg-primary-light transition duration-200 flex items-center justify-center mt-[36px]"
        >
          Back to home
        </Link>
      </div>
    </>
  );
};

export default SuccessModal;
