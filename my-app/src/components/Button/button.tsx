import React from 'react'
import './button.scss'

interface ButtonProps {
  title: string
  onClick: any
}

const Button = (props: ButtonProps) => {
  const { title, onClick } = props
  return (
    <div>
      <button onClick={onClick}>{title}</button>
    </div>
  )
}

export default Button
