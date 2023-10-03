import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserFirstTime = () => {
  const token = localStorage.getItem("token");
  let navigate = useNavigate();
  useEffect(() => {
    getuser();
  }, []);
  const getuser = async () => {
    const respon = await fetch("http://localhost:8000/user/getfirst", {
      method: "GET",
      headers: {
        Authorization: `${token}`,
      },
    });
    const data = await respon.json();

    if (data.firstTime) {
      navigate("/preexam", { replace: true });
    } else {
      navigate("/user", { replace: true });
    }
  };
  return <>hello</>;
};

export default UserFirstTime;
