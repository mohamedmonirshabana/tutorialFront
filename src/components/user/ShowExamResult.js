import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const ShowExamResult = (props) => {
  const [examtitle, setExamtitle] = useState("");
  const [examDate, setExamDate] = useState("");
  const [examDegree, setExamDegree] = useState("");
  const [degree, setDegree] = useState("");
  const token = localStorage.getItem("token");
  let navigate = useNavigate();
  const param = useParams();
  const { archive } = param;

  const getData = async () => {
    const response = await fetch(
      `http://localhost:8000/exam/showresult/${archive}`,
      {
        method: "GET",
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    const Data = await response.json();
    console.log(Data);
    setExamtitle(Data.title);
    // setExamDate(Data.date);
    setExamDegree(Data.examDegree);
    let date = new Date(Data.date);
    setExamDate(
      `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    );
    setDegree(Data.degree);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container" dir="rtl">
      <div className="d-flex flex-column">
        <div className="w-100 d-flex">
          <h1>اسم الامتحان</h1>
          <h2>{examtitle}</h2>
        </div>
        <div className="w-100 d-flex">
          <h1>تاريخ الامتحان</h1>
          <h2>{examDate}</h2>
        </div>
        <div className="w-100 d-flex">
          <h1>درجة الامتحان</h1>
          <h2>{examDegree}</h2>
        </div>
        <div className="w-100 d-flex">
          <h1>درجة الطالب</h1>
          <h2>{degree}</h2>
        </div>
      </div>
      {examtitle && examtitle == "preExam2D" ? (
        <Link to="/track/track2d" className="get-started-btn">
          مسار 2D
        </Link>
      ) : (
        <Link to="/track3D" className="get-started-btn">
          مسار 3D
        </Link>
      )}
    </div>
  );
};

export default ShowExamResult;
