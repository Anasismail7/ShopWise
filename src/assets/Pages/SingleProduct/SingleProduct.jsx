import React, { useContext, useState, useEffect } from "react";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TfiGoogle } from "react-icons/tfi";
import { CiYoutube } from "react-icons/ci";
import { TiSocialInstagram } from "react-icons/ti";
import {
  IoShieldCheckmarkOutline,
  IoSync,
  IoShuffle,
  IoStar,
  IoStarHalf,
} from "react-icons/io5";
import { FaSackDollar } from "react-icons/fa6";
import { CartContext } from "../../utils/CartContext";
import AxiosConfig from "../../../Axios/AxiosConfig";

const SingleProduct = () => {
  const [activeTab, setActiveTab] = useState("description");
  const [products, setProducts] = useState({});

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  const breadcrumbs = [
    { label: "Home", path: "/" },
    { label: "Pages", path: "/" },
  ];

  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const [selectedSize, setSelectedSize] = useState("");

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const { setCounter } = useContext(CartContext);

  async function getAllProducts() {
    const { data } = await AxiosConfig.get(`/${id}`);
    setProducts(data);
    console.log(setProducts);
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <Breadcrumbs items={breadcrumbs} pageTitle="Product Detail" />
      <div className="single-product">
        <div className="product-wrapper">
          <div class="img-wrapper">
            <img src={products.image} alt="" class="cover-img" />
            <div class="small-images">
              <img src={products.image} alt="" class="small-img" />
              <img src={products.image} alt="" class="small-img" />
              <img src={products.image} alt="" class="small-img" />
              <img src={products.image} alt="" class="small-img" />
            </div>
          </div>

          <div className="product-info">
            <h1 className="product-title">{setProducts.title}</h1>
            <div className="price-info">
              <div className="price-left">
                <span className="price"> ${products.price}</span>
              </div>
              <div className="rating">
                <IoStar className="star" />
                <IoStar className="star" />
                <IoStar className="star" />
                <IoStar className="star" />
                <IoStarHalf className="star" /> {""}
                <span className="rating">
                  Rating: {products.rating?.rate} ({products.rating?.count}{" "}
                  reviews)
                </span>
              </div>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              blandit massa enim. Nullam id varius nunc id varius nunc.
            </p>
            <div className="product-benefits">
              {/* Add benefits */}
              <ul>
                <li>
                  {" "}
                  <IoShieldCheckmarkOutline className="benefit-icon" /> 1 Year
                  AL Jazeera Brand Warranty
                </li>
                <li>
                  {" "}
                  <IoSync className="benefit-icon" /> 30 Day Return Policy
                </li>
                <li>
                  {" "}
                  <FaSackDollar className="benefit-icon" /> Cash on Delivery
                  available
                </li>
              </ul>
            </div>
            <div className="product-sizes">
              <span>Size</span>
              <span
                className={`size ${selectedSize === "XS" ? "selected" : ""}`}
                onClick={() => handleSizeClick("XS")}
              >
                XS
              </span>
              <span
                className={`size ${selectedSize === "S" ? "selected" : ""}`}
                onClick={() => handleSizeClick("S")}
              >
                S
              </span>
              <span
                className={`size ${selectedSize === "M" ? "selected" : ""}`}
                onClick={() => handleSizeClick("M")}
              >
                M
              </span>
              <span
                className={`size ${selectedSize === "L" ? "selected" : ""}`}
                onClick={() => handleSizeClick("L")}
              >
                L
              </span>
              <span
                className={`size ${selectedSize === "XL" ? "selected" : ""}`}
                onClick={() => handleSizeClick("XL")}
              >
                XL
              </span>
            </div>
            {/* Add quantity controls */}
            <div className="quantity-controls">
              <button className="btn-control" onClick={handleDecrement}>
                -
              </button>
              <span>{quantity}</span>
              <button className="btn-control" onClick={handleIncrement}>
                +
              </button>
              <button
                onClick={() => setCounter(quantity)}
                className="btn single"
              >
                Add to Cart
              </button>
              <IoShuffle className="icon" />
              <FaRegHeart className="icon" />
            </div>
            <div className="product-cat">
              <ul>
                <li>
                  <span>SKU</span>: <a href="#">BE45VGRT</a>
                </li>
                <li>
                  <span>Category</span>: <a href="#">Clothing</a>
                </li>
                <li>
                  <span>Tags</span>: <a href="#">Cloth</a>,
                  <a href="#">printed</a>
                </li>
              </ul>
            </div>
            <div className="social-media">
              <ul>
                <span>Share :</span>
                <li>
                  <FaFacebookF />
                </li>
                <li>
                  <FaTwitter />
                </li>
                <li>
                  <TfiGoogle />
                </li>
                <li>
                  <CiYoutube />
                </li>
                <li>
                  <TiSocialInstagram />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="product-description">
          <div className="product-row">
            <ul>
              <li className={activeTab === "description" ? "active" : ""}>
                <Link onClick={() => handleTabClick("description")}>
                  Description
                </Link>
              </li>
              <li className={activeTab === "additionalInfo" ? "active" : ""}>
                <Link onClick={() => handleTabClick("additionalInfo")}>
                  Additional Info
                </Link>
              </li>
              <li className={activeTab === "reviews" ? "active" : ""}>
                <Link onClick={() => handleTabClick("reviews")}>Reviews</Link>
              </li>
            </ul>
            {activeTab === "description" && (
              <div className="des-info">
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Vivamus bibendum
                  magna Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.Contrary to popular belief, Lorem Ipsum is not simply
                  random text. It has roots in a piece of classical Latin
                  literature from 45 BC, making it over 2000 years old.
                </p>
                <br />
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga. Et harum
                  quidem rerum facilis est et expedita distinctio.
                </p>
              </div>
            )}
            <div className="des-info">
              {activeTab === "additionalInfo" && (
                <table>
                  <tr>
                    <td>Capacity</td>
                    <td>5 Kg</td>
                  </tr>
                  <tr>
                    <td>Color</td>
                    <td>Black, Brown, Red</td>
                  </tr>
                  <tr>
                    <td>Water Resistant</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Material</td>
                    <td>Artificial Leather</td>
                  </tr>
                </table>
              )}
            </div>
            <div className="des-info">
              {activeTab === "reviews" && <p>This is the reviews paragraph.</p>}
            </div>
          </div>
        </div>

        <div className="related-product"></div>
      </div>
    </>
  );
};

export default SingleProduct;
