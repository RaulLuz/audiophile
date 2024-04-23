import CategoryContent from "./CategoryContent";

const Categories = ({ params }: { params: { category: string } }) => {

  return <CategoryContent category={params.category} />;
};

export default Categories;
