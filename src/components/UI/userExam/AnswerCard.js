import React from "react";

const AnswerCard = (props) => {
  return (
    <div className="form-check">
      <input
        className="form-check-input d-none"
        type="radio"
        name="flexRadioDefault"
        id="answer_1"
        value="2"
      />
      <label className="form-check-label  w-100" for="answer_1">
        <div className=" m-2 p-3 rounded">
          <div className="position-relative z-0  w-100">
            <h1 className=" opacity-25 top-100 start-100 ansLa">A</h1>
          </div>
          <div className="position-relative z-3 text-dark ">
            <p className="w-100" dir="rtl">
              رسومات متحركة ثنائية الأبعاد
            </p>
          </div>
        </div>
      </label>
    </div>
  );
};

export default AnswerCard;
