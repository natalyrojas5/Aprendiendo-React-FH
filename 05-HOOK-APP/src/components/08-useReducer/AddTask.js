import React from 'react';
import { useForm } from '../../hooks/useForm';

export const AddTask = ({ addTask, listTask }) => {
  const [{ description }, handlerInputChange, reset] = useForm({
    description: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) return;

    const newTask = {
      id: listTask.length + 1,
      action: description,
      done: false,
    };

    addTask(newTask);
    reset();
  };
  return (
    <>
      <h3>Add task</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            autoComplete="off"
            name="description"
            value={description}
            onChange={handlerInputChange}
            placeholder="Add new task"
          />
        </div>

        <button type="submit" className="btn btn-outline-primary btn-block">
          Add
        </button>
      </form>
    </>
  );
};
