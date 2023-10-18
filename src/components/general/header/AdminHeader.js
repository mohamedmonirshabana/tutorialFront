import React from "react";
import { Link, useNavigate } from "react-router-dom";
import avatar2 from "./avatars/avatar-2.jpg";
import avatar3 from "./avatars/avatar-3.jpg";
import avatar4 from "./avatars/avatar-4.jpg";
import avatar5 from "./avatars/avatar-5.jpg";
import avatar from "./avatars/avatar.jpg";

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
    <div className="wrapper">
      <nav id="sidebar" class="sidebar js-sidebar">
        <div class="sidebar-content js-simplebar">
          <a class="sidebar-brand" href="index.html">
            <span class="align-middle">موقع للتعليم</span>
          </a>

          <ul class="sidebar-nav">
            <li class="sidebar-header">Pages</li>

            <li class="sidebar-item active">
              <Link class="sidebar-link" to="/admin">
                <i class="align-middle" data-feather="sliders"></i>
                <span class="align-middle">Dashboard</span>
              </Link>
            </li>

            <li class="sidebar-item">
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
              <Link className="sidebar-link" to="/student/all">
                <i className="align-middle" data-feather="square"></i>
                <span className="align-middle">كل الطلاب</span>
              </Link>
            </li>

            <li className="sidebar-item">
              <a className="sidebar-link" href="ui-forms.html">
                <i className="align-middle" data-feather="check-square"></i>
                <span className="align-middle">Forms</span>
              </a>
            </li>

            <li className="sidebar-item">
              <a className="sidebar-link" href="ui-cards.html">
                <i className="align-middle" data-feather="grid"></i>
                <span className="align-middle">Cards</span>
              </a>
            </li>

            <li className="sidebar-item">
              <a className="sidebar-link" href="ui-typography.html">
                <i className="align-middle" data-feather="align-left"></i>
                <span className="align-middle">Typography</span>
              </a>
            </li>

            <li className="sidebar-item">
              <a className="sidebar-link" href="icons-feather.html">
                <i className="align-middle" data-feather="coffee"></i>
                <span className="align-middle">Icons</span>
              </a>
            </li>

            <li className="sidebar-header">الامتحانات</li>

            <li className="sidebar-item">
              <Link className="sidebar-link" to="">
                <i className="align-middle" data-feather="bar-chart-2"></i>
                <span className="align-middle">Charts</span>
              </Link>
            </li>

            <li className="sidebar-item">
              <a className="sidebar-link" href="maps-google.html">
                <i className="align-middle" data-feather="map"></i>
                <span className="align-middle">Maps</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="main">
        <nav class="navbar navbar-expand navbar-light navbar-bg">
          <a class="sidebar-toggle js-sidebar-toggle">
            <i class="hamburger align-self-center"></i>
          </a>

          <div class="navbar-collapse collapse">
            <ul class="navbar-nav navbar-align">
              <li class="nav-item dropdown">
                <a
                  class="nav-icon dropdown-toggle"
                  href="#"
                  id="alertsDropdown"
                  data-bs-toggle="dropdown"
                >
                  <div class="position-relative">
                    <i class="align-middle" data-feather="bell"></i>
                    <span class="indicator">4</span>
                  </div>
                </a>
                <div
                  class="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0"
                  aria-labelledby="alertsDropdown"
                >
                  <div class="dropdown-menu-header">4 New Notifications</div>
                  <div class="list-group">
                    <a href="#" class="list-group-item">
                      <div class="row g-0 align-items-center">
                        <div class="col-2">
                          <i
                            class="text-danger"
                            data-feather="alert-circle"
                          ></i>
                        </div>
                        <div class="col-10">
                          <div class="text-dark">Update completed</div>
                          <div class="text-muted small mt-1">
                            Restart server 12 to complete the update.
                          </div>
                          <div class="text-muted small mt-1">30m ago</div>
                        </div>
                      </div>
                    </a>
                    <a href="#" class="list-group-item">
                      <div class="row g-0 align-items-center">
                        <div class="col-2">
                          <i class="text-warning" data-feather="bell"></i>
                        </div>
                        <div class="col-10">
                          <div class="text-dark">Lorem ipsum</div>
                          <div class="text-muted small mt-1">
                            Aliquam ex eros, imperdiet vulputate hendrerit et.
                          </div>
                          <div class="text-muted small mt-1">2h ago</div>
                        </div>
                      </div>
                    </a>
                    <a href="#" class="list-group-item">
                      <div class="row g-0 align-items-center">
                        <div class="col-2">
                          <i class="text-primary" data-feather="home"></i>
                        </div>
                        <div class="col-10">
                          <div class="text-dark">Login from 192.186.1.8</div>
                          <div class="text-muted small mt-1">5h ago</div>
                        </div>
                      </div>
                    </a>
                    <a href="#" class="list-group-item">
                      <div class="row g-0 align-items-center">
                        <div class="col-2">
                          <i class="text-success" data-feather="user-plus"></i>
                        </div>
                        <div class="col-10">
                          <div class="text-dark">New connection</div>
                          <div class="text-muted small mt-1">
                            Christina accepted your request.
                          </div>
                          <div class="text-muted small mt-1">14h ago</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="dropdown-menu-footer">
                    <a href="#" class="text-muted">
                      Show all notifications
                    </a>
                  </div>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-icon dropdown-toggle"
                  href="#"
                  id="messagesDropdown"
                  data-bs-toggle="dropdown"
                >
                  <div class="position-relative">
                    <i class="align-middle" data-feather="message-square"></i>
                  </div>
                </a>
                <div
                  class="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0"
                  aria-labelledby="messagesDropdown"
                >
                  <div class="dropdown-menu-header">
                    <div class="position-relative">4 New Messages</div>
                  </div>
                  <div class="list-group">
                    <a href="#" class="list-group-item">
                      <div class="row g-0 align-items-center">
                        <div class="col-2">
                          <img
                            src={avatar5}
                            class="avatar img-fluid rounded-circle"
                            alt="Vanessa Tucker"
                          />
                        </div>
                        <div class="col-10 ps-2">
                          <div class="text-dark">Vanessa Tucker</div>
                          <div class="text-muted small mt-1">
                            Nam pretium turpis et arcu. Duis arcu tortor.
                          </div>
                          <div class="text-muted small mt-1">15m ago</div>
                        </div>
                      </div>
                    </a>
                    <a href="#" class="list-group-item">
                      <div class="row g-0 align-items-center">
                        <div class="col-2">
                          <img
                            src={avatar2}
                            class="avatar img-fluid rounded-circle"
                            alt="William Harris"
                          />
                        </div>
                        <div class="col-10 ps-2">
                          <div class="text-dark">William Harris</div>
                          <div class="text-muted small mt-1">
                            Curabitur ligula sapien euismod vitae.
                          </div>
                          <div class="text-muted small mt-1">2h ago</div>
                        </div>
                      </div>
                    </a>
                    <a href="#" class="list-group-item">
                      <div class="row g-0 align-items-center">
                        <div class="col-2">
                          <img
                            src={avatar4}
                            class="avatar img-fluid rounded-circle"
                            alt="Christina Mason"
                          />
                        </div>
                        <div class="col-10 ps-2">
                          <div class="text-dark">Christina Mason</div>
                          <div class="text-muted small mt-1">
                            Pellentesque auctor neque nec urna.
                          </div>
                          <div class="text-muted small mt-1">4h ago</div>
                        </div>
                      </div>
                    </a>
                    <a href="#" class="list-group-item">
                      <div class="row g-0 align-items-center">
                        <div class="col-2">
                          <img
                            src={avatar3}
                            class="avatar img-fluid rounded-circle"
                            alt="Sharon Lessman"
                          />
                        </div>
                        <div class="col-10 ps-2">
                          <div class="text-dark">Sharon Lessman</div>
                          <div class="text-muted small mt-1">
                            Aenean tellus metus, bibendum sed, posuere ac,
                            mattis non.
                          </div>
                          <div class="text-muted small mt-1">5h ago</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="dropdown-menu-footer">
                    <a href="#" class="text-muted">
                      Show all messages
                    </a>
                  </div>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-icon dropdown-toggle d-inline-block d-sm-none"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  <i class="align-middle" data-feather="settings"></i>
                </a>

                <a
                  class="nav-link dropdown-toggle d-none d-sm-inline-block"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  <img
                    src={avatar}
                    class="avatar img-fluid rounded me-1"
                    alt="Charles Hall"
                  />
                  <span class="text-dark">Charles Hall</span>
                </a>
                <div class="dropdown-menu dropdown-menu-end">
                  <a class="dropdown-item" href="pages-profile.html">
                    <i class="align-middle me-1" data-feather="user"></i>
                    Profile
                  </a>
                  <a class="dropdown-item" href="#">
                    <i class="align-middle me-1" data-feather="pie-chart"></i>
                    Analytics
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="index.html">
                    <i class="align-middle me-1" data-feather="settings"></i>
                    Settings & Privacy
                  </a>
                  <a class="dropdown-item" href="#">
                    <i class="align-middle me-1" data-feather="help-circle"></i>
                    Help Center
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">
                    Log out
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
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
