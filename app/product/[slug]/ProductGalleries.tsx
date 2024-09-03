import { IProduct } from "@/app/types/products";

const ProductGallery = ({ product }: { product: IProduct }) => {
  const firstImg = product.gallery.first.desktop;
  const secondImg = product.gallery.second.desktop;
  const thirdImg = product.gallery.third.desktop;

  return (
    <section className="flex mb-[160px] tablet:mb-[120px] mobile:flex-col">
      <div className="mr-[32px] tablet:mr-[20px] mobile:mb-[20px] mobile:mr-0">
        <img src={firstImg} alt={product.name} className="rounded-[8px] mb-[32px] tablet:mb-[20px] mobile:w-full" />
        <img src={secondImg} alt={product.name} className="rounded-[8px] mobile:w-full" />
      </div>
      <div>
        <img src={thirdImg} alt={product.name} className="rounded-[8px] mobile:w-full" />
      </div>
    </section>
  );
};

export default ProductGallery;
