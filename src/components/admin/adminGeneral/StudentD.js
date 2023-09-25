import React from "react";

const StudentD = (props) => {
  const R = props.firstTime;
  console.log(props.cdate);

  const mydate = new Date(props.cdate);
  // const Month = mydate.getMonth();

  // console.log(mydate);
  // console.log(Month);
  const month = mydate.getMonth();
  // console.log(month);
  const day = mydate.getDay() + 1;
  const year = mydate.getFullYear();
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">Student</h6>
        <p className="card-text">
          {R ? " لم يتم الاختبار القبلى" : "اتم الاختبار القبلى"}
          <br />
          تم انشاء الحساب
          <br />
          {day}-{month}-{year}
        </p>
      </div>
    </div>
  );
};

export default StudentD;
