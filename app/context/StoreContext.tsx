"use client";
import { createContext, useState, useContext, useEffect } from "react";
import { IStoreContext, IStoreContextProvider } from "../types/StoreContext";
import { IProduct, IProductInCart } from "../types/products";
import getStorageProducts from "../utils/getStorageProducts";
import fetchProducts from "../utils/fetchProducts";

export const StoreContext = createContext({} as IStoreContext);

export function StoreContextProvider({ children }: IStoreContextProvider) {
  const [productsInCart, setProductsInCart] = useState<IProductInCart[]>(
    getStorageProducts()
  );
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    localStorage.setItem("productsInCart", JSON.stringify(productsInCart));
  }, [productsInCart]);

  useEffect(() => {
    const getProducts = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    };

    getProducts();
  }, []);

  return (
    <StoreContext.Provider
      value={{
        products,
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
