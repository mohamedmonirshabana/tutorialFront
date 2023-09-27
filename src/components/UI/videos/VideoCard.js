import React from "react";
import { Link } from "react-router-dom";

const VideoCard = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{props.videoTitle}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Length: {props.videoLength}</li>
        <li className="list-group-item">Video url</li>
        <li className="list-group-item">
          <Link to={props.url} className="link-success">
            Video URL
          </Link>
        </li>
      </ul>
      <div className="card-body">
        <a href="#" className="card-link">
          Card link
        </a>
        <a href="#" className="card-link">
          Another link
        </a>
      </div>
    </div>
  );
};

export default VideoCard;
