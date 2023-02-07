import React from "react";
import { Navigate } from "react-router-dom";
import { isLogin } from "./IsLogin";

export default function PrivateRoute({ component: Component }) {
  return (
    isLogin() ? Component : <Navigate replace to="/signin" />
  );
};