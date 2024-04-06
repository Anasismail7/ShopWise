import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./assets/Styles/App.scss";
import Layout from "./assets/Components/Layout/Layout";
import Home from "./assets/Pages/Home/Home";
import Login from "./assets/Pages/Login/Login";
import Register from "./assets/Pages/Register/Register";
import SingleProduct from "./assets/Pages/SingleProduct/SingleProduct";
import { CartProvider } from "./assets/utils/CartContext";

function App() {
  const Routing = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
        { path: "/product/:id", element: <SingleProduct /> },
      ],
    },
  ]);

  return (
    <CartProvider>
      {" "}
      {/* Wrap your entire component tree with CartProvider */}
      <RouterProvider router={Routing} />
    </CartProvider>
  );
}

export default App;
