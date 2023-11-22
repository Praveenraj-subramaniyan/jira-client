import {  createIssueAPI,GetTaskListAPI,updateTaskStatusAPI ,updateTaskSumarryAPI} from "../api";

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
    console.log("Add task")
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

// export const deleteQuestion = (id,answerId) => async (dispatch) => {
//   try {
//     const reponse = await deleteQuestionAPI(id,answerId);
//     dispatch(getAllCard());
//     return reponse;
//   } catch (error) {
//     console.log(error);
//   }
// };



