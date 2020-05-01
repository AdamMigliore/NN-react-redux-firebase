import React, { useState } from "react";

export default function CreateProject() {
  const [project, setProject] = useState({
    title: "",
    body: "",
  });

  const handleChange = (event) => {
    setProject({ ...project, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(project);
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
            id="body"
            className="materialize-textarea"
            onChange={handleChange}
          ></textarea>
          <label htmlFor="body">Project Content</label>
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
