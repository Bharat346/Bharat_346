import React from "react";
import projects from "./projects.json";
import Card from "../components/card/card";
import "./projects.css";

const Projects = () => {
  return (
    <>
      <h1 id="projects"
        style={{
          color: "var(--main-color)",
          marginLeft: "30px",
        }}
      >
        Projects
      </h1>
      <div className="proj">
        <div className="proj-cards">
          {projects.map((p, index) => (
            <Card
            key={index}
              imgSrc={`${p.img}`}
              name={p.Tittle}
              txt={p.Description}
              tagArr={p.tags}
              link1={p.code}
              link2={p.project_view}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
