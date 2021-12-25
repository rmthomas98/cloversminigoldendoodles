import React, { useEffect } from "react";
import CloverFront from "./CloverFront";
import CloverAbout from "./CloverAbout";
import CloverImages from "./CloverImages";

const Clover = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Clover";
  }, []);

  return (
    <div className="clover-container">
      <CloverFront />
      <CloverAbout />
      <CloverImages />
    </div>
  );
};

export default Clover;
