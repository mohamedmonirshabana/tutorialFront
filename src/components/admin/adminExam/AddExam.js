import React from "react";
import ExamCreate from "../../UI/exam/ExamCreate";
import AdminSide from "../adminGeneral/AdminSide";

const AddExam = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <AdminSide />
        </div>
        <div className="col-10">
          <div className="container-fluid mt-3">
            <div className="row">
              <div className="col-2"></div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="d-fex flex-md-row">
              <ExamCreate />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddExam;
