import React from "react";
import { ChevronDown } from "react-bootstrap-icons";

const PuppiesFront = () => {
  return (
    <div className="puppies-front-container">
      <div className="puppies-front-contents-container">
        <p className="header" style={{ color: "#fff", fontWeight: 200 }}>
          Christmas Puppies Ready to Reserve
        </p>

        <p
          className="header-description"
          style={{ fontSize: "110%", color: "#fff" }}
        >
          Puppies will be ready to go to their forever home at eight weeks old
          on December 23, 2021.
        </p>
      </div>
      <ChevronDown
        size={40}
        color="#fff"
        style={{
          position: "absolute",
          bottom: 20,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />
    </div>
  );
};

export default PuppiesFront;
