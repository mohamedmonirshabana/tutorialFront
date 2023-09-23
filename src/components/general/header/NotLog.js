import React from "react";
import { Link } from "react-router-dom";

const NotLog = () => {
  return (
    <>
      <li>
        <Link to="/auth/signin">التسجيل</Link>
      </li>
      <li>
        <Link to="/auth/signup" className="">
          الدخول
        </Link>
      </li>
    </>
  );
};

export default NotLog;
