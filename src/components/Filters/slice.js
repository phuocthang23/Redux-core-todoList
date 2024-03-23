const initState = {
  search: "",
  status: "All",
  priority: [],
};
const filterReducer = (state = initState, action) => {
  switch (action.type) {
    case "searchFilter":
      return {
        ...state,
        search: action.payload,
      };

    case "statusFilterChange":
      return {
        ...state,
        status: action.payload,
      };

    case "priorityFilterChange":
      return {
        ...state,
        priority: action.payload,
      };
    default:
      return state;
  }
};

export default filterReducer;
