import React, { FunctionComponent } from 'react'
import { Task, ToggleTask } from '../types'

interface TaskListItemProps {
  task: Task
  toggleTask: ToggleTask
  deleteTask: (id: number) => void
}

export const TaskListItem: FunctionComponent<TaskListItemProps> = ({
  task,
  toggleTask,
  deleteTask,
}) => {
  return (
    <li>
      <label className={task.complete ? 'complete' : undefined}>
        <input
          type='checkbox'
          checked={task.complete}
          onChange={() => toggleTask(task)}
        />
        <input
          type='button'
          onClick={() => deleteTask(task.id)}
          value='delete'
        />
        {task.task}
      </label>

      <style>
        {`
          .complete {
            text-decoration: line-through
          }
        `}
      </style>
    </li>
  )
}
