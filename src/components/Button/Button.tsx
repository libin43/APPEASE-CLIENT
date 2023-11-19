import React from 'react'

interface ButtonProps{
    type:  "submit" | "reset" | "button";
    name: string;
}

export const Button: React.FC<ButtonProps> = ({type, name}) => {
  return (
    <>
    <div className="btn-container">
        <button className="bg-blue-600 text-white w-[10%]" type={type}>{name}</button>
    </div>
    </>
  )
}
