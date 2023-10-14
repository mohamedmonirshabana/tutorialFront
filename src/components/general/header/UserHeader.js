import React from "react";
import { Link, useNavigate } from "react-router-dom";

const UserHeader = (props) => {
  const username = localStorage.getItem("userName");
  return (
    <nav
      className="navbar navbar-expand-lg bg-dark border-bottom border-body"
      style={{ height: "40px" }}
    >
      <div className="conatainer-fluid d-flex">
        <Link to="/user" className="navbar-brand text-white">
          لوحة التحكم
        </Link>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                {username}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                مسار
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default UserHeader;
