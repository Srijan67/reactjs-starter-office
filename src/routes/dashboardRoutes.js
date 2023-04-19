import React from "react";
import { Route, Routes } from "react-router-dom";

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<div>hello dashbaord/</div>} />
      <Route path="/home" element={<div>hello dashbaord/</div>} />
      <Route path="/invoice" element={<div>Hello Navigatoin!</div>} />
      <Route path="/report" element={<div>Hello Report!</div>} />
    </Routes>
  );
};

export default DashboardRoutes;
