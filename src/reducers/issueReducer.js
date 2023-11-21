const issueReducer = (state = { data: null }, action) => {
  switch (action.type) {
    case "CreateIssue":
      return { ...state };
    case "GetAllTask":
      return { ...state, data: action.data };
    case "PostQuestion":
      return { ...state };
    default:
      return state;
  }
};
export default issueReducer;
