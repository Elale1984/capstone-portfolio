import React from "react";
import "./PageHeader.css";

const PageHeader = ({title, blob, label}) => {
  return (
    <div className="page-header-container">
      <div className="page-header-label">
        <p className="page-header-label-text">{title}</p>
      </div>
      <div className="page-header-blob">
        {blob}
      </div>
      <p className="indicator-label">{label}</p>
      <hr className="separator" />
    </div>
  );
};

export default PageHeader;
