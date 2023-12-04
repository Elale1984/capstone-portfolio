import React from "react";
import "./NavContainer.css";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const NavContainer = ({ containerClass, linkClass }) => {
  const { pathname } = useLocation();

  return (
    <div className={containerClass}>
      <div>
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
      <span className="top-nav-small-container">
        <p>asdf j;lkasdhf ;alsdkhjfg;aslfh;asdihfwoipefj'alsdkjfg;lasdkfgnl;'adfhv'alsfjn'al;sjigfv'
          a;elsdkfgjmv'l;ks
        </p>
      </span>
    </div>
  );
};
export default NavContainer;
