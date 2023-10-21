import React from "react";
import QuestionAdd from "../../UI/Question/QuestionAdd";

const AddQuestion = (props) => {
  return (
    <div className="row">
      <div className="col-12 col-lg-12">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title mb-0">اضافة سؤال</h5>
          </div>
          <div className="card-body">
            <QuestionAdd exid={props.exam} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddQuestion;

{
  /* <div className="container-fluid">
      <div className="row">
        <div className="col-2">
        </div>
        <div className="col-10">
          <div className="row">
            <div className="container mt-5">
              <QuestionAdd />
            </div>
          </div>
        </div>
      </div>
    </div> */
}
