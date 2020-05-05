import React, { useState } from "react";
import { connect } from 'react-redux'

//My actions
import { createProject } from "../../store/actions/project/projectActions";

function CreateProject({createProject}) {
  const [project, setProject] = useState({
    title: "",
    content: "",
  });

  const handleChange = (event) => {
    setProject({ ...project, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createProject(project)
  };

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

const mapDispatchToProps = (dispatch)=>{
  return {
    createProject: (project)=> dispatch(createProject(project))
  }
}

export default connect(null,mapDispatchToProps)(CreateProject);
