import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { IoShuffle } from "react-icons/io5";
import { CiZoomIn } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { CartContext } from "../../utils/CartContext";

const FeaturedProducts = () => {
  const sliderRef = useRef(null); // Reference for the Slider component

  // Define product data
  const products = [
    {
      id: 1,
      name: "Product 1",
      images: ["/src/assets/Images/product_img1.jpg"],
      price: 10.99,
      discount: 20,
      oldPrice: 13.99,
      rating: 4.5,
    },
    {
      id: 2,
      name: "Product 2",
      images: ["/src/assets/Images/product_img2.jpg"],
      price: 15.99,
      discount: 10,
      oldPrice: 17.99,
      rating: 4.2,
    },
    {
      id: 3,
      name: "Product 3",
      images: ["/src/assets/Images/product_img3.jpg"],
      price: 15.99,
      oldPrice: 17.99,
      rating: 4.2,
    },
    {
      id: 4,
      name: "Product 4",
      images: ["/src/assets/Images/product_img4.jpg"],
      price: 15.99,
      discount: 10,
      oldPrice: 17.99,
      rating: 4.2,
    },
    {
      id: 5,
      name: "Product 5",
      images: ["/src/assets/Images/product_img5.jpg"],
      price: 15.99,
      discount: 10,
      oldPrice: 17.99,
      rating: 4.2,
    },
    {
      id: 6,
      name: "Product 6",
      images: ["/src/assets/Images/product_img6.jpg"],
      price: 15.99,
      discount: 10,
      oldPrice: 17.99,
      rating: 4.2,
    },
    {
      id: 7,
      name: "Product 7",
      images: ["/src/assets/Images/product_img7.jpg"],
      price: 15.99,
      discount: 10,
      oldPrice: 17.99,
      rating: 4.2,
    },
    {
      id: 8,
      name: "Product 8",
      images: ["/src/assets/Images/product_img8.jpg"],
      price: 15.99,
      discount: 10,
      oldPrice: 17.99,
      rating: 4.2,
    },
    // Add more products here as needed
  ];

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

  const { counter, setCounter } = useContext(CartContext);

  return (
    <div className="featured-products">
      <h2>Featured Products</h2>
      <Slider ref={sliderRef} {...sliderSettings}>
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.images[0]} alt={`Product ${product.id}`} />
            <Link to={`/product/${product.id}`}>{product.name}</Link>
            <span className="price"> ${product.price}</span>
            <del>${product.oldPrice}</del>
            <span className="discount">{product.discount}%</span>
            <p>Rating: {product.rating}/5</p>
            <span className="product-icons">
              {""}
              <BsCart3
                onClick={() => setCounter(counter + 1)}
                className="icon"
              />
              <IoShuffle className="icon" />
              <CiZoomIn className="icon" />
              <FaRegHeart className="icon" />
            </span>
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
