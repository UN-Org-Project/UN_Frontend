import React from "react";
import "./SectionHeader.css";

const SubSectionHeader = (props) => {
  return (
    <h3 className="sub-section-header text-2xl font-bold mb-4 text-blue-300">
      {props.children}
    </h3>
  );
};

export default SubSectionHeader;
