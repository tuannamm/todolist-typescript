import React from 'react'
import './header.scss'

interface HeaderProps {
  title: string
  fontSize?: string
}

const Header = (props: HeaderProps) => {
  const { title, fontSize } = props

  return (
    <div className="header-container" style={{ fontSize: `${fontSize}` }}>
      {title}
    </div>
  )
}

export default Header
