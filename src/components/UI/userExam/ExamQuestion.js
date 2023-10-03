import React, { useState } from "react";

const ExamQuestion = (props) => {
  const [qu, setQu] = useState(props.data);
  console.log(props.data);
  return (
    <div className="col-6  border-start  h-100">
      <div className="d-flex flex-column pt-5 justify-content-between h-75">
        <div>
          <h4 dir="rtl">السؤال الاول:</h4>
          <h4 className="mt-3 ms-3" dir="rtl">
            {qu.question.questext}
            {/* ما هوا برنامج الفوتوشوب */}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ExamQuestion;
