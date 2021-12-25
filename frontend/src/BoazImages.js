import React from "react";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import boaz from "./assets/images/boaz.jpg";
import boaz1 from "./assets/images/boaz1.jpg";
import boaz2 from "./assets/images/boaz2.jpg";
import boaz3 from "./assets/images/boaz3.jpg";
import boaz4 from "./assets/images/boaz4.jpg";

const options = {
  settings: {
    autoplaySpeed: 3000,
    boxShadow: "0px 10px 40px #00000070;",
    disableKeyboardControls: false,
    disablePanzoom: false,
    disableWheelControls: false,
    hideControlsAfter: 3000,
    lightboxTransitionSpeed: 0.3,
    lightboxTransitionTimingFunction: "linear",
    overlayColor: "rgba(30, 30, 30, 0.9)",
    slideAnimationType: "fade",
    slideSpringValues: [300, 50],
    slideTransitionSpeed: 0.6,
    slideTransitionTimingFunction: "linear",
    usingPreact: false,
  },
  buttons: {
    backgroundColor: "rgb(247, 52, 94)",
    iconColor: "rgba(255, 255, 255, 0.8)",
    iconPadding: "10px",
    showAutoplayButton: true,
    showCloseButton: true,
    showDownloadButton: true,
    showFullscreenButton: true,
    showNextButton: true,
    showPrevButton: true,
    showThumbnailsButton: true,
    size: "35px",
  },
  caption: {
    captionAlignment: "start",
    captionColor: "#FFFFFF",
    captionContainerPadding: "0",
    captionFontFamily: "inherit",
    captionFontSize: "120%",
    captionFontStyle: "inherit",
    captionFontWeight: "200",
    captionTextTransform: "inherit",
    showCaption: true,
  },
  thumbnails: {
    showThumbnails: true,
    thumbnailsAlignment: "center",
    thumbnailsContainerBackgroundColor: "transparent",
    thumbnailsContainerPadding: "10px",
    thumbnailsGap: "0 3px",
    thumbnailsIconColor: "#ffffff",
    thumbnailsOpacity: 0.4,
    thumbnailsPosition: "bottom",
    thumbnailsSize: ["100px", "80px"],
  },
  progressBar: {
    backgroundColor: "#f2f2f2",
    fillColor: "#5f5cff",
    height: "3px",
    showProgressBar: true,
  },
};

const BoazImages = () => {
  return (
    <div className="gray-wrapper-boaz-img">
      <p className="sub-header">Gallery</p>

      <div className="boaz-image-container">
        <SimpleReactLightbox>
          <SRLWrapper options={options}>
            <a href={boaz1}>
              <img src={boaz1} alt="Boaz" className="gallery-img boaz1" />
            </a>
            <a href={boaz4}>
              <img src={boaz4} alt="Boaz" className="gallery-img boaz4" />
            </a>
            <a href={boaz}>
              <img src={boaz} alt="Boaz" className="gallery-img boaz" />
            </a>
            <a href={boaz2}>
              <img src={boaz2} alt="Boaz" className="gallery-img boaz2" />
            </a>
            <a href={boaz3}>
              <img src={boaz3} alt="Boaz" className="gallery-img boaz3" />
            </a>
          </SRLWrapper>
        </SimpleReactLightbox>
      </div>
    </div>
  );
};

export default BoazImages;
