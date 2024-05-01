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
    <main className="max-w-[1110px] mx-auto">
      {children}
      <CategoriesSection products={products} />
      <DescriptiveSection />
    </main>
  );
}
