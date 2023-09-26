import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ExamCard from "../../UI/exam/ExamCard";
import AdminSide from "../adminGeneral/AdminSide";

const ShowExam = () => {
  const token = localStorage.getItem("token");
  const [exam, setExam] = useState([]);
  useEffect(() => {
    SearchExam();
  }, []);
  const SearchExam = async () => {
    const response = await fetch("http://localhost:8000/admin/exam/all", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `${token}`,
      },
    });
    const data = await response.json();
    setExam(data);
    console.log(data);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <AdminSide />
        </div>
        <div className="col-10">
          <div className="container-fluid mt-3">
            <div className="row">
              <div className="col-2">
                <Link to="/admin/exam/create" className="btn btn-primary">
                  اضافة امتحان
                </Link>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="d-fex flex-md-row">
              {exam.map((exData) => (
                <ExamCard
                  key={exData._id}
                  active={exData.active}
                  Examname={exData.examname}
                  examdegree={exData.examDegree}
                  sucesspers={exData.examsuccessPersent}
                  qcount={exData.examQuestionCount}
                  excount={exData.examquestion.length}
                  exid={exData._id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowExam;
