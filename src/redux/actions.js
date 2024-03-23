//* normal action
// export const addTodoAction = {
//   type: "ADD_TODO_LIST",
//   payload: { id: 5, name: "learn", completed: false, priority: "medium" },
// };

//* action creator => function
export const addTodo = (data) => {
  return {
    type: "ADD_TODO_LIST",
    payload: data,
  };
};

export const searchFilter = (value) => {
  return {
    type: "searchFilter",
    payload: value,
  };
};

export const statusFilterChange = (value) => {
  return {
    type: "statusFilterChange",
    payload: value,
  };
};

export const priorityFilterChange = (value) => {
  return {
    type: "priorityFilterChange",
    payload: value,
  };
};

export const toggleTodoStatus = (id) => {
  return {
    type: "TOGGLE_TODO",
    payload: id,
  };
};
