import React from "react";
import ExamCreate from "../../UI/exam/ExamCreate";
import AdminSide from "../adminGeneral/AdminSide";

const AddExam = () => {
  return (
    <div className="card">
      <div className="card">
        <div className="card-header">
          <h5 className="card-title mb-0">اضافة امتحان</h5>
        </div>
        <div className="card-body">
          <ExamCreate />
        </div>
      </div>
    </div>
  );
};

export default AddExam;
