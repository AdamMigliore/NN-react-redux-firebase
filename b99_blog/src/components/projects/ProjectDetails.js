import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { PROJECTS_COLLECTION } from "../../firebase/firestore/collections";
import { Redirect } from "react-router-dom";

function ProjectDetails({ project, auth }) {
  if (!auth.uid) return <Redirect to="/signin" />;
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by {project.authorFirstName} {project.authorLastName}
            </div>
            <div>2nd September, 2am</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <h5>Loading....</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownState) => {
  const id = ownState.match.params.projectID;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    auth: state.firebase.auth,
    project,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: PROJECTS_COLLECTION,
    },
  ])
)(ProjectDetails);
