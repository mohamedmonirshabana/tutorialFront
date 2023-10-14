import React, { useState, useEffect } from "react";

const ExamQuestion = ({ qtxt }) => {
  console.log("exam question", qtxt);
  console.log(qtxt);
  const [que, setQue] = useState({});
  const getQuestText = () => {
    setQue(qtxt);
  };
  useEffect(() => {
    getQuestText();
  }, []);
  return (
    <div className="col-6  border-start  h-100">
      <div className="d-flex flex-column pt-5 justify-content-between h-75">
        <div>
          <h4 dir="rtl">السؤال :</h4>
          <h4 className="mt-3 ms-3" dir="rtl">
            {qtxt}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ExamQuestion;
