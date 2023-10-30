import React from "react";
import { Link } from "react-router-dom";

const UserHeader = (props) => {
  const username = localStorage.getItem("userName");
  return (
    <nav className="navbar navbar-expand-lg   bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/home" className="navbar-brand">
          لوحة التحكم
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse w-100"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav  mb-2 mb-lg-0 w-100 nav justify-content-end">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/track">
                المديولات التعليمية
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/prevTrack">
                الكورسات السابقة
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link"
                to="/user"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {username}
              </Link>
              {/* <ul className="dropdown-menu  end-0">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul> */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/logout">
                خروج
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default UserHeader;

// navbar navbar-expand-lg bg-body-tertiary

// <nav
//       className="navbar navbar-expand-lg bg-dark border-bottom border-body"
//       style={{ height: "40px" }}
//     >
//       <div className="conatainer-fluid d-flex">
//         <Link to="/user" className="navbar-brand text-white">
//           لوحة التحكم
//         </Link>
//         <button
//           className="navbar-toggler "
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarScroll"
//           aria-controls="navbarScroll"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarScroll">
//           <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
//             <li className="nav-item">
//               <Link to="/" className="nav-link text-white">
//                 {username}
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/" className="nav-link text-white">
//                 مسار
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
