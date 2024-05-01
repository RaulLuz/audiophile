import QuantitySelector from "@/app/components/QuantitySelector";
import { useStore } from "@/app/context/StoreContext";
import { IProductInCart, IProduct } from "@/app/types/products";
import { useState } from "react";

const AddToCart = ({ product }: { product: IProduct }) => {
  const { setProductsInCart, productsInCart, quantity } =
    useStore();

  const handleAddProductToCart = () => {
    setProductsInCart((prev: IProductInCart[]) => {
      if (prev.some((item) => item.product.id === product.id)) {
        return prev.map((prevProduct) => {
          return { ...prevProduct, quantity: prevProduct.quantity + quantity };
        });
      }

      return [...prev, { product, quantity }];
    });
  };

  console.log({ productsInCart });

  return (
    <div className="flex items-center gap-x-[16px]">
      <QuantitySelector isInsideCart={false} />

      <button
        onClick={handleAddProductToCart}
        disabled={quantity === 0}
        className="bg-primary text-white font-bold uppercase tracking-[1px] text-[13px] w-[160px] h-[48px] hover:bg-primary-light transition duration-200 disabled:bg-grey "
      >
        Add to cart
      </button>
    </div>
  );
};

export default AddToCart;
