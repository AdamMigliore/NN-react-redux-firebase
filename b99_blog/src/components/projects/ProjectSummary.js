import React from "react";

export default function ProjectSummary({ project }) {
  return (
    <div className="card project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>The quick brown fox jumps over the nice white sheep</p>
        <p className="grey-text">March 24, 2020</p>
      </div>
    </div>
  );
}
