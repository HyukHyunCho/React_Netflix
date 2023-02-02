import React from "react";
import { Route, Navigate } from "react-router-dom";
import { isLogin } from "./IsLogin";

export default function PublicRoute({ component: Component, restricted, ...rest }) {
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      {...rest}
      render={props =>
        isLogin() && restricted ? (
          <Navigate replace to="/browse" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

