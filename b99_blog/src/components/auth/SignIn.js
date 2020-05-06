import React, { useState } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/auth/authActions";
import { Redirect, Link } from "react-router-dom";

function SignIn({ authError, auth, signIn }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setCredentials({ ...credentials, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signIn(credentials);
  };

  if (auth.uid) return <Redirect to="/" />;

  return (
    <div className="container">
      <form className="white" onSubmit={handleSubmit}>
        <h5 className="grey-text text-darken-3">Sign in</h5>
        <div className="input-field">
          <input type="email" id="email" onChange={handleChange} />
          <label htmlFor="email"> Email</label>
        </div>

        <div className="input-field">
          <input id="password" type="password" onChange={handleChange} />
          <label htmlFor="password">Password</label>
        </div>

        <div className="center">
          {authError ? <p className="red-text">{authError.message}</p> : null}
        </div>

        <div className="input-field center">
          <button className="btn blue lighten-1" type="submit">
            Sign in
          </button>
        </div>

        <div className="center">
          <Link to="/signup">Don't have an account?</Link>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state, ownState) => {
  return { authError: state.auth.authError, auth: state.firebase.auth };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (credentials) => dispatch(signIn(credentials)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
