import { IProduct, IProductInCart } from "./products";

interface IQuantitySelector {
  isInsideCart: boolean;
  inputQuantity?: number;
  product: IProduct;
}

export { IQuantitySelector };
