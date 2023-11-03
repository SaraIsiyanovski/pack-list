import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { ItemsContextComponent } from "./context/ItemsContextComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ItemsContextComponent>
      <App />
    </ItemsContextComponent>
  </React.StrictMode>
);
