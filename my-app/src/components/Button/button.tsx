import React from 'react'
import './button.scss'

interface ButtonProps {
  title: string
  onClick: () => void
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
