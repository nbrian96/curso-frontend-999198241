import { useEffect, useState } from 'react';
import type { TaskListProps } from '@/types/TaskList';

import Button from '@/components/ui/Button';

interface TaskListComponentProps {
  taskList: TaskListProps
}

function TaskList({ taskList }: TaskListComponentProps) {
  const { tasks, removeTask, toggleTask } = taskList;

  const [totalTasks, setTotalTasks] = useState(tasks.length);
  const [totalCompletedTasks, setTotalCompletedTasks] = useState(tasks.filter((task) => task.completed).length);

  useEffect(() => {
    setTotalTasks(tasks.length);
    setTotalCompletedTasks(tasks.filter((task) => task.completed).length);
  }, [tasks]);

  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '4rem' }}>
        <p>Total tasks: {totalTasks} | Total completed tasks: {totalCompletedTasks}</p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          {tasks.map((task, index) => (
            <div key={index} style={{
              display: 'flex',
              gap: '8px',
              alignItems: 'center',
              textDecoration: task.completed ? 'line-through' : 'none',
              opacity: task.completed ? 0.6 : 1,
              padding: '8px',
              border: '1px solid #eee',
              borderRadius: '4px',
              width: '100%',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(index)}
                />
                <span>{task.title}</span>
              </div>
              <Button type="button" variant="danger" size="small" onClick={() => removeTask(index)}>
                Eliminar
              </Button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TaskList;
