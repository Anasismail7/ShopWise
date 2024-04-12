import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AxiosConfig from "../../../Axios/AxiosConfig";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import { CartContext } from "../../utils/CartContext";
import { FaTrashAlt } from "react-icons/fa";

export const Cart = () => {
  const [pdCounters, setPdCounters] = useState({}); // Store quantity for each product
  const [cartItems, setCartItems] = useState([]); // Initialize with an empty array
  const { id } = useParams();
  const breadcrumbs = [
    { label: "Home", path: "/" },
    { label: "Pages", path: "/" },
  ];

  const { setCounter } = useContext(CartContext);

  // Function to handle quantity change
  const handleQuantityChange = (productId, quantity) => {
    setPdCounters((prevCounters) => ({
      ...prevCounters,
      [productId]: quantity,
    }));
  };

  useEffect(() => {
    async function getCart() {
      try {
        const { data } = await AxiosConfig({
          url: "/cart",
        });

        const counters = {};
        data.forEach((product) => {
          counters[product.id] = 1;
        });
        setPdCounters(counters);
        setCartItems(data);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    }
    getCart();
  }, []);

  // Function to calculate subtotal for a product
  const calculateSubtotal = (product) => {
    return product.price * pdCounters[product.id];
  };

  // Function to calculate total price of all products
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, product) => total + calculateSubtotal(product),
      0
    );
  };

  async function handleCart(productId) {
    const { data } = await AxiosConfig({
      url: `/products/${productId}`,
    });
    // Add the quantity of the added item to the current counter value
    setCounter((prevCounter) => prevCounter + pdCounters[productId]);
    addToCart(data);
  }

async function removeFromCart(productId) {
  try {
    await AxiosConfig({
      method: "DELETE",
      url: `/cart/${productId}`,
    });
    // Remove the deleted product from cartItems state
    setCartItems(cartItems.filter((item) => item.id !== productId));
    // Update cart count in CartContext by subtracting the quantity of the deleted item
    setCounter((prevCounter) => prevCounter - pdCounters[productId]);
  } catch (error) {
    console.error("Error removing product from cart:", error);
  }
}async function removeFromCart(productId) {
  try {
    await AxiosConfig({
      method: "DELETE",
      url: `/cart/${productId}`,
    });
    // Remove the deleted product from cartItems state
    setCartItems(cartItems.filter((item) => item.id !== productId));
    // Update cart count in CartContext by subtracting the quantity of the deleted item
    setCounter((prevCounter) => prevCounter - pdCounters[productId]);
  } catch (error) {
    console.error("Error removing product from cart:", error);
  }
}
  return (
    <>
      <Breadcrumbs items={breadcrumbs} pageTitle="Cart Details" />
      <div className="cartContainer">
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Your Cart is empty!</h2>
            <img src= "/Images/cart1.png" alt="empty-cart" />
          </div>
        ) : (
          <>
            {cartItems.map((product) => (
              <div className="product-container" key={product.id}>
                <div className="row-cart">
                  <div className="Product-Img">
                    <img src={product.image} alt={product.title} />
                  </div>
                  <div className="Product-Content">
                    <div className="Product-Details">
                      <h3>{product.title}</h3>
                      <p>{product.description}</p> {/* Fix typo here */}
                      <span className="currentPrice">${product.price}</span>
                      <span className="oldPrice">${product.old_price}</span>
                      <span className="discount">{product.discount}% Off</span>
                    </div>
                    <div className="Quantity-Price">
                      <div className="Product-Quantity">
                        <button
                          onClick={() =>
                            handleQuantityChange(
                              product.id,
                              Math.max(pdCounters[product.id] - 1, 1)
                            )
                          }
                        >
                          -
                        </button>
                        <span>{pdCounters[product.id]}</span>
                        <button
                          onClick={() =>
                            handleQuantityChange(
                              product.id,
                              pdCounters[product.id] + 1
                            )
                          }
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeFromCart(product.id)}
                          className="delete"
                        >
                          <FaTrashAlt />
                        </button>
                      </div>
                      <div className="Product-Price">
                        <p>
                          Total Price:{" "}
                          <span>${calculateSubtotal(product)}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="total">
              {cartItems.map((product) => (
                <button
                  key={product.id}
                  onClick={() => {
                    setCounter(pdCounters[product.id]);
                    handleCart(product.id);
                  }}
                  className="btn single"
                >
                  Add to Cart
                </button>
              ))}
              <h4>Total: ${calculateTotal()}</h4>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
