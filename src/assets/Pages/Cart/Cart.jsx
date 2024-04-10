import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AxiosConfig from "../../../Axios/AxiosConfig";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";

export const Cart = () => {
  const [pdCounters, setPdCounters] = useState({}); // Store quantity for each product
  const [cartItems, setCartItems] = useState([]); // Initialize with an empty array
  const { id } = useParams();
  const breadcrumbs = [
    { label: "Home", path: "/" },
    { label: "Pages", path: "/" },
  ];

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
        // Initialize quantity counters for each product
        const counters = {};
        data.forEach((product) => {
          counters[product.id] = 1; // Default quantity is 1
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

  return (
    <>
      <Breadcrumbs items={breadcrumbs} pageTitle="Product Detail" />
      <div className="cartContainer">
        {cartItems.length === 0 ? (
          <p>No items in the cart</p>
        ) : (
          <>
            {cartItems.map((product) => (
              <div className="product-container" key={product.id}>
                <div className="row">
                  <div className="Product-Img">
                    <img src={product.image} alt={product.title} />
                  </div>
                  <div className="Product-Content">
                    <div className="Product-Details">
                      <h3>{product.title}</h3>
                      <p>{product.description}</p> {/* Fix typo here */}
                      <span className="currentPrice">
                        ${product.price}
                      </span>
                      <span className="oldPrice">${product.old_price}</span>
                      <span className="discount">
                        {product.discount}% Off
                      </span>
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
              <h4>Total: ${calculateTotal()}</h4>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
