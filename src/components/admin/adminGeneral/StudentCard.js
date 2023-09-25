import React from "react";
import { Link } from "react-router-dom";

const StudentCard = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">Student</h6>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <Link to={`/admin/student/${props.id}`} className="card-link">
          بينات الطالب
        </Link>
      </div>
    </div>
  );
};

export default StudentCard;
