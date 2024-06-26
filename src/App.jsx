import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./assets/Styles/App.scss";
import Layout from "./assets/Components/Layout/Layout";
import Home from "./assets/Pages/Home/Home";
import Login from "./assets/Pages/Login/Login";
import Register from "./assets/Pages/Register/Register";
import SingleProduct from "./assets/Pages/SingleProduct/SingleProduct";
import Cart from "./assets/Pages/Cart/Cart";
import { CartProvider } from "./assets/utils/CartContext";
import store from "./assets/Store/Store";
import { Provider } from "react-redux";

function App() {
  // Create router configuration
  const Routing = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
        { path: "/cart", element: <Cart /> },
        { path: "/product/:id", element: <SingleProduct /> },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <CartProvider>
        <RouterProvider router={Routing} />
      </CartProvider>
    </Provider>
  );
}

export default App;
