import React from "react";
import html5 from "../Images/html.png";
import css from "../Images/css.png";
import react from "../Images/react.png";
import firebase from "../Images/firebase.png";
import java from "../Images/java.png";
import mysql from "../Images/mysql.png";
import Node from "../Images/Node.png";
import redux from "../Images/redux.png";
import spring from "../Images/spring.png";
import selinium from "../Images/selinium.png";
import aws from "../Images/aws.png";
import postgres from "../Images/Postgresql.png";
import "../CssComponent/skills.css";

const Skills = React.forwardRef((props, ref) => {
  const skills = [
    { img: html5, alt: "HTML" },
    { img: css, alt: "CSS" },
    { img: react, alt: "React" },
    { img: java, alt: "Java" },
    { img: firebase, alt: "Firebase" },
    { img: mysql, alt: "MySQL" },
    { img: Node, alt: "Node.js" },
    { img: postgres, alt: "PostgreSQL" },
    { img: redux, alt: "Redux" },
    { img: spring, alt: "Spring" },
    { img: aws, alt: "AWS" },
    { img: selinium, alt: "Selenium" },
  ];

  return (
    <div className="skills-container" ref={ref}>
      <h1>Skills</h1>
      <div className="skills-grid" data-aos="fade-right">
        {skills.map((item, index) => (
          <div key={index} className="skill-item">
            <img src={item.img} alt={item.alt} />
          </div>
        ))}
      </div>
    </div>
  );
});

export default Skills;
