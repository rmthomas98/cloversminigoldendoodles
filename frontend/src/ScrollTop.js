import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const ScrollTop = ({ scrollY }) => {
  return (
    <Link to="#" smooth={true} onClick={() => scroll.scrollToTop()}>
      <div
        className="scroll-top-container"
        style={
          scrollY < 300
            ? { opacity: 0, zIndex: -1 }
            : { opacity: 1, zIndex: 9999 }
        }
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          style={{ height: 30 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 11l7-7 7 7M5 19l7-7 7 7"
          />
        </svg>
      </div>
    </Link>
  );
};

export default ScrollTop;
