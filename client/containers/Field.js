import React from 'react'
import Score from '../components/Score.js'
import Board from '../components/Board.js'

const Field = () => {
  return (
    <div className="field">
      <Score />
      <Board />
    </div>
  )
}

export default Field
