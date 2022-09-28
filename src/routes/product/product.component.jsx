import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../contexts/categories.context";
import "./product.styles.scss";

const Product = () => {
  const { productId, category } = useParams();
  console.log(productId, category);

  // const { categoriesMap } = useContext(CategoriesContext);
  // const [products, setProducts] = useState(null);

  // useEffect(() => {
  //   setProducts(categoriesMap[category]);
  // }, [category, categoriesMap]);

  // console.log("products", products);
  // console.log("product id", productId);
  // let product = products[Number(productId)];

  // const { name, imageUrl, price } = product;

  return (
    <div id="sproduct">
      <div className="inner_width">
        <div className="product_image">
          <img src="" alt="" />
        </div>
        <div className="desc">
          <p className="name">name</p>
          <p className="price">545</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
