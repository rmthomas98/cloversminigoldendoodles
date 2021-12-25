import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import puppies from "./assets/images/christmas_puppies_3.jpg";

const Front = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Clovers Mini Golden Doodles";
  }, []);

  return (
    <div className="front-container">
      <div className="front-contents-container">
        <div className="left-front">
          <p className="header text-gradient" style={{ textAlign: "left" }}>
            Mini Golden Doodles
          </p>

          <p
            className="front-description header-desc"
            style={{ fontSize: "110%" }}
          >
            Mini Golden Doodles for sale in Ohio. Puppies will be ready to go
            home just in time for Christmas!
          </p>

          <div className="front-btns-container">
            <Link to="/puppies" className="full-btn">
              <span style={{ marginRight: 15 }}>Puppies for sale</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{ height: 15 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
            <Link to="/clover" className="link">
              <span style={{ marginRight: 5 }}>Learn More</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 link-arrow"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{ height: 15 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
        <img
          src={puppies}
          alt="mini golden doodle puppies"
          className="puppies-front"
        />
      </div>
    </div>
  );
};

export default Front;
