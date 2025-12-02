// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { PetFoodProvider } from "./context/PetFoodContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PetFoodProvider>
      <App />
    </PetFoodProvider>
  </React.StrictMode>
);
