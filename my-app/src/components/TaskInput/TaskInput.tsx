import React from 'react'
import './taskInput.scss'

import Input from '../Input/input'
import Button from '../Button/button'

interface TaskInputProps {
  setTasks: any
  addTask: () => void
}

const TaskInput = (props: TaskInputProps) => {
  const { addTask, setTasks } = props

  return (
    <div className="task-input-container">
      <Input placeholder="Add a task" type="text" setTask={setTasks} />
      <Button title="Add" onClick={addTask} />
    </div>
  )
}

export default TaskInput
