import React, { useEffect, useRef } from "react";
import Navbar from "./component/Navbar";
import Skills from "./component/Skills";
import Contact from "./component/contact";
import Home from "./component/home";
import About from "./component/about";
import Project from "./component/projects";
import Footer from "./component/footer";
import Tools from "./component/tools";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS for animations
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // Change this to false to allow animations to occur multiple times
    });
  }, []);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="App">
      <Navbar
        sections={{
          home: homeRef,
          about: aboutRef,
          skills: skillsRef,
          project: projectsRef,
          contact: contactRef,
        }}
      />
      <Home ref={homeRef} />
      <About ref={aboutRef} />
      <Skills ref={skillsRef} />
      <Project ref={projectsRef} />
      <Contact ref={contactRef} />
      <Footer />
    </div>
  );
}

export default App;
