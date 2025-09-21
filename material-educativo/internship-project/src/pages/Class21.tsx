import { useState } from 'react'

import TaskForm from '@/components/TaskForm'
import TaskList from '@/components/TaskList'

import type { Task } from '@/types/Task'
import type { TaskList as TaskListType } from '@/types/TaskList'

function Class21() {
  const [tasks, setTasks] = useState([
    { title: 'Task 1', completed: false },
    { title: 'Task 2', completed: false },
    { title: 'Task 3', completed: false },
  ])

  const addTask = (title: string) => {
    const newTask: Task = {
      title: title,
      completed: false
    }
    setTasks([...tasks, newTask])
  }

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index))
  }

  const toggleTask = (index: number) => {
    setTasks(tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    ))
  }

  const taskList: TaskListType = {
    tasks,
    addTask,
    removeTask,
    toggleTask
  }

  return (
    <>
      <h1>Task List</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList taskList={taskList} />
    </>
  )
}

export default Class21
