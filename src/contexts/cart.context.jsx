import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  let productExist = cartItems.find((el) => el.id === productToAdd.id);
  if (productExist) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, itemToRemove) => {
  let productExist = cartItems.find(
    (cartItem) => cartItem.id === itemToRemove.id
  );
  if (productExist.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productExist.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === itemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const removeItem = (cartItems, cartItemToRemove) => {
  let productExist = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (productExist) {
    return cartItems.filter((cartItem) => cartItem.id !== productExist.id);
  }

  return cartItems;
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cart: [],
  addProductToCart: () => {},
  removeCartItem: () => {},
  removeProduct: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const addProductToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeProductFromCart = (itemToRemove) => {
    setCartItems(removeCartItem(cartItems, itemToRemove));
  };

  const removeProduct = (itemToRemove) => {
    setCartItems(removeItem(cartItems, itemToRemove));
  };

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, current) => (total += current.quantity),
      0
    );

    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, current) => (total += current.quantity * current.price),
      0
    );

    setCartTotal(newCartTotal);
  }, [cartItems]);

  const value = {
    isCartOpen,
    setIsCartOpen,
    addProductToCart,
    removeProductFromCart,
    removeProduct,
    cartItems,
    cartCount,
    cartTotal,
  };
  return <CartContext.Provider value={value}> {children}</CartContext.Provider>;
};
