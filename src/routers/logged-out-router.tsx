import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Login } from "../pages/login";
export const LoggedOutRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
