import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactUs.css";
import RoomzIOHeader from "../../components/roomzio-header/RoomzIOHeader.js";

export const ContactUs = () => {
  const form = useRef();
 
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n6mis7z",
        "roomz-template_sm309opa#",
        form.current,
        "jAcDsHEBBavXod1ZA"
      )
      .then(
        (result) => {
          console.log(result.text);
          
          Array.from(form.current.elements).forEach((element) => {
            
            if(element.type !== "submit") {
              element.value =""
            }
            
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-me-container">
       <RoomzIOHeader
        containerClass={"top-nav-container"}
        linkClass={"top-roomzio-nav"}
      />
      <div className="contact-me-content">
        <div className="contact-me-header">
          <p>Get in touch...</p>
        </div>
        <form ref={form} className="contact-me-form" onSubmit={sendEmail}>
          <input
            type="text"
            className="contact-me-form-control"
            placeholder="Name"
            required
            name="name"
          />
          <input
            type="text"
            className="contact-me-form-control"
            placeholder="Email"
            required
            name="email"
          />
          <input
            type="tel"
            name="phone"
            className="contact-me-form-control"
            placeholder="Phone (Optional)"
          />
          <textarea
            type="text"
            cols="40"
            rows="5"
            className="contact-me-form-control"
            placeholder="Leave me a message!"
            required
            name="message"
          />
          <input
            type="submit"
            className="contact-me-submit-button"
            value="Send"
          />
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
