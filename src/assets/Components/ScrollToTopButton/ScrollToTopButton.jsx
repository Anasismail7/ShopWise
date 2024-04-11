import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTopButton = () => {
  // State to track scroll position
  const [scrollPosition, setScrollPosition] = useState(0);

  // Listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top action
  const scrollToTop = () => {
    scroll.scrollToTop({
      smooth: true,
      duration: 500,
    });
  };

  // Conditionally render the button
  const showButton = scrollPosition > 100; // Show when scrolled down 100px

  return (
    <div className="scroll-to-top-container">
      {showButton && (
        <Link to="top" spy={true} smooth={true} duration={500}>
          <button onClick={scrollToTop} className="scroll-to-top-button">
            <IoIosArrowUp />
          </button>
        </Link>
      )}
    </div>
  );
};

export default ScrollToTopButton;
