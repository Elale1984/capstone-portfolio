import React from "react";
import "./Home.css";
import Calendar from "../../assets/images/CleaningSchedule.png";
import Maintenance from "../../assets/images/MaintenanceTicketCard.png";
import Date from "../../assets/images/Date.png";
import NavContainer from "../../components/nav/NavContainer";

const Home = () => {
  return (
    <div className="home-container">
      <div className="title-container">
        <div className="roomzio-images">
          <img className="date-img" src={Date} alt="calendar" />
          <img className="calendar-img" src={Calendar} alt="calendar" />
          <img className="maintenance-img" src={Maintenance} alt="calendar" />
        </div>
        <p className="title">RoomzIO</p>
        <h2 className="catch-phrase">
          Precision bed management: So you can focus on the more important
          things.
        </h2>
      </div>
      <NavContainer
        containerClass={"nav-container"}
        linkClass={"roomzio-nav"}
      />
    </div>
  );
};

export default Home;
