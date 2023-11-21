import React, { useEffect } from "react";
import "./CSS/Dashboard.css";
import LeftSideBar from "../components/LeftSideBar";
import HomeMainBar from "../components/HomeMainBar";
import Header from "../components/Header";
import { getAllCard } from "../actions/IssueActions";
import { useDispatch } from "react-redux";

function Dashboard() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCard());
  }, [dispatch]);
  
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
