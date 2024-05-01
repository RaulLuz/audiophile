"use client";

import { useStore } from "../../context/StoreContext";
import CartProduct from "./CartProduct";

const Cart = () => {
  const { productsInCart, setProductsInCart, isCartOpen, setIsCartOpen } =
    useStore();

  const handleRemoveAll = () => {
    setProductsInCart([]);
    setIsCartOpen(false);
  };

  return (
    <>
      <div
        className={`${
          isCartOpen ? "visible opacity-100" : "invisible opacity-0"
        } w-[377px] rounded-[8px] bg-white absolute top-[129px] right-[165px] z-10 p-[31px] transition transition-200`}
      >
        <div className="flex items-center justify-between mb-[32px]">
          <h3 className="font-bold text-[18px] text-black tracking-[1.29px] uppercase">
            Cart ({productsInCart.length})
          </h3>
          <button
            className="font-medium text-[15px] opacity-50 underline"
            onClick={handleRemoveAll}
          >
            Remove all
          </button>
        </div>
        <div>
          {productsInCart.map(({ product, quantity }) => {
            return (
              <CartProduct
                key={product.id}
                product={product}
                quantity={quantity}
                isInsideCheckout={false}
              />
            );
          })}
        </div>
        <div className="flex items-center justify-between mt-[8px] mb-[24px]">
          <span className="font-medium text-[15px] leading-[25px] text-black/[.5] uppercase">
            Total
          </span>
          <div className="font-bold text-[18px] text-black">$ 5,396</div>
        </div>
        <button className="bg-primary text-white font-bold uppercase tracking-[1px] text-[13px] w-full h-[48px] hover:bg-primary-light transition duration-200">
          Checkout
        </button>
      </div>
      <div
        className={`${
          isCartOpen ? "visible opacity-100" : "invisible opacity-0"
        } fixed top-0 left-0 w-full h-full bg-black opacity-50 z-[8] transition transition-200`}
        onClick={() => setIsCartOpen(false)}
      />
    </>
  );
};

export default Cart;
