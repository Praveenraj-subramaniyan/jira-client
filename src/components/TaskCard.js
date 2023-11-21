import React from "react";
import "./CSS/TaskCard.css";

function TaskCard(props) {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", props.id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="TaskCard mt-3"
      draggable="true"
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
    >
      <p className="pt-3 pb-0 px-2 sumarry-p">{props.sumarry}</p>
      <div className="d-flex justify-content-between">
      <p className="py-0 px-2 mx-3 sumarry-p">WP-{props.id}</p>
      <p className={`py-0 px-2 mx-3 sumarry-p ${props.status}-title`}>{props.status}</p>
      </div>
      <p className="pt-0 pb-2 px-4 sumarry-p">{props.date.toLocaleDateString()}</p>
    </div>
  );
}

export default TaskCard;
