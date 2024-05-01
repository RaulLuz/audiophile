import ProductContent from "./ProductContent";

const Products = ({ params }: { params: { slug: string } }) => {
  return <ProductContent slug={params.slug} />;
};

export default Products;
