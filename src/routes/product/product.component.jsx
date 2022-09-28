import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../contexts/categories.context";
import "./product.styles.scss";

const Product = () => {
  const { productId, category } = useParams();
  console.log(productId, category);

  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  let currentId = Number(productId);

  const currentProd = products.find((el) => el.id === currentId);

  const { name, imageUrl, price } = currentProd;

  return (
    <div id="sproduct">
      <div className="inner_width">
        <div className="product_image">
          <img src={imageUrl} alt="" />
        </div>
        <div className="desc">
          <p className="name">Title: {name}</p>
          <p className="price">Price: ${price}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
