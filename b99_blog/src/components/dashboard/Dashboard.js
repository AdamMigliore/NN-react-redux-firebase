import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

import {
  PROJECTS_COLLECTION,
  NOTIFICATIONS_COLLECTION,
} from "../../firebase/firestore/collections";

//My Components
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";

function Dashboard({ projects, auth, notifications }) {
  if (!auth.uid) return <Redirect to="/signin" />;

  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m6">
          <ProjectList projects={projects} />
        </div>
        <div className="col s12 m5 offset-m1">
          <Notifications notifications={notifications} />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: PROJECTS_COLLECTION,
      orderBy: ["createdAt", "desc"],
    },
    {
      collection: NOTIFICATIONS_COLLECTION,
      limit: 3,
      orderBy: ["timestamp", "desc"],
    },
  ])
)(Dashboard);
