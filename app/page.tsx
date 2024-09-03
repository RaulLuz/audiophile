import CategoriesSection from "./components/CategoriesSection/CategoriesSection";
import MainSection from "./components/Home/MainSection";
import { IProduct } from "./types/products";
import fetchProducts from "./utils/fetchProducts";
import ThirdSection from "./components/Home/ThirdSection";
import FourthSection from "./components/Home/FourthSection";
import FifthSection from "./components/Home/FifthSection";
import DescriptiveSection from "./components/DescriptiveSection";

export default async function Home() {
  const products: IProduct[] = await fetchProducts();

  if (!products) return "No products found";

  return (
    <main className="bg-white">
      <MainSection products={products} />
      <div className="mb-[168px] mt-[200px] tablet:mb-[98px] tablet:mt-[148px] mobile:mt-[92px] mobile:mb-[120px]">
        <CategoriesSection products={products} />
      </div>
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <DescriptiveSection />
    </main>
  );
}
