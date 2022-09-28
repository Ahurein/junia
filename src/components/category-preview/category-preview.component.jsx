import "./category-preview.styles.scss";
import { Link } from "react-router-dom";
import ProductCard from "../product-card/product.card";

const CategoryPreview = ({ title, products }) => {
  console.log("title dfdfdfffffffffffff", title);
  let categoryTitle = title.toUpperCase();
  return (
    <div className="category-preview-container">
      <h2>
        <Link to={categoryTitle} className="title">
          {categoryTitle}
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard category={title} key={product.idx} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
