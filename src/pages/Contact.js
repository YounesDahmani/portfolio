import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { TweenMax, TimelineMax, Power3, Power4 } from "gsap";
import { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  let screen = useRef(null);
  let body = useRef(null);
  useEffect(() => {
    var tl = new TimelineMax();
    tl.to(screen, {
      duration: 1.2,
      width: "100%",
      left: "0%",
      ease: Power3.easeInOut,
    });
    tl.to(screen, {
      duration: 1,
      left: "100%",
      ease: Power3.easeInOut,
      delay: 0.3,
    });
    tl.set(screen, { left: "-100%" });
    TweenMax.to(body, 0.3, {
      css: {
        opacity: "1",
        pointerEvents: "auto",
        ease: Power4.easeInOut,
      },
    }).delay(2);
    return () => {
      TweenMax.to(body, 1, {
        css: {
          opacity: "0",
          pointerEvents: "none",
        },
      });
    };
  });

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    const formMess = document.querySelector(".form-message");
    console.log(formMess);
    emailjs
      .sendForm(
        "service_sant3pf",
        "template_bx6fuhq",
        form.current,
        "mS8Mc9s3WDfnIPUh8"
      )
      .then(
        (res) => {
          console.log(res.text);
          form.current.reset();
          formMess.innerHTML =
            "<p class='success'><i class='fa-solid fa-check'></i> Message sent!</p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 3000);
        },
        (err) => {
          console.log(err.text);
          formMess.innerHTML =
            "<p class='error'><i class='fa-solid fa-xmark-large'></i>An error has occurred, please try again</p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 3000);
        }
      );
  };

  return (
    <React.Fragment>
      <div className="load-container">
        <div className="load-screen" ref={(el) => (screen = el)}></div>
      </div>

      <div data-barba="container" className="contact">
        <div ref={(el) => (body = el)} className="Headd">
          <Navbar />

          <div className="contact-container">
            <h1>Get in touch.</h1>
            <p>
              Do you fancy saying hi to me or you want to get started with your
              project and you need my help ? <br /> Feel free to contact me.
            </p>
            <div className="form-container">
              <form ref={form} onSubmit={sendEmail} className="form-content">
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
              <div className="form-message"></div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
