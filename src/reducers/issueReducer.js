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
      return { ...state, data: updatedData };
      case 'UPDATE_TASK_PRIORITY':
        const { taskId1, priority } = action.data;
        const updatedData1 = state.data.map((task) =>
          task._id === taskId1
            ? { ...task, priority}
            : task
        );
        return { ...state, data: updatedData1 };
        case 'UPDATE_TASK_DATE':
          const { taskId3, date } = action.data;
          const updatedData3 = state.data.map((task) =>
            task._id === taskId3
              ? { ...task, date}
              : task
          );
          console.log("red")
          console.log(taskId3,date)
            console.log(updatedData3)
          return { ...state, data: updatedData3 };
        case 'DELETE_TASK':
          const { taskId2 } = action.data;
          const updatedData2 = state.data.filter((task) => task._id !== taskId2);
          return { ...state, data: updatedData2 };
    default:
      return state;
  }
};
export default issueReducer;
