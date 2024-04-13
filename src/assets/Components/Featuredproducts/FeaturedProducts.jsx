import React, { useContext, useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { IoShuffle, IoStar } from "react-icons/io5";
import { CiZoomIn } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { CartContext } from "../../utils/CartContext";
import AxiosConfig from "../../../Axios/AxiosConfig";
import { toast } from "react-toastify";

const FeaturedProducts = () => {
  const sliderRef = useRef(null); // Reference for the Slider component
  const [products, setProducts] = useState([]);
  const { counter, setCounter } = useContext(CartContext);
  const [addedItems, setAddedItems] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  async function getAllProducts() {
    try {
      const { data } = await AxiosConfig("/products");
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  async function handleCart(id) {
    try {
      const { data } = await AxiosConfig({
        url: `/products/${id}`,
      });
      addToCart(data);
      toast.success("Added to Cart"); // Use toast.success for success message
      setAddedItems([...addedItems, id]); // Add the item to the addedItems array
    } catch (error) {
      toast.error("This item already added"); // Use toast.error for error message
    }
  }

  async function addToCart(result) {
    const { data } = await AxiosConfig({
      url: "/cart",
      method: "POST",
      data: result,
    });
  }

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Function to navigate to the next slide
  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  // Function to navigate to the previous slide
  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div className="featured-products">
      <h2>Featured Products</h2>
      <Slider ref={sliderRef} {...sliderSettings}>
        {products?.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={`Product ${product.id}`} />
            <div className="product_info">
              <Link to={`/product/${product.id}`}>{product.title}</Link>
              <span className="price">${product.price}</span>
              <del className="rating">${product.old_price}</del>
              <span className="discount">{product.discount}% Off</span>

              <div className="rate-star">
                <IoStar className="star" />
                <IoStar className="star" />
                <IoStar className="star" />
                <IoStar className="star" />
                <span className="rating">({product.rating.count})</span>
              </div>
              <span className="product-icons">
                {""}
                <BsCart3
                  onClick={() => {
                    if (!addedItems.includes(product.id)) {
                      setCounter(counter + 1);
                      handleCart(product.id);
                    } else {
                      toast.error("You Already Added Me");
                    }
                  }}
                  className="icon"
                />
                <IoShuffle className="icon" />
                <CiZoomIn className="icon" />
                <FaRegHeart className="icon" />
              </span>
            </div>
          </div>
        ))}
      </Slider>
      {/* Next slide button */}
      <IoIosArrowForward className="next-button product" onClick={nextSlide} />
      {/* Previous slide button */}
      <IoIosArrowBack className="prev-button product" onClick={prevSlide} />
    </div>
  );
};

export default FeaturedProducts;
