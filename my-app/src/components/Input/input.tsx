import React from 'react'
import './input.scss'

interface InputProps {
  placeholder: string
  type: string
  setTask?: any
}

const Input = (props: InputProps) => {
  const { placeholder, type, setTask } = props

  return (
    <div>
      <input placeholder={placeholder} type={type} onBlur={(e) => setTask(e.target.value)} />
    </div>
  )
}

export default Input
