import React, { useEffect } from "react";
import PuppiesFront from "./PuppiesFront";
import AvailablePuppies from "./AvailablePuppies";
import Gaurantees from "./Gaurantees";
import PuppiesGallery from "./PuppiesGallery";

const Puppies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Puppies";
  }, []);

  return (
    <div className="puppies-container">
      <PuppiesFront />
      <AvailablePuppies />
      <Gaurantees />
      <PuppiesGallery />
    </div>
  );
};

export default Puppies;
