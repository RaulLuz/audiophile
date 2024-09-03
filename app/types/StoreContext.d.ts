import { IProduct, IProductInCart } from "./products";

interface IStoreContextProvider {
  children: ReactNode;
}
interface IStoreContext {
  productsInCart: IProductInCart[];
  setProductsInCart: Dispatch<SetStateAction<IProductInCart>>;
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
  isCartOpen: boolean;
  setIsCartOpen: Dispatch<SetStateAction<boolean>>;
  products: IProduct[];
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<bol>>;
}

export { IStoreContext, IStoreContextProvider };
