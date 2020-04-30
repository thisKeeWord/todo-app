import React, { FunctionComponent, useState, FormEvent } from 'react'
import { Task } from '../types'

const taskId = (): number => Math.floor(Math.random() * 99999999)

interface InputProps {
  onSubmit: (task: Task) => void
}

export const InputForm: FunctionComponent<InputProps> = (props: InputProps) => {
  const [task, setTask] = useState('')

  const onSubmit = (event: FormEvent): void => {
    event.preventDefault()
    props.onSubmit({
      id: taskId(),
      task,
      complete: false,
    })

    setTask('')
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='enter task'
        value={task}
        onChange={(event): void => setTask(event.target.value)}
      />
      <button>Create Task</button>
    </form>
  )
}

export default InputForm
