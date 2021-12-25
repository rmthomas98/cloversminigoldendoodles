import React from "react";
import { Link } from "react-router-dom";
import boaz from "./assets/images/boaz.jpg";
import clover from "./assets/images/cloverourdog.jpg";
import puppy from "./assets/images/puppies_mini_front.jpg";

const DogView = () => {
  return (
    <div className="dog-view-container">

        <p className="sub-header our-dogs-header">Meet the Family</p>
 

        <p className="our-dogs-description">
          {" "}
          Boaz (Stud), Clover (Mother), and Puppies
        </p>

      <div className="our-dogs-flex-container">
       
          <div className="img-container">
            <img src={boaz} alt="boaz the father dog" className="cover-img" />
            <div className="hover-info">
              <p className="dog-hover-title">Boaz</p>
              {/* <p className="dog-hover-info">
                I'm Boaz (Father) and I'm a F1B Mini Golden Doodle.
              </p> */}
              <Link to="/boaz" className="hover-info-btn">
                <span>Learn More</span>
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>


          <div className="img-container">
            <img
              src={clover}
              alt="clover the mother dog"
              className="cover-img"
            />
            <div className="hover-info">
              <p className="dog-hover-title">Clover</p>
              {/* <p className="dog-hover-info">
                I'm Clover (Mother) and I'm a F1B Mini Golden Doodle.
              </p> */}
              <Link to="/clover" className="hover-info-btn">
                <span>Learn More</span>
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>


          <div className="img-container">
            <img src={puppy} alt="our puppies" className="cover-img" />
            <div className="hover-info ">
              <p className="dog-hover-title">Puppies</p>
              {/* <p className="dog-hover-info">
                Our Puppies are excepted to be born near the end of October and
                will be available near the end of December.
              </p> */}
              <Link to="/puppies" className="hover-info-btn">
                <span>Puppies For Sale</span>
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
    
      </div>
    </div>
  );
};

export default DogView;
