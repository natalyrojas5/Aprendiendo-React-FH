import { type } from './typeReducer';

export const todoReducer = (listTask = [], action) => {
  switch (action.type) {
    case type.ADD_TASK:
      return [...listTask, action.payload];

    case type.DELETE_TASK:
      return listTask.filter((task) => task.id !== action.payload);

    case type.TOGGLE_TASK:
      return listTask.map((task) => {
        return task.id === action.payload
          ? { ...task, done: !task.done }
          : task;
      });

    default:
      return listTask;
  }
};
