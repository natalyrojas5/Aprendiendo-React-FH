import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { type } from './typeReducer';

import { ListTask } from './ListTask';
import { AddTask } from './AddTask';

import './style.css';

/* EL INIT SE EJECUTA CADA VEZ QUE EL COMPONENTE ES RENDERIZADO ---------*/
const init = () => {
  return JSON.parse(localStorage.getItem('listTask')) ?? [];
};

export const TodoApp = () => {
  const [listTask, dispatch] = useReducer(todoReducer, [], init);
  useEffect(() => {
    localStorage.setItem('listTask', JSON.stringify(listTask));
  }, [listTask]);

  const addTask = (newTask) => {
    dispatch({
      type: type.ADD_TASK,
      payload: newTask,
    });
  };
  const deleteTask = (taskId) => {
    dispatch({
      type: type.DELETE_TASK,
      payload: taskId,
    });
  };

  const handleToggle = (taskId) => {
    dispatch({
      type: type.TOGGLE_TASK,
      payload: taskId,
    });
  };
  return (
    <div className="container">
      <h1>TodoApp ( {listTask.length} )</h1>
      <hr />
      <div className="row">
        <div className="col-md-6">
          <ListTask
            listTask={listTask}
            handleToggle={handleToggle}
            deleteTask={deleteTask}
          />
        </div>

        <div className="col-md-6">
          <AddTask listTask={listTask} addTask={addTask} />
        </div>
      </div>
    </div>
  );
};
