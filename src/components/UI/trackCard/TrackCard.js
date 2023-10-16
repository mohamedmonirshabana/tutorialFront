import React from "react";
import { Link } from "react-router-dom";
import icon from "./save.svg";
import iconRight from "./arrow-right.svg";

const TrackCard = (props) => {
  const url = "/track/enroll/" + props.id;
  return (
    <div className="border rounded p-1 d-flex flex-column justify-content-between m-3 w-25 shadow-sm">
      <div
        className="d-flex flex-column m-2  rounded-top p-3 "
        style={{ background: "rgba(9, 139, 192, 0.24)" }}
      >
        <div className="d-flex justify-content-between w-100  ">
          <div className="fs-6 align-self-center">{props.tag}</div>
          <Link to="" className="">
            <img
              src={icon}
              style={{ height: "20px" }}
              className="align-self-center"
              alt=""
            />
          </Link>
        </div>
        <div className="w-100 d-flex justify-content-between  align-items-center mt-5 ">
          <h3>{props.title}</h3>
          <Link>
            <img src={iconRight} alt="" />
          </Link>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-between align-self-end  w-100 px-3 py-3  ">
        <h3 className="fs-5">{props.about}</h3>
        <Link to={url} className="btn btn-dark rounded">
          انضم
        </Link>
      </div>
    </div>
  );
};

export default TrackCard;
