import React from "react";
import "./Activity.css";

const Activity = ({ activity }) => {
  return (
    <div className=" ">
      <div className="col  ">
        <img src={activity.img} alt="" style={{ width: "100px" }} />
        <p>{activity.name}</p>
      </div>
    </div>
  );
};

export default Activity;
