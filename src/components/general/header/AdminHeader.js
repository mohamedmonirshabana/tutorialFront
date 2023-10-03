import React from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminHeader = () => {
  let navigate = useNavigate();
  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("uid");
    localStorage.removeItem("r");
    localStorage.removeItem("userName");
    navigate("/", { replace: true });
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/admin" className="navbar-brand">
          لوحة التحكم
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbartext"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to=""
                onClick={logout}
              >
                تسجيل خروج
              </Link>
            </li>
            <li className="nav-item">
              {/* <Link className="nav-link" to="/">
                Features
              </Link> */}
            </li>
            <li className="nav-item">
              {/* <Link className="nav-link" to="/">
                Pricing
              </Link> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AdminHeader;
