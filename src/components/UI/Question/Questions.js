import React, { useEffect, useState } from "react";
import QuestionCard from "./QuesctionCard";

const Questions = (props) => {
  const token = localStorage.getItem("token");
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    questionData();
  }, []);
  const questionData = async () => {
    const respon = await fetch(
      `http://localhost:8000/admin/questions/${props.exid}`,
      {
        method: "GET",
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    const Data = await respon.json();
    setQuestions(Data);
  };
  return (
    <>
      {questions.length === 0 ? (
        <div className="alert alert-success" role="alert">
          No Question
        </div>
      ) : (
        questions.map((question) => (
          <QuestionCard
            key={question.id}
            title={question.title}
            typ={question.type}
            degree={question.Degree}
            id={question._id}
            answeres={question.answeres}
          />
        ))
      )}
    </>
  );
};

export default Questions;
