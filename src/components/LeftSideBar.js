import React, { useState } from "react";
import { Link } from "react-router-dom";
import Globe from "../images/Globe.png";
import "./CSS/LeftSideBar.css";

function LeftSideBar(data) {
  const [buttonClick, setbuttonClick] = useState(data.page);

  return (
    <div className="leftsideNavBar ms-4">
      <nav className="navbar navbar-expand-sm">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="leftsideHomeNavBar">
            <ul className="navbar-nav flex-column mt-3">
              <li
                className={`${
                  buttonClick === "Home" ? "activeleftsideBarBtn" : ""
                } nav-item small py-1 mt-1`}
                onClick={() => setbuttonClick("Home")}
              >
                <Link to="/" className={` text-decoration-none text-dark px-2`}>
                <b>Projects</b>
                </Link>
              </li>
              <li className="nav-item small mt-2 ms-2">
                <Link className="nav-link text-secondary">Recent</Link>
              </li>
              <li
                className={`${
                  buttonClick === "waitlist" ? "activeleftsideBarBtn" : ""
                } nav-item small ms-2 mt-2 `}
                onClick={() => setbuttonClick("Questions")}
              >
                <Link className="nav-link" to="/questions">
                  <img
                    src={Globe}
                    alt="Globe"
                    style={{width:"28px",paddingRight:'8px'}}
                    className="mb-1 text-secondary"
                  />
                  <span className="text-secondary">Waitlist Page</span>
                </Link>
              </li>
              <li
                className={`${
                  buttonClick === "Tags" ? "activeleftsideBarBtn" : ""
                } nav-item small mt-2 ms-2`}
                onClick={() => setbuttonClick("Tags")}
              >
                <Link to="/tags" className={`nav-link text-secondary`}>
                 View all project
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default LeftSideBar;
