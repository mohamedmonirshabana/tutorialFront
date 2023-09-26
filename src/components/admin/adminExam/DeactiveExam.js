import React from "react";
import { useNavigate } from "react-router-dom";

const DeactiveExam = (props) => {
  let navigate = useNavigate();
  const examid = props.parm;
  const token = localStorage.getItem("token");
  fetch(`http://localhost:8000/admin/exam/deactive/${examid}`, {
    method: "PATCH",
    headers: {
      Authorization: `${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      navigate("/admin/exam", { replace: true });
    });
  return <>Hello</>;
};

export default DeactiveExam;
