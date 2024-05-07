"use client";
import { createContext, useState, useContext, useEffect } from "react";
import { IStoreContext, IStoreContextProvider } from "../types/StoreContext";
import { IProductInCart } from "../types/products";
import getStorageProducts from "../utils/getStorageProducts";

export const StoreContext = createContext({} as IStoreContext);

export function StoreContextProvider({ children }: IStoreContextProvider) {
  const [productsInCart, setProductsInCart] = useState<IProductInCart[]>(getStorageProducts());
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    localStorage.setItem("productsInCart", JSON.stringify(productsInCart));
  }, [productsInCart]);

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
