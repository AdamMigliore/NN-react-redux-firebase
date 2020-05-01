import React from "react";
import { Link } from "react-router-dom";

//My components
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

export default function Navbar() {
  return (
    <nav className="nav-wrapper blue darken-1">
      <div className="container">
        <Link to="/" className="brand-logo">
          99!
        </Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  );
}
