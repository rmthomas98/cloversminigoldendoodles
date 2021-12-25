import React, { useEffect } from "react";
import BoazFront from "./BoazFront";
import BoazAbout from "./BoazAbout";
import BoazImages from "./BoazImages";

const Boaz = () => {
  useEffect(() => {
    document.title = "Boaz";
  });

  return (
    <div className="boaz-container">
      <BoazFront />
      <BoazAbout />
      <BoazImages />
    </div>
  );
};

export default Boaz;
