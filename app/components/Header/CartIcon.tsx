import React from "react";
import Image from "next/image";
import { useStore } from "@/app/context/StoreContext";

const CartIcon = () => {
  const { productsInCart } = useStore();

  return (
    <div className="relative">
      <Image
        src="/svg/cart.svg"
        alt="Minicart Icon"
        width={23.33}
        height={20}
      />
      <span className="bg-primary rounded-full w-4 h-4 flex items-center justify-center text-white text-[10px] absolute -top-[7px] -right-[7px]">
        {productsInCart.length}
      </span>
    </div>
  );
};

export default CartIcon;
