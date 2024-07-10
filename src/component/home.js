// src/components/Home.js
import React from "react";
import "../CssComponent/home.css";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import img from "../Images/myImg1.png";
const Home = () => {
  return (
    <div className="home">
      <div className="intro">
        <p className="intro-text">Hello, I'm</p>
        <div className="typewriter-container">
          <Typewriter className="ddd"
            options={{
              strings: ["Gowri Shankar", "Welcomes You"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <h2 className="description">I build things for the web.</h2>
        <p className="details">
          I'm a software engineer specializing in building and occasionally
          designing exceptional digital experiences. Currently, I'm focused on
          building accessible, human-centered products on my website.
        </p>
        <div className="social-links">
          <a 
            href="https://github.com/gowrishankarsrinivasan"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaGithub className="social-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/gowri-shankar-s-b3b45b27b/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaLinkedin className="social-icon" />
          </a>
          <a
            href="https://leetcode.com/gowrishankar2004/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaCode className="social-icon" />
          </a>
        </div>
      </div>
      <div className="my-img"><img src={img}></img></div>
    </div>
  );
};

export default Home;
