import React, { FunctionComponent, useState } from 'react'
import { Task, ToggleTask } from '../types/index'
import { TaskList } from '../components/taskList'
import { InputForm } from '../components/inputForm'

const initial_tasks: Task[] = []

const App: FunctionComponent = () => {
  const [tasks, setTasks] = useState(initial_tasks)

  const toggleTask: ToggleTask = (selectedTask: Task) => {
    const newTasks = tasks.map((task) => {
      if (task.id === selectedTask.id) {
        return {
          ...task,
          complete: !task.complete,
        }
      }

      return task
    })

    setTasks(newTasks)
  }

  const onSubmitTask = (newTask: Task): void => {
    setTasks([...tasks, newTask])
  }

  const onDeleteTask = (id: number): void => {
    const currentTaskIndex = tasks.findIndex((task) => id === task.id)

    const updatedTaskList = [
      ...tasks.slice(0, currentTaskIndex),
      ...tasks.slice(currentTaskIndex + 1),
    ]

    setTasks(updatedTaskList)
  }

  return (
    <div>
      <InputForm onSubmit={onSubmitTask} />
      <TaskList
        tasks={tasks}
        toggleTask={toggleTask}
        deleteTask={onDeleteTask}
      />
    </div>
  )
}

export default App
