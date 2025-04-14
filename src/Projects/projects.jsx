import React, { useState, useEffect } from "react";
import projects from "./projects.json";
import Card from "../components/card/card";
import CardSkeleton from "../components/card/CardSkeleton";
import AnimatedSection from "../AnimatedSection.jsx";
import "./projects.css"

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="projects" className="proj">
      <br />
      <div className="text-center mb-10">
        <h1
          style={{
            color: "var(--main-color)",
            textAlign: "center",
            margin: "30px 0px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "2px",
            fontSize: "35px",
          }}
        >
          Projects
          <div
            style={{
              width: "50px",
              height: "2px",
              background: "var(--main-color)",
            }}
          ></div>
        </h1>
      </div>
      <br />
      <div className="proj-cards flex flex-wrap">
        {" "}
        {/* Apply proj-cards here */}
        {isLoading
          ? Array(3)
              .fill(0)
              .map((_, index) => (
                <AnimatedSection key={`skeleton-${index}`}>
                  <CardSkeleton />
                </AnimatedSection>
              ))
          : projects.map((p, index) => (
              <AnimatedSection key={index} style={{ width: "fit-content" }}>
                <Card
                  imgSrc={p.img}
                  name={p.Tittle}
                  txt={p.Description}
                  tagArr={p.tags}
                  link1={p.code}
                  link2={p.project_view}
                />
              </AnimatedSection>
            ))}
      </div>
    </section>
  );
};

export default Projects;
