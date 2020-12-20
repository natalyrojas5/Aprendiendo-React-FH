import React from 'react'

export const TaskItem = ({ task, handleToggle, deleteTask }) => {
  return (
    <div key={task.id} className="d-flex justify-content-between mt-2" >
      <p
        onClick={() => handleToggle(task.id)}
        className={`${task.done && 'complete'} m-0 task`}
      >{task.id}- {task.action}</p>
      <button
        className="btn btn-danger ml-2"
        onClick={() => deleteTask(task.id)}
      >Delete</button>
    </div>
  )
}
