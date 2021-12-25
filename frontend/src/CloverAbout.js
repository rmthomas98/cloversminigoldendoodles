import React from "react";
import weight from "./assets/images/weight-pink.svg";
import calendar from "./assets/images/calendar-pink.svg";
import dog from "./assets/images/miniature-poodle-pink.svg";
import coat from "./assets/images/pet-grooming-pink.svg";
import heart from "./assets/images/heart-pink.svg";
import Lottie from "react-lottie-player";
import cloverAnimation from "./assets/images/clover-lab.json";

const CloverAbout = () => {
  return (
    <div className="clover-about-container">
      <p className="sub-header">About Clover</p>

      <p className="header-description" style={{ fontSize: "110%" }}>
        "She has a very playful and loving personality."
      </p>

      <div className="about-clover-flex-container">
        <div className="icon-about-container">
          <img src={calendar} alt="birthday cake" className="icon-about" />
          <p className="small-title">Birthday</p>
          <p className="about-icon-description">June 16, 2020</p>
        </div>

        <div className="icon-about-container">
          <img src={dog} alt="golden doodle" className="icon-about" />
          <p className="small-title">Breed</p>
          <p className="about-icon-description">F1B Mini Golden Doodle</p>
        </div>

        <div className="icon-about-container">
          <img src={weight} alt="weight" className="icon-about" />
          <p className="small-title">Weight</p>
          <p className="about-icon-description">17-18 Pounds</p>
        </div>

        <div className="icon-about-container">
          <img src={coat} alt="clovers fur coat" className="icon-about" />
          <p className="small-title">Coat</p>
          <p className="about-icon-description">
            Curly, Blue Merle, Non-Shedding
          </p>
        </div>

        <div className="icon-about-container">
          <img src={heart} alt="heart" className="icon-about" />
          <p className="small-title">Loves</p>
          <p className="about-icon-description">Napping and Playing Fetch</p>
        </div>
      </div>
      <div className="dna-container">
        <div className="dna-left">
          <Lottie animationData={cloverAnimation} play loop className="dna" />
        </div>

        <div className="dna-right">
          <p className="dna-title">DNA Test Results</p>

          <p
            className="small-paragraph"
            style={{ maxWidth: 500, paddingBottom: 5, fontSize: "85%" }}
          >
            Clover is 78.2% Poodle (small) and 21.8% Golden Retriever. Click the
            button below to see her full official test results.
          </p>

          <p className="bar-title">78.2% Poodle (small)</p>
          <div className="poodle-bar">
            <div className="poodle-filler"></div>
          </div>

          <p className="bar-title">21.8% Golden Retriever</p>

          <div className="golden-retriever-bar">
            <div className="golden-retriever-filler"></div>
          </div>

          <div className="test-result-btn-container">
            <a
              href="https://my.embarkvet.com/dog/clover559?utm_campaign=cns_ref_dog_pub_profile&utm_medium=other&utm_source=embark"
              target="_blank"
              rel="noreferrer"
              className="full-btn test-result-btn"
            >
              View Official Test Results
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloverAbout;
