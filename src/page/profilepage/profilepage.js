import React from "react";
import { Switch, Route } from "react-router-dom";

import Cart from "../../components/cart/cart";
import UserDetails from "../../components/user-details/user-details";

const ProfilePage = ({ match }) => {
  return (
    <>
      <Switch>
        <Route path={`${match.url}`} exact component={UserDetails} />

        <Route
          path={`${match.url}/settings`}
          exact
          render={() => <h1 style={{ color: "#fff" }}>settings</h1>}
        />
      </Switch>
    </>
  );
};

export default ProfilePage;
