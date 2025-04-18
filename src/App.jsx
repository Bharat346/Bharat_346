import { lazy, Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PuffLoader } from "react-spinners";
import "./App.css";
import NavBar from "./NavBar/NavBar";
import BG from "./Bg/bg";
import {
  FiHome,
  FiInfo,
  FiMail,
  FiSettings,
  FiShoppingCart,
} from "react-icons/fi";
import Section_1 from "./Home/home.jsx";
import AnimatedSection from "./AnimatedSection.jsx";
import Contact from "./contact/contact";

// Lazy load components
const AboutMe = lazy(() => import("./About/about"));
const Projects = lazy(() => import("./Projects/projects"));
const Leetcode = lazy(() => import("./problem-solving/leetcode"));
const Skills = lazy(() => import("./skills/skills"));

// Loading component with 2s timeout
const Loading = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="flex justify-center items-center h-screen bg-black z-50">
      <PuffLoader
        color="rgba(248, 108, 21, 1)"
        loading
        size={100}
        speedMultiplier={1}
      />
    </div>
  );
};

const bottomToTop = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

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
        <AnimatedSection animation={bottomToTop}>
          <Section_1 />
        </AnimatedSection>

        <AnimatedSection animation={bottomToTop}>
          <AboutMe />
        </AnimatedSection>

        <Projects />

        <AnimatedSection animation={bottomToTop}>
          <Leetcode />
        </AnimatedSection>

        <AnimatedSection animation={bottomToTop}>
          <Skills />
        </AnimatedSection>

        <AnimatedSection animation={bottomToTop}>
          <Contact />
        </AnimatedSection>
      </Suspense>
    </>
  );
}

export default App;
