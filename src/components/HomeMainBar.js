import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./CSS/HomeMainBar.css";

import { useSelector } from "react-redux";

function HomeMainBar() {
  const questionsList = useSelector((state) => state.questionsReducer);
  const location = useLocation();
  // if (!questionsList) {
  //   return <div className="spinner-border  isLoading"></div>;
  // }
  const status = ["TO DO", "IN PROGRESS", "DONE"];
  return (
    <div className="HomeMainBarDiv mt-5 pt-3 ms-2">
      <div className="row mt-5 ms-3">
        {status.map((data) => (
          <div className="col-3 ms-4 staus-div p-3">
            <img
              width="15"
              height="16"
              src="https://img.icons8.com/color/48/menu-2.png"
              alt="menu-2"
            />
            <span>{data}</span>
            <img
              width="22"
              height="22"
              className="satus-menu"
              src="https://img.icons8.com/deco/48/ellipsis.png"
              alt="ellipsis"
            />
          </div>
        ))}
        <div className="col-1 ms-1">+</div>
      </div>
      {/* <div className="mt-4">
        
      </div> */}
    </div>
  );
}

export default HomeMainBar;
