import React from "react";
import { Link } from "react-router-dom";
import AdminSide from "../adminGeneral/AdminSide";
import Trackes from "./Trackes";

const ShowTrack = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <AdminSide />
        </div>
        <div className="col-10">
          <div className="container-fluid">
            <div className="row">
              <div className="col-2">
                <Link to="/admin/track/add" className="btn btn-primary">
                  اضافة مسار
                </Link>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <Trackes />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowTrack;
