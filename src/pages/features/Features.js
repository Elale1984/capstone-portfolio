import React from "react";
import "./Features.css";
import DisplayFeatureItem from "../../components/display-feature-item/DisplayFeatureItem";
import DataSecurityImage from "../../assets/images/data_sec.png";
import DataSecurityBlob from "../../assets/blobs/SecurityBlob";
import PHISecurityImage from "../../assets/images/phi_sec.png";
import PHISecurityBlob from "../../assets/blobs/PHIBlob";
import RoleSecurityImage from "../../assets/images/role_sec.png";
import RoleSecurityBlob from "../../assets/blobs/SecRolesBlob";
import FeaturesBlob from "../../assets/blobs/FeaturesBlob";
import RoomzIOHeader from "../../components/roomzio-header/RoomzIOHeader.js";
import PageHeader from "../../components/page-header/PageHeader.js";
import DataRedundancyImage from '../../assets/images/redundancy.png';
import RedundancyBlob from "../../assets/blobs/RedundancyBlob.js";


const Features = () => {
  return (
    <div className="features-container">
      <RoomzIOHeader
        containerClass={"top-nav-container"}
        linkClass={"top-roomzio-nav"}
      />
      <PageHeader
        title={"Your Organization's Data Security Matters"}
        blob={<FeaturesBlob />}
        label={'Features'}
      />
      <div className="features-section">
        <DisplayFeatureItem
          img={DataSecurityImage}
          title={"End-To-End Encryption"}
          blob={<DataSecurityBlob />}
        />
        <DisplayFeatureItem
          img={PHISecurityImage}
          title={"PHI Compliant"}
          blob={<PHISecurityBlob />}
        />
        <DisplayFeatureItem
          img={RoleSecurityImage}
          title={"Security Role Management"}
          blob={<RoleSecurityBlob />}
        />
        <DisplayFeatureItem
          img={DataRedundancyImage}
          title={"Data Redundancy"}
          blob={<RedundancyBlob />}
        />
      </div>
    </div>
  );
};

export default Features;
