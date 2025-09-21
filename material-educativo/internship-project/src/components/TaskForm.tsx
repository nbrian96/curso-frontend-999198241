import { useState } from 'react'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'

interface TaskFormProps {
    onAddTask: (title: string) => void
}

function TaskForm({ onAddTask }: TaskFormProps) {
    const [taskTitle, setTaskTitle] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (taskTitle.trim()) {
            onAddTask(taskTitle.trim())
            setTaskTitle('')
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <Input
                    type="text"
                    placeholder="Nueva tarea"
                    value={taskTitle}
                    onChange={(e) => setTaskTitle(e.target.value)}
                    style={{ flex: 1 }}
                />
                <Button type="submit" variant="primary">
                    Add Task
                </Button>
            </form>
        </div>
    )
}

export default TaskForm