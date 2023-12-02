import React from "react";
import "./NavContainer.css";
import { Link } from "react-router-dom";

const NavContainer = ({containerClass, linkClass}) => {
  return (
    <div className={containerClass}>
      <Link to="/overview" className={linkClass}>
        Overview
      </Link>
      <Link to="/features" className={linkClass}>
        Features
      </Link>
      <Link to="/contact-me" className={linkClass}>
        Lets Talk
      </Link>
    </div>
  );
};
export default NavContainer;
