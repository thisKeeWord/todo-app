export interface Task {
  id: number
  task: string
  complete: boolean
}

export type ToggleTask = (selectedTodo: Task) => void
