import React from "react";
import { Link } from "react-router-dom";
import AccountSection from "./AccountSection";
const Nav = () => {
  return (
    <>
      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          <AccountSection />
          <li className="nav-item dropdown">
            <a
              href="#"
              role="button"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              عننا
            </a>
            <ul className="dropdown-menu">
              <li>
                <Link to="/aboutus" className="dropdown-item">
                  معلومات عنا
                </Link>
              </li>
              <li>
                <Link to="/contactus" className="dropdown-item">
                  الاتصال بينا
                </Link>
              </li>
              <li>
                <Link to="/events">التعليمات</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/tracks">المسارات</Link>
          </li>
          <li>
            <Link className="active" to="/">
              الرئيسية
            </Link>
          </li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
    </>
  );
};

export default Nav;
