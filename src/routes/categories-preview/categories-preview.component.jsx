import { Fragment } from "react";
import { useSelector } from "react-redux";

import CategoryPreview from "../../components/category-preview/category-preview.component";
import { selectCategories } from "../../store/categories/category.selector";

const CategoriesPreview = () => {
  const categories = useSelector(selectCategories);

  return (
    <Fragment>
      {categories.map(({ title, items }) => {
        return <CategoryPreview key={title} title={title} products={items} />;
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
