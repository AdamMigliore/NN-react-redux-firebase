import React from "react";
import moment from 'moment'

export default function ProjectSummary({ project }) {
  return (
    <div className="card project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>
          posted by {project.authorFirstName} {project.authorLastName}
        </p>
        <p className="truncate">{project.content}</p>
        <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  );
}
