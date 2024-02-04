import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppContext from "./components/context/AppContext";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppContext>
  </React.StrictMode>
);
