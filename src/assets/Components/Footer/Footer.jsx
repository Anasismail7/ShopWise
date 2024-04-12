import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";
import { ImMobile } from "react-icons/im";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TfiGoogle } from "react-icons/tfi";
import { CiYoutube } from "react-icons/ci";
import { TiSocialInstagram } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="left_items">
        <div className="footer-column">
          <div className="footer-logo">
            <img src="/Images/logo_light.png" alt="Logo" />
          </div>
          <div className="footer-info">
            <p>
              If you are going to use of Lorem Ipsum need to be sure there isn't
              hidden of text
            </p>
          </div>
          <div className="footer-media">
            <ul>
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
      
        <div className="footer-links">
          <div className="footer-column">
            <h3>Useful Links</h3>
            <ul>
              <li>About Us</li>
              <li>FAQ</li>
              <li>Location</li>
              <li>Affiliates</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Category</h3>
            <ul>
              <li>Men</li>
              <li>Women</li>
              <li>Kids</li>
              <li>Best Sellers</li>
              <li>New Arrivals</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>My Account</h3>
            <ul>
              <li>My Account</li>
              <li>Discount</li>
              <li>Returns</li>
              <li>Orders History</li>
              <li>Order Tracking</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contact Info</h3>
            <ul>
              <li>
                <SlLocationPin className="contacts-icon" />
                123 Street, Old Trafford, New South London , UK
              </li>
              <li>
                <TfiEmail className="contacts-icon" /> info@sitename.com
              </li>
              <li>
                <ImMobile className="contacts-icon" /> +457 789 789 65
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2020 All Rights Reserved by Bestwebcreator</p>
        <div className="payment-methods">
          <img src="/Images/visa.png" alt="visa.png" />
          <img src="/Images/discover.png" alt="discover" />
          <img src="/Images/master_card.png" alt="master_card" />
          <img src="/Images/paypal.png" alt="paypal" />
          <img
            src="/Images/amarican_express.png"
            alt="amarican_express"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
