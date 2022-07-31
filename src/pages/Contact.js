import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <div className="contact">
      <Navbar />
      <div className="contact-container">
        <h1>Get in touch.</h1>
        <p>
          Do you fancy saying hi to me or you want to get started with your
          project and you need my help ? <br /> Feel free to contact me.
        </p>

        <div className="form-container">
          <form className="form-content">
            <input
              type="text"
              name="name"
              required
              autoComplete="off"
              id="name"
              placeholder="Your Name"
              className="input-contact"
            />
            <input
              type="email"
              name="email"
              required
              autoComplete="off"
              id="email"
              placeholder="Your Email"
              className="input-contact"
            />
            <textarea placeholder="Message" name="message" id="mess" />
            <input
              type="submit"
              value="SEND MESSAGE"
              className="hover button"
            />
          </form>
          <div className="formMessage"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
