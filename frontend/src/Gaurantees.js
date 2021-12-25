import React from "react";
import sheild from "./assets/images/sheild-check-mark.svg";
import vaccine from "./assets/images/vaccination.svg";
import worm from "./assets/images/worm.svg";
import socialize from "./assets/images/dog-people.svg";
import family from "./assets/images/family-dog.svg";
import friendly from "./assets/images/dog-and-kid.svg";


const Gaurantees = () => {
  return (
    <div className="gaurantees-container">

        <p className="sub-header">Guarantees</p>


        <p className="header-description">
          All puppies will be properly cared for before going to their new home
        </p>

      <div className="gaurantee-list">

          <p className="small-paragraph gaurantee-container">
            {" "}
            <span>
              <img src={sheild} alt="sheild" className="gaurantee-icon" />
            </span>
            <span className="gaurantee-title">Vet Checked</span>
          </p>

          <p className="small-paragraph gaurantee-container">
            <span>
              <img src={worm} alt="worm" className="gaurantee-icon" />
            </span>
            <span className="gaurantee-title">Dewormed</span>
          </p>

          <p className="small-paragraph gaurantee-container">
            <span>
              <img src={vaccine} alt="vaccinated" className="gaurantee-icon" />
            </span>
            <span className="gaurantee-title">Vaccinated</span>
          </p>

          <p className="small-paragraph gaurantee-container">
            <span>
              <img
                src={socialize}
                alt="well socialized"
                className="gaurantee-icon"
              />
            </span>
            <span className="gaurantee-title">Well Socialized</span>
          </p>

          <p className="small-paragraph gaurantee-container">
            <span>
              <img
                src={family}
                alt="family raised"
                className="gaurantee-icon"
              />
            </span>
            <span className="gaurantee-title">Family Raised</span>
          </p>

          <p className="small-paragraph gaurantee-container">
            <span>
              <img
                src={friendly}
                alt="kid friendly"
                className="gaurantee-icon"
              />
            </span>
            <span className="gaurantee-title">Kid Friendly</span>
          </p>

      </div>
    </div>
  );
};

export default Gaurantees;
