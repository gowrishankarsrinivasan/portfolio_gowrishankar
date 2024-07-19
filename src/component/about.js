// src/components/ProfileComponent.js
import React from "react";
import "../CssComponent/about.css"; // Import the CSS file
import img from "../Images/myimg.png";
const About = React.forwardRef((props, ref) => {
  const handleDownload = () => {
    window.open(
      "https://drive.google.com/file/d/11sqF78adatjeDjoGxseu9VnUSwycDUsD/view?usp=sharing"
    );
  };
  return (
    <div className="myprofile-container" ref={ref}>
      <h1>About me</h1>
      <div className="myprofile-header">
        <img
          src={img} // Replace with the correct path to your image
          alt="Profile"
          className="myprofile-image"
        />
        <div className="myprofile-intro">
          <p>
            👋Hello,I am Gowri shankar,a dedicated Computer Science Engineering
            student currently pursuing my Bachelor degree in Sri Krishna College
            of Engineering and Technology🎓. Passionate about creating visually
            appealing and user-friendly web experiences, I aspire to kickstart
            my career as a front-end developer. 💻. I'm eager to apply my skills
            and knowledge as a trainee in a forward-thinking company where I can
            contribute to exciting projects and grow as a developer.
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
});

export default About;
