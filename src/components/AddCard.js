import React, { useState } from "react";
import "./CSS/AddCard.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AddCard() {
  const [task, setTask] = useState({
    status: "TO DO",
    sumarry: "",
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

            <div className="modal-body">
              <form>
                <input
                  placeholder="Summary"
                  required
                  onChange={handleInputChange}
                  name="summary"
                  value={task.summary}
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
              </form>
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
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCard;
