import React from "react";
import { Route, Navigate } from "react-router-dom";
import { isLogin } from "./IsLogin";

export default function PrivateRoute({ component: Component, restricted }) {
  return (
    isLogin() ? Component : <Navigate replace to="/signin" />
  );
};