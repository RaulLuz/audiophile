import CategoriesSection from "../../components/CategoriesSection/CategoriesSection";
import DescriptiveSection from "../../components/DescriptiveSection";
import { IProduct } from "../../types/products";
import fetchProducts from "../../utils/fetchProducts";

export default async function HeadphonesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const products: IProduct[] = await fetchProducts();

  if (!products) return "No products found";

  return (
    <section>
      {children}
      <div className="flex items-center justify-between max-w-[1110px] mx-auto mt-[200px] mb-[168px] tablet:justify-center">
        <CategoriesSection products={products} />
      </div>
      <div className="mobile:px-[24px]">
        <DescriptiveSection />
      </div>
    </section>
  );
}
