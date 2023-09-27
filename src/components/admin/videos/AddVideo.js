import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import GetCourses from "../../UI/Courses/GetCourses";

const AddVideo = () => {
  let navigate = useNavigate();
  const token = localStorage.getItem("token");
  const inputRef = useRef();
  const title = useRef();
  const [video, setVideo] = useState();
  const [courid, setCourid] = useState();

  const HandleImageChange = (event) => {
    event.preventDefault();
    setVideo(event.target.files[0]);
  };

  function getCour(id) {
    setCourid(id);
  }

  function addvideoData(event) {
    event.preventDefault();
    console.log(title.current.value);
    const formData = new FormData();
    formData.append("videoTitle", title.current.value);
    formData.append("videofile", video);

    fetch(`http://localhost:8000/admin/video/add/${courid}`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `${token}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        navigate("admin/video/all");
      });
  }
  return (
    <form onSubmit={addvideoData}>
      <div className="mb-3">
        <GetCourses courID={getCour} />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="vtitle">
          عنوان الفيدو
        </label>
        <input type="text" id="vtitle" ref={title} className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="vfile">
          ملف الفيديو
        </label>
        <input
          type="file"
          id="vfile"
          ref={inputRef}
          onChange={HandleImageChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        اضافة الفيديو
      </button>
    </form>
  );
};

export default AddVideo;
