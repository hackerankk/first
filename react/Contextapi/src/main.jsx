import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

import XYZ from "./Context/VikasContext.jsx";

createRoot(document.getElementById("root")).render(
  <XYZ>
    <App />
  </XYZ>
);
