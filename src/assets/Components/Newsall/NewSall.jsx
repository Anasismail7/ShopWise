import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router-dom

const NewSall = () => {
  return (
    <div className="my-container">
      <div className="row sall">
        <div className="my-div">
          <div className="sall_img">
            <img
              src="/src/assets/Images/shop_banner_img1.jpg"
              alt="Image 1"
              className="sall_img"
            />
          </div>

          <div className="sall_doc sec1">
            <h5>Super Sale</h5>
            <h3>New Collection</h3>
            <Link to="/">Shop Now</Link>
          </div>
        </div>
        <div className="my-div">
          <div className="sall_img">
            <img
              src="/src/assets/Images/shop_banner_img2.jpg"
              alt="Image 1"
              className="sall_img"
            />
          </div>
          <div className="sall_doc sec2">
            <h3>New Season</h3>
            <h4>Sale 40% Off</h4>
            <Link to="/">Shop Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSall;
