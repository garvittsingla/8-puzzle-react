import React, { useState, useEffect } from 'react'
import Square from './Square'

const Board = ({ onWin, reset, moves, setMoves }) => {
  const winningPattern = [1, 2, 3, 4, 5, 6, 7, 8, null]
  const [tiles, setTiles] = useState([null, 1, 2, 3, 4, 5, 6, 7, 8])

  useEffect(() => {
    if (reset) {
      randompatterns()
    }
  }, [reset])

  const randompatterns = () => {
    const pattern = [1, 2, 3, 4, 5, 6, 7, 8, null]
    for (let i = pattern.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[pattern[i], pattern[j]] = [pattern[j], pattern[i]]
    }
    setTiles(pattern)
  }

  const canMove = (pattern, tile) => {
    const nullIndex = pattern.indexOf(null)
    const tileIndex = pattern.indexOf(tile)
    if (
      nullIndex === tileIndex - 1 ||
      nullIndex === tileIndex + 1 ||
      nullIndex === tileIndex - 3 ||
      nullIndex === tileIndex + 3
    ) {
      return true
    }
    return false
  }

  const handleClick = (index) => {
    const tile = tiles[index]
    if (canMove(tiles, tile)) {
      const nullIndex = tiles.indexOf(null)
      const newTiles = [...tiles]
      newTiles[nullIndex] = tile
      newTiles[index] = null
      setTiles(newTiles)
      setMoves(moves + 1)
      if (checkWin(newTiles)) {
        onWin()
      }
    }
  }

  const checkWin = (tiles) => {
    for (let i = 0; i < tiles.length; i++) {
      if (tiles[i] !== winningPattern[i]) {
        return false
      }
    }
    return true
  }

  return (
    <div className='h-96 w-96 bg-gray-900 rounded-2xl grid grid-cols-3 relative '>
      {tiles.map((e, index) => (
        <button key={index} onClick={() => handleClick(index)} className='w-full h-full'>
          <Square number={e} />
        </button>
      ))}
    </div>
  )
}

export default Board