import React from "react";
import weight from "./assets/images/weight-green.svg";
import calendar from "./assets/images/calendar-green.svg";
import dog from "./assets/images/miniature-poodle-green.svg";
import coat from "./assets/images/pet-grooming-green.svg";
import heart from "./assets/images/heart-green.svg";
import Lottie from "react-lottie-player";
import boazAnimation from "./assets/images/boaz-lab.json";


const BoazAbout = () => {
  return (
    <div className="boaz-about-container                                                                                        ">

        <p className="sub-header">About Boaz</p>


        <p className="header-description" style={{ fontSize: "110%" }}>
          "He has a very loyal and calm personality."
        </p>

      <div className="about-boaz-flex-container">
   
          <div className="icon-about-container">
            <img src={calendar} alt="birthday cake" className="icon-about" />
            <p className="small-title">Birthday</p>
            <p className="about-icon-description">January 28, 2018</p>
          </div>
  

          <div className="icon-about-container">
            <img src={dog} alt="golden doodle" className="icon-about" />
            <p className="small-title">Breed</p>
            <p className="about-icon-description">F1B Mini Golden Doodle</p>
          </div>


          <div className="icon-about-container">
            <img src={weight} alt="weight" className="icon-about" />
            <p className="small-title">Weight</p>
            <p className="about-icon-description">20 Pounds</p>
          </div>


          <div className="icon-about-container">
            <img src={coat} alt="boaz fur coat" className="icon-about" />
            <p className="small-title">Coat</p>
            <p className="about-icon-description">
              Wavy, Apricot, Non-Shedding
            </p>
          </div>


          <div className="icon-about-container">
            <img src={heart} alt="heart" className="icon-about" />
            <p className="small-title">Loves</p>
            <p className="about-icon-description">Playing Frisbee</p>
          </div>

      </div>
      <div className="dna-container">
        <div className="dna-left">

            <Lottie animationData={boazAnimation} play loop className="dna" />

        </div>

          <div className="dna-right">
            <p className="dna-title">DNA Test Results</p>
            <p
              className="small-paragraph"
              style={{ maxWidth: 500, paddingBottom: 5, fontSize: "85%" }}
            >
              Health Clearances: vWD type I clear, prcd-PRA clear, GR1 & 2 PRA
              clear, GM2 Gangliosidosis clear, Osteochondrodysplasia clear,
              Ichthyosis clear, NeWS clear <br></br>
              Trait Testing: F/F
            </p>
            {/* <p className="bar-title">78.2% Poodle (small)</p>
          <div className="poodle-bar">
            <div className="poodle-filler"></div>
          </div>
          <p className="bar-title">21.8% Golden Retriever</p>
          <div className="golden-retriever-bar">
            <div className="golden-retriever-filler"></div>
          </div> */}
            <div className="test-result-btn-container">
              <a
                href="https://www.pawprintgenetics.com/pedigrees/dogs/details/8596/"
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

export default BoazAbout;
