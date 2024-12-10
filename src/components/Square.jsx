import React from 'react'

const Square = ({ number, onClick, style }) => {
  return (
    <div
      onClick={onClick}
      style={style}
      className={`w-full h-full ${number === null ? 'bg-gray-800' : 'bg-indigo-500 hover:bg-indigo-600'} flex items-center justify-center text-white text-6xl cursor-pointer rounded-md transition-transform duration-300`}
    >
      {number}
    </div>
  )
}

export default Square