import React from "react";
import "./RoomzIOHeader.css";
import NavContainer from "../nav/NavContainer";

const RoomzIOHeader = ({ containerClass, linkClass }) => {
  return (
    <div className="roomz-io-header-container">
      <div className="roomz-io-header-contents">
        <p className="title roomz-io-title">RoomzIO</p>
        <NavContainer containerClass={containerClass} linkClass={linkClass} />
      </div>
    </div>
  );
};

export default RoomzIOHeader;
