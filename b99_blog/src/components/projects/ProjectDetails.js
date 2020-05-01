import React from "react";
import { useParams } from "react-router-dom";

export default function ProjectDetails() {
  const { postID } = useParams();

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {postID}</span>
          <p>Project body</p>
        </div>
        <div className="card-action">
          <p className="grey-text">Posted on March 24, 2020</p>
        </div>
      </div>
    </div>
  );
}
