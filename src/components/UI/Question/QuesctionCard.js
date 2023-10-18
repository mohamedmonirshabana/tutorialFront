import React from "react";

const QuestionCard = (props) => {
  return (
    <div className="card mx-3" style={{ width: "18rem" }}>
      {props.imgurl ? (
        <img src={props.imgurl} className="card-img-top" alt="..." />
      ) : (
        <></>
      )}

      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">Question Answer is {props.answercount}</p>
        <div className="btn-group" role="group" aria-label="Basic example">
          <a
            href={`/admin/question/delete/${props.id}`}
            className="btn btn-danger"
          >
            حذف السؤال
          </a>
          <a href={`/admin/answer/add/${props.id}`} className="btn btn-primary">
            اضافة اجابة
          </a>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
