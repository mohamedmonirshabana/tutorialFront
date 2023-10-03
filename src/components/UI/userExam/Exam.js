import React, { useState, useEffect } from "react";
// import ExamHeader from "./ExamHeader";
import ExamBody from "./ExamBody";
// import ExamAnswer from "./ExamAnswer";
// import ExamQuestion from "./ExamQuestion";
// import ExamTail from "./ExamTail";

const ExamD = [
  {
    id: 1,
    question: {
      id: 801,
      questext: "What is photo shop",
    },
    answers: [
      {
        id: 901,
        questitle: "A good one",
      },
      {
        id: 902,
        questitle: "A another  one",
      },
      {
        id: 903,
        questitle: "A good thing",
      },
      {
        id: 904,
        questitle: "A good Choose",
      },
    ],
  },
  {
    id: 2,
    question: {
      id: 802,
      questext: "another Question",
    },
    answers: [
      {
        id: 905,
        questitle: "A good one",
      },
      {
        id: 906,
        questitle: "A another  one",
      },
      {
        id: 907,
        questitle: "A good thing",
      },
      {
        id: 908,
        questitle: "A good Choose",
      },
    ],
  },
];

const Exam = (props) => {
  const [exData, setExData] = useState(ExamD);
  console.log(exData);
  const [arnum, setArnum] = useState(0);
  const [senAr, setSenAr] = useState(exData[0]);

  console.log(senAr);
  function increment() {
    console.log("exam");
    setArnum(arnum + 1);
    console.log(arnum);
    setSenAr(exData[1]);
    console.log(senAr);
  }

  return (
    <>
      <ExamBody dt={senAr} qlen={exData.length} chang={increment} />
    </>
  );
};

export default Exam;
