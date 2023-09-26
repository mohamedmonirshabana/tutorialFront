import React from "react";
import QuestionAdd from "../../UI/Question/QuestionAdd";
import AdminSide from "../adminGeneral/AdminSide";
const AddQuestion = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <AdminSide />
        </div>
        <div className="col-10">
          <div className="row">
            <div className="container mt-5">
              <QuestionAdd />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddQuestion;
