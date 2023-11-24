import React from 'react'

interface ButtonProps{
    type:  "submit" | "reset" | "button";
    style: string;
    name: string;
    onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({type, style, name, onClick}) => {
  return (
    <>
    <div className="btn-container">
        <button className={style} type={type} onClick={onClick}>{name}</button>
    </div>
    </>
  )
}
