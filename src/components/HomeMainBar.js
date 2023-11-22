import React, { useState } from "react";
// import { useLocation, Link } from "react-router-dom";
import "./CSS/HomeMainBar.css";
import AddCard from "../components/AddCard";
import TaskCard from "./TaskCard";
import EditTaskDetails from "./EditTaskDetails";
import { useSelector,useDispatch } from "react-redux";
import { updateTaskStatus } from '../actions/IssueActions';

function HomeMainBar() {
  const dispatch = useDispatch();
  const [selectedTask, setSelectedTask] = useState(null);
  const taskList = useSelector((state) => state.issueReducer.data);
  if (!taskList) {
    return <div className="spinner-border  isLoading"></div>;
  }

  const handleClickTask = (task) => {
    setSelectedTask(task);
  };

  const handleDrop = (e, status) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('text/plain');
  dispatch(updateTaskStatus(taskId, status));
};
  
  const status = ["TO DO", "IN PROGRESS", "DONE"];
  return (
    <div className="HomeMainBarDiv mt-5 pt-3 ms-2">
      <div className="row mt-5 ms-3">
        {status.map((data,index) => (
          <div key={index} className="col-3 ms-4 staus-div p-3"
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
          <TaskCard key={filteredTask._id} date={filteredTask.date} id={filteredTask._id} status={filteredTask.status} sumarry={filteredTask.sumarry} 
          onClick={() => handleClickTask(filteredTask)}
          />
      ))}
        
          </div>
        ))}
        <div className="col-1 ms-1">+</div>
      </div>
      
        <EditTaskDetails
        key={selectedTask?.id} date={selectedTask?.date} description={selectedTask?.description} id={selectedTask?._id} status={selectedTask?.status} sumarry={selectedTask?.sumarry} priority={selectedTask?.priority} 
          
        />
      
      <AddCard/>
    </div>
  );
}

export default HomeMainBar;
