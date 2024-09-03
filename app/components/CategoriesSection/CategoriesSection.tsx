import { IProduct } from "@/app/types/products";
import CategoryCard from "./CategoryCard";

const CategoriesSection = ({ products }: { products: IProduct[] }) => {
  const correctOrder = ["headphones", "speakers", "earphones"];

  const categories = [...new Set(products.map((product) => product.category))];

  const sortedCategories = correctOrder.filter((category) =>
    categories.includes(category)
  );

  return (
    <div className="flex gap-x-[30px] items-center justify-center tablet:gap-x-[10px] mobile:flex-col mobile:gap-y-[68px]">
      {sortedCategories.map((category, index) => (
        <CategoryCard key={category} category={category} index={index} />
      ))}
    </div>
  );
};

export default CategoriesSection;
