import React, { useState } from "react";
// import { useLocation, Link } from "react-router-dom";
import "./CSS/HomeMainBar.css";
import AddCard from "../components/AddCard";
import TaskCard from "./TaskCard";

import { useSelector } from "react-redux";

function HomeMainBar() {
  // const taskList = useSelector((state) => state.questionsReducer);
  const [taskList,settaskList]=useState([
    {
      id:1,
      status:"TO DO",
      sumarry:"ddsgdg dg dg dg d g dsg g sd gds g dg ds"
    },
    {
      id:2,
      status:"IN PROGRESS",
      sumarry:"ddsgdg dg dg dg d g dsg g sd gds g dg ds"
    },
    {
      id:3,
      status:"DONE",
      sumarry:"ddsgdg dg dg dg d g dsg g sd gds g dg ds"
    },
  ])
  // const location = useLocation();
  // if (!questionsList) {
  //   return <div className="spinner-border  isLoading"></div>;
  // }

  const handleDrop = (e, status) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('text/plain');
    // Perform actions based on the dragged task ID and the target status
    console.log(`Task ${taskId} dropped to ${status}`);
    settaskList((prevTaskList) =>
    prevTaskList.map((task) =>
      task.id.toString() === taskId ? { ...task, status: status } : task
    )
  );

    // You can update the state or perform other actions here
};
  
  const status = ["TO DO", "IN PROGRESS", "DONE"];
  return (
    <div className="HomeMainBarDiv mt-5 pt-3 ms-2">
      <div className="row mt-5 ms-3">
        {status.map((data) => (
          <div className="col-3 ms-4 staus-div p-3"
          onDrop={(e) => handleDrop(e, data)}
          onDragOver={(e) => e.preventDefault()}
          >
            <img
              width="15"
              height="16"
              src="https://img.icons8.com/color/48/menu-2.png"
              alt="menu-2"
              style={{cursor:"pointer"}}
            />
            <span className={`${data}-title p-1`}>{data}</span>
            <img
              width="22"
              height="22"
              className="satus-menu"
              src="https://img.icons8.com/deco/48/ellipsis.png"
              alt="ellipsis"
              style={{cursor:"pointer"}}
            />
         {taskList
        .filter((task) => task.status === data)
        .map((filteredTask) => (
          <TaskCard key={filteredTask.id} id={filteredTask.id} status={filteredTask.status} sumarry={filteredTask.sumarry} settaskList={settaskList}/>
      ))}
        
          </div>
        ))}
        <div className="col-1 ms-1">+</div>
      </div>
      {/* <div className="mt-4">
        
      </div> */}
      <AddCard/>
    </div>
  );
}

export default HomeMainBar;
