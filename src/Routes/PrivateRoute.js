import React from "react";
import { Route, Redirect } from "react-router-dom";
import isAuthenticate from "../components/util/isAuthenticate";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const decoded = isAuthenticate();
  if (!decoded)
    return <Route {...rest} render={(props) => <Redirect to="/login" />} />;

  return (
    <Route
      {...rest}
      render={(props) => <Component {...props} user={decoded} />}
    />
  );
};

export default PrivateRoute;
