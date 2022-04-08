import React from "react";
import useVolenteers from "../../hooks/useVolunteers";
import Activity from "../Activity/Activity";

const Volenteers = () => {
  const [volunteers, setVolunteers] = useVolenteers();
  return (
    <div className="container">
              <div className="row row-cols-1 row-cols-md-3 g-4 ">
      {/* <h3>this is volenteers</h3> */}
      {volunteers.map((activity) => (
        <Activity key={activity._id} activity={activity}></Activity>
      ))}
    </div>
    </div>
  );
};

export default Volenteers;
