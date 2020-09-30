import React, { useContext } from "react";

import { Switch, Route } from "react-router-dom";

import { UserContext } from "../../context/userContext/userContext";
import { CartContext } from "../../context/cart-context/cart-context";

import Cart from "../../components/cart/cart";

import Homepage from "../homepage/homepage";
import Collection from "../collection/collection";
import ProfilePage from "../profilepage/profilepage";
import Login from "../login/login";
import Signup from "../sign-up-page/sign-up-page";
import AddProducts from "../add-products/add-products";

const Directory = ({ match }) => {
  const { userDetails } = useContext(UserContext);
  const { toggleCart } = useContext(CartContext);

  return (
    <>
      {toggleCart && <Cart />}
      <Switch>
        <Route exact path={match.url} render={() => <div>homepage</div>} />
        <Route
          exact
          path={`${match.url}shop/:category`}
          component={Collection}
        />

        <Route exact path={`${match.url}profile`} component={ProfilePage} />

        <Route exact path={`${match.url}login`} component={Login} />
        <Route exact path={`${match.url}signup`} component={Signup} />

        <Route path={`${match.url}add-products`} component={AddProducts} />
      </Switch>
    </>
  );
};

export default Directory;
