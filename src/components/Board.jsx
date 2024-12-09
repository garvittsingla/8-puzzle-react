import React, { useState } from 'react'
import Square from './Square'

const Board = () => {
  const initialPattern = [null, 1, 2, 3, 4, 5, 6, 7, 8]
  const winningPattern = [1, 2, 3, 4, 5, 6, 7, 8,null]
  const [tiles, setTiles] = useState(initialPattern)

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
      checkWin(newTiles, winningPattern);
    }
  }
  const checkWin = (tiles, winningPattern) => {
    for (let i = 0; i < tiles.length; i++) {
        if (tiles[i] != winningPattern[i]) {
            return false;
        }
    }

    return true;
};

  return (
    <div className='h-96 w-96 bg-gray-900 rounded-lg grid grid-cols-3'>
      {tiles.map((e, index) => (
        <button key={index} onClick={() => handleClick(index)} className='w-full h-full'>
          <Square number={e} />
        </button>
      ))}
    </div>
  )
}

export default Board