import ProductContent from "./ProductContent";

const Categories = ({ params }: { params: { slug: string } }) => {
  return <ProductContent slug={params.slug} />;
};

export default Categories;
