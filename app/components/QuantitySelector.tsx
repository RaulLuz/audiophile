import React, { useState } from "react";
import { useStore } from "../context/StoreContext";
import { IQuantitySelector } from "../types/QuantitySelector";
import { IProductInCart } from "../types/products";

const QuantitySelector = ({ isInsideCart, product }: IQuantitySelector) => {
  const { quantity, setQuantity, setProductsInCart, productsInCart } =
    useStore();
  const currentProductIndex = productsInCart.findIndex(
    (item) => item.product.id === product.id
  );
  const currentProduct = productsInCart[currentProductIndex];
  const currentQuantity = isInsideCart ? currentProduct?.quantity : quantity;

  const handleQuantityChange = (operation: number) => {
    if (isInsideCart) {
      setProductsInCart((prev: IProductInCart[]) => {
        if (currentProductIndex !== -1) {
          const updatedProducts = prev
            .map((item, index) => {
              if (index === currentProductIndex) {
                const updatedQuantity = item.quantity + operation;
                if (updatedQuantity <= 0) {
                  return null; // Remove o item do array
                } else {
                  return { ...item, quantity: updatedQuantity };
                }
              }
              return item;
            })
            .filter(Boolean); // Remove os itens nulos do array
          return updatedProducts;
        } else if (operation === 1) {
          return [...prev, { product, quantity: 1 }];
        }
        return prev; // Retorna o array original se nenhuma operação for realizada
      });
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
        {currentQuantity}
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
