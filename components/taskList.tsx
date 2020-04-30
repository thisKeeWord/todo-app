import React, { FunctionComponent } from 'react'
import { TaskListItem } from './taskListItem'
import { Task, ToggleTask } from '../types'

interface TaskListProps {
  tasks: Task[]
  toggleTask: ToggleTask
  deleteTask: (id: number) => void
}

export const TaskList: FunctionComponent<TaskListProps> = ({
  tasks,
  toggleTask,
  deleteTask,
}) => {
  return (
    <ul>
      {tasks.map((task) => {
        return (
          <TaskListItem
            task={task}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        )
      })}
    </ul>
  )
}
