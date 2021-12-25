import React from "react";
import { NavLink } from "react-router-dom";
import { Facebook, Instagram } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-div">

            <p className="title-footer small-title">MiniGoldenDoodles</p>

            <div>
              <p style={{ marginBottom: 5 }}>
                <a
                  href="tel:9376039631"
                  className="footer-link"
                  rel="noreferrer"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      height: 20,
                      marginRight: 10,
                      position: "relative",
                      top: 4,
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>(937)-603-9631</span>
                </a>
              </p>
              <p style={{ marginBottom: 5 }}>
                <a
                  href="mailto:jeffmthomas2000@gmail.com"
                  className="footer-link"
                  rel="noreferrer"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      height: 20,
                      marginRight: 10,
                      position: "relative",
                      top: 4,
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>jeffmthomas2000@gmail.com</span>
                </a>
              </p>
              <p>
                <a
                  href="https://www.google.com/maps/place/St+Paris,+OH+43072/@40.1245175,-83.9681382,15z/data=!3m1!4b1!4m5!3m4!1s0x883f6a921a8199dd:0xf38160cdeb1617fe!8m2!3d40.1284776!4d-83.9592771"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      height: 20,
                      marginRight: 10,
                      position: "relative",
                      top: 4,
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Saint Paris, Ohio</span>
                </a>
              </p>
            </div>

        </div>
        <div className="footer-div">

            <p className="title-footer small-title">Links</p>


            <div>
              <p>
                <NavLink
                  to="/"
                  exact
                  activeStyle={{ color: "#f7345e" }}
                  className="footer-link"
                >
                  Home
                </NavLink>
              </p>
              <p>
                <NavLink
                  to="/clover"
                  exact
                  activeStyle={{ color: "#f7345e" }}
                  className="footer-link"
                >
                  Clover
                </NavLink>
              </p>
              <p>
                <NavLink
                  to="/boaz"
                  exact
                  activeStyle={{ color: "#f7345e" }}
                  className="footer-link"
                >
                  Boaz
                </NavLink>
              </p>
              <p>
                <NavLink
                  to="/puppies"
                  exact
                  activeStyle={{ color: "#f7345e" }}
                  className="footer-link"
                >
                  Puppies
                </NavLink>
              </p>
              <p>
                <NavLink
                  to="/gallery"
                  exact
                  activeStyle={{ color: "#f7345e" }}
                  className="footer-link"
                >
                  Gallery
                </NavLink>
              </p>
              <p>
                <NavLink
                  to="/about"
                  exact
                  activeStyle={{ color: "#f7345e" }}
                  className="footer-link"
                >
                  About
                </NavLink>
              </p>
              <p>
                <NavLink
                  to="/contact"
                  exact
                  activeStyle={{ color: "#f7345e" }}
                  className="footer-link"
                >
                  Contact
                </NavLink>
              </p>
            </div>

        </div>
        <div className="footer-div">

            <p className="title-footer small-title">Social Media</p>


            <div className="social-links-flex-container">
              <a
                href="https://www.instagram.com/clover_the_minidoodle_/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="social-icon-container">
                  <Instagram size={18} className="social-icon" />
                </div>
              </a>
              <a
                href="https://www.facebook.com/Clovers-Mini-Golden-Doodle-Blue-Merle-100112445315212/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="social-icon-container">
                  <Facebook size={18} className="social-icon" />
                </div>
              </a>
            </div>

        </div>
      </div>
      <p className="copyright">
        &#169; Copyright MiniGoldenDoodles 2021. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
