import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

//My components
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

function Navbar({ auth }) {
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;

  return (
    <nav className="nav-wrapper blue darken-1">
      <div className="container">
        <Link to="/" className="brand-logo">
          99!
        </Link>
        {links}
      </div>
    </nav>
  );
}

const mapStateToProps = (state, ownState) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Navbar);
