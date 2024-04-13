import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { TfiSearch } from "react-icons/tfi";
import { CartContext } from "../../utils/CartContext";

const Navbar = () => {
  const { counter } = useContext(CartContext);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/Images/logo_dark.png" alt="Logo" />
      </div>
      <div className="navbar-right">
        <label htmlFor="inp">
          <i className="fa-solid fa-bars"></i>
        </label>
        <input type="checkbox" id="inp" />
        <div className="nav_items">
          <ul>
            <li>
              <Link className="nav_links active" to={""}>
                Home <IoIosArrowDown className="arrowdown_nav" />
              </Link>
              <ul className="dropdown home">
                <li>Fashion 1</li>
                <li>Fashion 2</li>
                <li>Furniture 1</li>
                <li>Furniture 2</li>
                <li>Fashion 1</li>
                <li>Fashion 1</li>
              </ul>
            </li>
            <li>
              <Link className="nav_links">
                Pages <IoIosArrowDown className="arrowdown_nav" />
              </Link>
              <ul className="dropdown home">
                <li>
                  {" "}
                  <Link className="drop-links" to={"/login"}>
                    Login
                  </Link>{" "}
                </li>
                <li>
                  <Link className="drop-links" to={"/register"}>
                    Register
                  </Link>
                </li>
                <li>About Us</li>
                <li>404 Error Page</li>
                <li>fashion 1</li>
                <li>fashion 1</li>
              </ul>
            </li>
            <li>
              <Link className="nav_links" to={"/products"}>
                Products <IoIosArrowDown className="arrowdown_nav" />
              </Link>
            </li>
            <li>
              <Link className="nav_links" to={"/blog"}>
                Blog <IoIosArrowDown className="arrowdown_nav" />
              </Link>
            </li>
            <li>
              <Link className="nav_links" to={"/shop"}>
                Shop <IoIosArrowDown className="arrowdown_nav" />
              </Link>
            </li>
            <li>
              <Link className="nav_links" to={"/contact"}>
                Contact Us
              </Link>{" "}
            </li>
          </ul>
        </div>
        <div className="nav_icons">
          <ul>
            <li>
              <div className="search-container">
                <a href="#">
                  <TfiSearch className="search_icon" />
                </a>
              </div>
            </li>{" "}
            <li>
            <div className="cart_container">
                <div className="cart_icon">
                  <Link to={"/cart"}>
                    <BsCart3 />
                  </Link>
                  {counter > 0 && <span className="cart_counter">{counter}</span>}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
