import React, { useEffect } from "react";
import GoogleMapReact from "google-map-react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About Us";
  }, []);

  const mapSettings = {
    center: {
      lat: 40.1285,
      lng: -83.9593,
    },
    zoom: 14,
  };

  return (
    <div className="about-front-container about-us-page-container">

        <p className="sub-header">About Us</p>

        <p className="header-description">Dog Breeder in Ohio</p>

      <div className="about-front-flex-container">

          <div className="map-front">
            <div className="map-container">
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AIzaSyBDwOOxHknQRqnlWIP9w2LC9qF57xVVOXI",
                }}
                defaultCenter={mapSettings.center}
                defaultZoom={mapSettings.zoom}
              >
                <Location lat={40.1285} lng={-83.9593} />
              </GoogleMapReact>
            </div>
          </div>


          <div className="about-front">
            <p className="small-heading small-title">timeline</p>
            <p className="small-paragraph">
              Clover had her first litter on October 28th, puppies will be ready
              to take home on the 23rd of December, making them perfect for a
              Christmas puppy. Puppies will be all caught up on vaccines and be
              dewormed as well.
            </p>
            <p className="small-heading small-title">location</p>
            <p className="small-paragraph">
              We are located right outside of Saint Paris, Ohio. If you are
              interested in adopting a puppy you are welcome to come visit them
              to see which one you want. You can reach out to us to get our
              address.
            </p>
          </div>

      </div>
    </div>
  );
};

export default About;

const Location = () => {
  return (
    <svg
      className="w-6 h-6"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color: "#cc3434", height: 30 }}
    >
      <path
        fillRule="evenodd"
        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
