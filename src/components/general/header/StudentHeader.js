import React from "react";

const StudentHeader = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="row w-100">
            <div className="col-2">
              <img
                alt="logo"
                src="/images/0095.png"
                style={{ width: "45px" }}
              />
            </div>
            <div className="col-8">
              <div className="container">
                <div className="row">
                  <div className="text-center">
                    فصل افتراضى قائم على تكيز مصادر التعلم
                    <br />
                    لتنمية مهارات انتاج الرسومات المتحركة
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2" dir="rtl">
              <img
                alt="logo"
                className=""
                src="/images/WhatsApp Image 2023-10-01 at 4.25.02 AM.jpeg"
                style={{ width: "45px" }}
              />
            </div>
          </div>
        </div>
      </nav>

      <ul className="nav d-flex justify-content-around" dir="rtl">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">
            الصفحة الرئيسية
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            الخدمات
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            من نحن
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-disabled="true">
            تواصل معنا
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-disabled="true">
            تعليمات عامة
          </a>
        </li>
      </ul>
    </>
  );
};

export default StudentHeader;

{
  /* <nav className="navbar navbar-expand navbar-light navbar-bg ">
  <Link className="sidebar-toggle js-sidebar-toggle">
    <i className="hamburger align-self-center"></i>
  </Link>

  <div className="navbar-collapse collapse" style={{ marginLeft: "85%" }}>
    <ul className="navbar-nav navbar-align">
      <li className="nav-item dropdown ">
        <Link
          className="nav-icon dropdown-toggle d-inline-block d-sm-none"
          to="#"
          data-bs-toggle="dropdown"
        >
          <i className="align-middle" data-feather="settings"></i>
        </Link>

        <Link
          className="nav-link dropdown-toggle d-none d-sm-inline-block"
          to="#"
          data-bs-toggle="dropdown"
        >
          <span className="text-dark">{username}</span>
        </Link>
        <div className="dropdown-menu dropdown-menu-end px-3">
          <Link className="dropdown-item text-left" to="pages-profile.html">
            <i className="align-middle me-1" data-feather="user"></i>
            Profile
          </Link>

          <div className="dropdown-divider"></div>
          <Link className="dropdown-item text-left" to="index.html">
            <i className="align-middle me-1" data-feather="settings"></i>
            Settings & Privacy
          </Link>
          <div className="dropdown-divider"></div>
          <Link className="dropdown-item me-1 text-left" to="/logout">
            Log out
          </Link>
        </div>
      </li>
    </ul>
  </div>
</nav>; */
}
