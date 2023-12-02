import React from "react";
import "./Overview.css";
import NavContainer from "../../components/nav/NavContainer";
import DisplayItem from "../../components/display-item/DisplayItem";
import CleaningBlob from '../../assets/blobs/CleaningBlob.js'
import CleaningSchedule from '../../assets/images/CleaningSection.png'

const Overview = () => {
  return (
    <div className="overview-container">
      <div className="overview-header-container">
        <div className="overview-header-contents">
          <p className="title overview-title">RoomzIO</p>
          <NavContainer
            containerClass={"top-nav-container"}
            linkClass={"top-roomzio-nav"}
          />
        </div>
      </div>
      <div className="overview-label">
        <p className="overview-label-text">Welcome to RoomzIO</p>
      </div>
      <DisplayItem title={'Schedule Room Cleaning'} blob={<CleaningBlob />} image={CleaningSchedule} />
    </div>
  );
};

export default Overview;
