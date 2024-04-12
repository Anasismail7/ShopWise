import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";

const PopupPage = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    // Code to show the popup when the component mounts
    // You can customize this logic based on your requirements
  }, []);

  return (
    showPopup && (
      <div className="popup_container">
        <div className="popup_overlay" onClick={handleClosePopup}></div>
        <div className="popup_content">
          <div className="popup_row">
            <div className="pop_img">
              <img src="/Images/popup_img.jpg" alt="popup_img" />
            </div>
            <div className="popup_doc">
              <h2>Subscribe And Get 25% Discount!</h2>
              <p>
                Subscribe to the newsletter to receive updates about new
                products.
              </p>
              <div className="email_area">
                <input
                  className="email_input"
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                />
                <button className="btn pop">Subscribe</button>
              </div>
              <div className="check_area">
                <input type="checkbox" name="checkbox" />
                <label htmlFor="checkbox">Don't show this popup again!</label>
              </div>
            </div>
            <IoMdClose className="close_icon" onClick={handleClosePopup} />
          </div>
        </div>
      </div>
    )
  );
};

export default PopupPage;
