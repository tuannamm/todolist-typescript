import React, { useState } from 'react'
import './todoList.scss'

import TaskList from '../TaskList/TaskList'

import TaskInput from '../TaskInput/TaskInput'
import Header from '../Header/header'

const TodoList = () => {
  const [task, setTask] = useState('')

  const [todolist, setTodoList] = useState<any>([])

  const addTask = () => {
    setTodoList([...todolist, { name: task, status: 'todo', id: Math.random() }])
  }


  return (
    <div className="todolist-container">
      <Header title="Todo List" fontSize="40px" />
      <TaskInput addTask={addTask} setTasks={setTask} />
      <TaskList todolist={todolist} />
    </div>
  )
}

export default TodoList
