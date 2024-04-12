import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";

const Services = () => {
  return (
    <div className="services_container">
      <div className="row">
        <div className="item">
          <div className="icon">
            <img src="/Images/shipped.png" alt="" />
          </div>
          <div className="service_doc">
            <h4>Free Delivery</h4>
            <p>
              If you are going to use of Lorem, you need to be sure there
              anything
            </p>
          </div>
        </div>
        <div className="item refund">
          <div className="icon">
            <img src="/Images/cashback.png" alt="" />
          </div>
          <div className="service_doc">
            <h4>30 Day Return</h4>
            <p>
              If you are going to use of Lorem, you need to be sure there
              anything
            </p>
          </div>
        </div>
        <div className="item">
          <div className="icon">
            <img src="/Images/24-hours-service.png" alt="" />
          </div>
          <div className="service_doc">
            <h4>27/4 Support</h4>
            <p>
              If you are going to use of Lorem, you need to be sure there
              anything
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
