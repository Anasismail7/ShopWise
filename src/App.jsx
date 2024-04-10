import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./assets/Styles/App.scss";
import Layout from "./assets/Components/Layout/Layout";
import Home from "./assets/Pages/Home/Home";
import Login from "./assets/Pages/Login/Login";
import Register from "./assets/Pages/Register/Register";
import SingleProduct from "./assets/Pages/SingleProduct/SingleProduct";
import { CartProvider } from "./assets/utils/CartContext";
import store from "./assets/Store/Store";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import Cart from "./assets/Pages/Cart/Cart";
function App() {
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
      <Toaster position="top-right" />
      <CartProvider>
        {" "}
        <RouterProvider router={Routing} />
      </CartProvider>
    </Provider>
  );
}

export default App;
