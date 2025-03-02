import "./App.css";
import NavBar from "./NavBar/NavBar";
import BG from "./Bg/bg";
import Section_1 from "./Home/home";
import AboutMe from "./About/about";
import Projects from "./Projects/projects";
import Leetcode from "./problem-solving/leetcode";
import Skills from "./skills/skills";
import Knows from "./skills/know";
import Contact from "./contact/contact";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaTools,
  FaEnvelope,
} from "react-icons/fa";

function App() {
  return (
    <>
      <BG />
      <NavBar
        name="Bharat Kumar"
        navLinks={[
          { text: "Home", url: "#home", icon: <FaHome /> },
          { text: "About", url: "#about", icon: <FaUser /> },
          { text: "Projects", url: "#projects", icon: <FaProjectDiagram /> },
          { text: "Skills", url: "#skill", icon: <FaTools /> },
          { text: "Contact", url: "#contact", icon: <FaEnvelope /> },
        ]}
        showSearch={false}
        bgColor={"rgb(0, 0, 0)"}
      />
      <br />
      <br />
      <Section_1 />
      <br />
      <br />
      <br />
      <AboutMe />
      <br />
      <Projects />
      <Leetcode />
      <Skills />
      <Knows />
      <Contact />
    </>
  );
}

export default App;
