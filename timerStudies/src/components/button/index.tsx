import React from 'react'
//styles
import style from './button.module.scss'

interface Props {
  children?: React.ReactNode,
  type?: "button" | "submit" | "reset" | undefined,
  onClick?: () => void
}

export const Button = ({ children, type = "button", onClick }: Props) => {
  return (
    <button onClick={onClick} className={style.botao} type={type}>
      {children}
    </button>
  )
}
