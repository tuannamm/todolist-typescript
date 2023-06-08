import React from 'react'

import './taskList.scss'
import Header from '../Header/header'
import Button from '../Button/button'

interface TaskListProps {
  todolist: any
}

const TaskList = (props: TaskListProps) => {
  const { todolist } = props

  const setDoneTask = (id: number) => {
    const newTodoList = todolist.map((task: any) => {
      if (task.id === id) {
        return { ...task, status: 'done' }
      }
      return task
    })
  }

  console.log("Xxx", todolist)

  return (
    <div>
      <Header title='Todo' fontSize='30px' />
      {todolist && todolist.length > 0 ? (
        todolist.map((task: any, index: any) => {
          return (
            <div className='todo'>
              <div className='todo-item' key={index}>
                {task.name}
              </div>
              <div className='todo-btn'>
                <Button title='Done' onClick={() => setDoneTask(task.id)} />
                <Button title='Edit' onClick={() => {}} />
                <Button title='Delete' onClick={() => {}} />
              </div>
            </div>
          )
        })
      ) : (
        <div className='no-task'>No tasks</div>
      )}
    </div>
  )
}

export default TaskList
