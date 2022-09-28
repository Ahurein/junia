import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { ReactComponent as JuniaLogo } from "../../assets/crown.svg";
import CartDropdown from "../../components/cart-dropdown.component.jsx/cart-dropdown.component";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import {
  NavigationContainer,
  NavLink,
  NavLinks,
  LogoContainer,
} from "./navigation.styles";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const cartOpenHandler = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <img
            src="https://i.ibb.co/tzR0tCt/LOGO.png"
            style={{ width: "100%", height: "100%" }}
          />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">Shop</NavLink>
          {currentUser ? (
            <NavLink as="span" to="/auth" onClick={signOutUser}>
              Sign Out
            </NavLink>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}
          <CartIcon cartOpenHandler={cartOpenHandler} />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
