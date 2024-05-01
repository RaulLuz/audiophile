import InfoCard from "../../components/InfoCard";
import { IProduct } from "../../types/products";
import fetchProducts from "../../utils/fetchProducts";
import Image from "next/image";

const CategoryContent = async ({ category }: { category: string }) => {
  const products: IProduct[] = await fetchProducts();
  const productsToRender = products.filter(
    (product) => product.category === category
  );

  if (!products) return "No products found";

  return (
    <div>
      <div className="bg-secondary flex justify-center items-center py-[97px] mb-[160px]">
        <h2 className="text-white font-bold text-[40px] tracking-[1.43px] leading-[44px] uppercase">
          {category}
        </h2>
      </div>

      {productsToRender.map((product, index) => (
        <div
          key={product.id}
          className={`flex items-center max-w-[1110px] mx-auto justify-between mb-[160px] ${
            index % 2 === 0 ? "" : "flex-row-reverse"
          }`}
        >
          <Image
            src={product.categoryImage.desktop}
            width={540}
            height={560}
            alt={product.name}
          />

          <InfoCard
            key={product.id}
            isNew={product.new}
            textColor="text-black"
            newTextColor="text-primary"
            cardSize="w-[445px]"
            title={product.name}
            description={product.description}
            buttonBg="bg-primary"
            buttonBgHover="hover:bg-primary-light"
            href={`/product/${product.slug}`}
          />
        </div>
      ))}
    </div>
  );
};

export default CategoryContent;
