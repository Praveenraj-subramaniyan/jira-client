const issueReducer = (state = { data: null }, action) => {
  switch (action.type) {
    case "CreateIssue":
      return { ...state };
    case "GetAllTask":
      return { ...state, data: action.data };
      case 'UPDATE_TASK_STATUS':
     
        console.log(action.data.status)
        console.log(action.data.taskId)
        return {
          ...state,
          data: state.data.map((task) =>
            task._id === action.data.taskId
              ? { ...task, status: action.data.status }
              : task
          ),
        };
        case 'UPDATE_TASK_SUMMARY':
      const { taskId, sumarry, description } = action.data;
      const updatedData = state.data.map((task) =>
        task._id === taskId
          ? { ...task, sumarry, description }
          : task
      );
      console.log("red")
      console.log(taskId,sumarry, description)
        console.log(updatedData)
      return { ...state, data: updatedData };
    default:
      return state;
  }
};
export default issueReducer;
