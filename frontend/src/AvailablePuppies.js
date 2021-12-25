import React from "react";
import { Link } from "react-router-dom";

const AvailablePuppies = () => {
  return (
    <div className="available-puppies-container">

        <p className="sub-header">Available Puppies</p>


        <p className="header-description">
          You must deposit $200 in order to reserve a puppy.
        </p>

      <div className="male-female-flex-container">

          <div className="gender-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              fill="#f7345e"
              className="bi bi-gender-male"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2H9.5zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"
              />
            </svg>
            <p className="gender-title">3 Males</p>
            <p className="gender-price">Price: $2,500</p>
            <Link
              className="full-btn test-result-btn contact-btn"
              to="/contact"
            >
              Reserve Now
            </Link>
          </div>

          <div className="gender-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              fill="#f7345e"
              className="bi bi-gender-female"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM3 5a5 5 0 1 1 5.5 4.975V12h2a.5.5 0 0 1 0 1h-2v2.5a.5.5 0 0 1-1 0V13h-2a.5.5 0 0 1 0-1h2V9.975A5 5 0 0 1 3 5z"
              />
            </svg>
            <p className="gender-title">1 Female</p>
            <p className="gender-price">Price: $2,700</p>
            <Link
              className="full-btn test-result-btn contact-btn"
              to="/contact"
            >
              Reserve Now
            </Link>
          </div>

      </div>
    </div>
  );
};

export default AvailablePuppies;
