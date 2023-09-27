import React from "react";
import { Link } from "react-router-dom";

const AdminSide = () => {
  return (
    <ul className="list-group bg-body-tertiary">
      <li className="list-group-item">
        <Link to="/admin/student/all"> الطلاب </Link>
      </li>
      <li className="list-group-item">
        <Link to="/admin/exam">االامتحانات</Link>
      </li>
      <li className="list-group-item">
        <Link to="/admin/questions"> الاسئلة </Link>
      </li>
      <li className="list-group-item">
        <Link to="/admin/track">المسارات</Link>
      </li>
      <li className="list-group-item">
        <Link to="/admin/courses">الكورس</Link>
      </li>
      <li className="list-group-item">
        <Link to="/admin/video/all">الفيديوهات</Link>
      </li>
      <li className="list-group-item">
        <Link to="">الانشطة</Link>
      </li>
      <li className="list-group-item">
        <Link to="">المكتبة</Link>
      </li>
    </ul>
  );
};

export default AdminSide;
