import React from "react";
import "../CssComponent/contact.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">CONTACT</h1>
      <div className="contact-cards">
        <div className="contact-card">
          <a
          href="https://github.com/gowrishankarsrinivasan"
          target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaGithub className="contact-icon" />{" "}
            <p className="contact-text">Github</p>
            <p to className="contact-detail">
              Gowri Shankar s
            </p>
          </a>
        </div>
        <div className="contact-card">
          <a
          href="https://www.linkedin.com/in/gowri-shankar-s-b3b45b27b/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaLinkedin className="contact-icon" />{" "}
            <p className="contact-text">Linkedin</p>
            <p className="contact-detail">GOWRI SHANKAR S</p>
          </a>
        </div>

        <div className="contact-card">
          <a
          href="https://www.linkedin.com/in/gowri-shankar-s-b3b45b27b/"
          target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaEnvelope className="contact-icon" />{" "}
            <p className="contact-text">E-Mail</p>
            <p className="contact-detail">gowrishankarsrinivasan3@gmail.com</p>
          </a>
        </div>
        <div className="contact-card">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaPhone className="contact-icon" />{" "}
            <p className="contact-text">Phone</p>
            <p className="contact-detail">+91 7538875486</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
