import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ProductsProvider from "./context/productsContext.jsx";
import SidebarProvider from "./context/sidebarContext.jsx";
import CartContextProvider from "./context/cartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SidebarProvider>
    <CartContextProvider>
      <ProductsProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductsProvider>
    </CartContextProvider>
  </SidebarProvider>
);
