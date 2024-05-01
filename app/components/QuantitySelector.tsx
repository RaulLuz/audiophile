import React, { useState } from "react";
import { useStore } from "../context/StoreContext";
import { IQuantitySelector } from "../types/QuantitySelector";
import { IProductInCart } from "../types/products";

const QuantitySelector = ({ isInsideCart, product }: IQuantitySelector) => {
  const { quantity, setQuantity, setProductsInCart, productsInCart } = useStore();
  const currentProduct = productsInCart.find((item) => item.product.id === product.id);

  const handleQuantityChange = (operation: number) => {
    if (isInsideCart) {
      setProductsInCart((prev: IProductInCart[]) => {
        if (prev.some((item) => item.product.id === product.id)) {
          return prev.map((prevProduct) => {
            return { ...prevProduct, quantity: prevProduct.quantity + operation };
          });
        }
        return [...prev, { product, quantity: operation }];
      })
      
      return;
    }
    
    if (quantity === 0 && operation === -1) return;
    
    setQuantity(quantity + operation);
  };
  
  return (
    <div
      className={`${
        isInsideCart
          ? "w-[96px] h-[32px] px-[3px]"
          : "w-[120px] h-[48px] px-[5px]"
      } bg-grey flex items-center justify-between`}
    >
      <button
        onClick={() => handleQuantityChange(-1)}
        className={`font-bold text-[13px] tracking-[1px] text-black/[.25] ${
          isInsideCart ? "w-[32px] h-[32px]" : "w-[33px] h-[48px]"
        }`}
      >
        -
      </button>
      <div className="font-bold text-[13px] text-black tracking-[1px]">
        {isInsideCart ? currentProduct?.quantity : quantity}
      </div>
      <button
        onClick={() => handleQuantityChange(1)}
        className={`font-bold text-[13px] tracking-[1px] text-black/[.25] ${
          isInsideCart ? "w-[32px] h-[32px]" : "w-[33px] h-[48px]"
        }`}
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
