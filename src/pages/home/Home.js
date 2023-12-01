import React from "react";
import "./Home.css";
import Calendar from "../../assets/images/CleaningSchedule.png";
import Maintenance from "../../assets/images/MaintenanceTicketCard.png";
import Date from "../../assets/images/Date.png";
import  { Link } from "react-router-dom";

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
      <div className="nav-container">
      <Link to='/overview' className="roomzio-nav">Overview</Link>
      <Link to='/features' className="roomzio-nav">Features</Link>
      <Link to='/contact-me' className="roomzio-nav">Lets Talk</Link>
      </div>
    </div>
  );
};

export default Home;
