import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import "./product-card.styles.scss";
import { Link } from "react-router-dom";

const ProductCard = ({ product, category }) => {
  const { name, price, id } = product;
  const { addProductToCart } = useContext(CartContext);

  const addItemsToCart = () => {
    return addProductToCart(product);
  };

  console.log("img", category);
  console.log("img1", id);

  return (
    <Link to={`/product/${category}/${id}`}>
      <div className="product-card-container">
        <img src={`${product.imageUrl}`} alt={name} />

        <div className="footer">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
        </div>

        <Button
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          onClick={addItemsToCart}
        >
          Add to cart
        </Button>
      </div>
    </Link>
  );
};

export default ProductCard;
