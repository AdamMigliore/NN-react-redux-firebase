import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

//My actions
import { createProject } from "../../store/actions/project/projectActions";

function CreateProject({ createProject, auth }) {
  const [project, setProject] = useState({
    title: "",
    content: "",
  });

  const handleChange = (event) => {
    setProject({ ...project, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createProject(project);
  };

  if (!auth.uid) return <Redirect to="/signin" />;

  return (
    <div className="container">
      <form className="white" onSubmit={handleSubmit}>
        <h5 className="grey-text text-darken-3">Create a New Project</h5>
        <div className="input-field">
          <label htmlFor="title"> Project Title</label>
          <input type="text" id="title" onChange={handleChange} />
        </div>

        <div className="input-field">
          <textarea
            id="content"
            className="materialize-textarea"
            onChange={handleChange}
          ></textarea>
          <label htmlFor="content">Project Content</label>
        </div>
        <div className="input-field">
          <button className="btn blue lighten-1" type="submit">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state, ownState) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
