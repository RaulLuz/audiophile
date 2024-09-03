import InfoCard from "../../components/InfoCard";
import { IProduct } from "../../types/products";
import fetchProducts from "../../utils/fetchProducts";
import CategoryProductImg from "./CategoryProductImg";

const CategoryContent = async ({ category }: { category: string }) => {
  const products: IProduct[] = await fetchProducts();
  const productsToRender = products
    .filter((product) => product.category === category)
    .sort((a, b) => (a.new === b.new ? 0 : a.new ? -1 : 1));

  if (!products) return "No products found";

  return (
    <div>
      <div className="bg-secondary flex justify-center items-center py-[97px] mb-[160px] tablet:mb-[120px] mobile:py-[32px] mobile:mb-[64px]">
        <h2 className="text-white font-bold text-[40px] tracking-[1.43px] leading-[44px] uppercase mobile:text-[28px] mobile:tracking-[2px]">
          {category}
        </h2>
      </div>

      {productsToRender.map((product, index) => (
        <div
          key={product.id}
          className={`flex items-center max-w-[1110px] mx-auto justify-between mb-[120px] tablet:flex-col ${
            index % 2 === 0 ? "" : "flex-row-reverse"
          }`}
        >
          <CategoryProductImg product={product} index={index} />

          <div className="tablet:mt-[52px] ">
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
        </div>
      ))}
    </div>
  );
};

export default CategoryContent;
