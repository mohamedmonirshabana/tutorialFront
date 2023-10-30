import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const ActivCard = ({ acid }) => {
  const token = localStorage.getItem("token");

  const actFile = useRef();
  const [compFile, setCompFile] = useState();

  const [act, setAct] = useState();

  const [showAct, setShowAct] = useState(false);
  const myData = async () => {
    const response = await fetch(`http://localhost:8000/activ/${acid}`, {
      method: "GET",
      headers: {
        Authorization: `${token}`,
      },
    });
    const data = await response.json();
    setAct(data);
  };
  useEffect(() => {
    myData();
  }, []);

  function showAddActive() {
    setShowAct(true);
  }
  function hide() {
    setShowAct(false);
  }
  function handleFile(event) {
    event.preventDefault();
    setCompFile(event.target.files[0]);
  }

  function handleSendActive(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("filecompress", compFile);
    fetch(`http://localhost:8000/activ/${acid}`, {
      method: "POST",
      body: formData,
      headers: { Authorization: `${token}` },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        window.location.reload(false);
      });
  }

  return (
    <div>
      <Link className="fs-2" onClick={showAddActive}>
        {act && act.title}
      </Link>
      <div>
        {showAct ? (
          <div>
            <Link onClick={hide}>
              <h2>X</h2>
            </Link>
            <form onSubmit={handleSendActive}>
              <label htmlFor="addActive" className="form-label">
                ارسل الملف المطلوب
              </label>
              <input
                type="file"
                id="addActive"
                ref={actFile}
                className="form-control"
                onChange={handleFile}
              />
              <button className="btn btn-primary" type="submit">
                اضافة الملف
              </button>
            </form>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ActivCard;
