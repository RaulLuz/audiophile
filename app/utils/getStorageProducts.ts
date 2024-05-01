import { IProductInCart } from "../types/products";

const getStorageProducts = () => {
  let productsInStorage: IProductInCart[] = [];

  if (typeof window !== "undefined") {
    const productsInCartString = localStorage.getItem("productsInCart");
    productsInStorage = productsInCartString
      ? JSON.parse(productsInCartString)
      : [];
  }

  return productsInStorage;
};

export default getStorageProducts;
