import React, { useEffect } from "react";
import boaz from "./assets/images/boaz4.jpg";

const BoazFront = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="boaz-front-container">
      <div className="boaz-front-flex-container">
        <div className="boaz-front-flex-left">
          <p className="header" style={{ textAlign: "left" }}>
            Boaz <span style={{ fontSize: "40%" }}>(Father)</span>
          </p>

          <p
            className="small-header"
            style={{ paddingLeft: 5, paddingBottom: 10 }}
          >
            F1B Mini Golden Doodle
          </p>

          <p className="front-description" style={{ paddingLeft: 5 }}>
            Boaz is a head-turner! His beautiful coat, adorable face, and
            charming personality demand attention everywhere he goes – and Boaz
            loves it! This apricot mini English Goldendoodle LOVES retrieving.
            He’s quick, agile, and he knows just how to beat the other dogs when
            they’re all chasing his ball. Boaz is a calm, loyal dog who is sure
            to be close to his human dad’s side.
          </p>
        </div>
        <div className="boaz-front-flex-right">
          <img
            src={boaz}
            alt="boaz the mini golden doodle"
            className="boaz-front-img"
          />
        </div>
      </div>
    </div>
  );
};

export default BoazFront;
