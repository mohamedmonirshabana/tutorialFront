import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const AddTrack = () => {
  let navigate = useNavigate();
  const token = localStorage.getItem("token");
  const title = useRef();
  const about = useRef();
  const typeoftrack = useRef();
  function submitHandler(event) {
    event.preventDefault();
    const Data = {
      trackname: title.current.value,
      about: about.current.value,
      tags: typeoftrack.current.value,
    };

    fetch("http://localhost:8000/admin/track/add", {
      method: "POST",
      body: JSON.stringify(Data),
      headers: {
        Authorization: `${token}`,
        "content-type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        navigate("/admin/track", { replace: true });
      });
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="mb-3">
        <label className="form-label" htmlFor="TrackName">
          اسم المسار
        </label>
        <input
          type="text"
          ref={title}
          className="form-control"
          id="TrackName"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tacktag">نوع المسار</label>
        <select id="tacktag" className="form-control" ref={typeoftrack}>
          <option value="0">اختر</option>
          <option value="2D">2D</option>
          <option value="3D">3D</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="AboutTrack">
          عن المسار
        </label>
        <textarea
          className="form-control"
          id="AboutTrack"
          rows="3"
          ref={about}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        اضافة المسار
      </button>
    </form>
  );
};

export default AddTrack;
