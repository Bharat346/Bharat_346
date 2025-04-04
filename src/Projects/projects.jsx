import React, { useState, useEffect } from "react";
import projects from "./projects.json";
import Card from "../components/card/card";
import CardSkeleton from "../components/card/CardSkeleton";
import "./projects.css";

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5 second delay to simulate loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <h1 
        id="projects"
        style={{
          color: "var(--main-color)",
          textAlign: "center",
          margin: "30px 0px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "2px"
        }}
      >
        Projects
        <div style={{
          width: "50px",
          height: "2px",
          background: "var(--main-color)",
        }}></div>
      </h1>
      <div className="proj">
        <div className="proj-cards">
          {isLoading ? (
            // Show skeleton loaders while loading
            Array(3).fill(0).map((_, index) => (
              <CardSkeleton key={`skeleton-${index}`} />
            ))
          ) : (
            // Show actual cards when data is loaded
            projects.map((p, index) => (
              <Card
                key={index}
                imgSrc={`${p.img}`}
                name={p.Tittle}
                txt={p.Description}
                tagArr={p.tags}
                link1={p.code}
                link2={p.project_view}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Projects;