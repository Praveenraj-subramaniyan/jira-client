import {  createIssueAPI,GetTaskListAPI } from "../api";

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
    dispatch({ type: "CreateIssue", data: reponse });
    //dispatch(getAllCard());
    return reponse;
  } catch (error) {
    console.log(error);
  }
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



