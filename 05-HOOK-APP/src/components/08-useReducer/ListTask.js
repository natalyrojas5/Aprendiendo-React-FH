import React from 'react'
import { TaskItem } from './TaskItem'

export const ListTask = ({ listTask, handleToggle, deleteTask }) => {
  return (
    <>
      {
        listTask.length === 0 &&
        <h4 className="text-center">No se encontró tareas</h4>
      }
      {
        listTask.length !== 0 &&
        <>
          {
            listTask.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                handleToggle={handleToggle}
                deleteTask={deleteTask}

              />
            ))
          }
        </>
      }
    </>
  )
}
