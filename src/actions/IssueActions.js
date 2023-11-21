import {  createIssueAPI } from "../api";

// export const getAllCard = () => async (dispatch) => {
//   try {
//     const data = await GetQuestionListAPI();
//     dispatch({ type: "GetAllQuestions", data: data });
//   } catch (error) {
//     console.log(error);
//   }
// };

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



