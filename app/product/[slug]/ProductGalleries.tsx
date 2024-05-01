import { IProduct } from "@/app/types/products";

const ProductGallery = ({ product }: { product: IProduct }) => {
  const firstImg = product.gallery.first.desktop;
  const secondImg = product.gallery.second.desktop;
  const thirdImg = product.gallery.third.desktop;

  return (
    <section className="flex mb-[160px]">
      <div className="mr-[32px]">
        <img src={firstImg} alt={product.name} className="rounded-[8px] mb-[32px]" />
        <img src={secondImg} alt={product.name} className="rounded-[8px]" />
      </div>
      <div>
        <img src={thirdImg} alt={product.name} className="rounded-[8px]" />
      </div>
    </section>
  );
};

export default ProductGallery;
