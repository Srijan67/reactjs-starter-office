import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../containers/auth/view/login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/signin" element={<Login />} />
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<div>Hello Navigatoin!</div>} />
    </Routes>
  );
};

export default AppRoutes;
