import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import GetCourses from "../../UI/Courses/GetCourses";

const AddActivity = () => {
  let navigate = useNavigate();
  const token = localStorage.getItem("token");
  const atitle = useRef();
  const [courid, setCourid] = useState();
  function getCour(id) {
    setCourid(id);
  }

  function addActive() {
    const Data = {
      title: atitle.current.value,
    };
    fetch(`http://localhost:8000/admin/activity/add/${courid}`, {
      method: "POST",
      body: JSON.stringify(Data),
      headers: {
        "content-type": "application/json",
        Authorization: `${token}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {});
    navigate("/admin/activities", { replace: true });
  }

  return (
    <form onSubmit={addActive}>
      <div className="mb-3">
        <GetCourses courID={getCour} />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="actitle">
          النشاط
        </label>
        <input type="text" id="actitle" className="form-control" ref={atitle} />
      </div>
      <button type="submit" className="btn btn-primary">
        اضافة النشاط
      </button>
    </form>
  );
};

export default AddActivity;
