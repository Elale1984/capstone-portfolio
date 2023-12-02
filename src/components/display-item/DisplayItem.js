import React from "react";
import "./DisplayItem.css";

const DisplayItem = ({ title, blob, image }) => {
  return (
    <div className="display-item-section">
      <div className="display-item-text-section">
        <div className="display-item-section-title">{title}</div>
        <div className="display-item-section-blob">{blob}</div>
      </div>

      <div className="display-item-section-img">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default DisplayItem;
