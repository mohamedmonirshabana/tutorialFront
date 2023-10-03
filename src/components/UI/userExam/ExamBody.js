import React, { useState, useEffect } from "react";
import ExamHeader from "./ExamHeader";
import ExamQuestion from "./ExamQuestion";
import ExamAnswer from "./ExamAnswer";
import ExamTail from "./ExamTail";
const ExamBody = (props) => {
  const [questions, setQuestions] = useState(props.dt);
  console.log(questions);
  const [arindex, setArindex] = useState(0);
  console.log(arindex);
  function incre() {
    setArindex(arindex + 1);
    props.chang();
  }

  return (
    <>
      <div className="container mt-0" style={{ height: "90vh" }}>
        <ExamHeader
          poCurrent={arindex}
          arin={props.qlen - 1}
          inc={incre}
          exTitle={"preExam"}
        />
        <div className="row" style={{ height: "80%" }}>
          <ExamAnswer />
          <ExamQuestion data={questions} />
        </div>
        <div className="row" style={{ height: "10%" }}>
          <div className="col-6"></div>
          <ExamTail />
        </div>
      </div>
    </>
  );
};

export default ExamBody;
