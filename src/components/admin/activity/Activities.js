import React from "react";
import AllActivities from "./AllActivities";
import AdminSide from "../adminGeneral/AdminSide";

const Activities = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <AdminSide />
        </div>
        <div className="col-10">
          <Activities />
        </div>
      </div>
    </div>
  );
};

export default Activities;
