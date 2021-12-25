import React, { useEffect } from "react";
import ContactMethods from "./ContactMethods";
import ContactPage from "./ContactPage";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact Us";
  }, []);

  return (
    <div className="contact-container">
      <ContactPage />
      <ContactMethods />
    </div>
  );
};

export default Contact;
