import React, { useState, useEffect, useContext } from "react";
import AxiosConfig from "../../../Axios/AxiosConfig";
import { CartContext } from "../../utils/CartContext";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const { counter, setCounter } = useContext(CartContext);

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
      await AxiosConfig.put(`/cart/${productId}`, { quantity: newQuantity });
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  const handleAddToCart = async (productId, quantity) => {
    try {
      const { data } = await AxiosConfig.get(`/products/${productId}`);
      await AxiosConfig.post("/cart", { ...data, quantity });
      setCounter((prevCounter) => prevCounter + quantity);
      // Optionally, you can fetch the updated cart items and set them here
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
    <div className="cartContainer">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty.</h2>
          <img src="/empty-cart.png" alt="Empty Cart" />
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
                          handleRemoveProduct(item.id, item.quantity)
                        }
                        className="delete"
                      >
                        X
                      </button>
                      <button
                        onClick={() =>
                          handleUpdateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          handleUpdateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                    <div className="Product-Price">
                      <p>
                        Total: <span>${item.price * item.quantity}</span>
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleAddToCart(item.id, item.quantity)}
                    className="btn single"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="total">
            <h4>
              Total Price: <span>${calculateTotalPrice()}</span>
            </h4>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
