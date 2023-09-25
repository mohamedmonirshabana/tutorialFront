import React, { useEffect, useState } from "react";
import AdminSide from "../adminGeneral/AdminSide";
import StudentD from "../adminGeneral/StudentD";
const StudentDetail = (props) => {
  const [student, setStudent] = useState({});
  const token = localStorage.getItem("token");
  useEffect(() => {
    Search();
  }, []);
  const Search = async () => {
    const response = await fetch(
      `http://localhost:8000/admin/student/${props.parm}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `${token}`,
        },
      }
    );
    const data = await response.json();
    console.log(data);
    setStudent(data);
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <AdminSide />
        </div>
        <div className="col-10">
          <div className="d-fex flex-md-row">
            <StudentD
              name={student.fullName}
              firstTime={student.firstTime}
              cdate={student.createdAt}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetail;
