import React, { useState, useEffect } from 'react'
import Board from './components/Board'
import Confetti from 'react-confetti'
import { FaGithub } from "react-icons/fa";

const App = () => {
  const [isWon, setIsWon] = useState(false)
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight })
  const [reset, setReset] = useState(false)
  const [moves, setMoves] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (isWon) {
      const timer = setTimeout(() => {
        setIsWon(false)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [isWon])

  const handleReset = () => {
    setReset(true)
    setMoves(0)
    setTimeout(() => setReset(false), 0)
  }

  return (
    <div className='bg-zinc-800 w-full h-screen flex justify-center items-center font-semibold font-[Contrail-one] overflow-hidden gap-10 flex-col '>
      <h1 className='text-3xl text-white font-mono flex gap-4'>8 Puzzle Game <a href="https://github.com/garvittsingla/8-puzzle-react"><FaGithub /></a></h1>
      <h1 className='text-xl text-white font-mono'>Moves: {moves}</h1>
      <Board onWin={() => setIsWon(true)} reset={reset} moves={moves} setMoves={setMoves} />
      {isWon && <Confetti width={windowSize.width} height={windowSize.height} />}
      <button onClick={handleReset} className='bg-red-500 hover:bg-red-600 text-white py-2 px-4 font-mono rounded'>
        Reset
      </button>
    </div>
  )
}

export default App