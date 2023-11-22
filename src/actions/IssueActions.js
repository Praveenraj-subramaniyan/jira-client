import {  createIssueAPI,GetTaskListAPI,updateTaskStatusAPI ,updateTaskSumarryAPI, updateTaskPriorityAPI,deleteTaskAPI} from "../api";

export const getAllCard = () => async (dispatch) => {
  try {
    const data = await GetTaskListAPI();
    dispatch({ type: "GetAllTask", data: data });
  } catch (error) {
    console.log(error);
  }
};

export const createIssueAction = (task) => async (dispatch) => {
  try {
    const reponse = await createIssueAPI(task);
    dispatch({ type: "CreateIssue", data: task });
    dispatch(getAllCard());
    return reponse;
  } catch (error) {
    console.log(error);
  }
};

export const updateTaskStatus = (taskId, status) => async (dispatch) => {
  dispatch({
    type: 'UPDATE_TASK_STATUS',
    data: { taskId, status }
  });

    const response = await updateTaskStatusAPI(taskId, status);

};

export const updateTaskSummary = (taskId, sumarry, description) => async (dispatch) => {
  dispatch({
    type: 'UPDATE_TASK_SUMMARY',
    data: { taskId,  sumarry, description }
  });

    const response = await updateTaskSumarryAPI(taskId, sumarry, description);

};

export const updateTaskPriority = (taskId1, priority) => async (dispatch) => {
  dispatch({
    type: 'UPDATE_TASK_PRIORITY',
    data: { taskId1,  priority }
  });

   const response = await updateTaskPriorityAPI(taskId1, priority);

};

export const deleteTaskAction = (taskId2) => async (dispatch) => {
  try {
    console.log(taskId2)
    dispatch({
      type: 'DELETE_TASK',
      data: { taskId2}
    });
    const reponse = await deleteTaskAPI(taskId2);
    return reponse;
  } catch (error) {
    console.log(error);
  }
};



