import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import GetCourses from "../Courses/GetCourses";

const AddLibrary = () => {
  let navigate = useNavigate();
  const token = localStorage.getItem("token");
  const libTitle = useRef();
  const liburl = useRef();
  const libdesc = useRef();
  const [courseid, setCourseid] = useState();
  function getcourse(id) {
    setCourseid(id);
  }
  function create(event) {
    event.preventDefault();
    const Data = {
      title: libTitle.current.value,
      url: liburl.current.value,
      desc: libdesc.current.value,
    };
    fetch(`http://localhost:8000/admin/library/${courseid}`, {
      method: "POST",
      body: JSON.stringify(Data),
      headers: {
        Authorization: `${token}`,
        "content-type": "application/json",
      },
    })
      .then((respon) => {
        return respon.json();
      })
      .then((dat) => {
        navigate("/admin/library", { replace: true });
      });
  }

  return (
    <form onSubmit={create}>
      <div className="mb-3">
        <GetCourses courID={getcourse} />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="intitle">
          العنوان
        </label>
        <input
          type="text"
          className="form-control"
          id="intitle"
          ref={libTitle}
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="inurl">
          الرابط على الانترنت
        </label>
        <input type="url" className="form-control" id="inurl" ref={liburl} />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="indesc">
          شرح الرابط
        </label>
        <textarea
          className="form-control"
          id="indesc"
          rows="3"
          ref={libdesc}
        ></textarea>
      </div>
      <button className="btn btn-primary">اضافة </button>
    </form>
  );
};

export default AddLibrary;
