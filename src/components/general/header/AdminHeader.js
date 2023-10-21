import React from "react";
import { Link } from "react-router-dom";
// import { Helmet } from "react-helmet";
// import "./app.css";
import avatar2 from "./avatars/avatar-2.jpg";
import avatar3 from "./avatars/avatar-3.jpg";
import avatar4 from "./avatars/avatar-4.jpg";
import avatar5 from "./avatars/avatar-5.jpg";
import avatar from "./avatars/avatar.jpg";
import AdminBar from "./AdminBar";

const AdminHeader = (props) => {
  return (
    <div className="wrapper">
      <nav id="sidebar" className="sidebar js-sidebar">
        <div className="sidebar-content js-simplebar">
          <Link className="sidebar-brand" to="index.html">
            <span className="align-middle">موقع للتعليم</span>
          </Link>

          <ul className="sidebar-nav">
            <li className="sidebar-header">Pages</li>

            <li className="sidebar-item active">
              <Link className="sidebar-link" to="/admin">
                <i className="align-middle" data-feather="sliders"></i>
                <span className="align-middle">Dashboard</span>
              </Link>
            </li>

            <li className="sidebar-item">
              <Link className="sidebar-link" to="/profile">
                <i className="align-middle" data-feather="user"></i>
                <span className="align-middle">Profile</span>
              </Link>
            </li>

            <li className="sidebar-item">
              <Link className="sidebar-link" to="">
                <i className="align-middle" data-feather="log-in"></i>
                <span className="align-middle">تغير كلمة السر</span>
              </Link>
            </li>

            <li className="sidebar-item">
              <Link className="sidebar-link" to="">
                <i className="align-middle" data-feather="book"></i>
                <span className="align-middle">تحديث</span>
              </Link>
            </li>

            <li className="sidebar-header">الطلاب</li>

            <li className="sidebar-item">
              <Link className="sidebar-link" to="/admin/student/all">
                <i className="align-middle" data-feather="square"></i>
                <span className="align-middle">كل الطلاب</span>
              </Link>
            </li>

            <li className="sidebar-header">الامتحانات</li>

            <li className="sidebar-item">
              <Link className="sidebar-link" to="/admin/exam">
                <i className="align-middle" data-feather="bar-chart-2"></i>
                <span className="align-middle">الامتحانات كلها</span>
              </Link>
            </li>

            <li className="sidebar-item">
              <Link className="sidebar-link" to="maps-google.html">
                <i className="align-middle" data-feather="map"></i>
                <span className="align-middle">Maps</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="main">
        <AdminBar />
        <main className="container-fluid p-0">{props.children}</main>
        <footer className="footer mt-auto">
          <div className="container-fluid">
            <div className="row text-muted">
              <div className="col-6 text-start">
                <p className="mb-0">
                  <Link className="text-muted" to="#" target="_blank">
                    <strong>موقع تعليمى</strong>
                  </Link>
                  -
                  <Link className="text-muted" to="#" target="_blank">
                    <strong>غادة رسلان</strong>
                  </Link>
                  &copy;
                </p>
              </div>
              <div className="col-6 text-end">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <Link className="text-muted" to="" target="_blank">
                      Support
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link className="text-muted" to="#" target="_blank">
                      Help Center
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link className="text-muted" to="#" target="_blank">
                      Privacy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AdminHeader;

// <nav className="navbar navbar-expand-lg bg-body-tertiary">
//   <div className="container-fluid">
//     <Link to="/admin" className="navbar-brand">
//       لوحة التحكم
//     </Link>
//     <button
//       className="navbar-toggler"
//       type="button"
//       data-bs-toggle="collapse"
//       data-bs-target="#navbarText"
//       aria-controls="navbartext"
//       aria-expanded="false"
//       aria-label="Toggle navigation"
//     >
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarText">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <Link
//             className="nav-link active"
//             aria-current="page"
//             to=""
//             onClick={logout}
//           >
//             تسجيل خروج
//           </Link>
//         </li>
//         <li className="nav-item">
//           {/* <Link className="nav-link" to="/">
//             Features
//           </Link> */}
//         </li>
//         <li className="nav-item">
//           {/* <Link className="nav-link" to="/">
//             Pricing
//           </Link> */}
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>
