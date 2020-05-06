import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

//My components
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

function Navbar({ auth, profile }) {
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;

  return (
    <nav className="nav-wrapper blue darken-1">
      <div className="container">
        <Link to="/" className="brand-logo">
          <img src="../img/brand-logo.jpg" alt='' style={ {height: 64, padding: 5}}/>
        </Link>
        {links}
      </div>
    </nav>
  );
}

const mapStateToProps = (state, ownState) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(Navbar);
