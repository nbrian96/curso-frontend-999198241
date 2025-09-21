import type { Task } from './Task'

export interface TaskList {
  tasks: Task[]
  addTask: (title: string) => void
  removeTask: (id: number) => void
  toggleTask: (id: number) => void
}
