import React from "react";
import { Link } from "react-router-dom";

const UserChoose = () => {
  return (
    <div className="container" style={{ height: "100vh" }}>
      <h1 className="text-center">اختر المسار الذى تريدة</h1>
      <div
        dir="rtl"
        className="d-flex justify-content-between align-items-center py-auto h-100 px-5"
      >
        <Link to="/preexam2d" className="btn btn-primary">
          مسار 2D
        </Link>
        <Link to="/preexam3d" className="btn btn-primary">
          مسار 3D
        </Link>
      </div>
    </div>
  );
};

export default UserChoose;
