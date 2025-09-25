import type { TaskProps } from './Task';

export interface TaskListProps {
  tasks: TaskProps[]
  addTask: (title: string) => void
  removeTask: (id: number) => void
  toggleTask: (id: number) => void
}
