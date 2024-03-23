import { createSelector } from "reselect";

export const searchFilterSelector = (state) => state.filter.search;
export const todoSelector = (state) => state.todoList;
export const filterSelector = (state) => state.filter.status;
export const prioritySelector = (state) => state.filter.priority;
//^ reselect

export const todoRemainingSelector = createSelector(
  todoSelector,
  searchFilterSelector,
  filterSelector,
  prioritySelector,
  (todo, searchText, status, priority) => {
    // console.log(status, todo, searchText);

    return todo.filter((list) => {
      if (status === "All") {
        return priority.length
          ? list.name.toLowerCase().includes(searchText.toLowerCase()) &&
              list.priority.includes(priority)
          : list.name.toLowerCase().includes(searchText.toLowerCase());
      }
      return (
        list.name.toLowerCase().includes(searchText.toLowerCase()) &&
        (status === "Completed" ? list.completed : !list.completed) &&
        (priority.length ? list.priority.includes(priority) : true)
      );
    });
  }
);
