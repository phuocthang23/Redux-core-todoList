const initState = [
  { id: 1, name: "learn React", completed: true, priority: "High" },
  { id: 2, name: "learn Nodejs", completed: false, priority: "Medium" },
  { id: 3, name: "learn Nestjs", completed: false, priority: "Low" },
];

const todoListReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TODO_LIST":
      return [...state.todoList, action.payload];

    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    default:
      return state;
  }
};

export default todoListReducer;
