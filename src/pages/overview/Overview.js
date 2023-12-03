import React from "react";
import "./Overview.css";
import DisplayItem from "../../components/display-item/DisplayItem";
import CleaningBlob from "../../assets/blobs/CleaningBlob.js";
import CleaningSchedule from "../../assets/images/CleaningSection.png";
import CurrentOccupancySection from "../../assets/images/CurrentOccupancySection.png";
import RoomSection from "../../assets/images/RoomSection.png";
import MaintenanceSection from "../../assets/images/MaintenanceSection.png";
import Alerts from "../../assets/images/Alerts.png";
import DetailedViewsBlob from "../../assets/blobs/DetailedViewsBlob.js";
import AlertsBlob from "../../assets/blobs/AlertsBlob.js";
import MaintenanceBlob from "../../assets/blobs/MaintenanceBlob.js";
import BirdseyeBlob from "../../assets/blobs/BirdseyeBlob.js";
import OverviewBlob from "../../assets/blobs/OverviewBlob.js";
import RoomzIOHeader from "../../components/roomzio-header/RoomzIOHeader.js";
import PageHeader from "../../components/page-header/PageHeader.js";

const Overview = () => {
  return (
    <div className="overview-container">
      <RoomzIOHeader
        containerClass={"top-nav-container"}
        linkClass={"top-roomzio-nav"}
      />
      <PageHeader title={"Welcome to RoomzIO"} blob={<OverviewBlob />} label={'Overview'} />
      <DisplayItem
        title={"Relative Information at a Birds-Eye View"}
        blob={<BirdseyeBlob />}
        image={CurrentOccupancySection}
      />
      <DisplayItem
        title={"Detailed Views For Your Infrastructure"}
        blob={<DetailedViewsBlob />}
        image={RoomSection}
      />
      <DisplayItem
        title={"Keep You Important Alerts in the Forefront"}
        blob={<AlertsBlob />}
        image={Alerts}
      />
      <DisplayItem
        title={"Track Maintenance Tickets With Ease"}
        blob={<MaintenanceBlob />}
        image={MaintenanceSection}
      />
      <DisplayItem
        title={"Schedule Room Cleaning When You Need It"}
        blob={<CleaningBlob />}
        image={CleaningSchedule}
      />
    </div>
  );
};

export default Overview;
