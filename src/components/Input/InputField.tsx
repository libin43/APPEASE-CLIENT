import React from 'react'

interface InputFieldProps {
    name: string;
    value: string;
    onChange: (value: string, name: string) => void
}

export const InputField: React.FC<InputFieldProps> = ({name, value, onChange}) => {

  return (
    <>
    <div className="input-container">
        <input
        className="px-1 focus:border-blue-800 bg-slate-300 border border-black rounded w-[100%] h-10 outline-none"
        type="text"
        name={name}
        value={value}
        onChange={(e)=> onChange(e.target.value, name)}
         />
    </div>
    </>
  )
}
