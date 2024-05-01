import { IProduct, IProductInCart } from "@/app/types/products";
import Image from "next/image";
import Link from "next/link";
import QuantitySelector from "../QuantitySelector";

const CartProduct = ({
  product,
  quantity,
  isInsideCheckout,
}: {
  product: IProduct;
  quantity: number;
  isInsideCheckout: boolean;
}) => {
  return (
    <div className="flex items-center mb-[24px] justify-between">
      <div className="flex items-center">
        <Image
          src={product.categoryImage.desktop}
          alt={product.name}
          width={64}
          height={64}
          className="rounded-[8px]"
        />
        <Link href={`/product/${product.slug}`} className="ml-[16px]">
          <div className="line-clamp-1 max-w-[100px] font-bold text-[15px] leading-[25px] text-black">
            {product.name}
          </div>
          <div className="font-bold text-[14px] leading-[25px] text-black/[.5]">
            $ {product.price.toLocaleString("en-US", { currency: "USD" })}
          </div>
        </Link>
      </div>
      {isInsideCheckout ? (
        <div className="-mt-[27px]">x{quantity}</div>
      ) : (
        <QuantitySelector isInsideCart inputQuantity={quantity} />
      )}
    </div>
  );
};

export default CartProduct;
