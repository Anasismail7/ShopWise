import React, { useState, useEffect, useContext } from "react";
import AxiosConfig from "../../../Axios/AxiosConfig";
import { CartContext } from "../../utils/CartContext";
import { FaTrashAlt } from "react-icons/fa";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const { counter, setCounter } = useContext(CartContext);

  const breadcrumbs = [
    { label: "Home", path: "/" },
    { label: "Pages", path: "/" },
  ];

  useEffect(() => {
    async function fetchCartItems() {
      try {
        const { data } = await AxiosConfig.get("/cart");
        setCartItems(data);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    }
    fetchCartItems();
  }, []);

  const handleRemoveProduct = async (productId, quantity) => {
    try {
      await AxiosConfig.delete(`/cart/${productId}`);
      setCartItems((prevItems) =>
        prevItems.filter((item) => item.id !== productId)
      );
      // Update cart counter in the context by decreasing the removed item quantity
      setCounter((prevCounter) => prevCounter - quantity);
    } catch (error) {
      console.error("Error removing product from cart:", error);
    }
  };

  const handleUpdateQuantity = async (productId, newQuantity) => {
    try {
      if (newQuantity <= 0) {
        // If quantity becomes zero, remove the item from the cart
        await handleRemoveProduct(productId, 1);
      } else {
        await AxiosConfig.put(`/cart/${productId}`, { quantity: newQuantity });
        setCartItems((prevItems) =>
          prevItems.map((item) =>
            item.id === productId ? { ...item, quantity: newQuantity } : item
          )
        );
        // Update cart counter in the context by adjusting the total quantity
        const quantityDifference =
          newQuantity -
          cartItems.find((item) => item.id === productId).quantity;
        setCounter((prevCounter) => prevCounter + quantityDifference);
      }
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  const handleAddToCart = async (productId) => {
    try {
      // Fetch product details
      const { data } = await AxiosConfig.get(`/products/${productId}`);

      // Check if the product already exists in the cart
      const existingProductIndex = cartItems.findIndex(
        (item) => item.id === productId
      );

      if (existingProductIndex !== -1) {
        // If the product exists, update its quantity
        const updatedCartItems = [...cartItems];
        updatedCartItems[existingProductIndex].quantity += 1;
        setCartItems(updatedCartItems);
      } else {
        // If the product is new, add it to the cart
        const newCartItem = { ...data, quantity: 1 };
        setCartItems([...cartItems, newCartItem]);
      }

      // Increment the cart counter
      setCounter((prevCounter) => prevCounter + 1);
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <>
    <Breadcrumbs items={breadcrumbs} pageTitle="Cart Details" />
    <div className="cartContainer">
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty.</h2>
          <img src="Images/cart1.png" alt="Empty Cart" />
        </div>
      ) : (
        <>
          <div className="product-container">
            {cartItems.map((item) => (
              <div key={item.id} className="row-cart">
                <div className="Product-Img">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="Product-Content">
                  <div className="Product-Details">
                    <h3>{item.title}</h3>
                    <p>
                      <span className="currentPrice">${item.price}</span>
                      <span className="oldPrice">${item.old_price}</span>
                      <span className="discount">{item.discount}% Off</span>
                    </p>
                  </div>
                  <div className="Quantity-Price">
                    <div className="Product-Quantity">
                      <button
                        onClick={() =>
                          handleUpdateQuantity(item.id, item.quantity - 1)
                        }
                        disabled={item.quantity === 1}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleAddToCart(item.id)}>
                        +
                      </button>
                      <button
                        onClick={() =>
                          handleRemoveProduct(item.id, item.quantity)
                        }
                        className="delete"
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                    <div className="Product-Price">
                      <p>
                        Total: <span>${item.price * item.quantity}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="total">
            <h4>
              Total Price: <span>${calculateTotalPrice()}</span>
            </h4>
            <button className="btn checkout">Checkout</button>
          </div>
        </>
      )}
    </div>
    </>
  );
};

export default Cart;
