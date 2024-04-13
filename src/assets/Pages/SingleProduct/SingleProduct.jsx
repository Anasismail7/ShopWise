import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import AxiosConfig from "../../../Axios/AxiosConfig";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import Cards from "../../Components/cards/Cards";
import { CartContext } from "../../utils/CartContext";
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

const SingleProduct = () => {
  const [activeTab, setActiveTab] = useState("description");
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const { setCounter } = useContext(CartContext);
  const [selectedSize, setSelectedSize] = useState("");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const breadcrumbs = [
    { label: "Home", path: "/" },
    { label: "Pages", path: "/" },
  ];

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

  const handleDecrement = () => {
    if (product.quantity > 1) {
      setProduct((prevProduct) => ({
        ...prevProduct,
        quantity: prevProduct.quantity - 1,
      }));
    }
  };

  const handleIncrement = () => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      quantity: prevProduct.quantity + 1,
    }));
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleCart = async () => {
    addToCart(product);
  };

  async function addToCart(result) {
    try {
      const { data } = await AxiosConfig({
        url: "/cart",
        method: "POST",
        data: result,
      });
      setCounter((prevCounter) => prevCounter + 1);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <>
      <Breadcrumbs items={breadcrumbs} pageTitle="Product Detail" />
      <div className="single-product">
        <div className="product-wrapper">
          <div className="img-wrapper">
            <img src={product.image} alt="" className="cover-img" />
            <div className="small-images">
              <img src={product.smallimg1} alt="" className="small-img" />
              <img src={product.smallimg2} alt="" className="small-img" />
              <img src={product.smallimg3} alt="" className="small-img" />
              <img src={product.smallimg4} alt="" className="small-img" />
            </div>
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
              <span>{product.quantity}</span>
              <button className="btn-control" onClick={handleIncrement}>
                +
              </button>
              <button
                onClick={() => {
                  setCounter(product.quantity);
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
              {activeTab === "reviews" && (
                <div className="userReview">
                  <h2>
                    2 Review For <span>Blue Dress For Woman</span>
                  </h2>

                  <div className="eachReview">
                    <div className="userImg">
                      <img src="/src/assets/Images/user_img1.jpg" alt="" />
                    </div>

                    <div className="reviewData">
                      <div className="eachUserReview">
                        <h3>Alea Brooks</h3>
                        <p>March 5 2018</p>
                        <p>
                          Lorem Ipsumin gravida nibh vel velit auctor aliquet.
                          Aenean sollicitudin, lorem quis bibendum auctor, nisi
                          elit consequat ipsum, nec sagittis sem nibh id elit.
                          Duis sed odio sit amet nibh vulputate.
                        </p>
                      </div>

                      <div className="ratingStars">
                        <span>
                          <IoStar />
                        </span>
                        <span>
                          <IoStar />
                        </span>
                        <span>
                          <IoStar />
                        </span>
                        <span>
                          <IoStar />
                        </span>
                        <span>
                          <IoStar />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="eachReview">
                    <div className="userImg">
                      <img src="/src/assets/Images/user_img2.jpg" alt="" />
                    </div>

                    <div className="reviewData">
                      <div className="eachUserReview">
                        <h3>Jinwoo Wong</h3>
                        <p>June 17 2018</p>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters.
                        </p>
                      </div>

                      <div className="ratingStars">
                        <span>
                          <IoStar />
                        </span>
                        <span>
                          <IoStar />
                        </span>
                        <span>
                          <IoStar />
                        </span>
                        <span>
                          <IoStar />
                        </span>
                        <span>
                          <IoStar />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="reviewForm">
                    <h2>Add a review</h2>

                    <div className="starIcons">
                      <span>
                        <IoStar />
                      </span>
                      <span>
                        <IoStar />
                      </span>
                      <span>
                        <IoStar />
                      </span>
                      <span>
                        <IoStar />
                      </span>
                      <span>
                        <IoStar />
                      </span>
                    </div>

                    <Formik>
                      <Form className="formSection">
                        <div className="reviewFormFields">
                          <Field
                            as="textarea"
                            id="textarea"
                            name="textarea"
                            placeholder="Your review"
                          />
                          <Field
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter Your Name"
                          />
                          <Field
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter Your Email"
                          />
                        </div>

                        <button type="submit" className="reviewFormBtn btn">
                          Submit Review
                        </button>
                      </Form>
                    </Formik>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="related-product">
          <h2>Related Products</h2>
          <Cards />
        </div>
      </div>
    </>
  );
};

export default SingleProduct;