import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const MySlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef();

  useEffect(() => {
    setActiveIndex(slideIndex);
  }, [slideIndex]);

  // Function to handle slide change
  const handleSlideChange = (index) => {
    setSlideIndex(index);
  };

  // Function to move to the next slide
  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  // Function to move to the previous slide
  const previousSlide = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    afterChange: handleSlideChange, // Call handleSlideChange after each slide change
  };

  return (
    <div className="slider-container">
      <Slider
        {...settings}
        ref={sliderRef}
        className={activeIndex === slideIndex ? "slide-animate" : ""}
      >
        <div className="slide">
          <img src="/Images/banner1.jpg" alt="" />
          <div className="slide_content">
            <p>50% off in all products</p>
            <h2>Woman Fashion</h2>
            <button className="btn">Shop Now</button>
          </div>
        </div>
        <div className="slide">
          <img src="/Images/banner2.jpg" alt="" />
          <div className="slide_content">
            <p>50% off in all products</p>
            <h2>Man Fashion</h2>
            <button className="btn">Shop Now</button>
          </div>
        </div>
        <div className="slide">
          <img src="/Images/banner3.jpg" alt="" />
          <div className="slide_content">
            <p>50% off in all products</p>
            <h2>Summer Sale</h2>
            <button className="btn">Shop Now</button>
          </div>
        </div>
      </Slider>
      <IoIosArrowForward className="next-button" onClick={nextSlide} />
      <IoIosArrowBack className="prev-button" onClick={previousSlide} />
    </div>
  );
};

export default MySlider;
