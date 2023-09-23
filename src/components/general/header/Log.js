import React from "react";
import { Link } from "react-router-dom";

const Log = (props) => {
  const role = props.role;
  const username = localStorage.getItem("username");
  let url = "";
  if (role === "student") {
    url = "/home";
  } else if (role === "admin") {
    url = "/dashBoard";
  }
  return (
    <li>
      <Link to={url}>{username}</Link>
    </li>
  );
};

export default Log;
