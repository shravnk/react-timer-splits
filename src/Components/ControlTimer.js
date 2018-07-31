import React, { Component } from 'react'

const ControlTimer = ({startTimer, addSplit, started}) => {
  if (!started) {
    return (
      <button onClick={startTimer}>Start</button>
    )
  } else {
    return (
      <button onClick={addSplit}>Split</button>
    )
  }
}

export default ControlTimer
