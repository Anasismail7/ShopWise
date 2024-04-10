import React, { useContext, useState, useEffect } from "react";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import { Link, useParams } from "react-router-dom";
import { FaRegHeart, FaFacebookF, FaTwitter } from "react-icons/fa";
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
import toast from "react-hot-toast";

const SingleProduct = ({ data }) => {
  const [activeTab, setActiveTab] = useState("description");
  const [product, setProduct] = useState({});
  const { id } = useParams();

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

  useEffect(() => {
    async function getProduct() {
      try {
        const { data } = await AxiosConfig.get(`/products/${id}`);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }
    getProduct();
  }, [id]);

  async function handleCart(id) {
    const { data } = await AxiosConfig({
      url: `/products/${id}`,
    });
    addToCart(data);
  }

  async function addToCart(result) {
    try {
      const { data } = await AxiosConfig({
        url: "/cart",
        method: "POST",
        data: result,
      });
      toast.success("Added to Cart");
    } catch (error) {
      toast.error("This item already added");
    }
  }
  return (
    <>
      <Breadcrumbs items={breadcrumbs} pageTitle="Product Detail" />
      <div className="single-product">
        <div className="product-wrapper">
          <div className="img-wrapper">
            <img src={product.image} alt="" className="cover-img" />
            <div className="small-images">{/* Small images */}</div>
          </div>

          <div className="product-info">
            <h1 className="product-title">{product.title}</h1>
            <div className="price-info">
              <span className="price">${product.price}</span>
              <del className="rating">${product.old_price}</del>
              <span className="discount">{product.discount}% Off</span>

              <div className="rating">
                <IoStar className="star" />
                <IoStar className="star" />
                <IoStar className="star" />
                <IoStar className="star" />
                <IoStarHalf className="star" /> {""}
                <span className="rating">({product.rating?.count})</span>
              </div>
            </div>

            <p>{product.description}</p>
            <div className="product-benefits">
              {/* Benefits */}
              <ul>
                <li>
                  <IoShieldCheckmarkOutline className="benefit-icon" /> 1 Year
                  AL Jazeera Brand Warranty
                </li>
                <li>
                  <IoSync className="benefit-icon" /> 30 Day Return Policy
                </li>
                <li>
                  <FaSackDollar className="benefit-icon" /> Cash on Delivery
                  available
                </li>
              </ul>
            </div>
            <div className="product-sizes">
              {/* Sizes */}
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
            <div className="quantity-controls">
              {/* Quantity controls */}
              <button className="btn-control" onClick={handleDecrement}>
                -
              </button>
              <span>{quantity}</span>
              <button className="btn-control" onClick={handleIncrement}>
                +
              </button>
              <button
                onClick={() => {
                  setCounter(quantity);
                  handleCart(product.id);
                }}
                className="btn single"
              >
                Add to Cart
              </button>
              <IoShuffle className="icon" />
              <FaRegHeart className="icon" />
            </div>
            <div className="product-cat">
              {/* Product category */}
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
              {/* Social media share */}
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
          {/* Description, additional info, and reviews tabs */}
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
