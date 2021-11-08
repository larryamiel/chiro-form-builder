import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import FieldGroupPage from "./pages/FieldGroupPage";
import FieldGroupConfigurePage from "./pages/FieldGroupConfigurePage";

function PageRoutes() {
    return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/group" element={<FieldGroupPage />} />
        <Route path="/group/:group_id" element={<FieldGroupConfigurePage />} />
      </Routes>
    </>
  );
}

export default PageRoutes;