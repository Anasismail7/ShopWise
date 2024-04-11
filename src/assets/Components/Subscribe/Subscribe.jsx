import React from "react";

const Subscribe = () => {
  return (
    <div className="email-input-container">
      <div className="row-subscription">
        <div className="email_doc">
          <h2>Subscribe Our Newsletter</h2>
        </div>
        <div className="input-wrapper">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
