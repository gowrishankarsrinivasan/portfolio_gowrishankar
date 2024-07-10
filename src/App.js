import Navbar from "./component/Navbar";
import Skills from "./component/Skills";
import Contact from "./component/contact";
import Home from "./component/home";
import "./App.css";
import About from "./component/about";
import Projects from "./component/projects";
import Footer from "./component/footer";
import Tools from "./component/tools";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projects />
      <About />
      <Skills />
      <Tools />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
