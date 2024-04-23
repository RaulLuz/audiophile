import { Product } from "../../types/products";
import fetchProducts from "../../utils/fetchProducts";
import ProductActions from "./ProductActions";
import ProductFeatures from "./ProductFeatures";
import ProductGallery from "./ProductGallerys";
import ProductRelated from "./ProductRelated";

const ProductContent = async ({ slug }: { slug: string }) => {
  const products: Product[] = await fetchProducts();
  const productToRender = products.filter(
    (product) => product.slug === slug
  )[0];

  if (!productToRender)
    return <div className="max-w-[1110px] mx-auto">No products found</div>;

  return (
    <>
      <ProductActions product={productToRender} />
      <ProductFeatures product={productToRender} />
      <ProductGallery product={productToRender} />
      <ProductRelated product={productToRender} />
    </>
  );
};

export default ProductContent;
