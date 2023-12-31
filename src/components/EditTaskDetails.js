import React, { useState, useEffect } from "react";
import "./CSS/EditTaskDetails.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { updateTaskSummary,updateTaskPriority, deleteTaskAction, updateTaskDate } from '../actions/IssueActions';

function EditTaskDetails(props) {

const dispatch = useDispatch();

const [task, setTask] = useState({});
const taskInStore = useSelector((state) => {
    const task = state.issueReducer.data.find((task) => task._id === props.id);
    return task || {};
  });


  useEffect(() => { 
    setTask((prevTask) => ({
      ...prevTask,
      sumarry: taskInStore.sumarry || "",
      description: taskInStore.description || "",
      date: taskInStore.date || "",
      priority: taskInStore.priority || "",
    }));
  }, [taskInStore]);

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setTask((prevTaskList) => ({
    ...prevTaskList,
    [name]: value,
  }));
};

const handleDateChange = (date) => {
    // setTask((prevTaskList) => ({
    //   ...prevTaskList,
    //   date: date,
    // }));
    console.log('edit',date.toISOString().split('T')[0])
    dispatch(updateTaskDate(props.id,date.toISOString().split('T')[0]));
  };

  const handlePriorityChange = (e) => {
    const { name, value } = e.target;
    let priority=value
    dispatch(updateTaskPriority(props.id, priority));
  };

  async function handleSubmit(event) {
    event.preventDefault();
    dispatch(updateTaskSummary(props.id,task.sumarry, task.description));
  }

  async function deleteTask() {
    dispatch(deleteTaskAction(props.id));
  }


  async function cancelSubmit(event) {
    event.preventDefault();
    setTask(taskInStore)
  }

  return (
    <div>
      <div className="modal"  id="editTask">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit issue</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
           
            <div className="modal-body">
            <p className={`py-0 px-2 me-5 sumarry-p sumarry-e ${props.status}-title`}>{props.status}</p>
            <form
             onSubmit={handleSubmit}
             >
                <input
                  placeholder="sumarry"
                  required
                  onChange={handleInputChange}
                  name="sumarry"
                 value={task?.sumarry }
                ></input>
                <br /> <br />
                <textarea
                  placeholder="Description"
                  required
                  onChange={handleInputChange}
                  name="description"
                 value={task?.description}
                ></textarea>
                  <br /> 
                  <button
                type="button"
                className="btn btn-light"
                onClick={cancelSubmit}
              >
                cancel
              </button>
                  <button
                type="submit"
                className="btn btn-primary mx-1"
              >
                Save
              </button>
            </form>
                <br /> 
                <label htmlFor="dueDateedit" className="mx-2">
                  Due Date
                </label>
                <br />
                <DatePicker
                  className="ms-2"
                  id="dueDateedit"
                  selected={task.date ? new Date(task.date) : new Date()}
                  name="date"
                  onChange={handleDateChange}
                  style={{ width: "400px" }}
                  dateFormat="yyyy-MM-dd"
                  required
                />
                <br /> <br />
                {/* value={selectedValue} onChange={handleDropdownChange} */}
                <label htmlFor="customselectedit" className="mx-2">
                  Priority
                </label>
                <br />
                <select
                  id="customselectedit"
                  className="mx-2 customselectadd"
                  required
                  onChange={handlePriorityChange}
                  name="priority"
                   value={task?.priority }
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
                 onClick={() =>deleteTask()}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditTaskDetails;
