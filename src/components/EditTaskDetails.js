import React, { useState, useEffect } from "react";
import "./CSS/EditTaskDetails.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { updateTaskSummary } from '../actions/IssueActions';

function EditTaskDetails(props) {

const dispatch = useDispatch();

const taskInStore = useSelector((state) => {
    const task = state.issueReducer.data.find((task) => task._id === props.id);
    return task || {}; // Return an empty object if task is not found
  });

  useEffect(() => {
    // Update local state when taskInStore changes
    setTask({
      sumarry: taskInStore.sumarry || "",
      description: taskInStore.description || "",
      date:taskInStore.date || "",
      priority: taskInStore.priority || "",
    });
    setTaskTemp({
      sumarry: taskInStore.sumarry || "",
      description: taskInStore.description || "",
    });
  }, [taskInStore]);

const [task, setTask] = useState({});

const [taskTemp, setTaskTemp] = useState({
    sumarry: props?.sumarry,
    description:props?.description,
})


async function removeValues() {
    // dispatch(createIssueAction(task));
    setTask(null)
  }
const handleInputChange = (e) => {
  const { name, value } = e.target;
  setTask((prevTaskList) => ({
    ...prevTaskList,
    [name]: value,
  }));
  console.log(task)
};

const handleDateChange = (date) => {
    setTaskTemp((prevTaskList) => ({
      ...prevTaskList,
      date: date,
    }));
  };

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(task)
    dispatch(updateTaskSummary(props.id,task.sumarry, task.description));
    removeValues();
   
  }

  async function cancelSubmit(event) {
    event.preventDefault();
    setTask(taskTemp)
  }

  return (
    <div>
      <div className="modal"  id="editTask"
    //   id={props.id}
      >
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
                //value={props.sumarry}
                ></input>
                <br /> <br />
                <textarea
                  placeholder="Description"
                  required
                  onChange={handleInputChange}
                  name="description"
                 value={task?.description}
                //value={props.description}
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
                  selected={props.date ? new Date(props.date) : new Date()}
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
                  onChange={handleInputChange}
                  name="priority"
                   value={task?.priority || (props && props.priority) || "Low"}
                //value={task.priority || "Low"}
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
                onClick={removeValues}
              >
                cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={removeValues}
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
