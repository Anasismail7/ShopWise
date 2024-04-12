import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const FeedBack = () => {
  const [feedbackIndex, setFeedbackIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const feedbackRef = useRef();

  useEffect(() => {
    setActiveIndex(feedbackIndex);
  }, [feedbackIndex]);

  // Function to handle slide change
  const handleSlideChange = (index) => {
    setFeedbackIndex(index);
  };

  // Function to move to the next slide
  const nextSlide = () => {
    feedbackRef.current.slickNext();
  };

  // Function to move to the previous slide
  const previousSlide = () => {
    feedbackRef.current.slickPrev();
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    draggable: true,
    afterChange: handleSlideChange, // Call handleSlideChange after each slide change
  };

  return (
    <div className="feedback-container">
      <div className="row_feed">
        <div className="feed_header">
          <h2>Our Clients Say!</h2>
        </div>
        <Slider
          {...settings}
          ref={feedbackRef}
          className={activeIndex === feedbackIndex ? "slide-animate" : ""}
        >
          <div className="feedback-slide">
            <div className="feed_items">
              <div className="feedback-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                  aliquam amet animi blanditiis consequatur debitis dicta
                  distinctio, enim error eum iste libero modi nam natus
                  perferendis possimus quasi sint sit tempora voluptatem.
                </p>
                <div className="client-info">
                  <img src="/Images/user_img1.jpg" alt="" />
                  <div className="client_doc">
                    <h6>Lissa Castro</h6>
                    <span>Designer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="feedback-slide">
            <div className="feed_items">
              <div className="feedback-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                  aliquam amet animi blanditiis consequatur debitis dicta
                  distinctio, enim error eum iste libero modi nam natus
                  perferendis possimus quasi sint sit tempora voluptatem.
                </p>
                <div className="client-info">
                  <img src="/Images/user_img2.jpg" alt="" />
                  <div className="client_doc">
                    <h6>Lissa Castro</h6>
                    <span>Designer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="feedback-slide">
            <div className="feed_items">
              <div className="feedback-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                  aliquam amet animi blanditiis consequatur debitis dicta
                  distinctio, enim error eum iste libero modi nam natus
                  perferendis possimus quasi sint sit tempora voluptatem.
                </p>
                <div className="client-info">
                  <img src="/Images/user_img3.jpg" alt="" />
                  <div className="client_doc">
                    <h6>Lissa Castro</h6>
                    <span>Designer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="feedback-slide">
            <div className="feed_items">
              <div className="feedback-content">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                  aliquam amet animi blanditiis consequatur debitis dicta
                  distinctio, enim error eum iste libero modi nam natus
                  perferendis possimus quasi sint sit tempora voluptatem.
                </p>
                <div className="client-info">
                  <img src="/Images/user_img4.jpg" alt="" />
                  <div className="client_doc">
                    <h6>Lissa Castro</h6>
                    <span>Designer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Add more slides here */}
        </Slider>
      </div>

      <IoIosArrowForward className="next-button feed" onClick={nextSlide} />
      <IoIosArrowBack className="prev-button feed" onClick={previousSlide} />
    </div>
  );
};

export default FeedBack;
