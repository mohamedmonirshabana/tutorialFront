import React, { useEffect, useState } from "react";
import AdminSide from "../adminGeneral/AdminSide";
import StudentCard from "../adminGeneral/StudentCard";
const StudentAll = () => {
  const token = localStorage.getItem("token");
  const [studentData, setStudentData] = useState([]);
  useEffect(() => {
    Search();
  }, []);
  const Search = async () => {
    const response = await fetch("http://localhost:8000/admin/student/all", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `${token}`,
      },
    });
    const data = await response.json();
    setStudentData(data);
    console.log(data);
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <AdminSide />
        </div>
        <div className="col-10">
          <div className="d-fex flex-md-row">
            {studentData.map((student) => (
              <StudentCard
                key={student._id}
                name={student.fullName}
                id={student._id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentAll;
