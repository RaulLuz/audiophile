import { Product } from "@/app/types/products";
import Image from "next/image";
import Link from "next/link";

const ProductRelated = ({ product }: { product: Product }) => {
  const relatedProducts = product.others;

  return (
    <section className="mb-[40px]">
      <h3 className='font-bold text-[32px] text-black tracking-[1.14px] leading-[36px] uppercase mb-[64px] text-center'>You may also like</h3>

      <div className="flex items-center justify-between">
        {relatedProducts.map(({ image, name, slug }) => (
          <div key={slug} className="flex flex-col items-center">
            <Image
              src={image.desktop}
              alt={name}
              width={350}
              height={318}
              className="rounded-[8px] mb-[40px]"
            />

            <h4 className="font-bold text-[24px] text-black tracking-[1.71px] uppercase mb-[32px]">{name}</h4>

            <Link
              href={slug}
              className="bg-primary hover:bg-primary-light text-white font-bold uppercase tracking-[1px] text-[13px] w-[160px] h-[48px] flex items-center justify-center transition duration-200"
            >
              See Product
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductRelated;
