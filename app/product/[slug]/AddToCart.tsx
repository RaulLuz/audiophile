import { useState } from "react";

const AddToCart = () => {
  const [quantity, setQuantity] = useState(0);

  const handleQuantityChange = (operation: string) => {
    if (operation === "add") setQuantity(quantity + 1);
    if (operation === "remove" && quantity > 0) setQuantity(quantity - 1);
  };

  return (
    <div className="flex items-center gap-x-[16px]">
      <div className="w-[120px] h-[48px] bg-grey flex items-center justify-between px-[5px]">
        <button onClick={() => handleQuantityChange("remove")} className="font-bold text-[13px] tracking-[1px] text-black/[.25] w-[33px] h-[48px]">-</button>
        <div className="font-bold text-[13px] text-black tracking-[1px]">{quantity}</div>
        <button onClick={() => handleQuantityChange("add")} className="font-bold text-[13px] tracking-[1px] text-black/[.25] w-[33px] h-[48px]">+</button>
      </div>

      <button className="bg-primary text-white font-bold uppercase tracking-[1px] text-[13px] w-[160px] h-[48px] hover:bg-primary-light transition duration-200">
        Add to cart
      </button>
    </div>
  );
};

export default AddToCart;
