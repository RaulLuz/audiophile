import { Product } from "@/app/types/products";
import CategoryCard from "./CategoryCard";

const CategoriesSection = ({ products }: { products: Product[] }) => {
  const correctOrder = ["headphones", "speakers", "earphones"];

  const categories = [...new Set(products.map((product) => product.category))];

  const sortedCategories = correctOrder.filter((category) =>
    categories.includes(category)
  );

  return (
    <section className="flex items-center justify-between max-w-[1110px] mx-auto mt-[200px] mb-[168px]">
      {sortedCategories.map((category, index) => (
        <CategoryCard key={category} category={category} index={index}/>
      ))}
    </section>
  );
};

export default CategoriesSection;
