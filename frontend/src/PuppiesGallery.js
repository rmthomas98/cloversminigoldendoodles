import React from "react";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import christmaspuppies1 from "./assets/images/christmas_puppies_1.jpg";
import christmaspuppies2 from "./assets/images/christmas_puppies_2.jpg";
import christmaspuppies3 from "./assets/images/christmas_puppies_3.jpg";
import christmaspuppies4 from "./assets/images/christmas_puppies_4.jpg";
import christmaspuppies5 from "./assets/images/christmas_puppies_5.jpg";
import christmaspuppies6 from "./assets/images/christmas_puppies_6.jpg";
import christmaspuppies7 from "./assets/images/christmas_puppies_7.jpg";

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

const PuppiesGallery = () => {
  return (
    <div className="gray-wrapper-puppies-img">
      <p className="sub-header">Gallery</p>
      <div className="puppies-gallery-container">
        <SimpleReactLightbox>
          <SRLWrapper options={options}>
            <a href={christmaspuppies1}>
              <img
                src={christmaspuppies1}
                alt="Puppies"
                className="gallery-img puppies1"
              />
            </a>
            <a href={christmaspuppies2}>
              <img
                src={christmaspuppies2}
                alt="Puppies"
                className="gallery-img puppies1"
              />
            </a>
            <a href={christmaspuppies3}>
              <img
                src={christmaspuppies3}
                alt="Puppies"
                className="gallery-img puppies1"
              />
            </a>
            <a href={christmaspuppies4}>
              <img
                src={christmaspuppies4}
                alt="Puppies"
                className="gallery-img puppies1"
              />
            </a>
            <a href={christmaspuppies5}>
              <img
                src={christmaspuppies5}
                alt="Puppies"
                className="gallery-img puppies1"
              />
            </a>
            <a href={christmaspuppies6}>
              <img
                src={christmaspuppies6}
                alt="Puppies"
                className="gallery-img puppies1"
              />
            </a>
            <a href={christmaspuppies7}>
              <img
                src={christmaspuppies7}
                alt="Puppies"
                className="gallery-img puppies-big"
              />
            </a>
          </SRLWrapper>
        </SimpleReactLightbox>
      </div>
    </div>
  );
};

export default PuppiesGallery;
