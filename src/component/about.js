// src/components/ProfileComponent.js
import React from "react";
import "../CssComponent/about.css"; // Import the CSS file
import img from "../Images/myimg.png";
const About = () => {
  const handleDownload = () => {
    window.open(
      "https://drive.google.com/file/d/11sqF78adatjeDjoGxseu9VnUSwycDUsD/view?usp=sharing"
    );
  };
  return (
    <div className="myprofile-container">
      <h1>About me</h1>
      <div className="myprofile-header">
        <img
          src={img} // Replace with the correct path to your image
          alt="Profile"
          className="myprofile-image"
        />
        <div className="myprofile-intro">
          <p>
            I'm a passionate Full Stack Web Developer specializing in the MERN
            stack, HTML, CSS, JavaScript, React, Node.js, Java, Spring Boot,
            SQL, PostgreSQL, and MongoDB. With a keen eye for detail and a drive
            for excellence, I craft dynamic and user-centric web applications.
            My dedication to continuous learning and problem-solving ensures
            efficient and effective project delivery. Let's collaborate to bring
            your ideas to life and create impactful digital experiences
            together.
          </p>
        </div>
      </div>
      <div className="projects-container">
        <div className="project-card">
          <h3>7+ Mini Projects</h3>
        </div>
        <div className="project-card">
          <h3>2+ Team Projects</h3>
        </div>
        <div className="project-card">
          <h3>2+ Real Time Projects</h3>
        </div>
      </div>
      <div className="about-skills-container">
        <div className="about-skills-list">
          <ul>
            <li>Problem Solving</li>
            <li>Time management</li>
            <li>Communication</li>
          </ul>
        </div>
        <div className="about-skills-list">
          <ul>
            <li>Adaptability</li>
            <li>Team Leadership</li>
            <li>Team worker</li>
          </ul>
        </div>
      </div>
      <button onClick={handleDownload} className="resume-button">
        Resume
      </button>
    </div>
  );
};

export default About;
