import React, {FC} from "react";
import {Route, Routes} from "react-router-dom";
import Main from "./main";

const Router: FC = () => (
  <Routes>
    <Route
      path="/"
      element={<Main />}
    />
  </Routes>
);

export default Router;
