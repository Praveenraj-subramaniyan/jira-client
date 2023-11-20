import React from "react";
import "./CSS/Dashboard.css";
import LeftSideBar from "../components/LeftSideBar";
import HomeMainBar from "../components/HomeMainBar";
import Header from "../components/Header";

function Dashboard() {
  return (
    <div className="containerHome row">
      <Header/>
      <div className="leftsidebarHome col-2 mt-5">
        <LeftSideBar page="waitlist" />
      </div>
      <div className="mainrightbarHome col-12">
        <HomeMainBar />
      </div>
    </div>
  );
}

export default Dashboard;
