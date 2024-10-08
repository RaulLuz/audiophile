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
    <main className="max-w-[1110px] mx-auto tablet:px-[39px] mobile:px-[24px]">
      {children}
      <section className="flex items-center justify-between max-w-[1110px] mx-auto mt-[200px] mb-[168px] tablet:mt-[172px] tablet:mb-[120px] tablet:justify-center mobile:mt-[116px]">
        <CategoriesSection products={products} />
      </section>
      <DescriptiveSection />
    </main>
  );
}
