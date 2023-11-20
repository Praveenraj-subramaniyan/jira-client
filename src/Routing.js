import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import ForgetPassword from "./pages/ForgetPassword";
import NewPassword from "./pages/NewPassword";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/password/forget" element={<ForgetPassword />} />
      <Route path="/password/new" element={<NewPassword />} />
    </Routes>
  );
}

export default Routing;
