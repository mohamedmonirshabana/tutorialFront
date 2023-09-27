import React from "react";
import CourseAdd from "./CourseAdd";
import AdminSide from "../adminGeneral/AdminSide";

const CreateCourse = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <AdminSide />
        </div>
        <div className="col-10">
          <CourseAdd />
        </div>
      </div>
    </div>
  );
};
export default CreateCourse;
