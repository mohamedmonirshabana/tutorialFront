import React, { useEffect, useState } from "react";
import QuestionCard from "./QuesctionCard";

const Questions = () => {
  const token = localStorage.getItem("token");
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    questionData();
  }, []);
  const questionData = async () => {
    const respon = await fetch("http://localhost:8000/admin/question/all", {
      method: "GET",
      headers: {
        Authorization: `${token}`,
      },
    });
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
            key={question._id}
            title={question.questionTitle}
            id={question._id}
            answercount={question.questionAnswer.length}
          />
        ))
      )}
    </>
  );
};

export default Questions;
