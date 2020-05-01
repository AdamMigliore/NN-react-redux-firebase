import React, { useState } from "react";

export default function SignUp() {
  const [project, setProject] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
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
        <h5 className="grey-text text-darken-3">Sign in</h5>

        <div className="input-field">
          <input id="firstName" type="text" onChange={handleChange} />
          <label htmlFor="firstName">First Name</label>
        </div>

        <div className='input-field'>
            <input id='lastName' type='text' onChange={handleChange}/>
            <label htmlFor='lastName'>Last Name</label>
        </div>

        <div className="input-field">
          <input type="email" id="email" onChange={handleChange} />
          <label htmlFor="email"> Email</label>
        </div>

        <div className="input-field">
          <input id="password" type="password" onChange={handleChange} />
          <label htmlFor="password">Password</label>
        </div>

        <div className="input-field">
          <button className="btn blue lighten-1" type="submit">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}
