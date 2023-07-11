import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Main from "./Main";
import NeuroddMain from "./NeuroddMain";
import Linlee from "./linlee";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} exact={true} />
        <Route path="/neurodd" element={<NeuroddMain />} exact={true} />
        <Route path="/mylove" element={<Linlee />} exact={true} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
