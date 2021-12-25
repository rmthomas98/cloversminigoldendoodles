import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import paw from "./assets/images/paw.svg";
import { Instagram } from "react-bootstrap-icons";
import Fade from "react-reveal/Fade";
import { useWindowWidth } from "@react-hook/window-size";

const Nav = ({ scrollY }) => {
  const [isActive, setIsActive] = useState(false);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    windowWidth > 783 && setIsActive(false);
  }, [windowWidth]);

  return (
    <div
      className="nav-wrapper"
      style={
        scrollY < 100
          ? { background: "transparent" }
          : {
              background: "#fff",
              boxShadow: "0px 5px 25px #0000003d",
              padding: "10px 30px",
            }
      }
    >
      <div
        className={`mobile-nav-container ${
          isActive && "mobile-nav-container-active"
        }`}
      >
        {isActive && (
          <Fade right cascade delay={250}>
            <div className="mobile-nav-link-container">
              <p style={{ textAlign: "center", marginBottom: 15 }}>
                <NavLink
                  onClick={() => setIsActive(false)}
                  to="/"
                  exact
                  className="mobile-nav-link"
                  activeStyle={{
                    color: "#f7345e",
                  }}
                >
                  Home
                </NavLink>
              </p>
              <p style={{ textAlign: "center", marginBottom: 15 }}>
                <NavLink
                  onClick={() => setIsActive(false)}
                  to="/clover"
                  exact
                  className="mobile-nav-link"
                  activeStyle={{
                    color: "#f7345e",
                  }}
                >
                  Clover
                </NavLink>
              </p>
              <p style={{ textAlign: "center", marginBottom: 15 }}>
                <NavLink
                  onClick={() => setIsActive(false)}
                  to="/boaz"
                  exact
                  className="mobile-nav-link"
                  activeStyle={{
                    color: "#f7345e",
                  }}
                >
                  Boaz
                </NavLink>
              </p>
              <p style={{ textAlign: "center", marginBottom: 15 }}>
                <NavLink
                  onClick={() => setIsActive(false)}
                  to="/puppies"
                  exact
                  className="mobile-nav-link"
                  activeStyle={{
                    color: "#f7345e",
                  }}
                >
                  Puppies
                </NavLink>
              </p>
              <p style={{ textAlign: "center", marginBottom: 15 }}>
                <NavLink
                  onClick={() => setIsActive(false)}
                  to="/gallery"
                  exact
                  className="mobile-nav-link"
                  activeStyle={{
                    color: "#f7345e",
                  }}
                >
                  Gallery
                </NavLink>
              </p>
              <p style={{ textAlign: "center", marginBottom: 15 }}>
                <NavLink
                  onClick={() => setIsActive(false)}
                  to="/about"
                  exact
                  className="mobile-nav-link"
                  activeStyle={{
                    color: "#f7345e",
                  }}
                >
                  About
                </NavLink>
              </p>
              <p style={{ textAlign: "center", marginBottom: 15 }}>
                <NavLink
                  onClick={() => setIsActive(false)}
                  to="/contact"
                  exact
                  className="mobile-nav-link"
                  activeStyle={{
                    color: "#f7345e",
                  }}
                >
                  Contact
                </NavLink>
              </p>
              <a
                href="https://www.instagram.com/clover_the_minidoodle_"
                target="_blank"
                rel="noreferrer"
                style={{ textAlign: "center" }}
              >
                <Instagram size={30} className="insta-link-mobile-nav" />
              </a>
            </div>
          </Fade>
        )}
      </div>
      <div className="nav-container">
        <img src={paw} alt="dog paw" className="dog-paw" />
        <div className="nav-links-container">
          <NavLink
            to="/"
            exact
            className="nav-link"
            activeStyle={{

              borderBottom: "2px solid #0b0d0f",
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/clover"
            exact
            className="nav-link"
            activeStyle={{
              borderBottom: "2px solid #0b0d0f",
            }}
          >
            Clover
          </NavLink>
          <NavLink
            to="/boaz"
            exact
            className="nav-link"
            activeStyle={{
              borderBottom: "2px solid #0b0d0f",
            }}
          >
            Boaz
          </NavLink>
          <NavLink
            to="/puppies"
            exact
            className="nav-link"
            activeStyle={{
              borderBottom: "2px solid #0b0d0f",
            }}
          >
            Puppies
          </NavLink>
          <NavLink
            to="/gallery"
            exact
            className="nav-link"
            activeStyle={{
              borderBottom: "2px solid #0b0d0f",
            }}
          >
            Gallery
          </NavLink>
          <NavLink
            to="/about"
            exact
            className="nav-link"
            activeStyle={{
              borderBottom: "2px solid #0b0d0f",
            }}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            exact
            className="nav-link"
            activeStyle={{
              borderBottom: "2px solid #0b0d0f",
            }}
          >
            Contact
          </NavLink>
          <a
            href="https://www.instagram.com/clover_the_minidoodle_"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram size={18} className="insta-link-nav" />
          </a>
        </div>
        <div
          className="mobile-nav-icon-container"
          onClick={() => (isActive ? setIsActive(false) : setIsActive(true))}
        >
          <div className={`bar-1 ${isActive && "bar-1-active"}`}></div>
          <div className={`bar-2 ${isActive && "bar-2-active"}`}></div>
          <div className={`bar-3 ${isActive && "bar-3-active"}`}></div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
