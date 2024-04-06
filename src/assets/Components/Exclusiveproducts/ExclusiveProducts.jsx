import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoStar, IoStarHalf } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoShuffle } from "react-icons/io5";
import { CiZoomIn } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { CartContext } from "../../utils/CartContext";
import AxiosConfig from "../../../Axios/AxiosConfig";

const ExclusiveProducts = () => {
  const { counter, setCounter } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  async function getAllProducts() {
    try {
      const { data } = await AxiosConfig.get("");
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="exclusive-products">
      <h2>Exclusive Products</h2>
      <div className="product-links">
        <Link className="product-item active " to="/new-arrival">
          New Arrival
        </Link>
        <Link className="product-item " to="/best-sellers">
          Best Sellers
        </Link>
        <Link className="product-item " to="/featured">
          Featured
        </Link>
        <Link className="product-item " to="/special-offer">
          Special Offer
        </Link>
      </div>

      <div className="product-cards">
        {products?.map((product) => (
          <div key={product.id} className="product-card">
            <img
              key={product.id}
              src={product.image}
              alt={`Product ${product.id} Image `}
            />
            <div className="product_info">
              <Link to={`/product/${product.id}`}>{product.title}</Link>
              <span className="price">${product.price}</span>
              <span className="price">${product.rating.rate}</span>
              <span className="price">${product.rating.count}</span>

              <span className="product-icons">
                <BsCart3
                  onClick={() => setCounter(counter + 1)}
                  className="icon"
                />
                <IoShuffle className="icon" />
                <CiZoomIn className="icon" />
                <FaRegHeart className="icon" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExclusiveProducts;
