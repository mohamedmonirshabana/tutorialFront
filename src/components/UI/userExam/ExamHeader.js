import React from "react";

const ExamHeader = (props) => {
  console.log(props);
  return (
    <div className="row" style={{ height: "10%" }}>
      <div className="col-6 pt-5">
        <div className="d-flex justify-content-between">
          <h5>Select one answer</h5>
          {props.poCurrent == props.arin ? (
            <button className="btn btn-dark text-light">انهاء الاختبار</button>
          ) : (
            <button
              onClick={props.inc}
              type="button"
              className="btn btn-dark text-light"
            >
              السؤال التالى
            </button>
          )}
        </div>
      </div>
      <div className="col-6 pt-5 border-start h-100">
        {props.exTitle == "preExam" ? (
          <h3>امتحان قبلى</h3>
        ) : (
          <h3>{props.exTitle}</h3>
        )}
      </div>
    </div>
  );
};
export default ExamHeader;
