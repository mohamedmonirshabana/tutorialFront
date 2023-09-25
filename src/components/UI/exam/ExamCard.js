import React from "react";
import { Link } from "react-router-dom";

const ExamCard = (props) => {
  const resu = props.active;
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.Examname}</h5>
        <p className="card-text">
          {resu ? "الامتحان مفعل" : "الامتحان غير مفعل"}
        </p>
        <ol className="list-group list-group-numbered">
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">درجة الامتحان</div>
              الدرجة النهائية للامتحان
            </div>
            <span className="badge bg-primary rounded-pill">
              {props.examdegree}
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">نسبة النجاح للطالب</div>
              نسبة النجاح للطالب
            </div>
            <span className="badge bg-primary rounded-pill">
              %{props.sucesspers}
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">عدد الاسئلة للاختبار</div>
              ما يتم عرضة امام الطالب
            </div>
            <span className="badge bg-primary rounded-pill">
              {props.qcount}
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">عدد الاسئلة الاجمالى</div>
              كل الاسئلة فى الامتحان
            </div>
            <span className="badge bg-primary rounded-pill">
              {props.excount}
            </span>
          </li>
        </ol>
        <Link to="" className="btn btn-danger">
          حذف الامتحان
        </Link>
        <Link to="" className="">
          اضافة اسئلة
        </Link>
      </div>
    </div>
  );
};

export default ExamCard;
