import React from "react";
import cloverFront from "./assets/images/cloverFront.jpg";

const CloverFront = () => {
  return (
    <div className="clover-front-container">
      <div className="clover-front-flex-container">
        <div className="clover-front-flex-left">
          <p className="header" style={{ textAlign: "left" }}>
            Clover <span style={{ fontSize: "40%" }}>(Mother)</span>
          </p>

          <p
            className="small-header"
            style={{ paddingLeft: 5, paddingBottom: 10 }}
          >
            F1B Mini Golden Doodle
          </p>

          <p className="front-description" style={{ paddingLeft: 5 }}>
            Clover is very athletic, fun loving, and loyal. She loves anyone she
            meets including other animals. Clover's favorite thing to do is play
            fetch and go swimming.
          </p>
        </div>

        <div className="clover-front-flex-right">
          <img
            src={cloverFront}
            alt="clover the mini golden doodle"
            className="clover-front-img"
          />
        </div>
      </div>
    </div>
  );
};

export default CloverFront;
