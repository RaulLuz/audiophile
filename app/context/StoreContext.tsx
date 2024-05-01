"use client";
import { createContext, ReactNode, useState, useContext } from "react";
import { IStoreContext, IStoreContextProvider } from "../types/StoreContext";
import { IProductInCart } from "../types/products";

export const StoreContext = createContext({} as IStoreContext);

export function StoreContextProvider({ children }: IStoreContextProvider) {
  const [productsInCart, setProductsInCart] = useState<IProductInCart[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quantity, setQuantity] = useState(0);

  return (
    <StoreContext.Provider
      value={{
        productsInCart,
        setProductsInCart,
        quantity,
        setQuantity,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export const useStore = () => useContext(StoreContext);
