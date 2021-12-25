import React, { useEffect } from "react";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import boaz from "./assets/images/boaz.jpg";
import boaz1 from "./assets/images/boaz1.jpg";
import boaz2 from "./assets/images/boaz2.jpg";
import boaz3 from "./assets/images/boaz3.jpg";
import boaz4 from "./assets/images/boaz4.jpg";
import clover from "./assets/images/clover.jpg";
import clover1 from "./assets/images/clover1.jpg";
import clover2 from "./assets/images/clover2.jpg";
import clover3 from "./assets/images/clover3.jpg";
import clover4 from "./assets/images/clover4.jpg";
import clover5 from "./assets/images/clover5.jpg";
import clover7 from "./assets/images/clover7.jpeg";
import clover8 from "./assets/images/cloverAbout.jpg";
import clover9 from "./assets/images/cloverFront.jpg";
import clover10 from "./assets/images/clovergrass.jpg";
import clover11 from "./assets/images/cloverourdog.jpg";
import clover12 from "./assets/images/puppy.jpg";
import clover13 from "./assets/images/clover8.jpg";
import clover14 from "./assets/images/clover9.jpg";
import clover15 from "./assets/images/clover10.jpg";
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

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Gallery";
  }, []);

  return (
    <div className="gallery-wrapper">
      <div className="gallery-container">
        <p className="header gallery-header">Gallery</p>

        <div className="image-gallery-container">
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
              <a href={clover}>
                <img
                  src={clover}
                  alt="Clover"
                  className="gallery-img clover1"
                />
              </a>
              <a href={clover4}>
                <img
                  src={clover4}
                  alt="Clover"
                  className="gallery-img clover2"
                />
              </a>

              <a href={clover1}>
                <img
                  src={clover1}
                  alt="Clover"
                  className="gallery-img clover3"
                />
              </a>
              <a href={clover5}>
                <img
                  src={clover5}
                  alt="Clover"
                  className="gallery-img clover4"
                />
              </a>
              <a href={clover2}>
                <img
                  src={clover2}
                  alt="Clover"
                  className="gallery-img clover5"
                />
              </a>
              <a href={clover8}>
                <img
                  src={clover8}
                  alt="clover"
                  className="gallery-img clover6"
                />
              </a>
              <a href={clover13}>
                <img
                  src={clover13}
                  alt="Clover"
                  className="gallery-img clover15"
                />
              </a>
              <a href={clover3}>
                <img
                  src={clover3}
                  alt="Clover"
                  className="gallery-img clover7"
                />
              </a>
              <a href={clover7}>
                <img
                  src={clover7}
                  alt="Clover"
                  className="gallery-img clover8"
                />
              </a>
              <a href={clover11}>
                <img
                  src={clover11}
                  alt="Clover"
                  className="gallery-img clover9"
                />
              </a>
              <a href={clover9}>
                <img
                  src={clover9}
                  alt="Clover"
                  className="gallery-img clover10"
                />
              </a>
              <a href={clover10}>
                <img
                  src={clover10}
                  alt="Clover"
                  className="gallery-img clover11"
                />
              </a>
              <a href={clover12}>
                <img
                  src={clover12}
                  alt="Clover"
                  className="gallery-img clover12"
                />
              </a>
              <a href={clover14}>
                <img
                  src={clover14}
                  alt="Clover"
                  className="gallery-img clover13"
                />
              </a>
              <a href={clover15}>
                <img
                  src={clover15}
                  alt="Clover"
                  className="gallery-img clover14"
                />
              </a>
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
    </div>
  );
};

export default Gallery;
