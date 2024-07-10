import React from "react";
import html5 from "../Images/html.png";
import css from "../Images/css.png";
import react from "../Images/react.png";
import firebase from "../Images/firebase.png";
import java from "../Images/java.png";
import mysql from "../Images/mysql.png";
import Node from "../Images/Node.png";
import redux from "../Images/redux.png";
import spring from"../Images/spring.png";
import selinium from "../Images/selinium.png";
import aws from "../Images/aws.png";
import postgres from "../Images/Postgresql.png";
import "../CssComponent/skills.css";
const Skills = () => {
  const skills = [
    {
      img: html5,
      alt: "HTML",
    },
    {
      img: css,
      alt: "css",
    },
    {
      img: react,
      alt: "react",
    },
    {
      img: java,
      alt: "java",
    },
    {
      img: firebase,
      alt: "firebase",
    },
    {
      img: mysql,
      alt: "mysql",
    },
    {
      img: Node,
      alt: "Node",
    },
    {
      img: postgres,
      alt: "postgres",
    },
    {
      img: redux,
      alt: "redux",
    },
    {
      img: spring,
      alt: "HTML",
    },
    {
      img: aws,
      alt: "aws",
    },
    {
      img: selinium,
      alt: "selinium",
    },
  ];
  return (
    <div className="skills-container">
      <h1>skills</h1>
      <div className="skills-grid">
        {skills.map((item, index) => (
          <div key={index} className="skill-item">
            <img src={item.img} alt={item.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
