import React from "react";
import "./Footer.css";

const footer = props => {
  return (
    <div className="footer">
      <span>Total task: {props.lengthTask}</span>
    </div>
  );
};

export default footer;
