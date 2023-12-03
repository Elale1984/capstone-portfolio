import React from "react";
import "./DisplayFeatureItem.css";

const DisplayFeatureItem = ({ img, title, blob }) => {
  return (
    <div className="display-feature-item-container">
      <div className="container-image">
        <img src={img} alt="" />
      </div>
      <div className="display-item-text">
        <div className="display-title">{title}</div>
        <div className="display-blob">{blob}</div>
      </div>
    </div>
  );
};

export default DisplayFeatureItem;
