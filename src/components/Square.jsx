import React from 'react'

const Square = ({ number, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`w-full h-full ${number === null ? 'bg-gray-800' : 'bg-indigo-500 hover:bg-indigo-600'} flex items-center justify-center text-white text-6xl cursor-pointer`}
    >
      {number}
    </div>
  )
}

export default Square