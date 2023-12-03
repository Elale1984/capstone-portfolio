import React from "react";
import "./NavContainer.css";
import { Link, useLocation } from "react-router-dom";

const NavContainer = ({ containerClass, linkClass }) => {
  const { pathname } = useLocation();

  return (
    <div className={containerClass}>
      {pathname !== "/" && (
        <Link to="/" className={linkClass}>
          Home
        </Link>
      )}
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
