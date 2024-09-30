import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routers from "./config/react-config/routes"; // Adjust the import path as necessary

const App = () => {
  return (
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  );
};

export default App;