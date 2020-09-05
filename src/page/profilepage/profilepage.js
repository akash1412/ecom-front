import React from 'react';
import { Switch, Route } from 'react-router-dom';

const ProfilePage = ({ match }) => {
  return (
    <>
      <Switch>
        <Route
          path={`${match.url}`}
          exact
          render={() => <h1 style={{ color: '#fff' }}>profile view</h1>}
        />
        <Route
          path={`${match.url}/settings`}
          exact
          render={() => <h1 style={{ color: '#fff' }}>settings</h1>}
        />
      </Switch>
    </>
  );
};

export default ProfilePage;
