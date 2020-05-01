import React from "react";

//My Components
import ProjectSummary from "./ProjectSummary";

export default function ProjectList() {
  return (
    <div className="section">
      <ProjectSummary />
      <ProjectSummary />
      <ProjectSummary />
    </div>
  );
}
