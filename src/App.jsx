import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import "./App.css";
import NavBar from "./NavBar/NavBar";
import BG from "./Bg/bg";
import { FiHome, FiInfo, FiMail, FiSettings, FiShoppingCart } from "react-icons/fi";
import Section_1 from './Home/home.jsx';
import AnimatedSection from './AnimatedSection.jsx';
// import Projects from './Projects/projects';
import Contact from './contact/contact';

// Lazy load components
const AboutMe = lazy(() => import("./About/about"));
const Projects = lazy(() => import("./Projects/projects"));
const Leetcode = lazy(() => import("./problem-solving/leetcode"));
const Skills = lazy(() => import("./skills/skills"));
// const Contact = lazy(() => import("./contact/contact"));

// Loading component
const Loading = () => (
  <div className="loading-container">
    <motion.div
      className="loading-spinner"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
  </div>
);


function App() {
  return (
    <>
      <BG />
      <NavBar
        name="Bharat Kumar"
        navLinks={[
          { text: "Home", url: "#home", icon: <FiHome /> },
          { text: "About", url: "#about", icon: <FiInfo /> },
          { text: "Projects", url: "#projects", icon: <FiShoppingCart /> },
          { text: "Skills", url: "#skill", icon: <FiSettings /> },
          { text: "Contact", url: "#contact", icon: <FiMail /> },
        ]}
        showSearch={false}
        bgColor={"rgb(0, 0, 0)"}
      />

      <Suspense fallback={<Loading />}>
        <AnimatedSection>
          <Section_1 />
        </AnimatedSection>

        <AnimatedSection animation={{ hidden: { opacity: 0, x: -80 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } }}>
          <AboutMe />
        </AnimatedSection>

        {/* <AnimatedSection> */}
          <Projects />
        {/* </AnimatedSection> */}

        <AnimatedSection>
          <Leetcode />
        </AnimatedSection>

        <AnimatedSection animation={{ hidden: { opacity: 0, x: -80 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } }}>
          <Skills />
        </AnimatedSection>

        <AnimatedSection animation={{ hidden: { opacity: 0, x: 80 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } }}>
          <Contact />
        </AnimatedSection>
      </Suspense>
    </>
  );
}

export default App;