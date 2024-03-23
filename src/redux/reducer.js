import { combineReducers } from "redux";
import filterReducer from "../components/Filters/slice";
import todoListReducer from "../components/Todo/slice";

const rootReducer = combineReducers({
  filter: filterReducer,
  todoList: todoListReducer,
});

export default rootReducer;
