import CategoriesSection from "../../components/CategoriesSection/CategoriesSection";
import DescriptiveSection from "../../components/DescriptiveSection";
import { Product } from "../../types/products";
import fetchProducts from "../../utils/fetchProducts";

export default async function HeadphonesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const products: Product[] = await fetchProducts();

  if (!products) return "No products found";

  return (
    <section>
      {children}
      <CategoriesSection products={products} />
      <DescriptiveSection />
    </section>
  );
}
