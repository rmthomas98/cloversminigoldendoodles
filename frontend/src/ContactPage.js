import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import Lottie from "react-lottie-player";
import contactAnimation from "./assets/images/contact-animation.json";

const ContactPage = () => {
  const [emailStatus, setEmailStatus] = useState();
  const [btnText, setBtnText] = useState("Send");
  const [btnStyle, setBtnStyle] = useState();
  const [btnDisabled, setBtnDisabled] = useState(false);

  const form = useRef();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    setBtnText(<i className="fa fa-spinner fa-spin"></i>);
    emailjs
      .sendForm(
        "service_8shico7",
        "template_ls085ws",
        form.current,
        "user_14Adg2wdRXHSoBLbvlPeZ"
      )
      .then(
        (result) => {
          setBtnStyle({
            background: "#39e75f",
          });
          setEmailStatus("Message Sent!");
          setBtnDisabled(true);
          setBtnText(
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              style={{ height: 20 }}
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          );
          reset();
        },
        (error) => {
          setBtnStyle({
            background: "#f01818",
            boxShadow: "0px 0px 10px #f01818",
          });
          setEmailStatus("Message failed, please try again!");
          setBtnDisabled(true);
          setBtnText(
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              style={{ height: 20 }}
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          );
        }
      );
  };

  return (
    <div className="contact-front-container contact-page-container">

        <p className="sub-header">Contact Us</p>

        <p className="header-description">
          Reach out to us with any questions you have and we will get back with
          you shortly
        </p>

      <div className="contact-front-flex">

          <Lottie
            animationData={contactAnimation}
            play
            loop
            className="contact-animation"
          />
 
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="contact-form-container"
          ref={form}
        >

            <div>
              <div className="names-input-container">
                <div className="input-container" style={{ paddingRight: 10 }}>
                  <p className="error-message">
                    {errors.firstName && "* required field"}
                  </p>
                  <input
                    type="text"
                    name="fname"
                    placeholder="First Name"
                    style={{ width: "100%" }}
                    {...register("firstName", { required: true })}
                  />
                </div>
                <div className="input-container" style={{ paddingLeft: 10 }}>
                  <p className="error-message">
                    {errors.lastName && "* required field"}
                  </p>
                  <input
                    type="text"
                    name="lname"
                    placeholder="Last Name"
                    style={{ width: "100%" }}
                    {...register("lastName", { required: true })}
                  />
                </div>
              </div>
              <div className="input-container">
                <p className="error-message">
                  {errors.phone && "* required field"}
                </p>
                <input
                  type="number"
                  name="phone"
                  placeholder="Phone"
                  {...register("phone", { required: true })}
                />
              </div>
              <div className="input-container">
                <p className="error-message">
                  {errors.email && "* required field"}
                </p>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
              </div>
              <div className="input-container">
                <p className="error-message">
                  {errors.message && "* required field"}
                </p>
                <textarea
                  name="message"
                  placeholder="Message"
                  {...register("message", { required: true })}
                />
              </div>
              <div className="submit-btn-container">
                <button
                  disabled={btnDisabled}
                  type="submit"
                  className="full-btn submit-btn"
                  style={btnStyle}
                >
                  {btnText}
                </button>
                <p
                  className="email-status-message small-paragraph"
                  style={{ padding: 0, paddingLeft: 25 }}
                >
                  {emailStatus}
                </p>
              </div>
            </div>

        </form>
      </div>
    </div>
  );
};

export default ContactPage;
