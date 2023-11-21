import React, { useState } from "react";
import "./CSS/AddCard.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import {createIssueAction} from "../actions/IssueActions"

function AddCard() {
  const dispatch = useDispatch();
  const [task, setTask] = useState({
    status: "TO DO",
    sumarry: "",
    description:"",
    priority: "Low",
    date: new Date(),
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTaskList) => ({
      ...prevTaskList,
      [name]: value,
    }));
    console.log(task)
  };

  const handleDateChange = (date) => {
    setTask((prevTaskList) => ({
      ...prevTaskList,
      date: date,
    }));
  };

  async function handleSubmit(event) {
    event.preventDefault();
    dispatch(createIssueAction(task));
  }

  return (
    <div>
      <div className="modal" id="createTask">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Create issue</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <form onSubmit={handleSubmit}>
            <div className="modal-body">
             
                <input
                  placeholder="Summary"
                  required
                  onChange={handleInputChange}
                  name="sumarry"
                  value={task.sumarry}
                ></input>
                <br /> <br />
                <textarea
                  placeholder="Description"
                  required
                  onChange={handleInputChange}
                  name="description"
                  value={task.description}
                ></textarea>
                <br /> <br />
                <label htmlFor="dueDateadd" className="mx-2">
                  Due Date
                </label>
                <br />
                <DatePicker
                  className="ms-2"
                  id="dueDateadd"
                  selected={task.date}
                  name="date"
                  onChange={handleDateChange}
                  style={{ width: "400px" }}
                  dateFormat="yyyy-MM-dd"
                  required
                />
                <br /> <br />
                {/* value={selectedValue} onChange={handleDropdownChange} */}
                <label htmlFor="customselectadd" className="mx-2">
                  Priority
                </label>
                <br />
                <select
                  id="customselectadd"
                  className="mx-2 customselectadd"
                  required
                  onChange={handleInputChange}
                  name="priority"
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                  <option value="Critical">Critical</option>
                </select>

            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-light"
                data-bs-dismiss="modal"
              >
                cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                save
              </button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCard;
