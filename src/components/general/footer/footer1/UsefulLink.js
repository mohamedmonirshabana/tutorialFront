import React from "react";
import { Link } from "react-router-dom";

const UsefulLink = () => {
  return (
    <div className="col-lg-2 col-md-6 footer-links">
      <h4>Useful Links</h4>
      <ul>
        <li>
          <i className="bx bx-chevron-right"></i>
          <Link to="/">Home</Link>
        </li>
        <li>
          <i className="bx bx-chevron-right"></i> <Link to="/">About us</Link>
        </li>
        <li>
          <i className="bx bx-chevron-right"></i> <Link to="">Contact us</Link>
        </li>
        <li>
          <i className="bx bx-chevron-right"></i>
          <Link to="">Track</Link>
        </li>
        <li>
          <i className="bx bx-chevron-right"></i>
          <Link to="">Instructions</Link>
        </li>
      </ul>
    </div>
  );
};

export default UsefulLink;
