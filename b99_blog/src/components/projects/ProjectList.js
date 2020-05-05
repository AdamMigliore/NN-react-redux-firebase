import React from "react";
import { Link } from "react-router-dom";

//My Components
import ProjectSummary from "./ProjectSummary";

function ProjectList({ projects }) {
  return (
    <div className="section">
      {projects &&
        projects.map((project) => (
          <Link to={`/${project.id}`} key={project.id}>
            <ProjectSummary project={project} />
          </Link>
        ))}
    </div>
  );
}

export default ProjectList;
