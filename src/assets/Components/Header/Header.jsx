import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { ImMobile } from "react-icons/im";
import { TbArrowsShuffle } from "react-icons/tb";
import { VscHeart } from "react-icons/vsc";
import { SlUser } from "react-icons/sl";

const Header = () => {
  // State to manage the visibility of the dropdown menus
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);

  // Function to handle the click event on the language dropdown
  const handleLanguageClick = () => {
    setShowLanguageDropdown(!showLanguageDropdown);
    setShowCurrencyDropdown(false);
  };

  // Function to handle the click event on the currency dropdown
  const handleCurrencyClick = () => {
    setShowCurrencyDropdown(!showCurrencyDropdown);
    setShowLanguageDropdown(false);
  };

  // Function to handle mouse leave event on dropdown menus
  const handleMouseLeave = () => {
    setShowLanguageDropdown(false);
    setShowCurrencyDropdown(false);
  };

  return (
    <header>
      <nav className="header-nav">
        <ul className="left-menu">
          <li
            className="header-item"
            onClick={handleLanguageClick}
            onMouseLeave={handleMouseLeave}
          >
            <img
              className="lg_img"
              src="/src/assets/Images/eng.png"
              alt="English"
            />{" "}
            English
            <IoIosArrowDown className="arrowdown_icon" />
            {showLanguageDropdown && (
              <ul className="dropdown lg">
                <li>
                  <img
                    className="lg_img"
                    src="/src/assets/Images/eng.png"
                    alt="English"
                  />{" "}
                  English
                </li>
                <li>
                  <img
                    className="lg_img"
                    src="/src/assets/Images/fn.png"
                    alt="France"
                  />{" "}
                  France
                </li>
                <li>
                  <img
                    className="lg_img"
                    src="/src/assets/Images/us.png"
                    alt="US"
                  />{" "}
                  United States
                </li>
              </ul>
            )}
          </li>
          <li onClick={handleCurrencyClick} onMouseLeave={handleMouseLeave}>
            USD <IoIosArrowDown className="arrowdown_icon" />
            {showCurrencyDropdown && (
              <ul className="dropdown crun">
                <li>USD</li>
                <li>EUR</li>
                <li>GBR</li>
              </ul>
            )}
          </li>
          <li>
            <ImMobile /> 123-456-7890
          </li>
        </ul>
        <ul className="right-menu">
          <li>
            <TbArrowsShuffle /> Compare
          </li>
          <li>
            <VscHeart /> Wishlist
          </li>
          <li>
            <SlUser /> Login
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
